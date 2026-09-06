WC1.registerWeek({
  id: 11,
  short: 'Decline & kingdoms',
  title: 'Decline, Byzantium, barbarians',
  lens: 'A field at Adrianople; an eastern Rome; kingdoms on a former map',
  epigraph: {
    text: 'His body was never found.',
    who: 'Ammianus on Valens after Adrianople',
    source: 'Ammianus Marcellinus 31.13 (older English, public domain)'
  },
  kicker: 'Week 11 · 378, an eastern capital, peoples who become kingdoms',
  lede: 'The atlas pages on barbarian kingdoms and the eastern empire are assigned. Here Adrianople with counterfactuals, and the Fall of Rome as a scholarly contest — not a substitute for the plates or for Roman law if you chose it.',
  rooms: [
    {
      id: 'late',
      title: 'Two Romes on one map',
      nav: 'Map of the late empire',
      kind: 'map',
      type: 'map',
      blurb: 'A Danube, a Persian east, a western tax-base already fragile.',
      question: {
        id: 'w11-q-map',
        kind: 'mc',
        prompt: 'By the late fourth century, “Rome” is best pictured as:',
        options: [
          { id: 'a', text: 'A single city that still rules the world from the Forum', correct: false },
          { id: 'b', text: 'An eastern court with a tax-machine, and a western court whose provinces can be peeled by peoples on the move', correct: true },
          { id: 'c', text: 'Already the medieval papacy', correct: false }
        ],
        reveal: '<p>Constantinople is a second Rome with a better grain-route. The West still has a Senate and a name. The field at Adrianople is an eastern disaster with western consequences: it teaches that an emperor can die in the line, and that Gothic peoples will have to be bargained with inside the frontier.</p>'
      },
      src: 'maps/late-empire.png',
      slot: 'w11-late',
      filter: 'parchment',
      alt: 'The Roman world about AD 400',
      credit: 'The Roman Empire ca 400 AD (Wikimedia, public domain). CSS-filtered to parchment/purple.',
      hotspots: [
        { x: 62, y: 48, title: 'Constantinople', html: '<p>A capital chosen for a strait and a grain-road. The eastern court will outlast the western. “Byzantium” is later’s name; they called themselves Romans.</p>' },
        { x: 50, y: 32, title: 'The Danube', html: '<p>A frontier that becomes a crossing. Gothic groups under pressure from the Hunnic west ask to enter. The imperial answer — settlement, abuse, revolt — is the road to Adrianople (the city sits west of Constantinople on this shore).</p>' },
        { x: 42, y: 42, title: 'Italy and the western court', html: '<p>Milan, later Ravenna: emperors who do not always sit at Rome. A Senate that still speaks for a city. The later kingdoms will use both.</p>' },
        { x: 22, y: 38, title: 'Gaul and Spain', html: '<p>Provinces that will become Frankish, Gothic, Burgundian facts. The map-color in 400 is still imperial. The tax and the army are already a question.</p>' },
        { x: 84, y: 55, title: 'The eastern frontier', html: '<p>The Sasanian east is a school of Roman war. Julian dies on that frontier (363). The empire is two-front even when a textbook wants one “fall.”</p>' }
      ]
    },
    {
      id: 'adrianople',
      title: 'Adrianople, 9 August 378',
      nav: 'Adrianople',
      kind: 'battle',
      type: 'battle',
      blurb: 'Valens will not wait; a Gothic wagon-laager; an emperor missing.',
      duration: 32,
      map: {
        credit: 'Schematic: the road from Constantinople, a plain near Hadrianopolis, a Gothic camp of wagons.'
      },
      fieldSvg: '<svg viewBox="0 0 1000 620" role="img" aria-label="Adrianople">' +
        '<rect width="1000" height="620" fill="#e4d3b3"/>' +
        '<text x="40" y="36" font-size="14" font-family="ui-sans-serif,sans-serif">Thrace · 378</text>' +
        '<text x="80" y="500" font-size="13" fill="#5c2d6e">VALENS</text>' +
        '<text x="680" y="180" font-size="13" fill="#7a2e2a">FRITIGERN · wagon laager</text>' +
        '</svg>',
      sides: [
        { id: 'rom', name: 'Valens', color: '#5c2d6e' },
        { id: 'got', name: 'Fritigern’s Goths', color: '#7a2e2a' }
      ],
      resultFrom: 0.8,
      result: {
        short: 'Gothic victory; Valens dead',
        html: 'The eastern field army is broken. The emperor’s body is not securely found. Theodosius will have to settle with Goths as Goths. That is a new kind of Roman peace.'
      },
      units: [
        { id: 'valens', side: 'rom', label: 'Valens, center',
          path: [{ t: 0, x: 30, y: 60 }, { t: 0.4, x: 46, y: 48 }, { t: 0.7, x: 52, y: 42 }, { t: 1, x: 50, y: 44 }],
          labels: [{ t: 0.85, text: 'Valens lost' }],
          status: [{ t: 0.85, cls: 'captured' }] },
        { id: 'rom-left', side: 'rom', label: 'Roman left',
          path: [{ t: 0, x: 28, y: 40 }, { t: 0.45, x: 44, y: 34 }, { t: 1, x: 40, y: 30 }],
          status: [{ t: 0.8, cls: 'fleeing' }] },
        { id: 'got-laager', side: 'got', label: 'Wagon laager',
          path: [{ t: 0, x: 70, y: 28 }, { t: 1, x: 70, y: 28 }] },
        { id: 'got-horse', side: 'got', label: 'Gothic cavalry, returning',
          path: [{ t: 0, x: 88, y: 16 }, { t: 0.45, x: 70, y: 24 }, { t: 0.7, x: 56, y: 36 }, { t: 1, x: 48, y: 42 }],
          labels: [{ t: 0.5, text: 'cavalry returns' }],
          status: [{ t: 0.75, cls: 'victor' }] }
      ],
      beats: [
        { t: 0, title: 'A negotiation in the heat', html: '<p>Gothic groups, admitted across the Danube, have been abused and have revolted. Valens comes from Antioch. Gratian is on the way from the West. Fritigern talks, delays, and keeps a laager. The day is hot. The emperor wants the victory as his.</p>' },
        { t: 0.35, title: 'The infantry commits', html: '<p>Roman units go in before the army is fully deployed. A wagon-camp is a bad thing to assault in a hurry. Ammianus, who knew camps, makes the disorder a character.</p>' },
        { t: 0.65, title: 'The horse comes back', html: '<p>Gothic cavalry, away on forage in some reconstructions, hits a Roman army already stuck. Whether or not the timing is as neat as later diagrams, the structure is: a Roman field army caught between a laager and mobile horse.</p>' },
        { t: 1, title: 'No body, a new bargain', html: '<p>Valens dies, perhaps in a hut fired in the rout. The eastern army’s core is gone. Theodosius’s later settlement is not “Rome recovered.” It is Goths as a people with a king inside the empire’s skin.</p>' }
      ],
      counterfactuals: [
        {
          title: 'If Valens had waited for Gratian',
          beats: [
            { t: 0, title: 'A doubled army', html: '<p>The western emperor is coming. A joint field is the textbook caution. Valens’s officers, in Ammianus, are not all eager to share glory.</p>' },
            { t: 1, title: 'What waiting buys', html: '<p>It buys numbers and a colleague. It does not by itself teach the court how to settle peoples without making them armies. Adrianople might have been smaller. The Gothic problem would still have been a people, not a raid.</p>' }
          ],
          verdict: 'Waiting was available and was refused for reasons of office: a colleague’s glory. That is a political cause of a military disaster. It is not proof that patience would have restored the second-century frontier.'
        },
        {
          title: 'If the Goths had been fed, not cheated',
          beats: [
            { t: 0, title: 'The admission as a contract', html: '<p>The crossing of the Danube was a bargain: land and service against a Hunnic terror. Local commanders skimmed the grain. Revolt is a contract breaking.</p>' },
            { t: 1, title: 'Still a people in arms', html: '<p>Honest commissariat might have made federates. It might also have made a permanent armed nation on imperial soil — the later problem under another name. The counterfactual removes a crime. It does not remove a migration.</p>' }
          ],
          verdict: 'Abuse is a cause of 378. The Hunnic pressure and the imperial need for men are causes of the admission. A just ration is not a restored limes.'
        }
      ]
    },
    {
      id: 'fall',
      title: 'The Fall of Rome',
      nav: 'Contest: Fall',
      kind: 'contest',
      type: 'contest',
      contestId: 'fall',
      blurb: 'Gibbon, Pirenne, Brown, Heather, Ward-Perkins — what would count as a fall?'
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
        'Ammianus Marcellinus, the last books — a pagan officer writing the disaster.',
        'Optional: Tellegen-Couperus on the Dominate, if you are reading law this week.'
      ]
    }
  ]
});
