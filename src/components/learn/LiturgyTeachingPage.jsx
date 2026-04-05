import PageHeader from '../sections/PageHeader.jsx'
import PageSection from '../ui/PageSection.jsx'
import InfoBanner from '../sections/InfoBanner.jsx'
import ResourceList from '../sections/ResourceList.jsx'
import ExpandableText from '../ui/ExpandableText.jsx'
import CollapsiblePanel from '../ui/CollapsiblePanel.jsx'
import PageJumpNav from '../ui/PageJumpNav.jsx'
import {
  liturgySourceNote,
  hero,
  noticeBoxes,
  beforeYouEnter,
  sundayQuickGuide,
  liturgySteps,
  participateWell,
  understandingMeaning,
  holyCommunionTeaching,
  churchEtiquette,
  learnMore,
  faq,
  finalChecklist,
  pdfLink,
} from '../../content/liturgyTeachingContent.js'
import './LiturgyTeachingPage.css'

const LITURGY_JUMP_LINKS = [
  { href: '#liturgy-hero-title', label: 'Overview' },
  { href: '#liturgy-source', label: 'Source' },
  { href: '#liturgy-notices', label: 'Reminders' },
  { href: '#before-you-enter', label: 'Before you enter' },
  { href: '#quick-guide', label: 'Sunday quick guide' },
  { href: '#step-by-step', label: 'Step by step' },
  { href: '#participate', label: 'Participate well' },
  { href: '#meaning', label: 'Meaning' },
  { href: '#communion', label: 'Communion' },
  { href: '#etiquette', label: 'Etiquette' },
  { href: '#learn-more', label: 'Learn more' },
  { href: '#faq', label: 'FAQ' },
  { href: '#final-checklist', label: 'Checklist' },
  { href: '#liturgy-pdf', label: 'PDF book' },
]

/** Inline **bold** from simple markdown-like strings */
function EmText({ children }) {
  if (typeof children !== 'string') return children
  const parts = children.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i}>{part}</strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

export default function LiturgyTeachingPage({ relatedItems = [] }) {
  return (
    <article className="content-page liturgy-teaching-page liturgy-teaching-page--with-jump">
      <div className="liturgy-teaching__with-nav">
        <div className="liturgy-teaching__primary">
          <PageHeader category="Learn · Liturgy" title="Liturgy" compact />

          <header className="liturgy-teaching__hero" aria-labelledby="liturgy-hero-title">
            <p className="liturgy-teaching__eyebrow">{hero.subtitle}</p>
            <h2 id="liturgy-hero-title" className="liturgy-teaching__hero-title">
              {hero.title}
            </h2>
            <ExpandableText lines={3} className="liturgy-teaching__hero-expand" moreLabel="Read more">
              <div className="liturgy-teaching__hero-body">
                {hero.lead.map((p, i) => (
                  <p key={i}>
                    <EmText>{p}</EmText>
                  </p>
                ))}
              </div>
            </ExpandableText>
          </header>

          <div id="liturgy-source">
            <InfoBanner title="Source and purpose" tone="calm" className="liturgy-teaching__source-banner">
              <p>{liturgySourceNote}</p>
            </InfoBanner>
          </div>

          <CollapsiblePanel
            anchorId="liturgy-notices"
            title="Reminders: visiting, entering, during the service, and communion"
            icon="◇"
            defaultOpen={false}
            className="liturgy-teaching__notices-collapsible"
          >
            <div className="liturgy-teaching__notice-grid">
              <aside className="liturgy-teaching__callout" aria-label={noticeBoxes.firstTime.title}>
                <h3 className="liturgy-teaching__callout-title">{noticeBoxes.firstTime.title}</h3>
                <p>{noticeBoxes.firstTime.text}</p>
              </aside>
              <aside
                className="liturgy-teaching__callout liturgy-teaching__callout--accent"
                aria-label={noticeBoxes.beforeEnter.title}
              >
                <h3 className="liturgy-teaching__callout-title">{noticeBoxes.beforeEnter.title}</h3>
                <p>{noticeBoxes.beforeEnter.text}</p>
              </aside>
              <aside className="liturgy-teaching__callout" aria-label={noticeBoxes.duringService.title}>
                <h3 className="liturgy-teaching__callout-title">{noticeBoxes.duringService.title}</h3>
                <p>
                  <EmText>{noticeBoxes.duringService.text}</EmText>
                </p>
              </aside>
              <aside
                className="liturgy-teaching__callout liturgy-teaching__callout--communion"
                aria-label={noticeBoxes.beforeCommunion.title}
              >
                <h3 className="liturgy-teaching__callout-title">{noticeBoxes.beforeCommunion.title}</h3>
                <p>{noticeBoxes.beforeCommunion.text}</p>
              </aside>
            </div>
          </CollapsiblePanel>

          <PageSection
            id="before-you-enter"
            title={beforeYouEnter.title}
            subtitle={beforeYouEnter.summary}
          >
            <ul className="liturgy-teaching__before-list">
              {beforeYouEnter.points.map((item) => (
                <li key={item.do}>
                  <span className="liturgy-teaching__before-do">
                    <EmText>{item.do}</EmText>
                  </span>
                  <span className="liturgy-teaching__before-why">
                    <strong>Why it matters:</strong> <EmText>{item.why}</EmText>
                  </span>
                </li>
              ))}
            </ul>
          </PageSection>

          <PageSection
            id="quick-guide"
            title={sundayQuickGuide.title}
            subtitle={sundayQuickGuide.summary}
          >
            <ul className="liturgy-teaching__checklist">
              {sundayQuickGuide.items.map((item) => (
                <li key={item}>
                  <EmText>{item}</EmText>
                </li>
              ))}
            </ul>
          </PageSection>

          <PageSection
            id="step-by-step"
            title="Step by step: what happens during the liturgy"
            subtitle="Clergy actions and congregation actions are separated so you can see your part clearly."
          >
            <CollapsiblePanel
              title="Open the full walkthrough (all parts in order)"
              icon="☰"
              defaultOpen={false}
              className="liturgy-teaching__steps-collapsible"
            >
              <p className="liturgy-teaching__collapsible-lead">
                Each step covers what is happening, why it matters, and what clergy and people do.
              </p>
              <ol className="liturgy-teaching__steps">
                {liturgySteps.map((step, index) => (
                  <li key={step.id} className="liturgy-teaching__step">
                    <h3 className="liturgy-teaching__step-title">
                      <span className="liturgy-teaching__step-num">{index + 1}</span>
                      {step.title}
                    </h3>
                    <div className="liturgy-teaching__step-grid">
                      <div className="liturgy-teaching__step-block">
                        <h4 className="liturgy-teaching__step-label">What is happening</h4>
                        <p>{step.whatHappens}</p>
                      </div>
                      <div className="liturgy-teaching__step-block">
                        <h4 className="liturgy-teaching__step-label">Why it matters</h4>
                        <p>{step.whyItMatters}</p>
                      </div>
                      <div className="liturgy-teaching__step-block liturgy-teaching__step-block--clergy">
                        <h4 className="liturgy-teaching__step-label">What the clergy do</h4>
                        <p>{step.clergyDoes}</p>
                      </div>
                      <div className="liturgy-teaching__step-block liturgy-teaching__step-block--people">
                        <h4 className="liturgy-teaching__step-label">What the congregation does</h4>
                        <p>{step.congregationDoes}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </CollapsiblePanel>
          </PageSection>

          <PageSection id="participate" title={participateWell.title} subtitle={participateWell.summary}>
            <ul className="liturgy-teaching__bullet-list">
              {participateWell.points.map((item) => (
                <li key={item}>
                  <EmText>{item}</EmText>
                </li>
              ))}
            </ul>
          </PageSection>

          <PageSection
            id="meaning"
            title={understandingMeaning.title}
            subtitle={understandingMeaning.summary}
          >
            <CollapsiblePanel title="Read the full teaching" icon="✧" defaultOpen={false}>
              {understandingMeaning.paragraphs.map((p, i) => (
                <p key={i} className="liturgy-teaching__prose">
                  <EmText>{p}</EmText>
                </p>
              ))}
            </CollapsiblePanel>
          </PageSection>

          <PageSection id="communion" title={holyCommunionTeaching.title} subtitle={holyCommunionTeaching.summary}>
            <InfoBanner title="Reverence and safety" tone="muted" className="liturgy-teaching__communion-banner">
              <p>
                Holy Communion is the Church’s greatest gift — and the Church takes seriously who approaches and how.
                This page does not replace confession, fasting rules, or your priest’s direction.
              </p>
            </InfoBanner>
            <CollapsiblePanel title="Further teaching on Holy Communion" icon="◇" defaultOpen={false}>
              {holyCommunionTeaching.paragraphs.map((p, i) => (
                <p key={i} className="liturgy-teaching__prose">
                  <EmText>{p}</EmText>
                </p>
              ))}
            </CollapsiblePanel>
          </PageSection>

          <PageSection id="etiquette" title={churchEtiquette.title} subtitle={churchEtiquette.summary}>
            <ul className="liturgy-teaching__bullet-list">
              {churchEtiquette.items.map((item) => (
                <li key={item}>
                  <EmText>{item}</EmText>
                </li>
              ))}
            </ul>
          </PageSection>

          <PageSection id="learn-more" title={learnMore.title} subtitle={learnMore.summary}>
            <CollapsiblePanel title="Topic cards — expand to read" icon="◇" defaultOpen={false}>
              <div className="liturgy-teaching__learn-cards">
                {learnMore.blocks.map((b) => (
                  <div key={b.heading} className="liturgy-teaching__learn-card">
                    <h3 className="liturgy-teaching__learn-card-title">{b.heading}</h3>
                    <p>
                      <EmText>{b.body}</EmText>
                    </p>
                  </div>
                ))}
              </div>
            </CollapsiblePanel>
          </PageSection>

          <PageSection id="faq" title="Frequently asked questions" subtitle="Short answers for newcomers">
            <div className="liturgy-teaching__faq">
              {faq.map((item) => (
                <details key={item.q} className="liturgy-teaching__faq-item">
                  <summary className="liturgy-teaching__faq-q">{item.q}</summary>
                  <p className="liturgy-teaching__faq-a">
                    <EmText>{item.a}</EmText>
                  </p>
                </details>
              ))}
            </div>
          </PageSection>

          <PageSection
            id="final-checklist"
            title={finalChecklist.title}
            subtitle="Glance before you leave home."
          >
            <ul className="liturgy-teaching__final-checklist">
              {finalChecklist.items.map((item) => (
                <li key={item}>
                  <EmText>{item}</EmText>
                </li>
              ))}
            </ul>
          </PageSection>

          <CollapsiblePanel
            anchorId="liturgy-pdf"
            title="Full liturgy book (PDF)"
            icon="↗"
            defaultOpen={false}
            className="liturgy-teaching__pdf-collapsible"
          >
            <section className="liturgy-teaching__pdf" aria-labelledby="liturgy-pdf-heading">
              <h2 id="liturgy-pdf-heading" className="liturgy-teaching__pdf-heading visually-hidden">
                Full liturgy book (PDF)
              </h2>
              <p className="liturgy-teaching__pdf-desc">{pdfLink.description}</p>
              <a
                href={pdfLink.href}
                className="liturgy-teaching__pdf-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {pdfLink.label}
                <span className="liturgy-teaching__pdf-sr"> (opens in new tab)</span>
              </a>
            </section>
          </CollapsiblePanel>

          {relatedItems.length > 0 ? (
            <aside className="content-page__related liturgy-teaching__related">
              <ResourceList title="Related on this site" items={relatedItems} />
            </aside>
          ) : null}
        </div>

        <PageJumpNav links={LITURGY_JUMP_LINKS} label="On this page" />
      </div>
    </article>
  )
}
