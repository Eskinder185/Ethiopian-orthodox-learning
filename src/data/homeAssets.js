/**
 * Homepage static assets under /public/images/.
 *
 * Layout:
 *   home/        — hero, cards, seasonal, featured, mission, optional bg JPGs
 *   thumbnails/  — micro-learning preview JPGs
 *   ui/          — path icons + divider PNG
 *
 * All runtime paths are built from the roots below so nothing drifts.
 */

export const homeImageRoots = {
  home: '/images/home',
  thumbnails: '/images/thumbnails',
  ui: '/images/ui',
}

const HOME = homeImageRoots.home
const THUMB = homeImageRoots.thumbnails
const UI = homeImageRoots.ui

export const homePageAssets = {
  hero: {
    imageSrc: `${HOME}/home-hero-main.jpg`,
    imageAlt:
      'Ethiopian Orthodox church setting — warm light, sacred space, and atmosphere of worship.',
    videoSrc: null,
  },

  todayChurch: {
    src: `${HOME}/home-today-in-the-church-panel.jpg`,
    alt: 'Liturgical day and Church calendar — feasts, fasts, and the rhythm of worship.',
  },

  newHere: {
    src: `${HOME}/home-new-here-path.jpg`,
    alt: 'A quiet path toward a church — a symbolic welcome for newcomers.',
  },

  pathCards: {
    learn: {
      imageSrc: `${HOME}/home-card-learn.jpg`,
      imageAlt: 'Learning the faith — manuscript, study, or church teaching scene.',
      iconSrc: `${UI}/icon-learn.png`,
    },
    prayer: {
      imageSrc: `${HOME}/home-card-practice.jpg`,
      imageAlt: 'Prayer at home — quiet space, light, and reverent practice.',
      iconSrc: `${UI}/icon-practice.png`,
    },
    chant: {
      imageSrc: `${HOME}/home-card-mezmur.jpg`,
      imageAlt: 'Sacred hymnody and mezmur — chant in Orthodox worship.',
      iconSrc: `${UI}/icon-mezmur.png`,
    },
    calendar: {
      imageSrc: `${HOME}/home-card-calendar.jpg`,
      imageAlt: 'The Ethiopian Orthodox Church year — feasts, fasts, and holy days.',
      iconSrc: `${UI}/icon-calendar.png`,
    },
  },

  /** Seasonal spotlight art — picked by `resolveSeasonalSpotlightVisual`. */
  seasonal: {
    greatLent: {
      src: `${HOME}/home-seasonal-spotlight-great-lent.jpg`,
      alt: 'Great Lent — repentance, fasting, and preparation in the Church.',
    },
    holyWeek: {
      src: `${HOME}/home-seasonal-spotlight-holy-week.jpg`,
      alt: 'Holy Week — the Lord’s Passion, cross, and the approach of Pascha.',
    },
    fasika: {
      src: `${HOME}/home-seasonal-spotlight-fasika.jpg`,
      alt: 'Feast of the Resurrection — Pascha and the joy of the risen Christ.',
    },
    nativity: {
      src: `${HOME}/home-seasonal-spotlight-nativity.jpg`,
      alt: 'Nativity season — the birth of Christ and Christmas in the Church.',
    },
    timkat: {
      src: `${HOME}/home-seasonal-spotlight-timkat.jpg`,
      alt: 'Timkat — the Lord’s baptism and the blessing of water.',
    },
  },

  featuredPractice: {
    src: `${HOME}/home-featured-practice.jpg`,
    alt: 'Beginning prayer practice — a simple, reverent start at home.',
  },

  missionTrust: {
    src: `${HOME}/home-mission-trust.jpg`,
    alt: 'Learning with the Church — trust, parish life, and spiritual guidance.',
  },

  thumbnails: {
    whatIsOrthodoxPath: {
      src: `${THUMB}/thumb-what-is-orthodoxpath.jpg`,
      alt: 'Preview: what OrthodoxPath offers for learners and families.',
    },
    whatIsTewahedo: {
      src: `${THUMB}/thumb-what-is-tewahedo.jpg`,
      alt: 'Preview: Tewahedo — one united faith in the Ethiopian Orthodox Church.',
    },
    datesDiffer: {
      src: `${THUMB}/thumb-ethiopian-vs-gregorian-calendar.jpg`,
      alt: 'Preview: Ethiopian and Gregorian calendars side by side.',
    },
    whatIsMezmur: {
      src: `${THUMB}/thumb-what-is-mezmur.jpg`,
      alt: 'Preview: mezmur and sacred hymnody in worship.',
    },
    beginnerPrayer: {
      src: `${THUMB}/thumb-how-to-start-prayer.jpg`,
      alt: 'Preview: how to begin daily prayer with your parish in mind.',
    },
  },

  /** Optional full-bleed backgrounds for future sections or themes. */
  backgrounds: {
    parchment: `${HOME}/bg-parchment-soft.jpg`,
    sacredLight: `${HOME}/bg-sacred-light-overlay.jpg`,
  },

  dividerCross: `${UI}/divider-cross-motif.png`,
}

/** For `style={{ '--home-divider-cross': … }}` — keeps CSS in sync with `dividerCross`. */
export function homeDividerCrossCssUrl() {
  return `url(${JSON.stringify(homePageAssets.dividerCross)})`
}

/**
 * Pick spotlight imagery from liturgical snapshot (Gregorian `Date` via `getLiturgicalDayState`).
 * Order: Pascha & Bright Week → Holy Week → Great Lent → Nativity / Timkat feasts & seasons → default.
 */
export function resolveSeasonalSpotlightVisual(snapshot) {
  const s = homePageAssets.seasonal
  const p = snapshot.liturgicalPaschaJDN
  const jdn = snapshot.jdn

  if (jdn >= p && jdn <= p + 6) return s.fasika
  if (jdn >= p - 7 && jdn < p) return s.holyWeek
  if (snapshot.inGreatLent) return s.greatLent

  const feast = snapshot.matchingFeasts?.[0]
  if (feast?.id === 'christmas') return s.nativity
  if (feast?.id === 'epiphany') return s.timkat

  const em = snapshot.ethiopianMonth
  const ed = snapshot.ethiopianDay
  if (em === 5 && ed >= 8 && ed <= 14) return s.timkat
  if (em === 4 && ed >= 15) return s.nativity

  return s.greatLent
}

/** `pathCards` keys — use with `pathCardMedia`. */
export const homePathCardIds = ['learn', 'prayer', 'chant', 'calendar']

/**
 * Image + icon fields for one path card (see `homePathCardsConfig`).
 * @param {'learn' | 'prayer' | 'chant' | 'calendar'} id
 */
export function pathCardMedia(id) {
  const block = homePageAssets.pathCards[id]
  if (!block) throw new Error(`homeAssets: unknown path card "${id}"`)
  return {
    imageSrc: block.imageSrc,
    imageAlt: block.imageAlt,
    iconSrc: block.iconSrc,
  }
}

/** Keys aligned with `homePageAssets.thumbnails` and i18n `home.microLearn.items`. */
export const homeMicroLearnThumbKeys = [
  'whatIsOrthodoxPath',
  'whatIsTewahedo',
  'datesDiffer',
  'whatIsMezmur',
  'beginnerPrayer',
]

/**
 * @param {string} key — must exist on `homePageAssets.thumbnails`
 */
export function microLearnThumbnailMedia(key) {
  const row = homePageAssets.thumbnails[key]
  if (!row) throw new Error(`homeAssets: unknown micro-learn thumbnail "${key}"`)
  return { thumbSrc: row.src, thumbAlt: row.alt }
}

/** Stable list for `homeMicroLearnItems` (single source). */
export function buildHomeMicroLearnItems() {
  return homeMicroLearnThumbKeys.map((key) => ({
    key,
    ...microLearnThumbnailMedia(key),
  }))
}
