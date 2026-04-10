import { Link } from 'react-router-dom'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

export default function ScriptureCrosslinks({ title, lead, links }) {
  return (
    <LearnRevealSection
      className="scripture__section scripture__section--cross"
      aria-labelledby="scripture-cross-title"
    >
      <div className="scripture__section-head">
        <h2 id="scripture-cross-title" className="scripture__section-title">
          {title}
        </h2>
        <p className="scripture__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ul className="scripture__cross-grid">
        {links.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="scripture__cross-card">
              <span className="scripture__cross-title">{item.title}</span>
              <span className="scripture__cross-blurb">
                <EmText>{item.blurb}</EmText>
              </span>
              <span className="scripture__cross-cta">Open</span>
            </Link>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
