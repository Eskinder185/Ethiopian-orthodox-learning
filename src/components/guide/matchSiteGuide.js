/**
 * Simple keyword / phrase matching for the rules-based site guide.
 * Upgrade later by swapping this module (e.g. fuzzy match, embeddings).
 */

function normalize(s) {
  return String(s)
    .toLowerCase()
    .replace(/['']/g, "'")
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * @param {string} rawInput
 * @param {Array<{ keywords: string[] }>} entries
 * @returns {{ entry: object, score: number } | null}
 */
export function matchSiteGuideQuery(rawInput, entries) {
  const q = normalize(rawInput)
  if (!q) return null

  let best = null
  let bestScore = 0

  for (const entry of entries) {
    const score = scoreEntry(q, entry.keywords ?? [])
    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  }

  if (!best || bestScore < 1) return null
  return { entry: best, score: bestScore }
}

function scoreEntry(queryNorm, keywords) {
  let score = 0
  for (const kw of keywords) {
    const k = normalize(kw)
    if (!k) continue
    if (queryNorm.includes(k)) {
      score += 2 + Math.min(k.length / 24, 2.5)
    }
  }
  return score
}
