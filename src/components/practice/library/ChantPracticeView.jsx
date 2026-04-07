import { useCallback, useMemo, useState } from 'react'
import { getChantEntries, hasChantData } from '../../../data/chants/chants.js'
import { useChantSearch } from '../../../hooks/useChantSearch.js'
import { getLiturgicalDayState } from '../../../utils/liturgicalCalendar.js'
import {
  defaultChantFilterState,
  applyChantFilters,
} from '../../../utils/chantFilters.js'
import {
  BROWSE_PAGE_SIZE,
  hasBrowseRefinement,
  getFeaturedPool,
} from '../../../utils/chantBrowseHelpers.js'
import {
  getRecentChants,
  getSavedChantIds,
  getWeeklyProgress,
  incrementWeeklyPractice,
  isChantSaved,
  pushRecentChant,
  toggleSavedChant,
} from '../../../utils/chantStorage.js'
import MezmurPracticeWorkspace from '../MezmurPracticeWorkspace.jsx'
import ChantCard from './ChantCard.jsx'
import ChantDetailPanel from './ChantDetailPanel.jsx'
import ChantQuickFilterStrip from './ChantQuickFilterStrip.jsx'
import ChantBrowseSegments from './ChantBrowseSegments.jsx'
import ChantCategoryEntrypoints from './ChantCategoryEntrypoints.jsx'
import { chantLibraryCopy, formatResultsCount } from './chantLibraryCopy.js'
import './ChantLibrary.css'

/**
 * @param {object} props
 * @param {'mezmur' | 'werb' | 'all'} [props.defaultTypeFilter]
 * @param {string} [props.anchorId]
 * @param {string} [props.idPrefix]
 */
export default function ChantPracticeView({
  defaultTypeFilter = 'all',
  anchorId = 'chant-practice',
  idPrefix = 'chant-practice',
}) {
  const entries = useMemo(() => getChantEntries(), [])
  const hasData = hasChantData()

  const [categoryFilters, setCategoryFilters] = useState(() => ({
    ...defaultChantFilterState,
    form:
      defaultTypeFilter === 'mezmur' || defaultTypeFilter === 'werb'
        ? defaultTypeFilter
        : 'all',
  }))

  const [selected, setSelected] = useState(null)
  const [detailTab, setDetailTab] = useState(/** @type {'read'|'listen'|'line'|'memorize'} */ ('listen'))
  const [workspaceLoadRequest, setWorkspaceLoadRequest] = useState(null)
  const [savedIds, setSavedIds] = useState(() => new Set(getSavedChantIds()))
  const [storageTick, setStorageTick] = useState(0)
  const [browseSegment, setBrowseSegment] = useState(
    /** @type {'featured' | 'category' | 'results'} */ ('featured'),
  )
  const [displayLimit, setDisplayLimit] = useState(BROWSE_PAGE_SIZE)

  const refreshStorage = useCallback(() => setStorageTick((n) => n + 1), [])

  const recentIds = useMemo(() => {
    void storageTick
    return getRecentChants().map((x) => x.id)
  }, [storageTick])

  const {
    query,
    setQuery,
    results,
    resultCount,
    totalInView,
    totalEntries,
  } = useChantSearch(entries, {
    categoryFilters,
    mezmurPreviewLimit: null,
  })

  const ethiopianMonthName = useMemo(
    () => getLiturgicalDayState(new Date()).ethiopianMonthName,
    [],
  )

  const refinementActive = useMemo(
    () => hasBrowseRefinement(categoryFilters, query),
    [categoryFilters, query],
  )

  const featuredPool = useMemo(
    () => getFeaturedPool(entries, categoryFilters),
    [entries, categoryFilters],
  )

  const resetPage = useCallback(() => setDisplayLimit(BROWSE_PAGE_SIZE), [])

  const setBrowseSegmentAndPage = useCallback((v) => {
    resetPage()
    setBrowseSegment(v)
  }, [resetPage, setBrowseSegment])

  const setCategoryFiltersAndPage = useCallback((next) => {
    resetPage()
    setCategoryFilters(next)
  }, [resetPage, setCategoryFilters])

  const setQueryAndPage = useCallback((value) => {
    resetPage()
    setQuery(value)
  }, [resetPage, setQuery])

  const resultsList = useMemo(() => {
    if (browseSegment === 'category') return []
    if (browseSegment === 'featured' && !refinementActive) return featuredPool
    return results
  }, [browseSegment, refinementActive, featuredPool, results])

  const visibleChants = useMemo(
    () => resultsList.slice(0, displayLimit),
    [resultsList, displayLimit],
  )

  const totalInList = resultsList.length
  const canLoadMore = displayLimit < totalInList

  const byId = useMemo(() => {
    const m = new Map()
    for (const e of entries) m.set(e.id, e)
    return m
  }, [entries])

  const recentEntries = useMemo(() => {
    const out = []
    for (const id of recentIds) {
      const e = byId.get(id)
      if (e) out.push(e)
      if (out.length >= 5) break
    }
    return out
  }, [byId, recentIds])

  const savedEntries = useMemo(() => {
    void storageTick
    const ids = getSavedChantIds()
    return ids.map((id) => byId.get(id)).filter(Boolean).slice(0, 8)
  }, [byId, storageTick])

  const queueWorkspaceVideo = useCallback((url) => {
    const trimmed = (url || '').trim()
    if (!trimmed) return
    setWorkspaceLoadRequest((prev) => ({
      nonce: (prev?.nonce ?? 0) + 1,
      url: trimmed,
    }))
    requestAnimationFrame(() => {
      document.getElementById('chant-practice-workspace')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [])

  const openEntry = useCallback((entry, tab = 'listen') => {
    setDetailTab(tab === 'read' || tab === 'listen' || tab === 'line' || tab === 'memorize' ? tab : 'listen')
    setSelected(entry)
  }, [])

  const closeDetail = useCallback(() => setSelected(null), [])

  const onSaveToggle = useCallback(() => {
    if (!selected) return
    toggleSavedChant(selected.id)
    setSavedIds(new Set(getSavedChantIds()))
    refreshStorage()
  }, [selected, refreshStorage])

  const recordPractice = useCallback(() => {
    incrementWeeklyPractice()
    setStorageTick((n) => n + 1)
  }, [])

  const continueRecent = useCallback(() => {
    const first = recentIds[0]
    if (!first) return
    const e = byId.get(first)
    if (e) openEntry(e, 'listen')
  }, [recentIds, byId, openEntry])

  const randomChant = useCallback(() => {
    const pool = query.trim()
      ? results
      : applyChantFilters(entries, categoryFilters)
    if (!pool.length) return
    const pick = pool[Math.floor(Math.random() * pool.length)]
    openEntry(pick, 'listen')
  }, [query, results, entries, categoryFilters, openEntry])

  const scrollToFilters = useCallback(() => {
    document.getElementById('chant-quick-filters')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const browseFeasts = useCallback(() => {
    resetPage()
    setCategoryFilters((f) => ({ ...f, primary: 'major-holiday', majorHoliday: 'all' }))
    setBrowseSegment('results')
    scrollToFilters()
  }, [scrollToFilters, resetPage])

  const browseSaints = useCallback(() => {
    resetPage()
    setCategoryFilters((f) => ({ ...f, primary: 'saint' }))
    setBrowseSegment('results')
    scrollToFilters()
  }, [scrollToFilters, resetPage])

  const onPickCategory = useCallback(
    (primary) => {
      resetPage()
      setCategoryFilters((f) => ({ ...f, primary }))
      setBrowseSegment('results')
      document.getElementById('chant-quick-filters')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    [resetPage],
  )

  const viewAllChants = useCallback(() => {
    resetPage()
    setQuery('')
    setCategoryFilters((f) => ({ ...defaultChantFilterState, form: f.form }))
    setBrowseSegment('results')
  }, [resetPage, setQuery, setCategoryFilters, setBrowseSegment])

  const weekly = useMemo(() => {
    void storageTick
    return getWeeklyProgress()
  }, [storageTick])

  const workspaceBlock = (
    <MezmurPracticeWorkspace
      anchorId="chant-practice-workspace"
      className="chant-practice-workspace"
      workspaceTitle={chantLibraryCopy.workspaceTitle}
      workspaceIntro={chantLibraryCopy.workspaceIntro}
      loadRequest={workspaceLoadRequest}
    />
  )

  if (!hasData) {
    return (
      <>
        <section className="chant-practice-shell chant-practice-shell--empty" id={anchorId}>
          <div className="chant-hero chant-hero--empty">
            <h2 className="chant-hero__title">{chantLibraryCopy.heroTitle}</h2>
            <p className="chant-hero__subtitle">{chantLibraryCopy.heroSubtitle}</p>
            <p className="chant-library__empty-state" role="status">
              {chantLibraryCopy.emptyDataset}
            </p>
          </div>
        </section>
        {workspaceBlock}
      </>
    )
  }

  const emptySearch = query.trim().length > 0 && resultCount === 0
  const emptyFilters = totalInView === 0 && totalEntries > 0
  const searchId = `${idPrefix}-hero-search`

  return (
    <>
      <section className="chant-practice-shell" id={anchorId}>
        <header className="chant-hero">
          <div className="chant-hero__text">
            <h2 className="chant-hero__title">{chantLibraryCopy.heroTitle}</h2>
            <p className="chant-hero__subtitle">{chantLibraryCopy.heroSubtitle}</p>
          </div>
          <div className="chant-hero__search">
            <label className="visually-hidden" htmlFor={searchId}>
              {chantLibraryCopy.searchLabel}
            </label>
            <input
              id={searchId}
              type="search"
              className="chant-hero__search-input"
              value={query}
              onChange={(e) => setQueryAndPage(e.target.value)}
              placeholder={chantLibraryCopy.searchPlaceholder}
              autoComplete="off"
              spellCheck="false"
              enterKeyHint="search"
            />
          </div>
          <div className="chant-hero__actions">
            <button type="button" className="chant-hero__btn" onClick={continueRecent}>
              {chantLibraryCopy.continuePractice}
            </button>
            <button type="button" className="chant-hero__btn" onClick={browseFeasts}>
              {chantLibraryCopy.browseFeasts}
            </button>
            <button type="button" className="chant-hero__btn" onClick={browseSaints}>
              {chantLibraryCopy.browseSaints}
            </button>
            <button type="button" className="chant-hero__btn chant-hero__btn--accent" onClick={randomChant}>
              {chantLibraryCopy.randomChant}
            </button>
          </div>
        </header>

        <section className="chant-featured" aria-label="Featured ways to practice">
          <article className="chant-feature-card">
            <h3 className="chant-feature-card__title">{chantLibraryCopy.featuredContinueTitle}</h3>
            <p className="chant-feature-card__body">{chantLibraryCopy.featuredContinueBody}</p>
            <button type="button" className="chant-feature-card__link" onClick={continueRecent}>
              {chantLibraryCopy.continuePractice}
            </button>
          </article>
          <article className="chant-feature-card" id="chant-browser-holiday">
            <h3 className="chant-feature-card__title">{chantLibraryCopy.featuredHolidayTitle}</h3>
            <p className="chant-feature-card__body">{chantLibraryCopy.featuredHolidayBody}</p>
            <button type="button" className="chant-feature-card__link" onClick={browseFeasts}>
              {chantLibraryCopy.browseFeasts}
            </button>
          </article>
          <article className="chant-feature-card" id="chant-browser-saint">
            <h3 className="chant-feature-card__title">{chantLibraryCopy.featuredSaintTitle}</h3>
            <p className="chant-feature-card__body">{chantLibraryCopy.featuredSaintBody}</p>
            <button type="button" className="chant-feature-card__link" onClick={browseSaints}>
              {chantLibraryCopy.browseSaints}
            </button>
          </article>
        </section>

        <section className="chant-engagement" aria-label="Your practice">
          <div className="chant-engagement__col">
            <h3 className="chant-engagement__heading">{chantLibraryCopy.engagementRecent}</h3>
            {recentEntries.length ? (
              <ul className="chant-engagement__list">
                {recentEntries.map((e) => (
                  <li key={e.id}>
                    <button
                      type="button"
                      className="chant-engagement__link"
                      onClick={() => openEntry(e, 'listen')}
                    >
                      <span className="chant-engagement__link-am" lang="am">
                        {e.title}
                      </span>
                      <span className="chant-engagement__link-tr">{e.transliterationTitle}</span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="chant-engagement__empty">{chantLibraryCopy.noRecent}</p>
            )}
          </div>
          <div className="chant-engagement__col">
            <h3 className="chant-engagement__heading">{chantLibraryCopy.engagementSaved}</h3>
            {savedEntries.length ? (
              <ul className="chant-engagement__list">
                {savedEntries.map((e) => (
                  <li key={e.id}>
                    <button
                      type="button"
                      className="chant-engagement__link"
                      onClick={() => openEntry(e, 'listen')}
                    >
                      <span className="chant-engagement__link-am" lang="am">
                        {e.title}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="chant-engagement__empty">{chantLibraryCopy.noSaved}</p>
            )}
          </div>
          <div className="chant-engagement__weekly">
            <p className="chant-engagement__weekly-kicker">{chantLibraryCopy.engagementWeekly}</p>
            <p className="chant-engagement__weekly-value">
              {weekly.count}{' '}
              <span className="chant-engagement__weekly-unit">{chantLibraryCopy.sessionsLabel}</span>
            </p>
            <p className="chant-engagement__weekly-body">{chantLibraryCopy.engagementWeeklyBody}</p>
          </div>
        </section>

        <section className="chant-browser" id="chant-browser-grid" aria-labelledby={`${idPrefix}-browser-heading`}>
          <div className="chant-browser__head">
            <h2 id={`${idPrefix}-browser-heading`} className="chant-browser__title">
              {chantLibraryCopy.browserHeading}
            </h2>
            <ChantBrowseSegments
              value={browseSegment}
              onChange={setBrowseSegmentAndPage}
              featuredDisabled={refinementActive}
            />
          </div>

          {ethiopianMonthName ? (
            <p className="chant-browser__context visually-hidden">
              Ethiopian month: {ethiopianMonthName}
            </p>
          ) : null}

          {browseSegment === 'results' ? (
            <div className="chant-browser__filters-wrap">
              <ChantQuickFilterStrip filters={categoryFilters} onChange={setCategoryFiltersAndPage} />
            </div>
          ) : null}

          {browseSegment === 'featured' && !refinementActive ? (
            <p className="chant-browser__intro">{chantLibraryCopy.browseFeaturedIntro}</p>
          ) : null}

          {browseSegment === 'category' ? (
            <ChantCategoryEntrypoints onPickCategory={onPickCategory} />
          ) : null}

          {browseSegment === 'results' && !refinementActive && !query.trim() ? (
            <p className="chant-browser__hint">{chantLibraryCopy.browseResultsHint}</p>
          ) : null}

          {browseSegment === 'category' ? null : emptyFilters ? (
            <p className="chant-library__empty-state" role="status">
              {chantLibraryCopy.emptyTypeFilter}
            </p>
          ) : (
            <p className="chant-browser__count" aria-live="polite">
              {emptySearch ? (
                <span>{chantLibraryCopy.emptySearch}</span>
              ) : browseSegment === 'featured' && !refinementActive ? (
                <span>
                  {chantLibraryCopy.browseShowingFeatured
                    .replace('{{shown}}', String(Math.min(displayLimit, totalInList)))
                    .replace('{{total}}', String(totalInList))}
                </span>
              ) : (
                <>
                  <strong>{formatResultsCount(resultCount)}</strong>
                  {query.trim() ? (
                    <span className="chant-library__count-sub"> matching your search</span>
                  ) : null}
                  {totalInList > 0 ? (
                    <span className="chant-browser__count-page">
                      {' · '}
                      {chantLibraryCopy.browseShowingPage
                        .replace('{{shown}}', String(Math.min(displayLimit, totalInList)))
                        .replace('{{total}}', String(resultCount))}
                    </span>
                  ) : null}
                </>
              )}
            </p>
          )}

          {!emptySearch && !emptyFilters && browseSegment !== 'category' ? (
            <>
              <ul className="chant-results-grid" role="list">
                {visibleChants.map((entry) => (
                  <li key={entry.id} className="chant-results-grid__item" role="listitem">
                    <ChantCard
                      entry={entry}
                      maxTags={2}
                      onPractice={() => {
                        pushRecentChant(entry.id)
                        recordPractice()
                        refreshStorage()
                        openEntry(entry, 'listen')
                      }}
                    />
                  </li>
                ))}
              </ul>

              {canLoadMore ||
              (browseSegment === 'featured' && !refinementActive && totalInList > 0) ? (
                <div className="chant-browser__more-row">
                  {canLoadMore ? (
                    <button
                      type="button"
                      className="chant-browser__load-more"
                      onClick={() => setDisplayLimit((n) => n + BROWSE_PAGE_SIZE)}
                    >
                      {chantLibraryCopy.browseLoadMore}
                    </button>
                  ) : null}
                  {browseSegment === 'featured' && !refinementActive && totalInList > 0 ? (
                    <button type="button" className="chant-browser__view-all" onClick={viewAllChants}>
                      {chantLibraryCopy.browseViewAll}
                    </button>
                  ) : null}
                </div>
              ) : null}
            </>
          ) : null}
        </section>
      </section>

      {workspaceBlock}

      <ChantDetailPanel
        key={selected ? `${selected.id}-${detailTab}` : 'closed'}
        entry={selected}
        open={!!selected}
        onClose={closeDetail}
        onSendVideoToWorkspace={queueWorkspaceVideo}
        onSaveToggle={onSaveToggle}
        isSaved={selected ? savedIds.has(selected.id) || isChantSaved(selected.id) : false}
        defaultTab={detailTab}
        onPracticeRecorded={() => {
          refreshStorage()
          setStorageTick((n) => n + 1)
        }}
      />
    </>
  )
}
