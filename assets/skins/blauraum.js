// Skin „Blauraum“ (Nov. 2026, zweiter Neubau nach genauem Vergleich mit dem Vorbild – Agentur-Seite: elektrisches Blau, gebogenes
// Gitter, Bilderringe um eine Lamellen-Skulptur, winzige Versal-Beschriftungen, Glas-Kapseln, gelber Punkt als Zeiger).
// - Startseite: der erste Bildschirm ist ein Vollbild-3D-Raum (blauraum-3d.js); ohne echte Grafikkarte ein CSS-Bilderring.
//   Unten „Ringe | Spirale“ und „n / m Rezepte“, am Rechner zeigt der Zeiger ein Etikett mit dem Rezept unter ihm.
// - Rezeptliste: Fotos auf einer gewölbten Fläche (Karten neigen sich je nach Lage auf dem Bildschirm), Umschalter „Raster | Liste“.
// - Überall am Rechner: gelber Punkt folgt der Maus.
// - Dritte Fassung (Dez. 2026, Entwurf J „Dünn und fett“ aus bencium-innovative, docs/skins/blauraum-j.md): nach dem 3D-Raum steht das
//   Gericht des Tages als ein Satz `.blJ`, in dem dünne (200) und fette (800) Wörter wechseln; Kategorien genauso.
(()=>{
  "use strict";
  const LIST_KEY = "kochbuch.ui.blList";

  function pickRecipes(api, n){
    let seed = Math.floor(Date.now() / 864e5);
    const rnd = ()=>{ seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    const all = api.recipes();
    return { all, list: all.map((r)=> [rnd(), r]).sort((a, b)=> a[0] - b[0]).map((x)=> x[1]).slice(0, n) };
  }

  // ---------- Startseite: Vollbild-Raum ----------
  function hero(api){
    const host = document.querySelector(".homeGreeting");
    if(!host) return null;
    const { all, list } = pickRecipes(api, 27);
    const el = api.bit("blHero", "blauraum");
    el.innerHTML = `<div class="blTip" aria-hidden="true"><span class="blTipT"></span><span class="blTipZ"></span></div>
      <div class="blBar">
        <div class="blSeg" role="group" aria-label="Anordnung der Bilder"><button type="button" data-m="rings" aria-pressed="true">Ringe</button><button type="button" data-m="spiral" aria-pressed="false">Spirale</button></div>
        <a class="blCount" href="/rezeptindex/">${list.length} / ${all.length} <u>Rezepte</u></a>
      </div>`;
    host.prepend(el);
    api.add(()=> el.remove());
    document.body.classList.add("blHome"); api.add(()=> document.body.classList.remove("blHome"));
    dispatchEvent(new Event("kochbuch:sceneresize"));
    return { el, list };
  }

  // ---------- Heute als ein Satz: dünn und fett im Wechsel ----------
  function sentence(api){
    const host = document.querySelector(".homeGreeting"); if(!host || document.querySelector(".blJ")) return;
    const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
    let counts = {}, total = 0;
    const cc = document.getElementById("homeCatCount");
    try{ counts = JSON.parse(cc?.textContent || "{}"); total = Number(cc?.dataset.total) || 0; }catch{}
    const cats = Object.entries(counts).sort((a, b)=> b[1] - a[1]).slice(0, 4);
    const link = document.getElementById("todayLink");
    const path = link ? new URL(link.href, location.href).pathname : "";
    const r = api.recipes().find((x)=> x.u === path) || {};
    const title = document.getElementById("todayTitle")?.textContent.trim() || r.t || "";
    if(!title) return;
    // Untertitel: das letzte Wort fett, der Rest dünn („mit Romanesco und <b>Kartoffelpüree</b>“)
    let sub = "";
    if(r.s){ const w = r.s.trim().split(/\s+/), last = w.pop(); sub = `, ${esc(w.join(" "))}${w.length ? " " : ""}<b>${esc(last.replace(/[.!]$/, ""))}</b>`; }
    const date = new Date().toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
    const el = api.bit("blJ", "blauraum", "section");
    el.setAttribute("aria-label", "Heute für dich");
    el.innerHTML = `<p class="blJTop"><span>Tobis Kochbuch</span><span>${esc(date)}</span></p>
      <p class="blJCap">Heute für dich</p>
      <a class="blJBig" href="${esc(path)}"><b>${esc(title)}</b>${sub}.</a>
      ${r.z ? `<p class="blJCap">${esc(r.z)}</p>` : ""}
      <p class="blJCap blJGap">Kategorien</p>
      ${cats.map((c)=> `<a class="blJCat" href="/rezeptindex/?kategorie=${encodeURIComponent(c[0])}"><b>${esc(c[0])}</b> ${c[1]}</a>`).join("")}
      <a class="blJCap blJAll" href="/rezeptindex/">Alle ${total || ""} Rezepte</a>`;
    host.after(el); api.add(()=> el.remove());
    document.body.classList.add("blJHome"); api.add(()=> document.body.classList.remove("blJHome"));
  }

  function cssRing(api, h){
    const ring = document.createElement("div"); ring.className = "blRing"; ring.setAttribute("aria-hidden", "true");
    ring.innerHTML = h.list.slice(0, 12).map((r, i)=> `<img src="${r.i}" alt="" loading="lazy" style="--i:${i}">`).join("");
    h.el.prepend(ring);
    h.el.querySelector(".blSeg")?.remove();
  }

  async function three(api, h){
    const cv = document.createElement("canvas"); cv.className = "blGL"; cv.setAttribute("aria-hidden", "true");
    h.el.prepend(cv);
    const mod = await import(`/assets/skins/blauraum-3d.js?v=${api.ver}`);
    if(!cv.isConnected) return;
    const t3 = mod.create(cv, h.list); api.add(()=> t3.dispose());
    const fit = ()=>{ const r = cv.getBoundingClientRect(); if(r.width) t3.resize(r.width, r.height, devicePixelRatio || 1); lp?.redraw(); };
    const ro = new ResizeObserver(fit); ro.observe(cv); api.add(()=> ro.disconnect());
    const lp = api.loop(cv, (t, dt)=> t3.render(t, dt, api.reduce()));
    fit();
    if(api.reduce()) [500, 1500, 3500].forEach((ms)=>{ const id = setTimeout(()=> lp.redraw(), ms); api.add(()=> clearTimeout(id)); });

    const tip = h.el.querySelector(".blTip"), tT = tip.querySelector(".blTipT"), tZ = tip.querySelector(".blTipZ");
    const at = (e)=>{ const r = cv.getBoundingClientRect(); return t3.pick((e.clientX - r.left) / r.width * 2 - 1, -((e.clientY - r.top) / r.height * 2 - 1)); };
    let down = null, lastX = 0;
    api.on(h.el, "pointerdown", (e)=>{ if(e.target.closest("button, a")) return; down = { x: e.clientX, y: e.clientY, t: performance.now() }; lastX = e.clientX; });
    api.on(h.el, "pointermove", (e)=>{
      if(down){ t3.drag = (e.clientX - lastX) * .0035; lastX = e.clientX; if(api.reduce()) lp.redraw(); }
      if(e.pointerType === "mouse" && !e.target.closest("button, a")){
        const hit = at(e);
        tip.classList.toggle("on", !!hit); h.el.classList.toggle("blOver", !!hit);
        if(hit){ tT.textContent = hit.t; tZ.textContent = hit.z || ""; tip.style.transform = `translate3d(${e.clientX - h.el.getBoundingClientRect().left + 18}px,${e.clientY - h.el.getBoundingClientRect().top - 10}px,0)`; }
      }
    });
    api.on(h.el, "pointerleave", ()=>{ tip.classList.remove("on"); h.el.classList.remove("blOver"); });
    api.on(h.el, "pointerup", (e)=>{
      if(!down) return;
      const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y), quick = performance.now() - down.t < 450;
      down = null;
      if(moved > 8 || !quick) return;
      const hit = at(e); if(hit?.url) location.href = hit.url;
    });
    api.on(h.el, "pointercancel", ()=>{ down = null; });
    let lastY = scrollY;
    api.on(window, "scroll", ()=>{ t3.drag += (scrollY - lastY) * .0006; lastY = scrollY; t3.lift = Math.min(1, scrollY / Math.max(1, innerHeight)); if(api.reduce()) lp.redraw(); }, { passive: true });
    h.el.querySelectorAll("[data-m]").forEach((b)=> api.on(b, "click", ()=>{
      h.el.querySelectorAll("[data-m]").forEach((x)=> x.setAttribute("aria-pressed", String(x === b)));
      t3.setMode(b.dataset.m); if(api.reduce()) [60, 500, 1200].forEach((ms)=> setTimeout(()=> lp.redraw(), ms));
    }));
  }

  // ---------- Rezeptliste: gewölbte Fläche + Raster/Liste ----------
  function listPage(api){
    const grid = document.getElementById("recipeGrid");
    if(!grid) return;
    let asList = false; try{ asList = localStorage.getItem(LIST_KEY) === "1"; }catch{}
    const R = document.documentElement;
    const set = (v)=>{ asList = v; R.classList.toggle("blList", v); try{ localStorage.setItem(LIST_KEY, v ? "1" : "0"); }catch{} sw.querySelectorAll("button").forEach((b, i)=> b.setAttribute("aria-pressed", String(i === (v ? 1 : 0)))); curve(); };
    const sw = api.bit("blSeg blView", "blauraum");
    sw.setAttribute("role", "group"); sw.setAttribute("aria-label", "Ansicht");
    sw.innerHTML = `<button type="button" aria-pressed="true">Raster</button><button type="button" aria-pressed="false">Liste</button>`;
    document.body.appendChild(sw);
    api.add(()=>{ sw.remove(); R.classList.remove("blList"); grid.querySelectorAll(".recipeCard").forEach((c)=>{ c.style.transform = ""; }); });
    sw.querySelectorAll("button").forEach((b, i)=> api.on(b, "click", ()=> set(i === 1)));

    let raf = 0;
    const curve = ()=>{
      raf = 0;
      const cards = grid.querySelectorAll(".linkCard:not([hidden]) .recipeCard");
      if(asList || api.reduce()){ cards.forEach((c)=>{ c.style.transform = ""; }); return; }
      const vh = innerHeight, gr = grid.getBoundingClientRect(), mid = gr.left + gr.width / 2;
      cards.forEach((c)=>{
        const r = c.getBoundingClientRect();
        if(r.bottom < -100 || r.top > vh + 100) return;
        const ny = Math.max(-1.2, Math.min(1.2, (r.top + r.height / 2 - vh / 2) / (vh / 2)));
        const nx = (r.left + r.width / 2 - mid) / Math.max(1, gr.width / 2);
        c.style.transform = `perspective(1100px) rotateX(${(-ny * 16).toFixed(2)}deg) rotateY(${(nx * 14).toFixed(2)}deg) translateZ(${(-Math.abs(ny) * 30).toFixed(1)}px)`;
      });
    };
    const ask = ()=>{ if(!raf) raf = requestAnimationFrame(curve); };
    api.on(window, "scroll", ask, { passive: true });
    api.on(window, "resize", ask);
    const mo = new MutationObserver(ask); mo.observe(grid, { childList: true, subtree: true, attributes: true, attributeFilter: ["hidden", "style"] });
    api.add(()=>{ mo.disconnect(); cancelAnimationFrame(raf); });
    set(asList);
  }

  // ---------- gelber Punkt als Zeiger (nur Maus) ----------
  function dot(api){
    if(!matchMedia("(hover:hover) and (pointer:fine)").matches || api.reduce()) return;
    const d = api.bit("blDot", "blauraum"); d.setAttribute("aria-hidden", "true");
    document.body.appendChild(d); api.add(()=> d.remove());
    let x = -50, y = -50, tx = -50, ty = -50, big = false, raf = 0;
    const step = ()=>{ x += (tx - x) * .25; y += (ty - y) * .25; d.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0) scale(${big ? 2.6 : 1})`; raf = Math.abs(tx - x) + Math.abs(ty - y) > .3 ? requestAnimationFrame(step) : 0; };
    api.on(window, "pointermove", (e)=>{ if(e.pointerType !== "mouse") return; tx = e.clientX; ty = e.clientY; big = !!e.target.closest?.("a, button, [role=button], input, .blOver"); d.classList.add("on"); if(!raf) raf = requestAnimationFrame(step); }, { passive: true });
    api.on(document, "pointerleave", ()=> d.classList.remove("on"));
    api.add(()=> cancelAnimationFrame(raf));
  }

  window.KOCHBUCH_FX.blauraum = {
    start(api){
      dot(api);
      listPage(api);
      if(!api.home()) return;
      const h = hero(api);
      if(!h) return;
      sentence(api);
      if(api.gpu()) three(api, h).catch((e)=>{ console.warn("Blauraum 3D:", e); cssRing(api, h); });
      else cssRing(api, h);
    },
  };
})();
