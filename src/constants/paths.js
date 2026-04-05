/**
 * Central place for route paths. Import these in NavLink and navigate()
 * so URLs stay consistent as the app grows.
 */
export const paths = {
  home: '/',
  about: '/about',

  learn: {
    index: '/learn',
    scripture: '/learn/scripture',
    teachings: '/learn/teachings',
    churchKnowledge: '/learn/church-knowledge',
    liturgy: '/learn/liturgy',
  },

  practice: {
    index: '/practice',
    mezmur: '/practice/mezmur',
    tselot: '/practice/tselot',
  },

  language: {
    index: '/language',
    alphabet: '/language/amharic-alphabet',
    writing: '/language/writing',
    pronunciation: '/language/pronunciation',
  },

  calendar: {
    index: '/calendar',
    today: '/calendar/today',
    fasting: '/calendar/fasting',
    holidays: '/calendar/holidays',
  },

  progress: {
    index: '/progress',
    stats: '/progress/stats',
    tracking: '/progress/tracking',
  },
}
