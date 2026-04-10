import { Link } from 'react-router-dom'
import { getLiturgicalDayState } from '../../utils/liturgicalCalendar.js'
import { paths } from '../../constants/paths.js'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'
import { practiceHubImage } from '../../constants/practiceHubImages.js'

/**
 * @param {{ copy: { title: string, lead: string, reflection: string } }} props
 */
export default function SeasonalPracticeStrip({ copy }) {
  const state = getLiturgicalDayState(new Date())
  const feastName = state.matchingFeasts?.[0]?.name
  const seasonImg = practiceHubImage('seasonalPractice')
  const seasonLine = state.inGreatLent
    ? 'Great Lent'
    : state.isBrightWeek
      ? 'Bright week'
      : state.ethiopianMonthName
        ? `${state.ethiopianMonthName} (${state.ethiopianFormatted})`
        : 'Church year'

  return (
    <LearnRevealSection
      id="practice-hub-season"
      className="ph-hub__section ph-hub__section--season ph-hub__section--season-premium pp-section pp-section--season"
      aria-labelledby="ph-hub-season-title"
    >
      {seasonImg ? (
        <div className="ph-hub__season-hero">
          <img src={seasonImg} alt="" className="ph-hub__season-hero-img" loading="lazy" decoding="async" />
          <div className="ph-hub__season-hero-scrim" aria-hidden="true" />
          <div className="ph-hub__season-hero-copy">
            <h2 id="ph-hub-season-title" className="ph-hub__season-hero-title">
              {copy.title}
            </h2>
            <p className="ph-hub__season-hero-lead">
              <EmText>{copy.lead}</EmText>
            </p>
          </div>
        </div>
      ) : (
        <div className="ph-hub__section-head">
          <h2 id="ph-hub-season-title" className="ph-hub__section-title">
            {copy.title}
          </h2>
          <p className="ph-hub__section-lead">
            <EmText>{copy.lead}</EmText>
          </p>
        </div>
      )}
      <div className="ph-hub__season-grid">
        <article className="ph-hub__season-card">
          <span className="ph-hub__season-kicker">Now</span>
          <h3 className="ph-hub__season-h">{feastName || seasonLine}</h3>
          <p className="ph-hub__season-p">{state.primaryFastLabel}</p>
          <Link to={paths.calendar.today} className="ph-hub__season-link">
            Today in the Church →
          </Link>
        </article>
        <article className="ph-hub__season-card">
          <span className="ph-hub__season-kicker">Linked prayer</span>
          <h3 className="ph-hub__season-h">Daily prayer</h3>
          <p className="ph-hub__season-p">
            <EmText>Match **home** prayer to **fast** or **feast** as your **priest** directs.</EmText>
          </p>
          <Link to={`${paths.practice.prayer}#daily-prayer`} className="ph-hub__season-link">
            Open prayer practice →
          </Link>
        </article>
        <article className="ph-hub__season-card">
          <span className="ph-hub__season-kicker">Linked mezmur</span>
          <h3 className="ph-hub__season-h">Chant by season</h3>
          <p className="ph-hub__season-p">
            <EmText>Filter **feasts** and **season** in the library — **listen** before you **sing**.</EmText>
          </p>
          <Link to={`${paths.practice.chants}#chant-browser-grid`} className="ph-hub__season-link">
            Open chant library →
          </Link>
        </article>
        <article className="ph-hub__season-card ph-hub__season-card--reflect">
          <span className="ph-hub__season-kicker">Reflection</span>
          <h3 className="ph-hub__season-h">Suggested note</h3>
          <p className="ph-hub__season-p">
            <EmText>{copy.reflection}</EmText>
          </p>
        </article>
      </div>
    </LearnRevealSection>
  )
}
