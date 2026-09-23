(function(){
  const U = window.KOCHBUCH_UTILS;
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
    "Obst & Gemüse": ["zwiebel", "knoblauch", "karotte", "möhre", "sellerie", "paprika", "tomate", "kartoffel",
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
  function sectionOf(name){
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
  }

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

  function addItem(){
    const t = (addInput?.value || "").trim();
    if(!t) return;
    const l = getList();
    l.unshift({ item: t, qty: null, unit: "", checked:false });
    setList(l);
    addInput.value = "";
    render();
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

  addBtn?.addEventListener("click", addItem);
  addInput?.addEventListener("keydown", (ev)=>{ if(ev.key==="Enter") addItem(); });

  window.KOCHBUCH_SHOP = { sectionOf };
  render();
})();
