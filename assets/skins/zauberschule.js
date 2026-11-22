// Skin „Zauberschule“ (Dez. 2026, mehr eigener Charakter): die Startseite ist die Titelseite einer Zeitung („Die Küchenpost“) mit
// Schlagzeile = Tagesgericht, Spalten und Bild, das sich ganz leicht bewegt; die Rezeptliste ist eine Zeitungsseite in Spalten mit
// Überschriften; die Rezeptseite ein Artikel mit Initiale.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  function home(api){
    const g = document.querySelector(".homeGreeting"); if(!g) return;
    const a = document.getElementById("todayLink"), title = a?.querySelector(".homeFeaturedTitle")?.textContent.trim();
    if(!title) return;
    const img = a.querySelector("img")?.currentSrc || a.querySelector("img")?.src || "";
    const meta = [...a.querySelectorAll(".recipeMeta .metaItem")].map((m)=> m.textContent.trim()).filter(Boolean);
    const d = new Date(), n = api.recipes().length;
    const el = api.bit("zpFront", "zauberschule", "article");
    el.innerHTML = `<header class="zpMast"><span>Ausgabe ${d.getDate()}·${d.getMonth() + 1}</span><b>Die Küchenpost</b><span>${n} Rezepte</span></header>
      <p class="zpDate">${esc(d.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long", year: "numeric" }))} · Wetter: gut zum Kochen</p>
      <a class="zpLead" href="${esc(a.getAttribute("href"))}"><h2>${esc(title)} sorgt für Aufsehen am Herd</h2>
      ${img ? `<figure><img src="${esc(img)}" alt=""><figcaption>Augenzeugen berichten: ${esc(meta.join(", ") || "frisch gekocht")}.</figcaption></figure>` : ""}
      <p class="zpCols">Wie aus gut unterrichteten Kreisen der Küche verlautet, steht heute ${esc(title)} auf dem Plan. Erste Kostproben fielen überaus günstig aus; man rechnet mit leeren Tellern und Bitten um Nachschlag. Unsere Redaktion empfiehlt, rechtzeitig mit dem Vorbereiten zu beginnen und den Tisch schon einmal zu decken. Weiter auf Seite 2 – oder gleich zum Rezept.</p></a>`;
    g.after(el); api.add(()=> el.remove());
  }

  function list(api){
    const grid = document.getElementById("recipeGrid"); if(!grid) return;
    const head = api.bit("zpMast zpMastSmall", "zauberschule", "header");
    head.innerHTML = `<span>Seite 2</span><b>Rezepte &amp; Rubriken</b><span>${grid.querySelectorAll(".linkCard").length} Meldungen</span>`;
    grid.before(head); api.add(()=> head.remove());
    document.documentElement.classList.add("zpList"); api.add(()=> document.documentElement.classList.remove("zpList"));
  }

  window.KOCHBUCH_FX.zauberschule = { start(api){ if(api.home()) home(api); list(api); } };
})();
