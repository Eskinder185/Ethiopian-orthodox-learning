import EmText from '../liturgy/EmText.jsx'
import { practiceHubImage } from '../../constants/practiceHubImages.js'

const PREVIEW_LABEL = {
  prayer: 'Prayer',
  chants: 'Mezmur',
  instruments: 'Rhythm',
  language: 'Language',
}

/**
 * @param {{
 *   meta: { eyebrow: string, title: string },
 *   hero: { headline: string, subtitle: string, ctaPrimary: { label: string, href: string }, ctaSecondary: { label: string, href: string } },
 *   statLabels: Record<string, string>,
 *   stats: { prayerDays: number, mezmurSessions: number, instrumentNotes: number, languageLetters: number },
 *   gateways: Array<{ id: string }>,
 * }} props
 */
export default function PracticeHero({ meta, hero, statLabels, stats, gateways }) {
  const heroImg = practiceHubImage('hero')

  return (
    <header className="ph-hub__hero ph-hub__hero--premium" aria-labelledby="ph-hub-hero-title">
      <div className="ph-hub__hero-premium-inner">
        <div className="ph-hub__hero-copy">
          <p className="ph-hub__eyebrow">{meta.eyebrow}</p>
          <p className="ph-hub__sector">{meta.title}</p>
          <h1 id="ph-hub-hero-title" className="ph-hub__title ph-hub__title--hero">
            {hero.headline}
          </h1>
          <p className="ph-hub__subtitle">
            <EmText>{hero.subtitle}</EmText>
          </p>

          <div className="ph-hub__hero-actions">
            <a href={hero.ctaPrimary.href} className="btn btn--primary ph-hub__btn">
              {hero.ctaPrimary.label}
            </a>
            <a href={hero.ctaSecondary.href} className="btn btn--ghost ph-hub__btn">
              {hero.ctaSecondary.label}
            </a>
          </div>

          <ul className="ph-hub__hero-categories" aria-label="Practice categories">
            {gateways.map((g) => (
              <li key={g.id}>
                <a href={`#practice-hub-gateway-${g.id}`} className="ph-hub__hero-cat-pill">
                  {PREVIEW_LABEL[g.id] ?? g.id}
                </a>
              </li>
            ))}
          </ul>

          <dl className="ph-hub__stat-row" aria-label="Practice snapshot on this device">
            <div className="ph-hub__stat">
              <dt className="ph-hub__stat-label">{statLabels.prayer}</dt>
              <dd className="ph-hub__stat-value">{stats.prayerDays}</dd>
            </div>
            <div className="ph-hub__stat">
              <dt className="ph-hub__stat-label">{statLabels.mezmur}</dt>
              <dd className="ph-hub__stat-value">{stats.mezmurSessions}</dd>
            </div>
            <div className="ph-hub__stat">
              <dt className="ph-hub__stat-label">{statLabels.instruments}</dt>
              <dd className="ph-hub__stat-value">{stats.instrumentNotes > 0 ? stats.instrumentNotes : '—'}</dd>
            </div>
            <div className="ph-hub__stat">
              <dt className="ph-hub__stat-label">{statLabels.language}</dt>
              <dd className="ph-hub__stat-value">{stats.languageLetters}</dd>
            </div>
          </dl>
        </div>

        <div className="ph-hub__hero-visual" aria-hidden={heroImg ? 'true' : undefined}>
          {heroImg ? (
            <img
              className="ph-hub__hero-visual-img"
              src={heroImg}
              alt=""
              loading="eager"
              decoding="async"
              width={640}
              height={800}
            />
          ) : null}
          <div className="ph-hub__hero-visual-frame" />
        </div>
      </div>
    </header>
  )
}
