WC1.engines.question = function (spec, mount, done) {
  const wrap = WC1.el('div', { class: 'question' });
  wrap.appendChild(WC1.el('h3', { text: spec.prompt }));
  const saved = WC1.state.answers[spec.id];

  function finish(payload, revealNow) {
    WC1.saveAnswer(spec.id, payload);
    const rev = WC1.el('div', { class: 'reveal' });
    rev.appendChild(WC1.el('div', { html: spec.reveal }));
    if (spec.continue !== false) {
      const b = WC1.el('button', { class: 'tbtn', type: 'button', text: spec.continueLabel || 'Enter the room' });
      b.addEventListener('click', function () { if (done) done(); });
      rev.appendChild(b);
    }
    wrap.appendChild(rev);
    if (revealNow && spec.kind === 'mc') {
      wrap.querySelectorAll('.opt').forEach(function (btn) {
        if (btn.getAttribute('data-correct') === '1') btn.classList.add('correct');
      });
    }
  }

  if (spec.kind === 'short') {
    const row = WC1.el('div', { class: 'short-row' });
    const input = WC1.el('input', { type: 'text', autocomplete: 'off', placeholder: spec.placeholder || '' });
    const go = WC1.el('button', { class: 'tbtn', type: 'button', text: 'Answer' });
    row.appendChild(input);
    row.appendChild(go);
    wrap.appendChild(row);
    const accept = (spec.accept || []).map(function (s) { return s.toLowerCase().trim(); });
    function submit() {
      const val = input.value.trim();
      if (!val) return;
      input.disabled = true;
      go.disabled = true;
      const ok = accept.some(function (a) { return val.toLowerCase().indexOf(a) !== -1; });
      finish({ kind: 'short', value: val, ok: ok }, true);
    }
    go.addEventListener('click', submit);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
    if (saved && saved.value) {
      input.value = saved.value;
      input.disabled = true;
      go.disabled = true;
      finish(saved, true);
    }
  } else {
    const box = WC1.el('div', { class: 'options' });
    (spec.options || []).forEach(function (opt) {
      const b = WC1.el('button', { class: 'opt', type: 'button', text: opt.text, 'data-id': opt.id, 'data-correct': opt.correct ? '1' : '0' });
      b.addEventListener('click', function () {
        if (box.getAttribute('data-done')) return;
        box.setAttribute('data-done', '1');
        b.classList.add('chosen');
        if (!opt.correct) b.classList.add('wrong');
        box.querySelectorAll('.opt').forEach(function (x) {
          if (x.getAttribute('data-correct') === '1') x.classList.add('correct');
        });
        finish({ kind: 'mc', id: opt.id, ok: !!opt.correct }, true);
      });
      box.appendChild(b);
    });
    wrap.appendChild(box);
    if (saved && saved.id) {
      box.setAttribute('data-done', '1');
      box.querySelectorAll('.opt').forEach(function (x) {
        if (x.getAttribute('data-id') === saved.id) x.classList.add('chosen', saved.ok ? 'correct' : 'wrong');
      });
      finish(saved, true);
    }
  }
  mount.appendChild(wrap);
};
