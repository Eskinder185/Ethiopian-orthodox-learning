import { paths } from '../constants/paths.js'

/**
 * Learn section hub copy (SectionHubLayout).
 */
export const learnHubTopics = [
  {
    to: paths.learn.scripture,
    title: 'Scripture',
    description:
      'Scripture in liturgy and tradition, the 81-book canon, Ge’ez heritage, prayerful reading — plus an optional online reader.',
    category: 'Topic',
  },
  {
    to: paths.learn.teachings,
    title: 'Teachings',
    description:
      'Faith and order: Trinity, incarnation, salvation, and the seven sacraments — a beginner summary from church teaching texts.',
    category: 'Topic',
  },
  {
    to: paths.learn.churchKnowledge,
    title: 'Church knowledge',
    description:
      'History, liturgical life, monasticism, Aksum and Lalibela — orientation with room for parish teaching.',
    category: 'Topic',
  },
  {
    to: paths.learn.liturgy,
    title: 'Liturgy',
    description:
      'The Divine Liturgy (Qidase) in parts — prepare and review between Sundays with linked references.',
    category: 'Topic',
  },
]

export const learnHubResourceItems = [
  {
    to: paths.learn.scripture,
    label: 'Scripture',
    description: 'Canon, habits, and link to an external Ethiopian Bible reader.',
    kind: 'In-app',
  },
  {
    to: paths.learn.teachings,
    label: 'Teachings',
    description: 'Faith, order, and the seven sacraments — summarized for beginners.',
    kind: 'In-app',
  },
  {
    to: paths.learn.churchKnowledge,
    label: 'Church knowledge',
    description: 'Tewahedo identity, history, liturgy, monasticism, sacred places — start here.',
    kind: 'In-app',
  },
  {
    to: paths.learn.liturgy,
    label: 'Liturgy',
    description: 'Divine Liturgy flow and outbound references.',
    kind: 'In-app',
  },
]

export const learnHubContent = {
  title: 'Learn',
  eyebrow: 'Teaching & knowledge',
  intro:
    'Foundational knowledge for Ethiopian Orthodox Christianity: Scripture, teachings, church history and customs, and orientation to the Divine Liturgy — in brief, original summaries.',
  overview:
    'The Ethiopian Orthodox Church receives an expanded biblical canon (often described as 81 books) and honors both written Scripture and apostolic tradition. These pages offer high-level explanations: how to approach the Bible, core beliefs such as the Trinity and Incarnation, distinctive books in summary, an entry point to history and liturgical life, and a structured way to study the Qidase between Sundays. Use them to build a broad map, then follow outbound links to patriarchates, publishers, and seminaries for full texts and official statements — never as a substitute for your parish.',
  topicsTitle: 'Topics',
  topicsSubtitle: 'Each topic offers on-site summaries; deep study continues in books, classes, and linked sources.',
  notes: [
    'Keep doctrine overview simple; deep theology belongs in books and classes.',
    'When naming canon or feasts, double-check against an authority your bishop recognizes.',
  ],
  cautions: [
    'Do not reproduce long scripture or catechism passages without permission; summarize and link.',
  ],
  practiceSteps: [],
  categories: [],
}
