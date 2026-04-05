import '../../styles/ContentComponents.css'
import '../../styles/ui-system.css'

/**
 * One outbound resource: title, named source, clear “external” labeling.
 * Props also support legacy shape: label → resourceTitle, sourceName optional.
 */
export default function ExternalResourceCard({
  resourceTitle,
  sourceName,
  href,
  description,
  linkText = 'Open website',
  label,
  badgeLabel = 'Original source',
  hostingNote,
}) {
  const title = resourceTitle || label
  const source = sourceName || 'External website'

  if (!href || !title) return null

  const defaultHosting =
    'Content lives on the original website only — not copied or stored here. Link opens in a new tab.'

  return (
    <article className="external-resource-card">
      <div className="external-resource-card__head">
        <span className="external-resource-card__badge">{badgeLabel}</span>
        <h3 className="external-resource-card__title">{title}</h3>
      </div>
      <p className="external-resource-card__source">
        <span className="external-resource-card__source-label">Hosted at: </span>
        <span className="external-resource-card__source-name">{source}</span>
      </p>
      {description ? (
        <p className="external-resource-card__desc">{description}</p>
      ) : null}
      <p className="external-resource-card__hosting">
        {hostingNote ?? defaultHosting}
      </p>
      <a
        href={href}
        className="external-resource-card__link text-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkText}
        <span className="external-resource-card__opens"> (opens in new tab)</span>
      </a>
    </article>
  )
}
