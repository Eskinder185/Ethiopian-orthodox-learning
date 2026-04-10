/**
 * @param {{ checked: boolean, onChange: (v: boolean) => void, id?: string, label?: string }} props
 */
export default function TransliterationToggle({
  checked,
  onChange,
  id = 'pp-lang-translit',
  label = 'Show transliteration labels',
}) {
  return (
    <label className="lang-hub-strip__toggle" htmlFor={id}>
      <input id={id} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span>{label}</span>
    </label>
  )
}
