/* =========================================================================
   Rotaract Club of UP Baguio — main.js
   Handles: navigation, rendering events & officers, scroll reveals,
            count-up stats. No build step, no dependencies.
   (You normally don't need to edit this file — edit js/data.js instead.)
   ========================================================================= */
(function () {
  "use strict";

  /* ---------- Helper ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const esc = (str) =>
    String(str).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  /* ---------- 1. Navigation ---------- */
  const nav = $("#nav");
  const toggle = $("#navToggle");

  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    // Close mobile menu when a link is tapped
    $$(".nav__links a, .nav__cta").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- 2. Render Flagship Events ---------- */
  const eventsGrid = $("#eventsGrid");
  if (eventsGrid && typeof EVENTS !== "undefined") {
    eventsGrid.innerHTML = EVENTS.map((ev) => {
      const accent = ["azure", "cranberry", "gold"].includes(ev.accent) ? ev.accent : "azure";
      return `
        <article class="event-card in-view">
          <div class="event-card__media" data-accent="${accent}">
            <span class="event-card__glyph">${esc(ev.glyph || "•")}</span>
            <span class="event-card__tag">${esc(ev.tag || "Project")}</span>
          </div>
          <div class="event-card__body">
            <span class="event-card__date">${esc(ev.date || "")}</span>
            <h3 class="event-card__title">${esc(ev.title || "Untitled")}</h3>
            <p class="event-card__desc">${esc(ev.desc || "")}</p>
            <span class="event-card__avenue">${esc(ev.avenue || "")}</span>
          </div>
        </article>`;
    }).join("");
  }

  /* ---------- 3. Render Officers / Directory ---------- */
  const termSelect = $("#termSelect");
  const officersGrid = $("#officersGrid");
  const officersTheme = $("#officersTheme");

  const initials = (name) =>
    String(name)
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0] || "")
      .join("")
      .toUpperCase() || "?";

  function renderTerm(index) {
    if (typeof TERMS === "undefined" || !TERMS[index]) return;
    const t = TERMS[index];
    if (officersTheme) officersTheme.textContent = t.theme || "";
    if (officersGrid) {
      officersGrid.innerHTML = (t.board || [])
        .map((o) => {
          const lead = o.lead ? " officer-card--lead" : "";
          return `
          <div class="officer-card${lead} in-view">
            <div class="officer-card__avatar">${esc(initials(o.name))}</div>
            <p class="officer-card__name">${esc(o.name || "—")}</p>
            <p class="officer-card__role">${esc(o.role || "")}</p>
          </div>`;
        })
        .join("");
      // trigger reveal for newly added cards
      revealObserve($$(".officer-card", officersGrid));
    }
  }

  if (termSelect && typeof TERMS !== "undefined") {
    termSelect.innerHTML = TERMS.map(
      (t, i) => `<option value="${i}">${esc(t.term)}</option>`
    ).join("");
    termSelect.addEventListener("change", (e) => renderTerm(Number(e.target.value)));
    renderTerm(0);
  }

  /* ---------- 4. Scroll reveal ---------- */
  let io = null;
  function revealObserve(nodes) {
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    if (!io) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
    }
    nodes.forEach((n) => io.observe(n));
  }
  // Tag section content for reveal
  $$(".section__head, .about__lead, .avenue, .polio__lead, .polio__facts, .sponsor__card, .sponsor__family, .join__inner").forEach(
    (n) => n.classList.add("in-view")
  );
  revealObserve($$(".in-view"));

  /* ---------- 5. Count-up stats (End Polio) ---------- */
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    if (isNaN(target)) return;
    const plain = el.dataset.plain === "true"; // e.g. a year — no formatting
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const decimals = (String(target).split(".")[1] || "").length;
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      const shown = plain
        ? Math.round(val).toString()
        : val.toFixed(decimals);
      el.textContent = prefix + shown + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = prefix + (plain ? Math.round(target) : target.toFixed(decimals)) + suffix;
    }
    requestAnimationFrame(tick);
  }

  const factNums = $$(".fact__num[data-count]");
  if (factNums.length && "IntersectionObserver" in window) {
    const factIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            factIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    factNums.forEach((n) => factIO.observe(n));
  }

  /* ---------- 6. Footer year ---------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
