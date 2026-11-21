// Skin „Glasklar“ (Dez. 2026, zweiter Neubau nach dem Vorbild – Portfolio eines Web-Designers: schwarzer Grund, Glasobjekt vor großer
// Schrift, winzige Versal-Beschriftungen, „(01) About“-Abschnitte, große Versal-Sätze mit einem kursiven Serifenwort, „Scroll to explore“).
// Die Seite des Vorbilds blieb im Container beim Ladebild stehen; Aufbau und Wortlaut stammen aus ihrem Text.
// Startseite: Vollbild mit Leitsatz, den ein Eisbrocken aus echtem 3D-Glas bricht (glasklar-3d.js, folgt dem Finger); andere Feld-Seiten:
// Glas über dem Seitentitel. „(01) Heute“ füllt sich beim Scrollen Wort für Wort. Ohne echte Grafikkarte bleibt die Schrift ohne Glas.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  async function glass(api, sc, title, opts = {}){
    const cv = document.createElement("canvas"); cv.className = "fxCanvas glGL"; cv.setAttribute("aria-hidden", "true");
    sc.prepend(cv); api.add(()=> cv.remove());
    const txt = document.createElement("canvas");
    try{ await document.fonts.load('850 80px "Skin Glas"'); await document.fonts.load('italic 400 80px "Fraunces"'); }catch{}
    const mod = await import(`/assets/skins/glasklar-3d.js?v=${api.ver}`);
    if(!cv.isConnected) return;
    let three = null, m = null;
    const paint = ()=>{
      const r = cv.getBoundingClientRect(); if(!r.width) return null;
      const d = Math.min(2, devicePixelRatio || 1);
      title.classList.remove("fxDrawn");
      txt.width = Math.round(r.width * d); txt.height = Math.round(r.height * d);
      const g = txt.getContext("2d"); g.setTransform(d, 0, 0, d, 0, 0); g.fillStyle = "#0B0B0C"; g.fillRect(0, 0, r.width, r.height);
      // jede Zeile/Spanne mit eigener Schrift (Leitsatz mischt Grotesk und kursive Serife)
      (opts.parts ? [...title.querySelectorAll(opts.parts)] : [title]).forEach((el)=>{
        const gl = api.glyphs(el, sc), up = getComputedStyle(el).textTransform === "uppercase"; g.font = gl.font; g.fillStyle = gl.color; gl.list.forEach((q)=> g.fillText(up ? q.ch.toUpperCase() : q.ch, q.x, q.y));
      });
      title.classList.add("fxDrawn");
      const tr = title.getBoundingClientRect(), s = sc.getBoundingClientRect();
      const cx = opts.center ? r.width / 2 : Math.min(r.width - 50, tr.left - s.left + tr.width * .66);
      return { w: r.width, h: r.height, d, cx, cy: tr.top - s.top + tr.height * .5, R: opts.center ? Math.min(tr.height * .42 + 20, r.width * .27, 190) : Math.min(tr.height * .55 + 20, r.width * .26, 170) };
    };
    api.add(()=> title.classList.remove("fxDrawn"));
    const fit = ()=>{
      m = paint(); if(!m) return;
      if(!three){ three = mod.create(cv, txt); api.add(()=> three.dispose()); }
      three.resize(m.w, m.h, m.d, m.cx, m.cy, m.R); lp?.redraw();
    };
    const lp = api.loop(cv, (t, dt)=>{
      if(!three || !m) return;
      const s = sc.getBoundingClientRect(), fx = api.ptr.x - s.left, fy = api.ptr.y - s.top;
      three.follow = performance.now() - api.ptr.t < 2500 && fy > 0 && fy < m.h;
      if(three.follow) three.target(fx, fy, m.w, m.h);
      three.render(t, dt, api.reduce());
    });
    const ro = new ResizeObserver(fit); ro.observe(cv); api.add(()=> ro.disconnect());
    fit();
    document.fonts?.ready?.then(fit);
  }

  function hero(api){
    const host = document.querySelector(".homeGreeting");
    if(!host) return null;
    const day = new Date().toLocaleDateString("de-DE", { weekday: "long" });
    const el = api.bit("gkHero", "glasklar");
    el.innerHTML = `<div class="gkTop" aria-hidden="true"><span>Kochbuch &amp; Küche — ${esc(day)}</span><span>Kochen · Backen<br>Schmoren · Planen · Einkaufen</span></div>
      <p class="gkLine"><span class="gkA">Rezepte zum Aufwachen.</span> <span class="gkB">Gerichte zum Träumen.</span></p>
      <div class="gkScroll" aria-hidden="true"><span>Zum Entdecken scrollen</span><i></i></div>`;
    host.prepend(el); api.add(()=> el.remove());
    document.body.classList.add("gkHome"); api.add(()=> document.body.classList.remove("gkHome"));
    return el;
  }

  // „(01) Heute“: großer Versal-Satz mit kursivem Serifen-Teil, füllt sich beim Scrollen
  function about(api, after){
    const a = document.getElementById("todayLink"), title = a?.querySelector(".homeFeaturedTitle")?.textContent.trim();
    if(!a || !title) return;
    const meta = [...a.querySelectorAll(".recipeMeta .metaItem")].map((x)=> x.textContent.trim()).filter(Boolean).join(", ");
    const W = (t, cls)=> t.split(" ").map((w)=> `<span class="gkW${cls ? " " + cls : ""}">${esc(w)}</span>`).join(" ");
    const el = api.bit("gkAbout", "glasklar", "section");
    el.innerHTML = `<p class="gkNo">(01) Heute</p><p class="gkSay">${W("Heute koche ich etwas, das bleibt wie")} ${W("eine Erinnerung", "gkEm")} ${W("— " + title + (meta ? ", " + meta : "") + ".")}</p><a class="gkMore" href="${esc(a.getAttribute("href"))}">Zum Rezept <span aria-hidden="true">↗</span></a>`;
    after.after(el); api.add(()=> el.remove());
    const ws = [...el.querySelectorAll(".gkW")];
    let raf = 0;
    const fill = ()=>{ raf = 0; const r = el.getBoundingClientRect(); const p = api.reduce() ? 1 : Math.max(0, Math.min(1, (innerHeight * .85 - r.top) / (r.height * .9))); const k = Math.round(p * ws.length); ws.forEach((w, i)=> w.classList.toggle("on", i < k)); };
    api.on(window, "scroll", ()=>{ if(!raf) raf = requestAnimationFrame(fill); }, { passive: true });
    fill();
  }

  // Abschnittstitel nummerieren: „(02) Favoriten“
  function numbers(api){
    let n = api.home() ? 1 : 0;
    document.querySelectorAll(".homeSectionTitle, .pageContent .h2, .catGroupTitle").forEach((h)=>{
      if(h.querySelector(".gkN")) return;
      n++; const s = document.createElement("span"); s.className = "gkN"; s.setAttribute("aria-hidden", "true"); s.textContent = `(${String(n).padStart(2, "0")}) `;
      h.prepend(s); api.add(()=> s.remove());
    });
  }

  window.KOCHBUCH_FX.glasklar = {
    start(api){
      numbers(api);
      if(api.home()){
        const h = hero(api);
        if(h){ about(api, document.querySelector(".homeGreeting")); if(api.gpu()) glass(api, h, h.querySelector(".gkLine"), { center: true, parts: ".gkA, .gkB" }).catch((e)=> console.warn("Glasklar 3D:", e)); }
        return;
      }
      const sc = api.scene(), t = api.title();
      if(document.body.classList.contains("fieldPage") && sc && t && api.gpu()) glass(api, sc, t).catch((e)=> console.warn("Glasklar 3D:", e));
    },
  };
})();
