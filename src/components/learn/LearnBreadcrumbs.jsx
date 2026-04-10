import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { paths } from '../../constants/paths.js'

export default function LearnBreadcrumbs() {
  const { t } = useTranslation('common')

  return (
    <nav className="learn-bc" aria-label={t('learnHub.breadcrumbLabel')}>
      <ol className="learn-bc__list">
        <li className="learn-bc__item">
          <Link to={paths.home} className="learn-bc__link">
            {t('nav.home')}
          </Link>
        </li>
        <li className="learn-bc__sep" aria-hidden="true">
          /
        </li>
        <li className="learn-bc__current">{t('learnHub.title')}</li>
      </ol>
    </nav>
  )
}
