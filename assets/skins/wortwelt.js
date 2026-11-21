// Skin „Bilderbuch“ (Schlüssel „wortwelt“, Nov. 2026 neu nach Vergleich mit dem Vorbild – einem illustrierten Online-Buch):
// Startseite mit 3D-Kochbuch (wortwelt-3d.js): jede Doppelseite ein Rezept, Wischen/Pfeile blättern um, Antippen öffnet das Rezept.
// Ohne echte Grafikkarte bleibt die Seite ohne Buch (nur das dunkle, gestrichene Feld).
(()=>{
  "use strict";
  const CHEV = (d)=> `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  async function book(api){
    const sc = api.scene(), quick = document.querySelector(".homeQuick");
    let list = api.recipes();
    if(!sc || !quick || list.length < 3) return;
    let seed = Math.floor(Date.now() / 864e5);
    const rnd = ()=>{ seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    list = list.map((r)=> [rnd(), r]).sort((a, b)=> a[0] - b[0]).map((x)=> x[1]).slice(0, 30);

    const stage = api.bit("wwStage", "wortwelt");
    stage.innerHTML = `<div class="wwNav"><button type="button" class="wwPrev" aria-label="Vorige Seite">${CHEV("M15 5l-7 7 7 7")}</button>
      <span class="wwCount" aria-live="polite"></span><button type="button" class="wwNext" aria-label="Nächste Seite">${CHEV("M9 5l7 7-7 7")}</button></div>`;
    quick.after(stage);
    api.add(()=> stage.remove());
    dispatchEvent(new Event("kochbuch:sceneresize"));
    const cv = document.createElement("canvas"); cv.className = "fxCanvas wwGL"; cv.setAttribute("aria-hidden", "true");
    sc.appendChild(cv); api.add(()=> cv.remove());
    try{ await document.fonts.load('500 60px "Skin Feder"'); await document.fonts.load('400 40px "Fraunces"'); }catch{}
    const mod = await import(`/assets/skins/wortwelt-3d.js?v=${api.ver}`);
    if(!cv.isConnected) return;
    const count = stage.querySelector(".wwCount"), prev = stage.querySelector(".wwPrev"), next = stage.querySelector(".wwNext");
    const three = mod.create(cv, list, (i)=>{
      count.textContent = `${i + 1} / ${list.length} · ${list[i].t}`;
      prev.disabled = i === 0; next.disabled = i === list.length - 1;
    });
    api.add(()=> three.dispose());
    const fit = ()=>{
      const r = cv.getBoundingClientRect(), s = sc.getBoundingClientRect(), st = stage.getBoundingClientRect();
      if(!r.width) return;
      const top = st.top - s.top;
      three.resize(r.width, r.height, devicePixelRatio || 1, top + (st.height - 56) / 2, st.height - 56);
      const m = `linear-gradient(to bottom, transparent ${Math.max(0, top - 20)}px, #000 ${top + 30}px)`;
      cv.style.webkitMaskImage = m; cv.style.maskImage = m;
      lp?.redraw();
    };
    const ro = new ResizeObserver(fit); ro.observe(cv); ro.observe(stage); api.add(()=> ro.disconnect());
    const lp = api.loop(cv, (t, dt)=> three.render(t, dt, api.reduce()));
    fit();
    const kick = ()=>{ if(api.reduce()) [30, 120, 400, 900].forEach((ms)=> setTimeout(()=> lp.redraw(), ms)); };
    [500, 1500, 3500].forEach((ms)=>{ const id = setTimeout(()=> lp.redraw(), ms); api.add(()=> clearTimeout(id)); });
    api.on(prev, "click", ()=>{ three.go(-1); kick(); });
    api.on(next, "click", ()=>{ three.go(1); kick(); });

    // Wischen blättert, Antippen öffnet; Neigung folgt dem Finger
    let down = null;
    api.on(stage, "pointerdown", (e)=>{ if(e.target.closest("button")) return; down = { x: e.clientX, y: e.clientY, t: performance.now() }; });
    api.on(stage, "pointermove", (e)=>{
      const r = stage.getBoundingClientRect();
      three.tiltY = ((e.clientX - r.left) / r.width - .5) * .3; three.tiltX = ((e.clientY - r.top) / r.height - .5) * .16;
    });
    api.on(stage, "pointerup", (e)=>{
      if(!down) return;
      const dx = e.clientX - down.x, dy = e.clientY - down.y, dt = performance.now() - down.t; down = null;
      if(Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)){ three.go(dx < 0 ? 1 : -1); kick(); return; }
      if(Math.hypot(dx, dy) < 8 && dt < 450) location.href = list[three.index].u;
    });
    api.on(stage, "pointerleave", ()=>{ three.tiltX = three.tiltY = 0; });
  }

  window.KOCHBUCH_FX.wortwelt = {
    start(api){
      if(api.home() && api.gpu()) book(api).catch((e)=> console.warn("Bilderbuch 3D:", e));
    },
  };
})();
