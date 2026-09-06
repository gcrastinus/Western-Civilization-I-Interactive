WC1.registerWeek({
  id: 6,
  short: 'Alexander',
  title: 'Alexander and the Hellenistic world',
  lens: 'A Macedonian spear; a world that becomes common',
  epigraph: {
    text: 'It would be a mean thing to steal a victory.',
    who: 'Alexander, refusing a night attack before Gaugamela',
    source: 'Arrian, Anabasis 3.10 (Chinnock translation, public domain)'
  },
  kicker: 'Week 6 · Gaugamela, a road to the Indus, cities named Alexandria',
  lede: 'Plutarch’s Alexander is assigned. Here the field at Gaugamela, a map of a march, and the Hellenistic aftermath as a new material for Rome — without retelling the life while you are in it.',
  rooms: [
    {
      id: 'march',
      title: 'The march as a map',
      nav: 'Map of the march',
      kind: 'map',
      type: 'map',
      blurb: 'From Macedon to the Punjab: a spear-line, not a state.',
      question: {
        id: 'w06-q-map',
        kind: 'mc',
        prompt: 'Alexander’s “empire” in 323 is best described as:',
        options: [
          { id: 'a', text: 'A finished bureaucratic state like later Rome', correct: false },
          { id: 'b', text: 'A conquered Achaemenid space held by a Macedonian army, new cities, and a claim that died with the man', correct: true },
          { id: 'c', text: 'A Greek nation-state', correct: false }
        ],
        reveal: '<p>He took a Persian imperial machine and put his companions on it. The Successors will show how much of that was personal. The lasting fact is a Greek-speaking layer from the Aegean to Bactria.</p>'
      },
      src: 'maps/alexander.jpg',
      slot: 'w06-alexander',
      filter: 'marble',
      alt: 'The empire of Alexander, 1893 plate',
      credit: 'Nineteenth-century atlas plate (Wikimedia, public domain).',
      hotspots: [
        { x: 18, y: 38, title: 'Macedon', html: '<p>A kingdom on the edge of the poleis, with a royal army that is not a hoplite census. Philip’s work is the precondition. Alexander inherits a machine already pointed at Asia.</p>' },
        { x: 32, y: 50, title: 'Issus and the sea', html: '<p>333 BC, the NE corner of the Mediterranean. To take the coast is to take the Persian fleet’s harbors. Tyre is a siege of a city-island because the sea is still a Persian instrument until the cities fall.</p>' },
        { x: 42, y: 42, title: 'Gaugamela / Arbela', html: '<p>331 BC. Open ground near Arbela, chosen by Darius for cavalry and scythed chariots. That choice is the battle’s premise.</p>' },
        { x: 22, y: 68, title: 'Egypt', html: '<p>A satrapy that becomes a kingdom of the Ptolemies, a city, a library, a god-king in a Greek dialect. Rome will later eat this as grain.</p>' },
        { x: 82, y: 38, title: 'Bactria and the east', html: '<p>Sogdiana, the Hindu Kush, the Punjab: a different war, marriages, garrisons. The Hellenistic world is born as much here as at Alexandria-by-Egypt.</p>' }
      ]
    },
    {
      id: 'gaugamela',
      title: 'Gaugamela, 331 BC',
      nav: 'Gaugamela',
      kind: 'battle',
      type: 'battle',
      blurb: 'A prepared plain; a gap; a king who flees twice.',
      duration: 32,
      map: {
        credit: 'Schematic of Gaugamela: a flattened plain, Persian center and wings, the Macedonian oblique approach.'
      },
      fieldSvg: '<svg viewBox="0 0 1000 620" role="img" aria-label="Gaugamela">' +
        '<rect width="1000" height="620" fill="#e8dcc4"/>' +
        '<text x="40" y="36" font-size="14" fill="#2a1c12" font-family="ui-sans-serif,sans-serif">NORTH</text>' +
        '<text x="780" y="80" font-size="13" fill="#7a2e2a">DARIUS · center</text>' +
        '<text x="80" y="520" font-size="13" fill="#1a4a5c">ALEXANDER · companion cavalry</text>' +
        '<text x="80" y="80" font-size="13" fill="#1a4a5c">Parmenion · left</text>' +
        '</svg>',
      sides: [
        { id: 'mac', name: 'Alexander', color: '#1a4a5c' },
        { id: 'per', name: 'Darius III', color: '#7a2e2a' }
      ],
      resultFrom: 0.78,
      result: {
        short: 'Macedonian victory; the Achaemenid center breaks',
        html: 'Darius flees. The left under Parmenion is hard-pressed. The political harvest is Babylon, Susa, Persepolis — and a king who must now rule Persians as well as Macedonians.'
      },
      units: [
        { id: 'alex', side: 'mac', label: 'Alexander, Companions',
          path: [{ t: 0, x: 28, y: 70 }, { t: 0.35, x: 40, y: 55 }, { t: 0.6, x: 58, y: 40 }, { t: 0.8, x: 72, y: 28 }, { t: 1, x: 80, y: 22 }],
          status: [{ t: 0.8, cls: 'victor' }] },
        { id: 'phalanx', side: 'mac', label: 'Phalanx',
          path: [{ t: 0, x: 26, y: 58 }, { t: 0.5, x: 44, y: 50 }, { t: 1, x: 56, y: 44 }] },
        { id: 'parmenion', side: 'mac', label: 'Parmenion, left',
          path: [{ t: 0, x: 24, y: 38 }, { t: 0.5, x: 32, y: 36 }, { t: 1, x: 30, y: 40 }],
          labels: [{ t: 0.7, text: 'left hard-pressed' }] },
        { id: 'darius', side: 'per', label: 'Darius, chariot',
          path: [{ t: 0, x: 78, y: 32 }, { t: 0.55, x: 70, y: 30 }, { t: 0.72, x: 82, y: 18 }, { t: 1, x: 96, y: 10 }],
          labels: [{ t: 0.72, text: 'Darius flees' }],
          status: [{ t: 0.72, cls: 'fleeing' }] },
        { id: 'per-left', side: 'per', label: 'Persian left / cavalry',
          path: [{ t: 0, x: 70, y: 60 }, { t: 0.5, x: 48, y: 50 }, { t: 1, x: 40, y: 42 }] }
      ],
      beats: [
        { t: 0, title: 'A plain prepared', html: '<p>Darius has the ground smoothed for chariots. Numbers favor him. Alexander refuses a night attack (the later story) and comes obliquely, drawing Persian horse and opening a seam toward the king.</p>' },
        { t: 0.4, title: 'The seam', html: '<p>Companion cavalry at the gap. A phalanx is a wall; this is a spear-point at a man in a chariot. Persian scythed chariots are a theatre that the infantry has been told how to open.</p>' },
        { t: 0.7, title: 'The left almost goes', html: '<p>Parmenion’s side is the bill for the oblique. A messenger (in the tradition) pulls Alexander from pursuit. Whether or not the anecdote is neat, the structure is: you can break a king and still lose an army on the other wing.</p>' },
        { t: 1, title: 'After', html: '<p>The Achaemenid center of gravity — the king’s person — has fled a second time. Cities open. The problem becomes how to be Great King without ceasing to be a Macedonian captain. That problem is not solved on this plain.</p>' }
      ],
      counterfactuals: [
        {
          title: 'If Darius had held the chariot',
          beats: [
            { t: 0, title: 'The king as a standard', html: '<p>Achaemenid armies take the king’s body as a signal. If he stays, the center may still break; it may also last long enough for the Persian left to finish Parmenion.</p>' },
            { t: 1, title: 'What “holding” would have meant', html: '<p>It would have meant risking capture. Darius’s flight is rational for a dynasty and fatal for a field. The counterfactual asks a Great King to become a hoplite. That is a change of office, not a tactic.</p>' }
          ],
          verdict: 'A king who dies in the line might have saved an afternoon and ended a house. A king who flees can try again. He did not succeed. The office, not only the man, chose flight.'
        },
        {
          title: 'If Alexander had ignored the left',
          beats: [
            { t: 0, title: 'Pursuit as a temptation', html: '<p>Killing or taking Darius in the first hour is the dream of the Companions.</p>' },
            { t: 1, title: 'The bill', html: '<p>An army is a political body. Sacrifice Parmenion’s wing and you may win a corpse and lose Macedonians who will later vote with their feet in India. Alexander’s legend is full of charges. His survival as captain is full of returns.</p>' }
          ],
          verdict: 'The “obvious” chase of the king is the battle’s purpose and its risk. Gaugamela is won because the chase was timed, not because it was total.'
        }
      ]
    },
    {
      id: 'hellenistic',
      title: 'After the spear',
      nav: 'Hellenistic',
      kind: 'prose',
      type: 'prose',
      blurb: 'Successor kingdoms, a common Greek, cities as instruments.',
      html:
        '<p>The man dies in Babylon. The army becomes the argument. Antigonids, Ptolemies, Seleucids: Macedonian houses on Persian and Egyptian tax-machines, with Greek cities as garrisons of a culture.</p>' +
        '<p>Koine Greek is a material cause of later Scripture, later philosophy, later Roman eastern administration. A peasant in the Fayum does not become a Spartan. He can, if needed, be spoken to in a Greek that a man from Macedon and a man from Athens both roughly have.</p>' +
        '<p>Rome will not meet “Greece” as a set of poleis only. It will meet kingdoms, leagues, and a civilization that already thinks of itself as common. That is the hinge into next week.</p>'
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
        'Arrian (from Ptolemy and Aristobulus) — a later captain’s Alexander, different from Plutarch’s moralist.',
        'The Alexander Mosaic (Naples) — a Hellenistic picture of a seam in a battle, not a photograph of Gaugamela.'
      ]
    },
    {
      id: 'after-plutarch',
      title: 'After the Life',
      nav: 'The assigned life',
      kind: 'review',
      type: 'passages',
      review: true,
      blurb: 'When the week has ended: Plutarch’s Alexander as a moral plot.',
      html: '<p>Which scenes in the Life were about a soul, and which were about a tax-district? The Gaugamela room was the second. Plutarch is allowed the first. You need both.</p>',
      passages: [
        {
          title: 'A parallel life',
          who: 'After Plutarch',
          html: '<p>Plutarch writes lives in pairs for character. An empire is not a character. Keep the pair, then go back to the satrapies.</p>'
        }
      ],
      ask: 'Where did Plutarch help you see a decision, and where did he hide a logistics?'
    }
  ]
});
