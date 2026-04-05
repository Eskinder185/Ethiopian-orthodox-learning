import { paths } from '../constants/paths.js'
import { mezmurPageContent, tselotPageContent } from '../content/practicePagesContent.js'
import { tselotDailyPrayer, mezmurLibrary } from './curatedExternalLinks.js'

const rel = (to, label, description) => ({
  to,
  label,
  description,
  kind: 'On this site',
})

/**
 * Practice-first page copy: instructional only; full texts via external links you add.
 * Narrative intros and steps: src/content/practicePagesContent.js
 *
 * externalSection.links items:
 *   { href, resourceTitle, sourceName, description?, linkText? }
 */
const externalIntro =
  'These resources are hosted on their original websites. Click to open full content in a new tab — nothing is copied or stored here.'

export const practicePageConfigs = {
  mezmur: {
    ...mezmurPageContent,
    externalSection: {
      ...mezmurPageContent.externalSection,
      intro: externalIntro,
      links: [mezmurLibrary],
    },
    relatedItems: [
      rel(paths.learn.liturgy, 'Liturgy', 'See how hymns fit the larger service.'),
      rel(paths.progress.tracking, 'Practice tracking', 'Note habits and review in your own words.'),
    ],
    jumpNavLinks: [
      { href: '#practice-orientation', label: 'Orientation' },
      { href: '#how-to-heading', label: 'How to use' },
      { href: '#practice-flow-heading', label: 'Practice flow' },
      { href: '#practice-external-resources', label: 'External links' },
      { href: '#mezmur-workspace', label: 'Workspace' },
      { href: '#reflection-heading', label: 'After practice' },
      { href: '#checklist-heading', label: 'Checklist' },
    ],
  },

  tselot: {
    ...tselotPageContent,
    externalSection: {
      ...tselotPageContent.externalSection,
      intro: externalIntro,
      links: [tselotDailyPrayer],
    },
    relatedItems: [
      rel(paths.practice.mezmur, 'Mezmur practice', 'Connect sung and spoken prayer.'),
      rel(paths.learn.liturgy, 'Liturgy', 'Link home prayer to Sunday worship.'),
    ],
    jumpNavLinks: [
      { href: '#how-to-heading', label: 'How to use' },
      { href: '#practice-flow-heading', label: 'Practice flow' },
      { href: '#practice-external-resources', label: 'External links' },
      { href: '#reflection-heading', label: 'After practice' },
      { href: '#checklist-heading', label: 'Checklist' },
    ],
  },

  tracking: {
    category: 'Progress · Tracking',
    title: 'Progress tracking',
    intro:
      'Plan how you will notice consistency without shame. Use this page as a pattern for intentions and honest review; saving data on your device can be added when you are ready to build that layer.',
    howToUse: [
      'Pick one or two habits only — for example, “five minutes of alphabet” or “one liturgy review.”',
      'Mark success as “showed up,” not perfection.',
      'Share goals with a spiritual father if they involve fasting or prayer load.',
    ],
    steps: [
      'Write today’s intention in one sentence on paper.',
      'After practicing elsewhere on the site, return and note done or skipped honestly.',
      'Weekly, read your notes and adjust difficulty — easier is often wiser.',
    ],
    externalSection: {
      title: 'Journals & tools (external websites)',
      links: [],
    },
    notesBody:
      'A notebook or notes app is enough for now. The goal is faithful consistency, not a perfect record.',
    relatedItems: [
      rel(paths.progress.index, 'Progress overview', 'Return to the progress home.'),
      rel(paths.progress.stats, 'Stats & summary', 'How summaries might serve you later.'),
      rel(paths.practice.index, 'Practice hub', 'Jump back to worship practices.'),
    ],
  },

  stats: {
    category: 'Progress · Stats',
    title: 'Stats & summary',
    intro:
      'When tracking is implemented, this area can show gentle counts: days you opened a practice page, minutes if you choose to log them, or topics touched — private and vanity-free by design. For now, use this page to think through what would actually help you, not what would pressure you.',
    howToUse: [
      'Avoid vanity metrics. Favor “days prayed at all” over competitive counts.',
      'Any dashboard should be private by default.',
    ],
    flowTitle: 'How a summary can support you',
    steps: [
      'You practice on other pages and mark completion locally (when that exists).',
      'This page can aggregate counts per week only with your permission.',
      'You reset or export data whenever you want.',
    ],
    externalSection: {
      title: 'Privacy and habits (external reading)',
      links: [],
    },
    notesBody:
      'Discuss with a mentor before turning spiritual life into charts; the aim is encouragement, not comparison.',
    relatedItems: [
      rel(paths.progress.index, 'Progress overview', 'Return to the main progress page.'),
      rel(paths.progress.tracking, 'Practice tracking', 'Day-to-day intentions and review.'),
      rel(paths.practice.index, 'Practice hub', 'Where your practice routines live.'),
    ],
  },
}
