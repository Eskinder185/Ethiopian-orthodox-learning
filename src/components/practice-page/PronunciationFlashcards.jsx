/**
 * @param {{ cards: Array<{ q: string, a: string }>, index: number, onAdvance: () => void }} props
 */
export default function PronunciationFlashcards({ cards, index, onAdvance }) {
  if (!cards?.length) return null
  const card = cards[index % cards.length]
  return (
    <div className="lang-hub-strip__flash">
      <h3 className="lang-hub-strip__flash-h">Pronunciation flashcards</h3>
      <button type="button" className="lang-hub-strip__flash-card" onClick={onAdvance}>
        <span className="lang-hub-strip__flash-q" lang="am">
          {card.q}
        </span>
        <span className="lang-hub-strip__flash-a">{card.a}</span>
        <span className="lang-hub-strip__flash-hint">Tap for next card</span>
      </button>
    </div>
  )
}
