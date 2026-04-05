/**
 * User-selected external resources (exact URLs and labels).
 * Do not add links here without updating the matching page section.
 */

const resourceNote =
  'This resource is hosted on the original website. Use it for full content and study. It opens in a new tab.'

const base = {
  description: resourceNote,
  linkText: 'Open original website',
}

export const tselotDailyPrayer = {
  ...base,
  href: 'https://kolo.hahubet.com/%E1%8B%98%E1%8B%98%E1%8B%88%E1%89%B5%E1%88%AD/',
  resourceTitle: 'Daily Ethiopian Orthodox Prayers (Tselot)',
  sourceName: 'kolo.hahubet.com',
}

export const geezPronunciationYoutube = {
  ...base,
  href: 'https://www.youtube.com/@MuradeGeez-kt7ct/videos',
  resourceTitle: 'Learn Geez Prayer Pronunciation (Video Practice)',
  sourceName: 'YouTube (MuradeGeez)',
}

export const amharicAlphabetInteractive = {
  ...base,
  href: 'https://amharicteacher.com/hahu',
  resourceTitle: 'Learn Amharic Alphabet (Interactive with Sound)',
  sourceName: 'amharicteacher.com',
}

export const divineLiturgyEnglishPdf = {
  ...base,
  href: 'https://www.ethiopianorthodox.org/english/church/englishethiopianliturgy.pdf',
  resourceTitle: 'Divine Liturgy (Kidase) – English PDF',
  sourceName: 'ethiopianorthodox.org',
}

export const mezmurLibrary = {
  ...base,
  href: 'https://eotcmedia.com/hymn/hymns/lan/0/cat/0/subcat/0',
  resourceTitle: 'Browse Ethiopian Orthodox Mezmur (Organized Library)',
  sourceName: 'eotcmedia.com',
}
