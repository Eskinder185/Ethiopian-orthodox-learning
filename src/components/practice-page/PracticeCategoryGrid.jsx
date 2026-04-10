import { Link } from 'react-router-dom'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'
import { practiceHubImage } from '../../constants/practiceHubImages.js'

const GATEWAY_MEDIA = {
  prayer: () => practiceHubImage('prayerCard'),
  chants: () => practiceHubImage('mezmurCard'),
  instruments: () => practiceHubImage('instrumentCard'),
  language: () => practiceHubImage('languageCard'),
}

function CategoryIcon({ name }) {
  const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' }
  switch (name) {
    case 'prayer':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M20 6v28M12 14h16" />
        </svg>
      )
    case 'chant':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M10 28c4-8 8-12 20-14" />
          <circle {...s} cx="28" cy="12" r="3" />
        </svg>
      )
    case 'drum':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <ellipse {...s} cx="20" cy="20" rx="14" ry="10" />
          <path {...s} d="M20 10v4M20 26v4" />
        </svg>
      )
    case 'language':
      return (
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <path {...s} d="M8 28c4-12 10-18 24-20M12 32c6-8 14-12 22-12" />
        </svg>
      )
    default:
      return null
  }
}

/**
 * @param {{ gateways: Array<{ id: string, to: string, title: string, subtitle: string, blurb: string, cta: string, tone: string, icon: string }> }} props
 */
export default function PracticeCategoryGrid({ gateways }) {
  return (
    <LearnRevealSection
      id="practice-hub-gateways"
      className="ph-hub__section pp-section pp-section--category-grid"
      aria-labelledby="ph-hub-gateways-title"
    >
      <h2 id="ph-hub-gateways-title" className="ph-hub__section-title ph-hub__section-title--visible">
        Choose a path
      </h2>
      <p className="ph-hub__gateways-sub">Four ways to train at home — always with reverence and parish guidance.</p>
      <ul className="ph-hub__gateway-grid">
        {gateways.map((g) => {
          const mediaSrc = GATEWAY_MEDIA[g.id]?.() ?? null
          return (
            <li key={g.id} id={`practice-hub-gateway-${g.id}`} className="ph-hub__gateway-item">
              <div className="ph-hub__gateway-card" style={{ '--ph-tone': g.tone }}>
                {mediaSrc ? (
                  <div className="ph-hub__gateway-media">
                    <img src={mediaSrc} alt="" loading="lazy" decoding="async" width={640} height={360} />
                  </div>
                ) : (
                  <div className="ph-hub__gateway-icon" aria-hidden="true">
                    <CategoryIcon name={g.icon} />
                  </div>
                )}
                <div className="ph-hub__gateway-body">
                  <span className="ph-hub__gateway-kicker">{g.subtitle}</span>
                  <span className="ph-hub__gateway-title">{g.title}</span>
                  <p className="ph-hub__gateway-blurb">
                    <EmText>{g.blurb}</EmText>
                  </p>
                  <Link to={g.to} className="btn btn--secondary ph-hub__gateway-btn">
                    {g.cta}
                  </Link>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </LearnRevealSection>
  )
}
