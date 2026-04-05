/**
 * Liturgical state for a Gregorian day: fasting, feasts, seasons.
 * Combines src/data/calendarData.js with src/utils/ethiopianCalendar.js.
 */

import {
  ETHIOPIAN_MONTHS,
  WEEKDAYS,
  FIXED_FEASTS,
  FASTING_SEASON_DEFINITIONS,
} from '../data/calendarData.js'
import {
  gregorianToJDN,
  jdnToEthiopian,
  jdnToGregorian,
  gregorianDateToEthiopian,
  ethiopianToJDN,
  orthodoxEasterSundayGregorianDate,
  isEthiopianLeapYear,
  pagumenLength,
} from './ethiopianCalendar.js'

export function getEthiopianMonthMeta(monthIndex) {
  return ETHIOPIAN_MONTHS.find((m) => m.index === monthIndex) ?? null
}

export function formatEthiopianDate(eth, { showGeezMonth = true } = {}) {
  const meta = getEthiopianMonthMeta(eth.month)
  const monthPart = meta
    ? showGeezMonth
      ? `${meta.name} (${meta.geez})`
      : meta.name
    : `Month ${eth.month}`
  return `${monthPart} ${eth.day}, ${eth.year} E.C.`
}

export function formatGregorianDate(y, m, d) {
  const date = new Date(y, m - 1, d)
  return date.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function paschaJDNForGregorianYear(gregorianYear) {
  const g = orthodoxEasterSundayGregorianDate(gregorianYear)
  return gregorianToJDN(g.year, g.month, g.day)
}

/**
 * Pascha JDN for moveable feasts: the Easter whose Palm Sunday…Pentecost window contains jdn,
 * otherwise the next Easter (for upcoming Holy Week) or previous (fallback).
 */
function resolvePaschaJDN(jdn) {
  const y = jdnToGregorian(jdn).year
  const candidates = [
    paschaJDNForGregorianYear(y - 1),
    paschaJDNForGregorianYear(y),
    paschaJDNForGregorianYear(y + 1),
  ]
  for (const e of candidates) {
    if (jdn >= e - 7 && jdn <= e + 49) return e
  }
  const eThis = paschaJDNForGregorianYear(y)
  return jdn < eThis ? paschaJDNForGregorianYear(y - 1) : eThis
}

export function findGreatLentWindow(jdn) {
  const { year } = jdnToGregorian(jdn)
  for (const dy of [-1, 0, 1]) {
    const e = paschaJDNForGregorianYear(year + dy)
    const start = e - 55
    const end = e - 1
    if (jdn >= start && jdn <= end) {
      return { start, end, paschaJDN: e, gregorianPascha: jdnToGregorian(e) }
    }
  }
  return null
}

export function inBrightWeek(jdn, paschaJDN) {
  return jdn >= paschaJDN && jdn <= paschaJDN + 6
}

function moveableMatches(jdn, paschaJDN) {
  const out = []
  if (jdn === paschaJDN) {
    out.push({
      id: 'pascha',
      name: 'Feast of the Resurrection (Fasika / Tinisae)',
      significance:
        'Christ’s resurrection — Great Vigil, “Christ is risen!” and festive Divine Liturgy; end of the Great Lent fast.',
      relaxesWeeklyFast: true,
      moveable: true,
    })
  }
  if (jdn === paschaJDN - 7) {
    out.push({
      id: 'hosanna',
      name: 'Hosanna (Palm Sunday)',
      significance:
        'Christ’s entry into Jerusalem — blessed palm fronds and “Hosanna!” in the liturgy.',
      relaxesWeeklyFast: true,
      moveable: true,
    })
  }
  if (jdn === paschaJDN - 2) {
    out.push({
      id: 'good-friday',
      name: 'Crucifixion (Siklet — Good Friday)',
      significance:
        'Solemn commemoration of Christ’s death — Passion readings and strict fasting.',
      relaxesWeeklyFast: false,
      moveable: true,
    })
  }
  const ascensionJDN = paschaJDN + 39
  if (jdn === ascensionJDN) {
    out.push({
      id: 'ascension',
      name: 'Ascension',
      significance:
        'Christ ascended in glory — forty days after Pascha; always a Thursday.',
      relaxesWeeklyFast: true,
      moveable: true,
    })
  }
  const pentecostJDN = paschaJDN + 49
  if (jdn === pentecostJDN) {
    out.push({
      id: 'pentecost',
      name: 'Pentecost (Feast of fifty days)',
      significance:
        'The Holy Spirit descends upon the Church — birth of the Church in power; end of the Paschal season in many respects.',
      relaxesWeeklyFast: true,
      moveable: true,
    })
  }
  return out
}

function fixedFeastsForEthiopianDate(eth) {
  if (eth.month === 13) return []
  const maxDay = eth.month <= 12 ? 30 : 0
  if (eth.day > maxDay) return []
  return FIXED_FEASTS.filter(
    (f) => f.ethiopianMonth === eth.month && f.ethiopianDay === eth.day,
  )
}

function buildActiveSeasons(jdn, eth, lent) {
  const seasons = []
  const defById = Object.fromEntries(FASTING_SEASON_DEFINITIONS.map((d) => [d.id, d]))

  seasons.push({
    ...defById.weekly,
    active: true,
    kind: 'weekly',
  })

  if (lent) {
    seasons.push({
      ...defById['great-lent'],
      active: true,
      kind: 'season',
      window: lent,
    })
  }

  if (eth.month === 12 && eth.day >= 1 && eth.day <= 15) {
    seasons.push({
      ...defById['filseta-fast'],
      active: true,
      kind: 'season',
    })
  }

  if (eth.month === 4 && eth.day >= 15 && eth.day <= 28) {
    seasons.push({
      ...defById.advent,
      active: true,
      kind: 'season',
    })
  }

  if (eth.month === 1 && eth.day >= 14 && eth.day <= 16) {
    seasons.push({
      ...defById['cross-fast'],
      active: true,
      kind: 'season',
    })
  }

  return seasons
}

/**
 * Weekly Wed/Fri fast relaxed on bright week or when a major feast says so.
 */
function weeklyFastApplies(dow, jdn, paschaJDN, feastList) {
  if (dow !== 3 && dow !== 5) return false
  if (inBrightWeek(jdn, paschaJDN)) return false
  if (feastList.some((f) => f.relaxesWeeklyFast)) return false
  return true
}

/**
 * Full liturgical snapshot for a Date (local Gregorian calendar).
 */
export function getLiturgicalDayState(date = new Date()) {
  const gY = date.getFullYear()
  const gM = date.getMonth() + 1
  const gD = date.getDate()
  const jdn = gregorianToJDN(gY, gM, gD)
  const eth = jdnToEthiopian(jdn)
  const dow = date.getDay()
  const weekday = WEEKDAYS.find((w) => w.jsIndex === dow)

  const liturgicalPaschaJDN = resolvePaschaJDN(jdn)
  const { year: gy } = jdnToGregorian(jdn)
  let upcomingPaschaJDN = paschaJDNForGregorianYear(gy)
  if (jdn > upcomingPaschaJDN) upcomingPaschaJDN = paschaJDNForGregorianYear(gy + 1)

  const lent = findGreatLentWindow(jdn)
  const fixed = fixedFeastsForEthiopianDate(eth)
  const moveable = moveableMatches(jdn, liturgicalPaschaJDN)
  const matchingFeasts = [...fixed, ...moveable]

  const bright = inBrightWeek(jdn, liturgicalPaschaJDN)
  const weeklyFast = weeklyFastApplies(dow, jdn, liturgicalPaschaJDN, matchingFeasts)

  const monthMeta = getEthiopianMonthMeta(eth.month)
  const seasonsDetailed = buildActiveSeasons(jdn, eth, lent)

  const primaryFastLabel = (() => {
    if (matchingFeasts.length > 0) {
      return `${matchingFeasts[0].name} — a feast day; fasting rules still follow parish guidance (many feasts relax Wednesday/Friday discipline).`
    }
    if (weeklyFast) {
      return dow === 5
        ? 'Friday: weekly fast (crucifixion)'
        : 'Wednesday: weekly fast (betrayal)'
    }
    if (lent) return 'Great Lent — heightened fasting (confirm rules with your priest)'
    if (eth.month === 12 && eth.day <= 15)
      return 'Assumption fast season (Nehase 1–15)'
    if (eth.month === 4 && eth.day >= 15 && eth.day <= 28)
      return 'Advent fast before Nativity (Tahsas 15–28; common Ethiopian reckoning)'
    if (eth.month === 4 && eth.day === 29)
      return 'Feast of the Nativity (Lidet) — Christmas'
    if (eth.month === 1 && eth.day >= 14 && eth.day <= 16) return 'Fast before Meskel'
    return 'No obligatory Wednesday/Friday fast today (or discipline relaxed this week)'
  })()

  return {
    gregorianDate: { year: gY, month: gM, day: gD },
    gregorianFormatted: formatGregorianDate(gY, gM, gD),
    jdn,
    ethiopianYear: eth.year,
    ethiopianMonth: eth.month,
    ethiopianDay: eth.day,
    ethiopianMonthName: monthMeta?.name ?? '',
    ethiopianMonthGeez: monthMeta?.geez ?? '',
    ethiopianFormatted: formatEthiopianDate(eth),
    weekdayEnglish: weekday?.english ?? '',
    weekdayGeez: weekday?.geez ?? '',
    weekdayTransliteration: weekday?.geezTransliteration ?? '',
    weekdayEthiopianName: weekday?.ethiopianName ?? '',
    weekdayThemeShort: weekday?.themeShort ?? '',
    weekdayThemeMedium: weekday?.themeMedium ?? '',
    isWeeklyFastDay: weeklyFast,
    isBrightWeek: bright,
    inGreatLent: Boolean(lent),
    greatLentWindow: lent,
    /** Pascha used to detect Palm Sunday–Pentecost moveable feasts when dates fall in that window */
    liturgicalPaschaJDN,
    /** Next Pascha (Gregorian) on or after this calendar day — for display */
    upcomingPaschaJDN,
    upcomingPaschaGregorian: jdnToGregorian(upcomingPaschaJDN),
    matchingFeasts,
    activeFastSeasons: seasonsDetailed,
    primaryFastLabel,
    spiritualSummary: weekday?.themeMedium ?? '',
    pagumenNote:
      eth.month === 13
        ? `Pagumen — ${pagumenLength(eth.year)} days this year (${isEthiopianLeapYear(eth.year) ? 'leap' : 'common'} Ethiopian year).`
        : null,
  }
}

/**
 * Next occurrences of fixed feasts (scan forward in JDN).
 */
export function getUpcomingFixedFeasts(fromDate = new Date(), limit = 8) {
  const gY = fromDate.getFullYear()
  const gM = fromDate.getMonth() + 1
  const gD = fromDate.getDate()
  let jdn = gregorianToJDN(gY, gM, gD)
  const out = []
  const seen = new Set()

  for (let i = 0; i < 500 && out.length < limit; i++, jdn++) {
    const eth = jdnToEthiopian(jdn)
    if (eth.month === 13) continue
    const hits = fixedFeastsForEthiopianDate(eth)
    for (const feast of hits) {
      const key = `${feast.id}-${jdn}`
      if (seen.has(key)) continue
      seen.add(key)
      const gr = jdnToGregorian(jdn)
      out.push({
        ...feast,
        jdn,
        gregorian: gr,
        gregorianFormatted: formatGregorianDate(gr.year, gr.month, gr.day),
        ethiopian: { ...eth },
        ethiopianFormatted: formatEthiopianDate(eth),
      })
    }
  }
  return out
}

export function getTomorrowState(fromDate = new Date()) {
  const d = new Date(fromDate)
  d.setDate(d.getDate() + 1)
  return getLiturgicalDayState(d)
}

/** Summaries for seven days starting `fromDate`. */
export function getThisWeekSummaries(fromDate = new Date()) {
  const rows = []
  for (let i = 0; i < 7; i++) {
    const d = new Date(fromDate)
    d.setDate(d.getDate() + i)
    const s = getLiturgicalDayState(d)
    rows.push({
      date: d,
      gregorianShort: d.toLocaleDateString(undefined, {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      }),
      ethiopianShort: s.ethiopianFormatted,
      weekdayEnglish: s.weekdayEnglish,
      fastNote: s.isWeeklyFastDay
        ? 'Wed/Fri fast'
        : s.inGreatLent
          ? 'Great Lent'
          : '—',
      feastShort: s.matchingFeasts.map((f) => f.name).join('; ') || '—',
    })
  }
  return rows
}

/**
 * Gregorian date for a fixed Ethiopian month/day in the Ethiopian year that contains `fromDate`.
 */
/** Gregorian bounds for Great Lent before Orthodox Pascha of `gregorianYear`. */
export function getGreatLentGregorianRange(gregorianYear) {
  const e = paschaJDNForGregorianYear(gregorianYear)
  return {
    start: jdnToGregorian(e - 55),
    end: jdnToGregorian(e - 1),
    pascha: jdnToGregorian(e),
  }
}

export function gregorianForEthiopianMdInContainingYear(ethMonth, ethDay, fromDate = new Date()) {
  const anchor = gregorianDateToEthiopian(fromDate)
  const y = anchor.year
  const maxP = pagumenLength(y)
  if (ethMonth === 13 && ethDay > maxP) return null
  if (ethMonth <= 12 && ethDay > 30) return null
  try {
    const j = ethiopianToJDN({ year: y, month: ethMonth, day: ethDay })
    return jdnToGregorian(j)
  } catch {
    return null
  }
}
