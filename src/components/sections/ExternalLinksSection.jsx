import '../../styles/ContentComponents.css'
import ExternalResourceCard from './ExternalResourceCard.jsx'
import { placeholderCopy } from '../../data/uiCopy.js'

function hasValidLinks(links) {
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
}) {
  if (!hasValidLinks(links)) return null

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
      className={'external-links-section' + (className ? ` ${className}` : '')}
      aria-labelledby="external-links-section-title"
    >
      <div className="external-links-section__head">
        <span className="external-links-section__badge" aria-hidden="true">
          External resources
        </span>
        <h2 id="external-links-section-title" className="external-links-section__title">
          {title}
        </h2>
      </div>

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
