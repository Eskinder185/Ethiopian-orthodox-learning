import { paths } from '../constants/paths.js'

export const practiceHubTopics = [
  {
    to: paths.practice.mezmur,
    title: 'Mezmur practice',
    description: 'Hymns: listen, transliterate, sing — texts via external links.',
    category: 'Practice',
  },
  {
    to: paths.practice.tselot,
    title: 'Tselot practice',
    description: 'Daily prayers including Zeweter; use booklets and sites your parish recommends.',
    category: 'Practice',
  },
]

export const practiceHubResourceItems = [
  {
    to: paths.practice.mezmur,
    label: 'Mezmur practice',
    description: 'Hymn flow with outbound sources.',
    kind: 'In-app',
  },
  {
    to: paths.practice.tselot,
    label: 'Tselot practice',
    description: 'Daily prayer routines.',
    kind: 'In-app',
  },
]

/**
 * Practice section hub (SectionHubLayout).
 */
export const practiceHubContent = {
  title: 'Practice',
  eyebrow: 'Ethiopian Orthodox · step by step',
  intro:
    'Practice means worship and personal devotion at home: Mezmur (hymns) and Tselot (daily prayers). For orientation to the Divine Liturgy (Qidase), use the Liturgy topic under Learn. Start small — a short prayer or hymn — and grow with patience. Many chanters learn in church schools (Zema Bet); beginners can still use recordings, transliterations, and the guided steps on each subpage. Full texts and scores stay on linked sites or in books you own.',
  overview:
    'This section offers clear routines without replacing parish worship or your priest’s guidance. Each page offers a flow and, where curated, links to external sources. Describe purpose and method; do not mirror hymnals or host recordings here. Liturgy structure and authorized translations are linked from Learn · Liturgy.',
  topicsTitle: 'Practice areas',
  topicsSubtitle:
    'Each area follows the same pattern: how to use the page, numbered steps, and outbound links when available.',
  notes: [
    'Formal music training is traditional; informal learners should still aim for reverence over speed.',
  ],
  cautions: [
    'Do not copy liturgical or prayer texts onto this site; link to official or licensed editions.',
  ],
  practiceSteps: [],
  categories: [],
}
