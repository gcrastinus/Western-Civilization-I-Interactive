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
        { title: 'The road', html: '<p>A via is built, not worn: bedding, gravel, a crown for the water, milestones. It is how a census-class of allies can be summoned, and how a province can be a walk rather than a rumor.</p>', gate: 'via Appia (the type)' },
        { title: 'Why it belongs before “empire”', html: '<p>Imperium as a world is later. Imperium as a consul’s command is already this: a man whose ditch is a law. Without camp and road, the Senate’s letters are wishes.</p>', gate: 'porta decumana' }
      ]
    },
    {
      id: 'imperium',
      title: 'What imperium is',
      nav: 'Dispute: imperium',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Command, “friendship,” province: three names for Roman power before there is an emperor.',
      positions: [
        {
          stance: 'complementary',
          scholar: 'The public-law sense',
          summary: 'Imperium is the magistrate’s right to command citizens and to make war. It is time-limited, colleague-checked, and sacred with the auspices.',
          html: '<p>Do not read later emperors backward into the third century BC. A consul in the field holds <em>imperium</em> — the right to command citizens and to make war — but he is not a king. He has a colleague (a twin in office), a year in command, and, in theory, a city that can try him afterward. That is what “republic” means here: command that is shared and timed, not a throne.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'The Hellenistic sense',
          summary: 'In the east, Rome looks like a suzerain: “friends,” hostages, indemnities, the power to unmake a league. Greeks have names for that. Romans can still call it liberty.',
          html: '<p>In 196 BC Flamininus proclaimed the freedom of the Greeks; in 146 Rome sacked Corinth. Those are the same policy at different temperatures: Rome as arbitrator who can also unmake a city. The dispute is whether the Romans were hypocrites, or whether <em>libertas</em> meant, for them, a place inside their system of “friends” and hostages — not independence as a Greek would define it.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'William V. Harris',
          years: '1979',
          work: 'War and Imperialism in Republican Rome',
          summary: 'Rome expanded because its ruling class wanted war: glory, triumphs, plunder, and a career in which a consul had one year to earn a name.',
          html: '<p>Harris counts the years of war and finds almost none without one. He points at the institutions: an annual magistracy whose holder needs a campaign, a triumph as the summit of a life, a census of men available every year, and a nobility whose standing is measured in the deeds of its ancestors. On this reading the wars are not a series of reluctant answers to threats. They are what a Roman aristocrat was for.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'Erich S. Gruen',
          years: '1984',
          work: 'The Hellenistic World and the Coming of Rome',
          summary: 'Rome was drawn east by the diplomacy of Greek states that invited it in, and behaved for a long time like one more Hellenistic power rather than a conqueror with a plan.',
          html: '<p>Gruen reads the eastern wars from the Greek side: leagues and kings calling in a strong friend against a neighbour, then finding the friend could not be sent home. Flamininus proclaims freedom at the Isthmus and means something by it; annexation comes late, unevenly, and usually after the alternatives have failed. Against Harris he insists that a state can be aggressive in temper and still be pulled rather than pushed.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'Arthur M. Eckstein',
          years: '2006',
          work: 'Mediterranean Anarchy, Interstate War, and the Rise of Rome',
          summary: 'Every state in that world was militarized and predatory. Rome is not unusually aggressive; it is unusually good at absorbing allies and replacing armies.',
          html: '<p>Eckstein describes an anarchic states-system: no arbiter, so every power arms, and the real question is not why Rome fought but why Rome won. His answer is manpower and alliance \u2014 the Italian machine you saw in the camp room \u2014 rather than a special appetite. Complementary because it grants Harris the bellicosity and denies that bellicosity distinguishes Rome from Macedon, Carthage, or the Aetolians.</p>'
        }
      ],
      shifts: '<p>Older accounts, following Rome\u2019s own writers, made the wars defensive: Rome fought when it had to. Harris ended that in 1979 by counting. Gruen answered from the Greek evidence that being aggressive is not the same as having a programme. Eckstein then widened the frame until the question became comparative. None of the three disputes the material fact this week is about \u2014 a road, a camp, and an alliance-system that could put a fresh army in the field after a lost one.</p>',
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
