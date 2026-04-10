import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { learnFaithMapNodeOrder } from '../../data/learnHubPageData.js'
import SacredImageSlot from '../media/SacredImageSlot.jsx'
import LearnRevealSection from './LearnRevealSection.jsx'

export default function LearnFaithMap() {
  const { t } = useTranslation('common')
  const [open, setOpen] = useState(learnFaithMapNodeOrder[0])

  return (
    <LearnRevealSection className="learn-faith-map" aria-labelledby="learn-faith-map-heading">
      <div className="learn-faith-map__head">
        <h2 id="learn-faith-map-heading" className="learn-faith-map__title">
          {t('learnHub.faithMap.title')}
        </h2>
        <p className="learn-faith-map__subtitle">{t('learnHub.faithMap.subtitle')}</p>
      </div>

      <SacredImageSlot imageKey="learn.faithMapPanel" className="learn-faith-map__banner" />

      <div className="learn-faith-map__track-wrap">
        <ol className="learn-faith-map__track" aria-label={t('learnHub.faithMap.trackLabel')}>
          {learnFaithMapNodeOrder.map((key, i) => {
            const isActive = open === key
            return (
              <li key={key} className="learn-faith-map__step">
                {i > 0 ?
                  <span className="learn-faith-map__connector" aria-hidden="true" />
                : null}
                <button
                  type="button"
                  className={`learn-faith-map__node${isActive ? ' learn-faith-map__node--active' : ''}`}
                  onClick={() => setOpen(key)}
                  onMouseEnter={() => setOpen(key)}
                  aria-expanded={isActive}
                  aria-controls={`faith-map-panel-${key}`}
                  id={`faith-map-btn-${key}`}
                >
                  <span className="learn-faith-map__node-index">{i + 1}</span>
                  <span className="learn-faith-map__node-label">{t(`learnHub.faithMap.nodes.${key}.short`)}</span>
                </button>
              </li>
            )
          })}
        </ol>
      </div>

      <div
        className="learn-faith-map__panel"
        role="region"
        aria-live="polite"
        id={`faith-map-panel-${open}`}
        aria-labelledby={`faith-map-btn-${open}`}
      >
        <p className="learn-faith-map__panel-text">{t(`learnHub.faithMap.nodes.${open}.detail`)}</p>
      </div>
    </LearnRevealSection>
  )
}
