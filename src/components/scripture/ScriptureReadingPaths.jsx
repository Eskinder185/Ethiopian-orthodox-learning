import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

export default function ScriptureReadingPaths({ id, title, lead, paths: readingPaths }) {
  return (
    <LearnRevealSection
      id={id}
      className="scripture__section scripture__section--paths"
      aria-labelledby="scripture-paths-title"
    >
      <div className="scripture__section-head">
        <h2 id="scripture-paths-title" className="scripture__section-title">
          {title}
        </h2>
        <p className="scripture__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ul className="scripture__path-grid">
        {readingPaths.map((p) => (
          <li key={p.id}>
            <article className="scripture__path-card">
              <div className="scripture__path-head">
                <span className="scripture__path-tag">{p.tag}</span>
                <h3 className="scripture__path-title">{p.title}</h3>
              </div>
              <p className="scripture__path-desc">
                <EmText>{p.description}</EmText>
              </p>
              <ol className="scripture__path-steps">
                {p.steps.map((step, i) => (
                  <li key={i} className="scripture__path-step">
                    <span className="scripture__path-num" aria-hidden="true">
                      {i + 1}
                    </span>
                    <span className="scripture__path-step-text">
                      <EmText>{step}</EmText>
                    </span>
                  </li>
                ))}
              </ol>
            </article>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
