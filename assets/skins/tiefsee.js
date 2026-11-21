// Skin „Tiefsee“ (Nov. 2026 neu nach Vergleich mit dem Vorbild – einer Labor-Seite mit Glaskugel über riesiger Schrift):
// riesiger Seitentitel in schmaler Versal-Grotesk, davor eine Kugel aus spiegelnden Scherben mit einer Chrom-Qualle (tiefsee-3d.js).
// Scrollen und Gedrückthalten sprengen die Scherben. Der echte Titel bleibt fürs Vorlesen da (.fxDrawn), die Leinwand zeichnet ihn nach.
// Ohne echte Grafikkarte bleibt der normale Titel ohne Kugel.
(()=>{
  "use strict";
  async function run(api){
    const sc = api.scene(), title = api.title();
    if(!sc || !title) return;
    const cv = document.createElement("canvas"); cv.className = "fxCanvas tsGL"; cv.setAttribute("aria-hidden", "true");
    sc.appendChild(cv); api.add(()=> cv.remove());
    const txt = document.createElement("canvas");
    try{ await document.fonts.load('400 80px "Skin Zwei"'); }catch{}
    const mod = await import(`/assets/skins/tiefsee-3d.js?v=${api.ver}`);
    if(!cv.isConnected) return;
    let three = null;
    const paint = ()=>{
      const r = cv.getBoundingClientRect(); if(!r.width) return null;
      const d = Math.min(2, devicePixelRatio || 1);
      title.classList.remove("fxDrawn");
      const gl = api.glyphs(title, sc);
      txt.width = Math.round(r.width * d); txt.height = Math.round(r.height * d);
      const g = txt.getContext("2d"); g.setTransform(d, 0, 0, d, 0, 0); g.clearRect(0, 0, r.width, r.height);
      g.font = gl.font; g.fillStyle = gl.color; gl.list.forEach((q)=> g.fillText(q.ch, q.x, q.y));
      title.classList.add("fxDrawn");
      const tr = title.getBoundingClientRect(), s = sc.getBoundingClientRect();
      return { w: r.width, h: r.height, d, cx: Math.min(r.width - 40, tr.left - s.left + tr.width * .64), cy: tr.top - s.top + tr.height / 2, R: Math.min(tr.height * .72 + 34, r.width * .4, 220) };
    };
    api.add(()=> title.classList.remove("fxDrawn"));
    const fit = ()=>{
      const m = paint(); if(!m) return;
      if(!three){ three = mod.create(cv, txt); api.add(()=> three.dispose()); }
      three.resize(m.w, m.h, m.d, m.cx, m.cy, m.R); lp?.redraw();
    };
    let holding = false;
    const lp = api.loop(cv, (t, dt)=>{
      if(!three) return;
      three.burst = Math.min(1, scrollY / 240);
      if(holding) three.hold = Math.min(1.4, three.hold + .03);
      three.render(t, dt, api.reduce());
    });
    const ro = new ResizeObserver(fit); ro.observe(cv); api.add(()=> ro.disconnect());
    fit();
    document.fonts?.ready?.then(fit);
    // Gedrückthalten im Kopf (nicht auf Knöpfen/Suche) sprengt die Kugel
    const head = document.querySelector(".homeGreeting, .pageTitleBlock");
    if(head){
      api.on(head, "pointerdown", (e)=>{ if(!e.target.closest("a, button, input")) holding = true; });
      api.on(window, "pointerup", ()=>{ holding = false; });
      api.on(window, "pointercancel", ()=>{ holding = false; });
    }
  }
  window.KOCHBUCH_FX.tiefsee = {
    start(api){ if(document.body.classList.contains("fieldPage") && api.gpu()) run(api).catch((e)=> console.warn("Tiefsee 3D:", e)); },
  };
})();
