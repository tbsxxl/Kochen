// Skin „Brigade“ (Dez. 2026, neu: Besitzer – „zu wenig wie die Serie, wirkt gebastelt“; frei interpretiert, ohne Figuren/Namen).
// Startseite: gemalter Küchenpass im Service – gebürsteter Edelstahl, drei Wärmelampen mit warmem Lichtkegel, Bonschiene mit Bons,
// angerichtete Teller, aufsteigender Dampf; Titel kräftig, „Tobis“ auf blauem Malerband. Sonst: hell, Edelstahl, Schürzenblau.
(()=>{
  "use strict";
  const TAU = Math.PI * 2;
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const rng = (seed)=>{ let s = seed; return ()=>{ s = (s * 9301 + 49297) % 233280; return s / 233280; }; };

  function paintStatic(w, h, d){
    const c = document.createElement("canvas"); c.width = Math.round(w * d); c.height = Math.round(h * d);
    const g = c.getContext("2d"); g.scale(d, d);
    const r = rng(71), O = 140, V = h - O, shelf = O + V * .66, rail = O + V * .5;
    // gebürsteter Stahl
    let gr = g.createLinearGradient(0, 0, w, 0); gr.addColorStop(0, "#C9CED2"); gr.addColorStop(.5, "#E7EAEC"); gr.addColorStop(1, "#BCC2C7");
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    for(let i = 0; i < h * 1.4; i++){ g.fillStyle = r() < .5 ? `rgba(255,255,255,${r() * .2})` : `rgba(90,100,110,${r() * .07})`; g.fillRect(0, r() * h, w, 1); }
    // Fliesen-Fugen dezent
    g.fillStyle = "rgba(90,100,110,.12)"; for(let x = 0; x < w; x += 64) g.fillRect(x, 0, 1, shelf);
    // Lampengehäuse
    const lamps = [w * .2, w * .5, w * .8].map((x)=> x);
    lamps.forEach((x)=>{ g.fillStyle = "#2A2F34"; g.fillRect(x - 1.5, 0, 3, O + V * .02); gr = g.createLinearGradient(x - 40, 0, x + 40, 0); gr.addColorStop(0, "#3A4046"); gr.addColorStop(.5, "#6A727A"); gr.addColorStop(1, "#2E3439"); g.fillStyle = gr; g.beginPath(); g.moveTo(x - 46, O + V * .08); g.lineTo(x - 26, O + V * .02); g.lineTo(x + 26, O + V * .02); g.lineTo(x + 46, O + V * .08); g.closePath(); g.fill(); g.fillStyle = "#FFB35C"; g.fillRect(x - 40, O + V * .08, 80, 3); });
    // Bonschiene
    gr = g.createLinearGradient(0, rail - 6, 0, rail + 8); gr.addColorStop(0, "#F7F8F9"); gr.addColorStop(.5, "#9AA2A9"); gr.addColorStop(1, "#5E666D"); g.fillStyle = gr; g.fillRect(0, rail - 6, w, 14);
    // Bons an der Schiene
    for(let i = 0; i < 7; i++){ const x = w * (.04 + i * .14) + r() * 10, bw = Math.min(60, w * .12), bh = bw * 1.5, rot = (r() - .5) * .08;
      g.save(); g.translate(x, rail + 4); g.rotate(rot); g.fillStyle = "rgba(0,0,0,.12)"; g.fillRect(3, 3, bw, bh); g.fillStyle = "#FDFDFB"; g.fillRect(0, 0, bw, bh);
      g.fillStyle = "#2E62A8"; g.fillRect(bw * .1, bh * .1, bw * .4, 2.5); g.fillStyle = "rgba(30,30,30,.55)"; for(let k = 0; k < 5; k++) g.fillRect(bw * .1, bh * (.25 + k * .13), bw * (.5 + r() * .35), 1.6);
      g.restore(); }
    // Pass-Ablage (Edelstahl) mit Kante
    gr = g.createLinearGradient(0, shelf, 0, h); gr.addColorStop(0, "#F4F6F7"); gr.addColorStop(.06, "#AEB5BB"); gr.addColorStop(1, "#7F878E"); g.fillStyle = gr; g.fillRect(0, shelf, w, h - shelf);
    g.fillStyle = "rgba(255,255,255,.8)"; g.fillRect(0, shelf, w, 2);
    // Teller unter den Lampen
    const plates = lamps.map((x, i)=> [x + (i - 1) * 6, shelf + V * .06]);
    plates.forEach(([x, y], i)=>{ g.fillStyle = "rgba(0,0,0,.18)"; g.beginPath(); g.ellipse(x + 3, y + 6, 46, 12, 0, 0, TAU); g.fill(); g.fillStyle = "#FBFBF9"; g.beginPath(); g.ellipse(x, y, 46, 13, 0, 0, TAU); g.fill(); g.fillStyle = "#ECEDEA"; g.beginPath(); g.ellipse(x, y, 30, 8, 0, 0, TAU); g.fill();
      const col = [["#B5562E", "#6A8F3A"], ["#C9A24A", "#3E6B2F"], ["#8C3A2A", "#E3C16F"]][i]; g.fillStyle = col[0]; g.beginPath(); g.ellipse(x - 4, y - 3, 16, 6, 0, 0, TAU); g.fill(); g.fillStyle = col[1]; g.beginPath(); g.arc(x + 9, y - 4, 4, 0, TAU); g.fill(); g.beginPath(); g.arc(x - 12, y - 5, 3, 0, TAU); g.fill(); });
    return { c, lamps, plates, shelf, O, V };
  }

  function hero(api){
    const host = document.querySelector(".homeGreeting"); if(!host) return;
    const d = new Date(), a = document.getElementById("todayLink");
    const el = api.bit("cxHero bgHero", "brigade");
    el.innerHTML = `<div class="cxTitle"><span class="cxKick">Tobis</span><span class="cxBig">Kochbuch</span><span class="cxRule" aria-hidden="true"><i></i></span><span class="cxDate">${esc(d.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" }))} · Service läuft</span></div>
      ${a ? `<a class="cxDown" href="#todayLink">Heute auf dem Pass</a>` : ""}`;
    host.prepend(el); api.add(()=> el.remove());
    document.body.classList.add("cxHome"); api.add(()=> document.body.classList.remove("cxHome"));
    const c = api.canvas(el, "cxPaint");
    let S = null; const r = rng(23), steam = Array.from({ length: 36 }, ()=> ({ p: r(), i: Math.floor(r() * 3), o: (r() - .5) * 30, s: .6 + r() * .8 }));
    c.onresize = ()=>{ S = paintStatic(c.w, c.h, c.dpr); lp?.redraw(); };
    const lp = api.loop(c.cv, (t, dt)=>{
      if(!S) return; const g = c.g, w = c.w, h = c.h, sy = Math.min(scrollY, h), still = api.reduce(), k = dt || 16;
      g.clearRect(0, 0, w, h); g.drawImage(S.c, 0, sy * .2, w, h);
      // warmes Licht der Wärmelampen
      g.globalCompositeOperation = "multiply";
      S.lamps.forEach((x, i)=>{ const y = S.O + S.V * .08 + sy * .2, f = still ? 1 : .96 + .04 * Math.sin(t * .003 + i); const q = g.createRadialGradient(x, S.shelf + sy * .2, 0, x, S.shelf + sy * .2, S.V * .55 * f); q.addColorStop(0, "rgba(255,186,120,.32)"); q.addColorStop(1, "rgba(255,170,90,0)"); g.fillStyle = q; g.beginPath(); g.moveTo(x - 40, y); g.lineTo(x + 40, y); g.lineTo(x + 130, S.shelf + S.V * .2 + sy * .2); g.lineTo(x - 130, S.shelf + S.V * .2 + sy * .2); g.closePath(); g.fill(); });
      g.globalCompositeOperation = "source-over";
      // Dampf über den Tellern
      steam.forEach((p)=>{ if(!still){ p.p += .00018 * k * p.s; if(p.p > 1) p.p = 0; } const [px, py] = S.plates[p.i], x = px + p.o + Math.sin(t * .001 + p.p * 6 + p.o) * 10, y = py + sy * .2 - p.p * S.V * .3, a = Math.sin(p.p * Math.PI) * .16; g.fillStyle = `rgba(255,255,255,${a})`; g.beginPath(); g.arc(x, y, 8 + p.p * 22, 0, TAU); g.fill(); });
    });
    if(c.w) setTimeout(()=> c.onresize(), 0);
    const tl = el.querySelector(".cxTitle");
    api.on(window, "scroll", ()=>{ if(api.reduce()) return; const p = Math.min(1, scrollY / (innerHeight * .6)); tl.style.opacity = (1 - p).toFixed(3); tl.style.transform = `translate3d(0,${(scrollY * .35).toFixed(1)}px,0)`; }, { passive: true });
  }

  window.KOCHBUCH_FX.brigade = { start(api){ if(api.home()) hero(api); } };
})();
