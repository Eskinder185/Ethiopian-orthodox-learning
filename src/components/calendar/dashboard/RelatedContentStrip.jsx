import { useTranslation } from 'react-i18next'
import { getRelatedLinksForFeast } from '../../../data/calendarVisualCatalog.js'
import RelatedContentCard from './RelatedContentCard.jsx'

export default function RelatedContentStrip({ feast, className = '', variant = '' }) {
  const { t } = useTranslation('common')
  const links = getRelatedLinksForFeast(feast)

  return (
    <section
      className={`cal-related-strip${variant === 'hub' ? ' cal-related-strip--hub cal-hub-reveal' : ''} ${className}`.trim()}
      aria-labelledby="cal-related-strip-heading"
    >
      <h2 id="cal-related-strip-heading" className="cal-related-strip__title">
        {t('calendarDashboard.related.title')}
      </h2>
      <p className="cal-related-strip__sub">{t('calendarDashboard.related.sub')}</p>
      <div className="cal-related-strip__track" role="list">
        {links.map((item) => (
          <RelatedContentCard
            key={item.to}
            to={item.to}
            label={item.label}
            hint={item.hint}
            linkId={item.linkId}
            className="cal-related-strip__item"
          />
        ))}
      </div>
    </section>
  )
}
