// Skin „insel“ – Startseite (Dez. 2026, fünfte Fassung, Richtung F2 „Funkspruch“ + Countdown aus C2, bencium-innovative, vom Besitzer
// gewählt; docs/skins/insel-f2.md): Ein Funkspruch, der seit Jahren in Schleife läuft – alles zentriert in Funk-Schrift, der Name des
// Gerichts wiederholt sich und wird schwächer (Echos nur Schmuck, aria-hidden). Alles mit Zeit leuchtet in Bernstein wie der Rechner im
// Bunker: die Kochdauer als riesiger Countdown oben. Dahinter die 3D-Insel (insel-3d.js) unter einem dunklen Schleier.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });
  // „ca. 1 Std 30 Min“ → ["1:30", "Std"], „35–45 Min“ → ["35–45", "Min"], „ca. 5 Std“ → ["5", "Std"]
  function clock(z){
    const t = String(z || "").split("·")[0].replace(/ca\.\s*/i, "").trim();
    const hm = t.match(/(\d+)\s*Std\s*(\d+)\s*Min/i); if(hm) return [`${hm[1]}:${hm[2].padStart(2, "0")}`, "Std"];
    const m = t.match(/^([\d–-]+)\s*(Std|Min)/i); return m ? [m[1], m[2]] : null;
  }

  function radio(api){
    const host = document.querySelector(".homeGreeting"); if(!host || host.querySelector(".isRadio")) return;
    let counts = {}, total = 0;
    const cc = document.getElementById("homeCatCount");
    try{ counts = JSON.parse(cc?.textContent || "{}"); total = Number(cc?.dataset.total) || 0; }catch{}
    const cats = Object.entries(counts).sort((a, b)=> b[1] - a[1]).slice(0, 4);
    const link = document.getElementById("todayLink");
    const path = link ? new URL(link.href, location.href).pathname : "";
    const r = api.recipes().find((x)=> x.u === path) || {};
    const title = document.getElementById("todayTitle")?.textContent.trim() || r.t || "";
    const date = new Date().toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
    const ck = clock(r.z);
    const el = document.createElement("div");
    el.className = "isRadio";
    el.innerHTML = `<p class="isTop">Tobis Kochbuch · ${esc(date)}</p>
      ${title ? `<a class="isToday" href="${esc(path)}">
        ${ck ? `<span class="isClock" aria-hidden="true"><b>${esc(ck[0])}</b><i>${esc(ck[1])}</i></span>` : ""}
        ${r.z ? `<span class="isMeta">${esc(r.z)}</span>` : ""}
        <span class="isHeute">Heute für dich</span>
        <span class="isTitle">${esc(title)}</span>
        ${[2, 3, 4].map((n)=> `<span class="isTitle isEcho${n}" aria-hidden="true">${esc(title)}</span>`).join("")}
        ${r.s ? `<span class="isSub">${esc(r.s)}</span>` : ""}</a>` : ""}
      <a class="isKat" href="/kategorien/">Kategorien</a>
      ${cats.map((c, i)=> `<a class="isCat isTone${Math.min(3, i + 1)}" href="/rezeptindex/?kategorie=${encodeURIComponent(c[0])}">${esc(c[0])} ${c[1]}</a>`).join("")}
      <a class="isAll" href="/rezeptindex/">Alle ${total || ""} Rezepte</a><p class="isAll isEcho3" aria-hidden="true">Alle ${total || ""} Rezepte</p>`;
    const brand = host.querySelector(".homeBrand"); if(brand) brand.after(el); else host.prepend(el);
    api.add(()=> el.remove());
  }

  window.KOCHBUCH_FX.insel = {
    start(api){
      load(api).then(()=>{
        if(!document.documentElement.classList.contains("skin-insel")) return;
        if(api.home()){ window.KOCHBUCH_CX(api, { skin: "insel", scene: "insel", cls: "inHero" }); radio(api); }
        else window.KOCHBUCH_CX_HEAD(api, { skin: "insel", scene: "insel" });
      });
    },
  };
})();
