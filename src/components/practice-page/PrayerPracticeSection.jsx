import { useId, useState } from 'react'
import { paths } from '../../constants/paths.js'
import {
  practiceHubPrayerBeginnerCount,
  practiceHubPrayerTimeline,
} from '../../content/practiceHubPrayerTimeline.js'
import { practiceHubImage } from '../../constants/practiceHubImages.js'
import EmText from '../liturgy/EmText.jsx'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import PrayerModeToggle from './PrayerModeToggle.jsx'
import PrayerStepper from './PrayerStepper.jsx'
import PrayerDetailCard from './PrayerDetailCard.jsx'
import PrayerAudioBar from './PrayerAudioBar.jsx'
import PrayerCheatSheetCard from './PrayerCheatSheetCard.jsx'
import './PrayerPracticeSection.css'

/**
 * @param {{
 *   sectionId?: string,
 *   title?: string,
 *   lead?: string,
 *   prayerBasePath?: string,
 *   fullTimeline?: typeof practiceHubPrayerTimeline,
 *   beginnerCount?: number,
 *   cheatSheetPrintNote?: string,
 *   importantNotes?: string[],
 * }} props
 */
export default function PrayerPracticeSection({
  sectionId = 'practice-hub-prayer',
  title = 'Prayer practice',
  lead = 'Walk the **order** the Church **loves** — **listen** when audio is linked, **read** slowly, **pray** from the heart.',
  prayerBasePath = paths.practice.prayer,
  fullTimeline = practiceHubPrayerTimeline,
  beginnerCount = practiceHubPrayerBeginnerCount,
  cheatSheetPrintNote = 'OrthodoxPath — compare with your parish book. Full prayer texts on the Prayer practice page.',
  importantNotes = [],
}) {
  const modeId = useId()
  const [mode, setMode] = useState(/** @type {'beginner' | 'full'} */ ('beginner'))
  const [activeIx, setActiveIx] = useState(0)

  const steps = mode === 'beginner' ? fullTimeline.slice(0, beginnerCount) : fullTimeline
  const active = steps[Math.min(activeIx, steps.length - 1)] ?? steps[0]

  const printSheet = () => window.print()

  const handleMode = (m) => {
    setMode(m)
    setActiveIx(0)
  }

  const stepperArt = practiceHubImage('prayerStepper')
  const cheatArt = practiceHubImage('prayerCheatsheet')

  return (
    <>
      <LearnRevealSection
        id={sectionId}
        className="ph-prayer ph-prayer--premium pp-section pp-section--prayer"
        aria-labelledby="ph-prayer-title"
      >
        <div className="ph-prayer__shell">
          <header className="ph-prayer__head">
            <h2 id="ph-prayer-title" className="ph-prayer__title">
              {title}
            </h2>
            <p className="ph-prayer__lead">
              <EmText>{lead}</EmText>
            </p>
          </header>

          {(stepperArt || cheatArt) && (
            <div className="ph-prayer__guides" aria-hidden="true">
              {stepperArt ? (
                <figure className="ph-prayer__guide-card">
                  <img src={stepperArt} alt="" loading="lazy" decoding="async" width={400} height={260} />
                  <figcaption className="ph-prayer__guide-cap">Step-by-step flow</figcaption>
                </figure>
              ) : null}
              {cheatArt ? (
                <figure className="ph-prayer__guide-card">
                  <img src={cheatArt} alt="" loading="lazy" decoding="async" width={400} height={260} />
                  <figcaption className="ph-prayer__guide-cap">Printable order</figcaption>
                </figure>
              ) : null}
            </div>
          )}

          <div className="ph-prayer__modes-panel">
            <div className="ph-prayer__modes-head">
              <h3 className="ph-prayer__modes-title">Guided prayer flow</h3>
              <p className="ph-prayer__modes-sub">Choose depth, then walk one step at a time.</p>
            </div>
            <div className="ph-prayer__toolbar">
              <PrayerModeToggle mode={mode} onModeChange={handleMode} labelId={modeId} />
              <div className="ph-prayer__toolbar-actions">
                <PrayerAudioBar />
                <button type="button" className="btn btn--ghost ph-prayer__print" onClick={printSheet}>
                  Printable cheat sheet
                </button>
              </div>
            </div>
          </div>

          <div className="ph-prayer__layout">
            <PrayerStepper steps={steps} activeIndex={activeIx} onStepChange={setActiveIx} />
            <PrayerDetailCard
              active={active}
              prayerBasePath={prayerBasePath}
              activeIndex={activeIx}
              stepCount={steps.length}
              onPrev={() => setActiveIx((x) => Math.max(0, x - 1))}
              onNext={() => setActiveIx((x) => Math.min(steps.length - 1, x + 1))}
            />
          </div>

          <div className="ph-prayer__aux-grid">
            {importantNotes.length > 0 ? (
              <details className="ph-prayer__notes" id="practice-hub-prayer-notes">
                <summary className="ph-prayer__notes-summary">Important notes</summary>
                <ul className="ph-prayer__notes-list">
                  {importantNotes.map((note, i) => (
                    <li key={i} className="ph-prayer__notes-item">
                      <EmText>{note}</EmText>
                    </li>
                  ))}
                </ul>
              </details>
            ) : null}

            <div className="ph-prayer__cheat-panel">
              <h3 className="ph-prayer__cheat-title">Cheat sheet</h3>
              <p className="ph-prayer__cheat-body">
                A compact list of steps for your desk or travel — always alongside your parish book.
              </p>
              <button type="button" className="btn btn--secondary ph-prayer__cheat-btn" onClick={printSheet}>
                Print prayer order
              </button>
            </div>
          </div>
        </div>
      </LearnRevealSection>

      <PrayerCheatSheetCard steps={fullTimeline} printNote={cheatSheetPrintNote} />
    </>
  )
}
