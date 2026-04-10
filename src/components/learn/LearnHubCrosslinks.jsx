import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { paths } from '../../constants/paths.js'
import LearnRevealSection from './LearnRevealSection.jsx'

export default function LearnHubCrosslinks() {
  const { t } = useTranslation('common')

  return (
    <LearnRevealSection className="learn-crosslinks" aria-label={t('learnHub.crosslinks.ariaLabel')}>
      <p className="learn-crosslinks__label">{t('learnHub.crosslinks.label')}</p>
      <div className="learn-crosslinks__row">
        <Link to={paths.practice.index} className="learn-crosslinks__pill">
          {t('learnHub.crosslinks.practice')}
        </Link>
        <Link to={paths.calendar.today} className="learn-crosslinks__pill">
          {t('learnHub.crosslinks.calendarToday')}
        </Link>
        <Link to={paths.calendar.seasons} className="learn-crosslinks__pill learn-crosslinks__pill--quiet">
          {t('learnHub.crosslinks.seasons')}
        </Link>
      </div>
    </LearnRevealSection>
  )
}
