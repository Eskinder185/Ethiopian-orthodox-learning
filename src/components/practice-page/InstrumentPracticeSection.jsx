import EmText from '../liturgy/EmText.jsx'
import { instrumentPracticePlaceholders as defaults } from '../../content/practicePagePlaceholders.js'
import { practiceHubImage } from '../../constants/practiceHubImages.js'
import InstrumentIntroCard from './InstrumentIntroCard.jsx'
import InstrumentDemoCards from './InstrumentDemoCards.jsx'
import PostureDiagramCard from './PostureDiagramCard.jsx'
import RhythmExerciseCards from './RhythmExerciseCards.jsx'
import SacredImageSlot from '../media/SacredImageSlot.jsx'
import '../practice/InstrumentPracticeVisual.css'
import './InstrumentPracticeSection.css'

/**
 * @param {{ data?: typeof defaults, sectionId?: string }} props
 */
export default function InstrumentPracticeSection({ data = defaults, sectionId = 'practice-hub-instruments' }) {
  const postureImg = practiceHubImage('instrumentPosture')

  return (
    <section id={sectionId} className="inst-vis inst-vis--premium pp-section pp-section--instrument" aria-labelledby="inst-vis-title">
      <div className="inst-vis__pillar" id="practice-hub-instruments-context">
        <span className="inst-vis__pillar-kicker">Respect & context</span>
        <InstrumentIntroCard title={data.intro.title} lead={data.intro.lead} />
      </div>

      <div className="inst-vis__pillar" id="practice-hub-instruments-posture">
        <span className="inst-vis__pillar-kicker">Posture & how to hold</span>
        <PostureDiagramCard title={data.posture.title} blurb={data.posture.blurb} imageSrc={postureImg} />
      </div>

      <div className="inst-vis__pillar" id="practice-hub-instruments-rhythm">
        <span className="inst-vis__pillar-kicker">Rhythm & beginner exercises</span>
        <InstrumentDemoCards demos={data.demoCards} />
        <RhythmExerciseCards exercises={data.rhythmExercises} />
      </div>

      <div className="inst-vis__video-panel">
        <SacredImageSlot
          imageKey="shared.instrumentVideoPoster"
          className="inst-vis__video-slot"
          fallback={
            <div className="inst-vis__video-placeholder" role="img" aria-label={data.videoAriaLabel}>
              <span className="inst-vis__play" aria-hidden="true">
                ▶
              </span>
              <span className="inst-vis__video-label">Liturgical demo — add parish-approved video later</span>
            </div>
          }
        />
      </div>
      <p className="inst-vis__posture">
        <EmText>{data.closingNote}</EmText>
      </p>
    </section>
  )
}
