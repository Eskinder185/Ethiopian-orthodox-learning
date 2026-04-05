/**
 * Parse a YouTube watch / share / embed URL and return the 11-character video id, or null.
 */
export function extractYouTubeId(raw) {
  if (!raw || typeof raw !== 'string') return null
  const input = raw.trim()
  if (!input) return null

  if (/^[\w-]{11}$/.test(input)) return input

  let urlString = input
  if (!/^https?:\/\//i.test(urlString)) {
    urlString = 'https://' + urlString
  }

  try {
    const u = new URL(urlString)
    const host = u.hostname.replace(/^www\./, '')

    if (host === 'youtu.be') {
      const id = u.pathname.split('/').filter(Boolean)[0]
      return normalizeId(id)
    }

    if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'music.youtube.com') {
      const path = u.pathname
      if (path.startsWith('/embed/')) {
        const id = path.split('/')[2]
        return normalizeId(id)
      }
      if (path.startsWith('/shorts/')) {
        const id = path.split('/')[2]
        return normalizeId(id)
      }
      const v = u.searchParams.get('v')
      if (v) return normalizeId(v)
    }
  } catch {
    /* fall through */
  }

  const m = input.match(/(?:v=|\/embed\/|youtu\.be\/|\/shorts\/)([a-zA-Z0-9_-]{11})/)
  return m ? m[1] : null
}

function normalizeId(id) {
  if (!id) return null
  const cleaned = id.split(/[?&#]/)[0]
  return /^[\w-]{11}$/.test(cleaned) ? cleaned : null
}
