WC1.registerWeek({
  id: 4,
  short: 'Greece',
  title: 'Greece',
  lens: 'Polis, phalanx, sea, a song of return',
  epigraph: {
    text: 'Tell me, Muse, of the man of many turns…',
    who: 'Homer',
    source: 'Odyssey 1.1 (public domain)'
  },
  kicker: 'Week 4 · a citizen-line, two sea-fights, the Homeric quarrel',
  lede: 'The atlas and the Life of Lycurgus are the assigned work. Here: the phalanx as a machine, Marathon and Salamis as politics, a thread of the Odyssey that is not the assigned life, and the Homeric Question as a scholarly dispute.',
  rooms: [
    {
      id: 'aegean',
      title: 'The Aegean as a public',
      nav: 'Map of Greece',
      kind: 'map',
      type: 'map',
      blurb: 'Coasts, islands, a Persian inland empire.',
      question: {
        id: 'w04-q-map',
        kind: 'mc',
        prompt: 'A Greek polis is, first of all:',
        options: [
          { id: 'a', text: 'A town with a famous temple', correct: false },
          { id: 'b', text: 'A body of citizens who can be seen, armed, and judged in a place', correct: true },
          { id: 'c', text: 'A nation in the modern sense', correct: false }
        ],
        reveal: '<p>The temple matters. The modern “nation” is later. What makes Greece a problem for this course is a public of men who fight as a line of citizens and argue as a line in an assembly — not a people defined only by a shrine or by a king.</p>'
      },
      src: 'maps/greece.jpg',
      slot: 'w04-greece',
      filter: 'marble',
      alt: 'Mainland Greece at the time of the Greco-Persian Wars, 490–479 BC',
      credit: 'George Botsford / Internet Archive Book Images (Wikimedia, public domain). Mainland Greece only: Ionia and the Persian interior lie off the right edge.',
      hotspots: [
        { x: 80, y: 32, title: 'Athens and Attica', html: '<p>A polis with a port (Phaleron, later Piraeus) and a countryside. The fleet of 480 is a political fact: rowers are a kind of citizen. Marathon sits on the same coast.</p>' },
        { x: 84, y: 26, title: 'Marathon', html: '<p>The landing plain of 490. Plataea is inland of it. The road back to the unguarded city is the rest of the day.</p>' },
        { x: 72, y: 40, title: 'Salamis', html: '<p>The island and the strait of 480. The Isthmus and Corinth sit to the west: the Peloponnesian alternative to fighting here.</p>' },
        { x: 58, y: 64, title: 'Sparta / Laconia', html: '<p>Sparta’s good life is a camp that never quite demobilizes. Lycurgus, in the assigned life, is how later Greeks told that fact as if a lawgiver had designed it. Meet the land first: the Eurotas valley, the perioikoi (free neighbors who are not Spartiates), and the helots whose labor is the material of the mess-table.</p>' },
        { x: 64, y: 38, title: 'Corinth and the Isthmus', html: '<p>The wall-line the Peloponnesians wanted in 480: hold the Isthmus, let Attica burn, fight on land. That is a coherent policy for a land army. It is a disaster for a city, Athens, whose good life had become a fleet of citizen-rowers.</p>' }
      ]
    },
    {
      id: 'phalanx',
      title: 'Hoplite and phalanx',
      nav: 'Phalanx',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'phalanx',
      blurb: 'A wall of overlapping shields; a good life that can be stood in a line.',
      question: {
        id: 'w04-q-phalanx',
        kind: 'mc',
        prompt: 'The hoplite phalanx, as a political fact, requires:',
        options: [
          { id: 'a', text: 'A handful of Homeric heroes in chariots', correct: false },
          { id: 'b', text: 'Enough citizen-farmers to buy bronze and to stand in a line that only works if the man beside you holds', correct: true },
          { id: 'c', text: 'A standing royal army paid in coin from the start', correct: false }
        ],
        reveal: '<p>Heroes still exist in the poems. The phalanx is a different kind of cause: not a few named champions, but repeated standing-together in a line. Material cause: bronze, oil, a farm that can spare a man for a season. Formal cause: a citizen who would be ashamed to leave a gap in the shields. Without those, “hoplite” is only a costume.</p>'
      },
      steps: [
        { title: 'The panoply', html: '<p>Shield (the hollow Argive aspis), spear, helmet, greaves. The shield is large because it is meant to cover the man to your left as well as yourself. A hoplite is already a relation: the line works only if the neighbor holds.</p>', rows: 1, overlap: 4 },
        { title: 'Depth', html: '<p>Eight men is a common depth in later writing; it varies. The rear ranks push and replace the fallen. This is not a duel of champions. It is a weight of citizens pressing together.</p>', rows: 8, overlap: 10 },
        { title: 'Who cannot be in it', html: '<p>A man too poor for bronze, a woman, a slave, a foreigner. The phalanx is an image of the citizen body because it is also a census of who may not stand there. Sparta’s mess-tables are one extreme of that fact (only the equals eat and fight). Athens will later row a different census to sea: poorer citizens as oarsmen.</p>', rows: 8, overlap: 12 }
      ]
    },
    {
      id: 'geometry',
      title: 'A public proof',
      nav: 'Geometry',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'geometry',
      blurb: 'A geometric proof that binds anyone who grants the lines — a Greek habit of public argument, in miniature.',
      steps: [
        { title: 'The figure', html: '<p>A right triangle. The claim (older than Euclid’s <em>Elements</em> as a book, later written there as proposition I.47): the square built on the hypotenuse equals the two squares built on the other sides. You do not have to “believe” it as you believe a story. You have to follow the figure.</p>', stage: 1 },
        { title: 'The squares', html: '<p>Build a square on each side. The claim is about those areas. Greek mathematics is a public act with letters on a diagram, not a priestly table of constants — though it has older cousins in the East, where lists and measures were already long practiced.</p>', stage: 2 },
        { title: 'Why it belongs here', html: '<p>This is not a claim that “the Greeks invent reason.” It is a reconstruction of a habit: a proof that can be copied, taught, and used as a model of what a public argument looks like. The same culture that stands in a phalanx likes a figure whose force does not depend on who your father is.</p>', stage: 3 }
      ]
    },
    {
      id: 'marathon',
      title: 'Marathon, 490 BC',
      nav: 'Marathon',
      kind: 'battle',
      type: 'battle',
      blurb: 'A run across a plain; a political harvest in Athens.',
      duration: 30,
      map: {
        credit: 'Schematic of the Marathon plain: the bay, the marsh, the road to Athens. Not a kingdom map.'
      },
      fieldSvg: '<svg viewBox="0 0 1000 620" role="img" aria-label="Marathon plain">' +
        '<rect width="1000" height="620" fill="#d5e4ea"/>' +
        '<path d="M0 0 L1000 0 L1000 220 C 700 260 400 200 0 240 Z" fill="#2a6a7a"/>' +
        '<path d="M620 280 L980 300 L980 610 L600 600 Z" fill="#c5c99a"/>' +
        '<text x="40" y="40" font-size="14" fill="#1a2a32" font-family="ui-sans-serif,sans-serif">NORTH · bay of Marathon</text>' +
        '<text x="500" y="120" text-anchor="middle" font-size="14" fill="#f6efe2" font-family="ui-sans-serif,sans-serif">sea</text>' +
        '<text x="800" y="480" font-size="13" fill="#5a4a38">marsh</text>' +
        '<text x="80" y="400" font-size="13" fill="#1a4a5c">ATHENIANS + PLATAEANS</text>' +
        '<text x="620" y="340" font-size="13" fill="#7a2e2a">PERSIAN LANDING</text>' +
        '</svg>',
      sides: [
        { id: 'ath', name: 'Athenians and Plataeans', color: '#1a4a5c' },
        { id: 'pe', name: 'Datis and Artaphernes', color: '#7a2e2a' }
      ],
      resultFrom: 0.78,
      result: {
        short: 'Athenian victory',
        html: 'The center yields and holds; the wings envelope. The landing force is broken. The political harvest is in the city: a demos that can say it saved itself without a king.'
      },
      units: [
        { id: 'ath-left', side: 'ath', label: 'Athenian left',
          path: [{ t: 0, x: 22, y: 32 }, { t: 0.4, x: 40, y: 34 }, { t: 0.7, x: 58, y: 30 }, { t: 1, x: 70, y: 28 }],
          status: [{ t: 0.8, cls: 'victor' }] },
        { id: 'ath-center', side: 'ath', label: 'Center, thinned',
          path: [{ t: 0, x: 24, y: 50 }, { t: 0.35, x: 42, y: 50 }, { t: 0.55, x: 48, y: 52 }, { t: 1, x: 46, y: 50 }],
          labels: [{ t: 0.55, text: 'center bent' }, { t: 0.8, text: 'center holds' }] },
        { id: 'ath-right', side: 'ath', label: 'Callimachus / right',
          path: [{ t: 0, x: 22, y: 68 }, { t: 0.4, x: 40, y: 66 }, { t: 0.7, x: 58, y: 64 }, { t: 1, x: 72, y: 62 }],
          status: [{ t: 0.8, cls: 'victor' }] },
        { id: 'pe-center', side: 'pe', label: 'Persian center',
          path: [{ t: 0, x: 72, y: 48 }, { t: 0.4, x: 60, y: 50 }, { t: 0.7, x: 52, y: 50 }, { t: 1, x: 80, y: 20 }],
          labels: [{ t: 0.75, text: 'back to the ships' }],
          status: [{ t: 0.75, cls: 'fleeing' }] },
        { id: 'pe-wings', side: 'pe', label: 'Wings, lighter',
          path: [{ t: 0, x: 74, y: 32 }, { t: 0.45, x: 62, y: 34 }, { t: 1, x: 88, y: 18 }],
          status: [{ t: 0.7, cls: 'fleeing' }] }
      ],
      beats: [
        { t: 0, title: 'A landing, a wait', html: '<p>A Persian force is on the plain of Marathon. Athens has marched out. Plataea has come. Sparta has been asked and is delayed by a festival — a religious-political fact, not a joke. Miltiades is one general among ten; the polemarch Callimachus has the casting weight.</p>' },
        { t: 0.35, title: 'The run', html: '<p>The line advances at a pace later remembered as a run, to get through archery. Herodotus is our story; he is not a staff officer. What is not in doubt: a hoplite line closed with a landing army that expected a different fight.</p>' },
        { t: 0.6, title: 'Wings and center', html: '<p>The Greek wings are heavier; the center is thinner. The Persian center pushes in; the wings fold around. Envelope, not a duel of champions.</p>' },
        { t: 1, title: 'The road to the city', html: '<p>A force still at sea might try the unguarded city. The army returns. The later tale of a runner is a harvest of memory. The political fact is simpler: a demos of hoplites can claim it met the King without becoming a subject-city.</p>' }
      ],
      counterfactuals: [
        {
          title: 'If they had waited for the Spartans',
          beats: [
            { t: 0, title: 'The cautious city', html: '<p>A delayed battle might have added a Spartan right. It might also have given the landing time to move on Athens, or to be reinforced.</p>' },
            { t: 1, title: 'The political cost', html: '<p>An Athenian victory with Sparta present is a different story in the assembly. Marathon’s later use — we saved ourselves — depends on who was not there. Waiting was available. It would have changed the myth as much as the field.</p>' }
          ],
          verdict: 'The “obvious” wait for the best infantry in Greece collides with time, the unguarded city, and the kind of glory a demos wanted to own.'
        },
        {
          title: 'If the center had broken through',
          beats: [
            { t: 0, title: 'The thin line', html: '<p>The center was a risk. A Persian push that unseated it before the wings closed would have split the army on its own plain.</p>' },
            { t: 1, title: 'What the wings were for', html: '<p>The envelope only works if the center lasts minutes, not if it lasts a morning. Marathon is a bet on a certain kind of citizen-weight. It is not a proof that thin centers always hold.</p>' }
          ],
          verdict: 'A broken center is the ordinary way a phalanx dies. The historical afternoon is the rare case where the wings were in time.'
        }
      ]
    },
    {
      id: 'salamis',
      title: 'Salamis, 480 BC',
      nav: 'Salamis',
      kind: 'battle',
      type: 'battle',
      blurb: 'A strait, a fleet of a demos, a king on a shore.',
      duration: 32,
      map: {
        credit: 'Schematic of the Salamis strait: Attica, the island, the narrow water. North toward the mainland shore.'
      },
      fieldSvg: '<svg viewBox="0 0 1000 620" role="img" aria-label="Salamis strait">' +
        '<rect width="1000" height="620" fill="#d2e0e6"/>' +
        '<path d="M0 0 L1000 0 L1000 200 L0 160 Z" fill="#c4b08a"/>' +
        '<path d="M120 360 L 520 340 L 860 420 L 700 610 L 80 610 Z" fill="#c4b08a"/>' +
        '<text x="40" y="36" font-size="14" fill="#1a2a32" font-family="ui-sans-serif,sans-serif">NORTH · Attic shore (Xerxes)</text>' +
        '<text x="400" y="280" font-size="14" fill="#1a4a5c">STRAIT</text>' +
        '<text x="400" y="500" font-size="13">Salamis</text>' +
        '<text x="40" y="220" font-size="13" fill="#7a2e2a">PERSIAN FLEET</text>' +
        '<text x="700" y="380" font-size="13" fill="#1a4a5c">GREEK FLEET</text>' +
        '</svg>',
      sides: [
        { id: 'gr', name: 'Greek fleet (Eurybiades; Themistocles)', color: '#1a4a5c' },
        { id: 'pe', name: 'Xerxes’ fleet', color: '#7a2e2a' }
      ],
      resultFrom: 0.8,
      result: {
        short: 'Greek victory in the strait',
        html: 'Crowded hulls, broken oars, a king watching from the shore. The land war is not over. The sea-road of the invasion is.'
      },
      units: [
        { id: 'gr-line', side: 'gr', label: 'Greek triremes',
          path: [{ t: 0, x: 62, y: 58 }, { t: 0.4, x: 55, y: 50 }, { t: 0.75, x: 48, y: 42 }, { t: 1, x: 44, y: 38 }],
          status: [{ t: 0.85, cls: 'victor' }] },
        { id: 'ath-ships', side: 'gr', label: 'Athenian hulls',
          path: [{ t: 0, x: 70, y: 64 }, { t: 0.5, x: 58, y: 52 }, { t: 1, x: 46, y: 44 }],
          status: [{ t: 0.85, cls: 'victor' }] },
        { id: 'pe-line', side: 'pe', label: 'Phoenician / Ionian',
          path: [{ t: 0, x: 40, y: 28 }, { t: 0.4, x: 48, y: 36 }, { t: 0.7, x: 52, y: 40 }, { t: 1, x: 30, y: 22 }],
          status: [{ t: 0.8, cls: 'fleeing' }] },
        { id: 'xerxes', side: 'pe', label: 'Xerxes on shore',
          path: [{ t: 0, x: 50, y: 14 }, { t: 1, x: 50, y: 14 }] }
      ],
      beats: [
        { t: 0, title: 'After Thermopylae', html: '<p>Attica is evacuated. The fleet is at Salamis. Peloponnesian captains want to fall back to the Isthmus. Themistocles wants the strait: a narrow water that cancels numbers and uses the hulls Athens built from Laurion silver in 483/2 — a material cause with a politician’s name on it.</p>' },
        { t: 0.35, title: 'The trap of the narrows', html: '<p>A message to the King (true, false, or both) helps pack the Persian fleet into the strait. Whether or not Sicinnus is a convenient story, the geography is the weapon.</p>' },
        { t: 0.7, title: 'Oars and panic', html: '<p>Triremes ram. In a crowd the greater fleet fouls itself. Artemisia’s later anecdote is court gossip. The fact is a broken invasion-sea.</p>' },
        { t: 1, title: 'After', html: '<p>Xerxes goes home with part of the host. Mardonius remains for Plataea. Salamis does not “save Western civilization” as a slogan. It keeps a set of poleis from becoming a satrapy that year, and it teaches Athens what a fleet is worth — a lesson that will not stay pretty.</p>' }
      ],
      counterfactuals: [
        {
          title: 'If they had fought at the Isthmus',
          beats: [
            { t: 0, title: 'The Peloponnesian plan', html: '<p>A wall at the Isthmus, ships in more open water. Sparta’s good life is a land army. Athens would be a refugee people watching its countryside burn without a decision at sea.</p>' },
            { t: 1, title: 'Numbers in the open', html: '<p>The Persian fleet’s advantage grows with sea-room. The Isthmus plan protects a peninsula and abandons the logic of the Athenian hulls. It is a coherent Peloponnesian policy. It is not a Greek one.</p>' }
          ],
          verdict: 'The “obvious” defensive line is obvious for Sparta. Salamis is what you do if the city you are saving is a fleet.'
        },
        {
          title: 'If Themistocles had not packed the strait',
          beats: [
            { t: 0, title: 'A waiting match', html: '<p>Without a fight, the coalition frays. Peloponnesian ships leave. Athens is then a fleet without a league.</p>' },
            { t: 1, title: 'The King’s patience', html: '<p>Xerxes can wait on a burned Attica. The Greek problem is political time, not only seamanship. The ruse — if it happened — is a way of forcing a decision the league would not vote.</p>' }
          ],
          verdict: 'The strait is geography. Using it required a coalition to be trapped into being one navy for a morning.'
        }
      ]
    },
    {
      id: 'odyssey',
      title: 'Odyssey thread: a farm at the end',
      nav: 'Odyssey',
      kind: 'passages',
      type: 'passages',
      blurb: 'Not the assigned Life of Lycurgus. A homecoming (nostos) that ends in recognition, land, and a father.',
      passages: [
        {
          title: 'The man of many turns',
          who: 'Odyssey 1',
          html: '<p>A man who is not Achilles: cunning, delay, a return that is a series of tests rather than a beautiful death. The good life in this poem is a household restored — bed, orchard, a son — not the kleos of dying young on the field.</p>',
          original: '<p>Ἄνδρα μοι ἔννεπε, Μοῦσα, πολύτροπον, ὃς μάλα πολλὰ πλάγχθη…</p>'
        },
        {
          title: 'Laertes’ farm',
          who: 'Odyssey 24 (sense of the scene)',
          html: '<p>The last recognition is a garden: trees counted, a wound of a boar, a father in farm-clothes. Kingship here is a remembered orchard Odysseus can name tree by tree. That is not Sparta’s mess-table and not a river-god’s palace. It is a Greek picture of a good life attached to a particular farm.</p>'
        }
      ],
      ask: 'What vision of the good life is being restored on that farm — and who, in the poem, never gets a farm?'
    },
    {
      id: 'homer-q',
      title: 'The Homeric Question',
      nav: 'Contest: Homer',
      kind: 'contest',
      type: 'contest',
      contestId: 'homer',
      blurb: 'One poet, many hands, or a tradition of singers?'
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
        'Herodotus on Marathon and Salamis — a storyteller who was not a staff officer.',
        'Aeschylus, <em>Persians</em> — a tragic poet who fought, writing the enemy’s lament in Greek.'
      ]
    },
    {
      id: 'after-lycurgus',
      title: 'After Lycurgus',
      nav: 'The assigned life',
      kind: 'review',
      type: 'passages',
      review: true,
      blurb: 'When the week has ended: the lawgiver as a later Greek need.',
      html: '<p>Plutarch’s <em>Life of Lycurgus</em> is how a later Greek (and a Roman reader) wanted Sparta to have a founder — one lawgiver who designed the mess-tables, the training, the equality of the equals. How much of what you saw in the phalanx room survives that portrait, and how much is a moral tale for men who no longer ate in those messes?</p>',
      passages: [
        {
          title: 'A life is an argument',
          who: 'After the assigned life',
          html: '<p>A lawgiver who makes a people is a useful thought: it explains why Sparta looks designed. A people who make a lawgiver in retrospect is also a historical fact: later writers needed a name for habits that had grown over time. Keep both. Do not let Plutarch’s century disappear into Lycurgus, or Lycurgus disappear into “just a myth.”</p>'
        }
      ],
      ask: 'What in the Life taught you Sparta, and what taught you Plutarch’s century?'
    }
  ]
});
