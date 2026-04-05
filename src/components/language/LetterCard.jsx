import './LanguageComponents.css'

/**
 * Single Fidel example for alphabet study grids. Replace data in languagePages.js as lessons grow.
 */
export default function LetterCard({ symbol, label, note }) {
  return (
    <article className="letter-card" aria-label={label ? `${label}: ${symbol}` : symbol}>
      <span className="letter-card__glyph" lang="am">
        {symbol}
      </span>
      {label ? <p className="letter-card__label">{label}</p> : null}
      {note ? <p className="letter-card__note">{note}</p> : null}
    </article>
  )
}
