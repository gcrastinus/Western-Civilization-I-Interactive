WC1.contests.investiture = {
  id: 'investiture',
  book: { author: 'the field', title: 'the Investiture Contest', year: '1075–1122' },
  html: '<p>Who makes a bishop: the king who needs a loyal man in a city, or the Church that claims the staff and ring as spiritual things? The quarrel is a fight over two laws in one landscape — and over whether a priest-king can still exist in Latin Europe.</p><p>This is not a Reacting game. Read the documents as documents. Then say who could do what to whom.</p>',
  chronology: [
    { year: '1059', who: 'Papal election decree', note: 'Nicholas II, In nomine Domini: cardinal-bishops lead the election of a pope. A reform circle tries to take the papacy out of Roman families and to limit, not yet abolish, imperial say. Already a claim about who constitutes the Roman church.' },
    { year: '1075', who: 'Dictatus Papae', note: 'A register of claims in Gregory VII’s register: the pope may depose emperors; he alone is universal; he may unmake bishops. Whether it was a manifesto or a set of headings, it is a theory of the keys as a public law.' },
    { year: '1076–77', who: 'Worms / Canossa', note: 'German bishops at Worms renounce Gregory. Gregory binds Henry IV. At Canossa Henry stands as a penitent. The absolution is a sacramental act with political harvest: Henry is king again in the Church’s forum, and his Saxon enemies are not.' },
    { year: '1084–85', who: 'Clement III / death of Gregory', note: 'Henry takes Rome; Wibert of Ravenna (Clement III) crowns him emperor (1084); Gregory dies at Salerno (25 May 1085). Later lives give him the last words “I have loved justice and hated iniquity; therefore I die in exile.” A reform that can depose a king can also lose a city.' },
    { year: '1122', who: 'Worms', note: 'Concordat: in the Empire, free election, investiture with the sceptre (temporal) by the emperor, ring and staff (spiritual) by the Church. A split of symbols. The quarrel is not over. It has been given a procedure.' }
  ],
  topics: [
    {
      id: 'two-laws',
      title: 'Two laws, one landscape',
      lede: 'Gelasius already distinguished two. Investiture asks whether a king may still hand over a church as if it were a fief.',
      tension: 'Libertas ecclesiae can mean freedom from lay appointment, or a papal monarchy over kings. Kings hear the second even when reformers preach the first.',
      views: [
        {
          stance: 'opposing',
          scholar: 'The Gregorian claim (Dictatus Papae)',
          years: '1075',
          claim: 'The Roman church was founded by God alone. The pope may depose emperors. His sentence is not to be reviewed. A priest-king is a confusion of forums.',
          evidence: '<p>The twenty-seven dicta as a theory: not all were new, together they are a constitution. Gregory’s letters to Hermann of Metz argue that kings are men who can be judged. The efficient cause is a reform circle that had already tasted simony as a fiscal system.</p>'
        },
        {
          stance: 'opposing',
          scholar: 'The royal-sacral claim (Henry IV and the bishops of 1076)',
          claim: 'A king of the Romans is anointed. Bishops are his co-rulers of a Christian people. To deny him investiture is to un-make the kingdom as a sacred public thing.',
          evidence: '<p>The letter of the German bishops at Worms; Henry’s own letters. A bishopric in Saxony or Lombardy is a county with an altar. The material cause is land, tolls, and armed retinues, not only a theology of orders.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'Gerd Tellenbach',
          work: 'Church, State and Christian Society at the Time of the Investiture Contest',
          claim: 'The motor is libertas ecclesiae: a freedom of the Church as a distinct society, not originally a blueprint for papal world-rule.',
          evidence: '<p>Monastic reform, the attack on simony and nicolaitism, a language of freedom older than Gregory’s dictatus. Complementary to the documents; opposing to a story that begins with papal ambition as such.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'Walter Ullmann / Brian Tierney',
          claim: 'Ullmann: a hierocratic legal theory descending from the keys. Tierney: constitutional thought, including later conciliarism, is born from the same legal materials — the Church as a body that can have law against a head.',
          evidence: '<p>Canonistic texts, Gelasius, the later uses of the quarrel. Complementary because they explain why lawyers, not only saints, could inhabit this fight. The twelfth century will inherit a habit of distinguishing forums.</p>'
        }
      ],
      shifts: '<p>Older Protestant and Catholic narratives made Gregory a hero or a tyrant. Mid-twentieth-century work (Tellenbach, Southern, later Blumenthal) put reform, land, and law back together. Read Dictatus, Canossa, and Worms as three different instruments: a theory, a ritual, a treaty.</p>',
      ask: 'At Canossa, who won the afternoon? Who won the decade? The answers need not be the same man.'
    },
    {
      id: 'canossa',
      title: 'What Canossa was',
      lede: 'A king in the snow is an image. It is also a legal act.',
      tension: 'Absolution restores a communicant. It does not restore a political settlement with the Saxon opposition. Gregory may have been trapped by his own office as priest.',
      views: [
        {
          stance: 'opposing',
          scholar: 'The papal memory',
          claim: 'The king submitted. The keys were shown to work on the highest layman in the West.',
          evidence: '<p>Gregory’s own narrative of the three days; the later uses of Canossa as a picture of royal humiliation (including much later German politics, which are not our subject).</p>'
        },
        {
          stance: 'opposing',
          scholar: 'The royal recovery',
          claim: 'Henry lost a posture and gained a restored communion, which let him fight his German enemies as a king not cut off from the altar.',
          evidence: '<p>The war after 1077; the fact that deposition was easier to pronounce than to make stick without a coalition. Ritual victory and military recovery can inhabit one winter.</p>'
        },
        {
          stance: 'complementary',
          scholar: 'A sacramental reading',
          claim: 'Gregory the priest could not refuse a penitent who stood in the form. The office bound him. That is not naïveté; it is what a forum of penance is.',
          evidence: '<p>The distinction between the inner forum and the political coalition. Complementary to both memories: it explains why each could claim the event.</p>'
        }
      ],
      shifts: '<p>Treat Canossa as you would a court: who had standing, what act was performed, what it did not decide.</p>',
      ask: 'If Henry had not come to Canossa, what would Gregory have had left as an instrument — and what would the German princes have had?'
    }
  ]
};
