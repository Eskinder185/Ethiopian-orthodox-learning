import { useState } from 'react'

/**
 * Liturgical visual — uses `homeAssets.todayChurch` image when available.
 */
export default function TodayChurchVisualPanel({ imageSrc, imageAlt = '', caption, ariaLabel }) {
  const [failed, setFailed] = useState(false)
  const showImg = Boolean(imageSrc) && !failed

  if (showImg) {
    return (
      <figure className="today-visual-panel today-visual-panel--media">
        <div className="today-visual-panel__frame">
          <div className="today-visual-panel__media-inner">
            <img
              className="today-visual-panel__img"
              src={imageSrc}
              alt={imageAlt || ''}
              loading="lazy"
              decoding="async"
              onError={() => setFailed(true)}
            />
            {caption ?
              <div className="today-visual-panel__overlay" aria-hidden="true">
                <span className="today-visual-panel__overlay-text">{caption}</span>
              </div>
            : null}
          </div>
        </div>
      </figure>
    )
  }

  return (
    <div
      className="today-visual-panel today-visual-panel--placeholder"
      role="img"
      aria-label={ariaLabel || caption || ''}
    >
      <div className="today-visual-panel__frame today-visual-panel__frame--ph">
        <div className="today-visual-panel__ph-bg" aria-hidden="true" />
        <div className="today-visual-panel__ph-vignette" aria-hidden="true" />
        <div className="today-visual-panel__ph-inner">
          <span className="today-visual-panel__ph-mark" aria-hidden="true" />
          {caption ?
            <p className="today-visual-panel__ph-caption">{caption}</p>
          : null}
        </div>
      </div>
    </div>
  )
}
