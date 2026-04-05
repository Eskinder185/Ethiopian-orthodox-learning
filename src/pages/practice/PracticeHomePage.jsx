import SectionHubLayout from '../../components/sections/SectionHubLayout.jsx'
import { practiceHub } from '../../data/sectionHubs.js'

export default function PracticeHomePage() {
  return <SectionHubLayout {...practiceHub} />
}
