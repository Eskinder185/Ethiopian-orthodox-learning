import { Link } from 'react-router-dom'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import EmText from '../liturgy/EmText.jsx'
import { orthodoxImage } from '../../constants/orthodoxImageManifest.js'

const TIME_IMG = {
  5: () => orthodoxImage('practice.time5').src,
  10: () => orthodoxImage('practice.time10').src,
  20: () => orthodoxImage('practice.time20').src,
}

/**
 * @param {{ data: { title: string, lead: string, blocks: Array<{ id: string, minutes: number, title: string, blurb: string, to: string, hash?: string }> } }} props
 */
export default function PracticeByTimeSection({ data }) {
  return (
    <LearnRevealSection
      className="ph-hub__section ph-hub__section--time pp-section pp-section--time"
      aria-labelledby="ph-hub-time-title"
    >
      <div className="ph-hub__section-head">
        <h2 id="ph-hub-time-title" className="ph-hub__section-title">
          {data.title}
        </h2>
        <p className="ph-hub__section-lead">
          <EmText>{data.lead}</EmText>
        </p>
      </div>
      <ul className="ph-hub__time-grid">
        {data.blocks.map((b) => {
          const art = TIME_IMG[b.minutes]?.() ?? null
          return (
            <li key={b.id}>
              <Link
                to={`${b.to}${b.hash || ''}`}
                className="ph-hub__time-card"
                data-duration={String(b.minutes)}
              >
                <div
                  className={`ph-hub__time-visual ${art ? 'ph-hub__time-visual--photo' : 'ph-hub__time-visual--gradient'}`}
                  aria-hidden="true"
                >
                  {art ? (
                    <img src={art} alt="" loading="lazy" decoding="async" width={400} height={220} />
                  ) : null}
                </div>
                <span className="ph-hub__time-min">{b.minutes} min</span>
                <span className="ph-hub__time-title">{b.title}</span>
                <p className="ph-hub__time-blurb">
                  <EmText>{b.blurb}</EmText>
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </LearnRevealSection>
  )
}
