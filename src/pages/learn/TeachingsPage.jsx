import LearnTopicPage from './LearnTopicPage.jsx'
import { teachingsTopicContent } from '../../content/learnTopicsContent.js'

export default function TeachingsPage() {
  return <LearnTopicPage outlineKey="teachings" content={teachingsTopicContent} />
}
