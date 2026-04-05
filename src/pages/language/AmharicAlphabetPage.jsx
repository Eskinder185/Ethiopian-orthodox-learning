import '../../styles/ContentComponents.css'
import PageHeader from '../../components/sections/PageHeader.jsx'
import SectionTitle from '../../components/sections/SectionTitle.jsx'
import SectionDivider from '../../components/sections/SectionDivider.jsx'
import StatusBox from '../../components/sections/StatusBox.jsx'
import InfoBlock from '../../components/sections/InfoBlock.jsx'
import ExternalLinksSection from '../../components/sections/ExternalLinksSection.jsx'
import LetterCard from '../../components/language/LetterCard.jsx'
import PracticeSteps from '../../components/language/PracticeSteps.jsx'
import NotesBox from '../../components/shared/NotesBox.jsx'
import { alphabetPage } from '../../data/languagePages.js'
import '../../components/language/LanguageComponents.css'

export default function AmharicAlphabetPage() {
  const {
    category,
    title,
    intro,
    notice,
    sectionBlurb,
    starterTitle,
    starterSubtitle,
    exampleLetters,
    howToPracticeTitle,
    howToPracticeSteps,
    progressTitle,
    progressIntro,
    externalSection,
  } = alphabetPage

  return (
    <article className="content-page language-page language-page--alphabet">
      <PageHeader category={category} title={title} intro={intro} compact />

      <StatusBox tone="calm" className="practice-page__notice">
        {notice}
      </StatusBox>

      {sectionBlurb ? (
        <InfoBlock title="About this area" variant="soft">
          <p>{sectionBlurb}</p>
        </InfoBlock>
      ) : null}

      <section aria-labelledby="alphabet-starter-heading">
        <SectionTitle
          id="alphabet-starter-heading"
          title={starterTitle}
          subtitle={starterSubtitle}
        />
        <div className="letter-card-grid">
          {exampleLetters.map((item, i) => (
            <LetterCard
              key={`${item.symbol}-${i}`}
              symbol={item.symbol}
              label={item.label}
              note={item.note}
            />
          ))}
        </div>
      </section>

      <PracticeSteps title={howToPracticeTitle} steps={howToPracticeSteps} />

      <section aria-labelledby="alphabet-progress-heading">
        <SectionTitle id="alphabet-progress-heading" title={progressTitle} />
        <InfoBlock variant="soft">
          <p>{progressIntro}</p>
        </InfoBlock>
      </section>

      <ExternalLinksSection
        title={externalSection.title}
        intro={externalSection.intro}
        links={externalSection.links}
      />

      <SectionDivider />

      <NotesBox title="Session log">
        <p>
          After each session, note which consonant family you practiced and one shape that still
          feels unsure. A simple notebook line is enough.
        </p>
      </NotesBox>
    </article>
  )
}
