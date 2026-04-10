/**
 * Learn · Scripture — visual guide (orientation; editions & canon from parish).
 */

import { paths } from '../constants/paths.js'

export const scriptureMeta = {
  category: 'Learn · Scripture',
  title: 'Scripture',
}

export const scriptureHero = {
  eyebrow: 'Ethiopian Orthodox Tewahedo Church',
  intro:
    'Holy Scripture is **heard in the liturgy**, **prayed at home**, and **received in the Church**. This page maps the **Bible’s shape**, suggests **where to begin**, and shows how **reading** serves **communion with God** — not private opinion alone.',
  ctaStart: 'Start reading',
  ctaStructure: 'See the Bible structure',
  anchorPaths: '#scripture-reading-paths',
  anchorStructure: '#scripture-bible-structure',
}

export const scriptureSourceNote =
  'Use an **edition or app** your **bishop or parish** recognizes when **canon**, **names**, or **catechesis** matter. OrthodoxPath does not host the full biblical text.'

export const scriptureSectionCopy = {
  structureTitle: 'The Bible in four great parts',
  structureLead:
    'A **teaching map** — not a dated lectionary. The Ethiopian Church receives a **broad canon** (often **81 books**); groupings help beginners **find their bearings**.',
  booksTitle: 'Books and groups to know first',
  booksLead: 'Short **orientation** — deepen with your **priest**, **catechist**, and **parish Bible**.',
  pathsTitle: 'Beginner reading paths',
  pathsLead: 'Choose **one path** and move **slowly**; **quality** of attention beats **speed**.',
  churchTitle: 'Scripture in Church life',
  churchLead: 'The Word is **woven** into worship, seasons, and daily **discipleship**.',
  plansTitle: 'Reading plan ideas',
  plansLead: 'Simple **rhythms** you can adapt — always **aligned** with parish **fasts** and **feasts**.',
  glossaryTitle: 'Words you will hear',
  glossaryLead: 'Tap a **term** for a short, reverent **gloss**.',
  externalTitle: 'Read the full text elsewhere',
  externalLead:
    'OrthodoxPath links to **established readers** for longer reading. **Confirm** translation and **canon list** with your **parish** when it matters.',
  crossTitle: 'Continue learning',
  crossLead: 'Scripture opens into **worship**, **time**, and **practice**.',
}

/** Major structural groups — expandable in UI */
export const scriptureStructureGroups = [
  {
    id: 'ot',
    title: 'Old Testament',
    shortLabel: 'Old Testament',
    summary: 'Law, history, poetry, and prophets — God’s **covenant** with Israel, preparing the way for **Christ**.',
    whyItMatters: 'You meet **creation**, **covenant**, **prophecy**, and the **moral world** the Messiah fulfills.',
    contains: 'Torah, historical books, wisdom, major and minor prophets — in Ethiopian editions often including **broader** books than many Western Bibles.',
    beginnerNote: 'Names and **order** may differ from apps you used before; that is **normal** in Orthodox Bibles.',
  },
  {
    id: 'psalms',
    title: 'Psalms and wisdom',
    shortLabel: 'Psalms & wisdom',
    summary: 'The prayer-book of the Church — **Psalms**, Proverbs, Job, and related voices of **praise**, **lament**, and **instruction**.',
    whyItMatters: 'The Psalms **train** private prayer and **match** the emotional range of **repentance** and **joy**.',
    contains: 'Psalms centrally; wisdom literature that shapes **liturgical prayer** and **daily examination**.',
    beginnerNote: 'Many saints **memorize** a few Psalms; **slow** repetition is a classic Orthodox **habit**.',
  },
  {
    id: 'gospels',
    title: 'The Gospels',
    shortLabel: 'Gospels',
    summary: 'The **good news** of Jesus Christ — **Matthew, Mark, Luke, and John** — the **heart** of Christian proclamation.',
    whyItMatters: 'Here you **hear Christ** directly: teaching, miracles, cross, and **resurrection**.',
    contains: 'Four portraits of **one Lord**; read **often** and **side by side** with the **liturgy** you attend.',
    beginnerNote: 'Start here if you are **new** — short sections, **pause**, **pray**, **reread**.',
  },
  {
    id: 'apostolic',
    title: 'Apostolic writings',
    shortLabel: 'Acts & Epistles',
    summary: 'The **Acts** of the Apostles, **letters**, and **Revelation** — the **early Church** and the **end** of all things in Christ.',
    whyItMatters: 'Doctrine, **mission**, and **hope** for the **body of Christ** on earth.',
    contains: 'Acts, Catholic Epistles, Pauline letters, Hebrews, Revelation — as **printed** in your **Ethiopian Orthodox** edition.',
    beginnerNote: 'Read **letters** after at least **one** Gospel so **Christ** is firmly in view.',
  },
]

export const scriptureBookCards = [
  {
    id: 'torah-history',
    title: 'Law and holy story',
    summary: 'From **Genesis** through the story of Israel — **God’s acts** and **commands** in narrative.',
    theme: 'Covenant, **faithfulness**, and **promise**.',
    beginnerLabel: 'Start here for “big picture”',
    learnMoreLabel: 'Faith & order',
    learnMoreTo: paths.learn.teachings,
  },
  {
    id: 'psalms',
    title: 'The Psalms',
    summary: 'Christ and the Church **pray** the Psalms; they are the **school** of the heart.',
    theme: 'Prayer, **emotion** offered to God.',
    beginnerLabel: 'Ideal for daily prayer',
    learnMoreLabel: 'Prayer practice',
    learnMoreTo: paths.practice.prayer,
  },
  {
    id: 'prophets',
    title: 'The prophets',
    summary: 'God’s word to **reform**, **comfort**, and **point** to the Messiah.',
    theme: 'Justice, **repentance**, **hope**.',
    beginnerLabel: 'Read with commentary or guide',
    learnMoreLabel: 'Liturgy & Scripture',
    learnMoreTo: paths.learn.liturgy,
  },
  {
    id: 'gospels',
    title: 'The four Gospels',
    summary: 'The **life** of Jesus — **one Savior**, four **witnesses**.',
    theme: 'Jesus Christ — **true God** and **true man**.',
    beginnerLabel: 'Best first sustained read',
    learnMoreLabel: 'Divine Liturgy',
    learnMoreTo: paths.learn.liturgy,
  },
  {
    id: 'acts-epistles',
    title: 'Acts and Epistles',
    summary: 'The **Spirit** builds the Church; **letters** teach and **correct** in love.',
    theme: 'Church, **gifts**, **unity** in truth.',
    beginnerLabel: 'After one Gospel',
    learnMoreLabel: 'Teachings hub',
    learnMoreTo: paths.learn.teachings,
  },
  {
    id: 'ethiopian-heritage',
    title: 'The broader Ethiopian canon',
    summary: 'The Church’s **81-book** tradition includes texts **cherished** in Ethiopia (e.g. **Enoch**, **Jubilees**) alongside the books other Christians know.',
    theme: 'One **faith**, a **distinct** manuscript heritage.',
    beginnerLabel: 'Ask your priest for a list',
    learnMoreLabel: 'Church life',
    learnMoreTo: paths.learn.churchLifeHistory,
  },
]

export const scriptureReadingPaths = [
  {
    id: 'new',
    title: 'New to Scripture',
    tag: 'Gentle start',
    description: 'A **week** of short steps — **prayer** before reading, **one** chapter or less, **silence** after.',
    steps: [
      'Pray: “**Lord**, open my heart.”',
      'Read **one** chapter from a **Gospel** (e.g. Luke 1–2).',
      'Name **one** word that stays with you.',
      'Close with the **Lord’s Prayer** or a **Psalm** verse.',
    ],
  },
  {
    id: 'gospels',
    title: 'Start with the Gospels',
    tag: 'Core path',
    description: 'Walk with **Christ** in **Matthew**, **Mark**, **Luke**, then **John** — the Church’s **daily food**.',
    steps: [
      'Read **Mark** for brevity and **pace**.',
      'Read **Matthew** for **teaching** and structure.',
      'Read **Luke** for **mercy** and the **journey** to Jerusalem.',
      'Read **John** for **mystery** and **divinity**.',
    ],
  },
  {
    id: 'psalms',
    title: 'Psalms and prayer',
    tag: 'Heart formation',
    description: 'Let the Psalms **shape** morning and evening — **praise**, **penitence**, **trust**.',
    steps: [
      'Choose **one** Psalm for a **week**.',
      'Read it **slowly**; notice **verbs** addressed to God.',
      'Carry **one verse** into **liturgy** or **work**.',
      'Add **another** Psalm when the first feels **familiar**.',
    ],
  },
  {
    id: 'foundations',
    title: 'Foundations of the faith',
    tag: 'Catechesis',
    description: 'Pair **Scripture** with the **Church’s creed** and **worship** — **faith** is **lived** in communion.',
    steps: [
      'Read **Acts** and **Romans** with a **trusted guide**.',
      'Attend **Qidase**; notice **readings** and **responses**.',
      'Ask your **priest** how **fasts** and **feasts** highlight Scripture.',
      'Return to the **Gospels** often — they **judge** all interpretation.',
    ],
  },
]

export const scriptureChurchLife = [
  {
    id: 'liturgy',
    title: 'Liturgy',
    blurb: 'Epistle, **Gospel**, and **prayers** braid Scripture into **Qidase** — you **hear** the Word before **Holy Communion**.',
    icon: 'liturgy',
  },
  {
    id: 'prayer',
    title: 'Prayer',
    blurb: 'Home **tselot** and **Psalms** echo what the **assembly** sings and **proclaims**.',
    icon: 'prayer',
  },
  {
    id: 'fasting',
    title: 'Fasting',
    blurb: 'Fasts **quiet** the body so **Scripture** and **mercy** are **heard** more clearly.',
    icon: 'fast',
  },
  {
    id: 'feasts',
    title: 'Feasts',
    blurb: 'Great days **illuminate** passages — **Nativity**, **Pascha**, **saints** — with **hymns** that **unpack** the Word.',
    icon: 'feast',
  },
  {
    id: 'daily',
    title: 'Daily life',
    blurb: 'Small **bites** of Scripture, **forgiveness**, and **care** for the poor make the Word **incarnate** in **love**.',
    icon: 'daily',
  },
]

export const scriptureReadingPlans = [
  {
    id: 'week-intro',
    title: '7-day intro',
    tag: 'Starter',
    description: 'Seven **short** sessions: **Gospel** scenes, **one** Psalm, **silence**.',
    bullets: ['Days 1–2: **Infancy** and **baptism** (Luke).', 'Days 3–5: **Miracles** and **parables**.', 'Days 6–7: **Passion** preview — read **slowly**.'],
  },
  {
    id: 'gospel-plan',
    title: 'Gospel starter',
    tag: '4 weeks',
    description: 'One **Gospel** per **segment** — **Mark** in two weeks if you prefer **pace**.',
    bullets: ['Week 1: **Mark** 1–8.', 'Week 2: **Mark** 9–16.', 'Weeks 3–4: **John** 1–12, then **13–21**.'],
  },
  {
    id: 'psalm-habit',
    title: 'Psalm habit',
    tag: 'Ongoing',
    description: 'Morning **praise**, evening **examination** — **same** Psalms **repeated** until they **pray you**.',
    bullets: ['Psalms **1**, **23**, **51**, **95** — rotate weekly.', 'Read **before** icons or **cross**.', 'Journal **one line** — optional.'],
  },
  {
    id: 'seasonal',
    title: 'Seasonal path',
    tag: 'Church year',
    description: 'Let **Great Lent** and **Pascha** **choose** your texts — **Isaiah**, **Gospels**, **Acts** — with **parish** guidance.',
    bullets: ['Lent: **repentance** Psalms and **Gospel** passion.', 'Bright week: **Resurrection** texts.', 'Always: match **fast** **strictness** to **obedience**.'],
  },
]

export const scriptureGlossaryTerms = [
  {
    id: 'gospel',
    term: 'Gospel',
    definition:
      '**Good news** — especially the **life** of Jesus in the **four books** named Matthew, Mark, Luke, and John; also read **aloud** in the liturgy as **Gospel**.',
  },
  {
    id: 'psalm',
    term: 'Psalm',
    definition: 'A **sacred song** in the Book of Psalms; the **prayer book** of Jews and Christians, prayed **in full** in monastic and parish **tradition**.',
  },
  {
    id: 'epistle',
    term: 'Epistle',
    definition: 'A **letter** — usually from an **apostle** or **apostolic** companion — to a church or person; read in **liturgy** after the **Acts** lesson pattern.',
  },
  {
    id: 'canon',
    term: 'Canon',
    definition: 'The **recognized list** of **Scripture books** the Church **receives** as **divinely inspired** — the Ethiopian Orthodox **canon** is **broader** than many Western lists.',
  },
  {
    id: 'prophecy',
    term: 'Prophecy',
    definition: 'God’s **word** through the **prophets** — **calling** Israel (and the Church) to **faithfulness** and **foretelling** the **Messiah**.',
  },
  {
    id: 'geez',
    term: 'Ge’ez',
    definition: 'Classical **liturgical language** of Ethiopian Orthodox worship; **Scripture** and **hymns** were **transmitted** in Ge’ez alongside **vernacular** preaching.',
  },
]

/** Outbound readers — user confirms edition with parish */
export const scriptureExternalResources = {
  links: [
    {
      id: 'biblegateway',
      label: 'Bible Gateway',
      href: 'https://www.biblegateway.com/',
      note: 'Widely used **searchable** Bible; **check book list** against your **parish** edition.',
    },
    {
      id: 'fliphtml5',
      label: 'Full Bible reader (FlipHTML5)',
      href: 'https://online.fliphtml5.com/ekjsx/blhe/',
      note: 'External reader **linked** from prior OrthodoxPath material — **verify** canon and **translation** locally.',
    },
  ],
}

export const scriptureCrosslinks = [
  { to: paths.learn.liturgy, title: 'Liturgy', blurb: 'How Scripture **sounds** in **Qidase**.' },
  { to: paths.learn.churchYear, title: 'Church Year', blurb: 'Feasts and fasts that **frame** the Word.' },
  { to: paths.practice.prayer, title: 'Prayer practice', blurb: 'Home prayer with **Scripture**.' },
  { to: paths.startHere, title: 'Start Here', blurb: 'Orientation for **newcomers**.' },
]
