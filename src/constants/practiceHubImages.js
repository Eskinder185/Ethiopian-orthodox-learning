/**
 * Practice hub imagery — paths under /public/images/practice.
 * See `orthodoxImageManifest.js` for bridged `practice.hub*` keys, prompts, and planned filenames.
 * Prefer bundled .png assets; add .jpg variants here when available.
 * Missing keys return null so layouts can fall back gracefully.
 */

/** @type {Record<string, string | null>} */
export const PRACTICE_HUB_IMAGES = {
  hero: '/images/practice/practice-hero.png',
  prayerCard: '/images/practice/practice-prayer-card.png',
  mezmurCard: '/images/practice/practice-mezmur-card.png',
  instrumentCard: '/images/practice/practice-instrument-card.png',
  languageCard: '/images/practice/practice-language-card.png',
  map: '/images/practice/practice-map.png',
  todayPractice: '/images/practice/practice-todays-practice.png',
  prayerStepper: '/images/practice/practice-prayer-stepper.png',
  prayerCheatsheet: '/images/practice/practice-prayer-cheatsheet.png',
  featuredFeast: '/images/practice/practice-featured-feast.png',
  /** Add practice-mezmur-workspace.png when available */
  mezmurWorkspace: null,
  instrumentPosture: '/images/practice/practice-instrument-posture.png',
  languageHeader: '/images/practice/practice-language-header.png',
  fidelFlashcard: '/images/practice/practice-fidel-flashcard.png',
  seasonalPractice: '/images/practice/practice-seasonal-practice.png',
  byTime5: null,
  byTime10: null,
  byTime20: null,
  progressSection: null,
}

/**
 * @param {keyof typeof PRACTICE_HUB_IMAGES | string} key
 * @returns {string | null}
 */
export function practiceHubImage(key) {
  return PRACTICE_HUB_IMAGES[key] ?? null
}
