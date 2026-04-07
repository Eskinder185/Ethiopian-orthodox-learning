import { useMemo, useState } from 'react'
import { getLiturgicalDayState } from '../../../utils/liturgicalCalendar.js'
import { getChantEntries, hasChantData } from '../../../data/chants/chants.js'
import { useChantSearch } from '../../../hooks/useChantSearch.js'
import ChantSearchBar from './ChantSearchBar.jsx'
import ChantResultsList from './ChantResultsList.jsx'
import ChantDetailPanel from './ChantDetailPanel.jsx'
import { chantLibraryCopy, formatResultsCount } from './chantLibraryCopy.js'
import './ChantLibrary.css'

/**
 * Shared searchable chant library (mezmur + werb).
 *
 * @param {object} props
 * @param {'mezmur' | 'werb' | 'all'} [props.defaultTypeFilter]
 * @param {string} [props.libraryIntro] — short paragraph under the section title
 * @param {string} [props.anchorId] — for in-page jump links
 * @param {string} [props.idPrefix] — prefix for form ids (unique per page)
 */
export default function ChantLibraryView({
  defaultTypeFilter = 'all',
  libraryIntro,
  anchorId = 'chant-library',
  idPrefix = 'chant-library',
}) {
  const entries = useMemo(() => getChantEntries(), [])
  const hasData = hasChantData()
  const ethiopianMonthName = useMemo(
    () => getLiturgicalDayState(new Date()).ethiopianMonthName,
    [],
  )
  const {
    query,
    setQuery,
    typeFilter,
    setTypeFilter,
    filterCapabilities,
    difficultyFilter,
    setDifficultyFilter,
    spotlightFilter,
    setSpotlightFilter,
    results,
    resultCount,
    totalInView,
    totalEntries,
  } = useChantSearch(entries, { defaultTypeFilter })

  const [selected, setSelected] = useState(null)

  const intro =
    libraryIntro ||
    (defaultTypeFilter === 'werb' ? chantLibraryCopy.introWerb : chantLibraryCopy.introMezmur)

  if (!hasData) {
    return (
      <section
        className="chant-library chant-library--empty"
        id={anchorId}
        aria-labelledby={`${idPrefix}-heading`}
      >
        <h2 id={`${idPrefix}-heading`} className="chant-library__title">
          Chant library
        </h2>
        <p className="chant-library__lead">{intro}</p>
        <div className="chant-library__empty-state" role="status">
          <p>{chantLibraryCopy.emptyDataset}</p>
        </div>
      </section>
    )
  }

  const emptySearch = query.trim().length > 0 && resultCount === 0
  const emptyTypeSlice = totalInView === 0 && typeFilter !== 'all' && totalEntries > 0

  return (
    <>
      <section
        className="chant-library"
        id={anchorId}
        aria-labelledby={`${idPrefix}-heading`}
      >
        <h2 id={`${idPrefix}-heading`} className="chant-library__title">
          Chant library
        </h2>
        <p className="chant-library__lead">{intro}</p>

        <ChantSearchBar
          query={query}
          onQueryChange={setQuery}
          typeFilter={typeFilter}
          onTypeFilterChange={setTypeFilter}
          filterCapabilities={filterCapabilities}
          difficultyFilter={difficultyFilter}
          onDifficultyChange={setDifficultyFilter}
          spotlightFilter={spotlightFilter}
          onSpotlightChange={setSpotlightFilter}
          ethiopianMonthName={ethiopianMonthName}
          idPrefix={idPrefix}
        />

        {emptyTypeSlice ? (
          <p className="chant-library__empty-state" role="status">
            {chantLibraryCopy.emptyTypeFilter}
          </p>
        ) : (
          <p className="chant-library__count" aria-live="polite">
            {emptySearch ? (
              <span>{chantLibraryCopy.emptySearch}</span>
            ) : (
              <>
                <strong>{formatResultsCount(resultCount)}</strong>
                {query.trim() ? (
                  <span className="chant-library__count-sub"> matching your search</span>
                ) : null}
              </>
            )}
          </p>
        )}

        {!emptySearch && !emptyTypeSlice ? (
          <ChantResultsList entries={results} onSelect={setSelected} />
        ) : null}
      </section>

      <ChantDetailPanel entry={selected} open={!!selected} onClose={() => setSelected(null)} />
    </>
  )
}
