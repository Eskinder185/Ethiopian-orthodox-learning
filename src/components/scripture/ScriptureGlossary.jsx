import { useId, useState } from 'react'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

export default function ScriptureGlossary({ title, lead, terms }) {
  const [activeId, setActiveId] = useState(terms[0]?.id ?? '')
  const panelId = useId()
  const active = terms.find((t) => t.id === activeId) ?? terms[0]

  return (
    <LearnRevealSection
      className="scripture__section scripture__section--glossary"
      aria-labelledby="scripture-glossary-title"
    >
      <div className="scripture__section-head">
        <h2 id="scripture-glossary-title" className="scripture__section-title">
          {title}
        </h2>
        <p className="scripture__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <div className="scripture__glossary-wrap">
        <div className="scripture__glossary-chips" role="group" aria-label="Glossary terms">
          {terms.map((t) => (
            <button
              key={t.id}
              type="button"
              aria-pressed={t.id === activeId}
              className={`scripture__glossary-chip${t.id === activeId ? ' scripture__glossary-chip--active' : ''}`}
              onClick={() => setActiveId(t.id)}
            >
              {t.term}
            </button>
          ))}
        </div>
        {active ?
          <div id={panelId} className="scripture__glossary-panel" aria-live="polite">
            <h3 className="scripture__glossary-term-title">{active.term}</h3>
            <p className="scripture__glossary-def">
              <EmText>{active.definition}</EmText>
            </p>
          </div>
        : null}
      </div>
    </LearnRevealSection>
  )
}
