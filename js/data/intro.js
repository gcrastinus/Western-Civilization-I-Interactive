WC1.intro = {
  kicker: 'Before the fourteen weeks',
  title: 'Beginnings to early medieval',
  lede: 'The question of this course is the shape of the whole human past: how geography and political community structure what peoples have been. A second question follows: why the weeks then run through Greece and Rome on the way to the Investiture Controversy, rather than remaining in Egypt or China.',
  about: '<p>The work moves through geography and political community, then into the ancient East, Greece, Rome, and the first Europe. Two instruments help. The first is an account of what a culture is, using Aristotle’s four causes (especially the material). The second is a spine: Greece and Rome are in the middle of this sequence because later Europe inherited from them a public life of the city, an inquiry into nature, and a law that can be cited after a king is dead — not because they were chosen as a Western preference. A third map, <em>The One and the Many</em>, is there when you need to compare Egypt, Israel, China, or later Islam without treating those comparisons as decoration.</p><p>This app does not replace Mike Maxwell, <em>The Student’s Friend</em>, David Christian, <em>This Fleeting World</em>, the Penguin Atlas, R. H. Barrows, <em>The Romans</em>, the assigned lives, or the Analyses of History and Oratory. It is a companion: maps, battlefields, reconstructions, and scholarly disputes.</p>',
  rooms: [
    {
      id: 'how',
      title: 'Finding your way',
      kind: 'orientation',
      blurb: 'When doors open; questions at the threshold; what stays on this machine.',
      html: '<p>Weeks open on the Mondays of Fall 2026. Until then a week stays shut. Week 13 is a study week: no new rooms. Week 14 is the Investiture quarrel, not a new survey.</p><p>At the door of a room you will often be asked something you should already know — from Maxwell, from Christian, from the atlas, from Barrows, or from last year’s humanities. The right answer is given, then you go in.</p><p>What you answer stays on this machine. Nothing about you is sent to the instructor.</p><p>The app will not retell that week’s assigned PDF while the week is live. After the week ends, a review layer may discuss it. Where a Greek or Latin original is on file and actually helps, a toggle will show it.</p>'
    },
    {
      id: 'culture',
      title: 'What a culture is',
      kind: 'instrument',
      blurb: 'Habits toward a vision of the good life; four causes, especially the material.',
      question: {
        id: 'q-culture',
        kind: 'mc',
        prompt: 'A culture, in the account used here, is primarily:',
        options: [
          { id: 'a', text: 'A set of artworks and monuments a people leaves behind', correct: false },
          { id: 'b', text: 'A set of habits shared among a group, aimed at the good life as that group understands it', correct: true },
          { id: 'c', text: 'The official religion of a state', correct: false },
          { id: 'd', text: 'The language a people speaks', correct: false }
        ],
        reveal: '<p>Art, law, language, and cult help form habits and show them. They are not themselves the definition of a culture. If the shared habits change, the culture has changed. If only the monuments change, you have changed a museum, not a people.</p>'
      },
      html:
        '<p>The good life here means flourishing as the group itself understands flourishing — not a slogan, and not “whatever people happen to like.” That shared vision is the <strong>final cause</strong> of the culture: the end toward which the habits are aimed, and the reason the rest of the culture is there. If that vision of the best life is false, the habits are still real. They will still form people.</p>' +
        '<p>Taken together, the habits have a character — what is often meant, sometimes unfairly and sometimes accurately, by a national temperament. That character is the <strong>formal cause</strong>. The point of naming it is not to collect stereotypes. It is to see what a people is disposed to do, and then, in one’s own case, to keep the strengths and refuse the vices.</p>' +
        '<p>Habits are acquired by repeated acts. Great deeds, battles, discoveries, and works of art matter because they are exemplary acts: other people take them as pictures of how to live. That is the <strong>efficient cause</strong>. Captains, lawgivers, and poets matter. So do “forces,” but not as a substitute for persons who act.</p>' +
        '<p>The <strong>material cause</strong> is what a culture can be made <em>from</em>: land and climate, lineage, and the speech and arts already practiced. Architecture is named as the master art because it sets bodies in places and assigns the other arts their sites. A river, a phalanx, a road, a camp, a census-class, or a scriptorium is usually material cause: the stuff without which a certain habit cannot exist, however sincerely it is preached.</p>' +
        '<p>The four causes are worth using only when they explain something concrete: why a hoplite can exist only where bronze, oil, and a citizen-farmer can be had together; why a Roman road makes a province governable; why a minuscule script makes an empire of clerks possible.</p>'
    },
    {
      id: 'spine',
      title: 'Why Greece and Rome',
      kind: 'spine',
      blurb: 'Why the course runs through Greece and Rome: city, nature, and law as a historical inheritance, not a taste.',
      question: {
        id: 'q-spine',
        kind: 'mc',
        prompt: 'This course treats Greece and Rome as the spine of “Western” civilization primarily because:',
        options: [
          { id: 'a', text: 'They were the only literate societies of the ancient world', correct: false },
          { id: 'b', text: 'They developed a public life of the city, an inquiry into nature, and a law that later Europe could inherit and quarrel over', correct: true },
          { id: 'c', text: 'Egypt and Mesopotamia have nothing to teach', correct: false },
          { id: 'd', text: 'The Renaissance invented them as a brand', correct: false }
        ],
        reveal: '<p>Egypt and Mesopotamia belong in the course because they are the first large agrarian civilizations whose voices we can still hear. Greece and Rome are the spine because later Europe’s cities, schools, and law courts keep answering them — including when they refuse them. That is a claim about what was inherited, not a ranking of which peoples were better.</p>'
      },
      type: 'passages',
      passages: [
        {
          title: 'Geography and the good life',
          who: 'The course’s own claim',
          html: '<p>What gives the past its major structures are geography (<em>topos</em>) and the politics of human communities over time. Each community is ordered to a particular kind of life — a shared vision of the good life. Culture is the attempt to live in accord with that vision. We study all communities because the goal is general knowledge about human nature; we study our particular communities in order to live in them well.</p>'
        },
        {
          title: 'The city as a public thing',
          who: 'Greece',
          html: '<p>The Greek <em>polis</em> is not merely a town with houses and a temple. It is a body of citizens who can be seen together, who can speak in an assembly, who can be tried in a court, and who can stand as hoplites in a line. Nature becomes a question that can be asked in public, not only a priest’s secret. That is new relative to the river empires, even while the Greeks are still offering sacrifice to gods. Homer’s world is already a world of named men in named places; the fifth century makes that world argue with itself in the open.</p>'
        },
        {
          title: 'Law that outlives a king',
          who: 'Rome',
          html: '<p>Rome’s difference is not a special supply of virtue. It is a people that can be counted, a road that can be marched, a camp that can be built by night, and a law that can be cited after the king is dead. The Twelve Tables, the census-classes that assign a man a place in the battle line, and the later <em>ius gentium</em> (the law among peoples) are instruments for turning a city into an empire without ceasing to talk like a city. Later Europe will take that law into the Church, into the universities, and into the quarrel at Canossa.</p>'
        }
      ],
      ask: 'Hold two thoughts at once. First: the ancient East is part of the course, not a prelude you can skip. Second: when this syllabus says “Western civilization,” it names a historical spine — city, nature, and law — from Greece and Rome to Investiture. It is not a compliment paid to Europe in advance.'
    }
  ]
};
