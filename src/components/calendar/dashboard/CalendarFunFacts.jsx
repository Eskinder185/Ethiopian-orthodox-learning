import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CALENDAR_FUN_FACTS } from '../../../data/calendarDashboardContent.js'

export default function CalendarFunFacts({ variant = '' }) {
  const { t } = useTranslation('common')
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const n = CALENDAR_FUN_FACTS.length
  const fact = CALENDAR_FUN_FACTS[i % n]

  const next = useCallback(() => {
    setFlipped(false)
    setI((x) => (x + 1) % n)
  }, [n])

  const prev = useCallback(() => {
    setFlipped(false)
    setI((x) => (x - 1 + n) % n)
  }, [n])

  useEffect(() => {
    const tmr = window.setInterval(() => {
      setI((x) => (x + 1) % n)
      setFlipped(false)
    }, 14000)
    return () => window.clearInterval(tmr)
  }, [n])

  return (
    <section
      className={`cal-dash-facts${variant === 'hub' ? ' cal-dash-facts--hub cal-hub-reveal' : ''}`.trim()}
      aria-labelledby="cal-dash-facts-heading"
    >
      <div className="cal-dash-facts__head">
        <h2 id="cal-dash-facts-heading" className="cal-dash-facts__title">
          {t('calendarDashboard.facts.title')}
        </h2>
        <p className="cal-dash-facts__sub">{t('calendarDashboard.facts.sub')}</p>
      </div>
      <div className="cal-dash-facts__stage">
        <button
          type="button"
          className="cal-dash-facts__arrow cal-dash-facts__arrow--prev"
          onClick={prev}
          aria-label={t('calendarDashboard.facts.prev')}
        >
          ‹
        </button>
        <button
          key={fact.id}
          type="button"
          className={`cal-dash-facts__card${flipped ? ' is-flipped' : ''}`}
          onClick={() => setFlipped((f) => !f)}
          aria-expanded={flipped}
        >
          <span className="cal-dash-facts__card-inner">
            <span className="cal-dash-facts__face cal-dash-facts__face--front">
              <span
                className={`cal-dash-facts__symbol-wrap${variant === 'hub' ? ' cal-dash-facts__symbol-wrap--hub' : ''}`.trim()}
                aria-hidden
              >
                <span className="cal-dash-facts__symbol">{fact.symbol}</span>
              </span>
              <span className="cal-dash-facts__icon" aria-hidden>
                ✦
              </span>
              <span className="cal-dash-facts__kicker">{t('calendarDashboard.facts.didYouKnow')}</span>
              <span className="cal-dash-facts__fact-title">{fact.title}</span>
              <span className="cal-dash-facts__tap">{t('calendarDashboard.facts.tapFlip')}</span>
            </span>
            <span className="cal-dash-facts__face cal-dash-facts__face--back">
              <span className="cal-dash-facts__body">{fact.body}</span>
            </span>
          </span>
        </button>
        <button
          type="button"
          className="cal-dash-facts__arrow cal-dash-facts__arrow--next"
          onClick={next}
          aria-label={t('calendarDashboard.facts.next')}
        >
          ›
        </button>
      </div>
      <div className="cal-dash-facts__dots" role="tablist" aria-label={t('calendarDashboard.facts.dotsLabel')}>
        {CALENDAR_FUN_FACTS.map((f, idx) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={idx === i}
            className={`cal-dash-facts__dot${idx === i ? ' is-active' : ''}`}
            onClick={() => {
              setI(idx)
              setFlipped(false)
            }}
          />
        ))}
      </div>
    </section>
  )
}
