// Skin „nordwall“ – Kopf der Startseite: echtes Stimmungsfoto (Eiswand eines Gletschers, abgedunkelt zur Nacht, mit Schnee), gemeinsamer Aufbau in cx-hero.js
// (Dez. 2026, dritte Fassung: Besitzer – „gezeichnete Teile wirken billig“). Foto-Nachweis in assets/skins/fotos/quellen.txt.
(()=>{
  "use strict";
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });
  window.KOCHBUCH_FX.nordwall = {
    start(api){
      if(!api.home()) return;
      load(api).then(()=>{ if(document.documentElement.classList.contains("skin-nordwall")) window.KOCHBUCH_CX(api, { skin: "nordwall", img: "nordwall", cls: "nwHero", pos: "40% 50%", down: "Heute an der Tafel", credit: "Felipe.alarcon, CC BY-SA 3.0", fx: "snow" }); });
    },
  };
})();
