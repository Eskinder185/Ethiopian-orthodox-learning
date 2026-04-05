import { paths } from '../constants/paths.js'

/**
 * Progress area copy and navigation cards to practice routes.
 */
export const progressNavCards = [
  {
    title: 'Mezmur',
    description: 'Hymn flow — listen, repeat, review with external sources.',
    to: paths.practice.mezmur,
  },
  {
    title: 'Tselot',
    description: 'Daily prayer routines with texts from books or linked sites.',
    to: paths.practice.tselot,
  },
  {
    title: 'Liturgy',
    description: 'Orientation to the Divine Liturgy between Sundays.',
    to: paths.learn.liturgy,
  },
  {
    title: 'Amharic alphabet',
    description: 'Fidel recognition in small, calm sets.',
    to: paths.language.alphabet,
  },
]

export const progressSiteContent = {
  home: {
    category: 'Progress',
    title: 'Progress',
    intro:
      'Progress here means faithful attention — not competition. The site will eventually help you notice patterns in prayer, hymn practice, language touchpoints, and learning goals you choose. Nothing is stored on a server yet; this page explains the direction and links you back into practice.',
    notice:
      'Numbers, streaks, and timelines will appear only when local or optional cloud storage is added with your control. Until then, use a notebook or calendar you already trust.',
  },

  supportTitle: 'What progress tracking is for',
  supportParagraphs: [
    'The aim is gentle structure: seeing that you returned to a prayer flow, touched the alphabet, or reviewed a liturgy section — without shaming missed days. Orthodox life is not a leaderboard.',
    'When features ship, they should stay private, easy to reset, and secondary to parish worship and spiritual direction.',
  ],

  practiceAreasTitle: 'Return to practice',
  practiceAreasSubtitle: 'These pages hold the actual routines; progress will connect to them over time.',
}
