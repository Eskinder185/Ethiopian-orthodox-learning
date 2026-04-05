import '../../styles/ContentComponents.css'
import PageHeader from './PageHeader.jsx'
import SectionTitle from './SectionTitle.jsx'
import SectionOverview from './SectionOverview.jsx'
import ContentCard from '../cards/ContentCard.jsx'
import ResourceList from './ResourceList.jsx'
import InfoBlock from './InfoBlock.jsx'
import StatusBox from './StatusBox.jsx'
import SectionDivider from './SectionDivider.jsx'
import { placeholderCopy } from '../../data/uiCopy.js'

const defaultInfoChildren = (
  <p>
    Summaries and practice flows on this site are meant to complement parish life
    and authorized books. When you add your own short guides or link lists, keep
    them original or clearly permitted — and point readers to official sources for
    full texts.
  </p>
)

/**
 * Section landing (Learn, Practice, …): header, overview, topic cards, optional resources.
 */
export default function SectionHubLayout({
  title,
  intro,
  overview,
  eyebrow,
  topics = [],
  topicsTitle = 'Where to go next',
  topicsSubtitle,
  contentSlots,
  resourceItems = [],
  infoTitle = 'Using this section',
  infoChildren,
  headerCompact = false,
  materialsNote = placeholderCopy.hubNotice,
  showMaterialsNote = true,
}) {
  const slots = Array.isArray(contentSlots) ? contentSlots : []
  const showSlots = slots.length > 0

  return (
    <article className="content-page section-hub">
      <PageHeader
        title={title}
        intro={intro}
        eyebrow={eyebrow}
        compact={headerCompact}
      />

      <SectionOverview>
        <p>{overview}</p>
      </SectionOverview>

      {showMaterialsNote && materialsNote ? (
        <StatusBox tone="muted" className="section-hub__materials-note">
          {materialsNote}
        </StatusBox>
      ) : null}

      <SectionDivider />

      <SectionTitle
        id="section-topics-heading"
        title={topicsTitle}
        subtitle={topicsSubtitle}
      />

      <div className="feature-grid feature-grid--topics">
        {topics.map((t) => (
          <ContentCard
            key={t.to}
            to={t.to}
            title={t.title}
            description={t.description}
            category={t.category}
          />
        ))}
      </div>

      {showSlots ? (
        <>
          <SectionDivider />
          <div className="section-hub__slots">
            {slots.map((s) => (
              <InfoBlock key={s.title} title={s.title} variant="soft">
                {s.text ? <p>{s.text}</p> : null}
              </InfoBlock>
            ))}
          </div>
        </>
      ) : null}

      <SectionDivider />

      <InfoBlock title={infoTitle} variant="soft">
        {infoChildren ?? defaultInfoChildren}
      </InfoBlock>

      {resourceItems.length > 0 ? (
        <ResourceList
          className="section-hub__resource-list"
          title="On this site"
          items={resourceItems}
        />
      ) : null}
    </article>
  )
}
