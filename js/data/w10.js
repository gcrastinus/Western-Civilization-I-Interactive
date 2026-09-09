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
          html: '<p>After that time I excelled all in influence (<em>auctoritas</em>), but of power (<em>potestas</em>) I had no more than the others who were my colleagues in each magistracy. The new thing — one man first among all — must be spoken as the old thing, a restored republic of colleagues. A <em>princeps</em> is a first citizen. The army, which is his, knows otherwise.</p>',
          original: '<p>Post id tempus auctoritate omnibus praestiti, potestatis autem nihilo amplius habui quam ceteri qui mihi quoque in magistratu conlegae fuerunt.</p>',
          source: 'Res Gestae Divi Augusti 34.3 (public domain).'
        },
        {
          title: 'The deeds',
          who: 'Augustus',
          html: '<p>Temples, games, money to the plebs, the gates of Janus closed (a sign of peace). The good life is shown as a city that can see marble and eat cheap grain. The list of deeds is written as piety and restoration. It is also a budget: who is paid, who is fed, who sees the buildings.</p>'
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
          stance: 'opposing',
          scholar: 'A religious reading',
          summary: 'A vision before the Milvian Bridge, a man who takes a God as his patron, later baptism. The empire acquires a cult that cannot be one among others.',
          html: '<p>Take the sources’ God seriously enough to argue with them. Eusebius is a courtier writing for Constantine; that does not make the conversion a cartoon or a lie. A princeps who prays is still a princeps: the vision, if it happened, does not stop him from being a ruler who needs armies, taxes, and a public cult that can hold the empire together.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'A political reading',
          summary: 'Christianity was already a network of cities, bishops, and a people who would die rather than sacrifice. Constantine backs a public that can be a partner of the throne.',
          html: '<p>The tetrarchy (Diocletian’s four-emperor system) had already made the empire a theology of companions of Jupiter and Hercules: rulers with divine patrons. Constantine changes the names and the personnel. The material he can use is an urban church — bishops in cities, a people who would die rather than sacrifice — that can be convened at Nicaea (325) as a partner of the throne. On this view the conversion is also a policy: backing a public that can travel with the empire.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'Jacob Burckhardt',
          years: '1853',
          work: 'The Age of Constantine the Great',
          summary: 'A calculating politician without religion, who used a church as he would have used anything else.',
          html: '<p>Burckhardt\u2019s Constantine is a man of genius and no faith, and Eusebius is his propagandist. The portrait dominated the nineteenth century and is still the default suspicion when a student first meets the vision. Its weakness is that it explains the awkward evidence \u2014 the letters, the money, the years spent on a doctrinal quarrel about a Greek word \u2014 by assuming in advance that no ruler can mean it.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'Norman H. Baynes and A. H. M. Jones',
          years: '1930\u201348',
          work: 'Constantine the Great and the Christian Church',
          summary: 'Take the sincerity seriously. On the evidence of his own letters he believed he had been given a commission, and it was politically inconvenient as often as not.',
          html: '<p>Baynes argued from the documents Constantine issued rather than from Eusebius\u2019s panegyric, and found a man convinced that the God of the Christians had granted him victory and would hold him accountable for the Church\u2019s unity. A. H. M. Jones made the same case in plainer terms: in 312 the Christians were a small minority in the West, so backing them was not the shrewd move. Conversion as calculation has to explain why the calculation looks bad.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'Timothy D. Barnes',
          years: '1981\u20132011',
          work: 'Constantine and Eusebius',
          summary: 'The documents can be dated and read. He was a Christian from 312, and the empire\u2019s Christianization was quicker and more deliberate than the older picture allowed.',
          html: '<p>Barnes rebuilt the chronology from laws, inscriptions, and the surviving imperial letters, and used it against the idea of a slow, hedged, half-pagan reign. The programme is visible early: privileges for clergy, the settlement of the Donatist quarrel, a council summoned by an emperor. Complementary because it supplies the documentary spine that both the religious and the political readings need before either can argue.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'H. A. Drake',
          years: '2000',
          work: 'Constantine and the Bishops',
          summary: 'The interesting question is not what he believed but what kind of politics he was building: a coalition, with bishops as partners, held together by a policy of consensus.',
          html: '<p>Drake reads the reign as an attempt to construct a broad settlement in which Christians and others could both be governed, and reads the later intolerance as the failure of that project rather than its intention. Complementary because it dissolves the false pair the room began with: a man may pray and calculate in the same act, and the historian\u2019s job is to describe the coalition he was assembling.</p>'
        }
      ],
      shifts: '<p>Burckhardt made the cynical reading respectable; Baynes and Jones made sincerity arguable again by going to Constantine\u2019s own letters; Barnes fixed the chronology so that the debate had dates; Drake changed the question from belief to coalition-building. The old alternative \u2014 vision or policy \u2014 has largely dissolved, and what remains is a harder question about what an emperor could and could not do with a church he did not control.</p>',
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
