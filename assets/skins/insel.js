// Skin „Die Insel“ (Dez. 2026, neu: Besitzer – „zu wenig wie die Serie, wirkt gebastelt“; frei interpretiert, ohne Figuren/Namen).
// Startseite: gemalter Abend auf einer einsamen Insel – Sonnenuntergang über dem Meer, Palmen, ein Flugzeugwrack am Strand, Lagerfeuer,
// Glühwürmchen, glitzernde Wellen; Titel weit gesperrt in Weiß, als tauche er aus dem Dunkel auf. Sonst: Dschungel-Dunkel, Sand, Glut.
(()=>{
  "use strict";
  const TAU = Math.PI * 2;
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const rng = (seed)=>{ let s = seed; return ()=>{ s = (s * 9301 + 49297) % 233280; return s / 233280; }; };

  function palm(g, x, base, hgt, lean, col){
    g.strokeStyle = col; g.fillStyle = col; g.lineCap = "round";
    const tx = x + lean * hgt, ty = base - hgt;
    // Stamm: schmal, leicht gebogen, nach oben dünner
    for(let i = 0; i < 12; i++){ const u0 = i / 12, u1 = (i + 1) / 12, p = (u)=> [x + lean * hgt * (u * u * .9 + u * .1), base - hgt * u]; const [x0, y0] = p(u0), [x1, y1] = p(u1); g.lineWidth = Math.max(2, hgt * .045 * (1 - u0 * .5)); g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y1); g.stroke(); }
    // Wedel: gebogene Mittelrippe mit vielen feinen Fiedern
    for(let i = 0; i < 9; i++){
      const a = -Math.PI / 2 + (i - 4) * .42 + lean * .4, L = hgt * (.34 + ((i * 7) % 3) * .05);
      const ex = tx + Math.cos(a) * L, ey = ty + Math.sin(a) * L * .55 + L * .32, cx = tx + Math.cos(a) * L * .55, cy = ty + Math.sin(a) * L * .55 - L * .12;
      g.lineWidth = 1.6; g.beginPath(); g.moveTo(tx, ty); g.quadraticCurveTo(cx, cy, ex, ey); g.stroke();
      for(let k = 1; k < 14; k++){ const u = k / 14, qx = (1 - u) * (1 - u) * tx + 2 * (1 - u) * u * cx + u * u * ex, qy = (1 - u) * (1 - u) * ty + 2 * (1 - u) * u * cy + u * u * ey, fl = L * .16 * (1 - u * .7);
        g.lineWidth = 1.1; g.beginPath(); g.moveTo(qx, qy); g.lineTo(qx + Math.cos(a + 1.2) * fl, qy + Math.sin(a + 1.2) * fl + fl * .5); g.moveTo(qx, qy); g.lineTo(qx + Math.cos(a - 1.2) * fl, qy + Math.sin(a - 1.2) * fl + fl * .5); g.stroke(); }
    }
  }

  function paintStatic(w, h, d){
    const c = document.createElement("canvas"); c.width = Math.round(w * d); c.height = Math.round(h * d);
    const g = c.getContext("2d"); g.scale(d, d);
    const r = rng(53), O = 140, V = h - O, sea = O + V * .58, beach = O + V * .8;
    let gr = g.createLinearGradient(0, 0, 0, sea);
    gr.addColorStop(0, "#0D1426"); gr.addColorStop(.4, "#3B2A4A"); gr.addColorStop(.75, "#C9563A"); gr.addColorStop(1, "#F5B062");
    g.fillStyle = gr; g.fillRect(0, 0, w, sea);
    const sx = w * .58, sR = Math.min(w, V) * .1;
    gr = g.createRadialGradient(sx, sea, 0, sx, sea, w * .7); gr.addColorStop(0, "rgba(255,200,120,.6)"); gr.addColorStop(1, "rgba(255,200,120,0)"); g.fillStyle = gr; g.fillRect(0, 0, w, sea);
    g.fillStyle = "#FFE2A8"; g.beginPath(); g.arc(sx, sea, sR, Math.PI, TAU); g.fill();
    for(let i = 0; i < 7; i++){ const y = O + V * (.2 + r() * .32), x = r() * w; g.fillStyle = `rgba(${90 + r() * 60},50,70,${.3 + r() * .3})`; g.beginPath(); g.ellipse(x, y, 60 + r() * 140, 4 + r() * 6, 0, 0, TAU); g.fill(); }
    // Meer
    gr = g.createLinearGradient(0, sea, 0, beach); gr.addColorStop(0, "#5A3A4A"); gr.addColorStop(1, "#1A2232"); g.fillStyle = gr; g.fillRect(0, sea, w, beach - sea);
    // Strand
    gr = g.createLinearGradient(0, beach, 0, h); gr.addColorStop(0, "#3A2E28"); gr.addColorStop(1, "#120E0C"); g.fillStyle = gr;
    g.beginPath(); g.moveTo(0, beach + 10); g.quadraticCurveTo(w * .5, beach - 8, w, beach + 14); g.lineTo(w, h); g.lineTo(0, h); g.fill();
    // Wrack: Flugzeugrumpf schräg im Sand, Flügel
    const wx = w * .66, wy = beach + V * .04, L = Math.min(w * .42, 190);
    g.save(); g.translate(wx, wy); g.rotate(-.12);
    g.fillStyle = "#0E0B0A"; g.beginPath(); g.moveTo(-L * .5, 0); g.lineTo(L * .4, -L * .02); g.quadraticCurveTo(L * .5, -L * .08, L * .4, -L * .16); g.lineTo(-L * .45, -L * .16); g.lineTo(-L * .55, -L * .08); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(-L * .1, -L * .06); g.lineTo(-L * .38, L * .14); g.lineTo(-L * .2, L * .14); g.lineTo(L * .08, -L * .06); g.fill();
    g.fillStyle = "rgba(255,190,120,.25)"; for(let i = 0; i < 6; i++) g.fillRect(-L * .4 + i * L * .12, -L * .12, L * .05, L * .04);
    g.restore();
    // Palmen
    palm(g, w * .06, h, V * .5, .2, "#07090A"); palm(g, w * .16, h + 20, V * .38, .34, "#0A0C0D"); palm(g, w * .95, h, V * .46, -.24, "#07090A");
    return { c, sea, beach, O, V, sx };
  }

  function hero(api){
    const host = document.querySelector(".homeGreeting"); if(!host) return;
    const d = new Date(), a = document.getElementById("todayLink");
    const el = api.bit("cxHero inHero", "insel");
    el.innerHTML = `<div class="cxTitle"><span class="cxKick">Tobis</span><span class="cxBig">Kochbuch</span><span class="cxRule" aria-hidden="true"><i></i></span><span class="cxDate">${esc(d.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" }))}</span></div>
      ${a ? `<a class="cxDown" href="#todayLink">Heute auf der Insel</a>` : ""}`;
    host.prepend(el); api.add(()=> el.remove());
    document.body.classList.add("cxHome"); api.add(()=> document.body.classList.remove("cxHome"));
    const c = api.canvas(el, "cxPaint");
    let S = null; const r = rng(13), flies = Array.from({ length: 30 }, ()=> ({ x: r(), y: r(), ph: r() * TAU, s: .5 + r() }));
    c.onresize = ()=>{ S = paintStatic(c.w, c.h, c.dpr); lp?.redraw(); };
    const lp = api.loop(c.cv, (t)=>{
      if(!S) return; const g = c.g, w = c.w, h = c.h, sy = Math.min(scrollY, h), still = api.reduce();
      g.clearRect(0, 0, w, h); g.drawImage(S.c, 0, sy * .2, w, h);
      // Glitzern auf dem Wasser unter der Sonne
      g.globalCompositeOperation = "lighter";
      for(let i = 0; i < 70; i++){ const f = (i * 0.618) % 1, yy = S.sea + 3 + (S.beach - S.sea - 6) * f + sy * .2, sp = 1 - f, x = S.sx + Math.sin(i * 12.9) * w * (.04 + f * .16), tw = still ? .6 : Math.max(0, Math.sin(t * .004 + i * 2.1)); g.fillStyle = `rgba(255,205,140,${(.12 + .4 * sp) * tw})`; g.fillRect(x - 6 * sp - 2, yy, 12 * sp + 4, 1.3); }
      // Wellenlinien
      g.strokeStyle = "rgba(255,220,180,.16)"; g.lineWidth = 1; for(let i = 0; i < 4; i++){ const yy = S.beach - 8 - i * 6 + sy * .2 + (still ? 0 : Math.sin(t * .0015 + i) * 2); g.beginPath(); g.moveTo(0, yy); for(let x = 0; x <= w; x += 20) g.lineTo(x, yy + Math.sin(x * .03 + i + (still ? 0 : t * .002)) * 1.5); g.stroke(); }
      // Lagerfeuer
      const fx = w * .38, fy = S.beach + S.V * .1 + sy * .2, f = still ? 1 : .8 + .2 * Math.sin(t * .013) * Math.sin(t * .007);
      const gg = g.createRadialGradient(fx, fy, 0, fx, fy, 70 * f); gg.addColorStop(0, "rgba(255,180,80,.75)"); gg.addColorStop(.25, "rgba(255,110,40,.35)"); gg.addColorStop(1, "rgba(255,90,30,0)"); g.fillStyle = gg; g.fillRect(fx - 80, fy - 80, 160, 160);
      // Glühwürmchen
      flies.forEach((p, i)=>{ const x = p.x * w + (still ? 0 : Math.sin(t * .0005 + p.ph) * 18), y = S.O + S.V * (.55 + p.y * .4) + (still ? 0 : Math.cos(t * .0007 + p.ph) * 10) + sy * .3, a = still ? .6 : .3 + .7 * Math.max(0, Math.sin(t * .003 + p.ph)); const q = g.createRadialGradient(x, y, 0, x, y, 6 * p.s); q.addColorStop(0, `rgba(220,255,150,${a})`); q.addColorStop(1, "rgba(220,255,150,0)"); g.fillStyle = q; g.fillRect(x - 6, y - 6, 12, 12); });
      g.globalCompositeOperation = "source-over";
    });
    if(c.w) setTimeout(()=> c.onresize(), 0);
    const tl = el.querySelector(".cxTitle");
    api.on(window, "scroll", ()=>{ if(api.reduce()) return; const p = Math.min(1, scrollY / (innerHeight * .6)); tl.style.opacity = (1 - p).toFixed(3); tl.style.transform = `translate3d(0,${(scrollY * .35).toFixed(1)}px,0)`; }, { passive: true });
  }

  window.KOCHBUCH_FX.insel = { start(api){ if(api.home()) hero(api); } };
})();
