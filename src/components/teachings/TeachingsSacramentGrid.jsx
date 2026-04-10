import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import SacramentIcon from './SacramentIcon.jsx'

export default function TeachingsSacramentGrid({ title, lead, sacraments }) {
  return (
    <LearnRevealSection className="teachings-sac__section teachings-sac__section--grid" aria-labelledby="teachings-sac-grid-title">
      <div className="teachings-sac__section-head">
        <h2 id="teachings-sac-grid-title" className="teachings-sac__section-title">
          {title}
        </h2>
        <p className="teachings-sac__section-lead">{lead}</p>
      </div>
      <ul className="teachings-sac__card-grid">
        {sacraments.map((s) => (
          <li key={s.id}>
            <a href={`#sacrament-${s.id}`} className="teachings-sac__card">
              <span className="teachings-sac__card-icon" aria-hidden="true">
                <SacramentIcon variant={s.icon} className="teachings-sac__card-svg" />
              </span>
              <span className="teachings-sac__card-body">
                <span className="teachings-sac__card-name">{s.name}</span>
                <span className="teachings-sac__card-desc">{s.shortDesc}</span>
                <span className="teachings-sac__card-cta">Read more</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
