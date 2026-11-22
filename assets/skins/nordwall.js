// Skin „Nordwall“ (Dez. 2026, neu: Besitzer – „zu wenig wie die Serie, wirkt gebastelt“; frei interpretiert, ohne Wappen, Namen,
// Figuren). Startseite: gemalte Nacht über einer gewaltigen Eismauer im Mondlicht, Burg und Feuer darauf, Nadelwald im Nebel,
// treibender Schnee; darüber der Titel in gravierten Versalien. Alles andere ruhig: dunkler Schiefer, Eisen, ein Hauch Blutrot.
(()=>{
  "use strict";
  const TAU = Math.PI * 2;
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const rng = (seed)=>{ let s = seed; return ()=>{ s = (s * 9301 + 49297) % 233280; return s / 233280; }; };

  // ---------- unbewegte Ebenen einmal je Größe malen ----------
  function paintStatic(w, h, d){
    const c = document.createElement("canvas"); c.width = Math.round(w * d); c.height = Math.round(h * d);
    const g = c.getContext("2d"); g.scale(d, d);
    const r = rng(17), O = 140, V = h - O, wallTop = O + V * .55, wallBot = O + V * .76;
    // Himmel
    let gr = g.createLinearGradient(0, 0, 0, wallBot);
    gr.addColorStop(0, "#04060A"); gr.addColorStop(.55, "#0C141D"); gr.addColorStop(1, "#1A2631");
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    for(let i = 0; i < 260; i++){ const y = Math.pow(r(), 1.6) * wallTop; g.fillStyle = `rgba(220,232,245,${(.15 + r() * .6) * (1 - y / wallTop)})`; g.fillRect(r() * w, y, r() < .1 ? 1.6 : 1, r() < .1 ? 1.6 : 1); }
    // Mond mit Hof
    const mx = w * .8, my = O + V * .4, mr = Math.max(14, Math.min(w, h) * .045);
    gr = g.createRadialGradient(mx, my, mr * .5, mx, my, mr * 9); gr.addColorStop(0, "rgba(190,210,228,.28)"); gr.addColorStop(1, "rgba(190,210,228,0)");
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    gr = g.createRadialGradient(mx - mr * .3, my - mr * .3, mr * .1, mx, my, mr);
    gr.addColorStop(0, "#F4F7F9"); gr.addColorStop(1, "#C6D2DC"); g.fillStyle = gr; g.beginPath(); g.arc(mx, my, mr, 0, TAU); g.fill();
    g.fillStyle = "rgba(120,140,160,.18)"; [[.3, -.2, .22], [-.25, .25, .16], [.1, .35, .1]].forEach(([a, b, s])=>{ g.beginPath(); g.arc(mx + a * mr, my + b * mr, s * mr, 0, TAU); g.fill(); });
    // Wolkenbänder
    for(let i = 0; i < 9; i++){ const y = h * (.08 + r() * .34), x = r() * w; gr = g.createRadialGradient(x, y, 0, x, y, w * (.25 + r() * .3)); gr.addColorStop(0, `rgba(40,56,72,${.12 + r() * .12})`); gr.addColorStop(1, "rgba(40,56,72,0)"); g.save(); g.translate(x, y); g.scale(1, .12); g.translate(-x, -y); g.fillStyle = gr; g.fillRect(0, 0, w, h * 4); g.restore(); }
    // ferne Berge
    g.fillStyle = "#121B24"; g.beginPath(); g.moveTo(0, wallTop + 6);
    for(let x = 0; x <= w + 20; x += 18){ g.lineTo(x, wallTop - h * (.02 + Math.abs(Math.sin(x * .013) * .05 + Math.sin(x * .041) * .025))); } g.lineTo(w, wallBot); g.lineTo(0, wallBot); g.fill();
    // die Mauer: Eis im Mondlicht, senkrechte Rinnen, waagerechte Schichten
    gr = g.createLinearGradient(0, wallTop, 0, wallBot); gr.addColorStop(0, "#D6E4EC"); gr.addColorStop(.35, "#9CB3C2"); gr.addColorStop(1, "#4D6575");
    g.fillStyle = gr; g.fillRect(0, wallTop, w, wallBot - wallTop);
    for(let i = 0; i < w / 2.2; i++){ const x = r() * w, len = (wallBot - wallTop) * (.3 + r() * .7); g.fillStyle = r() < .5 ? `rgba(255,255,255,${r() * .16})` : `rgba(30,50,65,${r() * .2})`; g.fillRect(x, wallTop + r() * (wallBot - wallTop - len), 1 + r() * 2.5, len); }
    for(let i = 0; i < 6; i++){ const y = wallTop + (wallBot - wallTop) * (.15 + i * .14); g.fillStyle = "rgba(30,50,65,.12)"; g.fillRect(0, y, w, 1); }
    // Lichtkante oben + Mondglanz auf der Wand
    g.fillStyle = "rgba(240,248,252,.9)"; g.fillRect(0, wallTop - 1, w, 2);
    gr = g.createRadialGradient(mx, wallTop + 20, 0, mx, wallTop + 20, w * .45); gr.addColorStop(0, "rgba(255,255,255,.22)"); gr.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = gr; g.fillRect(0, wallTop, w, wallBot - wallTop);
    // Burg auf der Mauer
    const bx = w * .2, bw = Math.max(70, w * .17), base = wallTop;
    g.fillStyle = "#0B1016";
    g.fillRect(bx, base - bw * .32, bw, bw * .32);
    [[0, .55, .12], [.18, .42, .09], [.4, .95, .13], [.62, .7, .1], [.86, .48, .12]].forEach(([fx, fh, fw])=>{ const tx = bx + bw * fx, th = bw * fh, tw = bw * fw; g.fillRect(tx, base - th, tw, th); for(let k = 0; k < 3; k++) g.fillRect(tx + k * tw / 2.5, base - th - tw * .25, tw / 4, tw * .25); });
    return { c, mx, my, wallTop, wallBot, bx, bw };
  }

  function pine(g, x, base, hgt, col){
    g.fillStyle = col; g.beginPath(); g.moveTo(x, base - hgt);
    const steps = 6;
    for(let i = 1; i <= steps; i++){ const y = base - hgt + hgt * i / steps, wd = hgt * .1 + hgt * .3 * i / steps; g.lineTo(x + wd, y); g.lineTo(x + wd * .45, y); }
    for(let i = steps; i >= 1; i--){ const y = base - hgt + hgt * i / steps, wd = hgt * .1 + hgt * .3 * i / steps; g.lineTo(x - wd * .45, y); g.lineTo(x - wd, y); }
    g.closePath(); g.fill(); g.fillRect(x - hgt * .02, base - 1, hgt * .04, hgt * .08);
  }
  function forest(w, h, d, y0, scale, col, seed){
    const c = document.createElement("canvas"); c.width = Math.round(w * d); c.height = Math.round(h * d);
    const g = c.getContext("2d"); g.scale(d, d); const r = rng(seed);
    for(let x = -20; x < w + 20; x += 9 + r() * 14 * scale){ pine(g, x, y0 + r() * 12 * scale, (40 + r() * 70) * scale, col); }
    g.fillStyle = col; g.fillRect(0, y0 + 8 * scale, w, h);
    return c;
  }

  function hero(api){
    const host = document.querySelector(".homeGreeting"); if(!host) return;
    const d = new Date(), a = document.getElementById("todayLink");
    const el = api.bit("cxHero nwHero", "nordwall");
    el.innerHTML = `<div class="cxTitle"><span class="cxKick">Tobis</span><span class="cxBig">Kochbuch</span><span class="cxRule" aria-hidden="true"><i></i></span><span class="cxDate">${esc(d.toLocaleDateString("de-DE", { weekday: "long" }))} · ${esc(d.toLocaleDateString("de-DE", { day: "numeric", month: "long" }))}</span></div>
      ${a ? `<a class="cxDown" href="#todayLink">Heute an der Tafel</a>` : ""}`;
    host.prepend(el); api.add(()=> el.remove());
    document.body.classList.add("cxHome"); api.add(()=> document.body.classList.remove("cxHome"));
    const c = api.canvas(el, "cxPaint");
    let S = null, F1 = null, F2 = null;
    const snow = []; const r = rng(5);
    for(let i = 0; i < 160; i++) snow.push({ x: r(), y: r(), z: .3 + r() * .7, ph: r() * TAU });
    c.onresize = ()=>{ S = paintStatic(c.w, c.h, c.dpr); F1 = forest(c.w, c.h, c.dpr, S.wallBot + c.h * .02, .8, "#0B1118", 3); F2 = forest(c.w, c.h, c.dpr, c.h * .9, 1.5, "#04060A", 9); lp?.redraw(); };
    if(c.w) setTimeout(()=> c.onresize(), 0);
    const lp = api.loop(c.cv, (t, dt)=>{
      if(!S) return; const g = c.g, w = c.w, h = c.h, sy = Math.min(scrollY, h);
      g.clearRect(0, 0, w, h);
      g.drawImage(S.c, 0, sy * .25, w, h);
      // Feuer auf der Mauer und in der Burg (flackern)
      const fires = [[S.bx + S.bw * .55, S.wallTop - S.bw * .5], [S.bx + S.bw * .15, S.wallTop - S.bw * .3], [w * .6, S.wallTop - 3], [w * .84, S.wallTop - 3], [w * .48, S.wallTop - 3]];
      fires.forEach(([x, y], i)=>{ const f = .75 + .25 * Math.sin(t * .011 + i * 2.3) * Math.sin(t * .0073 + i); const gy = y + sy * .25, rr = 14 * f + 6; const gg = g.createRadialGradient(x, gy, 0, x, gy, rr); gg.addColorStop(0, "rgba(255,190,100,.95)"); gg.addColorStop(.25, "rgba(255,130,40,.45)"); gg.addColorStop(1, "rgba(255,110,30,0)"); g.fillStyle = gg; g.fillRect(x - rr, gy - rr, rr * 2, rr * 2); });
      // Nebel, der an der Mauer entlangzieht
      for(let i = 0; i < 4; i++){ const x = ((t * .012 * (i + 1) + i * w * .4) % (w * 1.6)) - w * .3, y = S.wallBot - 6 + i * 8 + sy * .3; const gg = g.createRadialGradient(x, y, 0, x, y, w * .35); gg.addColorStop(0, "rgba(200,215,228,.16)"); gg.addColorStop(1, "rgba(200,215,228,0)"); g.save(); g.translate(x, y); g.scale(1, .18); g.translate(-x, -y); g.fillStyle = gg; g.fillRect(x - w * .35, y - w * .35, w * .7, w * .7); g.restore(); }
      g.drawImage(F1, 0, sy * .45, w, h);
      g.drawImage(F2, 0, sy * .7, w, h);
      // Schnee in drei Tiefen
      const k = (dt || 16) / 16;
      snow.forEach((p)=>{
        if(!api.reduce()){ p.y += .0007 * p.z * k * 1.6; p.x += (.00045 + Math.sin(t * .0007 + p.ph) * .0004) * p.z * k; if(p.y > 1) { p.y = -.02; p.x = Math.random(); } if(p.x > 1.02) p.x = -.02; }
        g.fillStyle = `rgba(235,242,248,${.35 + p.z * .5})`; const s = .8 + p.z * 2.4; g.beginPath(); g.arc(p.x * w, p.y * h, s, 0, TAU); g.fill();
      });
    });
    // Titel blendet beim Scrollen aus
    const tl = el.querySelector(".cxTitle");
    api.on(window, "scroll", ()=>{ if(api.reduce()) return; const p = Math.min(1, scrollY / (innerHeight * .6)); tl.style.opacity = (1 - p).toFixed(3); tl.style.transform = `translate3d(0,${(scrollY * .35).toFixed(1)}px,0)`; }, { passive: true });
  }

  window.KOCHBUCH_FX.nordwall = { start(api){ if(api.home()) hero(api); } };
})();
