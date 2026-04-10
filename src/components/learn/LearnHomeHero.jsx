import { useTranslation } from 'react-i18next'
import ActionButton from '../ui/ActionButton.jsx'
import { paths } from '../../constants/paths.js'
import SacredImageSlot from '../media/SacredImageSlot.jsx'
import LearnBreadcrumbs from './LearnBreadcrumbs.jsx'

function LearnHeroIllustrationSvg() {
  return (
    <svg className="learn-hero__svg learn-hero__svg--fallback" viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="learn-hero-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(228, 201, 104, 0.35)" />
          <stop offset="55%" stopColor="rgba(30, 58, 95, 0.25)" />
          <stop offset="100%" stopColor="rgba(15, 28, 48, 0.5)" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" rx="20" fill="url(#learn-hero-glow)" opacity="0.9" />
      <path
        d="M200 36 L200 92 M176 64 H224"
        stroke="rgba(228, 201, 104, 0.55)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect
        x="118"
        y="108"
        width="164"
        height="118"
        rx="6"
        fill="rgba(255, 252, 248, 0.06)"
        stroke="rgba(228, 201, 104, 0.28)"
        strokeWidth="1.2"
      />
      <path
        d="M138 132 H262 M138 156 H248 M138 180 H256 M138 204 H240"
        stroke="rgba(250, 246, 238, 0.12)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M52 198 C90 168 130 188 200 158 S310 138 348 168"
        fill="none"
        stroke="rgba(212, 166, 60, 0.22)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function LearnHeroIllustration() {
  return (
    <figure className="learn-hero__figure" aria-hidden="true">
      <SacredImageSlot
        imageKey="learn.hubHero"
        className="learn-hero__slot"
        imgClassName="learn-hero__slot-img"
        loading="eager"
        fallback={<LearnHeroIllustrationSvg />}
      />
    </figure>
  )
}

export default function LearnHomeHero() {
  const { t } = useTranslation('common')

  return (
    <header className="learn-hero" aria-labelledby="learn-hero-heading">
      <div className="learn-hero__inner">
        <div className="learn-hero__copy">
          <LearnBreadcrumbs />
          <p className="learn-hero__eyebrow">{t('learnHub.hero.eyebrow')}</p>
          <h1 id="learn-hero-heading" className="learn-hero__title">
            {t('learnHub.hero.headline')}
          </h1>
          <p className="learn-hero__support">{t('learnHub.hero.support')}</p>
          <div className="learn-hero__actions">
            <ActionButton to={paths.learn.teachings} variant="primary" className="learn-hero__btn">
              {t('learnHub.hero.ctaPrimary')}
            </ActionButton>
            <ActionButton
              to={`${paths.learn.index}#learn-paths`}
              variant="ghost"
              className="learn-hero__btn learn-hero__btn--ghost"
            >
              {t('learnHub.hero.ctaSecondary')}
            </ActionButton>
          </div>
        </div>
        <LearnHeroIllustration />
      </div>
    </header>
  )
}
