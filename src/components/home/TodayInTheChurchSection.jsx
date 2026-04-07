import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../sections/SectionTitle.jsx'
import HomeChurchDayCard from './HomeChurchDayCard.jsx'
import { getHomeChurchDay } from '../../data/homeChurchDay.js'
import './TodayInTheChurch.css'

const CTA_KEY_PREFIX = 'home.todayInChurch.cta.'

function contextEyebrowKey(type) {
  if (type === 'season') return 'home.todayInChurch.contextType.season'
  if (type === 'feast-focus') return 'home.todayInChurch.contextType.feastFocus'
  return 'home.todayInChurch.contextType.weekly'
}

export default function TodayInTheChurchSection({ className = '' }) {
  const { t } = useTranslation('common')
  const payload = useMemo(() => getHomeChurchDay(new Date()), [])

  const cta = (key) => t(`${CTA_KEY_PREFIX}${key}`)

  return (
    <section
      className={`today-church ${className}`.trim()}
      aria-labelledby="today-church-heading"
    >
      <SectionTitle
        id="today-church-heading"
        title={t('home.todayInChurch.title')}
        subtitle={t('home.todayInChurch.subtitle')}
      />
      <div className="today-church__grid">
        <HomeChurchDayCard
          className="today-church__card today-church__card--today"
          eyebrow={t('home.todayInChurch.card.today')}
          title={payload.today.title}
          description={payload.today.description}
          href={payload.today.href}
          ctaLabel={cta(payload.today.ctaKey || 'learnMore')}
          image={payload.today.image}
          imageAlt={payload.today.image ? payload.today.title : ''}
        />
        <HomeChurchDayCard
          className="today-church__card today-church__card--context"
          eyebrow={t(contextEyebrowKey(payload.context.type))}
          title={payload.context.title}
          description={payload.context.description}
          href={payload.context.href}
          ctaLabel={cta(payload.context.ctaKey || 'learnMore')}
          image={payload.context.image}
          imageAlt={payload.context.image ? payload.context.title : ''}
        />
        <HomeChurchDayCard
          className="today-church__card today-church__card--next"
          eyebrow={t('home.todayInChurch.card.next')}
          title={payload.next.title}
          description={payload.next.description}
          href={payload.next.href}
          ctaLabel={cta(payload.next.ctaKey || 'prepareFeast')}
          image={payload.next.image}
          imageAlt={payload.next.image ? payload.next.title : ''}
        />
      </div>
    </section>
  )
}
