import { Link } from 'react-router-dom'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

function StepTarget({ to, label, hint }) {
  const inner = (
    <>
      <span className="church-life__path-label">{label}</span>
      <span className="church-life__path-hint">{hint}</span>
    </>
  )
  if (to.startsWith('/')) {
    return (
      <Link to={to} className="church-life__path-step">
        {inner}
      </Link>
    )
  }
  return (
    <a href={to} className="church-life__path-step">
      {inner}
    </a>
  )
}

export default function ChurchHistoryLearningStrip({ title, lead, steps }) {
  return (
    <LearnRevealSection className="church-life__section church-life__section--path" aria-labelledby="church-life-path-title">
      <div className="church-life__section-head">
        <h2 id="church-life-path-title" className="church-life__section-title">
          {title}
        </h2>
        <p className="church-life__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <nav className="church-life__path-track" aria-label="Guided learning path">
        {steps.map((step, i) => (
          <div key={step.label} className="church-life__path-item">
            <StepTarget to={step.to} label={step.label} hint={step.hint} />
            {i < steps.length - 1 ?
              <span className="church-life__path-arrow" aria-hidden="true">
                →
              </span>
            : null}
          </div>
        ))}
      </nav>
    </LearnRevealSection>
  )
}
