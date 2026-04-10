import EmText from '../liturgy/EmText.jsx'

/**
 * @param {{ title: string, lead: string }} props
 */
export default function InstrumentIntroCard({ title, lead }) {
  return (
    <header className="inst-vis__intro">
      <h2 id="inst-vis-title" className="inst-vis__title">
        {title}
      </h2>
      <p className="inst-vis__lead">
        <EmText>{lead}</EmText>
      </p>
    </header>
  )
}
