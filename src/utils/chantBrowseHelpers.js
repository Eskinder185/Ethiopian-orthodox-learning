import { applyChantFilters, defaultChantFilterState } from './chantFilters.js'

/** Chants shown per page before “Load more” */
export const BROWSE_PAGE_SIZE = 12

/** Max pool size for featured ordering (for load-more within Featured) */
export const FEATURED_POOL_MAX = 60

const CONF_RANK = { high: 0, medium: 1, low: 2 }

/**
 * True when search or any category refinement beyond form-only is active.
 * Form (mezmur/werb) alone still allows Featured tab.
 * @param {import('./chantFilters.js').ChantFilterState} filters
 * @param {string} query
 */
export function hasBrowseRefinement(filters, query) {
  if (query.trim().length > 0) return true
  const f = { ...defaultChantFilterState, ...filters }
  const d = defaultChantFilterState
  return (
    f.primary !== d.primary ||
    f.majorHoliday !== d.majorHoliday ||
    f.saint !== d.saint ||
    f.usage !== d.usage
  )
}

/**
 * Filters used only to narrow Featured pool (form + base defaults).
 * @param {import('./chantFilters.js').ChantFilterState} filters
 */
export function filtersForFeaturedPool(filters) {
  return {
    ...defaultChantFilterState,
    form: filters.form ?? 'all',
  }
}

/**
 * Curated list: confidence first, then round-robin by primary for variety.
 * @param {import('../data/chants/chants.js').ChantEntry[]} entries
 * @param {number} [maxTotal]
 */
export function buildFeaturedChantList(entries, maxTotal = FEATURED_POOL_MAX) {
  const primaries = ['major-holiday', 'mary', 'saint', 'liturgical', 'general']
  const pool = [...entries].sort((a, b) => {
    const ra = CONF_RANK[a.category.confidence] ?? 2
    const rb = CONF_RANK[b.category.confidence] ?? 2
    if (ra !== rb) return ra - rb
    return (a.transliterationTitle || a.title).localeCompare(b.transliterationTitle || b.title)
  })
  const buckets = new Map(primaries.map((k) => [k, []]))
  for (const e of pool) {
    const p = primaries.includes(e.category.primary) ? e.category.primary : 'general'
    buckets.get(p).push(e)
  }
  const out = []
  while (out.length < maxTotal) {
    let added = false
    for (const p of primaries) {
      const b = buckets.get(p)
      if (b.length > 0 && out.length < maxTotal) {
        out.push(b.shift())
        added = true
      }
    }
    if (!added) break
  }
  return out
}

/**
 * @param {import('../data/chants/chants.js').ChantEntry[]} entries
 * @param {import('./chantFilters.js').ChantFilterState} filters
 */
export function getFeaturedPool(entries, filters) {
  const narrowed = applyChantFilters(entries, filtersForFeaturedPool(filters))
  return buildFeaturedChantList(narrowed, FEATURED_POOL_MAX)
}
