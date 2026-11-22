// Skin „Zauberschule“ (Dez. 2026, neu: Besitzer – „zu wenig wie die Serie, wirkt gebastelt“; frei interpretiert, ohne Namen, Wappen,
// Figuren). Startseite: gemaltes Schloss mit vielen erleuchteten Fenstern auf einem Felsen über einem dunklen See, Spiegelungen im
// Wasser, schwebende Kerzen am Nachthimmel; Titel in alter Buchschrift mit Goldschimmer. Sonst: Mitternachtsblau, Gold, Weinrot.
(()=>{
  "use strict";
  const TAU = Math.PI * 2;
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const rng = (seed)=>{ let s = seed; return ()=>{ s = (s * 9301 + 49297) % 233280; return s / 233280; }; };

  function paintStatic(w, h, d){
    const c = document.createElement("canvas"); c.width = Math.round(w * d); c.height = Math.round(h * d);
    const g = c.getContext("2d"); g.scale(d, d);
    const r = rng(23), O = 140, V = h - O, lake = O + V * .7;
    let gr = g.createLinearGradient(0, 0, 0, lake);
    gr.addColorStop(0, "#05060F"); gr.addColorStop(.5, "#111633"); gr.addColorStop(1, "#2A2746");
    g.fillStyle = gr; g.fillRect(0, 0, w, lake);
    for(let i = 0; i < 300; i++){ const y = Math.pow(r(), 1.4) * lake * .8; g.fillStyle = `rgba(230,225,255,${(.15 + r() * .6) * (1 - y / lake)})`; g.fillRect(r() * w, y, r() < .08 ? 1.8 : 1, r() < .08 ? 1.8 : 1); }
    // Schimmer am Horizont
    gr = g.createRadialGradient(w * .62, lake, 0, w * .62, lake, w * .8); gr.addColorStop(0, "rgba(120,90,140,.35)"); gr.addColorStop(1, "rgba(120,90,140,0)"); g.fillStyle = gr; g.fillRect(0, 0, w, lake);
    // ferne Berge
    const ridge = (base, amp, col, f)=>{ g.fillStyle = col; g.beginPath(); g.moveTo(0, lake); for(let x = 0; x <= w + 10; x += 10) g.lineTo(x, base - amp * Math.abs(Math.sin(x * f) * .7 + Math.sin(x * f * 2.7 + 1) * .3)); g.lineTo(w, lake); g.fill(); };
    ridge(lake - V * .06, V * .07, "#1A1830", .009); ridge(lake - V * .02, V * .05, "#121124", .014);
    // Felsen und Schloss (rechts der Mitte)
    const cx = w * .62, base = lake - V * .02, S = Math.min(w * .62, V * .55);
    g.fillStyle = "#0A0A16";
    g.beginPath(); g.moveTo(cx - S * .75, lake); g.quadraticCurveTo(cx - S * .45, base - S * .12, cx - S * .2, base - S * .2); g.lineTo(cx + S * .35, base - S * .22); g.quadraticCurveTo(cx + S * .6, base - S * .1, cx + S * .8, lake); g.fill();
    const top = base - S * .2, wins = [];
    const towers = [[-.42, .26, .05], [-.3, .38, .06], [-.18, .3, .1], [-.05, .62, .07], [.06, .48, .09], [.17, .72, .06], [.26, .4, .1], [.36, .55, .05], [.44, .3, .06], [-.1, .2, .26], [.22, .22, .2]];
    towers.forEach(([fx, fh, fw])=>{
      const x = cx + S * fx, tw = S * fw, th = S * fh;
      g.fillRect(x - tw / 2, top - th, tw, th);
      if(fw < .12){ g.beginPath(); g.moveTo(x - tw / 2 - tw * .12, top - th); g.lineTo(x, top - th - tw * 1.6); g.lineTo(x + tw / 2 + tw * .12, top - th); g.fill(); }
      const rows = Math.floor(th / (S * .045));
      for(let k = 1; k < rows; k++) for(let j = 0; j < Math.max(1, Math.floor(tw / (S * .03))); j++) if(r() < .55) wins.push([x - tw / 2 + (j + .5) * tw / Math.max(1, Math.floor(tw / (S * .03))), top - th + k * th / rows]);
    });
    // Fenster
    wins.forEach(([x, y])=>{ g.fillStyle = "rgba(255,196,110,.95)"; g.fillRect(x - 1, y - 2, 2.2, 3.6); });
    g.globalCompositeOperation = "lighter";
    wins.forEach(([x, y])=>{ const gg = g.createRadialGradient(x, y, 0, x, y, 9); gg.addColorStop(0, "rgba(255,170,80,.25)"); gg.addColorStop(1, "rgba(255,170,80,0)"); g.fillStyle = gg; g.fillRect(x - 9, y - 9, 18, 18); });
    g.globalCompositeOperation = "source-over";
    // See
    gr = g.createLinearGradient(0, lake, 0, h); gr.addColorStop(0, "#1B1934"); gr.addColorStop(1, "#05060D");
    g.fillStyle = gr; g.fillRect(0, lake, w, h - lake);
    return { c, lake, wins, cx, S };
  }

  function hero(api){
    const host = document.querySelector(".homeGreeting"); if(!host) return;
    const d = new Date(), a = document.getElementById("todayLink");
    const el = api.bit("cxHero zsHero", "zauberschule");
    el.innerHTML = `<div class="cxTitle"><span class="cxKick">Tobis</span><span class="cxBig">Kochbuch</span><span class="cxRule" aria-hidden="true"><i></i></span><span class="cxDate">${esc(d.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" }))}</span></div>
      ${a ? `<a class="cxDown" href="#todayLink">Heute in der Großen Halle</a>` : ""}`;
    host.prepend(el); api.add(()=> el.remove());
    document.body.classList.add("cxHome"); api.add(()=> document.body.classList.remove("cxHome"));
    const c = api.canvas(el, "cxPaint");
    let S = null; const r = rng(9), candles = [];
    for(let i = 0; i < 26; i++){ const side = r() < .5, x = side ? r() * .22 : .78 + r() * .22; candles.push({ x: i % 5 === 0 ? .25 + r() * .5 : x, y: i % 5 === 0 ? .44 + r() * .08 : .04 + r() * .46, z: .4 + r() * .6, ph: r() * TAU }); }
    c.onresize = ()=>{ S = paintStatic(c.w, c.h, c.dpr); lp?.redraw(); };
    const lp = api.loop(c.cv, (t)=>{
      if(!S) return; const g = c.g, w = c.w, h = c.h, sy = Math.min(scrollY, h), still = api.reduce();
      g.clearRect(0, 0, w, h); g.drawImage(S.c, 0, sy * .2, w, h);
      // Spiegelungen der Fenster im See
      const ly = S.lake + sy * .2;
      g.globalCompositeOperation = "lighter";
      S.wins.forEach(([x, y], i)=>{ if(i % 2) return; const dy = S.lake - y; const yy = ly + dy * .9 + 4; const wob = still ? 0 : Math.sin(t * .002 + i) * 2; g.fillStyle = `rgba(255,180,90,${.18 + .1 * Math.sin(t * .003 + i * 1.7)})`; g.fillRect(x + wob - 1, yy, 2.5, 6 + dy * .08); });
      g.globalCompositeOperation = "source-over";
      // Nebel über dem Wasser
      const fg = g.createLinearGradient(0, ly - 30, 0, ly + 40); fg.addColorStop(0, "rgba(160,150,200,0)"); fg.addColorStop(.5, "rgba(160,150,200,.14)"); fg.addColorStop(1, "rgba(160,150,200,0)"); g.fillStyle = fg; g.fillRect(0, ly - 30, w, 70);
      // schwebende Kerzen
      candles.forEach((p)=>{
        const x = p.x * w, y = (140 + (h - 140) * p.y) + (still ? 0 : Math.sin(t * .0008 + p.ph) * 6 * p.z) + sy * .1 * p.z, s = 2.2 + p.z * 3;
        g.fillStyle = "rgba(240,232,214,.95)"; g.fillRect(x - s / 2, y, s, s * 3.2);
        const fl = still ? 1 : .8 + .2 * Math.sin(t * .02 + p.ph * 3);
        const gg = g.createRadialGradient(x, y - s * .6, 0, x, y - s * .6, s * 5 * fl); gg.addColorStop(0, "rgba(255,214,140,.95)"); gg.addColorStop(.2, "rgba(255,170,70,.45)"); gg.addColorStop(1, "rgba(255,150,50,0)"); g.fillStyle = gg; g.fillRect(x - s * 5, y - s * 5.6, s * 10, s * 10);
      });
    });
    if(c.w) setTimeout(()=> c.onresize(), 0);
    const tl = el.querySelector(".cxTitle");
    api.on(window, "scroll", ()=>{ if(api.reduce()) return; const p = Math.min(1, scrollY / (innerHeight * .6)); tl.style.opacity = (1 - p).toFixed(3); tl.style.transform = `translate3d(0,${(scrollY * .35).toFixed(1)}px,0)`; }, { passive: true });
  }

  window.KOCHBUCH_FX.zauberschule = { start(api){ if(api.home()) hero(api); } };
})();
