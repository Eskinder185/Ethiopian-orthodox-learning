/** @typedef {'blue-gold-sacred' | 'emerald-gold-sacred'} ThemeId */

export const THEME_STORAGE_KEY = 'orthodoxpath-theme'

/** @type {ThemeId[]} */
export const THEME_IDS = ['blue-gold-sacred', 'emerald-gold-sacred']

/** @type {ThemeId} */
export const DEFAULT_DARK_THEME = 'blue-gold-sacred'

/** Migrate old localStorage / inline script values */
export const LEGACY_THEME_MAP = {
  'sacred-manuscript-night': 'blue-gold-sacred',
  'parchment-light': 'blue-gold-sacred',
  'monastery-dark': 'emerald-gold-sacred',
}

/**
 * @param {string | undefined} raw
 * @returns {ThemeId}
 */
export function normalizeThemeId(raw) {
  if (raw && THEME_IDS.includes(raw)) return /** @type {ThemeId} */ (raw)
  if (raw && LEGACY_THEME_MAP[raw]) return LEGACY_THEME_MAP[raw]
  return DEFAULT_DARK_THEME
}

/**
 * Resolve theme from localStorage (first visit falls back to default).
 * @returns {ThemeId}
 */
export function resolveInitialThemeFromStorage() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored) return normalizeThemeId(stored)
  } catch {
    /* ignore */
  }
  return DEFAULT_DARK_THEME
}

/**
 * Read theme already applied to <html> by inline script (avoids flash).
 * @returns {ThemeId}
 */
export function readThemeFromDocument() {
  if (typeof document === 'undefined') return DEFAULT_DARK_THEME
  const d = document.documentElement.dataset.theme
  return normalizeThemeId(d)
}
