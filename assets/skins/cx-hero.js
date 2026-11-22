// Gemeinsamer Kopf der Serien-Skins (Dez. 2026, vierte Fassung – Besitzer: „soll hochwertig und erkennbar sein, aus welchem
// Universum es kommt“): eine 3D-Szene je Skin (assets/skins/<skin>-3d.js, Option `scene`) über die ganze Fläche, darüber der Titel.
// Ohne Grafikkarte ein ruhiger Verlauf (.cxPoster, Farben in der Skin-CSS) mit Licht-Teilchen (Schnee, Regen, Glut, Dampf, Dunst).
// Geladen von den Skin-Dateien, meldet sich als window.KOCHBUCH_CX(api, opts).
(()=>{
  "use strict";
  if(window.KOCHBUCH_CX) return;
  const TAU = Math.PI * 2;
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  // Licht-Teilchen über dem Foto
  const FX = {
    snow(n){ return Array.from({ length: n || 140 }, ()=> ({ x: Math.random(), y: Math.random(), z: .3 + Math.random() * .7, ph: Math.random() * TAU })); },
    step: {
      snow(g, P, w, h, t, k, still){ P.forEach((p)=>{ if(!still){ p.y += .0006 * p.z * k; p.x += (.0003 + Math.sin(t * .0007 + p.ph) * .0004) * p.z * k; if(p.y > 1){ p.y = -.02; p.x = Math.random(); } if(p.x > 1.02) p.x = -.02; } g.fillStyle = `rgba(240,245,250,${.3 + p.z * .55})`; g.beginPath(); g.arc(p.x * w, p.y * h, .7 + p.z * 2.2, 0, TAU); g.fill(); }); },
      rain(g, P, w, h, t, k, still, st){ if(!still){ st.n = (st.n ?? 3500) - k; if(st.n < 0){ st.f = 1; st.n = 5000 + Math.random() * 8000; } st.f = (st.f || 0) * .9; } if(st.f > .02){ g.fillStyle = `rgba(210,225,240,${st.f * .28})`; g.fillRect(0, 0, w, h); }
        g.strokeStyle = "rgba(200,215,230,.32)"; g.lineWidth = 1; g.beginPath(); P.forEach((p)=>{ if(!still){ p.y += .0018 * k * p.z; p.x += .0005 * k * p.z; if(p.y > 1){ p.y = -.05; p.x = Math.random(); } if(p.x > 1) p.x -= 1; } const x = p.x * w, y = p.y * h, L = 10 + p.z * 18; g.moveTo(x, y); g.lineTo(x + L * .3, y + L); }); g.stroke(); },
      motes(g, P, w, h, t, k, still){ g.globalCompositeOperation = "lighter"; P.forEach((p)=>{ if(!still){ p.y -= .00012 * k * p.z; if(p.y < -.02){ p.y = 1.02; p.x = Math.random(); } } const x = p.x * w + Math.sin(t * .0006 + p.ph) * 14, y = p.y * h, a = (.25 + .6 * Math.abs(Math.sin(t * .0015 + p.ph))) * p.z, r = 2 + p.z * 5; const q = g.createRadialGradient(x, y, 0, x, y, r); q.addColorStop(0, `rgba(255,205,130,${a})`); q.addColorStop(1, "rgba(255,190,110,0)"); g.fillStyle = q; g.fillRect(x - r, y - r, r * 2, r * 2); }); g.globalCompositeOperation = "source-over"; },
      steam(g, P, w, h, t, k, still){ P.forEach((p)=>{ if(!still){ p.y -= .00016 * k * p.z; if(p.y < .3){ p.y = 1; p.x = Math.random(); } } const a = Math.sin((1 - p.y) / .7 * Math.PI) * .1 * p.z, x = p.x * w + Math.sin(t * .0008 + p.ph) * 20, y = p.y * h; g.fillStyle = `rgba(255,255,255,${Math.max(0, a)})`; g.beginPath(); g.arc(x, y, 20 + (1 - p.y) * 60, 0, TAU); g.fill(); }); },
      haze(g, P, w, h, t, k, still){ for(let i = 0; i < 3; i++){ const x = ((t * .008 * (i + 1) + i * w * .5) % (w * 1.6)) - w * .3, y = h * (.62 + i * .1); const q = g.createRadialGradient(x, y, 0, x, y, w * .5); q.addColorStop(0, "rgba(120,220,170,.10)"); q.addColorStop(1, "rgba(120,220,170,0)"); g.save(); g.translate(x, y); g.scale(1, .3); g.translate(-x, -y); g.fillStyle = q; g.fillRect(x - w * .5, y - w * .5, w, w); g.restore(); } },
    },
  };

  window.KOCHBUCH_CX = function(api, o){
    const host = document.querySelector(".homeGreeting"); if(!host) return;
    const d = new Date(), a = document.getElementById("todayLink");
    const el = api.bit(`cxHero cxPhoto ${o.cls || ""}`, o.skin);
    const date = d.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" }) + (o.dateExtra || "");
    const use3d = o.scene && api.gpu();
    const media = use3d ? `<div class="cxImgWrap cxPoster"></div>` : o.img ? `<div class="cxImgWrap"><img class="cxImg" src="/assets/skins/fotos/${o.img}.jpg?v=1" alt="" decoding="async" style="object-position:${o.pos || "50% 50%"}"></div>` : `<div class="cxImgWrap cxPoster"></div>`;
    el.innerHTML = `${media}
      <div class="cxShade" aria-hidden="true"></div>
      <div class="cxTitle"><span class="cxKick">Tobis</span><span class="cxBig">Kochbuch</span><span class="cxRule" aria-hidden="true"><i></i></span><span class="cxDate">${esc(date)}</span></div>
      ${a ? `<a class="cxDown" href="#todayLink">${esc(o.down || "Heute")}</a>` : ""}
      ${o.credit && !use3d ? `<small class="cxCredit">Foto: ${esc(o.credit)}</small>` : ""}`;
    host.prepend(el); api.add(()=> el.remove());
    document.body.classList.add("cxHome"); api.add(()=> document.body.classList.remove("cxHome"));
    const wrap = el.querySelector(".cxImgWrap"), tl = el.querySelector(".cxTitle");
    api.on(window, "scroll", ()=>{
      if(api.reduce()) return;
      const p = Math.min(1, scrollY / (innerHeight * .6));
      tl.style.opacity = (1 - p).toFixed(3); tl.style.transform = `translate3d(0,${(scrollY * .35).toFixed(1)}px,0)`;
      wrap.style.transform = `translate3d(0,${(Math.min(scrollY, innerHeight) * .25).toFixed(1)}px,0)`;
    }, { passive: true });
    if(use3d){
      const cv = document.createElement("canvas"); cv.className = "cxGL"; cv.setAttribute("aria-hidden", "true");
      wrap.appendChild(cv);
      import(`/assets/skins/${o.scene}-3d.js?v=${api.ver}`).then((mod)=>{
        if(!cv.isConnected) return;
        const three = mod.create(cv, { recipes: api.recipes() }); api.add(()=> three.dispose());
        const fit = ()=>{ const r = cv.getBoundingClientRect(); if(r.width) three.resize(r.width, r.height, Math.min(2, devicePixelRatio || 1)); lp.redraw(); };
        const lp = api.loop(cv, (t, dt)=>{
          const r = el.getBoundingClientRect();
          three.render(t, dt || 16, api.reduce(), { scroll: Math.min(1, Math.max(0, -r.top / Math.max(1, r.height))), px: (api.ptr.x / innerWidth - .5) * 2, py: (api.ptr.y / innerHeight - .5) * 2, near: performance.now() - api.ptr.t < 3000 });
        });
        const ro = new ResizeObserver(fit); ro.observe(cv); api.add(()=> ro.disconnect()); fit();
      }).catch((e)=> console.warn("Kopf 3D:", e));
    }
    if(o.fx && !use3d){
      const c = api.canvas(el, "cxFx"), P = FX.snow(o.fx === "rain" ? 180 : o.fx === "motes" ? 40 : o.fx === "steam" ? 26 : 140), st = {};
      api.loop(c.cv, (t, dt)=>{ if(!c.w) return; c.g.clearRect(0, 0, c.w, c.h); FX.step[o.fx](c.g, P, c.w, c.h, t, dt || 16, api.reduce(), st); });
    }
  };
})();
