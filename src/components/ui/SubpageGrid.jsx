import '../../styles/ui-system.css'

const COLS = {
  1: '',
  2: 'subpage-grid--2',
  3: 'subpage-grid--3',
}

/**
 * Responsive 1–3 column grid for cards and panels.
 */
export default function SubpageGrid({ columns = 1, children, className = '' }) {
  const mod = COLS[columns] || ''
  return (
    <div
      className={`subpage-grid${mod ? ` ${mod}` : ''}${className ? ` ${className}` : ''}`.trim()}
    >
      {children}
    </div>
  )
}
