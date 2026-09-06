# Image slots for Grok Bot

The app is playable with unrestyled historical maps and CSS filters. Drop files into `images/` and `maps/` using **these exact filenames**. Do not invent new names without editing the JS.

General rules for every image:

- No modern lettering, no watermarks, no UI chrome, no English captions burned in (maps may keep their original historical labels).
- No anachronistic clothing or objects.
- Prefer the look of a painted miniature, a copperplate, museum artifact photo, or a slightly foxed print — not a video-game splash, not photoreal tourism, not an AI “quest map + compass” still.
- Restyled maps: keep geography, coastlines, and original labels; change only palette, paper, and ink to match the period theme below.

## Period palettes

- **Sand / lapis (weeks 1–3):** sand `#ead9b8`, lapis `#1e4d8c`, ink brown `#2c2416`, gold `#c4a35a`. River banks, first cities, lists, a schematic Old World.
- **Marble / sea (weeks 4–6):** marble `#e8eef2`, sea `#2a6a7a`, bronze `#8a5a28`. Hoplite files, a strait, a Macedonian spear.
- **Travertine / bronze (weeks 7–10):** travertine `#efe6d6`, bronze `#8b5a2b`, imperial red `#7a2e2a`. Roads, camps, a Forum, marble processions.
- **Parchment / purple (weeks 11–14):** parchment `#f3ead8`, purple `#5c2d6e`, gold `#b0893a`. A wagon-laager, a minuscule page, a castle door in winter.

## Maps to restyle (overwrite the file in `maps/`)

Keep the original as a backup copy named `*.orig.*` if you like. These are real Wikimedia Commons historical plates; only restyle palette/paper/ink. **Do not replace the map files with AI images.**

1. `maps/ane.png` — Near East c. 1400 BC. Sand and lapis.
2. `maps/greece.jpg` — Botsford, mainland Greece 490–479. Marble and sea.
3. `maps/alexander.jpg` — Alexander’s march. Marble and bronze.
4. `maps/italy.jpg` — Growth of Roman power in Italy. Travertine.
5. `maps/roman-med.png` — Empire in the second century. Travertine and bronze. Keep CC BY-SA credit.
6. `maps/late-empire.png` — c. 400. Parchment.
7. `maps/carolingian.png` — Spruner-Menke, Franks under Charlemagne. Parchment and purple.
8. `maps/investiture.jpg` — Shepherd Europe c. 1097. Parchment and purple.

Do not restyle `maps/whole-past.svg` into a fake historical plate; it is a course schematic.

## Atmosphere stills (files in `images/`) — REAL historical images only

These appear at the top of each week home. **They must be real historical photographs or scans** from Wikimedia Commons, museum open-access programs, or other clearly PD / CC BY / CC BY-SA sources.

**Hard rules:**

- **Never** use AI-generated, diffusion, or “quest-style” synthetic stills for atmosphere slots (no compass-on-desk, no invented atlas desk scene, no Midjourney/DALL·E/Flux fills).
- Prefer museum artifacts, archaeological photographs, historical engravings/paintings, and printed atlas plates that match the week’s theme.
- Keep filename exactly as listed; center-crop to ~16:9 and resize to about 1280×720 JPEG when replacing.
- Record Commons title, URL, and licence in `CREDITS.md` / `docs/CITATIONS.md` whenever a file changes.
- AI image tools are allowed **only later** for optional walkthrough/animation assets if the course ever adds those — never for week/intro atmospheres, and never for maps.

Current atmospheres (Commons sources as of 2026-09-06; see also root `CREDITS.md` in the atmospheres work folder):

| File | Theme | Commons source (title) |
|---|---|---|
| `images/intro-atmosphere.jpg` | Beginnings / early Mesopotamia | Standard of Ur - Peace.jpg |
| `images/w01-atmosphere.jpg` | Shape of the past (atlas plate) | OrteliusWorldMap1570.jpg |
| `images/w02-atmosphere.jpg` | Three eras — agrarian harvest | Agricultural Scenes, Tomb of Nakht MET DT306954.jpg |
| `images/w03-atmosphere.jpg` | Ancient East — law / Hammurabi | Code of Hammurabi (Louvre Sb 8)-31434550325.jpg |
| `images/w04-atmosphere.jpg` | Greece — hoplite pottery | Detail from the Chigi-vase.jpg |
| `images/w05-atmosphere.jpg` | Origins of Rome — Lupa Capitolina | Lupa Capitolina, Rome.jpg |
| `images/w06-atmosphere.jpg` | Alexander — Issus mosaic | Battle of Issus mosaic (from Pompeii).jpg |
| `images/w07-atmosphere.jpg` | Toward imperium — Via Appia | Via Appia in 1870 - 890.jpg |
| `images/w08-atmosphere.jpg` | Republic — Forum (Piranesi) | Piranesi Campo Vaccino.jpg |
| `images/w09-atmosphere.jpg` | End of Republic — Death of Caesar | Jean-Léon Gérôme - The Death of Caesar - Walters 37884.jpg |
| `images/w10-atmosphere.jpg` | Empire & Constantine — Arch | Arch of Constantine (Rome).jpg |
| `images/w11-atmosphere.jpg` | Decline & kingdoms — Sack of Rome | Sack of Rome by the Visigoths on 24 August 410 by JN Sylvestre 1890.jpg |
| `images/w12-atmosphere.jpg` | Charlemagne — Dürer portrait | Albrecht Dürer - Emperor Charlemagne.jpg |
| `images/w13-atmosphere.jpg` | Study week — scriptorium | Jean Miélot, Brussels.jpg |
| `images/w14-atmosphere.jpg` | Investiture — Canossa | Henry IV awaited the pope outside Canossa.jpg |

## Do not generate

- Atmosphere JPGs with AI / diffusion / stock-AI sites (Unsplash AI, etc.).
- New geographic maps from imagination. Restyle the Commons files only.
- Photoreal portraits of living people.
- Anything that could be mistaken for the assigned PDF pages.
