import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to `document.getElementById(hash)` when the location hash changes.
 * Fixes in-page anchors with React Router (same-route hash links).
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash || hash.length < 2) return
    const id = hash.slice(1)
    const el = document.getElementById(id)
    if (!el) return

    const frame = requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
