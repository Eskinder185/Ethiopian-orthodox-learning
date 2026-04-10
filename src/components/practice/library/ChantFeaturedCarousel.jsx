import { extractYouTubeId } from '../../../utils/extractYouTubeId.js'

/**
 * Horizontal featured strip — opens entry in parent handler.
 * @param {object} props
 * @param {import('../../../data/chants/chants.js').ChantEntry[]} props.entries
 * @param {(e: import('../../../data/chants/chants.js').ChantEntry) => void} props.onPick
 * @param {string} props.title
 */
export default function ChantFeaturedCarousel({ entries, onPick, title }) {
  if (!entries?.length) return null

  return (
    <section className="chant-carousel" aria-labelledby="chant-carousel-title">
      <h2 id="chant-carousel-title" className="chant-carousel__title">
        {title}
      </h2>
      <div className="chant-carousel__track" role="list">
        {entries.map((e) => {
          const vid = extractYouTubeId(e.youtubeUrl || '')
          const thumb = vid ? `https://img.youtube.com/vi/${vid}/mqdefault.jpg` : null
          return (
            <button
              key={e.id}
              type="button"
              role="listitem"
              className="chant-carousel__item"
              onClick={() => onPick(e)}
            >
              <span className="chant-carousel__thumb-wrap">
                {thumb ?
                  <img src={thumb} alt="" className="chant-carousel__thumb" loading="lazy" />
                : <span className="chant-carousel__thumb chant-carousel__thumb--empty" aria-hidden="true" />}
              </span>
              <span className="chant-carousel__item-title" lang="am">
                {e.title}
              </span>
              {e.transliterationTitle ?
                <span className="chant-carousel__item-tr">{e.transliterationTitle}</span>
              : null}
            </button>
          )
        })}
      </div>
    </section>
  )
}
