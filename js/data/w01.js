WC1.registerWeek({
  id: 1,
  short: 'Shape of the past',
  title: 'The shape of the whole past',
  lens: 'Geography, community, the good life',
  epigraph: {
    text: 'I shall proceed with my history, telling the story as I go of small cities of men no less than of great.',
    who: 'Herodotus',
    source: 'Histories 1.5 (A. D. Godley, public domain)'
  },
  kicker: 'Week 1 · topos, peoples, a vision of the good life',
  lede: 'You are already moving through Mike Maxwell, <em>The Student’s Friend Concise World History</em>. Here the question is prior: what <em>kind</em> of thing the past is, such that a fourteen-week course can have a shape at all.',
  rooms: [
    {
      id: 'whole',
      title: 'The Old World as a problem',
      nav: 'Map of the whole',
      kind: 'map',
      type: 'map',
      blurb: 'A schematic of belts and peoples — not a plate from the atlas.',
      question: {
        id: 'w01-q-whole',
        kind: 'mc',
        prompt: 'In this course, the major structures of the past are first of all:',
        options: [
          { id: 'a', text: 'Great books in a row', correct: false },
          { id: 'b', text: 'Geography and the political communities that try to live a shared good life on it', correct: true },
          { id: 'c', text: 'Technological stages that make culture a by-product', correct: false },
          { id: 'd', text: 'Race as an explanation', correct: false }
        ],
        reveal: '<p>Books, techniques, and lineages all matter. They matter as material and efficient causes of communities. The thing being structured is a people’s attempt to live well in a place.</p>'
      },
      src: 'maps/whole-past.svg',
      slot: 'w01-whole-past',
      filter: 'sand',
      alt: 'Schematic of the Old World for this course',
      credit: 'Course schematic, not a historical plate. The atlas remains the assigned map-work this week.',
      hotspots: [
        { x: 28, y: 35, title: 'Europe as a peninsula', html: '<p>A peninsula of Asia, with inland seas. That is not a destiny. It is a set of coasts, rivers, and winter rains on which later city-cultures can exist. Do not read later “West” back onto the foragers who first walked it.</p>' },
        { x: 43, y: 45, title: 'The Near Eastern hinge', html: '<p>Between gulf, sea, and two rivers: the first places where cities, writing, and kings who claim the gods sit together. Later weeks live here before they live in Greece.</p>' },
        { x: 36, y: 58, title: 'The Nile as a machine', html: '<p>A flood that can be timed is a material cause of a kind of kingship. Egypt is not “the West.” It is one of the first answers to the problem of a large agrarian people.</p>' },
        { x: 80, y: 45, title: 'China as a comparison, not a foil', html: '<p>A high agrarian civilization with its own classics and its own “one.” We do not tour it. We keep it in view so that Greece is not mistaken for the human default.</p>' },
        { x: 72, y: 64, title: 'India', html: '<p>Another long agrarian world, another set of accounts of the one and the many. Again: comparison, not a chapter we will pretend to finish.</p>' }
      ]
    },
    {
      id: 'causes',
      title: 'What we are asking',
      nav: 'Causes',
      kind: 'instrument',
      type: 'prose',
      blurb: 'General knowledge of human life; particular communities we must live in.',
      html:
        '<p>The syllabus’s claim is blunt. We study all communities because we want general knowledge about human nature and human life. We study our particular communities in order to live in them in the best way. Those are not the same sentence.</p>' +
        '<p>A political community is ordered to a vision of the good life. Culture is the attempt to live in accord with that vision. Geography (<em>topos</em>) and that politics are what give the past its large shapes. “Events” are how those shapes are tested.</p>' +
        '<p>This week’s assigned survey is the first pass over the whole. Do not confuse the survey with the causes. Maxwell can tell you what is usually said to have happened. The four causes ask why a people could have those habits at all.</p>' +
        '<p>Material cause, once, at the scale of the species: a world in which some peoples farm and some still forage is already two kinds of time, two kinds of memory, two kinds of king. That is next week’s instrument. This week, do not let the globe collapse into Europe plus ornaments.</p>'
    },
    {
      id: 'civilization',
      title: 'What “civilization” names',
      nav: 'Dispute: civilization',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'City, civility, or a ranking?',
      question: {
        id: 'w01-q-civ',
        kind: 'mc',
        prompt: 'The least bad first meaning of “civilization” in this course is:',
        options: [
          { id: 'a', text: 'Moral superiority of one people over another', correct: false },
          { id: 'b', text: 'A form of life that can sustain cities, surplus, and a public memory (writing, law, cult) across generations', correct: true },
          { id: 'c', text: 'Whatever Europeans later decided to inherit', correct: false }
        ],
        reveal: '<p>The word is stained. We still need a word for a large agrarian public that can be taught, taxed, and remembered. Use it as a description of scale and of arts, then argue. Do not use it as a compliment.</p>'
      },
      positions: [
        {
          scholar: 'A civic sense',
          summary: 'Civilization names the city and the arts of living together at scale: walls, surplus, specialists, a law that can be cited.',
          html: '<p>Position: start from <em>civis</em>. A civilization is what makes a stranger into a fellow in a public. Homer’s camps are not yet that; Uruk is trying to be; Rome will make a science of it. The risk is to treat foragers as unfinished people. They are not. They are a different scale of the good life.</p>'
        },
        {
          scholar: 'A moralizing sense',
          summary: 'Nineteenth-century usage: civilization as a ladder, with “savagery” below. The word then does political work.',
          html: '<p>Position: refuse the ladder. The course’s “shape of the whole past” is not a race. If “civilization” cannot be used without the ladder, say “agrarian city-culture” and move. Better a clunky phrase than a stolen verdict.</p>'
        },
        {
          scholar: 'A civilizational spine',
          summary: 'This syllabus still speaks of Western civilization as a historical inheritance of city, nature, and law, running through Greece and Rome.',
          html: '<p>Position: that spine is an inheritance claim, not a ranking of peoples. Egypt and China are civilizations in the civic sense. They are not the spine of the later Latin and vernacular Europe this sequence is for. The One and the Many is the overlay when that distinction starts to sound like a sneer.</p>'
        }
      ],
      ask: 'When you hear “Western civilization” this term, which of the three uses is in the sentence — and which did you smuggle in?'
    },
    {
      id: 'connections',
      title: 'Literature, art, music',
      nav: 'Connections',
      kind: 'connections',
      type: 'connections',
      blurb: 'The Standard of Ur; Atrahasis and the noise of men.'
    },
    {
      id: 'resources',
      title: 'Further',
      nav: 'Further',
      kind: 'resources',
      type: 'resources',
      blurb: 'Optional, after the rooms.',
      items: [
        'Keep Maxwell as a spine, not as a script. If a sentence in it cannot survive the four causes, mark it.',
        'The overlay <a href="#/overlay/one-many">The One and the Many</a> — once, then close it.'
      ]
    },
    {
      id: 'after-maxwell',
      title: 'After the survey',
      nav: 'The survey again',
      kind: 'review',
      type: 'passages',
      review: true,
      blurb: 'When the week has ended: what the concise history did and did not do.',
      html: '<p>You have now walked a concise world history. The question is only this: where did the survey have to flatten a people into a stage, and where did it actually show a community trying to live a good life in a place?</p>',
      passages: [
        {
          title: 'A concise history is a tool',
          who: 'After Maxwell',
          html: '<p>A student’s friend that runs from beginnings to the present cannot also be a primary source, an atlas, and a philosophy of history. Use it as a chronology and a set of names. Bring the causes yourself.</p>'
        }
      ],
      ask: 'Name one place in the survey where geography did the work, and one where a vision of the good life did.'
    }
  ]
});
