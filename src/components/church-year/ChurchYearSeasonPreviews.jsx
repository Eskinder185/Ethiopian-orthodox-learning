import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

export default function ChurchYearSeasonPreviews({ title, lead, previews }) {
  return (
    <LearnRevealSection className="church-year__section church-year__section--previews" aria-labelledby="church-year-previews-title">
      <div className="church-year__section-head">
        <h2 id="church-year-previews-title" className="church-year__section-title">
          {title}
        </h2>
        <p className="church-year__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ul className="church-year__preview-grid">
        {previews.map((p) => (
          <li key={p.id}>
            <article className="church-year__preview-card">
              <span className="church-year__preview-tag">{p.tag}</span>
              <h3 className="church-year__preview-name">{p.name}</h3>
              <p className="church-year__preview-blurb">
                <EmText>{p.blurb}</EmText>
              </p>
              <div className="church-year__preview-placeholder" aria-hidden="true" />
            </article>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
