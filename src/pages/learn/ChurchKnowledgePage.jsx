import LearnTopicPage from './LearnTopicPage.jsx'
import { churchKnowledgeTopicContent } from '../../content/learnTopicsContent.js'

export default function ChurchKnowledgePage() {
  return (
    <LearnTopicPage outlineKey="churchKnowledge" content={churchKnowledgeTopicContent} />
  )
}
