import { paths } from '../constants/paths.js'
import { calendarNarratives } from '../content/calendarSiteContent.js'

const cal = calendarNarratives

/** Card routes for Calendar hub — titles/descriptions from i18n `calendarHub.cards.<key>`. */
export const calendarHomeCardRoutes = [
  { to: paths.calendar.today, key: 'today', categoryKey: 'daily' },
  { to: paths.calendar.ethiopianMonths, key: 'ethiopianMonths', categoryKey: 'time' },
  { to: paths.calendar.fasting, key: 'fasting', categoryKey: 'discipline' },
  { to: paths.calendar.feastsHolyDays, key: 'feastsHolyDays', categoryKey: 'feasts' },
  { to: paths.calendar.seasons, key: 'seasons', categoryKey: 'seasons' },
]

export const todayPage = {
  category: 'Calendar · Today',
  title: 'Today in the Church',
  intro: cal.today.intro,
}

export const fastingPage = {
  category: 'Calendar · Fasting',
  title: 'Fasting seasons',
  intro: cal.fasting.intro,
  confirmNote: cal.fasting.confirmNote,
}

export const feastsHolyDaysPage = {
  category: 'Calendar · Feasts',
  title: 'Feasts & holy days',
  intro: cal.feasts.intro,
}
