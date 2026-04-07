import ChantCard from './ChantCard.jsx'

export default function ChantResultsList({ entries, onSelect }) {
  if (!entries.length) return null

  return (
    <ul className="chant-results-list" role="list">
      {entries.map((entry) => (
        <li key={entry.id} className="chant-results-list__item" role="listitem">
          <ChantCard entry={entry} onPractice={() => onSelect(entry)} />
        </li>
      ))}
    </ul>
  )
}
