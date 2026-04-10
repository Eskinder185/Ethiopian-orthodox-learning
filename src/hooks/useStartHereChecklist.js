import { useState, useEffect, useCallback, useMemo } from 'react'
import { beginnerChecklistSteps } from '../content/startHereContent.js'

const STORAGE_KEY = 'orthodoxpath-start-here-checklist-v1'

const STEP_IDS = beginnerChecklistSteps.map((s) => s.id)

function loadIds() {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    const arr = JSON.parse(raw)
    return new Set(Array.isArray(arr) ? arr : [])
  } catch {
    return new Set()
  }
}

function persist(ids) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]))
  } catch {
    /* quota / private mode */
  }
}

/**
 * Persists completed beginner-path step ids in localStorage.
 */
export function useStartHereChecklist() {
  const [done, setDone] = useState(() => loadIds())

  useEffect(() => {
    persist(done)
  }, [done])

  const toggle = useCallback((id) => {
    setDone((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const reset = useCallback(() => {
    setDone(new Set())
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* ignore */
    }
  }, [])

  const total = STEP_IDS.length
  const completed = useMemo(() => STEP_IDS.filter((id) => done.has(id)).length, [done])
  const progress = total ? completed / total : 0
  const percent = Math.round(progress * 100)

  return {
    done,
    toggle,
    isDone: (id) => done.has(id),
    reset,
    completed,
    total,
    progress,
    percent,
  }
}
