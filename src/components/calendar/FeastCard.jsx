import './CalendarCards.css'

export default function FeastCard({ name, geezName, significance, moveable }) {
  return (
    <article className="cal-card cal-card--feast">
      <div className="cal-card__feast-head">
        <h3 className="cal-card__title">{name}</h3>
        {geezName ? <span className="cal-card__geez-title">{geezName}</span> : null}
        {moveable ? <span className="cal-card__badge">Moveable</span> : null}
      </div>
      {significance ? <p className="cal-card__body">{significance}</p> : null}
    </article>
  )
}
