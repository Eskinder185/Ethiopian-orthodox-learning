import '../../styles/ContentComponents.css'
import PageHeader from '../../components/sections/PageHeader.jsx'
import SectionTitle from '../../components/sections/SectionTitle.jsx'
import SectionDivider from '../../components/sections/SectionDivider.jsx'
import StatusBox from '../../components/sections/StatusBox.jsx'
import InfoBlock from '../../components/sections/InfoBlock.jsx'
import ExternalLinksSection from '../../components/sections/ExternalLinksSection.jsx'
import ResourceList from '../../components/sections/ResourceList.jsx'
import PracticeSteps from '../../components/language/PracticeSteps.jsx'
import NotesBox from '../../components/shared/NotesBox.jsx'
import { writingPracticePage } from '../../data/languagePages.js'
import '../../components/language/LanguageComponents.css'

export default function WritingPracticePage() {
  const {
    category,
    title,
    intro,
    notice,
    sectionBlurb,
    howToUse,
    methodTitle,
    methodSteps,
    practiceFocusTitle,
    practiceFocusBody,
    externalSection,
    reflectionTitle,
    reflectionPrompts,
    relatedItems,
  } = writingPracticePage

  return (
    <article className="content-page language-page language-page--writing">
      <PageHeader category={category} title={title} intro={intro} compact />

      <StatusBox tone="calm" className="practice-page__notice">
        {notice}
      </StatusBox>

      {sectionBlurb ? (
        <InfoBlock title="About this area" variant="soft">
          <p>{sectionBlurb}</p>
        </InfoBlock>
      ) : null}

      <section className="practice-page__howto" aria-labelledby="writing-howto-heading">
        <SectionTitle
          id="writing-howto-heading"
          title="Before you write"
          subtitle="Short habits that keep practice respectful and sustainable."
        />
        <InfoBlock title="Guide" variant="soft">
          <div className="practice-page__howto-body">
            {howToUse.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </InfoBlock>
      </section>

      <PracticeSteps title={methodTitle} steps={methodSteps} />

      <section aria-labelledby="writing-focus-heading">
        <SectionTitle id="writing-focus-heading" title={practiceFocusTitle} />
        <InfoBlock variant="soft">
          <p>{practiceFocusBody}</p>
        </InfoBlock>
      </section>

      <ExternalLinksSection
        title={externalSection.title}
        intro={externalSection.intro}
        links={externalSection.links}
      />

      <SectionDivider />

      <NotesBox title={reflectionTitle}>
        <p>Briefly on paper or in a notes app:</p>
        <ul>
          {reflectionPrompts.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </NotesBox>

      {relatedItems.length > 0 ? (
        <ResourceList
          className="practice-page__related"
          title="Related pages"
          items={relatedItems}
        />
      ) : null}
    </article>
  )
}
