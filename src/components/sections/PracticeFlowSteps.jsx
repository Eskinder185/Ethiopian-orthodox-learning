import '../../styles/ContentComponents.css'

/**
 * Numbered practice flow — steps are short, original instructions (not liturgical text).
 */
export default function PracticeFlowSteps({ steps = [], title = 'Step-by-step flow' }) {
  if (!steps.length) return null

  return (
    <div className="practice-flow" aria-labelledby="practice-flow-heading">
      <h2 id="practice-flow-heading" className="practice-flow__title">
        {title}
      </h2>
      <ol className="practice-flow__list">
        {steps.map((text, i) => (
          <li key={i} className="practice-flow__item">
            {text}
          </li>
        ))}
      </ol>
    </div>
  )
}
