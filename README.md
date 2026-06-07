# rotaract-upb-website

A fast, mobile-friendly, 100% free-to-build and free-to-host website for the
Rotaract Club of UP Baguio. It covers everything you asked for:
About the Organization — who we are + the four Avenues of Service
Flagship Events — editable cards for your signature projects
End Polio Now — Rotary's official campaign content, with animated facts
About our Rotary Sponsor — the Rotary Club of Baguio North (District 3790)
Officers & Directory — a roster you can switch by term / batch
There is no build step and no paid software. It's plain HTML, CSS, and
JavaScript, so it runs anywhere and anyone on your team can maintain it.
---
Quick start — see it on your computer
Unzip this folder anywhere.
Open the folder in VS Code.
Easiest preview: install the "Live Server" extension, then right-click
`index.html` → "Open with Live Server."
(Or simply double-click `index.html` to open it in your browser. Live
Server is nicer because it auto-refreshes when you edit.)
That's it — the site is fully working offline.
---
How to edit the content 
Open `js/data.js`. That single file holds your Flagship Events and your
Officers directory. There are step-by-step comments inside. Change the text
between the `"quotation marks"`, save, and refresh the page.
Other quick text edits (About story, sponsor details) are inside `index.html` —
search for `EDIT ME` to find every spot meant to be customized.
A friendlier walkthrough is in `CONTENT-GUIDE.md`.
> \*\*Official logos:\*\* the Rotary/Rotaract emblems are trademarks. Download the
> approved files for free from \*\*brandcenter.rotary.org\*\* and drop them in
> `assets/` (see `assets/README.txt`). The site looks complete without them too.
---
Recommended implementation steps (start to finish)
Preview locally (above) so you know it works.
Replace placeholder content in `js/data.js`:
Real flagship events (titles, dates, descriptions from your FB page).
Real officers for the current term; add past terms as needed.
Customize the text in `index.html` (everything marked `EDIT ME`):
the club's founding story, mission, and sponsor relationship.
Add official logos & photos to `assets/` (optional but recommended).
Proofread on your phone and on a laptop — the layout adapts to both.
Deploy using one of the free options above.
Share the link on your Facebook page and in your bio.
Maintain it each term: the incoming PRO/Secretary just edits
`js/data.js` and redeploys. No developer required.
---
File structure
```
rotaract-upb-website/
├── index.html          ← the page (text edits marked "EDIT ME")
├── css/
│   └── styles.css       ← all styling (colors, fonts, layout)
├── js/
│   ├── data.js          ← ★ EDIT THIS: events + officers
│   └── main.js          ← rendering + interactions (rarely needs editing)
├── assets/
│   ├── favicon.svg       ← browser-tab icon
│   └── README.txt        ← what images/logos to add
├── CONTENT-GUIDE.md     ← plain-English editing guide
└── README.md            ← this file
