import ContentPageLayout from '../../components/sections/ContentPageLayout.jsx'
import ExternalSourceCard from '../../components/sections/ExternalSourceCard.jsx'
import ExternalSourceSupportSection from '../../components/sections/ExternalSourceSupportSection.jsx'
import SectionDivider from '../../components/sections/SectionDivider.jsx'
import {
  AccordionSummarySections,
  CautionsList,
  NotesList,
} from '../../components/content/SummaryBlocks.jsx'
import { subpageOutlines } from '../../data/subpageOutlines.js'

/**
 * Learn subpage shell: outline from subpageOutlines + narrative from src/content.
 */
export default function LearnTopicPage({ outlineKey, content }) {
  const outline = subpageOutlines[outlineKey]
  if (!outline) return null

  const ext = content.externalSupport

  return (
    <ContentPageLayout
      title={content.title}
      category={outline.category}
      summary={content.intro}
    >
      <CautionsList items={content.cautions} />
      <NotesList items={content.notes} />
      <AccordionSummarySections sections={content.sections} headingIdPrefix={outlineKey} />
      {ext?.card ? (
        <>
          <SectionDivider />
          <ExternalSourceSupportSection
            id={ext.id}
            eyebrow={ext.eyebrow}
            title={ext.title}
            subtitle={ext.subtitle}
            intro={ext.intro}
          >
            <ExternalSourceCard {...ext.card} />
          </ExternalSourceSupportSection>
        </>
      ) : null}
    </ContentPageLayout>
  )
}
