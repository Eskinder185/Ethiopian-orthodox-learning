import { paths } from '../constants/paths.js'
import { languageNarratives } from '../content/languageSiteContent.js'
import {
  amharicAlphabetInteractive,
  geezPronunciationYoutube,
} from './curatedExternalLinks.js'

const rel = (to, label, description) => ({
  to,
  label,
  description,
  kind: 'On this site',
})

const { home: langHome, alphabet: langAlph, writing: langWrite, pronunciation: langPro } =
  languageNarratives

export const languageHome = {
  title: langHome.title,
  eyebrow: langHome.eyebrow,
  intro: langHome.intro,
  purpose: langHome.purpose,
  notice: langHome.notice,
  cards: [
    {
      to: paths.language.alphabet,
      title: 'Amharic alphabet',
      description:
        'Learn Fidel in small sets: recognition, sound, and stroke practice with an external interactive chart.',
      category: 'Reading',
    },
    {
      to: paths.language.writing,
      title: 'Writing practice',
      description: 'Look, copy, cover, and review — calm handwriting sessions.',
      category: 'Writing',
    },
    {
      to: paths.language.pronunciation,
      title: 'Pronunciation practice',
      description: 'Listen on original sources, repeat slowly, and refine difficult sounds.',
      category: 'Speaking & listening',
    },
  ],
  relatedItems: [
    rel(paths.practice.index, 'Practice hub', 'Apply language skills to mezmur and prayer routines.'),
    rel(paths.learn.index, 'Learn hub', 'Context for scripture and teachings as you read more Amharic.'),
  ],
}

export const alphabetPage = {
  category: 'Language · Alphabet',
  title: 'Amharic alphabet',
  intro: langAlph.intro,
  notice: langAlph.notice,
  starterTitle: 'Starter characters',
  starterSubtitle:
    'Six syllables from different consonant families — use them to practice looking, saying, and tracing before you open the full chart.',
  exampleLetters: [
    { symbol: 'ሀ', label: 'Ha family', note: 'First vowel grade of ሀ.' },
    { symbol: 'ለ', label: 'La family', note: 'Notice the loop compared to ሀ.' },
    { symbol: 'መ', label: 'Ma family', note: 'Different base shape; good for pattern spotting.' },
    { symbol: 'ሰ', label: 'Sa family', note: 'Wide baseline; compare with ረ in your chart.' },
    { symbol: 'ረ', label: 'Ra family', note: 'Often confused with ሰ — practice side by side.' },
    { symbol: 'በ', label: 'Ba family', note: 'Common in prayers and hymns.' },
  ],
  howToPracticeTitle: 'How to practice',
  howToPracticeSteps: [
    'Pick five to eight letters from one family on your external chart (same consonant, different vowels).',
    'Say each sound aloud while you look at the shape, then trace it once in the air or on paper.',
    'Cover the chart and write the row from memory; check only after you finish the whole row.',
    'Mark mistakes lightly, repeat only those glyphs, and note the date in your notebook for next time.',
  ],
  sectionBlurb: langAlph.sectionSummary,
  progressTitle: 'Steady progress',
  progressIntro: langAlph.progressIntro,
  externalSection: {
    title: 'Alphabet charts & courses (external websites)',
    intro:
      'Interactive letters and sound — hosted on the original site; opens in a new tab.',
    links: [amharicAlphabetInteractive],
  },
  relatedItems: [
    rel(paths.language.index, 'Language home', 'Overview of reading, writing, and pronunciation.'),
    rel(paths.language.writing, 'Writing practice', 'Move from recognition to forming letters.'),
    rel(paths.language.pronunciation, 'Pronunciation practice', 'Match letters to sounds you hear.'),
  ],
}

export const writingPracticePage = {
  category: 'Language · Writing',
  title: 'Writing practice',
  intro: langWrite.intro,
  notice: langWrite.notice,
  howToUse: [
    'Use lined paper or a stylus app — short sessions beat long, tired drills.',
    'Compare your shapes to a reference after each line, not after every single letter.',
    'When your hand tires, stop. Accuracy and respect for the forms matter more than volume.',
  ],
  sectionBlurb: langWrite.sectionSummary,
  methodTitle: 'Writing practice method',
  methodSteps: [
    'Look at a model character or row, then copy it carefully while you look.',
    'Repeat the same row slowly, paying attention to loops, bars, and proportions.',
    'Cover the model and write from memory; uncover only to check.',
    'Circle difficult letters and review them at the start of your next session.',
  ],
  practiceFocusTitle: langWrite.practiceFocusTitle,
  practiceFocusBody: langWrite.practiceFocusBody,
  externalSection: {
    title: 'Worksheets & fonts (external websites)',
    intro: 'Printable sheets or font pages from creators who permit sharing — each link opens in a new tab.',
    links: [],
  },
  reflectionTitle: 'After you write',
  reflectionPrompts: [
    'Which syllables still feel awkward after today’s session?',
    'Did neatness improve on the second pass compared with the first?',
  ],
  relatedItems: [
    rel(paths.language.alphabet, 'Amharic alphabet', 'Review shapes before heavy writing.'),
    rel(paths.language.pronunciation, 'Pronunciation practice', 'Speak syllables before you write them.'),
    rel(paths.language.index, 'Language home', 'Return to the learning overview.'),
  ],
}

export const pronunciationPage = {
  category: 'Language · Pronunciation',
  title: 'Pronunciation practice',
  intro: langPro.intro,
  notice: langPro.notice,
  howToUse: [
    'Use headphones when possible so you hear subtle consonants and vowels clearly.',
    'Imitate quietly in shared spaces; exaggerate mouth shape in private if that helps.',
    'Optional: record yourself on your own phone for comparison — nothing is sent to this website.',
  ],
  sectionBlurb: langPro.sectionSummary,
  flowTitle: 'Pronunciation practice flow',
  flowSteps: [
    'Listen from the original source without speaking — notice rhythm and stress.',
    'Repeat slowly, syllable by syllable or word by word.',
    'Focus on one sound at a time until it feels natural before moving on.',
    'Compare two sounds that confuse you (for example, similar consonants) back to back.',
    'Review the same clip again later in the week so your ear and muscle memory consolidate.',
  ],
  selfCheckTitle: 'Self-check tips',
  selfCheckTips: [
    'Can you hear the difference after listening twice without looking at text?',
    'Does your throat or tongue feel relaxed, or are you forcing volume?',
    'Would a fluent friend recognize the word if they listened once? Ask when you can.',
  ],
  externalSection: {
    title: 'Audio & video lessons (external websites)',
    intro:
      'Listening and repeating from the original channel — opens in a new tab.',
    links: [geezPronunciationYoutube],
  },
  relatedItems: [
    rel(paths.language.alphabet, 'Amharic alphabet', 'See letters while you hear them.'),
    rel(paths.language.writing, 'Writing practice', 'Connect sound to hand motion.'),
    rel(paths.practice.mezmur, 'Mezmur practice', 'Apply growing skills in hymn lines over time.'),
  ],
}
