// Skin „Tiefsee“ (Dez. 2026, zweiter Neubau nach genauem Vergleich mit dem Vorbild – Labor-Seite einer Agentur): Startseite = ein
// stehender Raum: riesiger Schriftzug, davor eine Kugel aus Spiegelscherben mit rosa Qualle (tiefsee-3d.js). Scrollen (der Raum bleibt
// stehen, `.tsPin`) und Gedrückthalten sprengen die Kugel, unten füllt sich der Balken „Bereit für den Herd?“. Weißer Kreis mit
// Eckklammern in der Mitte. Ohne echte Grafikkarte bleibt der Schriftzug ohne Kugel.
(()=>{
  "use strict";
  async function hero(api){
    const host = document.querySelector(".homeGreeting");
    if(!host) return;
    const gpu = api.gpu();
    const pin = api.bit("tsPin" + (gpu ? "" : " tsNoGL"), "tiefsee");
    pin.innerHTML = `<div class="tsStage">
        <div class="tsBig" aria-hidden="true">Tobis <br>Kochbuch</div>
        ${gpu ? `<span class="tsHold" aria-hidden="true"><b>Gedrückt</b><b>halten</b></span>` : ""}
        <div class="tsBar" aria-hidden="true"><span>Bereit für den Herd?</span><span class="tsLine"><i></i></span><span>${gpu ? "Halten" : "Scrollen"}</span></div>
      </div>`;
    host.appendChild(pin);
    api.add(()=> pin.remove());
    document.body.classList.add("tsHome"); api.add(()=> document.body.classList.remove("tsHome"));
    dispatchEvent(new Event("kochbuch:sceneresize"));
    const stage = pin.querySelector(".tsStage"), big = pin.querySelector(".tsBig"), fill = pin.querySelector(".tsLine i");
    const prog = ()=>{ const r = pin.getBoundingClientRect(); return Math.max(0, Math.min(1, -r.top / Math.max(1, r.height - innerHeight))); };
    if(!gpu){ api.on(window, "scroll", ()=>{ fill.style.transform = `scaleX(${prog().toFixed(3)})`; }, { passive: true }); return; }

    const cv = document.createElement("canvas"); cv.className = "tsGL"; cv.setAttribute("aria-hidden", "true");
    stage.prepend(cv);
    const txt = document.createElement("canvas");
    try{ await document.fonts.load('400 80px "Skin Zwei"'); }catch{}
    const mod = await import(`/assets/skins/tiefsee-3d.js?v=${api.ver}`);
    if(!cv.isConnected) return;
    let three = null;
    const paint = ()=>{
      const r = cv.getBoundingClientRect(); if(!r.width) return null;
      const d = Math.min(2, devicePixelRatio || 1);
      big.classList.remove("fxDrawn");
      const gl = api.glyphs(big, stage);
      txt.width = Math.round(r.width * d); txt.height = Math.round(r.height * d);
      const g = txt.getContext("2d"); g.setTransform(d, 0, 0, d, 0, 0); g.clearRect(0, 0, r.width, r.height);
      g.font = gl.font; g.fillStyle = gl.color; gl.list.forEach((q)=> g.fillText(q.ch, q.x, q.y));
      big.classList.add("fxDrawn");
      const br = big.getBoundingClientRect(), s = stage.getBoundingClientRect();
      return { w: r.width, h: r.height, d, cx: r.width / 2, cy: br.top - s.top + br.height / 2, R: Math.min(br.height * .3 + 24, r.width * .3, 200) };
    };
    const fit = ()=>{
      const m = paint(); if(!m) return;
      if(!three){ three = mod.create(cv, txt); api.add(()=> three.dispose()); }
      three.resize(m.w, m.h, m.d, m.cx, m.cy, m.R); lp?.redraw();
    };
    let holding = false;
    const lp = api.loop(cv, (t, dt)=>{
      if(!three) return;
      const p = prog();
      three.burst = Math.min(1.2, p * 1.3);
      if(holding) three.hold = Math.min(1.4, three.hold + .03);
      fill.style.transform = `scaleX(${Math.min(1, Math.max(p, three.hold / 1.4)).toFixed(3)})`;
      three.render(t, dt, api.reduce());
    });
    const ro = new ResizeObserver(fit); ro.observe(cv); api.add(()=> ro.disconnect());
    fit();
    document.fonts?.ready?.then(fit);
    api.on(stage, "pointerdown", (e)=>{ if(!e.target.closest("a, button, input")){ holding = true; stage.classList.add("isHold"); } });
    const up = ()=>{ holding = false; stage.classList.remove("isHold"); };
    api.on(window, "pointerup", up); api.on(window, "pointercancel", up);
    api.on(stage, "contextmenu", (e)=> e.preventDefault());
  }

  // Untertitel der Rezeptliste als Milchglas-Kapsel
  function pill(api){
    const t = document.querySelector("body.fieldPage:not(.layout-home) .pageTitleBlock .h1");
    if(!t || !document.getElementById("recipeGrid")) return;
    const el = api.bit("tsPill", "tiefsee", "p");
    const n = document.querySelectorAll("#recipeGrid .linkCard").length;
    el.textContent = `${n} Rezepte aus Tobis Küche – zum Nachkochen, Planen und Einkaufen.`;
    t.after(el); api.add(()=> el.remove());
  }

  window.KOCHBUCH_FX.tiefsee = {
    start(api){
      pill(api);
      if(api.home()) hero(api).catch((e)=> console.warn("Tiefsee 3D:", e));
    },
  };
})();
