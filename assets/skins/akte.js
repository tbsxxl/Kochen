// Skin „Akte“ (Dez. 2026, mehr eigener Charakter): Start = aufgeschlagene Mappe „Fall des Tages“ mit angeklammertem Sofortbild und
// Stempel; Rezeptliste = Stapel Mappen mit Reitern (Aktenzeichen) und Sofortbild; Rezeptseite: Sofortbild mit Büroklammer, Bericht-Kopf.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  function home(api){
    const g = document.querySelector(".homeGreeting"); if(!g) return;
    const a = document.getElementById("todayLink"), title = a?.querySelector(".homeFeaturedTitle")?.textContent.trim();
    if(!title) return;
    const img = a.querySelector("img")?.currentSrc || a.querySelector("img")?.src || "";
    const meta = [...a.querySelectorAll(".recipeMeta .metaItem")].map((m)=> m.textContent.trim()).filter(Boolean);
    const d = new Date();
    const el = api.bit("akFolder", "akte");
    el.innerHTML = `<span class="akTab">Fall des Tages</span><a class="akSheet" href="${esc(a.getAttribute("href"))}">
      ${img ? `<span class="akPola"><img src="${esc(img)}" alt=""><i>Beweisstück A</i></span>` : ""}
      <span class="akType"><b>Betreff:</b> ${esc(title)}<br><b>Datum:</b> ${d.toLocaleDateString("de-DE")}<br><b>Dauer:</b> ${esc(meta[0] || "unbekannt")}<br><b>Beteiligte:</b> ${esc(meta[1] || "–")}<br><b>Befund:</b> dringend nachkochen</span>
      <span class="akStamp">Geprüft</span></a>`;
    g.after(el); api.add(()=> el.remove());
  }

  function list(api){
    const grid = document.getElementById("recipeGrid"); if(!grid) return;
    const y = new Date().getFullYear();
    grid.querySelectorAll(".linkCard").forEach((c, i)=> c.style.setProperty("--az", `"AZ ${y}-${String(i + 1).padStart(3, "0")}"`));
    document.documentElement.classList.add("akList"); api.add(()=> document.documentElement.classList.remove("akList"));
  }

  window.KOCHBUCH_FX.akte = { start(api){ if(api.home()) home(api); list(api); }, refresh(api){ list(api); } };
})();
