import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { paths } from '../../constants/paths.js'
import { defaultPracticeHubContent } from '../../data/practiceHubPageData.js'
import EmText from '../liturgy/EmText.jsx'
import PracticePageDivider from './PracticePageDivider.jsx'
import PracticeHero from './PracticeHero.jsx'
import PracticeCategoryGrid from './PracticeCategoryGrid.jsx'
import PracticeMap from './PracticeMap.jsx'
import PracticeGoalChips from './PracticeGoalChips.jsx'
import TodaysPracticeCard from './TodaysPracticeCard.jsx'
import PrayerPracticeSection from './PrayerPracticeSection.jsx'
import MezmurPracticeSection from './MezmurPracticeSection.jsx'
import InstrumentPracticeSection from './InstrumentPracticeSection.jsx'
import LanguagePracticeSection from './LanguagePracticeSection.jsx'
import PracticeByTimeSection from './PracticeByTimeSection.jsx'
import SeasonalPracticeStrip from './SeasonalPracticeStrip.jsx'
import ProgressOverview from './ProgressOverview.jsx'
import PracticeFooterCTA from './PracticeFooterCTA.jsx'
import './PracticePage.css'

/**
 * Section-based Practice hub — props from `content`; live counts from `stats`.
 *
 * @param {{ stats: object, content?: typeof defaultPracticeHubContent }} props
 */
export default function PracticePage({
  stats,
  content = defaultPracticeHubContent,
}) {
  const { t } = useTranslation('common')
  const c = content

  return (
    <article className="content-page ph-hub ph-hub-page">
      <nav className="ph-hub__bc" aria-label={t('learnHub.breadcrumbLabel')}>
        <ol>
          <li>
            <Link to={paths.home}>{t('nav.home')}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{t('practiceHub.title')}</li>
        </ol>
      </nav>

      <PracticeHero
        meta={c.meta}
        hero={c.hero}
        statLabels={c.statLabels}
        stats={stats}
        gateways={c.gateways}
      />

      <PracticePageDivider />

      <PracticeCategoryGrid gateways={c.gateways} />

      <PracticePageDivider />

      <PracticeMap map={c.map} />

      <PracticePageDivider />

      <PracticeGoalChips goals={c.goals} />

      <PracticePageDivider />

      <TodaysPracticeCard presets={c.spotlightPresets} />

      <PracticePageDivider />

      <PrayerPracticeSection
        sectionId={c.prayer.sectionId}
        title={c.prayer.title}
        lead={c.prayer.lead}
        prayerBasePath={c.prayer.prayerBasePath}
        fullTimeline={c.prayer.fullTimeline}
        beginnerCount={c.prayer.beginnerCount}
        cheatSheetPrintNote={c.prayer.cheatSheetPrintNote}
        importantNotes={c.prayer.importantNotes}
      />

      <PracticePageDivider />

      <MezmurPracticeSection
        sectionId={c.mezmur.sectionId}
        sectionTitle={c.mezmur.sectionTitle}
        intro={c.mezmur.intro}
        materialsNote={c.mezmur.materialsNote}
        filters={c.mezmur.filters}
        featuredSlides={c.mezmur.featuredSlides}
        placeholderCards={c.mezmur.placeholderCards}
      />

      <PracticePageDivider />

      <div className="ph-hub__section ph-hub__section--instrument-wrap">
        <InstrumentPracticeSection
          sectionId={c.instrument.sectionId}
          data={c.instrument.data}
        />
      </div>

      <PracticePageDivider />

      <div className="ph-hub__section ph-hub__section--language-wrap">
        <LanguagePracticeSection
          sectionId={c.language.sectionId}
          title={c.language.title}
          lead={c.language.lead}
          fidelLetters={c.language.fidelLetters}
          placeholders={c.language.placeholders}
        />
      </div>

      <PracticePageDivider />

      <PracticeByTimeSection data={c.timeBlocks} />

      <PracticePageDivider />

      <SeasonalPracticeStrip copy={c.season} />

      <PracticePageDivider />

      <ProgressOverview copy={c.progress} stats={stats} />

      <PracticeFooterCTA block={c.footerCta} />

      <footer className="ph-hub__footer">
        <p>
          <EmText>{c.footerNote}</EmText>
        </p>
      </footer>
    </article>
  )
}
