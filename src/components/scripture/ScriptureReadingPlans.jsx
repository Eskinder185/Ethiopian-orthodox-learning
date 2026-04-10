import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

export default function ScriptureReadingPlans({ title, lead, plans }) {
  return (
    <LearnRevealSection
      className="scripture__section scripture__section--plans"
      aria-labelledby="scripture-plans-title"
    >
      <div className="scripture__section-head">
        <h2 id="scripture-plans-title" className="scripture__section-title">
          {title}
        </h2>
        <p className="scripture__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <ul className="scripture__plans-grid">
        {plans.map((plan) => (
          <li key={plan.id}>
            <article className="scripture__plan-card">
              <div className="scripture__plan-top">
                <span className="scripture__plan-tag">{plan.tag}</span>
                <h3 className="scripture__plan-title">{plan.title}</h3>
              </div>
              <p className="scripture__plan-desc">
                <EmText>{plan.description}</EmText>
              </p>
              <ul className="scripture__plan-bullets">
                {plan.bullets.map((b, i) => (
                  <li key={i}>
                    <EmText>{b}</EmText>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </LearnRevealSection>
  )
}
