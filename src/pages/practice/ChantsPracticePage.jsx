import '../../styles/ContentComponents.css'
import StatusBox from '../../components/sections/StatusBox.jsx'
import ChantPracticeView from '../../components/practice/library/ChantPracticeView.jsx'
import { chantPracticePageContent } from '../../content/chantPracticePageContent.js'

export default function ChantsPracticePage() {
  const c = chantPracticePageContent

  return (
    <article className="content-page practice-page practice-page--chants">
      <StatusBox tone="calm" className="chant-practice-page__notice">
        <p className="status-box__text">{c.materialsNote}</p>
      </StatusBox>

      <ChantPracticeView defaultTypeFilter="all" anchorId="chant-practice" idPrefix="chants-page" />
    </article>
  )
}
