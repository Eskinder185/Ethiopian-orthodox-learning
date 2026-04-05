import '../../styles/ContentComponents.css'

export default function DocumentCard({
  title,
  summary,
  category,
  meta,
  children,
  className = '',
}) {
  return (
    <article className={'document-card' + (className ? ` ${className}` : '')}>
      <div className="document-card__row">
        {category ? (
          <span className="document-card__category">{category}</span>
        ) : null}
        {meta ? <span className="document-card__meta">{meta}</span> : null}
      </div>
      <h3 className="document-card__title">{title}</h3>
      {summary ? <p className="document-card__summary">{summary}</p> : null}
      {children ? <div className="document-card__body">{children}</div> : null}
    </article>
  )
}
