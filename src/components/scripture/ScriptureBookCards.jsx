import { Link } from 'react-router-dom'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

export default function ScriptureBookCards({ title, lead, cards }) {
  return (
    <LearnRevealSection
      className="scripture__section scripture__section--books"
      aria-labelledby="scripture-books-title"
    >
      <div className="scripture__section-head">
        <h2 id="scripture-books-title" className="scripture__section-title">
          {title}
        </h2>
        <p className="scripture__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ul className="scripture__book-grid">
        {cards.map((c) => (
          <li key={c.id}>
            <article className="scripture__book-card">
              <span className="scripture__book-tag">{c.beginnerLabel}</span>
              <h3 className="scripture__book-title">{c.title}</h3>
              <p className="scripture__book-summary">
                <EmText>{c.summary}</EmText>
              </p>
              <p className="scripture__book-theme">
                <strong>Theme.</strong> <EmText>{c.theme}</EmText>
              </p>
              <Link to={c.learnMoreTo} className="scripture__book-link">
                {c.learnMoreLabel} →
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
