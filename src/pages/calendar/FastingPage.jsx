import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../styles/ContentComponents.css'
import PageHeader from '../../components/sections/PageHeader.jsx'
import SectionTitle from '../../components/sections/SectionTitle.jsx'
import SectionDivider from '../../components/sections/SectionDivider.jsx'
import StatusBox from '../../components/sections/StatusBox.jsx'
import InfoBlock from '../../components/sections/InfoBlock.jsx'
import RelatedContentStrip from '../../components/calendar/dashboard/RelatedContentStrip.jsx'
import { paths } from '../../constants/paths.js'
import { fastingPage } from '../../data/calendarPages.js'
import { FASTING_SEASON_DEFINITIONS } from '../../data/calendarData.js'
import { getGreatLentGregorianRange, formatGregorianDate } from '../../utils/liturgicalCalendar.js'
import '../../components/calendar/CalendarComponents.css'
import '../../components/calendar/CalendarCards.css'

export default function FastingPage() {
  const { t } = useTranslation('common')
  const { category, title, intro, confirmNote } = fastingPage
  const gy = new Date().getFullYear()
  const lentThis = getGreatLentGregorianRange(gy)
  const lentNext = getGreatLentGregorianRange(gy + 1)

  return (
    <article className="content-page calendar-page calendar-page--fasting">
      <PageHeader category={category} title={title} intro={intro} compact />

      <SectionTitle
        id="fasting-weekly-heading"
        title="Wednesday and Friday"
        subtitle="The Church’s weekly fast — from Ethiopian Orthodox tradition (betrayal and crucifixion)."
      />
      <div className="cal-feast-grid">
        {FASTING_SEASON_DEFINITIONS.filter((d) => d.id === 'weekly').map((d) => (
          <div key={d.id} className="cal-fasting-card">
            <h3>{d.name}</h3>
            <p className="cal-fasting-card__meta">{d.ethiopianRangeSummary}</p>
            <p>{d.explanation}</p>
          </div>
        ))}
      </div>

      <SectionDivider />

      <SectionTitle
        id="fasting-great-lent-heading"
        title="Great Lent (moveable)"
        subtitle="Fifty-five days before Orthodox Pascha — dates shift each Gregorian year."
      />
      <div className="cal-feast-grid">
        <div className="cal-fasting-card">
          <h3>Great Lent — {gy}</h3>
          <p>
            <strong>Approximate Gregorian: </strong>
            {formatGregorianDate(lentThis.start.year, lentThis.start.month, lentThis.start.day)} —{' '}
            {formatGregorianDate(lentThis.end.year, lentThis.end.month, lentThis.end.day)}
          </p>
          <p>
            <strong>Pascha: </strong>
            {formatGregorianDate(lentThis.pascha.year, lentThis.pascha.month, lentThis.pascha.day)}
          </p>
          <p className="cal-fasting-card__meta">
            {FASTING_SEASON_DEFINITIONS.find((x) => x.id === 'great-lent')?.explanation}
          </p>
        </div>
        <div className="cal-fasting-card">
          <h3>Great Lent — {gy + 1}</h3>
          <p>
            <strong>Approximate Gregorian: </strong>
            {formatGregorianDate(lentNext.start.year, lentNext.start.month, lentNext.start.day)} —{' '}
            {formatGregorianDate(lentNext.end.year, lentNext.end.month, lentNext.end.day)}
          </p>
          <p>
            <strong>Pascha: </strong>
            {formatGregorianDate(lentNext.pascha.year, lentNext.pascha.month, lentNext.pascha.day)}
          </p>
        </div>
      </div>

      <SectionDivider />

      <SectionTitle
        id="fasting-seasons-heading"
        title="Other major fasts (fixed or variable)"
        subtitle="Summaries from the same source document; Nineveh and Apostles lengths vary by parish calendar."
      />
      <div className="cal-feast-grid">
        {FASTING_SEASON_DEFINITIONS.filter((d) => d.id !== 'weekly').map((d) => (
          <div key={d.id} className="cal-fasting-card">
            <h3>{d.name}</h3>
            <p className="cal-fasting-card__meta">
              {d.lengthDescription}
              {d.ethiopianRangeSummary ? ` · ${d.ethiopianRangeSummary}` : ''}
            </p>
            <p>{d.explanation}</p>
            {d.computed === 'nineveh' || d.computed === 'apostlesApprox' ? (
              <p className="cal-fasting-card__meta">
                Exact dates are not computed on this page yet — use your diocesan Ordo.
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <SectionDivider />

      <SectionTitle
        id="fasting-practice-heading"
        title={t('calendarFasting.practiceTitle')}
      />
      <InfoBlock variant="soft">
        <p>{t('calendarFasting.practiceBody')}</p>
        <ul className="cal-fasting-practice-links">
          <li>
            <Link to={paths.practice.prayer} className="text-link">
              Prayer practice
            </Link>
          </li>
          <li>
            <Link to={paths.practice.chants} className="text-link">
              Mezmur &amp; chant practice
            </Link>
          </li>
        </ul>
      </InfoBlock>

      <SectionDivider />

      <RelatedContentStrip feast={null} />

      <SectionDivider />

      <StatusBox tone="muted">{confirmNote}</StatusBox>
    </article>
  )
}
