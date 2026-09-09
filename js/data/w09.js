WC1.registerWeek({
  id: 9,
  short: 'End of Republic',
  title: 'Rome: end of the Republic',
  lens: 'Captains, a field in Thessaly, a law that cannot hold them',
  epigraph: {
    text: 'The die is cast.',
    who: 'Caesar (as later told)',
    source: 'a crossing of a small river that was a legal line'
  },
  kicker: 'Week 9 · from Sulla’s example to Pharsalus: captains the constitution cannot recall',
  lede: 'Barrows, and Conte’s Cicero if you choose him for the Analysis. Here the field that unmakes the senatorial cause, and a dispute about why a constitution of colleagues could not hold its captains — without quoting the assigned life while it is live.',
  rooms: [
    {
      id: 'pharsalus',
      title: 'Pharsalus, 48 BC',
      nav: 'Pharsalus',
      kind: 'battle',
      type: 'battle',
      blurb: 'Pompey’s numbers; Caesar’s veterans; a cavalry wing that opens.',
      duration: 30,
      map: {
        credit: 'Schematic of Pharsalus in Thessaly: two Roman armies, a stream, a ridge of allied horse.'
      },
      fieldSvg: '<svg viewBox="0 0 1000 620" role="img" aria-label="Pharsalus">' +
        '<rect width="1000" height="620" fill="#efe6d6"/>' +
        '<path d="M0 520 L1000 540 L1000 620 L0 620 Z" fill="#c5c99a"/>' +
        '<text x="40" y="36" font-size="14" font-family="ui-sans-serif,sans-serif">Thessaly · 48 BC</text>' +
        '<text x="80" y="200" font-size="13" fill="#8b5a2b">CAESAR</text>' +
        '<text x="720" y="200" font-size="13" fill="#7a2e2a">POMPEY</text>' +
        '</svg>',
      sides: [
        { id: 'cae', name: 'Caesar', color: '#8b5a2b' },
        { id: 'pom', name: 'Pompey', color: '#7a2e2a' }
      ],
      resultFrom: 0.78,
      result: {
        short: 'Caesar’s victory',
        html: 'Pompey’s horse is broken by a fourth line of infantry. The senatorial camp is taken. Pompey flees toward Egypt and a smaller death. The Republic’s remaining argument is now a man.'
      },
      units: [
        { id: 'cae-inf', side: 'cae', label: 'Caesar’s veterans',
          path: [{ t: 0, x: 28, y: 50 }, { t: 0.45, x: 44, y: 50 }, { t: 1, x: 62, y: 48 }],
          status: [{ t: 0.8, cls: 'victor' }] },
        { id: 'cae-fourth', side: 'cae', label: 'Fourth line',
          path: [{ t: 0, x: 30, y: 28 }, { t: 0.5, x: 48, y: 24 }, { t: 0.7, x: 60, y: 22 }, { t: 1, x: 70, y: 26 }],
          labels: [{ t: 0.65, text: 'into the horse' }],
          status: [{ t: 0.75, cls: 'victor' }] },
        { id: 'pom-inf', side: 'pom', label: 'Pompey’s infantry',
          path: [{ t: 0, x: 72, y: 50 }, { t: 0.5, x: 64, y: 50 }, { t: 1, x: 80, y: 52 }],
          status: [{ t: 0.8, cls: 'fleeing' }] },
        { id: 'pom-horse', side: 'pom', label: 'Senatorial cavalry',
          path: [{ t: 0, x: 74, y: 22 }, { t: 0.4, x: 60, y: 20 }, { t: 0.65, x: 58, y: 16 }, { t: 1, x: 90, y: 10 }],
          labels: [{ t: 0.65, text: 'horse broken' }],
          status: [{ t: 0.65, cls: 'fleeing' }] }
      ],
      beats: [
        { t: 0, title: 'Two Roman armies', html: '<p>This is not Rome against a foreign king. It is a civil war of clientelae, veterans, and a Senate that has put its cause on Pompey. Numbers favor Pompey. Time in the profession favors Caesar’s line.</p>' },
        { t: 0.35, title: 'The horse’s job', html: '<p>Pompey’s cavalry, on one wing, is meant to turn Caesar. Caesar has a fourth line of infantry waiting for that turn — a tactical sentence written against a social fact: the young nobles on horse.</p>' },
        { t: 0.7, title: 'The turn reversed', html: '<p>The fourth line holds pila as spears, breaks the horse, and comes down on the flank. Pompey’s infantry, told to receive a charge rather than give one (in Caesar’s telling), is then a weight without a decision.</p>' },
        { t: 1, title: 'Egypt next', html: '<p>Pompey’s death in the surf is a Ptolemaic calculation. Caesar’s tears, if they happened, do not restore a colleague. The remaining politics is clemency, offices piled on one man, and a group of senators who still know how to use a knife.</p>' }
      ],
      counterfactuals: [
        {
          title: 'If Pompey had refused battle',
          beats: [
            { t: 0, title: 'Starvation as a weapon', html: '<p>Pompey could try to win by hunger in a land of his supplies. Labienus and the nobles want a field. A coalition of dignitas does not like to look like a siege engineer.</p>' },
            { t: 1, title: 'Caesar’s clock', html: '<p>Caesar’s veterans need a decision; his politics in Italy need a victory that looks like fate. Delay favors the man with the sea and the east — if his coalition will bear delay. It would not.</p>' }
          ],
          verdict: 'Starving Caesar out was available to a commander who was not also a senatorial cause. Pompey was both, and Pharsalus is that double office failing at once.'
        },
        {
          title: 'If the fourth line had not been there',
          beats: [
            { t: 0, title: 'The nobles’ charge', html: '<p>Without the concealed infantry, Pompey’s horse may do what cavalry in civil war dreams of: roll a flank of tired men.</p>' },
            { t: 1, title: 'Still not a restored Republic', html: '<p>A Pompeian victory is still a captain’s victory. The constitution that could not keep Caesar in a province would still have to live with Pompey. The field decides which man; it does not by itself restore colleagues.</p>' }
          ],
          verdict: 'Tactics can change the name on the ides of the next year. They cannot, by themselves, unmake the private armies that made the field possible.'
        }
      ]
    },
    {
      id: 'why',
      title: 'Why the Republic ends',
      nav: 'Dispute: the end',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Ambition, agrarian bill, or a constitution that could not command its own armies?',
      positions: [
        {
          stance: 'opposing',
          scholar: 'A moral-political reading',
          summary: 'Sulla’s example, Caesar’s dignity, Cato’s rigidity: men who will not be second. The fall is a failure of character in a ruling class.',
          html: '<p>Cicero’s letters are full of this reading: Sulla showed that a captain could take the city; Caesar would not be second; Cato would not yield. A republic of colleagues requires men who can bear to be colleagues rather than indispensable. That is not nothing. The question is whether failure of character is a sufficient cause of the Republic’s end, or only a description of the last act — the men who happened to be there when the machine had already changed.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'A material reading',
          summary: 'The levy of the un-propertied, overseas commands of many years, land for veterans, a city that can no longer feed its politics from a census of Italian farms alone.',
          html: '<p>Marius enrolled men without property; the Italian allies (socii) fought for a share; the provinces became a fortune a captain could tap. The army becomes a following of a man, not a levy of the census. Pharsalus is two such followings meeting in Thessaly. The mixed constitution Polybius admired had no method for demobilizing a conqueror of Gaul and sending him home as a private citizen.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'Ronald Syme',
          years: '1939',
          work: 'The Roman Revolution',
          summary: 'Not a constitution failing but a faction winning. Behind the slogans stand marriages, money, and a party that captured the state and kept it.',
          html: '<p>Syme wrote in 1939, and the book knows what it is doing. He replaces ideals with a prosopography: who married whose sister, who owed whom, which Italian towns supplied the new men. The Republic on this reading was already an oligarchy, so what died in the 40s was not liberty but the monopoly of one set of families. It is a corrosive book, and it made the moral reading impossible to hold naively again.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'P. A. Brunt',
          years: '1962\u201388',
          work: 'Italian Manpower; The Fall of the Roman Republic',
          summary: 'The grievances were real: land, debt, and the citizenship. The soldiers followed captains because the state would not settle them.',
          html: '<p>Brunt counted the men. Long service abroad emptied farms; the veterans had to be given land, and only a commander with political weight could get it for them; so a soldier\u2019s interest and a captain\u2019s interest fused. Add the Italian allies who fought a war in the 90s to become citizens. Complementary to the material reading and a correction to Syme: the factions had followers, and the followers had reasons of their own.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'Erich S. Gruen',
          years: '1974',
          work: 'The Last Generation of the Roman Republic',
          summary: 'The Republic was not dying. Its institutions were working, roughly, until a civil war destroyed them \u2014 and civil war was a contingency, not a diagnosis.',
          html: '<p>Gruen reads the 60s and 50s as ordinary, quarrelsome republican politics: courts busy, elections contested, violence real but not terminal. The decisive thing is the war itself, which no one in 60 BC could have described as inevitable. If he is right, the search for a long-term cause is a habit imposed by knowing the ending \u2014 which is a warning worth carrying into every counterfactual in this app.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'Harriet Flower and Robert Morstein-Marx',
          years: '2010\u2013',
          work: 'periodization; the political culture',
          summary: 'There was no single Republic to fall. There were several successive republics, and what ends in the 40s is the last of them.',
          html: '<p>Flower proposes cutting the four and a half centuries into distinct constitutional periods, so that Sulla\u2019s settlement founds a different republic from the one Gracchus lived in. Morstein-Marx works on what was said from the rostra and what a crowd would accept. Complementary because they change the unit of analysis: instead of asking why the Republic fell, ask which republic you mean and what its own participants thought they were preserving.</p>'
        }
      ],
      shifts: '<p>Cicero\u2019s account \u2014 good men, bad men \u2014 held for eighteen centuries. Mommsen made it a drama of great figures; Syme made it a party machine; Brunt gave the soldiers and the Italians their own interests; Gruen denied that anything had to fall at all; and the present generation has broken the single Republic into several. The material fact underneath all of them is unchanged and is what Pharsalus shows: two private followings, paid and settled by their captains, meeting in a field.</p>',
      ask: 'If you must pick a first cause — a man, a law, or an army’s pay — which one makes the other two intelligible?'
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
        'Caesar, <em>Civil War</em> — a captain writing the minutes of his own necessity.',
        'Cicero’s letters after Pharsalus — a consular intelligence in a world that no longer has a place for it.'
      ]
    }
  ]
});
