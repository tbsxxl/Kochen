// Skin „zweistaedte“ – Kopf der Startseite (Dez. 2026, vierte Fassung): 3D-Szene zweistaedte-3d.js (blauer Kristall in
// Messingringen, goldene Oberstadt, grüne Unterstadt) über cx-hero.js; ohne Grafikkarte Gold-Grün-Verlauf mit Dunst.
(()=>{
  "use strict";
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });
  window.KOCHBUCH_FX.zweistaedte = {
    start(api){
      load(api).then(()=>{ if(document.documentElement.classList.contains("skin-zweistaedte")) if(api.home()) window.KOCHBUCH_CX(api, { skin: "zweistaedte", scene: "zweistaedte", down: "Heute in der Stadt", fx: "haze" }); else window.KOCHBUCH_CX_HEAD(api, { skin: "zweistaedte", scene: "zweistaedte" }); });
    },
  };
})();
