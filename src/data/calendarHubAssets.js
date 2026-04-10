/**
 * Visual assets for /calendar hub explore cards and hero art.
 * Paths under /public/images/.
 */
import { homeImageRoots } from './homeAssets.js'

const HOME = homeImageRoots.home
const UI = homeImageRoots.ui

/** Keys align with `calendarHomeCardRoutes[].key`. */
export const CALENDAR_HUB_EXPLORE_ASSETS = {
  today: {
    image: `${HOME}/home-today-in-the-church-panel.jpg`,
    icon: `${UI}/icon-calendar.png`,
    accent: 'gold',
  },
  ethiopianMonths: {
    image: `${HOME}/home-card-calendar.jpg`,
    icon: `${UI}/icon-calendar.png`,
    accent: 'blue',
  },
  fasting: {
    image: '/images/calendar/liturgical-fasting-symbols-sacred-vertical.png',
    icon: `${UI}/icon-practice.png`,
    accent: 'sage',
  },
  feastsHolyDays: {
    image: `${HOME}/home-seasonal-spotlight-fasika.jpg`,
    icon: `${UI}/icon-mezmur.png`,
    accent: 'ember',
  },
  seasons: {
    image: `${HOME}/home-seasonal-spotlight-great-lent.jpg`,
    icon: `${UI}/icon-learn.png`,
    accent: 'cream',
  },
}

export const CALENDAR_HUB_HERO_ART = `${HOME}/home-hero-main.jpg`
