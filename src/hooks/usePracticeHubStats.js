import { useEffect, useState } from 'react'
import { getWeeklyProgress } from '../utils/chantStorage.js'
import { recordPracticeHubVisit } from '../utils/practiceHubStreak.js'

const KEY_PRAYERS = 'orthodoxpath.practice.prayersTouched'
const KEY_LETTERS = 'orthodoxpath.practice.lettersTouched'
const KEY_INSTR = 'orthodoxpath.practice.instrumentSessions'

function readNum(key) {
  if (typeof localStorage === 'undefined') return 0
  const n = parseInt(localStorage.getItem(key) || '0', 10)
  return Number.isFinite(n) && n >= 0 ? n : 0
}

/**
 * Call once on Practice hub: records visit streak + reads local counters.
 */
export function usePracticeHubStats() {
  const [stats, setStats] = useState(() => ({
    prayerDays: 0,
    mezmurSessions: 0,
    instrumentNotes: 0,
    languageLetters: 0,
    prayersTouched: 0,
  }))

  useEffect(() => {
    const visit = recordPracticeHubVisit()
    setStats({
      prayerDays: visit.streak,
      mezmurSessions: getWeeklyProgress().count,
      instrumentNotes: readNum(KEY_INSTR),
      languageLetters: readNum(KEY_LETTERS),
      prayersTouched: readNum(KEY_PRAYERS),
    })
  }, [])

  return stats
}
