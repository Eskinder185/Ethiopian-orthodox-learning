import { Link } from 'react-router-dom'
import EmText from '../liturgy/EmText.jsx'
import PrayerAudioBar from './PrayerAudioBar.jsx'

/**
 * @param {{ active: { title: string, summary: string, anchor: string }, prayerBasePath: string, activeIndex: number, stepCount: number, onPrev: () => void, onNext: () => void }} props
 */
export default function PrayerDetailCard({
  active,
  prayerBasePath,
  activeIndex,
  stepCount,
  onPrev,
  onNext,
}) {
  return (
    <article className="ph-prayer__focus" aria-live="polite">
      <h3 className="ph-prayer__focus-title">{active.title}</h3>
      <p className="ph-prayer__focus-body">
        <EmText>{active.summary}</EmText>
      </p>
      <div className="ph-prayer__focus-actions">
        <PrayerAudioBar variant="inline" />
        <Link to={`${prayerBasePath}#${active.anchor}`} className="btn btn--secondary">
          Open full text
        </Link>
      </div>
      <div className="ph-prayer__nav">
        <button type="button" className="btn btn--ghost" disabled={activeIndex <= 0} onClick={onPrev}>
          Previous
        </button>
        <button
          type="button"
          className="btn btn--primary"
          disabled={activeIndex >= stepCount - 1}
          onClick={onNext}
        >
          Next step
        </button>
      </div>
    </article>
  )
}
