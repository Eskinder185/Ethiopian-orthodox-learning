import '../../styles/content-blocks.css'
import InfoBanner from '../sections/InfoBanner.jsx'
import InfoBlock from '../sections/InfoBlock.jsx'
import SectionTitle from '../sections/SectionTitle.jsx'

/**
 * Renders a list of caution lines (copyright, pastoral care, verify with church).
 */
export function CautionsList({ items, title = 'Please note' }) {
  if (!items?.length) return null
  return (
    <InfoBanner tone="muted" title={title} className="content-cautions">
      <ul className="content-cautions__list">
        {items.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    </InfoBanner>
  )
}

/**
 * Short bullet notes (editorial / sourcing reminders).
 */
export function NotesList({ items, title = 'Notes' }) {
  if (!items?.length) return null
  return (
    <InfoBlock title={title} variant="soft">
      <ul className="content-notes__list">
        {items.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    </InfoBlock>
  )
}

/**
 * Repeatable titled section with one or more paragraphs.
 */
export function SummarySections({ sections = [], headingIdPrefix = 'summary' }) {
  if (!sections.length) return null
  return (
    <div className="content-summary-sections">
      {sections.map((s, i) => (
        <section
          key={s.id ?? s.title ?? i}
          className="content-summary-sections__block"
          aria-labelledby={`${headingIdPrefix}-${i}-h`}
        >
          <SectionTitle
            id={`${headingIdPrefix}-${i}-h`}
            title={s.title}
            subtitle={s.subtitle}
          />
          {s.body?.map((p, j) => (
            <p key={j} className="content-summary-sections__p">
              {p}
            </p>
          ))}
        </section>
      ))}
    </div>
  )
}
