import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import SacramentIcon from './SacramentIcon.jsx'

function Spotlight({ s }) {
  return (
    <article id={`sacrament-${s.id}`} className="teachings-sac__spotlight" tabIndex={-1}>
      <header className="teachings-sac__spotlight-head">
        <span className="teachings-sac__spotlight-icon" aria-hidden="true">
          <SacramentIcon variant={s.icon} className="teachings-sac__spotlight-svg" />
        </span>
        <div>
          <h3 className="teachings-sac__spotlight-title">{s.name}</h3>
          <p className="teachings-sac__spotlight-summary">{s.summary}</p>
        </div>
      </header>
      <dl className="teachings-sac__spotlight-dl">
        <div className="teachings-sac__spotlight-row">
          <dt>Visible sign</dt>
          <dd>{s.visibleSign}</dd>
        </div>
        <div className="teachings-sac__spotlight-row">
          <dt>Spiritual meaning</dt>
          <dd>{s.spiritualMeaning}</dd>
        </div>
        <div className="teachings-sac__spotlight-row">
          <dt>Scripture</dt>
          <dd>{s.scripture}</dd>
        </div>
        <div className="teachings-sac__spotlight-row teachings-sac__spotlight-row--accent">
          <dt>In daily life</dt>
          <dd>{s.dailyLife}</dd>
        </div>
      </dl>
    </article>
  )
}

export default function TeachingsSacramentSpotlights({ title, lead, sacraments }) {
  return (
    <LearnRevealSection
      className="teachings-sac__section teachings-sac__section--spotlights"
      aria-labelledby="teachings-sac-spotlights-title"
    >
      <div className="teachings-sac__section-head">
        <h2 id="teachings-sac-spotlights-title" className="teachings-sac__section-title">
          {title}
        </h2>
        <p className="teachings-sac__section-lead">{lead}</p>
      </div>
      <div className="teachings-sac__spotlight-stack">
        {sacraments.map((s) => (
          <Spotlight key={s.id} s={s} />
        ))}
      </div>
    </LearnRevealSection>
  )
}
