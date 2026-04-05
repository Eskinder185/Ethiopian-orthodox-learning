import './NotesBox.css'

export default function NotesBox({ title = 'Notes', children }) {
  return (
    <aside className="notes-box" role="note">
      {title ? <h3 className="notes-box__title">{title}</h3> : null}
      <div className="notes-box__body">{children}</div>
    </aside>
  )
}
