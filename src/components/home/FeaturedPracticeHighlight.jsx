import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ActionButton from '../ui/ActionButton.jsx'
import { homeFeaturedHighlightConfig } from '../../content/homeContent.js'
import { homePageAssets } from '../../data/homeAssets.js'

export default function FeaturedPracticeHighlight({ className = '' }) {
  const { t } = useTranslation('common')
  const { to, key } = homeFeaturedHighlightConfig
  const { src: featSrc, alt: featAlt } = homePageAssets.featuredPractice
  const [imgFailed, setImgFailed] = useState(false)
  const showImg = Boolean(featSrc) && !imgFailed

  return (
    <section
      className={`home-featured ${className}`.trim()}
      aria-labelledby="home-featured-highlight-heading"
    >
      <div className="home-featured__inner">
        <div className={`home-featured__visual${showImg ? ' home-featured__visual--media' : ''}`}>
          {showImg ?
            <img
              className="home-featured__visual-img"
              src={featSrc}
              alt={featAlt}
              loading="lazy"
              decoding="async"
              onError={() => setImgFailed(true)}
            />
          : null}
          {!showImg ?
            <div className="home-featured__visual-placeholder" aria-hidden="true" />
          : null}
        </div>
        <div className="home-featured__content">
          <p className="home-featured__eyebrow">{t('home.featuredHighlight.eyebrow')}</p>
          <h2 id="home-featured-highlight-heading" className="home-featured__title">
            {t(`home.featuredHighlight.${key}.title`)}
          </h2>
          <p className="home-featured__desc">{t(`home.featuredHighlight.${key}.description`)}</p>
          <ActionButton to={to} variant="primary">
            {t(`home.featuredHighlight.${key}.cta`)}
          </ActionButton>
        </div>
      </div>
    </section>
  )
}
