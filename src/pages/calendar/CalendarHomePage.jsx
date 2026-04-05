import '../../styles/ContentComponents.css'
import PageHeader from '../../components/sections/PageHeader.jsx'
import SectionTitle from '../../components/sections/SectionTitle.jsx'
import SectionDivider from '../../components/sections/SectionDivider.jsx'
import StatusBox from '../../components/sections/StatusBox.jsx'
import ResourceList from '../../components/sections/ResourceList.jsx'
import CalendarSectionCard from '../../components/calendar/CalendarSectionCard.jsx'
import { calendarHome } from '../../data/calendarPages.js'
import { CALENDAR_INTRO } from '../../data/calendarData.js'
import { getLiturgicalDayState } from '../../utils/liturgicalCalendar.js'
import '../../components/calendar/CalendarComponents.css'
import '../../components/calendar/CalendarCards.css'

export default function CalendarHomePage() {
  const { title, eyebrow, intro, purpose, notice, cards, relatedItems } = calendarHome
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
          <h3>Two calendars</h3>
          <p>
            Civil life often uses the Gregorian calendar. The Church uses the Ethiopian calendar
            (thirteen months, different year number). We convert between them mathematically so you
            can see both at once.
          </p>
        </div>
        <div className="cal-how-card">
          <h3>Fasting & feasts</h3>
          <p>
            Wednesday and Friday fasting, Great Lent before Pascha, Advent before Nativity, and major
            fixed feasts come from the same reference document as this build — expandable later with
            Senksar data.
          </p>
        </div>
        <div className="cal-how-card">
          <h3>Grow the data</h3>
          <p>
            Add saints, local observances, and PDF links in <code>src/data/calendarData.js</code> and
            extend <code>liturgicalCalendar.js</code> for new rules without redesigning the pages.
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

      {relatedItems.length > 0 ? (
        <>
          <SectionDivider />
          <ResourceList title="Related on this site" items={relatedItems} />
        </>
      ) : null}
    </article>
  )
}
