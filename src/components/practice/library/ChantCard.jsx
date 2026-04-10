import { extractYouTubeId } from '../../../utils/extractYouTubeId.js'
import { chantLibraryCopy } from './chantLibraryCopy.js'

/**
 * Minimal gallery tile: dominant thumbnail + title only. Full metadata lives in the detail panel.
 *
 * @param {object} props
 * @param {import('../../../data/chants/chants.js').ChantEntry} props.entry
 * @param {() => void} props.onPractice
 */
export default function ChantCard({ entry, onPractice }) {
  const vid = extractYouTubeId(entry.youtubeUrl || '')
  const thumb = vid ? `https://img.youtube.com/vi/${vid}/hqdefault.jpg` : null
  const label = `${chantLibraryCopy.practice}: ${entry.title}`

  return (
    <button
      type="button"
      className="chant-card chant-card--browse chant-card--gallery"
      onClick={onPractice}
      aria-label={label}
    >
      <span className="chant-card__media">
        {thumb ? (
          <img
            src={thumb}
            alt=""
            className="chant-card__thumb"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="chant-card__placeholder" aria-hidden="true" />
        )}
        <span className="chant-card__overlay" aria-hidden="true">
          <span className="chant-card__overlay-pill">{chantLibraryCopy.practice}</span>
        </span>
      </span>
      <span className="chant-card__caption">
        <span className="chant-card__title-am" lang="am">
          {entry.title}
        </span>
      </span>
    </button>
  )
}
