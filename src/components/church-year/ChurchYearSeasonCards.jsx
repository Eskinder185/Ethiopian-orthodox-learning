import { Link } from 'react-router-dom'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

export default function ChurchYearSeasonCards({ id, title, lead, cards }) {
  return (
    <LearnRevealSection id={id} className="church-year__section church-year__section--seasons" aria-labelledby="church-year-seasons-title">
      <div className="church-year__section-head">
        <h2 id="church-year-seasons-title" className="church-year__section-title">
          {title}
        </h2>
        <p className="church-year__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ul className="church-year__season-grid">
        {cards.map((c) => (
          <li key={c.id}>
            <article className="church-year__season-card">
              <h3 className="church-year__season-title">{c.title}</h3>
              <p className="church-year__season-line">
                <strong>Meaning.</strong> <EmText>{c.meaning}</EmText>
              </p>
              <p className="church-year__season-line">
                <strong>Focus.</strong> <EmText>{c.focus}</EmText>
              </p>
              <p className="church-year__season-line">
                <strong>Habits.</strong> <EmText>{c.habits}</EmText>
              </p>
              <Link to={c.link} className="church-year__season-link">
                {c.linkLabel} →
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
