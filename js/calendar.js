/* Fall 2026 Mondays. Change WC1.TERM.start to reuse the course. */
WC1.TERM = {
  start: '2026-08-31',
  tz: 'America/Chicago',
  weekCount: 14,
  thanksgiving: 13,
  review: 14
};

WC1.faculty = false;
WC1.facultyUnlockAll = false;
WC1._fakeISO = null;

WC1.now = function () {
  return new Date();
};

WC1.todayISO = function () {
  if (WC1._fakeISO) return WC1._fakeISO;
  return WC1.now().toLocaleDateString('en-CA', { timeZone: WC1.TERM.tz });
};

WC1.weekStartISO = function (n) {
  const p = WC1.TERM.start.split('-').map(Number);
  const dt = new Date(Date.UTC(p[0], p[1] - 1, p[2]));
  dt.setUTCDate(dt.getUTCDate() + (n - 1) * 7);
  return dt.toISOString().slice(0, 10);
};

WC1.weekIndex = function (iso) {
  iso = iso || WC1.todayISO();
  if (iso < WC1.TERM.start) return 0;
  const start = Date.parse(WC1.TERM.start + 'T00:00:00Z');
  const cur = Date.parse(iso + 'T00:00:00Z');
  return Math.floor((cur - start) / 604800000) + 1;
};

WC1.isUnlocked = function (weekNum) {
  if (weekNum === 0 || weekNum === 'intro') return true;
  if (WC1.facultyUnlockAll) return true;
  return WC1.weekIndex() >= Number(weekNum);
};

WC1.isReviewUnlocked = function (weekNum) {
  if (WC1.facultyUnlockAll) return true;
  return WC1.weekIndex() > Number(weekNum);
};

WC1.unlockLabel = function (weekNum) {
  const iso = WC1.weekStartISO(weekNum);
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
};

WC1.readFacultyFromURL = function () {
  const q = new URLSearchParams(location.search);
  WC1.faculty = q.has('faculty') || q.get('preview') === '1';
  if (q.get('unlock') === 'all') {
    WC1.faculty = true;
    WC1.facultyUnlockAll = true;
  }
  if (q.get('date')) WC1._fakeISO = q.get('date');
  if (WC1.faculty) {
    const saved = localStorage.getItem('wc1-faculty');
    if (saved) {
      try {
        const s = JSON.parse(saved);
        if (s.unlockAll) WC1.facultyUnlockAll = true;
        if (s.date && !q.get('date')) WC1._fakeISO = s.date;
      } catch (e) { /* ignore */ }
    }
  }
};

WC1.persistFaculty = function () {
  if (!WC1.faculty) return;
  localStorage.setItem('wc1-faculty', JSON.stringify({
    unlockAll: WC1.facultyUnlockAll,
    date: WC1._fakeISO
  }));
};
