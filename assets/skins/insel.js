// Skin „Die Insel“ (Dez. 2026, mehr eigener Charakter): Start = Stationsrechner mit Fallblatt-Uhr „bis zum Abendessen“ (18:30) und
// Eingabezeile; Rezeptliste = Stationsprotokoll (Protokollnummer, Name, Zeit, kleines Foto in einem Röhrenbildschirm-Rahmen);
// Rezeptseite: Foto im Röhrenbildschirm-Rahmen mit Protokollkopf.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const pad = (n)=> String(n).padStart(2, "0");

  function home(api){
    const g = document.querySelector(".homeGreeting"); if(!g) return;
    const a = document.getElementById("todayLink"), title = a?.querySelector(".homeFeaturedTitle")?.textContent.trim() || "";
    const el = api.bit("isStation", "insel");
    el.innerHTML = `<p class="isLabel">Station · Küche · Rechner 2</p><div class="isFlap" aria-label="Zeit bis zum Abendessen"></div><p class="isLabel">bis zum Abendessen (18:30)</p>
      ${title ? `<a class="isPrompt" href="${esc(a.getAttribute("href"))}">&gt;: <span>${esc(title.toUpperCase())}</span><i class="isCaret"></i></a>` : ""}`;
    g.after(el); api.add(()=> el.remove());
    const flap = el.querySelector(".isFlap");
    const tick = ()=>{
      const now = new Date(), t = new Date(now); t.setHours(18, 30, 0, 0); if(t <= now) t.setDate(t.getDate() + 1);
      let s = Math.round((t - now) / 1000); const h = Math.floor(s / 3600); s -= h * 3600; const m = Math.floor(s / 60); s -= m * 60;
      flap.innerHTML = [pad(h), pad(m), pad(s)].map((x)=> `<span>${x[0]}</span><span>${x[1]}</span>`).join("<b>:</b>");
    };
    tick(); const id = setInterval(tick, 1000); api.add(()=> clearInterval(id));
  }

  function list(api){
    const grid = document.getElementById("recipeGrid"); if(!grid) return;
    grid.querySelectorAll(".linkCard").forEach((c, i)=> c.style.setProperty("--no", `"${String(i * 7 + 4).padStart(3, "0")}"`));
    if(document.querySelector(".isLogHead")) return;
    const head = api.bit("isLogHead", "insel");
    head.innerHTML = `<span>Prot.</span><span>Eintrag</span><span>Dauer</span>`;
    grid.before(head); api.add(()=> head.remove());
    document.documentElement.classList.add("isList"); api.add(()=> document.documentElement.classList.remove("isList"));
  }

  window.KOCHBUCH_FX.insel = { start(api){ if(api.home()) home(api); list(api); }, refresh(api){ list(api); } };
})();
