import EmText from './EmText.jsx'
import SacredImageSlot from '../media/SacredImageSlot.jsx'

function LiturgyHeroArtSvg() {
  return (
    <svg className="liturgy-guide__hero-svg liturgy-guide__hero-svg--fallback" viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lg-q" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(212, 166, 60, 0.22)" />
            <stop offset="100%" stopColor="rgba(30, 58, 95, 0.35)" />
          </linearGradient>
        </defs>
        <rect width="360" height="220" rx="16" fill="url(#lg-q)" opacity="0.9" />
        <path
          d="M180 28 L180 52 M168 40 H192"
          stroke="rgba(228, 201, 104, 0.55)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M120 168 L120 92 L180 52 L240 92 L240 168 Z"
          fill="rgba(255, 252, 248, 0.06)"
          stroke="rgba(228, 201, 104, 0.35)"
          strokeWidth="1.2"
        />
        <path d="M140 168 H220" stroke="rgba(228, 201, 104, 0.25)" strokeWidth="1.5" />
        <ellipse cx="180" cy="188" rx="48" ry="10" fill="rgba(212, 166, 60, 0.08)" />
        <path
          d="M60 178 Q120 150 180 158 T300 178"
          fill="none"
          stroke="rgba(212, 166, 60, 0.2)"
          strokeWidth="1.5"
        />
        <circle cx="180" cy="128" r="14" fill="none" stroke="rgba(228, 201, 104, 0.4)" strokeWidth="1.2" />
        <path d="M174 122 L186 134 M186 122 L174 134" stroke="rgba(228, 201, 104, 0.35)" strokeWidth="1" />
      </svg>
  )
}

function LiturgyHeroArt() {
  return (
    <figure className="liturgy-guide__hero-art" aria-hidden="true">
      <SacredImageSlot
        imageKey="learn.liturgyHero"
        className="liturgy-guide__hero-slot"
        loading="eager"
        fallback={<LiturgyHeroArtSvg />}
      />
    </figure>
  )
}

export default function LiturgyHero({ meta, hero }) {
  return (
    <header className="liturgy-guide__hero" aria-labelledby="liturgy-guide-hero-title">
      <div className="liturgy-guide__hero-grid">
        <div className="liturgy-guide__hero-copy">
          <p className="liturgy-guide__hero-eyebrow">{hero.eyebrow}</p>
          <h1 id="liturgy-guide-hero-title" className="liturgy-guide__hero-title">
            {meta.title}
          </h1>
          <p className="liturgy-guide__hero-intro">
            <EmText>{hero.intro}</EmText>
          </p>
          <div className="liturgy-guide__hero-actions">
            <a href={hero.anchorFlow} className="btn btn--primary liturgy-guide__hero-btn">
              {hero.ctaFlow}
            </a>
            <a href={hero.anchorPrepare} className="btn btn--ghost liturgy-guide__hero-btn">
              {hero.ctaPrepare}
            </a>
          </div>
        </div>
        <LiturgyHeroArt />
      </div>
    </header>
  )
}
