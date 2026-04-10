/**
 * UI helpers for chant browse filters (labels from catalog slugs).
 * Season, themes, and confidence stay on entries as metadata only — not exposed as filter chips.
 */

/**
 * @param {string} slug
 */
export function slugToFilterLabel(slug) {
  if (!slug) return ''
  return slug
    .split(/[-_]/)
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : ''))
    .join(' ')
}

/**
 * Collect unique saint and usage slugs from the catalog for filter chips.
 * @param {Array<{ category?: { saints?: string[]; usage?: string[] } }>} entries
 */
export function buildChantFilterChipLists(entries) {
  const saints = new Set()
  const usages = new Set()
  for (const e of entries) {
    for (const s of e.category?.saints ?? []) saints.add(s)
    for (const u of e.category?.usage ?? []) usages.add(u)
  }
  const sort = (a, b) => a.localeCompare(b)
  return {
    saints: [...saints].sort(sort),
    usages: [...usages].sort(sort),
  }
}
