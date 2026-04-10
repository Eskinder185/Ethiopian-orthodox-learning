import { useCallback, useRef } from 'react'

const TABS = /** @type {const} */ (['today', 'tomorrow', 'week'])

/**
 * Accessible tab strip with a sliding underline indicator (CSS + inline width offset).
 *
 * @param {{
 *   active: 'today' | 'tomorrow' | 'week',
 *   onChange: (t: 'today' | 'tomorrow' | 'week') => void,
 *   labels: { today: string, tomorrow: string, week: string },
 *   tablistLabel: string,
 *   idPrefix: string,
 * }} props
 */
export default function TodayChurchLiturgicalTabs({ active, onChange, labels, tablistLabel, idPrefix }) {
  const listRef = useRef(null)
  const activeIndex = TABS.indexOf(active)

  const onKeyDown = useCallback(
    (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
      e.preventDefault()
      const i = TABS.indexOf(active)
      const next =
        e.key === 'ArrowRight' ?
          TABS[(i + 1) % TABS.length]
        : TABS[(i - 1 + TABS.length) % TABS.length]
      onChange(next)
      const btn = listRef.current?.querySelector(`[data-today-tab="${next}"]`)
      btn?.focus()
    },
    [active, onChange],
  )

  return (
    <div className="today-lit-tabs" role="tablist" aria-label={tablistLabel} onKeyDown={onKeyDown}>
      <div
        ref={listRef}
        className="today-lit-tabs__list"
        style={{
          '--today-tab-count': TABS.length,
          '--today-tab-active': activeIndex,
        }}
      >
        {TABS.map((id) => {
          const selected = active === id
          return (
            <button
              key={id}
              type="button"
              role="tab"
              id={`${idPrefix}-tab-${id}`}
              data-today-tab={id}
              aria-controls={`${idPrefix}-panel-${id}`}
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              className={`today-lit-tabs__tab${selected ? ' today-lit-tabs__tab--active' : ''}`}
              onClick={() => onChange(id)}
            >
              {labels[id]}
            </button>
          )
        })}
        <span className="today-lit-tabs__indicator" aria-hidden="true" />
      </div>
    </div>
  )
}
