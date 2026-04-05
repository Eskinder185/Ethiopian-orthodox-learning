/**
 * Calm page-level notice with optional title — styles in src/styles/ui-system.css (loaded globally).
 */
export default function InfoBanner({
  title,
  tone = 'calm',
  children,
  className = '',
}) {
  const toneClass =
    tone === 'muted' ? ' info-banner--muted' : tone === 'calm' ? ' info-banner--calm' : ''

  return (
    <div
      role="status"
      className={`info-banner${toneClass}${className ? ` ${className}` : ''}`}
    >
      {title ? <p className="info-banner__title">{title}</p> : null}
      <div className="info-banner__text">{children}</div>
    </div>
  )
}
