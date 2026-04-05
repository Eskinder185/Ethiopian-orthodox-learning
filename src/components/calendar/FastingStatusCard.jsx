import './CalendarCards.css'

export default function FastingStatusCard({
  primaryFastLabel,
  isWeeklyFastDay,
  inGreatLent,
  isBrightWeek,
  activeFastSeasons = [],
}) {
  const seasonal = activeFastSeasons.filter((s) => s.kind === 'season' && s.active)

  return (
    <div className="cal-card cal-card--fasting">
      <span className="cal-card__eyebrow">Fasting & seasons</span>
      <p className="cal-card__status">{primaryFastLabel}</p>
      <ul className="cal-card__tags" aria-label="Fast notes">
        {isBrightWeek ? <li className="cal-card__tag">Bright Week — weekly fast relaxed</li> : null}
        {inGreatLent ? <li className="cal-card__tag">Great Lent</li> : null}
        {isWeeklyFastDay ? <li className="cal-card__tag">Wednesday / Friday discipline</li> : null}
      </ul>
      {seasonal.length > 0 ? (
        <div className="cal-card__seasons">
          {seasonal.map((s) => (
            <div key={s.id} className="cal-card__season">
              <strong>{s.name}</strong>
              <p>{s.explanation}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
