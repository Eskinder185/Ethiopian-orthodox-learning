import { useTranslation } from 'react-i18next'
import LearnHomeHero from '../../components/learn/LearnHomeHero.jsx'
import LearnPathCards from '../../components/learn/LearnPathCards.jsx'
import LearnFaithMap from '../../components/learn/LearnFaithMap.jsx'
import LearnSacramentsPreview from '../../components/learn/LearnSacramentsPreview.jsx'
import LearnQidaseFlow from '../../components/learn/LearnQidaseFlow.jsx'
import LearnHistoryStrip from '../../components/learn/LearnHistoryStrip.jsx'
import LearnChurchYearWheel from '../../components/learn/LearnChurchYearWheel.jsx'
import LearnGlossaryStrip from '../../components/learn/LearnGlossaryStrip.jsx'
import LearnPracticeBridge from '../../components/learn/LearnPracticeBridge.jsx'
import LearnHubCrosslinks from '../../components/learn/LearnHubCrosslinks.jsx'
import './LearnHome.css'

export default function LearnHomePage() {
  const { t } = useTranslation('common')

  return (
    <article className="learn-hub-page">
      <LearnHomeHero />
      <div className="learn-hub-page__main">
        <LearnPathCards />
        <LearnFaithMap />
        <LearnSacramentsPreview />
        <LearnQidaseFlow />
        <LearnHistoryStrip />
        <LearnChurchYearWheel />
        <LearnGlossaryStrip />
        <LearnPracticeBridge />
        <LearnHubCrosslinks />
        <p className="learn-hub-page__note">{t('learnHub.footerNote')}</p>
      </div>
    </article>
  )
}
