import { useTranslation } from 'react-i18next'
import '../styles/ContentComponents.css'
import './AboutPage.css'
import PageHeader from '../components/sections/PageHeader.jsx'
import SectionTitle from '../components/sections/SectionTitle.jsx'
import SectionDivider from '../components/sections/SectionDivider.jsx'
import InfoBlock from '../components/sections/InfoBlock.jsx'
import ExpandableText from '../components/ui/ExpandableText.jsx'
import CollapsiblePanel from '../components/ui/CollapsiblePanel.jsx'
import { aboutContent } from '../content/aboutContent.js'

export default function AboutPage() {
  const { t } = useTranslation('common')
  const c = aboutContent

  return (
    <article className="content-page about-page">
      <PageHeader title={t('about.title')} eyebrow={t('about.eyebrow')} compact />

      <section aria-labelledby="about-purpose-heading">
        <SectionTitle id="about-purpose-heading" title={t('about.purposeTitle')} />
        <ExpandableText lines={3} className="about-page__purpose-expand" moreLabel={t('about.readMore')}>
          <div className="about-page__purpose-inner">
            {c.purpose.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </ExpandableText>
      </section>

      <SectionDivider />

      <CollapsiblePanel
        title={t('about.scopeTitle')}
        icon="◇"
        defaultOpen={false}
        className="about-page__collapsible"
      >
        <ul className="about-page__scope-list" role="list">
          {c.scope.items.map((item) => (
            <li key={item.label} className="about-page__scope-item">
              <strong className="about-page__scope-label">{item.label}</strong>
              <p className="about-page__scope-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </CollapsiblePanel>

      <SectionDivider />

      <section aria-labelledby="about-faq-heading">
        <SectionTitle id="about-faq-heading" title={t('about.faqTitle')} />
        <div className="about-page__faq">
          {c.faq.items.map((item) => (
            <details key={item.q} className="about-page__faq-item">
              <summary className="about-page__faq-q">{item.q}</summary>
              <p className="about-page__faq-a">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <SectionDivider />

      <CollapsiblePanel
        title={t('about.futureTitle')}
        icon="✧"
        defaultOpen={false}
        className="about-page__collapsible"
      >
        <p className="about-page__future-intro">{c.future.intro}</p>
        <ul className="about-page__future-list" role="list">
          {c.future.items.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <InfoBlock variant="soft" className="about-page__future-closing">
          <p>{c.future.closing}</p>
        </InfoBlock>
      </CollapsiblePanel>
    </article>
  )
}
