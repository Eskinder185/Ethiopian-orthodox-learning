import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { paths } from '../../../constants/paths.js'
import { getSeasonStory } from '../../../utils/calendarDashboard.js'
import { getVisualForCalendarItem, pickDisplayImage, getMotionPreset } from '../../../utils/calendarVisualSystem.js'

export default function CalendarSeasonalStory({ state }) {
  const { t } = useTranslation('common')
  const story = useMemo(() => getSeasonStory(state), [state])
  const storyVis = useMemo(
    () => getVisualForCalendarItem({ kind: 'seasonStory', seasonStoryId: story.id }),
    [story.id],
  )
  const storyArt = pickDisplayImage(storyVis, false)
  const motion = getMotionPreset(storyVis)

  const yearProgress = Math.min(
    100,
    Math.round((((state.ethiopianMonth - 1) * 30 + state.ethiopianDay) / (12 * 30 + 6)) * 100),
  )

  const [progressWidth, setProgressWidth] = useState(0)
  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setProgressWidth(yearProgress)
      return undefined
    }
    setProgressWidth(0)
    let id2
    const id1 = requestAnimationFrame(() => {
      id2 = requestAnimationFrame(() => setProgressWidth(yearProgress))
    })
    return () => {
      cancelAnimationFrame(id1)
      cancelAnimationFrame(id2)
    }
  }, [yearProgress, story.id])

  return (
    <section
      className={`cal-dash-season cal-vis-reveal ${motion.className}`.trim()}
      aria-labelledby="cal-dash-season-heading"
    >
      <div className="cal-dash-season__glow" aria-hidden />
      <div className="cal-dash-season__texture" aria-hidden />
      <div className="cal-dash-season__inner">
        {storyArt ? (
          <div className="cal-dash-season__art" aria-hidden>
            <img src={storyArt} alt="" className="cal-dash-season__art-img" loading="lazy" />
          </div>
        ) : null}
        <p className="cal-dash-season__eyebrow">{t('calendarDashboard.season.eyebrow')}</p>
        <h2 id="cal-dash-season-heading" className="cal-dash-season__title">
          {story.title}
        </h2>
        <p className="cal-dash-season__phase">{story.phase}</p>
        <p className="cal-dash-season__summary">{story.summary}</p>
        <div
          className="cal-dash-season__progress"
          role="img"
          aria-label={t('calendarDashboard.season.progressLabel', { pct: yearProgress })}
        >
          <div className="cal-dash-season__progress-label">{t('calendarDashboard.season.pathLabel')}</div>
          <div className="cal-dash-season__progress-track">
            <div className="cal-dash-season__progress-fill" style={{ width: `${progressWidth}%` }} />
          </div>
        </div>
        <div className="cal-dash-season__rail">
          <div className="cal-dash-season__node cal-dash-season__node--now">
            <span className="cal-dash-season__ring" />
            <span className="cal-dash-season__node-label">{t('calendarDashboard.season.now')}</span>
          </div>
          <div className="cal-dash-season__track" aria-hidden />
          <div className="cal-dash-season__node cal-dash-season__node--next">
            <span className="cal-dash-season__ring cal-dash-season__ring--next" />
            <span className="cal-dash-season__node-label">{t('calendarDashboard.season.next')}</span>
            <span className="cal-dash-season__next-name">{story.next}</span>
          </div>
        </div>
        <div className="cal-dash-season__habit">
          <h3 className="cal-dash-season__habit-title">{t('calendarDashboard.season.habitTitle')}</h3>
          <p>{story.habit}</p>
        </div>
        <Link to={paths.calendar.seasons} className="btn btn--secondary cal-dash-season__cta">
          {t('calendarDashboard.season.cta')}
        </Link>
        <p className="cal-dash-season__hook">{t('calendarDashboard.season.hook')}</p>
      </div>
    </section>
  )
}
