/**
 * Calendar visual layer — merge registry + helpers for UI, motion, and badges.
 */

import { CAL_VISUAL_CATEGORIES, categorizeFeast } from '../data/calendarVisualTaxonomy.js'
import {
  FEAST_VISUAL_REGISTRY,
  MOVEABLE_FALLBACK_VISUAL,
  WEEKDAY_VISUAL_REGISTRY,
  ETHIOPIAN_MONTH_VISUAL,
  QUICK_LEARN_VISUAL_REGISTRY,
  RELATED_LINK_VISUAL_REGISTRY,
  SEASON_STORY_VISUAL_REGISTRY,
  FAST_SEASON_TIMELINE_VISUAL,
} from '../data/calendarVisualRegistry.js'

export const CAL_VISUAL_DEFAULTS = {
  image: null,
  thumbnail: null,
  icon: null,
  alt: '',
  category: 'holiday',
  importance: 'standard',
  motionPreset: 'subtle',
  accentTheme: 'gold',
  visualRole: 'commemoration_icon',
}

const IMPORTANCE_ALIAS = {
  medium: 'standard',
  major: 'major',
  minor: 'minor',
  standard: 'standard',
}

function normalizeImportance(v) {
  return IMPORTANCE_ALIAS[v] || 'standard'
}

function mergeVisual(partial) {
  const out = { ...CAL_VISUAL_DEFAULTS, ...partial }
  out.importance = normalizeImportance(out.importance)
  out.categoryId = out.category || out.categoryId || 'holiday'
  out.categoryMeta = CAL_VISUAL_CATEGORIES[out.categoryId] || CAL_VISUAL_CATEGORIES.holiday
  if (!out.icon && out.categoryMeta?.icon) out.icon = out.categoryMeta.icon
  if (!out.alt && out.categoryMeta?.label) out.alt = `${out.categoryMeta.label} — liturgical symbol`
  return out
}

/**
 * @param {object} params
 * @param {'feast'|'weekday'|'ethiopianMonth'|'quickLearn'|'related'|'seasonStory'|'fastSeason'} params.kind
 * @param {object} [params.feast]
 * @param {number} [params.weekdayIndex] 0–6
 * @param {number} [params.ethiopianMonth] 1–13
 * @param {string} [params.quickLearnKey]
 * @param {string} [params.linkId]
 * @param {string} [params.seasonStoryId]
 */
export function getVisualForCalendarItem(params) {
  const { kind, feast, weekdayIndex, ethiopianMonth, quickLearnKey, linkId, seasonStoryId } = params

  if (kind === 'feast' && feast?.id) {
    const reg = FEAST_VISUAL_REGISTRY[feast.id]
    if (reg) {
      return mergeVisual({
        ...reg,
        category: reg.category || categorizeFeast(feast),
        alt: reg.alt || `${feast.name} — liturgical artwork`,
      })
    }
    const cat = categorizeFeast(feast)
    const base = feast.moveable ? { ...MOVEABLE_FALLBACK_VISUAL } : {}
    const imp =
      feast.relaxesWeeklyFast || feast.moveable ? 'major' : 'standard'
    return mergeVisual({
      ...base,
      category: cat,
      importance: imp,
      visualRole: feast.moveable ? 'feast_artwork' : 'commemoration_icon',
      motionPreset: feast.moveable ? 'heroParallax' : 'subtle',
      alt: base.alt || `${feast.name} — placeholder`,
      image: base.image || null,
      thumbnail: base.thumbnail || base.image || null,
    })
  }

  if (kind === 'weekday' && typeof weekdayIndex === 'number') {
    const w = WEEKDAY_VISUAL_REGISTRY[weekdayIndex] || WEEKDAY_VISUAL_REGISTRY[0]
    const cat =
      weekdayIndex === 1 ? 'angel' : weekdayIndex === 6 ? 'saint' : weekdayIndex === 2 ? 'prophet' : 'churchMonth'
    return mergeVisual({
      ...w,
      category: cat,
      alt: w.alt || 'Weekday in the Church — sacred rhythm',
    })
  }

  if (kind === 'ethiopianMonth' && ethiopianMonth >= 1 && ethiopianMonth <= 13) {
    const m = ETHIOPIAN_MONTH_VISUAL[ethiopianMonth] || ETHIOPIAN_MONTH_VISUAL[1]
    return mergeVisual({
      ...m,
      category: 'churchMonth',
    })
  }

  if (kind === 'quickLearn' && quickLearnKey) {
    const q = QUICK_LEARN_VISUAL_REGISTRY[quickLearnKey]
    if (q) return mergeVisual({ ...q, category: 'churchMonth' })
  }

  if (kind === 'related' && linkId) {
    const r = Object.values(RELATED_LINK_VISUAL_REGISTRY).find((x) => x.linkId === linkId)
    if (r) return mergeVisual({ ...r, category: 'churchMonth' })
  }

  if (kind === 'seasonStory' && seasonStoryId) {
    const s = SEASON_STORY_VISUAL_REGISTRY[seasonStoryId] || SEASON_STORY_VISUAL_REGISTRY.ordinary
    return mergeVisual({ ...s, category: 'holiday' })
  }

  if (kind === 'fastSeason') {
    return mergeVisual({ ...FAST_SEASON_TIMELINE_VISUAL, category: 'fasting' })
  }

  return mergeVisual({})
}

/** CSS-friendly badge / card accent */
export function getBadgeTheme(visual) {
  const theme = visual?.accentTheme || 'gold'
  return {
    accentClass: `cal-vis-accent--${theme}`,
    haloClass: visual?.importance === 'major' ? 'cal-vis-halo' : '',
  }
}

/** Root motion class for section / card */
export function getMotionPreset(visual) {
  const p = visual?.motionPreset || 'subtle'
  return {
    preset: p,
    className: `cal-vis-motion--${p}`,
  }
}

export function getFallbackIcon(categoryId) {
  const meta = CAL_VISUAL_CATEGORIES[categoryId] || CAL_VISUAL_CATEGORIES.holiday
  return meta.icon || '✦'
}

/** Prefer full image for major feast artwork / saint portrait */
export function pickDisplayImage(visual, preferFull = true) {
  if (!visual) return null
  if (preferFull && visual.image) return visual.image
  if (visual.thumbnail) return visual.thumbnail
  return visual.image || null
}

/**
 * “Remembered today” card strip: major feast artwork, saint portraits, or icon-only.
 */
export function getHolyFigureCardImage(visual) {
  if (!visual) return { imageSrc: null, imageAlt: '' }
  const { visualRole, importance, alt } = visual
  if (visualRole === 'saint_portrait') {
    const src = pickDisplayImage(visual, true)
    return { imageSrc: src, imageAlt: alt || '' }
  }
  if (visualRole === 'feast_artwork' && importance === 'major') {
    const src = pickDisplayImage(visual, true)
    return { imageSrc: src, imageAlt: alt || '' }
  }
  if (visualRole === 'fast_symbol' && (visual.image || visual.thumbnail)) {
    return { imageSrc: pickDisplayImage(visual, false), imageAlt: alt || '' }
  }
  if (visualRole === 'weekday_symbol' && (visual.image || visual.thumbnail)) {
    return { imageSrc: pickDisplayImage(visual, false), imageAlt: alt || '' }
  }
  return { imageSrc: null, imageAlt: alt || '' }
}

export { RELATED_LINK_VISUAL_REGISTRY }
