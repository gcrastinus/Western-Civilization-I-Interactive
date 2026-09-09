WC1.registerWeek({
  id: 5,
  short: 'Origins of Rome',
  title: 'Origins of Rome',
  lens: 'Latium, kings, a people that can be counted',
  epigraph: {
    text: 'So great was the effort to found the Roman people.',
    who: 'Virgil',
    source: 'Aeneid 1.33 (public domain)'
  },
  kicker: 'Week 5 · Etruscans, a river crossing, a forum that will become a world',
  lede: 'The atlas pages on early Italy are the assigned map-work. Here: a peninsula of peoples, a dispute about how a city of that kind begins, and the Twelve Tables as a reconstruction of law you can point at — not yet Barrows’s Rome.',
  rooms: [
    {
      id: 'italy',
      title: 'Italy before it is Roman',
      nav: 'Map of Italy',
      kind: 'map',
      type: 'map',
      blurb: 'Latins, Etruscans, Greeks of the south, a river and some hills.',
      question: {
        id: 'w05-q-italy',
        kind: 'mc',
        prompt: 'In the sixth and fifth centuries BC, the Italian peninsula is best described as:',
        options: [
          { id: 'a', text: 'Already a Roman national state', correct: false },
          { id: 'b', text: 'A mosaic of peoples (Latins, Etruscans, Samnites, Greek cities of the south) among whom Rome is one ambitious town', correct: true },
          { id: 'c', text: 'An empty forest waiting for Aeneas', correct: false }
        ],
        reveal: '<p>Aeneas is a later poem’s way of giving that mosaic a Trojan past. The political fact is neighbors, cults, and wars of a few miles. Empire is a habit that has not yet been acquired.</p>'
      },
      src: 'maps/italy.jpg',
      slot: 'w05-italy',
      filter: 'marble',
      alt: 'The growth of Roman power in Italy (Shepherd)',
      credit: 'William R. Shepherd, public domain. The plate already looks forward to conquest; read the early colors first.',
      hotspots: [
        { x: 38, y: 16, title: 'The Po and the north', html: '<p>Later Gallia Cisalpina. In the beginning it is someone else’s valley. Roman “Italy” is a growing claim, not a geography given at birth.</p>' },
        { x: 30, y: 32, title: 'Etruria', html: '<p>Cities, tombs, a discipline of signs. Rome’s kings, in the stories, wear an Etruscan look. That is a fact about who had palaces on this side of the Tiber, not a confession of inferiority.</p>' },
        { x: 38, y: 42, title: 'Latium and the Tiber', html: '<p>A ford, some hills, salt-works downstream (the plate marks the Salines). Material cause of a city that can be a market and a shrine without yet being a capital of the world.</p>' },
        { x: 78, y: 48, title: 'Magna Graecia', html: '<p>Tarentum and the Greek poleis of the south: a different public, already old when Rome is a tough town. Rome will meet them as allies, enemies, and a source of gods and letters.</p>' },
        { x: 42, y: 78, title: 'Sicily', html: '<p>Greek cities and, later, the first overseas provincia. On this plate it is still someone else’s island. The first Punic war will make it a tithe.</p>' }
      ]
    },
    {
      id: 'tables',
      title: 'Twelve Tables',
      nav: 'Twelve Tables',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'tables',
      blurb: 'A law you can point at in the Forum — later citations, not a recovered bronze.',
      question: {
        id: 'w05-q-tables',
        kind: 'mc',
        prompt: 'The Twelve Tables matter, in this course, primarily as:',
        options: [
          { id: 'a', text: 'A complete code like a modern statute-book', correct: false },
          { id: 'b', text: 'A public posting of law that later Romans could cite — procedure, debt, family, an idea that what is last ordered is law', correct: true },
          { id: 'c', text: 'Proof that Rome was already an empire of rights', correct: false }
        ],
        reveal: '<p>We have fragments through later lawyers and schoolboys. That is already a fact: a city that makes children memorize law. The bronze (or painted boards) is material cause of a habit of citation.</p>'
      },
      steps: [
        { title: 'Why post a law', html: '<p>The later story: plebeians wanted the law visible, not hidden in patrician chests. Whether or not that is the whole truth, a posted law is a different politics from a king’s mouth.</p>', n: 2 },
        { title: 'What the fragments are about', html: '<p>Summons, debt, a father’s power, burial, marriage-bars, procedure. This is a city anxious about credit, corpses, and who may sue whom — not a treatise on natural rights.</p>', n: 5 },
        { title: '“What the people last ordered”', html: '<p>A later-cited clause: the last command of the people is the law. That sentence will have a long life. In the fifth century it is already a claim about where law lives: in a public act, not only in a priesthood.</p>', n: 6 }
      ]
    },
    {
      id: 'origins',
      title: 'How a city begins',
      nav: 'Dispute: origins',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Livy’s stories, archaeology, and what a founding myth is for.',
      positions: [
        {
          stance: 'opposing',
          scholar: 'The annalistic story',
          work: 'Livy, Book I (as a type)',
          summary: 'Aeneas, Romulus, kings, a rape, a Senate, a liberty after Tarquin. The city is a moral plot: violence at the origin, law as the remedy.',
          html: '<p>Livy knows he is telling what was believed, not what he had seen. The use of the story is to form Romans: to show what kind of people they are supposed to be. A founding that includes Romulus killing Remus is already an argument — this city begins in violence and then tries to turn violence into law. Read Book I as that argument, not as a witness of 750 BC.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'The ground',
          summary: 'Huts on hills, burials, a forum that was a wet valley, Etruscan engineering. The city is a drainage problem and a cluster of families before it is a moral tale about liberty.',
          html: '<p>Start with the material remains. Kings in the stories look like a memory of real chiefs and of Etruscan power across the Tiber. “Republic” begins, in this view, when a set of families can rotate offices instead of leaving one man in command. That is less pretty than Brutus driving out Tarquin, and more like a town learning to share power.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'T. J. Cornell',
          years: '1995',
          work: 'The Beginnings of Rome',
          summary: 'The annalists are late and unreliable about events, and still carry real institutional memory: magistrate lists, priestly records, the shape of old law.',
          html: '<p>Cornell distrusts the narrative and trusts the debris inside it \u2014 a list of magistrates no one had a motive to invent, an archaic procedure fossilized in a later formula, a treaty text Polybius says he read on bronze. On this account the sixth-century city is genuinely a city, with a monarchy, public building, and dealings abroad, and the early Republic is not a blank filled in by Augustan writers. It is also a warning against the easy inference that a late source is an empty one.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'Andrea Carandini',
          work: 'the Palatine excavations',
          summary: 'A defensive work at the foot of the Palatine, dated to the middle of the eighth century, is offered as the physical trace of the foundation the tradition describes.',
          html: '<p>Carandini found early walling and boundary works and argued, boldly, that a tradition about a man tracing a line around a city in the 750s corresponds to something that was actually done. Most of the field takes the archaeology and refuses the identification: an early wall shows a community organizing itself, not a man named Romulus. Watch the exchange as a case of how far material evidence can be pushed toward a name.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'T. P. Wiseman',
          years: '1995',
          work: 'Remus: A Roman Myth',
          summary: 'The twins are not a memory. Remus enters the story late, and the fratricide is a political idea of the fourth or third century taking narrative form.',
          html: '<p>Wiseman argues that the earliest evidence knows a founder and no brother, and that Remus appears when Rome needed a story about two orders sharing \u2014 and quarrelling over \u2014 one city. If that is right, the murder at the furrow is an argument of the middle Republic about itself rather than a dark memory of the eighth century, which would make Livy\u2019s Book I evidence for the century that told it. That is where this course asks you to look in any case.</p>'
        }
      ],
      shifts: '<p>The nineteenth century treated the regal period as fable and then as hypercriticism. Archaeology from the 1970s gave the sixth-century city back its walls, temples, and imports, and Cornell used that to rehabilitate parts of the tradition. Carandini pushed the rehabilitation as far as a name and was mostly not followed; Wiseman pushed the other way and made the twins a document of the middle Republic. The live question is no longer myth or fact but which layer of the tradition a given detail belongs to.</p>',
      ask: 'Which origin do you need in order to understand a census-class later — the myth of the twins, or the wet forum?'
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
        'Livy I — as a later Augustan moralist, not as a witness of 750 BC.',
        'The lapis niger and the Forum’s layers: a city that keeps burying its own beginnings.'
      ]
    }
  ]
});
