import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { learnPracticeBridgeConfig } from '../../data/learnHubPageData.js'
import SacredImageSlot from '../media/SacredImageSlot.jsx'
import LearnRevealSection from './LearnRevealSection.jsx'

export default function LearnPracticeBridge() {
  const { t } = useTranslation('common')

  return (
    <LearnRevealSection className="learn-bridge" aria-labelledby="learn-bridge-heading">
      <h2 id="learn-bridge-heading" className="learn-bridge__title">
        {t('learnHub.bridge.title')}
      </h2>
      <p className="learn-bridge__subtitle">{t('learnHub.bridge.subtitle')}</p>
      <ul className="learn-bridge__grid">
        {learnPracticeBridgeConfig.map(({ key, learnTo, practiceTo, imageKey }) => (
          <li key={key}>
            <article className="learn-bridge-card">
              <SacredImageSlot imageKey={imageKey} className="learn-bridge-card__media" />
              <h3 className="learn-bridge-card__title">{t(`learnHub.bridge.cards.${key}.title`)}</h3>
              <p className="learn-bridge-card__text">{t(`learnHub.bridge.cards.${key}.text`)}</p>
              <div className="learn-bridge-card__actions">
                <Link to={learnTo} className="learn-bridge-card__link">
                  {t('learnHub.bridge.learnLinkLabel')}
                </Link>
                <Link to={practiceTo} className="learn-bridge-card__link learn-bridge-card__link--accent">
                  {t('learnHub.bridge.practiceLinkLabel')}
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
