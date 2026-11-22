// Skin „zauberschule“ – Kopf der Startseite: echtes Stimmungsfoto (Schloss im Abendrot über dem See, mit schwebenden Lichtern), gemeinsamer Aufbau in cx-hero.js
// (Dez. 2026, dritte Fassung: Besitzer – „gezeichnete Teile wirken billig“). Foto-Nachweis in assets/skins/fotos/quellen.txt.
(()=>{
  "use strict";
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });
  window.KOCHBUCH_FX.zauberschule = {
    start(api){
      if(!api.home()) return;
      load(api).then(()=>{ if(document.documentElement.classList.contains("skin-zauberschule")) window.KOCHBUCH_CX(api, { skin: "zauberschule", img: "zauberschule", pos: "50% 60%", down: "Heute in der Gro\u00dfen Halle", credit: "Supratim.gre2014, CC BY-SA 4.0", fx: "motes" }); });
    },
  };
})();
