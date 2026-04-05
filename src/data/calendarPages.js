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
  eyebrow: 'The Church’s time & your day',
  intro: cal.home.intro,
  purpose: cal.home.purpose,
  notice: cal.home.notice,
  cards: [
    {
      to: paths.calendar.today,
      title: 'Today',
      description:
        'This moment in civil and Church time — the weekday’s spiritual theme, fasting hints, and any great feast we mark for today.',
      category: 'Daily',
    },
    {
      to: paths.calendar.fasting,
      title: 'Fasting',
      description:
        'The gentle discipline of Wednesdays, Fridays, and the great fasts — explained with reverence; your priest confirms the rule.',
      category: 'Discipline',
    },
    {
      to: paths.calendar.holidays,
      title: 'Holidays',
      description:
        'Principal feasts on the Ethiopian calendar, with civil dates to help you plan and rejoice.',
      category: 'Feasts',
    },
  ],
  relatedItems: [
    rel(paths.learn.teachings, 'Teachings', 'The faith behind fasting, feasting, and every sacred season.'),
    rel(paths.practice.tselot, 'Tselot practice', 'Let prayer keep step with the Church’s calendar.'),
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
