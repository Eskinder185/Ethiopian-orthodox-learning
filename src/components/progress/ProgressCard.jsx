import { Link } from 'react-router-dom'

export default function ProgressCard({
  title,
  description,
  to,
  badge = 'Practice area',
}) {
  return (
    <Link to={to} className="progress-card">
      <span className="progress-card__badge">{badge}</span>
      <h3 className="progress-card__title">{title}</h3>
      <p className="progress-card__desc">{description}</p>
      <span className="progress-card__cta">Open →</span>
    </Link>
  )
}
