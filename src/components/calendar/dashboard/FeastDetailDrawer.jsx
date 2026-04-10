import { useCallback, useEffect, useId, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { getCategoryMeta } from '../../../data/calendarVisualCatalog.js'
import FeastBadge from './FeastBadge.jsx'
import RelatedContentCard from './RelatedContentCard.jsx'

/**
 * Premium feast / day detail dialog (artwork, copy, related practice links).
 * `detail` may be null when closed.
 */
export default function FeastDetailDrawer({ open, onClose, detail }) {
  const { t } = useTranslation('common')
  const dialogRef = useRef(null)
  const titleId = useId()

  const close = useCallback(() => {
    const dlg = dialogRef.current
    if (dlg?.open) dlg.close()
    onClose()
  }, [onClose])

  useEffect(() => {
    const dlg = dialogRef.current
    if (!dlg) return
    if (open && detail && typeof dlg.showModal === 'function' && !dlg.open) {
      dlg.showModal()
    }
    if (!open && dlg.open) dlg.close()
  }, [open, detail])

  if (!detail) return null

  const cat = detail.category ?? getCategoryMeta(detail.categoryId)
  return (
    <dialog
      ref={dialogRef}
      className="cal-feast-drawer cal-vis-motion--drawer"
      aria-labelledby={titleId}
      onClose={onClose}
      onCancel={(e) => {
        e.preventDefault()
        close()
      }}
    >
      <div className="cal-feast-drawer__inner">
        <button type="button" className="cal-feast-drawer__x" onClick={close} aria-label={t('calendarDashboard.dialogClose')}>
          ×
        </button>
        <div className={`cal-feast-drawer__hero ${cat.cardClass ?? ''}`}>
          {detail.imageSrc ? (
            <div className="cal-feast-drawer__visual">
              <img src={detail.imageSrc} alt={detail.imageAlt || ''} className="cal-feast-drawer__img" loading="lazy" />
              <div className="cal-feast-drawer__veil" aria-hidden />
            </div>
          ) : (
            <div className={`cal-feast-drawer__placeholder ${cat.patternClass ?? ''}`} aria-hidden>
              <span className="cal-feast-drawer__placeholder-icon">{cat.icon}</span>
            </div>
          )}
          <div className="cal-feast-drawer__hero-copy">
            <div className="cal-feast-drawer__badges">
              <FeastBadge variant="today">{t('calendarDashboard.badges.detail')}</FeastBadge>
              {detail.feast?.moveable ? (
                <FeastBadge variant="movable">{t('calendarDashboard.badges.movable')}</FeastBadge>
              ) : detail.feast && !detail.feast.moveable ? (
                <FeastBadge variant="fixed">{t('calendarDashboard.badges.fixed')}</FeastBadge>
              ) : null}
              {detail.categoryId ? <FeastBadge categoryId={detail.categoryId} /> : null}
            </div>
            <h2 id={titleId} className="cal-feast-drawer__title">
              {detail.title}
            </h2>
            {detail.subtitle ? (
              <p className="cal-feast-drawer__subtitle" lang="am">
                {detail.subtitle}
              </p>
            ) : null}
            <div className="cal-feast-drawer__dates">
              <p>
                <strong>{t('calendarDashboard.drawer.gregorian')}</strong> {detail.gregorianLine}
              </p>
              {detail.ethiopianLine ? (
                <p>
                  <strong>{t('calendarDashboard.drawer.ethiopian')}</strong> {detail.ethiopianLine}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="cal-feast-drawer__body">
          <h3 className="cal-feast-drawer__h">{t('calendarDashboard.drawer.whyTitle')}</h3>
          <p className="cal-feast-drawer__lead">{detail.body}</p>

          <h3 className="cal-feast-drawer__h">{t('calendarDashboard.drawer.relatedTitle')}</h3>
          <div className="cal-feast-drawer__related">
            {(detail.relatedLinks ?? []).map((item) => (
              <RelatedContentCard key={item.to} to={item.to} label={item.label} hint={item.hint} />
            ))}
          </div>

          <p className="cal-feast-drawer__hook">{t('calendarDashboard.drawer.priestHook')}</p>
        </div>

        <button type="button" className="btn btn--secondary cal-feast-drawer__close" onClick={close}>
          {t('calendarDashboard.dialogClose')}
        </button>
      </div>
    </dialog>
  )
}
