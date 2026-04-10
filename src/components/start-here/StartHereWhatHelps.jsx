import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { paths } from '../../constants/paths.js'
import { startHereAssets, startHereImageIntrinsic } from '../../data/startHereAssets.js'

const PILLAR_ORDER = ['learn', 'practice', 'calendar']

const PILLAR_ROUTES = {
  learn: paths.learn.index,
  practice: paths.practice.index,
  calendar: paths.calendar.index,
}

const WHAT_HELPS_CARDS = PILLAR_ORDER.map((key) => ({
  key,
  to: PILLAR_ROUTES[key],
  image: startHereAssets.pillarCards[key],
}))

export default function StartHereWhatHelps() {
  const { t } = useTranslation('common')

  return (
    <section className="start-here-helps start-here-block" aria-labelledby="start-helps-heading">
      <h2 id="start-helps-heading" className="start-here-section-title">
        {t('startHere.whatHelps.title')}
      </h2>
      <p className="start-here-section-lead">{t('startHere.whatHelps.lead')}</p>
      <ul className="start-here-helps__grid">
        {WHAT_HELPS_CARDS.map(({ key, to, image }) => (
          <li key={key}>
            <Link to={to} className={`start-here-help-card start-here-help-card--${key}`}>
              <div className="start-here-help-card__thumb-wrap">
                <img
                  className="start-here-help-card__thumb"
                  src={image}
                  alt={t(`startHere.whatHelps.cards.${key}.imageAlt`)}
                  width={startHereImageIntrinsic.pillarCard.width}
                  height={startHereImageIntrinsic.pillarCard.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="start-here-help-card__inner">
                <h3 className="start-here-help-card__title">{t(`startHere.whatHelps.cards.${key}.title`)}</h3>
                <p className="start-here-help-card__desc">{t(`startHere.whatHelps.cards.${key}.desc`)}</p>
                <span className="start-here-help-card__cta">{t(`startHere.whatHelps.cards.${key}.cta`)}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
