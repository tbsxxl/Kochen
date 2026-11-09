// Skins mit eigener Welt (Abschnitt 48 in styles.css): Motive im Kopfbereich der Feld-Seiten und kleine Verhalten je Skin.
// Alle Motive sind selbst gezeichnet (keine Logos, Figuren oder Bilder aus Serien). Bewegung nur ohne „Bewegung reduzieren“.
(function(){
  const R = document.documentElement;
  const skin = ()=> R.dataset.skin || "standard";
  const reduce = ()=> matchMedia("(prefers-reduced-motion: reduce)").matches;
  const svg = (vb, body, extra = "")=> `<svg viewBox="${vb}" ${extra} aria-hidden="true" focusable="false">${body}</svg>`;

  // ---------- Szenen im Kopfbereich ----------
  const SCENES = {
    // Nordwall: Karte mit Küstenlinie und Kompassrose
    nordwall: ()=> `
      ${svg("0 0 400 200", `
        <path d="M-10 150 C40 120 70 160 110 130 S170 90 210 118 S270 160 320 120 S380 90 420 110" fill="none" stroke="rgba(236,230,218,.16)" stroke-width="1.5" stroke-dasharray="4 5"/>
        <path d="M-10 175 C50 150 90 185 140 160 S230 140 290 170 S370 150 420 165" fill="none" stroke="rgba(236,230,218,.10)" stroke-width="1"/>`, 'class="scMap" preserveAspectRatio="none"')}
      ${svg("-50 -50 100 100", `
        <circle r="44" fill="none" stroke="rgba(236,230,218,.22)" stroke-width="1"/>
        <circle r="36" fill="none" stroke="rgba(236,230,218,.14)" stroke-width="1" stroke-dasharray="2 3"/>
        <path d="M0-46 L6 0 L0 46 L-6 0Z M-46 0 L0 -6 L46 0 L0 6Z" fill="rgba(236,230,218,.22)"/>
        <path d="M0-46 L6 0 L-6 0Z" fill="rgba(125,28,28,.85)"/>
        <path d="M-30-30 L3 -3 L-3 3Z M30 30 L-3 3 L3 -3Z M30-30 L3 3 L-3 -3Z M-30 30 L-3 -3 L3 3Z" fill="rgba(236,230,218,.12)"/>
        <text y="-49" text-anchor="middle" font-size="9" fill="rgba(236,230,218,.5)" font-family="serif">N</text>`, 'class="scCompass"')}`,
    // Zauberschule: verzauberte Decke – Sternenhimmel mit schwebenden Kerzen
    zauberschule: ()=> `<div class="scStars"></div>` +
      [62, 70, 78, 86, 94, 74, 90].map((x, i)=> `<span class="scCandle" style="left:${x}%;top:calc(env(safe-area-inset-top) + ${[70,104,58,92,66,140,128][i]}px);--d:${(i * .7).toFixed(1)}s"></span>`).join(""),
    // Jahr 3000: Skyline mit Röhrenbahnen
    jahr3000: ()=> svg("0 0 400 140", `
      <g fill="rgba(127,224,192,.22)">
        <rect x="10" y="70" width="26" height="70" rx="4"/><rect x="44" y="40" width="18" height="100" rx="9"/><circle cx="53" cy="38" r="12"/>
        <rect x="80" y="86" width="34" height="54" rx="6"/><path d="M128 140 V60 Q142 30 156 60 V140Z"/><rect x="170" y="96" width="22" height="44" rx="3"/>
        <rect x="204" y="52" width="14" height="88" rx="7"/><circle cx="211" cy="46" r="9"/><rect x="232" y="78" width="40" height="62" rx="10"/>
        <path d="M286 140 V70 L300 30 L314 70 V140Z"/><rect x="330" y="92" width="26" height="48" rx="4"/><rect x="364" y="60" width="20" height="80" rx="10"/>
      </g>
      <g fill="none" stroke="rgba(242,255,248,.35)" stroke-width="6" stroke-linecap="round">
        <path id="scTube" d="M-10 58 C60 20 120 100 200 66 S330 20 410 52"/>
        <path d="M-10 104 C80 120 140 80 230 96 S350 120 410 98" opacity=".6"/>
      </g>
      <circle r="5" fill="#FF8A3D"><animateMotion dur="7s" repeatCount="indefinite"><mpath href="#scTube"/></animateMotion></circle>`, 'class="scSkyline" preserveAspectRatio="xMidYMax slice"'),
    // Zwei Städte: leuchtende Hex-Kristalle oben, Farbspritzer unten
    zweistaedte: ()=> `
      ${svg("0 0 120 120", `
        <defs><radialGradient id="scHexG"><stop offset="0" stop-color="#9FF3FF"/><stop offset="1" stop-color="#2A9DD8" stop-opacity=".2"/></radialGradient></defs>
        <g stroke="#C9A55A" stroke-width="1.2" fill="url(#scHexG)">
          <path d="M60 18 l22 13 v26 l-22 13 l-22 -13 v-26z"/>
          <path d="M96 58 l12 7 v14 l-12 7 l-12 -7 v-14z" opacity=".75"/>
          <path d="M28 70 l10 6 v12 l-10 6 l-10 -6 v-12z" opacity=".6"/>
        </g>
        <path d="M60 18 v52 M38 31 l44 26 M82 31 l-44 26" stroke="rgba(255,255,255,.35)" stroke-width=".8"/>`, 'class="scHex"')}
      ${svg("0 0 400 60", `
        <g fill="#FF3FA4"><circle cx="40" cy="20" r="6"/><circle cx="58" cy="30" r="2.5"/><circle cx="30" cy="34" r="1.8"/><path d="M40 26 v22 a2.5 2.5 0 0 0 5 0 v-18z"/>
        <circle cx="300" cy="14" r="4"/><circle cx="312" cy="22" r="2"/><path d="M300 18 v26 a2 2 0 0 0 4 0 v-24z"/></g>
        <g fill="#5FD4C9"><circle cx="160" cy="24" r="5"/><circle cx="172" cy="16" r="2"/><path d="M160 28 v16 a2.2 2.2 0 0 0 4.4 0 v-14z"/>
        <circle cx="370" cy="30" r="3"/></g>`, 'class="scSplash" preserveAspectRatio="none"')}`,
    // Die Insel: Strand, Meer und Palmen bei Nacht, Wrackteil im Sand
    insel: ()=> svg("0 0 400 140", `
      <defs><linearGradient id="scSea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0A1A22"/><stop offset="1" stop-color="#123342"/></linearGradient></defs>
      <rect y="92" width="400" height="48" fill="url(#scSea)"/>
      <path d="M0 122 C80 112 160 128 240 118 S360 112 400 120 V140 H0Z" fill="#1E1A14"/>
      <path d="M250 124 l70 -14 l6 4 l-64 16z" fill="#2E2C2A"/>
      <g fill="#050807">
        <path d="M36 140 C40 110 44 80 52 56 l4 1 C50 82 46 112 44 140Z"/>
        <path d="M54 56 C34 46 18 50 6 62 C24 54 38 56 54 58Z M54 56 C70 40 90 40 104 50 C86 46 70 50 56 58Z M54 56 C46 36 50 24 60 14 C56 30 58 44 56 57Z M54 56 C72 54 86 62 94 76 C80 64 68 60 55 58Z M54 56 C38 60 28 70 22 84 C34 70 44 62 54 59Z"/>
        <path d="M360 140 C356 116 350 92 340 74 l4 -1 C354 92 362 116 366 140Z"/>
        <path d="M342 73 C324 62 306 64 292 74 C310 68 326 70 342 76Z M342 73 C356 58 374 56 390 64 C372 62 356 66 344 76Z M342 73 C336 56 340 44 350 36 C346 50 346 62 344 74Z"/>
      </g>`, 'class="scIsland" preserveAspectRatio="xMidYMax slice"'),
    // Akte: Sturm, Regen und ein Leuchtturm mit kreisendem Licht
    akte: ()=> `<div class="scRain"></div>
      ${svg("0 0 60 140", `
        <path d="M22 140 L26 50 H34 L38 140Z" fill="#11181F"/>
        <rect x="24" y="40" width="12" height="10" fill="#F4E3A1"/>
        <path d="M22 40 H38 L30 30Z" fill="#11181F"/>
        <rect x="21" y="49" width="18" height="3" fill="#11181F"/>
        <path d="M0 140 C10 128 20 126 30 132 S50 128 60 136 V140Z" fill="#0B1015"/>`, 'class="scTower" preserveAspectRatio="xMidYMax meet"')}
      <span class="scBeam"></span>`,
    // Brigade: Wärmelampen über dem Pass, Bon-Leiste
    brigade: ()=> `<div class="scLamps">${[0,1,2].map(()=>'<span class="scLamp"></span>').join("")}</div>
      <div class="scRail"><span></span><span></span><span></span></div>`,
  };

  function mountScene(){
    document.querySelectorAll(".skinScene").forEach(el=> el.remove());
    const make = SCENES[skin()];
    if(!make || !document.body.classList.contains("fieldPage")) return;
    const el = document.createElement("div");
    el.className = `skinScene skinScene-${skin()}`;
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = make();
    if(reduce()) el.querySelectorAll("animateMotion").forEach(a=> a.remove());
    // als erstes Kind von body: liegt mit z-index -1 über dem Feld (Hintergrund von html), unter allem Inhalt
    document.body.prepend(el);
    sizeScene();
  }
  function sizeScene(){
    const el = document.querySelector(".skinScene");
    if(!el) return;
    const sheet = document.querySelector("body.fieldPage .pageContent, body.layout-home .homeToday");
    const h = sheet ? sheet.getBoundingClientRect().top + scrollY + 32 : 260;
    el.style.height = Math.max(120, Math.round(h)) + "px";
  }

  // ---------- Jahr 3000: Datum tausend Jahre später ----------
  function futureDate(){
    const el = document.getElementById("homeGreeting");
    if(!el) return;
    if(!el.dataset.orig) el.dataset.orig = el.textContent;
    el.textContent = skin() === "jahr3000" ? `${el.dataset.orig} ${new Date().getFullYear() + 1000}` : el.dataset.orig;
  }

  // ---------- Jahr 3000: „Zur Liste“ schickt eine Kapsel durch die Röhre zur Liste ----------
  document.addEventListener("click", (e)=>{
    if(skin() !== "jahr3000" || reduce()) return;
    const btn = e.target.closest("#addToShopping");
    const tab = document.querySelector('.tabItem[href*="shopping"]');
    if(!btn || !tab) return;
    const a = btn.getBoundingClientRect(), b = tab.getBoundingClientRect();
    const pod = document.createElement("span");
    pod.className = "tubePod";
    pod.style.left = (a.left + a.width / 2 - 9) + "px"; pod.style.top = (a.top + a.height / 2 - 9) + "px";
    document.body.appendChild(pod);
    const dx = b.left + b.width / 2 - (a.left + a.width / 2), dy = b.top + b.height / 2 - (a.top + a.height / 2);
    pod.animate([
      { transform: "translate(0,0) scale(1)", opacity: 1 },
      { transform: `translate(${dx * .5 + 60}px, ${dy * .5 - 80}px) scale(1.2)`, opacity: 1, offset: .5 },
      { transform: `translate(${dx}px, ${dy}px) scale(.6)`, opacity: .2 }
    ], { duration: 700, easing: "cubic-bezier(.3,.7,.2,1)" }).onfinish = ()=> pod.remove();
  });

  // ---------- Brigade: Küchenrufe beim Abhaken ----------
  const CALLS = { done: ["Gehört, Chef", "Ja, Chef", "Läuft, Chef"], next: ["Weiter, Chef", "Hinter dir", "Ecke", "Heiß"], shop: ["Gehört", "Ist da, Chef"] };
  let lastCall = 0;
  function call(kind){
    if(Date.now() - lastCall < 1800) return;
    lastCall = Date.now();
    const list = CALLS[kind];
    window.KOCHBUCH_UI?.toast?.(list[Math.floor(Math.random() * list.length)]);
  }
  document.addEventListener("click", (e)=>{
    if(skin() !== "brigade") return;
    if(e.target.closest("#cookNext")) return call("next");
    const li = e.target.closest(".recipeBody ol > li");
    if(li) return setTimeout(()=>{ if(li.classList.contains("stepDone")) call("done"); }, 50);
    const row = e.target.closest("#shopList .uRow");
    if(row) return setTimeout(()=>{ if(row.classList.contains("checked")) call("shop"); }, 50);
  });

  // ---------- Zauberschule: Fußspuren als Fortschritt im Kochmodus ----------
  function watchProgress(){
    const bar = document.querySelector(".cookProgressBar"), track = bar?.parentElement;
    if(!bar || !track) return;
    const upd = ()=>{ const m = /scaleX\(([\d.]+)\)/.exec(bar.style.transform || ""); track.style.setProperty("--p", m ? m[1] : 0); };
    new MutationObserver(upd).observe(bar, { attributes: true, attributeFilter: ["style"] });
    upd();
  }

  // ---------- Akte: gekochte Rezepte bekommen den Stempel „Gekocht“ ----------
  function markCooked(){
    let stats = {};
    try { stats = JSON.parse(localStorage.getItem("kochbuch.stats") || "{}"); } catch {}
    const cooked = new Set(Object.keys(stats).filter(k=> stats[k] && stats[k].cookedCount > 0).map(k=> k.replace(/\/+$/, "")));
    document.querySelectorAll("a.linkCard").forEach(a=>{
      const id = new URL(a.href, location.href).pathname.replace(/\/+$/, "");
      a.querySelector(".recipeCard")?.classList.toggle("wasCooked", cooked.has(id));
    });
  }

  // ---------- Logo je Skin (assets/logos/<skin>.svg; Standard/Retro haben ihre eigenen) ----------
  const LOGOS = ["terminal","diner","bauhaus","nordwall","zauberschule","jahr3000","zweistaedte","insel","akte","brigade"];
  function skinLogo(){
    const img = document.querySelector(".homeBrand .logoSkin");
    if(!img) return;
    const on = LOGOS.includes(skin());
    img.hidden = !on;
    if(on) img.src = `/assets/logos/${skin()}.svg?v=1`;
  }

  function apply(){ mountScene(); futureDate(); markCooked(); skinLogo(); }
  function init(){
    apply();
    watchProgress();
    new MutationObserver(apply).observe(R, { attributes: true, attributeFilter: ["data-skin"] });
    addEventListener("resize", sizeScene, { passive: true });
    document.fonts?.ready?.then(sizeScene);
    addEventListener("load", sizeScene);
    addEventListener("kochbuch:stats", markCooked);
    // Startseite füllt Karten per Skript nach
    const home = document.querySelector(".appMain");
    if(home) new MutationObserver(()=>{ clearTimeout(init.t); init.t = setTimeout(()=>{ markCooked(); sizeScene(); }, 120); }).observe(home, { childList: true, subtree: true });
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
