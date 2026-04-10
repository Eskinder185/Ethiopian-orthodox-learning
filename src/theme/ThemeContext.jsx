import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  DEFAULT_DARK_THEME,
  THEME_IDS,
  THEME_STORAGE_KEY,
  normalizeThemeId,
  readThemeFromDocument,
} from './themeConstants.js'

/** @typedef {import('./themeConstants.js').ThemeId} ThemeId */

/** @type {React.Context<{ theme: ThemeId, setTheme: (t: ThemeId) => void } | null>} */
const ThemeContext = createContext(null)

function applyThemeToDocument(theme) {
  if (typeof document === 'undefined') return
  const t = normalizeThemeId(theme)
  document.documentElement.dataset.theme = t
  document.documentElement.style.colorScheme = 'dark'
  try {
    localStorage.setItem(THEME_STORAGE_KEY, t)
  } catch {
    /* ignore */
  }
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => readThemeFromDocument())

  useEffect(() => {
    applyThemeToDocument(theme)
  }, [theme])

  const setTheme = useCallback((next) => {
    const t = normalizeThemeId(next)
    if (THEME_IDS.includes(t)) setThemeState(t)
  }, [])

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    return {
      theme: DEFAULT_DARK_THEME,
      setTheme: () => {},
    }
  }
  return ctx
}
