import { useState, useCallback, useRef, useEffect, useId, useMemo } from 'react'
import { extractYouTubeId } from '../../utils/extractYouTubeId.js'
import { parseTimeToSeconds, formatSecondsToTimestamp } from '../../utils/timeFormat.js'
import { loadYouTubeIframeAPI } from '../../utils/loadYouTubeIframeAPI.js'
import './MezmurPracticeWorkspace.css'

const SPEED_OPTIONS = [
  { label: '0.5×', value: 0.5 },
  { label: '0.75×', value: 0.75 },
  { label: '1×', value: 1 },
]

const MEMO_TABS = [
  { id: 'lookaway', label: 'Look-away tests' },
  { id: 'lines', label: 'Line-connecting' },
]

function createEmptyChunk() {
  return {
    id: crypto.randomUUID(),
    startSec: 0,
    endSec: 0,
    startInput: '0:00',
    endInput: '0:00',
    text: '',
    chunkNotes: '',
  }
}

function chunkSummary(text) {
  const t = text.trim().replace(/\s+/g, ' ')
  if (!t) return 'No lyrics yet'
  return t.length > 52 ? `${t.slice(0, 50)}…` : t
}

/**
 * @param {object} [props]
 * @param {string} [props.anchorId] — DOM id for skip links / anchors
 * @param {string} [props.workspaceTitle]
 * @param {string} [props.workspaceIntro]
 * @param {{ nonce: number; url: string } | null} [props.loadRequest] — bump `nonce` to load `url` (e.g. from catalog)
 * @param {string} [props.className]
 */
export default function MezmurPracticeWorkspace({
  anchorId = 'chant-practice-workspace',
  workspaceTitle = 'Chant practice workspace',
  workspaceIntro =
    'Use the YouTube player with timestamps and short lyric parts — for mezmur or werb you paste or load from the list above.',
  loadRequest = null,
  className = '',
}) {
  const playerMountId = useId().replace(/:/g, '')
  const playerMountRef = useRef(null)
  const playerRef = useRef(null)
  const effectPlayerRef = useRef(null)
  const playOnceIntervalRef = useRef(null)
  const playbackRateRef = useRef(1)
  const [playerReady, setPlayerReady] = useState(false)

  const workspaceSeed = useMemo(() => {
    const c = createEmptyChunk()
    return { chunks: [c], activeChunkId: c.id }
  }, [])

  const [chunks, setChunks] = useState(workspaceSeed.chunks)
  const [activeChunkId, setActiveChunkId] = useState(workspaceSeed.activeChunkId)
  const [repeatChunkId, setRepeatChunkId] = useState(null)
  const [hideActiveLyrics, setHideActiveLyrics] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [memoTab, setMemoTab] = useState('lookaway')

  const [showScratchLyrics, setShowScratchLyrics] = useState(false)
  const [scratchLyrics, setScratchLyrics] = useState('')
  const [youtubeInput, setYoutubeInput] = useState('')
  const [videoId, setVideoId] = useState(null)
  const [youtubeError, setYoutubeError] = useState(null)
  const [memoNotes, setMemoNotes] = useState('')

  const getPlayer = useCallback(() => playerRef.current, [])

  const updateChunk = useCallback((id, patch) => {
    setChunks((prev) => prev.map((c) => (c.id === id ? { ...c, ...patch } : c)))
  }, [])

  const addChunk = useCallback(() => {
    const next = createEmptyChunk()
    setChunks((prev) => [...prev, next])
    setActiveChunkId(next.id)
  }, [])

  const removeChunk = useCallback((id) => {
    setRepeatChunkId((cur) => (cur === id ? null : cur))
    setChunks((prev) => {
      const filtered = prev.filter((c) => c.id !== id)
      return filtered.length ? filtered : [createEmptyChunk()]
    })
  }, [])

  useEffect(() => {
    setActiveChunkId((cur) => (chunks.some((c) => c.id === cur) ? cur : chunks[0].id))
  }, [chunks])

  const loadVideo = useCallback(() => {
    setYoutubeError(null)
    const id = extractYouTubeId(youtubeInput)
    if (!id) {
      setVideoId(null)
      setYoutubeError(
        'That does not look like a valid YouTube link. Try a watch, youtu.be, or embed URL.',
      )
      return
    }
    setVideoId(id)
  }, [youtubeInput])

  useEffect(() => {
    const url = loadRequest?.url?.trim()
    if (!url || !loadRequest?.nonce) return
    const id = extractYouTubeId(url)
    if (!id) return
    setYoutubeError(null)
    setYoutubeInput(url)
    setVideoId(id)
  }, [loadRequest?.nonce, loadRequest?.url])

  const clearVideo = useCallback(() => {
    setVideoId(null)
    setYoutubeError(null)
    setYoutubeInput('')
    setRepeatChunkId(null)
  }, [])

  useEffect(() => {
    return () => {
      if (playOnceIntervalRef.current) {
        clearInterval(playOnceIntervalRef.current)
        playOnceIntervalRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    playbackRateRef.current = playbackRate
  }, [playbackRate])

  useEffect(() => {
    if (!videoId) {
      setPlayerReady(false)
      const p = effectPlayerRef.current || playerRef.current
      effectPlayerRef.current = null
      playerRef.current = null
      try {
        p?.destroy?.()
      } catch {
        /* ignore */
      }
      return
    }

    setPlayerReady(false)
    let cancelled = false

    loadYouTubeIframeAPI().then(() => {
      if (cancelled) return
      const el = playerMountRef.current
      if (!el) return

      let yt
      try {
        yt = new window.YT.Player(el, {
          videoId,
          width: '100%',
          height: '100%',
          playerVars: {
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
          },
          events: {
            onReady: (e) => {
              if (cancelled) {
                try {
                  e.target.destroy()
                } catch {
                  /* ignore */
                }
                return
              }
              playerRef.current = e.target
              try {
                e.target.setPlaybackRate(playbackRateRef.current)
              } catch {
                /* ignore */
              }
              setPlayerReady(true)
            },
          },
        })
        effectPlayerRef.current = yt
      } catch {
        setYoutubeError('Could not start the YouTube player. Try refreshing the page.')
      }
    })

    return () => {
      cancelled = true
      setPlayerReady(false)
      const p = effectPlayerRef.current || playerRef.current
      effectPlayerRef.current = null
      playerRef.current = null
      try {
        p?.destroy?.()
      } catch {
        /* ignore */
      }
    }
  }, [videoId])

  useEffect(() => {
    const p = playerRef.current
    if (!p?.setPlaybackRate) return
    try {
      p.setPlaybackRate(playbackRate)
    } catch {
      /* ignore */
    }
  }, [playbackRate, videoId])

  useEffect(() => {
    if (!repeatChunkId || !videoId) return
    const chunk = chunks.find((c) => c.id === repeatChunkId)
    if (!chunk || chunk.endSec <= chunk.startSec) return

    const iv = setInterval(() => {
      const p = playerRef.current
      if (!p?.getCurrentTime || !p.seekTo) return
      const t = p.getCurrentTime()
      if (t >= chunk.endSec - 0.2) {
        p.seekTo(chunk.startSec, true)
        try {
          p.playVideo()
        } catch {
          /* ignore */
        }
      }
    }, 200)

    return () => clearInterval(iv)
  }, [repeatChunkId, videoId, chunks])

  const seekCurrentMinus5 = useCallback(() => {
    const p = getPlayer()
    if (!p?.getCurrentTime || !p.seekTo) return
    const t = Math.max(0, p.getCurrentTime() - 5)
    p.seekTo(t, true)
  }, [getPlayer])

  const seekCurrentPlus5 = useCallback(() => {
    const p = getPlayer()
    if (!p?.getCurrentTime || !p.seekTo) return
    let t = p.getCurrentTime() + 5
    try {
      const d = p.getDuration?.()
      if (typeof d === 'number' && d > 0 && !Number.isNaN(d)) {
        t = Math.min(Math.max(0, d - 0.25), t)
      }
    } catch {
      /* ignore */
    }
    p.seekTo(t, true)
  }, [getPlayer])

  const playPause = useCallback(() => {
    const p = getPlayer()
    if (!p?.getPlayerState || !window.YT?.PlayerState) return
    const state = p.getPlayerState()
    if (state === window.YT.PlayerState.PLAYING) {
      p.pauseVideo()
    } else {
      p.playVideo()
    }
  }, [getPlayer])

  const captureTimeForChunk = useCallback(
    (id, field) => {
      const p = getPlayer()
      if (!p?.getCurrentTime) return
      const t = Math.floor(p.getCurrentTime())
      const formatted = formatSecondsToTimestamp(t)
      if (field === 'start') {
        updateChunk(id, { startSec: t, startInput: formatted })
      } else {
        updateChunk(id, { endSec: t, endInput: formatted })
      }
    },
    [getPlayer, updateChunk],
  )

  const playChunkOnce = useCallback(
    (chunk) => {
      const p = getPlayer()
      if (!p?.seekTo || !p.playVideo) return
      if (playOnceIntervalRef.current) {
        clearInterval(playOnceIntervalRef.current)
        playOnceIntervalRef.current = null
      }
      const { startSec, endSec } = chunk
      if (endSec <= startSec) return

      p.seekTo(startSec, true)
      p.playVideo()

      playOnceIntervalRef.current = setInterval(() => {
        const cur = p.getCurrentTime?.()
        if (cur == null) return
        if (cur >= endSec - 0.12) {
          try {
            p.pauseVideo()
          } catch {
            /* ignore */
          }
          clearInterval(playOnceIntervalRef.current)
          playOnceIntervalRef.current = null
        }
      }, 80)
    },
    [getPlayer],
  )

  const toggleRepeatChunk = useCallback((id) => {
    setRepeatChunkId((cur) => (cur === id ? null : id))
  }, [])

  const repeatActiveSection = useCallback(() => {
    if (!activeChunkId) return
    setRepeatChunkId((cur) => (cur === activeChunkId ? null : activeChunkId))
  }, [activeChunkId])

  const activeChunk = chunks.find((c) => c.id === activeChunkId) ?? null
  const activeIndex = activeChunk ? chunks.findIndex((c) => c.id === activeChunkId) : -1
  const activeChunkValid =
    Boolean(activeChunk && activeChunk.endSec > activeChunk.startSec)

  const onStartBlur = useCallback(
    (c) => {
      const sec = parseTimeToSeconds(c.startInput)
      updateChunk(c.id, { startSec: sec, startInput: formatSecondsToTimestamp(sec) })
    },
    [updateChunk],
  )

  const onEndBlur = useCallback(
    (c) => {
      const sec = parseTimeToSeconds(c.endInput)
      updateChunk(c.id, { endSec: sec, endInput: formatSecondsToTimestamp(sec) })
    },
    [updateChunk],
  )

  return (
    <div className={'mezmur-workspace' + (className ? ` ${className}` : '')} id={anchorId}>
      <header className="mezmur-workspace__header">
        <h2 className="mezmur-workspace__page-title">{workspaceTitle}</h2>
        <p className="mezmur-workspace__intro">{workspaceIntro}</p>
      </header>

      <div className="mezmur-workspace__primary">
        {/* —— Video (main practice anchor) —— */}
        <section
          className="mezmur-panel mezmur-panel--video mezmur-panel--elevated"
          aria-labelledby="mezmur-video-heading"
        >
          <div className="mezmur-panel__head">
            <h3 id="mezmur-video-heading" className="mezmur-panel__title">
              Practice video
            </h3>
          </div>

          <div className="mezmur-youtube-bar">
            <input
              type="url"
              className="mezmur-youtube-input"
              value={youtubeInput}
              onChange={(e) => setYoutubeInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') loadVideo()
              }}
              placeholder="YouTube URL…"
              aria-invalid={Boolean(youtubeError)}
              aria-describedby={youtubeError ? 'mezmur-youtube-error' : undefined}
            />
            <button type="button" className="mezmur-btn mezmur-btn--primary" onClick={loadVideo}>
              Load
            </button>
          </div>
          {youtubeError ? (
            <p id="mezmur-youtube-error" className="mezmur-workspace__error" role="alert">
              {youtubeError}
            </p>
          ) : null}

          {videoId ? (
            <>
              <div className="mezmur-video-stage">
                <div className="mezmur-video-aspect">
                  <div
                    ref={playerMountRef}
                    id={playerMountId}
                    className="mezmur-yt-mount"
                    title="YouTube video player"
                  />
                </div>
                <button
                  type="button"
                  className="mezmur-btn mezmur-btn--ghost mezmur-btn--small mezmur-video-stage__clear"
                  onClick={clearVideo}
                >
                  Remove video
                </button>
              </div>

              <div className="mezmur-controls mezmur-controls--compact" aria-label="Playback">
                <div className="mezmur-controls__primary">
                  <button
                    type="button"
                    className="mezmur-btn mezmur-btn--ghost mezmur-btn--small"
                    onClick={seekCurrentMinus5}
                    disabled={!playerReady}
                  >
                    −5s
                  </button>
                  <button
                    type="button"
                    className="mezmur-btn mezmur-btn--primary mezmur-btn--small"
                    onClick={playPause}
                    disabled={!playerReady}
                  >
                    Play / Pause
                  </button>
                  <button
                    type="button"
                    className="mezmur-btn mezmur-btn--ghost mezmur-btn--small"
                    onClick={seekCurrentPlus5}
                    disabled={!playerReady}
                  >
                    +5s
                  </button>
                  <label className="mezmur-controls__speed">
                    <span className="visually-hidden">Speed</span>
                    <select
                      className="mezmur-controls__select"
                      value={playbackRate}
                      onChange={(e) => setPlaybackRate(Number(e.target.value))}
                      disabled={!playerReady}
                      aria-label="Playback speed"
                    >
                      {SPEED_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="mezmur-controls__secondary">
                  <button
                    type="button"
                    className={
                      'mezmur-btn mezmur-btn--ghost mezmur-btn--small' +
                      (repeatChunkId && activeChunkId && repeatChunkId === activeChunkId
                        ? ' mezmur-btn--toggled'
                        : '')
                    }
                    onClick={repeatActiveSection}
                    disabled={!playerReady || !activeChunkId || !activeChunkValid}
                    title="Loop the active part’s start–end"
                  >
                    Repeat section
                  </button>
                  {repeatChunkId ? (
                    <button
                      type="button"
                      className="mezmur-btn mezmur-btn--ghost mezmur-btn--small"
                      onClick={() => setRepeatChunkId(null)}
                    >
                      Stop repeat
                    </button>
                  ) : null}
                </div>
                {!playerReady ? (
                  <p className="mezmur-controls__status">Loading player…</p>
                ) : null}
              </div>
            </>
          ) : (
            <div className="mezmur-video-empty">
              <p>Paste a link and load to practice with timed lyric parts.</p>
            </div>
          )}
        </section>

        {/* —— Active part editor —— */}
        <section
          className="mezmur-panel mezmur-panel--editor mezmur-panel--elevated"
          aria-labelledby="mezmur-editor-heading"
        >
          <div className="mezmur-panel__head mezmur-panel__head--inline">
            <h3 id="mezmur-editor-heading" className="mezmur-panel__title">
              Active part
            </h3>
            <details className="mezmur-help-details">
              <summary>Timestamps help</summary>
              <p>
                While the video plays, use <strong>Mark</strong> beside Start / End to capture the
                current time. Edit as <code className="mezmur-workspace__code">m:ss</code> or
                seconds.
              </p>
            </details>
          </div>

          {activeChunk ? (
            <div className="mezmur-editor">
              <div className="mezmur-editor__toolbar">
                <span className="mezmur-editor__part-badge">Part {activeIndex + 1}</span>
                {chunks.length > 1 ? (
                  <button
                    type="button"
                    className="mezmur-btn mezmur-btn--ghost mezmur-btn--small"
                    onClick={() => removeChunk(activeChunk.id)}
                  >
                    Remove part
                  </button>
                ) : null}
              </div>

              <div className="mezmur-editor__times">
                <div className="mezmur-editor__time-cell">
                  <label className="mezmur-editor__time-label" htmlFor={`mezmur-start-${activeChunk.id}`}>
                    Start
                  </label>
                  <div className="mezmur-editor__time-input-row">
                    <input
                      id={`mezmur-start-${activeChunk.id}`}
                      type="text"
                      className="mezmur-chunk__time-input"
                      value={activeChunk.startInput}
                      onChange={(e) => updateChunk(activeChunk.id, { startInput: e.target.value })}
                      onBlur={() => onStartBlur(activeChunk)}
                      inputMode="numeric"
                      placeholder="0:00"
                      disabled={!videoId}
                    />
                    <button
                      type="button"
                      className="mezmur-btn mezmur-btn--ghost mezmur-btn--small"
                      onClick={() => captureTimeForChunk(activeChunk.id, 'start')}
                      disabled={!videoId}
                      title="Capture current time"
                    >
                      Mark
                    </button>
                  </div>
                </div>
                <div className="mezmur-editor__time-cell">
                  <label className="mezmur-editor__time-label" htmlFor={`mezmur-end-${activeChunk.id}`}>
                    End
                  </label>
                  <div className="mezmur-editor__time-input-row">
                    <input
                      id={`mezmur-end-${activeChunk.id}`}
                      type="text"
                      className="mezmur-chunk__time-input"
                      value={activeChunk.endInput}
                      onChange={(e) => updateChunk(activeChunk.id, { endInput: e.target.value })}
                      onBlur={() => onEndBlur(activeChunk)}
                      inputMode="numeric"
                      placeholder="0:05"
                      disabled={!videoId}
                    />
                    <button
                      type="button"
                      className="mezmur-btn mezmur-btn--ghost mezmur-btn--small"
                      onClick={() => captureTimeForChunk(activeChunk.id, 'end')}
                      disabled={!videoId}
                      title="Capture current time"
                    >
                      Mark
                    </button>
                  </div>
                </div>
              </div>

              <label className="mezmur-editor__lyrics-label" htmlFor={`mezmur-text-${activeChunk.id}`}>
                Lyrics
              </label>
              <textarea
                id={`mezmur-text-${activeChunk.id}`}
                className={
                  'mezmur-editor__textarea' +
                  (hideActiveLyrics && activeChunk.text.trim() !== ''
                    ? ' mezmur-editor__textarea--hidden'
                    : '')
                }
                value={activeChunk.text}
                onChange={(e) => updateChunk(activeChunk.id, { text: e.target.value })}
                placeholder="Line or section for this part…"
                rows={7}
                spellCheck="false"
              />
              {hideActiveLyrics && activeChunk.text.trim() !== '' ? (
                <p className="mezmur-editor__hidden-note" role="status">
                  Hidden for practice — use Memorization → hide toggle to show.
                </p>
              ) : null}

              <details className="mezmur-editor__notes-details">
                <summary>Notes for this part (optional)</summary>
                <textarea
                  id={`mezmur-chunk-notes-${activeChunk.id}`}
                  className="mezmur-editor__notes"
                  value={activeChunk.chunkNotes}
                  onChange={(e) => updateChunk(activeChunk.id, { chunkNotes: e.target.value })}
                  placeholder="Pronunciation, reminders…"
                  rows={2}
                />
              </details>

              <div className="mezmur-editor__actions">
                <button
                  type="button"
                  className="mezmur-btn mezmur-btn--primary mezmur-btn--small"
                  onClick={() => playChunkOnce(activeChunk)}
                  disabled={!videoId || activeChunk.endSec <= activeChunk.startSec}
                >
                  Play part
                </button>
                <button
                  type="button"
                  className={
                    'mezmur-btn mezmur-btn--ghost mezmur-btn--small' +
                    (repeatChunkId === activeChunk.id ? ' mezmur-btn--toggled' : '')
                  }
                  onClick={() => toggleRepeatChunk(activeChunk.id)}
                  disabled={!videoId || activeChunk.endSec <= activeChunk.startSec}
                  aria-pressed={repeatChunkId === activeChunk.id}
                >
                  {repeatChunkId === activeChunk.id ? 'Stop repeat' : 'Repeat part'}
                </button>
              </div>
            </div>
          ) : (
            <p className="mezmur-panel__empty">Select a part from the list.</p>
          )}
        </section>
      </div>

      {/* —— Part navigator (full width, lighter — second row) —— */}
      <section className="mezmur-parts" aria-labelledby="mezmur-parts-heading">
        <div className="mezmur-parts__header">
          <div className="mezmur-parts__header-text">
            <h3 id="mezmur-parts-heading" className="mezmur-parts__title">
              All parts
            </h3>
            <p className="mezmur-parts__hint">Choose a part to load it into the editor above.</p>
          </div>
          <button
            type="button"
            className="mezmur-btn mezmur-btn--ghost mezmur-parts__add"
            onClick={addChunk}
          >
            + Add part
          </button>
        </div>
        <ul className="mezmur-part-list mezmur-part-list--flow" role="list">
          {chunks.map((c, index) => {
            const isActive = c.id === activeChunkId
            const isRepeating = c.id === repeatChunkId
            const range =
              c.endSec > c.startSec ? `${c.startInput}–${c.endInput}` : `${c.startInput} → …`
            return (
              <li key={c.id} className="mezmur-part-list__item" role="listitem">
                <button
                  type="button"
                  className={
                    'mezmur-part-chip' +
                    (isActive ? ' mezmur-part-chip--active' : '') +
                    (isRepeating ? ' mezmur-part-chip--repeat' : '')
                  }
                  onClick={() => setActiveChunkId(c.id)}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span className="mezmur-part-chip__num">Part {index + 1}</span>
                  <span className="mezmur-part-chip__range">{range}</span>
                  <span className="mezmur-part-chip__preview">{chunkSummary(c.text)}</span>
                </button>
                {chunks.length > 1 ? (
                  <button
                    type="button"
                    className="mezmur-part-chip__remove"
                    onClick={(e) => {
                      e.stopPropagation()
                      removeChunk(c.id)
                    }}
                    aria-label={`Remove part ${index + 1}`}
                  >
                    ×
                  </button>
                ) : null}
              </li>
            )
          })}
        </ul>
      </section>

      <div className="mezmur-workspace__below">
        <section className="mezmur-memo" aria-labelledby="mezmur-memorization-heading">
          <h3 id="mezmur-memorization-heading" className="mezmur-memo__title">
            Memorization
          </h3>
          <div className="mezmur-memo__tabs" role="tablist" aria-label="Memorization topics">
            {MEMO_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`mezmur-memo-tab-${tab.id}`}
                aria-selected={memoTab === tab.id}
                aria-controls={`mezmur-memo-panel-${tab.id}`}
                className={'mezmur-memo__tab' + (memoTab === tab.id ? ' mezmur-memo__tab--active' : '')}
                onClick={() => setMemoTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mezmur-memo__toolbar">
            <span className="mezmur-memo__active" role="status">
              {activeChunk ? (
                <>
                  Active: <strong>Part {activeIndex + 1}</strong>
                </>
              ) : (
                <>No active part</>
              )}
            </span>
            <button
              type="button"
              className={
                'mezmur-btn mezmur-btn--ghost mezmur-btn--small' +
                (hideActiveLyrics ? ' mezmur-btn--toggled' : '')
              }
              onClick={() => setHideActiveLyrics((v) => !v)}
              aria-pressed={hideActiveLyrics}
              disabled={!activeChunk?.text?.trim()}
            >
              {hideActiveLyrics ? 'Show lyrics' : 'Hide active lyrics'}
            </button>
          </div>

          {memoTab === 'lookaway' ? (
            <div
              id="mezmur-memo-panel-lookaway"
              role="tabpanel"
              aria-labelledby="mezmur-memo-tab-lookaway"
              className="mezmur-memo__panel"
            >
              <p className="mezmur-memo__lead">
                Set one part active, then use short <strong>look-away</strong> tests instead of long
                staring — glance, look away, say it, check if needed.
              </p>
              <p className="mezmur-memo__p">
                <strong>Hide active lyrics</strong> (above) works the same way: practice recall, then
                reveal to verify.
              </p>
            </div>
          ) : null}
          {memoTab === 'lines' ? (
            <div
              id="mezmur-memo-panel-lines"
              role="tabpanel"
              aria-labelledby="mezmur-memo-tab-lines"
              className="mezmur-memo__panel"
            >
              <p className="mezmur-memo__p">
                After learning part 1 and 2, chain before adding more:
              </p>
              <ol className="mezmur-memo__ol">
                <li>Part 1 alone.</li>
                <li>Part 2 alone.</li>
                <li>Parts 1 + 2 together.</li>
              </ol>
              <p className="mezmur-memo__p">Then for part 3:</p>
              <ol className="mezmur-memo__ol">
                <li>Part 3 alone.</li>
                <li>2 + 3, then 1 + 2 + 3.</li>
              </ol>
              <p className="mezmur-memo__hint">Each “part” is one row in <strong>All parts</strong>.</p>
            </div>
          ) : null}

          <p className="mezmur-memo__foot" role="note">
            Small loops and honest repetition build memory — no need to rush the whole mezmur.
          </p>

          <details className="mezmur-collapse">
            <summary>General notes (optional)</summary>
            <textarea
              id="mezmur-memo-notes"
              className="mezmur-memo-notes"
              value={memoNotes}
              onChange={(e) => setMemoNotes(e.target.value)}
              placeholder="Overall reminders for this mezmur…"
              rows={3}
            />
          </details>
        </section>

        <details
          className="mezmur-collapse mezmur-scratch"
          open={showScratchLyrics}
          onToggle={(e) => setShowScratchLyrics(e.target.open)}
        >
          <summary>Full lyrics scratch area (optional)</summary>
          <p className="mezmur-scratch__hint">
            One big paste if helpful; the main flow is timed parts above.
          </p>
          <textarea
            className="mezmur-lyrics-area mezmur-lyrics-area--scratch"
            value={scratchLyrics}
            onChange={(e) => setScratchLyrics(e.target.value)}
            placeholder="Paste a full lyric sheet…"
            spellCheck="false"
            rows={6}
            aria-label="Optional full lyrics scratch"
          />
        </details>
      </div>
    </div>
  )
}
