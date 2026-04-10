import { useTranslation } from 'react-i18next'

export default function CalendarHubNotice() {
  const { t } = useTranslation('common')

  return (
    <details className="cal-hub-notice cal-hub-reveal">
      <summary className="cal-hub-notice__summary">
        <span className="cal-hub-notice__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 16v-4M12 8h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="cal-hub-notice__summary-text">{t('calendarHub.noticeSummary')}</span>
      </summary>
      <div className="cal-hub-notice__body">
        <p>{t('calendarHub.notice')}</p>
      </div>
    </details>
  )
}
