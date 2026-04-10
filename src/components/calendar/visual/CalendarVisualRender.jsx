import { pickDisplayImage, getFallbackIcon } from '../../../utils/calendarVisualSystem.js'
import { getCategoryMeta } from '../../../data/calendarVisualCatalog.js'

/** Full-width feast artwork or patterned placeholder */
export function FeastArtwork({ visual, title, className = '' }) {
  const src = pickDisplayImage(visual, true)
  const categoryId = visual?.categoryId || 'holiday'
  const meta = getCategoryMeta(categoryId)
  if (!src) {
    return (
      <div
        className={`cal-vis-feast-art cal-vis-feast-art--placeholder ${meta.patternClass ?? ''} ${className}`.trim()}
      >
        <span className="cal-vis-feast-art__glyph" aria-hidden>
          {visual?.icon ?? meta.icon}
        </span>
        <span className="visually-hidden">{visual?.alt || title || 'Liturgical artwork'}</span>
      </div>
    )
  }
  return (
    <div className={`cal-vis-feast-art ${className}`.trim()}>
      <img
        src={src}
        alt={visual?.alt || title || ''}
        className="cal-vis-feast-art__img"
        loading="lazy"
      />
    </div>
  )
}

/** Portrait-oriented crop for saints and archangels */
export function SaintPortrait({ visual, title, className = '' }) {
  const src = pickDisplayImage(visual, true)
  const categoryId = visual?.categoryId || 'saint'
  const meta = getCategoryMeta(categoryId)
  if (!src) {
    const glyph = visual?.icon ?? getFallbackIcon(categoryId)
    return (
      <div
        className={`cal-vis-saint cal-vis-saint--placeholder ${meta.patternClass ?? ''} ${className}`.trim()}
      >
        <span className="cal-vis-saint__glyph" aria-hidden>
          {glyph}
        </span>
        <span className="visually-hidden">{visual?.alt || title || 'Saint portrait'}</span>
      </div>
    )
  }
  return (
    <div className={`cal-vis-saint ${className}`.trim()}>
      <img
        src={src}
        alt={visual?.alt || title || ''}
        className="cal-vis-saint__img"
        loading="lazy"
      />
    </div>
  )
}

/** Abstract / category symbol */
export function LiturgicalSymbol({ visual, categoryId = 'holiday', className = '', label }) {
  const meta = getCategoryMeta(visual?.categoryId || categoryId)
  const glyph = visual?.icon ?? meta.icon ?? getFallbackIcon(categoryId)
  return (
    <span
      className={`cal-vis-symbol ${meta.patternClass ?? ''} ${className}`.trim()}
      role="img"
      aria-label={label || visual?.alt || meta.label}
    >
      <span className="cal-vis-symbol__glyph" aria-hidden>
        {glyph}
      </span>
    </span>
  )
}

/** @returns {import('react').ReactElement} */
export function renderFeastArtwork(props) {
  return <FeastArtwork {...props} />
}

/** @returns {import('react').ReactElement} */
export function renderSaintPortrait(props) {
  return <SaintPortrait {...props} />
}

/** @returns {import('react').ReactElement} */
export function renderLiturgicalSymbol(props) {
  return <LiturgicalSymbol {...props} />
}
