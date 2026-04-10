/**
 * Premium liturgical category glyphs — line emblems for calendar badges, filters, cells.
 * Set color via currentColor (ivory/gold). Use .cal-lit-glyph--on-sapphire for deep blue disc.
 */

const VB = 24

const ink = {
  stroke: 'currentColor',
  strokeWidth: 1.65,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function SvgRoot({ children, title }) {
  return (
    <svg
      className="cal-lit-glyph__svg"
      viewBox={`0 0 ${VB} ${VB}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}

/** Saints — halo + Greek cross */
function GlyphSaint({ title }) {
  return (
    <SvgRoot title={title}>
      <circle cx="12" cy="7.5" r="3" {...ink} />
      <path d="M12 11.5v9.5M8 16h8" {...ink} />
    </SvgRoot>
  )
}

/** Angels — lozenge (Ethiopian wing/dress motif) + base */
function GlyphAngel({ title }) {
  return (
    <SvgRoot title={title}>
      <path d="M12 4l-4.5 6 4.5 4 4.5-4L12 4z" {...ink} />
      <path d="M12 14v5.5M9.5 17.5h5" {...ink} />
    </SvgRoot>
  )
}

/** Martyrs — crown of witness */
function GlyphMartyr({ title }) {
  return (
    <SvgRoot title={title}>
      <path d="M6.5 17.5L7.5 11l2.5 2.5L12 8l1.5 5.5L16 11l1 6.5" {...ink} />
      <path d="M6 17.5h12" {...ink} />
    </SvgRoot>
  )
}

/** Apostles — codex */
function GlyphApostle({ title }) {
  return (
    <SvgRoot title={title}>
      <rect x="8.25" y="6.5" width="7.5" height="12" rx="1" fill="none" {...ink} />
      <path d="M12 6.5v12" {...ink} />
    </SvgRoot>
  )
}

/** Marian — lily + star spark */
function GlyphMarian({ title }) {
  return (
    <SvgRoot title={title}>
      <path d="M12 20V11M9 8l3 3 3-3M9 8l1.5-2.5h5L15 8" {...ink} />
      <circle cx="16.5" cy="6" r="1.15" fill="currentColor" />
    </SvgRoot>
  )
}

/** Christ feasts — glory cross in circle */
function GlyphChrist({ title }) {
  return (
    <SvgRoot title={title}>
      <circle cx="12" cy="12" r="8" {...ink} />
      <path d="M12 6v12M7.5 12h9" {...ink} />
    </SvgRoot>
  )
}

/** Cross feasts — Ethiopian flared arms */
function GlyphCross({ title }) {
  return (
    <SvgRoot title={title}>
      <path d="M12 3v18" {...ink} />
      <path d="M6 10.5h12" {...ink} />
      <path d="M6 10.5L4.8 12.8h14.4L18 10.5" {...ink} />
    </SvgRoot>
  )
}

/** Fasting — vigil flame */
function GlyphFasting({ title }) {
  return (
    <SvgRoot title={title}>
      <path d="M12 5.5c-1.5 2-2.5 3.2-2.5 5a2.5 2.5 0 005 0c0-1-.8-2.2-2.5-5z" {...ink} />
      <path d="M12 10.5v9M9.5 19.5h5" {...ink} />
    </SvgRoot>
  )
}

/** Resurrection — dawn + cross + horizon */
function GlyphResurrection({ title }) {
  return (
    <SvgRoot title={title}>
      <path d="M12 3v5M8.5 5.5L11 8M15.5 5.5L13 8M6 8.5l3 1.5M18 8.5l-3 1.5" {...ink} />
      <path d="M12 14v6M9.5 17h5" {...ink} />
      <path d="M7.5 14.5a4.5 3 0 009 0" {...ink} />
    </SvgRoot>
  )
}

/** Major holidays — eight-point star */
function GlyphHoliday({ title }) {
  return (
    <SvgRoot title={title}>
      <path
        d="M12 4.5l1.4 4.2 4.4.4-3.4 2.6 1.1 4.3-3.5-2.1-3.5 2.1 1.1-4.3-3.4-2.6 4.4-.4L12 4.5z"
        {...ink}
      />
    </SvgRoot>
  )
}

/** Ethiopian months / church year — cycle wheel */
function GlyphChurchMonth({ title }) {
  return (
    <SvgRoot title={title}>
      <circle cx="12" cy="12" r="8.5" {...ink} />
      <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3" {...ink} />
      <circle cx="12" cy="12" r="2" {...ink} />
    </SvgRoot>
  )
}

/** Prophets — scroll */
function GlyphProphet({ title }) {
  return (
    <SvgRoot title={title}>
      <path d="M8 8.5h9c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H8" {...ink} />
      <path d="M8 11.5v6c0 .8.7 1.5 1.5 1.5h6.5" {...ink} />
      <path d="M6.5 9.5v10" {...ink} />
    </SvgRoot>
  )
}

const GLYPHS = {
  saint: GlyphSaint,
  angel: GlyphAngel,
  martyr: GlyphMartyr,
  apostle: GlyphApostle,
  marian: GlyphMarian,
  christ: GlyphChrist,
  cross: GlyphCross,
  fasting: GlyphFasting,
  resurrection: GlyphResurrection,
  holiday: GlyphHoliday,
  churchMonth: GlyphChurchMonth,
  prophet: GlyphProphet,
}

/** Category keys matching CAL_VISUAL_CATEGORIES + liturgical filters */
export const LITURGICAL_CATEGORY_GLYPH_IDS = Object.keys(GLYPHS)

export default function LiturgicalCategoryGlyph({
  categoryId,
  label,
  variant = 'default',
  className = '',
  decorative = false,
}) {
  const G = GLYPHS[categoryId] || GLYPHS.holiday
  const v = variant === 'sapphire' ? 'cal-lit-glyph cal-lit-glyph--on-sapphire' : 'cal-lit-glyph'
  if (decorative) {
    return (
      <span className={`${v} ${className}`.trim()} aria-hidden>
        <G title={undefined} />
      </span>
    )
  }
  return (
    <span className={`${v} ${className}`.trim()} role="img" aria-label={label || categoryId}>
      <G title={label} />
    </span>
  )
}
