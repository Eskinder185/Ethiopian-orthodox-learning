import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { paths } from '../../../constants/paths.js'
import { getHeroFeaturedFromState } from '../../../data/calendarVisualCatalog.js'
import { getPrimaryCountdown } from '../../../utils/calendarDashboard.js'
import { getMotionPreset } from '../../../utils/calendarVisualSystem.js'
import FeastBadge from './FeastBadge.jsx'

export default function CalendarHero({ state, now, embedOnTodayPage = false }) {
  const { t } = useTranslation('common')
  const countdown = useMemo(() => getPrimaryCountdown(now), [now])
  const featured = useMemo(() => getHeroFeaturedFromState(state), [state])

  const primaryFeast = state.matchingFeasts[0]
  const feastTitle =
    state.matchingFeasts.length > 0
      ? state.matchingFeasts.map((f) => f.name).join(' · ')
      : t('calendarDashboard.hero.noFeast')

  const commemorationLine = primaryFeast
    ? [primaryFeast.name, primaryFeast.geezName].filter(Boolean).join(' · ')
    : `${state.weekdayEthiopianName} · ${state.weekdayEnglish}`

  const countdownLabel =
    countdown && countdown.days === 0
      ? t('calendarDashboard.hero.countdownToday')
      : countdown
        ? t('calendarDashboard.hero.countdownIn', { days: countdown.days })
        : t('calendarDashboard.hero.countdownNone')

  const heroMotion = featured.visual ? getMotionPreset(featured.visual) : { className: 'cal-vis-motion--subtle' }
  const majorHalo = featured.importance === 'major' ? 'cal-vis-halo' : ''

  const majorFeast = featured.importance === 'major'

  return (
    <header
      className={`cal-dash-hero cal-dash-hero--immersive ${heroMotion.className}`.trim()}
      aria-labelledby="cal-dash-hero-heading"
    >
      <div className="cal-dash-hero__bg" aria-hidden />
      <div className="cal-dash-hero__particles" aria-hidden />
      <div className="cal-dash-hero__glow" aria-hidden />

      <div className="cal-dash-hero__shell">
        <div className="cal-dash-hero__art-col">
          <div
            className={`cal-dash-hero__art-frame cal-dash-hero__art-frame--enter ${featured.category?.cardClass ?? ''}`.trim()}
          >
            <div
              className={`cal-dash-hero__art-halo${majorFeast ? ' cal-dash-hero__art-halo--pulse' : ''}`.trim()}
              aria-hidden
            />
            <div className="cal-dash-hero__art-swing">
              {featured.imageSrc ? (
                <div className="cal-dash-hero__art-parallax">
                  <img
                    src={featured.imageSrc}
                    alt={featured.imageAlt || featured.title}
                    className="cal-dash-hero__art-img"
                    loading="eager"
                  />
                </div>
              ) : (
                <div className={`cal-dash-hero__art-placeholder ${featured.category?.patternClass ?? ''}`}>
                  <span className="cal-dash-hero__art-icon" aria-hidden>
                    {featured.visual?.icon ?? featured.category?.icon}
                  </span>
                </div>
              )}
            </div>
            <div className="cal-dash-hero__art-caption">
              <span className="cal-dash-hero__art-caption-title">{featured.title}</span>
              {featured.subtitle ? (
                <span className="cal-dash-hero__art-caption-sub" lang="am">
                  {featured.subtitle}
                </span>
              ) : null}
            </div>
          </div>
        </div>

        <div className="cal-dash-hero__main-col">
          <div className="cal-dash-hero__content">
            <p className="cal-dash-hero__eyebrow">{t('calendarDashboard.hero.eyebrow')}</p>
            <h1 id="cal-dash-hero-heading" className="cal-dash-hero__title">
              {t('calendarDashboard.hero.title')}
            </h1>
            <p className="cal-dash-hero__lead">{t('calendarDashboard.hero.lead')}</p>

            <div className="cal-dash-hero__badge-row">
              <FeastBadge variant="today">{t('calendarDashboard.badges.today')}</FeastBadge>
              {primaryFeast?.moveable ? (
                <FeastBadge variant="movable">{t('calendarDashboard.badges.movable')}</FeastBadge>
              ) : primaryFeast ? (
                <FeastBadge variant="fixed">{t('calendarDashboard.badges.fixed')}</FeastBadge>
              ) : null}
              {majorFeast ? (
                <FeastBadge variant="major" className={majorHalo}>
                  {t('calendarDashboard.badges.major')}
                </FeastBadge>
              ) : null}
            </div>

            <div className="cal-dash-hero__dates cal-dash-hero__dates--layered">
              <div className="cal-dash-hero__date-card cal-dash-hero__date-card--gregorian">
                <span className="cal-dash-hero__date-label">{t('calendarDashboard.hero.gregorian')}</span>
                <p className="cal-dash-hero__date-main">{state.gregorianFormatted}</p>
                <span className="cal-dash-hero__week-pill">{state.weekdayEnglish}</span>
              </div>
              <div className="cal-dash-hero__date-card cal-dash-hero__date-card--ethiopian">
                <span className="cal-dash-hero__date-label">{t('calendarDashboard.hero.ethiopian')}</span>
                <p className="cal-dash-hero__date-main">{state.ethiopianFormatted}</p>
                <span className="cal-dash-hero__geez-pill" lang="am">
                  {state.ethiopianMonthGeez}
                </span>
              </div>
            </div>

            <div className="cal-dash-hero__feast-block">
              <h2 className="cal-dash-hero__h2">{t('calendarDashboard.hero.feastHeading')}</h2>
              <p className="cal-dash-hero__feast-title">{feastTitle}</p>
              <p className="cal-dash-hero__saint-line">
                <span className="cal-dash-hero__saint-label">{t('calendarDashboard.hero.saintHeading')}</span>
                {commemorationLine}
              </p>
            </div>

            <div className="cal-dash-hero__chips">
              <span className="cal-dash-hero__chip cal-dash-hero__chip--fast">{state.primaryFastLabel}</span>
            </div>

            <p className="cal-dash-hero__spirit">
              <span className="cal-dash-hero__spirit-label">{t('calendarDashboard.hero.spiritLabel')}</span>
              {state.weekdayThemeMedium}
            </p>

            {countdown ? (
              <div className="cal-dash-hero__countdown" role="status">
                <div className="cal-dash-hero__countdown-ring" aria-hidden>
                  <svg viewBox="0 0 36 36" className="cal-dash-hero__countdown-svg">
                    <path
                      className="cal-dash-hero__countdown-track"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="cal-dash-hero__countdown-fill"
                      strokeDasharray={`${Math.min(100, Math.max(8, 100 - Math.min(countdown.days, 90)))}, 100`}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="cal-dash-hero__countdown-num">{countdown.days}</span>
                </div>
                <div className="cal-dash-hero__countdown-copy">
                  <p className="cal-dash-hero__countdown-target">{countdown.label}</p>
                  <p className="cal-dash-hero__countdown-meta">{countdown.whenFormatted}</p>
                  <p className="cal-dash-hero__countdown-label">{countdownLabel}</p>
                </div>
              </div>
            ) : null}

            <div className="cal-dash-hero__ctas">
              <a href="#cal-dash-week" className="btn cal-dash-hero__cta cal-dash-hero__cta--primary">
                {t('calendarDashboard.hero.ctaWeek')}
              </a>
              <Link to={paths.calendar.feastsHolyDays} className="btn btn--secondary cal-dash-hero__cta">
                {t('calendarDashboard.hero.ctaFeasts')}
              </Link>
              {embedOnTodayPage ? null : (
                <Link to={paths.calendar.today} className="btn btn--ghost cal-dash-hero__cta">
                  {t('calendarDashboard.hero.ctaTodayPage')}
                </Link>
              )}
            </div>

            <p className="cal-dash-hero__hook">{t('calendarDashboard.hero.dataHook')}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
