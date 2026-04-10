import { useTranslation } from 'react-i18next'
import { startHereFirstVisitIds } from '../../content/startHereContent.js'
import { startHereAssets, startHereImageIntrinsic } from '../../data/startHereAssets.js'

export default function FirstVisitGuide() {
  const { t } = useTranslation('common')

  return (
    <section className="start-here-visit start-here-block" aria-labelledby="start-visit-heading">
      <div className="start-here-visit__layout">
        <figure className="start-here-visit__figure">
          <img
            className="start-here-visit__img"
            src={startHereAssets.firstVisitGuide}
            alt={t('startHere.firstVisit.imageAlt')}
            width={startHereImageIntrinsic.firstVisit.width}
            height={startHereImageIntrinsic.firstVisit.height}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="start-here-visit__main">
          <h2 id="start-visit-heading" className="start-here-section-title">
            {t('startHere.firstVisit.title')}
          </h2>
          <p className="start-here-section-lead start-here-visit__lead">{t('startHere.firstVisit.lead')}</p>
          <ul className="start-here-visit__list">
            {startHereFirstVisitIds.map((id) => (
              <li key={id} className="start-here-visit-card">
                <span className="start-here-visit-card__mark" aria-hidden="true" />
                <div>
                  <h3 className="start-here-visit-card__title">{t(`startHere.firstVisit.items.${id}.title`)}</h3>
                  <p className="start-here-visit-card__desc">{t(`startHere.firstVisit.items.${id}.desc`)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
