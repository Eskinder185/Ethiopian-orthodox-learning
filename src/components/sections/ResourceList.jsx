import { Link } from 'react-router-dom'
import '../../styles/ContentComponents.css'
import '../../styles/ui-system.css'

/**
 * items: { label, to?, href?, description?, kind? }
 * Use `to` for in-app routes, `href` for external URLs.
 */
export default function ResourceList({
  title = 'Related resources',
  items = [],
  className = '',
}) {
  if (!items.length) return null

  return (
    <nav
      className={'resource-list' + (className ? ` ${className}` : '')}
      aria-label={title}
    >
      <h2 className="resource-list__title">{title}</h2>
      <ul className="resource-list__list" role="list">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`}>
            <div className="resource-list__item">
              {item.to ? (
                <Link to={item.to} className="resource-list__link text-link">
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="resource-list__link text-link"
                  {...(item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {item.label}
                </a>
              )}
              {item.description ? (
                <span className="resource-list__desc">{item.description}</span>
              ) : null}
              {item.kind ? (
                <span className="resource-list__tag">{item.kind}</span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}
