import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.css'

/**
 * Toggle UI language (EN / አማርኛ). Persists via i18n → localStorage.
 */
export default function LanguageSwitcher({ className = '', variant = 'default' }) {
  const { i18n, t } = useTranslation('common')
  const lng = i18n.language?.startsWith('am') ? 'am' : 'en'

  const setLang = (next) => {
    if (next !== lng) void i18n.changeLanguage(next)
  }

  return (
    <div
      className={`language-switcher language-switcher--${variant}${className ? ` ${className}` : ''}`}
      role="group"
      aria-label={t('language.switchToEn') + ' / ' + t('language.switchToAm')}
    >
      <button
        type="button"
        className={'language-switcher__btn' + (lng === 'en' ? ' language-switcher__btn--active' : '')}
        onClick={() => setLang('en')}
        aria-pressed={lng === 'en'}
        aria-label={t('language.switchToEn')}
      >
        {t('language.enShort')}
      </button>
      <span className="language-switcher__sep" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        className={'language-switcher__btn' + (lng === 'am' ? ' language-switcher__btn--active' : '')}
        onClick={() => setLang('am')}
        aria-pressed={lng === 'am'}
        aria-label={t('language.switchToAm')}
      >
        {t('language.amShort')}
      </button>
    </div>
  )
}
