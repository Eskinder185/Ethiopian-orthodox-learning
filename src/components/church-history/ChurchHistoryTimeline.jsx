import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

export default function ChurchHistoryTimeline({ id, title, lead, items }) {
  return (
    <LearnRevealSection id={id} className="church-life__section church-life__section--timeline" aria-labelledby="church-life-tl-title">
      <div className="church-life__section-head">
        <h2 id="church-life-tl-title" className="church-life__section-title">
          {title}
        </h2>
        <p className="church-life__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ol className="church-life__timeline">
        {items.map((item, index) => (
          <li key={item.id} id={`timeline-${item.id}`} className="church-life__timeline-item">
            <div className="church-life__timeline-axis" aria-hidden="true">
              <span className="church-life__timeline-dot" />
              {index < items.length - 1 ? <span className="church-life__timeline-line" /> : null}
            </div>
            <article className="church-life__timeline-card">
              <p className="church-life__timeline-year">{item.year}</p>
              <h3 className="church-life__timeline-h">{item.title}</h3>
              <p className="church-life__timeline-text">
                <EmText>{item.explanation}</EmText>
              </p>
              <p className="church-life__timeline-why">
                <strong>Why it matters.</strong> <EmText>{item.whyMatters}</EmText>
              </p>
              {item.detail ?
                <details className="church-life__timeline-details">
                  <summary className="church-life__timeline-summary">Read a little more</summary>
                  <p className="church-life__timeline-detail">
                    <EmText>{item.detail}</EmText>
                  </p>
                </details>
              : null}
            </article>
          </li>
        ))}
      </ol>
    </LearnRevealSection>
  )
}
