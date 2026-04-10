/**
 * @param {{ steps: Array<{ id: string, title: string }>, activeIndex: number, onStepChange: (i: number) => void }} props
 */
export default function PrayerStepper({ steps, activeIndex, onStepChange }) {
  return (
    <ol className="ph-prayer__timeline" aria-label="Prayer steps">
      {steps.map((s, i) => (
        <li key={s.id} className="ph-prayer__timeline-item">
          <button
            type="button"
            className={`ph-prayer__timeline-node${i === activeIndex ? ' ph-prayer__timeline-node--active' : ''}`}
            aria-current={i === activeIndex ? 'step' : undefined}
            onClick={() => onStepChange(i)}
          >
            <span className="ph-prayer__timeline-num">{i + 1}</span>
            <span className="ph-prayer__timeline-label">{s.title}</span>
          </button>
        </li>
      ))}
    </ol>
  )
}
