/**
 * Homepage "Today in the Church" — structured day payload.
 *
 * Replace or extend `HOME_CHURCH_DAY_OVERRIDES` with per-date entries, or
 * later swap `getHomeChurchDay` to call a CMS/API. Core shape stays stable.
 */

import { paths } from '../constants/paths.js'
import { getLiturgicalDayState } from '../utils/liturgicalCalendar.js'
import {
  gregorianToJDN,
  jdnToGregorian,
  orthodoxEasterSundayGregorianDate,
} from '../utils/ethiopianCalendar.js'

function paschaJDNForGregorianYear(y) {
  const g = orthodoxEasterSundayGregorianDate(y)
  return gregorianToJDN(g.year, g.month, g.day)
}

/** Local calendar date → YYYY-MM-DD (no UTC drift). */
export function toIsoLocalDate(d = new Date()) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function truncate(s, max = 140) {
  if (!s || s.length <= max) return s || ''
  return `${s.slice(0, max - 1).trim()}…`
}

function pickSeasonForContext(snapshot) {
  const seasons = snapshot.activeFastSeasons?.filter((s) => s.kind === 'season') ?? []
  const lent = seasons.find((s) => s.id === 'great-lent')
  if (lent) return lent
  return seasons[0] ?? null
}

function buildNextCard(snapshot) {
  const jdn = snapshot.jdn
  const upcomingPascha = snapshot.upcomingPaschaJDN
  const hosannaJDN = upcomingPascha - 7
  const gy = snapshot.gregorianDate.year

  if (jdn < hosannaJDN) {
    return {
      title: 'Hosanna is approaching',
      description:
        'Our Lord’s triumphant entry into Jerusalem — Palm Sunday and Holy Week draw near.',
      image: null,
      href: paths.calendar.feastsHolyDays,
      ctaKey: 'prepareFeast',
    }
  }

  if (jdn < upcomingPascha) {
    return {
      title: 'Pascha draws near',
      description:
        'The great feast of the Resurrection approaches — keep watch with prayer and parish guidance.',
      image: null,
      href: paths.calendar.feastsHolyDays,
      ctaKey: 'prepareFeast',
    }
  }

  const nextYearPascha = paschaJDNForGregorianYear(gy + 1)
  const nextHosanna = nextYearPascha - 7
  const nh = jdnToGregorian(nextHosanna)
  return {
    title: 'Holy Week on the horizon',
    description: `The Church moves toward the next Pascha season — Hosanna (Palm Sunday) next falls around ${nh.month}/${nh.day}/${nh.year} (confirm with your parish calendar).`,
    image: null,
    href: paths.calendar.feastsHolyDays,
    ctaKey: 'prepareFeast',
  }
}

/**
 * Optional per-date overrides (merge on top of liturgical build).
 * Use for demos, editorial highlights, or until a full CMS exists.
 *
 * @example
 * '2026-04-07': {
 *   today: { title: '…', image: '/images/calendar/example.jpg' },
 *   context: { type: 'season', title: '…' },
 * }
 */
export const HOME_CHURCH_DAY_OVERRIDES = {
  // Sample shape — uncomment to preview copy/images for a single day:
  // '2026-04-07': {
  //   today: {
  //     title: 'St. Michael Commemoration',
  //     description: 'A day of remembrance, reverence, and prayer.',
  //     image: '/images/calendar/st-michael.jpg',
  //     href: paths.calendar.today,
  //   },
  // },
}

function mergeDeep(base, override) {
  if (!override) return base
  const out = { ...base, today: { ...base.today }, context: { ...base.context }, next: { ...base.next } }
  if (override.today) out.today = { ...base.today, ...override.today }
  if (override.context) out.context = { ...base.context, ...override.context }
  if (override.next) out.next = { ...base.next, ...override.next }
  if (override.date) out.date = override.date
  return out
}

/**
 * Build homepage church-day payload from `getLiturgicalDayState` (no overrides).
 */
export function buildHomeChurchDayFromLiturgical(date = new Date()) {
  const snapshot = getLiturgicalDayState(date)
  const primaryFeast = snapshot.matchingFeasts?.[0]
  const iso = toIsoLocalDate(date)

  let context = {
    type: /** @type {'weekly-context'} */ ('weekly-context'),
    title: 'This week in the Church',
    description:
      'A regular week shaped by prayer, remembrance, and the Church’s fasting rhythm — confirm details with your parish.',
    image: null,
    href: paths.calendar.today,
    ctaKey: 'seeCalendar',
  }

  if (primaryFeast) {
    context = {
      type: 'feast-focus',
      title: 'Feast focus',
      description: truncate(primaryFeast.significance, 160),
      image: null,
      href: paths.calendar.feastsHolyDays,
      ctaKey: 'understandFeast',
    }
  } else {
    const season = pickSeasonForContext(snapshot)
    if (season) {
      context = {
        type: 'season',
        title: `We are in ${season.name}`,
        description: truncate(season.explanation, 180),
        image: null,
        href: paths.calendar.seasons,
        ctaKey: 'seasonalGuide',
      }
    }
  }

  const today =
    primaryFeast ?
      {
        title: primaryFeast.name,
        description: truncate(primaryFeast.significance, 140),
        image: null,
        href: paths.calendar.today,
        ctaKey: 'learnMore',
      }
    : {
        title: `${snapshot.weekdayEnglish} — ${snapshot.weekdayThemeShort}`,
        description: truncate(snapshot.spiritualSummary || snapshot.weekdayThemeMedium, 160),
        image: null,
        href: paths.calendar.today,
        ctaKey: 'learnMore',
      }

  const next = buildNextCard(snapshot)

  return {
    date: iso,
    today,
    context,
    next,
  }
}

/**
 * Public API: liturgical build + optional `HOME_CHURCH_DAY_OVERRIDES` for `date`.
 */
export function getHomeChurchDay(date = new Date()) {
  const base = buildHomeChurchDayFromLiturgical(date)
  const iso = toIsoLocalDate(date)
  const ov = HOME_CHURCH_DAY_OVERRIDES[iso]
  return ov ? mergeDeep(base, ov) : base
}
