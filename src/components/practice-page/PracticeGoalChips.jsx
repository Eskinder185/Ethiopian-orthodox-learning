import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

/**
 * @param {{ goals: { title: string, lead: string, filters: Array<{ id: string, label: string, hash: string }> } }} props
 */
export default function PracticeGoalChips({ goals }) {
  return (
    <LearnRevealSection
      id="practice-hub-goals"
      className="ph-hub__section ph-hub__section--goals pp-section pp-section--goals"
      aria-labelledby="ph-hub-goals-title"
    >
      <div className="ph-hub__section-head">
        <h2 id="ph-hub-goals-title" className="ph-hub__section-title">
          {goals.title}
        </h2>
        <p className="ph-hub__section-lead">
          <EmText>{goals.lead}</EmText>
        </p>
      </div>
      <div className="ph-hub__goals-panel">
        <div className="ph-hub__goals-chips" role="group" aria-label="Goals">
          {goals.filters.map((f) => (
            <a key={f.id} href={f.hash} className="ph-hub__goal-chip">
              {f.label}
            </a>
          ))}
        </div>
      </div>
    </LearnRevealSection>
  )
}
