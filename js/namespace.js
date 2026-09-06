/* WC1 namespace — keep this file tiny and first. */
window.WC1 = window.WC1 || {};
WC1.weeks = WC1.weeks || {};
WC1.engines = WC1.engines || {};
WC1.recon = WC1.recon || {};
WC1.arts = WC1.arts || {};

WC1.registerWeek = function (week) {
  WC1.weeks[week.id] = week;
};

WC1.h = function (html) {
  const t = document.createElement('template');
  t.innerHTML = String(html).trim();
  return t.content;
};

WC1.el = function (tag, attrs, children) {
  const n = document.createElement(tag);
  if (attrs) {
    Object.keys(attrs).forEach(function (k) {
      if (k === 'class') n.className = attrs[k];
      else if (k === 'html') n.innerHTML = attrs[k];
      else if (k === 'text') n.textContent = attrs[k];
      else if (k.slice(0, 2) === 'on' && typeof attrs[k] === 'function') n.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] === true) n.setAttribute(k, '');
      else if (attrs[k] !== false && attrs[k] != null) n.setAttribute(k, attrs[k]);
    });
  }
  (children || []).forEach(function (c) {
    if (c == null) return;
    n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  });
  return n;
};

WC1.clear = function (node) {
  while (node.firstChild) node.removeChild(node.firstChild);
};

WC1.periodOf = function (weekId) {
  const n = Number(weekId);
  if (n >= 1 && n <= 3) return 'sand';
  if (n >= 4 && n <= 6) return 'marble';
  if (n >= 7 && n <= 10) return 'travertine';
  if (n >= 11 && n <= 14) return 'parchment';
  return 'intro';
};
