import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { paths } from '../../constants/paths.js'
import {
  churchLifeCrosslinks,
  churchLifeHero,
  churchLifeMeta,
  churchLifePathSteps,
  churchLifePlaces,
  churchLifeSaints,
  churchLifeSectionCopy,
  churchLifeSourceNote,
  churchLifeTimeline,
  churchLifeToday,
} from '../../content/churchLifeHistoryPageContent.js'
import EmText from '../../components/liturgy/EmText.jsx'
import ChurchHistoryHero from '../../components/church-history/ChurchHistoryHero.jsx'
import ChurchHistoryTimeline from '../../components/church-history/ChurchHistoryTimeline.jsx'
import ChurchHistoryMap from '../../components/church-history/ChurchHistoryMap.jsx'
import ChurchHistorySaints from '../../components/church-history/ChurchHistorySaints.jsx'
import ChurchHistoryToday from '../../components/church-history/ChurchHistoryToday.jsx'
import ChurchHistoryLearningStrip from '../../components/church-history/ChurchHistoryLearningStrip.jsx'
import ChurchHistoryCrosslinks from '../../components/church-history/ChurchHistoryCrosslinks.jsx'
import './ChurchLifeHistoryPage.css'

export default function ChurchLifeHistoryPage() {
  const { t } = useTranslation('common')

  return (
    <article className="content-page church-life-page">
      <nav className="church-life__bc" aria-label={t('learnHub.breadcrumbLabel')}>
        <ol>
          <li>
            <Link to={paths.home}>{t('nav.home')}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to={paths.learn.index}>{t('nav.learn')}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{churchLifeMeta.title}</li>
        </ol>
      </nav>

      <ChurchHistoryHero meta={churchLifeMeta} hero={churchLifeHero} />

      <hr className="church-life__rule" aria-hidden="true" />

      <ChurchHistoryTimeline
        id="church-life-timeline"
        title={churchLifeSectionCopy.timelineTitle}
        lead={churchLifeSectionCopy.timelineLead}
        items={churchLifeTimeline}
      />

      <hr className="church-life__rule" aria-hidden="true" />

      <ChurchHistoryMap
        id="church-life-places"
        title={churchLifeSectionCopy.mapTitle}
        lead={churchLifeSectionCopy.mapLead}
        places={churchLifePlaces}
      />

      <hr className="church-life__rule" aria-hidden="true" />

      <ChurchHistorySaints
        id="church-life-saints"
        title={churchLifeSectionCopy.saintsTitle}
        lead={churchLifeSectionCopy.saintsLead}
        saints={churchLifeSaints}
      />

      <hr className="church-life__rule" aria-hidden="true" />

      <ChurchHistoryToday
        id="church-life-today"
        title={churchLifeSectionCopy.todayTitle}
        lead={churchLifeSectionCopy.todayLead}
        items={churchLifeToday}
      />

      <hr className="church-life__rule" aria-hidden="true" />

      <ChurchHistoryLearningStrip
        title={churchLifeSectionCopy.pathTitle}
        lead={churchLifeSectionCopy.pathLead}
        steps={churchLifePathSteps}
      />

      <hr className="church-life__rule" aria-hidden="true" />

      <ChurchHistoryCrosslinks
        title={churchLifeSectionCopy.crossTitle}
        lead={churchLifeSectionCopy.crossLead}
        links={churchLifeCrosslinks}
      />

      <footer className="church-life__footer">
        <p>
          <EmText>{churchLifeSourceNote}</EmText>
        </p>
      </footer>
    </article>
  )
}
