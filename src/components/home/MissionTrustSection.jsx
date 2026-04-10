import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { homePageAssets } from '../../data/homeAssets.js'

export default function MissionTrustSection({ className = '' }) {
  const { t } = useTranslation('common')
  const { src: missionSrc, alt: missionAlt } = homePageAssets.missionTrust
  const [imgFailed, setImgFailed] = useState(false)
  const showImg = Boolean(missionSrc) && !imgFailed

  return (
    <section
      className={`home-mission ${className}`.trim()}
      aria-labelledby="home-mission-heading"
    >
      <div className="home-mission__inner">
        <div className={`home-mission__visual${showImg ? ' home-mission__visual--media' : ''}`}>
          {showImg ?
            <img
              className="home-mission__visual-img"
              src={missionSrc}
              alt={missionAlt}
              loading="lazy"
              decoding="async"
              onError={() => setImgFailed(true)}
            />
          : null}
          {!showImg ?
            <div className="home-mission__visual-placeholder" aria-hidden="true" />
          : null}
        </div>
        <div className="home-mission__text">
          <h2 id="home-mission-heading" className="home-mission__title">
            {t('home.missionShort.title')}
          </h2>
          <p className="home-mission__lead">{t('home.missionShort.lead')}</p>
          <p className="home-mission__note">{t('home.missionShort.note')}</p>
        </div>
      </div>
    </section>
  )
}
