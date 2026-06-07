# Content Guide — editing the website without coding

This is the friendly version. You only ever need to touch **`js/data.js`** and a
few clearly-marked spots in **`index.html`**.

Golden rules:
- Only change text **between the "quotation marks"**.
- **Keep the commas** between items and **don't delete** the `[ ]` or `{ }`.
- Save the file, then refresh the website in your browser.
- If something breaks, undo your last change (Ctrl/Cmd+Z) — the structure is
  the only thing that can break it.

---

## 1. Editing Flagship Events

Open `js/data.js`. Find the `EVENTS` list. Each event looks like this:

```js
{
  tag: "Community Service",
  glyph: "★",
  date: "October 2026",
  title: "Tree-Planting Drive",
  desc: "A short one or two sentence description of the project.",
  avenue: "Community Service",
  accent: "azure"
},
```

- **tag** – small label on the colored banner.
- **glyph** – one big faint letter/symbol behind the banner (decorative).
- **date** – when it happens.
- **title** – the project name.
- **desc** – a short description.
- **avenue** – Club / Community / International Service, or Professional Development.
- **accent** – the banner color: `"azure"`, `"cranberry"`, or `"gold"`.

**To add an event:** copy one whole block (from `{` to `},` including the
comma) and paste it, then edit the text.

**To remove one:** delete the whole block including its trailing comma.

---

## 2. Editing Officers (by term)

In the same `js/data.js`, find the `TERMS` list. Each term looks like this:

```js
{
  term: "2026–2027",
  theme: "Your Rotary Year theme or tagline",
  board: [
    { name: "Maria Santos", role: "President", lead: true },
    { name: "Jose Reyes",   role: "Vice President" },
    { name: "Ana Cruz",     role: "Secretary" }
  ]
},
```

- **term** – appears in the dropdown menu. Put the **newest term first**; it
  shows by default.
- **theme** – optional tagline shown above the roster. Use `""` for none.
- **board** – the officers. Each one is `{ name: "...", role: "..." }`.
- Add `lead: true` to **one** person (usually the President) to give them the
  highlighted blue card.

**Add an officer:** add a new `{ name: "...", role: "..." },` line.
**Add a past term:** copy a whole term block and place it below, separated by a
comma.

The round avatar shows each person's initials automatically.

---

## 3. Editing the About / Sponsor text

Open `index.html` and use your editor's **Find** (Ctrl/Cmd+F) to search for:

```
EDIT ME
```

Each result is a comment showing exactly what to replace nearby — your club's
founding story, mission, and a sentence or two about your relationship with the
Rotary Club of Baguio North.

---

## 4. (Optional) Adding a photo to an event

1. Put the image in the `assets/` folder, e.g. `assets/event-polio.jpg`.
2. In `js/main.js` this is a small code change, so it's optional. The simplest
   no-code path is to keep the colored banners as they are — they look clean and
   load instantly. If you want photos and aren't comfortable editing `main.js`,
   ask a member who codes; it's a 2-line change.

---

## 5. Changing colors or fonts (advanced, optional)

Open `css/styles.css`. At the very top, the `:root { ... }` block lists every
color as a variable, e.g. `--azure`, `--gold`, `--cranberry`. Change the hex
codes there and the whole site updates. Fonts are loaded in `index.html`
(`<link ... fonts.googleapis.com ...>`).

---

That's everything. When in doubt: edit text between quotes, keep the punctuation,
save, refresh. 🎉
