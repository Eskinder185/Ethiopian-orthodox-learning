import EmText from '../liturgy/EmText.jsx'

/**
 * @param {{ title: string, blurb: string, imageSrc?: string | null }} props
 */
export default function PostureDiagramCard({ title, blurb, imageSrc = null }) {
  return (
    <article className="inst-vis__posture-card">
      {imageSrc ? (
        <div className="inst-vis__posture-photo">
          <img src={imageSrc} alt="" loading="lazy" decoding="async" width={640} height={400} />
        </div>
      ) : (
        <div className="inst-vis__diagram inst-vis__diagram--large" aria-hidden="true" data-kind="posture" />
      )}
      <h3 className="inst-vis__name">{title}</h3>
      <p className="inst-vis__blurb">
        <EmText>{blurb}</EmText>
      </p>
    </article>
  )
}
