/**
 * Ethiopian Orthodox calendar content (months, weekdays, feasts, fasts).
 * Sourced from: deep-research-report.md — expand with Senksar / parish data later.
 */

export const ETHIOPIAN_MONTHS = [
  { index: 1, name: 'Meskerem', geez: 'መስከረም', gregorianApprox: 'Sept 11/12 – Oct 10' },
  { index: 2, name: 'Teqemt', geez: 'ጥቅምት', gregorianApprox: 'Oct 11 – Nov 9' },
  { index: 3, name: 'Hedar', geez: 'ኅዳር', gregorianApprox: 'Nov 10 – Dec 9' },
  { index: 4, name: 'Tahsas', geez: 'ታኅሣሥ', gregorianApprox: 'Dec 10 – Jan 8' },
  { index: 5, name: 'Ter', geez: 'ጥር', gregorianApprox: 'Jan 9 – Feb 7' },
  { index: 6, name: 'Yekatit', geez: 'የካቲት', gregorianApprox: 'Feb 8 – Mar 9' },
  { index: 7, name: 'Megabit', geez: 'መጋቢት', gregorianApprox: 'Mar 10 – Apr 8' },
  { index: 8, name: 'Miyazya', geez: 'ሚያዝያ', gregorianApprox: 'Apr 9 – May 8' },
  { index: 9, name: 'Ginbot', geez: 'ግንቦት', gregorianApprox: 'May 9 – Jun 7' },
  { index: 10, name: 'Sene', geez: 'ሰኔ', gregorianApprox: 'Jun 8 – Jul 7' },
  { index: 11, name: 'Hamle', geez: 'ሐምሌ', gregorianApprox: 'Jul 8 – Aug 6' },
  { index: 12, name: 'Nehase', geez: 'ነሐሴ', gregorianApprox: 'Aug 7 – Sept 5' },
  { index: 13, name: 'Pagumen', geez: 'ጳጉሜ', gregorianApprox: 'Sept 6 – Sept 10 (5 or 6 days)' },
]

/** JS getDay(): 0 = Sunday … 6 = Saturday — aligned with Ethiopian week start (Sunday). */
export const WEEKDAYS = [
  {
    jsIndex: 0,
    english: 'Sunday',
    geez: 'እሁድ',
    geezTransliteration: 'Ehud',
    ethiopianName: 'Senbete Krestian (Christian Sabbath)',
    themeShort:
      'The Lord’s Day: Christ’s Resurrection. The Church calls it the Christian Sabbath — worship, Eucharist, almsgiving, and joy; no fasting.',
    themeMedium:
      'Sunday (Ehud) celebrates Christ’s Resurrection. The liturgy emphasizes Christ’s triumph over death; faithful are urged to attend Divine Liturgy, give alms, visit the sick, and reconcile with others. No fasting; rest and thanksgiving.',
  },
  {
    jsIndex: 1,
    english: 'Monday',
    geez: 'ሰኞ',
    geezTransliteration: 'Sagno',
    ethiopianName: 'Day of the Holy Angels',
    themeShort:
      'Honors God’s angels, especially Archangels Michael and Gabriel — we are guarded by heavenly messengers.',
    themeMedium:
      'Monday is the Day of the Holy Angels. Ethiopian faithful often invoke the archangels in prayer; hymns recall angels’ ministry and God’s protection.',
  },
  {
    jsIndex: 2,
    english: 'Tuesday',
    geez: 'ማክሰኞ',
    geezTransliteration: 'Maksagno',
    ethiopianName: 'Prophets / John the Baptist',
    themeShort:
      'Often associated with John the Baptist and prophecy pointing to Christ; hymns draw on Isaiah and John’s witness.',
    themeMedium:
      'Tuesday is linked to John the Baptist and the prophets. Evening services may include readings from Isaiah or the Baptist; the day supports hearing the word and preparation.',
  },
  {
    jsIndex: 3,
    english: 'Wednesday',
    geez: 'ረቡዕ',
    geezTransliteration: 'Rabue',
    ethiopianName: 'Fast of Wednesday (Harur Abiy / Arb Rabue)',
    themeShort:
      'Commemorates the council that condemned Christ; the Church fasts each Wednesday (no meat, dairy, alcohol) in memory of betrayal — a weekly penance, not the full rigor of Great Lent.',
    themeMedium:
      'Wednesday recalls Christ’s betrayal. The Ethiopian Church fasts every Wednesday in penance; the liturgy includes repentance and the Canticle of the Three Holy Children.',
    weeklyFast: true,
  },
  {
    jsIndex: 4,
    english: 'Thursday',
    geez: 'ሐሙስ',
    geezTransliteration: 'Hamus',
    ethiopianName: 'Holy Communion / Ascension themes',
    themeShort:
      'Recalls the Last Supper and Christ’s gift of the Eucharist; Ascension themes appear especially after Pascha. A day of thanksgiving; no weekly fast except in certain fast-weeks.',
    themeMedium:
      'Thursday focuses on the Holy Table and sacrament — Upper Room narratives and communion. In Paschal season, Ascension hymns are sung.',
  },
  {
    jsIndex: 5,
    english: 'Friday',
    geez: 'ዓርብ',
    geezTransliteration: 'Arb',
    ethiopianName: 'Crucifixion and the Cross',
    themeShort:
      'Remembers Christ’s crucifixion and death — strict weekly fast (no meat, dairy, oil, alcohol) except on great feasts or Pascha week; services center on the Cross.',
    themeMedium:
      'Friday is the Crucifixion fast: hymns and troparia of the Cross, veneration of the Cross, and solemn remembrance of Christ’s death.',
    weeklyFast: true,
  },
  {
    jsIndex: 6,
    english: 'Saturday',
    geez: 'ቅዳሜ',
    geezTransliteration: 'Qadamit Sanbat',
    ethiopianName: 'First Sabbath; all saints',
    themeShort:
      'The Old Testament Sabbath and a feast of the saints — joyful worship, the righteous departed, and the Ark (Tabot); no weekly fast outside Lent or special seasons.',
    themeMedium:
      'Saturday honors the “First Sabbath,” Moses and the prophets, and all saints; the sanctuary is adorned and the faithful remember the departed.',
  },
]

/** Fixed major feasts (Ethiopian month 1–12, day 1–30). Pagumen feasts can be added later. */
export const FIXED_FEASTS = [
  {
    id: 'annunciation',
    name: 'Annunciation (Tsinset)',
    geezName: 'ብስራት',
    ethiopianMonth: 7,
    ethiopianDay: 29,
    significance:
      'Gabriel’s announcement to Mary — the day of God’s Incarnation. The liturgy reads Isaiah and Luke; icons of the Annunciation are honored.',
    relaxesWeeklyFast: true,
  },
  {
    id: 'christmas',
    name: 'Nativity (Lidet)',
    geezName: 'ልደት',
    ethiopianMonth: 4,
    ethiopianDay: 29,
    significance:
      'Birth of Christ — midnight Divine Liturgy, carols such as “Karisime,” and festive meals.',
    relaxesWeeklyFast: true,
  },
  {
    id: 'epiphany',
    name: 'Epiphany (Timkat)',
    geezName: 'ጥምቀት',
    ethiopianMonth: 5,
    ethiopianDay: 11,
    significance:
      'Baptism of Christ in the Jordan — vigils at water, blessing of water, and joyful processions.',
    relaxesWeeklyFast: true,
  },
  {
    id: 'st-michael',
    name: 'Feast of Archangel Michael',
    geezName: '',
    ethiopianMonth: 5,
    ethiopianDay: 12,
    significance:
      'Principal feast of St. Michael; the twelfth of each month also commemorates the archangels in many parish calendars.',
    relaxesWeeklyFast: true,
  },
  {
    id: 'st-gabriel',
    name: 'Saint Gabriel the Archangel',
    geezName: 'ገብርኤል',
    ethiopianMonth: 5,
    ethiopianDay: 19,
    significance:
      'Archangel of God’s messages — recalled at the Annunciation and in every Divine Liturgy. The nineteenth of each Ethiopian month is widely dedicated to St. Gabriel in many parish calendars.',
    relaxesWeeklyFast: false,
  },
  {
    id: 'meskel',
    name: 'Finding of the True Cross (Meskel)',
    geezName: 'መስቀል',
    ethiopianMonth: 1,
    ethiopianDay: 17,
    significance:
      'St. Helena’s finding of the Cross — Demera bonfires on the eve, cross veneration, and songs of joy.',
    relaxesWeeklyFast: true,
  },
  {
    id: 'transfiguration',
    name: 'Transfiguration (Debre Tabor)',
    geezName: '',
    ethiopianMonth: 12,
    ethiopianDay: 13,
    significance:
      'Christ’s glory on Mount Tabor — the Gospel of Matthew 17; grapes may be blessed in some areas; fast until mid-afternoon on the eve in some traditions.',
    relaxesWeeklyFast: true,
  },
  {
    id: 'filseta-start',
    name: 'Assumption of Mary (Filseta) — feast begins',
    geezName: 'ፍልሰታ',
    ethiopianMonth: 12,
    ethiopianDay: 16,
    significance:
      'Start of the sixteen-day feast of Mary’s Dormition — preceded by the Assumption fast (Nehase 1–15).',
    relaxesWeeklyFast: true,
  },
  {
    id: 'kidane-mehret',
    name: 'Kidane Mehret (Covenant of Mercy)',
    geezName: 'ኪዳነ ምሕረት',
    ethiopianMonth: 6,
    ethiopianDay: 16,
    significance:
      'Commemoration invoking Mary’s compassion and God’s mercy.',
    relaxesWeeklyFast: false,
  },
  {
    id: 'st-estifanos',
    name: 'Saint Stephen the Protomartyr (Estifanos)',
    geezName: 'እስጢፋኖስ',
    ethiopianMonth: 6,
    ethiopianDay: 17,
    significance:
      'First martyr for Christ — the deacon Stephen, full of faith and the Holy Spirit, whose witness the Church remembers with honor. The 17th of each Ethiopian month also recalls St. Stephen together with Abba Gerima in many parish calendars.',
    relaxesWeeklyFast: false,
  },
  {
    id: 'st-george',
    name: 'Saint George',
    geezName: 'ጊዮርጊስ',
    ethiopianMonth: 9,
    ethiopianDay: 23,
    significance:
      'Patron saint of Ethiopia — great celebrations especially at churches dedicated to St. George.',
    relaxesWeeklyFast: true,
  },
  {
    id: 'st-tekle-haymanot',
    name: 'Saint Tekle Haymanot',
    geezName: 'ተክለ ሃይማኖት',
    ethiopianMonth: 9,
    ethiopianDay: 24,
    significance:
      'Great Ethiopian monastic father and teacher — zeal for prayer, ascetic life, and the Gospel. The 24th of each Ethiopian month is widely dedicated to Abune Tekle Haymanot together with the twenty-four heavenly priests in many parish calendars.',
    relaxesWeeklyFast: false,
  },
]

/**
 * Major fasting seasons — ranges and copy from research doc.
 * Moveable windows (Great Lent, Nineveh, Apostles) are computed in liturgicalCalendar.js.
 */
export const FASTING_SEASON_DEFINITIONS = [
  {
    id: 'weekly',
    name: 'Wednesday and Friday fast',
    lengthDescription: 'Each week',
    ethiopianRangeSummary: 'Every Wednesday and Friday',
    explanation:
      'The Ethiopian Orthodox Church fasts each Wednesday (betrayal of Christ) and Friday (crucifixion): no meat, dairy, or alcohol on Wednesday; stricter abstinence including oil on Friday, except during great feasts or Pascha week. This is the basic weekly rhythm for laity alongside seasonal fasts.',
  },
  {
    id: 'great-lent',
    name: 'Great Lent (Hudade Tsom)',
    lengthDescription: '55 days before Easter',
    ethiopianRangeSummary: 'Moveable — ends Holy Saturday before Fasika',
    explanation:
      'The longest fast, recalling Christ’s fast in the wilderness. Liturgy adds penitential hymns; many faithful keep one meal after mid-afternoon, without animal products or oil. Dates follow Orthodox Pascha each year.',
    computed: 'greatLent',
  },
  {
    id: 'nineveh',
    name: 'Fast of Nineveh (Tsome Nebiyat)',
    lengthDescription: 'Three days (Monday–Wednesday)',
    ethiopianRangeSummary: 'Third week before Lent (moveable)',
    explanation:
      'Commemorates Jonah’s fast. Observed as three days in the week before Lent intensifies; exact alignment varies — confirm with your parish calendar.',
    computed: 'ninevehApprox',
  },
  {
    id: 'filseta-fast',
    name: 'Assumption fast (Filseta Tsom)',
    lengthDescription: 'Sixteen days',
    ethiopianRangeSummary: 'Nehase 1 – Nehase 15',
    explanation:
      'Prepares for the feast of Mary’s Dormition (Filseta), with special prayers each day; often stricter for clergy and devoted laity.',
    computed: 'filsetaFast',
  },
  {
    id: 'advent',
    name: 'Advent before Nativity (Sibket / Kisqum)',
    lengthDescription: 'Forty days of preparation (traditional reckoning)',
    ethiopianRangeSummary: 'Tahsas 15 – Tahsas 29 (per common Ethiopian reckoning)',
    explanation:
      'Season of preparation before Christmas (Lidet), similar in spirit to Western Advent. The Church calls hearts to repentance before the Nativity.',
    computed: 'advent',
  },
  {
    id: 'cross-fast',
    name: 'Fast of the Cross (before Meskel)',
    lengthDescription: 'Three days',
    ethiopianRangeSummary: 'Meskerem 14 – Meskerem 16',
    explanation:
      'Short fast before the feast of the Finding of the True Cross (Meskel).',
    computed: 'crossFast',
  },
  {
    id: 'apostles',
    name: 'Fast of the Apostles',
    lengthDescription: 'Variable (often about two weeks to forty days)',
    ethiopianRangeSummary: 'After Pentecost — length varies by year and tradition',
    explanation:
      'Follows the apostolic custom after Pentecost until the feast of Saints Peter and Paul; duration varies — always confirm with an official church calendar.',
    computed: 'apostlesApprox',
  },
]

/** Site copy blocks */
export const CALENDAR_INTRO = {
  homeLead:
    'We walk with two ways of counting days: the civil calendar around us and the Church’s Ethiopian calendar — dates, feasts, fasts, and each weekday’s spiritual theme — always alongside your priest’s guidance.',
  homeGregorianNote:
    'What you see here is a gentle aid: Ethiopian date, fasting context, and the day’s church mood. Confirm every strict fast, feast, and local custom with your spiritual father and the calendar your diocese approves.',
  todayFooter:
    'Full commemorations for each day come from the Senksar (synaxarion) and parish books. This page highlights the weekly theme and major fixed feasts; moveable feasts follow Orthodox Pascha.',
  upcomingHeading: 'Upcoming fixed feasts (Ethiopian dates)',
  thisWeekHeading: 'This week’s rhythm',
}
