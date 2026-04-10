/** Gentle visit streak for Practice hub (localStorage). */
const KEY_LAST = 'orthodoxpath.practiceHub.lastVisitDay'
const KEY_STREAK = 'orthodoxpath.practiceHub.streak'

function dayKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function parseDay(s) {
  if (!s || typeof s !== 'string') return null
  const p = s.split('-').map(Number)
  if (p.length !== 3 || p.some((n) => Number.isNaN(n))) return null
  return new Date(p[0], p[1] - 1, p[2])
}

function daysBetween(a, b) {
  const ms = 86400000
  return Math.round((a.getTime() - b.getTime()) / ms)
}

/**
 * Call when user opens Practice hub. Updates streak if new calendar day.
 * @returns {{ streak: number; lastVisitDay: string }}
 */
export function recordPracticeHubVisit() {
  if (typeof localStorage === 'undefined') {
    return { streak: 0, lastVisitDay: dayKey() }
  }
  const today = dayKey()
  const last = localStorage.getItem(KEY_LAST) || ''
  const prevStreak = parseInt(localStorage.getItem(KEY_STREAK) || '0', 10) || 0

  if (last === today) {
    return { streak: prevStreak, lastVisitDay: last }
  }

  let nextStreak = 1
  if (last) {
    const lastDate = parseDay(last)
    const todayDate = parseDay(today)
    if (lastDate && todayDate) {
      const diff = daysBetween(todayDate, lastDate)
      if (diff === 1) nextStreak = prevStreak + 1
      else if (diff === 0) nextStreak = prevStreak
      else nextStreak = 1
    }
  }

  localStorage.setItem(KEY_LAST, today)
  localStorage.setItem(KEY_STREAK, String(nextStreak))
  return { streak: nextStreak, lastVisitDay: today }
}

/** Read without mutating. */
export function readPracticeHubStreak() {
  if (typeof localStorage === 'undefined') return { streak: 0, lastVisitDay: '' }
  return {
    streak: parseInt(localStorage.getItem(KEY_STREAK) || '0', 10) || 0,
    lastVisitDay: localStorage.getItem(KEY_LAST) || '',
  }
}
