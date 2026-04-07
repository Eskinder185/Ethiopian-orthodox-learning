import LearnTopicPage from './LearnTopicPage.jsx'
import { churchLifeHistoryTopicContent } from '../../content/learnTopicsContent.js'

export default function ChurchLifeHistoryPage() {
  return (
    <LearnTopicPage outlineKey="churchLifeHistory" content={churchLifeHistoryTopicContent} />
  )
}
