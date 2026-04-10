import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }

function LifeIcon({ name }) {
  switch (name) {
    case 'liturgy':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M12 30h16M20 8v14M16 14h8" />
          <ellipse {...s} cx="20" cy="26" rx="8" ry="4" />
        </svg>
      )
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

export default function ScriptureChurchLife({ title, lead, items }) {
  return (
    <LearnRevealSection
      className="scripture__section scripture__section--life"
      aria-labelledby="scripture-life-title"
    >
      <div className="scripture__section-head">
        <h2 id="scripture-life-title" className="scripture__section-title">
          {title}
        </h2>
        <p className="scripture__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ul className="scripture__life-grid">
        {items.map((item) => (
          <li key={item.id}>
            <article className="scripture__life-card">
              <div className="scripture__life-icon" aria-hidden="true">
                <LifeIcon name={item.icon} />
              </div>
              <h3 className="scripture__life-h">{item.title}</h3>
              <p className="scripture__life-blurb">
                <EmText>{item.blurb}</EmText>
              </p>
            </article>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
