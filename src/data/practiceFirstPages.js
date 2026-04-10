import { prayerPageContent } from '../content/practicePagesContent.js'

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
  prayer: {
    ...prayerPageContent,
    externalSection: {
      ...prayerPageContent.externalSection,
      intro: externalIntro,
      links: [],
    },
    jumpNavLinks: [
      { href: '#prayer-flow-interactive', label: 'Guided path' },
      { href: '#daily-prayer', label: 'Daily prayers' },
      { href: '#daily-prayer-overview', label: 'Overview' },
      { href: '#daily-prayer-beginner', label: 'Beginner routine' },
      { href: '#daily-prayer-texts', label: 'Full prayers' },
      { href: '#how-to-heading', label: 'How to use' },
      { href: '#practice-flow-heading', label: 'Practice flow' },
      { href: '#prayer-external-support', label: 'Full text / audio' },
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
  },
}
