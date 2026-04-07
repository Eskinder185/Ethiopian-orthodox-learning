import { paths } from '../constants/paths.js'

/**
 * Long-form copy kept in English until manually translated (see HomePage).
 */
export const homeRhythmParagraphs = [
  'Personal prayer and the Church’s hymns connect weekdays to Sunday worship. Start with what your parish recommends — one prayer set, one short hymn, or one liturgical response — and repeat it calmly until it rests in memory.',
  'Fasting and feasts follow the Ethiopian church year. This site explains context only; every rule that affects your health or schedule should be confirmed in person and with authoritative calendars.',
]

export const homeMissionParagraphs = [
  'OrthodoxPath exists to honor Christ and His Church by making faith, prayer, and tradition easier to study and practice at home — with reverence and always alongside your priest and parish, never in place of them.',
]

/** Quick link cards — strings from i18n `home.quick.<key>`. */
export const homeQuickLinksConfig = [
  { to: paths.learn.index, key: 'learn' },
  { to: paths.practice.index, key: 'practice' },
  { to: paths.calendar.index, key: 'calendar' },
]

/** Featured practice cards — strings from i18n `home.featured.<key>`; badge from `commonUi.<practiceTypeKey>`. */
export const homeFeaturedPracticeConfig = [
  { to: paths.practice.chants, key: 'chants', practiceTypeKey: 'hymnody' },
  { to: paths.practice.prayer, key: 'prayer', practiceTypeKey: 'prayer' },
  { to: paths.learn.liturgy, key: 'liturgy', practiceTypeKey: 'learn' },
  { to: paths.practice.language.alphabet, key: 'alphabet', practiceTypeKey: 'language' },
]
