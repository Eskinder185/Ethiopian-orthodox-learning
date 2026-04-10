import { paths } from '../constants/paths.js'

/**
 * Orientation video — Start Here hero (#start-orientation).
 * @see https://www.youtube.com/watch?v=79CwHX7yeTE
 */
export const startHereOrientationVideo = {
  youtubeId: '79CwHX7yeTE',
  durationMinutes: 6,
}

/**
 * Beginner checklist — ids must match i18n `startHere.checklist.steps.<id>.*`.
 */
export const beginnerChecklistSteps = [
  { id: 'church', to: paths.learn.teachings },
  { id: 'worship', to: paths.learn.liturgy },
  { id: 'year', to: paths.learn.churchYear },
  { id: 'practice', to: paths.practice.prayer },
  { id: 'parish', to: paths.about },
]

/** Glossary term ids — match i18n `startHere.glossary.terms.<id>`. */
export const startHereGlossaryIds = [
  'tewahedo',
  'qidase',
  'mezmur',
  'werb',
  'geez',
  'feast',
  'fast',
  'parish',
]

/** First-visit tip ids — match i18n `startHere.firstVisit.items.<id>`. */
export const startHereFirstVisitIds = ['early', 'dress', 'observe', 'ushers', 'communion']

/**
 * Legacy / reference copy — page uses i18n; kept for editors and exports.
 */
export const startHereContent = {
  title: 'Start here',
  eyebrow: 'Welcome to OrthodoxPath',
  /** Mirrors live i18n — for editors; page uses `startHere.heroLead` / `heroReassure`. */
  heroLead:
    'You do not need to learn everything at once. OrthodoxPath orients you with reverence and patience — your parish first.',

  whatIsChurch: {
    title: 'What is the Ethiopian Orthodox Tewahedo Church?',
    paragraphs: [
      'The Ethiopian Orthodox Tewahedo Church is an ancient Christian Church in the Oriental Orthodox communion. It confesses the one nature of Christ (Tewahedo — “made one”) and lives a richly liturgical life: Scripture, sacraments, fasting, feasts, icons, and sacred chant.',
      'You do not need to master everything at once. The Church is learned in worship, in the home, and under spiritual guidance — this site only supports that journey.',
    ],
  },

  howToUse: {
    title: 'How to use this site',
    paragraphs: [
      'Learn explains faith, Scripture, liturgy, church life, and the shape of the Church year. Practice is for prayer, hymnody, language, and training at home. Calendar helps you see today in Church time and find feasts and fasts — always alongside your priest’s calendar.',
      'Sacred texts and many recordings are not hosted here; pages link to trusted external sources when we can.',
    ],
  },

  parishNote: {
    title: 'Parish and spiritual father',
    body:
      'OrthodoxPath supports parish life, fasting rules, and spiritual direction — it does not replace your priest, bishop, or sacramental life in the Church.',
  },
}
