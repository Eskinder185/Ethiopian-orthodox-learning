import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { learnHubPathCardOrder } from '../../data/learnHubPageData.js'
import SacredImageSlot from '../media/SacredImageSlot.jsx'
import LearnRevealSection from './LearnRevealSection.jsx'

function PathIcon({ name }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' }
  switch (name) {
    case 'scripture':
      return (
        <svg viewBox="0 0 48 48" className="learn-path-card__glyph" aria-hidden="true">
          <path {...common} d="M14 10h26v34H14zM14 10v34M22 18h14M22 26h14M22 34h10" />
          <path {...common} d="M10 14h4v30H10z" opacity="0.5" />
        </svg>
      )
    case 'teachings':
      return (
        <svg viewBox="0 0 48 48" className="learn-path-card__glyph" aria-hidden="true">
          <circle {...common} cx="24" cy="22" r="10" />
          <path {...common} d="M16 40c2-6 6-8 8-8h8c2 0 6 2 8 8" />
        </svg>
      )
    case 'liturgy':
      return (
        <svg viewBox="0 0 48 48" className="learn-path-card__glyph" aria-hidden="true">
          <path {...common} d="M24 6v36M18 12h12M16 36h16" />
          <path {...common} d="M12 20h8M28 20h8M12 28h24" opacity="0.65" />
        </svg>
      )
    case 'churchLifeHistory':
      return (
        <svg viewBox="0 0 48 48" className="learn-path-card__glyph" aria-hidden="true">
          <path {...common} d="M10 38V18l8-6 8 6 8-6 8 6v20" />
          <path {...common} d="M10 38h28" />
          <circle cx="24" cy="12" r="2" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'churchYear':
      return (
        <svg viewBox="0 0 48 48" className="learn-path-card__glyph" aria-hidden="true">
          <circle {...common} cx="24" cy="24" r="16" />
          <path {...common} d="M24 14v10l7 7" />
        </svg>
      )
    default:
      return null
  }
}

export default function LearnPathCards() {
  const { t } = useTranslation('common')

  return (
    <LearnRevealSection id="learn-paths" className="learn-paths" aria-labelledby="learn-paths-heading">
      <div className="learn-paths__head">
        <h2 id="learn-paths-heading" className="learn-paths__title">
          {t('learnHub.pathsSection.title')}
        </h2>
        <p className="learn-paths__subtitle">{t('learnHub.pathsSection.subtitle')}</p>
      </div>
      <ul className="learn-paths__grid">
        {learnHubPathCardOrder.map(({ key, to, imageKey }) => (
          <li key={key} className="learn-paths__cell">
            <Link to={to} className={`learn-path-card learn-path-card--${key}`}>
              <div className="learn-path-card__visual">
                <SacredImageSlot
                  imageKey={imageKey}
                  className="learn-path-card__media"
                  fallback={
                    <div className="learn-path-card__icon-fallback">
                      <PathIcon name={key} />
                    </div>
                  }
                />
              </div>
              <div className="learn-path-card__body">
                <span className="learn-path-card__badge">{t(`learnHub.pathCards.${key}.badge`)}</span>
                <h3 className="learn-path-card__name">{t(`learnHub.topics.${key}.title`)}</h3>
                <p className="learn-path-card__summary">{t(`learnHub.pathCards.${key}.summary`)}</p>
                <span className="learn-path-card__cta">
                  <span>{t(`learnHub.pathCards.${key}.cta`)}</span>
                  <span aria-hidden="true" className="learn-path-card__cta-arrow">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
