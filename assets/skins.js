// Skins mit eigener Welt (Abschnitt 48 in styles.css): Motive im Kopfbereich der Feld-Seiten und kleine Verhalten je Skin.
// Alle Motive sind selbst gezeichnet (keine Logos, Figuren oder Bilder aus Serien). Bewegung nur ohne „Bewegung reduzieren“.
(function(){
  const R = document.documentElement;
  const skin = ()=> R.dataset.skin || "standard";
  const reduce = ()=> matchMedia("(prefers-reduced-motion: reduce)").matches;
  const svg = (vb, body, extra = "")=> `<svg viewBox="${vb}" ${extra} aria-hidden="true" focusable="false">${body}</svg>`;

  // ---------- Szenen im Kopfbereich ----------
  // Aufbau: Schmuck oben rechts (neben dem Titel) und ein „Horizont“ am unteren Feldrand (.scHorizon, rechtsbündig,
  // auf breiten Bildschirmen höchstens 640 px breit), dazu Wetter-Ebenen (Schnee, Regen, Sterne) über die ganze Breite.
  const SCENES = {
    // Nordwall: Schneefall, Kompassrose, die Eismauer am Horizont mit Burg und Fackeln
    nordwall: ()=> `<div class="scSnow"></div>
      ${svg("-50 -50 100 100", `
        <circle r="44" fill="none" stroke="rgba(236,230,218,.22)" stroke-width="1"/>
        <circle r="36" fill="none" stroke="rgba(236,230,218,.14)" stroke-width="1" stroke-dasharray="2 3"/>
        <path d="M0-46 L6 0 L0 46 L-6 0Z M-46 0 L0 -6 L46 0 L0 6Z" fill="rgba(236,230,218,.2)"/>
        <path d="M0-46 L6 0 L-6 0Z" fill="rgba(155,34,34,.9)"/>
        <text y="-49" text-anchor="middle" font-size="9" fill="rgba(236,230,218,.5)" font-family="serif">N</text>`, 'class="scCompass"')}
      ${svg("0 0 400 64", `
        <defs><linearGradient id="scIce" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E6F1F6"/><stop offset="1" stop-color="#8FB0C2"/></linearGradient></defs>
        <path d="M0 14 L60 12 L120 15 L190 11 L260 14 L330 12 L400 15 V64 H0Z" fill="url(#scIce)" opacity=".85"/>
        <g stroke="#6F93A8" stroke-width=".8" opacity=".6"><path d="M40 14 V40 M95 13 V36 M150 14 V44 M222 12 V38 M290 14 V42 M355 13 V34"/></g>
        <g fill="#141A1F">
          <path d="M150 64 V40 h6 v-4 h4 v4 h6 v-4 h4 v4 h6 V64Z"/>
          <path d="M182 64 V30 h4 v-4 h4 v4 h4 v-4 h4 v4 h4 V64Z"/>
          <path d="M206 64 V44 h30 V64Z"/><path d="M236 64 V36 h4 v-4 h4 v4 h4 v-4 h4 v4 h4 V64Z"/>
          <path d="M120 64 Q170 52 270 64Z"/>
        </g>
        <path d="M190 30 v-8 l8 3 -8 3" fill="#9B2222"/>
        <g fill="#FFB347"><circle cx="160" cy="48" r="1.4"/><circle cx="194" cy="40" r="1.4"/><circle cx="224" cy="52" r="1.4"/><circle cx="246" cy="44" r="1.4"/></g>`, 'class="scHorizon" preserveAspectRatio="xMaxYMax meet"')}`,
    // Zauberschule: verzauberte Decke mit schwebenden Kerzen, Schloss mit erleuchteten Fenstern auf dem Hügel
    zauberschule: ()=> `<div class="scStars"></div>` +
      [62, 70, 78, 86, 94, 74, 90].map((x, i)=> `<span class="scCandle" style="left:${x}%;top:calc(env(safe-area-inset-top) + ${[70,104,58,92,66,140,128][i]}px);--d:${(i * .7).toFixed(1)}s"></span>`).join("") +
      svg("0 0 400 64", `
        <path d="M150 64 Q250 30 400 40 V64Z" fill="#0D1126"/>
        <g fill="#0D1126">
          <path d="M260 40 V22 l5 -12 5 12 V40Z"/><path d="M280 38 V14 l6 -14 6 14 V38Z"/><path d="M300 40 V26 h18 V40Z"/>
          <path d="M318 40 V18 l5 -12 5 12 V40Z"/><path d="M336 42 V28 l4 -9 4 9 V42Z"/><path d="M270 42 h80 v-6 h-80Z"/>
        </g>
        <g fill="#FFD27A"><rect x="285" y="20" width="2" height="3"/><rect x="285" y="28" width="2" height="3"/><rect x="305" y="30" width="2" height="3"/><rect x="311" y="30" width="2" height="3"/><rect x="322" y="24" width="2" height="3"/><rect x="264" y="28" width="2" height="3"/></g>`, 'class="scHorizon" preserveAspectRatio="xMaxYMax meet"'),
    // Jahr 3000: Ringplanet, Skyline mit Röhrenbahn und Leuchtschild, fliegendes Auto
    jahr3000: ()=> `<div class="scStars"></div>
      ${svg("0 0 100 60", `
        <circle cx="50" cy="30" r="16" fill="#FF8A3D"/><circle cx="44" cy="25" r="5" fill="#FFB27A" opacity=".6"/>
        <ellipse cx="50" cy="31" rx="34" ry="7" fill="none" stroke="#7FE0C0" stroke-width="2.4" transform="rotate(-12 50 31)"/>
        <path d="M66 30 a16 16 0 0 1 -32 2" fill="#FF8A3D" transform="rotate(-12 50 31)" opacity="0"/>`, 'class="scPlanet"')}
      ${svg("0 0 400 64", `
        <g fill="#13305A">
          <rect x="150" y="30" width="22" height="34" rx="3"/><rect x="178" y="12" width="14" height="52" rx="7"/><circle cx="185" cy="10" r="8"/>
          <path d="M200 64 V26 Q212 6 224 26 V64Z"/><rect x="232" y="34" width="26" height="30" rx="8"/>
          <path d="M266 64 V24 L276 2 L286 24 V64Z"/><rect x="294" y="18" width="28" height="46" rx="4"/><rect x="330" y="30" width="18" height="34" rx="9"/><rect x="354" y="10" width="20" height="54" rx="3"/><rect x="380" y="28" width="20" height="36"/>
        </g>
        <g fill="#7FE0C0" opacity=".8"><rect x="155" y="36" width="3" height="3"/><rect x="164" y="44" width="3" height="3"/><rect x="236" y="40" width="3" height="3"/><rect x="248" y="48" width="3" height="3"/><rect x="358" y="18" width="3" height="3"/><rect x="366" y="30" width="3" height="3"/><rect x="384" y="36" width="3" height="3"/></g>
        <rect x="298" y="24" width="20" height="9" rx="2" fill="none" stroke="#FF8A3D" stroke-width="1.2"/><text x="308" y="31" text-anchor="middle" font-size="6" fill="#FF8A3D" font-family="sans-serif" font-weight="700">24/7</text>
        <path id="scTube" d="M140 40 C200 20 240 56 300 36 S370 20 410 30" fill="none" stroke="rgba(242,255,248,.38)" stroke-width="5" stroke-linecap="round"/>
        <circle r="3.2" fill="#FF8A3D"><animateMotion dur="5s" repeatCount="indefinite"><mpath href="#scTube"/></animateMotion></circle>
        <g><path d="M-14 0 q7 -6 14 0 h-14z M-16 0 h18 q-2 3 -9 3 q-7 0 -9 -3z" fill="#7FE0C0"/><animateMotion dur="11s" repeatCount="indefinite" path="M120 8 C220 -2 300 14 420 2"/></g>`, 'class="scHorizon" preserveAspectRatio="xMaxYMax meet"')}`,
    // Zwei Städte: oben die goldene Stadt mit Luftschiff und Kristall, unten Rohre der Unterstadt mit Graffiti und Dunst
    zweistaedte: ()=> `
      ${svg("0 0 120 120", `
        <defs><radialGradient id="scHexG"><stop offset="0" stop-color="#9FF3FF"/><stop offset="1" stop-color="#2A9DD8" stop-opacity=".2"/></radialGradient></defs>
        <g stroke="#C9A55A" stroke-width="1.2" fill="url(#scHexG)">
          <path d="M60 18 l22 13 v26 l-22 13 l-22 -13 v-26z"/>
          <path d="M96 58 l12 7 v14 l-12 7 l-12 -7 v-14z" opacity=".75"/>
          <path d="M28 70 l10 6 v12 l-10 6 l-10 -6 v-12z" opacity=".6"/>
        </g>
        <path d="M60 18 v52 M38 31 l44 26 M82 31 l-44 26" stroke="rgba(255,255,255,.35)" stroke-width=".8"/>`, 'class="scHex"')}
      ${svg("0 0 80 30", `<ellipse cx="40" cy="12" rx="30" ry="9" fill="#C9A55A"/><path d="M14 12 h52" stroke="#8C6A2A" stroke-width="1"/><rect x="30" y="20" width="20" height="5" rx="2" fill="#8C6A2A"/><path d="M70 12 l8 -5 v10z" fill="#8C6A2A"/>`, 'class="scShip"')}
      ${svg("0 0 400 64", `
        <path d="M0 64 V40 Q120 30 240 42 T400 36 V64Z" fill="#0F2F33" opacity=".7"/>
        <g fill="none" stroke="#0A1416" stroke-width="7"><path d="M140 64 V34 Q140 24 150 24 H210"/><path d="M230 64 V18 H280 Q292 18 292 30 V64"/><path d="M320 64 V28 H400"/></g>
        <g fill="#0A1416"><rect x="200" y="14" width="12" height="50"/><rect x="352" y="6" width="10" height="58"/><rect x="262" y="40" width="40" height="24"/></g>
        <g fill="none" stroke="#FF3FA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M268 48 l6 8 6 -10 6 10"/><path d="M152 30 l8 8 M160 30 l-8 8"/><path d="M330 34 l4 -6 4 6 -4 6z"/>
        </g>
        <g fill="#7CF29A" opacity=".55"><circle cx="208" cy="10" r="4"/><circle cx="214" cy="4" r="3"/><circle cx="357" cy="2" r="3"/></g>`, 'class="scHorizon" preserveAspectRatio="xMaxYMax meet"')}
      <div class="scHaze"></div>`,
    // Die Insel: Abendrot über dem Meer mit Wellen, Dschungelblätter, Wrack am Strand, Luke im Sand
    insel: ()=> `<div class="scSea"><span></span><span></span></div>
      ${svg("0 0 140 120", `
        <g fill="#16351F">
          <path d="M140 0 C110 6 96 26 98 50 C112 38 126 36 140 40Z"/>
          <path d="M140 30 C112 44 104 70 116 96 C122 74 132 62 140 58Z"/>
          <path d="M104 0 C92 18 70 26 52 24 C70 34 92 28 110 10Z"/>
          <path d="M120 0 C118 16 104 30 86 38 C110 40 126 26 130 0Z"/>
        </g>
        <g stroke="#24502F" stroke-width="1.2" fill="none"><path d="M98 50 C112 36 126 34 140 40"/><path d="M52 24 C72 30 92 26 110 10"/></g>`, 'class="scLeaves"')}
      ${svg("0 0 400 64", `
        <path d="M140 64 C200 52 300 54 400 50 V64Z" fill="#C8B184"/>
        <g fill="#2B2D2F"><path d="M220 54 l64 -12 l4 3 l-60 13z"/><rect x="292" y="40" width="44" height="14" rx="7"/><path d="M336 42 l10 -8 v20 l-10 -2z"/><circle cx="300" cy="47" r="2.5" fill="#1A1C1E"/><circle cx="310" cy="47" r="2.5" fill="#1A1C1E"/><circle cx="320" cy="47" r="2.5" fill="#1A1C1E"/></g>
        <ellipse cx="180" cy="58" rx="16" ry="4" fill="#4A5A4A" stroke="#2B352B"/>
        <text x="180" y="60" text-anchor="middle" font-size="3.4" fill="#C8D6C2" font-family="monospace" letter-spacing=".4">4 8 15 16 23 42</text>`, 'class="scHorizon" preserveAspectRatio="xMaxYMax meet"')}`,
    // Akte: Sturmwolken, Regen, Nebel, Klippe mit Anstalt und Leuchtturm; der Lichtkegel streicht waagerecht über das Meer
    akte: ()=> `<div class="scRain"></div><div class="scFog"></div><div class="scFlash"></div>
      ${svg("0 0 400 64", `
        <path d="M200 64 V44 C230 36 260 30 300 28 L400 26 V64Z" fill="#161F27"/>
        <g fill="#0E141A"><rect x="236" y="22" width="44" height="12"/><path d="M234 22 l24 -8 24 8z"/><rect x="284" y="26" width="18" height="8"/></g>
        <g fill="#C9B66A" opacity=".55"><rect x="240" y="26" width="2" height="3"/><rect x="248" y="26" width="2" height="3"/><rect x="262" y="26" width="2" height="3"/><rect x="270" y="26" width="2" height="3"/></g>
        <path d="M232 36 h76" stroke="#0E141A" stroke-width="1" stroke-dasharray="1.5 2"/>`, 'class="scHorizon" preserveAspectRatio="xMaxYMax meet"')}
      ${svg("0 0 60 140", `
        <path d="M22 140 L26 50 H34 L38 140Z" fill="#11181F"/>
        <path d="M24 70 h12 M23.4 92 h13.2 M22.8 114 h14.4" stroke="#7A2A2A" stroke-width="5"/>
        <rect x="24" y="40" width="12" height="10" fill="#F4E3A1"/>
        <path d="M22 40 H38 L30 30Z" fill="#11181F"/><rect x="21" y="49" width="18" height="3" fill="#11181F"/>`, 'class="scTower" preserveAspectRatio="xMidYMax meet"')}
      <span class="scBeam"></span><span class="scLampGlow"></span>`,
    // Brigade: Dunstabzug, hängende Kellen und Pfannen, Wärmelampen, Bon-Leiste mit Bons, Dampf
    brigade: ()=> `<div class="scLamps">${[0,1,2].map(()=>'<span class="scLamp"></span>').join("")}</div>
      ${svg("0 0 120 70", `
        <path d="M0 4 H120" stroke="#8A9196" stroke-width="3"/>
        <g fill="#AEB5BA"><path d="M14 4 v30" stroke="#AEB5BA" stroke-width="2"/><ellipse cx="14" cy="40" rx="7" ry="5"/>
        <path d="M44 4 v18" stroke="#AEB5BA" stroke-width="2"/><circle cx="44" cy="34" r="12"/><circle cx="44" cy="34" r="8" fill="#5E666C"/>
        <path d="M80 4 v22" stroke="#AEB5BA" stroke-width="2"/><path d="M73 26 h14 v14 a7 7 0 0 1 -14 0z"/>
        <path d="M106 4 v36" stroke="#AEB5BA" stroke-width="2"/><path d="M101 40 h10 l-2 14 h-6z"/></g>`, 'class="scHang"')}
      <div class="scRail">${["Tisch 4","Tisch 9","Tisch 12"].map(t=>`<span><b>${t}</b><i></i><i></i><i></i></span>`).join("")}</div>
      <div class="scSteam"><span></span><span></span><span></span></div>`,
  };

  function mountScene(){
    document.querySelectorAll(".skinScene").forEach(el=> el.remove());
    const make = SCENES[skin()];
    if(!make || !document.body.classList.contains("fieldPage")) return;
    const el = document.createElement("div");
    el.className = `skinScene skinScene-${skin()}${document.body.classList.contains("layout-home") ? "" : " scList"}`;
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
    ], { duration: 450, easing: "cubic-bezier(.3,.7,.2,1)" }).onfinish = ()=> pod.remove();
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

  // ---------- Szenen anhalten, wenn der Kopf weggescrollt ist (spart Akku) ----------
  let sceneIO = null;
  function watchScene(){
    sceneIO?.disconnect();
    const el = document.querySelector(".skinScene");
    if(!el || !("IntersectionObserver" in window)) return;
    sceneIO = new IntersectionObserver(([e])=>{
      el.classList.toggle("scPaused", !e.isIntersecting);
      el.querySelectorAll("svg").forEach(s=> e.isIntersecting ? s.unpauseAnimations?.() : s.pauseAnimations?.());
    });
    sceneIO.observe(el);
  }

  // ---------- Stimme je Skin: Leertexte, „Heute für dich“, Timer-Hinweis ----------
  const VOICE = {
    "Die Liste ist leer": { nordwall:"Die Vorratskammer ist leer", zauberschule:"Noch kein Zutatenzettel", jahr3000:"Keine Lieferung ausstehend", zweistaedte:"Nichts hier. Noch nicht.", insel:"Keine Vorräte auf der Insel", akte:"Die Akte ist leer", brigade:"Mise en place leer, Chef" },
    "Noch keine Favoriten": { nordwall:"Noch kein Haus gewählt", zauberschule:"Noch keine Lieblingsrezepte", jahr3000:"Noch nichts gespeichert", zweistaedte:"Noch keine Lieblinge", insel:"Noch nichts gefunden", akte:"Keine Vermerke", brigade:"Noch keine Signature-Gerichte" },
    "Keine Rezepte gefunden": { nordwall:"Kein Rezept in diesen Landen", zauberschule:"Kein Rezept in der Bibliothek", jahr3000:"Kein Treffer im Speicher", zweistaedte:"Nichts gefunden, oben wie unten", insel:"Nichts gefunden. Noch nicht.", akte:"Keine passende Akte", brigade:"Steht nicht auf der Karte" },
    "Noch nichts eingefroren": { nordwall:"Die Eiskammer ist leer", zauberschule:"Noch nichts konserviert", jahr3000:"Kryo-Fach leer", zweistaedte:"Nichts auf Eis", insel:"Nichts in der Kühlung", akte:"Kein Eintrag im Kühlraum", brigade:"Walk-in leer" },
    "Heute für dich": { nordwall:"Heute an der Tafel", zauberschule:"Heute in der Großen Halle", jahr3000:"Heute aus dem Menü-o-mat", zweistaedte:"Heute oben und unten", insel:"Heute auf der Insel", akte:"Der heutige Fall", brigade:"Heute auf dem Pass" },
    "Timer abgelaufen": { nordwall:"Ein Rabe bringt Nachricht", zauberschule:"Eine Eule bringt Nachricht", jahr3000:"Ding. Fertig.", zweistaedte:"Fertig.", insel:"Die Zeit ist um", akte:"Zeit ist um", brigade:"Hände, Chef!" },
  };
  function voice(root = document){
    root.querySelectorAll(".uEmptyTitle, .homeEmptyTitle, .homeSectionTitle, .timerAlertTitle").forEach(el=>{
      const orig = el.dataset.voiceOrig || el.textContent.trim();
      const map = VOICE[orig];
      if(!map) return;
      el.dataset.voiceOrig = orig;
      const want = map[skin()] || orig;
      if(el.textContent !== want) el.textContent = want;
    });
  }

  // ---------- Zauberschule: goldene Funken beim Abhaken, Kochen und Bewerten ----------
  document.addEventListener("click", (e)=>{
    if(skin() !== "zauberschule" || reduce()) return;
    if(!e.target.closest("#shopList .uRow, #ingredientsList .uRow, .recipeBody ol > li, #cookingModeQuick, #cookNext, .star, .cookChk")) return;
    for(let i = 0; i < 7; i++){
      const sp = document.createElement("span");
      sp.className = "magicSpark";
      sp.style.left = e.clientX + "px"; sp.style.top = e.clientY + "px";
      document.body.appendChild(sp);
      const a = (i / 7) * Math.PI * 2 + Math.random() * .6, d = 22 + Math.random() * 18;
      sp.animate([{ transform: "translate(-50%,-50%) scale(1)", opacity: 1 }, { transform: `translate(calc(-50% + ${Math.cos(a) * d}px), calc(-50% + ${Math.sin(a) * d}px)) scale(.2)`, opacity: 0 }],
        { duration: 450, easing: "cubic-bezier(.2,.8,.2,1)" }).onfinish = ()=> sp.remove();
    }
  });

  // ---------- Brigade: „Zur Liste“ druckt einen Bon ----------
  document.addEventListener("click", (e)=>{
    if(skin() !== "brigade" || !e.target.closest("#addToShopping")) return;
    const name = document.querySelector(".recipeHeroText .recipeName, .recipeName")?.textContent.trim() || "Rezept";
    const bon = document.createElement("div");
    bon.className = "bonSlip"; bon.setAttribute("aria-hidden", "true");
    bon.innerHTML = `<b>BON · MISE EN PLACE</b><span>${name.replace(/[<>&]/g, "")}</span><span>→ Liste</span>`;
    document.body.appendChild(bon);
    const kf = reduce() ? [{ opacity: 0 }, { opacity: 1, offset: .2 }, { opacity: 1, offset: .8 }, { opacity: 0 }]
      : [{ transform: "translate(-50%,-110%)" }, { transform: "translate(-50%,0)", offset: .25 }, { transform: "translate(-50%,0)", offset: .8 }, { transform: "translate(-50%,-110%)" }];
    bon.animate(kf, { duration: 1600, easing: "cubic-bezier(.2,.8,.2,1)" }).onfinish = ()=> bon.remove();
  });

  // ---------- Logo je Skin (assets/logos/<skin>.svg; Standard/Retro haben ihre eigenen) ----------
  const LOGOS = ["terminal","diner","bauhaus","nordwall","zauberschule","jahr3000","zweistaedte","insel","akte","brigade"];
  function skinLogo(){
    const img = document.querySelector(".homeBrand .logoSkin");
    if(!img) return;
    const on = LOGOS.includes(skin());
    img.hidden = !on;
    if(on) img.src = `/assets/logos/${skin()}.svg?v=1`;
  }

  function apply(){ mountScene(); watchScene(); futureDate(); markCooked(); skinLogo(); voice(); }
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
    if(home) new MutationObserver(()=>{ clearTimeout(init.t); init.t = setTimeout(()=>{ markCooked(); sizeScene(); voice(); }, 60); }).observe(home, { childList: true, subtree: true });
    // Timer-Hinweis (entsteht in cook-timer.js) bekommt beim Öffnen die Stimme des Skins
    new MutationObserver(()=>{ const t = document.querySelector('.timerAlert.open'); if(t) voice(t); }).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['class'] });
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
