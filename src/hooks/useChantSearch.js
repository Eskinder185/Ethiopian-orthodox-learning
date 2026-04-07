import { useMemo, useState } from 'react'
import Fuse from 'fuse.js'
import { applyChantFilters, defaultChantFilterState } from '../utils/chantFilters.js'

/**
 * @typedef {import('../data/chants/chants.js').ChantEntry} ChantEntry
 */

function monthMatchesEntry(entryMonth, deviceMonthName) {
  if (!entryMonth?.trim() || !deviceMonthName?.trim()) return false
  const a = entryMonth.trim().toLowerCase()
  const b = deviceMonthName.trim().toLowerCase()
  return a === b || a.includes(b) || b.includes(a)
}

/**
 * @param {ChantEntry} entry
 * @param {string} q trimmed query
 */
function entryIncludesQuery(entry, q) {
  const needle = q.toLowerCase()
  const hay = [
    entry.id,
    entry.title,
    entry.transliterationTitle,
    entry.searchBlob,
    entry.searchTermsFlat,
  ]
    .filter(Boolean)
    .join('\u0000')
    .toLowerCase()
  return hay.includes(needle)
}

/** Lower score = better match for substring fallback ordering. */
function substringRelevanceScore(entry, q) {
  const needle = q.toLowerCase()
  let best = Infinity
  const weigh = (s, weight) => {
    const i = (s || '').toLowerCase().indexOf(needle)
    if (i !== -1) best = Math.min(best, i + weight)
  }
  weigh(entry.transliterationTitle, 0)
  weigh(entry.title, 500)
  weigh(entry.id, 1000)
  weigh(entry.searchTermsFlat, 1500)
  return best === Infinity ? 99999 : best
}

const FUSE_KEYS = [
  { name: 'title', weight: 0.45 },
  { name: 'transliterationTitle', weight: 0.35 },
  { name: 'searchBlob', weight: 0.32 },
  { name: 'searchTermsFlat', weight: 0.12 },
]

/**
 * @param {ChantEntry[]} entries
 * @param {{
 *   defaultTypeFilter?: 'all' | 'mezmur' | 'werb'
 *   ethiopianMonthName?: string
 *   mezmurPreviewLimit?: number | null
 *   categoryFilters?: import('../utils/chantFilters.js').ChantFilterState
 * }} options
 */
export function useChantSearch(entries, options = {}) {
  const {
    defaultTypeFilter = 'all',
    ethiopianMonthName = '',
    mezmurPreviewLimit = null,
    categoryFilters: categoryFiltersFromParent,
  } = options

  const [query, setQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState(
    defaultTypeFilter === 'mezmur' || defaultTypeFilter === 'werb' ? defaultTypeFilter : 'all',
  )
  const [difficultyFilter, setDifficultyFilter] = useState(
    /** @type {'all' | 'beginner' | 'intermediate' | 'advanced'} */ ('all'),
  )
  const [spotlightFilter, setSpotlightFilter] = useState(
    /** @type {'all' | 'seasonal' | 'thisMonth'} */ ('all'),
  )

  const mergedCategoryFilters = useMemo(() => {
    const cf = {
      ...defaultChantFilterState,
      ...(categoryFiltersFromParent ?? {}),
    }
    if (!categoryFiltersFromParent) {
      cf.form = typeFilter === 'all' ? cf.form : typeFilter
    }
    return cf
  }, [categoryFiltersFromParent, typeFilter])

  const filterCapabilities = useMemo(() => {
    return {
      hasDifficulty: entries.some((e) => e.difficulty && String(e.difficulty).trim()),
      hasSeason: entries.some((e) => e.category?.season?.length),
      hasMonth: entries.some((e) => /** @type {any} */ (e).month?.trim?.()),
    }
  }, [entries])

  const filteredByCategory = useMemo(
    () => applyChantFilters(entries, mergedCategoryFilters),
    [entries, mergedCategoryFilters],
  )

  const filteredByMeta = useMemo(() => {
    let list = filteredByCategory
    if (difficultyFilter !== 'all') {
      list = list.filter((e) => (e.difficulty || '').toLowerCase() === difficultyFilter)
    }
    if (spotlightFilter === 'seasonal') {
      list = list.filter((e) => (e.category?.season?.length ?? 0) > 0)
    }
    if (spotlightFilter === 'thisMonth' && ethiopianMonthName) {
      list = list.filter((e) => monthMatchesEntry(/** @type {any} */ (e).month, ethiopianMonthName))
    }
    return list
  }, [filteredByCategory, difficultyFilter, spotlightFilter, ethiopianMonthName])

  const mezmurPool = useMemo(
    () => filteredByMeta.filter((e) => e.form === 'mezmur'),
    [filteredByMeta],
  )

  const fuse = useMemo(() => {
    return new Fuse(filteredByMeta, {
      keys: FUSE_KEYS,
      threshold: 0.42,
      ignoreLocation: true,
      includeScore: false,
      minMatchCharLength: 1,
    })
  }, [filteredByMeta])

  const fuseMezmur = useMemo(() => {
    return new Fuse(mezmurPool, {
      keys: FUSE_KEYS,
      threshold: 0.42,
      ignoreLocation: true,
      includeScore: true,
      minMatchCharLength: 1,
    })
  }, [mezmurPool])

  const results = useMemo(() => {
    const q = query.trim()
    const limit =
      typeof mezmurPreviewLimit === 'number' && mezmurPreviewLimit > 0 ? mezmurPreviewLimit : null

    if (limit == null) {
      if (!q) return filteredByMeta
      const fuseHits = fuse.search(q).map((r) => r.item)
      if (fuseHits.length > 0) return fuseHits
      return filteredByMeta.filter((e) => entryIncludesQuery(e, q))
    }

    if (!q) return mezmurPool.slice(0, limit)

    const fuseHits = fuseMezmur.search(q)
    if (fuseHits.length > 0) {
      return fuseHits.map((r) => r.item).slice(0, limit)
    }

    const sub = mezmurPool
      .filter((e) => entryIncludesQuery(e, q))
      .sort((a, b) => {
        const da = substringRelevanceScore(a, q)
        const db = substringRelevanceScore(b, q)
        if (da !== db) return da - db
        return (a.transliterationTitle || a.title).localeCompare(b.transliterationTitle || b.title)
      })
    return sub.slice(0, limit)
  }, [query, fuse, fuseMezmur, filteredByMeta, mezmurPool, mezmurPreviewLimit])

  const resultCount = useMemo(() => {
    const q = query.trim()
    const limit =
      typeof mezmurPreviewLimit === 'number' && mezmurPreviewLimit > 0 ? mezmurPreviewLimit : null

    if (limit == null) {
      if (!q) return filteredByMeta.length
      const fuseHits = fuse.search(q)
      if (fuseHits.length > 0) return fuseHits.length
      return filteredByMeta.filter((e) => entryIncludesQuery(e, q)).length
    }

    if (!q) return mezmurPool.length

    const fuseHits = fuseMezmur.search(q)
    if (fuseHits.length > 0) return fuseHits.length
    return mezmurPool.filter((e) => entryIncludesQuery(e, q)).length
  }, [query, fuse, fuseMezmur, filteredByMeta, mezmurPool, mezmurPreviewLimit])

  return {
    query,
    setQuery,
    typeFilter,
    setTypeFilter,
    difficultyFilter,
    setDifficultyFilter,
    spotlightFilter,
    setSpotlightFilter,
    filterCapabilities,
    categoryFilters: mergedCategoryFilters,
    results,
    resultCount,
    mezmurPreviewLimit:
      typeof mezmurPreviewLimit === 'number' && mezmurPreviewLimit > 0 ? mezmurPreviewLimit : null,
    totalInView: filteredByMeta.length,
    totalEntries: entries.length,
  }
}
