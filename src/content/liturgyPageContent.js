/**
 * Divine Liturgy (Qidase) — guided introduction page.
 * Summarized from Ethiopian Orthodox practice and The Liturgy of the Ethiopian Church (orientation only).
 */

import { paths } from '../constants/paths.js'

export const liturgyPageMeta = {
  category: 'Learn · Liturgy',
  title: 'The Divine Liturgy (Qidase)',
}

export const liturgySourceBrief =
  'This introduction follows the general shape of the **Qedase** in Ethiopian Orthodox worship and common English liturgy editions. **Parish customs vary** — always obey your priest and local church.'

export const liturgyHero = {
  eyebrow: 'Ethiopian Orthodox Tewahedo Church',
  intro:
    'The **Divine Liturgy** — **Qidase** — is the Church’s chief act of worship: Scripture, prayer, incense, and chant lead to the **holy offering** and, for the prepared faithful, **Holy Communion**. The goal here is not to memorize every word, but to **see the path** and enter with **reverence**.',
  ctaFlow: 'See the flow of the service',
  ctaPrepare: 'How to prepare',
  anchorFlow: '#liturgy-qidase-flow',
  anchorPrepare: '#liturgy-how-to-prepare',
}

/** Major movements in order — beginner-oriented */
export const liturgyFlowStages = [
  {
    id: 'preparation',
    title: 'Preparation',
    explanation:
      'The service opens with **penitence**, **psalms**, and prayers that **prepare** bread, wine, altar, and hearts. Nothing is rushed toward Communion.',
    whatHappens:
      'Psalms, blessings of vessels, **incense**, intercessions, and exhortations — the clergy lead; the people **listen** and **answer** (“Lord, have mercy,” Amen, etc.).',
    listenFor:
      'Calls to **stand**, **give heed**, and **Kyrie**-style responses; the **deacon’s** voice guiding attention.',
    whyMatters:
      'The Church **cleanses** and **gathers** the assembly so the Eucharist is approached **with fear and love**, not carelessness.',
    beginnerNotes:
      'You do not need every phrase. **Stand** when others stand; **listen**; let the rhythm of responses teach you over time.',
  },
  {
    id: 'readings',
    title: 'Readings',
    explanation:
      'The **Word of God** is proclaimed — Old and New Testament readings according to the day and season, leading toward the **Gospel**.',
    whatHappens:
      'Readers and clergy proclaim Scripture; the **Gospel** is honored with **incense** and **reverence**; the book asks for **silence and awe** at the Gospel.',
    listenFor:
      'The invitation to **hearken** to the Gospel; acclamations; the solemn tone around the **holy book**.',
    whyMatters:
      'Faith comes by **hearing**. The liturgy grounds the offering in what **God has spoken** and **Christ has fulfilled**.',
    beginnerNotes:
      'Treat readings as **Christ speaking** to the Church — not background noise. Follow local custom for **standing**.',
  },
  {
    id: 'responses-prayer',
    title: 'Responses and prayer',
    explanation:
      'After the Word, the faithful **confess the Creed**, seek **peace**, and enter deeper intercession — the bridge toward the holy mysteries.',
    whatHappens:
      'The **Creed**; prayers for **peace** and the **holy salutation** (often **men with men**, **women with women**, as directed); litanies and dialogues led by deacon and priest.',
    listenFor:
      '“Let us stand well,” **litanies**, and calls to **lift up your hearts** — dialogues between celebrant and people.',
    whyMatters:
      'You cannot approach the **altar of reconciliation** while clinging to hatred. The Church **binds** word, peace, and offering together.',
    beginnerNotes:
      'Join what you can; **reverence** counts as much as vocabulary. Watch **neighbors** for posture if you are unsure.',
  },
  {
    id: 'offering',
    title: 'Holy offering',
    explanation:
      'The **Anaphora** is the Eucharistic prayer: thanksgiving, **institution narrative**, **epiclesis** (calling of the **Holy Spirit**), and intercessions.',
    whatHappens:
      'The priest prays; deacons give **litanies**; the people answer (“It is right, it is just,” Amen). The Church asks the Father to make the gifts **Christ’s Body and Blood**.',
    listenFor:
      'The **sanctus**-like praise and the solemn **epiclesis**; **“Worship the Lord with fear”**-type exclamations.',
    whyMatters:
      'This is the **heart** of Qidase — not a symbol alone, but the **holy mystery** of Christ’s **true presence** for the life of the world.',
    beginnerNotes:
      '**Silence** phones and chatter; **stand** in awe; do not treat this as ordinary time.',
  },
  {
    id: 'communion',
    title: 'Communion',
    explanation:
      'The **Body and Blood** are distributed to those **prepared** and **permitted** — **baptized**, **fasting** as directed, **confession** when required, and **blessed** by pastoral care.',
    whatHappens:
      'Distribution in **order** (by rank, then commonly men, then women, as the book and parish direct); prayers of **thanksgiving** follow reception.',
    listenFor:
      'Warnings before approaching; prayers of **thanksgiving**; the quiet **discipline** around the chalice.',
    whyMatters:
      'Holy Communion is **life** (John 6) — **not** casual food. Unworthy reception is warned against (cf. 1 Corinthians 11).',
    beginnerNotes:
      '**Guests** and **inquirers**: remain in **prayerful respect** if not communing. **Never** approach without Church preparation and **priestly** blessing.',
  },
  {
    id: 'dismissal',
    title: 'Dismissal',
    explanation:
      'The liturgy concludes with **blessing** and **dismissal** — the whole service is **one** ascent; leaving early without grave need **breaks** that wholeness.',
    whatHappens:
      'Final prayers, blessing, and sending forth in peace; the faithful leave **quietly** and **gratefully**.',
    listenFor:
      'The **final blessing**; last **Amens** and hymns as directed.',
    whyMatters:
      'The **end** of the liturgy seals what began at the door: you came as pilgrim and leave **marked** by prayer.',
    beginnerNotes:
      'Stay through **blessing** unless **urgent** need; receive the dismissal with **gratitude**.',
  },
]

export const liturgyWhatToNotice = [
  {
    id: 'incense',
    title: 'Incense',
    blurb:
      '**Prayer ascending** — honor to the altar, Gospel, and holy things. Let scent call your **attention** back to God.',
    icon: 'incense',
  },
  {
    id: 'chant',
    title: 'Chant',
    blurb:
      '**Mezmur** and liturgical tones carry Scripture and praise. You may not know every **Ge‘ez** phrase — follow the **heart** of the prayer.',
    icon: 'chant',
  },
  {
    id: 'readings',
    title: 'Readings',
    blurb:
      '**Scripture** is heard, not skimmed. **Silence** at the Gospel is especially **holy**.',
    icon: 'readings',
  },
  {
    id: 'priestly',
    title: 'Priestly actions',
    blurb:
      'The priest **intercedes**, **blesses**, and offers according to ancient pattern. Watch with **respect**, not curiosity.',
    icon: 'priest',
  },
  {
    id: 'responses',
    title: 'Congregational responses',
    blurb:
      'Your **Amen** joins the **one Body**. Answer **clearly** when the people respond — you are part of the **choir of the faithful**.',
    icon: 'responses',
  },
  {
    id: 'reverence',
    title: 'Reverence and movement',
    blurb:
      '**Standing**, **bowing**, **prostrations** (as able), and **stillness** express **fear of God** and **love**.',
    icon: 'reverence',
  },
]

export const liturgyAudioPrep = [
  {
    id: 'chant',
    tag: 'Chant',
    title: 'Short chant excerpt',
    body: 'A brief **mezmur** or liturgical phrase to **tune your ear** before Sunday — audio will be linked when curated with parish guidance.',
  },
  {
    id: 'response',
    tag: 'Response',
    title: 'Liturgical response',
    body: 'Common **people’s replies** (“Lord, have mercy,” **Amen**, etc.) for gentle practice at home — placeholder until recordings are approved.',
  },
  {
    id: 'ambient',
    tag: 'Preparation',
    title: 'Quiet before worship',
    body: '**Silence**, **Psalms**, or **Lord’s Prayer** at home — preparing the heart matters as much as **arriving on time**.',
  },
]

export const liturgyBeginnerGuide = {
  title: 'First-time visitors & learners',
  lead: 'God welcomes a **quiet, honest heart**. These notes are **general** — your **parish** teaches the details.',
  whatToExpect: [
    'A **long**, **unhurried** service centered on **Scripture** and **Eucharist** — not a short sermon-only gathering.',
    '**Ge‘ez** and **Amharic** (and local languages) woven together; understanding grows **gradually**.',
    '**Standing** much of the time; **shoes off** in church; **men** and **women** often **separate sides** (confirm locally).',
  ],
  howToFollow: [
    '**Stand** and **sit** (if any) as the **congregation** does; when unsure, **observe** calmly.',
    'Keep **silence** in the nave; save conversation for **outside** or parish hall.',
    'At the **Gospel**, **silence** and **awe** — follow the **deacon** and **priest** for bows and responses.',
  ],
  commonActions: [
    '**Sign of the cross** (if that is your custom) when entering or at blessings — as parish teaches.',
    '**Bow** or **prostrate** when others do, **as you are able**.',
    '**Exchange peace** only **as the Church directs** — often **orderly** and **same gender**.',
  ],
  reminders: [
    '**Do not** approach **Holy Communion** without **Orthodox baptism/chrismation** and **pastoral** preparation.',
    'Ask a **priest** or **trusted member** **after** the service when appropriate — not during prayer.',
    'This site **does not replace** your **bishop**, **priest**, or **approved** liturgy books.',
  ],
}

export const liturgyGlossary = [
  { term: 'Qidase', def: 'The **Divine Liturgy** — the holy **Eucharistic** service; thanksgiving and offering.' },
  { term: 'Mezmur', def: 'Sacred **hymn**; hymnody in worship and devotion.' },
  { term: 'Ge‘ez', def: 'Classical **liturgical language** of Ethiopian Orthodox prayer and chant.' },
  { term: 'Deacon', def: 'Ordained **servant** who leads responses, litanies, and assists at the altar.' },
  { term: 'Sanctuary', def: 'The **holy** area around the **altar** — treated with **awe** and **reverence**.' },
  { term: 'Incense', def: '**Prayer** and **honor** rising to God; marks **sacred** moments.' },
]

export const liturgySectionCopy = {
  flowTitle: 'The flow of the Qidase',
  flowLead:
    'Six movements below follow the **general arc** of Sunday worship — from preparation to dismissal. Your parish may add **feasts**, **saints**, or local customs.',
  noticeTitle: 'What to notice',
  noticeLead:
    'Let **senses** and **posture** teach you when words are still new — incense, sound, Scripture, and stillness work together.',
  audioTitle: 'Listen and prepare',
  audioLead:
    'Placeholders for **audio** that supports reverent listening — to be curated with **parish** guidance.',
  glossaryTitle: 'Words you will hear',
  crossTitle: 'Continue learning',
  crossLead: 'Prayer, chant, sacred time, and **today** in the Church — next steps on OrthodoxPath.',
}

export const liturgyCrosslinks = [
  { to: paths.practice.prayer, title: 'Prayer practice', blurb: 'Daily habits that support liturgical life.' },
  { to: paths.practice.chants, title: 'Mezmur & chant', blurb: 'Sacred hymnody — orientation and practice.' },
  { to: paths.learn.churchYear, title: 'Church year', blurb: 'Feasts, fasts, and the rhythm of grace.' },
  { to: paths.calendar.today, title: 'Today in the Church', blurb: 'The day’s place in sacred time.' },
]
