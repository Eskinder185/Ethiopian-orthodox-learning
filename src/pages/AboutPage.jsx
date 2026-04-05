import '../styles/ContentComponents.css'
import './AboutPage.css'
import PageHeader from '../components/sections/PageHeader.jsx'
import SectionTitle from '../components/sections/SectionTitle.jsx'
import SectionDivider from '../components/sections/SectionDivider.jsx'
import InfoBlock from '../components/sections/InfoBlock.jsx'
import { aboutContent } from '../content/aboutContent.js'

export default function AboutPage() {
  const c = aboutContent

  return (
    <article className="content-page about-page">
      <PageHeader title={c.title} eyebrow={c.eyebrow} compact />

      <section aria-labelledby="about-purpose-heading">
        <SectionTitle id="about-purpose-heading" title={c.purpose.title} />
        <InfoBlock variant="soft">
          {c.purpose.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </InfoBlock>
      </section>

      <SectionDivider />

      <section aria-labelledby="about-scope-heading">
        <SectionTitle id="about-scope-heading" title={c.scope.title} />
        <ul className="about-page__scope-list" role="list">
          {c.scope.items.map((item) => (
            <li key={item.label} className="about-page__scope-item">
              <strong className="about-page__scope-label">{item.label}</strong>
              <p className="about-page__scope-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <SectionDivider />

      <section aria-labelledby="about-faq-heading">
        <SectionTitle id="about-faq-heading" title={c.faq.title} />
        <dl className="about-page__faq">
          {c.faq.items.map((item) => (
            <div key={item.q} className="about-page__faq-block">
              <dt className="about-page__faq-q">{item.q}</dt>
              <dd className="about-page__faq-a">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <SectionDivider />

      <section aria-labelledby="about-future-heading">
        <SectionTitle id="about-future-heading" title={c.future.title} />
        <p className="about-page__future-intro">{c.future.intro}</p>
        <ul className="about-page__future-list" role="list">
          {c.future.items.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <InfoBlock variant="soft" className="about-page__future-closing">
          <p>{c.future.closing}</p>
        </InfoBlock>
      </section>
    </article>
  )
}
