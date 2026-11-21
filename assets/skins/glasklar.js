// Skin „Glasklar“ (Nov. 2026): der Seitentitel wird auf einer Leinwand nachgezeichnet (der echte Titel bleibt für Vorlesen da, wird aber
// durchsichtig, Klasse .fxDrawn), ein Eis-/Glasblock gleitet darüber, vergrößert und bricht die Schrift (leichter Farbsaum an den Kanten).
// Folgt dem Finger, wenn er im Kopf bewegt wird. Bei „Bewegung reduzieren“ steht der Block still.
(()=>{
  "use strict";
  const TAU = Math.PI * 2;
  const off = (w, h)=>{ const c = document.createElement("canvas"); c.width = w; c.height = h; return c; };

  window.KOCHBUCH_FX.glasklar = {
    start(api){
      const sc = api.scene(), title = api.title();
      if(!sc || !title) return;
      const c = api.canvas(sc, "glLens"), g = c.g;
      let text = null, tint = [], box = { x: 0, y: 0, w: 0, h: 0 };

      // Schrift einmal auf eigene Leinwände: schwarz, rötlich, bläulich (für den Farbsaum im Glas)
      const render = ()=>{
        if(!c.w) return;
        title.classList.remove("fxDrawn");
        const gl = api.glyphs(title, sc), d = c.dpr;
        text = off(c.cv.width, c.cv.height);
        const make = (col)=>{ const o = off(c.cv.width, c.cv.height), x = o.getContext("2d"); x.setTransform(d, 0, 0, d, 0, 0); x.font = gl.font; x.fillStyle = col;
          gl.list.forEach((q)=> x.fillText(q.ch, q.x, q.y)); return o; };
        text = make(gl.color || "#0D0F12");
        tint = [make("rgba(214,48,80,.9)"), make("rgba(40,110,220,.9)")];
        if(gl.list.length){
          const xs = gl.list.map((q)=> q.x), ys = gl.list.map((q)=> q.y);
          box = { x: Math.min(...xs), y: Math.min(...ys) - gl.size * .8, w: Math.max(...gl.list.map((q)=> q.x + q.w)) - Math.min(...xs), h: Math.max(...ys) - Math.min(...ys) + gl.size };
        }
        title.classList.add("fxDrawn");
      };
      api.add(()=> title.classList.remove("fxDrawn"));

      // Form: abgerundeter Würfel, der leicht atmet
      const blob = (cx, cy, R, rot, t)=>{
        g.beginPath();
        for(let i = 0; i <= 64; i++){
          const a = i / 64 * TAU, ca = Math.cos(a), sa = Math.sin(a);
          const sq = Math.pow(Math.pow(Math.abs(ca), 3.2) + Math.pow(Math.abs(sa), 3.2), -1 / 3.2);
          const r = R * sq * (1 + .035 * Math.sin(3 * a + t * .0011) + .025 * Math.sin(5 * a - t * .0007));
          const x = cx + Math.cos(a + rot) * r, y = cy + Math.sin(a + rot) * r;
          i ? g.lineTo(x, y) : g.moveTo(x, y);
        }
        g.closePath();
      };

      let px = null, py = null;
      const frame = (t)=>{
        const w = c.w, h = c.h;
        if(!w || !text) return;
        const d = c.dpr;
        g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, c.cv.width, c.cv.height);
        g.drawImage(text, 0, 0);
        g.setTransform(d, 0, 0, d, 0, 0);
        const R = Math.max(34, Math.min(box.h * .62, w * .2, 120));
        // Weg: langsam über den Titel, Finger zieht den Block zu sich
        let tx = box.x + box.w * (.5 + .42 * Math.sin(t * .00021)), ty = box.y + box.h * (.5 + .22 * Math.sin(t * .00037 + 1));
        if(api.reduce()){ tx = box.x + box.w * .72; ty = box.y + box.h * .55; }
        const sr = sc.getBoundingClientRect();
        if(performance.now() - api.ptr.t < 2500){
          const fx = api.ptr.x - sr.left, fy = api.ptr.y - sr.top;
          if(fy > -20 && fy < h + 20){ tx = fx; ty = Math.max(box.y, Math.min(box.y + box.h, fy)); }
        }
        if(px === null || api.reduce()){ px = tx; py = ty; }
        px += (tx - px) * .06; py += (ty - py) * .06;
        const rot = api.reduce() ? .2 : Math.sin(t * .0004) * .35 + .2;

        // Schatten auf dem Feld
        g.save(); g.fillStyle = "rgba(30,60,90,.10)"; g.beginPath(); g.ellipse(px + R * .15, py + R * 1.08, R * .9, R * .16, 0, 0, TAU); g.fill(); g.restore();

        // Glaskörper: Grund abdecken, Schrift vergrößert und versetzt (Brechung), Farbsaum, Frost an den Rändern
        g.save();
        blob(px, py, R, rot, t); g.clip();
        g.fillStyle = "#E3EAEF"; g.fillRect(px - R * 2, py - R * 2, R * 4, R * 4);
        const mag = 1.38, ox = Math.sin(rot) * R * .12, oy = -R * .06;
        const lens = (img, dx, alpha)=>{
          g.save(); g.globalAlpha = alpha;
          g.translate(px + ox + dx, py + oy); g.scale(mag, mag); g.rotate(-rot * .15); g.translate(-px, -py);
          g.setTransform(g.getTransform().multiply(new DOMMatrix([1 / d, 0, 0, 1 / d, 0, 0])));
          g.drawImage(img, 0, 0); g.restore();
        };
        lens(tint[1], -R * .045, .55); lens(tint[0], R * .045, .55); lens(text, 0, .92);
        const fr = g.createRadialGradient(px - R * .3, py - R * .35, R * .1, px, py, R * 1.25);
        fr.addColorStop(0, "rgba(255,255,255,.55)"); fr.addColorStop(.45, "rgba(255,255,255,.08)"); fr.addColorStop(.8, "rgba(170,205,228,.22)"); fr.addColorStop(1, "rgba(255,255,255,.7)");
        g.fillStyle = fr; g.fillRect(px - R * 2, py - R * 2, R * 4, R * 4);
        g.lineWidth = R * .22; g.strokeStyle = "rgba(120,160,190,.16)"; blob(px, py, R, rot, t); g.stroke();
        g.restore();

        // Lichtkante und Glanzpunkt
        g.save();
        const rim = g.createLinearGradient(px - R, py - R, px + R, py + R);
        rim.addColorStop(0, "rgba(255,255,255,.95)"); rim.addColorStop(.5, "rgba(255,255,255,.25)"); rim.addColorStop(1, "rgba(255,255,255,.8)");
        g.strokeStyle = rim; g.lineWidth = 2; blob(px, py, R, rot, t); g.stroke();
        g.fillStyle = "rgba(255,255,255,.85)";
        g.beginPath(); g.ellipse(px - R * .42, py - R * .5, R * .2, R * .07, -.6 + rot, 0, TAU); g.fill();
        g.restore();
      };

      const lp = api.loop(c.cv, frame);
      c.onresize = ()=>{ render(); lp.redraw(); };
      render();
      document.fonts?.ready?.then(()=>{ render(); lp.redraw(); });
    },
  };
})();
