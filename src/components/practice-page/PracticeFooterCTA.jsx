import { Link } from 'react-router-dom'
import EmText from '../liturgy/EmText.jsx'

/**
 * @param {{ block: { headline: string, sub: string, startToday: { label: string, href: string }, calendar: { label: string, to: string }, startHere: { label: string, to: string } } }} props
 */
export default function PracticeFooterCTA({ block }) {
  return (
    <section className="ph-hub__footer-cta pp-section pp-section--footer-cta" aria-labelledby="ph-hub-footer-cta-title">
      <h2 id="ph-hub-footer-cta-title" className="ph-hub__footer-cta-title">
        {block.headline}
      </h2>
      <p className="ph-hub__footer-cta-sub">
        <EmText>{block.sub}</EmText>
      </p>
      <div className="ph-hub__footer-cta-actions">
        <a href={block.startToday.href} className="btn btn--primary ph-hub__btn">
          {block.startToday.label}
        </a>
        <Link to={block.calendar.to} className="btn btn--secondary ph-hub__btn">
          {block.calendar.label}
        </Link>
        <Link to={block.startHere.to} className="btn btn--ghost ph-hub__btn">
          {block.startHere.label}
        </Link>
      </div>
    </section>
  )
}
