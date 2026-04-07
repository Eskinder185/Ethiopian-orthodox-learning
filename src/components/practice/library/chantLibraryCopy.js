/** UI strings for the shared chant practice experience (English). */

export const chantLibraryCopy = {
  introMezmur: 'Browse mezmur by title or keyword. Pick an entry to listen, read, and rehearse slowly.',
  introWerb: 'Browse werb by title or keyword. Pick an entry to listen, read, and rehearse slowly.',
  sectionTitle: 'Browse & practice',
  workspaceTitle: 'Timed practice workspace',
  workspaceIntro:
    'Load any permitted YouTube video: mark start and end times, loop a section, slow playback, and rehearse line by line. Works with a pasted link or a video from an entry above.',
  sendVideoToWorkspace: 'Load this video in timed workspace',
  sendVideoToWorkspaceHint:
    'Opens the same video in the player below so you can use −5s / +5s, speed, and timestamp marks.',
  searchLabel: 'Search',
  searchPlaceholder: 'Search by Amharic title, transliteration, or keywords…',
  filterAll: 'All',
  filterMezmur: 'Mezmur',
  filterWerb: 'Werb',
  filterDifficultyLabel: 'Level',
  filterDifficultyAll: 'Any level',
  filterBeginner: 'Beginner',
  filterIntermediate: 'Intermediate',
  filterAdvanced: 'Advanced',
  filterSpotlightLabel: 'Focus',
  filterSpotlightAll: 'Any time',
  filterSeasonal: 'Seasonal',
  filterThisMonth: 'This month',
  resultsCountOne: '{{count}} result',
  resultsCountMany: '{{count}} results',
  /** When search matches more mezmur than we list (preview limit). */
  mezmurPreviewTopSearch: 'Top {{shown}} of {{total}} matches',
  /** When browsing with no search; catalog has more mezmur than listed. */
  mezmurPreviewBrowse: 'First {{shown}} of {{total}} mezmur',
  emptyTypeFilter:
    'No entries match these filters. Try “All” or adjust the chips above.',
  emptySearch: 'No entries match your search. Try different words or clear the filters.',
  emptyDataset:
    'No entries are in the catalog yet. Add your chant JSON file to the project when you are ready.',
  emptySpotlight:
    'Nothing in the catalog matches this focus yet. Try another filter or add month/season fields to your data.',
  emptyDifficulty:
    'No entries match this difficulty level. Try “Any level” or broaden your other filters.',
  practice: 'Practice',
  close: 'Close',
  stepListen: 'Listen',
  stepListenLead: 'Hear the line or hymn once with attention before you join in.',
  stepRead: 'Read',
  stepReadLead: 'Read the Amharic text slowly; notice phrasing and pauses.',
  stepRepeat: 'Repeat',
  stepRepeatLead: 'Use the transliteration to align sounds and meaning at a gentle pace.',
  stepPractice: 'Practice',
  stepPracticeLead: 'Rehearse in short sections. There is no rush.',
  practiceTipTitle: 'Practice tip',
  defaultPracticeTip:
    'Listen once before singing. Practice line by line. Start slowly, then repeat naturally. Stop when you lose reverence — come back another day.',
  lyricsAm: 'Amharic text',
  lyricsTr: 'Transliteration / translation',
  noLyrics: 'No Amharic text has been added for this entry yet.',
  noTransliteration: 'No transliteration has been added yet.',
  youtubeOpen: 'Open on YouTube',
  youtubeMissing: 'No video link is listed for this entry.',
  embedFallback: 'If the player does not load, open the video on YouTube.',
  typeMezmur: 'Mezmur',
  typeWerb: 'Werb',
  difficultyLabel: 'Level',
  confidence: 'Confidence',
  viewLyrics: 'View lyrics',
  saveLabel: 'Save',
  savedLabel: 'Saved',
  heroTitle: 'Chant Practice',
  heroSubtitle: 'Practice mezmur and werb by feast, saint, season, and theme',
  continuePractice: 'Continue practice',
  browseFeasts: 'Browse feasts',
  browseSaints: 'Browse saints',
  randomChant: 'Random chant',
  featuredContinueTitle: 'Continue where you left off',
  featuredContinueBody: 'Reopen your most recent chant and keep the same gentle pace.',
  featuredHolidayTitle: 'Practice by holiday',
  featuredHolidayBody: 'Filter by major feasts such as Tinsae, Timket, or Meskel.',
  featuredSaintTitle: 'Practice by saint',
  featuredSaintBody: 'Focus on hymns for the saints and feasts of the Church.',
  filterForm: 'Form',
  filterPrimary: 'Primary',
  filterFeast: 'Major holiday',
  filterSeason: 'Season',
  filterThemes: 'Themes',
  filterConfidence: 'Confidence',
  engagementRecent: 'Recently practiced',
  engagementSaved: 'Saved chants',
  engagementWeekly: 'This week',
  engagementWeeklyBody: 'Practice sessions recorded on this device.',
  sessionsLabel: 'sessions',
  noRecent: 'Nothing yet — open a chant and tap “record practice”.',
  noSaved: 'Save chants from the cards to build your list.',
  browserHeading: 'Browse chants',
  browseTabFeatured: 'Featured',
  browseTabCategory: 'By category',
  browseTabResults: 'Results',
  browseSegmentsLabel: 'Browse mode',
  browseFeaturedIntro:
    'A short curated set to start with — varied themes and reliable entries. Load more for additional suggestions, or open Results to search and filter the full library.',
  browseByCategoryLabel: 'Browse by category',
  browseCategoryIntro: 'Choose a category to see matching chants. You can refine further with filters on the Results tab.',
  browseCategoryOpen: 'Browse',
  browseShowingFeatured: 'Showing {{shown}} of {{total}} suggested chants',
  browseShowingPage: 'Showing {{shown}} of {{total}}',
  browseLoadMore: 'Load more',
  browseViewAll: 'View all chants',
  browseResultsHint: 'Search or use filters below to narrow the library.',
  lineByLineIntro: 'Move one line at a time. Hide the transliteration when you are ready to recall alone.',
  lineByLineProgress: 'Line {{n}} of {{t}}',
  lineByLineShowTransliteration: 'Show transliteration',
  lineByLineHiddenHint: 'Transliteration hidden — toggle above to show.',
  lineByLinePrev: 'Previous',
  lineByLineNext: 'Next',
  lineByLineMarkPracticed: 'Mark line practiced',
  lineByLineNoLyrics: 'No lyric lines are available for this entry.',
  memorizeHint: 'Short sections, honest repetition, and silence between passes deepen memory.',
  markSessionPracticed: 'Mark session practiced',
  recordPracticeFooter: 'Record practice session',
}


export function formatResultsCount(count) {
  const template =
    count === 1 ? chantLibraryCopy.resultsCountOne : chantLibraryCopy.resultsCountMany
  return template.replace('{{count}}', String(count))
}

/**
 * Count line for mezmur preview (top N): full total vs rows shown.
 * @param {{ shown: number; total: number; hasQuery: boolean }} p
 */
export function formatMezmurPreviewSummary({ shown, total, hasQuery }) {
  if (total === 0) return formatResultsCount(0)
  if (total <= shown) return formatResultsCount(total)
  if (hasQuery) {
    return chantLibraryCopy.mezmurPreviewTopSearch
      .replace('{{shown}}', String(shown))
      .replace('{{total}}', String(total))
  }
  return chantLibraryCopy.mezmurPreviewBrowse.replace('{{shown}}', String(shown)).replace('{{total}}', String(total))
}
