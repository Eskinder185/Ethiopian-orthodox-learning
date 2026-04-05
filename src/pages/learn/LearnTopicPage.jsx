import ContentPageLayout from '../../components/sections/ContentPageLayout.jsx'
import SectionTitle from '../../components/sections/SectionTitle.jsx'
import { CautionsList, NotesList, SummarySections } from '../../components/content/SummaryBlocks.jsx'
import { subpageOutlines } from '../../data/subpageOutlines.js'

/**
 * Learn subpage shell: outline from subpageOutlines + narrative from src/content.
 */
export default function LearnTopicPage({ outlineKey, content }) {
  const outline = subpageOutlines[outlineKey]
  if (!outline) return null

  const er = content.externalReader

  return (
    <ContentPageLayout
      title={content.title}
      category={outline.category}
      summary={content.intro}
      relatedTitle={outline.relatedTitle}
      relatedItems={outline.relatedItems}
    >
      <CautionsList items={content.cautions} />
      <NotesList items={content.notes} />
      <SummarySections sections={content.sections} headingIdPrefix={outlineKey} />
      {er ? (
        <section
          className="learn-external-reader"
          aria-labelledby={`${outlineKey}-external-reader-h`}
        >
          <SectionTitle id={`${outlineKey}-external-reader-h`} title={er.title} />
          {er.body?.map((p, i) => (
            <p key={i} className="learn-external-reader__p">
              {p}
            </p>
          ))}
          <p className="learn-external-reader__label">{er.urlCaption}</p>
          <p className="learn-external-reader__url">
            <a
              href={er.href}
              className="learn-external-reader__link text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {er.linkLabel}
              <span className="learn-external-reader__sr"> (opens in new tab)</span>
            </a>
          </p>
          <p className="learn-external-reader__raw-url">
            <code>{er.href}</code>
          </p>
        </section>
      ) : null}
    </ContentPageLayout>
  )
}
