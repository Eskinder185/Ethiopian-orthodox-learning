import '../styles/ContentComponents.css'
import '../components/start-here/StartHere.css'
import StartHereHero from '../components/start-here/StartHereHero.jsx'
import StartHereWhatHelps from '../components/start-here/StartHereWhatHelps.jsx'
import BeginnerPathChecklist from '../components/start-here/BeginnerPathChecklist.jsx'
import OrthodoxGlossary from '../components/start-here/OrthodoxGlossary.jsx'
import FirstVisitGuide from '../components/start-here/FirstVisitGuide.jsx'
import StartHereClosing from '../components/start-here/StartHereClosing.jsx'

export default function StartHerePage() {
  return (
    <article className="content-page start-here-page">
      <StartHereHero />
      <StartHereWhatHelps />
      <BeginnerPathChecklist />
      <OrthodoxGlossary />
      <FirstVisitGuide />
      <StartHereClosing />
    </article>
  )
}
