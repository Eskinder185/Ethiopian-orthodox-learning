import { Link } from 'react-router-dom'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'

export default function TeachingsSacramentsRelated({ title, lead, links }) {
  return (
    <LearnRevealSection
      className="teachings-sac__section teachings-sac__section--related"
      aria-labelledby="teachings-sac-related-title"
    >
      <div className="teachings-sac__section-head">
        <h2 id="teachings-sac-related-title" className="teachings-sac__section-title">
          {title}
        </h2>
        <p className="teachings-sac__section-lead">{lead}</p>
      </div>
      <ul className="teachings-sac__related-grid">
        {links.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="teachings-sac__related-card">
              <span className="teachings-sac__related-title">{item.title}</span>
              <span className="teachings-sac__related-blurb">{item.blurb}</span>
              <span className="teachings-sac__related-cta">Open</span>
            </Link>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
