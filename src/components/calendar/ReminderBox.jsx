import './CalendarComponents.css'

/**
 * Notes and gentle reminders for calendar-related habits (not persisted yet).
 */
export default function ReminderBox({ title = 'Notes & reminders', children }) {
  return (
    <aside className="reminder-box" role="note">
      {title ? <h3 className="reminder-box__title">{title}</h3> : null}
      <div className="reminder-box__body">{children}</div>
    </aside>
  )
}
