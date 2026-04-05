import '../../styles/ContentComponents.css'

export default function CalendarCard({
  label = "Today's church calendar",
  title,
  detail,
  badge,
  note,
  className = '',
}) {
  return (
    <section className={'calendar-card' + (className ? ` ${className}` : '')}>
      <div className="calendar-card__head">
        <h3 className="calendar-card__label">{label}</h3>
        {badge ? <span className="calendar-card__badge">{badge}</span> : null}
      </div>
      {title ? <p className="calendar-card__title">{title}</p> : null}
      {detail ? <p className="calendar-card__detail">{detail}</p> : null}
      {note ? <span className="calendar-card__note">{note}</span> : null}
    </section>
  )
}
