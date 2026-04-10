import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { paths } from '../../../constants/paths.js'
import { getPrimaryCountdown } from '../../../utils/calendarDashboard.js'

export default function CalendarHubTodaySnapshot({ state, now, className = '' }) {
  const { t } = useTranslation('common')
  const countdown = useMemo(() => getPrimaryCountdown(now), [now])

  const nextFeastLabel = useMemo(() => {
    if (state.matchingFeasts?.length) {
      return state.matchingFeasts.map((f) => f.name).join(' · ')
    }
    if (countdown) {
      return countdown.label
    }
    return t('calendarHub.statsNoFeast')
  }, [state.matchingFeasts, countdown, t])

  return (
    <section
      className={`cal-hub-stats cal-hub-reveal ${className}`.trim()}
      aria-labelledby="cal-hub-stats-heading"
    >
      <div className="cal-hub-stats__head">
        <h2 id="cal-hub-stats-heading" className="cal-hub-stats__title">
          {t('calendarHub.snapshotHeading')}
        </h2>
        <Link to={paths.calendar.today} className="cal-hub-stats__link">
          {t('calendarHub.snapshotCta')} →
        </Link>
      </div>
      <div className="cal-hub-stats__grid">
        <article className="cal-hub-stat cal-hub-stat--featured">
          <span className="cal-hub-stat__icon" aria-hidden="true">
            ◎
          </span>
          <h3 className="cal-hub-stat__label">{t('calendarHub.statsToday')}</h3>
          <p className="cal-hub-stat__value">{state.gregorianFormatted}</p>
          <p className="cal-hub-stat__meta" lang="am">
            {state.ethiopianFormatted}
          </p>
        </article>
        <article className="cal-hub-stat">
          <span className="cal-hub-stat__icon" aria-hidden="true">
            ✧
          </span>
          <h3 className="cal-hub-stat__label">{t('calendarHub.statsTheme')}</h3>
          <p className="cal-hub-stat__value cal-hub-stat__value--clamp">{state.weekdayThemeShort}</p>
        </article>
        <article className="cal-hub-stat">
          <span className="cal-hub-stat__icon" aria-hidden="true">
            ◇
          </span>
          <h3 className="cal-hub-stat__label">{t('calendarHub.statsFast')}</h3>
          <p className="cal-hub-stat__value">{state.primaryFastLabel}</p>
        </article>
        <article className="cal-hub-stat">
          <span className="cal-hub-stat__icon" aria-hidden="true">
            ✦
          </span>
          <h3 className="cal-hub-stat__label">{t('calendarHub.statsNext')}</h3>
          <p className="cal-hub-stat__value cal-hub-stat__value--clamp">{nextFeastLabel}</p>
          {countdown && countdown.days > 0 ? (
            <p className="cal-hub-stat__meta">
              {t('calendarHub.statsCountdownMeta', { days: countdown.days })}
            </p>
          ) : null}
        </article>
      </div>
    </section>
  )
}
