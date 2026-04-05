import '../../styles/ContentComponents.css'

/**
 * Quiet status / notice strip — calendar notes, build state, gentle reminders.
 */
export default function StatusBox({
  children,
  tone = 'neutral',
  className = '',
}) {
  const toneClass =
    tone === 'calm' ? ' status-box--calm' : tone === 'muted' ? ' status-box--muted' : ''

  return (
    <div
      className={'status-box' + toneClass + (className ? ` ${className}` : '')}
      role="status"
    >
      <p className="status-box__text">{children}</p>
    </div>
  )
}
