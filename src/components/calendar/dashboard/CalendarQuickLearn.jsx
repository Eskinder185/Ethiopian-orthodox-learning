import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { paths } from '../../../constants/paths.js'
import {
  getVisualForCalendarItem,
  pickDisplayImage,
  getMotionPreset,
  getBadgeTheme,
} from '../../../utils/calendarVisualSystem.js'

export default function CalendarQuickLearn() {
  const { t } = useTranslation('common')

  const items = [
    {
      key: 'todayFeast',
      to: paths.calendar.today,
      className: 'cal-dash-learn__card--today',
    },
    {
      key: 'month',
      to: paths.calendar.feastsHolyDays,
      className: 'cal-dash-learn__card--month',
    },
    {
      key: 'fasting',
      to: paths.calendar.fasting,
      className: 'cal-dash-learn__card--fast',
    },
    {
      key: 'moveable',
      to: paths.calendar.today,
      className: 'cal-dash-learn__card--moveable',
    },
    {
      key: 'months',
      to: paths.calendar.ethiopianMonths,
      className: 'cal-dash-learn__card--ethmonths',
    },
  ]

  return (
    <section className="cal-dash-learn" aria-labelledby="cal-dash-learn-heading">
      <h2 id="cal-dash-learn-heading" className="cal-dash-learn__title">
        {t('calendarDashboard.quick.title')}
      </h2>
      <p className="cal-dash-learn__sub">{t('calendarDashboard.quick.sub')}</p>
      <div className="cal-dash-learn__grid">
        {items.map((item) => {
          const vis = getVisualForCalendarItem({ kind: 'quickLearn', quickLearnKey: item.key })
          const media = vis ? pickDisplayImage(vis, false) : null
          const motion = vis ? getMotionPreset(vis) : { className: '' }
          const accent = vis ? getBadgeTheme(vis).accentClass : ''
          return (
            <Link
              key={item.key}
              to={item.to}
              className={`cal-dash-learn__card cal-vis-reveal ${item.className} ${motion.className} ${accent}`.trim()}
            >
              {media ? (
                <span className="cal-dash-learn__card-media" aria-hidden>
                  <img src={media} alt="" className="cal-dash-learn__card-media-img" loading="lazy" />
                </span>
              ) : null}
              <span className="cal-dash-learn__card-kicker">{t(`calendarDashboard.quick.cards.${item.key}.kicker`)}</span>
              <span className="cal-dash-learn__card-title">{t(`calendarDashboard.quick.cards.${item.key}.title`)}</span>
              <span className="cal-dash-learn__card-body">{t(`calendarDashboard.quick.cards.${item.key}.body`)}</span>
              <span className="cal-dash-learn__card-go">{t('calendarDashboard.quick.open')}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
