import { useTranslation } from 'react-i18next'
import { startHereGlossaryIds } from '../../content/startHereContent.js'
import { startHereAssets, startHereImageIntrinsic } from '../../data/startHereAssets.js'

export default function OrthodoxGlossary() {
  const { t } = useTranslation('common')

  return (
    <section className="start-here-glossary start-here-block" aria-labelledby="start-glossary-heading">
      <h2 id="start-glossary-heading" className="start-here-section-title">
        {t('startHere.glossary.title')}
      </h2>
      <p className="start-here-section-lead">{t('startHere.glossary.lead')}</p>
      <div className="start-here-glossary__strip">
        <img
          src={startHereAssets.glossaryIconsStrip}
          alt={t('startHere.glossary.stripAlt')}
          width={startHereImageIntrinsic.glossaryStrip.width}
          height={startHereImageIntrinsic.glossaryStrip.height}
          loading="lazy"
          decoding="async"
          className="start-here-glossary__strip-img"
        />
      </div>
      <ul className="start-here-glossary__grid">
        {startHereGlossaryIds.map((id) => (
          <li key={id} className="start-here-glossary__item">
            <div className="start-here-glossary__term-row">
              <span className="start-here-glossary__term">{t(`startHere.glossary.terms.${id}.term`)}</span>
              <span className="start-here-glossary__script" lang="am">
                {t(`startHere.glossary.terms.${id}.script`)}
              </span>
            </div>
            <p className="start-here-glossary__def">{t(`startHere.glossary.terms.${id}.def`)}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
