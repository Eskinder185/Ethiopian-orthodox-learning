import { paths } from '../constants/paths.js'
import {
  homePageAssets,
  pathCardMedia,
  buildHomeMicroLearnItems,
} from '../data/homeAssets.js'

const { hero, todayChurch } = homePageAssets

/**
 * Hero image or short welcome video — paths from `homePageAssets.hero`.
 * `videoSrc` wins over `imageSrc` when both are set.
 */
export const homeHeroMedia = {
  imageSrc: hero.imageSrc,
  videoSrc: hero.videoSrc,
  imageAlt: hero.imageAlt,
}

/** Image in “Today in the Church” aside. */
export const todayChurchSectionImage = {
  src: todayChurch.src,
  alt: todayChurch.alt,
}

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

/**
 * Homepage “Choose your path” — four primary doors; copy in i18n `home.paths.<key>`.
 */
export const homePathCardsConfig = [
  {
    step: 1,
    to: paths.learn.index,
    key: 'learnFaith',
    visual: 'learn',
    ...pathCardMedia('learn'),
  },
  {
    step: 2,
    to: paths.practice.prayer,
    key: 'practicePrayer',
    visual: 'prayer',
    ...pathCardMedia('prayer'),
  },
  {
    step: 3,
    to: paths.practice.chants,
    key: 'mezmurChant',
    visual: 'chant',
    ...pathCardMedia('chant'),
  },
  {
    step: 4,
    to: paths.calendar.index,
    key: 'calendarFeasts',
    visual: 'calendar',
    ...pathCardMedia('calendar'),
  },
]

/** Optional YouTube video id per card key (`embed` on the home micro-learning row). */
const HOME_MICRO_LEARN_YOUTUBE_IDS = {
  whatIsOrthodoxPath: 'j6vALFNp_wg',
  whatIsTewahedo: 'kJ3V_cgfOYs',
  datesDiffer: '7oUPnP7EiYg',
  /** What is mezmur? — Learn in 60 seconds */
  whatIsMezmur: '0N1JfQeEcQo',
  beginnerPrayer: '9isWuuJFOmg',
}

/** Micro-learning row — built from `homePageAssets.thumbnails` + `homeMicroLearnThumbKeys`. */
export const homeMicroLearnItems = buildHomeMicroLearnItems().map((item) => ({
  ...item,
  youtubeVideoId: HOME_MICRO_LEARN_YOUTUBE_IDS[item.key] ?? null,
}))

/** Single “start now” practice highlight on home — copy in `home.featuredHighlight`. */
export const homeFeaturedHighlightConfig = {
  to: paths.practice.prayer,
  key: 'default',
}

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
