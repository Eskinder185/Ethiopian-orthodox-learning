/**
 * @param {{ steps: Array<{ id: string, title: string }>, printNote: string, printRootId?: string }} props
 */
export default function PrayerCheatSheetCard({ steps, printNote, printRootId = 'prayer-hub-cheat-sheet' }) {
  return (
    <div id={printRootId} className="ph-prayer__print-root" aria-hidden="true">
      <div className="ph-prayer__print-inner">
        <h2>Prayer order — cheat sheet</h2>
        <ol>
          {steps.map((s) => (
            <li key={s.id}>{s.title}</li>
          ))}
        </ol>
        <p className="ph-prayer__print-note">{printNote}</p>
      </div>
    </div>
  )
}
