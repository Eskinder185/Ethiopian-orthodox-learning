import { useState } from 'react'

/**
 * Path card header art — polished placeholder per `variant`, or `imageSrc` when provided in config.
 */
export default function PathCardVisual({ variant, imageSrc, imageAlt = '', ariaLabel }) {
  const [failed, setFailed] = useState(false)
  const showImg = Boolean(imageSrc) && !failed

  if (showImg) {
    return (
      <div className="path-card-visual path-card-visual--media">
        <img
          className="path-card-visual__img"
          src={imageSrc}
          alt={imageAlt || ''}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      </div>
    )
  }

  return (
    <div
      className={`path-card-visual path-card-visual--placeholder path-card-visual--${variant}`}
      role="img"
      aria-label={ariaLabel}
    >
      <div className="path-card-visual__ph" aria-hidden="true" />
    </div>
  )
}
