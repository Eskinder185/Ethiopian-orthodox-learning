import { usePracticeHubStats } from '../../hooks/usePracticeHubStats.js'
import PracticePage from '../../components/practice-page/PracticePage.jsx'
import './PracticeHomePage.css'

export default function PracticeHomePage() {
  const stats = usePracticeHubStats()
  return <PracticePage stats={stats} />
}
