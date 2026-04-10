import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../../styles/ContentComponents.css'
import SectionDivider from '../../components/sections/SectionDivider.jsx'
import CalendarHubHero from '../../components/calendar/hub/CalendarHubHero.jsx'
import CalendarHubTodaySnapshot from '../../components/calendar/hub/CalendarHubTodaySnapshot.jsx'
import CalendarHubDualCalendar from '../../components/calendar/hub/CalendarHubDualCalendar.jsx'
import CalendarHubNotice from '../../components/calendar/hub/CalendarHubNotice.jsx'
import CalendarHubHowSection from '../../components/calendar/hub/CalendarHubHowSection.jsx'
import CalendarHubExploreCard from '../../components/calendar/hub/CalendarHubExploreCard.jsx'
import CalendarSeasonalHubPreview from '../../components/calendar/hub/CalendarSeasonalHubPreview.jsx'
import RelatedContentStrip from '../../components/calendar/dashboard/RelatedContentStrip.jsx'
import CalendarFunFacts from '../../components/calendar/dashboard/CalendarFunFacts.jsx'
import { calendarHomeCardRoutes } from '../../data/calendarPages.js'
import { getLiturgicalDayState } from '../../utils/liturgicalCalendar.js'
import '../../components/calendar/CalendarComponents.css'
import '../../components/calendar/CalendarCards.css'
import '../../components/calendar/dashboard/CalendarDashboard.css'
import '../../components/calendar/hub/CalendarHub.css'

export default function CalendarHomePage() {
  const { t } = useTranslation('common')
  const [now] = useState(() => new Date())
  const snapshot = useMemo(() => getLiturgicalDayState(now), [now])

  const cards = useMemo(
    () =>
      calendarHomeCardRoutes.map((c) => ({
        to: c.to,
        routeKey: c.key,
        title: t(`calendarHub.cards.${c.key}.title`),
        description: t(`calendarHub.cards.${c.key}.description`),
        category: t(`commonUi.${c.categoryKey}`),
      })),
    [t],
  )

  return (
    <article className="content-page calendar-home calendar-home--hub-v2">
      <CalendarHubHero state={snapshot} now={now} />

      <div className="cal-hub-page-inner">
        <CalendarHubTodaySnapshot state={snapshot} now={now} />

        <CalendarHubDualCalendar state={snapshot} />

        <CalendarHubNotice />

        <SectionDivider className="cal-hub-divider" />

        <CalendarHubHowSection />

        <SectionDivider className="cal-hub-divider" />

        <header className="cal-hub-section-head cal-hub-reveal cal-hub-reveal--delay-1" id="calendar-explore">
          <h2 className="cal-hub-section-head__title">{t('calendarHub.exploreTitle')}</h2>
          <p className="cal-hub-section-head__sub">{t('calendarHub.exploreSubtitle')}</p>
        </header>

        <div className="cal-hub-explore-grid">
          {cards.map((c, idx) => (
            <CalendarHubExploreCard
              key={c.to}
              to={c.to}
              routeKey={c.routeKey}
              title={c.title}
              description={c.description}
              category={c.category}
              className={`cal-hub-reveal cal-hub-reveal--delay-${Math.min(idx + 1, 5)}`}
            />
          ))}
        </div>

        <SectionDivider className="cal-hub-divider" />

        <CalendarFunFacts variant="hub" />

        <SectionDivider className="cal-hub-divider" />

        <CalendarSeasonalHubPreview state={snapshot} />

        <SectionDivider className="cal-hub-divider" />

        <RelatedContentStrip feast={snapshot.matchingFeasts[0] ?? null} variant="hub" />
      </div>
    </article>
  )
}
