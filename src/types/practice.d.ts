/**
 * Practice hub & section content shapes.
 *
 * From JavaScript, reference in JSDoc, for example:
 *   @type {import('./types/practice').PracticeCategory}
 *   @param {import('./types/practice').PrayerStep} step
 */

export type PracticeCategory = {
  id: string
  title: string
  description: string
  icon: string
  href: string
}

export type PrayerStep = {
  id: string
  title: string
  summary: string
  tip?: string
  hasAudio?: boolean
}

export type MezmurItem = {
  id: string
  title: string
  saint?: string
  feast?: string
  season?: string
  language?: string
  thumbnail?: string
  youtubeUrl?: string
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
}

export type InstrumentLesson = {
  id: string
  title: string
  description: string
  videoUrl?: string
  image?: string
}

export type FidelCard = {
  id: string
  glyph: string
  transliteration: string
  soundGroup?: string
}

/** Hub-level counters — aligns with `usePracticeHubStats` fields for easy merge/sync. */
export type PracticeProgress = {
  prayerDays: number
  mezmurSessions: number
  instrumentNotes: number
  languageLetters: number
  prayersTouched: number
}
