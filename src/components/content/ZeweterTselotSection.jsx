import SectionDivider from '../sections/SectionDivider.jsx'
import SectionTitle from '../sections/SectionTitle.jsx'
import InfoBlock from '../sections/InfoBlock.jsx'
import { CautionsList } from './SummaryBlocks.jsx'
import { zeweterTselotContent } from '../../content/zeweterTselotContent.js'
import '../../styles/content-blocks.css'

/**
 * Research-backed summaries of daily prayer categories — no liturgical pastes.
 */
export default function ZeweterTselotSection() {
  const c = zeweterTselotContent

  return (
    <>
      <SectionDivider />
      <section className="zeweter-tselot" aria-labelledby="zeweter-main-heading">
        <SectionTitle
          id="zeweter-main-heading"
          title={c.sectionTitle}
          subtitle={c.sectionSubtitle}
        />
        <CautionsList items={c.cautions} title="About prayer texts" />
        <div className="zeweter-tselot__grid">
          {c.categories.map((cat) => (
            <InfoBlock key={cat.id} title={cat.title} variant="soft">
              <p>{cat.summary}</p>
              {cat.notes ? (
                <p className="content-summary-sections__p">{cat.notes}</p>
              ) : null}
            </InfoBlock>
          ))}
        </div>
        <div className="zeweter-tselot__routine">
          <InfoBlock title={c.beginnerRoutine.title} variant="soft">
            <p>{c.beginnerRoutine.intro}</p>
            <ol className="zeweter-tselot__routine-steps">
              {c.beginnerRoutine.practiceSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </InfoBlock>
        </div>
      </section>
    </>
  )
}
