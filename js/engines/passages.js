WC1.engines.passages = function (spec, mount) {
  const showOrig = WC1.state.langOrig;
  const grid = WC1.el('div', { class: 'passages' });
  let anyOrig = false;
  (spec.passages || spec.positions || []).forEach(function (p) {
    const card = WC1.el('article', { class: 'passage' + (p.stance ? ' ' + p.stance : '') + (showOrig && p.original ? ' show-orig' : '') });
    if (p.stance) {
      card.appendChild(WC1.el('div', {
        class: 'stance',
        text: p.stance === 'opposing' ? 'Opposing' : (p.stance === 'complementary' ? 'Complementary' : p.stance)
      }));
    }
    const head = WC1.el('header');
    head.appendChild(WC1.el('h3', { text: p.scholar || p.title || p.who || '' }));
    const who = [p.who, p.years, p.work].filter(Boolean).join(' · ');
    if (who) head.appendChild(WC1.el('div', { class: 'who', text: who }));
    card.appendChild(head);
    if (p.summary) card.appendChild(WC1.el('p', { class: 'who', html: p.summary }));
    if (p.html || p.text) {
      card.appendChild(WC1.el('div', { class: 'body eng', html: p.html || p.text }));
    }
    if (p.original) {
      anyOrig = true;
      card.appendChild(WC1.el('div', { class: 'body orig', html: p.original }));
    }
    if (p.source) card.appendChild(WC1.el('div', { class: 'credit', text: p.source }));
    grid.appendChild(card);
  });
  if (anyOrig) {
    const tog = WC1.el('button', {
      class: 'tbtn toggle-lang',
      type: 'button',
      text: showOrig ? 'Show English' : 'Show original language'
    });
    tog.addEventListener('click', function () {
      WC1.state.langOrig = !WC1.state.langOrig;
      WC1.saveState();
      grid.querySelectorAll('.passage').forEach(function (c) {
        if (c.querySelector('.orig')) c.classList.toggle('show-orig', WC1.state.langOrig);
      });
      tog.textContent = WC1.state.langOrig ? 'Show English' : 'Show original language';
    });
    mount.appendChild(tog);
  }
  mount.appendChild(grid);
  if (spec.shifts) {
    const sh = WC1.el('div', { class: 'prose dispute-shifts' });
    sh.appendChild(WC1.el('h4', { text: 'How the scholarship moved' }));
    sh.appendChild(WC1.el('div', { html: spec.shifts }));
    mount.appendChild(sh);
  }
  if (spec.ask) {
    mount.appendChild(WC1.el('p', { class: 'note', html: spec.ask }));
  }
};
