import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }

function TodayIcon({ name }) {
  switch (name) {
    case 'liturgy':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M12 30h16M20 8v14M16 14h8" />
          <ellipse {...s} cx="20" cy="26" rx="8" ry="4" />
        </svg>
      )
    case 'fast':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <circle {...s} cx="20" cy="20" r="12" />
          <path {...s} d="M20 14v12" />
        </svg>
      )
    case 'feast':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M8 22 L20 10 L32 22 L28 28 H12 Z" />
        </svg>
      )
    case 'parish':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M8 32 L20 8 L32 32 M14 32h12" />
        </svg>
      )
    case 'prayer':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M20 6v28M12 14h16" />
        </svg>
      )
    case 'community':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <circle {...s} cx="14" cy="18" r="5" />
          <circle {...s} cx="26" cy="18" r="5" />
          <path {...s} d="M8 32c2-6 6-8 12-8s10 2 12 8" />
        </svg>
      )
    default:
      return null
  }
}

export default function ChurchHistoryToday({ id, title, lead, items }) {
  return (
    <LearnRevealSection id={id} className="church-life__section church-life__section--today" aria-labelledby="church-life-today-title">
      <div className="church-life__section-head">
        <h2 id="church-life-today-title" className="church-life__section-title">
          {title}
        </h2>
        <p className="church-life__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ul className="church-life__today-grid">
        {items.map((item) => (
          <li key={item.id}>
            <article className="church-life__today-card">
              <div className="church-life__today-icon" aria-hidden="true">
                <TodayIcon name={item.icon} />
              </div>
              <h3 className="church-life__today-title">{item.title}</h3>
              <p className="church-life__today-blurb">
                <EmText>{item.blurb}</EmText>
              </p>
            </article>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
