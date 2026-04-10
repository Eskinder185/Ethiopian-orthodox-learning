import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../sections/SectionTitle.jsx'
import { homeMicroLearnItems } from '../../content/homeContent.js'

function MicroCardThumb({ thumbSrc, thumbAlt, playLabel }) {
  const [failed, setFailed] = useState(false)
  const showImg = Boolean(thumbSrc) && !failed

  return (
    <div className="micro-card__thumb">
      {showImg ?
        <img
          className="micro-card__thumb-img"
          src={thumbSrc}
          alt={thumbAlt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      : null}
      <span className="micro-card__play" title={playLabel} />
    </div>
  )
}

/**
 * @param {{ videoId: string, title: string }} props
 */
function MicroCardYoutubeEmbed({ videoId, title }) {
  const src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`
  return (
    <div className="micro-card__thumb micro-card__thumb--embed">
      <div className="micro-card__embed">
        <iframe
          src={src}
          className="micro-card__embed-frame"
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  )
}

export default function MicroLearningSection({ className = '' }) {
  const { t } = useTranslation('common')
  const items = useMemo(
    () =>
      homeMicroLearnItems.map((item) => ({
        key: item.key,
        title: t(`home.microLearn.items.${item.key}.title`),
        description: t(`home.microLearn.items.${item.key}.description`),
        embedTitle: t(`home.microLearn.items.${item.key}.embedTitle`, {
          defaultValue: t(`home.microLearn.items.${item.key}.title`),
        }),
        thumbSrc: item.thumbSrc,
        thumbAlt: item.thumbAlt,
        youtubeVideoId: item.youtubeVideoId ?? null,
      })),
    [t],
  )

  return (
    <section
      className={`home-micro ${className}`.trim()}
      aria-labelledby="home-micro-heading"
    >
      <SectionTitle
        id="home-micro-heading"
        title={t('home.microLearn.sectionTitle')}
        subtitle={t('home.microLearn.sectionSubtitle')}
      />
      <ul className="home-micro__grid">
        {items.map((item) => (
          <li key={item.key}>
            <article className={`micro-card${item.youtubeVideoId ? ' micro-card--has-video' : ''}`}>
              {item.youtubeVideoId ? (
                <MicroCardYoutubeEmbed videoId={item.youtubeVideoId} title={item.embedTitle} />
              ) : (
                <MicroCardThumb
                  thumbSrc={item.thumbSrc}
                  thumbAlt={item.thumbAlt}
                  playLabel={t('home.microLearn.playLabel')}
                />
              )}
              <div className="micro-card__body">
                <h3 className="micro-card__title">{item.title}</h3>
                <p className="micro-card__desc">{item.description}</p>
                {item.youtubeVideoId ? (
                  <a
                    className="micro-card__youtube-link"
                    href={`https://www.youtube.com/watch?v=${encodeURIComponent(item.youtubeVideoId)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('home.microLearn.watchOnYoutube')}
                  </a>
                ) : (
                  <span className="micro-card__soon">{t('home.microLearn.comingSoon')}</span>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
