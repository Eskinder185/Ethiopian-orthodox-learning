import { Link } from 'react-router-dom'
import EmText from '../liturgy/EmText.jsx'
import SacredImageSlot from '../media/SacredImageSlot.jsx'

function WorkspaceMock() {
  return (
    <div className="ph-hub__ws-mock" aria-hidden="true">
      <div className="ph-hub__ws-bars">
        <span className="ph-hub__ws-bar" />
        <span className="ph-hub__ws-bar ph-hub__ws-bar--2" />
        <span className="ph-hub__ws-bar ph-hub__ws-bar--3" />
        <span className="ph-hub__ws-bar ph-hub__ws-bar--4" />
      </div>
      <div className="ph-hub__ws-loop">
        <span className="ph-hub__ws-loop-label">Loop</span>
        <span className="ph-hub__ws-loop-track">
          <span className="ph-hub__ws-loop-fill" />
        </span>
      </div>
    </div>
  )
}

/**
 * @param {{ title?: string, body: string, linkTo: string, linkLabel?: string }} props
 */
export default function PracticeWorkspacePreview({
  title = 'Mezmur practice workspace',
  body = 'Paste a trusted recording, set **loops**, and work **one line** at a time — the same workspace you use on the chant page.',
  linkTo,
  linkLabel = 'Open workspace',
}) {
  return (
    <div className="ph-hub__ws-card pp-mez-ws">
      <div className="ph-hub__ws-photo ph-hub__ws-photo--slot">
        <SacredImageSlot imageKey="practice.mezmurWorkspace" className="ph-hub__ws-slot-inner" fallback={<WorkspaceMock />} />
        <div className="ph-hub__ws-photo-scrim" aria-hidden="true" />
      </div>
      <div className="ph-hub__ws-copy">
        <h3 className="ph-hub__ws-title">{title}</h3>
        <p className="ph-hub__ws-body">
          <EmText>{body}</EmText>
        </p>
        <Link to={linkTo} className="btn btn--secondary ph-hub__btn">
          {linkLabel}
        </Link>
      </div>
    </div>
  )
}
