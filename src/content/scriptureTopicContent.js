/**
 * Learn · Scripture — Ethiopian Orthodox approach to Holy Scripture and reading habits.
 */

export const scriptureTopicContent = {
  title: 'Scripture',
  intro:
    'The Ethiopian Orthodox Tewahedo Church reads Holy Scripture as part of the living life of the Church. The Bible is not approached as an isolated book only for private study, but as sacred teaching heard in the liturgy, prayed in the daily life of believers, taught by the Fathers, and received within the tradition of the Church. In Ethiopian Orthodox practice, Scripture, worship, fasting, feasts, and doctrine all work together, so reading the Bible is meant to deepen prayer, repentance, and communion with God.',

  notes: [
    'Use an edition or app your bishop or parish recognizes when book lists, order, or names matter.',
    'Join personal reading with hearing Scripture in church on Sundays, feasts, and fasting seasons when you can.',
  ],

  cautions: [
    'Treat online Bibles as reading aids; verify the canon list and naming against church-approved guidance when study or catechesis depends on it.',
  ],

  sections: [
    {
      id: 'canon',
      title: 'The canon of Scripture',
      subtitle: 'Eighty-one books in the Ethiopian Orthodox tradition',
      body: [
        'One of the most distinctive features of the Ethiopian Orthodox Bible is its broad canon. The Ethiopian Orthodox Church’s official canon page lists 46 books in the Old Testament and 35 in the New Testament, for a total of 81 canonical books. This makes the Ethiopian Orthodox biblical tradition broader than the canons commonly used in many Protestant and Catholic settings.',
        'The canon is also known for preserving books especially associated with Ethiopian tradition, including Enoch, Jubilees, and the books of Meqabyan, which are not the same as the Greek Maccabees found in other traditions.',
      ],
    },
    {
      id: 'geez-tradition',
      title: 'Ge’ez, the Septuagint, and different editions',
      subtitle: 'Why Ethiopian Bibles can look different on the shelf',
      body: [
        'The Ethiopian Orthodox tradition preserves Scripture in close relationship with the Ge’ez liturgical heritage of the Church. Church and scholarly sources note that the Ethiopic Bible tradition was historically translated in relation to the Septuagint and transmitted within a long manuscript and liturgical tradition.',
        'Because of this, readers may sometimes notice differences in book order, naming, spelling, or grouping when comparing Ethiopian Orthodox editions to Western Bibles. That is normal, and it is one reason Ethiopian Orthodox Christians are encouraged to use editions recognized by their Church and to read with guidance when possible.',
      ],
    },
    {
      id: 'how-to-use',
      title: 'How to use this page',
      subtitle: 'Introduction and guide — not the full text',
      body: [
        'This page is best used as an introduction and guide, not as a replacement for the full biblical text. It can help readers understand the Ethiopian Orthodox approach to Scripture, learn how the canon differs, and develop good reading habits.',
        'Full passages are best read from a complete Bible edition, trusted app, or church-approved source. When possible, personal reading should be joined with liturgical hearing at church, especially during Sundays, feast days, and fasting seasons, because Scripture is most fully understood in the worshiping life of the Church.',
      ],
    },
    {
      id: 'reading-habits',
      title: 'Reading with a prayerful mindset',
      subtitle: 'Formation, not only information',
      body: [
        'As you read, it helps to begin with a prayerful mindset. Ethiopian Orthodox reading is not only about gathering information; it is also about formation of the heart.',
        'Many believers begin with the Psalms, the Gospels, or short daily passages, and then connect what they read with what they hear in the Divine Liturgy and other services. Reading slowly, reverently, and consistently is more important than rushing. The goal is not only to finish chapters, but to grow in faith, understanding, humility, and obedience.',
      ],
    },
    {
      id: 'editions-online',
      title: 'Printed canon and online editions',
      subtitle: 'Check what you read against parish guidance',
      body: [
        'There can be some confusion online about the full printed form of the Ethiopian Orthodox canon. The Church’s official canon page gives the recognized canonical list of 81 books, while scholarship explains that some church-order books included in the broader tradition are not always printed together in a single commonly used volume.',
        'Because of that, readers should treat any online edition as a useful reading copy, while still verifying book lists and naming against an edition or guidance approved by their parish or jurisdiction.',
      ],
    },
  ],

  /** Rendered below main content as ExternalSourceSupportSection + ExternalSourceCard */
  externalSupport: {
    id: 'scripture-external-support',
    eyebrow: 'Trusted external source',
    title: 'Go deeper',
    subtitle: 'Full text in an external reader',
    intro:
      'OrthodoxPath does not host the full Bible text. When you want to read longer passages, use this reader — and confirm canon, edition, and parish guidance with your priest when study or catechesis depends on it.',
    card: {
      title: 'Full Bible reading',
      description: 'Read the full Bible text in an external reader.',
      href: 'https://online.fliphtml5.com/ekjsx/blhe/',
      buttonLabel: 'Open Bible reader',
      variant: 'bible',
    },
  },
}
