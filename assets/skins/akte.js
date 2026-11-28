// Skin „akte“ (Shutter-Island-Welt: Insel-Anstalt 1954, Sturm, Leuchtturm) – Startseite (Dez. 2026, fünfte Fassung, Richtung D
// „Lichtkegel“ aus bencium-innovative, vom Besitzer gewählt; docs/skins/akte-d.md): Jede Zeile rückt weiter ein, als streiche der
// Strahl des Leuchtturms schräg über die Seite; was er trifft (Gericht, erste Kategorie, „Alle Rezepte“), leuchtet warm.
// Dahinter die 3D-Felseninsel im Sturm (akte-3d.js) unter einem dunklen Schleier.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const load = (api)=> new Promise((ok)=>{ if(window.KOCHBUCH_CX) return ok(); const s = document.createElement("script"); s.src = `/assets/skins/cx-hero.js?v=${api.ver}`; s.onload = ok; document.head.appendChild(s); });

  function beam(api){
    const host = document.querySelector(".homeGreeting"); if(!host || host.querySelector(".akBeam")) return;
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
    // Wörter des Titels auf höchstens drei Zeilen verteilen, jede Zeile eine Stufe weiter eingerückt
    const lines = []; const per = Math.ceil(words.length / Math.min(3, words.length || 1));
    for(let i = 0; i < words.length; i += per) lines.push(words.slice(i, i + per).join(" "));
    const el = document.createElement("div");
    el.className = "akBeam";
    el.innerHTML = `<p class="akS0">Tobis Kochbuch</p><p class="akS1">${esc(date)}</p>
      ${title ? `<a class="akToday" href="${esc(path)}" aria-label="Heute für dich: ${esc(title)}"><span class="akHeute akS0" aria-hidden="true">Heute für dich</span>
        ${lines.map((l, i)=> `<span class="akTitle akS${i + 1}" aria-hidden="true">${esc(l)}</span>`).join("")}
        ${r.s ? `<span class="akSub akS${lines.length + 1}" aria-hidden="true">${esc(r.s)}</span>` : ""}${r.z ? `<span class="akMeta akS${lines.length + 2}" aria-hidden="true">${esc(r.z)}</span>` : ""}</a>` : ""}
      <a class="akKat akS0" href="/kategorien/">Kategorien</a>
      ${cats.map((c, i)=> `<a class="akCat akS${i + 1}${i === 0 ? " akLit" : ""}" href="/rezeptindex/?kategorie=${encodeURIComponent(c[0])}">${esc(c[0])} ${c[1]}</a>`).join("")}
      <a class="akAll akS5 akLit" href="/rezeptindex/">Alle ${total || ""} Rezepte</a>`;
    const brand = host.querySelector(".homeBrand"); if(brand) brand.after(el); else host.prepend(el);
    api.add(()=> el.remove());
  }

  window.KOCHBUCH_FX.akte = {
    start(api){
      load(api).then(()=>{
        if(!document.documentElement.classList.contains("skin-akte")) return;
        if(api.home()){ window.KOCHBUCH_CX(api, { skin: "akte", scene: "akte", cls: "akHero", fx: "rain" }); beam(api); }
        else window.KOCHBUCH_CX_HEAD(api, { skin: "akte", scene: "akte" });
      });
    },
  };
})();
