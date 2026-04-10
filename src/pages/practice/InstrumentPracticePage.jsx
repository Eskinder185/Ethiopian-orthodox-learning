import PageHeader from '../../components/sections/PageHeader.jsx'
import InstrumentPracticeVisual from '../../components/practice/InstrumentPracticeVisual.jsx'
import PracticeTopicScaffold from '../../components/practice/PracticeTopicScaffold.jsx'
import { instrumentPracticeContent } from '../../content/werbInstrumentPracticeContent.js'

export default function InstrumentPracticePage() {
  const { category, title, intro } = instrumentPracticeContent
  return (
    <article className="content-page practice-page practice-page--instruments">
      <PageHeader category={category} title={title} intro={intro} compact />
      <InstrumentPracticeVisual />
      <PracticeTopicScaffold {...instrumentPracticeContent} embedded />
    </article>
  )
}
