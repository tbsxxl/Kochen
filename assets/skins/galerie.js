// Skin „Galerie“ (Dez. 2026, dritte Fassung nach dem Vorbild – einer Kunst-Ausgabe eines Shop-Anbieters, die mit echten alten Gemälden
// arbeitet; Besitzer: „nicht vergleichbar, keine Winter-Ausgabe“): gemeinfreie Gemälde alter Meister (assets/skins/galerie/, Quellen in
// quellen.txt). Startseite: Küchenszene über die ganze Fläche, mittig dünner weißer Rahmen mit „Tobis Koch✱buch – Die Tafel-Ausgabe“ und
// Inhaltsverzeichnis (römische Zahlen); beim Scrollen schrumpft der Rahmen, ein Funkelring öffnet sich. Kapitel „Heute“ auf Arcimboldos
// Gemüse-Gesicht mit riesigem weißem Wort und Satz mit verziertem Anfangsbuchstaben, eingerissener Papierrand. Andere Feld-Seiten: Kopf
// mit eigenem Stillleben und riesigem weißem Titel. Am Rechner links festes Inhaltsverzeichnis.
(()=>{
  "use strict";
  const TAU = Math.PI * 2;
  const IMG = (n)=> `/assets/skins/galerie/${n}.jpg?v=1`;
  // Werkangaben für die Schilder an den Gemälden (Quellen in galerie/quellen.txt)
  const WORKS = {
    "beuckelaer-kueche": ["Joachim Beuckelaer", "Küchenszene", "16. Jh."],
    "arcimboldo-vertumnus": ["Giuseppe Arcimboldo", "Vertumnus", "1591"],
    "peeters-kaese": ["Clara Peeters", "Stillleben mit Käse", "um 1625"],
    "claesz-pastete": ["Pieter Claesz", "Stillleben mit Truthahnpastete", "1627"],
    "cotan-gefluegel": ["Juan Sánchez Cotán", "Stillleben mit Geflügel", "um 1600"],
    "chardin-brioche": ["Jean Siméon Chardin", "Die Brioche", "1763"],
    "vandyck-tafel": ["Floris van Dyck", "Gedeckter Tisch", "um 1615"],
    "carracci-bohnenesser": ["Annibale Carracci", "Der Bohnenesser", "um 1584"],
    "campi-obsthaendlerin": ["Vincenzo Campi", "Die Obsthändlerin", "1580"],
    "heda-austern": ["Willem Claesz. Heda", "Stillleben mit Austern", "1634"],
    "aertsen-marktfrau": ["Pieter Aertsen", "Marktfrau am Gemüsestand", "1567"],
    "snyders-speisekammer": ["Frans Snyders", "Speisekammer", "17. Jh."],
  };
  const SAAL_ART = ["campi-obsthaendlerin", "heda-austern", "carracci-bohnenesser", "aertsen-marktfrau", "snyders-speisekammer"];
  const PAGE_ART = { rezeptindex: "claesz-pastete", kategorien: "cotan-gefluegel", wochenplan: "vandyck-tafel", shopping: "chardin-brioche", kuehltruhe: "peeters-kaese", "was-koche-ich": "peeters-kaese" };
  const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  const TOC = ["Schnell", "Pasta", "Curry", "Suppen & Eintöpfe", "Schmorgerichte", "Burger & Sandwiches", "Süßes & Backen", "Wochenendprojekt"];
  const STAR = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>`;
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const cats = ()=>{ let c = []; try{ c = JSON.parse(document.getElementById("homeCats")?.textContent || "null") || []; }catch{} return c.length ? TOC.filter((x)=> c.includes(x)) : TOC; };
  const tocHtml = ()=> `<ol class="gaToc">${cats().map((c, i)=> `<li><a href="/rezeptindex/?kategorie=${encodeURIComponent(c)}"><span>${esc(c)}</span><i>${ROMAN[i]}</i></a></li>`).join("")}</ol>`;
  const logo = `<span class="gaLogo">Tobis<br>Koch<b>${STAR}</b>buch</span>`;

  // Gemälde als Hintergrund (leichte Parallaxe beim Scrollen)
  function art(api, host, name, pos){
    const im = document.createElement("img"); im.className = "gaArt"; im.alt = ""; im.decoding = "async"; im.src = IMG(name);
    if(pos) im.style.objectPosition = pos;
    host.prepend(im);
    if(!api.reduce()){
      let raf = 0;
      const par = ()=>{ raf = 0; const r = host.getBoundingClientRect(); if(r.bottom < 0 || r.top > innerHeight) return; im.style.transform = `translate3d(0,${(-r.top * .18).toFixed(1)}px,0) scale(1.08)`; };
      api.on(window, "scroll", ()=>{ if(!raf) raf = requestAnimationFrame(par); }, { passive: true }); par();
    }
    plaque(host, name);
    return im;
  }

  // kleines Schild mit Maler, Titel, Jahr (unten rechts am Gemälde)
  function plaque(host, name){
    const w = WORKS[name]; if(!w || host.querySelector(":scope > .gaPlaque")) return;
    const el = document.createElement("p"); el.className = "gaPlaque";
    el.innerHTML = `<b>${esc(w[0])}</b><i>${esc(w[1])}</i>, ${esc(w[2])}`;
    host.appendChild(el);
  }

  // Funkelring in der Bildmitte, öffnet sich beim Scrollen
  function sparkle(api, host){
    const c = api.canvas(host, "gaSpark"), P = [];
    for(let i = 0; i < 260; i++) P.push({ a: Math.random() * TAU, r: .8 + Math.random() * .4, s: .6 + Math.random() * 1.8, tw: Math.random() * TAU });
    api.loop(c.cv, (t)=>{
      const g = c.g, w = c.w, h = c.h; if(!w) return;
      g.clearRect(0, 0, w, h);
      const p = Math.min(1, scrollY / (innerHeight * .7)); if(p < .02) return;
      const R = Math.min(w, h) * (.06 + p * .2), cx = w / 2, cy = h * .5;
      g.globalCompositeOperation = "lighter";
      P.forEach((q)=>{
        const a = q.a + t * .0003, rr = R * q.r, x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr * .95, al = (.4 + .6 * Math.abs(Math.sin(t * .004 + q.tw))) * p;
        g.fillStyle = `rgba(255,${230 + Math.round(q.s * 10)},200,${al.toFixed(3)})`; g.fillRect(x, y, q.s, q.s);
      });
      g.globalCompositeOperation = "source-over";
    });
  }

  function hero(api){
    const host = document.querySelector(".homeGreeting");
    if(!host) return null;
    const el = api.bit("gaHero", "galerie");
    const n = api.recipes().length;
    el.innerHTML = `<div class="gaFrame">${logo}<p class="gaLead">Die Tafel-Ausgabe. ${n} Rezepte – von schnell bis Wochenende.</p>${tocHtml()}</div>`;
    host.prepend(el); api.add(()=> el.remove());
    art(api, el, "beuckelaer-kueche", "62% 30%"); sparkle(api, el);
    const fr = el.querySelector(".gaFrame");
    if(!api.reduce()) api.on(window, "scroll", ()=>{ const p = Math.min(1, scrollY / (innerHeight * .8)); fr.style.transform = `translate(-50%,-50%) scale(${(1 - p * .25).toFixed(3)})`; fr.style.opacity = (1 - p * 1.1).toFixed(3); }, { passive: true });
    document.body.classList.add("gaHome"); api.add(()=> document.body.classList.remove("gaHome"));
    return el;
  }

  // Kapitel „Heute“: Gemälde, riesiges Wort, Satz mit Anfangsbuchstabe, eingerissener Rand
  function chapter(api, after){
    const a = document.getElementById("todayLink"), title = a?.querySelector(".homeFeaturedTitle")?.textContent.trim();
    if(!a || !title) return;
    const meta = [...a.querySelectorAll(".recipeMeta .metaItem")].map((m)=> m.textContent.trim()).filter(Boolean).join(", ");
    const el = api.bit("gaChapter", "galerie", "section");
    el.innerHTML = `<div class="gaChapIn"><p class="gaBig" aria-hidden="true">Heute</p><p class="gaSay"><span class="gaCap">H</span>eute kommt auf die Tafel: <a href="${esc(a.getAttribute("href"))}">${esc(title)}</a>${meta ? ` – ${esc(meta)}` : ""}. Dazu frisches Brot und Zeit für ein zweites Stück.</p></div>`;
    after.after(el); api.add(()=> el.remove());
    art(api, el, "arcimboldo-vertumnus", "50% 22%");
  }

  // andere Feld-Seiten: Kopf mit eigenem Gemälde
  function pageHead(api){
    const t = document.querySelector("body.fieldPage:not(.layout-home) .pageTitleBlock");
    if(!t) return;
    const key = location.pathname.split("/").filter(Boolean)[0] || "";
    const head = api.bit("gaHead", "galerie");
    t.before(head); head.appendChild(t);
    api.add(()=>{ head.before(t); head.remove(); });
    art(api, head, PAGE_ART[key] || "peeters-kaese", "50% 40%");
    document.body.classList.add("gaPaged"); api.add(()=> document.body.classList.remove("gaPaged"));
  }


  // weitere Säle auf der Startseite: je Kategorie ein Gemälde, „Saal II …“, drei gerahmte Werke mit Museumsschild
  function halls(api, after){
    const R = api.recipes(), used = new Set();
    const list = cats().map((c)=> [c, R.filter((r)=> r.c === c)]).filter(([, rs])=> rs.length >= 3).slice(0, 4);
    let prev = after;
    list.forEach(([c, rs], i)=>{
      const pick = rs.filter((r)=> !used.has(r.u)).slice(0, 3); pick.forEach((r)=> used.add(r.u));
      if(pick.length < 3) return;
      const el = api.bit("gaSaal", "galerie", "section");
      const n = ROMAN[cats().indexOf(c)] || String(i + 2);
      el.innerHTML = `<div class="gaSaalHead"><div class="gaSaalIn"><p class="gaKick">Saal ${n}</p><h2 class="gaSaalName">${esc(c)}</h2><p class="gaSaalCount">${rs.length} Werke</p></div></div>
        <div class="gaWall">${pick.map((r, k)=> `<a class="gaWork" href="${esc(r.u)}"><span class="gaMat"><img src="${esc(r.i)}" alt="" loading="lazy" decoding="async"></span><span class="gaLabel"><small>Nº ${k + 1} · Saal ${n}</small><b>${esc(r.t)}</b>${r.z ? `<span>${esc(r.z)}</span>` : ""}</span></a>`).join("")}</div>
        <a class="gaAll" href="/rezeptindex/?kategorie=${encodeURIComponent(c)}">Den ganzen Saal ansehen</a>`;
      prev.after(el); prev = el; api.add(()=> el.remove());
      art(api, el.querySelector(".gaSaalHead"), SAAL_ART[i % SAAL_ART.length], "50% 45%");
    });
  }

  // Rezeptseite: Museumsschild mit den Angaben zum Werk
  function label(api){
    const D = window.RECIPE_DATA, body = document.querySelector(".recipePageBody");
    if(!D || !body) return;
    const kv = [...document.querySelectorAll(".recipeFacts .kv")].map((k)=> k.textContent.trim()).filter(Boolean);
    const who = document.querySelector(".recipeAuthor span:last-child")?.textContent.replace(/^von\s+/, "").trim();
    const el = api.bit("gaRecLabel", "galerie");
    // der Name steht schon groß auf dem Foto – das Schild nennt Gattung (Kategorie), Maße (Zeit, Portionen) und Herkunft
    el.innerHTML = `${D.category ? `<b>${esc(D.category)}</b>` : ""}<span>${esc([kv[0], kv[1]].filter(Boolean).join(" · "))}</span>${who ? `<span>Aus der Sammlung von ${esc(who)}</span>` : ""}`;
    const st = body.querySelector(".gaStatement"); if(st) st.after(el); else body.prepend(el);
    api.add(()=> el.remove());
  }

  // Rezeptseite: Untertitel als großer Satz mit verziertem Anfangsbuchstaben
  function statement(api){
    const sub = window.RECIPE_DATA?.subtitle, body = document.querySelector(".recipePageBody");
    if(!sub || !body) return;
    const el = api.bit("gaStatement", "galerie", "p");
    el.innerHTML = `<span class="gaCap" aria-hidden="true">${esc(sub[0])}</span><span aria-hidden="true">${esc(sub.slice(1))}</span><span class="gaSr">${esc(sub)}</span>`;
    body.prepend(el); api.add(()=> el.remove());
  }

  // links fest: Inhaltsverzeichnis (nur breite Bildschirme, per CSS)
  function side(api){
    const el = api.bit("gaSide", "galerie", "aside");
    el.setAttribute("aria-label", "Inhalt");
    el.innerHTML = `<a class="gaSideHome" href="/">${logo}</a>${tocHtml()}<p class="gaFine">Die Tafel-Ausgabe<br>Gemälde: alte Meister, gemeinfrei</p>`;
    document.body.appendChild(el); api.add(()=> el.remove());
  }

  window.KOCHBUCH_FX.galerie = {
    start(api){
      side(api);
      statement(api);
      label(api);
      pageHead(api);
      if(!api.home()) return;
      const h = hero(api);
      if(h){ chapter(api, document.querySelector(".homeGreeting")); const ch = document.querySelector(".gaChapter"); if(ch) halls(api, ch); }
      dispatchEvent(new Event("kochbuch:sceneresize"));
    },
  };
})();
