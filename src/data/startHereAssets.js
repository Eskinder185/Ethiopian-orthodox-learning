/**
 * Start Here imagery lives in `public/images/start-here/`.
 *
 * To add or swap an asset: edit the filename in `START_HERE_FILE_MANIFEST` only.
 * URLs are built from `BASE`; do not hardcode `/images/start-here/...` elsewhere.
 */

const BASE = '/images/start-here'

/** Nested map of logical keys → filename (basename only). */
export const START_HERE_FILE_MANIFEST = {
  pilgrimJourney: 'start-here-pilgrim-journey.png',
  pilgrimJourneyMobile: 'start-here-pilgrim-journey-mobile.png',
  orientationThumb: 'start-here-orientation-thumb.png',
  pillarCards: {
    learn: 'start-here-card-learn.png',
    practice: 'start-here-card-practice.png',
    calendar: 'start-here-card-calendar.png',
  },
  /** Keys match `beginnerChecklistSteps[].id` in `startHereContent.js`. */
  pathStepIcons: {
    church: 'path-step-faith-basics.png',
    worship: 'path-step-prayer-worship.png',
    year: 'path-step-church-year.png',
    practice: 'path-step-small-practice.png',
    parish: 'path-step-parish.png',
  },
  firstVisitGuide: 'start-here-first-visit-guide.png',
  glossaryIconsStrip: 'start-here-glossary-icons.png',
  /** Reserved for future UI (e.g. section rules); not wired yet. */
  dividerTexture: 'start-here-divider-texture.png',
}

function manifestToUrls(node) {
  if (typeof node === 'string') return `${BASE}/${node}`
  return Object.fromEntries(Object.entries(node).map(([k, v]) => [k, manifestToUrls(v)]))
}

/** Resolved public URLs for every manifest entry. */
export const startHereAssets = manifestToUrls(START_HERE_FILE_MANIFEST)

/**
 * Intrinsic dimensions for `width` / `height` on `<img>` (layout stability).
 * Update if you replace source PNGs with different aspect ratios.
 */
export const startHereImageIntrinsic = {
  pilgrimHero: { width: 880, height: 540 },
  videoPoster: { width: 1280, height: 720 },
  pillarCard: { width: 800, height: 500 },
  firstVisit: { width: 720, height: 540 },
  glossaryStrip: { width: 960, height: 120 },
  pathStepIcon: { width: 40, height: 40 },
}

export function startHerePathIconForStepId(id) {
  return startHereAssets.pathStepIcons[id] ?? null
}
