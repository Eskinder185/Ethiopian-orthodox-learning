import '../../styles/ContentComponents.css'
import ExternalResourceCard from './ExternalResourceCard.jsx'
import { placeholderCopy } from '../../data/uiCopy.js'

export function hasValidExternalLinks(links) {
  if (!links?.length) return false
  return links.some((l) => l?.href && (l.resourceTitle || l.label))
}

/**
 * Curated outbound resources. Renders nothing when there are no valid links.
 */
export default function ExternalLinksSection({
  title = 'Sources on original websites',
  intro = placeholderCopy.externalResourcesIntro,
  links = [],
  footnote = placeholderCopy.externalResourcesFootnote,
  className = '',
  /** Hide badge + H2 when nested inside another control (e.g. collapsible). */
  suppressHeader = false,
}) {
  if (!hasValidExternalLinks(links)) return null

  const normalized = links.map((item) => ({
    href: item.href,
    resourceTitle: item.resourceTitle || item.label,
    sourceName: item.sourceName,
    description: item.description,
    linkText: item.linkText,
    badgeLabel: item.badgeLabel,
    hostingNote: item.hostingNote,
  }))

  return (
    <section
      className={
        'external-links-section' +
        (suppressHeader ? ' external-links-section--embedded' : '') +
        (className ? ` ${className}` : '')
      }
      aria-labelledby={suppressHeader ? undefined : 'external-links-section-title'}
      aria-label={suppressHeader ? title : undefined}
    >
      {suppressHeader ? null : (
        <div className="external-links-section__head">
          <span className="external-links-section__badge" aria-hidden="true">
            External resources
          </span>
          <h2 id="external-links-section-title" className="external-links-section__title">
            {title}
          </h2>
        </div>
      )}

      <p className="external-links-section__intro">{intro}</p>

      <div className="external-links-section__grid">
        {normalized.map((item, i) => (
          <ExternalResourceCard
            key={item.href + String(i)}
            href={item.href}
            resourceTitle={item.resourceTitle}
            sourceName={item.sourceName}
            description={item.description}
            linkText={item.linkText}
            badgeLabel={item.badgeLabel}
            hostingNote={item.hostingNote}
          />
        ))}
      </div>

      {footnote ? (
        <p className="external-links-section__footnote">{footnote}</p>
      ) : null}
    </section>
  )
}
