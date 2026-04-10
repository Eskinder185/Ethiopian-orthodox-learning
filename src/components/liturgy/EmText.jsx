/** Renders strings with **bold** segments (same pattern as older liturgy teaching page). */
export default function EmText({ children }) {
  if (typeof children !== 'string') return children
  const parts = children.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i}>{part}</strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}
