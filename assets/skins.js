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
    // Welten mit eigenem Material (Abschnitt 48 · 16): Szene = Untergrund des Felds, kein Wetter, kein 3D
    // Nordwall: Landkarte auf dem Kartentisch (Küsten, Berge, Kompassrose)
    nordwall: ()=> `<div class="nwMap">${svg("0 0 370 400", `
        <g fill="none" stroke="#6B4E2A" stroke-width="1.4" opacity=".55"><path d="M0 300 C40 280 60 310 90 290 S150 250 170 270 210 320 260 300 330 250 370 270"/>
        <path d="M30 0 C40 40 20 70 50 100 S60 160 40 190"/><path d="M300 0 C280 50 320 80 300 120 S330 170 370 160"/>
        <path d="M200 60 c10 -8 22 -8 30 0 c-6 10 -20 12 -30 0z"/><path d="M90 140 c20 -10 40 -6 52 6 c-16 14 -40 12 -52 -6z"/></g>
        <g fill="#6B4E2A" opacity=".38"><path d="M120 330 l8 -14 8 14z M140 336 l8 -14 8 14z M250 340 l7 -12 7 12z M60 230 l7 -12 7 12z M76 236 l7 -12 7 12z"/></g>
        <g stroke="#6B4E2A" stroke-dasharray="3 4" fill="none" opacity=".45"><path d="M40 360 C120 330 200 380 330 330"/></g>
        <g transform="translate(320 352)" fill="none" stroke="#6B4E2A" opacity=".6"><circle r="22"/><circle r="15" stroke-dasharray="2 3"/><path d="M0 -28 L4 0 0 28 -4 0Z" fill="#7D1C1C" stroke="none"/></g>`, 'preserveAspectRatio="none"')}</div>`,
    // Jahr 3000: Zeichentrick-Himmel mit Ringplanet und Wolken
    jahr3000: ()=> `<span class="j3Planet"></span><span class="j3Cloud" style="left:-40px;top:calc(env(safe-area-inset-top) + 250px);width:90px;height:34px"></span>
      <span class="j3Cloud" style="right:-24px;top:calc(env(safe-area-inset-top) + 330px);width:96px;height:32px"></span>`,
    // Zwei Städte: Art-déco-Strahlen der Oberstadt
    zweistaedte: ()=> `<span class="zwRays"></span>`,
    // Akte: Regen läuft am Fenster des Büros herab, Fensterkreuz
    akte: ()=> `<span class="akWindow"></span><span class="akRain"></span><span class="akRain akRain2"></span>`,
    brigade: ()=> `<div class="passClock"><span class="pcDigits"></span><span class="pcMeta"><b>Küche läuft</b><i class="pcDay"></i></span></div>`,
  };

  // ---------- Brigade: LED-Uhr ----------
  // Segmente a–g als Sechsecke in einem 20 × 34 großen Feld; leuchtende in Rot, die anderen als schwacher Schatten
  const SEG = { a:"4,2 16,2 18,4 16,6 4,6 2,4", b:"18,4 20,6 20,15 18,17 16,15 16,6", c:"18,17 20,19 20,28 18,30 16,28 16,19",
    d:"4,28 16,28 18,30 16,32 4,32 2,30", e:"2,17 4,19 4,28 2,30 0,28 0,19", f:"2,4 4,6 4,15 2,17 0,15 0,6", g:"4,15 16,15 18,17 16,19 4,19 2,17" };
  const ON = ["abcdef","bc","abged","abgcd","fgbc","afgcd","afgedc","abc","abcdefg","abcfgd"];
  const ledDigit = (n)=> `<svg viewBox="-1 0 22 34" class="pcD" aria-hidden="true">${Object.entries(SEG).map(([k, pts])=> `<polygon points="${pts}"${ON[n].includes(k) ? ' class="on"' : ""}/>`).join("")}</svg>`;
  const ledColon = `<svg viewBox="0 0 6 34" class="pcC" aria-hidden="true"><circle cx="3" cy="11" r="2" class="on"/><circle cx="3" cy="23" r="2" class="on"/></svg>`;
  let clockT = null;
  function passClock(){
    clearInterval(clockT);
    const el = document.querySelector(".passClock .pcDigits");
    if(skin() !== "brigade" || !el) return;
    const day = document.querySelector(".passClock .pcDay");
    const tick = ()=>{
      if(document.hidden) return;
      const d = new Date(), p = (n)=> String(n).padStart(2, "0"), t = activeTimer();
      const str = t ? fmtLeft(t.left) : `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
      const meta = document.querySelector(".passClock .pcMeta b"); if(meta) meta.textContent = t ? timerLine(t.label, t.title) : "Küche läuft";
      el.closest(".passClock")?.classList.toggle("isTimer", !!t); markTimerVisible();
      if(el.dataset.t === str) return;
      el.dataset.t = str;
      el.innerHTML = [...str].map((c)=> c === ":" ? ledColon : ledDigit(+c)).join("");
      if(day) day.textContent = d.toLocaleDateString("de-DE", { weekday: "short", day: "2-digit", month: "2-digit" }).toUpperCase();
    };
    tick(); clockT = setInterval(tick, 1000);
  }

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
    "Heute für dich": { nordwall:"Heute an der Tafel", zauberschule:"Heute in der Großen Halle", jahr3000:"Heute aus dem Menü-o-mat", zweistaedte:"Unten kocht es", insel:"Heute auf der Insel", akte:"Der heutige Fall", brigade:"Heute auf dem Pass" },
    "Ton aus": { insel:"Eingabe", brigade:"Gehört, Chef", nordwall:"Gelesen", zauberschule:"Verstanden" },
    "Timer abgelaufen": { nordwall:"Ein Rabe bringt Nachricht", zauberschule:"Eine Eule bringt Nachricht", jahr3000:"Ding. Fertig.", zweistaedte:"Fertig.", insel:"Die Zeit ist um", akte:"Zeit ist um", brigade:"Hände, Chef!" },
  };
  const PLACEHOLDER = {
    "Rezept suchen": { zauberschule:"Im Zauberbuch suchen", nordwall:"In den Archiven suchen", insel:"Datenbank durchsuchen", jahr3000:"Im Weltraum-Netz suchen", zweistaedte:"Baupläne durchsuchen" },
    "Rezept oder Zutat": { zauberschule:"Rezept oder Zutat finden", nordwall:"Rezept oder Zutat", insel:"Eintrag oder Zutat", jahr3000:"Rezept oder Zutat scannen", zweistaedte:"Bauplan oder Zutat" },
  };
  function placeholders(){
    document.querySelectorAll("#homeSearch, #searchInput").forEach((el)=>{
      const orig = el.dataset.phOrig || el.placeholder;
      el.dataset.phOrig = orig;
      el.placeholder = PLACEHOLDER[orig]?.[skin()] || orig;
    });
  }
  function voice(root = document){
    root.querySelectorAll(".uEmptyTitle, .homeEmptyTitle, .homeSectionTitle, .timerAlertTitle, .timerAlertBtn.primary").forEach(el=>{
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

  // =====================================================================================================
  // Ausbau je Skin (Wunsch des Besitzers, Nov. 2026): Elemente tragen .skinBit + data-for und verschwinden beim Skin-Wechsel.
  // =====================================================================================================
  const $ = (q, r = document)=> r.querySelector(q);
  const esc2 = (t)=> String(t ?? "").replace(/[&<>"']/g, m=>({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[m]));
  const readLS = (k, fb)=>{ try{ const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; }catch{ return fb; } };
  const allRecipes = ()=>{ try{ return JSON.parse($("#allRecipesJson")?.textContent || "[]"); }catch{ return []; } };
  function bit(cls, forSkin, tag = "div"){ const el = document.createElement(tag); el.className = `skinBit ${cls}`; el.dataset.for = forSkin; return el; }
  function cleanBits(){ document.querySelectorAll(".skinBit").forEach(el=>{ if(el.dataset.for !== skin()) el.remove(); }); }
  const rating = (id)=>{ const n = readLS("kochbuch.notes", {}); const e = n[id] || n[id?.replace(/\/$/, "")]; return Number(e?.rating || 0); };
  const statOf = (id)=>{ const st = readLS("kochbuch.stats", {}); return st[id] || st[id?.replace(/\/$/, "")] || {}; };

  // Zauberschule: Wochenpunkte-Pokal im Feld der Startseite (gekochte Gerichte seit Montag, Ziel 5)
  function houseCup(){
    const host = $(".homeGreeting");
    if(skin() !== "zauberschule" || !host || $(".houseCup")) return;
    const st = readLS("kochbuch.stats", {});
    const mon = new Date(); mon.setHours(0,0,0,0); mon.setDate(mon.getDate() - ((mon.getDay() + 6) % 7));
    let n = 0;
    Object.values(st).forEach(e=> (e?.history || []).forEach(h=>{ if(Date.parse(h) >= mon.getTime()) n++; }));
    const fill = Math.min(1, n / 5);
    const el = bit("houseCup", "zauberschule");
    el.setAttribute("role", "img"); el.setAttribute("aria-label", `Wochenpunkte: ${n} Gerichte diese Woche gekocht`);
    el.innerHTML = `<svg viewBox="0 0 48 56" aria-hidden="true"><defs><clipPath id="cupIn"><path d="M10 6 H38 C38 22 32 30 24 30 C16 30 10 22 10 6Z"/></clipPath>
      <linearGradient id="cupGold" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9C7A2A"/><stop offset=".45" stop-color="#F3D27A"/><stop offset="1" stop-color="#9C7A2A"/></linearGradient></defs>
      <g clip-path="url(#cupIn)"><rect x="8" y="${6 + 24 * (1 - fill)}" width="32" height="26" fill="#E2B84F"/><rect x="8" y="${6 + 24 * (1 - fill)}" width="32" height="2" fill="#FFF0B8"/></g>
      <path d="M10 6 H38 C38 22 32 30 24 30 C16 30 10 22 10 6Z" fill="none" stroke="url(#cupGold)" stroke-width="2.4"/>
      <path d="M10 10 C3 10 3 20 12 21 M38 10 C45 10 45 20 36 21" fill="none" stroke="url(#cupGold)" stroke-width="2.2"/>
      <path d="M24 30 V40 M16 48 H32 L30 42 H18Z" fill="url(#cupGold)" stroke="url(#cupGold)" stroke-width="2" stroke-linejoin="round"/></svg>
      <span><b>${n}</b> ${n === 1 ? "Gericht" : "Gerichte"}<br>diese Woche</span>`;
    host.appendChild(el);
  }

  // Jahr 3000: Werbespot im Röhrenfernseher (zufälliges Rezept des Tages) unter der Heute-Karte
  function tvAd(){
    const after = $(".homeToday");
    if(skin() !== "jahr3000" || !after || $(".tvAd")) return;
    const list = allRecipes().filter(r=> r.image);
    if(!list.length) return;
    const day = Math.floor(Date.now() / 864e5), r = list[(day * 7 + 3) % list.length];
    const el = bit("tvAd section", "jahr3000", "section");
    el.innerHTML = `<a class="tvSet" href="${esc2(r.url)}"><span class="tvScreen"><img src="${esc2(r.image)}" alt="" loading="lazy"><span class="tvCopy"><small>Werbung</small><b>Jetzt neu im Menü-o-mat</b><span>${esc2(r.title)}</span></span></span><span class="tvKnobs" aria-hidden="true"><i></i><i></i></span></a>`;
    after.after(el);
  }

  // Jahr 3000: Kryo-Kammer – jede Portion zeigt, wie lange sie schon eingefroren ist (läuft live)
  let cryoTimer = null;
  function cryo(){
    clearInterval(cryoTimer);
    const t1 = $(".pageTitleBlock .h1[data-orig]"); if(t1 && skin() !== "jahr3000"){ t1.textContent = t1.dataset.orig; delete t1.dataset.orig; }
    if(skin() !== "jahr3000" || !$("#freezerList")) return;
    const f = readLS("kochbuch.freezer", {});
    const tick = ()=> document.querySelectorAll(".freezerCard").forEach(card=>{
      const added = Date.parse(f[card.dataset.id]?.added || ""); if(!added) return;
      let el = card.querySelector(".cryoClock");
      if(!el){ el = bit("cryoClock", "jahr3000"); el.setAttribute("aria-hidden", "true"); card.querySelector(".freezerTop")?.appendChild(el); }
      const s = Math.max(0, Math.floor((Date.now() - added) / 1000)), d = Math.floor(s / 86400), p = (n)=> String(n).padStart(2, "0");
      el.innerHTML = `<small>Kryo-Schlaf</small><b>${d}<i>T</i> ${p(Math.floor(s % 86400 / 3600))}:${p(Math.floor(s % 3600 / 60))}:${p(s % 60)}</b>`;
    });
    const h1 = $(".pageTitleBlock .h1");
    if(h1 && document.body.dataset.page === "kuehltruhe"){ h1.dataset.orig ||= h1.textContent; h1.textContent = "Kryo-Kammer"; }
    tick(); cryoTimer = setInterval(tick, 1000);
  }

  // Akte: Aktenkopf auf der Rezeptseite (Fall-Nr., zuletzt gekocht, Bewertung, Status)
  function caseHeader(){
    const seg = $("#recipeSegWrap"), D = window.RECIPE_DATA;
    if(skin() !== "akte" || !seg || !D || $(".caseHead")) return;
    let h = 0; for(const c of D.id) h = (h * 31 + c.charCodeAt(0)) % 997;
    const st = statOf(D.id), r = rating(D.id), last = st.lastCooked ? new Date(st.lastCooked).toLocaleDateString("de-DE") : "—";
    const el = bit("caseHead", "akte");
    el.innerHTML = `<div class="caseTop"><span>Akte Nr. ${String(h).padStart(3, "0")}</span><span class="caseStamp">${st.cookedCount ? "Abgeschlossen" : "Offen"}</span></div>
      <dl><dt>Betreff</dt><dd>${esc2(D.title)}</dd><dt>Abteilung</dt><dd>${esc2(D.category || "—")}</dd>
      <dt>Zuletzt gekocht</dt><dd>${last}${st.cookedCount ? ` (${st.cookedCount}×)` : ""}</dd><dt>Bewertung</dt><dd>${r ? "★".repeat(r) + "☆".repeat(5 - r) : "keine"}</dd></dl>`;
    seg.before(el);
  }

  // Terminal: Werte als Statusbalken (Zeit, Portionen, Bewertung, gekocht)
  function statBars(){
    const facts = $(".recipeFacts"), D = window.RECIPE_DATA;
    if(skin() !== "terminal" || !facts || !D || $(".statBars")) return;
    const txt = facts.textContent;
    const h = /(\d+)\s*Std/.exec(txt), m = /(\d+)(?:–\d+)?\s*Min/.exec(txt);
    const mins = (h ? +h[1] * 60 : 0) + (m ? +m[1] : 0);
    const st = statOf(D.id), r = rating(D.id);
    const row = (k, v, frac)=> `<div class="sbRow"><span>${k}</span><span class="sbBar"><i style="--f:${Math.max(0, Math.min(1, frac)).toFixed(2)}"></i></span><b>${v}</b></div>`;
    const el = bit("statBars", "terminal");
    el.innerHTML = row("ZEIT", mins ? `${mins} MIN` : "—", mins / 120) + row("PORT", D.baseServings, D.baseServings / 8)
      + row("WERT", r ? `${r}/5` : "—", r / 5) + row("GEKO", `${st.cookedCount || 0}×`, (st.cookedCount || 0) / 10);
    facts.after(el);
  }

  // Bauhaus: Wochenbilanz über dem Plan (Anteil Fleisch / vegetarisch / Fisch als Balken)
  function weekBalance(){
    const days = $("#weekDays");
    if(skin() !== "bauhaus" || !days) return;
    const k = { fleisch: 0, veg: 0, fisch: 0 };
    days.querySelectorAll(".planEntry:not([data-leftover])").forEach(e=>{ if(k[e.dataset.kind] !== undefined) k[e.dataset.kind]++; });
    const total = k.fleisch + k.veg + k.fisch;
    let el = $(".weekBalance");
    if(!el){ el = bit("weekBalance", "bauhaus"); days.before(el); }
    const sig = JSON.stringify(k); if(el.dataset.sig === sig) return; el.dataset.sig = sig;
    el.innerHTML = total ? `<div class="wbBar">${["fleisch","veg","fisch"].map(t=> k[t] ? `<i data-kind="${t}" style="flex:${k[t]}"></i>` : "").join("")}</div>
      <div class="wbLegend">${[["fleisch","Fleisch"],["veg","vegetarisch"],["fisch","Fisch"]].filter(([t])=> k[t]).map(([t, n])=> `<span data-kind="${t}">${k[t]} ${n}</span>`).join("")}</div>` : `<div class="wbLegend">Noch nichts geplant</div>`;
  }

  // Nordwall: Festmahl – Tage mit mehr Portionen als im Rezept bekommen ein Banner
  function feasts(){
    if(skin() !== "nordwall") return;
    document.querySelectorAll(".planDayCard").forEach(card=>{
      const feast = [...card.querySelectorAll(".planEntry")].some(e=> +e.dataset.serv > +e.dataset.base);
      card.classList.toggle("isFeast", feast);
    });
  }

  // Nordwall: letzter Schritt heißt „Das Mahl ist bereitet“; Schritte entrollen sich wie Schriftrollen
  function cookVoice(){
    const nx = $("#cookNext"); if(!nx) return;
    const t = [...nx.childNodes].find(n=> n.nodeType === 3 && n.nodeValue.trim());
    if(!t) return;
    const orig = nx.dataset.voiceOrig && t.nodeValue.trim() !== nx.dataset.voiceSet ? t.nodeValue.trim() : (nx.dataset.voiceOrig || t.nodeValue.trim());
    nx.dataset.voiceOrig = orig;
    const want = orig === "Fertig" ? ({ nordwall:"Das Mahl ist bereitet", brigade:"Service!", zauberschule:"Vollbracht", insel:"Eingabe" }[skin()] || orig) : orig;
    nx.dataset.voiceSet = want;
    if(t.nodeValue !== want) t.nodeValue = want;
  }
  function watchCook(){
    const step = $("#cookStepText"), nx = $("#cookNext");
    if(step) new MutationObserver(()=>{
      if(skin() !== "nordwall" || reduce()) return;
      step.classList.remove("unroll"); void step.offsetWidth; step.classList.add("unroll");
    }).observe(step, { childList: true });
    if(nx) new MutationObserver(cookVoice).observe(nx, { childList: true });
  }

  // Brigade: „Kochen läuft“ als Bon mit Uhrzeit
  function bonClock(){
    const nc = $(".nowCooking");
    if(!nc) return;
    let el = nc.querySelector(".bonTime");
    if(skin() !== "brigade"){ el?.remove(); return; }
    if(!el){ el = bit("bonTime", "brigade", "span"); el.setAttribute("aria-hidden", "true"); nc.appendChild(el); }
    const c = readLS("kochbuch.ui.cooking", null);
    el.textContent = `BON ${new Date(c?.t || Date.now()).toLocaleTimeString("de-DE", { hour:"2-digit", minute:"2-digit" })} · TISCH 1`;
  }

  // Brigade: die frühere Zutaten-Schranke vor dem Kochmodus ist entfallen – „Vorbereiten“ im Kochmodus (recipe.js) übernimmt das für alle Skins.

  // Die Insel: „Überrasch mich“ startet einen Countdown mit Klappziffern
  document.addEventListener("click", (e)=>{
    const a = e.target.closest('a[href*="zufall=1"]');
    if(!a || skin() !== "insel" || reduce()) return;
    e.preventDefault();
    const ov = bit("islandCount", "insel");
    ov.setAttribute("aria-hidden", "true");
    ov.innerHTML = `<div class="icPanel"><small>Die Insel wählt</small><div class="icDigits">${"4 8 15 16 23 42".split(" ").map(n=> `<span>${n}</span>`).join("")}</div></div>`;
    document.body.appendChild(ov);
    setTimeout(()=>{ location.href = a.href; }, 1500);
  });

  // Retro: einmal am Tag ein kurzes Startfenster mit Ladebalken
  function retroBoot(){
    if(skin() !== "retro" || reduce()) return;
    const today = new Date().toDateString();
    if(readLS("kochbuch.ui.retroBoot", "") === today) return;
    try{ localStorage.setItem("kochbuch.ui.retroBoot", JSON.stringify(today)); }catch{}
    const ov = bit("retroBoot", "retro");
    ov.setAttribute("aria-hidden", "true");
    ov.innerHTML = `<div class="rbWin"><div class="rbTitle">Kochbuch.exe</div><div class="rbBody"><img src="/assets/logo-retro.svg" alt="" width="32" height="32"><span>Rezepte werden geladen …</span><div class="rbBar"><i></i></div></div></div>`;
    document.body.appendChild(ov);
    setTimeout(()=> ov.classList.add("rbDone"), 1300);
    setTimeout(()=> ov.remove(), 1600);
  }

  // ---------- Uhr-Element je Welt (Startseite, im Feld unter den Schnellknöpfen) ----------
  // Läuft ein Kochtimer, zeigt es dessen Restzeit und Fortschritt, sonst die Uhrzeit. Eigene Zeichnungen, keine Serien-Logos.
  const WORLD_CLOCK = { zauberschule: 1, nordwall: 1, insel: 1, jahr3000: 1, zweistaedte: 1 };
  let worldT = null;
  function activeTimer(){
    const list = readLS("kochbuch.timers", []), now = Date.now();
    const run = (Array.isArray(list) ? list : []).filter((t)=> t && t.end > now).sort((a, b)=> a.end - b.end)[0];
    window.KOCHBUCH_TIMER_ACTIVE = !!run;
    if(!run) return null;
    const left = Math.max(0, Math.round((run.end - now) / 1000)), total = Math.max(1, run.total || left);
    return { left, total, f: Math.min(1, 1 - left / total), label: run.label || "Timer", title: run.title || "", end: run.end };
  }
  const pad2 = (n)=> String(n).padStart(2, "0");
  // wie in der „Kochen läuft“-Kapsel: 2:28, ab einer Stunde 1:02:28 (LED-Anzeigen behalten die feste Breite aus fmtLeft)
  const fmtShort = (s)=> s >= 3600 ? `${Math.floor(s / 3600)}:${pad2(Math.floor(s % 3600 / 60))}:${pad2(s % 60)}` : `${Math.floor(s / 60)}:${pad2(s % 60)}`;
  const hhmm = (ms)=> new Date(ms).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
  // „Schritt 8 · 4 Stunden“ + „Short Ribs“ → „Short Ribs · Schritt 8“
  const timerLine = (label, title)=> [title, String(label || "").split(" · ")[0]].filter(Boolean).join(" · ") || "Timer";
  // Timer auf der Startseite gerade im Bild? Dann blendet styles.css die „Kochen läuft“-Kapsel aus (kein doppelter Timer).
  let tvRaf = 0;
  function markTimerVisible(){
    const el = document.querySelector(".homeTimer, .worldClock.isTimer, .passClock.isTimer");
    let on = false;
    if(el){ const r = el.getBoundingClientRect(); on = r.bottom > 60 && r.top < innerHeight - 120; }
    document.body.classList.toggle("homeTimerVisible", on);
  }
  addEventListener("scroll", ()=>{ if(tvRaf) return; tvRaf = requestAnimationFrame(()=>{ tvRaf = 0; markTimerVisible(); }); }, { passive: true });
  const fmtLeft = (s)=> s >= 3600 ? `${Math.floor(s / 3600)}:${pad2(Math.floor(s % 3600 / 60))}:${pad2(s % 60)}` : `${pad2(Math.floor(s / 60))}:${pad2(s % 60)}`;
  const EMBLEM = {
    // Sanduhr: Sand oben/unten als Rechtecke, beschnitten durch die Glasform
    zauberschule: ()=> `<svg viewBox="0 0 48 64" class="wcEmblem" aria-hidden="true">
      <defs><clipPath id="wcGlassTop"><path d="M12 8 H36 C36 20 28 26 24 31 C20 26 12 20 12 8Z"/></clipPath>
      <clipPath id="wcGlassBot"><path d="M24 33 C28 38 36 44 36 56 H12 C12 44 20 38 24 33Z"/></clipPath>
      <linearGradient id="wcGold" x1="0" x2="1"><stop offset="0" stop-color="#8A6A22"/><stop offset=".5" stop-color="#F3D27A"/><stop offset="1" stop-color="#8A6A22"/></linearGradient></defs>
      <g clip-path="url(#wcGlassTop)"><rect class="wcSandTop" x="10" y="8" width="28" height="24" fill="#E8C46A"/></g>
      <g clip-path="url(#wcGlassBot)"><rect class="wcSandBot" x="10" y="32" width="28" height="24" fill="#E8C46A"/></g>
      <line class="wcStream" x1="24" y1="30" x2="24" y2="54" stroke="#E8C46A" stroke-width="1.2"/>
      <path d="M12 8 H36 C36 20 28 26 24 31 C20 26 12 20 12 8Z M24 33 C28 38 36 44 36 56 H12 C12 44 20 38 24 33Z" fill="rgba(255,255,255,.06)" stroke="rgba(244,231,200,.7)" stroke-width="1.2"/>
      <rect x="7" y="3" width="34" height="5" rx="1.5" fill="url(#wcGold)"/><rect x="7" y="56" width="34" height="5" rx="1.5" fill="url(#wcGold)"/>
      <path d="M9 8 V56 M39 8 V56" stroke="url(#wcGold)" stroke-width="2"/></svg>`,
    // Astrolabium: Stundenring, Minutenring, Zahnrad; Timer als roter Bogen
    nordwall: ()=> `<svg viewBox="-32 -32 64 64" class="wcEmblem" aria-hidden="true">
      <circle r="30" fill="#141619" stroke="#8C7A55" stroke-width="1.5"/>
      <g class="wcRingH">${Array.from({ length: 12 }, (_, i)=> `<rect x="-.8" y="-29" width="1.6" height="${i % 3 ? 3 : 5}" fill="#C9A55A" transform="rotate(${i * 30})"/>`).join("")}<circle r="25" fill="none" stroke="#5A4C33" stroke-width=".8"/></g>
      <g class="wcRingM">${Array.from({ length: 60 }, (_, i)=> `<rect x="-.35" y="-23.5" width=".7" height="${i % 5 ? 1.6 : 3}" fill="#9C8F78" transform="rotate(${i * 6})"/>`).join("")}</g>
      <circle class="wcArc" r="19" fill="none" stroke="#C8323C" stroke-width="2.4" stroke-dasharray="119.4" stroke-dashoffset="119.4" transform="rotate(-90)"/>
      <g class="wcGear">${Array.from({ length: 10 }, (_, i)=> `<rect x="-1.4" y="-15.5" width="2.8" height="3.4" fill="#6F6146" transform="rotate(${i * 36})"/>`).join("")}<circle r="13" fill="#2A2620" stroke="#6F6146"/></g>
      <g class="wcHand"><path d="M0 -22 L1.5 -17 L1.5 2 L-1.5 2 L-1.5 -17Z" fill="#D9DEE3"/><path d="M-4 2 H4 V3.6 H-4Z" fill="#C5A059"/><path d="M-.9 3.6 H.9 V8 H-.9Z" fill="#5A3A22"/></g><circle r="2" fill="#C9A55A"/></svg>`,
    // Klappziffern-Kasten mit Zahlenreihe
    insel: ()=> ``,
    // Visier: dunkles, breites Anzeigefeld; die Ziffern (Segmente in Neon-Grün) setzt worldClock()
    jahr3000: ()=> ``,
    // Hex-Kristall in Messingfassung
    zweistaedte: ()=> `<svg viewBox="-32 -32 64 64" class="wcEmblem" aria-hidden="true">
      <polygon points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15" fill="#0E1426" stroke="#C9A55A" stroke-width="1.6"/>
      <polygon points="0,-24 20.8,-12 20.8,12 0,24 -20.8,12 -20.8,-12" fill="none" stroke="rgba(201,165,90,.45)" stroke-width=".8"/>
      <g class="wcGem"><polygon points="0,-16 9,0 0,16 -9,0" fill="#00C8E0"/><polygon points="0,-16 9,0 0,0" fill="#7DF6FF"/><polygon points="0,16 -9,0 0,0" fill="#0090B0"/></g>
      <circle class="wcArc" r="27.5" fill="none" stroke="#FF3FA4" stroke-width="2" stroke-dasharray="172.8" stroke-dashoffset="172.8" transform="rotate(-90)"/></svg>`,
  };
  const CLOCK_LABEL = { zauberschule: "Zeit im Schloss", nordwall: "Stunde der Wache", insel: "Stationszeit", jahr3000: "Bordzeit · Visier", zweistaedte: "Hextech-Zeit" };
  // ---------- Timer auf der Startseite für alle Skins ohne eigenes Uhr-Element (Standard, Retro, Terminal, Diner, Bauhaus, Akte) ----------
  // Nur sichtbar, solange ein Kochtimer läuft; Antippen öffnet den Kochmodus des Rezepts.
  let homeTimerT = null;
  const EGG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5.5 15.5a6.5 6.5 0 0 0 13 0c0-4.5-3-9-6.5-9s-6.5 4.5-6.5 9z"/><path d="M12 6.5V4M10.5 4h3"/><path d="M12 15l2.5-2"/></svg>`;
  function homeTimer(){
    clearInterval(homeTimerT);
    const quick = document.querySelector(".homeQuick");
    const off = WORLD_CLOCK[skin()] || skin() === "brigade" || !quick || !document.body.classList.contains("layout-home");
    if(off){ document.querySelector(".homeTimer")?.remove(); markTimerVisible(); return; }
    const tick = ()=>{
      if(document.hidden) return;
      const list = readLS("kochbuch.timers", []), now = Date.now();
      const run = (Array.isArray(list) ? list : []).filter((t)=> t && t.end > now).sort((a, b)=> a.end - b.end);
      let el = document.querySelector(".homeTimer");
      if(!run.length){ el?.remove(); return; }
      const t = run[0], left = Math.round((t.end - now) / 1000), f = Math.min(1, Math.max(0, 1 - left / Math.max(1, t.total || left)));
      if(!el){
        el = document.createElement("a");
        el.className = "homeTimer pressable";
        el.innerHTML = `<span class="htIcon">${EGG}</span><span class="htText"><span class="htTop"><b class="htTime"></b><span class="htEnd"></span></span><span class="htLabel"></span></span><span class="htMore"></span><i class="htBar" aria-hidden="true"></i>`;
        quick.after(el);
      }
      el.href = t.url ? t.url + (t.url.includes("?") ? "&" : "?") + "kochen=1" : "#";
      const str = fmtShort(left);
      el.querySelector(".htTime").textContent = str;
      el.querySelector(".htEnd").textContent = `fertig um ${hhmm(t.end)}`;
      el.querySelector(".htLabel").textContent = timerLine(t.label, t.title);
      el.querySelector(".htMore").textContent = run.length > 1 ? `+${run.length - 1}` : "";
      el.querySelector(".htBar").style.transform = `scaleX(${f.toFixed(3)})`;
      el.setAttribute("aria-label", `Timer ${timerLine(t.label, t.title)}: noch ${str}, fertig um ${hhmm(t.end)}`);
      markTimerVisible();
    };
    const tick0 = tick; tick0(); homeTimerT = setInterval(()=>{ tick0(); if(!document.querySelector(".homeTimer")) markTimerVisible(); }, 1000);
  }

  function worldClock(){
    clearInterval(worldT);
    const sk = skin();
    const host = $(".homeQuick");
    if(!WORLD_CLOCK[sk] || !host || !document.body.classList.contains("layout-home")) return;
    let el = $(".worldClock");
    if(!el){
      el = bit("worldClock", sk);
      el.setAttribute("role", "timer"); el.setAttribute("aria-live", "off");
      el.innerHTML = `${EMBLEM[sk]()}<div class="wcText"><b class="wcTime"></b><span class="wcLabel"></span>${sk === "insel" ? '<span class="wcNums" aria-hidden="true">4 8 15 16 23 42</span>' : ""}</div>`;
      host.after(el);
    }
    const timeEl = el.querySelector(".wcTime"), labelEl = el.querySelector(".wcLabel");
    const tick = ()=>{
      if(document.hidden) return;
      const t = activeTimer(), d = new Date();
      const str = t ? fmtLeft(t.left) : `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
      const f = t ? t.f : d.getSeconds() / 60;
      el.classList.toggle("isTimer", !!t);
      el.classList.toggle("wcIdle", !t);
      if(sk === "insel"){
        // Klappziffern: nur geänderte Felder klappen
        if(timeEl.dataset.t !== str){
          const old = timeEl.dataset.t || "";
          timeEl.innerHTML = [...str].map((c, i)=> c === ":" ? `<i class="wcSep">:</i>` : `<span class="wcFlap${old[i] !== undefined && old[i] !== c ? " flip" : ""}">${c}</span>`).join("");
          timeEl.dataset.t = str;
        }
      } else if(sk === "jahr3000"){
        // Visier: Segmentziffern springen blockweise weiter
        if(timeEl.dataset.t !== str){ timeEl.innerHTML = [...str].map((c)=> c === ":" ? ledColon : ledDigit(+c)).join(""); timeEl.dataset.t = str; }
      } else timeEl.textContent = str;
      // Insel: unter 4 Minuten Alarm-Rot, die Zahlenreihe blinkt
      el.classList.toggle("isAlarm", !!t && t.left < 240);
      labelEl.textContent = t ? `bis ${hhmm(t.end)} · ${timerLine(t.label, t.title)}` : CLOCK_LABEL[sk];
      markTimerVisible();
      el.setAttribute("aria-label", t ? `Timer ${t.label}: noch ${str}` : `Uhrzeit ${str}`);
      if(sk === "zauberschule"){
        const ff = t ? t.f : f;
        el.querySelector(".wcSandTop").setAttribute("y", String(8 + 24 * ff));
        el.querySelector(".wcSandBot").setAttribute("y", String(56 - 24 * ff));
        el.querySelector(".wcStream").style.opacity = t || !reduce() ? 1 : 0;
      }
      if(sk === "nordwall"){
        el.querySelector(".wcRingH").style.transform = `rotate(${(d.getHours() % 12) * 30 + d.getMinutes() / 2}deg)`;
        el.querySelector(".wcRingM").style.transform = `rotate(${-d.getMinutes() * 6}deg)`;
        el.querySelector(".wcGear").style.transform = `rotate(${d.getSeconds() * 6}deg)`;
        el.querySelector(".wcHand").style.transform = `rotate(${d.getSeconds() * 6}deg)`;
      }
      const arc = el.querySelector(".wcArc");
      if(arc){ const L = +arc.getAttribute("stroke-dasharray"); arc.style.strokeDashoffset = String(t ? L * (1 - t.f) : L); }
    };
    tick(); worldT = setInterval(tick, 1000);
  }

  // ---------- Welt-Elemente der Startseite (Abschnitt 48 · 16) ----------
  const WD = ()=> new Date();
  function isoWeek(d){ const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())); const day = t.getUTCDay() || 7; t.setUTCDate(t.getUTCDate() + 4 - day); const y0 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1)); return Math.ceil(((t - y0) / 864e5 + 1) / 7); }
  const ROMAN = (n)=>{ const m = [[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]]; let r = ""; for(const [v, s] of m) while(n >= v){ r += s; n -= v; } return r; };
  function featuredInfo(){
    const link = $("#todayLink"), title = $("#todayTitle")?.textContent.trim() || "";
    const url = link?.getAttribute("href") || "";
    const r = allRecipes().find((x)=> x.url === url) || {};
    return { title, url, subtitle: r.subtitle || "", time: r.time || "", servings: r.servings || "", category: r.category || "" };
  }
  function worldHome(){
    const sk = skin(), g = $(".homeGreeting"), today = $(".homeToday");
    if(!g || !today) return;
    const d = WD(), wd = d.toLocaleDateString("de-DE", { weekday: "long" }), f = featuredInfo();
    const put = (cls, where, html, tag = "div")=>{
      let el = document.querySelector("." + cls);
      if(!el){ el = bit(cls, sk, tag); el.setAttribute("aria-hidden", "true"); where(el); }
      if(el.innerHTML !== html) el.innerHTML = html;
      return el;
    };
    if(sk === "zauberschule"){
      put("zsRun", (el)=> g.querySelector(".homeGreetingTitle").before(el), `Kapitel ${ROMAN(Math.min(39, isoWeek(d) % 40 || 1))} <b>❧</b> ${wd}`);
      put("zsRibbon", (el)=> document.body.append(el), "");
      const intro = put("zsIntro", (el)=> today.querySelector("#todayLink").before(el), "", "p");
      intro.removeAttribute("aria-hidden");
      intro.textContent = f.title ? `Heute empfiehlt das Buch ${f.title}${f.subtitle ? ", " + f.subtitle.replace(/^mit /, "mit ") : ""}. Ein Gericht für diesen ${wd}.` : "";
    }
    if(sk === "akte"){
      g.dataset.akte = `AKTE ${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      const st = readLS("kochbuch.stats", {}), cookedToday = Object.values(st).some((e)=> (e?.history || []).some((h)=> new Date(h).toDateString() === d.toDateString()));
      const meta = put("akMeta", (el)=> g.querySelector(".homeGreetingSub").after(el),
        `<span><b>Betreff:</b> Abendessen</span><span><b>Status:</b> ${cookedToday ? "abgeschlossen" : "ungeklärt"}</span>${f.title ? `<span><b>Hinweis:</b> ${esc2(f.category || f.title)}${f.time ? ", " + esc2(f.time) : ""}</span>` : ""}`);
      meta.removeAttribute("aria-hidden");
      put("akStamp", (el)=> g.append(el), cookedToday ? "Erledigt" : "Offen", "span");
      const cap = put("akCaption", (el)=> today.querySelector(".homeFeatured .rcBody").prepend(el), "Beweisstück A", "span");
    }
    if(sk === "insel"){
      put("inHdr", (el)=> g.prepend(el), `<span>Versorgung · Terminal 2</span><span>${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}</span>`);
      put("inBar", (el)=> today.querySelector(".homeFeatured").prepend(el), `<span>Eintrag ${String((isoWeek(d) * 7 + d.getDay()) % 1000).padStart(3, "0")} · heute</span><span>[ öffnen ]</span>`);
    }
    if(sk === "jahr3000") put("j3Bubble", (el)=> today.querySelector("#todayLink").before(el), "Frisch aus dem Menü-o-mat", "span");
    if(sk === "zweistaedte") put("zwTop", (el)=> g.querySelector(".homeGreetingTitle").after(el), "Oben · die goldene Stadt");
    if(sk === "brigade" && f.title){
      const now = new Date(), hh = String(now.getHours()).padStart(2, "0"), mm = String(now.getMinutes()).padStart(2, "0");
      put("brTicket", (el)=> today.querySelector("#todayLink").before(el),
        `<div class="btHead"><span>Bon ${String((now.getDate() * 37 + now.getMonth() * 11) % 9000 + 100).padStart(4, "0")}</span><span>${hh}:${mm}</span></div>
         <div class="btLine"><b>1×</b><span>${esc2(f.title)}</span></div>
         <div class="btMeta">${f.servings ? esc2(f.servings) + " Port. · " : ""}${esc2(f.time || "")}</div><div class="btFoot">Heute · Tisch 1</div>`);
    }
  }

  // =====================================================================================================
  // Abschnitt 48 · 17: Welten bis ins Detail (Blaupause des Besitzers, Dez. 2026). Klänge nur mit Schalter im Skin-Blatt
  // (kochbuch.ui.skinSound), Haptik über KOCHBUCH_UI.haptic. Keine Figuren, Logos, Zitate oder Namen aus den Serien.
  // =====================================================================================================
  const WORLDS = { nordwall: 1, zauberschule: 1, jahr3000: 1, zweistaedte: 1, insel: 1, akte: 1, brigade: 1 };
  const soundOn = ()=>{ try{ return localStorage.getItem("kochbuch.ui.skinSound") === "1"; }catch{ return false; } };
  let actx = null;
  function ac(){
    try{
      if(!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
      if(actx.state === "suspended") actx.resume();
      return actx;
    }catch{ return null; }
  }
  // Grundbausteine: Ton mit Hüllkurve, Rauschen durch Filter
  function tone(a, { f = 440, f2 = null, type = "sine", t = 0, d = .12, v = .2 }){
    const o = a.createOscillator(), g = a.createGain(), st = a.currentTime + t;
    o.type = type; o.frequency.setValueAtTime(f, st); if(f2) o.frequency.exponentialRampToValueAtTime(f2, st + d);
    g.gain.setValueAtTime(.0001, st); g.gain.exponentialRampToValueAtTime(v, st + .008); g.gain.exponentialRampToValueAtTime(.0001, st + d);
    o.connect(g); g.connect(a.destination); o.start(st); o.stop(st + d + .02);
  }
  function noise(a, { t = 0, d = .08, v = .2, type = "bandpass", f = 2000, q = 1 }){
    const len = Math.max(1, Math.floor(a.sampleRate * d)), buf = a.createBuffer(1, len, a.sampleRate), ch = buf.getChannelData(0);
    for(let i = 0; i < len; i++) ch[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const s = a.createBufferSource(), fl = a.createBiquadFilter(), g = a.createGain(), st = a.currentTime + t;
    s.buffer = buf; fl.type = type; fl.frequency.value = f; fl.Q.value = q; g.gain.value = v;
    s.connect(fl); fl.connect(g); g.connect(a.destination); s.start(st);
  }
  const SFX = {
    // Zeichentrick-Plopp (Holz), Roboter-Alarm
    jahr3000: { tap: (a)=>{ tone(a, { f: 720, f2: 160, d: .09, v: .25 }); noise(a, { d: .03, f: 900, v: .12 }); },
      alarm: (a)=>{ for(let i = 0; i < 8; i++) tone(a, { f: i % 2 ? 520 : 1040, type: "square", t: i * .16, d: .13, v: .09 }); } },
    // schwere Eisenplatte, Siegel
    nordwall: { tap: (a)=>{ tone(a, { f: 90, f2: 48, d: .22, v: .35 }); noise(a, { d: .09, type: "lowpass", f: 380, v: .3 }); } },
    // raschelndes Papier, heller Funke
    zauberschule: { tap: (a)=>{ noise(a, { d: .07, f: 3800, q: .7, v: .16 }); noise(a, { t: .06, d: .09, f: 2600, q: .7, v: .12 }); tone(a, { f: 2350, t: .03, d: .18, v: .05 }); } },
    // elektrischer Klick mit Knistern
    zweistaedte: { tap: (a)=>{ tone(a, { f: 2200, f2: 900, type: "square", d: .025, v: .07 }); noise(a, { t: .01, d: .06, type: "highpass", f: 4500, v: .14 }); } },
    // mechanische Taste
    insel: { tap: (a)=>{ noise(a, { d: .03, f: 1600, q: 2, v: .3 }); tone(a, { f: 140, f2: 70, t: .012, d: .07, v: .22 }); } },
    // Schreibmaschine
    akte: { tap: (a)=>{ noise(a, { d: .025, type: "highpass", f: 3000, v: .3 }); tone(a, { f: 180, f2: 90, d: .05, v: .15 }); } },
    // Bondrucker-Tick
    brigade: { tap: (a)=>{ tone(a, { f: 1900, type: "triangle", d: .03, v: .08 }); noise(a, { t: .01, d: .02, f: 5000, v: .08 }); } },
  };
  function sfx(kind){
    const s = SFX[skin()]?.[kind];
    if(!s || !soundOn()) return;
    const a = ac(); if(a) try{ s(a); }catch{}
  }
  // Timer-Ablauf: eigener Alarm je Welt (sonst der normale Ton aus cook-timer.js), dazu ein Bild-Effekt
  window.KOCHBUCH_SKIN_RING = (a)=>{
    const s = SFX[skin()]?.alarm;
    document.dispatchEvent(new CustomEvent("kochbuch:timerdone"));
    if(!s || !a) return false;
    try{ s(a); return true; }catch{ return false; }
  };

  const TAPS = ".homeQuickBtn, .recipeCookBtn, .recipeActBtn, .tabItem, .segBtn, .btn, #cookNext, #cookPrev, .cookNavBtn, .skinBitTap, .zsRibbon, .j3Ship";
  document.addEventListener("pointerdown", (e)=>{
    if(!WORLDS[skin()] || !e.target.closest(TAPS)) return;
    sfx("tap");
    // Insel: Taste rastet hörbar ein und bleibt kurz unten
    const key = skin() === "insel" && e.target.closest(".homeQuickBtn, .tabItem, .recipeCookBtn");
    if(key){ key.classList.add("keyDown"); setTimeout(()=> key.classList.remove("keyDown"), 160); }
  }, { passive: true });
  document.addEventListener("click", (e)=>{
    if(!WORLDS[skin()]) return;
    const hit = e.target.closest(TAPS);
    if(hit) try{ window.KOCHBUCH_UI?.haptic?.(skin() === "nordwall" ? "medium" : "light"); }catch{}
    // Zwei Städte: Funke in Hextech-Cyan an Knöpfen; Zauberschule: Gold auch an den Seitenecken-Knöpfen
    const sk = skin();
    if(reduce()) return;
    if(sk === "zweistaedte" && e.target.closest(".homeQuickBtn, .recipeCookBtn, .recipeActBtn")) sparks(e.clientX, e.clientY, "#00F0FF", 6);
    if(sk === "zauberschule" && e.target.closest(".homeQuickBtn, .recipeActBtn")) sparks(e.clientX, e.clientY, "#F3D27A", 7);
  });
  function sparks(x, y, color, n){
    for(let i = 0; i < n; i++){
      const sp = document.createElement("span");
      sp.className = "magicSpark"; sp.style.left = x + "px"; sp.style.top = y + "px"; sp.style.background = color; sp.style.boxShadow = `0 0 6px ${color}`;
      document.body.appendChild(sp);
      const a = (i / n) * Math.PI * 2 + Math.random() * .6, d = 18 + Math.random() * 16;
      sp.animate([{ transform: "translate(-50%,-50%) scale(1)", opacity: 1 }, { transform: `translate(calc(-50% + ${Math.cos(a) * d}px), calc(-50% + ${Math.sin(a) * d}px)) scale(.2)`, opacity: 0 }],
        { duration: 380, easing: "cubic-bezier(.2,.8,.2,1)" }).onfinish = ()=> sp.remove();
    }
  }

  // Timer-Ablauf als Bild: Zauberschule Rauchwolke von unten, Insel rotes Aufblitzen
  document.addEventListener("kochbuch:timerdone", ()=>{
    const sk = skin();
    if(sk !== "zauberschule" || reduce()) return;
    const sm = document.createElement("div");
    sm.className = "zsSmoke"; sm.setAttribute("aria-hidden", "true");
    sm.innerHTML = "<i></i><i></i><i></i><i></i><i></i>";
    document.body.appendChild(sm);
    setTimeout(()=> sm.remove(), 3200);
  });

  // ---------- Jahr 3000: kleines Raumschiff oben rechts, blinzelt beim Antippen ----------
  const SHIP = svg("0 0 64 40", `<path d="M6 30 C2 30 2 24 8 23 L18 20" fill="none" stroke="#1A1A1A" stroke-width="3" stroke-linecap="round"/>
    <path d="M14 22 C20 10 42 6 58 18 C46 30 24 32 14 22Z" fill="#58C4C3" stroke="#1A1A1A" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M28 12 C30 6 38 4 44 10" fill="#FF6B35" stroke="#1A1A1A" stroke-width="3" stroke-linejoin="round"/>
    <circle class="j3Eye" cx="40" cy="17" r="4.5" fill="#fff" stroke="#1A1A1A" stroke-width="2.5"/><circle class="j3Eye" cx="29" cy="19" r="3.5" fill="#fff" stroke="#1A1A1A" stroke-width="2.5"/>
    <path d="M18 26 L10 34 M24 28 L20 36" stroke="#1A1A1A" stroke-width="3" stroke-linecap="round"/>`, 'class="j3ShipSvg"');
  function j3Ship(){
    const brand = $(".homeBrand");
    if(skin() !== "jahr3000" || !brand || $(".j3Ship")) return;
    const b = bit("j3Ship", "jahr3000", "button");
    b.type = "button"; b.setAttribute("aria-label", "Raumschiff"); b.innerHTML = SHIP;
    b.addEventListener("click", ()=>{ b.classList.remove("blink"); void b.offsetWidth; b.classList.add("blink"); });
    brand.querySelector(".profileBadge")?.before(b);
  }

  // ---------- Zauberschule: Lesebändchen öffnet das Menü, Tinte fließt beim Tippen, eigene Notiz am Rand ----------
  function zsRibbonMenu(){
    const r = $(".zsRibbon");
    if(!r || r.dataset.menu) return;
    r.dataset.menu = "1"; r.removeAttribute("aria-hidden"); r.setAttribute("role", "button"); r.setAttribute("aria-label", "Menü"); r.tabIndex = 0;
    const open = ()=> document.getElementById("moreBtn")?.click();
    r.addEventListener("click", open);
    r.addEventListener("keydown", (e)=>{ if(e.key === "Enter" || e.key === " "){ e.preventDefault(); open(); } });
  }
  document.addEventListener("input", (e)=>{
    const el = e.target;
    if(el.id === "notesText"){ clearTimeout(marginNote.t); marginNote.t = setTimeout(marginNote, 300); }
    if(!el.matches?.("#homeSearch, #searchInput, #notesText") || reduce()) return;
    const cls = { zauberschule: "inkFlow", nordwall: "oreGlow" }[skin()];
    if(!cls) return;
    el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls);
  });
  function marginNote(){
    if(skin() !== "zauberschule") return;
    const id = window.RECIPE_DATA?.id, host = $(".recipeNameBlock, .recipeHeroText");
    const pane = $("#ingPane");
    if(!id || !pane) return;
    const e = readLS("kochbuch.notes", {})[id] || {};
    const txt = String(e.text || "").trim().split(/\n/)[0].slice(0, 80);
    let el = $(".zsMargin");
    if(!txt){ el?.remove(); return; }
    if(!el){ el = bit("zsMargin", "zauberschule", "p"); pane.prepend(el); }
    el.textContent = txt;
  }

  // ---------- Die Insel: Block-Cursor im Suchfeld, Protokollkopf auf der Rezeptseite ----------
  let caretCtx = null;
  function blockCaret(){
    document.querySelectorAll("#homeSearch, #searchInput").forEach((inp)=>{
      const row = inp.closest(".searchRow"); if(!row) return;
      let c = row.querySelector(".inCaret");
      if(skin() !== "insel"){ c?.remove(); return; }
      if(!c){ c = bit("inCaret", "insel", "span"); c.setAttribute("aria-hidden", "true"); row.appendChild(c); }
      const place = ()=>{
        const cs = getComputedStyle(inp);
        caretCtx = caretCtx || document.createElement("canvas").getContext("2d");
        caretCtx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
        const txt = inp.value.slice(0, inp.selectionStart ?? inp.value.length);
        const x = inp.offsetLeft + parseFloat(cs.paddingLeft) + caretCtx.measureText(txt).width - inp.scrollLeft;
        c.style.transform = `translateX(${Math.min(x, inp.offsetLeft + inp.clientWidth - 12)}px)`;
        c.classList.toggle("on", document.activeElement === inp);
      };
      if(!inp.dataset.caret){
        inp.dataset.caret = "1";
        ["input", "focus", "blur", "keyup", "click", "select"].forEach((ev)=> inp.addEventListener(ev, ()=> skin() === "insel" && place()));
        document.addEventListener("selectionchange", ()=>{ if(document.activeElement === inp && skin() === "insel") place(); });
      }
      place();
    });
  }
  function protoHead(){
    const name = $(".recipeHeroText"), d = window.RECIPE_DATA;
    if(skin() !== "insel" || !name || !d) return;
    const n = [...String(d.id || "")].reduce((s, ch)=> (s * 31 + ch.charCodeAt(0)) % 900, 7) + 100;
    let el = $(".inProto");
    if(!el){ el = bit("inProto", "insel"); el.setAttribute("aria-hidden", "true"); name.prepend(el); }
    el.textContent = `Protokoll ${n} · Rationen · ${d.baseServings || 2} Port.`;
  }

  // ---------- Akte: Schreibmaschine schlägt ungleichmäßig an (Überschriften) ----------
  function typeJitter(){
    const on = skin() === "akte";
    document.querySelectorAll(".homeGreetingTitle, .pageTitleBlock .h1, .homeSectionTitle, .recipeName").forEach((el)=>{
      if(!on){ if(el.dataset.jit){ el.textContent = el.textContent; delete el.dataset.jit; } return; }
      if(el.dataset.jit === el.textContent) return;
      const txt = el.textContent;
      let seed = 0; for(const ch of txt) seed = (seed * 33 + ch.charCodeAt(0)) % 9973;
      const rnd = ()=>{ seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
      el.innerHTML = [...txt].map((ch)=> ch === "\n" || ch === " " || ch === " " ? esc2(ch)
        : `<span class="tj" style="--y:${((rnd() - .5) * .07).toFixed(3)}em;--o:${(.74 + rnd() * .26).toFixed(2)}">${esc2(ch)}</span>`).join("");
      el.dataset.jit = txt;
    });
  }

  // ---------- Brigade: Bon kommt aus dem Drucker ----------
  function bonPrint(){
    const t = $(".brTicket");
    if(skin() !== "brigade" || !t || t.dataset.printed) return;
    t.dataset.printed = "1";
    if(reduce()) return;
    t.animate([{ clipPath: "inset(0 0 100% 0)", transform: "translateY(-18px) rotate(-1.5deg)" }, { clipPath: "inset(0 0 0 0)", transform: "translateY(0) rotate(-1.5deg)" }],
      { duration: 900, easing: "steps(9, end)" });
  }

  // ---------- Zauberschule: Siegel als Wasserzeichen im Kopf (frei gezeichnet: Stern in doppeltem Ring) ----------
  function zsSeal(){
    const g = $(".homeGreeting");
    if(skin() !== "zauberschule" || !g || $(".zsSeal")) return;
    const el = bit("zsSeal", "zauberschule"); el.setAttribute("aria-hidden", "true");
    el.innerHTML = svg("-60 -60 120 120", `<g fill="none" stroke="#2B2118" stroke-width="2"><circle r="56"/><circle r="48" stroke-dasharray="2 4"/><circle r="30"/></g>
      <path d="M0 -44 L9 -9 44 0 9 9 0 44 -9 9 -44 0 -9 -9Z" fill="#2B2118"/><circle r="6" fill="#F4EEDB"/>`);
    g.style.position = "relative"; g.prepend(el);
  }
  // ---------- Vorspann je Welt (Abschnitt 48 · 18): einmal pro Sitzung auf der Startseite und beim Wechsel auf den Skin ----------
  // Vollbild-Ebene, nur transform/opacity (Insel/Zauberschule zusätzlich clip-path), Antippen überspringt, „Bewegung reduzieren“ = keiner.
  const INTRO = {
    // Die Insel: Schriftzug treibt aus dem Dunkel auf die Kamera zu, dreht sich, rauscht vorbei – Schnitt auf Schwarz
    insel: { ms: 3400, html: ()=> `<div class="ivStage"><div class="ivWord">${[..."DIE INSEL"].map((c, i)=> c === " " ? '<i class="sp"></i>' : `<span style="--z:${[40, -30, 60, 0, -50, 30, -20, 50][i % 8]}px">${c}</span>`).join("")}</div></div>`,
      snd: (a)=>{ noise(a, { d: 2.6, type: "lowpass", f: 180, v: .5 }); tone(a, { f: 55, f2: 38, d: 2.8, v: .25 }); tone(a, { f: 70, f2: 30, t: 2.85, d: .7, v: .5 }); noise(a, { t: 2.85, d: .5, type: "lowpass", f: 400, v: .5 }); } },
    // Nordwall: Uhrwerk – Astrolabium dreht sich auf, die Karte zeichnet sich, Türme steigen ruckweise aus dem Tisch
    nordwall: { ms: 3200, html: ()=> `<svg class="ivMap" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke="#C5A059" stroke-width="1.6">
        <path d="M0 220 C60 200 90 240 140 215 S220 170 260 200 330 250 400 210"/><path d="M40 0 C55 50 25 90 60 130 S70 190 50 230"/><path d="M340 0 C320 60 360 90 340 140 S370 190 400 180"/>
        <path d="M60 260 C140 240 220 290 360 250" stroke-dasharray="4 6"/></g></svg>
      <div class="ivAstro">${EMBLEM.nordwall()}</div>
      <div class="ivTowers"><i style="--h:120px;--d:.0s"></i><i style="--h:170px;--d:.18s"></i><i style="--h:96px;--d:.32s"></i><i style="--h:140px;--d:.1s"></i><i style="--h:80px;--d:.26s"></i></div>
      <div class="ivWord">Nordwall</div>`,
      snd: (a)=>{ for(let i = 0; i < 14; i++) noise(a, { t: .2 + i * .17, d: .03, f: 2400 + (i % 2) * 900, q: 4, v: .25 }); tone(a, { f: 60, f2: 45, t: 2.3, d: .8, v: .35 }); } },
    // Zauberschule: der Name schreibt sich mit goldener Tinte, eine Funkenspitze führt die Feder, dann Funkenregen
    zauberschule: { ms: 3000, html: ()=> `<div class="ivPage"><div class="ivInk">Zauberschule<b class="ivNib"></b></div><div class="ivSub">Das Buch der Rezepte</div></div>${'<i class="ivStar"></i>'.repeat(14)}`,
      snd: (a)=>{ [1568, 1976, 2349, 2637, 3136].forEach((f, i)=> tone(a, { f, t: .3 + i * .22, d: .9, v: .06 })); noise(a, { t: .25, d: 1.3, f: 4200, q: .6, v: .05 }); } },
    // Jahr 3000: Raumschiff rauscht mit Rauchwölkchen heran und kracht in die Werbetafel
    jahr3000: { ms: 2800, html: ()=> `<div class="ivBoard"><b>Tobis Kochbuch</b><span>Jetzt mit 1000 Jahren Garzeit</span></div><div class="ivBonk">Bonk</div>
      <div class="ivShip">${SHIP}</div>${'<i class="ivPuff"></i>'.repeat(5)}`,
      snd: (a)=>{ tone(a, { f: 200, f2: 900, d: 1.3, type: "sawtooth", v: .05 }); tone(a, { f: 160, f2: 60, t: 1.42, d: .3, v: .4 }); noise(a, { t: 1.42, d: .25, f: 700, v: .4 }); tone(a, { f: 880, f2: 440, t: 1.5, d: .5, type: "square", v: .05 }); } },
    // Zwei Städte: Sprühfarbe zieht über den Schirm, dann flammt der Kristall auf und sendet einen Ring aus
    zweistaedte: { ms: 2900, html: ()=> `<svg class="ivPaint" viewBox="0 0 400 600" preserveAspectRatio="none">
        <path class="p1" d="M-20 150 C80 120 180 190 420 130 L420 175 C200 230 90 160 -20 200Z" fill="#FF3FA4"/>
        <path class="p2" d="M-20 420 C120 380 240 470 420 400 L420 430 C250 500 110 420 -20 455Z" fill="#00F0FF"/>
        <path class="p3" d="M-20 290 C140 270 260 330 420 280 L420 300 C260 350 150 300 -20 312Z" fill="#9D00FF"/></svg>
      <div class="ivGem">${EMBLEM.zweistaedte()}</div><i class="ivRing"></i><div class="ivWord">Zwei Städte</div>`,
      snd: (a)=>{ noise(a, { d: .5, type: "highpass", f: 5000, v: .18 }); noise(a, { t: .45, d: .45, type: "highpass", f: 4500, v: .14 }); tone(a, { f: 220, f2: 1760, t: 1.3, d: .5, type: "sawtooth", v: .07 }); tone(a, { f: 2637, t: 1.75, d: .7, v: .06 }); } },
    // Akte: Blitze im Sturm, dann knallt der Stempel auf die Akte
    akte: { ms: 2900, html: ()=> `<i class="ivRain"></i><i class="ivFlash"></i><div class="ivFolder"><span>Akte ${new Date().getFullYear()}/${String(new Date().getMonth() + 1).padStart(2, "0")}</span><b>Abendessen</b><em>Fall offen</em></div>`,
      snd: (a)=>{ noise(a, { d: 1.6, type: "lowpass", f: 260, v: .55 }); noise(a, { t: .35, d: 1.2, type: "lowpass", f: 160, v: .45 }); tone(a, { f: 90, f2: 40, t: 1.55, d: .25, v: .55 }); noise(a, { t: 1.55, d: .12, f: 900, v: .4 }); } },
    // Brigade: Selbsttest der LED-Uhr (88:88:88), dann läuft die Zeit und der erste Bon kommt aus dem Drucker
    brigade: { ms: 2400, html: ()=> `<div class="ivPanel"><div class="ivLed"></div><div class="ivLabel">Küche läuft</div></div><div class="ivSlot"></div><div class="ivBon"><b>Bon 0001</b><span>Service beginnt</span></div>`,
      snd: (a)=>{ [0, .25, .5].forEach((t)=> tone(a, { f: 2900, t, d: .08, type: "square", v: .05 })); for(let i = 0; i < 9; i++) noise(a, { t: 1.2 + i * .07, d: .04, f: 3000, q: 3, v: .12 }); } },
    // Boxengasse: Limetten-Vorhang mit Zähler, der Titel steigt aus der Zeile, dann fährt der Vorhang nach oben weg
    boxengasse: { ms: 1700, html: ()=> `<div class="ivLine"><span>Tobis</span><span>Kochbuch</span></div><div class="ivFoot"><span>Küche lädt</span><b class="ivNum">0</b></div>`,
      snd: (a)=>{ tone(a, { f: 180, f2: 720, d: 1.3, type: "sawtooth", v: .04 }); tone(a, { f: 1320, t: 1.45, d: .25, v: .06 }); } },
    // Bildband: Titelseite der Ausgabe – Linie zieht sich, Titel und Monat blenden ein
    bildband: { ms: 2200, html: ()=> `<div><div class="ivRule"></div><div class="ivTitle">Tobis<i>Kochbuch</i></div><div class="ivIssue">Ausgabe ${new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}</div></div>`,
      snd: (a)=>{ tone(a, { f: 523, t: .2, d: 1.2, v: .04 }); tone(a, { f: 784, t: .55, d: 1.2, v: .03 }); } },
  };
  let introOn = false;
  function playIntro(force){
    const sk = skin(), def = INTRO[sk];
    if(!def || introOn || reduce() || !document.body.classList.contains("layout-home")) return;
    let seen = ""; try{ seen = sessionStorage.getItem("kochbuch.ui.intro") || ""; }catch{}
    if(seen === sk && !force) return;
    try{ sessionStorage.setItem("kochbuch.ui.intro", sk); }catch{}
    // voll: beim Wechsel auf den Skin und beim ersten Öffnen des Tages; sonst Kurzfassung
    const today = new Date().toDateString(), dayKey = "kochbuch.ui.introDay";
    let short = false;
    try{ short = !force && localStorage.getItem(dayKey) === `${sk}|${today}`; localStorage.setItem(dayKey, `${sk}|${today}`); }catch{}
    const SPEED = short ? 4 : 1;
    introOn = true;
    const el = document.createElement("div");
    el.className = `skIntro skIntro-${sk}`; el.setAttribute("aria-hidden", "true");
    el.innerHTML = def.html();
    if(sk === "brigade"){
      const led = el.querySelector(".ivLed"), d = new Date();
      const show = (s)=> led.innerHTML = [...s].map((c)=> c === ":" ? ledColon : ledDigit(+c)).join("");
      show("88:88:88");
      setTimeout(()=> show(`${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`), 1050 / SPEED);
    }
    if(sk === "boxengasse"){
      const num = el.querySelector(".ivNum"), t0 = performance.now(), dur = (def.ms - 250) / SPEED;
      const tick = (t)=>{ const f = Math.min(1, (t - t0) / dur); num.textContent = String(Math.round(f * f * 100)).padStart(3, "0"); if(f < 1 && el.isConnected) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }
    document.body.appendChild(el);
    if(short) try{ el.getAnimations({ subtree: true }).forEach((an)=>{ an.playbackRate = SPEED; }); }catch{}
    if(soundOn() && !short){ const a = ac(); if(a && a.state === "running") try{ def.snd(a); }catch{} }
    let done = false;
    const end = ()=>{ if(done) return; done = true; el.classList.add("out"); setTimeout(()=>{ el.remove(); introOn = false; }, 520); };
    el.addEventListener("pointerdown", end);
    setTimeout(end, def.ms / SPEED);
  }
  // Wechsel auf einen Skin: Vorspann, sobald das Skin-Blatt geschlossen ist
  let introSkin = null;
  function introOnSwitch(){
    const sk = skin(), changed = introSkin !== null && introSkin !== sk;
    introSkin = sk;
    if(!changed){ playIntro(false); return; }
    const sheet = document.getElementById("skinSheet");
    const go = ()=> setTimeout(()=> playIntro(true), 150);
    if(!sheet || !sheet.classList.contains("open")) return go();
    const mo = new MutationObserver(()=>{ if(!sheet.classList.contains("open")){ mo.disconnect(); go(); } });
    mo.observe(sheet, { attributes: true, attributeFilter: ["class"] });
  }


  // ---------- Boxengasse: Aufbau und Scroll-Bewegung (assets/skins/boxengasse.css) ----------
  // Einblenden beim Scrollen (nur was beim Aufbau außerhalb des Bildschirms lag), Foto-Parallaxe in den Karten, Fortschrittslinie,
  // Laufband mit den Kategorien (läuft beim Scrollen schneller), ein Titelwort in Serifenschrift. Nur transform/opacity.
  let bxIO = null, bxParIO = null, bxRaf = 0, bxOnScroll = null;
  const bxVis = new Set();
  function bxOff(){
    bxIO?.disconnect(); bxParIO?.disconnect(); bxIO = bxParIO = null;
    if(bxOnScroll){ removeEventListener("scroll", bxOnScroll); bxOnScroll = null; }
    cancelAnimationFrame(bxRaf); bxVis.clear();
    document.querySelectorAll(".bxRv").forEach((el)=>{ el.classList.remove("bxRv", "bxRvX", "bxIn"); el.style.transitionDelay = ""; });
    document.querySelectorAll("img.bxPar").forEach((el)=>{ el.classList.remove("bxPar"); el.style.transform = ""; });
    document.querySelectorAll("[data-bx-title]").forEach((el)=>{ el.textContent = el.dataset.bxTitle; delete el.dataset.bxTitle; });
    bbStop?.(); bbStop = null;
    document.querySelectorAll("[data-bx-seen]").forEach((el)=>{ delete el.dataset.bxSeen; });
  }
  function bxTitles(){
    const esc = (t)=> t.replace(/[&<>]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
    document.querySelectorAll(".homeSectionTitle, .pageTitleBlock .h1, .homeGreetingTitle").forEach((el)=>{
      if(el.dataset.bxTitle || el.children.length) return;
      const t = el.textContent, home = el.classList.contains("homeGreetingTitle");
      const m = home ? t.match(/^([^\n]+)(\n[\s\S]+)$/) : t.match(/^([\s\S]+\s)(\S+)$/);
      if(!m) return;
      el.dataset.bxTitle = t;
      el.innerHTML = home ? `<em class="bxSerif">${esc(m[1])}</em>${esc(m[2])}` : `${esc(m[1])}<em class="bxSerif">${esc(m[2])}</em>`;
    });
  }
  function bxMarquee(){
    if($(".bxMarquee") || !document.body.classList.contains("layout-home")) return;
    let cats = []; try{ cats = JSON.parse($("#homeCats")?.textContent || "[]"); }catch{}
    const before = $(".homeToday") || $(".homeContinue");
    if(!cats.length || !before) return;
    const el = bit("bxMarquee", "boxengasse", "nav"); el.setAttribute("aria-label", "Kategorien");
    const links = (hide)=> cats.map((c)=> `<a href="/rezeptindex/?kategorie=${encodeURIComponent(c)}"${hide ? ' aria-hidden="true" tabindex="-1"' : ""}></a>`).join("");
    el.innerHTML = `<div class="bxMarqMove"><div class="bxMarqTrack">${links(false)}${links(true)}</div></div>`;
    el.querySelectorAll("a").forEach((a, i)=>{ a.textContent = cats[i % cats.length]; });
    before.before(el);
  }
  function bxWatch(){
    if(!bxIO) return;
    const vh = innerHeight, vw = innerWidth;
    document.querySelectorAll(".appMain :is(.linkCard, .catTile, .homeSectionHead, .planDay, .catGroupTitle)").forEach((el)=>{
      if(el.dataset.bxSeen) return; el.dataset.bxSeen = "1";
      const r = el.getBoundingClientRect();
      if(!r.width || r.bottom < 0) return;
      const below = r.top > vh - 8, right = r.left > vw - 8;
      if(!below && !right) return;
      el.classList.add("bxRv"); if(right && !below) el.classList.add("bxRvX");
      bxIO.observe(el);
    });
    document.querySelectorAll(".appMain .linkCard:not(.hCard) .rcImg img:not(.bxPar)").forEach((img)=>{ img.classList.add("bxPar"); bxParIO.observe(img); });
  }
  // ---------- Bildband: Foto fährt beim Öffnen des Rezepts heran; Schlussseite mit schwebenden Kräuterblättern ----------
  function bbKen(){ const img = $(".recipePageHero img"); if(img && !reduce() && !img.dataset.bbKen){ img.dataset.bbKen = "1"; img.classList.add("bbKen"); img.addEventListener("animationend", ()=> img.classList.remove("bbKen"), { once: true }); } }
  // Blattfarben je Skin; im Standard-Look (Wunsch des Besitzers, Nov. 2026) Grüntöne auf dem Basilikum-Feld
  const FOOT_LEAVES = { bildband: ["#8FA05A", "#6F7F45", "#C9B48A", "#B8683C", "#E8DCC6"], standard: ["#7EC48A", "#A9D8A0", "#4F8F62", "#E4EFE2", "#CFE3B4"] };
  let bbStop = null;
  function bbFooter(){
    const main = $(".appMain"), b = document.body;
    const sk = skin();
    if(!FOOT_LEAVES[sk] || $(".bbFooter") || !main || !(b.classList.contains("layout-home") || $("#recipeGrid"))) return;
    const el = bit("bbFooter", sk, "footer");
    el.innerHTML = `<canvas aria-hidden="true"></canvas><div class="bbFootText"><b>Guten Appetit.</b><span>Noch nichts gefunden?</span><a href="/was-koche-ich/?zufall=1">Überrasch mich</a></div>`;
    main.appendChild(el);
    const cv = el.querySelector("canvas"), g = cv.getContext("2d"), dpr = Math.min(2, devicePixelRatio || 1);
    let w = 0, h = 0, raf = 0, on = false, px = -999, py = -999;
    const COL = FOOT_LEAVES[sk];
    const P = Array.from({ length: 46 }, (_, i)=> ({ x: Math.random(), y: Math.random(), vx: 0, vy: 0, r: 4 + Math.random() * 7, a: Math.random() * 6.3, s: (Math.random() - .5) * .012, c: COL[i % COL.length], ph: Math.random() * 6.3 }));
    const size = ()=>{ const r = el.getBoundingClientRect(); w = r.width; h = r.height; cv.width = w * dpr; cv.height = h * dpr; g.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const draw = (t)=>{
      if(!el.isConnected) on = false;
      raf = on ? requestAnimationFrame(draw) : 0;
      g.clearRect(0, 0, w, h);
      for(const p of P){
        let x = p.x * w, y = p.y * h;
        const dx = x - px, dy = y - py, d2 = dx * dx + dy * dy;
        if(d2 < 12000){ const f = (1 - d2 / 12000) * .9, d = Math.sqrt(d2) || 1; p.vx += dx / d * f; p.vy += dy / d * f; p.s += (dx > 0 ? .004 : -.004) * f; }
        p.vx = p.vx * .94 + Math.sin(t / 2600 + p.ph) * .012; p.vy = p.vy * .94 - .006 + Math.cos(t / 3100 + p.ph) * .008;
        x += p.vx; y += p.vy; p.a += p.s; p.s *= .995;
        if(y < -20) y = h + 20; if(y > h + 20) y = -20; if(x < -20) x = w + 20; if(x > w + 20) x = -20;
        p.x = x / w; p.y = y / h;
        g.save(); g.translate(x, y); g.rotate(p.a); g.globalAlpha = .85; g.fillStyle = p.c;
        g.beginPath(); g.moveTo(-p.r, 0); g.quadraticCurveTo(0, -p.r * .62, p.r, 0); g.quadraticCurveTo(0, p.r * .62, -p.r, 0); g.fill(); g.restore();
      }
    };
    if(reduce()){ requestAnimationFrame(()=>{ size(); draw(0); }); return; }   // Blätter stehen still
    const at = (e)=>{ const r = el.getBoundingClientRect(); px = e.clientX - r.left; py = e.clientY - r.top; };
    el.addEventListener("pointermove", at, { passive: true }); el.addEventListener("pointerdown", at, { passive: true });
    el.addEventListener("pointerleave", ()=>{ px = py = -999; });
    const io = new IntersectionObserver((es)=>{ on = es[0].isIntersecting; if(on && !raf){ size(); raf = requestAnimationFrame(draw); } });
    io.observe(el);
    bbStop?.(); bbStop = ()=>{ on = false; io.disconnect(); cancelAnimationFrame(raf); };
  }
  // Dieselbe Scroll-Bewegung nutzen Boxengasse und Bildband (Aussehen je Skin-Datei)
  const SCROLL_FX = { boxengasse: 1, bildband: 1 };
  let bxOn = "";
  function boxengasse(){
    const sk = skin();
    if(bxOn && bxOn !== sk){ bxOn = ""; bxOff(); }
    if(!SCROLL_FX[sk]) return;
    if(sk === "boxengasse"){ bxTitles(); bxMarquee(); } else { bbFooter(); bbKen(); }
    if(bxOn){ bxWatch(); return; }   // läuft schon (enhance() kommt bei jeder Änderung im Inhalt wieder)
    bxOn = sk;
    let bar = $(".bxProgress"); if(!bar){ bar = bit("bxProgress", sk); bar.setAttribute("aria-hidden", "true"); document.body.appendChild(bar); }
    if(reduce() || !("IntersectionObserver" in window)) return;
    bxIO = new IntersectionObserver((es)=>{
      let n = 0;
      es.forEach((e)=>{ if(!e.isIntersecting) return;
        const el = e.target; bxIO.unobserve(el);
        el.style.transitionDelay = `${Math.min(n++, 5) * 70}ms`; el.classList.add("bxIn");
        setTimeout(()=>{ el.classList.remove("bxRv", "bxRvX", "bxIn"); el.style.transitionDelay = ""; }, 1400);
      });
    }, { rootMargin: "0px 0px -6% 0px" });
    bxParIO = new IntersectionObserver((es)=>{ es.forEach((e)=>{ e.isIntersecting ? bxVis.add(e.target) : bxVis.delete(e.target); }); frame(); });
    const move = $(".bxMarqMove");
    const frame = ()=>{
      bxRaf = 0;
      const y = scrollY, vh = innerHeight, max = document.documentElement.scrollHeight - vh;
      bar.style.transform = `scaleX(${max > vh * .4 ? Math.min(1, Math.max(0, y / max)) : 0})`;
      if(move) move.style.transform = `translate3d(${-(y * .35) % 400}px,0,0)`;
      bxVis.forEach((img)=>{ const r = img.parentNode.getBoundingClientRect(); const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / (vh / 2)));
        img.style.transform = `translate3d(0,${(p * -5).toFixed(2)}%,0) scale(1.12)`; });
    };
    bxOnScroll = ()=>{ if(!bxRaf) bxRaf = requestAnimationFrame(frame); };
    addEventListener("scroll", bxOnScroll, { passive: true });
    bxWatch(); frame();
  }

  function worlds(){ j3Ship(); zsSeal(); zsRibbonMenu(); marginNote(); blockCaret(); protoHead(); typeJitter(); bonPrint(); boxengasse(); if(skin() === "standard") bbFooter(); }

  function enhance(){ cleanBits(); worldHome(); houseCup(); tvAd(); caseHeader(); statBars(); weekBalance(); feasts(); bonClock(); cookVoice(); worlds(); }

  // ---------- Logo je Skin (assets/logos/<skin>.svg; Standard/Retro haben ihre eigenen) ----------
  const LOGOS = ["terminal","diner","bauhaus","nordwall","zauberschule","jahr3000","zweistaedte","insel","akte","brigade","boxengasse","bildband"];
  function skinLogo(){
    const img = document.querySelector(".homeBrand .logoSkin");
    if(!img) return;
    const on = LOGOS.includes(skin());
    img.hidden = !on;
    if(on) img.src = `/assets/logos/${skin()}.svg?v=2`;
  }

  function apply(){ mountScene(); passClock(); placeholders(); watchScene(); futureDate(); markCooked(); skinLogo(); voice(); enhance(); cryo(); worldClock(); homeTimer(); introOnSwitch(); }
  function init(){
    apply();
    watchProgress();
    watchCook();
    retroBoot();
    addEventListener("kochbuch:cooking", bonClock);
    addEventListener("kochbuch:sceneresize", sizeScene);
    const fl = $("#freezerList"); if(fl) new MutationObserver(()=>{ clearTimeout(init.f); init.f = setTimeout(cryo, 50); }).observe(fl, { childList: true });
    new MutationObserver(apply).observe(R, { attributes: true, attributeFilter: ["data-skin"] });
    addEventListener("resize", sizeScene, { passive: true });
    document.fonts?.ready?.then(sizeScene);
    addEventListener("load", sizeScene);
    addEventListener("kochbuch:stats", markCooked);
    // Startseite füllt Karten per Skript nach
    const home = document.querySelector(".appMain");
    if(home) new MutationObserver(()=>{ clearTimeout(init.t); init.t = setTimeout(()=>{ markCooked(); sizeScene(); voice(); enhance(); }, 60); }).observe(home, { childList: true, subtree: true });
    // Timer-Hinweis (entsteht in cook-timer.js) bekommt beim Öffnen die Stimme des Skins
    new MutationObserver(()=>{ const t = document.querySelector('.timerAlert.open'); if(t) voice(t); }).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['class'] });
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
