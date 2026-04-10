import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

export default function ScriptureBibleStructure({ id, title, lead, groups }) {
  return (
    <LearnRevealSection
      id={id}
      className="scripture__section scripture__section--structure"
      aria-labelledby="scripture-structure-title"
    >
      <div className="scripture__section-head">
        <h2 id="scripture-structure-title" className="scripture__section-title">
          {title}
        </h2>
        <p className="scripture__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ul className="scripture__structure-list">
        {groups.map((g) => (
          <li key={g.id}>
            <details className="scripture__structure-details">
              <summary className="scripture__structure-summary">
                <span className="scripture__structure-badge">{g.shortLabel}</span>
                <span className="scripture__structure-summary-title">{g.title}</span>
              </summary>
              <div className="scripture__structure-body">
                <p className="scripture__structure-p">
                  <strong>Overview.</strong> <EmText>{g.summary}</EmText>
                </p>
                <p className="scripture__structure-p">
                  <strong>Why it matters.</strong> <EmText>{g.whyItMatters}</EmText>
                </p>
                <p className="scripture__structure-p">
                  <strong>What it contains.</strong> <EmText>{g.contains}</EmText>
                </p>
                <p className="scripture__structure-note">
                  <strong>Beginner note.</strong> <EmText>{g.beginnerNote}</EmText>
                </p>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
