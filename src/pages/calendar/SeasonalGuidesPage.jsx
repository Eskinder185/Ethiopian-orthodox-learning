import { Link } from 'react-router-dom'
import '../../styles/ui-system.css'
import '../../styles/ContentComponents.css'
import PageHeader from '../../components/sections/PageHeader.jsx'
import SectionTitle from '../../components/sections/SectionTitle.jsx'
import SectionDivider from '../../components/sections/SectionDivider.jsx'
import StatusBox from '../../components/sections/StatusBox.jsx'
import InfoBlock from '../../components/sections/InfoBlock.jsx'
import { paths } from '../../constants/paths.js'
import {
  growingSection,
  howToUseSteps,
  majorSeasonalGuides,
  newBeginHereSteps,
  seasonalGuidesHero,
  seasonalGuidesPrimaryNote,
  whatChangesBlocks,
} from '../../data/seasonalGuidesContent.js'
import '../../components/calendar/CalendarComponents.css'
import '../../components/calendar/CalendarCards.css'
import './SeasonalGuidesPage.css'

export default function SeasonalGuidesPage() {
  return (
    <article className="content-page calendar-page calendar-page--seasons seasonal-hub">
      <PageHeader
        category="Calendar · Seasons"
        title="Seasonal guides"
        intro={seasonalGuidesHero}
        compact
      />

      <StatusBox tone="calm" className="seasonal-hub__notice">
        {seasonalGuidesPrimaryNote}
      </StatusBox>

      <SectionDivider />

      <section className="seasonal-hub__section" aria-labelledby="seasonal-how-heading">
        <SectionTitle
          id="seasonal-how-heading"
          title="How to use this page"
          subtitle="Three calm steps — not a checklist of perfection."
        />
        <div className="cal-how-grid">
          {howToUseSteps.map((step) => (
            <div key={step.title} className="cal-how-card">
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="seasonal-hub__section" aria-labelledby="seasonal-major-heading">
        <SectionTitle
          id="seasonal-major-heading"
          title="Major seasonal guides"
          subtitle="Anchors in the Church year — fuller articles may be added later."
        />
        <div className="seasonal-hub__grid seasonal-hub__grid--major">
          {majorSeasonalGuides.map((g) => (
            <div key={g.id} className="seasonal-hub-card">
              <h3 className="seasonal-hub-card__title">{g.title}</h3>
              <p className="seasonal-hub-card__desc">{g.description}</p>
              {g.guideTo ? (
                <Link to={g.guideTo} className="seasonal-hub-card__action btn btn--secondary">
                  Open guide
                </Link>
              ) : (
                <span className="seasonal-hub-card__soon" aria-hidden="false">
                  Open guide — coming soon
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="seasonal-hub__section" aria-labelledby="seasonal-changes-heading">
        <SectionTitle
          id="seasonal-changes-heading"
          title="What changes during a season?"
          subtitle="Not every season changes everything — but the Church’s rhythm touches these areas."
        />
        <div className="seasonal-hub__grid seasonal-hub__grid--changes">
          {whatChangesBlocks.map((b) => (
            <div key={b.title} className="seasonal-hub-card seasonal-hub-card--compact">
              <h3 className="seasonal-hub-card__title">{b.title}</h3>
              <p className="seasonal-hub-card__desc">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="seasonal-hub__section" aria-labelledby="seasonal-new-heading">
        <SectionTitle
          id="seasonal-new-heading"
          title="If you are new, begin here"
          subtitle="A gentle orientation before you explore the calendar."
        />
        <ol className="seasonal-hub__begin-list">
          {newBeginHereSteps.map((text, i) => (
            <li key={i} className="seasonal-hub__begin-item">
              <span className="seasonal-hub__begin-num" aria-hidden="true">
                {i + 1}
              </span>
              <span>{text}</span>
            </li>
          ))}
        </ol>
      </section>

      <SectionDivider />

      <SectionTitle
        id="seasons-where-heading"
        title="Where to look next"
        subtitle="Time on the calendar, meaning in teaching"
      />
      <InfoBlock variant="soft" className="seasonal-hub__where">
        <p>
          Use <Link to={paths.calendar.today} className="text-link">Today in the Church</Link> for the
          current day; <Link to={paths.calendar.fasting} className="text-link">Fasting seasons</Link>{' '}
          for discipline and context; <Link to={paths.calendar.feastsHolyDays} className="text-link">
            Feasts &amp; holy days
          </Link>{' '}
          for major days. For <em>why</em> the year is structured this way, open{' '}
          <Link to={paths.learn.churchYear} className="text-link">Learn · Church Year</Link>.
        </p>
      </InfoBlock>

      <SectionDivider />

      <section className="seasonal-hub__section seasonal-hub__section--grow" aria-labelledby="seasons-grow-heading">
        <SectionTitle
          id="seasons-grow-heading"
          title={growingSection.title}
          subtitle="This hub will grow with the site."
        />
        <InfoBlock variant="soft">
          <p>{growingSection.body}</p>
        </InfoBlock>
      </section>
    </article>
  )
}
