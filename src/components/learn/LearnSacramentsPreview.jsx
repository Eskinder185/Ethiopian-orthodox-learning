import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { learnSacramentPreviewKeys } from '../../data/learnHubPageData.js'
import { paths } from '../../constants/paths.js'
import SacredImageSlot from '../media/SacredImageSlot.jsx'
import LearnRevealSection from './LearnRevealSection.jsx'

function SacramentGlyph({ variant }) {
  const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }
  switch (variant) {
    case 'baptism':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M20 6v28M12 14c0-4 3.5-6 8-6s8 2 8 6-3 8-8 12c-5-4-8-8-8-12z" />
        </svg>
      )
    case 'eucharist':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M12 30h16M20 8v14M16 14h8" />
          <ellipse {...s} cx="20" cy="26" rx="8" ry="4" />
        </svg>
      )
    case 'chrismation':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M20 6l-4 10h8L20 6zM16 16h8v6c0 4-8 4-8 0v-6z" />
        </svg>
      )
    case 'repentance':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M10 28c4-8 8-12 20-14M18 12l12-2-2 12" />
        </svg>
      )
    case 'marriage':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M12 22c0-6 4-10 8-10s8 4 8 10-8 10-8 10-8-4-8-10z" />
          <path {...s} d="M22 18h10l-2 6h6" opacity="0.6" />
        </svg>
      )
    case 'unction':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M18 8l-6 20h16L22 8M20 28v6" />
        </svg>
      )
    default:
      return null
  }
}

export default function LearnSacramentsPreview() {
  const { t } = useTranslation('common')

  return (
    <LearnRevealSection className="learn-sacraments" aria-labelledby="learn-sacraments-heading">
      <div className="learn-sacraments__head">
        <h2 id="learn-sacraments-heading" className="learn-sacraments__title">
          {t('learnHub.teachingsPreview.title')}
        </h2>
        <p className="learn-sacraments__lead">{t('learnHub.teachingsPreview.lead')}</p>
      </div>
      <SacredImageSlot imageKey="learn.sacramentsPreviewStrip" className="learn-sacraments__strip" />
      <ul className="learn-sacraments__grid">
        {learnSacramentPreviewKeys.map((key) => (
          <li key={key}>
            <article className="learn-sacrament-card">
              <div className="learn-sacrament-card__icon" aria-hidden="true">
                <SacramentGlyph variant={key} />
              </div>
              <h3 className="learn-sacrament-card__name">{t(`learnHub.teachingsPreview.items.${key}.title`)}</h3>
              <p className="learn-sacrament-card__blurb">{t(`learnHub.teachingsPreview.items.${key}.blurb`)}</p>
            </article>
          </li>
        ))}
      </ul>
      <Link to={paths.learn.teachings} className="learn-sacraments__link">
        {t('learnHub.teachingsPreview.cta')}
      </Link>
    </LearnRevealSection>
  )
}
