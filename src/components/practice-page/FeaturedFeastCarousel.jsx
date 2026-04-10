import SacredImageSlot from '../media/SacredImageSlot.jsx'

/**
 * @param {{
 *   slides: Array<{ id: string, title: string, tone: string, imageKey?: string }>,
 *   bannerImageUrl?: string | null,
 * }} props
 */
export default function FeaturedFeastCarousel({ slides, bannerImageUrl = null }) {
  return (
    <div className="pp-mez-carousel" aria-label="Featured chants">
      {bannerImageUrl ? (
        <div className="pp-mez-carousel__banner">
          <img src={bannerImageUrl} alt="" className="pp-mez-carousel__banner-img" loading="lazy" decoding="async" />
          <div className="pp-mez-carousel__banner-scrim" aria-hidden="true" />
        </div>
      ) : null}
      <h3 className="pp-mez-carousel__h">Featured for this feast</h3>
      <ul className="pp-mez-carousel__track">
        {slides.map((s) => (
          <li key={s.id} className="pp-mez-carousel__slide">
            <div className="pp-mez-carousel__card">
              <div className="pp-mez-carousel__media">
                <SacredImageSlot
                  imageKey={s.imageKey}
                  className="pp-mez-carousel__thumb-slot"
                  fallback={<div className="pp-mez-carousel__thumb-fallback" style={{ background: s.tone }} aria-hidden="true" />}
                />
              </div>
              <p className="pp-mez-carousel__title">{s.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
