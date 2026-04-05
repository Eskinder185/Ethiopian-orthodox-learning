import '../../styles/ContentComponents.css'
import PageHeader from './PageHeader.jsx'
import SectionDivider from './SectionDivider.jsx'
import InfoBlock from './InfoBlock.jsx'
import InfoBanner from './InfoBanner.jsx'
import PracticeFlowSteps from './PracticeFlowSteps.jsx'
import ExternalLinksSection, {
  hasValidExternalLinks,
} from './ExternalLinksSection.jsx'
import ResourceList from './ResourceList.jsx'
import TopicAccordion from '../ui/TopicAccordion.jsx'
import CollapsiblePanel from '../ui/CollapsiblePanel.jsx'
import PageJumpNav from '../ui/PageJumpNav.jsx'
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
    introShort,
    orientationAccordion,
    practiceNotice = placeholderCopy.practiceFirstSite,
    howToUseSummary,
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
    jumpNavLinks = [],
  } = config

  const reflectionTitle = reflectionTitleProp ?? notesTitle ?? 'After practice'
  const reflectionBody = reflectionBodyProp ?? notesBody

  const {
    title: extTitle,
    intro: extIntro,
    links: extLinks,
    footnote: extFootnote,
  } = externalSection

  const headerIntro = introShort ?? intro
  const showJumpNav = jumpNavLinks?.length > 0

  return (
    <article
      className={
        'content-page practice-page practice-page-template' +
        (showJumpNav ? ' practice-page--with-jump' : '')
      }
    >
      <div className="practice-page__columns">
        <div className="practice-page__primary">
          <PageHeader category={category} title={title} intro={headerIntro} compact />

          {orientationAccordion?.length ? (
            <div id="practice-orientation">
              <TopicAccordion
                items={orientationAccordion}
                className="content-accordion--tight"
              />
            </div>
          ) : null}

          <InfoBanner title="Using this page" tone="calm" className="practice-page__notice">
            <p>{practiceNotice}</p>
          </InfoBanner>

          <section id="how-to-heading" className="practice-page__howto">
            <CollapsiblePanel
              anchorId="how-to-panel"
              title="How to use this page"
              icon="◇"
              defaultOpen={false}
            >
              {howToUseSummary ? (
                <p className="practice-page__collapsible-lead">{howToUseSummary}</p>
              ) : null}
              <InfoBlock title="Guide" variant="soft">
                <div className="practice-page__howto-body">
                  {howToUse.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </InfoBlock>
            </CollapsiblePanel>
          </section>

          <PageSectionCompat className="practice-page__flow-section">
            <PracticeFlowSteps title={flowTitle} steps={steps} />
          </PageSectionCompat>

          {hasValidExternalLinks(extLinks) ? (
            <CollapsiblePanel
              anchorId="practice-external-resources"
              title={extTitle}
              icon="↗"
              defaultOpen={false}
            >
              <ExternalLinksSection
                title={extTitle}
                intro={extIntro}
                links={extLinks ?? []}
                footnote={extFootnote}
                suppressHeader
                className="practice-page__external-inner"
              />
            </CollapsiblePanel>
          ) : null}

          {afterExternalLinks}

          <SectionDivider />

          <section id="reflection-heading" className="practice-page__reflection">
            <CollapsiblePanel
              anchorId="reflection-panel"
              title={reflectionTitle}
              icon="✧"
              defaultOpen={false}
            >
              <p className="practice-page__reflection-lead">{reflectionSubtitle}</p>
              {reflectionBody ? (
                <InfoBlock title="Ideas">
                  <p>{reflectionBody}</p>
                </InfoBlock>
              ) : null}
            </CollapsiblePanel>
          </section>

          <section id="checklist-heading" className="practice-page__checklist">
            <CollapsiblePanel
              anchorId="checklist-panel"
              title={checklistTitle}
              icon="☐"
              defaultOpen={false}
            >
              <p className="practice-page__checklist-lead">{checklistSubtitle}</p>
              <ul className="practice-checklist" role="list">
                {checklistItems.map((text, i) => (
                  <li key={i} className="practice-checklist__item">
                    <span className="practice-checklist__box" aria-hidden="true" />
                    <span className="practice-checklist__label">{text}</span>
                  </li>
                ))}
              </ul>
            </CollapsiblePanel>
          </section>

          {relatedItems.length > 0 ? (
            <ResourceList
              className="practice-page__related"
              title="Related practice pages"
              items={relatedItems}
            />
          ) : null}

          {supplement}
        </div>

        {showJumpNav ? (
          <PageJumpNav links={jumpNavLinks} label="On this page" />
        ) : null}
      </div>
    </article>
  )
}

/** Fragment wrapper to avoid extra SectionTitle; keeps flow block spacing. */
function PageSectionCompat({ children, className = '' }) {
  return <div className={className}>{children}</div>
}
