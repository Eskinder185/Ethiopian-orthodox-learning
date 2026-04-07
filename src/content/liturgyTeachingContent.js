/**
 * Sunday liturgy beginner teaching — structure and themes drawn from
 * The Liturgy of the Ethiopian Church (English; Ethiopian Orthodox Church),
 * especially the Preparatory Service and Anaphora flow; parish customs
 * (dress, netela, shoes, standing) are stated as local church guidance.
 */

export const liturgySourceNote =
  'This page summarizes the Divine Liturgy (Qedase / Qidase) using the English edition of The Liturgy of the Ethiopian Church (trans. Marcos Daoud, revised; Ethiopian Orthodox Church) as the main guide to order and meaning. It adds practical expectations common in Ethiopian Orthodox parishes. Always follow your priest and your parish.'

export const hero = {
  title: 'Sunday morning liturgy',
  subtitle: 'A gentle guide for worship in the Ethiopian Orthodox Tewahedo Church',
  lead: [
    'Sunday morning in an Ethiopian Orthodox church is centered on the **Divine Liturgy** — the **Qedase** / **Qedasi** (also written **Qidase**): the holy offering of thanksgiving that reaches its height in the **Anaphora** and, for those who are prepared, in **Holy Communion**.',
    'The liturgy is not a performance to watch from a distance. It is a **holy encounter with God**. The Church asks you to bring **prayer**, **reverence**, **repentance**, and **steady attention** — heart and body together — as Christ is praised and fed to His people in the mystery of His Body and Blood.',
  ],
}

export const noticeBoxes = {
  firstTime: {
    title: 'First time at liturgy?',
    text: 'You do not need to know every word. Come modestly, stand where the church custom places you, listen, and pray inwardly. Introduce yourself to a priest or trusted member after the service when it is appropriate — they can answer questions about your parish’s customs.',
  },
  beforeEnter: {
    title: 'Before you enter',
    text: 'The church is holy ground. Pause, quiet your heart, and enter as someone meeting the King of heaven — not as if entering a casual hall.',
  },
  beforeCommunion: {
    title: 'Before Holy Communion',
    text: 'Communion is the Lord’s own Gift. Receive only when the Church has prepared you (baptism, fasting as directed, confession when required) and your priest gives blessing. If you are not receiving, stay in prayerful respect while others commune.',
  },
  duringService: {
    title: 'During the service',
    text: 'Let the **deacon’s** calls (“Arise for prayer,” “Give heed,” etc.) remind you to **stand**, **listen**, and **answer** with the people. When Scripture or the Gospel is read, keep **silence and awe** except for the responses the book prescribes.',
  },
}

export const beforeYouEnter = {
  title: 'Before you enter',
  summary:
    'How you arrive shapes how you pray. These habits honor God, the saints, and the holy place where the **Tabot** (the Ark — the tablet of the covenant) rests on the altar as the heart of worship.',
  points: [
    {
      do: 'Prepare your heart quietly',
      why: 'The liturgy is prayer of the whole Body of Christ. A few moments of silence helps you turn from daily noise toward God.',
    },
    {
      do: 'Come prayerfully',
      why: 'You are joining the Church’s offering, not visiting a museum. Prayerful arrival matches the faith of the service.',
    },
    {
      do: 'Dress modestly',
      why: 'Modest clothing shows respect for God and for others; it fits the **reverence and order** of Orthodox worship.',
    },
    {
      do: 'Wear a netela (white scarf or shawl)',
      why: 'The **netela** is part of **respectful church dress** in Ethiopian Orthodox tradition — a visible sign of humility and honor in God’s house.',
    },
    {
      do: 'Remove your shoes before entering',
      why: 'As on holy ground, **shoes are not worn in church** in Ethiopian Orthodox practice. This follows the spirit of Moses at the burning bush and honors the sanctuary.',
    },
    {
      do: 'Avoid loud or casual talking',
      why: 'Conversation can wait. Quiet helps everyone pray and hears the deacon and priest clearly.',
    },
    {
      do: 'Enter with reverence',
      why: 'You step into the place where heaven and earth meet in the mysteries. **Reverence** is the right posture of soul and body.',
    },
    {
      do: 'Remember: the church is holy space',
      why: 'The building is set apart for worship, teaching, and the sacraments. Treat it as the **house of God**, not an ordinary room.',
    },
  ],
}

export const sundayQuickGuide = {
  title: 'Sunday morning quick guide',
  summary: 'A short list you can remember in one glance.',
  items: [
    'Arrive reverently; quiet your heart before the door.',
    'Remove your shoes before entering.',
    'Wear **netela** and modest clothing.',
    'Stand with **men on the left** and **women on the right** (parish custom).',
    'Listen carefully; follow deacon and priest.',
    'Join responses and prayers as you are able.',
    'Stay **attentive**; avoid wandering attention or casual behavior.',
    'At the **Creed**, confess the faith of the Church with the people.',
    'At the **holy salutation / peace**, exchange peace **as the Church directs** (often men with men, women with women).',
    'Approach **Holy Communion** only if you are **prepared** and **permitted** by the Church and your spiritual father.',
    'Remain **prayerful** through the thanksgiving and **final blessing**.',
  ],
}

export const liturgySteps = [
  {
    id: 'approach',
    title: 'Approaching and entering the church',
    whatHappens:
      'You come to the church door already prayerful. You remove your shoes, adjust your netela and clothing, and enter without treating the space like an ordinary building.',
    whyItMatters:
      'The Ethiopian tradition sees the church as **holy ground**. Entering this way matches the **fear of God** and **love** that the liturgy itself asks for.',
    clergyDoes:
      'Priests and deacons may already be offering prayers of penitence and preparation (including the **Prayer of Penitence** and psalms) as the service begins — especially in the **Preparatory Service** before the people hear every part.',
    congregationDoes:
      'Enter quietly, bless yourself if that is your custom, take your place (**men left, women right** unless your parish instructs otherwise), and stand ready to pray.',
  },
  {
    id: 'preparatory',
    title: 'The preparatory service (Word and offering prepared)',
    whatHappens:
      'The **Preparatory Service** (in several parts in the book) prepares bread and wine, the **altar**, the **ark (Tabot)**, and the people’s hearts. There are psalms, prayers for the **Holy Spirit**, blessings of vessels, **incense**, intercessions, and teaching exhortations — for example, reminders to **think of your sins**, **stay in the church**, and **not wander in attention** while the priest prays for you.',
    whyItMatters:
      'The Church does not rush to Communion. She **cleanses**, **teaches**, and **gathers** the assembly so the Eucharist is received **with fear and love**, not carelessness.',
    clergyDoes:
      'Priests (and deacons, according to the rubrics) offer prayers over paten, chalice, coverings, **incense**, and the people; they may process with the holy gifts, chant psalms, and lead absolutions and blessings.',
    congregationDoes:
      '**Listen**, **respond** (“Lord, have mercy,” “And with your spirit,” **Kyrie eleison**, Amen, etc.), **bow** or **prostrate** when directed, and **keep your mind in the church** — as the book exhorts: do not separate your attention from the priest who intercedes for you.',
  },
  {
    id: 'incense',
    title: 'Incense and honor to the holy things',
    whatHappens:
      '**Incense** rises as prayer. The priest may cense the altar, the holy Gospel, and the quarters of the church — a sign of honor to God and sanctification of the place.',
    whyItMatters:
      'Incense carries the biblical image of **prayer ascending** (cf. Psalm 141 / 140 LXX). It marks moments as **sacred** and calls the senses to attention.',
    clergyDoes:
      'The celebrant (and ministers) offer incense with prayers — for example, censing the altar and, at the Gospel, processing with the Gospel **with reverence**.',
    congregationDoes:
      'Stand in **reverence**, follow the movement with prayerful eyes and heart, and avoid distraction.',
  },
  {
    id: 'scripture',
    title: 'Scripture readings (Epistles, Acts, and the pattern of the Word)',
    whatHappens:
      'The Church reads the **Word of God** — in Ethiopian practice this includes the deep treasury of **Old and New Testament** readings (the exact list follows the day and season). The faithful hear **apostolic teaching** and **prophetic** texts woven into the preparatory prayers.',
    whyItMatters:
      'Faith comes by hearing. The liturgy **grounds** the offering of the Eucharist in **what God has spoken** and **what Christ fulfilled**.',
    clergyDoes:
      'Readers and clergy proclaim the readings; deacons may call the people to attention.',
    congregationDoes:
      '**Listen** as to Christ; **stand** as custom directs; **respond** where the rite asks; do not treat readings as background noise.',
  },
  {
    id: 'gospel',
    title: 'The Holy Gospel',
    whatHappens:
      'The deacon invites all to **hearken to the holy Gospel**. The priest blesses the four quarters; **incense** is offered; the Gospel book is greeted and carried with honor; the **Gospel is read** facing east. The book teaches: at the time of **Qedase**, for the Gospel there should be **silence and awe** except for praise and the prescribed responses — **how much more**, it asks, than at the reading of an earthly king’s message?',
    whyItMatters:
      'Here the Church hears **Christ Himself** through the evangelist. **Attention** is an act of love.',
    clergyDoes:
      'The priest (or deacon, as rubrics direct) reads the Gospel; clergy and people **greet** the Gospel with honor.',
    congregationDoes:
      'Maintain **silence and awe**; join the **acclamations**; the tradition directs that when saluting the Gospel you **uncover your head** if you are able — at least at this moment. **Greet the Gospel** with faith (“We believe in the word of the holy gospel,” in the rite).',
  },
  {
    id: 'catechumens',
    title: '“Go forth, ye catechumens” — closing the first assembly',
    whatHappens:
      'Historically the Church dismissed those not yet fully initiated (**catechumens**) before the holy mysteries of the Eucharist were offered. In the book, the deacon says **“Go forth, ye catechumens”**; what follows leads into the deepest prayers of the **faithful**.',
    whyItMatters:
      'This marks a **turn** from the **catechumenal hearing of the Word** toward the **mystery of the faithful** — the awesome **Anaphora** and Communion. Even when everyone present is baptized, the rite **reminds** us that the Eucharist is **not casual**.',
    clergyDoes:
      'The priest enters the temple with prayers (e.g. **St. Basil**); deacons give litanies; the Church prays for peace, hierarchy, and the world.',
    congregationDoes:
      'Remain **standing**, **praying**, **answering**; understand that what follows is **more holy** and demands **greater purity of heart**.',
  },
  {
    id: 'creed',
    title: 'The Creed (faith of the Church)',
    whatHappens:
      'The people confess the **Creed** — in the Apostles’ form for the **Anaphora of the Apostles**, or the **Nicene** Creed in other anaphoras (as the priest’s book directs). This is the **faith of the universal apostolic Church**.',
    whyItMatters:
      'We offer the sacrifice **in truth**. Confessing the Creed **unites** us with the **Orthodox** faith handed from the apostles and fathers.',
    clergyDoes:
      'The priest leads; deacons may prompt “Let us all say…”',
    congregationDoes:
      'Say the Creed **with** the Church — **mindfully**, not mechanically. This is your **“Amen”** to God’s revelation.',
  },
  {
    id: 'peace',
    title: 'Peace and the holy salutation',
    whatHappens:
      'After prayers that **cleanse** from **envy, revenge, and wrongdoing**, the deacon calls the faithful to **pray for perfect peace and love** and to **salute one another with a holy salutation**. In the rubric: **priests salute priests**, **deacons salute deacons**, **men salute men**, **women salute women**.',
    whyItMatters:
      'You cannot approach the **altar of reconciliation** while clinging to hatred. **Peace with brethren** fits the **peace of Christ** offered in the Eucharist.',
    clergyDoes:
      'The priest prays (e.g. **Prayer of Salutation** of St. Basil); clergy exchange the salutation in order.',
    congregationDoes:
      'Join the prayer **“Christ our God, make us ready…”**; offer the **holy salutation** **modestly** and **according to order**; then prepare in heart for the **Anaphora**.',
  },
  {
    id: 'anaphora',
    title: 'The Anaphora (Qedase — the holy offering)',
    whatHappens:
      'The **Anaphora** is the Eucharistic prayer proper. The Ethiopian Church preserves **many anaphoras** (the book lists those of the Apostles, the Lord, St. Mary, St. Basil, St. Gregory, and others). The priest gives thanks; the people answer **“It is right, it is just”**; hearts are lifted; the **institution narrative**, **epiclesis** (calling of the **Holy Spirit**), intercessions, and **preparation for Communion** unfold.',
    whyItMatters:
      'Here the Church asks the Father to make the bread and wine the **true Body and Blood** of Christ — **life**, **forgiveness**, and **union** with God.',
    clergyDoes:
      'The celebrant prays aloud and in secret as the rite prescribes; deacons give **litanies** (“Let us stand well,” “Worship the Lord with fear,” etc.).',
    congregationDoes:
      '**Stand** in **fear and love**; **answer** the dialogues; **worship**; **do not chatter** or treat this as ordinary time.',
  },
  {
    id: 'communion',
    title: 'Holy Communion (Holy Qurbān)',
    whatHappens:
      'Those **worthy** and **permitted** receive the **Body** and **Blood** with preparation prayers. The order is **by rank**, then **men**, then **women**; **infants baptized** may receive before other faithful as the book describes. The faithful consume **reverently**, in **fear and trembling**, without noise, following the prayers given in the liturgy.',
    whyItMatters:
      'This is **not symbol only** but the **holy mystery** of Christ’s **Flesh and Blood** for **eternal life** — as the Lord taught (John 6).',
    clergyDoes:
      'The priest **distributes** the holy gifts; he has **washed his hands** and **warned** the unprepared; he communes the clergy and people **according to order**.',
    congregationDoes:
      'If you are **not** prepared, **do not approach**. If you are **prepared** and **blessed**, receive as the Church teaches — **fasting** as required, **confession** when required, and **obedience** to your spiritual father. After receiving, **thank God** in silence according to the prayers.',
  },
  {
    id: 'thanksgiving',
    title: 'Thanksgiving after Communion',
    whatHappens:
      'Prayers of **thanksgiving** follow communion — praise for the **gift** received and petitions for **perseverance**.',
    whyItMatters:
      'Grace received should **bear fruit** in a **grateful** life.',
    clergyDoes:
      'The priest leads the concluding prayers of the anaphora and thanksgiving.',
    congregationDoes:
      'Remain **reverent**; join **Amens** and final hymns as directed.',
  },
  {
    id: 'dismissal',
    title: 'Final blessing and dismissal',
    whatHappens:
      'The service ends with **blessing** and **dismissal**. The book warns: **let no one leave** the church before **Communion** (if communing), **the priest’s benediction**, and **dismissal** — except for **urgent need**.',
    whyItMatters:
      'The **whole** liturgy is one ascent to God; leaving early without grave reason **breaks** the Church’s **wholeness** and **discipline**.',
    clergyDoes:
      'The priest blesses the people and sends them forth in peace.',
    congregationDoes:
      'Stay until the **proper end**; receive the **blessing** with **bow** or **cross** as custom allows; leave **quietly** and **gratefully**.',
  },
]

export const participateWell = {
  title: 'How to participate well',
  summary:
    'God sees the heart — and the Church still asks your **body** and **attention** to join the prayer of the whole people.',
  points: [
    '**Stand** attentively when the service calls for standing; it is part of **offering** yourself with Christ.',
    '**Listen** to Scripture and the Gospel as to **Christ speaking**; let the words **sink in**.',
    'When your mind **wanders**, gently **return** to the **Lord** — a word of the prayer, an icon, the **incense**, the **chant**.',
    '**Avoid leaving** during the service except for **real necessity**; the liturgy is **one** prayer from entrance to dismissal.',
    '**Answer** the deacon and priest **clearly** when the people respond — you are part of the **choir of the faithful**.',
    'Keep **silence** except for **ordered** praise and response; **silence** at the Gospel is especially **holy**.',
    'Stay **spiritually engaged**: you may not know every Ge‘ez phrase, but you **can** offer **reverence**, **love**, and **repentance**.',
  ],
}

export const understandingMeaning = {
  title: 'Understanding the meaning of the liturgy',
  summary: 'Why Sunday Qedase is at the center of Ethiopian Orthodox life.',
  paragraphs: [
    'Archbishop Yesehaq’s introduction to the English liturgy book teaches that the Ethiopian Church has always regarded the **Eucharistic Liturgy** as the **supreme act of communal worship**. Through it, believers are united with the **Living Lord** in the **holy Qurbān** — the **true Communion**, not merely a memory of the manna in the desert.',
    'The liturgy is **more than ritual** if by “ritual” we mean empty habit. Every **gesture**, **prayer**, and **reading** is soaked in **Scripture**, **patristic faith**, and **apostolic order**. It **shapes** the soul to **receive** God.',
    '**Preparation** matters because **God is holy** and we are **being healed**. The long **preparatory** prayers, **psalms**, and **warnings** exist to **awaken** repentance and **sober joy**.',
    '**Repentance** matters because we approach **fire** that **consumes** sin and **gives** life. The priest’s **admonitions** before Communion echo **St. Paul** (1 Corinthians 11) about **discerning** the Lord’s Body.',
    '**Participation** matters because the Church is **one Body**; your **Amen** and your **standing** are **yours** in Christ.',
    'The liturgy **leads** toward **Holy Communion** as toward the **wedding feast** of the Lamb — food for **eternal life** for those who **believe** and **live** in the Church.',
  ],
}

export const holyCommunionTeaching = {
  title: 'Holy Communion',
  summary: 'Sacred food; sacred responsibility.',
  paragraphs: [
    'Holy Communion is the **Body and Blood** of our Lord Jesus Christ — the **same** mystery He gave His disciples. The Ethiopian liturgy repeatedly calls communicants to **examine** themselves and to draw near **in purity**.',
    '**Do not approach casually.** The priest, following the book, **warns** those who keep **revenge**, **strange thoughts**, or **impurity** not to draw near. This is **love** — calling us to **truth** before we touch **fire**.',
    'Receive **only** when you are **baptized** into the Orthodox Church, **prepared** as your bishop and priest direct (**fasting**, **confession** when required, **peace** with others as far as it lies with you), and **blessed** to come.',
    '**Visitors** and **inquirers**: you are **honored** as guests of Christ in His house. **Stay** in prayer; **do not feel pressured** to commune. When God leads you to enter the **full life** of the Church through **baptism/chrismation** and **pastoral care**, Communion will come **in order**.',
    'If you are **not** communing, stand aside **prayerfully**; **do not judge** others; **pray** for the Church and for your own growth in faith.',
  ],
}

export const churchEtiquette = {
  title: 'Church etiquette and posture',
  summary: 'Small habits that support everyone’s prayer.',
  items: [
    '**Shoes**: removed **before** entering the church building.',
    '**Netela** and **modest** clothes: worn as **signs of honor** for God’s house.',
    '**Standing**: **Men** to the **left**, **women** to the **right** (standard Ethiopian Orthodox custom; confirm with your parish).',
    '**Silence** and **respect** during readings, especially the **Gospel**.',
    '**Following** the service: watch **clergy**, **deacons**, and **people** around you; **stand**, **bow**, or **prostrate** when they do (as you are able).',
    '**Words** you do not know: **listen** to the **tone** — praise, repentance, intercession — and **join** your **heart**.',
    '**Stay** until **blessing** and **dismissal** unless **urgent** need requires you to leave.',
    '**Blessing** at the end: receive with **gratitude** and **cross** yourself if that is your custom.',
  ],
}

export const learnMore = {
  title: 'Learn more (deeper structure)',
  summary: 'For when you already love the liturgy and want the map.',
  blocks: [
    {
      heading: 'Two great movements',
      body: 'In simple terms, the Sunday Eucharist has a **first** movement: **Word**, teaching, psalms, and preparation of hearts and gifts; and a **second** movement: **Eucharist** — the **Anaphora** and Communion. The dismissal of the **catechumens** (in the book) marks the **turn** from the first to the second.',
    },
    {
      heading: 'Preparatory Service (four chapters in the book)',
      body: 'The English edition divides **Preparatory Service** into **chapters** with psalms, prayers over vessels and **incense**, **oblation** prayers, **absolution**, and the road to the **Gospel**. The exact **length** you experience depends on parish practice and feasts.',
    },
    {
      heading: 'Many Anaphoras, one mystery',
      body: 'Ethiopia preserves **fourteen anaphoras** linked to apostolic and patristic names. The **Anaphora of the Apostles** is foundational; others are used on **saints’ days** and **feasts**. The **dialogues** (“Lift up your hearts,” “We have lifted them up…”) and the **sanctification** of the gifts follow the **ancient pattern** of the Church.',
    },
    {
      heading: 'Tabot',
      body: 'Every Ethiopian church has a **Tabot** — the **ark** on the altar — focal point of God’s **presence** among His people, in continuity with **Old Testament** holiness and **New Testament** fulfillment in Christ.',
    },
    {
      heading: 'Clergy-only actions',
      body: 'Consecrating the mysteries, certain **altar** prayers, and **distribution** of Communion belong to **ordained** ministers. Your **role** is **reverent** **participation**, **intercession** in heart, and **receiving** the **gifts** God gives **through** the Church.',
    },
  ],
}

export const faq = [
  {
    q: 'What should I wear to the liturgy?',
    a: '**Modest** clothing that covers the body appropriately, and a **netela** (white scarf/shawl) for respectful presentation in church. Ask someone from the parish if you are unsure.',
  },
  {
    q: 'Do I keep my shoes on?',
    a: '**No.** In Ethiopian Orthodox practice you **remove shoes** before entering the church, as on **holy ground**.',
  },
  {
    q: 'What is a netela and why wear it?',
    a: 'A **netela** is a traditional **white** cotton cloth worn over the shoulders or head. It shows **humility** and **respect** in God’s house and is part of **normal church dress** for women and often for men in Ethiopian tradition.',
  },
  {
    q: 'What if I do not know all the prayers?',
    a: '**Listen**, **stand** and **sit** (if ever used) as others do, join **Amen** and **Lord, have mercy** when you hear them, and **pray** inwardly. Over time, familiar phrases will stick.',
  },
  {
    q: 'Do I have to take Communion?',
    a: '**No one** should be **pressured**. Communion is for **baptized** Orthodox Christians who are **prepared** and **blessed** by the Church. Guests may **venerate** the service and **pray** without receiving.',
  },
  {
    q: 'Why do people stand so much?',
    a: 'Standing (when called for) is a **sign of alertness** and **honor** before God. It unites the **body** with **prayer**.',
  },
  {
    q: 'Why is the liturgy so solemn?',
    a: 'Because we are in the **presence** of the **Holy Trinity** and the **mysteries** of Christ. **Solemn joy** — not gloom — fits **awe**.',
  },
  {
    q: 'What should I do when the deacon speaks?',
    a: 'Treat his calls as **guides**: **stand**, **give heed**, **pray**. Answer with the **people** when they respond.',
  },
  {
    q: 'Where should I stand?',
    a: 'Usually **men on the left**, **women on the right** facing the altar. If your parish seats differently, **follow** the **mother church** there.',
  },
  {
    q: 'Can I leave early?',
    a: 'Only for **serious need**. The book teaches not to leave before **Communion** (if receiving), **benediction**, and **dismissal** except in **urgency**.',
  },
  {
    q: 'What is Qedase / Qidase?',
    a: 'The **Divine Liturgy** — the **holy offering** of the Eucharist, especially the **Anaphora** and Communion, in Ethiopian Orthodox worship.',
  },
  {
    q: 'What is the Tabot?',
    a: 'The **sacred tablet** on the altar — the **ark** of the covenant in **miniature** for each church — center of God’s **presence** in worship.',
  },
]

export const finalChecklist = {
  title: 'Very simple Sunday checklist',
  items: [
    'Heart: quiet for a minute before entering.',
    'Shoes: off.',
    'Netela: on.',
    'Place: men left, women right.',
    'Mouth: little talk; much prayer.',
    'Gospel: silence and awe.',
    'Communion: only if prepared and blessed.',
    'End: stay for blessing.',
  ],
}

export const pdfLink = {
  href: 'https://www.ethiopianorthodox.org/english/church/englishethiopianliturgy.pdf',
  label: 'Read the full English liturgy book (PDF)',
  description:
    'Explore the complete liturgy text for deeper study with your priest — not something you must read before your first visit.',
  supportIntro:
    'The guide above is for learning how Sunday liturgy works. This PDF is the full English text for careful reading when you are ready; it is not required before you attend.',
  buttonLabel: 'Open liturgy PDF',
}
