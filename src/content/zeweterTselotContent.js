/**
 * Daily prayer categories (Zeweter / Tselot) — summaries only; full texts via outbound links.
 */
export const zeweterTselotContent = {
  sectionTitle: 'Daily prayer categories (Zeweter Tselot)',
  sectionSubtitle:
    'What each block of daily prayer is for. Full prayers are long and belong in books or on publisher sites — link them; do not paste them here.',

  cautions: [
    'Full Niakuteke, Lord’s Prayer, and Marian prayers span many lines; recommend official prayer books or church PDFs instead of reproducing text on this site.',
    'Transliteration and audio should come from sources your bishop or parish approves.',
  ],

  notes: [
    'Names like Zeweter (morning) and evening sets vary slightly by print edition; align wording with your prayer book.',
  ],

  categories: [
    {
      id: 'morning',
      title: 'Morning prayers (Zeweter)',
      summary:
        'Prayers said soon after waking: signing oneself with the cross, thanking God for the night, and asking blessing for the day. They set a tone of praise and protection before work or school.',
      notes:
        'Traditional booklets group several short prayers; learners often begin with the sign of the cross and a morning thanksgiving before adding longer sections.',
    },
    {
      id: 'evening',
      title: 'Evening prayers',
      summary:
        'At sunset the Church gives thanks for the day, asks forgiveness, and commends body and soul to God. The spirit is similar to morning thanksgiving, oriented toward rest and examination of conscience.',
      notes:
        'Some traditions name specific evening offices; match vocabulary to the edition your parish uses.',
    },
    {
      id: 'before-sleep',
      title: 'Before sleep',
      summary:
        'A brief closing prayer thanks God for preservation through the day and asks peaceful rest. It may include psalm verses or short litanies depending on the booklet.',
      notes:
        'Keep bedtime prayer simple enough to say honestly even when tired.',
    },
    {
      id: 'meals',
      title: 'Before and after meals',
      summary:
        'Short blessings sanctify food and thank God afterward. They are easy to memorize and teach children early.',
      notes:
        'Do not copy a particular publisher’s wording here without rights; describe the habit and link to a standard text.',
    },
    {
      id: 'short-daily',
      title: 'Short daily prayers (Lord’s Prayer, Marian prayer)',
      summary:
        'The Lord’s Prayer and prayers honoring the Mother of God appear often in Ethiopian Orthodox life. Jesus taught the Lord’s Prayer; Marian prayers echo the angel’s greeting and the Church’s praise of Mary.',
      notes:
        'Scriptural and traditional texts are widely printed — still, host only summaries here and link for full wording.',
    },
  ],

  beginnerRoutine: {
    title: 'Beginner daily routine (suggested order)',
    intro:
      'A gentle sequence you can shorten. Memorize a phrase at a time; use audio from linked sites when available.',
    practiceSteps: [
      'Sign of the cross and quiet invocation of the Holy Trinity.',
      'A short morning thanksgiving (learn one sentence, then expand).',
      'The Lord’s Prayer.',
      'A brief Marian prayer or psalm verse your priest recommends.',
      'Close with “Lord, have mercy” or a short hymn line you already know.',
    ],
  },

  practiceSteps: [],
}
