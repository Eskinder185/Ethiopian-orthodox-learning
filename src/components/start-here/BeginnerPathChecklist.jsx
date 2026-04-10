import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { beginnerChecklistSteps } from '../../content/startHereContent.js'
import { startHereImageIntrinsic, startHerePathIconForStepId } from '../../data/startHereAssets.js'
import { useStartHereChecklist } from '../../hooks/useStartHereChecklist.js'

export default function BeginnerPathChecklist() {
  const { t } = useTranslation('common')
  const { toggle, isDone, reset, completed, total, percent } = useStartHereChecklist()
  const lastIndex = beginnerChecklistSteps.length - 1

  return (
    <section
      id="guided-path"
      className="start-here-path start-here-block"
      aria-labelledby="guided-path-heading"
      tabIndex={-1}
    >
      <div className="start-here-path__head">
        <h2 id="guided-path-heading" className="start-here-section-title">
          {t('startHere.checklist.title')}
        </h2>
        <p className="start-here-section-lead">{t('startHere.checklist.lead')}</p>
        <div className="start-here-path__progress-card">
          <div className="start-here-path__progress" aria-live="polite">
            <div className="start-here-path__progress-label">
              {t('startHere.checklist.progressLabel', { done: completed, total })}
            </div>
            <div
              className="start-here-path__progress-track"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={percent}
              aria-label={t('startHere.checklist.progressAria', { percent })}
            >
              <div className="start-here-path__progress-fill" style={{ width: `${percent}%` }} />
            </div>
          </div>
        </div>
      </div>

      <ol className="start-here-path__steps">
        {beginnerChecklistSteps.map((step, index) => {
          const done = isDone(step.id)
          const ns = `startHere.checklist.steps.${step.id}`
          const titleId = `step-title-${step.id}`
          const checkId = `step-check-${step.id}`
          const isLast = index === lastIndex
          const stepIconSrc = startHerePathIconForStepId(step.id)

          return (
            <li
              key={step.id}
              className={`start-here-step${done ? ' start-here-step--complete' : ''}`}
            >
              <div className="start-here-step__layout">
                <div className="start-here-step__track">
                  {!isLast ?
                    <span className="start-here-step__vine" aria-hidden="true" />
                  : null}
                  <label className="start-here-step__orb-label" htmlFor={checkId}>
                    <input
                      type="checkbox"
                      id={checkId}
                      className="start-here-step__input"
                      checked={done}
                      onChange={() => toggle(step.id)}
                      aria-label={t('startHere.checklist.ariaMark', { title: t(`${ns}.title`) })}
                    />
                    <span className="start-here-step__orb" aria-hidden="true">
                      {done ?
                        <span className="start-here-step__orb-check">✓</span>
                      : <span className="start-here-step__orb-num">{index + 1}</span>}
                    </span>
                  </label>
                </div>

                <div className="start-here-step__content">
                  <div className="start-here-step__title-block">
                    {stepIconSrc ?
                      <img
                        className="start-here-step__icon"
                        src={stepIconSrc}
                        alt=""
                        width={startHereImageIntrinsic.pathStepIcon.width}
                        height={startHereImageIntrinsic.pathStepIcon.height}
                        loading="lazy"
                        decoding="async"
                        aria-hidden="true"
                      />
                    : null}
                    <h3 id={titleId} className="start-here-step__title">
                      {t(`${ns}.title`)}
                    </h3>
                  </div>
                  <p className="start-here-step__desc">{t(`${ns}.desc`)}</p>
                  <Link to={step.to} className="btn btn--secondary start-here-step__btn">
                    {t(`${ns}.cta`)}
                  </Link>
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      <div className="start-here-path__footer">
        <button type="button" className="start-here-path__reset text-link" onClick={reset}>
          {t('startHere.checklist.reset')}
        </button>
      </div>
    </section>
  )
}
