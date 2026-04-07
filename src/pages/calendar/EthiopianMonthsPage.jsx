import '../../styles/ContentComponents.css'
import PageHeader from '../../components/sections/PageHeader.jsx'
import SectionTitle from '../../components/sections/SectionTitle.jsx'
import InfoBlock from '../../components/sections/InfoBlock.jsx'
import { ETHIOPIAN_MONTHS } from '../../data/calendarData.js'
import '../../components/calendar/CalendarComponents.css'

export default function EthiopianMonthsPage() {
  return (
    <article className="content-page calendar-page calendar-page--months">
      <PageHeader
        category="Calendar · Ethiopian year"
        title="Ethiopian months"
        intro="The Ethiopian Orthodox year has twelve months of thirty days, plus Pagumen — the short month before New Year. Civil overlap shifts with leap years; use parish calendars for observance."
        compact
      />

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
    </article>
  )
}
