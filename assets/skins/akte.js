// Skin „akte“ – Kopf der Startseite (Dez. 2026, vierte Fassung): 3D-Szene akte-3d.js (Felseninsel im Sturm mit Leuchtturm und
// Anstalt auf der Klippe) über cx-hero.js; ohne Grafikkarte dunkler Verlauf mit Regen und Wetterleuchten.
(()=>{
  "use strict";
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });
  window.KOCHBUCH_FX.akte = {
    start(api){
      if(!api.home()) return;
      load(api).then(()=>{ if(document.documentElement.classList.contains("skin-akte")) window.KOCHBUCH_CX(api, { skin: "akte", scene: "akte", down: "Der Fall des Tages", fx: "rain" }); });
    },
  };
})();
