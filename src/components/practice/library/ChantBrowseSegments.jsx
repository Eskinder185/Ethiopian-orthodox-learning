import { chantLibraryCopy } from './chantLibraryCopy.js'

/**
 * @param {object} props
 * @param {'featured' | 'category' | 'results'} props.value
 * @param {(v: 'featured' | 'category' | 'results') => void} props.onChange
 * @param {boolean} props.featuredDisabled
 */
export default function ChantBrowseSegments({ value, onChange, featuredDisabled }) {
  const tabs = [
    { id: /** @type {const} */ ('featured'), label: chantLibraryCopy.browseTabFeatured },
    { id: /** @type {const} */ ('category'), label: chantLibraryCopy.browseTabCategory },
    { id: /** @type {const} */ ('results'), label: chantLibraryCopy.browseTabResults },
  ]

  return (
    <div className="chant-browse-segments" role="tablist" aria-label={chantLibraryCopy.browseSegmentsLabel}>
      {tabs.map((t) => {
        const disabled = t.id === 'featured' && featuredDisabled
        const selected = value === t.id
        return (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-disabled={disabled || undefined}
            disabled={disabled}
            className={'chant-browse-segments__tab' + (selected ? ' is-active' : '')}
            onClick={() => {
              if (!disabled) onChange(t.id)
            }}
          >
            {t.label}
          </button>
        )
      })}
    </div>
  )
}
