import '../../styles/ContentComponents.css'
import PageHeader from '../../components/sections/PageHeader.jsx'
import SectionTitle from '../../components/sections/SectionTitle.jsx'
import SectionDivider from '../../components/sections/SectionDivider.jsx'
import StatusBox from '../../components/sections/StatusBox.jsx'
import CalendarSectionCard from '../../components/calendar/CalendarSectionCard.jsx'
import { calendarHome } from '../../data/calendarPages.js'
import { CALENDAR_INTRO } from '../../data/calendarData.js'
import { getLiturgicalDayState } from '../../utils/liturgicalCalendar.js'
import '../../components/calendar/CalendarComponents.css'
import '../../components/calendar/CalendarCards.css'

export default function CalendarHomePage() {
  const { title, eyebrow, intro, purpose, notice, cards } = calendarHome
  const snapshot = getLiturgicalDayState(new Date())

  return (
    <article className="content-page calendar-home">
      <PageHeader title={title} eyebrow={eyebrow}>
        <p className="page-hero__subtitle">{intro}</p>
        <p className="page-hero__subtitle">{purpose}</p>
      </PageHeader>

      <StatusBox tone="calm" className="calendar-home__notice">
        {notice}
      </StatusBox>

      <section className="cal-how-grid" aria-labelledby="cal-snapshot-heading">
        <div className="cal-how-card" style={{ gridColumn: '1 / -1' }}>
          <h3 id="cal-snapshot-heading">Right now (this device)</h3>
          <p>
            <strong>Gregorian: </strong>
            {snapshot.gregorianFormatted}
            <br />
            <strong>Ethiopian: </strong>
            {snapshot.ethiopianFormatted}
            <br />
            <strong>Weekday theme: </strong>
            {snapshot.weekdayThemeShort}
          </p>
        </div>
      </section>

      <SectionDivider />

      <SectionTitle
        id="calendar-how-heading"
        title="How this system works"
        subtitle={CALENDAR_INTRO.homeLead}
      />
      <div className="cal-how-grid">
        <div className="cal-how-card">
          <h3>Two ways of counting days</h3>
          <p>
            Daily life often follows the Gregorian calendar; the Church journeys through the Ethiopian
            calendar — its own months, feasts, and sense of the year. We show both together so you can
            live in the world and still think with the Church.
          </p>
        </div>
        <div className="cal-how-card">
          <h3>Fasting & feasts</h3>
          <p>
            Wednesday and Friday fasts, the great fasts before Nativity and Pascha, and the major holy
            days named here echo received Orthodox practice. Let your spiritual father and parish
            calendar guide what you keep when health, travel, or local tradition calls for care.
          </p>
        </div>
        <div className="cal-how-card">
          <h3>Growing with the Church year</h3>
          <p>
            Over time this calendar can welcome more feast days, saints’ stories, local observances,
            and links to hymns and readings — so your sense of the year deepens as the site grows.
            What matters most is living the rhythm with Christ, not the screen.
          </p>
        </div>
      </div>

      <SectionDivider />

      <SectionTitle id="calendar-areas-heading" title="Explore" subtitle="Today, fasting seasons, and fixed feasts." />

      <div className="feature-grid feature-grid--topics">
        {cards.map((c) => (
          <CalendarSectionCard
            key={c.to}
            to={c.to}
            title={c.title}
            description={c.description}
            category={c.category}
          />
        ))}
      </div>
    </article>
  )
}
