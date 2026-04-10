/**
 * @param {{ headline: string, example: string, ipa: string, ipaNote?: string }} props
 */
export default function SoundOfDayCard({ headline, example, ipa, ipaNote }) {
  return (
    <div className="lang-hub-strip__sound">
      <h3 className="lang-hub-strip__sound-h">{headline}</h3>
      <p className="lang-hub-strip__sound-ex" lang="am">
        {example} — <span className="lang-hub-strip__sound-ipa">{ipa}</span>
        {ipaNote ? <span className="lang-hub-strip__sound-ipa"> {ipaNote}</span> : null}
      </p>
      <button type="button" className="lang-hub-strip__sound-audio" disabled aria-label="Play sound (placeholder)">
        ▶ Hear
      </button>
    </div>
  )
}
