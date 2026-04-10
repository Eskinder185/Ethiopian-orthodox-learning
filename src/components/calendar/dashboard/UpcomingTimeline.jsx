import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { buildUpcomingTimelineEvents } from '../../../utils/calendarDashboard.js'
import { buildDetailFromTimelineNode } from '../../../data/calendarVisualCatalog.js'
import { getMotionPreset } from '../../../utils/calendarVisualSystem.js'
import CategoryIcon from './CategoryIcon.jsx'
import FeastBadge from './FeastBadge.jsx'

export default function UpcomingTimeline({ now, onOpenDetail }) {
  const { t } = useTranslation('common')
  const nodes = useMemo(() => buildUpcomingTimelineEvents(now), [now])

  return (
    <section className="cal-timeline cal-timeline--motion" id="cal-dash-week" aria-labelledby="cal-timeline-heading">
      <div className="cal-timeline__head">
        <h2 id="cal-timeline-heading" className="cal-timeline__title">
          {t('calendarDashboard.timeline.title')}
        </h2>
        <p className="cal-timeline__sub">{t('calendarDashboard.timeline.sub')}</p>
      </div>

      <div className="cal-timeline__track cal-timeline__track--stagger" role="list">
        {nodes.map((node, i) => {
          const motion = node.visual ? getMotionPreset(node.visual) : { className: '' }
          return (
            <button
              key={node.key}
              type="button"
              className={`cal-timeline__node cal-timeline__node--enter ${motion.className}`.trim()}
              style={{ '--cal-timeline-i': i }}
              onClick={() => onOpenDetail(buildDetailFromTimelineNode(node))}
              aria-haspopup="dialog"
            >
              <span className="cal-timeline__rail-mark" aria-hidden>
                {i < nodes.length - 1 ? <span className="cal-timeline__rail-line" /> : null}
                <span className="cal-timeline__dot" />
              </span>
              <span className="cal-timeline__card">
                <span className="cal-timeline__thumb" aria-hidden>
                  {node.imageSrc ? (
                    <img src={node.imageSrc} alt="" className="cal-timeline__thumb-img" loading="lazy" />
                  ) : (
                    <CategoryIcon categoryId={node.categoryId} size="md" />
                  )}
                </span>
                <span className="cal-timeline__body">
                  <span className="cal-timeline__when">{node.gregorianShort}</span>
                  {node.ethiopianShort ? (
                    <span className="cal-timeline__eth">{node.ethiopianShort}</span>
                  ) : null}
                  <span className="cal-timeline__countdown">{node.countdownLabel}</span>
                  <span className="cal-timeline__event-title">{node.title}</span>
                  <span className="cal-timeline__summary">{node.summary}</span>
                  <span className="cal-timeline__badges">
                    <FeastBadge categoryId={node.categoryId} />
                  </span>
                </span>
              </span>
            </button>
          )
        })}
      </div>

    </section>
  )
}
