import { useState } from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../constants/paths.js'
import { alphabetPage } from '../../data/languagePages.js'
import { languagePracticePlaceholders as defaults } from '../../content/practicePagePlaceholders.js'
import EmText from '../liturgy/EmText.jsx'
import FidelPreviewGrid from './FidelPreviewGrid.jsx'
import TransliterationToggle from './TransliterationToggle.jsx'
import LanguageProgressCard from './LanguageProgressCard.jsx'
import SoundOfDayCard from './SoundOfDayCard.jsx'
import PronunciationFlashcards from './PronunciationFlashcards.jsx'
import SacredImageSlot from '../media/SacredImageSlot.jsx'
import { practiceHubImage } from '../../constants/practiceHubImages.js'
import '../language/LanguagePracticeHubStrip.css'
import './LanguagePracticeSection.css'

/**
 * @param {{
 *   sectionId?: string,
 *   title?: string,
 *   lead?: string,
 *   fidelLetters?: typeof alphabetPage.exampleLetters,
 *   placeholders?: typeof defaults,
 * }} props
 */
export default function LanguagePracticeSection({
  sectionId = 'practice-hub-language',
  title = 'Language & pronunciation',
  lead =
    '**Fidel**, **sound**, and **mouth-shape** — tap a letter, flip a card, and open the full alphabet page when you are ready.',
  fidelLetters = alphabetPage.exampleLetters.slice(0, 8),
  placeholders = defaults,
}) {
  const [translit, setTranslit] = useState(true)
  const [cardIx, setCardIx] = useState(0)

  const sound = placeholders.soundOfDay
  const headerImg = practiceHubImage('languageHeader')
  const flashImg = practiceHubImage('fidelFlashcard')

  return (
    <section id={sectionId} className="lang-hub-strip lang-hub-strip--premium pp-section pp-section--language" aria-labelledby="lang-hub-strip-title">
      {headerImg ? (
        <div className="lang-hub-strip__hero">
          <img src={headerImg} alt="" className="lang-hub-strip__hero-img" loading="lazy" decoding="async" width={720} height={280} />
          <div className="lang-hub-strip__hero-scrim" aria-hidden="true" />
        </div>
      ) : null}

      <h2 id="lang-hub-strip-title" className="lang-hub-strip__title">
        {title}
      </h2>
      <p className="lang-hub-strip__lead">
        <EmText>{lead}</EmText>
      </p>

      <div className="lang-hub-strip__tools">
        <TransliterationToggle checked={translit} onChange={setTranslit} />
        <LanguageProgressCard percent={placeholders.progressPercent} label={placeholders.progressLabel} />
      </div>

      <div className="lang-hub-strip__study">
        <FidelPreviewGrid letters={fidelLetters} showTransliteration={translit} />
        {flashImg ? (
          <div className="lang-hub-strip__flash-visual" aria-hidden="true">
            <img src={flashImg} alt="" loading="lazy" decoding="async" width={320} height={400} />
          </div>
        ) : null}
      </div>

      <SoundOfDayCard
        headline={sound.headline}
        example={sound.example}
        ipa={sound.ipa}
        ipaNote={sound.ipaNote}
      />

      <PronunciationFlashcards
        cards={placeholders.flashcards}
        index={cardIx}
        onAdvance={() => setCardIx((i) => (i + 1) % placeholders.flashcards.length)}
      />

      <SacredImageSlot
        imageKey="shared.languageVideoPoster"
        className="lang-hub-strip__video-slot"
        fallback={
          <div className="lang-hub-strip__video" role="img" aria-label={placeholders.videoAriaLabel}>
            <span className="lang-hub-strip__video-icon" aria-hidden="true">
              ▶
            </span>
            <span className="lang-hub-strip__video-text">Short pronunciation clip — placeholder for future lessons</span>
          </div>
        }
      />

      <div className="lang-hub-strip__cta">
        <Link to={paths.practice.language.alphabet} className="btn btn--primary">
          Open full alphabet
        </Link>
        <Link to={paths.practice.language.index} className="btn btn--ghost">
          Language hub
        </Link>
      </div>
    </section>
  )
}
