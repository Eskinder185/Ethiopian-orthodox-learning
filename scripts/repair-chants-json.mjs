/**
 * Repairs src/data/chants/chants.json:
 * - If the file has trailing non-JSON (e.g. pasted JS), keeps only the first top-level JSON array.
 * - Ensures each entry has "type": "mezmur" | "werb".
 * Run: node scripts/repair-chants-json.mjs
 */
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const root = dirname(fileURLToPath(import.meta.url))
const path = join(root, '../src/data/chants/chants.json')

function stripTrailingCommas(str) {
  let out = str
  let prev
  do {
    prev = out
    out = out.replace(/,(\s*[}\]])/g, '$1')
  } while (out !== prev)
  return out
}

function tryParseJson(str) {
  try {
    return JSON.parse(str)
  } catch {
    return null
  }
}

function extractFirstJsonArray(str) {
  const start = str.indexOf('[')
  if (start < 0) return null
  let depth = 0
  let inString = false
  let escape = false
  for (let i = start; i < str.length; i++) {
    const c = str[i]
    if (inString) {
      if (escape) escape = false
      else if (c === '\\') escape = true
      else if (c === '"') inString = false
      continue
    }
    if (c === '"') {
      inString = true
      continue
    }
    if (c === '{' || c === '[') depth++
    if (c === '}' || c === ']') {
      depth--
      if (depth === 0) return str.slice(start, i + 1)
    }
  }
  return null
}

const raw = readFileSync(path, 'utf8')
let data = tryParseJson(raw)

if (!data) {
  const normalized = stripTrailingCommas(raw.replace(/^\uFEFF/, ''))
  data = tryParseJson(normalized)
  if (data) console.warn('Recovered: removed BOM and/or trailing commas.')
}

if (!data) {
  const extracted =
    extractFirstJsonArray(raw) ||
    extractFirstJsonArray(stripTrailingCommas(raw.replace(/^\uFEFF/, '')))
  if (!extracted) {
    console.error('Could not parse JSON and could not find a root array.')
    process.exit(1)
  }
  try {
    data = JSON.parse(extracted)
  } catch {
    data = JSON.parse(stripTrailingCommas(extracted))
  }
  console.warn('Recovered: file had extra content after the first JSON array; trimmed.')
}

if (!Array.isArray(data)) {
  console.error('Root JSON must be an array.')
  process.exit(1)
}

const fixed = data.map((e) => {
  const type = e.type === 'werb' ? 'werb' : 'mezmur'
  return { ...e, type }
})

writeFileSync(path, JSON.stringify(fixed, null, 2), 'utf8')
console.log('OK:', fixed.length, 'chant entries written to', path)
