import '../../styles/ContentComponents.css'
import PageHeader from '../../components/sections/PageHeader.jsx'
import SectionTitle from '../../components/sections/SectionTitle.jsx'
import SectionDivider from '../../components/sections/SectionDivider.jsx'
import StatusBox from '../../components/sections/StatusBox.jsx'
import InfoBlock from '../../components/sections/InfoBlock.jsx'
import ResourceList from '../../components/sections/ResourceList.jsx'
import CalendarDateCard from '../../components/calendar/CalendarDateCard.jsx'
import WeekdayThemeCard from '../../components/calendar/WeekdayThemeCard.jsx'
import FastingStatusCard from '../../components/calendar/FastingStatusCard.jsx'
import FeastCard from '../../components/calendar/FeastCard.jsx'
import { todayPage } from '../../data/calendarPages.js'
import { CALENDAR_INTRO } from '../../data/calendarData.js'
import {
  getLiturgicalDayState,
  getUpcomingFixedFeasts,
  getThisWeekSummaries,
  formatGregorianDate,
} from '../../utils/liturgicalCalendar.js'
import '../../components/calendar/CalendarComponents.css'
import '../../components/calendar/CalendarCards.css'

export default function TodayPage() {
  const now = new Date()
  const s = getLiturgicalDayState(now)
  const upcoming = getUpcomingFixedFeasts(now, 6)
  const week = getThisWeekSummaries(now)

  const { category, title, intro, relatedItems } = todayPage

  return (
    <article className="content-page calendar-page calendar-page--today">
      <PageHeader category={category} title={title} intro={intro} compact />

      <StatusBox tone="calm" className="practice-page__notice">
        {CALENDAR_INTRO.homeGregorianNote}
      </StatusBox>

      <div className="cal-today__grid cal-today__grid--main">
        <CalendarDateCard
          title="Civil & church dates"
          gregorianFormatted={s.gregorianFormatted}
          ethiopianFormatted={s.ethiopianFormatted}
          ethiopianYear={s.ethiopianYear}
        />
        <WeekdayThemeCard
          weekdayEnglish={s.weekdayEnglish}
          weekdayGeez={s.weekdayGeez}
          weekdayTransliteration={s.weekdayTransliteration}
          weekdayEthiopianName={s.weekdayEthiopianName}
          themeShort={s.weekdayThemeShort}
        />
      </div>

      {s.pagumenNote ? (
        <p className="cal-card__body" style={{ marginTop: '0.75rem' }}>
          {s.pagumenNote}
        </p>
      ) : null}

      <div className="cal-today__spiritual">
        <FastingStatusCard
          primaryFastLabel={s.primaryFastLabel}
          isWeeklyFastDay={s.isWeeklyFastDay}
          inGreatLent={s.inGreatLent}
          isBrightWeek={s.isBrightWeek}
          activeFastSeasons={s.activeFastSeasons}
        />
      </div>

      <InfoBlock title="Spirit of the day" variant="soft" className="cal-today__spiritual">
        <p>{s.weekdayThemeMedium}</p>
        {s.matchingFeasts.length > 0 ? (
          <p style={{ marginTop: '0.65rem' }}>
            <strong>Also remembered today: </strong>
            {s.matchingFeasts.map((f) => f.name).join(' · ')}.
          </p>
        ) : null}
      </InfoBlock>

      {s.matchingFeasts.length > 0 ? (
        <section aria-labelledby="today-feasts-heading">
          <SectionTitle id="today-feasts-heading" title="Feasts & holy days today" />
          <div className="cal-feast-grid">
            {s.matchingFeasts.map((f) => (
              <FeastCard
                key={f.id}
                name={f.name}
                geezName={f.geezName}
                significance={f.significance}
                moveable={f.moveable}
              />
            ))}
          </div>
        </section>
      ) : null}

      <SectionDivider />

      <section aria-labelledby="today-pascha-heading">
        <SectionTitle
          id="today-pascha-heading"
          title="Next Pascha (Easter)"
          subtitle="Orthodox Julian computus — Gregorian date on this device."
        />
        <InfoBlock variant="soft">
          <p>
            The next Feast of the Resurrection falls on{' '}
            <strong>
              {formatGregorianDate(
                s.upcomingPaschaGregorian.year,
                s.upcomingPaschaGregorian.month,
                s.upcomingPaschaGregorian.day,
              )}
            </strong>
            . Holy Week, Ascension (forty days later), and Pentecost (fifty days after Pascha) follow
            from that Sunday.
          </p>
        </InfoBlock>
      </section>

      <section className="cal-upcoming" aria-labelledby="today-upcoming-heading">
        <SectionTitle id="today-upcoming-heading" title={CALENDAR_INTRO.upcomingHeading} />
        <div className="cal-upcoming__list">
          {upcoming.map((f) => (
            <div key={`${f.id}-${f.jdn}`} className="cal-fasting-card">
              <h3>{f.name}</h3>
              <p>
                <strong>Ethiopian: </strong>
                {f.ethiopianFormatted}
              </p>
              <p>
                <strong>Gregorian (next occurrence): </strong>
                {f.gregorianFormatted}
              </p>
              <p className="cal-fasting-card__meta">{f.significance}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="today-week-heading">
        <SectionTitle id="today-week-heading" title={CALENDAR_INTRO.thisWeekHeading} />
        <table className="cal-week-table">
          <thead>
            <tr>
              <th scope="col">Civil date</th>
              <th scope="col">Ethiopian</th>
              <th scope="col">Fast note</th>
              <th scope="col">Feast (data)</th>
            </tr>
          </thead>
          <tbody>
            {week.map((row, i) => (
              <tr key={i}>
                <td>{row.gregorianShort}</td>
                <td>{row.ethiopianShort}</td>
                <td>{row.fastNote}</td>
                <td>{row.feastShort}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <SectionDivider />

      <p className="cal-card__body">{CALENDAR_INTRO.todayFooter}</p>

      {relatedItems.length > 0 ? (
        <ResourceList className="practice-page__related" title="Related pages" items={relatedItems} />
      ) : null}
    </article>
  )
}
