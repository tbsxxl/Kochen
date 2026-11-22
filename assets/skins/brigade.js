// Skin „brigade“ – Kopf der Startseite: echtes Stimmungsfoto (echte Restaurantküche mit Dampf), gemeinsamer Aufbau in cx-hero.js
// (Dez. 2026, dritte Fassung: Besitzer – „gezeichnete Teile wirken billig“). Foto-Nachweis in assets/skins/fotos/quellen.txt.
(()=>{
  "use strict";
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });
  window.KOCHBUCH_FX.brigade = {
    start(api){
      if(!api.home()) return;
      load(api).then(()=>{ if(document.documentElement.classList.contains("skin-brigade")) window.KOCHBUCH_CX(api, { skin: "brigade", img: "brigade", pos: "50% 45%", down: "Heute auf dem Pass", credit: "Colin & Sarah Northway, CC BY 2.0", fx: "steam", dateExtra: " \u00b7 Service l\u00e4uft" }); });
    },
  };
})();
