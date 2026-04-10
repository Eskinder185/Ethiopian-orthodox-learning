import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { PORTFOLIO_URL } from '../../constants/externalLinks.js'
import { paths } from '../../constants/paths.js'
import ThemeSwitcher from '../theme/ThemeSwitcher.jsx'

export default function Footer() {
  const { t } = useTranslation('common')
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__utilities">
        <ThemeSwitcher className="site-footer__theme" idSuffix="footer" />
      </div>
      <p className="site-footer__note">
        {t('footer.note')}{' '}
        <Link to={paths.about} className="site-footer__link">
          {t('footer.aboutLink')}
        </Link>
      </p>
      <p className="site-footer__portfolio">
        <a
          href={PORTFOLIO_URL}
          className="site-footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('nav.portfolio')}
          <span className="visually-hidden"> {t('nav.portfolioSr')}</span>
        </a>
      </p>
      <p className="site-footer__copy">{t('footer.copyright', { year })}</p>
    </footer>
  )
}
