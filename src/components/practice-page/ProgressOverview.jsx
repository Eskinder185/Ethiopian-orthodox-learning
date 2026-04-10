import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../constants/paths.js'
import { getRecentChants } from '../../utils/chantStorage.js'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'
import SacredImageSlot from '../media/SacredImageSlot.jsx'

/**
 * @param {{ copy: { title: string, lead: string, daysLabel: string, prayersLabel: string, chantsLabel: string, lettersLabel: string, continueLabel: string, continueHint: string }, stats: { prayerDays: number, mezmurSessions: number, prayersTouched: number, languageLetters: number } }} props
 */
export default function ProgressOverview({ copy, stats }) {
  const [recentId, setRecentId] = useState(/** @type {string | null} */ (null))

  useEffect(() => {
    const r = getRecentChants()
    setRecentId(r[0]?.id ?? null)
  }, [])

  return (
    <LearnRevealSection
      id="practice-hub-progress"
      className="ph-hub__section ph-hub__section--progress-full ph-hub__section--progress-premium pp-section pp-section--progress"
      aria-labelledby="ph-hub-progress-title"
    >
      <div className="ph-hub__progress-shell ph-hub__progress-shell--split">
        <SacredImageSlot
          imageKey="practice.progressEncouragement"
          className="ph-hub__progress-art-slot"
          fallback={<div className="ph-hub__progress-art ph-hub__progress-art--fallback" aria-hidden="true" />}
        />
        <div className="ph-hub__progress-body">
          <div className="ph-hub__section-head">
            <h2 id="ph-hub-progress-title" className="ph-hub__section-title">
              {copy.title}
            </h2>
            <p className="ph-hub__section-lead">
              <EmText>{copy.lead}</EmText>
            </p>
          </div>
          <div className="ph-hub__progress-widgets">
            <div className="ph-hub__pw">
              <span className="ph-hub__pw-value">{stats.prayerDays}</span>
              <span className="ph-hub__pw-label">{copy.daysLabel}</span>
            </div>
            <div className="ph-hub__pw">
              <span className="ph-hub__pw-value">{stats.prayersTouched}</span>
              <span className="ph-hub__pw-label">{copy.prayersLabel}</span>
            </div>
            <div className="ph-hub__pw">
              <span className="ph-hub__pw-value">{stats.mezmurSessions}</span>
              <span className="ph-hub__pw-label">{copy.chantsLabel}</span>
            </div>
            <div className="ph-hub__pw">
              <span className="ph-hub__pw-value">{stats.languageLetters}</span>
              <span className="ph-hub__pw-label">{copy.lettersLabel}</span>
            </div>
          </div>
          <p className="ph-hub__progress-hint">{copy.continueHint}</p>
          <Link
            to={recentId ? `${paths.practice.chants}#hub-chant-practice` : paths.practice.chants}
            className="btn btn--secondary ph-hub__progress-continue"
          >
            {copy.continueLabel}
          </Link>
        </div>
      </div>
    </LearnRevealSection>
  )
}
