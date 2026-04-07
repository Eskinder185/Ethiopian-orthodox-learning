import '../../styles/ContentComponents.css'
import PageHeader from '../../components/sections/PageHeader.jsx'
import SectionTitle from '../../components/sections/SectionTitle.jsx'
import { feastsHolyDaysPage } from '../../data/calendarPages.js'
import { FIXED_FEASTS } from '../../data/calendarData.js'
import {
  gregorianDateToEthiopian,
  ethiopianToJDN,
  jdnToGregorian,
} from '../../utils/ethiopianCalendar.js'
import { formatEthiopianDate, formatGregorianDate } from '../../utils/liturgicalCalendar.js'
import '../../components/calendar/CalendarComponents.css'
import '../../components/calendar/CalendarCards.css'

export default function FeastsHolyDaysPage() {
  const { category, title, intro } = feastsHolyDaysPage
  const from = new Date()
  const ey = gregorianDateToEthiopian(from).year

  const rows = FIXED_FEASTS.map((f) => {
    const eth = { year: ey, month: f.ethiopianMonth, day: f.ethiopianDay }
    const gr = jdnToGregorian(ethiopianToJDN(eth))
    return {
      ...f,
      ethiopianLine: formatEthiopianDate(eth),
      gregorianLine: formatGregorianDate(gr.year, gr.month, gr.day),
    }
  })

  return (
    <article className="content-page calendar-page calendar-page--feasts">
      <PageHeader category={category} title={title} intro={intro} compact />

      <SectionTitle
        id="feasts-fixed-heading"
        title="Major fixed feasts"
        subtitle={`Ethiopian year ${ey} E.C. (the year that contains today on your device). Gregorian dates update when the Ethiopian year rolls over.`}
      />

      <div className="cal-feast-grid">
        {rows.map((f) => (
          <article key={f.id} className="cal-fasting-card">
            <h3 className="cal-card__title">{f.name}</h3>
            {f.geezName ? <p className="cal-card__geez-title">{f.geezName}</p> : null}
            <p className="cal-fasting-card__meta">
              <strong>Ethiopian: </strong>
              {f.ethiopianLine}
            </p>
            <p className="cal-fasting-card__meta">
              <strong>Gregorian (same liturgical year): </strong>
              {f.gregorianLine}
            </p>
            <p>{f.significance}</p>
          </article>
        ))}
      </div>

      <SectionTitle
        id="feasts-movable-heading"
        title="Moveable feasts"
        subtitle="Palm Sunday, Pascha, Ascension, and Pentecost follow Orthodox Pascha."
      />
      <p className="cal-card__body">
        Hosanna (Palm Sunday), the crucifixion (Siklet), the resurrection (Fasika), Ascension, and
        Pentecost are tied to Pascha each year. Open <strong>Calendar → Today in the Church</strong>{' '}
        on those civil dates to see the full entry.
      </p>
    </article>
  )
}
