import { Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { paths } from '../../../constants/paths.js'
import { getSeasonStory } from '../../../utils/calendarDashboard.js'
import { getVisualForCalendarItem, pickDisplayImage } from '../../../utils/calendarVisualSystem.js'

export default function CalendarSeasonalHubPreview({ state, className = '' }) {
  const { t } = useTranslation('common')
  const story = useMemo(() => getSeasonStory(state), [state])

  const yearProgress = Math.min(
    100,
    Math.round((((state.ethiopianMonth - 1) * 30 + state.ethiopianDay) / (12 * 30 + 6)) * 100),
  )

  const [barWidth, setBarWidth] = useState(0)
  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setBarWidth(yearProgress)
      return undefined
    }
    setBarWidth(0)
    let id2
    const id1 = requestAnimationFrame(() => {
      id2 = requestAnimationFrame(() => setBarWidth(yearProgress))
    })
    return () => {
      cancelAnimationFrame(id1)
      cancelAnimationFrame(id2)
    }
  }, [yearProgress, story.id])

  const vis = useMemo(
    () => getVisualForCalendarItem({ kind: 'seasonStory', seasonStoryId: story.id }),
    [story.id],
  )
  const art = vis ? pickDisplayImage(vis, false) : null
  const glyph = vis?.icon ?? '✦'

  return (
    <section
      className={`cal-hub-season cal-hub-reveal ${className}`.trim()}
      aria-labelledby="cal-hub-season-preview-heading"
    >
      <div className="cal-hub-season__card">
        {art ? (
          <div className="cal-hub-season__visual" aria-hidden="true">
            <img src={art} alt="" className="cal-hub-season__img" loading="lazy" />
            <div className="cal-hub-season__veil" />
          </div>
        ) : (
          <div className="cal-hub-season__visual cal-hub-season__visual--glyph" aria-hidden="true">
            <span className="cal-hub-season__glyph">{glyph}</span>
          </div>
        )}
        <div className="cal-hub-season__copy">
          <p className="cal-hub-season__eyebrow">{t('calendarHub.seasonPreviewEyebrow')}</p>
          <h2 id="cal-hub-season-preview-heading" className="cal-hub-season__title">
            {story.title}
          </h2>
          <p className="cal-hub-season__phase">{story.phase}</p>
          <p className="cal-hub-season__summary">{story.summary}</p>
          <div className="cal-hub-season__progress" role="img" aria-label={t('calendarHub.seasonProgressLabel', { pct: yearProgress })}>
            <div className="cal-hub-season__progress-track">
              <div className="cal-hub-season__progress-fill" style={{ width: `${barWidth}%` }} />
            </div>
          </div>
          <p className="cal-hub-season__next">
            <span className="cal-hub-season__next-label">{t('calendarHub.seasonNextLabel')}</span>
            {story.next}
          </p>
          <aside className="cal-hub-season__habit">
            <span className="cal-hub-season__habit-label">{t('calendarHub.seasonHabitLabel')}</span>
            <p className="cal-hub-season__habit-text">{story.habit}</p>
          </aside>
          <Link to={paths.calendar.seasons} className="btn btn--secondary cal-hub-season__cta">
            {t('calendarHub.seasonPreviewCta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
