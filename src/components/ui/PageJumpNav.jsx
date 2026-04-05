import '../../styles/content-patterns.css'

/**
 * Sticky in-page links (desktop). Pass hrefs with #fragment ids that exist on the page.
 */
export default function PageJumpNav({
  links = [],
  label = 'On this page',
  className = '',
}) {
  if (!links.length) return null

  return (
    <nav
      className={`page-jump-nav${className ? ` ${className}` : ''}`}
      aria-label={label}
    >
      <p className="page-jump-nav__label">{label}</p>
      <ul className="page-jump-nav__list">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="page-jump-nav__link">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
