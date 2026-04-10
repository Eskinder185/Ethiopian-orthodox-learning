import { Link } from 'react-router-dom'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

export default function ChurchHistoryCrosslinks({ title, lead, links }) {
  return (
    <LearnRevealSection className="church-life__section church-life__section--cross" aria-labelledby="church-life-cross-title">
      <div className="church-life__section-head">
        <h2 id="church-life-cross-title" className="church-life__section-title">
          {title}
        </h2>
        <p className="church-life__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ul className="church-life__cross-grid">
        {links.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="church-life__cross-card">
              <span className="church-life__cross-title">{item.title}</span>
              <span className="church-life__cross-blurb">{item.blurb}</span>
              <span className="church-life__cross-cta">Open</span>
            </Link>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
