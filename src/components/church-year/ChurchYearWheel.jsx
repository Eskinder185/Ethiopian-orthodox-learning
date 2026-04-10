import { useState } from 'react'
import { Link } from 'react-router-dom'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

const CX = 100
const CY = 100
const R = 88

function pt(r, deg) {
  const rad = (deg * Math.PI) / 180
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)]
}

function wedgePath(a1, a2) {
  const [x1, y1] = pt(R, a1)
  const [x2, y2] = pt(R, a2)
  let delta = a2 - a1
  while (delta < 0) delta += 360
  while (delta > 360) delta -= 360
  const large = delta > 180 ? 1 : 0
  return `M ${CX} ${CY} L ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2} Z`
}

export default function ChurchYearWheel({ id, title, lead, segments }) {
  const [activeId, setActiveId] = useState(segments[0]?.id ?? '')
  const n = segments.length
  const slice = 360 / n
  const active = segments.find((s) => s.id === activeId) ?? segments[0]

  return (
    <LearnRevealSection id={id} className="church-year__section church-year__section--wheel" aria-labelledby="church-year-wheel-title">
      <div className="church-year__section-head">
        <h2 id="church-year-wheel-title" className="church-year__section-title">
          {title}
        </h2>
        <p className="church-year__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <p className="church-year__wheel-hint">Select a part of the year below; the diagram highlights your choice.</p>
      <div className="church-year__wheel-layout">
        <div className="church-year__wheel-frame">
          <svg
            className="church-year__wheel-svg"
            viewBox="0 0 200 200"
            role="group"
            aria-label="Interactive circular diagram of the church year; use wedges or chips to select a season."
          >
            <defs>
              <filter id="cy-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.2" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle
              cx={CX}
              cy={CY}
              r="42"
              fill="rgba(212, 166, 60, 0.08)"
              stroke="rgba(212, 166, 60, 0.25)"
              strokeWidth="0.75"
              aria-hidden="true"
            />
            <text
              x={CX}
              y={CY + 4}
              textAnchor="middle"
              className="church-year__wheel-center-text"
              fontSize="9"
              fill="currentColor"
              aria-hidden="true"
            >
              Church year
            </text>
            {segments.map((seg, i) => {
              const a1 = -90 + i * slice
              const a2 = -90 + (i + 1) * slice
              const isActive = seg.id === activeId
              return (
                <path
                  key={seg.id}
                  d={wedgePath(a1, a2)}
                  fill={seg.tone}
                  stroke={isActive ? 'rgba(212, 166, 60, 0.95)' : 'rgba(255, 252, 248, 0.35)'}
                  strokeWidth={isActive ? 2.2 : 0.6}
                  filter={isActive ? 'url(#cy-glow)' : undefined}
                  className="church-year__wheel-wedge"
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  aria-label={`${seg.shortLabel}: ${seg.label}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActiveId(seg.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveId(seg.id)
                    }
                  }}
                />
              )
            })}
            {segments.map((seg, i) => {
              const mid = -90 + (i + 0.5) * slice
              const [lx, ly] = pt(62, mid)
              return (
                <text
                  key={`${seg.id}-lbl`}
                  x={lx}
                  y={ly}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="7"
                  fontWeight="700"
                  fill="rgba(30, 58, 95, 0.88)"
                  style={{ pointerEvents: 'none' }}
                  aria-hidden="true"
                >
                  {seg.shortLabel.length > 14 ? `${seg.shortLabel.slice(0, 12)}…` : seg.shortLabel}
                </text>
              )
            })}
          </svg>
        </div>
        <div className="church-year__wheel-side">
          <div className="church-year__wheel-chips" role="group" aria-label="Church year segments">
            {segments.map((seg) => (
              <button
                key={seg.id}
                type="button"
                aria-pressed={seg.id === activeId}
                className={`church-year__wheel-chip${seg.id === activeId ? ' church-year__wheel-chip--active' : ''}`}
                onClick={() => setActiveId(seg.id)}
              >
                {seg.shortLabel}
              </button>
            ))}
          </div>
          {active ?
            <aside className="church-year__wheel-detail" aria-live="polite">
              <h3 className="church-year__wheel-detail-title">{active.label}</h3>
              <p className="church-year__wheel-p">
                <EmText>{active.explanation}</EmText>
              </p>
              <p className="church-year__wheel-p">
                <strong>Spiritual meaning.</strong> <EmText>{active.spiritualMeaning}</EmText>
              </p>
              <p className="church-year__wheel-p">
                <strong>Practice.</strong> <EmText>{active.relatedPractice}</EmText>
              </p>
              <Link to={active.guideLink} className="church-year__wheel-link">
                {active.guideLabel} →
              </Link>
            </aside>
          : null}
        </div>
      </div>
    </LearnRevealSection>
  )
}
