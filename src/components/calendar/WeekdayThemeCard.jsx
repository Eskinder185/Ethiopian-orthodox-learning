import './CalendarCards.css'

export default function WeekdayThemeCard({
  weekdayEnglish,
  weekdayGeez,
  weekdayTransliteration,
  weekdayEthiopianName,
  themeShort,
}) {
  return (
    <div className="cal-card cal-card--weekday">
      <span className="cal-card__eyebrow">Weekday in the Church</span>
      <h3 className="cal-card__title">
        {weekdayEnglish}
        <span className="cal-card__geez" aria-label="Ge’ez name">
          {' '}
          · {weekdayGeez} ({weekdayTransliteration})
        </span>
      </h3>
      {weekdayEthiopianName ? (
        <p className="cal-card__subtitle">{weekdayEthiopianName}</p>
      ) : null}
      {themeShort ? <p className="cal-card__body">{themeShort}</p> : null}
    </div>
  )
}
