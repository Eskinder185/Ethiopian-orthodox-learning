import CollapsiblePanel from '../ui/CollapsiblePanel.jsx'
import { dailyPrayerEnglishContent } from '../../content/dailyPrayerEnglishContent.js'
import '../../styles/dailyPrayer.css'

function PrayerBody({ paragraphs }) {
  if (!paragraphs?.length) return null
  return (
    <>
      {paragraphs.map((text, i) => (
        <p key={i} className="daily-prayer__body">
          {text}
        </p>
      ))}
    </>
  )
}

export default function ZeweterTselotSection() {
  const c = dailyPrayerEnglishContent

  return (
    <section className="daily-prayer" id="daily-prayer" aria-labelledby="daily-prayer-intro-heading">
      <header className="daily-prayer__intro" id="daily-prayer-intro">
        <h2 id="daily-prayer-intro-heading" className="daily-prayer__intro-title">
          {c.intro.title}
        </h2>
        <p className="daily-prayer__intro-lead">{c.intro.lead}</p>
        <p className="daily-prayer__source-note">{c.sourceNote}</p>
      </header>

      <nav
        className="daily-prayer__overview"
        id="daily-prayer-overview"
        aria-label="Prayer categories — jump to full text"
      >
        {c.overview.map((item) => (
          <a key={item.id} href={`#${item.anchor}`} className="daily-prayer__overview-card">
            <span className="daily-prayer__overview-title">{item.title}</span>
            <span className="daily-prayer__overview-blurb">{item.blurb}</span>
          </a>
        ))}
      </nav>

      <section
        className="daily-prayer__beginner"
        id="daily-prayer-beginner"
        aria-labelledby="daily-prayer-beginner-heading"
      >
        <h3 id="daily-prayer-beginner-heading" className="daily-prayer__beginner-title">
          {c.beginnerRoutine.title}
        </h3>
        <p className="daily-prayer__beginner-lead">{c.beginnerRoutine.lead}</p>
        <ol className="daily-prayer__beginner-list">
          {c.beginnerRoutine.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <div className="daily-prayer__texts" id="daily-prayer-texts">
        <h2 className="daily-prayer__texts-heading">Full prayers</h2>
        <p className="daily-prayer__texts-hint">
          Open a section when you are ready to read or pray; keep them closed to scan the page
          quickly.
        </p>

        <div className="daily-prayer__panels">
          {c.prayerSections.map((section) => (
            <CollapsiblePanel
              key={section.id}
              anchorId={section.anchor}
              title={section.panelTitle}
              defaultOpen={section.defaultOpen}
              className="daily-prayer__panel"
            >
              <p className="daily-prayer__panel-summary">{section.summary}</p>
              {section.subsections ? (
                section.subsections.map((sub) => (
                  <div key={sub.subtitle}>
                    <h4 className="daily-prayer__subsection-title">{sub.subtitle}</h4>
                    <PrayerBody paragraphs={sub.paragraphs} />
                  </div>
                ))
              ) : (
                <PrayerBody paragraphs={section.paragraphs} />
              )}
            </CollapsiblePanel>
          ))}

          <CollapsiblePanel
            anchorId={c.mealsGuidance.anchor}
            title={c.mealsGuidance.panelTitle}
            defaultOpen={c.mealsGuidance.defaultOpen}
            className="daily-prayer__panel"
          >
            <p className="daily-prayer__panel-summary">{c.mealsGuidance.summary}</p>
            <PrayerBody paragraphs={c.mealsGuidance.paragraphs} />
          </CollapsiblePanel>
        </div>
      </div>
    </section>
  )
}
