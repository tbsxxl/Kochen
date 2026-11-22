// Skin „akte“ – Kopf der Startseite: echtes Stimmungsfoto (Leuchtturm im Sturm, mit Regen und Wetterleuchten), gemeinsamer Aufbau in cx-hero.js
// (Dez. 2026, dritte Fassung: Besitzer – „gezeichnete Teile wirken billig“). Foto-Nachweis in assets/skins/fotos/quellen.txt.
(()=>{
  "use strict";
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });
  window.KOCHBUCH_FX.akte = {
    start(api){
      if(!api.home()) return;
      load(api).then(()=>{ if(document.documentElement.classList.contains("skin-akte")) window.KOCHBUCH_CX(api, { skin: "akte", img: "akte", pos: "50% 50%", down: "Der Fall des Tages", credit: "Wikichops, CC BY-SA 4.0", fx: "rain" }); });
    },
  };
})();
