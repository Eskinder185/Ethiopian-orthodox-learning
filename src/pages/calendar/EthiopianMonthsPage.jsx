import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/ContentComponents.css'
import PageHeader from '../../components/sections/PageHeader.jsx'
import SectionTitle from '../../components/sections/SectionTitle.jsx'
import SectionDivider from '../../components/sections/SectionDivider.jsx'
import InfoBlock from '../../components/sections/InfoBlock.jsx'
import CalendarMonthExplorer from '../../components/calendar/dashboard/CalendarMonthExplorer.jsx'
import FeastDetailDrawer from '../../components/calendar/dashboard/FeastDetailDrawer.jsx'
import { ETHIOPIAN_MONTHS } from '../../data/calendarData.js'
import { ETHIOPIAN_MONTH_VISUAL } from '../../data/calendarVisualRegistry.js'
import { paths } from '../../constants/paths.js'
import { getLiturgicalDayState } from '../../utils/liturgicalCalendar.js'
import { getVisualForCalendarItem, pickDisplayImage } from '../../utils/calendarVisualSystem.js'
import '../../components/calendar/CalendarComponents.css'
import '../../components/calendar/CalendarCards.css'
import '../../components/calendar/dashboard/CalendarDashboard.css'
import '../../components/calendar/dashboard/calendarVisualMotion.css'

export default function EthiopianMonthsPage() {
  const [now] = useState(() => new Date())
  const snapshot = useMemo(() => getLiturgicalDayState(now), [now])
  const [detailPayload, setDetailPayload] = useState(null)

  return (
    <article className="content-page calendar-page calendar-page--months calendar-dashboard">
      <PageHeader
        category="Calendar · Ethiopian year"
        title="Ethiopian months"
        intro="The Ethiopian Orthodox year has twelve months of thirty days, plus Pagumen — the short month before New Year. Civil overlap shifts with leap years; use parish calendars for observance."
        compact
      />

      <SectionTitle
        id="ethiopian-months-visual-heading"
        title="Month by month"
        subtitle="A gentle visual for each month of the Ethiopian year — shared rhythm until unique banners are added."
      />
      <ul className="cal-months-visual-grid" aria-label="Ethiopian months">
        {ETHIOPIAN_MONTHS.map((m) => {
          const vis = getVisualForCalendarItem({ kind: 'ethiopianMonth', ethiopianMonth: m.index })
          const img = vis ? pickDisplayImage(vis, false) : null
          const glyph = ETHIOPIAN_MONTH_VISUAL[m.index]?.icon ?? vis?.icon ?? '◎'
          return (
            <li key={m.index} className="cal-months-visual-card">
              {img ? (
                <span className="cal-months-visual-card__media" aria-hidden>
                  <img src={img} alt="" className="cal-months-visual-card__img" loading="lazy" />
                </span>
              ) : (
                <span className="cal-months-visual-card__glyph" aria-hidden>
                  {glyph}
                </span>
              )}
              <span className="cal-months-visual-card__num">{m.index}</span>
              <span className="cal-months-visual-card__name">{m.name}</span>
              <span className="cal-months-visual-card__geez" lang="am">
                {m.geez}
              </span>
            </li>
          )
        })}
      </ul>

      <SectionDivider />

      <SectionTitle
        id="ethiopian-months-explorer-heading"
        title="Month map"
        subtitle="Browse civil or Ethiopian months — tap a day to see feasts and fast notes from our dataset."
      />
      <CalendarMonthExplorer
        state={snapshot}
        now={now}
        onOpenFeastDetail={(d) => d && setDetailPayload(d)}
      />

      <InfoBlock title="Looking for today?" variant="soft">
        <p>
          Open <Link to={paths.calendar.today}>Today in the Church</Link> for the live date, or{' '}
          <Link to={paths.calendar.feastsHolyDays}>Feasts &amp; holy days</Link> for the full feast library.
        </p>
      </InfoBlock>

      <SectionDivider />

      <SectionTitle
        id="ethiopian-months-table-heading"
        title="Month names"
        subtitle="Ge’ez script and approximate Gregorian alignment (varies by year)."
      />

      <div className="cal-months-table-wrap">
        <table className="cal-months-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Ge’ez</th>
              <th scope="col">Approx. Gregorian window</th>
            </tr>
          </thead>
          <tbody>
            {ETHIOPIAN_MONTHS.map((m) => (
              <tr key={m.index}>
                <td>{m.index}</td>
                <td>{m.name}</td>
                <td lang="am">{m.geez}</td>
                <td>{m.gregorianApprox}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <InfoBlock title="How to use this table" variant="soft">
        <p>
          Dates move against the Gregorian calendar each year. For fasting and feasts, follow{' '}
          <strong>Today in the Church</strong> and your priest — this grid only names the months.
        </p>
      </InfoBlock>

      {detailPayload ? (
        <FeastDetailDrawer
          key={detailPayload.title}
          open
          detail={detailPayload}
          onClose={() => setDetailPayload(null)}
        />
      ) : null}
    </article>
  )
}
