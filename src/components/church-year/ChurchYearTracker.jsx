import { Link } from 'react-router-dom'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'

export default function ChurchYearTracker({ title, lead, tracker }) {
  return (
    <LearnRevealSection className="church-year__section church-year__section--tracker" aria-labelledby="church-year-tracker-title">
      <div className="church-year__section-head">
        <h2 id="church-year-tracker-title" className="church-year__section-title">
          {title}
        </h2>
        <p className="church-year__section-lead">
          <EmText>{lead}</EmText>
        </p>
      </div>
      <div className="church-year__tracker-card">
        <ul className="church-year__tracker-list">
          <li>
            <span className="church-year__tracker-k">Current season</span>
            <span className="church-year__tracker-v">
              <EmText>{tracker.currentSeason}</EmText>
            </span>
          </li>
          <li>
            <span className="church-year__tracker-k">Next great feast</span>
            <span className="church-year__tracker-v">
              <EmText>{tracker.nextFeast}</EmText>
            </span>
          </li>
          <li>
            <span className="church-year__tracker-k">Next shared fast</span>
            <span className="church-year__tracker-v">
              <EmText>{tracker.nextFast}</EmText>
            </span>
          </li>
        </ul>
        <Link to={tracker.actionTo} className="btn btn--secondary church-year__tracker-btn">
          {tracker.actionLabel}
        </Link>
      </div>
    </LearnRevealSection>
  )
}
