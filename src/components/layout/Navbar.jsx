import { NavLink } from 'react-router-dom'
import { paths } from '../../constants/paths.js'

const mainNav = [
  { to: paths.home, label: 'Home', end: true },
  { to: paths.learn.index, label: 'Learn' },
  { to: paths.practice.index, label: 'Practice' },
  { to: paths.language.index, label: 'Language' },
  { to: paths.progress.index, label: 'Progress' },
  { to: paths.calendar.index, label: 'Calendar' },
  { to: paths.about, label: 'About' },
]

const PORTFOLIO_URL = 'https://eskinder.dev/'

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to={paths.home} className="site-logo" end>
          <span className="site-logo__text">Orthodox Learning</span>
        </NavLink>
        <div className="site-header__cluster">
          <nav className="site-nav" aria-label="Main navigation">
            {mainNav.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  'site-nav__link' + (isActive ? ' site-nav__link--active' : '')
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <a
            href={PORTFOLIO_URL}
            className="site-nav__portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
            <span className="site-nav__portfolio-sr"> (opens in new tab)</span>
          </a>
        </div>
      </div>
    </header>
  )
}
