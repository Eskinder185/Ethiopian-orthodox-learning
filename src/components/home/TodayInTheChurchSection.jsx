import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import TodayChurchDashboard from './TodayChurchDashboard.jsx'
import { getHomeChurchDay } from '../../data/homeChurchDay.js'
import './TodayInTheChurch.css'

export default function TodayInTheChurchSection({ snapshot, className = '' }) {
  const { t } = useTranslation('common')
  const payload = useMemo(() => getHomeChurchDay(new Date()), [])
  const rootRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    if (typeof IntersectionObserver !== 'function') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -5% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={rootRef}
      className={`today-church today-church--band ${inView ? 'today-church--revealed' : ''} ${className}`.trim()}
      aria-labelledby="today-church-heading"
    >
      <header className="today-church__intro">
        <p className="today-church__eyebrow">{t('home.todayInChurch.sectionEyebrow')}</p>
        <h2 id="today-church-heading" className="today-church__title">
          {t('home.todayInChurch.title')}
        </h2>
        <p className="today-church__subtitle">{t('home.todayInChurch.subtitle')}</p>
      </header>
      {snapshot ?
        <TodayChurchDashboard snapshot={snapshot} payload={payload} />
      : null}
    </section>
  )
}
