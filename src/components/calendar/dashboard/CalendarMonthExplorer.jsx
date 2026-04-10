import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { paths } from '../../../constants/paths.js'
import { ETHIOPIAN_MONTHS } from '../../../data/calendarData.js'
import { categorizeFeast, buildDetailFromLiturgicalSelection, getFeastVisual } from '../../../data/calendarVisualCatalog.js'
import { getLiturgicalDayState } from '../../../utils/liturgicalCalendar.js'
import { getVisualForCalendarItem, pickDisplayImage } from '../../../utils/calendarVisualSystem.js'
import CategoryIcon from './CategoryIcon.jsx'
import {
  buildEthiopianMonthGrid,
  buildGregorianMonthGrid,
  dayVisibleInFilters,
} from '../../../utils/calendarDashboard.js'

const defaultFilters = {
  majorFeasts: true,
  saints: true,
  fasting: true,
  movable: true,
  fixed: true,
}

export default function CalendarMonthExplorer({ state, now, onOpenFeastDetail }) {
  const { t } = useTranslation('common')
  const [mode, setMode] = useState('gregorian')
  const [gYear, setGYear] = useState(now.getFullYear())
  const [gMonth, setGMonth] = useState(now.getMonth() + 1)
  const [eYear, setEYear] = useState(state.ethiopianYear)
  const [eMonth, setEMonth] = useState(state.ethiopianMonth)
  const [selected, setSelected] = useState(() => new Date(now))
  const [filters, setFilters] = useState(defaultFilters)

  const grid = useMemo(() => {
    if (mode === 'gregorian') return buildGregorianMonthGrid(gYear, gMonth, now)
    return buildEthiopianMonthGrid(eYear, eMonth, now)
  }, [mode, gYear, gMonth, eYear, eMonth, now])

  const cellStates = useMemo(() => {
    const m = new Map()
    for (const c of grid.cells) {
      if (!c.empty) m.set(c.key, getLiturgicalDayState(c.date))
    }
    return m
  }, [grid])

  const gridKey = `${mode}-${gYear}-${gMonth}-${eYear}-${eMonth}`

  const monthTitle = useMemo(() => {
    if (mode === 'gregorian') {
      return new Date(gYear, gMonth - 1, 1).toLocaleDateString(undefined, {
        month: 'long',
        year: 'numeric',
      })
    }
    const meta = ETHIOPIAN_MONTHS.find((m) => m.index === eMonth)
    return `${meta?.name ?? eMonth} ${eYear} E.C.`
  }, [mode, gYear, gMonth, eYear, eMonth])

  const selectedState = useMemo(() => getLiturgicalDayState(selected), [selected])

  const panelVisual = useMemo(() => {
    const monthVis = getVisualForCalendarItem({
      kind: 'ethiopianMonth',
      ethiopianMonth: selectedState.ethiopianMonth,
    })
    const primary = selectedState.matchingFeasts[0]
    if (primary) {
      const fv = getFeastVisual(primary)
      const src = pickDisplayImage(fv.visual, false)
      return {
        src,
        alt: fv.visual?.alt || primary.name,
        glyph: src ? null : fv.visual?.icon,
        accentClass: fv.visual ? `cal-vis-accent--${fv.visual.accentTheme || 'gold'}` : '',
      }
    }
    return {
      src: pickDisplayImage(monthVis, false),
      alt: monthVis.alt,
      glyph: monthVis.icon,
      accentClass: `cal-vis-accent--${monthVis.accentTheme || 'gold'}`,
    }
  }, [selectedState.ethiopianMonth, selectedState.matchingFeasts])

  const goPrev = useCallback(() => {
    if (mode === 'gregorian') {
      if (gMonth <= 1) {
        setGMonth(12)
        setGYear((y) => y - 1)
      } else setGMonth((m) => m - 1)
    } else if (eMonth <= 1) {
      setEMonth(13)
      setEYear((y) => y - 1)
    } else setEMonth((m) => m - 1)
  }, [mode, gMonth, eMonth])

  const goNext = useCallback(() => {
    if (mode === 'gregorian') {
      if (gMonth >= 12) {
        setGMonth(1)
        setGYear((y) => y + 1)
      } else setGMonth((m) => m + 1)
    } else if (eMonth >= 13) {
      setEMonth(1)
      setEYear((y) => y + 1)
    } else setEMonth((m) => m + 1)
  }, [mode, gMonth, eMonth])

  const jumpToday = useCallback(() => {
    setGYear(now.getFullYear())
    setGMonth(now.getMonth() + 1)
    setEYear(state.ethiopianYear)
    setEMonth(state.ethiopianMonth)
    setSelected(new Date(now))
  }, [now, state.ethiopianYear, state.ethiopianMonth])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const toggleFilter = (key) => {
    setFilters((f) => ({ ...f, [key]: !f[key] }))
  }

  const weekdayLabels = [
    t('calendarDashboard.explorer.weekSun'),
    t('calendarDashboard.explorer.weekMon'),
    t('calendarDashboard.explorer.weekTue'),
    t('calendarDashboard.explorer.weekWed'),
    t('calendarDashboard.explorer.weekThu'),
    t('calendarDashboard.explorer.weekFri'),
    t('calendarDashboard.explorer.weekSat'),
  ]

  const filterConfig = [
    { key: 'majorFeasts', label: t('calendarDashboard.explorer.filterFeasts') },
    { key: 'saints', label: t('calendarDashboard.explorer.filterSaints') },
    { key: 'fasting', label: t('calendarDashboard.explorer.filterFasting') },
    { key: 'movable', label: t('calendarDashboard.explorer.filterMovable') },
    { key: 'fixed', label: t('calendarDashboard.explorer.filterFixed') },
  ]

  return (
    <section
      className="cal-dash-explorer"
      id="cal-dash-explorer"
      aria-labelledby="cal-dash-explorer-heading"
    >
      <div className="cal-dash-explorer__head">
        <h2 id="cal-dash-explorer-heading" className="cal-dash-explorer__title">
          {t('calendarDashboard.explorer.title')}
        </h2>
        <p className="cal-dash-explorer__sub">{t('calendarDashboard.explorer.sub')}</p>
      </div>

      <div className="cal-dash-explorer__toolbar">
        <div className="cal-dash-explorer__toggle" role="group" aria-label={t('calendarDashboard.explorer.toggleLabel')}>
          <button
            type="button"
            className={`cal-dash-explorer__toggle-btn${mode === 'gregorian' ? ' is-active' : ''}`}
            onClick={() => setMode('gregorian')}
          >
            {t('calendarDashboard.explorer.modeGregorian')}
          </button>
          <button
            type="button"
            className={`cal-dash-explorer__toggle-btn${mode === 'ethiopian' ? ' is-active' : ''}`}
            onClick={() => setMode('ethiopian')}
          >
            {t('calendarDashboard.explorer.modeEthiopian')}
          </button>
        </div>
        <div className="cal-dash-explorer__nav">
          <button type="button" className="cal-dash-explorer__nav-btn" onClick={goPrev} aria-label={t('calendarDashboard.explorer.prev')}>
            ‹
          </button>
          <h3 className="cal-dash-explorer__month">{monthTitle}</h3>
          <button type="button" className="cal-dash-explorer__nav-btn" onClick={goNext} aria-label={t('calendarDashboard.explorer.next')}>
            ›
          </button>
          <button type="button" className="btn btn--secondary cal-dash-explorer__today" onClick={jumpToday}>
            {t('calendarDashboard.explorer.today')}
          </button>
        </div>
      </div>

      <div className="cal-dash-explorer__filters" role="group" aria-label={t('calendarDashboard.explorer.filtersLabel')}>
        {filterConfig.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`cal-dash-explorer__filter${filters[f.key] ? ' is-on' : ''}`}
            onClick={() => toggleFilter(f.key)}
            aria-pressed={filters[f.key]}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="cal-dash-explorer__layout">
        <div className="cal-dash-explorer__grid-wrap">
          <div className="cal-dash-explorer__weekdays">
            {weekdayLabels.map((w) => (
              <span key={w} className="cal-dash-explorer__weekday">
                {w}
              </span>
            ))}
          </div>
          <div
            key={gridKey}
            className="cal-dash-explorer__grid cal-dash-explorer__grid--transition"
            role="grid"
            aria-label={t('calendarDashboard.explorer.gridLabel')}
          >
            {grid.cells.map((cell) => {
              if (cell.empty) {
                return <div key={cell.key} className="cal-dash-explorer__cell cal-dash-explorer__cell--empty" />
              }
              const cellState = cellStates.get(cell.key)
              if (!cellState) {
                return <div key={cell.key} className="cal-dash-explorer__cell cal-dash-explorer__cell--empty" />
              }
              const visible = dayVisibleInFilters(cellState, filters)
              const hasFeast = cellState.matchingFeasts.length > 0
              const primaryFeast = cellState.matchingFeasts[0]
              const feastCategoryId = primaryFeast ? categorizeFeast(primaryFeast) : null
              const isFast =
                cellState.isWeeklyFastDay ||
                cellState.inGreatLent ||
                (cellState.ethiopianMonth === 12 && cellState.ethiopianDay <= 15) ||
                (cellState.ethiopianMonth === 4 && cellState.ethiopianDay >= 15 && cellState.ethiopianDay <= 28) ||
                (cellState.ethiopianMonth === 1 && cellState.ethiopianDay >= 14 && cellState.ethiopianDay <= 16)

              const isSelected = selected && cell.date.toDateString() === selected.toDateString()
              const previewLabel = [
                primaryFeast?.name,
                isFast && !hasFeast ? t('calendarDashboard.explorer.legendFast') : null,
              ]
                .filter(Boolean)
                .join(' · ')

              return (
                <button
                  key={cell.key}
                  type="button"
                  role="gridcell"
                  title={previewLabel || undefined}
                  className={`cal-dash-explorer__cell cal-dash-explorer__cell--day${cell.isToday ? ' is-today' : ''}${isSelected ? ' is-selected' : ''}${!visible ? ' is-dim' : ''}${hasFeast && visible ? ' has-feast' : ''}`}
                  onClick={() => setSelected(cell.date)}
                >
                  <span className="cal-dash-explorer__day-num">{cell.day}</span>
                  {hasFeast && visible && feastCategoryId ? (
                    <CategoryIcon categoryId={feastCategoryId} size="sm" className="cal-dash-explorer__cell-icon" />
                  ) : null}
                  <span className="cal-dash-explorer__marks" aria-hidden>
                    {hasFeast ? <span className="cal-dash-explorer__dot cal-dash-explorer__dot--feast" /> : null}
                    {isFast ? <span className="cal-dash-explorer__dot cal-dash-explorer__dot--fast" /> : null}
                  </span>
                </button>
              )
            })}
          </div>
          <p className="cal-dash-explorer__legend">
            <span className="cal-dash-explorer__legend-item">
              <span className="cal-dash-explorer__dot cal-dash-explorer__dot--feast" /> {t('calendarDashboard.explorer.legendFeast')}
            </span>
            <span className="cal-dash-explorer__legend-item">
              <span className="cal-dash-explorer__dot cal-dash-explorer__dot--fast" /> {t('calendarDashboard.explorer.legendFast')}
            </span>
          </p>
        </div>

        <aside
          className={`cal-dash-explorer__panel${selected ? ' is-open' : ''}`}
          aria-live="polite"
          aria-label={t('calendarDashboard.explorer.panelLabel')}
        >
          {selected ? (
            <>
              <button type="button" className="cal-dash-explorer__panel-close" onClick={() => setSelected(null)}>
                {t('calendarDashboard.explorer.closePanel')}
              </button>
              <p className="cal-dash-explorer__panel-date">{selectedState.gregorianFormatted}</p>
              <p className="cal-dash-explorer__panel-eth">{selectedState.ethiopianFormatted}</p>
              {panelVisual.src || panelVisual.glyph ? (
                <div className={`cal-dash-explorer__panel-visual ${panelVisual.accentClass}`.trim()}>
                  {panelVisual.src ? (
                    <img
                      src={panelVisual.src}
                      alt={panelVisual.alt || ''}
                      className="cal-dash-explorer__panel-visual-img"
                      loading="lazy"
                    />
                  ) : (
                    <span className="cal-dash-explorer__panel-month-glyph" aria-hidden>
                      {panelVisual.glyph}
                    </span>
                  )}
                </div>
              ) : null}
              <p className="cal-dash-explorer__panel-fast">{selectedState.primaryFastLabel}</p>
              {selectedState.matchingFeasts.length > 0 ? (
                <div className="cal-dash-explorer__panel-feasts">
                  <h4 className="cal-dash-explorer__panel-h">{t('calendarDashboard.explorer.feastsHeading')}</h4>
                  <ul>
                    {selectedState.matchingFeasts.map((f) => (
                      <li key={f.id}>
                        <strong>{f.name}</strong>
                        {f.moveable ? (
                          <span className="cal-dash-explorer__badge">{t('calendarDashboard.explorer.badgeMovable')}</span>
                        ) : (
                          <span className="cal-dash-explorer__badge cal-dash-explorer__badge--fixed">
                            {t('calendarDashboard.explorer.badgeFixed')}
                          </span>
                        )}
                        {f.significance ? <p>{f.significance}</p> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="cal-dash-explorer__panel-quiet">{t('calendarDashboard.explorer.noFeastData')}</p>
              )}
              <div className="cal-dash-explorer__panel-spirit">
                <h4 className="cal-dash-explorer__panel-h">{t('calendarDashboard.explorer.weekdayHeading')}</h4>
                <p>{selectedState.weekdayThemeMedium}</p>
              </div>
              {selectedState.matchingFeasts[0] && onOpenFeastDetail ? (
                <button
                  type="button"
                  className="btn btn--secondary cal-dash-explorer__panel-feast-btn"
                  onClick={() => onOpenFeastDetail(buildDetailFromLiturgicalSelection(selectedState))}
                >
                  {t('calendarDashboard.explorer.openFeastDetail')}
                </button>
              ) : null}
              <div className="cal-dash-explorer__panel-links">
                <Link to={paths.calendar.today} className="cal-dash-explorer__plink">
                  {t('calendarDashboard.explorer.linkToday')}
                </Link>
                <Link to={paths.calendar.feastsHolyDays} className="cal-dash-explorer__plink">
                  {t('calendarDashboard.explorer.linkFeasts')}
                </Link>
                <Link to={paths.learn.churchYear} className="cal-dash-explorer__plink">
                  {t('calendarDashboard.explorer.linkYear')}
                </Link>
              </div>
              <p className="cal-dash-explorer__hook">{t('calendarDashboard.explorer.senksarHook')}</p>
            </>
          ) : (
            <p className="cal-dash-explorer__placeholder">{t('calendarDashboard.explorer.pickDay')}</p>
          )}
        </aside>
      </div>
    </section>
  )
}
