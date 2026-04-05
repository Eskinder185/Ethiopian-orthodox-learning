import { paths } from '../constants/paths.js'

/**
 * Rules-based site guide (no AI). Edit keywords and answers here.
 *
 * Each entry:
 * - id: stable key for suggested-question buttons
 * - suggestionLabel: text shown on the chip (optional — omit if not in suggested list)
 * - keywords: phrases matched against the user’s typed question (lowercased)
 * - answer: short reply shown in the panel
 * - linkTo / linkLabel: optional internal next step
 */
export const siteGuideWelcome =
  'Peace. I am a simple on-site guide — not artificial intelligence. Ask a short question or tap a topic below, and I will point you to the right part of Orthodox Path.'

export const siteGuideFallback =
  'I am still a simple guide for now. Try one of the suggested questions, open the menu above, or explore Learn, Practice, Language, and Calendar from the top of the page.'

/** Main areas of the site — shown as topic shortcuts in the guide panel. */
export const siteGuideTopics = [
  { id: 'learn', label: 'Learn', to: paths.learn.index, hint: 'Scripture, teachings, liturgy' },
  { id: 'practice', label: 'Practice', to: paths.practice.index, hint: 'Mezmur & prayer' },
  { id: 'language', label: 'Language', to: paths.language.index, hint: 'Alphabet & pronunciation' },
  { id: 'calendar', label: 'Calendar', to: paths.calendar.index, hint: 'Today, fasting, feasts' },
  { id: 'progress', label: 'Progress', to: paths.progress.index, hint: 'Tracking ideas' },
  { id: 'about', label: 'About', to: paths.about, hint: 'This project' },
]

/** Shown as quick-pick chips and used for keyword matching (order matters). */
export const siteGuideEntries = [
  {
    id: 'what-site',
    suggestionLabel: 'What is this website for?',
    keywords: [
      'what is this website',
      'what is this site',
      'website for',
      'site for',
      'purpose',
      'what for',
      'orthodox path',
    ],
    answer:
      'Orthodox Path is a calm learning companion for Ethiopian Orthodox faith and practice: Scripture, teachings, liturgy, mezmur and prayer, language, and the Church calendar — written for beginners and inquirers. Always confirm sensitive matters with your priest.',
    linkTo: paths.about,
    linkLabel: 'About this project',
  },
  {
    id: 'where-start',
    suggestionLabel: 'Where should I start?',
    keywords: [
      'where start',
      'where to start',
      'how to begin',
      'beginner',
      'new here',
      'first steps',
      'getting started',
    ],
    answer:
      'If you are new, try Learn for foundations (Scripture, Teachings, Liturgy), then Practice for mezmur and prayer, or Language if you want Ge’ez or Amharic. Pick one small habit rather than everything at once.',
    linkTo: paths.learn.index,
    linkLabel: 'Learn hub',
  },
  {
    id: 'beginners',
    suggestionLabel: 'Is this site for beginners?',
    keywords: [
      'beginner',
      'beginners',
      'new to',
      'no experience',
      'first time',
      'simple',
      'basic',
    ],
    answer:
      'Yes. Pages are written to welcome newcomers. Nothing here replaces your parish, priest, or bishop — use the site as orientation and gentle practice between church and home.',
    linkTo: paths.learn.teachings,
    linkLabel: 'Teachings overview',
  },
  {
    id: 'practice-mezmur',
    suggestionLabel: 'How do I practice mezmur?',
    keywords: [
      'practice mezmur',
      'how mezmur',
      'mezmur practice',
      'hymn',
      'zema',
      'yared',
      'chant',
    ],
    answer:
      'Open Practice → Mezmur for orientation, external hymn resources, and a workspace to listen and take notes. Approach sacred chant with reverence; full texts often live on the sites we link to.',
    linkTo: paths.practice.mezmur,
    linkLabel: 'Mezmur practice',
  },
  {
    id: 'mezmur-page-how',
    suggestionLabel: 'How do I use the Mezmur Practice page?',
    keywords: [
      'use mezmur',
      'mezmur page',
      'mezmur practice page',
      'workspace',
      'how to use',
    ],
    answer:
      'Read the short “How to use” section, open external links for full hymn sources in a new tab, then use the workspace to play audio or video you paste and jot reflections or lyrics — all on your device.',
    linkTo: paths.practice.mezmur,
    linkLabel: 'Open Mezmur page',
  },
  {
    id: 'prayer-section',
    suggestionLabel: 'Where is the prayer section?',
    keywords: [
      'prayer',
      'tselot',
      'daily prayer',
      'where prayer',
      'pray',
    ],
    answer:
      'Personal and liturgical prayer texts are under Practice → Tselot (including daily prayer). Liturgy as a service is explained under Learn → Liturgy.',
    linkTo: paths.practice.tselot,
    linkLabel: 'Tselot (prayer)',
  },
  {
    id: 'calendar-section',
    suggestionLabel: 'What is the Calendar section for?',
    keywords: [
      'calendar',
      'fasting',
      'feast',
      'holiday',
      'today',
      'ethiopian calendar',
    ],
    answer:
      'Calendar helps you see “today” in Church time, weekly fasts, great fasts, and major feasts — alongside gentle explanations. Your priest confirms what you keep.',
    linkTo: paths.calendar.index,
    linkLabel: 'Calendar home',
  },
  {
    id: 'five-pillars',
    suggestionLabel: 'What is the Five Pillars of Mystery?',
    keywords: [
      'five pillars',
      'pillars of mystery',
      'mysteries',
      'sacraments',
      'seven sacraments',
    ],
    answer:
      'In Ethiopian Orthodox teaching, the “five pillars” or mysteries are central acts of grace (including baptism, Eucharist, and orders of ministry — sometimes counted with related rites). The Learn → Teachings page introduces faith and sacraments; study details with church sources and your spiritual father.',
    linkTo: paths.learn.teachings,
    linkLabel: 'Teachings',
  },
  {
    id: 'external-links',
    suggestionLabel: 'Why do some pages use external links?',
    keywords: [
      'external',
      'another site',
      'new tab',
      'link away',
      'why link',
      'hosted',
    ],
    answer:
      'Hymn texts, long prayers, and some media stay on their original sites out of respect for copyright and tradition. We open them in a new tab so you always know the source.',
    linkTo: paths.practice.mezmur,
    linkLabel: 'Example: Mezmur',
  },
  {
    id: 'amharic-alphabet',
    suggestionLabel: 'Where can I learn the Amharic alphabet?',
    keywords: [
      'amharic',
      'alphabet',
      'fidel',
      'geez',
      'letters',
      'writing system',
    ],
    answer:
      'Language → Amharic alphabet introduces Fidel with starter characters and links to external charts and courses. Writing and pronunciation pages build from there.',
    linkTo: paths.language.alphabet,
    linkLabel: 'Amharic alphabet',
  },
  {
    id: 'learn-liturgy',
    suggestionLabel: 'Where is the Divine Liturgy explained?',
    keywords: [
      'liturgy',
      'divine liturgy',
      'mass',
      'service',
      'qidase',
    ],
    answer:
      'Learn → Liturgy offers a step-by-step guide to the Divine Liturgy. Practice → Mezmur connects to hymnody within worship.',
    linkTo: paths.learn.liturgy,
    linkLabel: 'Liturgy guide',
  },
  {
    id: 'scripture',
    suggestionLabel: 'Where is Scripture?',
    keywords: ['scripture', 'bible', 'reading', 'canon', '81 book'],
    answer:
      'Learn → Scripture describes how the Ethiopian Orthodox Church receives Scripture and the fuller canon. Pair reading with your parish and spiritual father.',
    linkTo: paths.learn.scripture,
    linkLabel: 'Scripture',
  },
  {
    id: 'progress',
    suggestionLabel: 'What is Progress?',
    keywords: ['progress', 'tracking', 'stats', 'habits', 'log'],
    answer:
      'Progress is a gentle place to think about habits and summaries — without pressure. Tracking and stats are placeholders you can grow later.',
    linkTo: paths.progress.index,
    linkLabel: 'Progress home',
  },
]
