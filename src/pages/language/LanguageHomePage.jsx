import '../../styles/ContentComponents.css'
import PageHeader from '../../components/sections/PageHeader.jsx'
import SectionTitle from '../../components/sections/SectionTitle.jsx'
import SectionDivider from '../../components/sections/SectionDivider.jsx'
import StatusBox from '../../components/sections/StatusBox.jsx'
import ExternalSourceCard from '../../components/sections/ExternalSourceCard.jsx'
import ExternalSourceSupportSection from '../../components/sections/ExternalSourceSupportSection.jsx'
import LanguageSectionCard from '../../components/language/LanguageSectionCard.jsx'
import LanguagePracticeHubStrip from '../../components/language/LanguagePracticeHubStrip.jsx'
import { amharicAlphabetInteractive } from '../../data/curatedExternalLinks.js'
import { languageHome } from '../../data/languagePages.js'
import '../../components/language/LanguageComponents.css'

export default function LanguageHomePage() {
  const { title, eyebrow, intro, purpose, notice, cards } = languageHome

  return (
    <article className="content-page language-home">
      <PageHeader title={title} eyebrow={eyebrow}>
        <p className="page-hero__subtitle">{intro}</p>
        <p className="page-hero__subtitle">{purpose}</p>
      </PageHeader>

      <StatusBox tone="calm" className="language-home__notice">
        {notice}
      </StatusBox>

      <LanguagePracticeHubStrip />

      <SectionDivider />

      <SectionTitle
        id="language-areas-heading"
        title="Where to start"
        subtitle="Reading, writing, or listening — pick one door and grow little by little."
      />

      <div className="feature-grid feature-grid--topics">
        {cards.map((c) => (
          <LanguageSectionCard
            key={c.to}
            to={c.to}
            title={c.title}
            description={c.description}
            category={c.category}
          />
        ))}
      </div>

      <SectionDivider />
      <ExternalSourceSupportSection
        id="language-external-support"
        eyebrow="Trusted external source"
        title="Go deeper"
        subtitle="Alphabet & pronunciation tool"
        intro="Use this when you want interactive fidel practice and sound. You will leave OrthodoxPath in a new tab."
      >
        <ExternalSourceCard
          title="Amharic alphabet and pronunciation"
          description="Practice fidel and pronunciation using this external learning tool."
          href={amharicAlphabetInteractive.href}
          buttonLabel="Open alphabet practice"
          variant="language"
        />
      </ExternalSourceSupportSection>
    </article>
  )
}
