import { getCategoryMeta } from '../../../data/calendarVisualCatalog.js'
import LiturgicalCategoryGlyph from '../icons/LiturgicalCategoryGlyph.jsx'
import '../icons/LiturgicalCategoryGlyph.css'

/** Compact circular icon for grids and timeline nodes. */
export default function CategoryIcon({
  categoryId,
  size = 'sm',
  label,
  className = '',
  variant = 'default',
}) {
  const cat = getCategoryMeta(categoryId)
  return (
    <span
      className={`cal-cat-icon cal-cat-icon--${size} ${cat.badgeClass} ${className}`.trim()}
      role="img"
      aria-label={label || cat.label}
    >
      <LiturgicalCategoryGlyph categoryId={categoryId} variant={variant} decorative />
    </span>
  )
}
