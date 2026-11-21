// Skin „Blauraum“ (Nov. 2026): eine Rose aus Küchen-Dingen (Blütenblätter, Löffel, Blätter, Kirschtomaten) steht rechts neben der
// kürzesten Titelzeile, dreht sich langsam, neigt sich zum Finger/Mauszeiger und dreht beim Scrollen weiter.
// Gezeichnet auf einer 2D-Leinwand mit einfacher Perspektive (keine 3D-Bibliothek).
(()=>{
  "use strict";
  const TAU = Math.PI * 2;
  const PINK = ["#FF7FA6", "#FF9DBB", "#FFBCD0", "#FFD8E4"];

  function build(){
    const items = [];
    const RINGS = [{ n: 3, r: .1, y: .42, s: .34 }, { n: 5, r: .3, y: .3, s: .42 }, { n: 7, r: .52, y: .14, s: .48 }, { n: 9, r: .76, y: -.04, s: .52 }];
    RINGS.forEach((R, L)=>{
      for(let j = 0; j < R.n; j++){
        const a = j / R.n * TAU + L * .55;
        let kind = "petal";
        if(L === 3 && j % 4 === 1) kind = "spoon";
        items.push({ x: Math.cos(a) * R.r, z: Math.sin(a) * R.r, y: R.y, a, s: R.s, kind, L, c: PINK[L] });
      }
    });
    // Kirschtomaten zwischen den äußeren Blättern, Knospe in der Mitte
    [.6, 2.4, 4.3].forEach((a)=> items.push({ x: Math.cos(a) * .66, z: Math.sin(a) * .66, y: .2, a, s: .16, kind: "tomato", L: 2 }));
    items.push({ x: 0, z: 0, y: .5, a: 0, s: .16, kind: "bud", L: 0 });
    // Kelchblätter unten
    for(let j = 0; j < 5; j++){ const a = j / 5 * TAU + .3; items.push({ x: Math.cos(a) * .7, z: Math.sin(a) * .7, y: -.22, a, s: .5, kind: "leaf", L: 4 }); }
    return items;
  }

  function petal(g, len, wid, base, edge){
    const gr = g.createLinearGradient(-len / 2, 0, len / 2, 0);
    gr.addColorStop(0, base); gr.addColorStop(1, edge);
    g.fillStyle = gr;
    g.beginPath(); g.moveTo(-len / 2, 0);
    g.bezierCurveTo(-len * .2, -wid, len * .45, -wid * .95, len / 2, 0);
    g.bezierCurveTo(len * .45, wid * .95, -len * .2, wid, -len / 2, 0);
    g.fill();
    g.strokeStyle = "rgba(30,40,160,.22)"; g.lineWidth = 1; g.stroke();
  }

  function draw(g, q, S){
    const it = q.it, k = S * q.p, len = it.s * k;
    g.save();
    g.translate(q.X, q.Y);
    g.globalAlpha = .7 + .3 * q.front;
    if(it.kind === "petal"){ g.rotate(q.out); petal(g, len, len * .5, it.c, "#FFF4F8"); }
    else if(it.kind === "spoon"){
      g.rotate(q.out);
      g.fillStyle = "#EEF2FF"; g.beginPath(); g.ellipse(len * .1, 0, len * .42, len * .3, 0, 0, TAU); g.fill();
      g.fillRect(-len * .9, -len * .05, len * .7, len * .1);
      g.fillStyle = "rgba(39,65,217,.18)"; g.beginPath(); g.ellipse(len * .05, -len * .05, len * .22, len * .13, 0, 0, TAU); g.fill();
    }
    else if(it.kind === "leaf"){ g.rotate(q.out); petal(g, len, len * .34, "#2E9E5B", "#7BD389"); }
    else if(it.kind === "tomato"){
      g.fillStyle = "#FF4D55"; g.beginPath(); g.arc(0, 0, len * .5, 0, TAU); g.fill();
      g.fillStyle = "rgba(255,255,255,.75)"; g.beginPath(); g.arc(-len * .17, -len * .17, len * .12, 0, TAU); g.fill();
      g.fillStyle = "#3DBE6E"; g.fillRect(-len * .07, -len * .62, len * .14, len * .2);
    }
    else if(it.kind === "bud"){
      const gr = g.createRadialGradient(-len * .2, -len * .2, len * .05, 0, 0, len * .7);
      gr.addColorStop(0, "#FFC2D4"); gr.addColorStop(1, "#E0567F");
      g.fillStyle = gr; g.beginPath(); g.arc(0, 0, len * .55, 0, TAU); g.fill();
    }
    g.restore();
  }

  function start2d(api){
    {
      const sc = api.scene(), title = api.title();
      if(!sc || !title) return;
      const c = api.canvas(sc, "blRose"), g = c.g, items = build();
      let zone = null, rot = .6, tiltX = 0, tiltY = 0, vrot = 0, lastScroll = scrollY;
      const measure = ()=>{ zone = api.zone(title, sc); };
      const frame = (t, dt)=>{
        const w = c.w, h = c.h;
        if(!w || !zone) return;
        g.clearRect(0, 0, w, h);
        const S = Math.max(24, Math.min(64, zone.w / 2.3, zone.h * .85 + 6));
        const cx = zone.x + Math.min(zone.w / 2, S * 1.15 + 6), cy = zone.y + zone.h * .38;
        const sr = sc.getBoundingClientRect(), near = performance.now() - api.ptr.t < 2500;
        const tx = near ? Math.max(-1, Math.min(1, (api.ptr.x - sr.left - cx) / (w * .5))) : 0;
        const ty = near ? Math.max(-1, Math.min(1, (api.ptr.y - sr.top - cy) / (h * .6))) : 0;
        tiltX += (ty * .3 - tiltX) * .06; tiltY += (tx * .5 - tiltY) * .06;
        const ds = scrollY - lastScroll; lastScroll = scrollY;
        vrot = vrot * .9 + ds * .0009;
        if(!api.reduce()) rot += (dt || 16) * .00025 + vrot;
        const pitch = .95 + tiltX, cr = Math.cos(rot + tiltY), sn = Math.sin(rot + tiltY), cp = Math.cos(pitch), sp = Math.sin(pitch);
        const pts = items.map((it)=>{
          const x = it.x * cr - it.z * sn, z0 = it.x * sn + it.z * cr;
          const y = it.y * cp - z0 * sp, z = it.y * sp + z0 * cp;
          const p = 3 / (3 + z);
          const X = cx + x * S * p, Y = cy - y * S * p;
          return { it, X, Y, z, p, front: Math.max(0, Math.min(1, (1 - z) / 2)), out: Math.atan2(Y - cy, X - cx) };
        }).sort((a, b)=> b.z - a.z);
        pts.forEach((q)=> draw(g, q, S));
      };
      const lp = api.loop(c.cv, frame);
      c.onresize = ()=>{ measure(); lp.redraw(); };
      measure();
      document.fonts?.ready?.then(()=>{ measure(); lp.redraw(); });
    }
  }

  // ---------- 3D-Galerie (Startseite, nur mit echter Grafikkarte; sonst die gezeichnete Rose) ----------
  function gpuOk(){
    try{
      if(localStorage.getItem("kochbuch.ui.cineForce") === "1") return true;
      const c = document.createElement("canvas"), gl = c.getContext("webgl2") || c.getContext("webgl");
      if(!gl) return false;
      const ext = gl.getExtension("WEBGL_debug_renderer_info"), r = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : "";
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      return !/swiftshader|llvmpipe|software/i.test(r);
    }catch{ return false; }
  }

  async function start3d(api){
    const sc = api.scene(), quick = document.querySelector(".homeQuick");
    let recipes = [];
    try{ recipes = JSON.parse(document.getElementById("homeRecipes")?.textContent || "[]").filter(Boolean); }catch{}
    if(!sc || !quick || recipes.length < 6) throw new Error("no stage");
    // jeden Tag eine andere Auswahl, aber am selben Tag stabil
    let seed = Math.floor(Date.now() / 864e5);
    const rnd = ()=>{ seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    recipes = recipes.map((r)=> [rnd(), r]).sort((a, b)=> a[0] - b[0]).map((x)=> x[1]).slice(0, 30);

    const stage = api.bit("blStage", "blauraum");
    stage.innerHTML = `<div class="blBar"><div class="blSeg" role="group" aria-label="Anordnung der Bilder">
      <button type="button" data-m="rings" aria-pressed="true">Ringe</button><button type="button" data-m="spiral" aria-pressed="false">Spirale</button></div>
      <span class="blCount">${recipes.length} Rezepte · antippen zum Öffnen</span></div>`;
    quick.after(stage);
    api.add(()=> stage.remove());
    dispatchEvent(new Event("kochbuch:sceneresize"));

    const cv = document.createElement("canvas");
    cv.className = "fxCanvas blGL"; cv.setAttribute("aria-hidden", "true");
    sc.appendChild(cv);
    api.add(()=> cv.remove());
    const mod = await import(`/assets/skins/blauraum-3d.js?v=${api.ver}`);
    if(!cv.isConnected) return;
    const three = mod.create(cv, recipes);
    api.add(()=> three.dispose());

    const fit = ()=>{
      const r = cv.getBoundingClientRect(), s = sc.getBoundingClientRect(), st = stage.getBoundingClientRect();
      if(!r.width || !r.height) return;
      const top = st.top - s.top;
      three.resize(r.width, r.height, devicePixelRatio || 1, top + st.height * .46, st.height);
      // oberhalb der Bühne (Titel, Suche, Knöpfe) weich ausblenden
      const m = `linear-gradient(to bottom, transparent ${Math.max(0, top - 24)}px, #000 ${top + 36}px)`;
      cv.style.webkitMaskImage = m; cv.style.maskImage = m;
      lp?.redraw();
    };
    const ro = new ResizeObserver(fit); ro.observe(cv); ro.observe(stage);
    api.add(()=> ro.disconnect());
    const lp = api.loop(cv, (t, dt)=> three.render(t, dt, api.reduce()));
    fit();
    if(api.reduce()) [600, 1500, 3000, 6000].forEach((ms)=>{ const id = setTimeout(()=> lp.redraw(), ms); api.add(()=> clearTimeout(id)); });

    // Ziehen dreht, Antippen öffnet das Rezept; senkrechtes Wischen bleibt Scrollen (touch-action: pan-y)
    let down = null, lastX = 0;
    api.on(stage, "pointerdown", (e)=>{ if(e.target.closest("button")) return; down = { x: e.clientX, y: e.clientY, t: performance.now() }; lastX = e.clientX; });
    api.on(stage, "pointermove", (e)=>{ if(!down) return; three.drag = (e.clientX - lastX) * .004; lastX = e.clientX; if(api.reduce()) lp.redraw(); });
    api.on(stage, "pointerup", (e)=>{
      if(!down) return;
      const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y), quickTap = performance.now() - down.t < 450;
      down = null;
      if(moved > 8 || !quickTap) return;
      const r = cv.getBoundingClientRect(), url = three.pick((e.clientX - r.left) / r.width * 2 - 1, -((e.clientY - r.top) / r.height * 2 - 1));
      if(url) location.href = url;
    });
    api.on(stage, "pointercancel", ()=>{ down = null; });
    let lastY = scrollY;
    api.on(window, "scroll", ()=>{ three.drag += (scrollY - lastY) * .0005; lastY = scrollY; }, { passive: true });
    stage.querySelectorAll("[data-m]").forEach((b)=> api.on(b, "click", ()=>{
      stage.querySelectorAll("[data-m]").forEach((x)=> x.setAttribute("aria-pressed", String(x === b)));
      three.setMode(b.dataset.m); if(api.reduce()) [50, 400, 900].forEach((ms)=> setTimeout(()=> lp.redraw(), ms));
    }));
  }

  window.KOCHBUCH_FX.blauraum = {
    start(api){
      if(api.home() && gpuOk()) start3d(api).catch((e)=>{ console.warn("Blauraum 3D:", e); start2d(api); });
      else start2d(api);
    },
  };
})();
