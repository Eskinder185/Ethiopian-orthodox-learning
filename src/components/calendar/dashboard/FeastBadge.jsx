import { getCategoryMeta } from '../../../data/calendarVisualCatalog.js'
import LiturgicalCategoryGlyph from '../icons/LiturgicalCategoryGlyph.jsx'
import '../icons/LiturgicalCategoryGlyph.css'

/** Small liturgical label (feast / fast / movable / fixed / today / major). */
export default function FeastBadge({ variant = 'category', categoryId, children, className = '' }) {
  if (variant === 'category' && categoryId) {
    const cat = getCategoryMeta(categoryId)
    return (
      <span className={`cal-feast-badge cal-feast-badge--cat ${cat.badgeClass} ${className}`.trim()}>
        <span className="cal-feast-badge__icon" aria-hidden>
          <LiturgicalCategoryGlyph categoryId={categoryId} decorative />
        </span>
        <span>{children ?? cat.label}</span>
      </span>
    )
  }

  return <span className={`cal-feast-badge cal-feast-badge--${variant} ${className}`.trim()}>{children}</span>
}
