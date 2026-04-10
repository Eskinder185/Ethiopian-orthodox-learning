import { Link } from 'react-router-dom'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

export default function ChurchYearCrosslinks({ title, lead, links }) {
  return (
    <LearnRevealSection className="church-year__section church-year__section--cross" aria-labelledby="church-year-cross-title">
      <div className="church-year__section-head">
        <h2 id="church-year-cross-title" className="church-year__section-title">
          {title}
        </h2>
        <p className="church-year__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ul className="church-year__cross-grid">
        {links.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="church-year__cross-card">
              <span className="church-year__cross-title">{item.title}</span>
              <span className="church-year__cross-blurb">{item.blurb}</span>
              <span className="church-year__cross-cta">Open</span>
            </Link>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
