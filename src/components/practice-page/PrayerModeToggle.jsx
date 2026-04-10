/**
 * @param {{ mode: 'beginner' | 'full', onModeChange: (m: 'beginner' | 'full') => void, labelId: string, beginnerLabel?: string, fullLabel?: string }} props
 */
export default function PrayerModeToggle({
  mode,
  onModeChange,
  labelId,
  beginnerLabel = 'Beginner',
  fullLabel = 'Full routine',
}) {
  return (
    <div className="ph-prayer__mode" role="group" aria-labelledby={labelId}>
      <span id={labelId} className="ph-prayer__mode-label">
        Routine
      </span>
      <button
        type="button"
        className={`ph-prayer__mode-btn${mode === 'beginner' ? ' ph-prayer__mode-btn--on' : ''}`}
        aria-pressed={mode === 'beginner'}
        onClick={() => onModeChange('beginner')}
      >
        {beginnerLabel}
      </button>
      <button
        type="button"
        className={`ph-prayer__mode-btn${mode === 'full' ? ' ph-prayer__mode-btn--on' : ''}`}
        aria-pressed={mode === 'full'}
        onClick={() => onModeChange('full')}
      >
        {fullLabel}
      </button>
    </div>
  )
}
