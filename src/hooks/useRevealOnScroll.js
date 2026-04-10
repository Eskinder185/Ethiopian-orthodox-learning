import { useEffect, useRef, useState } from 'react'

/**
 * Adds `data-reveal` + `data-reveal-visible` for CSS-driven entrance motion.
 * Reduced motion: `LearnHome.css` shows sections at full opacity without waiting for JS.
 */
export function useRevealOnScroll(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const { rootMargin = '0px 0px -8% 0px', threshold = 0.08 } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { rootMargin, threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [rootMargin, threshold])

  const revealProps = {
    ref,
    'data-reveal': true,
    'data-reveal-visible': visible ? 'true' : 'false',
  }

  return { ref, visible, revealProps }
}
