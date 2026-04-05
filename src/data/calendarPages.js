import { paths } from '../constants/paths.js'
import { calendarNarratives } from '../content/calendarSiteContent.js'

const rel = (to, label, description) => ({
  to,
  label,
  description,
  kind: 'On this site',
})

const cal = calendarNarratives

export const calendarHome = {
  title: 'Calendar',
  eyebrow: 'Church year & daily rhythm',
  intro: cal.home.intro,
  purpose: cal.home.purpose,
  notice: cal.home.notice,
  cards: [
    {
      to: paths.calendar.today,
      title: 'Today',
      description:
        'Gregorian and Ethiopian dates, weekday theme, fasting context, and feasts for the current day.',
      category: 'Daily',
    },
    {
      to: paths.calendar.fasting,
      title: 'Fasting',
      description: 'Wednesday and Friday fasts and the major fasting seasons explained from church sources.',
      category: 'Discipline',
    },
    {
      to: paths.calendar.holidays,
      title: 'Holidays',
      description: 'Principal fixed feasts with Ethiopian and approximate Gregorian dates.',
      category: 'Feasts',
    },
  ],
  relatedItems: [
    rel(paths.learn.teachings, 'Teachings', 'Spiritual context behind fasts and feasts.'),
    rel(paths.practice.tselot, 'Tselot practice', 'Prayer rhythm through the church year.'),
  ],
}

export const todayPage = {
  category: 'Calendar · Today',
  title: 'Today',
  intro: cal.today.intro,
  relatedItems: [
    rel(paths.calendar.index, 'Calendar home', 'Overview of Today, Fasting, and Holidays.'),
    rel(paths.calendar.fasting, 'Fasting', 'Seasonal and weekly context.'),
    rel(paths.calendar.holidays, 'Holidays', 'Major feasts and holy days.'),
  ],
}

export const fastingPage = {
  category: 'Calendar · Fasting',
  title: 'Fasting',
  intro: cal.fasting.intro,
  confirmNote: cal.fasting.confirmNote,
  relatedItems: [
    rel(paths.calendar.today, 'Today', 'Dates and fasting for this day.'),
    rel(paths.calendar.holidays, 'Holidays', 'How fasts end and feasts begin.'),
    rel(paths.learn.teachings, 'Teachings', 'Theology and spirituality of fasting.'),
  ],
}

export const holidaysPage = {
  category: 'Calendar · Holidays',
  title: 'Holidays',
  intro: cal.holidays.intro,
  relatedItems: [
    rel(paths.calendar.today, 'Today', 'See whether today is a feast or fast.'),
    rel(paths.calendar.fasting, 'Fasting', 'How seasons of preparation fit the year.'),
    rel(paths.learn.churchKnowledge, 'Church knowledge', 'Stories and context behind the days.'),
  ],
}
