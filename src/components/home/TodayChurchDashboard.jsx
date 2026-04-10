import { useId, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { paths } from '../../constants/paths.js'
import { getLiturgicalDayState } from '../../utils/liturgicalCalendar.js'
import { getHomeChurchDay } from '../../data/homeChurchDay.js'
import TodayChurchVisualPanel from './TodayChurchVisualPanel.jsx'
import TodayChurchLiturgicalTabs from './TodayChurchLiturgicalTabs.jsx'
import { todayChurchSectionImage } from '../../content/homeContent.js'

function addDays(base, n) {
  const d = new Date(base.getFullYear(), base.getMonth(), base.getDate())
  d.setDate(d.getDate() + n)
  return d
}

function truncate(s, max = 120) {
  if (!s || s.length <= max) return s || ''
  return `${s.slice(0, max - 1).trim()}…`
}

function contextEyebrowKey(type) {
  if (type === 'season') return 'home.todayInChurch.contextType.season'
  if (type === 'feast-focus') return 'home.todayInChurch.contextType.feastFocus'
  return 'home.todayInChurch.contextType.weekly'
}

const CTA_KEY_PREFIX = 'home.todayInChurch.cta.'

function feastLine(snapshot, t) {
  const primaryFeast = snapshot.matchingFeasts?.[0]
  return primaryFeast ?
      `${primaryFeast.name}${primaryFeast.geezName ? ` (${primaryFeast.geezName})` : ''}`
    : t('home.dashboard.noFeastShort')
}

/**
 * Primary liturgical metrics for a single day (today or tomorrow).
 */
function LiturgicalStatusCard({ snapshot, payload, glanceLabel, focusEyebrow, tabKey, idPrefix }) {
  const { t } = useTranslation('common')
  const lede = truncate(payload.today.description, 76)
  const feastDisplay = feastLine(snapshot, t)

  return (
    <article
      className="today-status-card"
      role="tabpanel"
      id={`${idPrefix}-panel-${tabKey}`}
      aria-labelledby={`${idPrefix}-tab-${tabKey}`}
    >
      <header className="today-status-card__header">
        <p className="today-status-card__eyebrow">{focusEyebrow}</p>
        <h3 className="today-status-card__title">{payload.today.title}</h3>
        {lede ? <p className="today-status-card__lede">{lede}</p> : null}
      </header>

      <div className="today-status-card__glance" aria-labelledby={`${idPrefix}-glance-${tabKey}`}>
        <p id={`${idPrefix}-glance-${tabKey}`} className="today-status-card__glance-label">
          {glanceLabel}
        </p>

        <div className="today-status-card__chips" role="list">
          <span className="today-chip" role="listitem">
            <span className="today-chip__label">{t('home.dashboard.gregorian')}</span>
            <span className="today-chip__value">{snapshot.gregorianFormatted}</span>
          </span>
          <span className="today-chip" role="listitem">
            <span className="today-chip__label">{t('home.dashboard.ethiopian')}</span>
            <span className="today-chip__value">{snapshot.ethiopianFormatted}</span>
          </span>
        </div>

        <div className="today-status-card__stat-grid">
          <div className="today-stat today-stat--accent">
            <span className="today-stat__label">{t('home.dashboard.weekday')}</span>
            <span className="today-stat__value">{snapshot.weekdayEnglish}</span>
            <span className="today-stat__note">{snapshot.weekdayThemeShort}</span>
          </div>
          <div className="today-stat">
            <span className="today-stat__label">{t('home.dashboard.feast')}</span>
            <span className="today-stat__value today-stat__value--multiline">{feastDisplay}</span>
          </div>
          <div className="today-stat">
            <span className="today-stat__label">{t('home.dashboard.fasting')}</span>
            <span className="today-stat__value today-stat__value--multiline">
              {snapshot.primaryFastLabel}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

function WeekAtAGlancePanel({ payload, idPrefix }) {
  const { t } = useTranslation('common')
  const cta = (key) => t(`${CTA_KEY_PREFIX}${key}`)
  const contextBlurb = truncate(payload.context.description, 96)
  const nextBlurb = truncate(payload.next.description, 88)

  return (
    <article
      className="today-week-panel"
      role="tabpanel"
      id={`${idPrefix}-panel-week`}
      aria-labelledby={`${idPrefix}-tab-week`}
    >
      <p className="today-week-panel__eyebrow">{t('home.todayInChurch.weekPanelEyebrow')}</p>
      <h3 className="today-week-panel__title">{t('home.todayInChurch.weekPanelTitle')}</h3>

      <div className="today-week-panel__cards">
        <div className="today-week-panel__card">
          <p className="today-week-panel__card-label">{t(contextEyebrowKey(payload.context.type))}</p>
          <h4 className="today-week-panel__card-title">{payload.context.title}</h4>
          {contextBlurb ? <p className="today-week-panel__card-desc">{contextBlurb}</p> : null}
          <Link to={payload.context.href} className="today-week-panel__card-link">
            {cta(payload.context.ctaKey || 'learnMore')}
          </Link>
        </div>
        <div className="today-week-panel__card today-week-panel__card--next">
          <p className="today-week-panel__card-label">{t('home.todayInChurch.sideNext')}</p>
          <h4 className="today-week-panel__card-title">{payload.next.title}</h4>
          {nextBlurb ? <p className="today-week-panel__card-desc">{nextBlurb}</p> : null}
          <Link to={payload.next.href} className="today-week-panel__card-link">
            {cta(payload.next.ctaKey || 'prepareFeast')}
          </Link>
        </div>
      </div>
    </article>
  )
}

/**
 * Wide liturgical dashboard: tabbed day scope, status card, premium visual, CTAs.
 */
export default function TodayChurchDashboard({ snapshot, payload }) {
  const { t } = useTranslation('common')
  const idPrefix = useId().replace(/:/g, '')
  const [tab, setTab] = useState(/** @type {'today' | 'tomorrow' | 'week'} */ ('today'))

  const now = useMemo(() => new Date(), [])
  const tomorrowDate = useMemo(() => addDays(now, 1), [now])
  const snapshotTomorrow = useMemo(() => getLiturgicalDayState(tomorrowDate), [tomorrowDate])
  const payloadTomorrow = useMemo(() => getHomeChurchDay(tomorrowDate), [tomorrowDate])

  const tabLabels = useMemo(
    () => ({
      today: t('home.todayInChurch.tabs.today'),
      tomorrow: t('home.todayInChurch.tabs.tomorrow'),
      week: t('home.todayInChurch.tabs.week'),
    }),
    [t],
  )

  return (
    <div className="today-dashboard today-dashboard--wide">
      <TodayChurchLiturgicalTabs
        active={tab}
        onChange={setTab}
        labels={tabLabels}
        tablistLabel={t('home.todayInChurch.tablistAria')}
        idPrefix={idPrefix}
      />

      <div className="today-dashboard__split today-dashboard__split--cinema">
        <div className="today-dashboard__main today-dashboard__main--panels">
          <div className="today-dashboard__panel-stack" role="presentation">
            <div className="today-dashboard__panel-pane" hidden={tab !== 'today'}>
              <LiturgicalStatusCard
                snapshot={snapshot}
                payload={payload}
                glanceLabel={t('home.todayInChurch.atAGlance')}
                focusEyebrow={t('home.todayInChurch.mainEyebrow')}
                tabKey="today"
                idPrefix={idPrefix}
              />
            </div>
            <div className="today-dashboard__panel-pane" hidden={tab !== 'tomorrow'}>
              <LiturgicalStatusCard
                snapshot={snapshotTomorrow}
                payload={payloadTomorrow}
                glanceLabel={t('home.todayInChurch.tomorrowGlance')}
                focusEyebrow={t('home.todayInChurch.tomorrowEyebrow')}
                tabKey="tomorrow"
                idPrefix={idPrefix}
              />
            </div>
            <div className="today-dashboard__panel-pane" hidden={tab !== 'week'}>
              <WeekAtAGlancePanel payload={payload} idPrefix={idPrefix} />
            </div>
          </div>
        </div>

        <aside className="today-dashboard__visual-col" aria-label={t('home.todayInChurch.visualColAria')}>
          <TodayChurchVisualPanel
            imageSrc={todayChurchSectionImage?.src}
            imageAlt={todayChurchSectionImage?.alt ?? ''}
            caption={t('home.todayInChurch.visualOverlay')}
            ariaLabel={t('home.todayInChurch.visualAria')}
          />
        </aside>
      </div>

      <footer className="today-dashboard__cta-bar" aria-label={t('home.todayInChurch.ctaRailAria')}>
        <p className="today-dashboard__cta-rail-label">{t('home.todayInChurch.ctaRailLabel')}</p>
        <div className="today-dashboard__cta-actions">
          <Link
            to={paths.calendar.index}
            className="btn btn--primary today-dashboard__cta today-dashboard__cta--primary"
          >
            {t('home.todayInChurch.ctaOpenCalendar')}
          </Link>
          <Link
            to={paths.calendar.today}
            className="btn btn--ghost today-dashboard__cta today-dashboard__cta--ghost"
          >
            {t('home.todayInChurch.ctaTodayGuide')}
          </Link>
        </div>
      </footer>
    </div>
  )
}
