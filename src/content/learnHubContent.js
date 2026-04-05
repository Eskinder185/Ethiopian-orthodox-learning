import { paths } from '../constants/paths.js'

/**
 * Learn section hub copy (SectionHubLayout).
 */
export const learnHubTopics = [
  {
    to: paths.learn.scripture,
    title: 'Scripture',
    description:
      'How the Church hears the Bible — the fuller canon, Ge’ez heritage, and prayerful reading, with an optional link to read online.',
    category: 'Topic',
  },
  {
    to: paths.learn.teachings,
    title: 'Teachings',
    description:
      'The Orthodox faith in plain words — Trinity, Christ’s saving work, and the mysteries of the Church — a gentle beginning.',
    category: 'Topic',
  },
  {
    to: paths.learn.churchKnowledge,
    title: 'Church knowledge',
    description:
      'The story, rhythm, and holy places of Orthodox life — history, worship, monastic witness, and room for what your parish shares.',
    category: 'Topic',
  },
  {
    to: paths.learn.liturgy,
    title: 'Liturgy',
    description:
      'The Divine Liturgy (Qidase) unfolded in calm steps — prepare between Sundays and follow trusted references.',
    category: 'Topic',
  },
]

export const learnHubContent = {
  title: 'Learn',
  eyebrow: 'Faith, Scripture & sacred tradition',
  intro:
    'Step gently into Scripture, the Church’s faith, her story, and the Divine Liturgy — brief guides meant to support what you receive in parish and from your spiritual father.',
  overview:
    'The Ethiopian Orthodox Church cherishes Scripture and the living tradition handed down from the apostles. These pages sketch a calm map: how the Bible is read in the Church, what we believe about Christ and His gifts, glimpses of our history and holy places, and how the Divine Liturgy (Qidase) unfolds — so you can pray with growing understanding. When you need full texts or authoritative teaching, your parish and the books and links your bishop recognizes remain your home.',
  topicsTitle: 'Topics',
  topicsSubtitle:
    'Open a topic for a short, readable guide; let books, classes, and your parish take you the rest of the way.',
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
