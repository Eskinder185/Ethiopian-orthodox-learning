import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  extractYouTubeId,
  getYouTubeEmbedUrl,
  getYouTubeWatchUrl,
} from '../../../utils/youtubeEmbed.js'
import { incrementWeeklyPractice, pushRecentChant } from '../../../utils/chantStorage.js'
import { formatPrimaryLabel } from './chantDisplayUtils.js'
import ChantLineByLine from './ChantLineByLine.jsx'
import { chantLibraryCopy } from './chantLibraryCopy.js'

const TABS = [
  { id: 'read', label: 'Read' },
  { id: 'listen', label: 'Listen' },
  { id: 'line', label: 'Line by line' },
  { id: 'memorize', label: 'Memorize' },
]

/**
 * @param {object} props
 * @param {import('../../../data/chants/chants.js').ChantEntry | null} props.entry
 * @param {boolean} props.open
 * @param {() => void} props.onClose
 * @param {(url: string) => void} [props.onSendVideoToWorkspace]
 * @param {() => void} [props.onSaveToggle]
 * @param {boolean} [props.isSaved]
 * @param {'read'|'listen'|'line'|'memorize'} [props.defaultTab]
 * @param {() => void} [props.onPracticeRecorded]
 */
export default function ChantDetailPanel({
  entry,
  open,
  onClose,
  onSendVideoToWorkspace,
  onSaveToggle,
  isSaved,
  defaultTab = 'listen',
  onPracticeRecorded,
}) {
  const baseId = useId()
  const closeRef = useRef(null)
  const initialTab =
    defaultTab === 'read' || defaultTab === 'listen' || defaultTab === 'line' || defaultTab === 'memorize'
      ? defaultTab
      : 'listen'
  const [tab, setTab] = useState(initialTab)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open || !entry) return null

  const videoId = extractYouTubeId(entry.youtubeUrl)
  const embedUrl = videoId ? getYouTubeEmbedUrl(videoId) : ''
  const watchUrl = videoId ? getYouTubeWatchUrl(videoId) : (entry.youtubeUrl || '').trim()

  const formLabel = entry.form === 'werb' ? chantLibraryCopy.typeWerb : chantLibraryCopy.typeMezmur
  const cat = entry.category
  const primaryLabel = formatPrimaryLabel(cat.primary)

  const markPracticed = () => {
    pushRecentChant(entry.id)
    incrementWeeklyPractice()
    onPracticeRecorded?.()
  }

  return createPortal(
    <div
      className="chant-detail-backdrop"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="chant-detail-panel chant-detail-panel--practice chant-detail-panel--premium"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${baseId}-title`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="chant-detail-panel__head">
          <div>
            <div className="chant-detail-panel__badges">
              <span className={'chant-detail-panel__type-badge chant-detail-panel__type-badge--' + entry.form}>
                {formLabel}
              </span>
              <span className="chant-detail-panel__cat-badge">{primaryLabel}</span>
              {cat.confidence ? (
                <span className="chant-detail-panel__conf-badge">
                  {chantLibraryCopy.confidence}: {cat.confidence}
                </span>
              ) : null}
            </div>
            <h2 id={`${baseId}-title`} className="chant-detail-panel__title" lang="am">
              {entry.title}
            </h2>
            {entry.transliterationTitle ? (
              <p className="chant-detail-panel__subtitle">{entry.transliterationTitle}</p>
            ) : null}
          </div>
          <div className="chant-detail-panel__head-actions">
            {onSaveToggle ? (
              <button
                type="button"
                className={'chant-detail-panel__icon-btn' + (isSaved ? ' is-saved' : '')}
                onClick={onSaveToggle}
                aria-pressed={isSaved}
              >
                {isSaved ? chantLibraryCopy.savedLabel : chantLibraryCopy.saveLabel}
              </button>
            ) : null}
            <button
              type="button"
              ref={closeRef}
              className="chant-detail-panel__close"
              onClick={onClose}
              aria-label={chantLibraryCopy.close}
            >
              ×
            </button>
          </div>
        </header>

        <div className="chant-detail-tabs" role="tablist" aria-label="Practice mode">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${t.id}`}
              aria-selected={tab === t.id}
              className={'chant-detail-tabs__tab' + (tab === t.id ? ' is-active' : '')}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'read' ? (
          <section
            className="chant-detail-tab-panel"
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-read`}
          >
            <p className="chant-detail-tab-panel__lead">{chantLibraryCopy.stepReadLead}</p>
            {entry.lyrics?.trim() ? (
              <pre className="chant-detail-panel__pre" lang="am">
                {entry.lyrics}
              </pre>
            ) : (
              <p className="chant-detail-panel__empty">{chantLibraryCopy.noLyrics}</p>
            )}
            <h3 className="chant-detail-panel__block-title">{chantLibraryCopy.lyricsTr}</h3>
            {entry.transliterationLyrics?.trim() ? (
              <pre className="chant-detail-panel__pre">{entry.transliterationLyrics}</pre>
            ) : (
              <p className="chant-detail-panel__empty">{chantLibraryCopy.noTransliteration}</p>
            )}
          </section>
        ) : null}

        {tab === 'listen' ? (
          <section
            className="chant-detail-tab-panel"
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-listen`}
          >
            <p className="chant-detail-tab-panel__lead">{chantLibraryCopy.stepListenLead}</p>
            {videoId && embedUrl ? (
              <div className="chant-detail-panel__video">
                <div className="chant-detail-panel__video-frame">
                  <iframe
                    title={entry.transliterationTitle || entry.title || 'YouTube'}
                    src={embedUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
                <p className="chant-detail-panel__video-fallback">
                  {chantLibraryCopy.embedFallback}{' '}
                  <a href={watchUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                    {chantLibraryCopy.youtubeOpen}
                  </a>
                </p>
              </div>
            ) : watchUrl ? (
              <p className="chant-detail-panel__video-missing">
                <a href={watchUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                  {chantLibraryCopy.youtubeOpen}
                </a>
              </p>
            ) : (
              <p className="chant-detail-panel__video-missing">{chantLibraryCopy.youtubeMissing}</p>
            )}
            {onSendVideoToWorkspace && entry.youtubeUrl?.trim() ? (
              <div className="chant-detail-panel__workspace-handoff">
                <button
                  type="button"
                  className="chant-detail-panel__workspace-btn"
                  onClick={() => onSendVideoToWorkspace(entry.youtubeUrl)}
                >
                  {chantLibraryCopy.sendVideoToWorkspace}
                </button>
                <p className="chant-detail-panel__workspace-hint">{chantLibraryCopy.sendVideoToWorkspaceHint}</p>
              </div>
            ) : null}
          </section>
        ) : null}

        {tab === 'line' ? (
          <section
            className="chant-detail-tab-panel"
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-line`}
          >
            <p className="chant-detail-tab-panel__lead">{chantLibraryCopy.lineByLineIntro}</p>
            <ChantLineByLine
              entry={entry}
              onMarkPracticed={() => {
                markPracticed()
              }}
            />
          </section>
        ) : null}

        {tab === 'memorize' ? (
          <section
            className="chant-detail-tab-panel"
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-memorize`}
          >
            <p className="chant-detail-tab-panel__lead">{chantLibraryCopy.stepPracticeLead}</p>
            <div className="chant-practice-tip">
              <p className="chant-practice-tip__label">{chantLibraryCopy.practiceTipTitle}</p>
              <p className="chant-practice-tip__body">{chantLibraryCopy.defaultPracticeTip}</p>
            </div>
            <p className="chant-detail-tab-panel__hint">{chantLibraryCopy.memorizeHint}</p>
            <button
              type="button"
              className="chant-detail-panel__workspace-btn"
              onClick={() => {
                markPracticed()
              }}
            >
              {chantLibraryCopy.markSessionPracticed}
            </button>
          </section>
        ) : null}

        <footer className="chant-detail-panel__footer">
          <button type="button" className="chant-detail-panel__footer-btn" onClick={() => markPracticed()}>
            {chantLibraryCopy.recordPracticeFooter}
          </button>
        </footer>
      </div>
    </div>,
    document.body,
  )
}
