import { paths } from '../constants/paths.js'

/**
 * Start Here — beginner onboarding. Expand sections in this file over time.
 */
export const startHereContent = {
  title: 'Start here',
  eyebrow: 'Welcome to OrthodoxPath',
  heroLead:
    'This site helps you pray, learn, and practice at home in the Ethiopian Orthodox Tewahedo tradition — with reverence, patience, and your parish always first.',

  whatIsChurch: {
    title: 'What is the Ethiopian Orthodox Tewahedo Church?',
    paragraphs: [
      'The Ethiopian Orthodox Tewahedo Church is an ancient Christian Church in the Oriental Orthodox communion. It confesses the one nature of Christ (Tewahedo — “made one”) and lives a richly liturgical life: Scripture, sacraments, fasting, feasts, icons, and sacred chant.',
      'You do not need to master everything at once. The Church is learned in worship, in the home, and under spiritual guidance — this site only supports that journey.',
    ],
  },

  howToUse: {
    title: 'How to use this site',
    paragraphs: [
      'Learn explains faith, Scripture, liturgy, church life, and the shape of the Church year. Practice is for prayer, hymnody, language, and training at home. Calendar helps you see today in Church time and find feasts and fasts — always alongside your priest’s calendar.',
      'Sacred texts and many recordings are not hosted here; pages link to trusted external sources when we can.',
    ],
  },

  whatFirst: {
    title: 'What to learn first',
    items: [
      { label: 'Teachings or Scripture', hint: 'A calm foundation in Christ and the Church’s faith.' },
      { label: 'Liturgy (overview)', hint: 'So Sunday worship feels less unfamiliar.' },
      { label: 'Prayer practice', hint: 'One short routine your priest blesses.' },
    ],
  },

  path: {
    title: 'A beginner learning path',
    steps: [
      'Read Start here and About.',
      'Open Learn → Teachings or Scripture once.',
      'Visit Practice → Prayer practice and try one small habit.',
      'Check Calendar → Today in the Church this week.',
      'Bring questions to your priest or catechist.',
    ],
  },

  visitor: {
    title: 'First-time church visitor',
    paragraphs: [
      'Arrive modestly and early; stand and bow with the congregation unless infirmity requires otherwise. Follow the ushers and the clergy; do not receive communion unless you are prepared and Orthodox, per your bishop’s discipline.',
      'After the service, greet quietly; many questions are best saved for a priest or trusted teacher in private.',
    ],
  },

  parishNote: {
    title: 'Parish and spiritual father',
    body:
      'OrthodoxPath supports parish life, fasting rules, and spiritual direction — it does not replace your priest, bishop, or sacramental life in the Church.',
  },

  ctas: {
    exploreMonth: { to: paths.calendar.seasons, label: 'Seasonal guides' },
    learnHub: { to: paths.learn.index, label: 'Open Learn' },
  },
}
