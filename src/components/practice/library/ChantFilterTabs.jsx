import { chantLibraryCopy } from './chantLibraryCopy.js'

/**
 * @typedef {'all' | 'mezmur' | 'werb'} ChantTypeFilter
 */

export default function ChantFilterTabs({ typeFilter, onTypeFilterChange, idPrefix = 'chant-type' }) {
  return (
    <div className="chant-filter-tabs" role="tablist" aria-label="Mezmur or Werb">
      <Tab
        id={`${idPrefix}-all`}
        selected={typeFilter === 'all'}
        onClick={() => onTypeFilterChange('all')}
        label={chantLibraryCopy.filterAll}
      />
      <Tab
        id={`${idPrefix}-mezmur`}
        selected={typeFilter === 'mezmur'}
        onClick={() => onTypeFilterChange('mezmur')}
        label={chantLibraryCopy.filterMezmur}
      />
      <Tab
        id={`${idPrefix}-werb`}
        selected={typeFilter === 'werb'}
        onClick={() => onTypeFilterChange('werb')}
        label={chantLibraryCopy.filterWerb}
      />
    </div>
  )
}

function Tab({ id, selected, onClick, label }) {
  return (
    <button
      type="button"
      id={id}
      role="tab"
      aria-selected={selected}
      className={'chant-filter-tabs__tab' + (selected ? ' chant-filter-tabs__tab--active' : '')}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
