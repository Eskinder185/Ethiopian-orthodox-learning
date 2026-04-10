const STORAGE_PREFIX = 'orthodoxpath.chant.'

const KEYS = {
  recent: `${STORAGE_PREFIX}recent`,
  saved: `${STORAGE_PREFIX}saved`,
  weekly: `${STORAGE_PREFIX}weekly`,
}

function safeParse(json, fallback) {
  try {
    const v = JSON.parse(json)
    return v ?? fallback
  } catch {
    return fallback
  }
}

function safeSetItem(key, value) {
  try {
    if (typeof localStorage === 'undefined') return false
    localStorage.setItem(key, value)
    return true
  } catch {
    return false
  }
}

/** @returns {{ id: string; at: string }[]} */
export function getRecentChants() {
  if (typeof localStorage === 'undefined') return []
  const raw = localStorage.getItem(KEYS.recent)
  const list = safeParse(raw, [])
  if (!Array.isArray(list)) return []
  return list
    .filter((x) => x && typeof x.id === 'string')
    .map((x) => ({ id: x.id, at: typeof x.at === 'string' ? x.at : new Date().toISOString() }))
    .slice(0, 50)
}

/** @param {string} id @returns {boolean} */
export function pushRecentChant(id) {
  if (typeof localStorage === 'undefined' || !id) return false
  const prev = getRecentChants().filter((x) => x.id !== id)
  const next = [{ id, at: new Date().toISOString() }, ...prev].slice(0, 50)
  return safeSetItem(KEYS.recent, JSON.stringify(next))
}

/** @returns {string[]} */
export function getSavedChantIds() {
  if (typeof localStorage === 'undefined') return []
  const raw = localStorage.getItem(KEYS.saved)
  const list = safeParse(raw, [])
  if (!Array.isArray(list)) return []
  return list.filter((x) => typeof x === 'string')
}

/** @param {string} id */
export function isChantSaved(id) {
  return getSavedChantIds().includes(id)
}

/** @param {string} id */
export function toggleSavedChant(id) {
  if (typeof localStorage === 'undefined' || !id) return false
  const cur = getSavedChantIds()
  const has = cur.includes(id)
  const next = has ? cur.filter((x) => x !== id) : [...cur, id]
  return safeSetItem(KEYS.saved, JSON.stringify(next)) ? !has : has
}

/**
 * Weekly practice count: ISO week key + sessions this week.
 * @returns {{ weekKey: string; count: number }}
 */
export function getWeeklyProgress() {
  if (typeof localStorage === 'undefined') return { weekKey: '', count: 0 }
  const raw = localStorage.getItem(KEYS.weekly)
  const o = safeParse(raw, null)
  if (!o || typeof o !== 'object') return { weekKey: '', count: 0 }
  const weekKey = typeof o.weekKey === 'string' ? o.weekKey : ''
  const count = typeof o.count === 'number' && o.count >= 0 ? o.count : 0
  return { weekKey, count }
}

function isoWeekKey(d = new Date()) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  const dayNum = date.getUTCDay() || 7
  date.setUTCDate(date.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1))
  const weekNo = Math.ceil(((date - yearStart) / 86400000 + 1) / 7)
  return `${date.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`
}

/** Increment practice session count for current ISO week. @returns {{ weekKey: string; count: number }} */
export function incrementWeeklyPractice() {
  if (typeof localStorage === 'undefined') return getWeeklyProgress()
  const wk = isoWeekKey()
  const cur = getWeeklyProgress()
  const count = cur.weekKey === wk ? cur.count + 1 : 1
  const next = { weekKey: wk, count }
  if (!safeSetItem(KEYS.weekly, JSON.stringify(next))) return cur
  return next
}

/**
 * Record a practice session: recent list + weekly count (used by chant detail modal footer).
 * Writes both keys; returns false if either write fails.
 * @param {string} id
 * @returns {boolean}
 */
export function recordChantPracticeSession(id) {
  if (!id) return false
  const prevRecent = getRecentChants().filter((x) => x.id !== id)
  const nextRecent = [{ id, at: new Date().toISOString() }, ...prevRecent].slice(0, 50)
  const wk = isoWeekKey()
  const cur = getWeeklyProgress()
  const count = cur.weekKey === wk ? cur.count + 1 : 1
  const nextWeekly = { weekKey: wk, count }
  if (!safeSetItem(KEYS.recent, JSON.stringify(nextRecent))) return false
  if (!safeSetItem(KEYS.weekly, JSON.stringify(nextWeekly))) return false
  return true
}
