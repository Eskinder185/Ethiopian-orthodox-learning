import EmText from '../liturgy/EmText.jsx'
import SacredImageSlot from '../media/SacredImageSlot.jsx'

function ChurchHistoryHeroArtSvg() {
  return (
    <svg className="church-life__hero-svg church-life__hero-svg--fallback" viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="clh-ms" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(139, 90, 43, 0.15)" />
            <stop offset="100%" stopColor="rgba(30, 58, 95, 0.25)" />
          </linearGradient>
        </defs>
        <rect width="360" height="220" rx="14" fill="url(#clh-ms)" />
        <rect x="48" y="36" width="120" height="160" rx="4" fill="rgba(255, 252, 248, 0.08)" stroke="rgba(212, 166, 60, 0.35)" strokeWidth="1.2" />
        <path
          d="M60 56h96M60 72h80M60 88h90M60 104h70"
          stroke="rgba(250, 246, 238, 0.15)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M68 130 L88 118 L108 130 L128 112 L148 130" fill="none" stroke="rgba(212, 166, 60, 0.35)" strokeWidth="1.5" />
        <circle cx="88" cy="118" r="5" fill="none" stroke="rgba(228, 201, 104, 0.45)" strokeWidth="1" />
        <rect x="200" y="48" width="112" height="72" rx="6" fill="rgba(30, 58, 95, 0.2)" stroke="rgba(212, 166, 60, 0.25)" />
        <path d="M256 88 L256 108 M246 98 H266" stroke="rgba(228, 201, 104, 0.4)" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="260" cy="150" rx="36" ry="14" fill="rgba(212, 166, 60, 0.08)" />
      </svg>
  )
}

function ChurchHistoryHeroArt() {
  return (
    <figure className="church-life__hero-art" aria-hidden="true">
      <SacredImageSlot
        imageKey="learn.churchHistoryHero"
        className="church-life__hero-slot"
        loading="eager"
        fallback={<ChurchHistoryHeroArtSvg />}
      />
    </figure>
  )
}

export default function ChurchHistoryHero({ meta, hero }) {
  return (
    <header className="church-life__hero" aria-labelledby="church-life-hero-title">
      <div className="church-life__hero-grid">
        <div className="church-life__hero-copy">
          <p className="church-life__hero-eyebrow">{hero.eyebrow}</p>
          <h1 id="church-life-hero-title" className="church-life__hero-title">
            {meta.title}
          </h1>
          <p className="church-life__hero-intro">
            <EmText>{hero.intro}</EmText>
          </p>
          <div className="church-life__hero-actions">
            <a href={hero.anchorTimeline} className="btn btn--primary church-life__hero-btn">
              {hero.ctaTimeline}
            </a>
            <a href={hero.anchorPlaces} className="btn btn--ghost church-life__hero-btn">
              {hero.ctaPlaces}
            </a>
          </div>
        </div>
        <ChurchHistoryHeroArt />
      </div>
    </header>
  )
}
