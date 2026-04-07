import SectionTitle from './SectionTitle.jsx'
import '../../styles/ContentComponents.css'

/**
 * Secondary support block: calm heading + optional eyebrow + intro + one or more ExternalSourceCard children.
 */
export default function ExternalSourceSupportSection({
  id,
  eyebrow,
  title,
  subtitle,
  intro,
  children,
  className = '',
}) {
  const headingId = id ? `${id}-heading` : 'external-source-support-heading'

  return (
    <section
      className={'external-source-support' + (className ? ` ${className}` : '')}
      id={id}
      aria-labelledby={headingId}
    >
      {eyebrow ? <p className="external-source-support__eyebrow">{eyebrow}</p> : null}
      <SectionTitle id={headingId} title={title} subtitle={subtitle} />
      {intro ? <p className="external-source-support__intro">{intro}</p> : null}
      <div className="external-source-support__cards">{children}</div>
    </section>
  )
}
