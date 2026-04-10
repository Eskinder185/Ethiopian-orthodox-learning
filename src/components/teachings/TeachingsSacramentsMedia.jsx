import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import SacredImageSlot from '../media/SacredImageSlot.jsx'

export default function TeachingsSacramentsMedia({ title, lead, items }) {
  return (
    <LearnRevealSection
      className="teachings-sac__section teachings-sac__section--media"
      aria-labelledby="teachings-sac-media-title"
    >
      <div className="teachings-sac__section-head">
        <h2 id="teachings-sac-media-title" className="teachings-sac__section-title">
          {title}
        </h2>
        <p className="teachings-sac__section-lead">{lead}</p>
      </div>
      <ul className="teachings-sac__media-grid">
        {items.map((item) => (
          <li key={item.id}>
            <div className="teachings-sac__media-card">
              {item.imageKey ? (
                <SacredImageSlot imageKey={item.imageKey} className="teachings-sac__media-visual" loading="lazy" />
              ) : (
                <div className="teachings-sac__media-visual teachings-sac__media-visual--empty" aria-hidden="true" />
              )}
              <span className="teachings-sac__media-tag">{item.tag}</span>
              <h3 className="teachings-sac__media-title">{item.title}</h3>
              <p className="teachings-sac__media-body">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
