import { useMemo, useState } from 'react'
import '../../styles/ContentComponents.css'
import SectionTitle from '../../components/sections/SectionTitle.jsx'
import SectionDivider from '../../components/sections/SectionDivider.jsx'
import StatusBox from '../../components/sections/StatusBox.jsx'
import InfoBlock from '../../components/sections/InfoBlock.jsx'
import WeekdayThemeCard from '../../components/calendar/WeekdayThemeCard.jsx'
import FastingStatusCard from '../../components/calendar/FastingStatusCard.jsx'
import CalendarHero from '../../components/calendar/dashboard/CalendarHero.jsx'
import UpcomingTimeline from '../../components/calendar/dashboard/UpcomingTimeline.jsx'
import HolyFiguresSection from '../../components/calendar/dashboard/HolyFiguresSection.jsx'
import FeastDetailDrawer from '../../components/calendar/dashboard/FeastDetailDrawer.jsx'
import { CALENDAR_INTRO } from '../../data/calendarData.js'
import {
  getLiturgicalDayState,
  getUpcomingFixedFeasts,
  getThisWeekSummaries,
  formatGregorianDate,
} from '../../utils/liturgicalCalendar.js'
import '../../components/calendar/CalendarComponents.css'
import '../../components/calendar/CalendarCards.css'
import '../../components/calendar/dashboard/CalendarDashboard.css'
import '../../components/calendar/dashboard/calendarVisualMotion.css'

export default function TodayPage() {
  const [now] = useState(() => new Date())
  const s = useMemo(() => getLiturgicalDayState(now), [now])
  const upcoming = useMemo(() => getUpcomingFixedFeasts(now, 6), [now])
  const week = useMemo(() => getThisWeekSummaries(now), [now])
  const [detailPayload, setDetailPayload] = useState(null)

  return (
    <article className="content-page calendar-page calendar-page--today calendar-dashboard">
      <div className="calendar-page__today-hero">
        <CalendarHero state={s} now={now} embedOnTodayPage />
      </div>

      <StatusBox tone="calm" className="practice-page__notice">
        {CALENDAR_INTRO.homeGregorianNote}
      </StatusBox>

      <div className="cal-today__grid cal-today__grid--main">
        <WeekdayThemeCard
          weekdayEnglish={s.weekdayEnglish}
          weekdayGeez={s.weekdayGeez}
          weekdayTransliteration={s.weekdayTransliteration}
          weekdayEthiopianName={s.weekdayEthiopianName}
          themeShort={s.weekdayThemeShort}
        />
        <FastingStatusCard
          primaryFastLabel={s.primaryFastLabel}
          isWeeklyFastDay={s.isWeeklyFastDay}
          inGreatLent={s.inGreatLent}
          isBrightWeek={s.isBrightWeek}
          activeFastSeasons={s.activeFastSeasons}
        />
      </div>

      {s.pagumenNote ? (
        <p className="cal-card__body" style={{ marginTop: '0.75rem' }}>
          {s.pagumenNote}
        </p>
      ) : null}

      <InfoBlock title="Spirit of the day" variant="soft" className="cal-today__spiritual">
        <p>{s.weekdayThemeMedium}</p>
        {s.matchingFeasts.length > 0 ? (
          <p style={{ marginTop: '0.65rem' }}>
            <strong>Also remembered today: </strong>
            {s.matchingFeasts.map((f) => f.name).join(' · ')}.
          </p>
        ) : null}
      </InfoBlock>

      <HolyFiguresSection state={s} onOpenDetail={(d) => setDetailPayload(d)} />

      <UpcomingTimeline now={now} onOpenDetail={setDetailPayload} />

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
