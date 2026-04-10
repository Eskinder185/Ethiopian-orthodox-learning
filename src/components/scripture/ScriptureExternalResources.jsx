import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

export default function ScriptureExternalResources({ title, lead, resources }) {
  const { links } = resources
  return (
    <LearnRevealSection
      className="scripture__section scripture__section--external"
      aria-labelledby="scripture-external-title"
    >
      <div className="scripture__section-head">
        <h2 id="scripture-external-title" className="scripture__section-title">
          {title}
        </h2>
        <p className="scripture__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ul className="scripture__external-list">
        {links.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="scripture__external-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="scripture__external-label">{item.label}</span>
              <span className="scripture__external-note">
                <EmText>{item.note}</EmText>
              </span>
              <span className="scripture__external-cta">Open in new tab →</span>
            </a>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
