import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../constants/paths.js'
import { getRecentChants } from '../../utils/chantStorage.js'
import EmText from '../liturgy/EmText.jsx'

/**
 * @param {{ title?: string, emptyHint?: string }} props
 */
export default function ContinuePracticeCard({
  title = 'Continue practice',
  emptyHint = 'Open the chant library and pick a hymn — your recent choices will appear here.',
}) {
  const [recent, setRecent] = useState(/** @type {{ id: string, title?: string } | null} */ (null))

  useEffect(() => {
    const r = getRecentChants()
    setRecent(r[0] ?? null)
  }, [])

  return (
    <div className="pp-mez-continue">
      <h3 className="pp-mez-continue__h">{title}</h3>
      {recent ?
        <Link to={`${paths.practice.chants}#hub-chant-practice`} className="pp-mez-continue__link">
          <span className="pp-mez-continue__label">Last opened</span>
          <span className="pp-mez-continue__title">{recent.title ?? recent.id}</span>
        </Link>
      : <p className="pp-mez-continue__empty">
          <EmText>{emptyHint}</EmText>
        </p>}
    </div>
  )
}
