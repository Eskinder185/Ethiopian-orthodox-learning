import { Link } from 'react-router-dom'
import '../../styles/ContentComponents.css'

export default function PracticeCard({
  title,
  description,
  practiceType,
  to,
  className = '',
}) {
  return (
    <Link
      to={to}
      className={'practice-card' + (className ? ` ${className}` : '')}
    >
      {practiceType ? (
        <span className="practice-card__type">{practiceType}</span>
      ) : null}
      <h3 className="practice-card__title">{title}</h3>
      {description ? (
        <p className="practice-card__desc">{description}</p>
      ) : null}
    </Link>
  )
}
