import { paths } from '../constants/paths.js'

/**
 * Per subpage: category label, summary, and related resource rows.
 * Expand or move into src/content/*.json when you import real curricula.
 */
export const subpageOutlines = {
  scripture: {
    category: 'Learn · Scripture',
    summary:
      'How the Ethiopian Orthodox Church receives Scripture in liturgy and tradition, the 81-book canon, Ge’ez heritage, and habits for prayerful reading — with an optional external reader link; confirm editions with your parish.',
    relatedTitle: 'Related in Learn',
    relatedItems: [
      {
        to: paths.learn.teachings,
        label: 'Teachings',
        description: 'Doctrine and explanations that support reading.',
        kind: 'Topic',
      },
      {
        to: paths.learn.churchKnowledge,
        label: 'Church knowledge',
        description: 'Context on feasts and saints tied to readings.',
        kind: 'Topic',
      },
    ],
  },
  teachings: {
    category: 'Learn · Teachings',
    summary:
      'Faith and order of the Ethiopian Orthodox Church: Trinity, incarnation, salvation, and the seven sacraments — summarized for beginners; confirm with your priest.',
    relatedTitle: 'Related in Learn',
    relatedItems: [
      { to: paths.learn.scripture, label: 'Scripture', description: 'Ground teaching in the Bible.', kind: 'Topic' },
      {
        to: paths.learn.churchKnowledge,
        label: 'Church knowledge',
        description: 'History and practice that frame doctrine.',
        kind: 'Topic',
      },
    ],
  },
  churchKnowledge: {
    category: 'Learn · Church knowledge',
    summary:
      'Tewahedo identity, Aksum and the Nine Saints, distinctive liturgy and Ge’ez chant, monasticism, sacred places — orientation only; verify sensitive topics with church and scholarly sources.',
    relatedTitle: 'Related in Learn',
    relatedItems: [
      { to: paths.learn.teachings, label: 'Teachings', description: 'Theological depth on themes.', kind: 'Topic' },
      { to: paths.calendar.holidays, label: 'Holidays', description: 'Major days on the calendar.', kind: 'Section' },
    ],
  },
  mezmur: {
    category: 'Practice · Mezmur',
    summary:
      'Hymn texts grouped by mode, feast, or language. Later you can attach audio and print-friendly PDFs from src/content/.',
    relatedTitle: 'Related in Practice',
    relatedItems: [
      { to: paths.learn.liturgy, label: 'Liturgy', description: 'Where hymns fit the service.', kind: 'Topic' },
      { to: paths.progress.tracking, label: 'Practice tracking', description: 'Note what you reviewed.', kind: 'Section' },
    ],
  },
  tselot: {
    category: 'Practice · Tselot',
    summary:
      'Prayer texts for home and church preparation. The main column can hold full prayers; cards can split morning and evening sets.',
    relatedTitle: 'Related in Practice',
    relatedItems: [
      { to: paths.learn.liturgy, label: 'Liturgy', description: 'Public worship context.', kind: 'Topic' },
      { to: paths.practice.mezmur, label: 'Mezmur', description: 'Sung prayer alongside spoken prayer.', kind: 'Topic' },
    ],
  },
  liturgy: {
    category: 'Learn · Liturgy',
    summary:
      'Step-by-step guides to the Divine Liturgy: moments, responses, and meaning. Ideal for PDFs or embedded slides later.',
    relatedTitle: 'Related',
    relatedItems: [
      { to: paths.practice.mezmur, label: 'Mezmur practice', description: 'Hymnic layers of the service.', kind: 'Practice' },
      { to: paths.practice.tselot, label: 'Tselot practice', description: 'Personal prayer rhythm.', kind: 'Practice' },
      { to: paths.learn.churchKnowledge, label: 'Church knowledge', description: 'Worship context and feasts.', kind: 'Topic' },
    ],
  },
  alphabet: {
    category: 'Language · Alphabet',
    summary:
      'Fidel tables and reading rules. Import images or generated grids from src/content/ without changing this shell.',
    relatedTitle: 'Related in Language',
    relatedItems: [
      { to: paths.language.writing, label: 'Writing practice', description: 'Reinforce letter shapes.', kind: 'Topic' },
      { to: paths.language.pronunciation, label: 'Pronunciation', description: 'Hear and repeat sounds.', kind: 'Topic' },
    ],
  },
  writing: {
    category: 'Language · Writing',
    summary:
      'Exercises for copying and composing. Attach worksheets or interactive prompts in the main area when ready.',
    relatedTitle: 'Related in Language',
    relatedItems: [
      { to: paths.language.alphabet, label: 'Amharic alphabet', description: 'Review characters first.', kind: 'Topic' },
      { to: paths.language.pronunciation, label: 'Pronunciation', description: 'Match sound to spelling.', kind: 'Topic' },
    ],
  },
  pronunciation: {
    category: 'Language · Pronunciation',
    summary:
      'Audio clips, IPA, or simple spelling guides for liturgical words. Place media files under public/ or src/content/.',
    relatedTitle: 'Related in Language',
    relatedItems: [
      { to: paths.language.alphabet, label: 'Amharic alphabet', description: 'Letters behind the sounds.', kind: 'Topic' },
      { to: paths.practice.mezmur, label: 'Mezmur', description: 'Apply sounds in hymnody.', kind: 'Practice' },
    ],
  },
  today: {
    category: 'Calendar · Today',
    summary:
      'A daily panel for saint, reading, and fast status. Later, bind this to JSON or computed calendar data.',
    relatedTitle: 'Related in Calendar',
    relatedItems: [
      { to: paths.calendar.fasting, label: 'Fasting', description: 'Seasonal and weekly fast context.', kind: 'Topic' },
      { to: paths.calendar.holidays, label: 'Holidays', description: 'Upcoming feasts.', kind: 'Topic' },
    ],
  },
  fasting: {
    category: 'Calendar · Fasting',
    summary:
      'Explain fasts with calm clarity. Static copy first; optional tables from data files when rules are finalized.',
    relatedTitle: 'Related in Calendar',
    relatedItems: [
      { to: paths.calendar.today, label: 'Today', description: 'What today asks of the faithful.', kind: 'Topic' },
      { to: paths.learn.teachings, label: 'Teachings', description: 'Spiritual meaning of fasting.', kind: 'Learn' },
    ],
  },
  holidays: {
    category: 'Calendar · Holidays',
    summary:
      'Great feasts and movable days. Each feast can become its own document card or detail page.',
    relatedTitle: 'Related in Calendar',
    relatedItems: [
      { to: paths.calendar.today, label: 'Today', description: 'If today is a feast, show it here first.', kind: 'Topic' },
      { to: paths.learn.churchKnowledge, label: 'Church knowledge', description: 'Stories behind the days.', kind: 'Learn' },
    ],
  },
  stats: {
    category: 'Progress · Stats',
    summary:
      'Summary numbers: days opened, prayers logged, lessons finished. Populate from local state or analytics later.',
    relatedTitle: 'Related',
    relatedItems: [
      { to: paths.progress.tracking, label: 'Practice tracking', description: 'Detailed logs and streaks.', kind: 'Topic' },
      { to: paths.practice.index, label: 'Practice', description: 'Where activity originates.', kind: 'Section' },
    ],
  },
  tracking: {
    category: 'Progress · Tracking',
    summary:
      'Personal check-ins without judgment — Mezmur reps, prayer goals, or study minutes. Store in localStorage when you add logic.',
    relatedTitle: 'Related',
    relatedItems: [
      { to: paths.progress.stats, label: 'Stats', description: 'Roll up activity into totals.', kind: 'Topic' },
      { to: paths.practice.mezmur, label: 'Mezmur practice', description: 'Hymn practice to log or review.', kind: 'Topic' },
    ],
  },
}
