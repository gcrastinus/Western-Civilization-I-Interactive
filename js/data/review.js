WC1.registerWeek({
  id: 13,
  short: 'Study',
  title: 'Study week',
  lens: 'No new rooms',
  kicker: 'Week 13 · Thanksgiving',
  lede: 'No new rooms. Use the Analyses of History you already have. The oral will ask you to be seamless about one stretch: East, Greece, or Rome into the first Europe.',
  about: '<p>Bring a document that puts captains, laws, battlefields, and a vision of the good life on one table for one stretch of the course (the East, Greece, or Rome into the first Europe). You may have it open. If you do not have an answer, the examiner will move on.</p><p>Use the four causes once, and only if they explain something: a vision of the good life (final); a character of habits (formal); two or three exemplary acts or persons (efficient); and the material — river, bronze, road, script — without which those habits could not have existed. If the causes do not earn their keep in that paragraph, drop them and speak plainly.</p>',
  rooms: []
});

WC1.registerWeek({
  id: 14,
  short: 'Investiture',
  title: 'The Investiture Controversy',
  lens: 'Dictatus, Canossa, Worms — two laws in one landscape',
  epigraph: {
    text: 'The Pope may depose emperors.',
    who: 'Dictatus Papae',
    source: 'Dictatus Papae 12 (public-domain English of Gregory VII’s register)'
  },
  kicker: 'Week 14 · staff and ring, a king in the snow, a treaty of symbols',
  lede: 'No Analysis of History this week. Urban II’s call is the oratory. Here the documents of a quarrel that is not a Reacting game: a theory, a ritual, a procedure.',
  rooms: [
    {
      id: 'map',
      title: 'A Europe of two forums',
      nav: 'Map, 1097',
      kind: 'map',
      type: 'map',
      blurb: 'Empire, papacy, and a landscape of bishoprics that are also counties.',
      question: {
        id: 'w14-q-map',
        kind: 'mc',
        prompt: 'A German bishopric in the eleventh century is, as a political fact:',
        options: [
          { id: 'a', text: 'Only a cure of souls', correct: false },
          { id: 'b', text: 'A spiritual office and a block of land, men, and loyalty — which is why kings insist on investing', correct: true },
          { id: 'c', text: 'Already a modern civil service post', correct: false }
        ],
        reveal: '<p>Investiture is a fight over a double thing: a bishop is both a pastor of souls and a lord of land, men, and loyalty. If you forget the land, Gregory looks like a theologian only. If you forget the staff and ring (the spiritual signs of office), Henry looks like a king defending a tax-system only. Both are in the quarrel.</p>'
      },
      src: 'maps/investiture.jpg',
      slot: 'w14-investiture',
      filter: 'parchment',
      alt: 'Europe and the Mediterranean about 1097 (Shepherd)',
      credit: 'William R. Shepherd, Historical Atlas (1911), public domain. A First Crusade plate: the papal-imperial landscape is the western half.',
      hotspots: [
        { x: 42, y: 40, title: 'The German kingdom', html: '<p>Dukes, counts, and bishoprics that are the emperor’s way of governing without a Roman tax-machine. Henry IV’s problem is a Saxon opposition as much as a pope.</p>' },
        { x: 46, y: 55, title: 'Rome and the patrimony', html: '<p>A city of families, a pope who must also be a prince of a small state, a reform circle that wants the Roman church out of those families. 1059 is already a constitution of election.</p>' },
        { x: 44, y: 50, title: 'Canossa’s country', html: '<p>Matilda of Tuscany’s lands: a castle, a countess, a winter (January 1077). The ritual needs a door and a delay.</p>' },
        { x: 60, y: 52, title: 'The eastern empire still', html: '<p>1097 is also a crusading year. Do not let Urban’s later call erase what this course’s last quarrel actually is: Latin Europe’s two laws, not yet Jerusalem.</p>' }
      ]
    },
    {
      id: 'dictatus',
      title: 'Dictatus Papae',
      nav: 'Dictatus',
      kind: 'passages',
      type: 'passages',
      blurb: 'A register of claims, 1075.',
      passages: [
        {
          title: 'The Roman church alone',
          who: 'Dictatus Papae',
          years: '1075',
          html: '<p>That the Roman church was founded by God alone. That the Roman pontiff alone is by right called universal. That he alone may use the imperial insignia. These are not sermons meant to edify. They are headings of a public law of the keys: claims about who may judge whom in this world.</p>',
          source: 'Register of Gregory VII (public-domain translations of the dicta).'
        },
        {
          title: 'Deposition',
          who: 'Dictatus Papae §12',
          html: '<p>That he may depose emperors. The sentence is short because the claim is a jurisdiction — a right to judge — not a metaphor about spiritual influence. A king is a man who can be bound, including the emperor. The later letters to Hermann of Metz spell this out: an anointed king is not beyond judgment just because he is anointed.</p>',
          original: '<p>Quod illi liceat imperatores deponere.</p>'
        },
        {
          title: 'Unmaking bishops',
          who: 'Dictatus Papae',
          html: '<p>That he may depose and reinstate bishops without assembling a synod (dicta 3 and 25 in the usual numbering). A reform of simony (the buying of church office) needs a power against local churches, not only against kings. <em>Libertas ecclesiae</em> — the freedom of the Church — here also means centralization: Rome judging bishops who had been local lords.</p>'
        }
      ],
      ask: 'Which dictum is aimed at kings, which at bishops, and which at the very idea of a priest-king? They are not one shot.'
    },
    {
      id: 'canossa',
      title: 'Canossa, 1077',
      nav: 'Canossa',
      kind: 'prose',
      type: 'prose',
      blurb: 'A penitent at a door; an absolution that is also a political act.',
      html:
        '<p>Henry IV, excommunicated and declared deposed by Gregory, comes in January 1077 to the countess Matilda’s castle in the Apennines. For three days, in the later telling, he stands in the snow as a penitent. Gregory, who is a priest as well as a politician, absolves him. The inner forum — the forum of penance and communion — is satisfied. The Saxon opposition in Germany, which wanted Henry kept down, is not.</p>' +
        '<p>Read the event as you would a court. Who had standing to act? What act was actually performed? What was not decided? Absolution restores communion with the Church. It does not settle who invests a bishop in Milan. Henry leaves able to be a king among his own again, no longer cut off from the altar. Gregory leaves having shown that the keys can bind an emperor — and having used up some of his coalition’s patience, because a priest who must absolve a penitent cannot also keep that penitent politically dead.</p>' +
        '<p>Material cause, once: a castle, a winter, a road a king can still travel when his German enemies have not yet closed it. Efficient cause: a man who will wear wool at a door because the alternative is to remain un-kinged in the only public that still blesses kings.</p>'
    },
    {
      id: 'worms',
      title: 'Worms, 1122',
      nav: 'Worms',
      kind: 'prose',
      type: 'prose',
      blurb: 'A split of symbols: sceptre, ring, staff.',
      html:
        '<p>After Gregory’s exile and death, after Henry’s antipope, after a generation of war in Germany and Italy, Pope Calixtus II and Emperor Henry V agree at Worms in 1122. In the Empire the settlement is: free election of bishops; the emperor invests with the sceptre (the temporal, the land and loyalty); the Church invests with ring and staff (the spiritual office). In some other lands the mix differs. The point is the split of symbols: two laws, two props, one man who is still both pastor and lord.</p>' +
        '<p>A procedure is not a peace of souls. It is a way to go on without pretending the quarrel never happened. The bishop is still a double thing. Later Europe will live inside that habit: a church that can quarrel with a king without disappearing, and a king who can still need bishops as men of land.</p>' +
        '<p>This course ends here on purpose. The twelfth-century renaissance, the universities, the later papacy — those belong to the next sequence. You now have the quarrel that makes them possible: two jurisdictions in one landscape.</p>'
    },
    {
      id: 'contest',
      title: 'The Investiture Contest',
      nav: 'Contest',
      kind: 'contest',
      type: 'contest',
      contestId: 'investiture',
      blurb: 'Libertas ecclesiae, hierocracy, two laws — opposing and complementary views.'
    },
    {
      id: 'connections',
      title: 'Literature, art, music',
      nav: 'Connections',
      kind: 'connections',
      type: 'connections'
    },
    {
      id: 'resources',
      title: 'Further',
      nav: 'Further',
      kind: 'resources',
      type: 'resources',
      items: [
        'The in-depth folder’s Investiture sources — after these rooms, not instead of the atlas pages.',
        'Urban II at Clermont is this week’s oratory: a pope who can summon a people because the keys have already been shown to bind kings.'
      ]
    }
  ]
});

WC1.review = WC1.weeks[14];
