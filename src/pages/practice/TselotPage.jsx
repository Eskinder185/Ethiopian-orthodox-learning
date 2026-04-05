import PracticePageTemplate from '../../components/sections/PracticePageTemplate.jsx'
import SectionDivider from '../../components/sections/SectionDivider.jsx'
import ZeweterTselotSection from '../../components/content/ZeweterTselotSection.jsx'
import { practicePageConfigs } from '../../data/practiceFirstPages.js'

export default function TselotPage() {
  return (
    <PracticePageTemplate
      config={practicePageConfigs.tselot}
      afterExternalLinks={
        <>
          <SectionDivider />
          <ZeweterTselotSection />
        </>
      }
    />
  )
}
