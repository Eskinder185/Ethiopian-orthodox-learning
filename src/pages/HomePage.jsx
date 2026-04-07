import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import TodayInTheChurchSection from '../components/home/TodayInTheChurchSection.jsx'
import PageHeader from '../components/sections/PageHeader.jsx'
import ActionButton from '../components/ui/ActionButton.jsx'
import SectionTitle from '../components/sections/SectionTitle.jsx'
import PracticeCard from '../components/cards/PracticeCard.jsx'
import InfoBlock from '../components/sections/InfoBlock.jsx'
import StatusBox from '../components/sections/StatusBox.jsx'
import QuickLinksSection from '../components/sections/QuickLinksSection.jsx'
import FeatureGrid from '../components/sections/FeatureGrid.jsx'
import ExpandableText from '../components/ui/ExpandableText.jsx'
import CollapsiblePanel from '../components/ui/CollapsiblePanel.jsx'
import { paths } from '../constants/paths.js'
import {
  homeFeaturedPracticeConfig,
  homeMissionParagraphs,
  homeQuickLinksConfig,
  homeRhythmParagraphs,
} from '../content/homeContent.js'
import { getLiturgicalDayState } from '../utils/liturgicalCalendar.js'
import '../components/calendar/CalendarComponents.css'
import './HomePage.css'

export default function HomePage() {
  const { t } = useTranslation('common')
  const snapshot = getLiturgicalDayState(new Date())
  const primaryFeast = snapshot.matchingFeasts?.[0]

  const quickLinks = useMemo(
    () =>
      homeQuickLinksConfig.map((item) => ({
        to: item.to,
        title: t(`home.quick.${item.key}.title`),
        description: t(`home.quick.${item.key}.description`),
        category: t('commonUi.section'),
      })),
    [t],
  )

  const featuredPractice = useMemo(
    () =>
      homeFeaturedPracticeConfig.map((item) => ({
        to: item.to,
        title: t(`home.featured.${item.key}.title`),
        description: t(`home.featured.${item.key}.description`),
        practiceType: t(`commonUi.${item.practiceTypeKey}`),
      })),
    [t],
  )

  return (
    <div className="home">
      <PageHeader className="home__hero" title={t('home.title')} intro={t('home.tagline')}>
        <ExpandableText lines={3} className="home__lead-expand" moreLabel={t('commonUi.readMore')}>
          <p className="home__lead">{t('home.lead')}</p>
        </ExpandableText>
        <div className="home__hero-actions">
          <ActionButton to={paths.startHere} variant="primary">
            {t('home.startHere')}
          </ActionButton>
          <ActionButton to={paths.calendar.seasons} variant="ghost">
            {t('home.exploreMonth')}
          </ActionButton>
        </div>
      </PageHeader>

      <TodayInTheChurchSection className="home__section" />

      <StatusBox tone="calm" className="home__section home__who-for">
        <p className="status-box__text">{t('home.whoFor')}</p>
      </StatusBox>

      <section className="home__section" aria-labelledby="home-month-heading">
        <SectionTitle
          id="home-month-heading"
          title={t('home.monthSection.title')}
          subtitle={t('home.monthSection.subtitle')}
        />
        <div className="home__month-preview cal-how-grid">
          <div className="cal-how-card" style={{ gridColumn: '1 / -1' }}>
            <h3 className="home__month-preview-title">{t('home.snapshot.rightNow')}</h3>
            <p>
              <strong>{t('home.snapshot.gregorian')} </strong>
              {snapshot.gregorianFormatted}
              <br />
              <strong>{t('home.snapshot.ethiopian')} </strong>
              {snapshot.ethiopianFormatted}
              <br />
              <strong>{t('home.snapshot.weekdayTheme')} </strong>
              {snapshot.weekdayThemeShort}
            </p>
            <p className="home__month-preview-link">
              <Link to={paths.calendar.today} className="text-link">
                {t('home.snapshot.openToday')}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="home__section" aria-labelledby="home-featured-rhythm-heading">
        <SectionTitle
          id="home-featured-rhythm-heading"
          title={t('home.featuredRhythm.title')}
          subtitle={t('home.featuredRhythm.subtitle')}
        />
        <InfoBlock variant="soft">
          <p>
            <strong>{t('home.snapshot.fastingContext')} </strong>
            {snapshot.primaryFastLabel}
          </p>
          {primaryFeast ? (
            <p>
              <strong>{t('home.snapshot.feastOnData')} </strong>
              {primaryFeast.name}
              {primaryFeast.geezName ? ` (${primaryFeast.geezName})` : ''}
            </p>
          ) : (
            <p>
              <strong>{t('home.snapshot.greatFeasts')} </strong>
              {t('home.snapshot.noFeastHint')}{' '}
              <Link to={paths.calendar.feastsHolyDays} className="text-link">
                {t('home.snapshot.feastsLink')}
              </Link>{' '}
              {t('home.snapshot.andParish')}
            </p>
          )}
        </InfoBlock>
      </section>

      <CollapsiblePanel
        title={t('home.materialsPanelTitle')}
        icon="◇"
        defaultOpen={false}
        className="home__framework-collapsible"
      >
        <StatusBox tone="calm" className="home__framework-note">
          {t('home.frameworkNotice')}
        </StatusBox>
      </CollapsiblePanel>

      <section className="home__section" aria-labelledby="home-rhythm-heading">
        <SectionTitle
          id="home-rhythm-heading"
          title={t('home.rhythm.title')}
          subtitle={t('home.rhythm.subtitle')}
        />
        <div className="topic-card-row home__topic-row">
          <span className="topic-card-row__icon" aria-hidden="true">
            🙏
          </span>
          <div className="topic-card-row__body">
            <p className="home__teaser">{t('home.rhythmTeaser')}</p>
            <CollapsiblePanel
              title={t('home.rhythmMoreTitle')}
              defaultOpen={false}
              icon="✧"
            >
              <InfoBlock variant="soft">
                {homeRhythmParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </InfoBlock>
            </CollapsiblePanel>
          </div>
        </div>
      </section>

      <QuickLinksSection
        className="home__section"
        id="home-quick-heading"
        title={t('home.quickLinks.title')}
        subtitle={t('home.quickLinks.subtitle')}
        links={quickLinks}
      />

      <div className="home__section">
        <FeatureGrid
          id="home-featured-heading"
          title={t('home.featuredPractice.title')}
          subtitle={t('home.featuredPractice.subtitle')}
          variant="featured"
        >
          {featuredPractice.map((item) => (
            <PracticeCard
              key={item.to}
              to={item.to}
              title={item.title}
              description={item.description}
              practiceType={item.practiceType}
            />
          ))}
        </FeatureGrid>
      </div>

      <section className="home__section home__section--mission" aria-labelledby="home-mission-heading">
        <SectionTitle id="home-mission-heading" title={t('home.mission.title')} />
        <div className="topic-card-row home__topic-row">
          <span className="topic-card-row__icon" aria-hidden="true">
            ✦
          </span>
          <div className="topic-card-row__body">
            <p className="home__teaser">{t('home.missionTeaser')}</p>
            <CollapsiblePanel title={t('home.missionPanelTitle')} defaultOpen={false} icon="◇">
              <InfoBlock variant="soft">
                {homeMissionParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </InfoBlock>
            </CollapsiblePanel>
          </div>
        </div>
      </section>
    </div>
  )
}
