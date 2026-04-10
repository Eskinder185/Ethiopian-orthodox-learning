import { useTranslation } from 'react-i18next'
import { THEME_IDS } from '../../theme/themeConstants.js'
import { useTheme } from '../../theme/ThemeContext.jsx'
import './ThemeSwitcher.css'

const THEME_I18N = {
  'blue-gold-sacred': 'theme.blueGoldSacred',
  'emerald-gold-sacred': 'theme.emeraldGoldSacred',
}

export default function ThemeSwitcher({ className = '', idSuffix = 'main' }) {
  const { t } = useTranslation('common')
  const { theme, setTheme } = useTheme()
  const id = `site-theme-switcher-${idSuffix}`

  const useToggle = THEME_IDS.length === 2
  const otherTheme = THEME_IDS.find((tid) => tid !== theme) ?? THEME_IDS[0]
  const toggleLabel = t('theme.ariaToggle', {
    current: t(THEME_I18N[theme]),
    next: t(THEME_I18N[otherTheme]),
  })

  if (useToggle) {
    return (
      <div className={`theme-switcher theme-switcher--toggle ${className}`.trim()}>
        <button
          type="button"
          id={id}
          className="theme-switcher__toggle"
          onClick={() => setTheme(otherTheme)}
          aria-label={toggleLabel}
          title={toggleLabel}
        >
          <span className="theme-switcher__icon" aria-hidden="true">
            ◎
          </span>
        </button>
      </div>
    )
  }

  return (
    <div className={`theme-switcher ${className}`.trim()}>
      <label className="theme-switcher__label" htmlFor={id}>
        <span className="theme-switcher__icon" aria-hidden="true">
          ◎
        </span>
        <span className="visually-hidden">{t('theme.label')}</span>
      </label>
      <select
        id={id}
        className="theme-switcher__select"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        aria-label={t('theme.label')}
      >
        {THEME_IDS.map((tid) => (
          <option key={tid} value={tid}>
            {t(THEME_I18N[tid])}
          </option>
        ))}
      </select>
    </div>
  )
}
