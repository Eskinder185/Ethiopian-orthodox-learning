/**
 * Teachings & Sacraments page — orientation for beginners.
 * Paraphrases Ethiopian Orthodox Tewahedo teaching; confirm with your priest.
 */

import { paths } from '../constants/paths.js'

export const teachingsSacramentsMeta = {
  category: 'Learn · Teachings',
  title: 'Teachings and Sacraments',
}

export const teachingsSacramentsHero = {
  eyebrow: 'Ethiopian Orthodox Tewahedo Church',
  lead:
    'The Church receives God’s grace through holy mysteries (sacraments): outward signs that convey the life of Christ. This page introduces the seven sacraments in plain language — a map for prayer and parish life, not a substitute for your spiritual father.',
}

/** Seven sacraments — order matches grid and table */
export const teachingsSacraments = [
  {
    id: 'baptism',
    icon: 'baptism',
    name: 'Baptism',
    shortDesc: 'New birth in water and the Holy Name — the door of the Church.',
    summary:
      'In triple immersion in the name of the Father, Son, and Holy Spirit, the believer dies and rises with Christ, is forgiven, and is joined to His Body.',
    visibleSign: 'Immersion in water while the priest invokes the Holy Trinity.',
    spiritualMeaning: 'Rebirth, forgiveness of sin, incorporation into Christ and the Church; the foundation for every other sacrament.',
    scripture: 'Matthew 28:19–20; John 3:5; Romans 6:3–4.',
    dailyLife: 'Remember your baptismal dignity: turn from sin, pray as God’s child, and prepare for the Eucharist under your priest’s care.',
    compare: {
      visibleSign: 'Water + Trinitarian invocation (triple immersion).',
      spiritualEffect: 'Forgiveness, new life in Christ, membership in the Church.',
      scripturalBasis: 'Great Commission; born of water and Spirit.',
      relatedPractice: 'Prayer · First confession before Communion · Church feasts of Theophany',
    },
  },
  {
    id: 'confirmation',
    icon: 'confirmation',
    name: 'Confirmation',
    shortDesc: 'The gift of the Spirit strengthening baptismal grace.',
    summary:
      'Holy chrism, consecrated by the hierarchy, seals the baptized with the Holy Spirit — strengthening, enlightening, and completing what Baptism began.',
    visibleSign: 'Anointing with holy myron (chrism), often with prayer and the laying on of hands.',
    spiritualMeaning: 'The Spirit who rested on Christ now confirms the faithful for witness, virtue, and growth in the life of grace.',
    scripture: 'Acts 8:14–17; 2 Corinthians 1:21–22.',
    dailyLife: 'Call on the Spirit in temptation; seek the virtues; read Scripture and stand with the Church in worship.',
    compare: {
      visibleSign: 'Anointing with chrism (and laying on of hands).',
      spiritualEffect: 'Full outpouring of the Spirit; strength for Christian life.',
      scripturalBasis: 'Apostles prayed for the Spirit after baptism.',
      relatedPractice: 'Liturgy · Participation in parish life',
    },
  },
  {
    id: 'eucharist',
    icon: 'eucharist',
    name: 'Holy Eucharist',
    shortDesc: 'The true Body and Blood of Christ — food of immortality.',
    summary:
      'Bread and wine become Christ’s Body and Blood: the Passover fulfilled, the sacrifice of the Cross made present, and communion with God and the Church.',
    visibleSign: 'Consecrated bread and wine, received in Holy Communion after preparation and blessing.',
    spiritualMeaning: 'Union with Christ, forgiveness, abiding in Him, and fellowship with the saints — the crown of worship.',
    scripture: 'John 6; Matthew 26:26–28; 1 Corinthians 10–11.',
    dailyLife: 'Fast and confess as your priest directs; receive with fear of God and love; let the Eucharist shape your week.',
    compare: {
      visibleSign: 'Bread and wine after consecration in the Divine Liturgy.',
      spiritualEffect: 'Union with Christ; life and forgiveness; bond with the Church.',
      scripturalBasis: 'Institution narratives; “Unless you eat the flesh…”',
      relatedPractice: 'Liturgy page · Prayer · Fasting calendar',
    },
  },
  {
    id: 'penance',
    icon: 'penance',
    name: 'Penance',
    shortDesc: 'Return to God through repentance and absolution.',
    summary:
      'Christ gave His ministers authority to forgive sins. The repentant confesses with sorrow and purpose of amendment and hears words of absolution.',
    visibleSign: 'Confession to a priest and prayer of absolution (and assigned penance).',
    spiritualMeaning: 'Restoration of grace and peace with God after serious sin; healing of the soul.',
    scripture: 'John 20:21–23; Matthew 16:19; James 5:16; 1 John 1:9.',
    dailyLife: 'Examine your conscience; confess regularly as guided; reconcile with others when possible.',
    compare: {
      visibleSign: 'Oral confession + priestly absolution.',
      spiritualEffect: 'Forgiveness of sins; restoration of grace.',
      scripturalBasis: 'Keys of the kingdom; “Whose sins you forgive…”',
      relatedPractice: 'Prayer · Preparation for Communion',
    },
  },
  {
    id: 'unction',
    icon: 'unction',
    name: 'Holy Unction',
    shortDesc: 'Prayer and oil for the sick — soul and body.',
    summary:
      'The Church anoints with blessed oil and prays for healing and forgiveness, following the command of James and the practice of the apostles.',
    visibleSign: 'Anointing with oil blessed by the Church, with prayers for the sick.',
    spiritualMeaning: 'Christ’s compassion for the suffering; grace to endure, heal, or prepare for passage in peace.',
    scripture: 'James 5:14–15; Mark 6:13.',
    dailyLife: 'Pray for the sick; ask your priest when illness is serious; unite suffering with Christ.',
    compare: {
      visibleSign: 'Oil of anointing + prayer of the Church.',
      spiritualEffect: 'Healing, strength, forgiveness; not only “last rites.”',
      scripturalBasis: 'Elders of the church anoint and pray.',
      relatedPractice: 'Intercession · Parish prayer lists',
    },
  },
  {
    id: 'matrimony',
    icon: 'matrimony',
    name: 'Holy Matrimony',
    shortDesc: 'Grace for one flesh in Christ — the domestic church.',
    summary:
      'Man and woman enter a bond blessed by the Church: mutual help, holiness, and openness to children according to God’s design.',
    visibleSign: 'Consent before the Church, priestly blessing, crowning or local customary rites as approved.',
    spiritualMeaning: 'Sanctification of love; image of Christ and the Church; grace for fidelity and family prayer.',
    scripture: 'Genesis 2:24; Ephesians 5:25–32; John 2:1–11.',
    dailyLife: 'Guard unity; pray at home; raise children in the faith; seek counsel in hardship.',
    compare: {
      visibleSign: 'Nuptial blessing in the Church; mutual vows.',
      spiritualEffect: 'Grace for the bond; help toward holiness.',
      scripturalBasis: 'From creation; blessed at Cana.',
      relatedPractice: 'Church calendar · Family feasts',
    },
  },
  {
    id: 'holy-orders',
    icon: 'holyOrders',
    name: 'Holy Orders',
    shortDesc: 'Deacon, priest, and bishop — servants of the altar.',
    summary:
      'Christ continues His mission through ordained ministers: those set apart to preach, sanctify, and govern in apostolic succession.',
    visibleSign: 'Laying on of hands and prayer of ordination by a bishop.',
    spiritualMeaning: 'Configuration to Christ the High Priest and Shepherd; sacramental power to serve God’s people.',
    scripture: 'Acts 6:6; 1 Timothy 4:14; 2 Timothy 1:6.',
    dailyLife: 'Honor your clergy; pray for vocations; receive teaching and sacraments through the Church’s ministers.',
    compare: {
      visibleSign: 'Laying on of hands + episcopal prayer.',
      spiritualEffect: 'Sacred character; authority to serve in Holy Orders.',
      scripturalBasis: 'Apostles ordained successors.',
      relatedPractice: 'Liturgy · Teachings · Parish life',
    },
  },
]

export const teachingsSacramentsSections = {
  gridTitle: 'The seven holy mysteries',
  gridLead: 'Each mystery is a meeting place: God touches us through matter, word, and prayer. Select a card to read more below.',
  spotlightTitle: 'Sacraments in depth',
  spotlightLead: 'Short summaries for study alongside your priest and parish.',
  tableTitle: 'At a glance',
  tableLead: 'Compare how each sacrament speaks through sign, grace, and Scripture.',
  relatedTitle: 'Continue on OrthodoxPath',
  relatedLead: 'Teachings connect to prayer, worship, and the rhythm of the Church year.',
  mediaTitle: 'Media and context',
  mediaLead: 'Space reserved for careful catechesis — video, audio, and liturgical notes when available.',
}

export const teachingsSacramentsRelated = [
  {
    to: paths.practice.prayer,
    title: 'Prayer practice',
    blurb: 'Build habits of daily prayer that support sacramental life.',
  },
  {
    to: paths.learn.liturgy,
    title: 'Liturgy',
    blurb: 'See where Baptism and Eucharist unfold in the Divine Liturgy.',
  },
  {
    to: paths.calendar.index,
    title: 'Calendar',
    blurb: 'Feasts, fasts, and holy days shape preparation and thanksgiving.',
  },
  {
    to: paths.learn.churchLifeHistory,
    title: 'Church life & history',
    blurb: 'How community, monasticism, and tradition carry the faith.',
  },
]

export const teachingsSacramentsMedia = [
  {
    id: 'video',
    imageKey: 'teachings.mediaVideo',
    title: 'Short video introduction',
    body: 'A calm walkthrough of the seven sacraments — for newcomers and families. Recording in preparation.',
    tag: 'Video',
  },
  {
    id: 'audio',
    imageKey: 'teachings.mediaAudio',
    title: 'Audio teaching',
    body: 'Listen-friendly summaries you can revisit — ideal for commute or rest. Content forthcoming.',
    tag: 'Audio',
  },
  {
    id: 'liturgy',
    imageKey: 'teachings.mediaLiturgy',
    title: 'Liturgical context',
    body: 'How the mysteries appear in Ethiopian Orthodox worship — Qidase, feasts, and pastoral practice. Links will point to approved sources.',
    tag: 'Liturgy',
  },
]

export const teachingsSacramentsFooter = {
  notes: [
    'This page summarizes church teaching for beginners; wording is simplified. For moral or sacramental decisions, obey your bishop and spiritual father.',
    'Formulations and pastoral practice can vary in detail; your parish calendar and priest remain authoritative.',
  ],
}
