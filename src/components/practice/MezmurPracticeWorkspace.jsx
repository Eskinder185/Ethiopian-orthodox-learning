import { useState, useCallback, useRef, useEffect, useId } from 'react'
import { extractYouTubeId } from '../../utils/extractYouTubeId.js'
import { parseTimeToSeconds, formatSecondsToTimestamp } from '../../utils/timeFormat.js'
import { loadYouTubeIframeAPI } from '../../utils/loadYouTubeIframeAPI.js'
import './MezmurPracticeWorkspace.css'

const SPEED_OPTIONS = [
  { label: 'Slower (0.5×)', value: 0.5 },
  { label: 'Slow (0.75×)', value: 0.75 },
  { label: 'Normal (1×)', value: 1 },
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

export default function MezmurPracticeWorkspace() {
  const playerMountId = useId().replace(/:/g, '')
  const playerMountRef = useRef(null)
  const playerRef = useRef(null)
  const effectPlayerRef = useRef(null)
  const playOnceIntervalRef = useRef(null)
  const playbackRateRef = useRef(1)
  const [playerReady, setPlayerReady] = useState(false)

  const [chunks, setChunks] = useState(() => [createEmptyChunk()])
  const [activeChunkId, setActiveChunkId] = useState(null)
  const [repeatChunkId, setRepeatChunkId] = useState(null)
  const [hideActiveLyrics, setHideActiveLyrics] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)

  playbackRateRef.current = playbackRate
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
    setChunks((prev) => {
      const next = prev.filter((c) => c.id !== id)
      return next.length ? next : [createEmptyChunk()]
    })
    setActiveChunkId((cur) => (cur === id ? null : cur))
    setRepeatChunkId((cur) => (cur === id ? null : cur))
  }, [])

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
    if (!videoId) {
      setPlayerReady(false)
      const p = effectPlayerRef.current || playerRef.current
      effectPlayerRef.current = null
      playerRef.current = null
      try {
        p?.destroy?.()
      } catch (_) {
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
                } catch (_) {
                  /* ignore */
                }
                return
              }
              playerRef.current = e.target
              try {
                e.target.setPlaybackRate(playbackRateRef.current)
              } catch (_) {
                /* ignore */
              }
              setPlayerReady(true)
            },
          },
        })
        effectPlayerRef.current = yt
      } catch (_) {
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
      } catch (_) {
        /* ignore */
      }
    }
  }, [videoId])

  useEffect(() => {
    const p = playerRef.current
    if (!p?.setPlaybackRate) return
    try {
      p.setPlaybackRate(playbackRate)
    } catch (_) {
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
        } catch (_) {
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
          } catch (_) {
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
    <div className="mezmur-workspace" id="mezmur-workspace">
      <h2 className="mezmur-workspace__page-title">Mezmur practice workspace</h2>

      <div className="mezmur-workspace__split">
        <div className="mezmur-workspace__column mezmur-workspace__column--left">
          <section className="mezmur-workspace__section" aria-labelledby="mezmur-chunks-heading">
            <h3 id="mezmur-chunks-heading" className="mezmur-workspace__heading">
              Lyric chunks (timestamps)
            </h3>
            <p className="mezmur-workspace__hint">
              Add a row for each line, couplet, or short section. Use <strong>Start</strong> /{' '}
              <strong>End</strong> while the video plays to grab times, then type the words. Times
              accept <code className="mezmur-workspace__code">m:ss</code> or seconds.
            </p>
            <div className="mezmur-chunk-list" role="list">
              {chunks.map((c, index) => {
                const isActive = c.id === activeChunkId
                const isRepeating = c.id === repeatChunkId
                const hideThisLyric = hideActiveLyrics && isActive && c.text.trim() !== ''

                return (
                  <div
                    key={c.id}
                    className={
                      'mezmur-chunk' +
                      (isActive ? ' mezmur-chunk--active' : '') +
                      (isRepeating ? ' mezmur-chunk--repeating' : '')
                    }
                    role="listitem"
                  >
                    <div className="mezmur-chunk__header">
                      <span className="mezmur-chunk__label">Part {index + 1}</span>
                      <div className="mezmur-chunk__header-actions">
                        <button
                          type="button"
                          className="mezmur-btn mezmur-btn--ghost mezmur-btn--small"
                          onClick={() => setActiveChunkId(c.id)}
                          aria-pressed={isActive}
                        >
                          {isActive ? 'Active' : 'Set active'}
                        </button>
                        <button
                          type="button"
                          className="mezmur-btn mezmur-btn--ghost mezmur-btn--small"
                          onClick={() => removeChunk(c.id)}
                          aria-label={`Remove part ${index + 1}`}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="mezmur-chunk__times">
                      <div className="mezmur-chunk__time-field">
                        <label className="mezmur-chunk__time-label" htmlFor={`mezmur-start-${c.id}`}>
                          Start
                        </label>
                        <input
                          id={`mezmur-start-${c.id}`}
                          type="text"
                          className="mezmur-chunk__time-input"
                          value={c.startInput}
                          onChange={(e) => updateChunk(c.id, { startInput: e.target.value })}
                          onBlur={() => onStartBlur(c)}
                          inputMode="numeric"
                          placeholder="0:00"
                          disabled={!videoId}
                        />
                        <button
                          type="button"
                          className="mezmur-btn mezmur-btn--ghost mezmur-btn--small"
                          onClick={() => captureTimeForChunk(c.id, 'start')}
                          disabled={!videoId}
                          title="Use the player’s current time"
                        >
                          Mark
                        </button>
                      </div>
                      <div className="mezmur-chunk__time-field">
                        <label className="mezmur-chunk__time-label" htmlFor={`mezmur-end-${c.id}`}>
                          End
                        </label>
                        <input
                          id={`mezmur-end-${c.id}`}
                          type="text"
                          className="mezmur-chunk__time-input"
                          value={c.endInput}
                          onChange={(e) => updateChunk(c.id, { endInput: e.target.value })}
                          onBlur={() => onEndBlur(c)}
                          inputMode="numeric"
                          placeholder="0:05"
                          disabled={!videoId}
                        />
                        <button
                          type="button"
                          className="mezmur-btn mezmur-btn--ghost mezmur-btn--small"
                          onClick={() => captureTimeForChunk(c.id, 'end')}
                          disabled={!videoId}
                          title="Use the player’s current time"
                        >
                          Mark
                        </button>
                      </div>
                    </div>

                    <label className="mezmur-chunk__lyrics-label" htmlFor={`mezmur-text-${c.id}`}>
                      Lyrics for this part
                    </label>
                    <textarea
                      id={`mezmur-text-${c.id}`}
                      className={
                        'mezmur-chunk__textarea' +
                        (hideThisLyric ? ' mezmur-chunk__textarea--hidden' : '')
                      }
                      value={c.text}
                      onChange={(e) => updateChunk(c.id, { text: e.target.value })}
                      placeholder="Type or paste this line or section…"
                      rows={3}
                      spellCheck="false"
                      aria-label={`Lyrics for part ${index + 1}`}
                    />
                    {hideThisLyric ? (
                      <p className="mezmur-chunk__hidden-hint" role="status">
                        Lyrics hidden for practice. Turn off “Hide active lyrics” below to reveal.
                      </p>
                    ) : null}

                    <label
                      className="mezmur-chunk__notes-label"
                      htmlFor={`mezmur-chunk-notes-${c.id}`}
                    >
                      Notes for this part (optional)
                    </label>
                    <textarea
                      id={`mezmur-chunk-notes-${c.id}`}
                      className="mezmur-chunk__notes"
                      value={c.chunkNotes}
                      onChange={(e) => updateChunk(c.id, { chunkNotes: e.target.value })}
                      placeholder="Hard words, pronunciation, reminders…"
                      rows={2}
                    />

                    <div className="mezmur-chunk__actions">
                      <button
                        type="button"
                        className="mezmur-btn mezmur-btn--primary mezmur-btn--small"
                        onClick={() => playChunkOnce(c)}
                        disabled={!videoId || c.endSec <= c.startSec}
                      >
                        Play chunk
                      </button>
                      <button
                        type="button"
                        className={
                          'mezmur-btn mezmur-btn--ghost mezmur-btn--small' +
                          (isRepeating ? ' mezmur-btn--toggled' : '')
                        }
                        onClick={() => toggleRepeatChunk(c.id)}
                        disabled={!videoId || c.endSec <= c.startSec}
                        aria-pressed={isRepeating}
                      >
                        {isRepeating ? 'Stop repeat' : 'Repeat chunk'}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
            <button type="button" className="mezmur-btn mezmur-btn--ghost" onClick={addChunk}>
              + Add chunk
            </button>
          </section>

          <section className="mezmur-workspace__section" aria-labelledby="mezmur-scratch-heading">
            <details
              className="mezmur-scratch"
              open={showScratchLyrics}
              onToggle={(e) => setShowScratchLyrics(e.target.open)}
            >
              <summary id="mezmur-scratch-heading" className="mezmur-scratch__summary">
                Optional: full lyrics scratch area
              </summary>
              <p className="mezmur-workspace__hint">
                Use this if you want one big paste; the main workflow above is timed chunks.
              </p>
              <textarea
                className="mezmur-lyrics-area"
                value={scratchLyrics}
                onChange={(e) => setScratchLyrics(e.target.value)}
                placeholder="Paste a full lyric sheet here if helpful…"
                spellCheck="false"
                rows={8}
                aria-label="Optional full lyrics scratch"
              />
            </details>
          </section>

          <section
            className="mezmur-workspace__section"
            aria-labelledby="mezmur-memorization-heading"
          >
            <h3 id="mezmur-memorization-heading" className="mezmur-workspace__heading">
              Memorization support
            </h3>
            <p className="mezmur-workspace__memo-lead">
              Choose <strong>Set active</strong> on one chunk. Hum along, then say or sing it
              without staring at the text — short tests beat long staring.
            </p>

            <div className="mezmur-memo-tips" aria-label="Memorization tips">
              <div className="mezmur-memo-tip">
                <h4 className="mezmur-memo-tip__title">Short look-away tests</h4>
                <p className="mezmur-memo-tip__p">
                  Never keep staring at the line too long. You memorize faster when you do short
                  look-away tests — glance, look away, say it, check if needed. That is what teaches
                  the brain. Use <strong>Hide active lyrics</strong> below the same way.
                </p>
              </div>
              <div className="mezmur-memo-tip">
                <h4 className="mezmur-memo-tip__title">Line-connecting method</h4>
                <p className="mezmur-memo-tip__p">
                  After learning line 1 and line 2, chain them before adding more:
                </p>
                <ol className="mezmur-memo-tip__ol">
                  <li>Do line 1 alone.</li>
                  <li>Do line 2 alone.</li>
                  <li>Do line 1 + 2 together.</li>
                </ol>
                <p className="mezmur-memo-tip__p">Then once line 3 is learned:</p>
                <ol className="mezmur-memo-tip__ol">
                  <li>Do line 3 alone.</li>
                  <li>Then 2 + 3.</li>
                  <li>Then 1 + 2 + 3.</li>
                </ol>
                <p className="mezmur-memo-tip__p mezmur-memo-tip__p--emphasis">
                  This builds strong chains — match each “line” to one lyric chunk in the list above.
                </p>
              </div>
            </div>
            <p className="mezmur-workspace__active-line" role="status">
              {activeChunk ? (
                <>
                  Active part: <strong>Part {chunks.findIndex((x) => x.id === activeChunk.id) + 1}</strong>
                </>
              ) : (
                <>No active part — pick one chunk with “Set active”.</>
              )}
            </p>
            <div className="mezmur-memo-toolbar">
              <button
                type="button"
                className="mezmur-btn mezmur-btn--ghost mezmur-btn--small"
                onClick={() => setHideActiveLyrics((v) => !v)}
                aria-pressed={hideActiveLyrics}
                disabled={!activeChunk?.text?.trim()}
              >
                {hideActiveLyrics ? 'Show active lyrics' : 'Hide active lyrics'}
              </button>
            </div>
            <label className="mezmur-workspace__label" htmlFor="mezmur-memo-notes">
              General notes (optional)
            </label>
            <textarea
              id="mezmur-memo-notes"
              className="mezmur-memo-notes"
              value={memoNotes}
              onChange={(e) => setMemoNotes(e.target.value)}
              placeholder="Overall reminders for this mezmur…"
              rows={3}
            />
            <p className="mezmur-workspace__encouragement" role="note">
              Small loops and honest repetition build memory. There is no need to rush the whole
              mezmur at once.
            </p>
          </section>
        </div>

        <div className="mezmur-workspace__column mezmur-workspace__column--right">
          <section className="mezmur-workspace__section" aria-labelledby="mezmur-video-heading">
            <h3 id="mezmur-video-heading" className="mezmur-workspace__heading">
              Practice video
            </h3>
            <p className="mezmur-workspace__hint">Paste a YouTube link, then use the controls below.</p>
            <div className="mezmur-youtube-row">
              <input
                type="url"
                className="mezmur-youtube-input"
                value={youtubeInput}
                onChange={(e) => setYoutubeInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') loadVideo()
                }}
                placeholder="https://www.youtube.com/watch?v=… or youtu.be/…"
                aria-invalid={Boolean(youtubeError)}
                aria-describedby={youtubeError ? 'mezmur-youtube-error' : undefined}
              />
              <button type="button" className="mezmur-btn mezmur-btn--primary" onClick={loadVideo}>
                Load video
              </button>
            </div>
            {youtubeError ? (
              <p id="mezmur-youtube-error" className="mezmur-workspace__error" role="alert">
                {youtubeError}
              </p>
            ) : null}

            {videoId ? (
              <>
                <div className="mezmur-video-wrap">
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
                    className="mezmur-btn mezmur-btn--ghost mezmur-btn--small"
                    onClick={clearVideo}
                  >
                    Remove video
                  </button>
                </div>

                <div className="mezmur-controls" aria-label="Playback helpers">
                  <div className="mezmur-controls__row">
                    <button
                      type="button"
                      className="mezmur-btn mezmur-btn--ghost mezmur-btn--small"
                      onClick={seekCurrentMinus5}
                      disabled={!playerReady}
                    >
                      Back 5s
                    </button>
                    <button
                      type="button"
                      className="mezmur-btn mezmur-btn--primary mezmur-btn--small"
                      onClick={playPause}
                      disabled={!playerReady}
                    >
                      Play / Pause
                    </button>
                  </div>
                  <div className="mezmur-controls__row mezmur-controls__row--grow">
                    <label className="mezmur-controls__speed-label" htmlFor="mezmur-speed">
                      Speed
                    </label>
                    <select
                      id="mezmur-speed"
                      className="mezmur-controls__select"
                      value={playbackRate}
                      onChange={(e) => setPlaybackRate(Number(e.target.value))}
                      disabled={!playerReady}
                    >
                      {SPEED_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mezmur-controls__row mezmur-controls__row--wrap">
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
                      title={
                        activeChunk
                          ? 'Loop between this part’s start and end'
                          : 'Set a chunk active first'
                      }
                    >
                      Repeat active section
                    </button>
                    {repeatChunkId ? (
                      <button
                        type="button"
                        className="mezmur-btn mezmur-btn--ghost mezmur-btn--small"
                        onClick={() => setRepeatChunkId(null)}
                      >
                        Stop all repeat
                      </button>
                    ) : null}
                  </div>
                  {!playerReady ? (
                    <p className="mezmur-controls__hint">Loading player…</p>
                  ) : !activeChunkId ? (
                    <p className="mezmur-controls__hint">
                      Tip: set a chunk <strong>active</strong> on the left, then use “Repeat active
                      section.”
                    </p>
                  ) : null}
                </div>
              </>
            ) : (
              <p className="mezmur-workspace__video-placeholder">
                Load a valid link and the player will appear here. Controls use the YouTube player
                API so you can seek, change speed, and loop a section.
              </p>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
