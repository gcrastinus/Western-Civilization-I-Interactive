#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
let fails = 0;
function ok(cond, msg) {
  if (!cond) { console.error('FAIL', msg); fails++; }
  else console.log(' ok ', msg);
}
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
ok(html.indexOf('WC2') === -1, 'no WC2 in index.html');
ok(html.indexOf('Western Civilization I') !== -1, 'title is WC I');
const scripts = [...html.matchAll(/src="(js\/[^"]+)"/g)].map(m => m[1]);
scripts.forEach(s => ok(fs.existsSync(path.join(root, s)), 'script ' + s));
const maps = [
  'whole-past.svg', 'ane.png', 'greece.jpg', 'alexander.jpg',
  'italy.jpg', 'roman-med.png', 'late-empire.png', 'carolingian.png', 'investiture.jpg'
];
maps.forEach(m => ok(fs.existsSync(path.join(root, 'maps', m)), 'map ' + m));
const weeks = fs.readdirSync(path.join(root, 'js/data')).filter(f => /^w\d+\.js$/.test(f));
ok(weeks.length === 12, '12 week files (' + weeks.length + ')');
const codeFiles = [];
function walk(d) {
  fs.readdirSync(d).forEach(function (f) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (/\.(js|html|css)$/.test(f) && f !== 'smoke.js') codeFiles.push(p);
  });
}
walk(root);
let wc2 = 0;
codeFiles.forEach(function (p) {
  const t = fs.readFileSync(p, 'utf8');
  if (/\bWC2\b/.test(t) || t.indexOf('wc2-faculty') !== -1) {
    console.error('FAIL WC2 leftover in', path.relative(root, p));
    wc2++;
    fails++;
  }
});
if (!wc2) console.log(' ok  no WC2 globals in app js/html/css');
ok(fs.existsSync(path.join(root, 'js/data/contest-homer.js')), 'contest-homer');
ok(fs.existsSync(path.join(root, 'js/data/contest-fall.js')), 'contest-fall');
ok(fs.existsSync(path.join(root, 'js/data/contest-investiture.js')), 'contest-investiture');
ok(fs.existsSync(path.join(root, 'docs/BUILD-STATUS.md')), 'BUILD-STATUS');
ok(fs.existsSync(path.join(root, 'docs/CITATIONS.md')), 'CITATIONS');
ok(fs.existsSync(path.join(root, 'docs/GROK-IMAGE-SLOTS.md')), 'GROK-IMAGE-SLOTS');
process.exit(fails ? 1 : 0);
