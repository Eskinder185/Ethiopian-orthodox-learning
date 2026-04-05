import PracticePageTemplate from '../../components/sections/PracticePageTemplate.jsx'
import MezmurPracticeWorkspace from '../../components/practice/MezmurPracticeWorkspace.jsx'
import { practicePageConfigs } from '../../data/practiceFirstPages.js'

export default function MezmurPage() {
  return (
    <PracticePageTemplate
      config={practicePageConfigs.mezmur}
      afterExternalLinks={<MezmurPracticeWorkspace />}
    />
  )
}
