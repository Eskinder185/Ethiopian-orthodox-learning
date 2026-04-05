import { paths } from '../constants/paths.js'

/**
 * Progress area copy and navigation cards to practice routes.
 */
export const progressNavCards = [
  {
    title: 'Mezmur',
    description: 'Sacred hymns — listen, repeat, and let the melody settle in your heart.',
    to: paths.practice.mezmur,
  },
  {
    title: 'Tselot',
    description: 'Daily prayer — small, steady visits to the words the Church has taught you.',
    to: paths.practice.tselot,
  },
  {
    title: 'Liturgy',
    description: 'Sunday worship — return between services so nothing feels unfamiliar.',
    to: paths.learn.liturgy,
  },
  {
    title: 'Amharic alphabet',
    description: 'Sacred letters — a few at a time, with patience and joy.',
    to: paths.language.alphabet,
  },
]

export const progressSiteContent = {
  home: {
    category: 'Progress',
    title: 'Progress',
    intro:
      'Here, progress is faithfulness in small things — coming back to prayer, humming a hymn line, opening the alphabet — without scores or pressure. Over time this space will help you notice those quiet patterns. For now, consider this a gentle compass that always points you toward practice.',
    notice:
      'Tallies and timelines will arrive only when private, optional tools are ready — always under your control. Until then, a notebook or calendar you already love is a holy enough record.',
  },

  supportTitle: 'What progress tracking is for',
  supportParagraphs: [
    'The hope is a little structure that cheers you on: you returned to prayer, touched a few letters, or read one liturgy section again — never shame for missed days. The Christian life is not a contest.',
    'Whenever tools appear here, they should stay yours to reset or set aside, and always second to parish worship and your spiritual father’s counsel.',
  ],

  practiceAreasTitle: 'Return to practice',
  practiceAreasSubtitle:
    'These are the living pages — prayer, song, liturgy, letters. Progress will meet you here when it is ready.',
}
