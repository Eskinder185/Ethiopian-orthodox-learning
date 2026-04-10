/**
 * Homepage seasonal spotlight — derived from liturgical state + church-day context.
 * Replace with CMS or richer rules later; shape is stable for the UI.
 */

import { paths } from '../constants/paths.js'
import { getLiturgicalDayState } from '../utils/liturgicalCalendar.js'
import { getHomeChurchDay } from './homeChurchDay.js'
import { resolveSeasonalSpotlightVisual } from './homeAssets.js'

function truncate(s, max = 220) {
  if (!s || s.length <= max) return s || ''
  return `${s.slice(0, max - 1).trim()}…`
}

/**
 * @returns {{ title: string, description: string, hrefLearn: string, hrefPractice: string, image: string, imageAlt: string }}
 */
export function getSeasonalSpotlight(date = new Date()) {
  const snapshot = getLiturgicalDayState(date)
  const day = getHomeChurchDay(date)
  const feast = snapshot.matchingFeasts?.[0]
  const visual = resolveSeasonalSpotlightVisual(snapshot)

  if (feast) {
    return {
      title: feast.name,
      description: truncate(feast.significance, 240),
      hrefLearn: paths.calendar.feastsHolyDays,
      hrefPractice: paths.practice.prayer,
      image: visual.src,
      imageAlt: visual.alt,
    }
  }

  return {
    title: day.context.title,
    description: truncate(day.context.description, 260),
    hrefLearn: day.context.href || paths.calendar.seasons,
    hrefPractice: paths.practice.chants,
    image: visual.src,
    imageAlt: visual.alt,
  }
}
