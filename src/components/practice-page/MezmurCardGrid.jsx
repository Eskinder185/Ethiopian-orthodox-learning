import SacredImageSlot from '../media/SacredImageSlot.jsx'

/**
 * @param {{ cards: Array<{ id: string, title: string, tone: string, imageKey?: string }> }} props
 */
export default function MezmurCardGrid({ cards }) {
  return (
    <ul className="pp-mez-grid" aria-label="Sample chant cards">
      {cards.map((c) => (
        <li key={c.id}>
          <div className="pp-mez-card">
            <div className="pp-mez-card__media">
              <SacredImageSlot
                imageKey={c.imageKey}
                className="pp-mez-card__thumb-slot"
                fallback={<div className="pp-mez-card__thumb-fallback" style={{ background: c.tone }} aria-hidden="true" />}
              />
            </div>
            <h4 className="pp-mez-card__title">{c.title}</h4>
          </div>
        </li>
      ))}
    </ul>
  )
}
