import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { learnYearWheelKeys } from '../../data/learnHubPageData.js'
import { paths } from '../../constants/paths.js'
import SacredImageSlot from '../media/SacredImageSlot.jsx'
import LearnRevealSection from './LearnRevealSection.jsx'

export default function LearnChurchYearWheel() {
  const { t } = useTranslation('common')

  return (
    <LearnRevealSection className="learn-year-wheel" aria-labelledby="learn-year-wheel-heading">
      <div className="learn-year-wheel__grid">
        <div className="learn-year-wheel__visual" aria-hidden="true">
          <SacredImageSlot
            imageKey="learn.churchYearWheel"
            className="learn-year-wheel__slot"
            fallback={
              <>
                <div className="learn-year-wheel__disc" />
                <div className="learn-year-wheel__hub" />
              </>
            }
          />
        </div>
        <div className="learn-year-wheel__copy">
          <h2 id="learn-year-wheel-heading" className="learn-year-wheel__title">
            {t('learnHub.yearPreview.title')}
          </h2>
          <p className="learn-year-wheel__lead">{t('learnHub.yearPreview.lead')}</p>
          <ul className="learn-year-wheel__legend">
            {learnYearWheelKeys.map((key, i) => (
              <li key={key} className="learn-year-wheel__legend-item">
                <span className={`learn-year-wheel__swatch learn-year-wheel__swatch--${i}`} aria-hidden="true" />
                <div>
                  <span className="learn-year-wheel__legend-title">
                    {t(`learnHub.yearPreview.segments.${key}.title`)}
                  </span>
                  <span className="learn-year-wheel__legend-desc">
                    {t(`learnHub.yearPreview.segments.${key}.desc`)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <Link to={paths.learn.churchYear} className="learn-year-wheel__link">
            {t('learnHub.yearPreview.cta')}
          </Link>
          <Link to={paths.calendar.index} className="learn-year-wheel__link learn-year-wheel__link--secondary">
            {t('learnHub.yearPreview.ctaCalendar')}
          </Link>
        </div>
      </div>
    </LearnRevealSection>
  )
}
