/**
 * @param {string} slug
 */
export function formatTagLabel(slug) {
  if (!slug) return ''
  return String(slug)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

/**
 * @param {'major-holiday'|'mary'|'saint'|'liturgical'|'general'} primary
 */
export function formatPrimaryLabel(primary) {
  switch (primary) {
    case 'major-holiday':
      return 'Major holiday'
    case 'mary':
      return 'Mary'
    case 'saint':
      return 'Saint'
    case 'liturgical':
      return 'Liturgical'
    case 'general':
    default:
      return 'General'
  }
}

/**
 * Collect up to `max` display tags from category (feast, saints, themes, season).
 * @param {import('../../../data/chants/chants.js').ChantEntry['category']} category
 * @param {number} [max]
 */
export function pickDisplayTags(category, max = 3) {
  const out = []
  const push = (s) => {
    if (out.length >= max) return
    const t = String(s).trim()
    if (t) out.push(t)
  }
  for (const h of category.majorHoliday) push(h)
  for (const s of category.saints) push(s)
  for (const t of category.themes) push(t)
  for (const s of category.season) push(s)
  return out.slice(0, max)
}
