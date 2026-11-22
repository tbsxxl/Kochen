// Skin „jahr3000“ – Kopf der Startseite: echtes Stimmungsfoto (leuchtende Hochhausstadt bei Nacht), gemeinsamer Aufbau in cx-hero.js
// (Dez. 2026, dritte Fassung: Besitzer – „gezeichnete Teile wirken billig“). Foto-Nachweis in assets/skins/fotos/quellen.txt.
(()=>{
  "use strict";
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });
  window.KOCHBUCH_FX.jahr3000 = {
    start(api){
      if(!api.home()) return;
      load(api).then(()=>{ if(document.documentElement.classList.contains("skin-jahr3000")) window.KOCHBUCH_CX(api, { skin: "jahr3000", img: "jahr3000", pos: "50% 50%", down: "Heute aus dem Men\u00fc-o-mat", credit: "Gonzalo Pineda Zuniga, CC BY 2.0", dateExtra: " 3026" }); });
    },
  };
})();
