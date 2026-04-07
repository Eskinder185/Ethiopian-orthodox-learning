/** @param {unknown} links */
export function hasValidExternalLinks(links) {
  if (!links?.length) return false
  return links.some((l) => l?.href && (l.resourceTitle || l.label))
}
