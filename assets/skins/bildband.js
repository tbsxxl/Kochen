// Skin „Bildband“ (Dez. 2026, mehr eigener Charakter): Start = Titelblatt eines Food-Magazins (Foto über die ganze Fläche, riesiger
// Titelschriftzug, Titelzeilen, Heftnummer); Rezeptliste = „Inhalt“ mit Seitenzahlen und abwechselnd großen Aufmacher-Fotos;
// Rezeptseite = Aufmacher mit Kapitelnummer und Untertitel als Zitat.
// Dritte Fassung (Dez. 2026, Entwurf E „Spaltensatz“ aus bencium-innovative, docs/skins/bildband-e.md): Startseite = Heftseite .bdSpread
// (Etikett, riesiger Titel in Fraunces 800, Foto, zwei Spalten im Blocksatz mit Untertitel, Zeit und Kategorien); das Titelblatt ist raus.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  function spread(api){
    const host = document.querySelector(".homeGreeting"); if(!host || host.querySelector(".bdSpread")) return;
    let counts = {}, total = 0;
    const cc = document.getElementById("homeCatCount");
    try{ counts = JSON.parse(cc?.textContent || "{}"); total = Number(cc?.dataset.total) || 0; }catch{}
    const cats = Object.entries(counts).sort((a, b)=> b[1] - a[1]).slice(0, 4);
    const link = document.getElementById("todayLink");
    const path = link ? new URL(link.href, location.href).pathname : "";
    const r = api.recipes().find((x)=> x.u === path) || {};
    const title = document.getElementById("todayTitle")?.textContent.trim() || r.t || "";
    if(!title) return;
    const im = document.getElementById("todayImg");
    const img = im && im.getAttribute("src") ? (im.currentSrc || im.src) : "";
    const date = new Date().toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
    const el = document.createElement("div");
    el.className = "bdSpread";
    el.innerHTML = `<p class="bdsTop"><span>Tobis Kochbuch</span><span>${esc(date)}</span></p>
      <a class="bdsLead" href="${esc(path)}"><span class="bdsKick">Heute für dich</span><b class="bdsTitle">${esc(title)}</b>${img ? `<img class="bdsImg" src="${esc(img)}" alt="">` : ""}</a>
      <div class="bdsCols" lang="de"><p>${r.s ? `<b>${esc(r.s)}.</b> ` : ""}${r.z ? `Zeit: ${esc(r.z)}. ` : ""}<a href="${esc(path)}">Zum Rezept</a></p>
      <p><b>Kategorien.</b> ${cats.map((c)=> `<a href="/rezeptindex/?kategorie=${encodeURIComponent(c[0])}">${esc(c[0])}</a>&nbsp;<i>${c[1]}</i>`).join(" · ")}. <a href="/kategorien/">Alle Kategorien</a> und <a class="bdsAll" href="/rezeptindex/">alle ${total || ""} Rezepte</a>.</p></div>`;
    const brand = host.querySelector(".homeBrand"); if(brand) brand.after(el); else host.prepend(el);
    api.add(()=> el.remove());
    document.body.classList.add("bdeHome"); api.add(()=> document.body.classList.remove("bdeHome"));
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

  window.KOCHBUCH_FX.bildband = { start(api){ if(api.home()) spread(api); contents(api); opener(api); }, refresh(api){ contents(api); } };
})();
