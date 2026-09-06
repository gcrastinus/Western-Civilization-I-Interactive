WC1.engines.reconstruction = function (spec, mount) {
  let i = 0;
  const steps = spec.steps || [];
  const nav = WC1.el('div', { class: 'steps' });
  const demo = WC1.el('div', { class: 'demo', id: 'demo-' + spec.demo });
  const prose = WC1.el('div', { class: 'prose' });

  function go(n) {
    i = Math.max(0, Math.min(steps.length - 1, n));
    nav.querySelectorAll('button').forEach(function (b, k) {
      b.classList.toggle('on', k === i);
    });
    const st = steps[i];
    WC1.clear(prose);
    prose.appendChild(WC1.el('h3', { text: st.title }));
    prose.appendChild(WC1.el('div', { html: st.html }));
    const fn = WC1.recon[spec.demo];
    if (fn) fn(demo, st, spec, i);
    WC1.track('#/recon/' + spec.demo + '/' + i, spec.title + ' · ' + st.title);
  }

  steps.forEach(function (st, k) {
    const b = WC1.el('button', { type: 'button', text: (k + 1) + '. ' + st.title });
    b.addEventListener('click', function () { go(k); });
    nav.appendChild(b);
  });
  const row = WC1.el('div', { class: 'battle-ui' });
  const prev = WC1.el('button', { class: 'tbtn', type: 'button', text: 'Previous' });
  const next = WC1.el('button', { class: 'tbtn', type: 'button', text: 'Next' });
  prev.addEventListener('click', function () { go(i - 1); });
  next.addEventListener('click', function () { go(i + 1); });
  row.appendChild(prev);
  row.appendChild(next);

  mount.appendChild(nav);
  mount.appendChild(demo);
  mount.appendChild(prose);
  mount.appendChild(row);
  go(0);
};

WC1.recon.phalanx = function (el, step) {
  const rows = (step.rows != null) ? step.rows : 8;
  const overlap = (step.overlap != null) ? step.overlap : 10;
  const n = 10;
  let men = '';
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < n; c++) {
      const x = 40 + c * 28 + (r % 2) * 4;
      const y = 40 + r * 18;
      men += '<g transform="translate(' + x + ' ' + y + ')">' +
        '<ellipse cx="0" cy="6" rx="' + (14 + overlap / 4) + '" ry="10" fill="rgba(26,74,92,.35)" stroke="#1a4a5c"/>' +
        '<circle cx="0" cy="0" r="4" fill="#8a5a28"/>' +
        '<line x1="8" y1="-8" x2="18" y2="-28" stroke="#2a2118" stroke-width="2"/>' +
        '</g>';
    }
  }
  el.innerHTML = '<svg viewBox="0 0 360 220" role="img" aria-label="Hoplite phalanx">' +
    '<rect width="360" height="220" fill="#e8eef2"/>' +
    men +
    '<text x="180" y="210" text-anchor="middle" font-size="12">depth ' + rows + ' · shield overlap as a wall, not as a pile of heroes</text>' +
    '</svg>';
};

WC1.recon.camp = function (el, step) {
  const gate = step.gate || 'porta praetoria';
  el.innerHTML = '<svg viewBox="0 0 420 280" role="img" aria-label="Roman marching camp">' +
    '<rect width="420" height="280" fill="#efe6d6"/>' +
    '<rect x="30" y="24" width="360" height="232" fill="none" stroke="#8b5a2b" stroke-width="6"/>' +
    '<rect x="38" y="32" width="344" height="216" fill="none" stroke="#8b5a2b" stroke-dasharray="4 3"/>' +
    '<line x1="30" y1="140" x2="390" y2="140" stroke="#7a2e2a" stroke-width="3"/>' +
    '<line x1="210" y1="24" x2="210" y2="256" stroke="#7a2e2a" stroke-width="3"/>' +
    '<rect x="186" y="118" width="48" height="44" fill="#c4a35a" stroke="#2a1c12"/>' +
    '<text x="210" y="144" text-anchor="middle" font-size="10">praetorium</text>' +
    '<text x="210" y="18" text-anchor="middle" font-size="12">' + gate + '</text>' +
    '<text x="210" y="274" text-anchor="middle" font-size="11">via principalis × via praetoria · a city that can be built by night</text>' +
    '</svg>';
};

WC1.recon.census = function (el, step) {
  const n = step.n != null ? step.n : 1;
  const rows = [
    ['class I', '100,000 asses', 'a full panoply; the front of the line'],
    ['class III', '50,000', 'a spear, a shield, a place in the middle'],
    ['class V', '11,000', 'a sling; counted, but barely armed'],
    ['capite censi', 'a head', 'counted as a head; not as a fortune']
  ];
  el.innerHTML = '<div style="font-family:var(--sans);font-size:14px">' +
    '<p><strong>Servian census (as later Romans told it)</strong> — property class is a military class.</p>' +
    '<table style="width:100%;border-collapse:collapse">' +
    rows.map(function (r, i) {
      const on = i === Math.min(n, rows.length - 1);
      return '<tr style="background:' + (on ? 'color-mix(in srgb,var(--gold) 22%,var(--panel))' : 'transparent') + '">' +
        r.map(function (c) { return '<td style="border-bottom:1px solid var(--rule);padding:8px 10px">' + c + '</td>'; }).join('') +
        '</tr>';
    }).join('') +
    '</table></div>';
};

WC1.recon.tables = function (el, step) {
  const shown = step.n != null ? step.n : 3;
  const clauses = [
    'If he calls him to court, he is to go.',
    'A heavily indebted man may be sold across the Tiber.',
    'A father has power of life and death over a son.',
    'If a patron defrauds a client, he is sacer.',
    'No marriage between patrician and plebeian. (Later repealed.)',
    'What the people has last ordered is law.'
  ];
  let tabs = '';
  for (let i = 0; i < 12; i++) {
    const on = i < shown;
    tabs += '<div style="border:1px solid var(--rule);border-radius:6px;padding:10px 8px;min-height:72px;background:' +
      (on ? 'color-mix(in srgb,var(--gold) 18%,var(--panel))' : 'var(--panel2)') + ';font-size:12px">' +
      '<strong>T. ' + (i + 1) + '</strong><br>' + (on && clauses[i] ? clauses[i] : '') + '</div>';
  }
  el.innerHTML = '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;font-family:var(--sans)">' + tabs + '</div>' +
    '<p class="who" style="padding:8px 4px">Bronze (or painted wood) in the Forum: a law you can point at. The wording above is English paraphrase of later citations, not a recovered bronze.</p>';
};

WC1.recon.geometry = function (el, step) {
  const stage = step.stage != null ? step.stage : 2;
  const a = 60, b = 80, c = 100;
  const ox = 80, oy = 170;
  const sq = function (x, y, w, h, rot, fill) {
    return '<g transform="translate(' + x + ' ' + y + ') rotate(' + rot + ')">' +
      '<rect width="' + w + '" height="' + h + '" fill="' + fill + '" stroke="#1a4a5c"/>' +
      '</g>';
  };
  el.innerHTML = '<svg viewBox="0 0 420 260" role="img" aria-label="Right triangle and squares on the sides">' +
    '<rect width="420" height="260" fill="#e8eef2"/>' +
    '<polygon points="' + ox + ',' + oy + ' ' + (ox + b) + ',' + oy + ' ' + ox + ',' + (oy - a) + '" fill="rgba(26,74,92,.16)" stroke="#1a4a5c" stroke-width="2"/>' +
    (stage >= 1 ? sq(ox, oy, b, b, 0, 'rgba(138,90,40,.18)') : '') +
    (stage >= 2 ? sq(ox, oy - a, a, a, -90, 'rgba(26,74,92,.18)') : '') +
    (stage >= 3 ? '<g transform="translate(' + ox + ' ' + (oy - a) + ') rotate(' + (-Math.atan(a / b) * 180 / Math.PI) + ')">' +
      '<rect width="' + c + '" height="' + c + '" fill="rgba(92,45,110,.14)" stroke="#5c2d6e"/></g>' : '') +
    '<text x="210" y="24" text-anchor="middle" font-size="13">The square on the hypotenuse equals the squares on the sides</text>' +
    '<text x="210" y="248" text-anchor="middle" font-size="12">A proof is a public act: anyone who grants the figure is bound</text>' +
    '</svg>';
};

WC1.recon.scriptorium = function (el, step) {
  const n = step.n != null ? step.n : 0;
  const lines = [
    'ABCD EFGH IKLM NOPQ',
    'a clear minuscule: a b d e g o p q',
    'et verbum caro factum est',
    'one alphabet for a kingdom of clerks'
  ];
  el.innerHTML = '<div style="background:#f3ead8;border:1px solid var(--rule);border-radius:10px;padding:18px 20px;min-height:160px">' +
    '<p style="font-family:var(--serif);font-size:22px;letter-spacing:.04em;margin:0 0 8px">Carolingian minuscule</p>' +
    lines.slice(0, n + 1).map(function (l) {
      return '<p style="font-family:Palatino,Georgia,serif;font-size:20px;margin:6px 0">' + l + '</p>';
    }).join('') +
    '<p class="who">A script is a material cause of administration: the same letter-forms in Tours, Aachen, and York.</p>' +
    '</div>';
};

WC1.recon['mean-speed'] = function (el, step) {
  const T = (step.T != null) ? step.T : 8;
  const vmax = 12;
  const w = 520, h = 280, p = 40;
  const x = function (t) { return p + (t / T) * (w - 2 * p); };
  const y = function (v) { return h - p - (v / vmax) * (h - 2 * p); };
  const mean = vmax / 2;
  el.innerHTML = '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="Oresme triangle of speeds">' +
    '<rect width="' + w + '" height="' + h + '" fill="transparent"/>' +
    '<polygon points="' + x(0) + ',' + y(0) + ' ' + x(T) + ',' + y(0) + ' ' + x(T) + ',' + y(vmax) + '" fill="rgba(123,45,38,.22)" stroke="#7b2d26" />' +
    '<rect x="' + x(0) + '" y="' + y(mean) + '" width="' + (x(T) - x(0)) + '" height="' + (y(0) - y(mean)) + '" fill="rgba(30,58,95,.18)" stroke="#1e3a5f" />' +
    '<text x="' + (w / 2) + '" y="22" text-anchor="middle" font-size="13" fill="currentColor">Triangle of speeds (uniform acceleration) = rectangle at the mean speed</text>' +
    '<text x="' + x(T) + '" y="' + (y(0) + 16) + '" text-anchor="end" font-size="12">time</text>' +
    '<text x="' + (x(0) - 8) + '" y="' + y(vmax) + '" text-anchor="end" font-size="12">speed</text>' +
    '</svg>';
};

WC1.recon.computus = function (el, step, spec) {
  const year = (step.year != null) ? step.year : 1215;
  const golden = (year % 19) + 1;
  const epact = (11 * (golden - 1)) % 30;
  /* Simplified Julian Easter (Dionysian): */
  const a = year % 19, b = year % 4, c = year % 7;
  const d = (19 * a + 15) % 30;
  const e = (2 * b + 4 * c - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31);
  const day = ((d + e + 114) % 31) + 1;
  const months = { 3: 'March', 4: 'April' };
  el.innerHTML = '<div style="font-family:var(--sans);font-size:15px;padding:8px 10px">' +
    '<p><strong>Year ' + year + '</strong> (Julian tables the computists actually used)</p>' +
    '<ol>' +
    '<li>Golden number = (year mod 19) + 1 = <strong>' + golden + '</strong></li>' +
    '<li>Epact (age of the moon on 22 March) ≈ <strong>' + epact + '</strong></li>' +
    '<li>Sunday letter from the solar cycle (year mod 28)</li>' +
    '<li>Easter Sunday falls on <strong>' + (months[month] || month) + ' ' + day + '</strong></li>' +
    '</ol>' +
    '<p class="who">The tables exist so that a cathedral chapter in York and a convent in Cologne keep the same feast. That is a legal and liturgical unity, not a hobby of arithmetic.</p>' +
    '</div>';
};

WC1.recon.astrolabe = function (el, step) {
  const rot = (step.rot != null) ? step.rot : 25;
  el.innerHTML = '<svg viewBox="0 0 320 320" role="img" aria-label="Simplified astrolabe">' +
    '<circle cx="160" cy="160" r="148" fill="#e8dcc4" stroke="#6e5c45"/>' +
    '<circle cx="160" cy="160" r="132" fill="none" stroke="#1e3a5f" stroke-dasharray="3 4"/>' +
    '<g transform="rotate(' + rot + ' 160 160)" stroke="#7b2d26" fill="none">' +
    '<circle cx="160" cy="160" r="90"/>' +
    '<polygon points="160,70 168,160 160,250 152,160" fill="rgba(123,45,38,.25)" stroke="#7b2d26"/>' +
    '<circle cx="196" cy="108" r="4" fill="#7b2d26"/>' +
    '<text x="202" y="104" font-size="11" fill="#7b2d26">rete star</text>' +
    '</g>' +
    '<line x1="160" y1="20" x2="160" y2="300" stroke="#2a2118" stroke-width="2"/>' +
    '<text x="160" y="16" text-anchor="middle" font-size="12">alidade</text>' +
    '</svg>' +
    '<p class="who" style="padding:6px 10px">You take the altitude of a known star with the alidade. You rotate the rete (the star map) until that star sits on the almucantar of that altitude. The rule then reads the hour. Time is not a feeling; it is a position on an instrument.</p>';
};

WC1.recon.incline = function (el, step) {
  const t = (step.t != null) ? step.t : 0;
  const s = t * t;
  const maxS = 16;
  const x = 40 + (s / maxS) * 440;
  el.innerHTML = '<svg viewBox="0 0 520 200" role="img" aria-label="Inclined plane">' +
    '<polygon points="40,160 480,40 480,160" fill="rgba(30,58,95,.12)" stroke="#1e3a5f"/>' +
    [1, 4, 9, 16].map(function (d, i) {
      const xx = 40 + (d / 16) * 440;
      return '<line x1="' + xx + '" y1="36" x2="' + xx + '" y2="168" stroke="#a67c2e"/><text x="' + xx + '" y="184" text-anchor="middle" font-size="11">' + d + '</text>';
    }).join('') +
    '<circle cx="' + x + '" cy="' + (160 - (s / 16) * 120) + '" r="9" fill="#7b2d26"/>' +
    '</svg>' +
    '<p class="who" style="padding:6px 10px">Distances 1, 4, 9, 16 in equal times — the odd-number rule. Galileo timed with a water clock and a groove lined with parchment, not with a stopwatch.</p>';
};

WC1.recon.jupiter = function (el, step) {
  const nights = [
    { label: '7 Jan 1610', moons: [-38, -18, 16, 34] },
    { label: '8 Jan', moons: [-30, 12, 22, 40] },
    { label: '10 Jan', moons: [-36, -8, 10, 28] },
    { label: '11 Jan', moons: [-22, -6, 18, 32] },
    { label: '12 Jan', moons: [-40, -14, 8, 24] },
    { label: '13 Jan', moons: [-16, 6, 20, 36] }
  ];
  const n = nights[step.night || 0] || nights[0];
  const dots = n.moons.map(function (x) {
    return '<circle cx="' + (160 + x * 2.2) + '" cy="80" r="4" fill="#1e3a5f"/>';
  }).join('');
  el.innerHTML = '<svg viewBox="0 0 320 140" role="img" aria-label="Jupiter and four attendants">' +
    '<rect width="320" height="140" fill="#1a2230"/>' +
    '<circle cx="160" cy="80" r="16" fill="#d4a04a"/>' +
    dots +
    '<text x="160" y="24" text-anchor="middle" fill="#f6efe2" font-size="13">' + n.label + '</text>' +
    '</svg>' +
    '<p class="who" style="padding:6px 10px">Four attendants change place from night to night and never leave Jupiter. A second center of motion exists. That is what Sidereus Nuncius actually showed, before any later quarrel about tides or comets.</p>';
};

WC1.recon.leeuwenhoek = function (el, step) {
  const mag = step.mag || 1;
  const r = 18 * mag;
  el.innerHTML = '<svg viewBox="0 0 320 200" role="img">' +
    '<rect width="320" height="200" fill="#efe4cf"/>' +
    '<circle cx="160" cy="100" r="' + Math.min(r, 90) + '" fill="rgba(72,102,76,.35)" stroke="#48664c"/>' +
    '<text x="160" y="24" text-anchor="middle" font-size="13">single-lens microscope · about ×' + mag + '</text>' +
    (mag < 30 ? '<text x="160" y="104" text-anchor="middle" font-size="12">louse / mold</text>' : '<text x="160" y="104" text-anchor="middle" font-size="12">animalcules in pepper-water</text>') +
    '</svg>';
};

WC1.recon.lavoisier = function (el, step) {
  el.innerHTML = '<svg viewBox="0 0 420 180" role="img" aria-label="Closed-vessel weighing">' +
    '<line x1="40" y1="50" x2="380" y2="50" stroke="#2a2118" stroke-width="3"/>' +
    '<rect x="70" y="70" width="70" height="50" fill="none" stroke="#1e3a5f"/>' +
    '<rect x="280" y="70" width="70" height="50" fill="none" stroke="#7b2d26"/>' +
    '<text x="105" y="160" text-anchor="middle" font-size="12">vessel + mercury calx</text>' +
    '<text x="315" y="160" text-anchor="middle" font-size="12">weights</text>' +
    '<text x="210" y="28" text-anchor="middle" font-size="13">' + (step.caption || 'Nothing is lost; the air has a part that combines.') + '</text>' +
    '</svg>';
};

WC1.recon.watt = function (el, step) {
  el.innerHTML = '<svg viewBox="0 0 420 200" role="img" aria-label="Indicator diagram">' +
    '<line x1="50" y1="170" x2="380" y2="170" stroke="currentColor"/>' +
    '<line x1="50" y1="170" x2="50" y2="30" stroke="currentColor"/>' +
    '<polyline points="50,50 140,50 300,140 360,155" fill="none" stroke="#7b2d26" stroke-width="2"/>' +
    '<text x="210" y="192" text-anchor="middle" font-size="12">volume</text>' +
    '<text x="16" y="100" font-size="12" transform="rotate(-90 16 100)">pressure</text>' +
    '<text x="210" y="22" text-anchor="middle" font-size="13">Watt indicator: work is the area under the curve</text>' +
    '</svg>' +
    '<p class="who" style="padding:6px 10px">The separate condenser (1765/69) keeps the cylinder hot. The indicator later makes the work visible as a closed figure. Engineers could see what a Newcomen engine wasted.</p>';
};

WC1.recon.jones = function (el) {
  const rows = [
    ['Sanskrit', 'pitā', 'mātā', 'bhrātā', 'trayas'],
    ['Latin', 'pater', 'māter', 'frāter', 'trēs'],
    ['Greek', 'patēr', 'mētēr', 'phratēr', 'treis'],
    ['English', 'father', 'mother', 'brother', 'three']
  ];
  let html = '<table style="width:100%;border-collapse:collapse;font-size:15px">';
  rows.forEach(function (r, i) {
    html += '<tr>' + r.map(function (c) {
      return '<td style="border-bottom:1px solid var(--rule);padding:6px 8px">' + (i === 0 ? '<strong>' + c + '</strong>' : c) + '</td>';
    }).join('') + '</tr>';
  });
  html += '</table>';
  el.innerHTML = html;
};

WC1.recon.printing = function (el, step) {
  const labels = ['punch & matrix', 'composing stick', 'locked form', 'press & tympan'];
  el.innerHTML = '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;font-family:var(--sans);font-size:13px;text-align:center">' +
    labels.map(function (l, i) {
      const on = (step.n || 0) === i;
      return '<div style="border:1px solid var(--rule);border-radius:10px;padding:18px 8px;background:' + (on ? 'color-mix(in srgb,var(--gold) 25%,var(--panel))' : 'var(--panel2)') + '">' + (i + 1) + '<br>' + l + '</div>';
    }).join('') + '</div>';
};

WC1.recon.bookkeeping = function (el, step) {
  el.innerHTML = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:14px">' +
    '<div><h3>Journal</h3><p>Venice, 10 March. Cloth sold to Giovanni for 40 ducats on account.</p></div>' +
    '<div><h3>Ledger</h3><p><strong>Dr</strong> Giovanni 40<br><strong>Cr</strong> Cloth 40</p><p class="who">Every fact is named twice. The books close only if the world of the firm is internally consistent.</p></div>' +
    '</div>';
};

WC1.recon.pompeii = function (el, step) {
  el.innerHTML = '<svg viewBox="0 0 420 160" role="img">' +
    '<rect width="420" height="160" fill="#e7d9bc"/>' +
    '<rect x="0" y="40" width="420" height="50" fill="#c4b08a"/>' +
    '<rect x="0" y="20" width="420" height="22" fill="#9a8b6e"/>' +
    '<rect x="180" y="70" width="18" height="70" fill="#6e5c45"/>' +
    '<text x="210" y="150" text-anchor="middle" font-size="12">1748: a well shaft hits a theatre. The city is not a myth.</text>' +
    '</svg>';
};
