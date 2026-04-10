import EmText from './EmText.jsx'

export default function LiturgyGlossaryStrip({ title, items }) {
  return (
    <section className="liturgy-guide__glossary" aria-labelledby="liturgy-glossary-title">
      <h2 id="liturgy-glossary-title" className="liturgy-guide__glossary-heading">
        {title}
      </h2>
      <ul className="liturgy-guide__glossary-chips">
        {items.map((g) => (
          <li key={g.term}>
            <span className="liturgy-guide__glossary-chip">
              <span className="liturgy-guide__glossary-term">{g.term}</span>
              <span className="liturgy-guide__glossary-def">
                <EmText>{g.def}</EmText>
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
