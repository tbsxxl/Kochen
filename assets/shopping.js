(function(){
  const U = window.KOCHBUCH_UTILS;
  const UI = window.KOCHBUCH_UI || {};
  const listEl = document.querySelector("#shopList");
  const clearCheckedBtn = document.querySelector("#clearChecked");
  const clearAllBtn = document.querySelector("#clearAll");
  const addInput = document.querySelector("#addShopItem");
  const addBtn = document.querySelector("#addShopBtn");
  const key = "kochbuch.shopping";

  function getList(){ try{ return JSON.parse(localStorage.getItem(key) || "[]"); }catch{ return []; } }
  function setList(v){ try{ localStorage.setItem(key, JSON.stringify(v)); }catch{} }

  // Supermarkt-Abteilungen in Laufreihenfolge. Zuordnung per Stichwort; die Prüfreihenfolge
  // (MATCH_ORDER) ist wichtig, damit z. B. „Kokosmilch“ nicht im Kühlregal landet.
  // Präfixe: "=wort" ganzes Wort, "^wort" Wortanfang, "~wort" Wortende, sonst Teilstring.
  const SECTIONS = [
    "Obst & Gemüse", "Brot & Backwaren", "Fleisch & Fisch", "Kühlregal",
    "Nudeln, Reis & Getreide", "Konserven & Saucen", "Gewürze & Öle",
    "Backen & Süßes", "Tiefkühl", "Getränke", "Sonstiges"
  ];
  const EARLY_BAKING = ["backpulver", "kakaopulver", "vanillezucker", "puderzucker", "stärke", "starch", "natron",
    "sirup", "dicksaft", "kokosraspeln", "raspel"];
  const KEYWORDS = {
    "Konserven & Saucen": ["kokosmilch", "passata", "tomatenmark", "pelati", "san marzano", "brühe", "fond", "bouillon",
      "sojasauce", "sojasoße", "fischsauce", "austernsauce", "worcester", "ketchup", "mayonnaise", "=mayo", "senf",
      "honig", "erdnussbutter", "sambal", "sriracha", "gochujang", "hoisin", "tahini", "pesto", "=oliven", "kapern",
      "kichererbsen", "kidney", "schwarze bohnen", "weiße bohnen", "linsen", "=mais", "paste", "apfelmus", "konfitüre",
      "salsa", "miso", "ketjap", "sauce", "soße", "dose"],
    "Gewürze & Öle": ["pulver", "granulat", "chiliflocken", "garam masala", "kreuzkümmel", "kumin", "cumin", "kurkuma",
      "zimt", "muskat", "pfeffer", "pepper", "~salz", "=salt", "oregano", "majoran", "lorbeer", "gewürz", "würz",
      "essig", "~öl", "=öl", "gochugaru", "vanilleextrakt", "sesam", "samen", "körner", "nelke", "sternanis",
      "kardamom", "aroma"],
    "Kühlregal": ["milch", "sahne", "schmand", "crème", "creme", "joghurt", "quark", "butter", "käse", "cheese",
      "mozzarella", "parmesan", "pecorino", "grana", "feta", "halloumi", "cheddar", "provolone", "gouda", "leicester",
      "emmentaler", "mascarpone", "ricotta", "burrata", "=ei", "=eier", "eigelb", "eiweiß", "speck", "pancetta",
      "guanciale", "schinken", "prosciutto", "frische hefe", "frischhefe", "gnocchi", "tofu", "margarine"],
    "Fleisch & Fisch": ["^hack", "rinderhack", "schweinehack", "rind", "schwein", "hähnchen", "huhn", "hühner",
      "chicken", "pute", "ente", "lamm", "steak", "filet", "bauch", "wurst", "chorizo", "lachs", "fisch", "kabeljau",
      "garnele", "shrimp", "short rib", "rippchen", "ribs", "wings", "keule", "entrecôte", "rib-eye", "ribeye",
      "roastbeef", "kotelett", "schnitzel", "gulasch", "nacken"],
    "Brot & Backwaren": ["brot", "brötchen", "=bun", "=buns", "toast", "baguette", "ciabatta", "tortilla", "wrap",
      "naan", "pita", "croissant", "tacoschale"],
    "Nudeln, Reis & Getreide": ["nudel", "pasta", "spaghetti", "penne", "rigatoni", "paccheri", "fettuccine", "fusilli",
      "tagliatelle", "linguine", "lasagne", "reis", "couscous", "bulgur", "quinoa", "haferflocken", "panko",
      "paniermehl", "semmelbrösel", "ramen", "udon", "glasnudel", "polenta"],
    "Backen & Süßes": ["mehl", "zucker", "vanille", "schokolade", "kakao", "hefe", "kekse", "löffelbiskuit",
      "gelatine", "rosinen", "mandel", "nüsse", "nuss", "cashew", "walnuss", "pinienkerne", "marmelade", "streusel"],
    "Getränke": ["wein", "=bier", "bier ", "=cola", "wasser", "saft", "sprite", "espresso", "kaffee", "sekt", "=tee",
      "eistee", "bourbon", "champagner", "amaretto", "rum", "whisky"],
    "Obst & Gemüse": ["zwiebel", "knoblauch", "romanesco", "karotte", "möhre", "sellerie", "paprika", "tomate", "kartoffel",
      "zucchini", "aubergine", "brokkoli", "blumenkohl", "spinat", "salat", "rucola", "gurke", "lauch", "porree",
      "pilz", "champignon", "ingwer", "chili", "jalapeño", "jalapeno", "limette", "zitrone", "orange", "apfel",
      "banane", "beere", "kiwi", "mango", "ananas", "pfirsich", "avocado", "schalotte", "koriander", "petersilie",
      "basilikum", "minze", "schnittlauch", "thymian", "rosmarin", "kräuter", "salbei", "dill", "kohl", "spargel",
      "fenchel", "radieschen", "rettich", "rote bete", "kürbis", "bohnen", "süßkartoffel", "zitronengras", "pak choi"]
  };
  const MATCH_ORDER = ["Konserven & Saucen", "Gewürze & Öle", "Kühlregal", "Fleisch & Fisch",
    "Brot & Backwaren", "Nudeln, Reis & Getreide", "Backen & Süßes", "Getränke", "Obst & Gemüse"];

  function hit(k, s, words){
    const mode = k[0], w = k.slice(1);
    if(mode === "=") return words.includes(w);
    if(mode === "^") return words.some(x=>x.startsWith(w));
    if(mode === "~") return words.some(x=>x.endsWith(w));
    return s.includes(k);
  }
  function classify(s){
    const words = s.split(/[^a-zäöüßéèàçô]+/).filter(Boolean);
    if(EARLY_BAKING.some(k=>hit(k, s, words))) return "Backen & Süßes";
    for(const sec of MATCH_ORDER){
      if(KEYWORDS[sec].some(k=>hit(k, s, words))) return sec;
    }
    return "";
  }
  // Vom Nutzer korrigierte Abteilungen (werden gemerkt und synchronisiert)
  const SEC_KEY = "kochbuch.shopsections";
  const secKey = (name)=> String(name || "").trim().toLowerCase();
  function getOverrides(){ try{ return JSON.parse(localStorage.getItem(SEC_KEY) || "{}") || {}; }catch{ return {}; } }
  function sectionOf(name){
    const o = getOverrides()[secKey(name)];
    if(o && SECTIONS.includes(o)) return o;
    return autoSection(name);
  }
  function autoSection(name){
    const raw = String(name || "").toLowerCase().replace(/[“”"„]/g, "");
    if(/(^|[^a-z])tk([^a-z]|$)|tiefkühl/.test(raw)) return "Tiefkühl";
    if(/passiert|stückig|\(dose\)|aus der dose|in öl|essiggurke|gewürzgurke|dillgurke|cornichon|einlegegurke/.test(raw)) return "Konserven & Saucen";
    const noNotes = raw.replace(/\(.*?\)/g, " ");
    const head = noNotes.split(",")[0];
    return classify(head) || classify(noNotes) || "Sonstiges";
  }

  function qtyText(it){
    const unit = U.normUnit(it.unit||"");
    if(typeof it.qty === "number" && isFinite(it.qty)){
      const conv = U.autoConvert(it.qty, unit);
      return `${U.roundSmart(conv.qty, conv.unit)} ${conv.unit||""}`.trim();
    }
    return `${it.qtyLabel || ""} ${unit}`.trim();
  }

  function renderGroup(title, items, extraClass){
    const wrap = document.createElement("section");
    wrap.className = "shopSection" + (extraClass ? " " + extraClass : "");
    const head = document.createElement("div");
    head.className = "shopSectionHead";
    head.innerHTML = `<span></span><span class="shopSectionCount"></span>`;
    head.firstChild.textContent = title;
    head.lastChild.textContent = String(items.length);
    const group = document.createElement("div");
    group.className = "listGroup compactList";
    wrap.appendChild(head);
    wrap.appendChild(group);
    listEl.appendChild(wrap);

    U.renderToggleList(group, items, {
      getId: (it)=>String(it._i),
      getLabel: (it)=>it.item,
      getSub: (it)=>it.from || "",
      getRightText: qtyText,
      isChecked: (it)=>!!it.checked,
      onToggle: (it, _idx, now)=>{
        const l = getList();
        if(!l[it._i]) return;
        l[it._i].checked = now;
        setList(l);
        render();
      },
    });
    group.querySelectorAll(".uRow").forEach((row, idx)=> enhanceRow(row, items[idx]));
  }

  // ---------- Gesten: nach links wischen = löschen, lange drücken / Menge antippen = bearbeiten ----------
  function removeItem(it){
    const l = getList();
    const idx = l.findIndex((x, i)=> i === it._i && x.item === it.item);
    if(idx < 0) return;
    const [gone] = l.splice(idx, 1);
    setList(l);
    render();
    UI.haptic?.("light");
    UI.toast?.(`„${gone.item}“ gelöscht`, { label: "Rückgängig", run: ()=>{
      const cur = getList();
      cur.splice(Math.min(idx, cur.length), 0, gone);
      setList(cur); render();
    }});
  }
  function enhanceRow(row, it){
    if(!it) return;
    let x0 = null, y0 = null, dx = 0, horizontal = false, suppress = false, pressTimer = null;
    const right = row.querySelector(".uRight");
    if(right){ right.classList.add("shopQtyBtn"); right.setAttribute("aria-label", "Menge ändern"); }
    const cancelPress = ()=>{ clearTimeout(pressTimer); pressTimer = null; };
    row.addEventListener("touchstart", (e)=>{
      const t = e.touches[0]; x0 = t.clientX; y0 = t.clientY; dx = 0; horizontal = false;
      cancelPress();
      pressTimer = setTimeout(()=>{ pressTimer = null; suppress = true; UI.haptic?.("medium"); openItemSheet(it); }, 550);
    }, { passive: true });
    row.addEventListener("touchmove", (e)=>{
      if(x0 === null) return;
      const t = e.touches[0];
      const mx = t.clientX - x0, my = t.clientY - y0;
      if(Math.abs(mx) > 8 || Math.abs(my) > 8) cancelPress();
      if(!horizontal && Math.abs(mx) > 12 && Math.abs(mx) > Math.abs(my) * 1.3) horizontal = true;
      if(!horizontal) return;
      dx = Math.min(0, mx);
      row.classList.add("swiping");
      row.style.transform = `translateX(${dx}px)`;
      row.parentElement?.classList.add("swipeHost");
      row.classList.toggle("swipeArmed", dx < -row.offsetWidth * 0.35);
    }, { passive: true });
    const end = ()=>{
      cancelPress();
      if(x0 === null) return;
      x0 = null;
      if(!horizontal) return;
      suppress = true;
      const armed = dx < -row.offsetWidth * 0.35;
      row.style.transition = "transform .2s ease";
      row.style.transform = armed ? "translateX(-100%)" : "";
      setTimeout(()=>{
        row.classList.remove("swiping", "swipeArmed");
        row.parentElement?.classList.remove("swipeHost");
        if(armed) removeItem(it); else row.style.transition = "";
      }, 200);
    };
    row.addEventListener("touchend", end);
    row.addEventListener("touchcancel", end);
    row.addEventListener("contextmenu", (e)=>{ e.preventDefault(); suppress = false; openItemSheet(it); });
    // Klicks nach Wischen/langem Drücken nicht als Abhaken werten; Menge antippen öffnet das Bearbeiten
    row.addEventListener("click", (e)=>{
      if(suppress){ suppress = false; e.stopImmediatePropagation(); return; }
      if(e.target.closest(".uRight")){ e.stopImmediatePropagation(); openItemSheet(it, true); }
    }, true);
  }

  // ---------- Bearbeiten: Menge, Abteilung, Löschen ----------
  const sheet = document.querySelector("#shopItemSheet");
  const overlay = document.querySelector("#shopItemOverlay");
  const qtyIn = document.querySelector("#shopItemQty");
  const secBox = document.querySelector("#shopItemSections");
  let editing = null;
  function openItemSheet(it, focusQty){
    if(!sheet) return;
    editing = it;
    document.querySelector("#shopItemTitle").textContent = it.item;
    qtyIn.value = qtyText(it);
    const cur = sectionOf(it.item);
    secBox.innerHTML = "";
    SECTIONS.forEach(sec=>{
      const b = document.createElement("button");
      b.type = "button"; b.className = "filterChip" + (sec === cur ? " active" : "");
      b.textContent = sec;
      b.setAttribute("aria-pressed", String(sec === cur));
      b.addEventListener("click", ()=>{
        const o = getOverrides();
        if(sec === autoSection(editing.item)) delete o[secKey(editing.item)]; else o[secKey(editing.item)] = sec;
        try{ localStorage.setItem(SEC_KEY, JSON.stringify(o)); }catch{}
        secBox.querySelectorAll(".filterChip").forEach(x=>{ const on = x === b; x.classList.toggle("active", on); x.setAttribute("aria-pressed", String(on)); });
        UI.haptic?.("light");
      });
      secBox.appendChild(b);
    });
    overlay.classList.add("open"); sheet.classList.add("open"); sheet.setAttribute("aria-hidden", "false");
    document.body.classList.add("noScroll");
    if(focusQty) setTimeout(()=>{ qtyIn.focus(); qtyIn.select(); }, 250);
  }
  function parseQty(s){
    s = String(s || "").trim();
    const m = s.match(/^(\d+(?:[.,]\d+)?)\s*(.*)$/);
    if(m) return { qty: Number(m[1].replace(",", ".")), unit: m[2].trim(), qtyLabel: undefined };
    return { qty: null, unit: "", qtyLabel: s };
  }
  function closeItemSheet(save){
    if(!sheet || !editing) return;
    if(save){
      const l = getList();
      const e = l[editing._i];
      if(e && e.item === editing.item && qtyIn.value.trim() !== qtyText(editing)){
        const p = parseQty(qtyIn.value);
        e.qty = p.qty; e.unit = p.unit;
        if(p.qtyLabel) e.qtyLabel = p.qtyLabel; else delete e.qtyLabel;
        setList(l);
      }
    }
    editing = null;
    overlay.classList.remove("open"); sheet.classList.remove("open"); sheet.setAttribute("aria-hidden", "true");
    document.body.classList.remove("noScroll");
    render();
  }
  overlay?.addEventListener("click", ()=> closeItemSheet(true));
  document.querySelector("#shopItemDone")?.addEventListener("click", ()=> closeItemSheet(true));
  qtyIn?.addEventListener("keydown", (e)=>{ if(e.key === "Enter"){ e.preventDefault(); closeItemSheet(true); } });
  document.querySelector("#shopItemDelete")?.addEventListener("click", ()=>{
    const it = editing; closeItemSheet(false); if(it) removeItem(it);
  });

  function render(){
    const list = getList().map((it, i)=>({ ...it, _i: i }));
    listEl.innerHTML = "";
    if(!list.length){
      listEl.innerHTML = `<div class="uEmpty"><div class="uEmptyTitle">Die Liste ist leer</div><div class="uEmptyText">Füge oben etwas hinzu oder tippe auf einer Rezeptseite auf „Zur Liste“.</div></div>`;
      return;
    }
    const open = list.filter(it=>!it.checked);
    const done = list.filter(it=>it.checked);
    const bySection = new Map(SECTIONS.map(s=>[s, []]));
    open.forEach(it=> bySection.get(sectionOf(it.item)).push(it));
    bySection.forEach((items, sec)=>{
      if(!items.length) return;
      items.sort((a,b)=>String(a.item).localeCompare(String(b.item), "de"));
      renderGroup(sec, items);
    });
    if(done.length) renderGroup("Im Wagen", done, "shopSectionDone");
  }

  // ---------- Vorschläge beim Tippen: häufig gekaufte Artikel (nur auf diesem Gerät) ----------
  const FREQ_KEY = "kochbuch.ui.shopfreq";
  const COMMON = ["Milch", "Eier", "Brot", "Butter", "Käse", "Joghurt", "Äpfel", "Bananen", "Tomaten", "Zwiebeln",
    "Knoblauch", "Kartoffeln", "Nudeln", "Reis", "Kaffee", "Wasser", "Toilettenpapier", "Küchenrolle", "Spülmittel", "Müllbeutel"];
  const suggestEl = document.querySelector("#shopSuggest");
  function getFreq(){ try{ return JSON.parse(localStorage.getItem(FREQ_KEY) || "{}") || {}; }catch{ return {}; } }
  function countItem(t){
    const f = getFreq(), k = secKey(t);
    f[k] = { n: ((f[k] && f[k].n) || 0) + 1, label: t, t: Date.now() };
    const keys = Object.keys(f);
    if(keys.length > 300) keys.sort((a,b)=>f[a].t - f[b].t).slice(0, keys.length - 300).forEach(k2=> delete f[k2]);
    try{ localStorage.setItem(FREQ_KEY, JSON.stringify(f)); }catch{}
  }
  function renderSuggest(){
    if(!suggestEl) return;
    const term = secKey(addInput?.value);
    const open = new Set(getList().filter(x=>!x.checked).map(x=>secKey(x.item)));
    const f = getFreq();
    const pool = new Map();
    Object.values(f).sort((a,b)=>b.n - a.n || b.t - a.t).forEach(e=> pool.set(secKey(e.label), e.label));
    if(term) COMMON.forEach(c=>{ if(!pool.has(secKey(c))) pool.set(secKey(c), c); });
    let list = Array.from(pool.entries()).filter(([k])=>!open.has(k) && k !== term);
    if(term){
      list = list.filter(([k])=>k.includes(term));
      list.sort((a,b)=> (b[0].startsWith(term) ? 1 : 0) - (a[0].startsWith(term) ? 1 : 0));
    }
    list = list.slice(0, 8);
    suggestEl.innerHTML = "";
    suggestEl.hidden = !list.length;
    list.forEach(([, label])=>{
      const b = document.createElement("button");
      b.type = "button"; b.className = "filterChip shopSuggestChip"; b.textContent = label;
      b.addEventListener("click", ()=>{ addItem(label); });
      suggestEl.appendChild(b);
    });
  }
  function addItem(text){
    const t = (typeof text === "string" ? text : (addInput?.value || "")).trim();
    if(!t) return;
    const l = getList();
    l.unshift({ item: t, qty: null, unit: "", checked:false });
    setList(l);
    countItem(t);
    addInput.value = "";
    render();
    renderSuggest();
    UI.haptic?.("light");
    addInput.focus();
  }

  clearCheckedBtn?.addEventListener("click", ()=>{ setList(getList().filter(x=>!x.checked)); render(); });
  clearAllBtn?.addEventListener("click", ()=>{
    const cur = getList();
    if(!cur.length) return;
    const ok = window.confirm("Wirklich alles aus der Einkaufsliste löschen?");
    if(!ok) return;
    setList([]);
    render();
  });

  addBtn?.addEventListener("click", ()=> addItem());
  addInput?.addEventListener("input", renderSuggest);
  addInput?.addEventListener("keydown", (ev)=>{ if(ev.key==="Enter") addItem(); });

  window.KOCHBUCH_SHOP = { sectionOf };
  render();
  renderSuggest();

  // Sync: neue Einträge vom anderen Gerät bzw. aus der gemeinsamen Liste ohne Neuladen anzeigen.
  // Bei einer gemeinsamen Liste regelmäßig nachsehen, solange die Seite offen ist.
  window.KOCHBUCH_LIVE_REFRESH = true;
  window.addEventListener("kochbuch:synced", ()=>{ if(!editing) render(); });
  setInterval(()=>{
    const A = window.KOCHBUCH_ACCOUNT;
    const p = A && A.profile && A.profile();
    if(p && p.household && document.visibilityState === "visible") A.syncNow().catch(()=>{});
  }, 15000);
})();
