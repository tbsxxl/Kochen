// Skin „brandbrief“ (Dez. 2026, neu; Entwurf I aus der Zauberschule-Runde mit bencium-innovative, vom Besitzer als eigener Skin gewünscht;
// docs/skins/brandbrief.md): Ein Brief, der schreit. Signalrot, eine Schriftfarbe, alles versal in schmaler, fetter Grotesk; der Name des
// Tagesgerichts so groß, dass er aus dem Bild läuft. Startseite: Kopf .bbrHero (Name, Datum, Heute, Gericht, Kategorien, Alle Rezepte).
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  function hero(api){
    const host = document.querySelector(".homeGreeting"); if(!host || host.querySelector(".bbrHero")) return;
    let counts = {}, total = 0;
    const cc = document.getElementById("homeCatCount");
    try{ counts = JSON.parse(cc?.textContent || "{}"); total = Number(cc?.dataset.total) || 0; }catch{}
    const cats = Object.entries(counts).sort((a, b)=> b[1] - a[1]).slice(0, 4);
    const link = document.getElementById("todayLink");
    const path = link ? new URL(link.href, location.href).pathname : "";
    const r = api.recipes().find((x)=> x.u === path) || {};
    const title = document.getElementById("todayTitle")?.textContent.trim() || r.t || "";
    const date = new Date().toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
    const words = title.split(/\s+/).filter(Boolean);
    const el = document.createElement("div");
    el.className = "bbrHero";
    el.innerHTML = `<p class="bbrName">Tobis Kochbuch</p><p class="bbrDate">${esc(date)}</p>
      ${title ? `<a class="bbrToday" href="${esc(path)}" aria-label="Heute für dich: ${esc(title)}"><span class="bbrHeute" aria-hidden="true">Heute für dich</span>${words.map((w)=> `<span class="bbrT" aria-hidden="true">${esc(w)}</span>`).join("")}${r.s ? `<span class="bbrSub" aria-hidden="true">${esc(r.s)}</span>` : ""}${r.z ? `<span class="bbrMeta" aria-hidden="true">${esc(r.z)}</span>` : ""}</a>` : ""}
      <a class="bbrKat" href="/kategorien/">Kategorien</a>
      ${cats.map((c)=> `<a class="bbrCat" href="/rezeptindex/?kategorie=${encodeURIComponent(c[0])}">${esc(c[0])}<small>${c[1]}</small></a>`).join("")}
      <a class="bbrAll" href="/rezeptindex/">Alle ${total || ""} Rezepte</a>`;
    const brand = host.querySelector(".homeBrand"); if(brand) brand.after(el); else host.prepend(el);
    api.add(()=> el.remove());
    document.body.classList.add("bbrHome"); api.add(()=> document.body.classList.remove("bbrHome"));
  }

  window.KOCHBUCH_FX.brandbrief = {
    start(api){ if(api.home()) hero(api); },
  };
})();
