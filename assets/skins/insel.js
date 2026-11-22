// Skin „insel“ – Kopf der Startseite (Dez. 2026, vierte Fassung): 3D-Szene insel-3d.js (Strand in der Dämmerung mit Flugzeugwrack,
// Palmen, Lagerfeuer, Meer) über cx-hero.js; ohne Grafikkarte Dämmerungs-Verlauf mit Glühwürmchen.
(()=>{
  "use strict";
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });
  window.KOCHBUCH_FX.insel = {
    start(api){
      load(api).then(()=>{ if(document.documentElement.classList.contains("skin-insel")) if(api.home()) window.KOCHBUCH_CX(api, { skin: "insel", scene: "insel", cls: "inHero", down: "Heute auf der Insel", fx: "motes" }); else window.KOCHBUCH_CX_HEAD(api, { skin: "insel", scene: "insel" }); });
    },
  };
})();
