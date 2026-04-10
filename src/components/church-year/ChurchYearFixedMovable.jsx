import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

export default function ChurchYearFixedMovable({ title, lead, fixed, movable }) {
  return (
    <LearnRevealSection className="church-year__section church-year__section--split" aria-labelledby="church-year-fm-title">
      <div className="church-year__section-head">
        <h2 id="church-year-fm-title" className="church-year__section-title">
          {title}
        </h2>
        <p className="church-year__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <div className="church-year__split-grid">
        <article className="church-year__split-card church-year__split-card--fixed">
          <div className="church-year__split-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" className="church-year__split-svg">
              <rect x="10" y="12" width="28" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M16 20h16M16 26h12M16 32h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="church-year__split-h">{fixed.title}</h3>
          <p className="church-year__split-body">
            <EmText>{fixed.body}</EmText>
          </p>
          <p className="church-year__split-example">
            <em>
              <EmText>{fixed.example}</EmText>
            </em>
          </p>
        </article>
        <article className="church-year__split-card church-year__split-card--movable">
          <div className="church-year__split-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" className="church-year__split-svg">
              <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M24 12v12l8 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="church-year__split-h">{movable.title}</h3>
          <p className="church-year__split-body">
            <EmText>{movable.body}</EmText>
          </p>
          <p className="church-year__split-example">
            <em>
              <EmText>{movable.example}</EmText>
            </em>
          </p>
        </article>
      </div>
    </LearnRevealSection>
  )
}
