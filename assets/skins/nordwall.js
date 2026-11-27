// Skin „nordwall“ – Startseite (Dez. 2026, fünfte Fassung, Richtung D2 „Karte des Reichs“, vom Besitzer festgelegt; docs/skins/nordwall-d2.md):
// Der erste Bildschirm ist eine Landkarte aus Schrift: Norden oben, die vier größten Kategorien liegen wie Reiche an den
// Himmelsrichtungen (Westen/Osten senkrecht), das Gericht des Tages steht in der Mitte wie die Hauptstadt. Dahinter die 3D-Karte
// (nordwall-3d.js über cx-hero.js) unter einem Pergament-Schleier; ohne Grafikkarte flaches Pergament.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });

  function map(api){
    const hero = document.querySelector(".nwHero"); if(!hero || hero.querySelector(".nwMap")) return;
    let counts = {}, total = 0;
    const cc = document.getElementById("homeCatCount");
    try{ counts = JSON.parse(cc?.textContent || "{}"); total = Number(cc?.dataset.total) || 0; }catch{}
    const cats = Object.entries(counts).sort((a, b)=> b[1] - a[1]).slice(0, 4);
    const link = document.getElementById("todayLink");
    const path = link ? new URL(link.href, location.href).pathname : "";
    const r = api.recipes().find((x)=> x.u === path) || {};
    const title = document.getElementById("todayTitle")?.textContent.trim() || r.t || "";
    const date = new Date().toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
    const cat = (c, i)=> `<a class="nwCat nwC${i + 1}" href="/rezeptindex/?kategorie=${encodeURIComponent(c[0])}">${esc(c[0])}<i>${c[1]}</i></a>`;
    const el = document.createElement("div");
    el.className = "nwMap";
    el.innerHTML = `<p class="nwName">Tobis Kochbuch</p><p class="nwDate">${esc(date)}</p>
      ${cats.map(cat).join("")}
      ${title ? `<a class="nwCapital" href="${esc(path)}"><span class="nwHeute">Heute für dich</span><span class="nwTitle">${esc(title)}</span>${r.s ? `<span class="nwSub">${esc(r.s)}</span>` : ""}${r.z ? `<span class="nwMeta">${esc(r.z)}</span>` : ""}</a>` : ""}
      <a class="nwKat" href="/kategorien/">Kategorien</a><a class="nwAll" href="/rezeptindex/">Alle ${total || ""} Rezepte</a>`;
    hero.appendChild(el); api.add(()=> el.remove());
    // Hauptstadt-Name: so groß wie möglich, aber kein Wort darf getrennt werden müssen (lange Wörter werden kleiner)
    const fit = ()=>{
      const t = el.querySelector(".nwTitle"); if(!t) return;
      t.style.fontSize = "";
      let fs = parseFloat(getComputedStyle(t).fontSize), n = 0;
      while(t.scrollWidth > t.clientWidth + 1 && fs > 18 && n++ < 40){ fs -= 1; t.style.fontSize = fs + "px"; }
    };
    fit(); api.on(window, "resize", fit);
    document.fonts?.ready.then(fit);
    api.on(window, "scroll", ()=>{
      if(api.reduce()) return;
      const p = Math.min(1, scrollY / (innerHeight * .55));
      el.style.opacity = (1 - p).toFixed(3);
    }, { passive: true });
  }

  window.KOCHBUCH_FX.nordwall = {
    start(api){
      load(api).then(()=>{
        if(!document.documentElement.classList.contains("skin-nordwall")) return;
        if(api.home()){ window.KOCHBUCH_CX(api, { skin: "nordwall", scene: "nordwall", cls: "nwHero" }); map(api); }
        else window.KOCHBUCH_CX_HEAD(api, { skin: "nordwall", scene: "nordwall" });
      });
    },
  };
})();
