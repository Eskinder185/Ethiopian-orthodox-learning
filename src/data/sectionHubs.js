import {
  learnHubContent,
  learnHubTopics,
} from '../content/learnHubContent.js'
import {
  practiceHubContent,
  practiceHubTopics,
} from '../content/practiceHubContent.js'

/**
 * Section landing data for Learn and Practice hubs.
 */
export const learnHub = {
  ...learnHubContent,
  topics: learnHubTopics,
}

export const practiceHub = {
  ...practiceHubContent,
  topics: practiceHubTopics,
}
