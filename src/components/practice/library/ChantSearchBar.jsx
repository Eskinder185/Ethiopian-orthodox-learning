import ChantFilterTabs from './ChantFilterTabs.jsx'
import ChantSecondaryFilters from './ChantSecondaryFilters.jsx'
import { chantLibraryCopy } from './chantLibraryCopy.js'

export default function ChantSearchBar({
  query,
  onQueryChange,
  typeFilter,
  onTypeFilterChange,
  filterCapabilities,
  difficultyFilter,
  onDifficultyChange,
  spotlightFilter,
  onSpotlightChange,
  ethiopianMonthName,
  idPrefix = 'chant-search',
}) {
  const searchId = `${idPrefix}-input`

  return (
    <div className="chant-search-bar">
      <label className="chant-search-bar__label" htmlFor={searchId}>
        {chantLibraryCopy.searchLabel}
      </label>
      <input
        id={searchId}
        type="search"
        className="chant-search-bar__input"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder={chantLibraryCopy.searchPlaceholder}
        autoComplete="off"
        spellCheck="false"
        enterKeyHint="search"
      />

      <ChantFilterTabs
        typeFilter={typeFilter}
        onTypeFilterChange={onTypeFilterChange}
        idPrefix={`${idPrefix}-type`}
      />

      <ChantSecondaryFilters
        filterCapabilities={filterCapabilities}
        difficultyFilter={difficultyFilter}
        onDifficultyChange={onDifficultyChange}
        spotlightFilter={spotlightFilter}
        onSpotlightChange={onSpotlightChange}
        ethiopianMonthName={ethiopianMonthName}
        idPrefix={`${idPrefix}-extra`}
      />
    </div>
  )
}
