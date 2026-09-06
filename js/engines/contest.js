WC1.contests = WC1.contests || {};

WC1.engines.contest = function (spec, mount) {
  const data = (spec.contestId && WC1.contests[spec.contestId]) ? WC1.contests[spec.contestId] : spec;
  if (data.html) mount.appendChild(WC1.el('div', { class: 'prose', html: data.html }));
  if (data.book) {
    mount.appendChild(WC1.el('p', { class: 'credit', html: 'Guided by ' + data.book.author + ', <em>' + data.book.title + '</em>' + (data.book.year ? ' (' + data.book.year + ')' : '') + '.' }));
  }
  mount.appendChild(WC1.el('p', { class: 'contest-legend', text: 'Opposing views contradict one another on the same question. Complementary views answer different parts of it, or sit beside one another without cancelling.' }));

  if (data.chronology && data.chronology.length) {
    mount.appendChild(WC1.el('h3', { class: 'contest-sub', text: 'A chronology of the quarrel' }));
    const chrono = WC1.el('div', { class: 'contest-chrono' });
    const note = WC1.el('p', { class: 'contest-chrono-note', html: data.chronology[0].note || '' });
    data.chronology.forEach(function (c, i) {
      const b = WC1.el('button', {
        type: 'button',
        class: i === 0 ? 'on' : '',
        html: '<strong>' + c.year + '</strong>' + (c.who ? '<span>' + c.who + '</span>' : '')
      });
      b.addEventListener('click', function () {
        chrono.querySelectorAll('button').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        note.innerHTML = c.note || '';
      });
      chrono.appendChild(b);
    });
    mount.appendChild(chrono);
    mount.appendChild(note);
  }

  const topics = data.topics || [];
  const nav = WC1.el('div', { class: 'contest-topics' });
  const panel = WC1.el('div', { class: 'contest-panel' });

  function show(i) {
    nav.querySelectorAll('button').forEach(function (b, k) { b.classList.toggle('on', k === i); });
    const topic = topics[i];
    WC1.clear(panel);
    panel.appendChild(WC1.el('h3', { text: topic.title }));
    if (topic.lede) panel.appendChild(WC1.el('p', { class: 'lede', html: topic.lede }));
    if (topic.tension) panel.appendChild(WC1.el('p', { class: 'contest-tension', html: topic.tension }));

    const views = topic.views || [];
    const nOpp = views.filter(function (v) { return v.stance === 'opposing'; }).length;
    const nComp = views.filter(function (v) { return v.stance === 'complementary'; }).length;
    panel.appendChild(WC1.el('p', { class: 'contest-count', text: nOpp + ' opposing · ' + nComp + ' complementary' }));

    const filters = WC1.el('div', { class: 'contest-filters' });
    let filter = 'all';
    [['all', 'All views'], ['opposing', 'Opposing'], ['complementary', 'Complementary']].forEach(function (pair) {
      const f = pair[0];
      const b = WC1.el('button', { class: 'tbtn' + (f === 'all' ? ' on' : ''), type: 'button', text: pair[1], 'data-f': f });
      b.addEventListener('click', function () {
        filter = f;
        filters.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x.getAttribute('data-f') === f); });
        renderViews();
      });
      filters.appendChild(b);
    });
    panel.appendChild(filters);

    const viewsBox = WC1.el('div', { class: 'contest-views' });
    panel.appendChild(viewsBox);

    function renderViews() {
      WC1.clear(viewsBox);
      let shown = 0;
      views.forEach(function (v) {
        if (filter !== 'all' && v.stance !== filter) return;
        shown++;
        const card = WC1.el('article', { class: 'view-card ' + (v.stance || '') });
        const tag = v.stance === 'opposing' ? 'Opposing' : (v.stance === 'complementary' ? 'Complementary' : 'View');
        card.appendChild(WC1.el('div', { class: 'stance', text: tag }));
        card.appendChild(WC1.el('h4', { text: v.scholar || v.title || '' }));
        if (v.work || v.years) card.appendChild(WC1.el('div', { class: 'who', text: [v.work, v.years].filter(Boolean).join(' · ') }));
        if (v.claim) card.appendChild(WC1.el('p', { class: 'claim', html: v.claim }));
        if (v.evidence) {
          card.appendChild(WC1.el('p', { class: 'who', text: 'Evidence in play' }));
          card.appendChild(WC1.el('div', { class: 'evidence', html: v.evidence }));
        }
        if (v.html) card.appendChild(WC1.el('div', { html: v.html }));
        viewsBox.appendChild(card);
      });
      if (!shown) {
        viewsBox.appendChild(WC1.el('p', { class: 'note', text: 'No views of that kind in this quarrel.' }));
      }
    }
    renderViews();

    if (topic.shifts) {
      panel.appendChild(WC1.el('h4', { text: 'How the scholarship moved' }));
      panel.appendChild(WC1.el('div', { class: 'prose shifts', html: topic.shifts }));
    }
    if (topic.ask) panel.appendChild(WC1.el('p', { class: 'note', html: topic.ask }));
    WC1.track('#/contest/' + (data.id || spec.id) + '/' + topic.id, topic.title);
  }

  topics.forEach(function (topic, i) {
    const b = WC1.el('button', { type: 'button', text: topic.title });
    b.addEventListener('click', function () { show(i); });
    nav.appendChild(b);
  });
  mount.appendChild(nav);
  mount.appendChild(panel);
  if (topics.length) show(0);
};
