import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ActionButton from '../ui/ActionButton.jsx'
import { getSeasonalSpotlight } from '../../data/homeSeasonalSpotlight.js'

export default function SeasonalSpotlightSection({ className = '' }) {
  const { t } = useTranslation('common')
  const spotlight = useMemo(() => getSeasonalSpotlight(new Date()), [])
  const [imgFailed, setImgFailed] = useState(false)
  const showSpotlightImg = Boolean(spotlight.image) && !imgFailed

  return (
    <section
      className={`home-spotlight ${className}`.trim()}
      aria-labelledby="home-spotlight-heading"
    >
      <div className="home-spotlight__inner">
        <div
          className={`home-spotlight__visual${showSpotlightImg ? ' home-spotlight__visual--media' : ''}`}
        >
          {showSpotlightImg ?
            <img
              className="home-spotlight__visual-img"
              src={spotlight.image}
              alt={spotlight.imageAlt}
              loading="lazy"
              decoding="async"
              onError={() => setImgFailed(true)}
            />
          : null}
          {!showSpotlightImg ?
            <div className="home-spotlight__visual-fallback" aria-hidden="true">
              <div className="home-spotlight__visual-placeholder">
                <span className="home-spotlight__visual-mark" />
              </div>
            </div>
          : null}
        </div>
        <div className="home-spotlight__content">
          <p className="home-spotlight__eyebrow">{t('home.spotlight.eyebrow')}</p>
          <h2 id="home-spotlight-heading" className="home-spotlight__title">
            {spotlight.title}
          </h2>
          <p className="home-spotlight__desc">{spotlight.description}</p>
          <div className="home-spotlight__actions">
            <ActionButton to={spotlight.hrefLearn} variant="primary">
              {t('home.spotlight.ctaLearn')}
            </ActionButton>
            <ActionButton to={spotlight.hrefPractice} variant="ghost">
              {t('home.spotlight.ctaPractice')}
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  )
}
