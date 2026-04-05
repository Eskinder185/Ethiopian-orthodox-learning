import '../../styles/ContentComponents.css'
import PageHeader from './PageHeader.jsx'
import SectionTitle from './SectionTitle.jsx'
import ResourceList from './ResourceList.jsx'
import DocumentCard from '../cards/DocumentCard.jsx'
import ExpandableText from '../ui/ExpandableText.jsx'

/**
 * Standard subpage shell: category, title, summary, main column, optional document cards, related links.
 */
export default function ContentPageLayout({
  title,
  summary,
  category,
  children,
  relatedTitle = 'Related resources',
  relatedItems = [],
  exampleSectionTitle = 'Further reading',
  exampleSectionSubtitle,
  exampleDocuments,
}) {
  const docs = exampleDocuments?.length ? exampleDocuments : null

  return (
    <article className="content-page">
      <PageHeader category={category} title={title} compact />
      {summary ? (
        <ExpandableText lines={3} className="content-page__summary-wrap" moreLabel="Read more">
          <p className="content-page__summary">{summary}</p>
        </ExpandableText>
      ) : null}

      <div className="content-page__main">{children}</div>

      {docs ? (
        <section className="content-page__examples" aria-labelledby="content-page-examples-heading">
          <SectionTitle
            id="content-page-examples-heading"
            title={exampleSectionTitle}
            subtitle={exampleSectionSubtitle}
          />
          <div className="content-stack">
            {docs.map((doc, i) => (
              <DocumentCard
                key={doc.title + i}
                title={doc.title}
                summary={doc.summary}
                category={doc.category}
                meta={doc.meta}
              >
                {doc.body ? <p>{doc.body}</p> : null}
              </DocumentCard>
            ))}
          </div>
        </section>
      ) : null}

      {relatedItems.length > 0 ? (
        <aside className="content-page__related">
          <ResourceList title={relatedTitle} items={relatedItems} />
        </aside>
      ) : null}
    </article>
  )
}
