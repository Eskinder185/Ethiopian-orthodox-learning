import EmText from '../liturgy/EmText.jsx'

/**
 * @param {{ demos: Array<{ id: string, name: string, blurb: string, diagramKind: string }> }} props
 */
export default function InstrumentDemoCards({ demos }) {
  return (
    <ul className="inst-vis__grid inst-vis__grid--demos">
      {demos.map((x) => (
        <li key={x.id}>
          <article className="inst-vis__card">
            <div className="inst-vis__diagram" aria-hidden="true" data-kind={x.diagramKind} />
            <h3 className="inst-vis__name">{x.name}</h3>
            <p className="inst-vis__blurb">
              <EmText>{x.blurb}</EmText>
            </p>
          </article>
        </li>
      ))}
    </ul>
  )
}
