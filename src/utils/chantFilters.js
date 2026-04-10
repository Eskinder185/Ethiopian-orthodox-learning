/**
 * Filter helpers for chant catalog entries (see data/chants/chants.js).
 * User-facing filters: form, primary, major holiday, saint, usage.
 * Season, themes, and confidence remain on entries for search/detail/suggestions only — not applied here.
 */

/** @param {unknown} v */
function asSlug(v) {
  return String(v ?? '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
}

/**
 * @param {string[]} arr
 * @param {string} slug
 */
function arrayHasSlug(arr, slug) {
  if (!slug || slug === 'all') return true
  const target = asSlug(slug)
  return arr.some((x) => asSlug(x) === target)
}

/**
 * @typedef {import('../data/chants/chants.js').ChantEntry} ChantEntry
 */

/**
 * @param {ChantEntry[]} entries
 * @param {'all' | 'mezmur' | 'werb'} form
 */
export function filterByForm(entries, form) {
  if (form === 'all') return entries
  return entries.filter((e) => e.form === form)
}

/**
 * @param {ChantEntry[]} entries
 * @param {'all' | 'major-holiday' | 'mary' | 'saint' | 'liturgical' | 'general'} primary
 */
export function filterByPrimary(entries, primary) {
  if (primary === 'all') return entries
  return entries.filter((e) => e.category.primary === primary)
}

/**
 * @param {ChantEntry[]} entries
 * @param {string} slug — e.g. tinsae, meskel, or "all"
 */
export function filterByMajorHoliday(entries, slug) {
  if (!slug || slug === 'all') return entries
  return entries.filter((e) => arrayHasSlug(e.category.majorHoliday, slug))
}

/**
 * @param {ChantEntry[]} entries
 * @param {string} slug — e.g. fasika, tsige, or "all"
 */
export function filterBySeason(entries, slug) {
  if (!slug || slug === 'all') return entries
  return entries.filter((e) => arrayHasSlug(e.category.season, slug))
}

/**
 * @param {ChantEntry[]} entries
 * @param {string} slug — e.g. praise, resurrection
 */
export function filterByTheme(entries, slug) {
  if (!slug || slug === 'all') return entries
  return entries.filter((e) => arrayHasSlug(e.category.themes, slug))
}

/**
 * @param {ChantEntry[]} entries
 * @param {string} slug — saint id or label slug
 */
export function filterBySaint(entries, slug) {
  if (!slug || slug === 'all') return entries
  return entries.filter((e) => arrayHasSlug(e.category.saints, slug))
}

/**
 * @param {ChantEntry[]} entries
 * @param {string} slug — usage tag
 */
export function filterByUsage(entries, slug) {
  if (!slug || slug === 'all') return entries
  return entries.filter((e) => arrayHasSlug(e.category.usage, slug))
}

/**
 * @param {ChantEntry[]} entries
 * @param {'all' | 'high' | 'medium' | 'low'} confidence
 */
export function filterByConfidence(entries, confidence) {
  if (confidence === 'all') return entries
  return entries.filter((e) => e.category.confidence === confidence)
}

/**
 * @typedef {object} ChantFilterState
 * @property {'all' | 'mezmur' | 'werb'} [form]
 * @property {'all' | 'major-holiday' | 'mary' | 'saint' | 'liturgical' | 'general'} [primary]
 * @property {string} [majorHoliday] — slug or "all"
 * @property {string} [season]
 * @property {string} [theme]
 * @property {string} [saint]
 * @property {string} [usage]
 * @property {'all' | 'high' | 'medium' | 'low'} [confidence]
 */

/** @type {ChantFilterState} */
export const defaultChantFilterState = {
  form: 'all',
  primary: 'all',
  majorHoliday: 'all',
  season: 'all',
  theme: 'all',
  saint: 'all',
  usage: 'all',
  confidence: 'all',
}

/**
 * Apply all filter layers in sequence (AND).
 * @param {ChantEntry[]} entries
 * @param {ChantFilterState} f
 */
export function applyChantFilters(entries, f) {
  const s = { ...defaultChantFilterState, ...f }
  let list = entries
  list = filterByForm(list, s.form ?? 'all')
  list = filterByPrimary(list, s.primary ?? 'all')
  list = filterByMajorHoliday(list, s.majorHoliday ?? 'all')
  list = filterBySaint(list, s.saint ?? 'all')
  list = filterByUsage(list, s.usage ?? 'all')
  return list
}
