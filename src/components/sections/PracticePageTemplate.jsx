import '../../styles/ContentComponents.css'
import PageHeader from './PageHeader.jsx'
import SectionDivider from './SectionDivider.jsx'
import InfoBlock from './InfoBlock.jsx'
import InfoBanner from './InfoBanner.jsx'
import PracticeFlowSteps from './PracticeFlowSteps.jsx'
import ExternalLinksSection from './ExternalLinksSection.jsx'
import ResourceList from './ResourceList.jsx'
import PageSection from '../ui/PageSection.jsx'
import { placeholderCopy } from '../../data/uiCopy.js'

const DEFAULT_CHECKLIST = [
  'Listen from the original source',
  'Repeat slowly',
  'Read carefully',
  'Practice from memory',
  'Review again later',
]

/**
 * Reusable practice page: how-to, flow, external links (when curated), reflection, checklist.
 */
export default function PracticePageTemplate({
  config,
  supplement = null,
  afterExternalLinks = null,
}) {
  if (!config) return null

  const {
    category,
    title,
    intro,
    practiceNotice = placeholderCopy.practiceFirstSite,
    howToUse = [],
    flowTitle = 'Step-by-step practice flow',
    steps = [],
    externalSection = {},
    reflectionTitle: reflectionTitleProp,
    reflectionSubtitle = 'After each session, a few honest notes in your own notebook help more than any score.',
    reflectionBody: reflectionBodyProp,
    notesTitle,
    notesBody,
    checklistTitle = 'Session checklist',
    checklistSubtitle = 'Work through these in order; mark them mentally or on paper as you go.',
    checklistItems = DEFAULT_CHECKLIST,
    relatedItems = [],
  } = config

  const reflectionTitle = reflectionTitleProp ?? notesTitle ?? 'After practice'
  const reflectionBody = reflectionBodyProp ?? notesBody

  const {
    title: extTitle,
    intro: extIntro,
    links: extLinks,
    footnote: extFootnote,
  } = externalSection

  return (
    <article className="content-page practice-page practice-page-template">
      <PageHeader category={category} title={title} intro={intro} compact />

      <InfoBanner title="Using this page" tone="calm" className="practice-page__notice">
        <p>{practiceNotice}</p>
      </InfoBanner>

      <PageSection
        id="how-to-heading"
        className="practice-page__howto"
        title="How to use this page"
        subtitle="Follow the flow below; sacred texts and audio stay on linked sites when we provide them."
      >
        <InfoBlock title="Guide" variant="soft">
          <div className="practice-page__howto-body">
            {howToUse.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </InfoBlock>
      </PageSection>

      <PageSection className="practice-page__flow-section">
        <PracticeFlowSteps title={flowTitle} steps={steps} />
      </PageSection>

      <ExternalLinksSection
        className="practice-page__external-block"
        title={extTitle}
        intro={extIntro}
        links={extLinks ?? []}
        footnote={extFootnote}
      />

      {afterExternalLinks}

      <SectionDivider />

      <PageSection
        id="reflection-heading"
        className="practice-page__reflection"
        title={reflectionTitle}
        subtitle={reflectionSubtitle}
      >
        {reflectionBody ? (
          <InfoBlock title="Ideas">
            <p>{reflectionBody}</p>
          </InfoBlock>
        ) : null}
      </PageSection>

      <PageSection
        id="checklist-heading"
        className="practice-page__checklist"
        title={checklistTitle}
        subtitle={checklistSubtitle}
      >
        <ul className="practice-checklist" role="list">
          {checklistItems.map((text, i) => (
            <li key={i} className="practice-checklist__item">
              <span className="practice-checklist__box" aria-hidden="true" />
              <span className="practice-checklist__label">{text}</span>
            </li>
          ))}
        </ul>
      </PageSection>

      {relatedItems.length > 0 ? (
        <ResourceList
          className="practice-page__related"
          title="Related practice pages"
          items={relatedItems}
        />
      ) : null}

      {supplement}
    </article>
  )
}
