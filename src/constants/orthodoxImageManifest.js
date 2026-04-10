/**
 * Central registry for Learn / shared / supplemental Practice imagery.
 * Paths are under /public/images/{folder}/ — files may be absent; UI uses SacredImageSlot fallbacks.
 *
 * See docs/orthodox-image-prompts.md for generation prompts and drop locations.
 */

import { practiceHubImage } from './practiceHubImages.js'

/**
 * @typedef {{ file: string, folder: 'learn' | 'practice' | 'shared', alt: string, width: number, height: number, aspect: string }} OrthoManifestEntry
 */

/** @type {Record<string, OrthoManifestEntry>} */
export const ORTHODOX_IMAGE_MANIFEST = {
  /* —— Learn hub —— */
  'learn.hubHero': {
    file: 'learn-hub-hero-orthodox-manuscript.jpg',
    folder: 'learn',
    alt: 'Open Ethiopian Orthodox liturgical manuscript on a stand, soft daylight in a quiet church interior.',
    width: 1600,
    height: 1040,
    aspect: '20:13',
  },
  'learn.pathScripture': {
    file: 'learn-path-scripture-open-bible.jpg',
    folder: 'learn',
    alt: 'Hands respectfully turning pages of a sacred book in an Ethiopian Orthodox study setting.',
    width: 800,
    height: 600,
    aspect: '4:3',
  },
  'learn.pathTeachings': {
    file: 'learn-path-teachings-seven-mysteries.jpg',
    folder: 'learn',
    alt: 'Ethiopian Orthodox priest near a brocade-draped table with reverent symbolic signs of the seven holy mysteries, calm and not westernized.',
    width: 800,
    height: 600,
    aspect: '4:3',
  },
  'learn.pathLiturgy': {
    file: 'learn-path-liturgy-incense-qidase.jpg',
    folder: 'learn',
    alt: 'Ethiopian Orthodox liturgy moment with censer and soft candlelight, respectful distance.',
    width: 800,
    height: 600,
    aspect: '4:3',
  },
  'learn.pathChurchLifeHistory': {
    file: 'learn-path-church-history-rock-church.jpg',
    folder: 'learn',
    alt: 'Ancient Ethiopian rock-hewn church façade, humble pilgrims, clear sky.',
    width: 800,
    height: 600,
    aspect: '4:3',
  },
  'learn.pathChurchYear': {
    file: 'learn-path-church-year-calendar.jpg',
    folder: 'learn',
    alt: 'Ethiopian Orthodox senksar or church calendar beside a cross, soft indoor light.',
    width: 800,
    height: 600,
    aspect: '4:3',
  },
  'learn.faithMapPanel': {
    file: 'learn-faith-journey-panel.jpg',
    folder: 'learn',
    alt: 'Symbolic path from Scripture to church year — icons and crosses in Ethiopian style, not cluttered.',
    width: 1400,
    height: 520,
    aspect: '35:13',
  },
  'learn.sacramentsPreviewStrip': {
    file: 'learn-sacraments-preview-strip.jpg',
    folder: 'learn',
    alt: 'Row of seven Ethiopian Orthodox sacramental signs: water, bread and wine, oil — reverent still life.',
    width: 1600,
    height: 400,
    aspect: '4:1',
  },
  'learn.qidaseFlow': {
    file: 'learn-qidase-flow-liturgy.jpg',
    folder: 'learn',
    alt: 'Ethiopian Orthodox Divine Liturgy flow — altar, clergy, and congregation in dignified order.',
    width: 1600,
    height: 720,
    aspect: '20:9',
  },
  'learn.historyStrip': {
    file: 'learn-church-history-timeline-strip.jpg',
    folder: 'learn',
    alt: 'Ethiopian Orthodox historical mosaic: ancient manuscript, church, and living faith today.',
    width: 1600,
    height: 480,
    aspect: '10:3',
  },
  'learn.churchYearWheel': {
    file: 'learn-church-year-cycle-wheel.jpg',
    folder: 'learn',
    alt: 'Circular diagram of fasts, feasts, and seasons in Ethiopian Orthodox rhythm, calm gold and ink tones.',
    width: 900,
    height: 900,
    aspect: '1:1',
  },
  'learn.bridgeWordToLife': {
    file: 'learn-bridge-scripture-to-language.jpg',
    folder: 'learn',
    alt: 'Ge’ez fidel practice beside an open Bible, reverent study atmosphere.',
    width: 640,
    height: 400,
    aspect: '8:5',
  },
  'learn.bridgeFaithToPrayer': {
    file: 'learn-bridge-faith-to-prayer.jpg',
    folder: 'learn',
    alt: 'Ethiopian Orthodox prayer at home with icons and cross, soft lamp light.',
    width: 640,
    height: 400,
    aspect: '8:5',
  },
  'learn.bridgeYearToCalendar': {
    file: 'learn-bridge-church-year-to-calendar.jpg',
    folder: 'learn',
    alt: 'Church calendar and feast imagery in Ethiopian Orthodox context.',
    width: 640,
    height: 400,
    aspect: '8:5',
  },
  /* —— Learn subpage heroes (replace inline SVG when asset exists) —— */
  'learn.scriptureHero': {
    file: 'scripture-reading-path-manuscript.jpg',
    folder: 'learn',
    alt: 'Open Ge’ez manuscript with Ethiopian cross and candlelight — invitation to sacred reading.',
    width: 1440,
    height: 880,
    aspect: '45:27.5',
  },
  'learn.liturgyHero': {
    file: 'liturgy-qidase-hero.jpg',
    folder: 'learn',
    alt: 'Ethiopian Orthodox Qidase interior: dome, cross, and soft incense haze.',
    width: 1440,
    height: 880,
    aspect: '45:27.5',
  },
  'learn.churchHistoryHero': {
    file: 'church-history-sacred-map.jpg',
    folder: 'learn',
    alt: 'Ethiopia sacred geography: churches, manuscripts, and highland light.',
    width: 1440,
    height: 880,
    aspect: '45:27.5',
  },
  'learn.churchYearHero': {
    file: 'church-year-cycle-hero.jpg',
    folder: 'learn',
    alt: 'Ethiopian Orthodox wheel of seasons and feasts, elegant and calm.',
    width: 1440,
    height: 880,
    aspect: '45:27.5',
  },
  /* —— Teachings / sacraments —— */
  'teachings.heroPanel': {
    file: 'teachings-sacraments-hero-seven-mysteries.jpg',
    folder: 'learn',
    alt: 'Seven Ethiopian Orthodox holy mysteries suggested in one reverent composition.',
    width: 1200,
    height: 900,
    aspect: '4:3',
  },
  'teachings.mediaVideo': {
    file: 'teachings-media-video-placeholder.jpg',
    folder: 'learn',
    alt: 'Reserved frame for sacramental catechesis video — church interior, calm.',
    width: 1280,
    height: 720,
    aspect: '16:9',
  },
  'teachings.mediaAudio': {
    file: 'teachings-media-audio-placeholder.jpg',
    folder: 'learn',
    alt: 'Headphones-free scene: Ethiopian Orthodox listener with manuscript, not broadcast studio.',
    width: 1280,
    height: 720,
    aspect: '16:9',
  },
  'teachings.mediaLiturgy': {
    file: 'teachings-media-liturgy-context.jpg',
    folder: 'learn',
    alt: 'Sacraments in liturgical context — Ethiopian altar and vessels, respectful.',
    width: 1280,
    height: 720,
    aspect: '16:9',
  },
  /* —— Shared / Start Here / video posters —— */
  'shared.startHereOrientation': {
    file: 'start-here-orientation-poster.jpg',
    folder: 'shared',
    alt: 'Welcome to OrthodoxPath — Ethiopian Orthodox church threshold, warm and inviting.',
    width: 1280,
    height: 720,
    aspect: '16:9',
  },
  'shared.instrumentVideoPoster': {
    file: 'ethiopian-kebero-liturgical.png',
    folder: 'shared',
    alt: 'Ethiopian Orthodox kebero — double-headed liturgical drum with leather tension lacing and patterned wrap, resting on a church carpet.',
    width: 1280,
    height: 720,
    aspect: '16:9',
  },
  'shared.languageVideoPoster': {
    file: 'language-pronunciation-video-poster.jpg',
    folder: 'shared',
    alt: 'Ethiopian Orthodox language study — fidel chart and respectful teacher posture.',
    width: 1280,
    height: 720,
    aspect: '16:9',
  },
  /* —— Practice hub supplemental (files optional until generated) —— */
  'practice.mezmurSampleA': {
    file: 'practice-mezmur-card-sample-a.jpg',
    folder: 'practice',
    alt: 'Ethiopian Orthodox chant rehearsal — sheet and cross, not a concert stage.',
    width: 640,
    height: 400,
    aspect: '8:5',
  },
  'practice.mezmurSampleB': {
    file: 'practice-mezmur-card-sample-b.jpg',
    folder: 'practice',
    alt: 'Mezmur practice setting with traditional instruments in background, soft focus.',
    width: 640,
    height: 400,
    aspect: '8:5',
  },
  'practice.mezmurSampleC': {
    file: 'practice-mezmur-card-sample-c.jpg',
    folder: 'practice',
    alt: 'Feast-day hymn context — Ethiopian church exterior at dawn.',
    width: 640,
    height: 400,
    aspect: '8:5',
  },
  'practice.mezmurSampleD': {
    file: 'practice-mezmur-card-sample-d.jpg',
    folder: 'practice',
    alt: 'Great Lent chant atmosphere — simple vestments and humility.',
    width: 640,
    height: 400,
    aspect: '8:5',
  },
  'practice.mezmurSlideFeast': {
    file: 'practice-mezmur-featured-feast-slide.jpg',
    folder: 'practice',
    alt: 'Featured feast chant — Ethiopian cross and processional calm.',
    width: 960,
    height: 540,
    aspect: '16:9',
  },
  'practice.mezmurSlideLent': {
    file: 'practice-mezmur-featured-lent-slide.jpg',
    folder: 'practice',
    alt: 'Lenten chant mood — dim gold light and cross.',
    width: 960,
    height: 540,
    aspect: '16:9',
  },
  'practice.mezmurSlideListen': {
    file: 'practice-mezmur-featured-listen-slide.jpg',
    folder: 'practice',
    alt: 'Listening before singing — congregation and chanter, respectful.',
    width: 960,
    height: 540,
    aspect: '16:9',
  },
  'practice.time5': {
    file: 'practice-by-time-5min.jpg',
    folder: 'practice',
    alt: 'Five-minute prayer corner with cross and Gospel book.',
    width: 800,
    height: 450,
    aspect: '16:9',
  },
  'practice.time10': {
    file: 'practice-by-time-10min.jpg',
    folder: 'practice',
    alt: 'Ten minutes of morning prayer — Ethiopian home oratory.',
    width: 800,
    height: 450,
    aspect: '16:9',
  },
  'practice.time20': {
    file: 'practice-by-time-20min.jpg',
    folder: 'practice',
    alt: 'Deeper practice — chant or language with manuscript.',
    width: 800,
    height: 450,
    aspect: '16:9',
  },
  'practice.progressEncouragement': {
    file: 'practice-progress-section.jpg',
    folder: 'practice',
    alt: 'Gentle encouragement — candle, cross, and journal for spiritual practice.',
    width: 960,
    height: 1120,
    aspect: '12:14',
  },
}

/** Maps manifest keys to existing `practiceHubImage` logical keys (single source for bundled PNGs). */
const PRACTICE_HUB_BRIDGE = {
  'practice.mezmurWorkspace': 'mezmurWorkspace',
  'practice.hubHero': 'hero',
  'practice.hubPrayerCard': 'prayerCard',
  'practice.hubMezmurCard': 'mezmurCard',
  'practice.hubInstrumentCard': 'instrumentCard',
  'practice.hubLanguageCard': 'languageCard',
  'practice.hubMap': 'map',
  'practice.hubToday': 'todayPractice',
  'practice.hubPrayerStepper': 'prayerStepper',
  'practice.hubPrayerCheatsheet': 'prayerCheatsheet',
  'practice.hubFeaturedFeast': 'featuredFeast',
  'practice.hubInstrumentPosture': 'instrumentPosture',
  'practice.hubLanguageHeader': 'languageHeader',
  'practice.hubFidelFlashcard': 'fidelFlashcard',
  'practice.hubSeasonal': 'seasonalPractice',
}

const PRACTICE_BRIDGE_ALT = {
  'practice.mezmurWorkspace': 'Calm chant practice workspace with notation — no headphones.',
  'practice.hubHero': 'Practice hub — prayer, mezmur, instruments, and language in one sacred rhythm.',
  'practice.hubPrayerCard': 'Prayer practice — Ethiopian Orthodox home prayer with cross and book.',
  'practice.hubMezmurCard': 'Mezmur and werb — sacred hymnody in Ethiopian worship.',
  'practice.hubInstrumentCard': 'Ethiopian Orthodox liturgical drums and sistrum, ceremonial context.',
  'practice.hubLanguageCard': 'Ge’ez / Amharic language practice for prayer and hymnody.',
  'practice.hubMap': 'How prayer, chant, rhythm, and language meet in Christ.',
  'practice.hubToday': "Today's suggested practice — gentle and habit-forming.",
  'practice.hubPrayerStepper': 'Step-by-step prayer flow overview.',
  'practice.hubPrayerCheatsheet': 'Printable prayer order reference beside a parish book.',
  'practice.hubFeaturedFeast': 'Featured feast and seasonal chant focus.',
  'practice.hubInstrumentPosture': 'Respectful posture holding Ethiopian kebero.',
  'practice.hubLanguageHeader': 'Language and pronunciation study header.',
  'practice.hubFidelFlashcard': 'Fidel letters for flashcard-style study.',
  'practice.hubSeasonal': 'Practice shaped by the Ethiopian Orthodox church year.',
}

/**
 * @param {string} key
 * @returns {{ src: string | null, alt: string, aspect?: string, width?: number, height?: number }}
 */
export function orthodoxImage(key) {
  const bridged = PRACTICE_HUB_BRIDGE[key]
  if (bridged) {
    const src = practiceHubImage(bridged)
    return {
      src,
      alt: PRACTICE_BRIDGE_ALT[key] ?? '',
      aspect: '16:9',
    }
  }

  const entry = ORTHODOX_IMAGE_MANIFEST[key]
  if (!entry) {
    return { src: null, alt: '' }
  }
  return {
    src: `/images/${entry.folder}/${entry.file}`,
    alt: entry.alt,
    aspect: entry.aspect,
    width: entry.width,
    height: entry.height,
  }
}

/** @returns {string[]} */
export function orthodoxImageManifestKeys() {
  return [...Object.keys(ORTHODOX_IMAGE_MANIFEST), ...Object.keys(PRACTICE_HUB_BRIDGE)]
}
