/**
 * Scaffold / demo data for Practice hub sections — swap for CMS or API later.
 */

export const mezmurPlaceholderFilters = [
  { id: 'all', label: 'All' },
  { id: 'feast', label: 'Feast' },
  { id: 'lent', label: 'Fast' },
  { id: 'beginner', label: 'Gentle' },
]

export const mezmurFeaturedSlides = [
  {
    id: 'slide-1',
    kicker: 'Featured for this feast',
    title: 'Placeholder chant — feast tone',
    tag: 'Illustrative',
    tone: 'linear-gradient(135deg, rgba(212,166,60,0.25), rgba(30,58,95,0.12))',
    imageKey: 'practice.mezmurSlideFeast',
  },
  {
    id: 'slide-2',
    kicker: 'Seasonal',
    title: 'Placeholder — Great Lent (example)',
    tag: 'Season',
    tone: 'linear-gradient(135deg, rgba(100,149,180,0.2), rgba(212,166,60,0.1))',
    imageKey: 'practice.mezmurSlideLent',
  },
  {
    id: 'slide-3',
    kicker: 'Parish listening',
    title: 'Hear before you sing',
    tag: 'Listening',
    tone: 'linear-gradient(135deg, rgba(139,90,43,0.18), rgba(212,166,60,0.08))',
    imageKey: 'practice.mezmurSlideListen',
  },
]

export const mezmurPlaceholderCards = [
  {
    id: 'c1',
    title: 'Sample mezmur A',
    tag: 'Werb',
    duration: '~4 min',
    tone: 'rgba(212,166,60,0.2)',
    imageKey: 'practice.mezmurSampleA',
  },
  {
    id: 'c2',
    title: 'Sample mezmur B',
    tag: 'Mezmur',
    duration: '~6 min',
    tone: 'rgba(100,149,180,0.18)',
    imageKey: 'practice.mezmurSampleB',
  },
  {
    id: 'c3',
    title: 'Sample mezmur C',
    tag: 'Feast',
    duration: '~5 min',
    tone: 'rgba(120,100,160,0.15)',
    imageKey: 'practice.mezmurSampleC',
  },
  {
    id: 'c4',
    title: 'Sample mezmur D',
    tag: 'Lent',
    duration: '~7 min',
    tone: 'rgba(139,90,43,0.16)',
    imageKey: 'practice.mezmurSampleD',
  },
]

export const instrumentPracticePlaceholders = {
  intro: {
    title: 'Instrument practice',
    lead:
      '**Orientation** only — **roles** in the **sanctuary** belong to your **priest** and **teachers**.',
  },
  demoCards: [
    {
      id: 'listen',
      name: 'Listening first',
      blurb: '**Sit** in the **nave** or follow a **trusted** recording — **notice** when **drums** enter and how they **support** chant.',
      diagramKind: 'listen',
    },
  ],
  posture: {
    title: 'Posture & holding',
    blurb:
      '**Relaxed** shoulders, **soft** grip — **liturgical** players **serve** the **rite**, not the **crowd**.',
  },
  rhythmExercises: [
    {
      id: 'r1',
      title: 'Pulse on a book',
      hint: '**Tap** a **slow** pulse — **match** the **chanter**, not your **own** show.',
    },
    {
      id: 'r2',
      title: 'Rest on the downbeat',
      hint: 'Leave **space** for **clergy** and **responses**.',
    },
  ],
  closingNote:
    '**Remember.** **Volume** and **timing** follow **clergy** and **chanters** — **never** the **ego** of the **player**.',
  videoAriaLabel: 'Video lesson placeholder',
}

export const languagePracticePlaceholders = {
  flashcards: [
    { q: 'ሀ', a: 'Ha (1st order)' },
    { q: 'ለ', a: 'La (1st order)' },
    { q: 'መ', a: 'Ma (1st order)' },
  ],
  soundOfDay: {
    headline: 'Sound of the day',
    example: 'ሰ',
    ipa: 'sa',
    ipaNote: '(1st order, illustrative)',
  },
  progressLabel: 'Sample progress',
  progressPercent: 35,
  videoAriaLabel: 'Mouth shape video placeholder',
}
