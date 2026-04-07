import { useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Calm sacred preview card: optional image, eyebrow, title, one line, CTA.
 */
export default function HomeChurchDayCard({
  eyebrow,
  title,
  description,
  href,
  ctaLabel,
  image,
  imageAlt = '',
  className = '',
}) {
  const [imgFailed, setImgFailed] = useState(false)
  const showImage = Boolean(image) && !imgFailed

  return (
    <article className={`home-church-card ${className}`.trim()}>
      <div className="home-church-card__media" aria-hidden={!showImage}>
        {showImage ?
          <img
            className="home-church-card__img"
            src={image}
            alt={imageAlt || ''}
            loading="lazy"
            decoding="async"
            onError={() => setImgFailed(true)}
          />
        : <div className="home-church-card__placeholder" />}
      </div>
      <div className="home-church-card__body">
        {eyebrow ?
          <p className="home-church-card__eyebrow">{eyebrow}</p>
        : null}
        <h3 className="home-church-card__title">{title}</h3>
        {description ?
          <p className="home-church-card__desc">{description}</p>
        : null}
        {href && ctaLabel ?
          <Link to={href} className="home-church-card__cta">
            {ctaLabel}
          </Link>
        : null}
      </div>
    </article>
  )
}
