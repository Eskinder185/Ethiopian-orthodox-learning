import '../../styles/ContentComponents.css'

export default function SectionTitle({
  title,
  subtitle,
  id,
  className = '',
}) {
  return (
    <div className={'section-title' + (className ? ` ${className}` : '')}>
      <h2 className="section-title__label" id={id}>
        {title}
      </h2>
      {subtitle ? <p className="section-title__subtitle">{subtitle}</p> : null}
    </div>
  )
}
