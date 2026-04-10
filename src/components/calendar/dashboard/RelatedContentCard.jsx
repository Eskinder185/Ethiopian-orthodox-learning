import { Link } from 'react-router-dom'
import { getVisualForCalendarItem, pickDisplayImage, getMotionPreset, getBadgeTheme } from '../../../utils/calendarVisualSystem.js'

export default function RelatedContentCard({ to, label, hint, linkId, className = '' }) {
  const vis = linkId ? getVisualForCalendarItem({ kind: 'related', linkId }) : null
  const thumb = vis ? pickDisplayImage(vis, false) : null
  const motion = vis ? getMotionPreset(vis) : { className: 'cal-vis-motion--subtle' }
  const accent = vis ? getBadgeTheme(vis).accentClass : ''
  const hasVisual = Boolean(vis)

  return (
    <Link
      to={to}
      className={`cal-related-card cal-vis-reveal${hasVisual ? ' cal-related-card--visual' : ''} ${motion.className} ${accent} ${className}`.trim()}
    >
      {vis ? (
        <span className="cal-related-card__thumb" aria-hidden>
          {thumb ? (
            <img src={thumb} alt="" className="cal-related-card__thumb-img" loading="lazy" />
          ) : (
            <span className="cal-related-card__thumb-fallback">{vis.icon}</span>
          )}
        </span>
      ) : null}
      <span className="cal-related-card__label">{label}</span>
      {hint ? <span className="cal-related-card__hint">{hint}</span> : null}
    </Link>
  )
}
