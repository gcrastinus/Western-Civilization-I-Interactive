# Image slots for Grok Bot

The app is playable with unrestyled historical maps and CSS filters. Drop files into `app/images/` and `app/maps/` using **these exact filenames**. Do not invent new names without editing the JS.

General rules for every image:

- No modern lettering, no watermarks, no UI chrome, no English captions burned in (maps may keep their original historical labels).
- No anachronistic clothing or objects.
- Prefer the look of a painted miniature, a copperplate, or a slightly foxed print — not a video-game splash, not photoreal tourism.
- Restyled maps: keep geography, coastlines, and original labels; change only palette, paper, and ink to match the period theme below.

## Period palettes

- **Sand / lapis (weeks 1–3):** sand `#ead9b8`, lapis `#1e4d8c`, ink brown `#2c2416`, gold `#c4a35a`. River banks, first cities, lists, a schematic Old World.
- **Marble / sea (weeks 4–6):** marble `#e8eef2`, sea `#2a6a7a`, bronze `#8a5a28`. Hoplite files, a strait, a Macedonian spear.
- **Travertine / bronze (weeks 7–10):** travertine `#efe6d6`, bronze `#8b5a2b`, imperial red `#7a2e2a`. Roads, camps, a Forum, marble processions.
- **Parchment / purple (weeks 11–14):** parchment `#f3ead8`, purple `#5c2d6e`, gold `#b0893a`. A wagon-laager, a minuscule page, a castle door in winter.

## Maps to restyle (overwrite the file in `maps/`)

Keep the original as a backup copy named `*.orig.*` if you like.

1. `maps/ane.png` — Near East c. 1400 BC. Sand and lapis.
2. `maps/greece.jpg` — Botsford, mainland Greece 490–479. Marble and sea.
3. `maps/alexander.jpg` — Alexander’s march. Marble and bronze.
4. `maps/italy.jpg` — Growth of Roman power in Italy. Travertine.
5. `maps/roman-med.png` — Empire in the second century. Travertine and bronze. Keep CC BY-SA credit.
6. `maps/late-empire.png` — c. 400. Parchment.
7. `maps/carolingian.png` — Spruner-Menke, Franks under Charlemagne. Parchment and purple.
8. `maps/investiture.jpg` — Shepherd Europe c. 1097. Parchment and purple.

Do not restyle `maps/whole-past.svg` into a fake historical plate; it is a course schematic.

## Atmosphere stills (files in `images/`)

These appear at the top of each week home. Until they exist, the app shows a dashed slot.

| File | Prompt gist |
|---|---|
| `images/intro-atmosphere.jpg` | A sand-and-lapis view of river and sea meeting a first city wall; clerks with a list; not a tourism poster of pyramids. |
| `images/w01-atmosphere.jpg` | The Old World as belts of land and water; a scholar’s table with an unrolled map, no modern globe stand. |
| `images/w02-atmosphere.jpg` | A forager fire at a margin and, beyond, a field with stored grain; two kinds of time in one landscape. |
| `images/w03-atmosphere.jpg` | A river quay, a temple terrace, a clay tablet; lapis and sand. |
| `images/w04-atmosphere.jpg` | A hoplite file on a shore, sea behind; marble light, no film-still heroes. |
| `images/w05-atmosphere.jpg` | Tiber hills, a wet Forum, Etruscan-looking roofs; not a postcard Colosseum. |
| `images/w06-atmosphere.jpg` | A Macedonian companion helmet and a flattened eastern plain; dust, not a movie Alexander. |
| `images/w07-atmosphere.jpg` | A Roman road in cut stone and a playing-card camp ditch at dusk. |
| `images/w08-atmosphere.jpg` | A deep infantry mass on a south-Italian plain; a thin Carthaginian crescent implied, not labelled. |
| `images/w09-atmosphere.jpg` | Two Roman armies on a Thessalian plain; no portraits of named captains. |
| `images/w10-atmosphere.jpg` | Marble procession and brick city; a Christian labarum small in a later panel, not a tract. |
| `images/w11-atmosphere.jpg` | A wagon-laager on a Thracian plain; purple dusk; an imperial standard down. |
| `images/w12-atmosphere.jpg` | A scriptorium: minuscule on parchment, a window toward a palace chapel. |
| `images/w13-atmosphere.jpg` | An empty study table, a closed atlas, winter light. |
| `images/w14-atmosphere.jpg` | A castle door in snow; a staff and ring on a table; parchment and purple. |

## Do not generate

- New geographic maps from imagination. Restyle the Commons files.
- Photoreal portraits of living people.
- Anything that could be mistaken for the assigned PDF pages.
