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
        reveal: '<p>Books, techniques, and lineages all matter. In this course they matter as material and efficient causes of communities — what a people is made from, and who acts. The thing being structured is a people’s attempt to live well in a place, not a list of famous titles.</p>'
      },
      src: 'maps/whole-past.svg',
      slot: 'w01-whole-past',
      filter: 'sand',
      alt: 'Schematic of the Old World for this course',
      credit: 'Course schematic, not a historical plate. The atlas remains the assigned map-work this week.',
      hotspots: [
        { x: 28, y: 35, title: 'Europe as a peninsula', html: '<p>Europe is a peninsula of Asia, with inland seas. That geography is not a destiny and does not explain later “Western” power by itself. It is a set of coasts, rivers, and winter rains on which city-cultures can later exist. Do not read that later West back onto the foragers who first walked the peninsula.</p>' },
        { x: 43, y: 45, title: 'The Near Eastern hinge', html: '<p>Between gulf, sea, and two rivers: the first places where cities, writing, and kings who claim the gods sit together. The next weeks of the course live here before they live in Greece.</p>' },
        { x: 36, y: 58, title: 'The Nile as a machine', html: '<p>A flood that can be timed is a material cause of a kind of kingship: the king is the one who makes that order visible. Egypt is not “the West.” It is one of the first answers to the problem of how a large farming people can live together.</p>' },
        { x: 80, y: 45, title: 'China as a comparison, not a foil', html: '<p>A high agrarian civilization with its own classics and its own account of “the one.” This course does not tour China. We keep it in view so that Greece is not mistaken for the human default — as if every people were trying to become Athens.</p>' },
        { x: 72, y: 64, title: 'India', html: '<p>Another long agrarian world, with its own accounts of the one and the many. Again: a comparison, not a chapter this course pretends to finish.</p>' }
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
        '<p>The syllabus’s claim is blunt, and it is two claims, not one. We study all communities because we want general knowledge about human nature and human life. We study our particular communities in order to live in them in the best way. Those are not the same sentence, and they do not always pull in the same direction.</p>' +
        '<p>A political community is ordered to a vision of the good life. Culture is the attempt to live in accord with that vision. Geography (<em>topos</em>) and that politics are what give the past its large shapes. Events — battles, laws, migrations — are how those shapes are tested, not a substitute for them.</p>' +
        '<p>This week’s assigned survey (Maxwell) is the first pass over the whole. Do not confuse the survey with the causes. Maxwell can tell you what is usually said to have happened. The four causes ask why a people could have those habits at all — what land, what acts, what vision of the good life made them possible.</p>' +
        '<p>Material cause, once, at the scale of the species: a world in which some peoples farm and some still forage is already two kinds of time, two kinds of memory, and two kinds of command. That is next week’s instrument. This week the task is simpler: do not let the globe collapse into Europe with a few ornaments around the edge.</p>'
    },
    {
      id: 'civilization',
      title: 'What “civilization” names',
      nav: 'Dispute: civilization',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Does the word name a city, a kind of manners, or a ranking of peoples?',
      question: {
        id: 'w01-q-civ',
        kind: 'mc',
        prompt: 'The least misleading first meaning of “civilization” in this course is:',
        options: [
          { id: 'a', text: 'Moral superiority of one people over another', correct: false },
          { id: 'b', text: 'A form of life that can sustain cities, surplus, and a public memory (writing, law, cult) across generations', correct: true },
          { id: 'c', text: 'Whatever Europeans later decided to inherit', correct: false }
        ],
        reveal: '<p>“Civilization” has been used as a compliment, as if some peoples had arrived and others had not. We still need a word for a large farming society that can teach, tax, and remember across generations. Use it that way — as a description of scale and of arts — and then argue about particular cases. Do not use it as praise.</p>'
      },
      positions: [
        {
          scholar: 'A civic sense',
          summary: 'Civilization names the city and the arts of living together at a large scale: walls, stored food, specialists, a law that can be cited in public.',
          html: '<p>Start from the Latin <em>civis</em>, a fellow of a city. On this view, “civilization” names a form of life in which strangers can be treated as fellows in a public: a market, a court, a temple, a wall. Homer’s warrior camps are not yet that. Uruk is trying to be. Rome will later make a science of it. The risk of this meaning is that foragers — small groups without cities — look like unfinished people. They are not unfinished. They live a good life at a different scale, with different arts of memory and command.</p>'
        },
        {
          scholar: 'A moralizing sense',
          summary: 'In the nineteenth century, “civilization” was often used as if human societies stood on a ladder, with “savagery” at the bottom and Europe at the top.',
          html: '<p>That usage is not a neutral description. It is a political claim: some peoples are complete, and others are earlier versions of them. Ranked that way, “civilization” already decides who counts as fully human. This course does not rank peoples that way. When the syllabus speaks of “the shape of the whole past,” it means the large structures of geography and political community — not a race among cultures to see who arrived first. If you find you cannot say “civilization” without implying that ladder, say “agrarian city-culture” instead. An awkward phrase is better than a word that has already delivered a verdict.</p>'
        },
        {
          scholar: 'A civilizational spine',
          summary: 'This syllabus still speaks of Western civilization as a historical inheritance of city, nature, and law, running through Greece and Rome.',
          html: '<p>That is a claim about what later Latin and vernacular Europe inherited and kept arguing with — city life, inquiry into nature, a law that can outlive a king. It is not a claim that Greeks and Romans were better souls than Egyptians or Chinese. Egypt and China are civilizations in the civic sense: large agrarian publics with writing, law, and cult. They are not the spine of <em>this</em> sequence, which is built for a course that ends at Investiture. If that distinction starts to sound like a sneer, open <em>The One and the Many</em> once, then come back to the evidence.</p>'
        }
      ],
      ask: 'When you hear “Western civilization” this term, which of the three uses is actually in the sentence — a city-form, a ranking, or an inheritance — and which one did you add without noticing?'
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
        'Keep Maxwell as a chronology and a set of names, not as a script you recite. If a sentence in it cannot survive the four causes — if it does not say what a people was made from, who acted, what form the habits took, or what they were for — mark it and ask why.',
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
      html: '<p>You have now walked a concise world history. Ask where the survey had to flatten a people into a stage on a ladder (“then came civilization”), and where it actually showed a community trying to live a good life in a particular place.</p>',
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
