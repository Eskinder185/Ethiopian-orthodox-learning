import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { paths } from '../../constants/paths.js'
import StartHereOrientationVideo from './StartHereOrientationVideo.jsx'
import StartHerePilgrimArt from './StartHerePilgrimArt.jsx'

export default function StartHereHero() {
  const { t } = useTranslation('common')
  const [orientationAutoplay, setOrientationAutoplay] = useState(false)

  return (
    <header className="start-here-hero">
      <div className="start-here-hero__band">
        <nav className="start-here-breadcrumb" aria-label={t('startHere.breadcrumbLabel')}>
          <ol className="start-here-breadcrumb__list">
            <li>
              <Link to={paths.home} className="start-here-breadcrumb__link">
                {t('nav.home')}
              </Link>
            </li>
            <li className="start-here-breadcrumb__sep" aria-hidden="true">
              /
            </li>
            <li className="start-here-breadcrumb__current">{t('startHere.title')}</li>
          </ol>
        </nav>

        <div className="start-here-hero__intro">
          <div className="start-here-hero__copy">
            <p className="start-here-hero__eyebrow">{t('startHere.heroEyebrow')}</p>
            <h1 className="start-here-hero__headline">{t('startHere.heroHeadline')}</h1>
            <p className="start-here-hero__lead">{t('startHere.heroLead')}</p>
            <p className="start-here-hero__micro">{t('startHere.heroMicrocopy')}</p>

            <div className="start-here-hero__actions">
              <Link
                to={`${paths.startHere}#guided-path`}
                className="btn btn--primary start-here-hero__btn"
              >
                {t('startHere.ctaBeginPath')}
              </Link>
              <Link
                to={`${paths.startHere}#start-orientation`}
                className="btn btn--ghost start-here-hero__btn"
                onClick={() => setOrientationAutoplay(true)}
              >
                {t('startHere.ctaWatchIntro')}
              </Link>
            </div>
          </div>

          <div className="start-here-hero__art">
            <StartHerePilgrimArt />
          </div>
        </div>
      </div>

      <div id="start-orientation" className="start-here-hero__media-wrap" tabIndex={-1}>
        <StartHereOrientationVideo autoplayRequested={orientationAutoplay} />
      </div>

      <p className="start-here-hero__reassure">{t('startHere.heroReassure')}</p>
    </header>
  )
}
