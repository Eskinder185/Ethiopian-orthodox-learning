import '../../styles/ContentComponents.css'

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  sectionLabel,
  children,
  compact = false,
  className = '',
}) {
  return (
    <header
      className={
        'page-hero' +
        (compact ? ' page-hero--compact' : '') +
        (className ? ` ${className}` : '')
      }
    >
      {sectionLabel ? (
        <p className="page-hero__meta">
          <span className="content-page__category">{sectionLabel}</span>
        </p>
      ) : null}
      {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
      <h1 className="page-hero__title">{title}</h1>
      {subtitle ? <p className="page-hero__subtitle">{subtitle}</p> : null}
      {children ? <div className="page-hero__slot">{children}</div> : null}
    </header>
  )
}
