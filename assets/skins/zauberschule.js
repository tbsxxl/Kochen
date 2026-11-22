// Skin „zauberschule“ – Kopf der Startseite (Dez. 2026, vierte Fassung): 3D-Szene zauberschule-3d.js (Halle mit Sternendecke und
// schwebenden Kerzen) über cx-hero.js; ohne Grafikkarte dunkler Verlauf mit Lichtpunkten.
(()=>{
  "use strict";
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });
  window.KOCHBUCH_FX.zauberschule = {
    start(api){
      if(!api.home()) return;
      load(api).then(()=>{ if(document.documentElement.classList.contains("skin-zauberschule")) window.KOCHBUCH_CX(api, { skin: "zauberschule", scene: "zauberschule", down: "Heute in der Gro\u00dfen Halle", fx: "motes" }); });
    },
  };
})();
