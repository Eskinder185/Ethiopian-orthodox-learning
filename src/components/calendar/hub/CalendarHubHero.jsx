import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { paths } from '../../../constants/paths.js'
import { getSeasonStory, getPrimaryCountdown } from '../../../utils/calendarDashboard.js'
import { CALENDAR_HUB_HERO_ART } from '../../../data/calendarHubAssets.js'

export default function CalendarHubHero({ state, now }) {
  const { t } = useTranslation('common')
  const story = useMemo(() => getSeasonStory(state), [state])
  const countdown = useMemo(() => getPrimaryCountdown(now), [now])

  return (
    <header className="cal-hub-hero" aria-labelledby="cal-hub-hero-heading">
      <div className="cal-hub-hero__bg" aria-hidden />
      <div className="cal-hub-hero__glow" aria-hidden />
      <div className="cal-hub-hero__pattern" aria-hidden />

      <div className="cal-hub-hero__shell">
        <div className="cal-hub-hero__copy">
          <p className="cal-hub-hero__eyebrow">{t('calendarHub.eyebrow')}</p>
          <h1 id="cal-hub-hero-heading" className="cal-hub-hero__title">
            {t('calendarHub.title')}
          </h1>
          <p className="cal-hub-hero__intro">{t('calendarHub.intro')}</p>

          <div className="cal-hub-hero__chips" role="list">
            <span className="cal-hub-hero__chip cal-hub-hero__chip--today" role="listitem">
              <span className="cal-hub-hero__chip-label">{t('calendarHub.heroChipToday')}</span>
              <span className="cal-hub-hero__chip-value">{state.gregorianFormatted}</span>
            </span>
            <span className="cal-hub-hero__chip" role="listitem">
              <span className="cal-hub-hero__chip-label">{t('calendarHub.heroChipChurch')}</span>
              <span className="cal-hub-hero__chip-value">{state.ethiopianFormatted}</span>
            </span>
            <span className="cal-hub-hero__chip cal-hub-hero__chip--season" role="listitem">
              <span className="cal-hub-hero__chip-label">{t('calendarHub.heroChipSeason')}</span>
              <span className="cal-hub-hero__chip-value">{story.title}</span>
            </span>
            {countdown ? (
              <span className="cal-hub-hero__chip cal-hub-hero__chip--next" role="listitem">
                <span className="cal-hub-hero__chip-label">{t('calendarHub.heroChipNext')}</span>
                <span className="cal-hub-hero__chip-value">
                  {countdown.days === 0
                    ? t('calendarHub.heroChipNow')
                    : t('calendarHub.heroChipCountdown', { label: countdown.label, days: countdown.days })}
                </span>
              </span>
            ) : null}
          </div>

          <div className="cal-hub-hero__actions">
            <Link to={paths.calendar.today} className="btn btn--primary cal-hub-hero__btn cal-hub-hero__btn--primary">
              {t('calendarHub.heroCtaPrimary')}
            </Link>
            <Link
              to={paths.calendar.ethiopianMonths}
              className="btn btn--secondary cal-hub-hero__btn"
            >
              {t('calendarHub.heroCtaSecondary')}
            </Link>
            <a href="#calendar-explore" className="btn btn--ghost cal-hub-hero__btn">
              {t('calendarHub.heroCtaExplore')}
            </a>
          </div>
        </div>

        <div className="cal-hub-hero__art" aria-hidden>
          <div className="cal-hub-hero__art-frame">
            <img
              src={CALENDAR_HUB_HERO_ART}
              alt=""
              className="cal-hub-hero__art-img"
              loading="eager"
              decoding="async"
            />
            <div className="cal-hub-hero__art-veil" />
            <div className="cal-hub-hero__art-halo" />
          </div>
        </div>
      </div>
    </header>
  )
}
