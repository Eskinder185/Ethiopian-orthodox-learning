/**
 * Ethiopian (Ge’ez) calendar ↔ Gregorian, plus liturgical context.
 * Conversion uses Julian Day Numbers; Ethiopian year Y begins on Meskerem 1.
 * Source alignment: deep-research-report.md (EOTC structure, feasts, fasting).
 */

/** JDN at start of Ethiopian year Y (Meskerem 1, 00:00 convention). */
export const ETHIOPIAN_EPOCH_OFFSET = 1723856

export function startOfEthiopianYear(ethiopianYear) {
  return (
    ETHIOPIAN_EPOCH_OFFSET +
    365 * ethiopianYear +
    Math.floor((ethiopianYear - 1) / 4)
  )
}

/** True if Ethiopian year Y has six Pagumen days (leap year). */
export function isEthiopianLeapYear(ethiopianYear) {
  return ethiopianYear % 4 === 0
}

export function pagumenLength(ethiopianYear) {
  return isEthiopianLeapYear(ethiopianYear) ? 6 : 5
}

/**
 * Ethiopian date → integer JDN.
 * @param {{ year: number, month: number, day: number }} eth
 */
export function ethiopianToJDN(eth) {
  const { year, month, day } = eth
  const start = startOfEthiopianYear(year)
  const offsetInYear =
    month <= 12 ? (month - 1) * 30 + (day - 1) : 360 + (day - 1)
  return start + offsetInYear
}

/** Gregorian (civil) date → integer JDN */
export function gregorianToJDN(year, month, day) {
  const a = Math.floor((14 - month) / 12)
  const y = year + 4800 - a
  const m = month + 12 * a - 3
  return (
    day +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045
  )
}

/** JDN → Gregorian { year, month, day } */
export function jdnToGregorian(jdn) {
  let j = jdn + 32044
  const g = Math.floor(j / 146097)
  let dg = j % 146097
  let c = Math.floor((Math.floor(dg / 36524 + 1) * 3) / 4)
  let dc = dg - c * 36524
  let b = Math.floor(dc / 1461)
  let db = dc % 1461
  let a = Math.floor((Math.floor(db / 365 + 1) * 3) / 4)
  let da = db - a * 365
  const y = g * 400 + c * 100 + b * 4 + a
  const m = Math.floor((da * 5 + 308) / 153) - 2
  const d = da - Math.floor((m + 4) * 153 / 5) + 122
  const year = y - 4800 + Math.floor((m + 2) / 12)
  const month = ((m + 2) % 12) + 1
  const day = d + 1
  return { year, month, day }
}

/** JDN → Ethiopian { year, month, day } */
export function jdnToEthiopian(jdn) {
  let year = Math.floor((jdn - ETHIOPIAN_EPOCH_OFFSET) / 366) - 1
  while (startOfEthiopianYear(year + 1) <= jdn) year += 1
  while (startOfEthiopianYear(year) > jdn) year -= 1

  const d0 = jdn - startOfEthiopianYear(year)
  if (d0 < 360) {
    return {
      year,
      month: Math.floor(d0 / 30) + 1,
      day: (d0 % 30) + 1,
    }
  }
  return {
    year,
    month: 13,
    day: d0 - 360 + 1,
  }
}

/**
 * JavaScript Date (local civil date) → Ethiopian components.
 * Uses local Y/M/D from the Date (not UTC).
 */
export function gregorianDateToEthiopian(date) {
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  const jdn = gregorianToJDN(y, m, d)
  return jdnToEthiopian(jdn)
}

/** @param {{ year: number, month: number, day: number }} eth */
export function ethiopianToGregorianDate(eth) {
  const jdn = ethiopianToJDN(eth)
  const g = jdnToGregorian(jdn)
  return new Date(g.year, g.month - 1, g.day)
}

/** Julian calendar (historical) → JDN */
export function julianToJDN(year, month, day) {
  const a = Math.floor((14 - month) / 12)
  const y = year + 4800 - a
  const m = month + 12 * a - 3
  return day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - 32083
}

/**
 * Orthodox Easter Sunday (Julian computus) → JDN (unambiguous).
 * Same calendar rule as Ethiopian / Eastern Orthodox Pascha in most years.
 */
export function orthodoxEasterSundayJDN(julianYear) {
  const a = julianYear % 4
  const b = julianYear % 7
  const c = julianYear % 19
  const d = (19 * c + 15) % 30
  const e = (2 * a + 4 * b + 6 * d + 6) % 7
  const f = d + e
  let month
  let day
  if (f <= 9) {
    month = 3
    day = 22 + f
  } else {
    month = 4
    day = f - 9
  }
  return julianToJDN(julianYear, month, day)
}

/**
 * Gregorian calendar year for Pascha computation: use year of Easter in March–May.
 * For dates near year boundary, pass the Gregorian year that contains Orthodox Easter.
 */
export function orthodoxEasterSundayGregorianDate(gregorianYear) {
  const jdn = orthodoxEasterSundayJDN(gregorianYear)
  return jdnToGregorian(jdn)
}

export function jdnToEthiopianOrNull(jdn) {
  if (typeof jdn !== 'number' || Number.isNaN(jdn)) return null
  return jdnToEthiopian(jdn)
}
