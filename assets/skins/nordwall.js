// Skin „Nordwall“ (Dez. 2026, mehr eigener Charakter): Start mit hängenden Bannern der Kategorien (eigene Wappenzeichen) und einer
// Steintafel „Heute an der Tafel“; Rezeptliste als Reihe von Wappenschilden (Foto im Schild, Name auf dem Band darunter, römische
// Nummer); Rezeptseite mit Foto in eisernem Rahmen und Titel auf einer gemeißelten Tafel.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  // Wappenzeichen aus Küchen-Dingen (Linien-SVG)
  const SIGIL = {
    "Schnell": '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    "Pasta": '<path d="M4 9h16M6 9c0 6 2 9 6 9s6-3 6-9M9 5c1 1 1 3 0 4M12 4c1 1 1 3 0 5M15 5c1 1 1 3 0 4"/>',
    "Schmorgerichte": '<path d="M3 10h18M5 10v7a3 3 0 003 3h8a3 3 0 003-3v-7M8 6c0-2 2-2 2-4M14 6c0-2 2-2 2-4M1 12h2M21 12h2"/>',
    "Süßes & Backen": '<path d="M4 14h16v6H4zM6 14c0-4 3-6 6-6s6 2 6 6M12 3v5"/>',
    "Curry": '<path d="M4 12a8 6 0 0016 0zM2 12h20M9 8c0-2 1-3 1-5M14 8c0-2 1-3 1-5"/>',
    "Wochenendprojekt": '<path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5z"/>',
  };
  const CATS = Object.keys(SIGIL);
  const ROM = (n)=>{ const m = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]; let s = ""; for(const [v, r] of m) while(n >= v){ s += r; n -= v; } return s; };

  function home(api){
    const g = document.querySelector(".homeGreeting"); if(!g) return;
    let cats = []; try{ cats = JSON.parse(document.getElementById("homeCats")?.textContent || "[]"); }catch{}
    const list = CATS.filter((c)=> !cats.length || cats.includes(c));
    const a = document.getElementById("todayLink"), title = a?.querySelector(".homeFeaturedTitle")?.textContent.trim();
    const el = api.bit("nwHall", "nordwall");
    el.innerHTML = `<div class="nwBanners">${list.map((c, i)=> `<a class="nwBanner" style="--i:${i}" href="/rezeptindex/?kategorie=${encodeURIComponent(c)}"><svg viewBox="0 0 24 24" aria-hidden="true">${SIGIL[c]}</svg><span>${esc(c)}</span></a>`).join("")}</div>
      ${title ? `<a class="nwStone" href="${esc(a.getAttribute("href"))}"><small>Heute an der Tafel</small><b>${esc(title)}</b></a>` : ""}`;
    g.after(el); api.add(()=> el.remove());
  }

  function list(api){
    const grid = document.getElementById("recipeGrid"); if(!grid) return;
    grid.querySelectorAll(".linkCard").forEach((c, i)=> c.style.setProperty("--rom", `"${ROM(i % 10 + 1)}"`));
    document.documentElement.classList.add("nwList"); api.add(()=> document.documentElement.classList.remove("nwList"));
  }

  window.KOCHBUCH_FX.nordwall = { start(api){ if(api.home()) home(api); list(api); }, refresh(api){ list(api); } };
})();
