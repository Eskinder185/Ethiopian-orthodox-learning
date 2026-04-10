/**
 * @param {{ letters: Array<{ symbol: string, label: string, note?: string }>, showTransliteration: boolean }} props
 */
export default function FidelPreviewGrid({ letters, showTransliteration }) {
  return (
    <div className="lang-hub-strip__fidel" role="group" aria-label="Sample fidel characters">
      {letters.map((L) => (
        <button key={L.symbol} type="button" className="lang-hub-strip__cell" title={L.note}>
          <span className="lang-hub-strip__sym" lang="am">
            {L.symbol}
          </span>
          {showTransliteration ? <span className="lang-hub-strip__tr">{L.label}</span> : null}
        </button>
      ))}
    </div>
  )
}
