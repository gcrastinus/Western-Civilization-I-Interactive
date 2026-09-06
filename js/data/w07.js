WC1.registerWeek({
  id: 7,
  short: 'Toward imperium',
  title: 'From the Hellenistic world to the Roman imperium',
  lens: 'A road, a camp, a sea that becomes a Roman lake',
  epigraph: {
    text: 'They make a solitude and call it peace.',
    who: 'Tacitus (Calgacus, as written)',
    source: 'Agricola 30 (public domain) — a later verdict on a habit already forming'
  },
  kicker: 'Week 7 · the eastern Mediterranean as a problem Rome learns to eat',
  lede: 'Barrows, <em>The Romans</em>, begins in earnest. Here: the map of a sea, a reconstruction of the marching camp, and the question of what “imperium” is before there is an emperor — without paraphrasing Barrows while the week is live.',
  rooms: [
    {
      id: 'sea',
      title: 'A sea of kingdoms',
      nav: 'Map of the sea',
      kind: 'map',
      type: 'map',
      blurb: 'Successor states, Carthage still, Italy already a Roman alliance-system.',
      question: {
        id: 'w07-q-sea',
        kind: 'mc',
        prompt: 'In the third and second centuries BC, Roman “empire” in the east begins as:',
        options: [
          { id: 'a', text: 'Immediate provincialization of all Greek lands', correct: false },
          { id: 'b', text: 'Wars, settlements, and “friends of the Roman people” — command (imperium) long before a standing imperial civil service', correct: true },
          { id: 'c', text: 'A crusade for Greek liberty as an end in itself', correct: false }
        ],
        reveal: '<p>Flamininus can proclaim liberty at the Isthmus and still leave a Roman shadow. Provinces come as bills come due. Imperium is a consul’s or praetor’s right to command; it becomes a world only by repetition.</p>'
      },
      src: 'maps/roman-med.png',
      slot: 'w07-roman-med',
      filter: 'travertine',
      alt: 'The Roman world of the high empire (use the western and eastern shores as a later overlay)',
      credit: 'Roman Empire 125 (Wikimedia, CC BY-SA 3.0). A later plate: read it backward from the second century BC, when much of this color is not yet Roman.',
      hotspots: [
        { x: 41, y: 50, title: 'Italy as a system', html: '<p>Not a nation. An alliance-machine of colonies, municipia, and socii who owe men. The camp and the road make that machine march. This plate is the high empire: read Italy backward from the second century BC, when most of this color is not yet Roman.</p>' },
        { x: 44, y: 60, title: 'Sicily and the first provinces', html: '<p>After the first war with Carthage (241 BC), Sicily is a possession to be tithed. “Province” is a task assigned to a magistrate before it is a map-color.</p>' },
        { x: 62, y: 56, title: 'The Greek east', html: '<p>Macedon, the Aetolian and Achaean leagues, the Attalids, the Seleucids in decline. Rome enters as arbitrator and remains as the power that can un-king a man.</p>' },
        { x: 38, y: 68, title: 'Carthage', html: '<p>Still a sea-power and a Spanish hinterland when the second war begins. Cannae is next week’s field. This week, see it as the other way to run a western Mediterranean.</p>' }
      ]
    },
    {
      id: 'camp',
      title: 'Road and camp',
      nav: 'Camp',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'camp',
      blurb: 'A city that can be built by night; a road that is a law of marching.',
      question: {
        id: 'w07-q-camp',
        kind: 'mc',
        prompt: 'The Roman marching camp is, as a political fact:',
        options: [
          { id: 'a', text: 'A piece of military folklore without civic meaning', correct: false },
          { id: 'b', text: 'A portable city — ditch, four gates, a headquarters — that makes an army a public thing even in a field', correct: true },
          { id: 'c', text: 'Copied entire from Alexander’s staff', correct: false }
        ],
        reveal: '<p>Polybius describes it because it explains Romans to Greeks: they do not bivouac as a crowd. They inscribe a town on the ground every night. That is material cause of a habit of order, and of a kind of command that can be inspected.</p>'
      },
      steps: [
        { title: 'The playing-card', html: '<p>A rectangle, a ditch and palisade, four gates. Via praetoria and via principalis cross. The praetorium is where command sits. A soldier can find his tent in the dark because the city has a grammar.</p>', gate: 'porta praetoria' },
        { title: 'The road', html: '<p>A via is not a path. It is a built thing: bedding, gravel, a crown for water, milestones. It is how a census-class of allies can be summoned, and how a province can be a walk rather than a rumor.</p>', gate: 'via Appia (the type)' },
        { title: 'Why it belongs before “empire”', html: '<p>Imperium as a world is later. Imperium as a consul’s command is already this: a man whose ditch is a law. Without camp and road, the Senate’s letters are wishes.</p>', gate: 'porta decumana' }
      ]
    },
    {
      id: 'imperium',
      title: 'What imperium is',
      nav: 'Dispute: imperium',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Command, friendship, province — three names for a shadow.',
      positions: [
        {
          scholar: 'The public-law sense',
          summary: 'Imperium is the magistrate’s right to command citizens and to make war. It is time-limited, colleague-checked, and sacred with the auspices.',
          html: '<p>Position: do not read later emperors backward. A consul in the field is not a king because he has a twin, a year, and a city that can try him (in theory) afterward.</p>'
        },
        {
          scholar: 'The Hellenistic sense',
          summary: 'In the east, Rome looks like a suzerain: “friends,” hostages, indemnities, the power to unmake a league. Greeks have names for that. Romans can still call it liberty.',
          html: '<p>Position: the proclamation of Greek freedom and the sack of Corinth (146) are the same policy at different temperatures. The dispute is whether the Romans were hypocrites or whether libertas meant, for them, a place in their system.</p>'
        }
      ],
      ask: 'When a Greek city thanks Rome for liberty, what has it actually received — a constitution, or a delay?'
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
        'Polybius on the constitution and on the camp — a Greek hostage explaining the machine.',
        'Optional: Tellegen-Couperus on monarchy to Republic, after the rooms, not instead of Barrows.'
      ]
    }
  ]
});
