import { useTranslation } from 'react-i18next'
import ActionButton from '../ui/ActionButton.jsx'
import { paths } from '../../constants/paths.js'
import HeroVisual from './HeroVisual.jsx'
import './HeroSection.css'

/**
 * Sacred editorial hero: eyebrow, stacked headline, support, CTAs, trust, visual.
 * Media: set `homeHeroMedia` in content/homeContent.js when assets exist.
 */
export default function HomeHeroSection({ heroImageSrc, heroVideoSrc, heroImageAlt = '' }) {
  const { t } = useTranslation('common')

  return (
    <header className="home-hero" aria-labelledby="home-hero-heading">
      <div className="home-hero__inner">
        <div className="home-hero__copy">
          <p className="home-hero__eyebrow">{t('home.hero.eyebrow')}</p>
          <h1 id="home-hero-heading" className="home-hero__headline">
            <span className="home-hero__hl">{t('home.hero.headlineLine1')}</span>
            <span className="home-hero__hl">{t('home.hero.headlineLine2')}</span>
            <span className="home-hero__hl home-hero__hl--accent">{t('home.hero.headlineLine3')}</span>
          </h1>
          <p className="home-hero__support">{t('home.hero.support')}</p>
          <div className="home-hero__actions" role="group" aria-label={t('home.hero.actionsLabel')}>
            <ActionButton to={paths.startHere} variant="primary" className="home-hero__btn-primary">
              {t('home.hero.ctaStart')}
            </ActionButton>
            <ActionButton to={paths.calendar.today} variant="ghost" className="home-hero__btn-ghost">
              {t('home.hero.ctaToday')}
            </ActionButton>
          </div>
          <p className="home-hero__trust">{t('home.hero.trust')}</p>
        </div>
        <div className="home-hero__visual-column">
          <HeroVisual
            heroImageSrc={heroImageSrc}
            heroVideoSrc={heroVideoSrc}
            heroImageAlt={heroImageAlt}
            captionText={t('home.hero.visualCaption')}
            ariaLabel={t('home.hero.visualAria')}
          />
        </div>
      </div>
    </header>
  )
}
