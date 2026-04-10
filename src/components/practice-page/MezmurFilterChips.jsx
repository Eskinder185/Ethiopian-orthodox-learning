/**
 * @param {{ filters: Array<{ id: string, label: string }>, activeId: string, onChange: (id: string) => void, groupLabel?: string }} props
 */
export default function MezmurFilterChips({
  filters,
  activeId,
  onChange,
  groupLabel = 'Filter by mood or season',
}) {
  return (
    <div className="pp-mez-filters" role="group" aria-label={groupLabel}>
      {filters.map((f) => (
        <button
          key={f.id}
          type="button"
          className={`pp-mez-chip${activeId === f.id ? ' pp-mez-chip--on' : ''}`}
          aria-pressed={activeId === f.id}
          onClick={() => onChange(f.id)}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
