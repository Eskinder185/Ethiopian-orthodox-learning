/**
 * @param {{ variant?: 'toolbar' | 'inline', disabled?: boolean, label?: string, ariaLabel?: string }} props
 */
export default function PrayerAudioBar({
  variant = 'toolbar',
  disabled = true,
  label,
  ariaLabel = 'Listen along (placeholder — add parish-approved audio)',
}) {
  const text = label ?? 'Listen'
  const cls =
    variant === 'inline' ? 'ph-prayer__audio ph-prayer__audio--inline' : 'ph-prayer__audio'

  return (
    <button type="button" className={cls} disabled={disabled} aria-label={ariaLabel}>
      <span aria-hidden="true">▶</span> {text}
    </button>
  )
}
