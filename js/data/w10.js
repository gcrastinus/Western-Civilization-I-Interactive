WC1.registerWeek({
  id: 10,
  short: 'Empire & Constantine',
  title: 'The Roman Empire and Constantine',
  lens: 'One man as the public; a God the city did not expect',
  epigraph: {
    text: 'I found Rome a city of brick and left it a city of marble.',
    who: 'Augustus (as later reported)',
    source: 'Suetonius, Augustus 28 (public domain sense)'
  },
  kicker: 'Week 10 · Res Gestae, a high empire, a conversion that is also a policy',
  lede: 'Barrows, and Suetonius’s Augustus or Tacitus’s Agricola. Here a map of the high empire, Augustus in his own (public) words, and a dispute about Constantine — without substituting for the assigned life.',
  rooms: [
    {
      id: 'empire',
      title: 'The high empire',
      nav: 'Map of empire',
      kind: 'map',
      type: 'map',
      blurb: 'A lake with a frontier; cities as the method.',
      question: {
        id: 'w10-q-map',
        kind: 'mc',
        prompt: 'The Roman Empire at its high extent is held together first by:',
        options: [
          { id: 'a', text: 'National feeling in the modern sense', correct: false },
          { id: 'b', text: 'Cities, law, a professional army on a frontier, and a princeps who is the public thing', correct: true },
          { id: 'c', text: 'A single language spoken in every village', correct: false }
        ],
        reveal: '<p>Latin and Greek split the administration. The villages live as they can. The machine is urban, legal, and military. When those fail, “Rome” becomes a name that more than one city will claim.</p>'
      },
      src: 'maps/roman-med.png',
      slot: 'w10-empire',
      filter: 'travertine',
      alt: 'Roman Empire in the second century',
      credit: 'Roman Empire 125 (Wikimedia, CC BY-SA 3.0). Trajan’s moment: a map of a claim that still has to be marched.',
      hotspots: [
        { x: 41, y: 50, title: 'Rome and Italy', html: '<p>Still the sacral center. Increasingly not the only engine. Grain from Africa and Egypt is a material cause of the city’s politics.</p>' },
        { x: 64, y: 56, title: 'The Greek east', html: '<p>Older cities, a language of culture, later the heavier half of the tax and the mind. Constantine will notice.</p>' },
        { x: 28, y: 22, title: 'The Rhine and Britain', html: '<p>A frontier of camps. Agricola (if you read him) is this fact as a biography: a man making a shore into a province, and a historian making that into an argument about liberty.</p>' },
        { x: 84, y: 58, title: 'The Euphrates', html: '<p>Parthia, later Sasanian Persia: the other great power. Roman “world” is a lake with a rival at one end.</p>' },
        { x: 40, y: 72, title: 'Africa', html: '<p>Estates, cities, later a granary whose loss will matter more than a lost battle in Gaul.</p>' }
      ]
    },
    {
      id: 'res-gestae',
      title: 'Augustus in his own boast',
      nav: 'Res Gestae',
      kind: 'passages',
      type: 'passages',
      blurb: 'A public inscription, not the assigned Suetonius.',
      passages: [
        {
          title: 'Restored the Republic',
          who: 'Augustus',
          work: 'Res Gestae 34 (sense)',
          html: '<p>After that time I excelled all in influence (<em>auctoritas</em>), but of power (<em>potestas</em>) I had no more than the others who were my colleagues in each magistracy. The new thing must be spoken as the old thing. A princeps is a first citizen. The army knows otherwise.</p>',
          original: '<p>Post id tempus auctoritate omnibus praestiti, potestatis autem nihilo amplius habui quam ceteri qui mihi quoque in magistratu conlegae fuerunt.</p>',
          source: 'Res Gestae Divi Augusti 34.3 (public domain).'
        },
        {
          title: 'The deeds',
          who: 'Augustus',
          html: '<p>Temples, games, money to the plebs, gates of Janus closed. A good life as a city that can see marble and cheap grain. The efficient cause of loyalty is listed as if it were piety. It is also a budget.</p>'
        }
      ],
      ask: 'Which sentence in the Res Gestae would be false if the army had not been his?'
    },
    {
      id: 'constantine',
      title: 'Constantine’s conversion',
      nav: 'Dispute: Constantine',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Vision, policy, or a new public of bishops?',
      positions: [
        {
          scholar: 'A religious reading',
          summary: 'A vision before the Milvian Bridge, a man who takes a God as his patron, later baptism. The empire acquires a cult that cannot be one among others.',
          html: '<p>Position: take the sources’ God seriously enough to argue with them. Eusebius is a courtier; that does not make the conversion a cartoon. A princeps who prays is still a princeps.</p>'
        },
        {
          scholar: 'A political reading',
          summary: 'Christianity was already a network of cities, bishops, and a people who would die rather than sacrifice. Constantine backs a public that can be a partner of the throne.',
          html: '<p>Position: the tetrarchy had already made the empire a theology of companions of Jupiter and Hercules. Constantine changes the names and the personnel. The material is an urban church that can be convened at Nicaea.</p>'
        }
      ],
      ask: 'If the vision had not happened, what in the empire’s structure still makes a Christian princeps thinkable by 312?'
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
        'The Res Gestae in a facing-page edition — a short document, worth reading whole.',
        'Eusebius, <em>Life of Constantine</em> — a bishop’s Augustus, with the dangers that implies.'
      ]
    }
  ]
});
