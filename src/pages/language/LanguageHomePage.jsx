import '../../styles/ContentComponents.css'
import PageHeader from '../../components/sections/PageHeader.jsx'
import SectionTitle from '../../components/sections/SectionTitle.jsx'
import SectionDivider from '../../components/sections/SectionDivider.jsx'
import StatusBox from '../../components/sections/StatusBox.jsx'
import ResourceList from '../../components/sections/ResourceList.jsx'
import LanguageSectionCard from '../../components/language/LanguageSectionCard.jsx'
import { languageHome } from '../../data/languagePages.js'
import '../../components/language/LanguageComponents.css'

export default function LanguageHomePage() {
  const { title, eyebrow, intro, purpose, notice, cards, relatedItems } = languageHome

  return (
    <article className="content-page language-home">
      <PageHeader title={title} eyebrow={eyebrow}>
        <p className="page-hero__subtitle">{intro}</p>
        <p className="page-hero__subtitle">{purpose}</p>
      </PageHeader>

      <StatusBox tone="calm" className="language-home__notice">
        {notice}
      </StatusBox>

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

      {relatedItems.length > 0 ? (
        <>
          <SectionDivider />
          <ResourceList title="Related on this site" items={relatedItems} />
        </>
      ) : null}
    </article>
  )
}
