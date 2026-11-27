// Skin „jahr3000“ – Startseite (Dez. 2026, fünfte Fassung, Richtung D „Fünfziger-Zukunft“ aus bencium-innovative, vom Besitzer
// gewählt; docs/skins/jahr3000-d.md): Die Zukunft, wie man sie sich früher vorgestellt hat – Creme, Tinte, Orange, Petrol, Lila,
// fette geometrische Versalien und eine schwungvolle Schreibschrift für die Beschriftungen. Startseite .j3Block (Name, Datum,
// Heute, Gericht, Kategorien mit großen Zahlen, Alle Rezepte); dahinter die 3D-Zukunftsstadt (jahr3000-3d.js) unter einem Creme-Schleier.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });

  function block(api){
    const host = document.querySelector(".homeGreeting"); if(!host || host.querySelector(".j3Block")) return;
    let counts = {}, total = 0;
    const cc = document.getElementById("homeCatCount");
    try{ counts = JSON.parse(cc?.textContent || "{}"); total = Number(cc?.dataset.total) || 0; }catch{}
    const cats = Object.entries(counts).sort((a, b)=> b[1] - a[1]).slice(0, 4);
    const link = document.getElementById("todayLink");
    const path = link ? new URL(link.href, location.href).pathname : "";
    const r = api.recipes().find((x)=> x.u === path) || {};
    const title = document.getElementById("todayTitle")?.textContent.trim() || r.t || "";
    const date = new Date().toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
    const el = document.createElement("div");
    el.className = "j3Block";
    el.innerHTML = `<div class="j3Top"><span>Tobis Kochbuch</span><span class="j3Date">${esc(date)}</span></div>
      ${title ? `<a class="j3Today" href="${esc(path)}"><span class="j3Heute">Heute für dich</span><span class="j3Title">${esc(title)}</span>${r.s ? `<span class="j3Sub">${esc(r.s)}</span>` : ""}${r.z ? `<span class="j3Meta">${esc(r.z)}</span>` : ""}</a>` : ""}
      <a class="j3Kat" href="/kategorien/">Kategorien</a>
      <div class="j3Cats">${cats.map((c)=> `<a href="/rezeptindex/?kategorie=${encodeURIComponent(c[0])}"><b>${c[1]}</b><span>${esc(c[0])}</span></a>`).join("")}</div>
      <a class="j3All" href="/rezeptindex/">Alle ${total || ""} Rezepte</a>`;
    const brand = host.querySelector(".homeBrand"); if(brand) brand.after(el); else host.prepend(el);
    api.add(()=> el.remove());
    // Gericht so groß wie möglich, aber ohne Worttrennung: lange Wörter werden kleiner
    const fit = ()=>{
      const t = el.querySelector(".j3Title"); if(!t) return;
      t.style.fontSize = ""; let fs = parseFloat(getComputedStyle(t).fontSize), n = 0;
      while(t.scrollWidth > t.clientWidth + 1 && fs > 20 && n++ < 60){ fs -= 1; t.style.fontSize = fs + "px"; }
    };
    fit(); api.on(window, "resize", fit); document.fonts?.ready.then(fit);
  }

  window.KOCHBUCH_FX.jahr3000 = {
    start(api){
      load(api).then(()=>{
        if(!document.documentElement.classList.contains("skin-jahr3000")) return;
        if(api.home()){ window.KOCHBUCH_CX(api, { skin: "jahr3000", scene: "jahr3000", cls: "j3Hero" }); block(api); }
        else window.KOCHBUCH_CX_HEAD(api, { skin: "jahr3000", scene: "jahr3000" });
      });
    },
  };
})();
