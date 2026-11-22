// Skin „zauberschule“ – Kopf der Startseite (Dez. 2026, vierte Fassung): 3D-Szene zauberschule-3d.js (Halle mit Sternendecke und
// schwebenden Kerzen) über cx-hero.js; ohne Grafikkarte dunkler Verlauf mit Lichtpunkten.
(()=>{
  "use strict";
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });
  window.KOCHBUCH_FX.zauberschule = {
    start(api){
      load(api).then(()=>{ if(document.documentElement.classList.contains("skin-zauberschule")) if(api.home()) window.KOCHBUCH_CX(api, { skin: "zauberschule", scene: "zauberschule", down: "Heute in der Gro\u00dfen Halle", fx: "motes" }); else window.KOCHBUCH_CX_HEAD(api, { skin: "zauberschule", scene: "zauberschule" }); });
    },
  };
})();
