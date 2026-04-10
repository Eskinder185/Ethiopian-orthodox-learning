/**
 * Narrative bodies for PracticePageTemplate configs merged in practiceFirstPages.js.
 */

const MEZMUR_ORIENTATION_PARAGRAPHS = [
  'This page introduces Ethiopian Orthodox mezmur and the sacred chant tradition known as Yaredawi Zema. In Ethiopian Orthodox life, mezmur are not treated as ordinary songs. They are sacred hymns used for prayer, praise, teaching, remembrance, and spiritual reflection within the life of the Church. Ethiopian Orthodox worship as a whole is deeply liturgical and preserves ancient forms of prayer and chant, which is why mezmur should be approached with reverence, patience, and attention rather than as casual performance.',
  'Yaredawi Zema refers to the Ethiopian Orthodox chant tradition traditionally connected to Saint Yared, who is remembered as the great source and organizer of this sacred musical heritage. Scholarly reference works describe Ethiopian chant as a central liturgical tradition associated with Saint Yared, and they note that it is more than simple melody. It is a structured sacred system that joins text, tune, liturgical mood, and performance practice in a way that serves worship.',
  'One of the most important things to understand is that Yaredawi Zema is not just "music" in the modern entertainment sense. It is part of the Church\'s worshiping life and has been preserved through teaching, repetition, and careful transmission. Research on Ethiopian Christian chant emphasizes both oral and written transmission, meaning the tradition has historically been learned through guided practice, memorization, and disciplined instruction rather than through casual listening alone.',
  'The chant tradition is commonly described through three major styles or modes. Geʽez is the most common and widely used style in regular worship. Ezel is associated with more solemn moments, fasting, sorrow, and especially Holy Week. Araray is often described as lighter, brighter, and more joyful, and is used less frequently in services than Geʽez. Some traditional explanations also connect these chant styles symbolically with deeper theological meaning.',
  'For learners, this page should serve as an orientation and practice guide. Its purpose is to explain what mezmur is, briefly introduce Yaredawi Zema, and help beginners build good habits for learning. It is best not to overload the page with long hymn texts or large blocks of material. Instead, the page should guide people toward respectful practice: listening carefully, learning one short phrase at a time, and reviewing consistently. That approach fits the traditional character of Ethiopian chant, which values discipline, accuracy, and steady formation.',
  'A helpful beginner approach is to start with one short line or stanza, not the whole hymn. Hum or softly repeat the melody first, then practice the words slowly. After that, look away from the text and test your memory for a few seconds before checking again. This kind of short recall practice is often more effective than staring at the same line for too long. Then connect the lines gradually: learn line 1, then line 2, then combine 1 + 2, then add line 3, and continue building in small pieces. This page can encourage that method without pretending to replace a chanter, teacher, or approved source. The memory advice here is a practical study method from learning science, while the page\'s religious framing is grounded in the Church\'s chant tradition.',
  'It is also helpful to explain that Ethiopian Orthodox worship may include instruments and ceremonial movement in church settings. Reference works on Ethiopian chant note the place of liturgical performance traditions around chant, while home practice is often best kept simple and focused on the line, the melody, the words, and the spirit of reverence. For beginners especially, quiet repetition and memorization are usually better than trying to imitate the full church setting immediately.',
  'This page is therefore best understood as a starting place: a place to learn what mezmur is, understand the role of Yaredawi Zema, and begin practicing with humility and consistency. Readers who want greater depth should be encouraged to learn from trusted recordings, approved texts, priests, debteras, or trained chanters.',
]

export const mezmurPageContent = {
  category: 'Practice · Mezmur',
  title: 'Mezmur practice',
  introShort:
    'Mezmur are sacred hymns of the Ethiopian Orthodox Church. Yaredawi Zema is their chant tradition — learned with reverence, not as casual entertainment. Open the sections below for a calm orientation, then use the workspace with material your priest or chanter approves.',
  orientationAccordion: [
    {
      id: 'orientation-sacred-yared',
      title: 'Sacred hymns & the gift of Yared',
      subtitle: 'What mezmur is and how Yaredawi Zema serves worship.',
      paragraphs: MEZMUR_ORIENTATION_PARAGRAPHS.slice(0, 2),
    },
    {
      id: 'orientation-tradition-modes',
      title: 'Living tradition & three chant modes',
      subtitle: 'Transmission, Geʽez, Ezel, and Araray in context.',
      paragraphs: MEZMUR_ORIENTATION_PARAGRAPHS.slice(2, 4),
    },
    {
      id: 'orientation-learning-practice',
      title: 'Learning gently at home',
      subtitle: 'Orientation for beginners: short phrases, recall, and formation.',
      paragraphs: MEZMUR_ORIENTATION_PARAGRAPHS.slice(4, 6),
    },
    {
      id: 'orientation-church-depth',
      title: 'Church worship & going deeper',
      subtitle: 'Instruments, reverence, and trusted teachers.',
      paragraphs: MEZMUR_ORIENTATION_PARAGRAPHS.slice(6, 8),
    },
  ],
  howToUseSummary:
    'Three short reminders: use the orientation above, the workspace with approved recordings, and ask chanters when you need more depth.',
  howToUse: [
    'Use the orientation sections above for what mezmur and Yaredawi Zema are, how chant is transmitted, and how Geʽez, Ezel, and Araray are generally described.',
    'Use the workspace below with material your priest or chanter approves: paste a YouTube link, mark timestamps for small lyric chunks, loop sections, and try short recall without staring at the text.',
    'Prefer accuracy, reverence, and steady formation over speed; ask priests, debteras, or trained chanters when you need depth beyond this starting place.',
  ],
  steps: [
    'Listen carefully from a trusted recording or approved source (embedded player below or audio on an external site).',
    'Learn one short phrase at a time: hum or softly repeat the melody, then the words slowly.',
    'Try a few seconds of recall without looking at the text, then check again.',
    'Chain lines in order: line 1, then line 2, then lines 1 + 2, then add line 3, building in small pieces.',
    'Review consistently; keep home practice simple (line, melody, words, reverence) rather than imitating the full church setting immediately.',
  ],
  checklistItems: [
    'Listen carefully from an approved source',
    'Learn one short phrase at a time',
    'Short recall without the text, then check',
    'Chain lines in small pieces',
    'Review consistently; keep home practice simple',
  ],
  externalSection: {
    title: 'Hymn & chant sources (external websites)',
    intro: 'Add links to recordings, scores, and channels your community trusts.',
    links: [],
  },
  notesBody:
    'Note which hymn you used and whether you practiced with audio or text. Jot questions for your priest or a chanter — this page does not replace approved sources or in-person teaching.',
}

export const prayerPageContent = {
  category: 'Practice · Prayer',
  title: 'Prayer practice',
  practiceNotice:
    'The prayers on this page are for learning and private devotion. Use approved books or sites for rubrics, audio, and any language you pray in at church.',
  introShort:
    'Prayer at home, in an order the Church has long loved: praise, the Lord’s Prayer, Mary, the faith, and thanks. Below you can read, learn, and pray step by step.',
  intro:
    'Daily prayer (Tselot) orders the day around God. Many begin with morning prayers, return to short prayers during the day, and close with evening praise. This page gives English texts for learning and devotion; keep comparing any wording with books or sites your parish approves.',
  howToUseSummary:
    'Start small, use the beginner routine if it helps, and expand into the full sections when you are ready.',
  howToUse: [
    'Skim the category overview, then open one prayer section at a time.',
    'Use the suggested beginner routine until those parts feel natural.',
    'Confirm phrasing and rubrics with your priest or prayer book when you can.',
    'Consistency matters more than length.',
  ],
  steps: [
    'Use the guided prayer path at the top of this page for pacing and beginner/full views.',
    'Open full prayer texts below when you are ready for longer prayer; compare wording with your parish book.',
    'When audio is linked from a trusted source, listen once before reading aloud.',
  ],
  checklistItems: [
    'Listen from the original source',
    'Repeat slowly',
    'Read carefully',
    'Practice from memory',
    'Review again later',
  ],
  externalSection: {
    title: 'Prayer books & digital editions (external websites)',
    intro: 'Link to prayer books and apps the owning church or press allows.',
    links: [],
  },
  notesBody:
    'Note which sections you prayed and anything you want to ask your spiritual father — a few honest lines in your own notebook are enough.',
}
