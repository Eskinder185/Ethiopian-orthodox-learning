import { paths } from '../constants/paths.js'

/**
 * Learn hub topic cards: `key` maps to `learnHub.topics.<key>` in i18n.
 */
export const learnHubTopicConfig = [
  { to: paths.learn.scripture, key: 'scripture' },
  { to: paths.learn.teachings, key: 'teachings' },
  { to: paths.learn.liturgy, key: 'liturgy' },
  { to: paths.learn.churchLifeHistory, key: 'churchLifeHistory' },
  { to: paths.learn.churchYear, key: 'churchYear' },
]
