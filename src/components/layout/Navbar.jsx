import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, useLocation } from 'react-router-dom'
import { PORTFOLIO_URL } from '../../constants/externalLinks.js'
import { paths } from '../../constants/paths.js'
import LanguageSwitcher from '../LanguageSwitcher.jsx'

function NavDropdown({ id, label, links, menuLabel }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const location = useLocation()

  const hub = links[0]?.to
  const active =
    hub &&
    (location.pathname === hub || (hub !== '/' && location.pathname.startsWith(`${hub}/`)))

  useEffect(() => {
    if (!open) return
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', onDoc)
    return () => document.removeEventListener('pointerdown', onDoc)
  }, [open])

  return (
    <div className="site-nav__dropdown" ref={rootRef}>
      <button
        type="button"
        id={`${id}-trigger`}
        className={'site-nav__trigger' + (active ? ' site-nav__trigger--active' : '')}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={`${id}-menu`}
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <span className="site-nav__trigger-caret" aria-hidden="true">
          ▾
        </span>
      </button>
      {open ? (
        <ul className="site-nav__submenu" id={`${id}-menu`} role="menu" aria-label={menuLabel}>
          {links.map((item) => (
            <li key={item.to} role="none">
              <NavLink
                role="menuitem"
                to={item.to}
                className={({ isActive }) =>
                  'site-nav__sublink' + (isActive ? ' site-nav__sublink--active' : '')
                }
                end={item.to === hub}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default function Navbar() {
  const { t } = useTranslation('common')
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const learnLinks = useMemo(
    () => [
      { to: paths.learn.index, label: t('navLearn.overview') },
      { to: paths.learn.scripture, label: t('navLearn.scripture') },
      { to: paths.learn.teachings, label: t('navLearn.teachings') },
      { to: paths.learn.liturgy, label: t('navLearn.liturgy') },
      { to: paths.learn.churchLifeHistory, label: t('navLearn.churchLifeHistory') },
      { to: paths.learn.churchYear, label: t('navLearn.churchYear') },
    ],
    [t],
  )

  const practiceLinks = useMemo(
    () => [
      { to: paths.practice.index, label: t('navPractice.overview') },
      { to: paths.practice.prayer, label: t('navPractice.prayer') },
      { to: paths.practice.chants, label: t('navPractice.chants') },
      { to: paths.practice.instruments, label: t('navPractice.instruments') },
      { to: paths.practice.language.index, label: t('navPractice.language') },
    ],
    [t],
  )

  const calendarLinks = useMemo(
    () => [
      { to: paths.calendar.index, label: t('navCalendar.overview') },
      { to: paths.calendar.today, label: t('navCalendar.today') },
      { to: paths.calendar.ethiopianMonths, label: t('navCalendar.ethiopianMonths') },
      { to: paths.calendar.fasting, label: t('navCalendar.fasting') },
      { to: paths.calendar.feastsHolyDays, label: t('navCalendar.feastsHolyDays') },
      { to: paths.calendar.seasons, label: t('navCalendar.seasons') },
    ],
    [t],
  )

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to={paths.home} className="site-logo" end>
          <span className="site-logo__text">OrthodoxPath</span>
        </NavLink>

        <div className="site-header__tools">
          <LanguageSwitcher className="site-header__lang" />

          <button
            type="button"
            className="site-nav__burger"
            aria-expanded={mobileOpen}
            aria-controls="site-mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="site-nav__burger-label">
              {mobileOpen ? t('nav.closeMenu') : t('nav.menu')}
            </span>
          </button>

          <div className="site-header__cluster">
            <nav
              key={location.pathname}
              className="site-nav site-nav--desktop"
              aria-label={t('nav.mainLabel')}
            >
              <NavLink
                to={paths.home}
                end
                className={({ isActive }) =>
                  'site-nav__link' + (isActive ? ' site-nav__link--active' : '')
                }
              >
                {t('nav.home')}
              </NavLink>
              <NavLink
                to={paths.startHere}
                className={({ isActive }) =>
                  'site-nav__link' + (isActive ? ' site-nav__link--active' : '')
                }
              >
                {t('nav.startHere')}
              </NavLink>
              <NavDropdown
                id="nav-learn"
                label={t('nav.learn')}
                links={learnLinks}
                menuLabel={t('nav.learn')}
              />
              <NavDropdown
                id="nav-practice"
                label={t('nav.practice')}
                links={practiceLinks}
                menuLabel={t('nav.practice')}
              />
              <NavDropdown
                id="nav-calendar"
                label={t('nav.calendar')}
                links={calendarLinks}
                menuLabel={t('nav.calendar')}
              />
              <NavLink
                to={paths.about}
                className={({ isActive }) =>
                  'site-nav__link' + (isActive ? ' site-nav__link--active' : '')
                }
              >
                {t('nav.about')}
              </NavLink>
            </nav>

            <a
              href={PORTFOLIO_URL}
              className="site-nav__portfolio site-nav__portfolio--desktop"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('nav.portfolio')}
              <span className="site-nav__portfolio-sr">{t('nav.portfolioSr')}</span>
            </a>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="site-nav__mobile" id="site-mobile-nav">
          <nav className="site-nav__mobile-inner" aria-label={t('nav.mobileLabel')}>
            <NavLink
              to={paths.home}
              end
              className={({ isActive }) =>
                'site-nav__mobile-link' + (isActive ? ' site-nav__mobile-link--active' : '')
              }
              onClick={() => setMobileOpen(false)}
            >
              {t('nav.home')}
            </NavLink>
            <NavLink
              to={paths.startHere}
              className={({ isActive }) =>
                'site-nav__mobile-link' + (isActive ? ' site-nav__mobile-link--active' : '')
              }
              onClick={() => setMobileOpen(false)}
            >
              {t('nav.startHere')}
            </NavLink>
            <div className="site-nav__mobile-group">
              <span className="site-nav__mobile-group-label">{t('nav.learn')}</span>
              {learnLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === paths.learn.index}
                  className={({ isActive }) =>
                    'site-nav__mobile-sublink' +
                    (isActive ? ' site-nav__mobile-sublink--active' : '')
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="site-nav__mobile-group">
              <span className="site-nav__mobile-group-label">{t('nav.practice')}</span>
              {practiceLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === paths.practice.index}
                  className={({ isActive }) =>
                    'site-nav__mobile-sublink' +
                    (isActive ? ' site-nav__mobile-sublink--active' : '')
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="site-nav__mobile-group">
              <span className="site-nav__mobile-group-label">{t('nav.calendar')}</span>
              {calendarLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === paths.calendar.index}
                  className={({ isActive }) =>
                    'site-nav__mobile-sublink' +
                    (isActive ? ' site-nav__mobile-sublink--active' : '')
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <NavLink
              to={paths.about}
              className={({ isActive }) =>
                'site-nav__mobile-link' + (isActive ? ' site-nav__mobile-link--active' : '')
              }
              onClick={() => setMobileOpen(false)}
            >
              {t('nav.about')}
            </NavLink>
            <a
              href={PORTFOLIO_URL}
              className="site-nav__mobile-link site-nav__mobile-link--external"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('nav.portfolio')}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
