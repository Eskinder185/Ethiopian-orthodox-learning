import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import HomeHeroSection from '../components/home/HomeHeroSection.jsx'
import HomeNewHereBanner from '../components/home/HomeNewHereBanner.jsx'
import TodayInTheChurchSection from '../components/home/TodayInTheChurchSection.jsx'
import PathCardsSection from '../components/home/PathCardsSection.jsx'
import SeasonalSpotlightSection from '../components/home/SeasonalSpotlightSection.jsx'
import MicroLearningSection from '../components/home/MicroLearningSection.jsx'
import FeaturedPracticeHighlight from '../components/home/FeaturedPracticeHighlight.jsx'
import MissionTrustSection from '../components/home/MissionTrustSection.jsx'
import HomepageClosingCTASection from '../components/home/HomepageClosingCTASection.jsx'
import { getLiturgicalDayState } from '../utils/liturgicalCalendar.js'
import { homeDividerCrossCssUrl } from '../data/homeAssets.js'
import { homeHeroMedia } from '../content/homeContent.js'
import './HomePage.css'
import '../components/home/HomeSections.css'

export default function HomePage() {
  const { t } = useTranslation('common')
  const snapshot = useMemo(() => getLiturgicalDayState(new Date()), [])

  return (
    <div
      className="home home--v2"
      style={{ '--home-divider-cross': homeDividerCrossCssUrl() }}
    >
      <HomeHeroSection
        heroImageSrc={homeHeroMedia.imageSrc ?? undefined}
        heroVideoSrc={homeHeroMedia.videoSrc ?? undefined}
        heroImageAlt={homeHeroMedia.imageAlt}
      />

      <HomeNewHereBanner className="home__new-here" />

      <div className="home__shell">
        <div className="home__today-wide">
          <TodayInTheChurchSection snapshot={snapshot} className="home__section" />
        </div>

        <PathCardsSection className="home__section home__section--rise" />

        <SeasonalSpotlightSection className="home__section home__section--rise" />

        <MicroLearningSection className="home__section home__section--rise" />

        <FeaturedPracticeHighlight className="home__section home__section--rise" />

        <MissionTrustSection className="home__section home__section--rise" />

        <p className="home__materials-note">{t('home.materialsShort')}</p>

        <HomepageClosingCTASection className="home__section home__section--closing" />
      </div>
    </div>
  )
}
