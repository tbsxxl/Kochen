// Skin „jahr3000“ – Kopf der Startseite (Dez. 2026, vierte Fassung): 3D-Szene jahr3000-3d.js (Zukunftsstadt im Comic-Stil mit
// Röhrenbahnen und fliegenden Autos) über cx-hero.js; ohne Grafikkarte Dämmerungs-Verlauf.
(()=>{
  "use strict";
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });
  window.KOCHBUCH_FX.jahr3000 = {
    start(api){
      if(!api.home()) return;
      load(api).then(()=>{ if(document.documentElement.classList.contains("skin-jahr3000")) window.KOCHBUCH_CX(api, { skin: "jahr3000", scene: "jahr3000", down: "Heute aus dem Men\u00fc-o-mat", dateExtra: " 3026" }); });
    },
  };
})();
