/**
 * Structural keys for the Learn hub — copy lives in i18n `learnHub.*`.
 */

import { paths } from '../constants/paths.js'

/** Topic routes + i18n key (matches learnHub.topics.<key> and pathCards.<key>). */
export const learnHubPathCardOrder = [
  { key: 'scripture', to: paths.learn.scripture, imageKey: 'learn.pathScripture' },
  { key: 'teachings', to: paths.learn.teachings, imageKey: 'learn.pathTeachings' },
  { key: 'liturgy', to: paths.learn.liturgy, imageKey: 'learn.pathLiturgy' },
  { key: 'churchLifeHistory', to: paths.learn.churchLifeHistory, imageKey: 'learn.pathChurchLifeHistory' },
  { key: 'churchYear', to: paths.learn.churchYear, imageKey: 'learn.pathChurchYear' },
]

export const learnFaithMapNodeOrder = [
  'scripture',
  'belief',
  'worship',
  'churchLife',
  'churchYear',
]

export const learnSacramentPreviewKeys = [
  'baptism',
  'eucharist',
  'chrismation',
  'repentance',
  'marriage',
  'unction',
]

export const learnQidaseStageKeys = [
  'proclamation',
  'readings',
  'creed',
  'anaphora',
  'communion',
  'dismissal',
]

export const learnTimelineKeys = ['apostolic', 'councils', 'ethiopia', 'monastic', 'today']

export const learnYearWheelKeys = ['fasts', 'feasts', 'weekdays', 'seasons']

export const learnGlossaryTermKeys = ['tewahedo', 'qidase', 'mezmur', 'geez', 'tabot', 'senksar']

export const learnPracticeBridgeConfig = [
  {
    key: 'wordToLife',
    learnTo: paths.learn.scripture,
    practiceTo: paths.practice.language.alphabet,
    imageKey: 'learn.bridgeWordToLife',
  },
  {
    key: 'faithToPrayer',
    learnTo: paths.learn.teachings,
    practiceTo: paths.practice.prayer,
    imageKey: 'learn.bridgeFaithToPrayer',
  },
  {
    key: 'yearToCalendar',
    learnTo: paths.learn.churchYear,
    practiceTo: paths.calendar.today,
    imageKey: 'learn.bridgeYearToCalendar',
  },
]
