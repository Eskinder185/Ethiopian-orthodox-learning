import { useCallback, useMemo, useState } from 'react'
import { chantLibraryCopy } from './chantLibraryCopy.js'

/**
 * @param {object} props
 * @param {import('../../../data/chants/chants.js').ChantEntry} props.entry
 * @param {() => void} [props.onMarkPracticed]
 */
export default function ChantLineByLine({ entry, onMarkPracticed }) {
  const { amLines, trLines, maxLen } = useMemo(() => splitLyricLines(entry), [entry])
  const [index, setIndex] = useState(0)
  const [showTr, setShowTr] = useState(true)

  const safeIndex = Math.min(index, Math.max(0, maxLen - 1))
  const lineAm = amLines[safeIndex] ?? ''
  const lineTr = trLines[safeIndex] ?? ''

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1))
  }, [])

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(maxLen - 1, i + 1))
  }, [maxLen])

  if (maxLen === 0) {
    return (
      <p className="chant-linebyline__empty">{chantLibraryCopy.lineByLineNoLyrics}</p>
    )
  }

  return (
    <div className="chant-linebyline">
      <div className="chant-linebyline__toolbar">
        <span className="chant-linebyline__counter" aria-live="polite">
          {chantLibraryCopy.lineByLineProgress
            .replace('{{n}}', String(safeIndex + 1))
            .replace('{{t}}', String(maxLen))}
        </span>
        <label className="chant-linebyline__toggle">
          <input
            type="checkbox"
            checked={showTr}
            onChange={(e) => setShowTr(e.target.checked)}
          />
          {chantLibraryCopy.lineByLineShowTransliteration}
        </label>
      </div>

      <div className="chant-linebyline__card">
        <p className="chant-linebyline__line chant-linebyline__line--am" lang="am">
          {lineAm || '—'}
        </p>
        {showTr ? (
          <p className="chant-linebyline__line chant-linebyline__line--tr">{lineTr || '—'}</p>
        ) : (
          <p className="chant-linebyline__line chant-linebyline__line--hidden" aria-hidden>
            {chantLibraryCopy.lineByLineHiddenHint}
          </p>
        )}
      </div>

      <div className="chant-linebyline__nav">
        <button
          type="button"
          className="chant-linebyline__btn"
          onClick={goPrev}
          disabled={safeIndex <= 0}
        >
          {chantLibraryCopy.lineByLinePrev}
        </button>
        <button
          type="button"
          className="chant-linebyline__btn chant-linebyline__btn--primary"
          onClick={() => {
            onMarkPracticed?.()
          }}
        >
          {chantLibraryCopy.lineByLineMarkPracticed}
        </button>
        <button
          type="button"
          className="chant-linebyline__btn"
          onClick={goNext}
          disabled={safeIndex >= maxLen - 1}
        >
          {chantLibraryCopy.lineByLineNext}
        </button>
      </div>
    </div>
  )
}

/**
 * @param {import('../../../data/chants/chants.js').ChantEntry} entry
 */
function splitLyricLines(entry) {
  const rawAm = (entry.lyrics || '').replace(/\r\n/g, '\n')
  const rawTr = (entry.transliterationLyrics || '').replace(/\r\n/g, '\n')
  const amLines = rawAm.trim() ? rawAm.split('\n').map((s) => s.trim()) : []
  const trLines = rawTr.trim() ? rawTr.split('\n').map((s) => s.trim()) : []
  const maxLen = Math.max(amLines.length, trLines.length)
  const padAm = [...amLines]
  const padTr = [...trLines]
  while (padAm.length < maxLen) padAm.push('')
  while (padTr.length < maxLen) padTr.push('')
  return { amLines: padAm, trLines: padTr, maxLen }
}
