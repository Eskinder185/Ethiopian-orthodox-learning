import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from './EmText.jsx'

function BulletList({ items }) {
  return (
    <ul className="liturgy-guide__beginner-list">
      {items.map((line, i) => (
        <li key={i}>
          <EmText>{line}</EmText>
        </li>
      ))}
    </ul>
  )
}

export default function LiturgyBeginnerGuide({ id, content }) {
  const { title, lead, whatToExpect, howToFollow, commonActions, reminders } = content
  return (
    <LearnRevealSection
      id={id}
      className="liturgy-guide__section liturgy-guide__section--beginner"
      aria-labelledby="liturgy-beginner-title"
    >
      <div className="liturgy-guide__section-head">
        <h2 id="liturgy-beginner-title" className="liturgy-guide__section-title">
          {title}
        </h2>
        <p className="liturgy-guide__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <div className="liturgy-guide__beginner-grid">
        <section className="liturgy-guide__beginner-block" aria-labelledby="liturgy-exp-heading">
          <h3 id="liturgy-exp-heading" className="liturgy-guide__beginner-h">
            What to expect
          </h3>
          <BulletList items={whatToExpect} />
        </section>
        <section className="liturgy-guide__beginner-block" aria-labelledby="liturgy-follow-heading">
          <h3 id="liturgy-follow-heading" className="liturgy-guide__beginner-h">
            How to follow respectfully
          </h3>
          <BulletList items={howToFollow} />
        </section>
        <section className="liturgy-guide__beginner-block" aria-labelledby="liturgy-actions-heading">
          <h3 id="liturgy-actions-heading" className="liturgy-guide__beginner-h">
            Common actions
          </h3>
          <BulletList items={commonActions} />
        </section>
        <section
          className="liturgy-guide__beginner-block liturgy-guide__beginner-block--remind"
          aria-labelledby="liturgy-remind-heading"
        >
          <h3 id="liturgy-remind-heading" className="liturgy-guide__beginner-h">
            Gentle reminders
          </h3>
          <BulletList items={reminders} />
        </section>
      </div>
    </LearnRevealSection>
  )
}
