import { Link } from 'react-router-dom'
import PathCardVisual from './PathCardVisual.jsx'

export default function PathCard({
  to,
  step,
  title,
  description,
  cta,
  visual,
  imageSrc,
  imageAlt,
  iconSrc,
  visualAria,
}) {
  const mark = String(step).padStart(2, '0')

  return (
    <Link to={to} className={`path-card path-card--${visual}`}>
      <div className="path-card__visual-wrap">
        <span className="path-card__index" aria-hidden="true">
          {mark}
        </span>
        <PathCardVisual
          variant={visual}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          ariaLabel={visualAria}
        />
        {iconSrc ?
          <img className="path-card__icon" src={iconSrc} alt="" loading="lazy" decoding="async" />
        : null}
      </div>
      <div className="path-card__body">
        <h3 className="path-card__title">{title}</h3>
        <p className="path-card__desc">{description}</p>
        <span className="path-card__cta">
          <span className="path-card__cta-label">{cta}</span>
          <span className="path-card__cta-arrow" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
