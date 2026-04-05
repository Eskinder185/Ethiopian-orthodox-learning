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
import { pronunciationPage } from '../../data/languagePages.js'
import '../../components/language/LanguageComponents.css'

export default function PronunciationPage() {
  const {
    category,
    title,
    intro,
    notice,
    sectionBlurb,
    howToUse,
    flowTitle,
    flowSteps,
    selfCheckTitle,
    selfCheckTips,
    externalSection,
    relatedItems,
  } = pronunciationPage

  return (
    <article className="content-page language-page language-page--pronunciation">
      <PageHeader category={category} title={title} intro={intro} compact />

      <StatusBox tone="calm" className="practice-page__notice">
        {notice}
      </StatusBox>

      {sectionBlurb ? (
        <InfoBlock title="About this area" variant="soft">
          <p>{sectionBlurb}</p>
        </InfoBlock>
      ) : null}

      <section className="practice-page__howto" aria-labelledby="pronunciation-howto-heading">
        <SectionTitle
          id="pronunciation-howto-heading"
          title="Set up for listening"
          subtitle="Respect neighbors, protect your ears, and keep recordings on your own device if you use them."
        />
        <InfoBlock title="Guide" variant="soft">
          <div className="practice-page__howto-body">
            {howToUse.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </InfoBlock>
      </section>

      <PracticeSteps title={flowTitle} steps={flowSteps} />

      <ExternalLinksSection
        title={externalSection.title}
        intro={externalSection.intro}
        links={externalSection.links}
      />

      <SectionDivider />

      <NotesBox title={selfCheckTitle}>
        <ul>
          {selfCheckTips.map((tip, i) => (
            <li key={i}>{tip}</li>
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
