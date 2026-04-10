import { Link } from 'react-router-dom'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'
import { practiceHubGateways } from '../../content/practiceHubVisualContent.js'
import { practiceHubImage } from '../../constants/practiceHubImages.js'

const CX = 100
const CY = 100
const R = 58

function pt(deg) {
  const rad = (deg * Math.PI) / 180
  return [CX + R * Math.cos(rad), CY + R * Math.sin(rad)]
}

/**
 * @param {{ map: { title: string, lead: string, centerLabel: string, nodes: Array<{ id: string, label: string, angle: number }> } }} props
 */
export default function PracticeMap({ map: mapData }) {
  const toById = Object.fromEntries(practiceHubGateways.map((g) => [g.id, g.to]))
  const mapImg = practiceHubImage('map')

  return (
    <LearnRevealSection
      id="practice-hub-map"
      className="ph-hub__section ph-hub__section--map pp-section pp-section--map"
      aria-labelledby="ph-hub-map-title"
    >
      <div className="ph-hub__section-head">
        <h2 id="ph-hub-map-title" className="ph-hub__section-title">
          {mapData.title}
        </h2>
        <p className="ph-hub__section-lead">
          <EmText>{mapData.lead}</EmText>
        </p>
      </div>
      <div className="ph-hub__map-frame ph-hub__map-frame--split">
        {mapImg ? (
          <div className="ph-hub__map-photo">
            <img src={mapImg} alt="" loading="lazy" decoding="async" width={560} height={420} />
          </div>
        ) : null}
        <svg className="ph-hub__map-svg" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
          <defs>
            <radialGradient id="ph-hub-glow" cx="50%" cy="45%" r="60%">
              <stop offset="0%" stopColor="rgba(212, 166, 60, 0.2)" />
              <stop offset="100%" stopColor="rgba(30, 58, 95, 0.06)" />
            </radialGradient>
          </defs>
          <circle cx={CX} cy={CY} r="78" fill="url(#ph-hub-glow)" />
          <circle
            cx={CX}
            cy={CY}
            r="72"
            fill="none"
            stroke="rgba(212, 166, 60, 0.2)"
            strokeWidth="0.8"
            strokeDasharray="3 5"
          />
          {mapData.nodes.map((n) => {
            const [x, y] = pt(n.angle)
            return (
              <line
                key={`line-${n.id}`}
                x1={CX}
                y1={CY}
                x2={x}
                y2={y}
                stroke="rgba(212, 166, 60, 0.18)"
                strokeWidth="0.75"
              />
            )
          })}
          <circle cx={CX} cy={CY} r="22" fill="rgba(212, 166, 60, 0.12)" stroke="rgba(212, 166, 60, 0.35)" strokeWidth="1" />
          <text x={CX} y={CY + 4} textAnchor="middle" className="ph-hub__map-center-text" fontSize="11" fill="currentColor">
            {mapData.centerLabel}
          </text>
          {mapData.nodes.map((n) => {
            const [x, y] = pt(n.angle)
            return (
              <g key={n.id}>
                <circle cx={x} cy={y} r="14" fill="rgba(255, 252, 248, 0.85)" stroke="rgba(212, 166, 60, 0.45)" strokeWidth="1" />
                <text x={x} y={y + 4} textAnchor="middle" fontSize="7.5" fontWeight="700" fill="rgba(30, 58, 95, 0.88)">
                  {n.label.length > 12 ? `${n.label.slice(0, 10)}…` : n.label}
                </text>
              </g>
            )
          })}
        </svg>
        <p className="ph-hub__map-hint">Choose a practice area below — the diagram shows how each path relates to Christ at the center.</p>
        <ul className="ph-hub__map-legend">
          {mapData.nodes.map((n) => (
            <li key={n.id}>
              <Link to={toById[n.id]} className="ph-hub__map-legend-link">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </LearnRevealSection>
  )
}
