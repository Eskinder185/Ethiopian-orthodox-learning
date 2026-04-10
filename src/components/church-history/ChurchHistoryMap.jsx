import { useState } from 'react'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

/** Stylized map — not a geographic survey; pins are approximate for storytelling. */
function EthiopiaMapSvg({ places, activeId, onSelect }) {
  return (
    <svg
      className="church-life__map-svg"
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="clh-land" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(212, 166, 60, 0.12)" />
          <stop offset="100%" stopColor="rgba(30, 58, 95, 0.2)" />
        </linearGradient>
      </defs>
      <path
        d="M18 38 C22 22 38 18 52 20 C68 22 82 28 88 42 C92 54 88 68 78 78 C68 88 52 92 38 88 C24 84 14 72 12 58 C10 48 14 42 18 38Z"
        fill="url(#clh-land)"
        stroke="rgba(212, 166, 60, 0.25)"
        strokeWidth="0.4"
      />
      {places.map((p) => {
        const active = p.id === activeId
        return (
          <g key={p.id}>
            <circle
              cx={p.x}
              cy={p.y}
              r={active ? 3.2 : 2.4}
              fill={active ? 'rgba(212, 166, 60, 0.95)' : 'rgba(255, 252, 248, 0.9)'}
              stroke="rgba(30, 58, 95, 0.55)"
              strokeWidth="0.35"
              className="church-life__map-hit"
              style={{ cursor: 'pointer' }}
              onClick={() => onSelect(p.id)}
            />
          </g>
        )
      })}
    </svg>
  )
}

export default function ChurchHistoryMap({ id, title, lead, places }) {
  const [activeId, setActiveId] = useState(places[0]?.id ?? '')
  const active = places.find((p) => p.id === activeId) ?? places[0]

  return (
    <LearnRevealSection id={id} className="church-life__section church-life__section--map" aria-labelledby="church-life-map-title">
      <div className="church-life__section-head">
        <h2 id="church-life-map-title" className="church-life__section-title">
          {title}
        </h2>
        <p className="church-life__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <p className="church-life__map-hint">Use the place names below; map markers highlight the selection.</p>
      <div className="church-life__map-layout">
        <div
          className="church-life__map-frame"
          role="group"
          aria-label="Sacred places in Ethiopia — select a name to read more"
        >
          <EthiopiaMapSvg places={places} activeId={active?.id} onSelect={setActiveId} />
          <ul className="church-life__map-legend">
            {places.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  className={`church-life__map-chip${p.id === active?.id ? ' church-life__map-chip--active' : ''}`}
                  onClick={() => setActiveId(p.id)}
                >
                  {p.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {active ?
          <aside className="church-life__map-detail" aria-live="polite">
            <h3 className="church-life__map-place-title">{active.name}</h3>
            <p className="church-life__map-place-text">
              <EmText>{active.summary}</EmText>
            </p>
          </aside>
        : null}
      </div>
    </LearnRevealSection>
  )
}
