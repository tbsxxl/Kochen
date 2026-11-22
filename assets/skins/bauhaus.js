// Skin „Bauhaus“ (Dez. 2026, mehr eigener Charakter): Startseite als Komposition aus Kreis, Quadrat und Dreieck mit riesigem Datum;
// Rezeptliste als Raster aus Farbflächen mit großer Nummer, Fotos in geometrischer Form (Kreis = Fleisch, Quadrat = Gemüse,
// Dreieck = Fisch); Rezeptseite mit Foto im Kreis auf Farbfläche und senkrecht gesetzter Kategorie.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  function home(api){
    const g = document.querySelector(".homeGreeting"); if(!g) return;
    const d = new Date();
    const el = api.bit("bhComp", "bauhaus");
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = `<i class="bhC"></i><i class="bhS"></i><i class="bhT"></i><b class="bhDay">${d.getDate()}</b><span class="bhMon">${esc(d.toLocaleDateString("de-DE", { month: "long" }))}<br>${esc(d.toLocaleDateString("de-DE", { weekday: "long" }))}</span><span class="bhLine"></span>`;
    g.after(el); api.add(()=> el.remove());
  }

  function list(api){
    if(!document.getElementById("recipeGrid")) return;
    document.documentElement.classList.add("bhList"); api.add(()=> document.documentElement.classList.remove("bhList"));
  }

  function recipe(api){
    const hero = document.querySelector(".recipePageHero"), D = window.RECIPE_DATA; if(!hero || !D) return;
    const el = api.bit("bhVert", "bauhaus"); el.setAttribute("aria-hidden", "true"); el.textContent = D.category || "Rezept";
    hero.append(el); api.add(()=> el.remove());
  }

  window.KOCHBUCH_FX.bauhaus = { start(api){ if(api.home()) home(api); list(api); recipe(api); } };
})();
