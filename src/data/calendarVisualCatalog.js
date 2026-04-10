/**
 * Calendar dashboard payloads — links detail drawer, holy figures, and hero copy to the visual system.
 */

import { WEEKDAYS } from './calendarData.js'
import { paths } from '../constants/paths.js'
import {
  getVisualForCalendarItem,
  pickDisplayImage,
  getHolyFigureCardImage,
} from '../utils/calendarVisualSystem.js'
import { CAL_VISUAL_CATEGORIES, categorizeFeast } from './calendarVisualTaxonomy.js'

export { CAL_VISUAL_CATEGORIES, categorizeFeast } from './calendarVisualTaxonomy.js'

/** @deprecated Use FEAST_VISUAL_REGISTRY + getFeastVisual — kept for external imports */
export const FEAST_VISUAL_OVERRIDES = {}

export function getFeastVisual(feast) {
  const vis = getVisualForCalendarItem({ kind: 'feast', feast })
  const categoryId = vis.categoryId || categorizeFeast(feast)
  const category = CAL_VISUAL_CATEGORIES[categoryId]
  const imageSrc = pickDisplayImage(vis, true)
  return {
    categoryId,
    category,
    importance: vis.importance,
    imageSrc,
    imageAlt: vis.alt || `${feast.name} — liturgical artwork`,
    visual: vis,
    motionPreset: vis.motionPreset,
    accentTheme: vis.accentTheme,
    thumbnail: vis.thumbnail,
    icon: vis.icon,
    visualRole: vis.visualRole,
  }
}

export function getHeroFeaturedFromState(state) {
  const primary = state.matchingFeasts[0]
  if (primary) {
    const v = getFeastVisual(primary)
    return {
      kind: 'feast',
      feast: primary,
      title: primary.name,
      subtitle: primary.geezName || null,
      categoryId: v.categoryId,
      category: v.category,
      importance: v.importance,
      imageSrc: v.imageSrc,
      imageAlt: v.imageAlt,
      visual: v.visual,
      motionPreset: v.motionPreset,
      accentTheme: v.accentTheme,
    }
  }
  const g = state.gregorianDate
  const dow = new Date(g.year, g.month - 1, g.day).getDay()
  const wd = WEEKDAYS.find((w) => w.jsIndex === dow)
  const wvis = getVisualForCalendarItem({ kind: 'weekday', weekdayIndex: dow })
  const categoryId = dow === 1 ? 'angel' : dow === 6 ? 'saint' : dow === 2 ? 'prophet' : 'churchMonth'
  const ambient = '/images/home/home-today-in-the-church-panel.jpg'
  return {
    kind: 'weekday',
    feast: null,
    title: wd?.ethiopianName ?? state.weekdayEnglish,
    subtitle: state.weekdayEnglish,
    categoryId,
    category: CAL_VISUAL_CATEGORIES[categoryId],
    importance: 'major',
    imageSrc: pickDisplayImage(wvis, true) || ambient,
    imageAlt: wvis.alt || 'Today in the Church — sacred time and worship',
    visual: wvis,
    motionPreset: wvis.motionPreset,
    accentTheme: wvis.accentTheme,
  }
}

function truncate(s, n = 140) {
  if (!s || s.length <= n) return s || ''
  return `${s.slice(0, n).trim()}…`
}

/** Cards for “Remembered today” section */
export function buildHolyFiguresFromState(state) {
  const figures = []
  const g = state.gregorianDate
  const dow = new Date(g.year, g.month - 1, g.day).getDay()

  for (const feast of state.matchingFeasts) {
    const v = getFeastVisual(feast)
    const { imageSrc, imageAlt } = getHolyFigureCardImage(v.visual)
    figures.push({
      key: `feast-${feast.id}-${feast.moveable ? 'mov' : 'fix'}`,
      kind: 'feast',
      feast,
      title: feast.name,
      geez: feast.geezName || '',
      categoryLabel: v.category.label,
      categoryId: v.categoryId,
      line: truncate(feast.significance, 150),
      importance: v.importance,
      imageSrc,
      imageAlt: imageAlt || v.imageAlt,
      visual: v.visual,
      motionPreset: v.motionPreset,
      accentTheme: v.accentTheme,
    })
  }

  const hasAngelFeast = state.matchingFeasts.some((f) => categorizeFeast(f) === 'angel')
  const wd = WEEKDAYS.find((w) => w.jsIndex === dow)
  if (wd && !(dow === 1 && hasAngelFeast)) {
    const wvis = getVisualForCalendarItem({ kind: 'weekday', weekdayIndex: dow })
    figures.push({
      key: `weekday-${dow}`,
      kind: 'weekday',
      feast: null,
      title: wd.ethiopianName,
      geez: wd.geez,
      categoryLabel: 'Weekday',
      categoryId: dow === 1 ? 'angel' : dow === 6 ? 'saint' : dow === 2 ? 'prophet' : 'churchMonth',
      line: wd.themeShort,
      importance: state.matchingFeasts.length > 0 ? 'standard' : 'major',
      imageSrc: null,
      imageAlt: wvis.alt || '',
      visual: wvis,
      motionPreset: wvis.motionPreset,
      accentTheme: wvis.accentTheme,
    })
  }

  return figures
}

/** Holy-figure card model for a fixed feast (e.g. feast library page). */
export function buildLibraryFigureFromFeast(feast) {
  const v = getFeastVisual(feast)
  const { imageSrc, imageAlt } = getHolyFigureCardImage(v.visual)
  return {
    key: `feast-lib-${feast.id}`,
    kind: 'feast',
    feast,
    title: feast.name,
    geez: feast.geezName || '',
    categoryLabel: v.category.label,
    categoryId: v.categoryId,
    line: truncate(feast.significance, 150),
    importance: v.importance,
    imageSrc,
    imageAlt: imageAlt || v.imageAlt,
    visual: v.visual,
    motionPreset: v.motionPreset,
    accentTheme: v.accentTheme,
  }
}

const BASE_RELATED = [
  { linkId: 'chants', to: paths.practice.chants, label: 'Mezmur & chant practice', hint: 'Hear and practice hymns' },
  { linkId: 'prayer', to: paths.practice.prayer, label: 'Prayer practice', hint: 'Tselot and quiet prayer' },
  { linkId: 'seasons', to: paths.calendar.seasons, label: 'Seasonal guides', hint: 'Where we are in the year' },
  { linkId: 'fasting', to: paths.calendar.fasting, label: 'Fasting explained', hint: 'Seasons and weekly fast' },
  { linkId: 'churchYear', to: paths.learn.churchYear, label: 'Church year (Learn)', hint: 'Feasts, fasts, rhythm' },
  { linkId: 'liturgy', to: paths.learn.liturgy, label: 'Liturgy overview', hint: 'What happens in Divine Liturgy' },
]

const FEAST_RELATED_EXTRA = {
  christmas: [{ linkId: 'teachings', to: paths.learn.teachings, label: 'Teachings', hint: 'Christ and the Church' }],
  epiphany: [{ linkId: 'scripture', to: paths.learn.scripture, label: 'Scripture', hint: 'Baptism and the Gospels' }],
  pascha: [{ linkId: 'teachings', to: paths.learn.teachings, label: 'Teachings', hint: 'Resurrection and new life' }],
  meskel: [{ linkId: 'churchLifeHistory', to: paths.learn.churchLifeHistory, label: 'Church history', hint: 'Cross and witness' }],
}

export function getRelatedLinksForFeast(feast) {
  const extra = feast?.id ? FEAST_RELATED_EXTRA[feast.id] || [] : []
  return [...extra, ...BASE_RELATED]
}

export function getCategoryMeta(categoryId) {
  return CAL_VISUAL_CATEGORIES[categoryId] || CAL_VISUAL_CATEGORIES.holiday
}

/** Minimal liturgical state for drawer date lines (feast library, etc.). */
export function dateLinesState(gregorianFormatted, ethiopianFormatted) {
  return { gregorianFormatted, ethiopianFormatted }
}

/** Payload for FeastDetailDrawer from a holy-figure card model */
export function buildDetailFromFigure(state, figure) {
  const category = getCategoryMeta(figure.categoryId)
  const drawerImg = figure.visual ? pickDisplayImage(figure.visual, true) : figure.imageSrc
  const drawerAlt = figure.visual?.alt || figure.imageAlt
  if (figure.kind === 'feast' && figure.feast) {
    return {
      title: figure.title,
      subtitle: figure.geez || null,
      gregorianLine: state.gregorianFormatted,
      ethiopianLine: state.ethiopianFormatted,
      body: figure.feast.significance || figure.line,
      imageSrc: drawerImg ?? figure.imageSrc,
      imageAlt: drawerAlt || figure.imageAlt,
      categoryId: figure.categoryId,
      category,
      feast: figure.feast,
      relatedLinks: getRelatedLinksForFeast(figure.feast),
      importance: figure.importance,
      accentTheme: figure.visual?.accentTheme ?? figure.accentTheme,
      motionPreset: figure.visual?.motionPreset ?? figure.motionPreset,
      visual: figure.visual,
    }
  }
  return {
    title: figure.title,
    subtitle: figure.geez || null,
    gregorianLine: state.gregorianFormatted,
    ethiopianLine: state.ethiopianFormatted,
    body: figure.line,
    imageSrc: drawerImg ?? figure.imageSrc,
    imageAlt: drawerAlt || figure.imageAlt,
    categoryId: figure.categoryId,
    category,
    feast: null,
    relatedLinks: getRelatedLinksForFeast(null),
    importance: figure.importance,
    accentTheme: figure.visual?.accentTheme ?? figure.accentTheme,
    motionPreset: figure.visual?.motionPreset ?? figure.motionPreset,
    visual: figure.visual,
  }
}

/** Open drawer from month explorer when a feast exists on the selected civil day. */
export function buildDetailFromLiturgicalSelection(state) {
  const f = state.matchingFeasts[0]
  if (!f) return null
  const v = getFeastVisual(f)
  return buildDetailFromFigure(state, {
    key: 'explorer-panel',
    kind: 'feast',
    feast: f,
    title: f.name,
    geez: f.geezName || '',
    categoryId: v.categoryId,
    categoryLabel: v.category.label,
    line: f.significance || state.weekdayThemeShort,
    importance: v.importance,
    imageSrc: v.imageSrc,
    imageAlt: v.imageAlt,
    visual: v.visual,
    accentTheme: v.accentTheme,
    motionPreset: v.motionPreset,
  })
}

export function buildDetailFromTimelineNode(node) {
  const category = getCategoryMeta(node.categoryId)
  if (node.kind === 'fast-season') {
    return {
      title: node.title,
      subtitle: null,
      gregorianLine: node.gregorianShort || '—',
      ethiopianLine: node.ethiopianShort || '—',
      body: node.summary,
      imageSrc: node.imageSrc,
      imageAlt: node.imageAlt || node.visual?.alt || 'Fasting season — liturgical season artwork',
      categoryId: 'fasting',
      category,
      feast: null,
      relatedLinks: getRelatedLinksForFeast(null),
      visual: node.visual,
      accentTheme: node.visual?.accentTheme,
      motionPreset: node.visual?.motionPreset,
    }
  }
  const f = node.feast
  if (f?.significance || f?.name) {
    const drawerImg = node.visual ? pickDisplayImage(node.visual, true) : node.imageSrc
    return {
      title: node.title,
      subtitle: f.geezName || '',
      gregorianLine: node.gregorianShort,
      ethiopianLine: node.ethiopianShort || '—',
      body: f.significance || node.summary,
      imageSrc: drawerImg ?? node.imageSrc,
      imageAlt: node.visual?.alt || f.name,
      categoryId: node.categoryId,
      category,
      feast: f.id ? f : null,
      relatedLinks: getRelatedLinksForFeast(f.id ? f : null),
      visual: node.visual,
      importance: node.visual?.importance,
      accentTheme: node.visual?.accentTheme,
      motionPreset: node.visual?.motionPreset,
    }
  }
  return {
    title: node.title,
    subtitle: null,
    gregorianLine: node.gregorianShort,
    ethiopianLine: node.ethiopianShort || '—',
    body: node.summary,
    imageSrc: node.imageSrc,
    imageAlt: node.imageAlt || node.title,
    categoryId: node.categoryId,
    category,
    feast: null,
    relatedLinks: getRelatedLinksForFeast(null),
    visual: node.visual,
    accentTheme: node.visual?.accentTheme,
    motionPreset: node.visual?.motionPreset,
  }
}
