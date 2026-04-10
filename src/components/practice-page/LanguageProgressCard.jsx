/**
 * @param {{ percent: number, label: string }} props
 */
export default function LanguageProgressCard({ percent, label }) {
  const w = `${Math.min(100, Math.max(0, percent))}%`
  return (
    <div className="lang-hub-strip__progress" role="img" aria-label={`${label}: ${w}`}>
      <span className="lang-hub-strip__progress-label">{label}</span>
      <span className="lang-hub-strip__progress-bar">
        <span className="lang-hub-strip__progress-fill" style={{ width: w }} />
      </span>
    </div>
  )
}
