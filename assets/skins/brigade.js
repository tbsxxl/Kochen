// Skin „brigade“ – Kopf der Startseite (Dez. 2026, vierte Fassung): 3D-Szene brigade-3d.js (Edelstahl-Pass mit Wärmelampen, echte
// Rezeptfotos als Bestellungen an der Bonschiene mit blauem Malerband) über cx-hero.js; ohne Grafikkarte heller Edelstahl-Verlauf.
(()=>{
  "use strict";
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });
  window.KOCHBUCH_FX.brigade = {
    start(api){
      if(!api.home()) return;
      load(api).then(()=>{ if(document.documentElement.classList.contains("skin-brigade")) window.KOCHBUCH_CX(api, { skin: "brigade", scene: "brigade", down: "Heute auf dem Pass", fx: "steam", dateExtra: " \u00b7 Service l\u00e4uft" }); });
    },
  };
})();
