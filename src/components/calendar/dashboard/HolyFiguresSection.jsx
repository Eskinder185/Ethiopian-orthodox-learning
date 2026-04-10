import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { buildHolyFiguresFromState, buildDetailFromFigure } from '../../../data/calendarVisualCatalog.js'
import HolyFigureCard from './HolyFigureCard.jsx'

export default function HolyFiguresSection({ state, onOpenDetail }) {
  const { t } = useTranslation('common')
  const figures = useMemo(() => buildHolyFiguresFromState(state), [state])

  const sorted = useMemo(() => {
    const order = { major: 0, standard: 1, medium: 1, minor: 2, small: 2 }
    return [...figures].sort((a, b) => (order[a.importance] ?? 1) - (order[b.importance] ?? 1))
  }, [figures])

  return (
    <section className="cal-holy-figures" aria-labelledby="cal-holy-figures-heading">
      <div className="cal-holy-figures__head">
        <h2 id="cal-holy-figures-heading" className="cal-holy-figures__title">
          {t('calendarDashboard.holyFigures.title')}
        </h2>
        <p className="cal-holy-figures__sub">{t('calendarDashboard.holyFigures.sub')}</p>
      </div>
      <div className="cal-holy-figures__grid">
        {sorted.map((fig) => (
          <HolyFigureCard
            key={fig.key}
            figure={fig}
            span={fig.importance === 'major'}
            onOpen={() => onOpenDetail(buildDetailFromFigure(state, fig))}
          />
        ))}
      </div>
    </section>
  )
}
