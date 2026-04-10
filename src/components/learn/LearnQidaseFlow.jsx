import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { learnQidaseStageKeys } from '../../data/learnHubPageData.js'
import { paths } from '../../constants/paths.js'
import SacredImageSlot from '../media/SacredImageSlot.jsx'
import LearnRevealSection from './LearnRevealSection.jsx'

export default function LearnQidaseFlow() {
  const { t } = useTranslation('common')

  return (
    <LearnRevealSection className="learn-qidase" aria-labelledby="learn-qidase-heading">
      <div className="learn-qidase__head">
        <h2 id="learn-qidase-heading" className="learn-qidase__title">
          {t('learnHub.liturgyPreview.title')}
        </h2>
        <p className="learn-qidase__lead">{t('learnHub.liturgyPreview.lead')}</p>
      </div>
      <SacredImageSlot imageKey="learn.qidaseFlow" className="learn-qidase__banner" />
      <ol className="learn-qidase__flow">
        {learnQidaseStageKeys.map((key, i) => (
          <li key={key} className="learn-qidase__stage">
            <div className="learn-qidase__stage-card">
              <span className="learn-qidase__stage-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="learn-qidase__stage-title">{t(`learnHub.liturgyPreview.stages.${key}.title`)}</h3>
              <p className="learn-qidase__stage-desc">{t(`learnHub.liturgyPreview.stages.${key}.desc`)}</p>
            </div>
            {i < learnQidaseStageKeys.length - 1 ?
              <span className="learn-qidase__arrow" aria-hidden="true">
                →
              </span>
            : null}
          </li>
        ))}
      </ol>
      <Link to={paths.learn.liturgy} className="learn-qidase__link">
        {t('learnHub.liturgyPreview.cta')}
      </Link>
    </LearnRevealSection>
  )
}
