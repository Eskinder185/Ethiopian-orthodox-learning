import { Link } from 'react-router-dom'
import './CalendarCards.css'

export default function CalendarOverviewCard({ to, title, description, category }) {
  return (
    <Link to={to} className="cal-overview-card">
      {category ? <span className="cal-overview-card__cat">{category}</span> : null}
      <h3 className="cal-overview-card__title">{title}</h3>
      <p className="cal-overview-card__desc">{description}</p>
      <span className="cal-overview-card__arrow" aria-hidden="true">
        →
      </span>
    </Link>
  )
}
