import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { paths } from '../../../constants/paths.js'

export default function CalendarHubDualCalendar({ state }) {
  const { t } = useTranslation('common')

  return (
    <section className="cal-hub-dual cal-hub-reveal" aria-labelledby="cal-hub-dual-heading">
      <div className="cal-hub-dual__card">
        <h2 id="cal-hub-dual-heading" className="cal-hub-dual__title">
          {t('calendarHub.dualCalendarTitle')}
        </h2>
        <div className="cal-hub-dual__visual" aria-hidden="true">
          <div className="cal-hub-dual__lane cal-hub-dual__lane--civil">
            <span className="cal-hub-dual__lane-label">{t('calendarHub.dualLaneCivil')}</span>
            <span className="cal-hub-dual__lane-pill">{state.gregorianFormatted}</span>
          </div>
          <div className="cal-hub-dual__bridge">
            <span className="cal-hub-dual__arrow">↔</span>
          </div>
          <div className="cal-hub-dual__lane cal-hub-dual__lane--church">
            <span className="cal-hub-dual__lane-label">{t('calendarHub.dualLaneChurch')}</span>
            <span className="cal-hub-dual__lane-pill" lang="am">
              {state.ethiopianFormatted}
            </span>
          </div>
        </div>
        <p className="cal-hub-dual__body">{t('calendarHub.homeLead')}</p>
        <Link to={paths.calendar.ethiopianMonths} className="btn btn--secondary cal-hub-dual__cta">
          {t('calendarHub.dualCta')}
        </Link>
      </div>
    </section>
  )
}
