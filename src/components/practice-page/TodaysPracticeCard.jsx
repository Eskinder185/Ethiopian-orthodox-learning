import { Link } from 'react-router-dom'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'
import { practiceHubSpotlightPresets } from '../../content/practiceHubVisualContent.js'
import { practiceHubImage } from '../../constants/practiceHubImages.js'

/**
 * @param {{ presets?: typeof practiceHubSpotlightPresets }} props
 */
export default function TodaysPracticeCard({
  presets = practiceHubSpotlightPresets,
}) {
  const day = new Date().getDay()
  const pick = presets[day % presets.length]
  const spotImg = practiceHubImage('todayPractice')

  return (
    <LearnRevealSection
      id="practice-hub-spotlight"
      className="ph-hub__section ph-hub__section--spotlight pp-section pp-section--spotlight"
      aria-labelledby="ph-hub-spotlight-title"
    >
      <article className="ph-hub__spotlight-card ph-hub__spotlight-card--split">
        {spotImg ? (
          <div className="ph-hub__spotlight-visual">
            <img src={spotImg} alt="" loading="lazy" decoding="async" width={480} height={560} />
          </div>
        ) : null}
        <div className="ph-hub__spotlight-copy">
          <div className="ph-hub__spotlight-meta">
            <span className="ph-hub__spotlight-time">{pick.timeEstimate}</span>
            <span className="ph-hub__spotlight-tag">{pick.seasonTag}</span>
          </div>
          <h2 id="ph-hub-spotlight-title" className="ph-hub__spotlight-title">
            {pick.title}
          </h2>
          <p className="ph-hub__spotlight-body">
            <EmText>{pick.body}</EmText>
          </p>
          <Link to={`${pick.to}${pick.hash || ''}`} className="btn btn--primary ph-hub__spotlight-btn">
            {pick.cta}
          </Link>
        </div>
      </article>
    </LearnRevealSection>
  )
}
