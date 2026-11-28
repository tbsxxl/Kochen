// Skin „brigade“ (The-Bear-Welt, hell) – Startseite (Dez. 2026, fünfte Fassung, Mischung M3 aus den Entwürfen I, H, D und E
// mit bencium-innovative, vom Besitzer gewählt; docs/skins/brigade-m3.md): ruhige Karte wie im Sterne-Restaurant – schmale, zentrierte
// Spalte auf hellem Edelstahlgrau, das Gericht in breiten fetten Versalien, Kategorien als Tafelzeilen mit der Zahl rechts, Datum, Zeit
// und Zahlen in roter Schreibmaschine, Beschriftungen weit gesperrt in Schürzenblau. Dahinter der 3D-Pass (brigade-3d.js) unter Schleier.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });

  function menu(api){
    const host = document.querySelector(".homeGreeting"); if(!host || host.querySelector(".bgMenu")) return;
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
    el.className = "bgMenu";
    el.innerHTML = `<p class="bgName">Tobis Kochbuch</p><p class="bgType">${esc(date)}</p>
      ${title ? `<a class="bgToday" href="${esc(path)}"><span class="bgLab">Heute für dich</span><span class="bgTitle">${esc(title)}</span>${r.s ? `<span class="bgSub">${esc(r.s)}</span>` : ""}${r.z ? `<span class="bgType">${esc(r.z)}</span>` : ""}</a>` : ""}
      <a class="bgLab bgKat" href="/kategorien/">Kategorien</a>
      ${cats.map((c)=> `<a class="bgRow" href="/rezeptindex/?kategorie=${encodeURIComponent(c[0])}"><span>${esc(c[0])}</span><span class="bgNum">${c[1]}</span></a>`).join("")}
      <a class="bgAll" href="/rezeptindex/">Alle ${total || ""} Rezepte</a>`;
    const brand = host.querySelector(".homeBrand"); if(brand) brand.after(el); else host.prepend(el);
    api.add(()=> el.remove());
  }

  window.KOCHBUCH_FX.brigade = {
    start(api){
      load(api).then(()=>{
        if(!document.documentElement.classList.contains("skin-brigade")) return;
        if(api.home()){ window.KOCHBUCH_CX(api, { skin: "brigade", scene: "brigade", cls: "bgHero" }); menu(api); }
        else window.KOCHBUCH_CX_HEAD(api, { skin: "brigade", scene: "brigade" });
      });
    },
  };
})();
