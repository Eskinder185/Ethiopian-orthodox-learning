import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../sections/SectionTitle.jsx'
import PathCard from './PathCard.jsx'
import { homePathCardsConfig } from '../../content/homeContent.js'
import './PathCardsSection.css'

export default function PathCardsSection({ className = '' }) {
  const { t } = useTranslation('common')
  const items = useMemo(
    () =>
      homePathCardsConfig.map((item) => ({
        ...item,
        title: t(`home.paths.${item.key}.title`),
        description: t(`home.paths.${item.key}.description`),
        cta: t(`home.paths.${item.key}.cta`),
        visualAria: t(`home.paths.${item.key}.visualAria`),
      })),
    [t],
  )

  return (
    <section
      className={`home-paths ${className}`.trim()}
      aria-labelledby="home-paths-heading"
    >
      <header className="home-paths__header">
        <p className="home-paths__eyebrow">{t('home.paths.sectionEyebrow')}</p>
        <SectionTitle
          id="home-paths-heading"
          className="home-paths__section-title"
          title={t('home.paths.sectionTitle')}
          subtitle={t('home.paths.sectionSubtitle')}
        />
      </header>
      <ul className="home-paths__grid">
        {items.map((item) => (
          <li key={item.to} className="home-paths__cell">
            <PathCard
              to={item.to}
              step={item.step}
              title={item.title}
              description={item.description}
              cta={item.cta}
              visual={item.visual}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              iconSrc={item.iconSrc}
              visualAria={item.visualAria}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
