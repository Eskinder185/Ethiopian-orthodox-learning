import { chantLibraryCopy } from './chantLibraryCopy.js'
import { formatPrimaryLabel } from './chantDisplayUtils.js'

const KEYS = /** @type {const} */ ([
  'mary',
  'saint',
  'major-holiday',
  'liturgical',
  'general',
])

/**
 * @param {object} props
 * @param {(primary: import('../../../utils/chantFilters.js').ChantFilterState['primary']) => void} props.onPickCategory
 */
export default function ChantCategoryEntrypoints({ onPickCategory }) {
  return (
    <div className="chant-category-grid" role="navigation" aria-label={chantLibraryCopy.browseByCategoryLabel}>
      <p className="chant-category-grid__intro">{chantLibraryCopy.browseCategoryIntro}</p>
      <ul className="chant-category-grid__list" role="list">
        {KEYS.map((key) => (
          <li key={key} className="chant-category-grid__item" role="listitem">
            <button
              type="button"
              className="chant-category-tile"
              onClick={() =>
                onPickCategory(
                  /** @type {import('../../../utils/chantFilters.js').ChantFilterState['primary']} */ (key),
                )
              }
            >
              <span className="chant-category-tile__title">{formatPrimaryLabel(key)}</span>
              <span className="chant-category-tile__hint">{chantLibraryCopy.browseCategoryOpen}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
