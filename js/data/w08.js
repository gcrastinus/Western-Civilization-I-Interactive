WC1.registerWeek({
  id: 8,
  short: 'The Republic',
  title: 'Rome: the Republic',
  lens: 'Census-class, a field at Cannae, a mixed constitution',
  epigraph: {
    text: 'The Senate left no means untried to save the state. The Romans are never more formidable than after a disaster.',
    who: 'Polybius',
    source: 'Histories 3.118, after Cannae (older English, public domain)'
  },
  kicker: 'Week 8 · who counts as a soldier; a double envelopment; Polybius’s machine',
  lede: 'Barrows continues. Here Cannae as a political disaster, the census as a reconstruction of class-as-army, and a dispute about the mixed constitution — not a retelling of the assigned chapters.',
  rooms: [
    {
      id: 'census',
      title: 'The census as an army',
      nav: 'Census',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'census',
      blurb: 'Property class is a line of battle; a head without fortune is still counted.',
      question: {
        id: 'w08-q-census',
        kind: 'mc',
        prompt: 'In the Servian scheme as later Romans told it, a class is first of all:',
        options: [
          { id: 'a', text: 'A modern social class of income identity', correct: false },
          { id: 'b', text: 'A rating of property that assigns you a place in the line (or no panoply at all)', correct: true },
          { id: 'c', text: 'A priestly caste', correct: false }
        ],
        reveal: '<p>The centuries of the comitia are a military file turned into a voting machine. That is why the rich weigh more: they were the front of the line. The capite censi are the reminder that a city can count men it does not arm.</p>'
      },
      steps: [
        { title: 'Class I', html: '<p>The full panoply. The men who can be the front. Their centuries vote first in the story of the comitia: a political harvest of a military fact.</p>', n: 0 },
        { title: 'The middle ratings', html: '<p>Less bronze, still a place. The Republic’s levy is a graded countryside, not a uniform. That is why a long war that kills Class I is a constitutional event.</p>', n: 1 },
        { title: 'Heads', html: '<p>Counted by the head. Later, Marius will arm the un-propertied and change the efficient cause of the army: from a census of farms to a following of a captain. Cannae is still the old machine, bleeding.</p>', n: 3 }
      ]
    },
    {
      id: 'cannae',
      title: 'Cannae, 216 BC',
      nav: 'Cannae',
      kind: 'battle',
      type: 'battle',
      blurb: 'Hannibal’s crescent; a Roman weight that walks into a bag.',
      duration: 34,
      map: {
        credit: 'Schematic of Cannae: the Aufidus, a plain, Roman depth against a thinning Carthaginian center.'
      },
      fieldSvg: '<svg viewBox="0 0 1000 620" role="img" aria-label="Cannae">' +
        '<rect width="1000" height="620" fill="#e8dcc4"/>' +
        '<path d="M0 480 C 200 500 400 470 1000 520 L1000 620 L0 620 Z" fill="#c4b08a"/>' +
        '<path d="M780 0 L1000 0 L1000 620 L860 620 Z" fill="#8eb4c9" opacity=".5"/>' +
        '<text x="40" y="36" font-size="14" font-family="ui-sans-serif,sans-serif">plain of Cannae</text>' +
        '<text x="920" y="300" text-anchor="middle" font-size="12">Aufidus</text>' +
        '<text x="80" y="200" font-size="13" fill="#7a2e2a">ROMAN DEPTH</text>' +
        '<text x="520" y="200" font-size="13" fill="#1a4a5c">HANNIBAL</text>' +
        '</svg>',
      sides: [
        { id: 'rom', name: 'Varro and Paullus', color: '#7a2e2a' },
        { id: 'car', name: 'Hannibal', color: '#1a4a5c' }
      ],
      resultFrom: 0.8,
      result: {
        short: 'Carthaginian victory; the consular army bagged',
        html: 'A double envelopment. Tens of thousands of citizens and allies dead in an afternoon. Rome does not sue for peace. That refusal is the political fact that outlives the field.'
      },
      units: [
        { id: 'rom-inf', side: 'rom', label: 'Roman infantry, deep',
          path: [{ t: 0, x: 22, y: 48 }, { t: 0.35, x: 38, y: 48 }, { t: 0.6, x: 50, y: 48 }, { t: 1, x: 48, y: 48 }],
          labels: [{ t: 0.7, text: 'packed' }, { t: 0.85, text: 'bagged' }],
          status: [{ t: 0.85, cls: 'captured' }] },
        { id: 'rom-cav-r', side: 'rom', label: 'Citizen cavalry',
          path: [{ t: 0, x: 24, y: 22 }, { t: 0.4, x: 30, y: 18 }, { t: 1, x: 12, y: 10 }],
          status: [{ t: 0.55, cls: 'fleeing' }] },
        { id: 'rom-cav-l', side: 'rom', label: 'Allied horse',
          path: [{ t: 0, x: 24, y: 76 }, { t: 0.4, x: 28, y: 82 }, { t: 1, x: 10, y: 90 }],
          status: [{ t: 0.55, cls: 'fleeing' }] },
        { id: 'han-center', side: 'car', label: 'Gauls / Spaniards (center)',
          path: [{ t: 0, x: 58, y: 48 }, { t: 0.35, x: 50, y: 48 }, { t: 0.65, x: 42, y: 48 }, { t: 1, x: 40, y: 48 }],
          labels: [{ t: 0.4, text: 'center yields' }] },
        { id: 'han-wings', side: 'car', label: 'African infantry, wings',
          path: [{ t: 0, x: 62, y: 28 }, { t: 0.5, x: 50, y: 32 }, { t: 0.75, x: 40, y: 40 }, { t: 1, x: 36, y: 44 }],
          status: [{ t: 0.8, cls: 'victor' }] },
        { id: 'numidian', side: 'car', label: 'Hasdrubal / Numidians',
          path: [{ t: 0, x: 64, y: 72 }, { t: 0.4, x: 40, y: 78 }, { t: 0.7, x: 30, y: 50 }, { t: 1, x: 28, y: 48 }],
          status: [{ t: 0.8, cls: 'victor' }] }
      ],
      beats: [
        { t: 0, title: 'A Roman answer to delay', html: '<p>After Trebia and Trasimene, Rome elects to put a very large army in the field. Varro and Paullus: a consular pair, a tradition of alternation, a crowd of allies. The plan is weight. Hannibal’s plan is a bag for weight.</p>' },
        { t: 0.3, title: 'The crescent', html: '<p>The center of Gauls and Spaniards bows in. Romans push where the enemy yields, which is what a deep infantry is for. The African infantry on the wings are still uncommitted.</p>' },
        { t: 0.6, title: 'Horse first', html: '<p>Carthaginian horse, especially on one wing, clears the Roman cavalry. The rear of the infantry mass becomes a place cavalry can reach. A phalanx-like weight without wings is a herd.</p>' },
        { t: 0.85, title: 'The wings close', html: '<p>Africans inward; cavalry in the rear. The killing is in a packed space. Paullus dies in the tradition. Varro survives — a political fact that later moralists will not forgive.</p>' },
        { t: 1, title: 'After: no peace', html: '<p>Hannibal’s later critics (and some of his officers, in the stories) want Rome summoned to treat. The Senate raises new armies, refuses to ransom on Hannibal’s terms, and continues a war of attrition that Spain and Africa will decide. Cannae is the Republic’s worst afternoon and not its surrender.</p>' }
      ],
      counterfactuals: [
        {
          title: 'If Rome had kept Fabius’s delay',
          beats: [
            { t: 0, title: 'The dictator’s policy', html: '<p>Fabius had refused a decisive field. It was unpopular. It was also a way not to feed Hannibal a packed army.</p>' },
            { t: 1, title: 'The cost of delay', html: '<p>Allies peel. A captain who will not fight looks like a city that cannot protect its socii. Cannae is what happens when that political bill comes due. Delay was available. It was not free.</p>' }
          ],
          verdict: 'The “obvious” Fabian alternative is obvious after the body-count. Before the body-count it was a policy that could lose Italy without a battle.'
        },
        {
          title: 'If Hannibal had marched on Rome',
          beats: [
            { t: 0, title: 'The obvious sequel', html: '<p>Maharbal, in Livy’s story, says Hannibal knows how to win and not how to use a victory. A march on the city is the dream of every later school map.</p>' },
            { t: 1, title: 'What a siege is', html: '<p>Rome has walls, other armies, and a road-system. Hannibal has no siege train worth the name and a coalition of Italians who have not all come over. A march might have panicked a Senate. It might also have broken the Carthaginian army on stone.</p>' }
          ],
          verdict: 'The unused march is the most famous counterfactual in Roman history because it flatters both sides: Roman toughness, Carthaginian missed destiny. A siege of Rome in 216 was not Salamis. It was a different instrument Hannibal did not have.'
        }
      ]
    },
    {
      id: 'polybius',
      title: 'The mixed constitution',
      nav: 'Dispute: Polybius',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Consuls, Senate, people — a Greek theory of why Cannae was not the end.',
      positions: [
        {
          scholar: 'Polybius',
          work: 'Histories VI',
          summary: 'Rome mixes kingship (consuls), aristocracy (Senate), and democracy (people) so that each checks the others. The test is disaster: a mixed body can take a Cannae and continue.',
          html: '<p>Position (summary): this is a theory written by a Greek who watched Rome eat his world. It is not a naive hymn. It is an attempt to name a machine. The question is whether the machine is the constitution or the alliance-system and the census of farms.</p>'
        },
        {
          scholar: 'A material reply',
          summary: 'What survived Cannae was Italian manpower, a Senate that would not treat, and a capacity to make new legions. “Mixture” is a later diagram of that stubbornness.',
          html: '<p>Position: Polybius’s three parts are real offices. They are not why a socius from Campania still sends men after 216. Roads, colonies, and the fear of Hannibal as a worse master are also causes.</p>'
        }
      ],
      ask: 'If you had to keep one sentence of Polybius after Cannae, would it be about mixture, or about a people that can be levied again?'
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
        'Livy XXII — a moralist of the field, not a staff map.',
        'Optional: Tellegen-Couperus on the late Republic, after Barrows, not instead.'
      ]
    }
  ]
});
