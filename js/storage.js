WC1.KEY = 'wc1-interactive-v1';

WC1.defaultState = function () {
  return {
    answers: {},
    seen: {},
    langOrig: false,
    theme: 'light',
    last: '#/'
  };
};

WC1.loadState = function () {
  try {
    const raw = localStorage.getItem(WC1.KEY);
    WC1.state = raw ? Object.assign(WC1.defaultState(), JSON.parse(raw)) : WC1.defaultState();
  } catch (e) {
    WC1.state = WC1.defaultState();
  }
};

WC1.saveState = function () {
  try {
    localStorage.setItem(WC1.KEY, JSON.stringify(WC1.state));
  } catch (e) { /* private mode */ }
};

WC1.markSeen = function (path) {
  WC1.state.seen[path] = (WC1.state.seen[path] || 0) + 1;
  WC1.state.last = path;
  WC1.saveState();
};

WC1.saveAnswer = function (id, payload) {
  WC1.state.answers[id] = payload;
  WC1.saveState();
};
