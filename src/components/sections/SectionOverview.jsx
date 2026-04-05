import '../../styles/ContentComponents.css'

/**
 * Explains what a main section is for — sits under the page header, before topic cards.
 */
export default function SectionOverview({ title = 'What this section helps you do', children }) {
  return (
    <section
      className="section-hub__overview"
      aria-labelledby="section-overview-heading"
    >
      <h2 id="section-overview-heading" className="section-hub__overview-title">
        {title}
      </h2>
      <div className="section-hub__overview-body">{children}</div>
    </section>
  )
}
