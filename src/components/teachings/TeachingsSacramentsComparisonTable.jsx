import LearnRevealSection from '../learn/LearnRevealSection.jsx'

export default function TeachingsSacramentsComparisonTable({ title, lead, sacraments }) {
  return (
    <LearnRevealSection
      className="teachings-sac__section teachings-sac__section--table"
      aria-labelledby="teachings-sac-table-title"
    >
      <div className="teachings-sac__section-head">
        <h2 id="teachings-sac-table-title" className="teachings-sac__section-title">
          {title}
        </h2>
        <p className="teachings-sac__section-lead">{lead}</p>
      </div>
      <div className="teachings-sac__table-wrap" role="region" aria-label="Sacraments comparison" tabIndex={0}>
        <table className="teachings-sac__table">
          <thead>
            <tr>
              <th scope="col">Sacrament</th>
              <th scope="col">Visible sign</th>
              <th scope="col">Spiritual effect</th>
              <th scope="col">Scriptural basis</th>
              <th scope="col">Related practice</th>
            </tr>
          </thead>
          <tbody>
            {sacraments.map((s) => (
              <tr key={s.id}>
                <th scope="row">{s.name}</th>
                <td>{s.compare.visibleSign}</td>
                <td>{s.compare.spiritualEffect}</td>
                <td>{s.compare.scripturalBasis}</td>
                <td>{s.compare.relatedPractice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LearnRevealSection>
  )
}
