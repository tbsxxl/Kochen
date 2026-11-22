// Skin „Akte“ (Dez. 2026, neu: Besitzer – „zu wenig wie die Film-Welt, wirkt gebastelt“; frei interpretiert, ohne Figuren/Namen).
// Startseite: gemalte Sturmnacht über einer Felseninsel – schwere Wolken, schräger Regen, ein Leuchtturm mit streichendem Lichtkegel,
// ein langes Gebäude auf der Klippe mit wenigen erleuchteten Fenstern, Gischt, ab und zu ein Wetterleuchten. Titel in Schreibmaschine.
(()=>{
  "use strict";
  const TAU = Math.PI * 2;
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const rng = (seed)=>{ let s = seed; return ()=>{ s = (s * 9301 + 49297) % 233280; return s / 233280; }; };

  function paintStatic(w, h, d){
    const c = document.createElement("canvas"); c.width = Math.round(w * d); c.height = Math.round(h * d);
    const g = c.getContext("2d"); g.scale(d, d);
    const r = rng(61), O = 140, V = h - O, sea = O + V * .68;
    let gr = g.createLinearGradient(0, 0, 0, sea); gr.addColorStop(0, "#0A0D11"); gr.addColorStop(.6, "#1C252E"); gr.addColorStop(1, "#33404A");
    g.fillStyle = gr; g.fillRect(0, 0, w, sea);
    // schwere Wolken (übereinander gelegte dunkle Ballen)
    for(let i = 0; i < 70; i++){ const x = r() * w, y = O + V * (r() * .5) - 40, rr = 30 + r() * 90; const q = g.createRadialGradient(x, y, 0, x, y, rr); const l = 20 + r() * 30; q.addColorStop(0, `rgba(${l},${l + 6},${l + 12},.5)`); q.addColorStop(1, `rgba(${l},${l + 6},${l + 12},0)`); g.fillStyle = q; g.fillRect(x - rr, y - rr, rr * 2, rr * 2); }
    // Meer
    gr = g.createLinearGradient(0, sea, 0, h); gr.addColorStop(0, "#1A2229"); gr.addColorStop(1, "#06080A"); g.fillStyle = gr; g.fillRect(0, sea, w, h - sea);
    for(let i = 0; i < 90; i++){ const y = sea + r() * (h - sea), x = r() * w; g.fillStyle = `rgba(190,205,215,${.04 + r() * .12})`; g.fillRect(x, y, 6 + r() * 26, 1); }
    // Klippe mit Gebäude rechts
    const cx = w * .55;
    g.fillStyle = "#0A0C0F"; g.beginPath(); g.moveTo(cx - w * .1, sea + 8); g.lineTo(cx, sea - V * .08); g.lineTo(cx + w * .18, sea - V * .12); g.lineTo(w + 10, sea - V * .1); g.lineTo(w + 10, sea + 14); g.fill();
    const by = sea - V * .12, bx = cx + w * .02, bw = w * .44, bh = V * .07, wins = [];
    g.fillRect(bx, by - bh, bw, bh);
    [[.05, .7], [.45, .9], [.85, .65]].forEach(([fx, fh])=>{ g.fillRect(bx + bw * fx, by - bh - bh * fh, bw * .08, bh * fh + 2); g.beginPath(); g.moveTo(bx + bw * fx - 3, by - bh - bh * fh); g.lineTo(bx + bw * (fx + .04), by - bh - bh * fh - bh * .5); g.lineTo(bx + bw * (fx + .08) + 3, by - bh - bh * fh); g.fill(); });
    for(let i = 0; i < 18; i++) if(r() < .3) wins.push([bx + bw * (.05 + i * .05), by - bh * .55]);
    // Felsen mit Leuchtturm links
    const lx = w * .14, ly = sea - V * .03;
    g.beginPath(); g.moveTo(lx - w * .14, sea + 10); g.lineTo(lx - w * .04, ly); g.lineTo(lx + w * .07, ly - 4); g.lineTo(lx + w * .16, sea + 10); g.fill();
    const tH = V * .2, tW = Math.max(10, w * .035);
    g.beginPath(); g.moveTo(lx - tW, ly); g.lineTo(lx - tW * .65, ly - tH); g.lineTo(lx + tW * .65, ly - tH); g.lineTo(lx + tW, ly); g.fill();
    g.fillRect(lx - tW * .9, ly - tH - tW * .9, tW * 1.8, tW * .9);
    g.beginPath(); g.moveTo(lx - tW, ly - tH - tW * .9); g.lineTo(lx, ly - tH - tW * 1.8); g.lineTo(lx + tW, ly - tH - tW * .9); g.fill();
    return { c, sea, wins, lamp: [lx, ly - tH - tW * .45], O, V };
  }

  function hero(api){
    const host = document.querySelector(".homeGreeting"); if(!host) return;
    const d = new Date(), a = document.getElementById("todayLink");
    const el = api.bit("cxHero akHero", "akte");
    el.innerHTML = `<div class="cxTitle"><span class="cxKick">Tobis</span><span class="cxBig">Kochbuch</span><span class="cxRule" aria-hidden="true"><i></i></span><span class="cxDate">${esc(d.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long", year: "numeric" }))}</span></div>
      ${a ? `<a class="cxDown" href="#todayLink">Der Fall des Tages</a>` : ""}`;
    host.prepend(el); api.add(()=> el.remove());
    document.body.classList.add("cxHome"); api.add(()=> document.body.classList.remove("cxHome"));
    const c = api.canvas(el, "cxPaint");
    let S = null; const r = rng(19), rain = Array.from({ length: 180 }, ()=> ({ x: r(), y: r(), z: .3 + r() * .7 }));
    let flash = 0, nextFlash = 4000;
    c.onresize = ()=>{ S = paintStatic(c.w, c.h, c.dpr); lp?.redraw(); };
    const lp = api.loop(c.cv, (t, dt)=>{
      if(!S) return; const g = c.g, w = c.w, h = c.h, sy = Math.min(scrollY, h), still = api.reduce(), k = dt || 16;
      g.clearRect(0, 0, w, h); g.drawImage(S.c, 0, sy * .2, w, h);
      // Wetterleuchten
      if(!still){ nextFlash -= k; if(nextFlash < 0){ flash = 1; nextFlash = 5000 + Math.random() * 7000; } flash *= .9; }
      if(flash > .02){ g.fillStyle = `rgba(200,215,235,${flash * .35})`; g.fillRect(0, 0, w, S.sea + sy * .2); }
      // Fenster des Gebäudes
      S.wins.forEach(([x, y], i)=>{ g.fillStyle = `rgba(255,210,140,${.55 + .25 * Math.sin(t * .001 + i)})`; g.fillRect(x, y + sy * .2, 3, 4); });
      // Leuchtturm: Lichtkegel streicht waagerecht hin und her
      const [lx, ly0] = S.lamp, ly = ly0 + sy * .2, ang = still ? .4 : Math.sin(t * .0006) * 1.1, len = w * 1.2;
      g.save(); g.translate(lx, ly); g.globalCompositeOperation = "lighter";
      const cone = (dir)=>{ const q = g.createLinearGradient(0, 0, Math.cos(ang) * len * dir, 0); q.addColorStop(0, "rgba(255,240,200,.45)"); q.addColorStop(1, "rgba(255,240,200,0)"); g.fillStyle = q; g.beginPath(); g.moveTo(0, 0); g.lineTo(Math.cos(ang) * len * dir, -len * .07); g.lineTo(Math.cos(ang) * len * dir, len * .07); g.closePath(); g.fill(); };
      if(Math.cos(ang) > .15) cone(1); if(Math.cos(ang) < -.15) cone(1);
      const q = g.createRadialGradient(0, 0, 0, 0, 0, 22); q.addColorStop(0, "rgba(255,245,210,1)"); q.addColorStop(1, "rgba(255,245,210,0)"); g.fillStyle = q; g.fillRect(-22, -22, 44, 44);
      g.restore();
      // schräger Regen
      g.strokeStyle = "rgba(190,205,220,.35)"; g.lineWidth = 1;
      g.beginPath();
      rain.forEach((p)=>{ if(!still){ p.y += .0016 * k * p.z; p.x += .0005 * k * p.z; if(p.y > 1){ p.y = -.05; p.x = Math.random(); } if(p.x > 1) p.x -= 1; } const x = p.x * w, y = p.y * h, L = 10 + p.z * 16; g.moveTo(x, y); g.lineTo(x + L * .3, y + L); });
      g.stroke();
    });
    if(c.w) setTimeout(()=> c.onresize(), 0);
    const tl = el.querySelector(".cxTitle");
    api.on(window, "scroll", ()=>{ if(api.reduce()) return; const p = Math.min(1, scrollY / (innerHeight * .6)); tl.style.opacity = (1 - p).toFixed(3); tl.style.transform = `translate3d(0,${(scrollY * .35).toFixed(1)}px,0)`; }, { passive: true });
  }

  window.KOCHBUCH_FX.akte = { start(api){ if(api.home()) hero(api); } };
})();
