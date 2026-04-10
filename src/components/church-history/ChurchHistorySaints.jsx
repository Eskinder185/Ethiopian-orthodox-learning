import { Link } from 'react-router-dom'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

function SaintIcon() {
  return (
    <div className="church-life__saint-icon" aria-hidden="true">
      <svg viewBox="0 0 48 48" className="church-life__saint-svg">
        <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
        <path
          d="M24 12v24M16 20h16M18 28h12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default function ChurchHistorySaints({ id, title, lead, saints }) {
  return (
    <LearnRevealSection id={id} className="church-life__section church-life__section--saints" aria-labelledby="church-life-saints-title">
      <div className="church-life__section-head">
        <h2 id="church-life-saints-title" className="church-life__section-title">
          {title}
        </h2>
        <p className="church-life__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ul className="church-life__saints-grid">
        {saints.map((s) => (
          <li key={s.id}>
            <article className="church-life__saint-card">
              <SaintIcon />
              <h3 className="church-life__saint-name">{s.name}</h3>
              <p className="church-life__saint-epithet">{s.epithet}</p>
              <p className="church-life__saint-blurb">
                <EmText>{s.blurb}</EmText>
              </p>
              <p className="church-life__saint-sig">
                <EmText>{s.significance}</EmText>
              </p>
              <Link to={s.linkTo} className="church-life__saint-link">
                {s.linkLabel} →
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
