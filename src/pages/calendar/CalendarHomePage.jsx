import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import '../../styles/ContentComponents.css'
import PageHeader from '../../components/sections/PageHeader.jsx'
import SectionTitle from '../../components/sections/SectionTitle.jsx'
import SectionDivider from '../../components/sections/SectionDivider.jsx'
import StatusBox from '../../components/sections/StatusBox.jsx'
import CalendarSectionCard from '../../components/calendar/CalendarSectionCard.jsx'
import { calendarHomeCardRoutes } from '../../data/calendarPages.js'
import { getLiturgicalDayState } from '../../utils/liturgicalCalendar.js'
import '../../components/calendar/CalendarComponents.css'
import '../../components/calendar/CalendarCards.css'

export default function CalendarHomePage() {
  const { t } = useTranslation('common')
  const snapshot = getLiturgicalDayState(new Date())

  const cards = useMemo(
    () =>
      calendarHomeCardRoutes.map((c) => ({
        to: c.to,
        title: t(`calendarHub.cards.${c.key}.title`),
        description: t(`calendarHub.cards.${c.key}.description`),
        category: t(`commonUi.${c.categoryKey}`),
      })),
    [t],
  )

  return (
    <article className="content-page calendar-home">
      <PageHeader title={t('calendarHub.title')} eyebrow={t('calendarHub.eyebrow')}>
        <p className="page-hero__subtitle">{t('calendarHub.intro')}</p>
        <p className="page-hero__subtitle">{t('calendarHub.purpose')}</p>
      </PageHeader>

      <StatusBox tone="calm" className="calendar-home__notice">
        {t('calendarHub.notice')}
      </StatusBox>

      <section className="cal-how-grid" aria-labelledby="cal-snapshot-heading">
        <div className="cal-how-card" style={{ gridColumn: '1 / -1' }}>
          <h3 id="cal-snapshot-heading">{t('calendarHub.snapshotHeading')}</h3>
          <p>
            <strong>{t('calendarHub.gregorian')} </strong>
            {snapshot.gregorianFormatted}
            <br />
            <strong>{t('calendarHub.ethiopian')} </strong>
            {snapshot.ethiopianFormatted}
            <br />
            <strong>{t('calendarHub.weekdayTheme')} </strong>
            {snapshot.weekdayThemeShort}
          </p>
        </div>
      </section>

      <SectionDivider />

      <SectionTitle
        id="calendar-how-heading"
        title={t('calendarHub.howTitle')}
        subtitle={t('calendarHub.homeLead')}
      />
      <div className="cal-how-grid">
        <div className="cal-how-card">
          <h3>{t('calendarHub.howCard1Title')}</h3>
          <p>{t('calendarHub.howCard1Body')}</p>
        </div>
        <div className="cal-how-card">
          <h3>{t('calendarHub.howCard2Title')}</h3>
          <p>{t('calendarHub.howCard2Body')}</p>
        </div>
        <div className="cal-how-card">
          <h3>{t('calendarHub.howCard3Title')}</h3>
          <p>{t('calendarHub.howCard3Body')}</p>
        </div>
      </div>

      <SectionDivider />

      <SectionTitle
        id="calendar-areas-heading"
        title={t('calendarHub.exploreTitle')}
        subtitle={t('calendarHub.exploreSubtitle')}
      />

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
