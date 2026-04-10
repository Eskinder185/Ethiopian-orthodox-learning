/**
 * @param {{ value: string, onChange: (v: string) => void, placeholder?: string, id?: string, label?: string }} props
 */
export default function MezmurSearchBar({
  value,
  onChange,
  placeholder = 'Search chants (demo)',
  id = 'pp-mez-search',
  label = 'Search chants',
}) {
  return (
    <div className="pp-mez-search">
      <label htmlFor={id} className="pp-mez-search__label">
        {label}
      </label>
      <input
        id={id}
        type="search"
        className="pp-mez-search__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  )
}
