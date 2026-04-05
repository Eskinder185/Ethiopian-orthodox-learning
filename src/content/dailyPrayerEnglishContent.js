/**
 * English daily prayers — user-supplied text, preserved verbatim.
 * Organized for layout only; do not edit prayer wording here without source approval.
 */

export const dailyPrayerEnglishContent = {
  intro: {
    title: 'Pray with the Church',
    lead:
      'These prayers shape the day around praise, faith, and trust in God. Move at a calm pace: read aloud or quietly, and grow into longer sections as your priest or prayer book guides you.',
  },

  sourceNote:
    'Wording follows the English text you provided. Compare any edition with a prayer book or site your bishop or parish approves; titles and grouping here are for navigation only.',

  /** Compact overview cards (anchor targets for scanning). */
  overview: [
    {
      id: 'morning',
      anchor: 'prayer-morning',
      title: 'Morning Prayer',
      blurb:
        'The sign of the cross and a thanksgiving that turns the heart toward God at the start of the day.',
    },
    {
      id: 'lords',
      anchor: 'prayer-lords',
      title: 'The Lord’s Prayer',
      blurb:
        'The prayer Christ taught his disciples — the Church returns to it throughout the day.',
    },
    {
      id: 'marian',
      anchor: 'prayer-marian',
      title: 'Marian Prayer',
      blurb:
        'Honors the Mother of God in the spirit of the angel’s greeting and the Church’s praise.',
    },
    {
      id: 'faith',
      anchor: 'prayer-faith',
      title: 'Prayer of Faith',
      blurb:
        'A confession of the one holy faith — who God is and what we believe about Christ and the Spirit.',
    },
    {
      id: 'praises',
      anchor: 'prayer-praises',
      title: 'Praises / Bowing Prayers',
      blurb:
        'Holy, holy, holy; bows to the Trinity, the Cross, and the Theotokos; glory and thanks to God.',
    },
    {
      id: 'evening',
      anchor: 'prayer-evening',
      title: 'Evening Prayer',
      blurb:
        'The song of Mary — a song of God’s mercy and the hope of his people.',
    },
    {
      id: 'meals',
      anchor: 'prayer-meals',
      title: 'Before and After Meals',
      blurb:
        'Short blessings that sanctify food and give thanks. Use the exact form your community prints.',
    },
  ],

  beginnerRoutine: {
    title: 'Suggested beginner routine',
    lead:
      'A short path when you are learning. Add more from the full prayers below when you are ready.',
    steps: [
      'Sign of the cross, in the name of the Holy Trinity.',
      'Thanksgiving prayer (begin with the opening lines, then grow).',
      'The Lord’s Prayer.',
      'Marian prayer.',
      'A short praise or “Glory be” your booklet includes.',
    ],
  },

  /**
   * Expandable full-text sections. Paragraphs are display-only splits of the same continuous text.
   */
  prayerSections: [
    {
      id: 'morning',
      anchor: 'prayer-morning',
      panelTitle: 'Morning prayer — sign of the cross & thanksgiving',
      summary: 'Opening of the day: the cross, the Trinity, and thanksgiving.',
      defaultOpen: false,
      subsections: [
        {
          subtitle: 'Sign of the cross',
          paragraphs: [
            'I cross my face and all of myself by the sign of the cross. In the name of father, and son and the Holy Spirit one God AMEN. In the Holy Trinity believing and entrusting myself, I deny you satan in front of my mother the Holy Church, who is my witness, St. Mary Tsion forever. AMEN',
          ],
        },
        {
          subtitle: 'Thanksgiving',
          paragraphs: [
            'We thank you Oh Lord, and we glorify you, we praise. you Oh Lord, and we rely on you, we beg you and we beseech you. We worship you and we serve to your Holy name. We bow and kneel down to you; oh, you to whom all knees should bow and who all tongues serve. You are the God of gods and the Lord of lords and the king of kings. You are God to all flesh and to. all souls, and we call you as your Holy Son taught us saying “But when you pray you shall say”, Our Father who are in heaven …',
          ],
        },
      ],
    },
    {
      id: 'lords',
      anchor: 'prayer-lords',
      panelTitle: 'The Lord’s Prayer',
      summary: 'As our Lord taught us to pray.',
      defaultOpen: false,
      paragraphs: [
        'Our father who art in heaven, hollowed be they name, thy Kingdom come, thy will be done in earth as it is in heaven: give us this day our daily bread and forgive us our trespasses as we forgive them that trespass against us, and lead us not into temptation but deliver us and rescue us from all evil for thine is the kingdom, the power and the. Glory for even and ever. AMEN',
      ],
    },
    {
      id: 'marian',
      anchor: 'prayer-marian',
      panelTitle: 'Marian prayer',
      summary: 'Salutation and intercession through the Mother of God.',
      defaultOpen: false,
      paragraphs: [
        'By the Salutation of the Saint Angel Gabriel, O my Lady Mary I salute you, thou are Virgin in thought, and Virgin in body the Mother of God Tsabaot. (The Lord of Hosts) salutation to you. Blessed art thou, among women and blessed is the fruit of your womb. Rejoice thou who is hailed, O Graceful God is with you. Beseech and pray for our mercy to you beloved Son JESUS CHRIST that he may forgive us our sins. AMEN',
      ],
    },
    {
      id: 'faith',
      anchor: 'prayer-faith',
      panelTitle: 'Prayer of faith',
      summary: 'The confession of faith in the Holy Trinity and the Church.',
      defaultOpen: false,
      paragraphs: [
        'We believe in one God, the father Almighty, maker of heaven and earth, and all things visible and invisible and we believe in One Lord Jesus Christ the only begotten son of the Father who was with him before the creation of the World.',
        'Light from light, true God from true God, begotten not made of one essense with the Father. By whom all things were made, and without him was not anything in heaven or earth made.',
        'Who for us men and for our salvation came down from heaven was made man and was incarnate from the Holy Spirit and from the Holy Virgin Mary. Become man was crucified for our sakes in the days of Pontius Pilate suffered, died, was buried and rose from the dead on the third day as was written in the Holy Scriptures: Ascended in glory into heaven, sat at the right hand of his Father, and will come again in glory to judge the Living and the dead; there is no end to his reign.',
        'And we believe in the Holy Spirit, the life-giving God, who proceeded from the Father; we worship and glorify him with the Father, and the Son; who spoke by the prophets.',
        'And we believe in one baptism from the remission of sins, and walt for the resurrection from the dead and the life to come, world without end, AMEN.',
      ],
    },
    {
      id: 'praises',
      anchor: 'prayer-praises',
      panelTitle: 'Praises and bowing prayers',
      summary: 'Sanctus, bows to the Trinity, the Cross, and Mary; glory and peace.',
      defaultOpen: false,
      paragraphs: [
        'Holy, Holy, Holy God Tsabaot perfect Lord of Host, heaven and earth are full of the holiness of your Glory. We bow to you Christ, with your good heavenly Father and with your Holy Spirits the life Giver from thou didst come and save us.',
        'Let us bow down to the father, and the Son, and the Holy Spirit: Three in one and one in three. Three in person and united in Godhead. I bow down to our Lady St. Mary Virgin Mother God. I bow down to the cross of our Lord Jesus Christ which was sanctified by his precious Blood. The cross is our power, the Cross is our strength, the Cross is our redemption, the cross is the salvation of our soul. The Jews denied but we believe, and those who believe in the power of the Cross are saved.',
        'Glory To The Father, Glory To The Son, Glory To The Holy Spirit (Three Times). Glory to our Lady St. Mary the Virgin Mother of God. Glory to the Cross of our Lord Jesus Christ. May Christ in his mercy remember us. May he not put us to shame in his second coming. May he awaken us to the glorification of his name. In his worship may he maintain us. Our Lady St. Mary, lift up our prayer before the throne of our Lord, who gave us to eat this bread, and who gave us to drink this cup, and who prepared our food and our clothing for us, and who overlooked all our sins, and who gave us his Holy Body and his precious Blood, who brought us to this hour.',
        'Let us give glory and thanks of God the Most High and to his Virgin Mother and to his precious Cross. May the name of the Lord be thanked and glorified always at all times and at every hour.',
        'We say to you, prostrating ourselves, “Peace be unto you Mary our Mother”. We beseech you; we cling unto you against the hunting serpent. Virgin for the sake of your mother Hanna and your Father Joachim. Bless our congregation today. AMEN',
      ],
    },
    {
      id: 'evening',
      anchor: 'prayer-evening',
      panelTitle: 'Evening prayer — The Magnificat',
      summary: 'Mary’s song of God’s mercy.',
      defaultOpen: false,
      paragraphs: [
        'My soul magnifies the Lord, and my Spirit rejoices in God My Savior, for he has regarded the low estate of his handmaiden. For behold, henceforth all generations will call me blesses; for he who is mighty had done great things for me, and holy is his name. And his mercy is on those who fear him from generation to generation. He has shown strength with his arm, he has scattered the proud in the imagination of their hearts, he has put down the mighty from their throne, and exalted those of low degree; he has filled the hungry with good things, and the rich he sent empty He has helped his servant Israel, in remembrance of his mercy as he spoke to our Fathers, to Abraham and to his posterity forever AMEN.',
      ],
    },
  ],

  mealsGuidance: {
    anchor: 'prayer-meals',
    panelTitle: 'Before and after meals',
    summary: 'Short blessings your parish uses.',
    defaultOpen: false,
    paragraphs: [
      'Meal prayers are brief and easy to memorize. The exact words differ by prayer book and language; take them from an approved booklet or from your priest rather than guessing.',
      'Habit matters: pause before eating to bless God for the food, and after to give thanks — the same reverence you bring to morning and evening prayer.',
    ],
  },
}
