import { useCallback, useEffect, useId, useRef } from 'react'
import { Link } from 'react-router-dom'

/**
 * Accessible modal for calendar rail / explorer details (native <dialog>).
 */
export default function CalendarEventDetailDialog({
  open,
  onClose,
  title,
  badge,
  children,
  links = [],
  closeLabel = 'Close',
}) {
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
    if (open && typeof dlg.showModal === 'function' && !dlg.open) {
      dlg.showModal()
    }
    if (!open && dlg.open) {
      dlg.close()
    }
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      className="cal-dash-dialog"
      aria-labelledby={titleId}
      onClose={onClose}
      onCancel={(e) => {
        e.preventDefault()
        close()
      }}
    >
      <div className="cal-dash-dialog__inner">
        {badge ? <span className="cal-dash-dialog__badge">{badge}</span> : null}
        {title ? (
          <h2 id={titleId} className="cal-dash-dialog__title">
            {title}
          </h2>
        ) : null}
        <div className="cal-dash-dialog__body">{children}</div>
        {links.length > 0 ? (
          <ul className="cal-dash-dialog__links">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="cal-dash-dialog__link" onClick={close}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
        <button type="button" className="btn btn--secondary cal-dash-dialog__close" onClick={close}>
          {closeLabel}
        </button>
      </div>
    </dialog>
  )
}
