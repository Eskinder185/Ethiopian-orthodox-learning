import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import StatusBox from '../sections/StatusBox.jsx'
import { paths } from '../../constants/paths.js'
const NEXT = [
  { key: 'prayer', to: paths.practice.prayer },
  { key: 'today', to: paths.calendar.today },
  { key: 'learn', to: paths.learn.index },
]

export default function StartHereClosing() {
  const { t } = useTranslation('common')

  return (
    <div className="start-here-closing">
      <section className="start-here-next start-here-block" aria-labelledby="start-next-heading">
        <h2 id="start-next-heading" className="start-here-section-title">
          {t('startHere.closing.title')}
        </h2>
        <p className="start-here-section-lead">{t('startHere.closing.lead')}</p>
        <ul className="start-here-next__grid">
          {NEXT.map(({ key, to }) => (
            <li key={key}>
              <Link to={to} className="start-here-next-card">
                <h3 className="start-here-next-card__title">{t(`startHere.closing.cards.${key}.title`)}</h3>
                <p className="start-here-next-card__desc">{t(`startHere.closing.cards.${key}.desc`)}</p>
                <span className="start-here-next-card__cta">{t(`startHere.closing.cards.${key}.cta`)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <StatusBox tone="calm">
        <p className="status-box__text">
          <strong>{t('startHere.parishTitle')}. </strong>
          {t('startHere.parishBody')}
        </p>
      </StatusBox>
    </div>
  )
}
