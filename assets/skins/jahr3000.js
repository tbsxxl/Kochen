// Skin „Jahr 3000“ (Dez. 2026, neu: Besitzer – „zu wenig wie die Serie, wirkt gebastelt“; frei interpretiert, ohne Figuren/Namen).
// Startseite: gemalte Zukunftsstadt in der Abenddämmerung – Ringplanet, Türme mit Kuppeln und Rundfenstern, gläserne Röhrenbahnen mit
// Kapseln, fliegende Autos mit Lichtspuren; Titel in runder Zukunftsschrift. Sonst: Nachtblau, Mint, Orange.
(()=>{
  "use strict";
  const TAU = Math.PI * 2;
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const rng = (seed)=>{ let s = seed; return ()=>{ s = (s * 9301 + 49297) % 233280; return s / 233280; }; };
  const LINE = "#08101F";

  function paintStatic(w, h, d){
    const c = document.createElement("canvas"); c.width = Math.round(w * d); c.height = Math.round(h * d);
    const g = c.getContext("2d"); g.scale(d, d);
    const r = rng(31), O = 140, V = h - O, ground = O + V * .86;
    let gr = g.createLinearGradient(0, 0, 0, ground);
    gr.addColorStop(0, "#081129"); gr.addColorStop(.45, "#173762"); gr.addColorStop(.78, "#3E6A8C"); gr.addColorStop(1, "#F2A36F");
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    for(let i = 0; i < 180; i++){ const y = r() * O + r() * V * .45; g.fillStyle = `rgba(255,255,255,${.2 + r() * .6})`; g.fillRect(r() * w, y, 1.4, 1.4); }
    // Ringplanet
    const px = w * .76, py = O + V * .17, pr = Math.min(w, V) * .12;
    g.save(); g.translate(px, py); g.rotate(-.35);
    g.strokeStyle = "rgba(255,214,170,.55)"; g.lineWidth = pr * .08; g.beginPath(); g.ellipse(0, 0, pr * 1.8, pr * .42, 0, Math.PI, TAU); g.stroke();
    gr = g.createRadialGradient(-pr * .35, -pr * .35, pr * .1, 0, 0, pr); gr.addColorStop(0, "#FFC59A"); gr.addColorStop(1, "#C9653F");
    g.fillStyle = gr; g.beginPath(); g.arc(0, 0, pr, 0, TAU); g.fill();
    g.fillStyle = "rgba(255,255,255,.12)"; [-.4, -.05, .3].forEach((y, i)=>{ g.fillRect(-pr, y * pr, pr * 2, pr * (.08 + i * .03)); });
    g.beginPath(); g.ellipse(0, 0, pr * 1.8, pr * .42, 0, 0, Math.PI); g.stroke();
    g.restore();
    // Stadt: zwei Reihen Türme (hinten heller, vorn kräftiger), Kuppeln, Rundfenster, Antennen mit Kugel
    const row = (n, baseY, hmin, hmax, fills, winCol, seed, lw)=>{
      const rr = rng(seed), out = [];
      for(let i = 0; i < n; i++){
        const x = (i + rr() * .6) * w / n - w * .04, bw = w / n * (.55 + rr() * .5), bh = V * (hmin + rr() * (hmax - hmin)), top = baseY - bh;
        g.fillStyle = fills[i % fills.length]; g.strokeStyle = LINE; g.lineWidth = lw;
        const kind = i % 4;
        g.beginPath();
        if(kind === 0){ g.moveTo(x, baseY); g.lineTo(x, top + bw * .5); g.arc(x + bw / 2, top + bw * .5, bw / 2, Math.PI, 0); g.lineTo(x + bw, baseY); }
        else if(kind === 1){ g.moveTo(x + bw * .12, baseY); g.lineTo(x + bw * .2, top); g.lineTo(x + bw * .8, top); g.lineTo(x + bw * .88, baseY); }
        else if(kind === 2){ g.moveTo(x, baseY); g.lineTo(x, top); g.lineTo(x + bw, top); g.lineTo(x + bw, baseY); }
        else { g.moveTo(x + bw * .3, baseY); g.lineTo(x + bw * .3, top + bw * .4); g.ellipse(x + bw / 2, top + bw * .25, bw * .55, bw * .22, 0, Math.PI, TAU); g.lineTo(x + bw * .7, top + bw * .4); g.lineTo(x + bw * .7, baseY); }
        g.closePath(); g.fill(); g.stroke();
        if(kind === 2 || kind === 1){ g.beginPath(); g.moveTo(x + bw / 2, top); g.lineTo(x + bw / 2, top - bw * .5); g.stroke(); g.fillStyle = "#FF8A3D"; g.beginPath(); g.arc(x + bw / 2, top - bw * .5, Math.max(2, bw * .07), 0, TAU); g.fill(); g.stroke(); }
        // Fenster: Reihen kleiner Kreise
        for(let yy = top + bw * .6; yy < baseY - 8; yy += Math.max(9, bw * .22)) for(let xx = x + bw * .25; xx < x + bw * .8; xx += Math.max(8, bw * .2)) if(rr() < .6){ g.fillStyle = rr() < .7 ? winCol : "#7FF1D6"; g.beginPath(); g.arc(xx, yy, Math.max(1.4, bw * .045), 0, TAU); g.fill(); }
        out.push({ x, bw, top });
      }
      return out;
    };
    row(9, ground - V * .04, .18, .36, ["#2C5A7E", "#335F86", "#284F72"], "rgba(255,226,150,.8)", 4, 1.5);
    const front = row(6, ground, .22, .42, ["#1F8A8A", "#2A6FA3", "#3C9C8C", "#246789"], "#FFE08A", 8, 2.5);
    g.fillStyle = "#0E1B33"; g.fillRect(0, ground, w, h - ground);
    return { c, ground, O, V, front };
  }

  function hero(api){
    const host = document.querySelector(".homeGreeting"); if(!host) return;
    const d = new Date(), a = document.getElementById("todayLink");
    const el = api.bit("cxHero j3Hero", "jahr3000");
    el.innerHTML = `<div class="cxTitle"><span class="cxKick">Tobis</span><span class="cxBig">Kochbuch</span><span class="cxRule" aria-hidden="true"><i></i></span><span class="cxDate">${esc(d.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" }))} ${d.getFullYear() + 1000}</span></div>
      ${a ? `<a class="cxDown" href="#todayLink">Heute aus dem Menü-o-mat</a>` : ""}`;
    host.prepend(el); api.add(()=> el.remove());
    document.body.classList.add("cxHome"); api.add(()=> document.body.classList.remove("cxHome"));
    const c = api.canvas(el, "cxPaint");
    let S = null; const r = rng(3);
    const cars = Array.from({ length: 7 }, (_, i)=> ({ y: .5 + r() * .26, v: (.00006 + r() * .00008) * (i % 2 ? -1 : 1), x: r(), col: ["#FF8A3D", "#7FF1D6", "#FFE08A", "#FF6B8B"][i % 4] }));
    c.onresize = ()=>{ S = paintStatic(c.w, c.h, c.dpr); lp?.redraw(); };
    const lp = api.loop(c.cv, (t, dt)=>{
      if(!S) return; const g = c.g, w = c.w, h = c.h, sy = Math.min(scrollY, h), still = api.reduce(), k = (dt || 16);
      g.clearRect(0, 0, w, h); g.drawImage(S.c, 0, sy * .2, w, h);
      // Röhrenbahn: zwei gläserne Bögen mit Kapseln
      const tubes = [[S.O + S.V * .62, .9], [S.O + S.V * .74, -.7]];
      tubes.forEach(([ty, dir], j)=>{
        const y0 = ty + sy * .2, curve = (u)=> [u * w, y0 + Math.sin(u * Math.PI) * -S.V * .06];
        g.lineWidth = 12; g.strokeStyle = "rgba(180,240,255,.18)"; g.beginPath(); for(let u = 0; u <= 1.001; u += .02){ const [x, y] = curve(u); u ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke();
        g.lineWidth = 1.5; g.strokeStyle = "rgba(220,250,255,.6)"; g.stroke();
        for(let n = 0; n < 2; n++){ let u = ((t * .00009 * (j + 1) * (dir > 0 ? 1 : -1) + n * .5) % 1 + 1) % 1; if(still) u = .3 + n * .4; const [x, y] = curve(u); g.fillStyle = j ? "#FF8A3D" : "#7FF1D6"; g.strokeStyle = LINE; g.lineWidth = 2; g.beginPath(); g.ellipse(x, y, 13, 5, 0, 0, TAU); g.fill(); g.stroke(); }
      });
      // fliegende Autos mit Lichtspur
      cars.forEach((p)=>{
        if(!still){ p.x += p.v * k; if(p.x > 1.1) p.x = -.1; if(p.x < -.1) p.x = 1.1; }
        const x = p.x * w, y = S.O + S.V * p.y + sy * .3, dir = Math.sign(p.v);
        const tr = g.createLinearGradient(x - dir * 60, y, x, y); tr.addColorStop(0, "rgba(255,255,255,0)"); tr.addColorStop(1, p.col);
        g.strokeStyle = tr; g.lineWidth = 2; g.beginPath(); g.moveTo(x - dir * 60, y); g.lineTo(x, y); g.stroke();
        g.fillStyle = p.col; g.strokeStyle = LINE; g.lineWidth = 1.5; g.beginPath(); g.ellipse(x, y, 7, 3.4, 0, 0, TAU); g.fill(); g.stroke();
        g.fillStyle = "rgba(200,245,255,.9)"; g.beginPath(); g.ellipse(x + dir * 1.5, y - 2.5, 3.2, 2.2, 0, Math.PI, TAU); g.fill();
      });
    });
    if(c.w) setTimeout(()=> c.onresize(), 0);
    const tl = el.querySelector(".cxTitle");
    api.on(window, "scroll", ()=>{ if(api.reduce()) return; const p = Math.min(1, scrollY / (innerHeight * .6)); tl.style.opacity = (1 - p).toFixed(3); tl.style.transform = `translate3d(0,${(scrollY * .35).toFixed(1)}px,0)`; }, { passive: true });
  }

  window.KOCHBUCH_FX.jahr3000 = { start(api){ if(api.home()) hero(api); } };
})();
