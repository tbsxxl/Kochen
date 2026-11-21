// Skin „Bilderbuch“ (Schlüssel „wortwelt“; Dez. 2026 zweiter Neubau nach genauem Vergleich mit dem Vorbild – einem illustrierten
// Online-Buch): Die Startseite IST das Buch. Erst liegt es geschlossen da (Kreide-Deckel, „Buch öffnen“, Widmung), dann jede
// Doppelseite ein Rezept in eigener kräftiger Farbe mit riesigem handgemaltem Wort (wortwelt-3d.js). Darunter die Bildunterschrift
// (Name, Untertitel, Zeit), seitlich handgezeichnete Pfeile, unten farbige Seitenpunkte. Ohne echte Grafikkarte: Seiten als flache Karten.
(()=>{
  "use strict";
  const VIVID = ["#EBB2A9", "#E2604A", "#3E8A5E", "#5B40D4", "#F0B23C", "#2E6EA6"];
  const ARROW = (flip)=> `<svg class="ico" viewBox="0 0 48 24" aria-hidden="true" style="${flip ? "transform:scaleX(-1)" : ""}"><path d="M44 12C32 11 18 13 5 12M13 4C10 7 7 9 4 12c3 3 6 5 9 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  function pick(api){
    let seed = Math.floor(Date.now() / 864e5);
    const rnd = ()=>{ seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    return api.recipes().map((r)=> [rnd(), r]).sort((a, b)=> a[0] - b[0]).map((x)=> x[1]).slice(0, 12);
  }

  function hero(api){
    const host = document.querySelector(".homeGreeting");
    const list = pick(api);
    if(!host || list.length < 3) return null;
    const day = new Date().toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
    const el = api.bit("wwHero", "wortwelt");
    el.innerHTML = `<div class="wwStage" role="group" aria-roledescription="Buch" aria-label="Rezeptbuch">
        <button type="button" class="wwArrow wwPrev" aria-label="Vorige Seite">${ARROW(false)}</button>
        <button type="button" class="wwArrow wwNext" aria-label="Nächste Seite">${ARROW(true)}</button>
      </div>
      <div class="wwUnder">
        <div class="wwClosed">
          <button type="button" class="wwOpenBtn"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 5.5C5 4 8.5 4 12 6c3.5-2 7-2 10-.5V19c-3-1.5-6.5-1.5-10 .5-3.5-2-7-2-10-.5z M12 6v13.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>Buch öffnen</button>
          <p class="wwDedic"><small>Für:</small> alle, die heute kochen.<br>Möge es schmecken und für alle reichen.<br><em>${esc(day)}</em></p>
        </div>
        <a class="wwCap" href="#" hidden><b></b><span></span><i></i></a>
        <div class="wwDots" role="tablist" aria-label="Seiten">${list.map((r, i)=> `<button type="button" role="tab" aria-label="Seite ${i + 1}: ${esc(r.t)}" style="--c:${VIVID[i % VIVID.length]}"></button>`).join("")}</div>
      </div>`;
    host.appendChild(el);
    api.add(()=> el.remove());
    document.body.classList.add("wwHome"); api.add(()=> document.body.classList.remove("wwHome"));
    dispatchEvent(new Event("kochbuch:sceneresize"));
    return { el, list };
  }

  // ohne 3D: Doppelseite als flache Karte (Foto links, Wort rechts), gleiche Steuerung
  function flat(api, h){
    const stage = h.el.querySelector(".wwStage");
    const page = document.createElement("div"); page.className = "wwFlat"; stage.prepend(page);
    return {
      open: false, index: -1,
      go(d){ this.index = Math.max(-1, Math.min(h.list.length - 1, this.index + d)); this.open = this.index >= 0; this.draw(); },
      draw(){
        const i = this.index, r = h.list[i];
        page.style.setProperty("--c", i < 0 ? "#2B2A2D" : VIVID[i % VIVID.length]);
        page.innerHTML = i < 0 ? `<div class="wwFlatCover"><small>Tobis</small><b>Kochbuch</b></div>` :
          `<img src="${esc(r.i)}" alt=""><b>${esc((r.t.split(/[\s-]+/).reduce((a, w)=> w.length >= a.length ? w : a, "")).toUpperCase())}</b>`;
      },
    };
  }

  async function run(api, h){
    const stage = h.el.querySelector(".wwStage"), cap = h.el.querySelector(".wwCap"), closed = h.el.querySelector(".wwClosed");
    const dots = [...h.el.querySelectorAll(".wwDots button")], prev = h.el.querySelector(".wwPrev"), next = h.el.querySelector(".wwNext");
    let book = null, lp = null;
    const sync = (i)=>{
      h.el.classList.toggle("isOpen", i >= 0);
      closed.hidden = i >= 0; cap.hidden = i < 0;
      prev.disabled = i < 0; next.disabled = i >= h.list.length - 1;
      dots.forEach((d, k)=> d.setAttribute("aria-selected", String(k === i)));
      if(i >= 0){ const r = h.list[i]; cap.href = r.u; cap.querySelector("b").textContent = r.t; cap.querySelector("span").textContent = r.s || ""; cap.querySelector("i").textContent = r.z || ""; }
    };
    const kick = ()=>{ if(api.reduce() && lp) [30, 120, 400, 900].forEach((ms)=> setTimeout(()=> lp.redraw(), ms)); };
    const go = (d)=>{ book.go(d); if(!lp) sync(book.index); kick(); };
    if(api.gpu()){
      const cv = document.createElement("canvas"); cv.className = "wwGL"; cv.setAttribute("aria-hidden", "true"); stage.prepend(cv);
      try{ await document.fonts.load('700 80px "Skin Feder"'); await document.fonts.load('400 40px "Fraunces"'); }catch{}
      const mod = await import(`/assets/skins/wortwelt-3d.js?v=${api.ver}`);
      if(!cv.isConnected) return;
      book = mod.create(cv, h.list, sync); api.add(()=> book.dispose());
      const fit = ()=>{ const r = cv.getBoundingClientRect(); if(r.width){ book.resize(r.width, r.height, devicePixelRatio || 1, r.height / 2, r.height); lp?.redraw(); } };
      const ro = new ResizeObserver(fit); ro.observe(cv); api.add(()=> ro.disconnect());
      lp = api.loop(cv, (t, dt)=> book.render(t, dt, api.reduce()));
      fit();
      [500, 1500, 3500].forEach((ms)=>{ const id = setTimeout(()=> lp.redraw(), ms); api.add(()=> clearTimeout(id)); });
    } else { book = flat(api, h); book.draw(); sync(-1); }

    api.on(h.el.querySelector(".wwOpenBtn"), "click", ()=> go(1));
    api.on(prev, "click", ()=> go(-1));
    api.on(next, "click", ()=> go(1));
    dots.forEach((d, k)=> api.on(d, "click", ()=>{ const step = ()=>{ if(book.index === k) return; go(book.index < k ? 1 : -1); if(book.index !== k) setTimeout(step, lp ? 760 : 0); }; step(); }));
    let down = null;
    api.on(stage, "pointerdown", (e)=>{ if(e.target.closest("button")) return; down = { x: e.clientX, y: e.clientY, t: performance.now() }; });
    api.on(stage, "pointermove", (e)=>{ if(!lp) return; const r = stage.getBoundingClientRect(); book.tiltY = ((e.clientX - r.left) / r.width - .5) * .3; book.tiltX = ((e.clientY - r.top) / r.height - .5) * .16; });
    api.on(stage, "pointerup", (e)=>{
      if(!down) return;
      const dx = e.clientX - down.x, dy = e.clientY - down.y, dt = performance.now() - down.t; down = null;
      if(Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)){ go(dx < 0 ? 1 : -1); return; }
      if(Math.hypot(dx, dy) < 8 && dt < 450){ if(book.index < 0) go(1); else location.href = h.list[book.index].u; }
    });
    api.on(stage, "pointerleave", ()=>{ if(lp){ book.tiltX = book.tiltY = 0; } });
    api.on(document, "keydown", (e)=>{ if(e.target.closest?.("input, textarea")) return; if(e.key === "ArrowRight") go(1); if(e.key === "ArrowLeft") go(-1); });
  }

  // Rezeptliste und andere Listen: jede Karte eine Buchseite in einer der Seitenfarben
  const DARK_INK = { "#EBB2A9": 1, "#F0B23C": 1 };
  const paint = (el, col)=>{ el.style.setProperty("--pc", col); el.classList.toggle("wwInkDark", !!DARK_INK[col]); };
  function pages(){
    document.querySelectorAll("#recipeGrid .recipeCard, .hScroll .recipeCard, .homeFeatured").forEach((c, i)=> paint(c, VIVID[i % VIVID.length]));
    const hero = document.querySelector(".recipePageHero"), t = window.RECIPE_DATA?.title;
    if(hero && t){ let n = 0; for(const ch of t) n = (n * 31 + ch.charCodeAt(0)) % 997; paint(hero, VIVID[n % VIVID.length]); }
  }

  window.KOCHBUCH_FX.wortwelt = {
    start(api){
      pages();
      api.add(()=> document.querySelectorAll(".recipeCard, .recipePageHero").forEach((c)=>{ c.style.removeProperty("--pc"); c.classList.remove("wwInkDark"); }));
      if(!api.home()) return;
      const h = hero(api);
      if(h) run(api, h).catch((e)=> console.warn("Bilderbuch 3D:", e));
    },
    refresh(){ pages(); },
  };
})();
