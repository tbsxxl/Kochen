// Skin „Bildband“ (Dez. 2026, mehr eigener Charakter): Start = Titelblatt eines Food-Magazins (Foto über die ganze Fläche, riesiger
// Titelschriftzug, Titelzeilen, Heftnummer); Rezeptliste = „Inhalt“ mit Seitenzahlen und abwechselnd großen Aufmacher-Fotos;
// Rezeptseite = Aufmacher mit Kapitelnummer und Untertitel als Zitat.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  function cover(api){
    const g = document.querySelector(".homeGreeting"); if(!g) return;
    const a = document.getElementById("todayLink"), title = a?.querySelector(".homeFeaturedTitle")?.textContent.trim();
    if(!title) return;
    const img = a.querySelector("img")?.currentSrc || a.querySelector("img")?.src || "";
    const all = api.recipes(), d = new Date();
    const lines = all.filter((r)=> r.t !== title).slice((d.getDate() * 3) % Math.max(1, all.length - 3)).slice(0, 3);
    const el = api.bit("bdCover", "bildband");
    el.innerHTML = `${img ? `<img class="bdCoverImg" src="${esc(img)}" alt="">` : ""}<div class="bdMast"><span>Nº ${d.getDate()} · ${esc(d.toLocaleDateString("de-DE", { month: "long", year: "numeric" }))}</span><b>Tobis</b></div>
      <a class="bdLead" href="${esc(a.getAttribute("href"))}"><small>Titelgeschichte</small><b>${esc(title)}</b></a>
      <ul class="bdLines">${lines.map((r)=> `<li><a href="${esc(r.u)}">${esc(r.t)}</a></li>`).join("")}</ul>`;
    g.after(el); api.add(()=> el.remove());
    document.body.classList.add("bdHome"); api.add(()=> document.body.classList.remove("bdHome"));
  }

  function contents(api){
    const grid = document.getElementById("recipeGrid"); if(!grid) return;
    grid.querySelectorAll(".linkCard").forEach((c, i)=> c.style.setProperty("--pg", `"${String(8 + i * 6).padStart(3, "0")}"`));
    if(!document.querySelector(".bdInhalt")){
      const h = api.bit("bdInhalt", "bildband", "p"); h.textContent = "Inhalt";
      grid.before(h); api.add(()=> h.remove());
    }
    document.documentElement.classList.add("bdList"); api.add(()=> document.documentElement.classList.remove("bdList"));
  }

  function opener(api){
    const D = window.RECIPE_DATA, body = document.querySelector(".recipePageBody"); if(!D || !body || !D.subtitle) return;
    const q = api.bit("bdQuote", "bildband", "blockquote"); q.textContent = D.subtitle;
    body.prepend(q); api.add(()=> q.remove());
  }

  window.KOCHBUCH_FX.bildband = { start(api){ if(api.home()) cover(api); contents(api); opener(api); }, refresh(api){ contents(api); } };
})();
