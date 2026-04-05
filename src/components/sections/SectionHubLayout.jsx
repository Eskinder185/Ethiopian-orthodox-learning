import '../../styles/ContentComponents.css'
import PageHeader from './PageHeader.jsx'
import SectionTitle from './SectionTitle.jsx'
import SectionOverview from './SectionOverview.jsx'
import ContentCard from '../cards/ContentCard.jsx'
import InfoBlock from './InfoBlock.jsx'
import StatusBox from './StatusBox.jsx'
import SectionDivider from './SectionDivider.jsx'
import ExpandableText from '../ui/ExpandableText.jsx'
import CollapsiblePanel from '../ui/CollapsiblePanel.jsx'
import { placeholderCopy } from '../../data/uiCopy.js'

/**
 * Section landing (Learn, Practice, …): header, overview, topic cards, optional info slots.
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
  headerCompact = false,
  materialsNote = placeholderCopy.hubNotice,
  showMaterialsNote = false,
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
        <ExpandableText lines={4} moreLabel="Show more" className="section-hub__overview-expand">
          <p>{overview}</p>
        </ExpandableText>
      </SectionOverview>

      {showMaterialsNote && materialsNote ? (
        <CollapsiblePanel
          title="Note on materials"
          icon="◇"
          defaultOpen={false}
          className="section-hub__materials-collapsible"
        >
          <StatusBox tone="muted" className="section-hub__materials-note">
            {materialsNote}
          </StatusBox>
        </CollapsiblePanel>
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
    </article>
  )
}
