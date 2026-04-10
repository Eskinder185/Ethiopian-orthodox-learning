import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { paths } from '../../constants/paths.js'
import {
  scriptureBookCards,
  scriptureChurchLife,
  scriptureCrosslinks,
  scriptureExternalResources,
  scriptureGlossaryTerms,
  scriptureHero,
  scriptureMeta,
  scriptureReadingPaths,
  scriptureReadingPlans,
  scriptureSectionCopy,
  scriptureSourceNote,
  scriptureStructureGroups,
} from '../../content/scripturePageContent.js'
import EmText from '../../components/liturgy/EmText.jsx'
import ScriptureHero from '../../components/scripture/ScriptureHero.jsx'
import ScriptureBibleStructure from '../../components/scripture/ScriptureBibleStructure.jsx'
import ScriptureBookCards from '../../components/scripture/ScriptureBookCards.jsx'
import ScriptureReadingPaths from '../../components/scripture/ScriptureReadingPaths.jsx'
import ScriptureChurchLife from '../../components/scripture/ScriptureChurchLife.jsx'
import ScriptureReadingPlans from '../../components/scripture/ScriptureReadingPlans.jsx'
import ScriptureGlossary from '../../components/scripture/ScriptureGlossary.jsx'
import ScriptureExternalResources from '../../components/scripture/ScriptureExternalResources.jsx'
import ScriptureCrosslinks from '../../components/scripture/ScriptureCrosslinks.jsx'
import './ScripturePage.css'

export default function ScripturePage() {
  const { t } = useTranslation('common')

  return (
    <article className="content-page scripture-page">
      <nav className="scripture__bc" aria-label={t('learnHub.breadcrumbLabel')}>
        <ol>
          <li>
            <Link to={paths.home}>{t('nav.home')}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to={paths.learn.index}>{t('nav.learn')}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{scriptureMeta.title}</li>
        </ol>
      </nav>

      <ScriptureHero meta={scriptureMeta} hero={scriptureHero} />

      <hr className="scripture__rule" aria-hidden="true" />

      <ScriptureBibleStructure
        id="scripture-bible-structure"
        title={scriptureSectionCopy.structureTitle}
        lead={scriptureSectionCopy.structureLead}
        groups={scriptureStructureGroups}
      />

      <hr className="scripture__rule" aria-hidden="true" />

      <ScriptureBookCards
        title={scriptureSectionCopy.booksTitle}
        lead={scriptureSectionCopy.booksLead}
        cards={scriptureBookCards}
      />

      <hr className="scripture__rule" aria-hidden="true" />

      <ScriptureReadingPaths
        id="scripture-reading-paths"
        title={scriptureSectionCopy.pathsTitle}
        lead={scriptureSectionCopy.pathsLead}
        paths={scriptureReadingPaths}
      />

      <hr className="scripture__rule" aria-hidden="true" />

      <ScriptureChurchLife
        title={scriptureSectionCopy.churchTitle}
        lead={scriptureSectionCopy.churchLead}
        items={scriptureChurchLife}
      />

      <hr className="scripture__rule" aria-hidden="true" />

      <ScriptureReadingPlans
        title={scriptureSectionCopy.plansTitle}
        lead={scriptureSectionCopy.plansLead}
        plans={scriptureReadingPlans}
      />

      <hr className="scripture__rule" aria-hidden="true" />

      <ScriptureGlossary
        title={scriptureSectionCopy.glossaryTitle}
        lead={scriptureSectionCopy.glossaryLead}
        terms={scriptureGlossaryTerms}
      />

      <hr className="scripture__rule" aria-hidden="true" />

      <ScriptureExternalResources
        title={scriptureSectionCopy.externalTitle}
        lead={scriptureSectionCopy.externalLead}
        resources={scriptureExternalResources}
      />

      <hr className="scripture__rule" aria-hidden="true" />

      <ScriptureCrosslinks
        title={scriptureSectionCopy.crossTitle}
        lead={scriptureSectionCopy.crossLead}
        links={scriptureCrosslinks}
      />

      <footer className="scripture__footer">
        <p>
          <EmText>{scriptureSourceNote}</EmText>
        </p>
      </footer>
    </article>
  )
}
