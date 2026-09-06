# WC I Interactive — build status

Pickup file. If work stops, read this, then `README.md`, then continue from the first unchecked item.

## Decisions (locked)

- Revised Fall 2026 syllabus only: oral Analyses of History and Oratory, book notes, ancient-culture oral exam. No Controversiae rooms.
- Calendar-gated on Fall 2026 Mondays (America/Chicago). Review-layer discussion of that week’s assigned PDF unlocks when the next Monday begins.
- Static GitHub Pages, Ars-app style (same architecture as WC II). Publish the `app/` folder only (course PDFs are copyrighted; do not publish the parent folder).
- Namespace `WC1` everywhere WC II uses `WC2` (including `wc1-faculty` localStorage).
- Intro teaches finding your way, culture + four causes, and a spine (civilization’s shape / why Greece–Rome). Not Tocqueville. *The One and the Many* is a quiet overlay.
- Battles with counterfactuals: Marathon and Salamis; Gaugamela; Cannae; Pharsalus; Adrianople.
- Reconstructions: hoplite/phalanx; light geometric proof; Twelve Tables; Roman camp/road; census; scriptorium/minuscule.
- Contests: Homeric Question; Fall of Rome; Investiture (Dictatus, Canossa, Worms — not a Reacting game).
- Maps from Wikimedia / Shepherd / similar PD or CC; CSS filter now; restyle later. Draw SVG on maps for armies.
- localStorage for student work. GoatCounter placeholder `WC1.GOATCOUNTER` until a real URL exists (not on localhost/file/faculty).
- Palettes: weeks 1–3 sand/lapis; 4–6 marble/sea; 7–10 travertine/bronze; 11–14 parchment/purple.

## Term dates

Week *n* unlocks Monday `2026-08-31 + (n-1)*7`. Review quotes for week *n* unlock the following Monday. Week 13 (2026-11-23) is Thanksgiving / study (no new rooms). Week 14 (2026-11-30) is Investiture. Faculty: `?faculty=1`.

## File map

```
app/
  index.html
  serve.command
  css/app.css
  js/namespace.js calendar.js storage.js analytics.js app.js
  js/engines/{question,passages,map,battle,reconstruction,contest}.js
  js/data/intro.js arts.js overlay.js review.js contest-homer.js contest-fall.js contest-investiture.js w01.js … w12.js
  maps/            historical bases + CREDITS.json
  images/          atmosphere slots
  docs/BUILD-STATUS.md  README.md  CITATIONS.md  GROK-IMAGE-SLOTS.md
```

## Checklist

- [x] Decisions recorded
- [x] Shell: html, css, calendar, storage, analytics, router, faculty bar (`WC1`)
- [x] Engines
- [x] Historical maps downloaded + credited
- [x] Intro content (not Tocqueville)
- [x] arts.js connections
- [x] Weeks 1–4 (Marathon, Salamis, phalanx, geometry, Odyssey thread, Homeric contest)
- [x] Weeks 5–8 (Twelve Tables, Gaugamela, camp, Cannae, census)
- [x] Weeks 9–12 (Pharsalus, empire/Constantine, Adrianople, Fall contest, minuscule)
- [x] Week 13 study; week 14 Investiture (Dictatus, Canossa, Worms, contest)
- [x] GROK-IMAGE-SLOTS.md
- [x] CITATIONS.md
- [x] Smoke check (`node --check`, `node scripts/smoke.js`)
- [x] Browser click-through (open `?faculty=1` and walk intro, a map, a battle + counterfactual, a reconstruction, a dispute, week 14)
- [ ] Create the real GoatCounter site and paste the URL into `js/analytics.js`
- [ ] Restyle maps + confirm atmosphere stills in `images/`

## How to resume

1. Open this file.
2. First unchecked item is the next task.
3. Do not republish parent-folder PDFs.
4. Do not summarize a week’s assigned Maxwell / Christian / Atlas / Barrows / Plutarch / assigned life in that week’s live rooms. Quote them only in rooms with `review: true`.
