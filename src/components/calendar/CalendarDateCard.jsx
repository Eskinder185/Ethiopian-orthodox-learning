import './CalendarCards.css'

export default function CalendarDateCard({
  title = 'Today',
  gregorianFormatted,
  ethiopianFormatted,
  ethiopianYear,
}) {
  return (
    <div className="cal-card cal-card--dates">
      <span className="cal-card__eyebrow">{title}</span>
      <p className="cal-card__gregorian">{gregorianFormatted}</p>
      <p className="cal-card__ethiopian">{ethiopianFormatted}</p>
      {ethiopianYear != null ? (
        <p className="cal-card__meta">Era of the Incarnation · year {ethiopianYear} E.C.</p>
      ) : null}
    </div>
  )
}
