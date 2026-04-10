import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { learnTimelineKeys } from '../../data/learnHubPageData.js'
import { paths } from '../../constants/paths.js'
import SacredImageSlot from '../media/SacredImageSlot.jsx'
import LearnRevealSection from './LearnRevealSection.jsx'

export default function LearnHistoryStrip() {
  const { t } = useTranslation('common')

  return (
    <LearnRevealSection className="learn-history-strip" aria-labelledby="learn-history-heading">
      <div className="learn-history-strip__head">
        <h2 id="learn-history-heading" className="learn-history-strip__title">
          {t('learnHub.historyPreview.title')}
        </h2>
        <p className="learn-history-strip__lead">{t('learnHub.historyPreview.lead')}</p>
      </div>
      <SacredImageSlot imageKey="learn.historyStrip" className="learn-history-strip__banner" />
      <div className="learn-history-strip__scroll">
        <ol className="learn-history-strip__timeline">
          {learnTimelineKeys.map((key) => (
            <li key={key} className="learn-history-strip__point">
              <span className="learn-history-strip__dot" aria-hidden="true" />
              <h3 className="learn-history-strip__label">{t(`learnHub.historyPreview.points.${key}.title`)}</h3>
              <p className="learn-history-strip__text">{t(`learnHub.historyPreview.points.${key}.text`)}</p>
            </li>
          ))}
        </ol>
      </div>
      <Link to={paths.learn.churchLifeHistory} className="learn-history-strip__link">
        {t('learnHub.historyPreview.cta')}
      </Link>
    </LearnRevealSection>
  )
}
