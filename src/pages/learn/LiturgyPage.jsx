import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { paths } from '../../constants/paths.js'
import {
  liturgyAudioPrep,
  liturgyBeginnerGuide,
  liturgyCrosslinks,
  liturgyFlowStages,
  liturgyGlossary,
  liturgyHero,
  liturgyPageMeta,
  liturgySectionCopy,
  liturgySourceBrief,
  liturgyWhatToNotice,
} from '../../content/liturgyPageContent.js'
import EmText from '../../components/liturgy/EmText.jsx'
import LiturgyHero from '../../components/liturgy/LiturgyHero.jsx'
import LiturgyFlow from '../../components/liturgy/LiturgyFlow.jsx'
import LiturgyWhatToNotice from '../../components/liturgy/LiturgyWhatToNotice.jsx'
import LiturgyAudioPrep from '../../components/liturgy/LiturgyAudioPrep.jsx'
import LiturgyBeginnerGuide from '../../components/liturgy/LiturgyBeginnerGuide.jsx'
import LiturgyGlossaryStrip from '../../components/liturgy/LiturgyGlossaryStrip.jsx'
import LiturgyCrosslinks from '../../components/liturgy/LiturgyCrosslinks.jsx'
import './LiturgyPage.css'

export default function LiturgyPage() {
  const { t } = useTranslation('common')

  return (
    <article className="content-page liturgy-guide-page">
      <nav className="liturgy-guide__bc" aria-label={t('learnHub.breadcrumbLabel')}>
        <ol>
          <li>
            <Link to={paths.home}>{t('nav.home')}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to={paths.learn.index}>{t('nav.learn')}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{liturgyPageMeta.title}</li>
        </ol>
      </nav>

      <LiturgyHero meta={liturgyPageMeta} hero={liturgyHero} />

      <hr className="liturgy-guide__rule" aria-hidden="true" />

      <LiturgyFlow
        id="liturgy-qidase-flow"
        title={liturgySectionCopy.flowTitle}
        lead={liturgySectionCopy.flowLead}
        stages={liturgyFlowStages}
      />

      <hr className="liturgy-guide__rule" aria-hidden="true" />

      <LiturgyWhatToNotice
        title={liturgySectionCopy.noticeTitle}
        lead={liturgySectionCopy.noticeLead}
        items={liturgyWhatToNotice}
      />

      <hr className="liturgy-guide__rule" aria-hidden="true" />

      <LiturgyAudioPrep
        title={liturgySectionCopy.audioTitle}
        lead={liturgySectionCopy.audioLead}
        items={liturgyAudioPrep}
      />

      <hr className="liturgy-guide__rule" aria-hidden="true" />

      <LiturgyBeginnerGuide id="liturgy-how-to-prepare" content={liturgyBeginnerGuide} />

      <hr className="liturgy-guide__rule" aria-hidden="true" />

      <LiturgyGlossaryStrip title={liturgySectionCopy.glossaryTitle} items={liturgyGlossary} />

      <hr className="liturgy-guide__rule" aria-hidden="true" />

      <LiturgyCrosslinks
        title={liturgySectionCopy.crossTitle}
        lead={liturgySectionCopy.crossLead}
        links={liturgyCrosslinks}
      />

      <footer className="liturgy-guide__footer">
        <p>
          <EmText>{liturgySourceBrief}</EmText>
        </p>
      </footer>
    </article>
  )
}
