import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { startHereAssets, startHereImageIntrinsic } from '../../data/startHereAssets.js'
import StartHereJourneyIllustration from './StartHereJourneyIllustration.jsx'

/**
 * Primary hero art — PNG journey; falls back to inline SVG if the file is missing.
 */
export default function StartHerePilgrimArt() {
  const { t } = useTranslation('common')
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <StartHereJourneyIllustration />
  }

  return (
    <figure className="start-here-pilgrim">
      <picture>
        <source media="(max-width: 767px)" srcSet={startHereAssets.pilgrimJourneyMobile} />
        <img
          className="start-here-pilgrim__img"
          src={startHereAssets.pilgrimJourney}
          alt={t('startHere.pilgrimArtAlt')}
          width={startHereImageIntrinsic.pilgrimHero.width}
          height={startHereImageIntrinsic.pilgrimHero.height}
          loading="eager"
          decoding="async"
          onError={() => setFailed(true)}
        />
      </picture>
    </figure>
  )
}
