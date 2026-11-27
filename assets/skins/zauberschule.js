// Skin „zauberschule“ – Startseite (Dez. 2026, fünfte Fassung, Richtung C „Sternendecke“ aus bencium-innovative, vom Besitzer
// festgelegt; docs/skins/zauberschule-c.md): Alles Kleine (Buchname, Datum, Kategorien, Zeit, „Alle Rezepte“) steht in Gold verstreut
// wie Sterne über der Fläche, das Gericht des Tages ruht hell in der Mitte. Dahinter die 3D-Halle (zauberschule-3d.js über cx-hero.js)
// unter einem nachtblauen Schleier; ohne Grafikkarte flaches Nachtblau mit Lichtpunkten.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });

  function sky(api){
    const hero = document.querySelector(".zsHero"); if(!hero || hero.querySelector(".zsSky")) return;
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
    el.className = "zsSky";
    el.innerHTML = `<p class="zsStar zs1">Tobis Kochbuch</p><p class="zsStar zs2">${esc(date)}</p>
      ${cats.map((c, i)=> `<a class="zsStar zsCat zs${i + 3}" href="/rezeptindex/?kategorie=${encodeURIComponent(c[0])}">${esc(c[0])} ${c[1]}</a>`).join("")}
      ${r.z ? `<p class="zsStar zs9">${esc(r.z)}</p>` : ""}
      <a class="zsStar zs7" href="/kategorien/">Kategorien</a><a class="zsStar zs8" href="/rezeptindex/">Alle ${total || ""} Rezepte</a>
      ${title ? `<a class="zsCenter" href="${esc(path)}"><span class="zsHeute">Heute für dich</span><span class="zsTitle">${esc(title)}</span>${r.s ? `<span class="zsSub">${esc(r.s)}</span>` : ""}</a>` : ""}`;
    hero.appendChild(el); api.add(()=> el.remove());
    api.on(window, "scroll", ()=>{
      if(api.reduce()) return;
      el.style.opacity = (1 - Math.min(1, scrollY / (innerHeight * .55))).toFixed(3);
    }, { passive: true });
  }

  window.KOCHBUCH_FX.zauberschule = {
    start(api){
      load(api).then(()=>{
        if(!document.documentElement.classList.contains("skin-zauberschule")) return;
        if(api.home()){ window.KOCHBUCH_CX(api, { skin: "zauberschule", scene: "zauberschule", cls: "zsHero", fx: "motes" }); sky(api); }
        else window.KOCHBUCH_CX_HEAD(api, { skin: "zauberschule", scene: "zauberschule" });
      });
    },
  };
})();
