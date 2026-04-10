import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { paths } from '../../constants/paths.js'
import {
  churchYearCrosslinks,
  churchYearFixedMovable,
  churchYearHero,
  churchYearMeta,
  churchYearSeasonCards,
  churchYearSeasonPreviews,
  churchYearSectionCopy,
  churchYearShapesLife,
  churchYearSourceNote,
  churchYearTracker,
  churchYearWheelSegments,
} from '../../content/churchYearPageContent.js'
import EmText from '../../components/liturgy/EmText.jsx'
import ChurchYearHero from '../../components/church-year/ChurchYearHero.jsx'
import ChurchYearWheel from '../../components/church-year/ChurchYearWheel.jsx'
import ChurchYearFixedMovable from '../../components/church-year/ChurchYearFixedMovable.jsx'
import ChurchYearSeasonCards from '../../components/church-year/ChurchYearSeasonCards.jsx'
import ChurchYearShapesLife from '../../components/church-year/ChurchYearShapesLife.jsx'
import ChurchYearTracker from '../../components/church-year/ChurchYearTracker.jsx'
import ChurchYearSeasonPreviews from '../../components/church-year/ChurchYearSeasonPreviews.jsx'
import ChurchYearCrosslinks from '../../components/church-year/ChurchYearCrosslinks.jsx'
import './ChurchYearPage.css'

export default function ChurchYearPage() {
  const { t } = useTranslation('common')

  return (
    <article className="content-page church-year-page">
      <nav className="church-year__bc" aria-label={t('learnHub.breadcrumbLabel')}>
        <ol>
          <li>
            <Link to={paths.home}>{t('nav.home')}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to={paths.learn.index}>{t('nav.learn')}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{churchYearMeta.title}</li>
        </ol>
      </nav>

      <ChurchYearHero meta={churchYearMeta} hero={churchYearHero} />

      <hr className="church-year__rule" aria-hidden="true" />

      <ChurchYearWheel
        id="church-year-wheel"
        title={churchYearSectionCopy.wheelTitle}
        lead={churchYearSectionCopy.wheelLead}
        segments={churchYearWheelSegments}
      />

      <hr className="church-year__rule" aria-hidden="true" />

      <ChurchYearFixedMovable
        title={churchYearSectionCopy.fixedMovableTitle}
        lead={churchYearFixedMovable.lead}
        fixed={churchYearFixedMovable.fixed}
        movable={churchYearFixedMovable.movable}
      />

      <hr className="church-year__rule" aria-hidden="true" />

      <ChurchYearSeasonCards
        id="church-year-season-cards"
        title={churchYearSectionCopy.seasonsTitle}
        lead={churchYearSectionCopy.seasonsLead}
        cards={churchYearSeasonCards}
      />

      <hr className="church-year__rule" aria-hidden="true" />

      <ChurchYearShapesLife
        title={churchYearSectionCopy.shapesTitle}
        lead={churchYearSectionCopy.shapesLead}
        items={churchYearShapesLife}
      />

      <hr className="church-year__rule" aria-hidden="true" />

      <ChurchYearTracker
        title={churchYearSectionCopy.trackerTitle}
        lead={churchYearTracker.lead}
        tracker={churchYearTracker}
      />

      <hr className="church-year__rule" aria-hidden="true" />

      <ChurchYearSeasonPreviews
        title={churchYearSectionCopy.previewsTitle}
        lead={churchYearSectionCopy.previewsLead}
        previews={churchYearSeasonPreviews}
      />

      <hr className="church-year__rule" aria-hidden="true" />

      <ChurchYearCrosslinks
        title={churchYearSectionCopy.crossTitle}
        lead={churchYearSectionCopy.crossLead}
        links={churchYearCrosslinks}
      />

      <footer className="church-year__footer">
        <p>
          <EmText>{churchYearSourceNote}</EmText>
        </p>
      </footer>
    </article>
  )
}
