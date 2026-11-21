// Skin „Tiefsee“ (Nov. 2026): der Seitentitel besteht aus leuchtenden Teilchen. Beim Scrollen und unter dem Finger zerfällt er und treibt
// nach oben; in Ruhe setzt er sich wieder zusammen (lesbar). Dazu drei abstrakte Quallen, die pulsierend aufsteigen.
// Der echte Titel bleibt für Vorlesen da und wird durchsichtig (.fxDrawn), sobald die Teilchen stehen.
(()=>{
  "use strict";
  const TAU = Math.PI * 2;

  function sample(api, title, sc, c){
    title.classList.remove("fxDrawn");
    const gl = api.glyphs(title, sc);
    const o = document.createElement("canvas"); o.width = Math.ceil(c.w); o.height = Math.ceil(c.h);
    const x = o.getContext("2d", { willReadFrequently: true }); x.font = gl.font; x.fillStyle = "#fff";
    gl.list.forEach((q)=> x.fillText(q.ch, q.x, q.y));
    const data = x.getImageData(0, 0, o.width, o.height).data, pts = [];
    const step = Math.max(2, Math.round(gl.size / 22));
    for(let y = 0; y < o.height; y += step) for(let xx = 0; xx < o.width; xx += step){
      if(data[(y * o.width + xx) * 4 + 3] > 120) pts.push({ hx: xx, hy: y, x: xx, y, vx: 0, vy: 0, ph: Math.random() * TAU, sp: .4 + Math.random() * .8, hue: Math.random() });
    }
    return { pts, r: step * .52 };
  }

  function jelly(g, j, t){
    const pulse = .5 + .5 * Math.sin(t * .0021 * j.sp + j.ph);
    const bw = j.s * (1 + .08 * pulse), bh = j.s * (.62 - .12 * pulse);
    g.save(); g.translate(j.x, j.y);
    // Fäden
    g.lineCap = "round";
    for(let k = 0; k < 6; k++){
      const x0 = (k / 5 - .5) * bw * 1.5;
      g.beginPath(); g.moveTo(x0, 0);
      for(let s = 1; s <= 8; s++){
        const yy = s * j.s * .19, xx = x0 + Math.sin(t * .0018 + s * .7 + k + j.ph) * (2 + s * 1.3);
        g.lineTo(xx, yy);
      }
      g.strokeStyle = `rgba(${j.col},${.32 - k % 2 * .1})`; g.lineWidth = k % 2 ? 1 : 1.6; g.stroke();
    }
    // Schirm
    const gr = g.createRadialGradient(0, -bh * .2, bw * .1, 0, 0, bw * 1.1);
    gr.addColorStop(0, `rgba(${j.col},.55)`); gr.addColorStop(.7, `rgba(${j.col},.16)`); gr.addColorStop(1, `rgba(${j.col},0)`);
    g.fillStyle = gr;
    g.beginPath(); g.ellipse(0, 0, bw, bh, 0, Math.PI, TAU); g.quadraticCurveTo(0, bh * .35, -bw, 0); g.fill();
    g.strokeStyle = `rgba(${j.col},.5)`; g.lineWidth = 1.2;
    g.beginPath(); g.ellipse(0, 0, bw, bh, 0, Math.PI, TAU); g.stroke();
    g.restore();
  }

  window.KOCHBUCH_FX.tiefsee = {
    start(api){
      const sc = api.scene(), title = api.title();
      if(!sc) return;
      const c = api.canvas(sc, "tsSea"), g = c.g;
      let P = null, jellies = [];
      const setup = ()=>{
        if(!c.w) return;
        if(title){ P = sample(api, title, sc, c); title.classList.add("fxDrawn"); }
        const W = c.w, H = c.h;
        jellies = [
          { x: W * .82, y: H * .55, s: Math.min(46, W * .1), col: "95,242,216", sp: 1, ph: 0, vy: .18 },
          { x: W * .6, y: H * .95, s: Math.min(30, W * .07), col: "156,124,255", sp: 1.3, ph: 2, vy: .26 },
          { x: W * .93, y: H * 1.25, s: Math.min(22, W * .05), col: "63,168,255", sp: 1.6, ph: 4, vy: .34 },
        ];
      };
      api.add(()=> title?.classList.remove("fxDrawn"));

      let disturb = 0, lastY = scrollY;
      const frame = (t, dt)=>{
        const W = c.w, H = c.h;
        if(!W || !P) return;
        g.clearRect(0, 0, W, H);
        const k = (dt || 16) / 16;
        // Quallen steigen langsam auf und kommen unten wieder herein
        jellies.forEach((j)=>{
          if(!api.reduce()){ j.y -= j.vy * k; j.x += Math.sin(t * .0004 + j.ph) * .15 * k; }
          if(j.y < -j.s * 2) j.y = H + j.s * 2;
          jelly(g, j, api.reduce() ? 0 : t);
        });
        // Zerfall: durch Scrollen (Tempo + Abstand vom Seitenanfang) und durch den Finger
        const dy = Math.abs(scrollY - lastY); lastY = scrollY;
        disturb = Math.max(disturb * .94, Math.min(1, dy / 30), Math.min(1, scrollY / 260));
        if(api.reduce()) disturb = 0;
        const sr = sc.getBoundingClientRect(), fx = api.ptr.x - sr.left, fy = api.ptr.y - sr.top, fresh = performance.now() - api.ptr.t < 300;
        g.globalCompositeOperation = "lighter";
        const r = P.r;
        for(const p of P.pts){
          if(fresh){
            const ddx = p.x - fx, ddy = p.y - fy, d2 = ddx * ddx + ddy * ddy;
            if(d2 < 3600){ const f = (1 - d2 / 3600) * 2.2, dd = Math.sqrt(d2) || 1; p.vx += ddx / dd * f; p.vy += ddy / dd * f; }
          }
          // Treiben nach oben, Rückkehr zur Heimat, je nach Zerfall
          const drift = disturb * 26;
          const tx = p.hx + Math.sin(t * .0012 * p.sp + p.ph) * drift, ty = p.hy - disturb * (30 + p.sp * 50) + Math.cos(t * .001 * p.sp + p.ph) * drift * .4;
          p.vx += (tx - p.x) * .035 * k; p.vy += (ty - p.y) * .035 * k;
          p.vx *= .86; p.vy *= .86; p.x += p.vx * k; p.y += p.vy * k;
          const tw = .65 + .35 * Math.sin(t * .003 * p.sp + p.ph);
          g.fillStyle = p.hue < .78 ? `rgba(200,255,244,${(.85 * tw).toFixed(2)})` : `rgba(180,160,255,${(.85 * tw).toFixed(2)})`;
          g.fillRect(p.x - r, p.y - r, r * 2, r * 2);
        }
        g.globalCompositeOperation = "source-over";
      };
      const lp = api.loop(c.cv, frame);
      c.onresize = ()=>{ setup(); lp.redraw(); };
      setup();
      document.fonts?.ready?.then(()=>{ setup(); lp.redraw(); });
    },
  };
})();
