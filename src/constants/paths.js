/**
 * Canonical routes for OrthodoxPath. Use in NavLink, Link, and navigate().
 * Legacy URLs are redirected in App.jsx.
 */
export const paths = {
  home: '/',
  startHere: '/start-here',
  about: '/about',

  learn: {
    index: '/learn',
    scripture: '/learn/scripture',
    teachings: '/learn/teachings',
    liturgy: '/learn/liturgy',
    churchLifeHistory: '/learn/church-life-history',
    churchYear: '/learn/church-year',
  },

  practice: {
    index: '/practice',
    prayer: '/practice/prayer',
    /** Mezmur & Werb — unified chant practice */
    chants: '/practice/chants',
    instruments: '/practice/instruments',
    language: {
      index: '/practice/language',
      alphabet: '/practice/language/amharic-alphabet',
      writing: '/practice/language/writing',
      pronunciation: '/practice/language/pronunciation',
    },
  },

  calendar: {
    index: '/calendar',
    today: '/calendar/today',
    ethiopianMonths: '/calendar/ethiopian-months',
    fasting: '/calendar/fasting',
    feastsHolyDays: '/calendar/feasts-holy-days',
    seasons: '/calendar/seasons',
  },

  /** Still reachable; not in main navigation. */
  progress: {
    index: '/progress',
    stats: '/progress/stats',
    tracking: '/progress/tracking',
  },
}
