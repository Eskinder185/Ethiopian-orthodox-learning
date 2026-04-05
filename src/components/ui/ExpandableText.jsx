import { useState } from 'react'
import '../../styles/content-patterns.css'

/**
 * Clamps prose to a few lines with a calm "Read more" / "Show less" control.
 */
export default function ExpandableText({
  children,
  lines = 3,
  moreLabel = 'Read more',
  lessLabel = 'Show less',
  className = '',
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`expandable-text${className ? ` ${className}` : ''}`}>
      <div
        className={
          'expandable-text__inner' +
          (expanded ? ' expandable-text__inner--expanded' : '')
        }
        style={
          expanded
            ? undefined
            : {
                WebkitLineClamp: lines,
              }
        }
      >
        {children}
      </div>
      <button
        type="button"
        className="expandable-text__toggle"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {expanded ? lessLabel : moreLabel}
      </button>
    </div>
  )
}
