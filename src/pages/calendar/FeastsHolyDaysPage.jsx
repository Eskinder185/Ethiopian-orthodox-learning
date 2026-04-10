import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../../styles/ContentComponents.css'
import PageHeader from '../../components/sections/PageHeader.jsx'
import SectionTitle from '../../components/sections/SectionTitle.jsx'
import HolyFigureCard from '../../components/calendar/dashboard/HolyFigureCard.jsx'
import FeastDetailDrawer from '../../components/calendar/dashboard/FeastDetailDrawer.jsx'
import { feastsHolyDaysPage } from '../../data/calendarPages.js'
import { FIXED_FEASTS } from '../../data/calendarData.js'
import {
  gregorianDateToEthiopian,
  ethiopianToJDN,
  jdnToGregorian,
} from '../../utils/ethiopianCalendar.js'
import { formatEthiopianDate, formatGregorianDate } from '../../utils/liturgicalCalendar.js'
import {
  buildLibraryFigureFromFeast,
  buildDetailFromFigure,
  categorizeFeast,
  dateLinesState,
  getCategoryMeta,
} from '../../data/calendarVisualCatalog.js'
import '../../components/calendar/CalendarComponents.css'
import '../../components/calendar/CalendarCards.css'
import '../../components/calendar/dashboard/CalendarDashboard.css'
import '../../components/calendar/dashboard/calendarVisualMotion.css'

export default function FeastsHolyDaysPage() {
  const { t } = useTranslation('common')
  const { category, title, intro } = feastsHolyDaysPage
  const from = new Date()
  const ey = gregorianDateToEthiopian(from).year

  const [detail, setDetail] = useState(null)
  const [query, setQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const rows = useMemo(() => {
    return FIXED_FEASTS.map((f) => {
      const eth = { year: ey, month: f.ethiopianMonth, day: f.ethiopianDay }
      const gr = jdnToGregorian(ethiopianToJDN(eth))
      return {
        ...f,
        ethiopianLine: formatEthiopianDate(eth),
        gregorianLine: formatGregorianDate(gr.year, gr.month, gr.day),
      }
    })
  }, [ey])

  const categoryIds = useMemo(() => {
    const s = new Set()
    for (const f of FIXED_FEASTS) {
      s.add(categorizeFeast(f))
    }
    return [...s].sort()
  }, [])

  const libraryEntries = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return rows
      .map((row) => ({
        row,
        figure: buildLibraryFigureFromFeast(row),
        categoryId: categorizeFeast(row),
      }))
      .filter(({ row, categoryId }) => {
        if (categoryFilter !== 'all' && categoryId !== categoryFilter) return false
        if (!needle) return true
        const name = row.name.toLowerCase()
        const geez = (row.geezName || '').toLowerCase()
        return name.includes(needle) || geez.includes(needle)
      })
  }, [rows, query, categoryFilter])

  return (
    <article className="content-page calendar-page calendar-page--feasts calendar-dashboard">
      <PageHeader category={category} title={title} intro={intro} compact />

      <SectionTitle
        id="feasts-library-heading"
        title={t('calendarFeasts.libraryTitle')}
        subtitle={t('calendarFeasts.librarySubtitle', { year: ey })}
      />

      <div className="cal-feasts-library__toolbar">
        <label className="cal-feasts-library__search-label">
          <span className="visually-hidden">{t('calendarFeasts.searchLabel')}</span>
          <input
            type="search"
            className="cal-feasts-library__search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('calendarFeasts.searchPlaceholder')}
            autoComplete="off"
          />
        </label>
        <div className="cal-feasts-library__chips" role="group" aria-label={t('calendarFeasts.filterGroupLabel')}>
          <button
            type="button"
            className={`cal-feasts-library__chip${categoryFilter === 'all' ? ' is-active' : ''}`}
            onClick={() => setCategoryFilter('all')}
          >
            {t('calendarFeasts.filterAll')}
          </button>
          {categoryIds.map((id) => {
            const meta = getCategoryMeta(id)
            return (
              <button
                key={id}
                type="button"
                className={`cal-feasts-library__chip${categoryFilter === id ? ' is-active' : ''}`}
                onClick={() => setCategoryFilter(id)}
              >
                {meta.label}
              </button>
            )
          })}
        </div>
      </div>

      <p className="cal-feasts-library__count" role="status">
        {t('calendarFeasts.resultsCount', { count: libraryEntries.length })}
      </p>

      <div className="cal-holy-figures__grid">
        {libraryEntries.map(({ row, figure }) => (
          <HolyFigureCard
            key={row.id}
            figure={figure}
            span={figure.importance === 'major'}
            onOpen={() =>
              setDetail(buildDetailFromFigure(dateLinesState(row.gregorianLine, row.ethiopianLine), figure))
            }
          />
        ))}
      </div>

      <SectionTitle
        id="feasts-movable-heading"
        title="Moveable feasts"
        subtitle="Palm Sunday, Pascha, Ascension, and Pentecost follow Orthodox Pascha."
      />
      <p className="cal-card__body">
        Hosanna (Palm Sunday), the crucifixion (Siklet), the resurrection (Fasika), Ascension, and Pentecost are tied
        to Pascha each year. Open <strong>Today in the Church</strong> on those civil dates to see the full entry and
        countdowns.
      </p>

      {detail ? (
        <FeastDetailDrawer key={detail.title} open detail={detail} onClose={() => setDetail(null)} />
      ) : null}
    </article>
  )
}
