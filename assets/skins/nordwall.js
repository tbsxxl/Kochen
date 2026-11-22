// Skin „nordwall“ – Kopf der Startseite (Dez. 2026, vierte Fassung): 3D-Szene nordwall-3d.js (Uhrwerk-Karte, Armillarsphäre, Zahnrad-Türme)
// über den gemeinsamen Aufbau in cx-hero.js; ohne Grafikkarte dunkler Verlauf mit Schnee.
(()=>{
  "use strict";
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });
  window.KOCHBUCH_FX.nordwall = {
    start(api){
      load(api).then(()=>{ if(document.documentElement.classList.contains("skin-nordwall")) if(api.home()) window.KOCHBUCH_CX(api, { skin: "nordwall", scene: "nordwall", cls: "nwHero", down: "Heute an der Tafel", fx: "snow" }); else window.KOCHBUCH_CX_HEAD(api, { skin: "nordwall", scene: "nordwall" }); });
    },
  };
})();
