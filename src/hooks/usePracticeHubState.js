import { useCallback, useState } from 'react'

/**
 * @typedef {'beginner' | 'full'} PrayerMode
 */

/** @returns {import('../types/practice').PracticeProgress} */
function createInitialProgress() {
  return {
    prayerDays: 0,
    mezmurSessions: 0,
    instrumentNotes: 0,
    languageLetters: 0,
    prayersTouched: 0,
  }
}

/**
 * Consolidated client state for the Practice hub (optional — sections still own local state until lifted).
 * TypeScript equivalents:
 *   selectedGoal: string | null
 *   prayerMode: "beginner" | "full"
 *   mezmurFilters: string[]
 *   practiceProgress: PracticeProgress
 */
export function usePracticeHubState() {
  const [selectedGoal, setSelectedGoal] = useState(/** @type {string | null} */ (null))
  const [prayerMode, setPrayerMode] = useState(/** @type {PrayerMode} */ ('beginner'))
  const [activePrayerStep, setActivePrayerStep] = useState(0)
  const [mezmurQuery, setMezmurQuery] = useState('')
  const [mezmurFilters, setMezmurFilters] = useState(/** @type {string[]} */ ([]))
  const [selectedFidelCard, setSelectedFidelCard] = useState(/** @type {string | null} */ (null))
  const [practiceProgress, setPracticeProgress] = useState(createInitialProgress)

  const resetMezmurSearch = useCallback(() => {
    setMezmurQuery('')
    setMezmurFilters([])
  }, [])

  return {
    selectedGoal,
    setSelectedGoal,
    prayerMode,
    setPrayerMode,
    activePrayerStep,
    setActivePrayerStep,
    mezmurQuery,
    setMezmurQuery,
    mezmurFilters,
    setMezmurFilters,
    selectedFidelCard,
    setSelectedFidelCard,
    practiceProgress,
    setPracticeProgress,
    resetMezmurSearch,
  }
}
