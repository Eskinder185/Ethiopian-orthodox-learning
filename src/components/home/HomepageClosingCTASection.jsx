import { useTranslation } from 'react-i18next'
import ActionButton from '../ui/ActionButton.jsx'
import { paths } from '../../constants/paths.js'

export default function HomepageClosingCTASection({ className = '' }) {
  const { t } = useTranslation('common')

  return (
    <section
      className={`home-closing ${className}`.trim()}
      aria-labelledby="home-closing-heading"
    >
      <div className="home-closing__inner">
        <h2 id="home-closing-heading" className="home-closing__title">
          {t('home.closing.title')}
        </h2>
        <p className="home-closing__subtitle">{t('home.closing.subtitle')}</p>
        <div className="home-closing__actions">
          <ActionButton to={paths.startHere} variant="primary" className="home-closing__btn-primary">
            {t('home.closing.ctaStart')}
          </ActionButton>
          <ActionButton to={paths.calendar.today} variant="secondary" className="home-closing__btn-secondary">
            {t('home.closing.ctaCalendar')}
          </ActionButton>
          <ActionButton to={paths.practice.prayer} variant="secondary" className="home-closing__btn-secondary">
            {t('home.closing.ctaPrayer')}
          </ActionButton>
        </div>
      </div>
    </section>
  )
}
