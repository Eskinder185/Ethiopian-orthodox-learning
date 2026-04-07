import '../../styles/ui-system.css'
import '../../styles/ContentComponents.css'

const BADGE_LABELS = {
  bible: 'Bible',
  pdf: 'PDF',
  audio: 'Audio',
  language: 'Language',
  prayer: 'Prayer',
}

/**
 * Compact outbound resource: title, short description, button CTA, calm “leaving site” note.
 * @param {object} props
 * @param {string} props.title
 * @param {string} [props.description]
 * @param {string} props.href
 * @param {string} [props.buttonLabel]
 * @param {'bible'|'pdf'|'audio'|'language'|'prayer'} [props.variant]
 * @param {string} [props.badge] — overrides variant label when set
 * @param {string} [props.leavingNote]
 */
export default function ExternalSourceCard({
  title,
  description,
  href,
  buttonLabel = 'Open resource',
  variant = 'bible',
  badge,
  leavingNote = 'Opens in a new tab — you leave OrthodoxPath',
}) {
  if (!href?.trim() || !title?.trim()) return null

  const badgeText = (badge && badge.trim()) || BADGE_LABELS[variant] || 'Resource'

  return (
    <article className="external-source-card">
      <div className="external-source-card__head">
        <span className="external-source-card__badge">{badgeText}</span>
        <h3 className="external-source-card__title">{title}</h3>
      </div>
      {description ? <p className="external-source-card__desc">{description}</p> : null}
      <a
        href={href}
        className="btn btn--secondary external-source-card__cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonLabel}
        <span className="visually-hidden"> (opens in new tab)</span>
      </a>
      {leavingNote ? <p className="external-source-card__note">{leavingNote}</p> : null}
    </article>
  )
}
