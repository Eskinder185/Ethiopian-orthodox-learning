import { Link } from 'react-router-dom'
import './PagePlaceholder.css'

const defaultSlot = (
  <p>
    This page is not available yet. Use the navigation above to continue, or
    return when the section is published.
  </p>
)

/**
 * Simple article layout: title, intro, optional link list, optional body slot.
 */
export default function PagePlaceholder({
  title,
  intro,
  links = [],
  children,
  slotHeading = 'More',
}) {
  return (
    <article className="page-placeholder">
      <header className="page-placeholder__header">
        <h1 className="page-placeholder__title">{title}</h1>
        {intro ? <p className="page-placeholder__intro">{intro}</p> : null}
      </header>

      {links.length > 0 ? (
        <ul className="page-placeholder__links" role="list">
          {links.map(({ to, label, blurb }) => (
            <li key={to}>
              <Link to={to} className="page-placeholder__card">
                <span className="page-placeholder__card-title">{label}</span>
                {blurb ? (
                  <span className="page-placeholder__card-blurb">{blurb}</span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}

      <section
        className="page-placeholder__slot"
        aria-labelledby={slotHeading ? 'page-placeholder-slot-heading' : undefined}
        aria-label={slotHeading ? undefined : 'Additional information'}
      >
        {slotHeading ? (
          <h2
            id="page-placeholder-slot-heading"
            className="page-placeholder__slot-heading"
          >
            {slotHeading}
          </h2>
        ) : null}
        <div className="page-placeholder__slot-body">
          {children != null ? children : defaultSlot}
        </div>
      </section>
    </article>
  )
}
