import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from './EmText.jsx'

function textOrEm(s) {
  return <EmText>{s}</EmText>
}

export default function LiturgyFlow({ id, title, lead, stages }) {
  return (
    <LearnRevealSection id={id} className="liturgy-guide__section liturgy-guide__section--flow" aria-labelledby="liturgy-flow-title">
      <div className="liturgy-guide__section-head">
        <h2 id="liturgy-flow-title" className="liturgy-guide__section-title">
          {title}
        </h2>
        <p className="liturgy-guide__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ol className="liturgy-guide__flow">
        {stages.map((stage, index) => (
          <li key={stage.id} className="liturgy-guide__flow-item">
            <div className="liturgy-guide__flow-marker" aria-hidden="true">
              <span className="liturgy-guide__flow-num">{index + 1}</span>
            </div>
            <div className="liturgy-guide__flow-card">
              <h3 className="liturgy-guide__flow-stage-title">{stage.title}</h3>
              <p className="liturgy-guide__flow-lead">{textOrEm(stage.explanation)}</p>
              <dl className="liturgy-guide__flow-dl">
                <div className="liturgy-guide__flow-row">
                  <dt>What happens</dt>
                  <dd>{textOrEm(stage.whatHappens)}</dd>
                </div>
                <div className="liturgy-guide__flow-row">
                  <dt>What to listen for</dt>
                  <dd>{textOrEm(stage.listenFor)}</dd>
                </div>
                <div className="liturgy-guide__flow-row">
                  <dt>Why it matters</dt>
                  <dd>{textOrEm(stage.whyMatters)}</dd>
                </div>
                <div className="liturgy-guide__flow-row liturgy-guide__flow-row--note">
                  <dt>Beginner notes</dt>
                  <dd>{textOrEm(stage.beginnerNotes)}</dd>
                </div>
              </dl>
            </div>
          </li>
        ))}
      </ol>
    </LearnRevealSection>
  )
}
