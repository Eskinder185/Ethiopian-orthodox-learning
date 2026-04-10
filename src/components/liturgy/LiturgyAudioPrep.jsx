import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from './EmText.jsx'

export default function LiturgyAudioPrep({ title, lead, items }) {
  return (
    <LearnRevealSection className="liturgy-guide__section liturgy-guide__section--audio" aria-labelledby="liturgy-audio-title">
      <div className="liturgy-guide__section-head">
        <h2 id="liturgy-audio-title" className="liturgy-guide__section-title">
          {title}
        </h2>
        <p className="liturgy-guide__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ul className="liturgy-guide__audio-grid">
        {items.map((item) => (
          <li key={item.id}>
            <div className="liturgy-guide__audio-card">
              <span className="liturgy-guide__audio-tag">{item.tag}</span>
              <h3 className="liturgy-guide__audio-card-title">{item.title}</h3>
              <p className="liturgy-guide__audio-body">
                <EmText>{item.body}</EmText>
              </p>
              <div className="liturgy-guide__audio-wave" aria-hidden="true" />
            </div>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
