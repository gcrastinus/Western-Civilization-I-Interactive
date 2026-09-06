/* Anonymous counts only. Never send answers. Skip on local/faculty. */
WC1.GOATCOUNTER = 'https://wc1.goatcounter.com/count';

WC1.analyticsAllowed = function () {
  if (WC1.faculty) return false;
  const h = location.hostname;
  if (location.protocol === 'file:') return false;
  if (h === 'localhost' || h === '127.0.0.1' || h === '') return false;
  return true;
};

WC1.installGoat = function () {
  if (!WC1.analyticsAllowed()) return;
  if (!WC1.GOATCOUNTER || WC1.GOATCOUNTER.indexOf('wc1.goatcounter.com') !== -1) {
    /* Placeholder URL until a real GoatCounter site is created. See README. */
    return;
  }
  window.goatcounter = {
    no_onload: true,
    path: function () { return location.pathname + location.hash.replace('#', '') || '/'; }
  };
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', WC1.GOATCOUNTER);
  document.head.appendChild(s);
};

WC1.track = function (path, title) {
  if (!WC1.analyticsAllowed()) return;
  const p = path || (location.pathname + (location.hash || '#/'));
  if (window.goatcounter && typeof window.goatcounter.count === 'function') {
    window.goatcounter.count({ path: p, title: title || document.title, event: true });
  }
};
