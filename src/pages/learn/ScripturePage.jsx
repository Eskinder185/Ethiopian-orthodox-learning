import LearnTopicPage from './LearnTopicPage.jsx'
import { scriptureTopicContent } from '../../content/learnTopicsContent.js'

export default function ScripturePage() {
  return <LearnTopicPage outlineKey="scripture" content={scriptureTopicContent} />
}
