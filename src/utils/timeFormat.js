/**
 * Parse flexible time strings for lyric timestamps (m:ss, mm:ss, h:mm:ss, or plain seconds).
 */
export function parseTimeToSeconds(raw) {
  if (raw == null) return 0
  const s = String(raw).trim()
  if (s === '') return 0
  if (/^\d+(\.\d+)?$/.test(s)) return Math.max(0, parseFloat(s))
  const parts = s.split(':').map((p) => parseFloat(p.trim()))
  if (parts.some((n) => Number.isNaN(n))) return 0
  if (parts.length === 1) return Math.max(0, parts[0])
  if (parts.length === 2) return Math.max(0, parts[0] * 60 + parts[1])
  if (parts.length === 3) return Math.max(0, parts[0] * 3600 + parts[1] * 60 + parts[2])
  return 0
}

/** Format seconds as m:ss or h:mm:ss when needed */
export function formatSecondsToTimestamp(sec) {
  const x = Math.max(0, Math.floor(Number(sec) || 0))
  const h = Math.floor(x / 3600)
  const m = Math.floor((x % 3600) / 60)
  const s = x % 60
  if (h > 0) {
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }
  return `${m}:${String(s).padStart(2, '0')}`
}
