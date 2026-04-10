import { useMemo, useState } from 'react'
import { paths } from '../../constants/paths.js'
import {
  mezmurFeaturedSlides,
  mezmurPlaceholderCards,
  mezmurPlaceholderFilters,
} from '../../content/practicePagePlaceholders.js'
import { chantLibraryCopy } from '../practice/library/chantLibraryCopy.js'
import ChantPracticeView from '../practice/library/ChantPracticeView.jsx'
import StatusBox from '../sections/StatusBox.jsx'
import LearnRevealSection from '../learn/LearnRevealSection.jsx'
import MezmurSearchBar from './MezmurSearchBar.jsx'
import MezmurFilterChips from './MezmurFilterChips.jsx'
import FeaturedFeastCarousel from './FeaturedFeastCarousel.jsx'
import { practiceHubImage } from '../../constants/practiceHubImages.js'
import MezmurCardGrid from './MezmurCardGrid.jsx'
import ContinuePracticeCard from './ContinuePracticeCard.jsx'
import PracticeWorkspacePreview from './PracticeWorkspacePreview.jsx'
import './MezmurPracticeSection.css'

/**
 * @param {{
 *   sectionId?: string,
 *   sectionTitle?: string,
 *   intro?: string,
 *   materialsNote?: string,
 *   filters?: typeof mezmurPlaceholderFilters,
 *   featuredSlides?: typeof mezmurFeaturedSlides,
 *   placeholderCards?: typeof mezmurPlaceholderCards,
 * }} props
 */
export default function MezmurPracticeSection({
  sectionId = 'practice-hub-chants',
  sectionTitle = 'Mezmur & Werb',
  intro = 'Search and practice sacred mezmur and werb in one calm place. Pick an entry, listen with care, read the text, and rehearse slowly — always with material your priest or chanter approves.',
  materialsNote =
    'Full recordings and hymnals often live with their publishers and communities. This page helps you find and practice what you are permitted to use; when something opens on YouTube or another site, that source remains the authority for the full work.',
  filters = mezmurPlaceholderFilters,
  featuredSlides = mezmurFeaturedSlides,
  placeholderCards = mezmurPlaceholderCards,
}) {
  const [q, setQ] = useState('')
  const [filterId, setFilterId] = useState(filters[0]?.id ?? 'all')

  const feastBanner = practiceHubImage('featuredFeast')

  const gridCards = useMemo(() => {
    const qq = q.trim().toLowerCase()
    let list = [...placeholderCards]
    if (filterId === 'feast') list = list.filter((x) => x.tag === 'Feast')
    else if (filterId === 'lent') list = list.filter((x) => x.tag === 'Lent')
    else if (filterId === 'beginner') list = list.slice(0, 2)
    if (qq) {
      list = list.filter((x) => x.title.toLowerCase().includes(qq) || x.tag.toLowerCase().includes(qq))
    }
    return list
  }, [q, placeholderCards, filterId])

  return (
    <LearnRevealSection
      id={sectionId}
      className="ph-hub__section ph-hub__section--chants-embed ph-hub__section--mezmur-premium pp-section pp-section--mezmur"
      aria-labelledby="ph-hub-chants-title"
    >
      <div className="ph-hub__chants-head ph-hub__chants-head--premium">
        <span className="ph-hub__chants-kicker">Sacred hymnody</span>
        <h2 id="ph-hub-chants-title" className="ph-hub__section-title">
          {sectionTitle}
        </h2>
        <p className="ph-hub__section-lead">{intro}</p>
      </div>

      <details className="ph-hub__chants-materials">
        <summary className="ph-hub__chants-materials-summary">About recordings & hymnals</summary>
        <StatusBox tone="calm" className="ph-hub__chants-notice">
          <p className="status-box__text">{materialsNote}</p>
        </StatusBox>
      </details>

      <div className="pp-mez-scaffold">
        <MezmurSearchBar value={q} onChange={setQ} />
        <MezmurFilterChips filters={filters} activeId={filterId} onChange={setFilterId} />
        <FeaturedFeastCarousel slides={featuredSlides} bannerImageUrl={feastBanner} />
        <ContinuePracticeCard />
        <MezmurCardGrid cards={gridCards} />
        <details className="pp-mez-howto">
          <summary className="pp-mez-howto__summary">{chantLibraryCopy.featuredContinueTitle}</summary>
          <p className="pp-mez-howto__body">{chantLibraryCopy.defaultPracticeTip}</p>
        </details>
        <PracticeWorkspacePreview linkTo={`${paths.practice.chants}#chant-practice-workspace`} />
      </div>

      <div className="pp-mez-live">
        <h3 className="pp-mez-live__h">Full chant library & workspace</h3>
        <p className="pp-mez-live__lead">Use search and filters below — connects to your real chant data.</p>
        <ChantPracticeView defaultTypeFilter="all" anchorId="hub-chant-practice" idPrefix="hub-chant" />
      </div>
    </LearnRevealSection>
  )
}
