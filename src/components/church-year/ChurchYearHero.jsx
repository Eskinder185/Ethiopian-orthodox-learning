import EmText from '../liturgy/EmText.jsx'
import SacredImageSlot from '../media/SacredImageSlot.jsx'

function ChurchYearHeroArtSvg() {
  return (
    <svg className="church-year__hero-svg church-year__hero-svg--fallback" viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cy-hero" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(212, 166, 60, 0.2)" />
            <stop offset="100%" stopColor="rgba(30, 58, 95, 0.35)" />
          </linearGradient>
        </defs>
        <rect width="360" height="220" rx="16" fill="url(#cy-hero)" />
        <circle cx="180" cy="110" r="72" fill="none" stroke="rgba(228, 201, 104, 0.35)" strokeWidth="1.5" />
        <circle cx="180" cy="110" r="48" fill="rgba(212, 166, 60, 0.08)" stroke="rgba(212, 166, 60, 0.25)" />
        <path
          d="M180 38 L180 182 M108 110 H252 M138 62 L222 158 M222 62 L138 158"
          stroke="rgba(228, 201, 104, 0.2)"
          strokeWidth="1"
        />
        <circle cx="180" cy="110" r="6" fill="rgba(212, 166, 60, 0.5)" />
        <path
          d="M60 178 Q120 150 180 158 T300 172"
          fill="none"
          stroke="rgba(212, 166, 60, 0.25)"
          strokeWidth="1.5"
        />
      </svg>
  )
}

function ChurchYearHeroArt() {
  return (
    <figure className="church-year__hero-art" aria-hidden="true">
      <SacredImageSlot
        imageKey="learn.churchYearHero"
        className="church-year__hero-slot"
        loading="eager"
        fallback={<ChurchYearHeroArtSvg />}
      />
    </figure>
  )
}

export default function ChurchYearHero({ meta, hero }) {
  return (
    <header className="church-year__hero" aria-labelledby="church-year-hero-title">
      <div className="church-year__hero-grid">
        <div className="church-year__hero-copy">
          <p className="church-year__hero-eyebrow">{hero.eyebrow}</p>
          <h1 id="church-year-hero-title" className="church-year__hero-title">
            {meta.title}
          </h1>
          <p className="church-year__hero-intro">
            <EmText>{hero.intro}</EmText>
          </p>
          <div className="church-year__hero-actions">
            <a href={hero.anchorWheel} className="btn btn--primary church-year__hero-btn">
              {hero.ctaRhythm}
            </a>
            <a href={hero.anchorSeasons} className="btn btn--ghost church-year__hero-btn">
              {hero.ctaSeasons}
            </a>
          </div>
        </div>
        <ChurchYearHeroArt />
      </div>
    </header>
  )
}
