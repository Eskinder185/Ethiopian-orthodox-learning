import { useId, useState } from 'react'
import { dailyPrayerEnglishContent } from '../../content/dailyPrayerEnglishContent.js'
import EmText from '../liturgy/EmText.jsx'
import './PrayerFlowInteractive.css'

function StepIcon({ n }) {
  return (
    <span className="prayer-flow__step-icon" aria-hidden="true">
      <svg viewBox="0 0 32 32" width="28" height="28">
        <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="16" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill="currentColor">
          {n}
        </text>
      </svg>
    </span>
  )
}

export default function PrayerFlowInteractive() {
  const c = dailyPrayerEnglishContent
  const modeId = useId()
  const [mode, setMode] = useState(/** @type {'beginner' | 'full'} */ ('beginner'))
  const [activeStep, setActiveStep] = useState(0)
  const [openCard, setOpenCard] = useState(/** @type {string | null} */ (null))

  const beginnerSteps = c.beginnerRoutine.steps
  const overview = c.overview

  const printCheatSheet = () => {
    window.print()
  }

  return (
    <>
      <section className="prayer-flow" id="prayer-flow-interactive" aria-labelledby="prayer-flow-title">
        <header className="prayer-flow__head">
          <h2 id="prayer-flow-title" className="prayer-flow__title">
            Guided prayer path
          </h2>
          <p className="prayer-flow__lead">
            <EmText>
              Move in **order** — **listen** (when audio is available), **read**, then **pray** slowly.
            </EmText>
          </p>

          <div className="prayer-flow__toolbar">
            <div className="prayer-flow__mode" role="group" aria-labelledby={modeId}>
              <span id={modeId} className="prayer-flow__mode-label">
                View
              </span>
              <button
                type="button"
                className={`prayer-flow__mode-btn${mode === 'beginner' ? ' prayer-flow__mode-btn--on' : ''}`}
                aria-pressed={mode === 'beginner'}
                onClick={() => {
                  setMode('beginner')
                  setActiveStep(0)
                }}
              >
                Beginner
              </button>
              <button
                type="button"
                className={`prayer-flow__mode-btn${mode === 'full' ? ' prayer-flow__mode-btn--on' : ''}`}
                aria-pressed={mode === 'full'}
                onClick={() => setMode('full')}
              >
                Full map
              </button>
            </div>
            <button type="button" className="prayer-flow__print btn btn--ghost" onClick={printCheatSheet}>
              Printable cheat sheet
            </button>
          </div>
        </header>

        {mode === 'beginner' ? (
          <div className="prayer-flow__stepper">
            <ol className="prayer-flow__track">
              {beginnerSteps.map((text, i) => (
                <li key={i} className="prayer-flow__track-item">
                  <button
                    type="button"
                    className={`prayer-flow__track-dot${activeStep === i ? ' prayer-flow__track-dot--active' : ''}`}
                    aria-current={activeStep === i ? 'step' : undefined}
                    onClick={() => setActiveStep(i)}
                    aria-label={`Step ${i + 1}`}
                  >
                    {i + 1}
                  </button>
                  {i < beginnerSteps.length - 1 ? <span className="prayer-flow__track-line" aria-hidden="true" /> : null}
                </li>
              ))}
            </ol>
            <article className="prayer-flow__step-card" aria-live="polite">
              <div className="prayer-flow__step-head">
                <StepIcon n={activeStep + 1} />
                <h3 className="prayer-flow__step-h">Step {activeStep + 1}</h3>
              </div>
              <p className="prayer-flow__step-text">
                <EmText>{beginnerSteps[activeStep]}</EmText>
              </p>
              <div className="prayer-flow__step-actions">
                <button
                  type="button"
                  className="prayer-flow__audio"
                  disabled
                  title="Audio link will be added with parish-approved sources"
                  aria-label="Listen (placeholder — connect parish audio later)"
                >
                  <span aria-hidden="true">▶</span> Listen
                </button>
                <button
                  type="button"
                  className="btn btn--secondary"
                  onClick={() => setActiveStep((s) => Math.min(beginnerSteps.length - 1, s + 1))}
                  disabled={activeStep >= beginnerSteps.length - 1}
                >
                  Next
                </button>
              </div>
            </article>
          </div>
        ) : (
          <ul className="prayer-flow__grid">
            {overview.map((item) => (
              <li key={item.id}>
                <article className="prayer-flow__pcard">
                  <button
                    type="button"
                    className="prayer-flow__pcard-summary"
                    aria-expanded={openCard === item.id}
                    onClick={() => setOpenCard((v) => (v === item.id ? null : item.id))}
                  >
                    <span className="prayer-flow__pcard-title">{item.title}</span>
                    <span className="prayer-flow__pcard-chev" aria-hidden="true" />
                  </button>
                  <p className="prayer-flow__pcard-blurb">{item.blurb}</p>
                  {openCard === item.id ? (
                    <div className="prayer-flow__pcard-detail" id={`prayer-${item.id}-detail`}>
                      <p className="prayer-flow__pcard-hint">Open full text in the prayer below.</p>
                      <button
                        type="button"
                        className="prayer-flow__audio prayer-flow__audio--small"
                        disabled
                        aria-label="Listen (placeholder)"
                      >
                        ▶ Listen
                      </button>
                      <a href={`#${item.anchor}`} className="prayer-flow__pcard-link">
                        Jump to full prayer →
                      </a>
                    </div>
                  ) : null}
                </article>
              </li>
            ))}
          </ul>
        )}
      </section>

      <div id="prayer-cheat-sheet" className="prayer-flow__print-root" aria-hidden="true">
        <div className="prayer-flow__print-inner">
          <h2 className="prayer-flow__print-h">Daily prayer — beginner cheat sheet</h2>
          <ol>
            {beginnerSteps.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ol>
          <p className="prayer-flow__print-foot">
            OrthodoxPath — compare with your parish prayer book. Not a replacement for approved texts.
          </p>
        </div>
      </div>
    </>
  )
}
