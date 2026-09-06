# Western Civilization I — Interactive

A static companion to SS 222 (Fall 2026): maps, battles, reconstructions, source extracts, and scholarly disputes. It does not replace the weekly reading (Maxwell, Christian, the Atlas, Barrows, assigned lives, Analyses of History and Oratory).

Sister pattern: Western Civilization II Interactive, Ars Rhetorica, Ars Musica, Euclid — no bundler, no login.

**Designed for** the brothers of this course. **Built by** Timothy Kearns.

## Open it

Double-click `index.html`, or:

```
./serve.command
```

then http://localhost:8777

GitHub Pages: publish **this `app/` directory** as the site root. Do not publish the parent course folder (the assigned PDFs are copyrighted).

## How the calendar works

Weeks unlock on the Mondays in `js/calendar.js` (Fall 2026, America/Chicago). The app will not retell that week’s assigned PDF while the week is live. After the week ends, a review layer may discuss it.

Faculty preview (not for students): add `?faculty=1` to the URL. You can view as another date (`?date=YYYY-MM-DD`) or unlock all (`?unlock=all`). Faculty mode is not counted by GoatCounter.

To reuse the course in a later year, change `WC1.TERM.start` in `js/calendar.js`.

## Analytics

Anonymous visit counts go to GoatCounter (which parts were opened, country-level location). Student answers never leave the machine.

Create a site at [goatcounter.com](https://www.goatcounter.com), then set the URL in `js/analytics.js` (`WC1.GOATCOUNTER`). Until that URL is real, the beacon is a no-op.

## Image slots

Maps in `maps/` are public-domain or CC historical maps, lightly filtered in CSS. Period atmospheres are listed in `docs/GROK-IMAGE-SLOTS.md`.

## Pickup

If building was interrupted, read `docs/BUILD-STATUS.md`.
