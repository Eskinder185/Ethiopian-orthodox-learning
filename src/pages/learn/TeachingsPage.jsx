import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { paths } from '../../constants/paths.js'
import {
  teachingsSacraments,
  teachingsSacramentsFooter,
  teachingsSacramentsHero,
  teachingsSacramentsMedia,
  teachingsSacramentsMeta,
  teachingsSacramentsRelated,
  teachingsSacramentsSections,
} from '../../content/teachingsSacramentsPageContent.js'
import TeachingsSacramentsHero from '../../components/teachings/TeachingsSacramentsHero.jsx'
import TeachingsSacramentGrid from '../../components/teachings/TeachingsSacramentGrid.jsx'
import TeachingsSacramentSpotlights from '../../components/teachings/TeachingsSacramentSpotlights.jsx'
import TeachingsSacramentsComparisonTable from '../../components/teachings/TeachingsSacramentsComparisonTable.jsx'
import TeachingsSacramentsRelated from '../../components/teachings/TeachingsSacramentsRelated.jsx'
import TeachingsSacramentsMedia from '../../components/teachings/TeachingsSacramentsMedia.jsx'
import './TeachingsSacramentsPage.css'

export default function TeachingsPage() {
  const { t } = useTranslation('common')
  return (
    <article className="content-page teachings-sacraments-page">
      <nav className="teachings-sac__bc" aria-label={t('startHere.breadcrumbLabel')}>
        <ol>
          <li>
            <Link to={paths.home}>{t('nav.home')}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to={paths.learn.index}>{t('nav.learn')}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{teachingsSacramentsMeta.title}</li>
        </ol>
      </nav>

      <TeachingsSacramentsHero
        meta={teachingsSacramentsMeta}
        hero={teachingsSacramentsHero}
        sacraments={teachingsSacraments}
      />

      <hr className="teachings-sac__rule" aria-hidden="true" />

      <TeachingsSacramentGrid
        title={teachingsSacramentsSections.gridTitle}
        lead={teachingsSacramentsSections.gridLead}
        sacraments={teachingsSacraments}
      />

      <hr className="teachings-sac__rule" aria-hidden="true" />

      <TeachingsSacramentSpotlights
        title={teachingsSacramentsSections.spotlightTitle}
        lead={teachingsSacramentsSections.spotlightLead}
        sacraments={teachingsSacraments}
      />

      <hr className="teachings-sac__rule" aria-hidden="true" />

      <TeachingsSacramentsComparisonTable
        title={teachingsSacramentsSections.tableTitle}
        lead={teachingsSacramentsSections.tableLead}
        sacraments={teachingsSacraments}
      />

      <hr className="teachings-sac__rule" aria-hidden="true" />

      <TeachingsSacramentsRelated
        title={teachingsSacramentsSections.relatedTitle}
        lead={teachingsSacramentsSections.relatedLead}
        links={teachingsSacramentsRelated}
      />

      <hr className="teachings-sac__rule" aria-hidden="true" />

      <TeachingsSacramentsMedia
        title={teachingsSacramentsSections.mediaTitle}
        lead={teachingsSacramentsSections.mediaLead}
        items={teachingsSacramentsMedia}
      />

      <footer className="teachings-sac__footer">
        {teachingsSacramentsFooter.notes.map((note, i) => (
          <p key={i}>{note}</p>
        ))}
      </footer>
    </article>
  )
}
