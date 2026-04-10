import EmText from '../liturgy/EmText.jsx'

/**
 * @param {{ exercises: Array<{ id: string, title: string, hint: string }> }} props
 */
export default function RhythmExerciseCards({ exercises }) {
  return (
    <ul className="inst-vis__rhythm-list">
      {exercises.map((ex) => (
        <li key={ex.id}>
          <article className="inst-vis__rhythm-card">
            <div className="inst-vis__diagram inst-vis__diagram--sm" aria-hidden="true" data-kind="rhythm" />
            <h3 className="inst-vis__rhythm-h">{ex.title}</h3>
            <p className="inst-vis__blurb">
              <EmText>{ex.hint}</EmText>
            </p>
          </article>
        </li>
      ))}
    </ul>
  )
}
