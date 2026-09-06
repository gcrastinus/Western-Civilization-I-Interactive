WC1.engines.battle = function (spec, mount) {
  let scenario = spec;
  let t = 0;
  let playing = false;
  let last = 0;
  const duration = (spec.duration || 28) * 1000;

  const stage = WC1.el('div', { class: 'battle-stage' });
  const ground = WC1.el('div', { class: 'battle-ground' });
  const overlay = WC1.el('div', { class: 'overlay' });

  if (spec.fieldSvg) {
    ground.innerHTML = spec.fieldSvg;
  } else if (spec.map && spec.map.src) {
    const img = WC1.el('img', {
      src: spec.map.src,
      alt: spec.map.alt || spec.title,
      class: 'map ' + (spec.map.filter || '')
    });
    img.addEventListener('error', function () {
      ground.classList.add('slot', 'missing');
      if (!ground.querySelector('svg')) {
        ground.insertAdjacentHTML('afterbegin', '<p class="who" style="padding:12px">Field map failed to load.</p>');
      }
    });
    ground.appendChild(img);
  }
  ground.appendChild(overlay);
  stage.appendChild(ground);
  mount.appendChild(stage);
  if (spec.map && spec.map.credit) mount.appendChild(WC1.el('p', { class: 'credit', html: spec.map.credit }));

  const legend = WC1.el('div', { class: 'battle-legend' });
  (spec.sides || []).forEach(function (s) {
    legend.appendChild(WC1.el('span', {
      class: 'leg',
      html: '<i style="background:' + s.color + '"></i> ' + s.name
    }));
  });
  mount.appendChild(legend);

  const ui = WC1.el('div', { class: 'battle-ui' });
  const play = WC1.el('button', { class: 'tbtn', type: 'button', text: 'Play' });
  const reset = WC1.el('button', { class: 'tbtn', type: 'button', text: 'Reset' });
  const slider = WC1.el('input', { type: 'range', min: '0', max: '1000', value: '0', 'aria-label': 'Time' });
  const timeLab = WC1.el('span', { class: 'who', text: '0%' });
  ui.appendChild(play);
  ui.appendChild(reset);
  ui.appendChild(slider);
  ui.appendChild(timeLab);
  mount.appendChild(ui);

  if (spec.counterfactuals && spec.counterfactuals.length) {
    const cf = WC1.el('div', { class: 'cf' });
    const hist = WC1.el('button', { class: 'tbtn on', type: 'button', text: 'What happened' });
    hist.addEventListener('click', function () { setScenario(spec, hist); });
    cf.appendChild(hist);
    spec.counterfactuals.forEach(function (c) {
      const b = WC1.el('button', { class: 'tbtn', type: 'button', text: c.title });
      b.addEventListener('click', function () {
        const merged = Object.assign({}, spec, c, {
          map: spec.map,
          fieldSvg: spec.fieldSvg,
          places: c.places || spec.places,
          sides: spec.sides
        });
        setScenario(merged, b);
      });
      cf.appendChild(b);
    });
    mount.appendChild(cf);
  }

  const beat = WC1.el('div', { class: 'beat' });
  mount.appendChild(beat);

  function lerp(path, tt) {
    if (!path || !path.length) return { x: 50, y: 50 };
    if (tt <= path[0].t) return path[0];
    const lastP = path[path.length - 1];
    if (tt >= lastP.t) return lastP;
    for (let i = 0; i < path.length - 1; i++) {
      const a = path[i], b = path[i + 1];
      if (tt >= a.t && tt <= b.t) {
        const u = (tt - a.t) / (b.t - a.t || 1);
        return { x: a.x + u * (b.x - a.x), y: a.y + u * (b.y - a.y) };
      }
    }
    return lastP;
  }

  function currentBeat(tt) {
    const beats = scenario.beats || [];
    let cur = beats[0];
    beats.forEach(function (b) { if (tt >= b.t) cur = b; });
    return cur;
  }

  function draw() {
    WC1.clear(overlay);
    (scenario.places || []).forEach(function (p) {
      overlay.appendChild(WC1.el('div', {
        class: 'place-label',
        style: 'left:' + p.x + '%;top:' + p.y + '%',
        text: p.name
      }));
    });
    const sides = {};
    (scenario.sides || []).forEach(function (s) { sides[s.id] = s; });
    function atTime(list, fallback) {
      if (!list || !list.length) return fallback;
      let cur = fallback;
      list.forEach(function (item) { if (t >= item.t) cur = item; });
      return cur;
    }
    (scenario.units || []).forEach(function (u) {
      const pos = lerp(u.path, t);
      const side = sides[u.side] || {};
      const st = atTime(u.status, { cls: '' });
      const lab = atTime(u.labels, { text: u.label });
      overlay.appendChild(WC1.el('div', {
        class: 'unit' + (st.cls ? ' ' + st.cls : ''),
        style: 'left:' + pos.x + '%;top:' + pos.y + '%;--u:' + (side.color || '#333'),
        html: '<b></b><span>' + (lab.text || u.label) + '</span>'
      }));
    });
    const b = currentBeat(t);
    WC1.clear(beat);
    if (scenario.result && t >= (scenario.resultFrom || 0.78)) {
      beat.appendChild(WC1.el('div', {
        class: 'battle-result',
        html: '<strong>' + (scenario.result.short || 'Result') + '</strong>' + (scenario.result.html || '')
      }));
    }
    if (b) {
      beat.appendChild(WC1.el('h3', { text: b.title || '' }));
      beat.appendChild(WC1.el('div', { html: b.html || b.text || '' }));
    }
    if (scenario.verdict && t > 0.92) {
      beat.appendChild(WC1.el('p', { class: 'note', html: scenario.verdict }));
    }
    slider.value = String(Math.round(t * 1000));
    timeLab.textContent = Math.round(t * 100) + '%';
  }

  function tick(now) {
    if (!playing) return;
    const dt = last ? (now - last) : 16;
    last = now;
    t = Math.min(1, t + dt / duration);
    draw();
    if (t >= 1) {
      playing = false;
      play.textContent = 'Play';
    } else {
      requestAnimationFrame(tick);
    }
  }

  function setScenario(s, btn) {
    scenario = s;
    t = 0;
    playing = false;
    play.textContent = 'Play';
    mount.querySelectorAll('.cf .tbtn').forEach(function (x) { x.classList.remove('on'); });
    if (btn) btn.classList.add('on');
    draw();
  }

  play.addEventListener('click', function () {
    if (t >= 1) t = 0;
    playing = !playing;
    play.textContent = playing ? 'Pause' : 'Play';
    last = 0;
    if (playing) requestAnimationFrame(tick);
  });
  reset.addEventListener('click', function () { t = 0; playing = false; play.textContent = 'Play'; draw(); });
  slider.addEventListener('input', function () {
    t = Number(slider.value) / 1000;
    playing = false;
    play.textContent = 'Play';
    draw();
  });
  draw();
};
