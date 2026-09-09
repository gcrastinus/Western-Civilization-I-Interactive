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

/* Right angle at C; leg a upward, leg b to the right, hypotenuse c.
   Each square sits on the outside of its own side, which is the whole point
   of the figure: the areas are the sides, seen. */
WC1.recon.geometry = function (el, step) {
  const stage = step.stage != null ? step.stage : 3;
  const u = 30;
  const a = 3 * u, b = 4 * u, c = 5 * u;
  const cx = 150, cy = 250;
  const Ax = cx, Ay = cy - a;          /* top of the vertical leg */
  const Bx = cx + b, By = cy;          /* end of the horizontal leg */
  const phi = Math.atan2(a, b) * 180 / Math.PI;

  const teal = '#1a4a5c', brown = '#8a5a28', plum = '#5c2d6e';

  const sqB = '<g transform="translate(' + cx + ' ' + cy + ')">' +
    '<rect width="' + b + '" height="' + b + '" fill="rgba(138,90,40,.16)" stroke="' + brown + '"/>' +
    '<text x="' + (b / 2) + '" y="' + (b / 2 + 5) + '" text-anchor="middle" font-size="14" fill="' + brown + '">b\u00b2 = 16</text></g>';

  const sqA = '<g transform="translate(' + (cx - a) + ' ' + (cy - a) + ')">' +
    '<rect width="' + a + '" height="' + a + '" fill="rgba(26,74,92,.16)" stroke="' + teal + '"/>' +
    '<text x="' + (a / 2) + '" y="' + (a / 2 + 5) + '" text-anchor="middle" font-size="14" fill="' + teal + '">a\u00b2 = 9</text></g>';

  /* stand at B, face A along the hypotenuse; the square then falls outside the triangle */
  const sqC = '<g transform="translate(' + Bx + ' ' + By + ') rotate(' + (180 + phi) + ')">' +
    '<rect width="' + c + '" height="' + c + '" fill="rgba(92,45,110,.14)" stroke="' + plum + '"/>' +
    '<text x="' + (c / 2) + '" y="' + (c / 2 + 5) + '" text-anchor="middle" font-size="14" fill="' + plum + '" transform="rotate(' + (-(180 + phi)) + ' ' + (c / 2) + ' ' + (c / 2) + ')">c\u00b2 = 25</text></g>';

  const tri = '<polygon points="' + cx + ',' + cy + ' ' + Bx + ',' + By + ' ' + Ax + ',' + Ay + '" ' +
    'fill="rgba(26,74,92,.10)" stroke="' + teal + '" stroke-width="2"/>' +
    '<path d="M' + cx + ' ' + (cy - 14) + ' h14 v14" fill="none" stroke="' + teal + '" stroke-width="1.5"/>' +
    '<text x="' + (cx + 10) + '" y="' + (cy - a / 2 + 16) + '" font-size="15" fill="' + teal + '">a = 3</text>' +
    '<text x="' + (cx + b / 2) + '" y="' + (cy + 18) + '" text-anchor="middle" font-size="15" fill="' + brown + '">b = 4</text>' +
    '<text x="' + (cx + b / 2 + 14) + '" y="' + (cy - a / 2 - 6) + '" text-anchor="middle" font-size="15" fill="' + plum + '">c = 5</text>';

  const sum = stage >= 3
    ? '<text x="220" y="402" text-anchor="middle" font-size="15">9 + 16 = 25</text>' +
      '<text x="220" y="420" text-anchor="middle" font-size="12.5" fill="#5a4a38">The two smaller squares, together, are the large one.</text>'
    : (stage >= 2
      ? '<text x="220" y="402" text-anchor="middle" font-size="15">9 + 16 = ?</text>'
      : '<text x="220" y="402" text-anchor="middle" font-size="15">A right angle, and three sides that can each carry a square</text>');

  el.innerHTML = '<svg viewBox="0 0 440 432" role="img" aria-label="Right triangle with squares on its three sides">' +
    '<rect width="440" height="432" fill="#e8eef2"/>' +
    '<text x="220" y="26" text-anchor="middle" font-size="14">The square on the hypotenuse equals the squares on the two legs</text>' +
    (stage >= 2 ? sqA + sqB : '') +
    (stage >= 3 ? sqC : '') +
    tri +
    sum +
    '</svg>' +
    '<p class="who" style="padding:6px 4px">A proof is a public act: anyone who grants the figure is bound by it, whatever his father was.</p>';
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

