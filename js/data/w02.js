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
        reveal: '<p>Agrarian life is a family of cultures, not one culture shared from China to Peru. What they share is a material cause: fields whose harvest can be stored, which can feed specialists, which can feed a palace and a temple. Foragers are not “pre-moral,” as if morality began with farming. They live from a different material, at a different scale.</p>'
      },
      src: 'maps/whole-past.svg',
      slot: 'w02-eras',
      filter: 'sand',
      alt: 'Schematic of the Old World, read as eras',
      credit: 'Course schematic. Christian remains the assigned reading; this is a map of questions, not of his chapters.',
      hotspots: [
        { x: 12, y: 88, title: 'Forager margins', html: '<p>Most of the human past, counted in years, is forager life: small groups, deep skill in a landscape, little surplus that a king could tax. Memory is story and place, not an archive of lists. Do not romanticize that life, and do not treat it as childish.</p>' },
        { x: 50, y: 82, title: 'The agrarian belt', html: '<p>A band of farming worlds, not a single moment. Once you can store grain, famine becomes a political fact (someone decides who eats), and priests and scribes can live as specialists. What textbooks call the “birth of civilization” is this material, happening locally, many times.</p>' },
        { x: 28, y: 35, title: 'Later Europe', html: '<p>The “modern era” in Christian’s sense — fossil energy, states that count everyone — is not this course’s center. Keep it on the horizon so that Greece and Rome are not asked to be industrial. They are agrarian city-cultures with a peculiar public life, not early factories.</p>' },
        { x: 43, y: 45, title: 'Where writing sticks', html: '<p>Writing does not visit a people like a spirit. It is marks that a surplus can pay for: lists, rations, letters between kings. River empires get it early because they need those lists. Greece will later make the same kind of marks argue in public. Different ends; the same invention in the warehouse.</p>' }
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
        '<p>Use three tests on each era. If a test does not explain anything, drop it rather than forcing it.</p>' +
        '<p><strong>Community.</strong> How many people can share a good life as a “we”? A band, a village, a city, an empire, a church. The number is a material fact (food, roads, a script that can travel) and a formal one (who counts as a fellow, and who does not).</p>' +
        '<p><strong>Memory.</strong> What can be taught to people not yet born? Song, rite, list, law, book. A people without an archive is not a people without a past. It is a people whose past is carried by a different art.</p>' +
        '<p><strong>Kingship (command).</strong> Who may command, and in whose name — ancestors, gods, a law, a people? Foragers can have leaders. Agrarian worlds can have kings who are gods, or who stand for gods. Greece will try, for a while, to have citizens instead of a king. That attempt is later. Do not import it into the forager or early agrarian world as if it were the human default.</p>' +
        '<p>The modern era, in Christian’s scheme, is a later intensification: fossil energy, states that count everyone, a claim to speak for “humanity.” It is the horizon of Maxwell’s second half. It is not the measure of Lycurgus, or of a river king.</p>'
    },
    {
      id: 'one-era',
      title: 'Is “agrarian” one thing?',
      nav: 'Dispute: one era?',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Is “agrarian era” a useful grouping, or does it hide Egypt from China?',
      positions: [
        {
          stance: 'opposing',
          scholar: 'The grouping as an instrument',
          summary: 'Calling ten thousand years “agrarian” is a way to see what farming does to kingship and memory. It is a telescope, not a portrait of any one people.',
          html: '<p>Without some such grouping you cannot see the species-level change: stored harvest, specialists, palaces, lists. With only the grouping you cannot see why Memphis is not Anyang — why a Nile god-king is not a Zhou mandate of Heaven. Use the three eras to get the scale, then climb down to a particular people.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'The grouping as a distortion',
          summary: 'Egypt, Israel, Zhou China, and the Maya are not one “era” in any lived sense. The word flattens what each people thought the good life was.',
          html: '<p>A god-king of the Nile and a mandate of Heaven are not two dialects of farming. They are different visions of the good life, with different gods and different kinds of ruler. If the language of “eras” cannot say that, it is the old stage-theory (savagery, barbarism, civilization) wearing a new name. <em>The One and the Many</em> is the overlay for this objection: it maps how peoples conceived the world, which the era-scheme does not.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'Marshall Sahlins',
          years: '1972',
          work: 'Stone Age Economics',
          summary: 'Foragers are not people who failed to farm. On the evidence of hours worked, they were the original affluent society: modest wants, reliably met.',
          html: '<p>Sahlins assembled the time-budget studies then available and argued that hunter-gatherers spent strikingly few hours a day getting food, and did not store much because they did not need to. The figures have been disputed since, and the phrase was always partly a provocation. What survives the disputes is the point that matters for the era-scheme: farming is not a promotion. It buys a surplus at the price of labour, of a worse diet in the early stages, and of somebody who can now take a share.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'James C. Scott',
          years: '2017',
          work: 'Against the Grain',
          summary: 'Grain, not farming, is what makes a state possible. Cereals ripen at once, above ground, and can therefore be seen, counted, and taxed.',
          html: '<p>Scott argues in this course\u2019s own vocabulary, whether or not he would put it so: a tuber can be left in the ground and dug up after the tax-man leaves; a wheat field cannot. Between the first domestication and the first states lie thousands of years, which is a hole in any scheme that treats farming and kingship as one step. He adds that walking away was an option people took, so the agrarian era contains a long history of refusals. His enthusiasm for those refusals is contested; the argument about grain and legibility is not.</p>'
        }
      ],
      shifts: '<p>The three eras come out of a mid-century tradition \u2014 Gordon Childe\u2019s revolutions, William McNeill\u2019s world history \u2014 that wanted a species-scale story and got one. The anthropologists then removed the assumption that each step was an improvement; a later political science removed the assumption that farming and the state arrive together. What is left is a scheme good for scale and poor at content, which is how this week asks you to use it.</p>',
      ask: 'Where does the three-era scheme help you read next week’s ancient East, and where will it make every temple look the same?'
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
        'Return to <a href="#/overlay/one-many">The One and the Many</a> when “agrarian” starts to mean “everyone who is not us,” as if farming peoples were one people.'
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
          html: '<p>A history of humanity can show energy, population, and thresholds — when farming begins, when cities appear, when fossil fuels change the scale. It cannot, by itself, tell you what a Spartan thought a good life was. That is not a defect in Christian if you do not ask his book to do that work.</p>'
        }
      ],
      ask: 'Write one sentence that Christian’s scale makes possible, and one that it forbids you to skip when you reach Greece.'
    }
  ]
});
