import { useState } from 'react'

/**
 * Hero media: image, video, or designed placeholder. Decorative layers are aria-hidden.
 */

export default function HeroVisual({
  heroImageSrc,
  heroVideoSrc,
  heroImageAlt = '',
  captionText,
  ariaLabel,
}) {
  const [imgFailed, setImgFailed] = useState(false)
  const showHeroImg = Boolean(heroImageSrc) && !imgFailed && !heroVideoSrc

  const media =
    heroVideoSrc ?
      <video
        className="hero-visual__media-el"
        src={heroVideoSrc}
        poster={heroImageSrc && !imgFailed ? heroImageSrc : undefined}
        controls
        playsInline
        preload="metadata"
      />
    : showHeroImg ?
      <img
        className="hero-visual__media-el hero-visual__media-el--img"
        src={heroImageSrc}
        alt={heroImageAlt}
        loading="eager"
        decoding="async"
        onError={() => setImgFailed(true)}
      />
    : null

  if (media) {
    return (
      <div className="hero-visual hero-visual--media">
        <div className="hero-visual__chrome">
          <div className="hero-visual__frame">
            <div className="hero-visual__media-wrap">{media}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="hero-visual hero-visual--placeholder" aria-label={ariaLabel}>
      <div className="hero-visual__chrome">
        <div className="hero-visual__frame hero-visual__frame--placeholder">
          <div className="hero-visual__placeholder" aria-hidden="true">
            <div className="hero-visual__placeholder-bg" />
            <div className="hero-visual__placeholder-vignette" />
            <div className="hero-visual__placeholder-inner">
              <span className="hero-visual__mark" />
              <p className="hero-visual__caption">{captionText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
