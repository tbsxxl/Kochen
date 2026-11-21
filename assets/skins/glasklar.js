// Skin „Glasklar“ (Nov. 2026 neu nach Vergleich mit dem Vorbild – Portfolio mit Glasobjekt vor großer Schrift, dunkler Grund):
// riesiger weißer Titel auf Schwarz, davor ein Eisbrocken aus echtem 3D-Glas, der die Schrift bricht (glasklar-3d.js). Folgt dem Finger.
// Der echte Titel bleibt fürs Vorlesen da (.fxDrawn). Ohne echte Grafikkarte bleibt der normale Titel ohne Glas.
(()=>{
  "use strict";
  async function run(api){
    const sc = api.scene(), title = api.title();
    if(!sc || !title) return;
    const cv = document.createElement("canvas"); cv.className = "fxCanvas glGL"; cv.setAttribute("aria-hidden", "true");
    sc.appendChild(cv); api.add(()=> cv.remove());
    const txt = document.createElement("canvas");
    try{ await document.fonts.load('850 80px "Skin Glas"'); }catch{}
    const mod = await import(`/assets/skins/glasklar-3d.js?v=${api.ver}`);
    if(!cv.isConnected) return;
    let three = null;
    const paint = ()=>{
      const r = cv.getBoundingClientRect(); if(!r.width) return null;
      const d = Math.min(2, devicePixelRatio || 1);
      title.classList.remove("fxDrawn");
      const gl = api.glyphs(title, sc);
      txt.width = Math.round(r.width * d); txt.height = Math.round(r.height * d);
      const g = txt.getContext("2d"); g.setTransform(d, 0, 0, d, 0, 0); g.fillStyle = "#0D0D0E"; g.fillRect(0, 0, r.width, r.height);
      g.font = gl.font; g.fillStyle = gl.color; gl.list.forEach((q)=> g.fillText(q.ch, q.x, q.y));
      title.classList.add("fxDrawn");
      const tr = title.getBoundingClientRect(), s = sc.getBoundingClientRect();
      return { w: r.width, h: r.height, d, cx: Math.min(r.width - 50, tr.left - s.left + tr.width * .66), cy: tr.top - s.top + tr.height * .5, R: Math.min(tr.height * .55 + 20, r.width * .26, 170) };
    };
    api.add(()=> title.classList.remove("fxDrawn"));
    let m = null;
    const fit = ()=>{
      m = paint(); if(!m) return;
      if(!three){ three = mod.create(cv, txt); api.add(()=> three.dispose()); }
      three.resize(m.w, m.h, m.d, m.cx, m.cy, m.R); lp?.redraw();
    };
    const lp = api.loop(cv, (t, dt)=>{
      if(!three || !m) return;
      const s = sc.getBoundingClientRect(), fx = api.ptr.x - s.left, fy = api.ptr.y - s.top;
      three.follow = performance.now() - api.ptr.t < 2500 && fy > 0 && fy < m.h;
      if(three.follow) three.target(fx, fy, m.w, m.h);
      three.render(t, dt, api.reduce());
    });
    const ro = new ResizeObserver(fit); ro.observe(cv); api.add(()=> ro.disconnect());
    fit();
    document.fonts?.ready?.then(fit);
  }
  window.KOCHBUCH_FX.glasklar = {
    start(api){ if(document.body.classList.contains("fieldPage") && api.gpu()) run(api).catch((e)=> console.warn("Glasklar 3D:", e)); },
  };
})();
