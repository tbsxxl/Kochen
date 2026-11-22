// Skin „zweistaedte“ – Kopf der Startseite: echtes Stimmungsfoto (Neonschilder in einer dunklen Gasse, mit Dunst), gemeinsamer Aufbau in cx-hero.js
// (Dez. 2026, dritte Fassung: Besitzer – „gezeichnete Teile wirken billig“). Foto-Nachweis in assets/skins/fotos/quellen.txt.
(()=>{
  "use strict";
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });
  window.KOCHBUCH_FX.zweistaedte = {
    start(api){
      if(!api.home()) return;
      load(api).then(()=>{ if(document.documentElement.classList.contains("skin-zweistaedte")) window.KOCHBUCH_CX(api, { skin: "zweistaedte", img: "zweistaedte", pos: "50% 40%", down: "Heute in der Stadt", credit: "Benlisquare, CC BY-SA 4.0", fx: "haze" }); });
    },
  };
})();
