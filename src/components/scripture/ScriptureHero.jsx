import EmText from '../liturgy/EmText.jsx'
import SacredImageSlot from '../media/SacredImageSlot.jsx'

function ScriptureHeroArtSvg() {
  return (
    <svg className="scripture__hero-svg scripture__hero-svg--fallback" viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="scr-hero" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(212, 166, 60, 0.15)" />
            <stop offset="55%" stopColor="rgba(30, 58, 95, 0.2)" />
            <stop offset="100%" stopColor="rgba(212, 166, 60, 0.12)" />
          </linearGradient>
          <linearGradient id="scr-gold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(228, 201, 104, 0.55)" />
            <stop offset="100%" stopColor="rgba(212, 166, 60, 0.35)" />
          </linearGradient>
        </defs>
        <rect width="360" height="220" rx="16" fill="url(#scr-hero)" />
        {/* Open book / codex suggestion */}
        <path
          d="M88 48 L180 38 L180 182 L88 172 Z"
          fill="rgba(30, 58, 95, 0.12)"
          stroke="rgba(212, 166, 60, 0.35)"
          strokeWidth="1.2"
        />
        <path
          d="M272 48 L180 38 L180 182 L272 172 Z"
          fill="rgba(30, 58, 95, 0.08)"
          stroke="rgba(212, 166, 60, 0.28)"
          strokeWidth="1.2"
        />
        <path d="M180 38 L180 182" stroke="rgba(212, 166, 60, 0.4)" strokeWidth="1.5" />
        {/* Decorative manuscript lines */}
        <path
          d="M102 68h62 M102 88h52 M102 108h58 M102 128h48"
          stroke="rgba(30, 58, 95, 0.2)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M198 68h62 M198 88h54 M198 108h56 M198 128h50"
          stroke="rgba(30, 58, 95, 0.15)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Cross seal */}
        <circle cx="180" cy="158" r="18" fill="none" stroke="url(#scr-gold)" strokeWidth="1.2" />
        <path
          d="M180 148v20 M172 158h16"
          stroke="rgba(212, 166, 60, 0.65)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Reading path curve */}
        <path
          d="M40 190 Q120 165 180 175 T320 185"
          fill="none"
          stroke="rgba(212, 166, 60, 0.25)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
      </svg>
  )
}

function ScriptureHeroArt() {
  return (
    <figure className="scripture__hero-art" aria-hidden="true">
      <SacredImageSlot
        imageKey="learn.scriptureHero"
        className="scripture__hero-slot"
        loading="eager"
        fallback={<ScriptureHeroArtSvg />}
      />
    </figure>
  )
}

export default function ScriptureHero({ meta, hero }) {
  return (
    <header className="scripture__hero" aria-labelledby="scripture-hero-title">
      <div className="scripture__hero-grid">
        <div className="scripture__hero-copy">
          <p className="scripture__hero-eyebrow">{hero.eyebrow}</p>
          <h1 id="scripture-hero-title" className="scripture__hero-title">
            {meta.title}
          </h1>
          <p className="scripture__hero-intro">
            <EmText>{hero.intro}</EmText>
          </p>
          <div className="scripture__hero-actions">
            <a href={hero.anchorPaths} className="btn btn--primary scripture__hero-btn">
              {hero.ctaStart}
            </a>
            <a href={hero.anchorStructure} className="btn btn--ghost scripture__hero-btn">
              {hero.ctaStructure}
            </a>
          </div>
        </div>
        <ScriptureHeroArt />
      </div>
    </header>
  )
}
