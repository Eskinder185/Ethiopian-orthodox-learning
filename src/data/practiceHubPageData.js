/**
 * Aggregated prop payloads for the Practice hub (`PracticePage`).
 * Swap or merge with CMS/API later; sections stay dumb/presentational.
 */

import { alphabetPage } from './languagePages.js'
import { chantPracticePageContent } from '../content/chantPracticePageContent.js'
import {
  practiceHubFooterCta,
  practiceHubFooterNote,
  practiceHubGoals,
  practiceHubGateways,
  practiceHubHeroStatLabels,
  practiceHubMap,
  practiceHubProgressCopy,
  practiceHubSeasonCopy,
  practiceHubSpotlightPresets,
  practiceHubTimeBlocks,
  practiceHubVisualHero,
  practiceHubVisualMeta,
} from '../content/practiceHubVisualContent.js'
import {
  practiceHubPrayerBeginnerCount,
  practiceHubPrayerTimeline,
} from '../content/practiceHubPrayerTimeline.js'
import {
  instrumentPracticePlaceholders,
  languagePracticePlaceholders,
  mezmurFeaturedSlides,
  mezmurPlaceholderCards,
  mezmurPlaceholderFilters,
} from '../content/practicePagePlaceholders.js'
import { paths } from '../constants/paths.js'

export const defaultPracticeHubContent = {
  meta: practiceHubVisualMeta,
  hero: practiceHubVisualHero,
  statLabels: practiceHubHeroStatLabels,
  gateways: practiceHubGateways,
  map: practiceHubMap,
  goals: practiceHubGoals,
  spotlightPresets: practiceHubSpotlightPresets,
  timeBlocks: practiceHubTimeBlocks,
  season: practiceHubSeasonCopy,
  progress: practiceHubProgressCopy,
  footerCta: practiceHubFooterCta,
  footerNote: practiceHubFooterNote,

  prayer: {
    sectionId: 'practice-hub-prayer',
    title: 'Prayer practice',
    lead:
      'Walk the **order** the Church **loves** — **listen** when audio is linked, **read** slowly, **pray** from the heart.',
    prayerBasePath: paths.practice.prayer,
    fullTimeline: practiceHubPrayerTimeline,
    beginnerCount: practiceHubPrayerBeginnerCount,
    cheatSheetPrintNote:
      'OrthodoxPath — compare with your parish book. Full prayer texts on the Prayer practice page.',
    importantNotes: [
      'Compare every rubric with your **parish prayer book** and your **priest**.',
      'Linked audio is for **listening** and **orientation** — parish recordings remain **authoritative**.',
      '**Beginner** mode shortens the path; **full** mode follows the longer domestic order on the prayer page.',
      'Print the cheat sheet for a **quiet** desk reference; it does not replace **approved** liturgical texts.',
    ],
  },

  mezmur: {
    sectionId: 'practice-hub-chants',
    sectionTitle: 'Mezmur & Werb',
    intro: chantPracticePageContent.intro,
    materialsNote: chantPracticePageContent.materialsNote,
    filters: mezmurPlaceholderFilters,
    featuredSlides: mezmurFeaturedSlides,
    placeholderCards: mezmurPlaceholderCards,
  },

  instrument: {
    sectionId: 'practice-hub-instruments',
    data: instrumentPracticePlaceholders,
  },

  language: {
    sectionId: 'practice-hub-language',
    title: 'Language & pronunciation',
    lead:
      '**Fidel**, **sound**, and **mouth-shape** — tap a letter, flip a card, and open the full alphabet page when you are ready.',
    fidelLetters: alphabetPage.exampleLetters.slice(0, 8),
    placeholders: languagePracticePlaceholders,
  },
}
