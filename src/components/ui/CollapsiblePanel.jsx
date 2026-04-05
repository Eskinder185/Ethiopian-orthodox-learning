import '../../styles/content-patterns.css'

/**
 * Lightweight collapsible region using <details>.
 */
export default function CollapsiblePanel({
  title,
  icon = null,
  defaultOpen = false,
  anchorId = '',
  children,
  className = '',
  summaryClassName = '',
}) {
  return (
    <details
      id={anchorId || undefined}
      className={`collapsible-panel${className ? ` ${className}` : ''}`}
      defaultOpen={defaultOpen}
    >
      <summary className={`collapsible-panel__summary${summaryClassName ? ` ${summaryClassName}` : ''}`}>
        <span className="collapsible-panel__label">
          {icon ? (
            <span className="collapsible-panel__icon" aria-hidden="true">
              {icon}
            </span>
          ) : null}
          {title}
        </span>
      </summary>
      <div className="collapsible-panel__content">{children}</div>
    </details>
  )
}
