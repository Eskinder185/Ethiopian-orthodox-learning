import '../../styles/ContentComponents.css'

export default function InfoBlock({
  title,
  children,
  variant = 'default',
  className = '',
}) {
  const mod =
    variant === 'soft' ? ' info-block--soft' : variant === 'accent' ? ' info-block--soft' : ''

  return (
    <aside
      className={'info-block' + mod + (className ? ` ${className}` : '')}
      role="note"
    >
      {title ? <h3 className="info-block__title">{title}</h3> : null}
      <div className="info-block__body">{children}</div>
    </aside>
  )
}
