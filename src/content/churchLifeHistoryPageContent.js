/**
 * Church Life & History — guided journey (orientation; confirm with parish & historians).
 */

import { paths } from '../constants/paths.js'

export const churchLifeMeta = {
  category: 'Learn · Church Life & History',
  title: 'Church Life & History',
}

export const churchLifeHero = {
  eyebrow: 'Ethiopian Orthodox Tewahedo Church',
  intro:
    'Christianity in Ethiopia is **ancient**, **liturgical**, and **deeply communal**. This page sketches **milestones**, **places**, and **figures** that shaped the Church — then shows how that past still **lives** in worship, fasting, and parish life today.',
  ctaTimeline: 'Explore the timeline',
  ctaPlaces: 'See the places and saints',
  anchorTimeline: '#church-life-timeline',
  anchorPlaces: '#church-life-places',
}

export const churchLifeSourceNote =
  'Summaries here are for **beginners**; dates and emphases follow **church memory** and **scholarship** in different ways. **Humility** before sources and your **priest** is part of reading history well.'

/** Major milestones — expandable detail optional */
export const churchLifeTimeline = [
  {
    id: 'aksum',
    title: 'Christian roots at Aksum',
    year: '4th century',
    explanation:
      'The Kingdom of **Aksum** became a major center of Christianity; **Frumentius (Abba Salama)** helped organize the Church and is remembered as a foundational evangelizer.',
    whyMatters:
      'Ethiopian Orthodox identity is tied to **antiquity** and **continuity** with this early Christian civilization — not a recent import.',
    detail:
      'Scholars place the Christianization of the court in the **4th century**; Ethiopian tradition honors **Saint Frumentius** in liturgical memory. Compare accounts in church books and academic histories.',
  },
  {
    id: 'nine-saints',
    title: 'Nine Saints & monastic flowering',
    year: 'Late antiquity',
    explanation:
      'Monastic teachers from the **Syriac/Greek** world helped deepen **monastic life**, **translation**, and **education** — often remembered as the **Nine Saints**.',
    whyMatters:
      'Monasticism became a **carrier** of Scripture, chant, and theology for centuries.',
    detail:
      'Hagiography and modern scholarship do not always align on every detail; treat stories as **sacred memory** and consult **serious** histories for debate.',
  },
  {
    id: 'geez',
    title: 'Ge‘ez & liturgical formation',
    year: 'First millennium',
    explanation:
      '**Ge‘ez** became the classical language of prayer and manuscript culture; liturgy, poetry, and law intertwined.',
    whyMatters:
      'Worship today still breathes this **Ge‘ez** heritage — even when people pray in **Amharic** or other languages.',
    detail:
      'Manuscript art, chant notation, and service books belong to **living tradition**; many treasures are studied by museums and church institutions.',
  },
  {
    id: 'lalibela',
    title: 'Rock churches & Christian civilization',
    year: 'Medieval',
    explanation:
      'The **rock-hewn churches of Lalibela** symbolize faith carved into stone — a famous chapter of Ethiopian Christian art and pilgrimage.',
    whyMatters:
      'Sacred architecture connects believers to **memory**, **beauty**, and **pilgrimage**.',
    detail:
      'Lalibela remains a major **spiritual** and **cultural** site; local church life continues around these shrines.',
  },
  {
    id: 'isolation',
    title: 'Endurance through change',
    year: '7th century onward',
    explanation:
      'After early Islamic expansion, Ethiopia was often **isolated** from many Mediterranean churches — yet the faith **persisted** and developed distinct patterns.',
    whyMatters:
      'The Church’s story is not only triumph but **perseverance** — a lesson for humility today.',
    detail:
      'Political history is complex; avoid reducing centuries to slogans. Read **carefully** and **charitably**.',
  },
  {
    id: 'tewahedo',
    title: 'Tewahedo confession',
    year: 'Patristic & conciliar era',
    explanation:
      'Ethiopia shares **Oriental Orthodox** Christology — **one nature** of the Word incarnate — with sister ancient churches.',
    whyMatters:
      'Doctrine shapes **liturgy**, **icons**, and **communion** boundaries — not trivia for arguments online.',
    detail:
      'Exact wording belongs to **synods** and **teaching**; ask your priest for nuance.',
  },
  {
    id: 'today',
    title: 'Church in the modern world',
    year: '20th–21st century',
    explanation:
      'Today the Church spans **Ethiopia**, the **diaspora**, and global parishes — still centered on **Qidase**, **fasts**, and **feasts**.',
    whyMatters:
      'History is not a museum: it is the **same baptism** received now.',
    detail:
      'Parish customs vary by **place** and **bishop**; **obedience** and **love** come first.',
  },
]

/** Map pins — x/y in viewBox 0–100 for placement on stylized map */
export const churchLifePlaces = [
  {
    id: 'axum',
    name: 'Aksum',
    x: 52,
    y: 22,
    summary:
      'Ancient capital region; **Church of St. Mary of Zion** and the memory of early Christian kingship.',
  },
  {
    id: 'lalibela',
    name: 'Lalibela',
    x: 48,
    y: 42,
    summary:
      'Rock-hewn churches; major **pilgrimage** and symbol of Ethiopian Christian **architecture**.',
  },
  {
    id: 'tana',
    name: 'Lake Tana monasteries',
    x: 35,
    y: 38,
    summary:
      'Islands and shores with historic **monasteries** — manuscript and spiritual centers.',
  },
  {
    id: 'gondar',
    name: 'Gondar',
    x: 40,
    y: 32,
    summary:
      'Imperial-era Christian culture; churches and castles echo **recent centuries** of church life.',
  },
  {
    id: 'debre-damo',
    name: 'Debre Damo',
    x: 58,
    y: 18,
    summary:
      'Ancient monastery on a **cliff** — associated with **Abuna Aregawi**; men-only ascent (tradition).',
  },
  {
    id: 'addis',
    name: 'Addis Ababa',
    x: 55,
    y: 62,
    summary:
      'Modern **patriarchal** see and countless **parishes** — diaspora communities trace back to these roots.',
  },
]

export const churchLifeSaints = [
  {
    id: 'frumentius',
    name: 'Saint Frumentius',
    epithet: 'Abba Salama · evangelizer',
    blurb:
      'Remembered for helping organize the early Church at **Aksum** and nurturing Christian life at court.',
    significance: 'Patron of the Church’s **memory of conversion** and **order**.',
    linkTo: paths.learn.churchYear,
    linkLabel: 'Church Year',
  },
  {
    id: 'nine',
    name: 'The Nine Saints',
    epithet: 'Monastic teachers',
    blurb:
      'Figures associated with **monastic expansion**, **translation**, and **schools** in Ethiopian memory.',
    significance: 'Symbol of **learning** and **ascetic life** in Christian Ethiopia.',
    linkTo: paths.learn.churchYear,
    linkLabel: 'Feasts & seasons',
  },
  {
    id: 'lalibela-king',
    name: 'Saint Lalibela',
    epithet: 'King & church-builder',
    blurb:
      'Hagiography links him to the **rock churches** that bear his name — faith expressed in stone.',
    significance: 'Pilgrimage and **sacred architecture** as praise.',
    linkTo: paths.calendar.feastsHolyDays,
    linkLabel: 'Holy days',
  },
  {
    id: 'tekle',
    name: 'Saint Tekle Haymanot',
    epithet: 'Monastic father',
    blurb:
      'A towering figure in Ethiopian **monastic spirituality** and renewal movements.',
    significance: 'Influence on **discipline**, **prayer**, and **zeal**.',
    linkTo: paths.learn.churchYear,
    linkLabel: 'Church Year',
  },
  {
    id: 'ewostatewos',
    name: 'Ewostatewos',
    epithet: 'Reformer & ascetic',
    blurb:
      'Associated with **Sabbath** observance debates and **strict ascetic** circles in church history.',
    significance: 'Shows how **discipline** and **debate** shaped community life.',
    linkTo: paths.learn.churchYear,
    linkLabel: 'Traditions',
  },
  {
    id: 'mary',
    name: 'Theotokos · Saint Mary',
    epithet: 'Mother of God',
    blurb:
      '**St. Mary of Zion** at Aksum and countless feasts honor her in Ethiopian devotion.',
    significance: 'Central in **liturgy**, **icons**, and **feasts**.',
    linkTo: paths.calendar.feastsHolyDays,
    linkLabel: 'Feasts',
  },
]

export const churchLifeToday = [
  {
    id: 'liturgy',
    title: 'Divine Liturgy (Qidase)',
    blurb: 'The **Eucharist** and **Word** remain the weekly heart of life — not entertainment but **encounter**.',
    icon: 'liturgy',
  },
  {
    id: 'fasting',
    title: 'Fasting seasons',
    blurb: 'Wednesdays, Fridays, and **great fasts** shape appetite and attention toward **God**.',
    icon: 'fast',
  },
  {
    id: 'feasts',
    title: 'Feasts & processions',
    blurb: 'Christ, Mary, and saints are **celebrated** in public joy — faith carried in **song** and **movement**.',
    icon: 'feast',
  },
  {
    id: 'parish',
    title: 'Parish & priest',
    blurb: 'Local **community** under a **bishop** — where sacraments, counsel, and mercy are **lived**.',
    icon: 'parish',
  },
  {
    id: 'prayer',
    title: 'Daily prayer rhythm',
    blurb: 'Morning and evening prayer, **mezmur**, and **home icons** extend the liturgy into the week.',
    icon: 'prayer',
  },
  {
    id: 'community',
    title: 'Reverence & belonging',
    blurb: 'Standing together, **netela**, **incense**, and silence train the **heart** toward Christ.',
    icon: 'community',
  },
]

export const churchLifePathSteps = [
  { label: 'Origins', to: '#church-life-timeline', hint: 'Aksum & early Church' },
  { label: 'Saints', to: '#church-life-saints', hint: 'Figures & memory' },
  { label: 'Worship', to: paths.learn.liturgy, hint: 'Qidase', external: false },
  { label: 'Monastic tradition', to: '#timeline-nine-saints', hint: 'Nine Saints & monks' },
  { label: 'Church life today', to: '#church-life-today', hint: 'How faith looks now' },
]

export const churchLifeSectionCopy = {
  timelineTitle: 'Milestones along the way',
  timelineLead: 'A **sparse** timeline for orientation — not a full chronicle. Expand a row for a little more context.',
  mapTitle: 'Sacred geography',
  mapLead:
    'Places where **memory**, **pilgrimage**, and **community** concentrate — tap a marker to read a short note.',
  saintsTitle: 'Saints and spiritual figures',
  saintsLead: 'Portraits are **placeholders**; veneration belongs to **Christ** in His saints.',
  todayTitle: 'Church life today',
  todayLead: 'History becomes **habit**: how yesterday’s faith shows up in **tomorrow’s** repentance and joy.',
  pathTitle: 'A simple path for learners',
  pathLead: 'Walk from **origins** to **today** — then open **Learn**, **Calendar**, and **Practice** on OrthodoxPath.',
  crossTitle: 'Continue your journey',
  crossLead: 'Deepen **worship**, **time**, and **habits** with reverence.',
}

export const churchLifeCrosslinks = [
  { to: paths.learn.liturgy, title: 'Liturgy (Qidase)', blurb: 'Structure and reverence in worship.' },
  { to: paths.learn.churchYear, title: 'Church Year', blurb: 'Feasts, fasts, and sacred time.' },
  { to: paths.calendar.index, title: 'Calendar', blurb: 'Today, seasons, and holy days.' },
  { to: paths.practice.index, title: 'Practice', blurb: 'Prayer, chant, and discipline at home.' },
  { to: paths.startHere, title: 'Start here', blurb: 'A gentle on-ramp for newcomers.' },
]
