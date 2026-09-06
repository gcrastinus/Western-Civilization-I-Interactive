WC1.figure = function (img) {
  const fig = WC1.el('figure', { class: 'slot' + (img && img.className ? (' ' + img.className) : '') });
  if (!img || !img.src) {
    fig.classList.add('missing');
    fig.textContent = (img && img.slot) ? ('Image slot: ' + img.slot) : 'Map forthcoming';
    return fig;
  }
  const el = WC1.el('img', {
    src: img.src,
    alt: img.alt || '',
    class: 'map ' + (img.filter || '')
  });
  el.addEventListener('error', function () {
    fig.classList.add('missing');
    WC1.clear(fig);
    fig.textContent = 'Image slot: ' + (img.slot || img.src);
  });
  fig.appendChild(el);
  return fig;
};

WC1.engines.map = function (spec, mount) {
  const frame = WC1.el('figure', { class: 'map-frame' });
  const stage = WC1.el('div', { class: 'map-stage' });
  const img = WC1.el('img', {
    src: spec.src,
    alt: spec.alt || spec.title || '',
    class: 'map ' + (spec.filter || WC1.periodOf(spec.week) || '')
  });
  img.addEventListener('error', function () {
    stage.classList.add('slot', 'missing');
    stage.textContent = 'Map slot: ' + (spec.slot || spec.src);
  });
  stage.appendChild(img);
  frame.appendChild(stage);
  if (spec.credit) frame.appendChild(WC1.el('figcaption', { class: 'credit', html: spec.credit }));
  const panel = WC1.el('div', { class: 'spot-panel' });
  panel.appendChild(WC1.el('p', { class: 'who', text: 'Click a mark on the map.' }));

  function placeHotspots() {
    stage.querySelectorAll('.hotspot').forEach(function (h) { h.remove(); });
    (spec.hotspots || []).forEach(function (hs, i) {
      const b = WC1.el('button', {
        class: 'hotspot',
        type: 'button',
        style: 'left:' + hs.x + '%;top:' + hs.y + '%',
        title: hs.title,
        'aria-label': hs.title
      });
      b.addEventListener('click', function () {
        stage.querySelectorAll('.hotspot').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        WC1.clear(panel);
        panel.appendChild(WC1.el('h3', { text: hs.title }));
        panel.appendChild(WC1.el('div', { class: 'prose', html: hs.html }));
        WC1.track('#/hotspot/' + (spec.id || 'map') + '/' + i, hs.title);
      });
      stage.appendChild(b);
    });
  }
  img.addEventListener('load', placeHotspots);
  if (img.complete) placeHotspots();
  mount.appendChild(frame);
  mount.appendChild(panel);
};
