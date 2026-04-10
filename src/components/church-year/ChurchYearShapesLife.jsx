import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }

function ShapeIcon({ name }) {
  switch (name) {
    case 'prayer':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M20 6v28M12 14h16" />
        </svg>
      )
    case 'fast':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <circle {...s} cx="20" cy="20" r="12" />
          <path {...s} d="M20 14v12" />
        </svg>
      )
    case 'liturgy':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M12 30h16M20 8v14M16 14h8" />
          <ellipse {...s} cx="20" cy="26" rx="8" ry="4" />
        </svg>
      )
    case 'mezmur':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M10 28c4-8 8-12 20-14" />
        </svg>
      )
    case 'feast':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M8 22 L20 10 L32 22 L28 28 H12 Z" />
        </svg>
      )
    case 'daily':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <circle {...s} cx="20" cy="20" r="14" />
          <path {...s} d="M20 12v4M20 24v4" />
        </svg>
      )
    default:
      return null
  }
}

export default function ChurchYearShapesLife({ title, lead, items }) {
  return (
    <LearnRevealSection className="church-year__section church-year__section--shapes" aria-labelledby="church-year-shapes-title">
      <div className="church-year__section-head">
        <h2 id="church-year-shapes-title" className="church-year__section-title">
          {title}
        </h2>
        <p className="church-year__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ul className="church-year__shapes-grid">
        {items.map((item) => (
          <li key={item.id}>
            <article className="church-year__shapes-card">
              <div className="church-year__shapes-icon" aria-hidden="true">
                <ShapeIcon name={item.icon} />
              </div>
              <h3 className="church-year__shapes-title">{item.title}</h3>
              <p className="church-year__shapes-blurb">
                <EmText>{item.blurb}</EmText>
              </p>
            </article>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
