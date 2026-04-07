import { tselotDailyPrayer } from '../../data/curatedExternalLinks.js'
import { practicePageConfigs } from '../../data/practiceFirstPages.js'
import ExternalSourceCard from '../../components/sections/ExternalSourceCard.jsx'
import ExternalSourceSupportSection from '../../components/sections/ExternalSourceSupportSection.jsx'
import PracticePageTemplate from '../../components/sections/PracticePageTemplate.jsx'
import SectionDivider from '../../components/sections/SectionDivider.jsx'
import ZeweterTselotSection from '../../components/content/ZeweterTselotSection.jsx'

export default function PrayerPage() {
  return (
    <PracticePageTemplate
      config={practicePageConfigs.prayer}
      afterExternalLinks={
        <>
          <ExternalSourceSupportSection
            id="prayer-external-support"
            eyebrow="Full text / audio"
            title="Continue learning"
            subtitle="Trusted external source"
            intro="OrthodoxPath stays focused on routines and structure here. When you want fuller prayer text or follow-along audio, use this resource — it opens in a new tab."
          >
            <ExternalSourceCard
              title="Daily prayer text and audio"
              description="Use this external source for fuller prayer text and follow-along audio."
              href={tselotDailyPrayer.href}
              buttonLabel="Open prayer resource"
              variant="prayer"
            />
          </ExternalSourceSupportSection>
          <SectionDivider />
          <ZeweterTselotSection />
        </>
      }
    />
  )
}
