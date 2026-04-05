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
        <ExpandableText lines={3} className="home__lead-expand" moreLabel="Read more">
          <p className="home__lead">{hc.intro.lead}</p>
        </ExpandableText>
        <div className="home__hero-actions">
          <ActionButton to={paths.practice.index} variant="primary">
            Begin practice
          </ActionButton>
          <ActionButton to={paths.learn.index} variant="ghost">
            Learn
          </ActionButton>
        </div>
      </PageHeader>

      <CollapsiblePanel
        title="About materials on this site"
        icon="◇"
        defaultOpen={false}
        className="home__framework-collapsible"
      >
        <StatusBox tone="calm" className="home__framework-note">
          {hc.frameworkNotice}
        </StatusBox>
      </CollapsiblePanel>

      <section className="home__section" aria-labelledby="home-rhythm-heading">
        <SectionTitle
          id="home-rhythm-heading"
          title={s.rhythm.title}
          subtitle={s.rhythm.subtitle}
        />
        <div className="topic-card-row home__topic-row">
          <span className="topic-card-row__icon" aria-hidden="true">
            🙏
          </span>
          <div className="topic-card-row__body">
            <p className="home__teaser">{hc.rhythmTeaser}</p>
            <CollapsiblePanel
              title="More on prayer, fasting, and reading"
              defaultOpen={false}
              icon="✧"
            >
              <InfoBlock variant="soft">
                {hc.rhythmParagraphs.map((para, i) => (
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
        <div className="topic-card-row home__topic-row">
          <span className="topic-card-row__icon" aria-hidden="true">
            ✦
          </span>
          <div className="topic-card-row__body">
            <p className="home__teaser">{hc.missionTeaser}</p>
            <CollapsiblePanel title="Our purpose — full statement" defaultOpen={false} icon="◇">
              <InfoBlock variant="soft">
                {hc.missionParagraphs.map((para, i) => (
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
