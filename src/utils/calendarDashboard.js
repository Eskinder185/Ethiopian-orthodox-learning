/**
 * Layout helpers and dashboard-specific liturgical signals for /calendar.
 */

import {
  gregorianToJDN,
  jdnToGregorian,
  ethiopianToJDN,
  pagumenLength,
} from './ethiopianCalendar.js'
import {
  getLiturgicalDayState,
  getTomorrowState,
  getUpcomingFixedFeasts,
  formatGregorianDate,
  formatEthiopianDate,
  getGreatLentGregorianRange,
} from './liturgicalCalendar.js'
import { categorizeFeast, getCategoryMeta } from '../data/calendarVisualCatalog.js'
import { getVisualForCalendarItem, pickDisplayImage } from './calendarVisualSystem.js'

export function buildGregorianMonthGrid(year, month, today = new Date()) {
  const daysInMonth = new Date(year, month, 0).getDate()
  const first = new Date(year, month - 1, 1)
  const startDow = first.getDay()
  const cells = []
  for (let i = 0; i < startDow; i++) {
    cells.push({ key: `pad-g-${year}-${month}-${i}`, empty: true })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month - 1, d)
    const jdn = gregorianToJDN(year, month, d)
    cells.push({
      key: `g-${year}-${month}-${d}`,
      empty: false,
      date,
      jdn,
      day: d,
      isToday: date.toDateString() === today.toDateString(),
    })
  }
  return { cells, startDow, daysInMonth }
}

export function buildEthiopianMonthGrid(ethYear, ethMonth, today = new Date()) {
  const maxDay = ethMonth <= 12 ? 30 : pagumenLength(ethYear)
  const firstJdn = ethiopianToJDN({ year: ethYear, month: ethMonth, day: 1 })
  const firstGreg = jdnToGregorian(firstJdn)
  const firstDate = new Date(firstGreg.year, firstGreg.month - 1, firstGreg.day)
  const startDow = firstDate.getDay()
  const cells = []
  for (let i = 0; i < startDow; i++) {
    cells.push({ key: `pad-e-${ethYear}-${ethMonth}-${i}`, empty: true })
  }
  for (let d = 1; d <= maxDay; d++) {
    const jdn = ethiopianToJDN({ year: ethYear, month: ethMonth, day: d })
    const g = jdnToGregorian(jdn)
    const date = new Date(g.year, g.month - 1, g.day)
    cells.push({
      key: `e-${ethYear}-${ethMonth}-${d}`,
      empty: false,
      date,
      jdn,
      day: d,
      isToday: date.toDateString() === today.toDateString(),
    })
  }
  return { cells, startDow, maxDay }
}

/** Next highlighted countdown target: Pascha or nearest fixed feast (by JDN). */
export function getPrimaryCountdown(fromDate = new Date()) {
  const state = getLiturgicalDayState(fromDate)
  const jdn = state.jdn
  const candidates = []

  if (state.upcomingPaschaJDN >= jdn) {
    const days = state.upcomingPaschaJDN - jdn
    const pg = jdnToGregorian(state.upcomingPaschaJDN)
    candidates.push({
      kind: 'pascha',
      id: 'pascha',
      label: 'Feast of the Resurrection (Fasika)',
      days,
      jdn: state.upcomingPaschaJDN,
      whenFormatted: formatGregorianDate(pg.year, pg.month, pg.day),
    })
  }

  const fixed = getUpcomingFixedFeasts(fromDate, 12)
  for (const f of fixed) {
    if (f.jdn <= jdn) continue
    candidates.push({
      kind: 'feast',
      id: `feast-${f.id}-${f.jdn}`,
      label: f.name,
      days: f.jdn - jdn,
      jdn: f.jdn,
      whenFormatted: f.gregorianFormatted,
      feast: f,
    })
  }

  candidates.sort((a, b) => a.days - b.days)
  return candidates[0] ?? null
}

export function getNextGreatLentStart(fromDate = new Date()) {
  const jdn = gregorianToJDN(
    fromDate.getFullYear(),
    fromDate.getMonth() + 1,
    fromDate.getDate(),
  )
  const gy = fromDate.getFullYear()
  for (let y = gy; y <= gy + 2; y++) {
    const range = getGreatLentGregorianRange(y)
    const startJdn = gregorianToJDN(range.start.year, range.start.month, range.start.day)
    if (startJdn > jdn) {
      return {
        startJdn,
        range,
        daysUntil: startJdn - jdn,
        startFormatted: formatGregorianDate(range.start.year, range.start.month, range.start.day),
        paschaFormatted: formatGregorianDate(range.pascha.year, range.pascha.month, range.pascha.day),
      }
    }
  }
  return null
}

/** Rail card: next seasonal fast window (not Wed/Fri weekly). */
export function getNextFastingSeasonHighlight(fromDate = new Date()) {
  const s = getLiturgicalDayState(fromDate)
  const jdn = s.jdn

  if (s.inGreatLent) {
    const pg = jdnToGregorian(s.upcomingPaschaJDN)
    return {
      id: 'in-great-lent',
      title: 'Great Lent — you are here',
      why: 'The Church walks toward Pasca in repentance and prayer. When Pascha arrives, the fast gives way to joy.',
      meta: `Pascha (next): ${formatGregorianDate(pg.year, pg.month, pg.day)}`,
      daysUntil: null,
    }
  }

  if (s.ethiopianMonth === 12 && s.ethiopianDay >= 1 && s.ethiopianDay <= 15) {
    return {
      id: 'filseta-fast',
      title: 'Assumption fast (Filseta Tsom)',
      why: 'Sixteen days of preparation for Mary’s Dormition — prayer and discipline before her great feast.',
      meta: 'Nehase 1–15 on the Ethiopian calendar',
      daysUntil: null,
    }
  }

  if (s.ethiopianMonth === 4 && s.ethiopianDay >= 15 && s.ethiopianDay <= 28) {
    return {
      id: 'advent-nativity',
      title: 'Advent before Nativity (Sibket)',
      why: 'Forty days (common Ethiopian reckoning) to prepare hearts for Christmas (Lidet).',
      meta: 'Tahsas 15–29 — confirm with your parish',
      daysUntil: null,
    }
  }

  if (s.ethiopianMonth === 1 && s.ethiopianDay >= 14 && s.ethiopianDay <= 16) {
    return {
      id: 'cross-fast',
      title: 'Fast before Meskel',
      why: 'A short fast before the Finding of the True Cross — cross, vigil fires, and joy follow.',
      meta: 'Meskerem 14–16',
      daysUntil: null,
    }
  }

  const lent = getNextGreatLentStart(fromDate)
  if (lent) {
    return {
      id: 'next-great-lent',
      title: 'Great Lent (next)',
      why: 'The longest fast before Pascha — wilderness, humility, and mercy.',
      meta: `Begins ${lent.startFormatted} · Pascha ${lent.paschaFormatted}`,
      daysUntil: lent.daysUntil,
    }
  }

  return {
    id: 'weekly-fast',
    title: 'Wednesday & Friday rhythm',
    why: 'Even outside great fasts, the Church marks betrayal and crucifixion each week — your priest guides the rule.',
    meta: 'Weekly fast · seasonal guides for longer fasts',
    daysUntil: null,
  }
}

export function isSaintCommemoration(feast) {
  if (!feast?.name) return false
  const n = feast.name.toLowerCase()
  return (
    n.includes('saint') ||
    n.includes('st.') ||
    n.includes('st ') ||
    n.includes('archangel') ||
    n.includes('mary') ||
    n.includes('kidane')
  )
}

/** Whether a day’s liturgical state matches explorer filter toggles (any match). */
export function dayVisibleInFilters(state, filters) {
  const active = Object.values(filters).some(Boolean)
  if (!active) return true

  const feasts = state.matchingFeasts
  const hasFeast = feasts.length > 0
  const saint = feasts.some(isSaintCommemoration)
  const movable = feasts.some((f) => f.moveable)
  const fixed = feasts.some((f) => !f.moveable)

  const filsetaFast = state.ethiopianMonth === 12 && state.ethiopianDay >= 1 && state.ethiopianDay <= 15
  const adventFast = state.ethiopianMonth === 4 && state.ethiopianDay >= 15 && state.ethiopianDay <= 28
  const crossFast = state.ethiopianMonth === 1 && state.ethiopianDay >= 14 && state.ethiopianDay <= 16
  const fastingDay =
    state.isWeeklyFastDay ||
    state.inGreatLent ||
    filsetaFast ||
    adventFast ||
    crossFast

  if (filters.majorFeasts && hasFeast) return true
  if (filters.saints && saint) return true
  if (filters.fasting && fastingDay) return true
  if (filters.movable && movable) return true
  if (filters.fixed && fixed) return true
  return false
}

export function getSeasonStory(state) {
  if (state.inGreatLent) {
    return {
      id: 'great-lent',
      title: 'Great Lent',
      phase: 'Preparation for Pascha',
      summary:
        'The Church strips away noise and sharpens prayer. Each weekday still has its own theme, but fasting and repentance take the foreground.',
      next: 'Holy Week and the Feast of the Resurrection',
      habit: 'One extra psalm or prostration, and a humble meal — as your health and spiritual father allow.',
    }
  }
  if (state.isBrightWeek) {
    return {
      id: 'bright-week',
      title: 'Bright Week',
      phase: 'Paschal joy',
      summary: 'The week after Pascha is festive: Christ is risen, and the Church lingers at the empty tomb in song.',
      next: 'The forty days until Ascension',
      habit: 'Share the Paschal greeting, visit church when you can, and let gratitude shape small acts of mercy.',
    }
  }
  if (state.ethiopianMonth === 12 && state.ethiopianDay >= 1 && state.ethiopianDay <= 15) {
    return {
      id: 'filseta-season',
      title: 'Toward Filseta (Dormition)',
      phase: 'Assumption fast',
      summary:
        'The Church prepares for Mary’s falling asleep and glorious translation — sixteen days of prayer and restraint.',
      next: 'The feast of Filseta',
      habit: 'A Marian prayer or hymn each evening; keep rules with parish guidance.',
    }
  }
  if (state.ethiopianMonth === 4 && state.ethiopianDay >= 15 && state.ethiopianDay <= 28) {
    return {
      id: 'nativity-advent',
      title: 'Advent before Nativity',
      phase: 'Sibket / Kisqum',
      summary:
        'Hearts turn toward Bethlehem: repentance and expectation before Christmas (Lidet) on the Ethiopian calendar.',
      next: 'Feast of the Nativity (Lidet)',
      habit: 'Read a Nativity Gospel verse daily; simplify one meal as your priest advises.',
    }
  }
  if (state.ethiopianMonth === 1 && state.ethiopianDay >= 14 && state.ethiopianDay <= 16) {
    return {
      id: 'meskel-fast',
      title: 'Before Meskel',
      phase: 'Cross fast',
      summary: 'A short fast before the Finding of the True Cross — Demera fires and cross veneration follow.',
      next: 'Feast of Meskel',
      habit: 'Pray before a cross in your home or church; join communal celebration if possible.',
    }
  }
  if (state.ethiopianMonth === 13) {
    return {
      id: 'pagumen',
      title: 'Pagumen — the little month',
      phase: 'Year’s threshold',
      summary:
        'Five or six intercalary days close the Ethiopian year; some keep special prayers for the transition to New Year.',
      next: 'Enkutatash (Ethiopian New Year) and Meskerem',
      habit: 'Light a candle for thanksgiving; plan one charitable act for the new year.',
    }
  }
  return {
    id: 'ordinary',
    title: 'The Church’s ordinary time',
    phase: `${state.ethiopianMonthName || 'This month'} · ${state.weekdayEnglish || ''}`,
    summary:
      'Not every week is a great fast — yet Wednesday, Friday, and each weekday’s theme still shape Orthodox life.',
    next: 'Watch the calendar for the next feast or fasting season',
    habit: 'Keep Wednesday/Friday in mind; read the weekday theme on the Today page.',
  }
}

/**
 * Rich timeline nodes for the dashboard (tomorrow, week highlight, fixed feasts, fast shift).
 */
export function buildUpcomingTimelineEvents(fromDate = new Date()) {
  const todayState = getLiturgicalDayState(fromDate)
  const jdnToday = todayState.jdn
  const tomorrowState = getTomorrowState(fromDate)
  const nextFast = getNextFastingSeasonHighlight(fromDate)
  const primary = getPrimaryCountdown(fromDate)
  const fixedFeasts = getUpcomingFixedFeasts(fromDate, 6)

  const nodes = []

  const tomorrowFeast = tomorrowState.matchingFeasts[0] ?? null
  const tomorrowVis = tomorrowFeast
    ? getVisualForCalendarItem({ kind: 'feast', feast: tomorrowFeast })
    : null
  nodes.push({
    key: 'tomorrow',
    kind: 'tomorrow',
    days: 1,
    countdownLabel: 'in 1 day',
    title: 'Tomorrow',
    summary:
      tomorrowState.matchingFeasts[0]?.significance?.slice(0, 110) ||
      tomorrowState.weekdayThemeShort ||
      tomorrowState.primaryFastLabel.slice(0, 110),
    gregorianShort: tomorrowState.gregorianFormatted,
    ethiopianShort: tomorrowState.ethiopianFormatted,
    categoryId: tomorrowFeast ? categorizeFeast(tomorrowFeast) : 'churchMonth',
    feast: tomorrowFeast,
    imageSrc: pickDisplayImage(tomorrowVis, false) || '/images/home/home-card-calendar.jpg',
    imageAlt: tomorrowVis?.alt,
    visual: tomorrowVis,
  })

  const weekPeek = fixedFeasts.find((f) => f.jdn > jdnToday && f.jdn <= jdnToday + 7)
  if (weekPeek) {
    const weekVis = getVisualForCalendarItem({ kind: 'feast', feast: weekPeek })
    nodes.push({
      key: `week-${weekPeek.id}-${weekPeek.jdn}`,
      kind: 'this-week',
      days: weekPeek.jdn - jdnToday,
      countdownLabel: `in ${weekPeek.jdn - jdnToday} days`,
      title: weekPeek.name,
      summary: weekPeek.significance?.slice(0, 120) ?? '',
      gregorianShort: weekPeek.gregorianFormatted,
      ethiopianShort: weekPeek.ethiopianFormatted,
      categoryId: categorizeFeast(weekPeek),
      feast: weekPeek,
      imageSrc:
        pickDisplayImage(weekVis, false) || '/images/home/home-seasonal-spotlight-nativity.jpg',
      imageAlt: weekVis?.alt,
      visual: weekVis,
    })
  }

  if (primary) {
    const feastObj =
      primary.kind === 'feast' && primary.feast
        ? primary.feast
        : {
            id: 'pascha',
            name: primary.label,
            moveable: true,
            significance:
              'The Queen of feasts — Holy Week, Bright Week, Ascension, and Pentecost unfold from Pascha. Confirm dates with your parish.',
            relaxesWeeklyFast: true,
          }
    const sig = feastObj.significance ?? ''
    const majorVis = getVisualForCalendarItem({ kind: 'feast', feast: feastObj })
    nodes.push({
      key: `major-${primary.id}`,
      kind: 'major-feast',
      days: primary.days,
      countdownLabel: primary.days === 0 ? 'today' : `in ${primary.days} days`,
      title: primary.label,
      summary: sig ? sig.slice(0, 130) : '',
      gregorianShort: primary.whenFormatted,
      ethiopianShort:
        primary.kind === 'feast' && primary.feast?.ethiopian
          ? formatEthiopianDate(primary.feast.ethiopian)
          : '',
      categoryId: categorizeFeast(feastObj),
      feast: feastObj,
      imageSrc:
        pickDisplayImage(majorVis, false) ||
        (primary.kind === 'pascha'
          ? '/images/home/home-seasonal-spotlight-fasika.jpg'
          : '/images/home/home-hero-main.jpg'),
      imageAlt: majorVis?.alt,
      visual: majorVis,
    })
  }

  const seenJdn = new Set(nodes.map((n) => n.feast?.jdn).filter(Boolean))
  for (const f of fixedFeasts) {
    if (nodes.length >= 6) break
    if (f.jdn <= jdnToday || seenJdn.has(f.jdn)) continue
    seenJdn.add(f.jdn)
    const fixedVis = getVisualForCalendarItem({ kind: 'feast', feast: f })
    nodes.push({
      key: `fixed-${f.id}-${f.jdn}`,
      kind: 'fixed',
      days: f.jdn - jdnToday,
      countdownLabel: `in ${f.jdn - jdnToday} days`,
      title: f.name,
      summary: f.significance?.slice(0, 120) ?? '',
      gregorianShort: f.gregorianFormatted,
      ethiopianShort: f.ethiopianFormatted,
      categoryId: categorizeFeast(f),
      feast: f,
      imageSrc: pickDisplayImage(fixedVis, false) || '/images/home/home-card-calendar.jpg',
      imageAlt: fixedVis?.alt,
      visual: fixedVis,
    })
  }

  const fastVis = getVisualForCalendarItem({ kind: 'fastSeason' })
  nodes.push({
    key: `fast-${nextFast.id}`,
    kind: 'fast-season',
    days: nextFast.daysUntil ?? null,
    countdownLabel:
      nextFast.daysUntil != null ? `in ${nextFast.daysUntil} days` : 'seasonal rhythm',
    title: nextFast.title,
    summary: nextFast.why,
    gregorianShort: nextFast.meta ?? '',
    ethiopianShort: '',
    categoryId: 'fasting',
    feast: null,
    imageSrc: pickDisplayImage(fastVis, false) || '/images/home/home-seasonal-spotlight-great-lent.jpg',
    imageAlt: fastVis?.alt,
    visual: fastVis,
  })

  return nodes.map((n) => ({
    ...n,
    category: getCategoryMeta(n.categoryId),
  }))
}
