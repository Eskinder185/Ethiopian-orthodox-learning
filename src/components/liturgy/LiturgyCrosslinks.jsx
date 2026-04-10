import { Link } from 'react-router-dom'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from './EmText.jsx'

export default function LiturgyCrosslinks({ title, lead, links }) {
  return (
    <LearnRevealSection className="liturgy-guide__section liturgy-guide__section--cross" aria-labelledby="liturgy-cross-title">
      <div className="liturgy-guide__section-head">
        <h2 id="liturgy-cross-title" className="liturgy-guide__section-title">
          {title}
        </h2>
        <p className="liturgy-guide__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ul className="liturgy-guide__cross-grid">
        {links.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="liturgy-guide__cross-card">
              <span className="liturgy-guide__cross-title">{item.title}</span>
              <span className="liturgy-guide__cross-blurb">{item.blurb}</span>
              <span className="liturgy-guide__cross-cta">Open</span>
            </Link>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
