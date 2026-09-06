WC1.parseRoute = function () {
  const raw = (location.hash || '#/').replace(/^#/, '');
  const parts = raw.split('/').filter(Boolean);
  if (!parts.length) return { view: 'intro', room: 'home' };
  if (parts[0] === 'overlay') return { view: 'overlay', room: parts[1] || 'one-many' };
  if (parts[0] === 'review') return { view: 'review', room: parts[1] || 'home' };
  if (parts[0] === 'week') {
    return { view: 'week', week: Number(parts[1]), room: parts[2] || 'home' };
  }
  return { view: 'intro', room: parts[0] };
};

WC1.pathOf = function (r) {
  if (r.view === 'intro') return r.room === 'home' ? '#/' : '#/' + r.room;
  if (r.view === 'overlay') return '#/overlay/' + r.room;
  if (r.view === 'review') return r.room === 'home' ? '#/review' : '#/review/' + r.room;
  if (r.room === 'home') return '#/week/' + r.week;
  return '#/week/' + r.week + '/' + r.room;
};

WC1.findRoom = function (week, id) {
  if (!week) return null;
  if (id === 'home') return { id: 'home', type: 'home', title: week.title };
  return (week.rooms || []).find(function (r) { return r.id === id; }) || null;
};

WC1.renderNav = function (route) {
  const nav = document.getElementById('nav-list');
  WC1.clear(nav);
  function link(href, label, opts) {
    opts = opts || {};
    const a = WC1.el('a', { href: href, class: (opts.class || '') + (location.hash === href || (!location.hash && href === '#/') ? ' active' : '') });
    if (opts.num) a.appendChild(WC1.el('span', { class: 'num', text: String(opts.num) }));
    a.appendChild(document.createTextNode(label));
    if (opts.locked) {
      a.classList.add('locked');
      a.appendChild(WC1.el('span', { class: 'lock', text: ' · opens ' + WC1.unlockLabel(opts.week) }));
    }
    return a;
  }
  nav.appendChild(WC1.el('div', { class: 'nav-kicker', text: 'Begin' }));
  nav.appendChild(link('#/', 'Introduction'));
  nav.appendChild(link('#/overlay/one-many', 'The One and the Many', { class: 'sub' }));

  const bands = [
    { label: 'Beginnings and the East', weeks: [1, 2, 3] },
    { label: 'Greece', weeks: [4, 5, 6] },
    { label: 'Rome', weeks: [7, 8, 9, 10] },
    { label: 'Late antique and first Europe', weeks: [11, 12] }
  ];
  bands.forEach(function (b) {
    nav.appendChild(WC1.el('div', { class: 'nav-kicker', text: b.label }));
    b.weeks.forEach(function (id) {
      const w = WC1.weeks[id];
      if (!w) return;
      const locked = !WC1.isUnlocked(id);
      nav.appendChild(link('#/week/' + id, w.short || w.title, { num: id, locked: locked, week: id }));
      if (route.view === 'week' && route.week === id && !locked) {
        (w.rooms || []).forEach(function (r) {
          if (r.nav === false) return;
          if (r.review && !WC1.isReviewUnlocked(id)) return;
          nav.appendChild(link('#/week/' + id + '/' + r.id, r.nav || r.title, { class: 'sub' }));
        });
      }
    });
  });
  nav.appendChild(WC1.el('div', { class: 'nav-kicker', text: 'End' }));
  nav.appendChild(link('#/week/13', 'Study week', { num: 13, locked: !WC1.isUnlocked(13), week: 13 }));
  const w14 = WC1.weeks[14];
  nav.appendChild(link('#/week/14', (w14 && (w14.short || w14.title)) || 'Investiture', { num: 14, locked: !WC1.isUnlocked(14), week: 14 }));
  if (route.view === 'week' && route.week === 14 && WC1.isUnlocked(14) && w14) {
    (w14.rooms || []).forEach(function (r) {
      if (r.nav === false) return;
      if (r.review && !WC1.isReviewUnlocked(14)) return;
      nav.appendChild(link('#/week/14/' + r.id, r.nav || r.title, { class: 'sub' }));
    });
  }
};

WC1.setPeriod = function (p) {
  document.documentElement.setAttribute('data-period', p || 'intro');
};

WC1.renderFaculty = function () {
  const bar = document.getElementById('faculty');
  if (!WC1.faculty) {
    document.documentElement.classList.remove('faculty-mode');
    return;
  }
  document.documentElement.classList.add('faculty-mode');
  WC1.clear(bar);
  bar.appendChild(WC1.el('strong', { text: 'Faculty preview' }));
  const lab = WC1.el('label', { text: 'View as ' });
  const date = WC1.el('input', { type: 'date', value: WC1.todayISO() });
  date.addEventListener('change', function () {
    WC1._fakeISO = date.value;
    WC1.persistFaculty();
    WC1.render();
  });
  lab.appendChild(date);
  bar.appendChild(lab);
  const all = WC1.el('button', { type: 'button', text: WC1.facultyUnlockAll ? 'Use calendar' : 'Unlock all' });
  all.addEventListener('click', function () {
    WC1.facultyUnlockAll = !WC1.facultyUnlockAll;
    WC1.persistFaculty();
    WC1.render();
  });
  bar.appendChild(all);
  bar.appendChild(WC1.el('span', { text: 'Today (Chicago): ' + WC1.todayISO() + ' · week index ' + WC1.weekIndex() }));
};

WC1.lockedScreen = function (weekNum) {
  const d = WC1.el('div', { class: 'locked-msg' });
  d.appendChild(WC1.el('p', { class: 'kicker', text: 'Not yet' }));
  d.appendChild(WC1.el('h2', { class: 'lesson', text: 'This week opens ' + WC1.unlockLabel(weekNum) }));
  d.appendChild(WC1.el('p', { text: 'This week opens on that Monday. Until then, use the introduction and any weeks already opened.' }));
  return d;
};

WC1.epigraphEl = function (week) {
  if (!week || !week.epigraph || !week.epigraph.text) return null;
  const e = week.epigraph;
  const p = WC1.el('p', { class: 'epigraph' });
  p.appendChild(document.createTextNode('\u201c' + e.text + '\u201d'));
  p.appendChild(WC1.el('cite', { text: '\u2014 ' + e.who + (e.source ? ', ' + e.source : '') }));
  return p;
};

WC1.renderHome = function (week, mount) {
  mount.appendChild(WC1.el('p', { class: 'kicker', text: week.kicker || ('Week ' + week.id) }));
  mount.appendChild(WC1.el('h2', { class: 'lesson', text: week.title }));
  const epi = WC1.epigraphEl(week);
  if (epi) mount.appendChild(epi);
  const pad = (week.id < 10 ? '0' : '') + week.id;
  mount.appendChild(WC1.figure({
    src: 'images/w' + pad + '-atmosphere.jpg',
    slot: 'w' + pad + '-atmosphere',
    alt: week.title,
    className: 'atmosphere'
  }));
  if (week.lede) mount.appendChild(WC1.el('p', { class: 'lede', html: week.lede }));
  if (week.about) mount.appendChild(WC1.el('div', { class: 'prose', html: week.about }));
  const grid = WC1.el('div', { class: 'rooms' });
  (week.rooms || []).forEach(function (r) {
    if (r.review && !WC1.isReviewUnlocked(week.id)) return;
    const a = WC1.el('a', { class: 'door', href: '#/week/' + week.id + '/' + r.id });
    a.appendChild(WC1.el('div', { class: 'k', text: r.kind || r.type }));
    a.appendChild(WC1.el('h3', { text: r.title }));
    if (r.blurb) a.appendChild(WC1.el('p', { text: r.blurb }));
    grid.appendChild(a);
  });
  mount.appendChild(grid);
};

WC1.renderRoom = function (week, room, mount) {
  mount.appendChild(WC1.el('p', { class: 'kicker', text: 'Week ' + week.id + ' · ' + (room.kind || room.type) }));
  mount.appendChild(WC1.el('h2', { class: 'lesson', text: room.title }));
  const epi = WC1.epigraphEl(week);
  if (epi) mount.appendChild(epi);
  if (room.lede) mount.appendChild(WC1.el('p', { class: 'lede', html: room.lede }));

  function body() {
    if (room.html) mount.appendChild(WC1.el('div', { class: 'prose', html: room.html }));
    if (room.type === 'map') WC1.engines.map(Object.assign({ week: week.id, filter: WC1.periodOf(week.id) }, room), mount);
    else if (room.type === 'battle') WC1.engines.battle(room, mount);
    else if (room.type === 'reconstruction') WC1.engines.reconstruction(room, mount);
    else if (room.type === 'passages' || room.type === 'dispute') WC1.engines.passages(room, mount);
    else if (room.type === 'contest') WC1.engines.contest(room, mount);
    else if (room.type === 'connections') {
      const ul = WC1.el('ul', { class: 'connections' });
      (WC1.arts[week.id] || room.items || []).forEach(function (c) {
        ul.appendChild(WC1.el('li', { html: '<strong>' + c.work + '</strong> is an example of ' + c.of + ' because ' + c.because }));
      });
      mount.appendChild(ul);
    } else if (room.type === 'resources') {
      const ul = WC1.el('ul', { class: 'resources' });
      (room.items || []).forEach(function (it) {
        ul.appendChild(WC1.el('li', { html: it }));
      });
      mount.appendChild(ul);
    }
    if (room.after) mount.appendChild(WC1.el('div', { class: 'prose', html: room.after }));
  }

  if (room.question) {
    WC1.engines.question(room.question, mount, function () {
      const more = mount.querySelector('[data-rest]');
      if (more) more.hidden = false;
    });
    const rest = WC1.el('div', { 'data-rest': '1' });
    if (!WC1.state.answers[room.question.id]) rest.hidden = true;
    mount.appendChild(rest);
    const innerMount = rest;
    const savedMount = mount;
    mount = innerMount;
    body();
    mount = savedMount;
  } else {
    body();
  }
};

WC1.renderIntro = function (room, mount) {
  const intro = WC1.intro;
  if (!intro) {
    mount.appendChild(WC1.el('p', { text: 'Introduction is not loaded.' }));
    return;
  }
  if (room === 'home') {
    mount.appendChild(WC1.el('p', { class: 'kicker', text: intro.kicker }));
    mount.appendChild(WC1.el('h2', { class: 'lesson', text: intro.title }));
    mount.appendChild(WC1.el('p', { class: 'lede', html: intro.lede }));
    mount.appendChild(WC1.el('div', { class: 'prose', html: intro.about }));
    const doors = WC1.el('div', { class: 'rooms' });
    (intro.rooms || []).forEach(function (r) {
      const href = r.overlay ? '#/overlay/' + r.id : '#/' + r.id;
      const a = WC1.el('a', { class: 'door', href: href });
      a.appendChild(WC1.el('div', { class: 'k', text: r.kind || 'intro' }));
      a.appendChild(WC1.el('h3', { text: r.title }));
      if (r.blurb) a.appendChild(WC1.el('p', { text: r.blurb }));
      doors.appendChild(a);
    });
    mount.appendChild(doors);
    mount.appendChild(WC1.el('p', { class: 'period-label', text: 'The twelve teaching weeks' }));
    const grid = WC1.el('div', { class: 'grid-3x4 rooms' });
    for (let i = 1; i <= 12; i++) {
      const w = WC1.weeks[i];
      if (!w) continue;
      const locked = !WC1.isUnlocked(i);
      const a = WC1.el('a', { class: 'door' + (locked ? ' locked' : ''), href: '#/week/' + i });
      a.appendChild(WC1.el('div', { class: 'k', text: 'Week ' + i }));
      a.appendChild(WC1.el('h3', { text: w.short || w.title }));
      a.appendChild(WC1.el('p', { text: locked ? ('Opens ' + WC1.unlockLabel(i)) : (w.lens || '') }));
      grid.appendChild(a);
    }
    mount.appendChild(grid);
    return;
  }
  const r = (intro.rooms || []).find(function (x) { return x.id === room; });
  if (!r) {
    mount.appendChild(WC1.el('p', { text: 'Unknown room.' }));
    return;
  }
  mount.appendChild(WC1.el('p', { class: 'kicker', text: 'Introduction' }));
  mount.appendChild(WC1.el('h2', { class: 'lesson', text: r.title }));
  if (r.question) {
    WC1.engines.question(r.question, mount, function () {
      const rest = mount.querySelector('[data-rest]');
      if (rest) rest.hidden = false;
    });
  }
  const rest = WC1.el('div', { 'data-rest': '1' });
  if (r.question && !WC1.state.answers[r.question.id]) rest.hidden = true;
  if (r.html) rest.appendChild(WC1.el('div', { class: 'prose', html: r.html }));
  if (r.type === 'passages' || r.passages) WC1.engines.passages(r, rest);
  if (r.type === 'map') WC1.engines.map(r, rest);
  mount.appendChild(rest);
};

WC1.renderOverlay = function (id, mount) {
  const o = WC1.overlay && WC1.overlay[id];
  if (!o) {
    mount.appendChild(WC1.el('p', { text: 'Overlay not loaded.' }));
    return;
  }
  mount.appendChild(WC1.el('p', { class: 'kicker', text: 'Quiet overlay' }));
  mount.appendChild(WC1.el('h2', { class: 'lesson', text: o.title }));
  mount.appendChild(WC1.el('div', { class: 'prose one-many', html: o.html }));
};

WC1.renderReview = function (mount) {
  const rev = WC1.review;
  mount.appendChild(WC1.el('p', { class: 'kicker', text: 'Week 14' }));
  mount.appendChild(WC1.el('h2', { class: 'lesson', text: (rev && rev.title) || 'Review' }));
  if (rev && rev.html) mount.appendChild(WC1.el('div', { class: 'prose', html: rev.html }));
  if (rev && (rev.passages || rev.positions)) WC1.engines.passages(rev, mount);
};

WC1.render = function () {
  const route = WC1.parseRoute();
  const main = document.getElementById('main');
  const wrap = WC1.el('div', { class: 'wrap' });
  WC1.clear(main);
  main.appendChild(wrap);

  if (route.view === 'intro') {
    WC1.setPeriod('intro');
    WC1.renderIntro(route.room, wrap);
  } else if (route.view === 'overlay') {
    WC1.setPeriod('intro');
    WC1.renderOverlay(route.room, wrap);
  } else if (route.view === 'review') {
    /* Alias kept so old links and WC II muscle-memory still work. */
    location.hash = route.room && route.room !== 'home' ? '#/week/14/' + route.room : '#/week/14';
    return;
  } else if (route.view === 'week') {
    const week = WC1.weeks[route.week];
    WC1.setPeriod(WC1.periodOf(route.week));
    if (!week) {
      wrap.appendChild(WC1.el('p', { text: 'Week not loaded.' }));
    } else if (!WC1.isUnlocked(route.week)) {
      wrap.appendChild(WC1.lockedScreen(route.week));
    } else if (route.room === 'home') {
      WC1.renderHome(week, wrap);
    } else {
      const room = WC1.findRoom(week, route.room);
      if (!room) wrap.appendChild(WC1.el('p', { text: 'Room not found.' }));
      else if (room.review && !WC1.isReviewUnlocked(route.week)) wrap.appendChild(WC1.lockedScreen(route.week + 1));
      else WC1.renderRoom(week, room, wrap);
    }
  }

  WC1.renderNav(route);
  WC1.renderFaculty();
  const titleBits = ['Western Civilization I'];
  document.title = titleBits.join(' · ');
  WC1.markSeen(WC1.pathOf(route));
  WC1.track(WC1.pathOf(route), document.title);
};

WC1.bindChrome = function () {
  document.getElementById('b-nav').addEventListener('click', function () {
    document.documentElement.classList.toggle('nav-open');
  });
  document.getElementById('nav-backdrop').addEventListener('click', function () {
    document.documentElement.classList.remove('nav-open');
  });
  document.getElementById('b-theme').addEventListener('click', function () {
    WC1.state.theme = WC1.state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', WC1.state.theme);
    WC1.saveState();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      document.getElementById('find').focus();
    }
  });
  const find = document.getElementById('find');
  find.addEventListener('input', function () {
    const q = find.value.toLowerCase();
    document.querySelectorAll('#nav-list a').forEach(function (a) {
      a.style.display = !q || a.textContent.toLowerCase().indexOf(q) !== -1 ? '' : 'none';
    });
  });
  window.addEventListener('hashchange', function () {
    document.documentElement.classList.remove('nav-open');
    WC1.render();
    document.getElementById('main').scrollTop = 0;
  });
};

WC1.boot = function () {
  WC1.loadState();
  WC1.readFacultyFromURL();
  document.documentElement.setAttribute('data-theme', WC1.state.theme || 'light');
  WC1.installGoat();
  WC1.bindChrome();
  WC1.render();
};

document.addEventListener('DOMContentLoaded', WC1.boot);
