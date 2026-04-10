import { useTranslation } from 'react-i18next'

const STEPS = [
  { icon: '◎', key: '1' },
  { icon: '✧', key: '2' },
  { icon: '✦', key: '3' },
]

export default function CalendarHubHowSection() {
  const { t } = useTranslation('common')

  return (
    <section className="cal-hub-how cal-hub-reveal" aria-labelledby="calendar-how-heading">
      <div className="cal-hub-how__head">
        <h2 id="calendar-how-heading" className="cal-hub-how__title">
          {t('calendarHub.howTitle')}
        </h2>
        <p className="cal-hub-how__sub">{t('calendarHub.purpose')}</p>
      </div>
      <ol className="cal-hub-how__path">
        {STEPS.map((step, i) => (
          <li key={step.key} className="cal-hub-how__step">
            <div className="cal-hub-how__step-inner">
              <span className="cal-hub-how__glyph" aria-hidden="true">
                {step.icon}
              </span>
              <h3 className="cal-hub-how__step-title">{t(`calendarHub.howCard${step.key}Title`)}</h3>
              <p className="cal-hub-how__step-body">{t(`calendarHub.howCard${step.key}Body`)}</p>
            </div>
            {i < STEPS.length - 1 ? <span className="cal-hub-how__connector" aria-hidden="true" /> : null}
          </li>
        ))}
      </ol>
    </section>
  )
}
