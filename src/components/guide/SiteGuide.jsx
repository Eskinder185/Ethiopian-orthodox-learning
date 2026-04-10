import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { siteGuideMatchEntries, siteGuideTopicRoutes } from '../../data/siteGuideMatch.js'
import { matchSiteGuideQuery } from './matchSiteGuide.js'
import './SiteGuide.css'

export default function SiteGuide() {
  const { t } = useTranslation('common')
  const [open, setOpen] = useState(false)
  const [reply, setReply] = useState(null)
  const [draft, setDraft] = useState('')
  const rootRef = useRef(null)
  const panelId = useId()

  const entries = useMemo(
    () =>
      siteGuideMatchEntries.map((m) => ({
        ...m,
        suggestionLabel: t(`siteGuide.entries.${m.id}.suggestionLabel`),
        answer: t(`siteGuide.entries.${m.id}.answer`),
        linkLabel: t(`siteGuide.entries.${m.id}.linkLabel`),
      })),
    [t],
  )

  const close = useCallback(() => {
    setOpen(false)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close])

  useEffect(() => {
    if (!open) return
    const onPointer = (e) => {
      const el = rootRef.current
      if (el && !el.contains(e.target)) close()
    }
    document.addEventListener('pointerdown', onPointer)
    return () => document.removeEventListener('pointerdown', onPointer)
  }, [open, close])

  const applyEntry = (entry) => {
    setReply({
      text: entry.answer,
      linkTo: entry.linkTo,
      linkLabel: entry.linkLabel,
    })
  }

  const onSubmitQuestion = (e) => {
    e.preventDefault()
    const q = draft.trim()
    if (!q) return
    const hit = matchSiteGuideQuery(q, entries)
    if (hit) applyEntry(hit.entry)
    else
      setReply({
        text: t('siteGuide.fallback'),
        linkTo: null,
        linkLabel: null,
      })
    setDraft('')
  }

  const onPickSuggestion = (entry) => {
    applyEntry(entry)
  }

  const onStartOver = () => {
    setReply(null)
    setDraft('')
  }

  return (
    <div className="site-guide" ref={rootRef}>
      {open ? (
        <section
          id={panelId}
          className="site-guide__panel"
          aria-labelledby="site-guide-title"
          role="region"
        >
          <header className="site-guide__head">
            <h2 id="site-guide-title" className="site-guide__title">
              {t('siteGuide.title')}
            </h2>
            <button
              type="button"
              className="site-guide__icon-btn"
              onClick={close}
              aria-label={t('siteGuide.close')}
            >
              ×
            </button>
          </header>

          <p className="site-guide__welcome">{t('siteGuide.welcome')}</p>

          {reply ? (
            <div className="site-guide__reply" role="status">
              <p className="site-guide__reply-text">{reply.text}</p>
              {reply.linkTo && reply.linkLabel ? (
                <p className="site-guide__reply-link-wrap">
                  <Link to={reply.linkTo} className="site-guide__link text-link" onClick={close}>
                    {reply.linkLabel}
                  </Link>
                </p>
              ) : null}
              <button type="button" className="site-guide__text-btn" onClick={onStartOver}>
                {t('siteGuide.askElse')}
              </button>
            </div>
          ) : null}

          <div className="site-guide__topics">
            <p className="site-guide__block-label" id="site-guide-topics-heading">
              {t('siteGuide.sectionsLabel')}
            </p>
            <ul className="site-guide__topic-list" aria-labelledby="site-guide-topics-heading">
              {siteGuideTopicRoutes.map((topic) => (
                <li key={topic.id}>
                  <Link
                    to={topic.to}
                    className="site-guide__topic-pill"
                    onClick={close}
                    title={t(`siteGuide.topics.${topic.id}.hint`)}
                  >
                    {t(`siteGuide.topics.${topic.id}.label`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-guide__suggestions">
            <p className="site-guide__block-label" id="site-guide-suggestions-heading">
              {t('siteGuide.suggestedLabel')}
            </p>
            <ul className="site-guide__chips" aria-labelledby="site-guide-suggestions-heading">
              {entries.map((entry) => (
                <li key={entry.id} className="site-guide__chips-item">
                  <button
                    type="button"
                    className="site-guide__chip"
                    onClick={() => onPickSuggestion(entry)}
                  >
                    {entry.suggestionLabel}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <form className="site-guide__form" onSubmit={onSubmitQuestion}>
            <label htmlFor="site-guide-input" className="site-guide__sr-only">
              {t('siteGuide.inputLabel')}
            </label>
            <input
              id="site-guide-input"
              type="search"
              enterKeyHint="send"
              className="site-guide__input"
              placeholder={t('siteGuide.inputPlaceholder')}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              autoComplete="off"
            />
            <button type="submit" className="site-guide__submit">
              {t('siteGuide.send')}
            </button>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        className="site-guide__fab"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={open ? t('siteGuide.close') : t('siteGuide.open')}
      >
        <svg
          className="site-guide__fab-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="site-guide__fab-label">{t('siteGuide.fabLabel')}</span>
      </button>
    </div>
  )
}
