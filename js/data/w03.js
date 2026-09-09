WC1.registerWeek({
  id: 3,
  short: 'Ancient East',
  title: 'The ancient East',
  lens: 'Rivers, gods, lists, a people among nations',
  epigraph: {
    text: 'When the gods like men bore the work and suffered the toil…',
    who: 'Atrahasis',
    source: 'opening of the poem (paraphrase of a public-domain epic tradition)'
  },
  kicker: 'Week 3 · Nile, two rivers, Israel, a glance at India and China',
  lede: 'The atlas pages for this week are the assigned map-work. Here: a river world as material cause, a few public-domain voices, and a dispute about myth and “reality” — not a substitute for Liverani, Frankfort, or Walton.',
  rooms: [
    {
      id: 'ane',
      title: 'The hinge, about 1400 BC',
      nav: 'Map of the East',
      kind: 'map',
      type: 'map',
      blurb: 'Egypt, Hatti, Mitanni, Babylon, Assyria as a concert of palace-powers — not a map drawn around the later Bible.',
      question: {
        id: 'w03-q-ane',
        kind: 'mc',
        prompt: 'Around 1400 BC the eastern Mediterranean is best pictured as:',
        options: [
          { id: 'a', text: 'Israel already a great empire', correct: false },
          { id: 'b', text: 'A concert of palace-powers (Egypt, Hatti, Mitanni, Kassite Babylon, Assyria) writing to one another as kings', correct: true },
          { id: 'c', text: 'A void waiting for Greece', correct: false }
        ],
        reveal: '<p>The Amarna letters (fourteenth century BC) are the type of this world: kings who call each other “brother,” who send gold and daughters, who complain about caravans. Israel’s story, when it becomes a kingdom, is a late and small fact inside this concert of palaces — not the center of the map in 1400.</p>'
      },
      src: 'maps/ane.png',
      slot: 'w03-ane',
      filter: 'sand',
      alt: 'The Near East about 1400 BC',
      credit: 'Near East 1400 BCE (Wikimedia, public domain). CSS-filtered to the sand/lapis palette.',
      hotspots: [
        { x: 20, y: 82, title: 'Egypt (Memphis)', html: '<p>A river that floods with a calendar. The king is the one who makes that order visible. Pyramid, hymn, and office are one politics.</p>' },
        { x: 38, y: 16, title: 'Hatti (Hattusa)', html: '<p>A great power that later school maps forget. Treaties, a storm-god, a capital in the Anatolian highlands. The “Bible lands” are a small stage with large neighbors.</p>' },
        { x: 52, y: 40, title: 'Mitanni', html: '<p>A Hurrian kingdom whose letters sit in the Amarna file beside Egypt and Hatti. By 1400 it is still a brother-kingdom; Assyria will later eat it.</p>' },
        { x: 26, y: 72, title: 'Canaan and the coast', html: '<p>Ports and hill country. Ugarit is on this plate. Israel’s later claim is not that it was the strongest palace, but that a people can belong to a God who is not a city-god among others.</p>' },
        { x: 72, y: 48, title: 'Assur', html: '<p>Already a named power on this plate, not yet the later empire of the ninth century. Lists and letters outlast the walls.</p>' },
        { x: 80, y: 75, title: 'Kassite Babylon', html: '<p>The southern monarchy in 1400. Hammurabi’s stele is already two centuries behind this map; the habit of law as a public boast is not.</p>' }
      ]
    },
    {
      id: 'voices',
      title: 'Primary voices',
      nav: 'Voices',
      kind: 'passages',
      type: 'passages',
      blurb: 'Short public-domain sense of temple, instruction, and a people.',
      passages: [
        {
          title: 'Men were too noisy',
          who: 'Atrahasis (sense of the poem)',
          html: '<p>The gods made men to bear the toil the gods no longer wished to bear. Then the noise of men disturbed the rest of the high gods. The flood, in this poem, is a political-theological instrument: a reduction of the workforce that had become a nuisance. That is not the same story as Genesis. It is a palace world’s account of why a people can be too many.</p>',
          source: 'Paraphrase of a public-domain epic tradition; not a substitute for a facing-page text.'
        },
        {
          title: 'Instruction',
          who: 'The type of Ptahhotep',
          html: '<p>An old official teaches a son how to sit in an office: listen, do not be greedy; a man’s <em>ka</em> (his vital character) is shown in the king’s house. Wisdom here is a court art. The good life is a well-run room, not a battlefield and not a prophet’s lawsuit against the king.</p>'
        },
        {
          title: 'A people, not a palace only',
          who: 'Israel’s difference (as a historical claim)',
          html: '<p>Whatever one makes of the conquest narratives, the later prophets speak as if a people can be judged by a law that is not the king’s whim. That is a different vision of the good life from the god-king’s, even when Israel has kings. Keep it as a historical claim to be tested against the texts, not as a lesson already decided in advance.</p>'
        }
      ],
      ask: 'Which of these could not be spoken in the other two worlds without changing its meaning?'
    },
    {
      id: 'myth',
      title: 'Myth and “reality”',
      nav: 'Dispute: myth',
      kind: 'dispute',
      type: 'dispute',
      blurb: 'Frankfort’s warning, without assigning Frankfort this week.',
      positions: [
        {
          stance: 'opposing',
          scholar: 'Henri Frankfort (position)',
          work: 'Myth and Reality (as a type of argument)',
          summary: 'Myth is a way of being in the world, not a failed physics. To ask “did they really believe that?” as if they were bad scientists is to miss what the act of myth is doing.',
          html: '<p>The Memphite Theology — Ptah creating by speech and by craft — does not fail as physics; it was never attempting physics. What it does is put speech, craft, and kingship in one origin. If you translate it into “they thought Ptah was a person who invented tools,” you have already left their world and entered a modern quarrel about belief.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'A documentary reading',
          summary: 'Myths are also charters: they justify a temple’s income, a king’s levy, a city’s rank. Follow the grain and the office, not only the piety.',
          html: '<p>Mario Liverani’s kind of suspicion: a first city is an organization of surplus — who stores the grain, who eats, who serves. Hymns are part of that organization, not a separate spiritual layer. Both readings can be true at once. They are not the same question: one asks how the world is conceived; the other asks who is fed.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'Jean Bott\u00e9ro',
          work: 'Mesopotamian religion and divination',
          summary: 'Take the omen-lists as reasoning. Divination in Mesopotamia is an enormous, disciplined attempt to read a written world \u2014 nearer to a science of signs than to superstition.',
          html: '<p>Bott\u00e9ro read the liver-omens and the dream-books as what their compilers took them to be: a system in which the gods write and trained men read. Whether it worked is not the historian\u2019s first question. That a palace paid specialists to do it for two thousand years is a fact about how that world thought knowledge was got \u2014 and it makes the later Greek habit of putting questions to nature in public look like the strange thing it was.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'Jan Assmann',
          work: 'cultural memory; the Egyptian material',
          summary: 'A culture keeps itself by rehearsing a past. The question is less whether they believed it than what the rehearsal was for.',
          html: '<p>Assmann asks how a society stores and re-performs what it takes to be foundational \u2014 in rite, in monument, in a canon that may be copied but not altered. On that account the Memphite Theology and the great hymns are memory devices for a political order, and Akhenaten\u2019s brief revolution is a fight over what may be rehearsed in public. Assmann also presses a further and much-contested claim about what a religion changes when it begins to distinguish true worship from false; you can use his account of memory without taking on that thesis.</p>'
        }
      ],
      shifts: '<p>The old quarrel asked whether ancient people were bad scientists. Frankfort ended it by asking what the act of myth does; Liverani turned attention to who was fed; Bott\u00e9ro found rigorous procedure inside what had looked like superstition; Assmann asked what a society was doing when it repeated a story. None of the four replaced the others. They are four questions that can all be put to one hymn, and they will give four different answers.</p>',
      ask: 'When a hymn and a levy inhabit one temple, which reading is doing the work — and when do you need both?'
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
        'The in-depth East folder (Liverani, Frankfort, Walton, hymns) is for later curiosity, not a second assigned load this week.',
        'Hammurabi’s prologue is a public boast: read who the king claims to be for, then look at the penalties.'
      ]
    },
    {
      id: 'after-atlas',
      title: 'After the atlas pages',
      nav: 'Atlas again',
      kind: 'review',
      type: 'passages',
      review: true,
      blurb: 'When the week has ended: what the plates hid.',
      html: '<p>The atlas had to put Israel, Phoenicia, Egypt, Mesopotamia, China, and India in a handful of openings. What did a plate make look simultaneous that was not? What did a border make look hard that was a tax and a garrison?</p>',
      passages: [
        {
          title: 'A plate is an argument',
          who: 'After the atlas',
          html: '<p>Color on a historical map is a claim, not a photograph. “Empire” often means a king’s letter, a march, and a hope that the color will hold. Keep the Amarna file in mind: when kings call each other “brother,” that is diplomacy, not a feeling of kinship.</p>'
        }
      ],
      ask: 'Name one plate that helped and one that flattered a later Bible or school story.'
    }
  ]
});
