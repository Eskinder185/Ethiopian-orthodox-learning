import { Link } from 'react-router-dom'
import PageHeader from '../../components/sections/PageHeader.jsx'
import SectionTitle from '../../components/sections/SectionTitle.jsx'
import StatusBox from '../../components/sections/StatusBox.jsx'
import InfoBlock from '../../components/sections/InfoBlock.jsx'
import ProgressCard from '../../components/progress/ProgressCard.jsx'
import { paths } from '../../constants/paths.js'
import { progressSiteContent, progressNavCards } from '../../content/progressSiteContent.js'
import '../../components/progress/ProgressComponents.css'

export default function ProgressHomePage() {
  const { home, supportTitle, supportParagraphs, practiceAreasTitle, practiceAreasSubtitle } =
    progressSiteContent

  return (
    <article className="content-page progress-dashboard">
      <PageHeader category={home.category} title={home.title} intro={home.intro} compact />

      <StatusBox tone="calm" className="progress-dashboard__notice">
        {home.notice}
      </StatusBox>

      <section
        className="progress-dashboard__section"
        aria-labelledby="progress-support-heading"
      >
        <SectionTitle id="progress-support-heading" title={supportTitle} />
        <InfoBlock variant="soft">
          {supportParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </InfoBlock>
      </section>

      <section
        className="progress-dashboard__section"
        aria-labelledby="progress-areas-heading"
      >
        <SectionTitle
          id="progress-areas-heading"
          title={practiceAreasTitle}
          subtitle={practiceAreasSubtitle}
        />
        <div className="progress-cards-grid">
          {progressNavCards.map((card) => (
            <ProgressCard
              key={card.to}
              title={card.title}
              description={card.description}
              to={card.to}
              badge="Open"
            />
          ))}
        </div>
      </section>

      <nav className="progress-dashboard__subnav" aria-label="Progress subpages">
        <Link to={paths.progress.stats} className="text-link">
          Stats & summary →
        </Link>
        <span aria-hidden="true" className="progress-dashboard__subnav-sep">
          ·
        </span>
        <Link to={paths.progress.tracking} className="text-link">
          Practice tracking →
        </Link>
        <span aria-hidden="true" className="progress-dashboard__subnav-sep">
          ·
        </span>
        <Link to={paths.practice.index} className="text-link">
          Practice hub →
        </Link>
      </nav>
    </article>
  )
}
