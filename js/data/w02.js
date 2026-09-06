WC1.registerWeek({
  id: 2,
  short: 'Three eras',
  title: 'The three eras of human history',
  lens: 'Foragers, agrarian, modern — as instruments',
  epigraph: {
    text: 'The gods keep hidden from men the means of life.',
    who: 'Hesiod',
    source: 'Works and Days 42 (Evelyn-White translation, public domain)'
  },
  kicker: 'Week 2 · foragers, fields, and a later machine world',
  lede: 'David Christian, <em>This Fleeting World</em>, gives three eras. Here they are treated as instruments: what kind of community, memory, and king each era can have — without retelling the book while you are still in it.',
  rooms: [
    {
      id: 'eras',
      title: 'Three kinds of time',
      nav: 'Map of eras',
      kind: 'map',
      type: 'map',
      blurb: 'The same schematic, read as kinds of life rather than as countries.',
      question: {
        id: 'w02-q-eras',
        kind: 'mc',
        prompt: 'The “agrarian era,” as an instrument, is first of all a claim about:',
        options: [
          { id: 'a', text: 'A single culture shared from China to Peru', correct: false },
          { id: 'b', text: 'A form of life in which farming, surplus, and (often) cities and kings become possible together', correct: true },
          { id: 'c', text: 'The invention of religion', correct: false }
        ],
        reveal: '<p>Agrarian life is a family of cultures, not one culture. What they share is a material cause: fields that can be stored, which can feed specialists, which can feed a palace and a temple. Foragers are not “pre-moral.” They are a different material.</p>'
      },
      src: 'maps/whole-past.svg',
      slot: 'w02-eras',
      filter: 'sand',
      alt: 'Schematic of the Old World, read as eras',
      credit: 'Course schematic. Christian remains the assigned reading; this is a map of questions, not of his chapters.',
      hotspots: [
        { x: 12, y: 88, title: 'Forager margins', html: '<p>Most of the human past by years. Small groups, deep skill, little surplus that a king could tax. Memory is story and place, not archive. Do not romanticize and do not condescend.</p>' },
        { x: 50, y: 82, title: 'The agrarian belt', html: '<p>A band of farming worlds, not a moment. Once you can store grain, you can have famine as a political fact, and priests and scribes as specialists. The “birth of civilization” is this material, locally, many times.</p>' },
        { x: 28, y: 35, title: 'Later Europe', html: '<p>The “modern era” in Christian’s sense is not this course’s center. Keep it on the horizon so that Greece and Rome are not asked to be industrial. They are agrarian city-cultures with a peculiar public.</p>' },
        { x: 43, y: 45, title: 'Where writing sticks', html: '<p>Writing is not a spirit. It is marks that a surplus can pay for. River empires get it early because they need lists. Greece will later make those marks argue in public. Different final causes, same invention in the warehouse.</p>' }
      ]
    },
    {
      id: 'instruments',
      title: 'What an era can hold',
      nav: 'Instruments',
      kind: 'instrument',
      type: 'prose',
      blurb: 'Community, memory, kingship — three tests for each era.',
      html:
        '<p>Use three tests on each era, then drop the ones that do not earn their keep.</p>' +
        '<p><strong>Community.</strong> How many people can share a good life as a “we”? A band, a village, a city, an empire, a church. The number is a material fact (food, roads, script) and a formal one (who counts as a fellow).</p>' +
        '<p><strong>Memory.</strong> What can be taught to the unborn? Song, rite, list, law, book. A people without archive is not a people without past. It is a people whose past is a different art.</p>' +
        '<p><strong>Kingship.</strong> Who may command, and in whose name — ancestors, gods, a law, a people? Foragers can have leaders. Agrarian worlds can have kings who are gods or who stand for gods. Greece will try, for a while, to have citizens instead. That try is later. Do not import it here.</p>' +
        '<p>The modern era, in this scheme, is a later intensification: fossil energy, states that count everyone, a claim to speak for “humanity.” It is the horizon of Maxwell’s second half. It is not the measure of Lycurgus.</p>'
    },
    {
      id: 'one-era',
      title: 'Is “agrarian” one thing?',
      nav: 'Dispute: one era?',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'A useful lump, or a lump that hides Egypt from China?',
      positions: [
        {
          scholar: 'The lump as instrument',
          summary: 'Calling ten thousand years “agrarian” is a way to see what farming does to kingship and memory. It is a telescope, not a portrait.',
          html: '<p>Position: without the lump you cannot see the species-level change. With only the lump you cannot see why Memphis is not Anyang. Use it, then climb down.</p>'
        },
        {
          scholar: 'The lump as distortion',
          summary: 'Egypt, Israel, Zhou China, and the Maya are not one “era” in any lived sense. The word flattens final causes.',
          html: '<p>Position: a god-king of the Nile and a mandate of Heaven are not two dialects of farming. If the era-language cannot say that, it is a stage-theory wearing a new name. The One and the Many is the overlay for this objection.</p>'
        }
      ],
      ask: 'Where does the three-era scheme help you read next week’s East, and where will it make every temple look the same?'
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
        'Christian’s prequel (the cosmic story) is not assigned. If you read it, keep it as scale, not as a substitute for peoples.',
        'Return to the overlay when “agrarian” starts to mean “everyone who is not us.”'
      ]
    },
    {
      id: 'after-christian',
      title: 'After the three parts',
      nav: 'Christian again',
      kind: 'review',
      type: 'passages',
      review: true,
      blurb: 'When the week has ended: what the three eras did to your map.',
      html: '<p>You have now read the three parts. Where did Christian have to speak of “humanity” as a single agent, and where did a particular people still have a face?</p>',
      passages: [
        {
          title: 'Scale is not a people',
          who: 'After Christian',
          html: '<p>A history of humanity can show energy, population, and thresholds. It cannot, by itself, tell you what a Spartan thought a good life was. That is not a defect if you do not ask it to.</p>'
        }
      ],
      ask: 'Write one sentence that Christian’s scale makes possible, and one that it forbids you to skip when you reach Greece.'
    }
  ]
});
