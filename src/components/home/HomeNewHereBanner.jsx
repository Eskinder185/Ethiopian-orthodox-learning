import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { paths } from '../../constants/paths.js'
import { homePageAssets } from '../../data/homeAssets.js'

/**
 * Beginner strip — uses `homePageAssets.newHere`; copy in i18n `home.newHereBanner`.
 */
export default function HomeNewHereBanner({ className = '' }) {
  const { t } = useTranslation('common')
  const { src, alt } = homePageAssets.newHere

  return (
    <section
      className={`home-new-here ${className}`.trim()}
      aria-labelledby="home-new-here-heading"
    >
      <div className="home-new-here__inner">
        <div className="home-new-here__media">
          <img
            className="home-new-here__img"
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="home-new-here__copy">
          <h2 id="home-new-here-heading" className="home-new-here__title">
            {t('home.newHereBanner.title')}
          </h2>
          <p className="home-new-here__body">{t('home.newHereBanner.body')}</p>
          <Link to={paths.startHere} className="home-new-here__cta">
            {t('home.newHereBanner.cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
