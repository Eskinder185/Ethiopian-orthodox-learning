import { paths } from '../constants/paths.js'

/**
 * Home page copy. Routing lives in constants/paths.js.
 */
export const homeContent = {
  intro: {
    title: 'Orthodox Learning',
    tagline: 'Practice-first learning for Ethiopian Orthodox life',
    lead:
      'This site supports faith, language, and practice at home. Ethiopian Orthodoxy is rooted in Scripture and the living tradition of the Church — together they shape how we pray, fast, and read. Explore guided practice for prayers and hymns, liturgy orientation, Amharic and Ge‘ez skills, learning topics, and the church calendar. Use it alongside your parish and spiritual father, not in place of them.',
  },
  frameworkNotice:
    'Sacred texts and audio are not hosted here. You will find routines, summaries, and links to books and websites that provide full material.',

  sections: {
    rhythm: {
      title: 'Prayer, fasting, and reading',
      subtitle:
        'Small daily habits — prayer, awareness of fasts, and Scripture — belong together. Confirm fasting and feast days with your priest and an official church calendar.',
    },
    quickLinks: {
      title: 'Explore the site',
      subtitle:
        'Jump to practice, language, progress, learning topics, and the calendar.',
    },
    featuredPractice: {
      title: 'Practice & worship learning',
      subtitle:
        'Hymn and prayer practice here; Divine Liturgy orientation under Learn. Full texts and recordings open on their original sites.',
    },
    mission: {
      title: 'Our purpose',
    },
  },

  rhythmParagraphs: [
    'Personal prayer and the Church’s hymns connect weekdays to Sunday worship. Start with what your parish recommends — one prayer set, one short hymn, or one liturgical response — and repeat it calmly until it rests in memory.',
    'Fasting and feasts follow the Ethiopian church year. This site explains context only; every rule that affects your health or schedule should be confirmed in person and with authoritative calendars.',
  ],

  missionParagraphs: [
    'Orthodox Learning exists to honor Christ and His Church by making faith, prayer, and tradition easier to study and practice at home — with reverence and always alongside your priest and parish, never in place of them.',
  ],
}

export const homeQuickSections = [
  {
    to: paths.practice.index,
    title: 'Practice',
    description: 'Mezmur and Tselot — guided flows with outbound links for texts.',
    category: 'Section',
  },
  {
    to: paths.language.index,
    title: 'Language',
    description: 'Amharic Fidel, writing, and pronunciation for church reading and song.',
    category: 'Section',
  },
  {
    to: paths.progress.index,
    title: 'Progress',
    description: 'Overview of how habit tracking will support your practice over time.',
    category: 'Section',
  },
  {
    to: paths.learn.index,
    title: 'Learn',
    description: 'Scripture, teachings, church knowledge, and liturgy — summaries and orientation.',
    category: 'Section',
  },
  {
    to: paths.calendar.index,
    title: 'Calendar',
    description: 'Today, fasting context, and feasts — always verify with official sources.',
    category: 'Section',
  },
]

export const homeFeaturedPractice = [
  {
    to: paths.practice.mezmur,
    title: 'Mezmur practice',
    description:
      'Sacred hymns: listen, read along with transliteration where available, and sing gently at your pace.',
    practiceType: 'Hymnody',
  },
  {
    to: paths.practice.tselot,
    title: 'Tselot practice',
    description:
      'Daily prayers (including morning Zeweter): build a calm, repeatable habit with texts from books or linked sites.',
    practiceType: 'Prayer',
  },
  {
    to: paths.learn.liturgy,
    title: 'Liturgy',
    description:
      'The Divine Liturgy (Qidase) in parts — understand responses and flow between Sundays.',
    practiceType: 'Learn',
  },
  {
    to: paths.language.alphabet,
    title: 'Amharic alphabet',
    description: 'Learn Fidel step by step so services and scripture feel more familiar.',
    practiceType: 'Language',
  },
]
