import PageHeader from '../components/sections/PageHeader.jsx'
import ActionButton from '../components/ui/ActionButton.jsx'
import SectionTitle from '../components/sections/SectionTitle.jsx'
import PracticeCard from '../components/cards/PracticeCard.jsx'
import InfoBlock from '../components/sections/InfoBlock.jsx'
import StatusBox from '../components/sections/StatusBox.jsx'
import QuickLinksSection from '../components/sections/QuickLinksSection.jsx'
import FeatureGrid from '../components/sections/FeatureGrid.jsx'
import { paths } from '../constants/paths.js'
import { homeContent, homeQuickSections, homeFeaturedPractice } from '../content/homeContent.js'
import './HomePage.css'

export default function HomePage() {
  const hc = homeContent
  const s = hc.sections

  return (
    <div className="home">
      <PageHeader
        className="home__hero"
        title={hc.intro.title}
        intro={hc.intro.tagline}
      >
        <p className="home__lead">{hc.intro.lead}</p>
        <div className="home__hero-actions">
          <ActionButton to={paths.practice.index} variant="primary">
            Begin practice
          </ActionButton>
          <ActionButton to={paths.learn.index} variant="ghost">
            Learn
          </ActionButton>
        </div>
      </PageHeader>

      <StatusBox tone="calm" className="home__framework-note">
        {hc.frameworkNotice}
      </StatusBox>

      <section className="home__section" aria-labelledby="home-rhythm-heading">
        <SectionTitle
          id="home-rhythm-heading"
          title={s.rhythm.title}
          subtitle={s.rhythm.subtitle}
        />
        <InfoBlock variant="soft">
          {hc.rhythmParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </InfoBlock>
      </section>

      <QuickLinksSection
        className="home__section"
        id="home-quick-heading"
        title={s.quickLinks.title}
        subtitle={s.quickLinks.subtitle}
        links={homeQuickSections}
      />

      <div className="home__section">
        <FeatureGrid
          id="home-featured-heading"
          title={s.featuredPractice.title}
          subtitle={s.featuredPractice.subtitle}
          variant="featured"
        >
          {homeFeaturedPractice.map((item) => (
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
        <SectionTitle id="home-mission-heading" title={s.mission.title} />
        <InfoBlock variant="soft">
          {hc.missionParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </InfoBlock>
      </section>
    </div>
  )
}
