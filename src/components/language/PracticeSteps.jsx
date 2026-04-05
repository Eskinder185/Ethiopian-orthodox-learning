import PracticeFlowSteps from '../sections/PracticeFlowSteps.jsx'

/**
 * Language-section wrapper around the shared numbered flow (same styling as practice pages).
 */
export default function PracticeSteps({ title, steps = [] }) {
  return <PracticeFlowSteps title={title} steps={steps} />
}
