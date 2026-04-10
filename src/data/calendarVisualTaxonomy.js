/**
 * Liturgical visual taxonomy — categories and feast → category rules.
 * Shared by calendarVisualCatalog, calendarVisualSystem, and UI.
 */

/** UI category keys for icons, badges, and card accents */
export const CAL_VISUAL_CATEGORIES = {
  saint: {
    id: 'saint',
    label: 'Saint',
    icon: '✠',
    badgeClass: 'cal-cat-badge--saint',
    cardClass: 'cal-cat-card--saint',
    patternClass: 'cal-cat-pattern--saint',
  },
  angel: {
    id: 'angel',
    label: 'Angels',
    icon: '◇',
    badgeClass: 'cal-cat-badge--angel',
    cardClass: 'cal-cat-card--angel',
    patternClass: 'cal-cat-pattern--angel',
  },
  martyr: {
    id: 'martyr',
    label: 'Martyr',
    icon: '✶',
    badgeClass: 'cal-cat-badge--martyr',
    cardClass: 'cal-cat-card--martyr',
    patternClass: 'cal-cat-pattern--martyr',
  },
  apostle: {
    id: 'apostle',
    label: 'Apostle',
    icon: '✚',
    badgeClass: 'cal-cat-badge--apostle',
    cardClass: 'cal-cat-card--apostle',
    patternClass: 'cal-cat-pattern--apostle',
  },
  marian: {
    id: 'marian',
    label: 'Marian',
    icon: '☩',
    badgeClass: 'cal-cat-badge--marian',
    cardClass: 'cal-cat-card--marian',
    patternClass: 'cal-cat-pattern--marian',
  },
  christ: {
    id: 'christ',
    label: 'Christ',
    icon: '☧',
    badgeClass: 'cal-cat-badge--christ',
    cardClass: 'cal-cat-card--christ',
    patternClass: 'cal-cat-pattern--christ',
  },
  cross: {
    id: 'cross',
    label: 'Cross',
    icon: '✛',
    badgeClass: 'cal-cat-badge--cross',
    cardClass: 'cal-cat-card--cross',
    patternClass: 'cal-cat-pattern--cross',
  },
  fasting: {
    id: 'fasting',
    label: 'Fasting',
    icon: '◇',
    badgeClass: 'cal-cat-badge--fasting',
    cardClass: 'cal-cat-card--fasting',
    patternClass: 'cal-cat-pattern--fasting',
  },
  resurrection: {
    id: 'resurrection',
    label: 'Resurrection',
    icon: '✦',
    badgeClass: 'cal-cat-badge--resurrection',
    cardClass: 'cal-cat-card--resurrection',
    patternClass: 'cal-cat-pattern--resurrection',
  },
  holiday: {
    id: 'holiday',
    label: 'Great feast',
    icon: '✦',
    badgeClass: 'cal-cat-badge--holiday',
    cardClass: 'cal-cat-card--holiday',
    patternClass: 'cal-cat-pattern--holiday',
  },
  churchMonth: {
    id: 'churchMonth',
    label: 'Church year',
    icon: '◎',
    badgeClass: 'cal-cat-badge--church-month',
    cardClass: 'cal-cat-card--church-month',
    patternClass: 'cal-cat-pattern--church-month',
  },
  prophet: {
    id: 'prophet',
    label: 'Prophets',
    icon: '☩',
    badgeClass: 'cal-cat-badge--prophet',
    cardClass: 'cal-cat-card--prophet',
    patternClass: 'cal-cat-pattern--prophet',
  },
}

export function categorizeFeast(feast) {
  if (!feast?.id) return 'holiday'
  if (feast.moveable) {
    if (feast.id === 'pascha') return 'resurrection'
    if (feast.id === 'good-friday') return 'cross'
    if (feast.id === 'ascension' || feast.id === 'pentecost') return 'christ'
    if (feast.id === 'hosanna') return 'holiday'
  }
  switch (feast.id) {
    case 'st-michael':
    case 'st-gabriel':
      return 'angel'
    case 'st-george':
      return 'saint'
    case 'st-estifanos':
      return 'martyr'
    case 'annunciation':
    case 'filseta-start':
    case 'kidane-mehret':
      return 'marian'
    case 'christmas':
    case 'epiphany':
    case 'transfiguration':
      return 'christ'
    case 'meskel':
      return 'cross'
    default:
      return 'saint'
  }
}
