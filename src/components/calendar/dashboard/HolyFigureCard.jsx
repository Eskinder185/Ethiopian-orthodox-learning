import { useTranslation } from 'react-i18next'
import { getMotionPreset, getBadgeTheme } from '../../../utils/calendarVisualSystem.js'
import FeastBadge from './FeastBadge.jsx'
import CategoryIcon from './CategoryIcon.jsx'

export default function HolyFigureCard({ figure, onOpen, span = false, className = '' }) {
  const { t } = useTranslation('common')
  const isMajor = figure.importance === 'major'
  const tier =
    figure.importance === 'major' ? 'major' : figure.importance === 'minor' ? 'minor' : 'medium'
  const motion = figure.visual ? getMotionPreset(figure.visual) : { className: '' }
  const accent = figure.visual ? getBadgeTheme(figure.visual).accentClass : ''

  return (
    <article
      className={`cal-holy-card cal-holy-card--${tier} cal-vis-reveal${span ? ' cal-holy-card--span' : ''} ${motion.className} ${accent} ${className}`.trim()}
    >
      {figure.imageSrc ? (
        <div className="cal-holy-card__visual">
          <img src={figure.imageSrc} alt={figure.imageAlt || figure.title} className="cal-holy-card__img" loading="lazy" />
          <div className="cal-holy-card__veil" aria-hidden />
        </div>
      ) : (
        <div className={`cal-holy-card__icon-wrap cal-cat-card--${figure.categoryId}`}>
          <CategoryIcon categoryId={figure.categoryId} size="lg" label={figure.categoryLabel} />
        </div>
      )}

      <div className="cal-holy-card__body">
        <div className="cal-holy-card__meta">
          <FeastBadge categoryId={figure.categoryId}>{figure.categoryLabel}</FeastBadge>
          {figure.kind === 'feast' && figure.feast?.moveable ? (
            <FeastBadge variant="movable">{t('calendarDashboard.badges.movable')}</FeastBadge>
          ) : figure.kind === 'feast' ? (
            <FeastBadge variant="fixed">{t('calendarDashboard.badges.fixed')}</FeastBadge>
          ) : null}
        </div>
        <h3 className="cal-holy-card__title">{figure.title}</h3>
        {figure.geez ? (
          <p className="cal-holy-card__geez" lang="am">
            {figure.geez}
          </p>
        ) : null}
        <p className="cal-holy-card__line">{figure.line}</p>
        <button type="button" className="btn btn--secondary cal-holy-card__more" onClick={() => onOpen(figure)}>
          {isMajor ? t('calendarDashboard.holyFigures.moreMajor') : t('calendarDashboard.holyFigures.moreMedium')}
        </button>
      </div>
    </article>
  )
}
