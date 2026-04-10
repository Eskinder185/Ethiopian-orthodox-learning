import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from './EmText.jsx'

const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }

function NoticeGlyph({ name }) {
  switch (name) {
    case 'incense':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M18 8l-6 20h16L22 8M20 28v6" />
          <path {...s} d="M12 14 Q20 10 28 14" opacity="0.5" />
        </svg>
      )
    case 'chant':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M10 28c4-8 8-12 20-14" />
          <path {...s} d="M14 12h12v16H14z" opacity="0.4" />
        </svg>
      )
    case 'readings':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M12 8h16v28H12zM16 14h8M16 20h8M16 26h6" />
        </svg>
      )
    case 'priest':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M20 6v28M14 14h12M16 34h8" />
          <circle {...s} cx="20" cy="10" r="3" />
        </svg>
      )
    case 'responses':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M8 20h24M12 14h16M12 26h16" />
        </svg>
      )
    case 'reverence':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M20 8v24M12 32h16" />
          <path {...s} d="M14 16l6 6 6-6" />
        </svg>
      )
    default:
      return null
  }
}

export default function LiturgyWhatToNotice({ title, lead, items }) {
  return (
    <LearnRevealSection className="liturgy-guide__section liturgy-guide__section--notice" aria-labelledby="liturgy-notice-title">
      <div className="liturgy-guide__section-head">
        <h2 id="liturgy-notice-title" className="liturgy-guide__section-title">
          {title}
        </h2>
        <p className="liturgy-guide__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ul className="liturgy-guide__notice-grid">
        {items.map((item) => (
          <li key={item.id}>
            <article className="liturgy-guide__notice-card">
              <div className="liturgy-guide__notice-icon" aria-hidden="true">
                <NoticeGlyph name={item.icon} />
              </div>
              <h3 className="liturgy-guide__notice-title">{item.title}</h3>
              <p className="liturgy-guide__notice-blurb">
                <EmText>{item.blurb}</EmText>
              </p>
            </article>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
