WC1.registerWeek({
  id: 12,
  short: 'Charlemagne',
  title: 'Charlemagne',
  lens: 'A Frankish king, a script, a second Rome of clerks',
  epigraph: {
    text: 'On the Lord’s birthday, as the king rose from prayer before the tomb of Peter, Pope Leo placed a crown on his head.',
    who: 'Royal Frankish Annals',
    source: 'year 800, compressed from the court annal (public domain). Einhard’s Life is the assigned reading; this is not it.'
  },
  kicker: 'Week 12 · Aachen, a minuscule, a crown that needs a pope',
  lede: 'Einhard is assigned. Here a map of Frankish growth, a reconstruction of the scriptorium, and the political fact of a western emperor again — without retelling the Life while you are in it.',
  rooms: [
    {
      id: 'franks',
      title: 'A western empire of roads and palaces',
      nav: 'Map of the Franks',
      kind: 'map',
      type: 'map',
      blurb: 'From Clovis’s war-bands to a court that can summon bishops.',
      question: {
        id: 'w12-q-map',
        kind: 'mc',
        prompt: 'Charlemagne’s “empire” is best described as:',
        options: [
          { id: 'a', text: 'A restored Roman state with the old tax-machine intact', correct: false },
          { id: 'b', text: 'A Frankish hegemony over peoples, held by itinerant kingship, counts, bishops, and a court culture of clerks', correct: true },
          { id: 'c', text: 'A nation-state of France', correct: false }
        ],
        reveal: '<p>He is crowned emperor in 800 because a western Rome of a new kind needs a name. The tax-machine of Trajan is not back. What is back is a claim: one man, a Christian people, a Latin clerkdom.</p>'
      },
      src: 'maps/carolingian.png',
      slot: 'w12-carolingian',
      filter: 'parchment',
      alt: 'The Frankish kingdom under Charlemagne and his descendants, to 900 (Spruner-Menke)',
      credit: 'Spruner-Menke, <em>Reich der Franken unter Karl dem Grossen</em> (1876), public domain. The plate includes the later partitions to 900; read Charlemagne’s hegemony first.',
      hotspots: [
        { x: 40, y: 30, title: 'Aachen and the lower Rhine', html: '<p>A palace, a chapel, a court that moves. Kingship here is a road of assemblies, not a city that is the world.</p>' },
        { x: 26, y: 60, title: 'Aquitaine', html: '<p>A different law, a different speech, marked on this plate. Frankish hegemony is a stack of peoples. “Europe” as a word will later live on this stack.</p>' },
        { x: 52, y: 22, title: 'Saxony', html: '<p>A long, brutal incorporation. Conversion and countship arrive together. The good life being imposed is a Christian Frankish one, with the sword as efficient cause.</p>' },
        { x: 50, y: 58, title: 'Lombardy', html: '<p>The iron crown, the papal need for a protector. Two laws already in one landscape: the pope’s and the king’s.</p>' },
        { x: 52, y: 78, title: 'Rome', html: '<p>The coronation of 800. Study week, then Investiture, will make that split a war of staff and ring.</p>' }
      ]
    },
    {
      id: 'scriptorium',
      title: 'Minuscule',
      nav: 'Scriptorium',
      kind: 'reconstruction',
      type: 'reconstruction',
      demo: 'scriptorium',
      blurb: 'A script as a material cause of a kingdom of clerks.',
      question: {
        id: 'w12-q-script',
        kind: 'mc',
        prompt: 'Carolingian minuscule matters politically because:',
        options: [
          { id: 'a', text: 'It is prettier than Merovingian hands', correct: false },
          { id: 'b', text: 'A common, readable book-hand lets a court send the same law and the same Scripture to Tours, Aachen, and York', correct: true },
          { id: 'c', text: 'It proves the Romans had returned', correct: false }
        ],
        reveal: '<p>Alcuin and the palace school are persons. The script is a tool. Administration is a habit that needs both. Our own printed letters still live on that tool — a long material afterlife.</p>'
      },
      steps: [
        { title: 'The problem of hands', html: '<p>Merovingian and other cursives can be local to the point of privacy. A king who wants a Bible, a rule, and a capitulary to travel needs a hand that a stranger can read.</p>', n: 0 },
        { title: 'The letter-forms', html: '<p>Clear minuscule: separate letters, a disciplined alphabet. Luxury volumes still take uncial for display. The working book is the minuscule. That split is already a politics of who the book is for.</p>', n: 1 },
        { title: 'A court of clerks', html: '<p>The palace chapel, the school, the network of monasteries. Einhard’s Charlemagne loves the arts; the state loves the clerks. A reform of writing is a reform of government, even when it is preached as piety.</p>', n: 3 }
      ]
    },
    {
      id: 'crown',
      title: 'The crown of 800',
      nav: 'Dispute: 800',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Who made an emperor — a pope in St Peter’s, or a Frankish fact?',
      positions: [
        {
          scholar: 'The papal story',
          summary: 'Leo III crowns a protector. The keys make a western emperor. Later Gregorians will remember this as a precedent of making and unmaking.',
          html: '<p>Position: a coronation in St Peter’s is not a decoration. It is a public act in a particular church. Investiture will ask whether that act can run in reverse.</p>'
        },
        {
          scholar: 'The Frankish story',
          summary: 'Charles already ruled a hegemony. The title names a fact. Einhard’s embarrassment about the coronation (if it is embarrassment) is a king’s dislike of seeming to owe a priest.',
          html: '<p>Position: without the Frankish army and the Saxon wars, the pope is a bishop in a dangerous city. The dispute is not whether 800 happened. It is which office was the efficient cause of the other.</p>'
        }
      ],
      ask: 'Keep this quarrel until week 14. What in 800 already contains Canossa, and what in 800 is still a world where king and priest eat at one table?'
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
        'A page of Carolingian minuscule (any library image) — look at the letter-forms, then at whose name is in the colophon.',
        'Notker’s anecdotes, later, if you want the court as a set of stories rather than as Einhard’s architecture.'
      ]
    },
    {
      id: 'after-einhard',
      title: 'After the Life',
      nav: 'The assigned life',
      kind: 'review',
      type: 'passages',
      review: true,
      blurb: 'When the week has ended: Einhard’s architecture of a king.',
      html: '<p>Einhard builds a Suetonian house and puts a Frank in it. What in the Life is a palace you could walk, and what is a classical furniture of virtues?</p>',
      passages: [
        {
          title: 'A courtier’s measure',
          who: 'After Einhard',
          html: '<p>The voice is a man who ate at the table. That is evidence. It is also a limit: we hear the palace more than the Saxon farm that was burned to make the palace possible.</p>'
        }
      ],
      ask: 'Where did Einhard help the scriptorium-room, and where did he make Charlemagne look like a Roman statue?'
    }
  ]
});
