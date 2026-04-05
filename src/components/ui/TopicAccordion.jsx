import '../../styles/content-patterns.css'

/**
 * Accordion of titled sections; each item is native <details> for accessibility.
 *
 * items: { id?, title, subtitle?, paragraphs: string[] }
 */
export default function TopicAccordion({
  items = [],
  className = '',
  openFirstItem = false,
}) {
  if (!items.length) return null

  return (
    <div className={`content-accordion${className ? ` ${className}` : ''}`}>
      {items.map((item, i) => (
        <details
          key={item.id ?? item.title + String(i)}
          className="content-accordion__item"
          id={item.id}
          defaultOpen={openFirstItem && i === 0}
        >
          <summary className="content-accordion__summary">
            <span className="content-accordion__summary-text">
              <span>{item.title}</span>
              {item.subtitle ? (
                <span className="content-accordion__subtitle">{item.subtitle}</span>
              ) : null}
            </span>
          </summary>
          <div className="content-accordion__body">
            {item.paragraphs?.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        </details>
      ))}
    </div>
  )
}
