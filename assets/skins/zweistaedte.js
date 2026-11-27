// Skin „zweistaedte“ – Startseite (Dez. 2026, fünfte Fassung, Richtung A „Oben und unten“ aus bencium-innovative, vom Besitzer
// gewählt; docs/skins/zweistaedte-a.md): Die obere Stadt fein gesetzt in Gold (Versalien, kursive Serife), die untere mit dem Marker
// in Pink und Türkis hingeschrieben. Startseite .zwPage: oben Buch, Datum, Gericht des Tages; unten Kategorien und „Alle Rezepte“.
// Dahinter die 3D-Szene (zweistaedte-3d.js: goldene Türme oben, Unterstadt unten) unter einem dunklen Schleier.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });

  function page(api){
    const hero = document.querySelector(".zwHero"); if(!hero || hero.querySelector(".zwPage")) return;
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
    el.className = "zwPage";
    el.innerHTML = `<div class="zwUp"><p class="zwName">Tobis Kochbuch</p><p class="zwDate">${esc(date)}</p>
        ${title ? `<a class="zwToday" href="${esc(path)}"><span class="zwHeute">Heute für dich</span><span class="zwTitle">${esc(title)}</span>${r.s ? `<span class="zwSub">${esc(r.s)}</span>` : ""}${r.z ? `<span class="zwMeta">${esc(r.z)}</span>` : ""}</a>` : ""}</div>
      <div class="zwDown"><a class="zwKat" href="/kategorien/">Kategorien</a>
        ${cats.map((c)=> `<a class="zwCat" href="/rezeptindex/?kategorie=${encodeURIComponent(c[0])}">${esc(c[0])}<i>${c[1]}</i></a>`).join("")}
        <a class="zwAll" href="/rezeptindex/">Alle ${total || ""} Rezepte</a></div>`;
    hero.appendChild(el); api.add(()=> el.remove());
    api.on(window, "scroll", ()=>{ if(api.reduce()) return; el.style.opacity = (1 - Math.min(1, scrollY / (innerHeight * .6))).toFixed(3); }, { passive: true });
  }

  window.KOCHBUCH_FX.zweistaedte = {
    start(api){
      load(api).then(()=>{
        if(!document.documentElement.classList.contains("skin-zweistaedte")) return;
        if(api.home()){ window.KOCHBUCH_CX(api, { skin: "zweistaedte", scene: "zweistaedte", cls: "zwHero", fx: "haze" }); page(api); }
        else window.KOCHBUCH_CX_HEAD(api, { skin: "zweistaedte", scene: "zweistaedte" });
      });
    },
  };
})();
