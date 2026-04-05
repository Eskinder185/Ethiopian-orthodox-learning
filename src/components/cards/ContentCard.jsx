import { Link } from 'react-router-dom'
import '../../styles/ContentComponents.css'

export default function ContentCard({
  title,
  description,
  category,
  to,
  href,
  external,
  children,
  className = '',
}) {
  const cls =
    'content-card' +
    (to || href ? ' content-card--interactive' : '') +
    (className ? ` ${className}` : '')

  const inner = (
    <>
      {category ? <span className="content-card__category">{category}</span> : null}
      <h3 className="content-card__title">{title}</h3>
      {description ? <p className="content-card__desc">{description}</p> : null}
      {children}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {inner}
      </a>
    )
  }

  return <div className={cls}>{inner}</div>
}
