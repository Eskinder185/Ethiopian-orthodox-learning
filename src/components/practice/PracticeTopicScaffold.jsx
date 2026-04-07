import '../../styles/ContentComponents.css'
import PageHeader from '../sections/PageHeader.jsx'
import SectionTitle from '../sections/SectionTitle.jsx'
import InfoBlock from '../sections/InfoBlock.jsx'
import ExternalLinksSection from '../sections/ExternalLinksSection.jsx'
import { hasValidExternalLinks } from '../../utils/externalLinks.js'

/**
 * Shared layout for practice topics that are not yet on PracticePageTemplate.
 * sections: { id, title, subtitle?, body: string[] }
 * When embedded=true, renders only sections and external block (no outer article, no header) for use inside a parent page.
 */
export default function PracticeTopicScaffold({
  category,
  title,
  intro,
  sections = [],
  externalSection = {},
  embedded = false,
}) {
  const hasLinks = hasValidExternalLinks(externalSection?.links)

  const inner = (
    <>
      {!embedded ? <PageHeader category={category} title={title} intro={intro} compact /> : null}
      {sections.map((s) => (
        <section key={s.id} className="practice-topic-scaffold__block" aria-labelledby={`${s.id}-heading`}>
          <SectionTitle id={`${s.id}-heading`} title={s.title} subtitle={s.subtitle} />
          <InfoBlock variant="soft">
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </InfoBlock>
        </section>
      ))}
      {hasLinks ? (
        <ExternalLinksSection
          title={externalSection.title}
          intro={externalSection.intro}
          links={externalSection.links}
        />
      ) : (
        <section className="practice-topic-scaffold__external-note" aria-label="External sources">
          <p className="practice-topic-scaffold__external-lead">
            When your community shares trusted links, add them to the content file for this page — each will open on the original site.
          </p>
        </section>
      )}
    </>
  )

  if (embedded) {
    return <div className="practice-topic-scaffold practice-topic-scaffold--embedded">{inner}</div>
  }

  return <article className="content-page practice-topic-scaffold">{inner}</article>
}
