import { paths } from '../constants/paths.js'

/** Topic shortcuts: `id` maps to `siteGuide.topics.<id>` in i18n. */
export const siteGuideTopicRoutes = [
  { id: 'start', to: paths.startHere },
  { id: 'learn', to: paths.learn.index },
  { id: 'practice', to: paths.practice.index },
  { id: 'language', to: paths.practice.language.index },
  { id: 'calendar', to: paths.calendar.index },
  { id: 'about', to: paths.about },
]

/**
 * Keyword routing only — display strings live in i18n (`siteGuide.entries.<id>`).
 */
export const siteGuideMatchEntries = [
  {
    id: 'what-site',
    keywords: [
      'what is this website',
      'what is this site',
      'website for',
      'site for',
      'purpose',
      'what for',
      'orthodox path',
      'orthodoxpath',
      'what is orthodoxpath',
    ],
    linkTo: paths.about,
  },
  {
    id: 'where-start',
    keywords: [
      'where start',
      'where to start',
      'how to begin',
      'beginner',
      'new here',
      'first steps',
      'getting started',
      'onboarding',
    ],
    linkTo: paths.startHere,
  },
  {
    id: 'site-organization',
    keywords: [
      'how organized',
      'site structure',
      'learn practice calendar',
      'three sections',
      'navigation',
      'menu',
      'dropdown',
    ],
    linkTo: paths.startHere,
  },
  {
    id: 'appearance-settings',
    keywords: [
      'theme',
      'color theme',
      'appearance',
      'site colors',
      'colors',
      'colours',
      'language',
      'switch language',
      'english',
      'amharic',
      'header',
      'mobile menu',
      'menu button',
      'circle button',
      'how do i change',
    ],
    linkTo: paths.startHere,
  },
  {
    id: 'beginners',
    keywords: ['beginner', 'beginners', 'new to', 'no experience', 'first time', 'simple', 'basic'],
    linkTo: paths.learn.teachings,
  },
  {
    id: 'church-life-history',
    keywords: [
      'church knowledge',
      'church history',
      'church life',
      'life and history',
      'aksum',
      'nine saints',
      'tewahedo history',
    ],
    linkTo: paths.learn.churchLifeHistory,
  },
  {
    id: 'church-year-learn',
    keywords: ['church year', 'liturgical year', 'meaning of feasts', 'why fast', 'seasons of the church'],
    linkTo: paths.learn.churchYear,
  },
  {
    id: 'practice-mezmur',
    keywords: ['practice mezmur', 'how mezmur', 'mezmur practice', 'hymn', 'zema', 'yared', 'chant'],
    linkTo: paths.practice.chants,
  },
  {
    id: 'mezmur-page-how',
    keywords: ['use mezmur', 'mezmur page', 'mezmur practice page', 'workspace', 'how to use'],
    linkTo: paths.practice.chants,
  },
  {
    id: 'prayer-section',
    keywords: ['prayer', 'tselot', 'daily prayer', 'where prayer', 'pray', 'prayer practice'],
    linkTo: paths.practice.prayer,
  },
  {
    id: 'werb-poetry',
    keywords: ['werb', 'wäräb', 'poetry', 'sacred poetry', 'praise poetry'],
    linkTo: paths.practice.chants,
  },
  {
    id: 'instrument-practice',
    keywords: ['instrument', 'drum', 'kebero', 'sistrum', 'liturgical instrument', 'instrument practice'],
    linkTo: paths.practice.instruments,
  },
  {
    id: 'calendar-section',
    keywords: [
      'calendar',
      'fasting',
      'feast',
      'holiday',
      'holidays',
      'today',
      'ethiopian calendar',
      'church time',
    ],
    linkTo: paths.calendar.index,
  },
  {
    id: 'today-church',
    keywords: ['today', 'today in the church', 'this day', 'what day is it'],
    linkTo: paths.calendar.today,
  },
  {
    id: 'feasts-holy-days',
    keywords: ['feasts', 'holy days', 'fixed feasts', 'major feasts', 'holiday', 'holidays page'],
    linkTo: paths.calendar.feastsHolyDays,
  },
  {
    id: 'ethiopian-months',
    keywords: ['ethiopian months', 'meskerem', 'pagumen', 'month names', '13 months'],
    linkTo: paths.calendar.ethiopianMonths,
  },
  {
    id: 'five-pillars',
    keywords: ['five pillars', 'pillars of mystery', 'mysteries', 'sacraments', 'seven sacraments'],
    linkTo: paths.learn.teachings,
  },
  {
    id: 'external-links',
    keywords: ['external', 'another site', 'new tab', 'link away', 'why link', 'hosted'],
    linkTo: paths.practice.chants,
  },
  {
    id: 'amharic-alphabet',
    keywords: [
      'amharic',
      'alphabet',
      'fidel',
      'geez',
      'letters',
      'writing system',
      'language',
      'pronunciation',
    ],
    linkTo: paths.practice.language.alphabet,
  },
  {
    id: 'learn-liturgy',
    keywords: ['liturgy', 'divine liturgy', 'mass', 'service', 'qidase'],
    linkTo: paths.learn.liturgy,
  },
  {
    id: 'scripture',
    keywords: ['scripture', 'bible', 'reading', 'canon', '81 book'],
    linkTo: paths.learn.scripture,
  },
  {
    id: 'progress',
    keywords: ['progress', 'tracking', 'stats', 'habits', 'log'],
    linkTo: paths.progress.index,
  },
]
