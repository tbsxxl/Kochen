// Skin „Formlabor“ (Nov. 2026): rote Formen (Kugel, Ring aus Perlen, Kapsel, Halbkugel) schweben rechts im Kopf, drehen sich, weichen dem
// Finger aus und ziehen beim Scrollen mit. Dazu ein Retro-Computer unter den Schnellknöpfen der Startseite: sein Bildschirm zeigt die
// Uhrzeit, bei laufendem Kochtimer die Restzeit (Antippen öffnet dann den Kochmodus).
(()=>{
  "use strict";
  const TAU = Math.PI * 2;

  // eine schattierte rote Kugel (Licht von oben links)
  function ball(g, x, y, r, shade){
    const gr = g.createRadialGradient(x - r * .38, y - r * .42, r * .06, x, y, r * 1.02);
    gr.addColorStop(0, shade > .5 ? "#FFB3A0" : "#F58A70");
    gr.addColorStop(.22, "#F04A2C");
    gr.addColorStop(.62, "#C62B17");
    gr.addColorStop(1, "#6E1308");
    g.fillStyle = gr;
    g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill();
  }

  // Formen als Mengen von Kugeln im Raum (x, y, z, Radius), um eine Achse gedreht und nach Tiefe sortiert gezeichnet
  function shapes(){
    const ring = [], pill = [], dome = [];
    for(let i = 0; i < 26; i++){ const a = i / 26 * TAU; ring.push([Math.cos(a), Math.sin(a) * .0, Math.sin(a), .34]); }
    for(let i = 0; i < 9; i++) pill.push([(i / 8 - .5) * 1.6, 0, 0, .42]);
    for(let i = 0; i < 18; i++){ const a = i / 18 * TAU; dome.push([Math.cos(a) * .55, .2, Math.sin(a) * .55, .32]); }
    dome.push([0, 0, 0, .62]);
    // Lage in der freien Zone neben dem Titel (Anteile von Breite/Höhe), Größe als Anteil von S
    return [
      { pts: [[0, 0, 0, 1]], x: .36, y: .4, s: .52, rx: 0, ry: 0, vr: 0, bob: 0 },
      { pts: ring, x: .8, y: .28, s: .4, rx: 1.1, ry: .3, vr: .0006, bob: 1.3 },
      { pts: pill, x: .74, y: .78, s: .24, rx: .6, ry: .9, vr: .0004, bob: 2.4 },
      { pts: dome, x: .06, y: -.02, s: .22, rx: .5, ry: .2, vr: .0005, bob: 3.6 },
    ];
  }

  function desk(api){
    const quick = document.querySelector(".homeQuick");
    if(!quick || !api.home()) return;
    const el = api.bit("flDesk", "formlabor", "button");
    el.type = "button";
    el.innerHTML = `<span class="flPc" aria-hidden="true"><span class="flCase"></span><span class="flScreen"><span class="flTime"></span><i class="flCur"></i></span><span class="flLed"></span><span class="flSlot"></span><span class="flKeys"></span></span>
      <span class="flTxt"><b class="flHead"></b><span class="flLine"></span></span>`;
    quick.after(el);
    dispatchEvent(new Event("kochbuch:sceneresize"));
    api.add(()=> el.remove());
    const scr = el.querySelector(".flScreen"), tm = el.querySelector(".flTime"), hd = el.querySelector(".flHead"), ln = el.querySelector(".flLine");
    let url = "";
    const tick = ()=>{
      const run = api.activeTimer(), list = (()=>{ try{ return JSON.parse(localStorage.getItem("kochbuch.timers") || "[]"); }catch{ return []; } })();
      if(run){
        const t = list.filter((x)=> x && x.end > Date.now()).sort((a, b)=> a.end - b.end)[0];
        url = t && t.url ? t.url : "";
        tm.textContent = api.fmtShort(run.left);
        hd.textContent = "TIMER LÄUFT";
        ln.textContent = [run.label, run.title].filter(Boolean).join(" · ");
        scr.classList.add("isTimer");
        el.disabled = !url;
        el.setAttribute("aria-label", `Timer ${run.label}: noch ${api.fmtShort(run.left)}${url ? ". Kochmodus öffnen" : ""}`);
      } else {
        url = "";
        tm.textContent = api.hhmm(Date.now());
        hd.textContent = "SYSTEM BEREIT";
        ln.textContent = "Kein Timer aktiv";
        scr.classList.remove("isTimer");
        el.disabled = true;
        el.setAttribute("aria-label", `Uhrzeit ${api.hhmm(Date.now())}, kein Timer aktiv`);
      }
    };
    el.addEventListener("click", ()=>{ if(url) location.href = url + (url.includes("?") ? "&" : "?") + "kochen=1"; });
    tick();
    const iv = setInterval(()=>{ if(!document.hidden) tick(); }, 1000);
    api.add(()=> clearInterval(iv));
  }

  window.KOCHBUCH_FX.formlabor = {
    start(api){
      desk(api);
      const sc = api.scene(), title = api.title();
      if(!sc || !title) return;
      const c = api.canvas(sc, "flForms"), g = c.g, list = shapes();
      let zone = null;
      const measure = ()=>{ zone = api.zone(title, sc); };
      const st = list.map(()=> ({ ox: 0, oy: 0, vx: 0, vy: 0 }));
      let last = scrollY, push = 0;
      const frame = (t, dt)=>{
        const W = c.w, H = c.h;
        if(!W || !H || !zone) return;
        g.clearRect(0, 0, W, H);
        const k = (dt || 16) / 16, S = Math.max(26, Math.min(78, zone.h * 1.05, zone.w * .48));
        const sr = sc.getBoundingClientRect(), fx = api.ptr.x - sr.left, fy = api.ptr.y - sr.top, near = performance.now() - api.ptr.t < 1500;
        const ds = scrollY - last; last = scrollY; push = push * .9 + ds * .08;
        const all = [];
        list.forEach((f, i)=>{
          const s = st[i];
          const bx = zone.x + zone.w * f.x, by = zone.y + zone.h * f.y;
          const R = f.s * S;
          if(near && !api.reduce()){
            const dx = bx + s.ox - fx, dy = by + s.oy - fy, d = Math.hypot(dx, dy) || 1;
            if(d < R * 3){ const f2 = (1 - d / (R * 3)) * 1.6; s.vx += dx / d * f2; s.vy += dy / d * f2; }
          }
          s.vx += -s.ox * .04; s.vy += (-s.oy - push * (.4 + i * .15)) * .04;
          s.vx *= .88; s.vy *= .88; s.ox += s.vx * k; s.oy += s.vy * k;
          const bob = api.reduce() ? 0 : Math.sin(t * .0011 + f.bob) * R * .12;
          const ang = api.reduce() ? 0 : t * f.vr, cx = bx + s.ox, cy = by + s.oy + bob;
          const ca = Math.cos(ang), sa = Math.sin(ang), cx2 = Math.cos(f.rx), sx2 = Math.sin(f.rx), cy2 = Math.cos(f.ry), sy2 = Math.sin(f.ry);
          f.pts.forEach((p)=>{
            let x = p[0] * ca - p[2] * sa, z = p[0] * sa + p[2] * ca, y = p[1];
            const y2 = y * cx2 - z * sx2, z2 = y * sx2 + z * cx2;
            const x3 = x * cy2 + z2 * sy2, z3 = -x * sy2 + z2 * cy2;
            const pr = 3 / (3 + z3);
            all.push({ x: cx + x3 * R * pr, y: cy + y2 * R * pr, r: p[3] * R * pr, z: z3, sh: 1 - (z3 + 1) / 2 });
          });
          // weicher Schatten unter der Form
          g.fillStyle = "rgba(22,20,18,.08)";
          g.beginPath(); g.ellipse(cx, cy + R * 1.25, R * .9, R * .14, 0, 0, TAU); g.fill();
        });
        all.sort((a, b)=> b.z - a.z).forEach((b)=> ball(g, b.x, b.y, b.r, b.sh));
      };
      const lp = api.loop(c.cv, frame);
      c.onresize = ()=>{ measure(); lp.redraw(); };
      measure();
      document.fonts?.ready?.then(()=>{ measure(); lp.redraw(); });
    },
  };
})();
