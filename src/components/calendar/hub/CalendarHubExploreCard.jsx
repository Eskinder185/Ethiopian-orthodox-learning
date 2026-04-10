import { Link } from 'react-router-dom'
import { CALENDAR_HUB_EXPLORE_ASSETS } from '../../../data/calendarHubAssets.js'

export default function CalendarHubExploreCard({ to, title, description, category, routeKey, className = '' }) {
  const assets = CALENDAR_HUB_EXPLORE_ASSETS[routeKey] || CALENDAR_HUB_EXPLORE_ASSETS.today
  const accent = assets.accent || 'gold'

  return (
    <Link
      to={to}
      className={`cal-hub-explore-card cal-hub-explore-card--${accent} cal-hub-reveal ${className}`.trim()}
    >
      <span className="cal-hub-explore-card__bg" aria-hidden>
        <img src={assets.image} alt="" className="cal-hub-explore-card__bg-img" loading="lazy" />
        <span className="cal-hub-explore-card__bg-scrim" />
      </span>
      <span className="cal-hub-explore-card__badge">{category}</span>
      <span className="cal-hub-explore-card__icon-wrap" aria-hidden>
        <img src={assets.icon} alt="" className="cal-hub-explore-card__icon" width={40} height={40} loading="lazy" />
      </span>
      <span className="cal-hub-explore-card__body">
        <span className="cal-hub-explore-card__title">{title}</span>
        <span className="cal-hub-explore-card__desc">{description}</span>
        <span className="cal-hub-explore-card__go">→</span>
      </span>
    </Link>
  )
}
