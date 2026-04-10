import { useTranslation } from 'react-i18next'
import { getYouTubeEmbedUrl } from '../../utils/youtubeEmbed.js'
import { startHereOrientationVideo } from '../../content/startHereContent.js'
import { startHereAssets, startHereImageIntrinsic } from '../../data/startHereAssets.js'

/**
 * @param {{ autoplayRequested?: boolean }} props
 * When the user taps “Watch the introduction”, parent sets autoplayRequested so the embed can start muted (browser policy).
 */
export default function StartHereOrientationVideo({ autoplayRequested = false }) {
  const { t } = useTranslation('common')
  const { youtubeId, durationMinutes } = startHereOrientationVideo
  const embedUrl = youtubeId ? getYouTubeEmbedUrl(youtubeId) : ''

  const embedParams = autoplayRequested ? 'rel=0&autoplay=1&mute=1' : 'rel=0'

  if (embedUrl) {
    return (
      <div className="start-here-video start-here-video--embed">
        <div className="start-here-video__header">
          <p className="start-here-video__label">{t('startHere.video.thumbnailLabel')}</p>
          <p className="start-here-video__sub">{t('startHere.video.thumbnailSub')}</p>
        </div>
        <div className="start-here-video__frame start-here-video__frame--chrome">
          <iframe
            key={autoplayRequested ? 'autoplay' : 'default'}
            title={t('startHere.video.embedTitle')}
            src={`${embedUrl}?${embedParams}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading={autoplayRequested ? 'eager' : 'lazy'}
            className="start-here-video__iframe"
          />
        </div>
        <p className="start-here-video__caption">{t('startHere.video.caption')}</p>
      </div>
    )
  }

  return (
    <div className="start-here-video start-here-video--placeholder">
      <div className="start-here-video__header">
        <p className="start-here-video__label">{t('startHere.video.thumbnailLabel')}</p>
        <p className="start-here-video__sub">{t('startHere.video.thumbnailSub')}</p>
      </div>
      <div className="start-here-video__frame start-here-video__frame--chrome">
        <div className="start-here-video__poster">
          <img
            className="start-here-video__thumb-img"
            src={startHereAssets.orientationThumb}
            alt={t('startHere.video.posterAlt')}
            width={startHereImageIntrinsic.videoPoster.width}
            height={startHereImageIntrinsic.videoPoster.height}
            decoding="async"
          />
          <div className="start-here-video__poster-inner" aria-hidden="true">
            <span className="start-here-video__play-ring">
              <span className="start-here-video__play-mark" />
            </span>
            <p className="start-here-video__duration">
              {t('startHere.video.durationLabel', { count: durationMinutes })}
            </p>
          </div>
        </div>
      </div>
      <p className="start-here-video__caption">{t('startHere.video.caption')}</p>
      <p className="start-here-video__soon">{t('startHere.video.comingSoon')}</p>
    </div>
  )
}
