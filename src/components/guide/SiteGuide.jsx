import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  siteGuideWelcome,
  siteGuideFallback,
  siteGuideEntries,
  siteGuideTopics,
} from '../../data/siteGuideData.js'
import { matchSiteGuideQuery } from './matchSiteGuide.js'
import './SiteGuide.css'

export default function SiteGuide() {
  const [open, setOpen] = useState(false)
  const [reply, setReply] = useState(null)
  const [draft, setDraft] = useState('')
  const rootRef = useRef(null)
  const panelId = useId()

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
    const hit = matchSiteGuideQuery(q, siteGuideEntries)
    if (hit) applyEntry(hit.entry)
    else
      setReply({
        text: siteGuideFallback,
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
              Site guide
            </h2>
            <button
              type="button"
              className="site-guide__icon-btn"
              onClick={close}
              aria-label="Close site guide"
            >
              ×
            </button>
          </header>

          <p className="site-guide__welcome">{siteGuideWelcome}</p>

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
                Ask something else
              </button>
            </div>
          ) : null}

          <div className="site-guide__topics">
            <p className="site-guide__block-label" id="site-guide-topics-heading">
              Sections
            </p>
            <ul className="site-guide__topic-list" aria-labelledby="site-guide-topics-heading">
              {siteGuideTopics.map((t) => (
                <li key={t.id}>
                  <Link
                    to={t.to}
                    className="site-guide__topic-pill"
                    onClick={close}
                    title={t.hint}
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-guide__suggestions">
            <p className="site-guide__block-label" id="site-guide-suggestions-heading">
              Suggested questions
            </p>
            <ul className="site-guide__chips" aria-labelledby="site-guide-suggestions-heading">
              {siteGuideEntries.map((entry) => (
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
              Type a short question
            </label>
            <input
              id="site-guide-input"
              type="search"
              enterKeyHint="send"
              className="site-guide__input"
              placeholder="Type a short question…"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              autoComplete="off"
            />
            <button type="submit" className="site-guide__submit">
              Send
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
        aria-label={open ? 'Close site guide' : 'Open site guide'}
      >
        <span className="site-guide__fab-label">Guide</span>
      </button>
    </div>
  )
}
