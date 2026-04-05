import { paths } from '../constants/paths.js'
import { calendarNarratives } from '../content/calendarSiteContent.js'

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
}

export const todayPage = {
  category: 'Calendar · Today',
  title: 'Today',
  intro: cal.today.intro,
}

export const fastingPage = {
  category: 'Calendar · Fasting',
  title: 'Fasting',
  intro: cal.fasting.intro,
  confirmNote: cal.fasting.confirmNote,
}

export const holidaysPage = {
  category: 'Calendar · Holidays',
  title: 'Holidays',
  intro: cal.holidays.intro,
}
