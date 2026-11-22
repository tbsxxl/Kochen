// Skin „Zwei Städte“ (Dez. 2026, neu: Besitzer – „zu wenig wie die Serie, wirkt gebastelt“; frei interpretiert, ohne Figuren/Namen).
// Startseite: gemalte geteilte Stadt – oben goldene Art-déco-Türme im Abendlicht mit Luftschiff und schwebendem blauem Kristall, unten
// die Unterstadt in grünem Dunst mit Rohren, Schloten und pinken/türkisen Leuchtzeichen, aufsteigender Rauch. Titel in Art-déco-Versalien.
(()=>{
  "use strict";
  const TAU = Math.PI * 2;
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const rng = (seed)=>{ let s = seed; return ()=>{ s = (s * 9301 + 49297) % 233280; return s / 233280; }; };

  function paintStatic(w, h, d){
    const c = document.createElement("canvas"); c.width = Math.round(w * d); c.height = Math.round(h * d);
    const g = c.getContext("2d"); g.scale(d, d);
    const r = rng(41), O = 140, V = h - O, edge = O + V * .6;
    // goldener Himmel
    let gr = g.createLinearGradient(0, 0, 0, edge);
    gr.addColorStop(0, "#1C2A44"); gr.addColorStop(.35, "#5A5A6E"); gr.addColorStop(.7, "#E0A35C"); gr.addColorStop(1, "#F6D392");
    g.fillStyle = gr; g.fillRect(0, 0, w, edge);
    // Wolkenstriche (gemalt)
    for(let i = 0; i < 40; i++){ const y = O + V * (.05 + r() * .4), x = r() * w; g.fillStyle = `rgba(255,${200 + r() * 40},${150 + r() * 60},${.05 + r() * .1})`; g.beginPath(); g.ellipse(x, y, 40 + r() * 120, 3 + r() * 6, 0, 0, TAU); g.fill(); }
    // Art-déco-Türme (Messing), hinten heller
    const deco = (x, bw, bh, base, fill, lit)=>{
      g.fillStyle = fill; const steps = 3;
      for(let s = 0; s < steps; s++){ const f = 1 - s * .22, tw = bw * f, th = bh * (1 - s * .28); g.fillRect(x + (bw - tw) / 2, base - th, tw, th); }
      g.beginPath(); g.moveTo(x + bw * .44, base - bh * .99); g.lineTo(x + bw / 2, base - bh * 1.25); g.lineTo(x + bw * .56, base - bh * .99); g.fill();
      if(lit) for(let yy = base - bh * .9; yy < base - 6; yy += 7) for(let xx = x + bw * .2; xx < x + bw * .8; xx += 6) if(r() < .45){ g.fillStyle = "rgba(255,226,160,.9)"; g.fillRect(xx, yy, 2, 3); }
    };
    for(let i = 0; i < 12; i++){ const bw = w * (.05 + r() * .06); deco(r() * w, bw, V * (.12 + r() * .18), edge - V * .01, "#B48A57", false); }
    for(let i = 0; i < 8; i++){ const bw = w * (.07 + r() * .07); deco(i * w / 8 + r() * 20 - 10, bw, V * (.16 + r() * .22), edge, "#6E4B2E", true); }
    // Kante der Oberstadt
    g.fillStyle = "#3A2817"; g.fillRect(0, edge - 2, w, 6);
    gr = g.createLinearGradient(0, edge, 0, edge + 20); gr.addColorStop(0, "rgba(255,210,140,.5)"); gr.addColorStop(1, "rgba(255,210,140,0)"); g.fillStyle = gr; g.fillRect(0, edge - 4, w, 20);
    // Unterstadt
    gr = g.createLinearGradient(0, edge, 0, h); gr.addColorStop(0, "#1C3A33"); gr.addColorStop(.5, "#0F231F"); gr.addColorStop(1, "#060D0C");
    g.fillStyle = gr; g.fillRect(0, edge + 4, w, h - edge);
    const signs = [];
    for(let i = 0; i < 14; i++){ const x = r() * w, bw = w * (.06 + r() * .1), bh = V * (.08 + r() * .2), base = h; g.fillStyle = i % 2 ? "#0B1816" : "#13241F"; g.fillRect(x, base - bh - V * .1, bw, bh + V * .1);
      if(r() < .6) signs.push([x + bw * .2, base - bh - V * .1 + 10 + r() * bh * .5, bw * .5, 6 + r() * 6, r() < .5 ? "#FF2E88" : "#26E0F0"]); }
    // Rohre
    g.strokeStyle = "#1E2B27"; g.lineWidth = 6; for(let i = 0; i < 5; i++){ const y = edge + V * (.06 + i * .05); g.beginPath(); g.moveTo(0, y); g.bezierCurveTo(w * .3, y + 20, w * .6, y - 15, w, y + 6); g.stroke(); }
    g.strokeStyle = "rgba(120,180,150,.15)"; g.lineWidth = 1.5; for(let i = 0; i < 5; i++){ const y = edge + V * (.06 + i * .05) - 2; g.beginPath(); g.moveTo(0, y); g.bezierCurveTo(w * .3, y + 20, w * .6, y - 15, w, y + 6); g.stroke(); }
    return { c, edge, O, V, signs };
  }

  function hero(api){
    const host = document.querySelector(".homeGreeting"); if(!host) return;
    const d = new Date(), a = document.getElementById("todayLink");
    const el = api.bit("cxHero zwHero", "zweistaedte");
    el.innerHTML = `<div class="cxTitle"><span class="cxKick">Tobis</span><span class="cxBig">Kochbuch</span><span class="cxRule" aria-hidden="true"><i></i></span><span class="cxDate">${esc(d.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" }))}</span></div>
      ${a ? `<a class="cxDown" href="#todayLink">Heute in der Stadt</a>` : ""}`;
    host.prepend(el); api.add(()=> el.remove());
    document.body.classList.add("cxHome"); api.add(()=> document.body.classList.remove("cxHome"));
    const c = api.canvas(el, "cxPaint");
    let S = null; const r = rng(7), smoke = Array.from({ length: 40 }, ()=> ({ x: r(), y: r(), s: .5 + r(), ph: r() * TAU }));
    c.onresize = ()=>{ S = paintStatic(c.w, c.h, c.dpr); lp?.redraw(); };
    const lp = api.loop(c.cv, (t, dt)=>{
      if(!S) return; const g = c.g, w = c.w, h = c.h, sy = Math.min(scrollY, h), still = api.reduce(), k = dt || 16;
      g.clearRect(0, 0, w, h); g.drawImage(S.c, 0, sy * .2, w, h);
      // Leuchtzeichen der Unterstadt (flackern ab und zu)
      g.globalCompositeOperation = "lighter";
      S.signs.forEach(([x, y, bw, bh, col], i)=>{ const on = still || Math.sin(t * .004 + i * 3.1) > -.9; if(!on) return; const yy = y + sy * .2; g.fillStyle = col; g.fillRect(x, yy, bw, 2); g.fillRect(x, yy + bh, bw * .6, 2); const gg = g.createRadialGradient(x + bw / 2, yy + bh / 2, 0, x + bw / 2, yy + bh / 2, bw); gg.addColorStop(0, col === "#FF2E88" ? "rgba(255,46,136,.35)" : "rgba(38,224,240,.3)"); gg.addColorStop(1, "rgba(0,0,0,0)"); g.fillStyle = gg; g.fillRect(x - bw / 2, yy - bw, bw * 2, bw * 2); });
      // grüner Dunst
      for(let i = 0; i < 3; i++){ const x = ((t * .01 * (i + 1) + i * w * .5) % (w * 1.6)) - w * .3, y = S.edge + S.V * (.15 + i * .1) + sy * .2; const gg = g.createRadialGradient(x, y, 0, x, y, w * .5); gg.addColorStop(0, "rgba(90,200,140,.13)"); gg.addColorStop(1, "rgba(90,200,140,0)"); g.save(); g.translate(x, y); g.scale(1, .3); g.translate(-x, -y); g.fillStyle = gg; g.fillRect(x - w * .5, y - w * .5, w, w); g.restore(); }
      g.globalCompositeOperation = "source-over";
      // Rauch steigt aus der Unterstadt
      smoke.forEach((p)=>{ if(!still){ p.y -= .00012 * k * p.s; if(p.y < 0) p.y = 1; } const x = p.x * w + Math.sin(t * .0006 + p.ph) * 14, y = S.edge + (h - S.edge) * p.y + sy * .2; g.fillStyle = `rgba(150,190,170,${.05 * p.s})`; g.beginPath(); g.arc(x, y, 12 * p.s + (1 - p.y) * 18, 0, TAU); g.fill(); });
      // Luftschiff
      const ax = ((still ? .3 : (t * .000012) % 1.3) - .15) * w, ay = S.O + S.V * .42 + sy * .15;
      g.fillStyle = "#4A3626"; g.beginPath(); g.ellipse(ax, ay, 34, 11, 0, 0, TAU); g.fill(); g.fillStyle = "rgba(255,220,160,.35)"; g.beginPath(); g.ellipse(ax - 4, ay - 4, 24, 3, 0, 0, TAU); g.fill(); g.fillStyle = "#2A1D14"; g.fillRect(ax - 8, ay + 10, 16, 5);
      // schwebender Kristall (Sechseck, leuchtet, dreht sich leicht)
      const kx = w * .82, ky = S.O + S.V * .3 + (still ? 0 : Math.sin(t * .0012) * 6) + sy * .12, kr = Math.min(w, h) * .05, rot = still ? .3 : t * .0004;
      const gg = g.createRadialGradient(kx, ky, 0, kx, ky, kr * 5); gg.addColorStop(0, "rgba(90,200,255,.55)"); gg.addColorStop(1, "rgba(90,200,255,0)"); g.fillStyle = gg; g.fillRect(kx - kr * 5, ky - kr * 5, kr * 10, kr * 10);
      g.beginPath(); for(let i = 0; i < 6; i++){ const an = rot + i * TAU / 6, xx = kx + Math.cos(an) * kr * .7, yy = ky + Math.sin(an) * kr * 1.2; i ? g.lineTo(xx, yy) : g.moveTo(xx, yy); } g.closePath();
      const kg = g.createLinearGradient(kx - kr, ky - kr, kx + kr, ky + kr); kg.addColorStop(0, "#D8F6FF"); kg.addColorStop(.5, "#4FB8F0"); kg.addColorStop(1, "#1E5AB8"); g.fillStyle = kg; g.fill();
      g.strokeStyle = "rgba(255,255,255,.8)"; g.lineWidth = 1; g.stroke();
    });
    if(c.w) setTimeout(()=> c.onresize(), 0);
    const tl = el.querySelector(".cxTitle");
    api.on(window, "scroll", ()=>{ if(api.reduce()) return; const p = Math.min(1, scrollY / (innerHeight * .6)); tl.style.opacity = (1 - p).toFixed(3); tl.style.transform = `translate3d(0,${(scrollY * .35).toFixed(1)}px,0)`; }, { passive: true });
  }

  window.KOCHBUCH_FX.zweistaedte = { start(api){ if(api.home()) hero(api); } };
})();
