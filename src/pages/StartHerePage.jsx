import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../styles/ContentComponents.css'
import PageHeader from '../components/sections/PageHeader.jsx'
import SectionTitle from '../components/sections/SectionTitle.jsx'
import SectionDivider from '../components/sections/SectionDivider.jsx'
import InfoBlock from '../components/sections/InfoBlock.jsx'
import StatusBox from '../components/sections/StatusBox.jsx'
import ActionButton from '../components/ui/ActionButton.jsx'
import { paths } from '../constants/paths.js'
import { startHereContent } from '../content/startHereContent.js'
import './StartHerePage.css'

export default function StartHerePage() {
  const { t } = useTranslation('common')
  const c = startHereContent

  return (
    <article className="content-page start-here-page">
      <PageHeader title={t('startHere.title')} eyebrow={t('startHere.eyebrow')} compact>
        <p className="page-hero__subtitle">{t('startHere.heroLead')}</p>
        <div className="start-here-page__actions">
          <ActionButton to={paths.learn.teachings} variant="primary">
            {t('startHere.beginTeachings')}
          </ActionButton>
          <ActionButton to={paths.calendar.seasons} variant="ghost">
            {t('startHere.ctaExploreSeasons')}
          </ActionButton>
        </div>
      </PageHeader>

      <section aria-labelledby="start-what-church-heading">
        <SectionTitle id="start-what-church-heading" title={t('startHere.whatIsChurchTitle')} />
        <InfoBlock variant="soft">
          {c.whatIsChurch.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </InfoBlock>
      </section>

      <SectionDivider />

      <section aria-labelledby="start-how-heading">
        <SectionTitle id="start-how-heading" title={t('startHere.howToUseTitle')} />
        <InfoBlock variant="soft">
          {c.howToUse.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </InfoBlock>
      </section>

      <SectionDivider />

      <section aria-labelledby="start-first-heading">
        <SectionTitle id="start-first-heading" title={t('startHere.whatFirstTitle')} />
        <ul className="start-here-page__list">
          {['0', '1', '2'].map((k) => (
            <li key={k}>
              <strong>{t(`startHere.items.${k}.label`)}</strong> — {t(`startHere.items.${k}.hint`)}
            </li>
          ))}
        </ul>
      </section>

      <SectionDivider />

      <section aria-labelledby="start-path-heading">
        <SectionTitle id="start-path-heading" title={t('startHere.pathTitle')} />
        <ol className="start-here-page__steps">
          {c.path.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </section>

      <SectionDivider />

      <section aria-labelledby="start-visitor-heading">
        <SectionTitle id="start-visitor-heading" title={t('startHere.visitorTitle')} />
        <InfoBlock variant="soft">
          {c.visitor.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </InfoBlock>
      </section>

      <SectionDivider />

      <StatusBox tone="calm">
        <p className="status-box__text">
          <strong>{t('startHere.parishTitle')}. </strong>
          {c.parishNote.body}
        </p>
      </StatusBox>

      <p className="start-here-page__footer-link">
        <Link to={paths.learn.index} className="text-link">
          {t('startHere.learnHubCta')}
        </Link>
      </p>
    </article>
  )
}
