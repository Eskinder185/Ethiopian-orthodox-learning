/**
 * Church Year — visual guide (orientation; dates & rules from parish & Calendar).
 */

import { paths } from '../constants/paths.js'

export const churchYearMeta = {
  category: 'Learn · Church Year',
  title: 'The Church Year',
}

export const churchYearHero = {
  eyebrow: 'Ethiopian Orthodox Tewahedo Church',
  intro:
    'The Church does not float in **private time** alone. She **sanctifies** the year with **fasts**, **feasts**, and **seasons** that rehearse the Gospel — birth, manifestation, suffering, **resurrection**, and the **saints**. This page shows the **shape** of that year; **exact dates** live under **Calendar** with your **priest**.',
  ctaRhythm: 'See the yearly rhythm',
  ctaSeasons: 'Explore seasons and feasts',
  anchorWheel: '#church-year-wheel',
  anchorSeasons: '#church-year-season-cards',
}

export const churchYearSourceNote =
  '**Meaning** here; **dates** and **fasting rules** in **Calendar** and **parish** — never guess about health or obedience.'

/** Segments for wheel (simplified teaching wheel — not a substitute for a printed ordo). */
export const churchYearWheelSegments = [
  {
    id: 'nativity',
    shortLabel: 'Nativity',
    label: 'Nativity preparation & feast',
    explanation:
      'Advent fast (**Tsome Nehmet**) and the **feast** of the Lord’s birth — light breaking into winter’s watch.',
    spiritualMeaning: 'God **enters** creation; we learn **waiting** and **joy**.',
    relatedPractice: 'Extra prayer, almsgiving, **mezmur** of the feast.',
    guideLink: paths.calendar.seasons,
    guideLabel: 'Seasonal guides',
    tone: 'rgba(212, 166, 60, 0.45)',
  },
  {
    id: 'theophany',
    shortLabel: 'Theophany',
    label: 'Theophany (Timkat)',
    explanation:
      'Baptism of the Lord — blessing of water, procession, **manifestation** of the Trinity.',
    spiritualMeaning: 'Our own **baptism** remembered; creation **blessed**.',
    relatedPractice: 'Blessed water, hymns of light, parish procession as local custom allows.',
    guideLink: paths.calendar.feastsHolyDays,
    guideLabel: 'Feasts & holy days',
    tone: 'rgba(100, 149, 180, 0.5)',
  },
  {
    id: 'pre-lent',
    shortLabel: 'Before Lent',
    label: 'Green / preparation',
    explanation:
      'Ordinary rhythm of **Wednesday & Friday** fasts; preparation of heart before **Great Lent**.',
    spiritualMeaning: 'Steady **discipline** between great seasons.',
    relatedPractice: 'Confession, simpler food, **liturgy** each Sunday.',
    guideLink: paths.calendar.fasting,
    guideLabel: 'Fasting seasons',
    tone: 'rgba(90, 120, 85, 0.35)',
  },
  {
    id: 'great-lent',
    shortLabel: 'Great Lent',
    label: 'Great Lent (Tsome Tsom)',
    explanation:
      'The Church’s **spring** of repentance — extra services, **prostrations**, charity.',
    spiritualMeaning: '**Dying** to sin to rise at **Pascha**.',
    relatedPractice: 'Stricter fast, **Qidase**, Gospel readings, almsgiving.',
    guideLink: paths.calendar.seasons,
    guideLabel: 'Seasonal guides',
    tone: 'rgba(139, 90, 43, 0.45)',
  },
  {
    id: 'holy-week',
    shortLabel: 'Holy Week',
    label: 'Holy Week & Pascha',
    explanation:
      'The Lord’s **passion**, **burial**, and **resurrection** — the heart of the year.',
    spiritualMeaning: '**Pascha** is the **feast of feasts** — new creation.',
    relatedPractice: 'Night vigil, processions as parish directs, **Communion** worthily.',
    guideLink: paths.calendar.feastsHolyDays,
    guideLabel: 'Holy days',
    tone: 'rgba(180, 60, 60, 0.4)',
  },
  {
    id: 'resurrection',
    shortLabel: 'Resurrection',
    label: 'Resurrection season',
    explanation:
      'Bright **fifty days** — joy, **Ascension**, **Pentecost**.',
    spiritualMeaning: 'Christ’s victory **extends** to the Church.',
    relatedPractice: 'White garments at times, **mezmur** of praise, mission.',
    guideLink: paths.learn.liturgy,
    guideLabel: 'Liturgy',
    tone: 'rgba(228, 201, 104, 0.4)',
  },
  {
    id: 'summer-fasts',
    shortLabel: 'Summer fasts',
    label: 'Apostles’ & Dormition',
    explanation:
      '**Apostles’ fast** and **Dormition** fast — memory of saints and the **Mother of God**.',
    spiritualMeaning: '**Mary** as model; **apostolic** zeal.',
    relatedPractice: 'Akathist hymns (as parish), **icons**, pilgrimage locally.',
    guideLink: paths.calendar.fasting,
    guideLabel: 'Fasting',
    tone: 'rgba(120, 100, 160, 0.35)',
  },
  {
    id: 'cross-meskel',
    shortLabel: 'Cross & end',
    label: 'Meskel & year’s turn',
    explanation:
      '**Finding of the Cross**, **New Year** (Enkutatash) — thanksgiving and **renewal**.',
    spiritualMeaning: 'The **Cross** at the center of history.',
    relatedPractice: 'Bonfire customs where allowed, **feast** tables, giving.',
    guideLink: paths.calendar.ethiopianMonths,
    guideLabel: 'Ethiopian months',
    tone: 'rgba(212, 166, 60, 0.35)',
  },
]

export const churchYearFixedMovable = {
  title: 'Fixed and movable feasts',
  lead: 'Some holy days follow the **Ethiopian calendar** each year; others **move** with **Pascha**.',
  fixed: {
    title: 'Fixed (calendar date)',
    body:
      'Many feasts of the Lord and saints fall on **set days** in the **Ethiopian month** — e.g. aspects of **Christmas**, **Timkat**, **Meskel** — so they can be planned on a wall calendar.',
    example: 'Example: a saint’s day on **a fixed date** each ecclesiastical year.',
  },
  movable: {
    title: 'Movable (tied to Pascha)',
    body:
      '**Great Lent**, **Holy Week**, **Pascha**, and Pentecost **shift** because they depend on the **date of Pascha** each year.',
    example: 'Example: **Ascension** is counted from **Pascha**, not a civil holiday.',
  },
}

export const churchYearSeasonCards = [
  {
    id: 'lent',
    title: 'Great Lent',
    meaning: 'The Church’s **spring** of repentance before Pascha.',
    focus: 'Prayer, fasting, almsgiving, forgiveness.',
    habits: 'More frequent **church**, simpler table, **confession**.',
    link: paths.calendar.seasons,
    linkLabel: 'Seasonal guides',
  },
  {
    id: 'pascha',
    title: 'Pascha season',
    meaning: 'Victory of **life** over death — feasting in **Christ**.',
    focus: 'Joy, communion, mission.',
    habits: '**Qidase**, **mezmur**, visiting the sick.',
    link: paths.calendar.feastsHolyDays,
    linkLabel: 'Feasts',
  },
  {
    id: 'dormition',
    title: 'Dormition fast',
    meaning: 'Honoring the **Mother of God** and our own **falling asleep** in hope.',
    focus: 'Humility, **intercession**, purity of heart.',
    habits: 'Paraklesis services where held, **fast** as directed.',
    link: paths.calendar.fasting,
    linkLabel: 'Fasting seasons',
  },
  {
    id: 'ordinary',
    title: 'Between the great days',
    meaning: 'Not “empty” time — **steady** conversion.',
    focus: 'Wednesday & Friday, **daily prayer**, work as **offering**.',
    habits: '**Tselot** at home, **Scripture**, patience.',
    link: paths.practice.prayer,
    linkLabel: 'Prayer practice',
  },
]

export const churchYearShapesLife = [
  { id: 'prayer', title: 'Prayer', blurb: 'Seasons **change** what the Church prays together — you join a **chorus** older than yourself.', icon: 'prayer' },
  { id: 'fasting', title: 'Fasting', blurb: 'Shared **hunger** for God prepares **feasts** and teaches **mercy**.', icon: 'fast' },
  { id: 'liturgy', title: 'Liturgy', blurb: 'The **same** Qidase **colors** Lent, feast, and ordinary Sundays differently.', icon: 'liturgy' },
  { id: 'mezmur', title: 'Mezmur', blurb: 'Hymnody **marks** feasts and fasts — **tunes** carry memory.', icon: 'mezmur' },
  { id: 'feast-prep', title: 'Feast preparation', blurb: 'Eve services, **cleaning** the heart, **forgiveness** — feasts begin **before** the table.', icon: 'feast' },
  { id: 'daily', title: 'Daily practice', blurb: 'Icons, **morning/evening prayer**, and **mercy** turn the **whole** year into discipleship.', icon: 'daily' },
]

export const churchYearTracker = {
  title: 'Your place in the year',
  lead: 'OrthodoxPath will tie this block to **live calendar data** later. For now, use **Calendar → Today** for accurate placement.',
  currentSeason: '— Open **Today** for the current season in your diocese.',
  nextFeast: '— See **Feasts & Holy Days** for upcoming great days.',
  nextFast: '— See **Fasting Seasons** for the next shared fast.',
  actionLabel: 'Open Today in the Church',
  actionTo: paths.calendar.today,
}

export const churchYearSeasonPreviews = [
  {
    id: 'gl',
    name: 'Great Lent',
    tag: 'Season',
    blurb: 'The long walk toward **Pascha** — repentance, **bright sadness**, and mercy.',
    placeholder: true,
  },
  {
    id: 'hw',
    name: 'Holy Week',
    tag: 'Season',
    blurb: 'The Lord’s **entry**, **supper**, **cross**, and **rest** in the tomb.',
    placeholder: true,
  },
  {
    id: 'res',
    name: 'Resurrection season',
    tag: 'Joy',
    blurb: '**Fifty days** of spring — **Ascension**, **Pentecost**, and the Spirit’s **outpouring**.',
    placeholder: true,
  },
  {
    id: 'nat',
    name: 'Nativity cycle',
    tag: 'Feast',
    blurb: '**Advent** longing and **Christmas** joy — God **with us**.',
    placeholder: true,
  },
]

export const churchYearSectionCopy = {
  wheelTitle: 'The year as a circle',
  wheelLead:
    'A **teaching wheel** — not a dated ordo. Tap a **segment** or a **label** below to read a short **meaning**.',
  fixedMovableTitle: 'How feasts move — or stay put',
  seasonsTitle: 'Major seasons & periods',
  seasonsLead: 'Short **orientation** — details under **Calendar** and **Seasonal guides**.',
  shapesTitle: 'How the year shapes life',
  shapesLead: 'Liturgical time is meant to **form** prayer, **body**, and **love**.',
  trackerTitle: 'Current season tracker',
  previewsTitle: 'Seasonal guides (preview)',
  previewsLead: 'Deeper articles will anchor here — for now these cards mark the **roadmap**.',
  crossTitle: 'Navigate Church time',
  crossLead: 'Move from **meaning** to **dates** and **practice**.',
}

export const churchYearCrosslinks = [
  { to: paths.calendar.today, title: 'Today in the Church', blurb: 'Where we are in sacred time.' },
  { to: paths.calendar.feastsHolyDays, title: 'Feasts & Holy Days', blurb: 'Great days of the Lord and saints.' },
  { to: paths.calendar.ethiopianMonths, title: 'Ethiopian months', blurb: 'Names, meaning, and rhythm.' },
  { to: paths.calendar.fasting, title: 'Fasting seasons', blurb: 'Shared discipline and preparation.' },
  { to: paths.learn.liturgy, title: 'Liturgy', blurb: 'Qidase through the seasons.' },
  { to: paths.practice.index, title: 'Practice', blurb: 'Prayer, chant, and habits at home.' },
]
