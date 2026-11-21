// Skin „Formlabor“ (Nov. 2026 neu nach Vergleich mit dem Vorbild – einer Studio-Seite mit oranger Schleife auf Schokobraun):
// Startseite mit 3D-Bühne (formlabor-3d.js: orange Schleife, schwebende Küchen-Dinge; Ziehen dreht) und darunter einer nummerierten
// Kategorienliste „(01) Pasta …“ im Stil des Vorbilds (antippbar). Ohne echte Grafikkarte nur die Liste.
(()=>{
  "use strict";
  const PICK = ["Schnell", "Pasta", "Curry", "Schmorgerichte", "Burger & Sandwiches", "Süßes & Backen"];

  function list(api, after){
    let cats = []; try{ cats = JSON.parse(document.getElementById("homeCats")?.textContent || "[]"); }catch{}
    const names = PICK.filter((c)=> cats.includes(c));
    if(!names.length) return null;
    const el = api.bit("flList", "formlabor", "nav");
    el.setAttribute("aria-label", "Kategorien");
    el.innerHTML = `<p class="flKicker">Kochen als Handwerk <span>[ aus Tobis Küche ]</span></p>` + names.map((c, i)=>{
      const w = c.split(" "), last = w.pop();
      const name = w.length ? `${w.join(" ")} <em>${last}</em>` : (i % 2 ? `<em>${last}</em>` : last);
      return `<a class="flRow" href="/rezeptindex/?kategorie=${encodeURIComponent(c)}"><span class="flNum">(${String(i + 1).padStart(2, "0")})</span><span class="flName">${name}</span></a>`;
    }).join("");
    after.after(el);
    api.add(()=> el.remove());
    return el;
  }

  async function stage3d(api, quick){
    const sc = api.scene();
    const stage = api.bit("flStage", "formlabor");
    quick.after(stage);
    api.add(()=> stage.remove());
    dispatchEvent(new Event("kochbuch:sceneresize"));
    const cv = document.createElement("canvas"); cv.className = "fxCanvas flGL"; cv.setAttribute("aria-hidden", "true");
    sc.appendChild(cv); api.add(()=> cv.remove());
    try{ await document.fonts.load('italic 400 40px "Fraunces"'); }catch{}
    const mod = await import(`/assets/skins/formlabor-3d.js?v=${api.ver}`);
    if(!cv.isConnected) return stage;
    const three = mod.create(cv);
    api.add(()=> three.dispose());
    const fit = ()=>{
      const r = cv.getBoundingClientRect(), s = sc.getBoundingClientRect(), st = stage.getBoundingClientRect();
      if(!r.width) return;
      const top = st.top - s.top;
      three.resize(r.width, r.height, devicePixelRatio || 1, top + st.height / 2, st.height);
      const m = `linear-gradient(to bottom, transparent ${Math.max(0, top - 30)}px, #000 ${top + 30}px)`;
      cv.style.webkitMaskImage = m; cv.style.maskImage = m;
      lp?.redraw();
    };
    const ro = new ResizeObserver(fit); ro.observe(cv); ro.observe(stage); api.add(()=> ro.disconnect());
    const lp = api.loop(cv, (t, dt)=> three.render(t, dt, api.reduce()));
    fit();
    let lastX = null, lastY = scrollY;
    api.on(stage, "pointerdown", (e)=>{ lastX = e.clientX; });
    api.on(stage, "pointermove", (e)=>{ if(lastX === null) return; three.drag = (e.clientX - lastX) * .006; lastX = e.clientX; if(api.reduce()) lp.redraw(); });
    api.on(window, "pointerup", ()=>{ lastX = null; });
    api.on(window, "scroll", ()=>{ three.drag += (scrollY - lastY) * .0008; three.tilt = Math.min(.5, scrollY / 900); lastY = scrollY; }, { passive: true });
    return stage;
  }

  window.KOCHBUCH_FX.formlabor = {
    async start(api){
      const quick = document.querySelector(".homeQuick");
      if(!api.home() || !quick) return;
      let after = quick;
      if(api.gpu()){ try{ after = await stage3d(api, quick) || quick; }catch(e){ console.warn("Formlabor 3D:", e); } }
      list(api, after);
      dispatchEvent(new Event("kochbuch:sceneresize"));
    },
  };
})();
