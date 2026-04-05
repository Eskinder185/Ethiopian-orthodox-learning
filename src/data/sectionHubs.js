import { paths } from '../constants/paths.js'
import {
  learnHubContent,
  learnHubTopics,
  learnHubResourceItems,
} from '../content/learnHubContent.js'
import {
  practiceHubContent,
  practiceHubTopics,
  practiceHubResourceItems,
} from '../content/practiceHubContent.js'

/**
 * Section landing data for Learn and Practice hubs.
 */
export const learnHub = {
  ...learnHubContent,
  topics: learnHubTopics,
  resourceItems: learnHubResourceItems,
}

export const practiceHub = {
  ...practiceHubContent,
  topics: practiceHubTopics,
  resourceItems: practiceHubResourceItems,
}
