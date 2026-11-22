// Skin „insel“ – Kopf der Startseite: echtes Stimmungsfoto (Palmen vor dem Sonnenuntergang, mit Glühwürmchen), gemeinsamer Aufbau in cx-hero.js
// (Dez. 2026, dritte Fassung: Besitzer – „gezeichnete Teile wirken billig“). Foto-Nachweis in assets/skins/fotos/quellen.txt.
(()=>{
  "use strict";
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });
  window.KOCHBUCH_FX.insel = {
    start(api){
      if(!api.home()) return;
      load(api).then(()=>{ if(document.documentElement.classList.contains("skin-insel")) window.KOCHBUCH_CX(api, { skin: "insel", img: "insel", pos: "50% 60%", down: "Heute auf der Insel", credit: "Ray in Manila, CC BY 2.0", fx: "motes" }); });
    },
  };
})();
