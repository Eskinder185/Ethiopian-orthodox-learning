/**
 * Per subpage: category label and summary for LearnTopicPage shells.
 * Narrative lives in src/content/.
 */
export const subpageOutlines = {
  scripture: {
    category: 'Learn · Scripture',
    summary:
      'How the Ethiopian Orthodox Church receives Scripture in liturgy and tradition, the 81-book canon, Ge’ez heritage, and habits for prayerful reading — with an optional external reader link; confirm editions with your parish.',
  },
  teachings: {
    category: 'Learn · Teachings',
    summary:
      'Faith and order of the Ethiopian Orthodox Church: Trinity, incarnation, salvation, and the seven sacraments — summarized for beginners; confirm with your priest.',
  },
  churchKnowledge: {
    category: 'Learn · Church knowledge',
    summary:
      'Tewahedo identity, Aksum and the Nine Saints, distinctive liturgy and Ge’ez chant, monasticism, sacred places — orientation only; verify sensitive topics with church and scholarly sources.',
  },
  mezmur: {
    category: 'Practice · Mezmur',
    summary:
      'Hymn texts grouped by mode, feast, or language. Later you can attach audio and print-friendly PDFs from src/content/.',
  },
  tselot: {
    category: 'Practice · Tselot',
    summary:
      'Prayer texts for home and church preparation. The main column can hold full prayers; cards can split morning and evening sets.',
  },
  liturgy: {
    category: 'Learn · Liturgy',
    summary:
      'Step-by-step guides to the Divine Liturgy: moments, responses, and meaning. Ideal for PDFs or embedded slides later.',
  },
  alphabet: {
    category: 'Language · Alphabet',
    summary:
      'Fidel tables and reading rules. Import images or generated grids from src/content/ without changing this shell.',
  },
  writing: {
    category: 'Language · Writing',
    summary:
      'Exercises for copying and composing. Attach worksheets or interactive prompts in the main area when ready.',
  },
  pronunciation: {
    category: 'Language · Pronunciation',
    summary:
      'Audio clips, IPA, or simple spelling guides for liturgical words. Place media files under public/ or src/content/.',
  },
  today: {
    category: 'Calendar · Today',
    summary:
      'A daily panel for saint, reading, and fast status. Later, bind this to JSON or computed calendar data.',
  },
  fasting: {
    category: 'Calendar · Fasting',
    summary:
      'Explain fasts with calm clarity. Static copy first; optional tables from data files when rules are finalized.',
  },
  holidays: {
    category: 'Calendar · Holidays',
    summary:
      'Great feasts and movable days. Each feast can become its own document card or detail page.',
  },
  stats: {
    category: 'Progress · Stats',
    summary:
      'Summary numbers: days opened, prayers logged, lessons finished. Populate from local state or analytics later.',
  },
  tracking: {
    category: 'Progress · Tracking',
    summary:
      'Personal check-ins without judgment — Mezmur reps, prayer goals, or study minutes. Store in localStorage when you add logic.',
  },
}
