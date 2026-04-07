/**
 * Chant library catalog (mezmur + werb).
 *
 * Data shape (normalized):
 * - type: "chant"
 * - form: "mezmur" | "werb"
 * - category: { primary, majorHoliday[], saints[], themes[], usage[], season[], confidence }
 */
import catalog from './chants.json'

const ALLOWED_FORM = new Set(['mezmur', 'werb'])

const PRIMARY_SET = new Set(['major-holiday', 'mary', 'saint', 'liturgical', 'general'])

/**
 * @typedef {Object} ChantCategory
 * @property {'major-holiday'|'mary'|'saint'|'liturgical'|'general'} primary
 * @property {string[]} majorHoliday
 * @property {string[]} saints
 * @property {string[]} themes
 * @property {string[]} usage
 * @property {string[]} season
 * @property {'high'|'medium'|'low'} confidence
 */

/**
 * @typedef {Object} ChantEntry
 * @property {string} id
 * @property {'chant'} type
 * @property {'mezmur'|'werb'} form
 * @property {string} title
 * @property {string} transliterationTitle
 * @property {string} lyrics
 * @property {string} transliterationLyrics
 * @property {string} youtubeUrl
 * @property {ChantCategory} category
 * @property {string} searchBlob — joined for Fuse / substring search
 * @property {string[]} [searchTerms] legacy optional
 * @property {string} [searchTermsFlat] legacy
 * @property {'beginner'|'intermediate'|'advanced'} [difficulty] legacy
 * @property {string} [practiceTip] legacy
 */

/**
 * @param {unknown} raw
 * @returns {ChantCategory}
 */
function normalizeCategory(raw) {
  const c = raw && typeof raw === 'object' ? /** @type {Record<string, unknown>} */ (raw) : {}
  const strArr = (v) =>
    Array.isArray(v) ? v.filter((x) => typeof x === 'string' && x.trim()).map((x) => x.trim()) : []

  let primary = typeof c.primary === 'string' ? c.primary.trim().toLowerCase() : 'general'
  if (!PRIMARY_SET.has(primary)) primary = 'general'

  const confRaw = typeof c.confidence === 'string' ? c.confidence.trim().toLowerCase() : ''
  const confidence =
    confRaw === 'high' || confRaw === 'medium' || confRaw === 'low' ? confRaw : 'medium'

  return {
    primary: /** @type {ChantCategory['primary']} */ (primary),
    majorHoliday: strArr(c.majorHoliday).map((s) => s.toLowerCase()),
    saints: strArr(c.saints).map((s) => s.toLowerCase()),
    themes: strArr(c.themes).map((s) => s.toLowerCase()),
    usage: strArr(c.usage).map((s) => s.toLowerCase()),
    season: strArr(c.season).map((s) => s.toLowerCase()),
    confidence: /** @type {'high'|'medium'|'low'} */ (confidence),
  }
}

/**
 * @param {ChantEntry} entry
 */
function buildSearchBlob(entry) {
  const cat = entry.category
  const parts = [
    entry.id,
    entry.title,
    entry.transliterationTitle,
    ...cat.majorHoliday,
    ...cat.saints,
    ...cat.themes,
    ...cat.usage,
    ...cat.season,
  ]
  return parts.filter(Boolean).join('\u0000')
}

/**
 * @param {unknown} raw
 * @param {number} index
 * @returns {ChantEntry | null}
 */
function normalizeEntry(raw, index) {
  if (!raw || typeof raw !== 'object') return null
  const o = /** @type {Record<string, unknown>} */ (raw)

  const str = (v) => (typeof v === 'string' ? v : '')
  const strArr = (v) =>
    Array.isArray(v) ? v.filter((x) => typeof x === 'string' && x.trim()).map((x) => x.trim()) : []

  const id = typeof o.id === 'string' && o.id.trim() ? o.id.trim() : `entry-${index}`

  const rawType = typeof o.type === 'string' ? o.type.trim().toLowerCase() : ''
  let form = ''
  if (rawType === 'chant') {
    form = typeof o.form === 'string' ? o.form.trim().toLowerCase() : ''
  } else if (rawType === 'mezmur' || rawType === 'werb') {
    form = rawType
  }
  if (!ALLOWED_FORM.has(form)) return null

  const searchTerms = strArr(o.searchTerms)
  const searchTermsFlat = searchTerms.join(' ')

  const rawDiff = typeof o.difficulty === 'string' ? o.difficulty.trim().toLowerCase() : ''
  const difficulty =
    rawDiff === 'beginner' || rawDiff === 'intermediate' || rawDiff === 'advanced'
      ? /** @type {'beginner'|'intermediate'|'advanced'} */ (rawDiff)
      : undefined

  const practiceTip = o.practiceTip != null ? str(o.practiceTip) : ''

  const category = normalizeCategory(o.category)

  /** @type {ChantEntry} */
  const entry = {
    id,
    type: 'chant',
    form: /** @type {'mezmur'|'werb'} */ (form),
    title: str(o.title) || 'Untitled',
    transliterationTitle: str(o.transliterationTitle),
    lyrics: str(o.lyrics),
    transliterationLyrics: str(o.transliterationLyrics),
    youtubeUrl: str(o.youtubeUrl),
    category,
    searchBlob: '',
    searchTerms: searchTerms.length ? searchTerms : undefined,
    searchTermsFlat,
    difficulty,
    practiceTip: practiceTip || undefined,
  }

  entry.searchBlob = buildSearchBlob(entry)

  return entry
}

let _cached = null

/**
 * Normalized chant entries from the static JSON import.
 * @returns {ChantEntry[]}
 */
export function getChantEntries() {
  if (_cached) return _cached
  const list = Array.isArray(catalog) ? catalog : []
  _cached = list.map(normalizeEntry).filter(Boolean)
  return _cached
}

/**
 * @returns {boolean}
 */
export function hasChantData() {
  return getChantEntries().length > 0
}
