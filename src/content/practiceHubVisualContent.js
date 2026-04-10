/**
 * Practice hub — single-page visual hub (copy; routes from paths).
 */

import { paths } from '../constants/paths.js'

export const practiceHubVisualMeta = {
  title: 'Practice',
  eyebrow: 'Ethiopian Orthodox Tewahedo Church',
}

export const practiceHubVisualHero = {
  headline: 'Practice the faith with prayer, chant, rhythm, and language',
  subtitle:
    '**Small** daily steps — **reverent**, **patient**, **parish-guided**. Full liturgical texts and recordings stay in **approved books** and **linked sources**.',
  ctaPrimary: { label: 'Start practicing', href: '#practice-hub-spotlight' },
  ctaSecondary: { label: 'Explore by category', href: '#practice-hub-gateways' },
}

/** Labels for mini stat row (values come from usePracticeHubStats) */
export const practiceHubHeroStatLabels = {
  prayer: 'Prayer',
  mezmur: 'Mezmur & Werb',
  instruments: 'Instruments',
  language: 'Language',
}

export const practiceHubGateways = [
  {
    id: 'prayer',
    to: paths.practice.prayer,
    title: 'Prayer Practice',
    subtitle: 'Tselot · ጸሎት',
    blurb: 'Daily prayer in order — **beginner** or **full** routines with texts on the prayer page.',
    cta: 'Open prayer',
    tone: 'rgba(100, 149, 180, 0.35)',
    icon: 'prayer',
  },
  {
    id: 'chants',
    to: paths.practice.chants,
    title: 'Mezmur & Werb',
    subtitle: 'Sacred hymn & poetry',
    blurb: 'Browse, **listen**, loop lines, and rehearse with the **chant library**.',
    cta: 'Browse chants',
    tone: 'rgba(212, 166, 60, 0.32)',
    icon: 'chant',
  },
  {
    id: 'instruments',
    to: paths.practice.instruments,
    title: 'Instrument Practice',
    subtitle: 'Liturgical rhythm',
    blurb: '**Listen** in church first; gentle **habits** at home under **direction**.',
    cta: 'Learn context',
    tone: 'rgba(139, 90, 43, 0.3)',
    icon: 'drum',
  },
  {
    id: 'language',
    to: paths.practice.language.index,
    title: 'Language & Pronunciation',
    subtitle: 'Fidel · sound',
    blurb: 'Letters, **writing**, and **sounds** for prayer and **hymnody**.',
    cta: 'Open language',
    tone: 'rgba(120, 100, 160, 0.28)',
    icon: 'language',
  },
]

export const practiceHubMap = {
  title: 'How practice comes together',
  lead: 'Four gifts **meet** in **Christ**: the Word **prayed**, **sung**, **rhythmed**, and **named** in **Ge’ez** and your **mother tongue**.',
  centerLabel: 'Christ',
  nodes: [
    { id: 'prayer', label: 'Prayer', angle: -90 },
    { id: 'chants', label: 'Mezmur', angle: 0 },
    { id: 'instruments', label: 'Rhythm', angle: 90 },
    { id: 'language', label: 'Language', angle: 180 },
  ],
}

/** In-page scroll targets (section ids) */
export const practiceHubGoals = {
  title: 'Start by your goal',
  lead: 'Jump to the **section** that fits — you can wander the rest later.',
  filters: [
    { id: 'beginner', label: 'Beginner', hash: '#practice-hub-prayer' },
    { id: 'daily', label: 'Daily prayer', hash: '#practice-hub-prayer' },
    { id: 'mezmur', label: 'Learn mezmur', hash: '#practice-hub-chants' },
    { id: 'feast', label: 'Feast preparation', hash: '#practice-hub-season' },
    { id: 'instrument', label: 'Instrument basics', hash: '#practice-hub-instruments' },
    { id: 'pronunciation', label: 'Pronunciation', hash: '#practice-hub-language' },
  ],
}

/** Spotlight card — time + tag rotate by weekday in component or use first entry */
export const practiceHubSpotlightPresets = [
  {
    timeEstimate: 'About 8 min',
    seasonTag: 'Lord’s Prayer',
    title: 'Ground the day in Christ’s prayer',
    body: '**One** Our Father with **attention** often **unlocks** the rest of the hours.',
    cta: 'Begin now',
    to: paths.practice.prayer,
    hash: '#prayer-lords',
  },
  {
    timeEstimate: 'About 12 min',
    seasonTag: 'Morning thanks',
    title: 'Praise before you ask',
    body: '**Thanksgiving** first — then bring **needs** to the **Father**.',
    to: paths.practice.prayer,
    hash: '#daily-prayer',
  },
  {
    timeEstimate: 'About 15 min',
    seasonTag: 'Mezmur',
    title: 'Listen, then one line',
    body: '**Hear** a trusted recording; **repeat** **one** phrase **slowly**.',
    to: paths.practice.chants,
    hash: '#chant-practice',
  },
  {
    timeEstimate: 'About 10 min',
    seasonTag: 'Fidel',
    title: 'Three letters, three sounds',
    body: '**Trace** and **say** a **row** from one consonant family.',
    to: paths.practice.language.alphabet,
    hash: '#alphabet-starter-heading',
  },
  {
    timeEstimate: 'About 6 min',
    seasonTag: 'Evening',
    title: 'Close with Mary’s song',
    body: 'Let **Magnificat** **memory** end the day in **hope**.',
    to: paths.practice.prayer,
    hash: '#prayer-evening',
  },
  {
    timeEstimate: 'About 20 min',
    seasonTag: 'Chant workspace',
    title: 'Loop a short line',
    body: 'Use the **workspace** to **mark** timestamps and **repeat** with **care**.',
    to: paths.practice.chants,
    hash: '#chant-practice-workspace',
  },
  {
    timeEstimate: 'About 5 min',
    seasonTag: 'Silence',
    title: 'One verse in silence',
    body: 'Carry **one** line of **Scripture** or **hymn** without **noise**.',
    to: paths.practice.prayer,
    hash: '#daily-prayer-beginner',
  },
]

export const practiceHubTimeBlocks = {
  title: 'Practice by time',
  lead: '**Bless** the minutes you **have** — **depth** over **duration**.',
  blocks: [
    {
      id: '5',
      minutes: 5,
      title: '5 minutes',
      blurb: 'Sign of cross, **Lord’s Prayer**, **one** praise.',
      to: paths.practice.prayer,
      hash: '#daily-prayer-beginner',
    },
    {
      id: '10',
      minutes: 10,
      title: '10 minutes',
      blurb: '**Morning** or **evening** block from **daily prayer**.',
      to: paths.practice.prayer,
      hash: '#daily-prayer',
    },
    {
      id: '20',
      minutes: 20,
      title: '20 minutes',
      blurb: '**Chant** workspace **loops** or **language** + **instrument** listening.',
      to: paths.practice.chants,
      hash: '#chant-practice-workspace',
    },
  ],
}

export const practiceHubSeasonCopy = {
  title: 'Practice for the season',
  lead: 'Let **Church time** **shape** what you **pray** and **sing** — **parish** confirms **fasts** and **feasts**.',
  reflection: '**One** quiet line in a notebook: what did **God** give you to **carry** this week?',
}

export const practiceHubProgressCopy = {
  title: 'Your progress here',
  lead: '**Local** counts on **this device** — **gentle** encouragement, not **competition**.',
  daysLabel: 'Days practiced',
  prayersLabel: 'Prayers completed',
  chantsLabel: 'Chants reviewed',
  lettersLabel: 'Letters learned',
  continueLabel: 'Continue where you left off',
  continueHint: 'Opens the chant library if you have a recent entry.',
}

export const practiceHubFooterCta = {
  headline: 'Practice a little every day',
  sub: '**Consistency** forms the heart more than **marathon** sessions once in a while.',
  startToday: { label: 'Start today', href: '#practice-hub-spotlight' },
  calendar: { label: 'Explore calendar', to: paths.calendar.index },
  startHere: { label: 'Go to Start Here', to: paths.startHere },
}

export const practiceHubFooterNote =
  '**Rubrics**, **recordings**, and **fasting rules** belong to **parish** guidance and **approved** sources.'
