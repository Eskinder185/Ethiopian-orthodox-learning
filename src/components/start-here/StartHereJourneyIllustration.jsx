import { useTranslation } from 'react-i18next'

/**
 * Symbolic SVG: a quiet path toward a church — spiritual journey, not decoration for entertainment.
 */
export default function StartHereJourneyIllustration() {
  const { t } = useTranslation('common')
  const titleId = 'start-here-journey-svg-title'

  return (
    <figure className="start-here-journey">
      <svg
        className="start-here-journey__svg"
        viewBox="0 0 360 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby={titleId}
      >
        <title id={titleId}>{t('startHere.journeyIllustrationAria')}</title>
        <defs>
          <linearGradient id="sh-journey-sky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(232, 228, 218, 0.95)" />
            <stop offset="55%" stopColor="rgba(245, 238, 226, 0.9)" />
            <stop offset="100%" stopColor="rgba(220, 212, 198, 0.85)" />
          </linearGradient>
          <linearGradient id="sh-journey-path" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(180, 145, 75, 0.35)" />
            <stop offset="50%" stopColor="rgba(212, 166, 60, 0.5)" />
            <stop offset="100%" stopColor="rgba(139, 105, 20, 0.45)" />
          </linearGradient>
        </defs>

        <rect width="360" height="220" fill="url(#sh-journey-sky)" rx="12" />

        {/* Distant land */}
        <path
          d="M0 148 C60 132 120 138 180 128 S300 118 360 124 V220 H0Z"
          fill="rgba(45, 62, 52, 0.08)"
          aria-hidden="true"
        />
        <path
          d="M0 168 C80 152 140 162 220 154 S320 148 360 156 V220 H0Z"
          fill="rgba(30, 58, 95, 0.06)"
          aria-hidden="true"
        />

        {/* Winding path */}
        <path
          d="M32 198 C52 172 88 158 128 148 S200 128 238 108 S288 88 308 78"
          stroke="url(#sh-journey-path)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          aria-hidden="true"
        />
        <path
          d="M32 198 C52 172 88 158 128 148 S200 128 238 108 S288 88 308 78"
          stroke="rgba(255, 252, 248, 0.35)"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          transform="translate(0, -1)"
          aria-hidden="true"
        />

        {/* Small wayfarer (abstract) */}
        <circle cx="48" cy="188" r="4" fill="rgba(30, 58, 95, 0.2)" aria-hidden="true" />
        <path
          d="M48 184v8M44 188h8"
          stroke="rgba(139, 105, 20, 0.4)"
          strokeWidth="1.2"
          strokeLinecap="round"
          aria-hidden="true"
        />

        {/* Church — round church / sanctuary silhouette (symbolic) */}
        <g transform="translate(278, 52)" aria-hidden="true">
          <ellipse cx="28" cy="62" rx="26" ry="7" fill="rgba(30, 45, 62, 0.12)" />
          <rect
            x="8"
            y="34"
            width="40"
            height="30"
            rx="2"
            fill="rgba(255, 252, 248, 0.92)"
            stroke="rgba(139, 105, 20, 0.28)"
            strokeWidth="1"
          />
          <path
            d="M8 34 Q28 8 48 34"
            fill="rgba(250, 246, 238, 0.95)"
            stroke="rgba(139, 105, 20, 0.3)"
            strokeWidth="1"
          />
          <rect x="26" y="4" width="4" height="14" rx="0.5" fill="rgba(212, 166, 60, 0.55)" />
          <rect x="22" y="8" width="12" height="2" rx="0.5" fill="rgba(212, 166, 60, 0.45)" />
          <rect x="22" y="48" width="6" height="10" rx="1" fill="rgba(30, 58, 95, 0.15)" />
          <rect x="34" y="48" width="6" height="10" rx="1" fill="rgba(30, 58, 95, 0.15)" />
        </g>

        {/* Soft horizon line */}
        <line
          x1="0"
          y1="148"
          x2="360"
          y2="148"
          stroke="rgba(212, 166, 60, 0.12)"
          strokeWidth="1"
          aria-hidden="true"
        />
      </svg>
    </figure>
  )
}
