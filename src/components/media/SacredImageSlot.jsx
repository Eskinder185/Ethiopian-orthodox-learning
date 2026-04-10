import { useEffect, useState } from 'react'
import { orthodoxImage } from '../../constants/orthodoxImageManifest.js'
import './SacredImageSlot.css'

/**
 * Responsive image region with gradient fallback when `src` is missing or fails to load.
 * Pass `imageKey` for manifest lookup, or explicit `src` / `alt`.
 *
 * @param {{
 *   imageKey?: string,
 *   src?: string | null,
 *   alt?: string,
 *   className?: string,
 *   imgClassName?: string,
 *   loading?: 'lazy' | 'eager',
 *   fallback?: import('react').ReactNode,
 *   sizes?: string,
 * }} props
 */
export default function SacredImageSlot({
  imageKey,
  src: srcProp,
  alt: altProp,
  className = '',
  imgClassName = '',
  loading = 'lazy',
  fallback = null,
  sizes,
}) {
  const resolved = imageKey && String(imageKey).length > 0 ? orthodoxImage(imageKey) : null
  const src = srcProp ?? resolved?.src ?? null
  const alt = altProp ?? resolved?.alt ?? ''
  const [bad, setBad] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setBad(false)
    setLoaded(false)
  }, [src])

  const imgVisible = Boolean(src) && !bad && loaded
  const showFallbackContent = !src || bad || !loaded

  return (
    <div className={`sacred-image-slot ${className}`.trim()}>
      <div className="sacred-image-slot__fallback" aria-hidden="true" />
      {showFallbackContent ? fallback : null}
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`sacred-image-slot__img ${imgClassName}`.trim()}
          loading={loading}
          decoding="async"
          sizes={sizes}
          onLoad={() => setLoaded(true)}
          onError={() => setBad(true)}
          style={{ opacity: imgVisible ? 1 : 0 }}
        />
      ) : null}
    </div>
  )
}
