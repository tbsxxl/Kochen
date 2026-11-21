// Skin „Galerie“ (Nov. 2026): ein selbst gemaltes Winterbild (Pinselstriche auf drei Leinwänden: Himmel, ferne Hügel, verschneiter See
// mit kleinen Figuren) im Kopf. Beim Scrollen bewegen sich die Ebenen unterschiedlich schnell (Tiefe); Karten und Abschnitte blenden
// beim Hereinkommen ein und oben am Rand wieder aus. Gemalt wird nur beim Aufbau und bei Größenänderung.
(()=>{
  "use strict";
  const TAU = Math.PI * 2;
  let seed = 11;
  const rnd = ()=>{ seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  const mix = (a, b, f)=> a.map((v, i)=> Math.round(v + (b[i] - v) * f));
  const hex = (h)=> [1, 3, 5].map((i)=> parseInt(h.slice(i, i + 2), 16));
  const SKY = [[0, hex("#1E2C44")], [.38, hex("#3C5370")], [.62, hex("#7D8FA3")], [.8, hex("#C9B591")], [1, hex("#E7D8B8")]];
  const skyAt = (f)=>{ for(let i = 1; i < SKY.length; i++) if(f <= SKY[i][0]){ const [a, ca] = SKY[i - 1], [b, cb] = SKY[i]; return mix(ca, cb, (f - a) / (b - a)); } return SKY[SKY.length - 1][1]; };

  // Pinselstrich: längliche, leicht gedrehte Ellipse mit wenig Deckkraft
  const stroke = (g, x, y, w, h, col, a, rot)=>{ g.save(); g.globalAlpha = a; g.fillStyle = `rgb(${col.join(",")})`; g.translate(x, y); g.rotate(rot); g.beginPath(); g.ellipse(0, 0, w, h, 0, 0, TAU); g.fill(); g.restore(); };

  function paintSky(g, W, H){
    seed = 11;
    const gr = g.createLinearGradient(0, 0, 0, H);
    SKY.forEach(([f, c])=> gr.addColorStop(f, `rgb(${c.join(",")})`));
    g.fillStyle = gr; g.fillRect(0, 0, W, H);
    const n = Math.round(W * H / 900);
    for(let i = 0; i < n; i++){
      const y = rnd() * H, f = y / H, col = mix(skyAt(f), rnd() < .5 ? [255, 244, 220] : [40, 58, 84], rnd() * .25);
      stroke(g, rnd() * W, y, 14 + rnd() * 40, 2 + rnd() * 4, col, .18 + rnd() * .2, (rnd() - .5) * .25);
    }
    // tief stehende Wintersonne mit Schein
    const sx = W * .8, sy = H * .5, sg = g.createRadialGradient(sx, sy, 2, sx, sy, Math.min(W, H) * .45);
    sg.addColorStop(0, "rgba(255,240,205,.85)"); sg.addColorStop(.12, "rgba(255,226,170,.45)"); sg.addColorStop(1, "rgba(255,226,170,0)");
    g.fillStyle = sg; g.fillRect(0, 0, W, H);
    g.fillStyle = "rgba(255,246,224,.95)"; g.beginPath(); g.arc(sx, sy, Math.max(8, H * .035), 0, TAU); g.fill();
  }

  function ridge(g, W, base, amp, col, light, seedN){
    seed = seedN;
    const pts = [];
    for(let x = -10; x <= W + 10; x += 6){
      pts.push([x, base - amp * (.5 + .3 * Math.sin(x / W * 5.1 + seedN) + .2 * Math.sin(x / W * 13.7 + seedN * 2)) - rnd() * amp * .06]);
    }
    g.fillStyle = `rgb(${col.join(",")})`;
    g.beginPath(); g.moveTo(-10, base + amp * 3); pts.forEach(([x, y])=> g.lineTo(x, y)); g.lineTo(W + 10, base + amp * 3); g.closePath(); g.fill();
    // Pinselstriche auf dem Hang, oben heller (Schnee/Licht)
    for(let i = 0; i < pts.length * 3; i++){
      const p = pts[Math.floor(rnd() * pts.length)], y = p[1] + rnd() * amp * 1.6;
      stroke(g, p[0] + (rnd() - .5) * 12, y, 8 + rnd() * 18, 1.5 + rnd() * 2.5, mix(col, light, Math.max(0, .7 - (y - p[1]) / (amp * 1.6)) * rnd()), .35, (rnd() - .5) * .5);
    }
  }

  function tree(g, x, y, h){
    for(let i = 0; i < 7; i++){
      const f = i / 6, w = h * (.38 - f * .3);
      stroke(g, x + (rnd() - .5) * 2, y - f * h, w, h * .07, [34, 46, 42], .85, (rnd() - .5) * .2);
      stroke(g, x - w * .3, y - f * h - h * .03, w * .5, h * .035, [226, 232, 234], .7, -.2);
    }
    stroke(g, x, y + h * .06, 2, h * .1, [40, 34, 30], .9, 0);
  }

  function figure(g, x, y, s, scarf, lean){
    g.save(); g.translate(x, y); g.rotate(lean);
    stroke(g, 0, -s * .9, s * .26, s * .55, [34, 38, 43], .95, 0);          // Körper
    stroke(g, 0, -s * 1.62, s * .2, s * .2, [218, 190, 165], 1, 0);          // Kopf
    stroke(g, s * .05, -s * 1.32, s * .3, s * .08, scarf, 1, .2);            // Schal
    stroke(g, -s * .12, -s * .2, s * .07, s * .3, [34, 38, 43], .95, .25);   // Beine
    stroke(g, s * .14, -s * .22, s * .07, s * .3, [34, 38, 43], .95, -.5);
    g.restore();
    stroke(g, x, y + 1, s * .5, s * .08, [120, 140, 160], .35, 0);           // Spiegelung auf dem Eis
  }

  function paintNear(g, W, H){
    seed = 29;
    const ground = H * .78;
    g.fillStyle = "rgb(224,230,233)"; g.fillRect(0, ground, W, H - ground);
    for(let i = 0; i < W / 3; i++) stroke(g, rnd() * W, ground + rnd() * (H - ground), 10 + rnd() * 26, 1.5 + rnd() * 2, rnd() < .6 ? [205, 214, 222] : [242, 244, 245], .5, (rnd() - .5) * .1);
    // zugefrorener See
    const lx = W * .5, ly = ground + (H - ground) * .45;
    g.save(); g.globalAlpha = .9; g.fillStyle = "rgb(176,196,212)"; g.beginPath(); g.ellipse(lx, ly, W * .36, (H - ground) * .32, 0, 0, TAU); g.fill(); g.restore();
    for(let i = 0; i < 40; i++) stroke(g, lx + (rnd() - .5) * W * .6, ly + (rnd() - .5) * (H - ground) * .4, 12 + rnd() * 20, 1, [222, 232, 240], .45, (rnd() - .5) * .08);
    // Bäume links und rechts, kleine Läufer auf dem Eis
    const th = Math.min(70, H * .22);
    [[.04, 1], [.1, .8], [.16, .95], [.88, .85], [.95, 1.05]].forEach(([fx, s])=> tree(g, W * fx, ground + 4, th * s));
    const fs = Math.max(9, Math.min(16, H * .05));
    figure(g, lx - W * .1, ly + 2, fs, [178, 58, 46], -.18);
    figure(g, lx + W * .02, ly - 1, fs * .92, [201, 160, 74], -.12);
    figure(g, lx + W * .16, ly + 3, fs * .8, [70, 96, 140], .1);
  }

  window.KOCHBUCH_FX.galerie = {
    start(api){
      const sc = api.scene();
      if(sc){
        const mk = (cls)=>{ const d = document.createElement("div"); d.className = `glPaint ${cls}`; sc.appendChild(d); api.add(()=> d.remove()); return d; };
        const L = [mk("glSky"), mk("glFar"), mk("glNear")];
        const cv = L.map((d)=> api.canvas(d, ""));
        const paint = ()=>{
          const [a, b, n] = cv;
          if(!a.w) return;
          paintSky(a.g, a.w, a.h);
          b.g.clearRect(0, 0, b.w, b.h);
          ridge(b.g, b.w, b.h * .7, b.h * .16, [94, 112, 136], [214, 222, 232], 3);
          ridge(b.g, b.w, b.h * .76, b.h * .12, [70, 88, 108], [200, 210, 222], 7);
          n.g.clearRect(0, 0, n.w, n.h);
          paintNear(n.g, n.w, n.h);
        };
        cv.forEach((o)=>{ o.onresize = ()=>{ clearTimeout(paint.t); paint.t = setTimeout(paint, 30); }; });
        paint();
        const SPEED = [.45, .22, 0];
        const par = ()=>{ if(api.reduce()) return; const y = Math.min(scrollY, 700); L.forEach((d, i)=>{ d.style.transform = `translate3d(0,${(y * SPEED[i]).toFixed(1)}px,0)`; }); };
        api.on(window, "scroll", ()=> requestAnimationFrame(par), { passive: true });
        par();
      }

      // Ein- und Ausblenden der Inhalte, abhängig von der Lage im Bild
      if(api.reduce() || !("IntersectionObserver" in window)) return;
      const vis = new Set(), seen = new WeakSet();
      const io = new IntersectionObserver((es)=> es.forEach((e)=>{ e.isIntersecting ? vis.add(e.target) : vis.delete(e.target); }), { rootMargin: "80px 0px" });
      const watch = ()=> document.querySelectorAll(".appMain :is(.linkCard, .catTile, .homeSectionHead, .planDay, .catGroupTitle, .homeEmpty)").forEach((el)=>{ if(!seen.has(el)){ seen.add(el); io.observe(el); } });
      const fade = ()=>{
        const vh = innerHeight, top = 70;
        vis.forEach((el)=>{
          const r = el.getBoundingClientRect();
          const fin = Math.max(0, Math.min(1, (vh - r.top) / (vh * .22)));
          const fout = Math.max(0, Math.min(1, (r.bottom - top) / (Math.min(r.height, vh * .3))));
          const o = Math.min(fin, fout);
          el.style.opacity = (.04 + .96 * o).toFixed(3);
          el.style.transform = fin < 1 ? `translate3d(0,${((1 - fin) * 28).toFixed(1)}px,0)` : "";
        });
      };
      let raf = 0;
      api.on(window, "scroll", ()=>{ if(!raf) raf = requestAnimationFrame(()=>{ raf = 0; fade(); }); }, { passive: true });
      api.add(()=>{ io.disconnect(); cancelAnimationFrame(raf); document.querySelectorAll(".appMain :is(.linkCard, .catTile, .homeSectionHead, .planDay, .catGroupTitle, .homeEmpty)").forEach((el)=>{ el.style.opacity = ""; el.style.transform = ""; }); });
      this._watch = ()=>{ watch(); requestAnimationFrame(fade); };
      this._watch();
    },
    refresh(){ this._watch?.(); },
    stop(){ this._watch = null; },
  };
})();
