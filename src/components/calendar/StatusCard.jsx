import './CalendarComponents.css'

/**
 * Daily or contextual status panel (fasting, feast focus, etc.) — copy from data, not computed dates yet.
 */
export default function StatusCard({
  title,
  eyebrow,
  status,
  variant = 'default',
  children,
}) {
  const cls =
    variant === 'soft' ? 'status-card status-card--soft' : 'status-card'

  return (
    <section className={cls} aria-labelledby={title ? 'status-card-heading' : undefined}>
      {eyebrow ? <span className="status-card__eyebrow">{eyebrow}</span> : null}
      {title ? <h3 className="status-card__title" id="status-card-heading">{title}</h3> : null}
      {status ? <p className="status-card__status">{status}</p> : null}
      {children ? <div className="status-card__body">{children}</div> : null}
    </section>
  )
}
