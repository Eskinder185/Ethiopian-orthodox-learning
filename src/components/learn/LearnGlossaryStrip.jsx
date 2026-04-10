import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { learnGlossaryTermKeys } from '../../data/learnHubPageData.js'
import LearnRevealSection from './LearnRevealSection.jsx'

export default function LearnGlossaryStrip() {
  const { t } = useTranslation('common')
  const dialogId = useId()
  const dialogRef = useRef(null)
  const [term, setTerm] = useState(null)

  const close = useCallback(() => {
    setTerm(null)
    const dlg = dialogRef.current
    if (dlg?.open) dlg.close()
  }, [])

  useEffect(() => {
    if (!term) return
    const dlg = dialogRef.current
    if (dlg && typeof dlg.showModal === 'function' && !dlg.open) {
      dlg.showModal()
    }
  }, [term])

  return (
    <LearnRevealSection className="learn-glossary" aria-labelledby="learn-glossary-heading">
      <h2 id="learn-glossary-heading" className="learn-glossary__title">
        {t('learnHub.glossary.title')}
      </h2>
      <p className="learn-glossary__hint">{t('learnHub.glossary.hint')}</p>
      <ul className="learn-glossary__chips">
        {learnGlossaryTermKeys.map((key) => (
          <li key={key}>
            <button
              type="button"
              className="learn-glossary__chip"
              onClick={() => setTerm(key)}
              aria-haspopup="dialog"
              aria-controls={dialogId}
            >
              {t(`learnHub.glossary.terms.${key}.label`)}
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        id={dialogId}
        className="learn-glossary__dialog"
        onClose={() => setTerm(null)}
        onCancel={(e) => {
          e.preventDefault()
          close()
        }}
      >
        {term ?
          <>
            <h3 className="learn-glossary__dialog-title">{t(`learnHub.glossary.terms.${term}.label`)}</h3>
            <p className="learn-glossary__dialog-body">{t(`learnHub.glossary.terms.${term}.definition`)}</p>
          </>
        : null}
        <button type="button" className="learn-glossary__dialog-close btn btn--secondary" onClick={close}>
          {t('learnHub.glossary.close')}
        </button>
      </dialog>
    </LearnRevealSection>
  )
}
