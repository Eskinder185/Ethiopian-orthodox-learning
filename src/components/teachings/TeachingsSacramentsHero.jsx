import SacramentIcon from './SacramentIcon.jsx'
import SacredImageSlot from '../media/SacredImageSlot.jsx'

export default function TeachingsSacramentsHero({ meta, hero, sacraments }) {
  return (
    <header className="teachings-sac__hero" aria-labelledby="teachings-sac-hero-title">
      <div className="teachings-sac__hero-grid">
        <div className="teachings-sac__hero-copy">
          <p className="teachings-sac__hero-eyebrow">{hero.eyebrow}</p>
          <h1 id="teachings-sac-hero-title" className="teachings-sac__hero-title">
            {meta.title}
          </h1>
          <p className="teachings-sac__hero-lead">{hero.lead}</p>
        </div>
        <div className="teachings-sac__hero-panel" aria-label="The seven sacraments">
          <SacredImageSlot
            imageKey="teachings.heroPanel"
            className="teachings-sac__hero-panel-media"
            loading="eager"
          />
          <div className="teachings-sac__hero-panel-inner">
            <p className="teachings-sac__hero-panel-caption">Seven holy mysteries</p>
            <ul className="teachings-sac__hero-orbit">
              {sacraments.map((s) => (
                <li key={s.id}>
                  <a href={`#sacrament-${s.id}`} className="teachings-sac__hero-orbit-link" title={s.name}>
                    <span className="teachings-sac__hero-orbit-icon">
                      <SacramentIcon variant={s.icon} className="teachings-sac__hero-orbit-svg" />
                    </span>
                    <span className="teachings-sac__hero-orbit-label">{s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
