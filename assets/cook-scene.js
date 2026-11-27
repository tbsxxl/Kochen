// Kochmodus im Standard-Look (Dez. 2026, Wunsch des Besitzers nach dem Vorbild eines Kochmodus mit Küchenbon und Draufsicht):
// leitet aus einem Rezeptschritt automatisch ab
//   • eine kurze Überschrift („In einer Pfanne 2 EL Öl erhitzen …“ → „Öl erhitzen“; „Gemüse anbraten: …“ → „Gemüse anbraten“),
//   • das Gerät (Pfanne, Topf, Backofen, Schüssel, Brett …) und die Hitze („mittlere Hitze“, „200 °C“),
//   • die erste Zeitangabe für den großen Timer,
// und zeichnet eine Draufsicht des Geräts mit den Zutaten dieses Schritts (selbst gezeichnete SVG-Symbole, keine fremden Grafiken).
// Wird von recipe.js nur im Standard-Look benutzt. Meldet sich als window.KOCHBUCH_COOKSCENE.
(()=>{
  "use strict";
  const esc = (x)=> String(x ?? "").replace(/[&<>"']/g, (m)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[m]);
  const cap = (s)=> s ? s[0].toUpperCase() + s.slice(1) : s;

  // ---------- Überschrift ----------
  const PREP = /^(in|im|auf|aus|mit|für|bei|zu|zum|zur|unter|über|nach|vom|von|am|an|ins|durch|ohne|um|neben|gegen)$/i;
  const UNIT = /^(EL|TL|g|kg|ml|l|Min\.?|Minuten?|Std\.?|Stunden?|Sek\.?|Prise|Stk\.?|Stück|Dose|Bund|Zehen?|cm|mm|°C|Ober-\/Unterhitze|Umluft|Packung(sangabe)?|Hälfte|Hälften|Viertel|Drittel)$/i;
  const VERB = /^[a-zäöüß]+(en|ern|eln)$/;
  const NOT_VERB = new Set(["einen", "einem", "einer", "eines", "den", "dem", "denen", "kleinen", "großen", "dünnen", "dicken", "feinen", "groben", "kalten", "warmen", "heißen", "restlichen", "ganzen", "halben", "frischen", "beiden", "anderen", "oben", "unten", "allen", "vorhandenen", "geschnittenen", "gehackten", "gekochten", "weichen", "festen", "flüssigen", "gleichen", "selben", "derselben", "dieselben", "mittleren", "hohen", "starken", "niedrigen", "offenen", "ofenfesten", "tiefen", "flachen", "verschiedenen", "vielen", "wenigen", "einigen", "fertigen", "letzten", "ersten", "nächsten", "mundgerechten"]);
  // Wörter, die nur wegen des Satzanfangs groß geschrieben sind
  const START = new Set(("etwas die der das den dem des eine einen ein einer eines restliche restlichen restlicher reichlich sehr alles alle " +
    "beide beiden dann danach inzwischen nun optional kurz etwa ca währenddessen anschließend zuerst zunächst nochmals erneut jetzt sofort " +
    "vorsichtig gut fein grob frisch frische frischen heiße heißes heißen kalte kaltes kalten große großen kleine kleinen übrige übrigen " +
    "gesamte gesamten mit nach je pro ggf evtl falls wenn sobald solange während bis noch weitere weiteren dazu nebenbei parallel " +
    "beiseite außerdem ebenfalls abwechselnd gleichzeitig vorher später zum zur ganz halb").split(" "));
  // Abkürzungen mit Punkt, damit „ca. 5 Min.“ keinen Satz beendet
  const ABBR = /\b(ca|Min|Std|Sek|bzw|evtl|ggf|z\.B|u\.a|Pkt|EL|TL|Stk|max|min|mind|gr|Nr|etc)\./g;
  const MODAL = new Set(["lassen", "geben", "stellen", "werden"]);
  const words = (str)=> str.split(/\s+/).filter(Boolean);
  const clean = (w)=> w.replace(/[^\p{L}\-&]/gu, "");
  const isVerb = (w)=> VERB.test(w) && !NOT_VERB.has(w);
  function lastVerb(ws){
    for(let i = ws.length - 1; i >= 0; i--){
      const w = clean(ws[i]);
      if(!isVerb(w)) continue;
      // „köcheln lassen“, „beiseite stellen“ → das eigentliche Tun davor
      if(MODAL.has(w) && i > 0 && isVerb(clean(ws[i - 1]))) return { w: clean(ws[i - 1]), i: i - 1 };
      return { w, i };
    }
    return null;
  }
  function title(text){
    const t = String(text || "").trim();
    // „Gemüse anbraten: …“ – vorhandene Zwischenüberschrift
    const m = t.match(/^([^.:!?]{3,42}):\s+([\s\S]+)$/);
    if(m && m[1].split(/\s+/).length <= 6 && !/\d/.test(m[1]) && !START.has(m[1].trim().toLowerCase())) return { title: m[1].replace(/\*+/g, "").trim(), body: m[2].trim() };
    const safe = t.replace(ABBR, (x)=> x.replace(".", "\u2024"));
    const first = (safe.split(/[.!?;]\s+/)[0] || safe).replace(/\u2024/g, ".").replace(/[.!?;]+$/, "").replace(/\([^)]*\)/g, " ");
    // nur an einem Komma kürzen, wenn davor schon ein Tun steht („Öl erhitzen, Zwiebeln anschwitzen“), nicht in Aufzählungen
    let clause = first.replace(/\//g, " ");
    let parts = clause.split(/,\s*/);
    // Nebensatz vorn („Sobald das Fleisch Farbe angenommen hat, …“) → der Hauptsatz danach zählt
    if(parts.length > 1 && /^(sobald|wenn|während|bis|falls|nachdem|sowie|solange)$/i.test(words(parts[0])[0] || "")) parts = parts.slice(1);
    clause = parts.length > 1 && lastVerb(words(parts[0])) ? parts[0] : parts.join(", ");
    const ws = words(clause);
    const v = lastVerb(ws);
    // erstes Hauptwort, das nicht zu einer Ortsangabe gehört („in einer großen Pfanne“ → übersprungen, danach „Öl“)
    let noun = null, inPP = false;
    for(let i = 0; i < (v ? v.i : ws.length); i++){
      const w = clean(ws[i]).replace(/-$/, "");
      if(PREP.test(w)){ inPP = true; continue; }
      if(!/^\p{Lu}/u.test(w) || w.length < 2 || UNIT.test(w) || START.has(w.toLowerCase())) continue;
      if(inPP){ inPP = false; continue; }
      noun = w; break;
    }
    let ti = v ? (noun ? `${noun} ${v.w}` : cap(v.w)) : ws.slice(0, 3).join(" ");
    if(ti.length > 34) ti = ti.slice(0, 32).replace(/\s+\S*$/, "") + " …";
    return { title: ti, body: t };
  }

  // ---------- Gerät und Hitze ----------
  const KINDS = [
    ["blender", /pürier|stabmixer|mixer|zerkleiner/],
    ["wok", /\bwok/],
    ["tray", /backblech|blech|backofen|\bofen\b|ofenfest|backpapier|gratinier|im ofen|backen|auflaufform|backform|form\b/],
    ["sieve", /\bsieb|abgie(ß|ss)en|abtropfen/],
    ["pan", /pfanne|anbraten|anrösten|rösten|anschwitzen|braten|scharf an/],
    ["pot", /topf|kochen|köcheln|garen|wasserkocher|nudelwasser|salzwasser|schmor|einkochen|aufkochen|reduzier|ablöschen|simmern|kasserolle/],
    ["bowl", /schüssel|verrühren|vermengen|verrühr|vermischen|mischen|marinier|kneten|teig|dressing|verquirl|aufschlagen|\brühren|glatt rühren|unterheben/],
    ["board", /schneiden|hacken|würfeln|halbieren|vierteln|schälen|reiben|hobeln|brett|zupfen|entkernen|putzen/],
    ["plate", /anrichten|servieren|teller|dazu passt|garnieren|bestreuen/],
  ];
  const LABEL = { blender: "Mixer", wok: "Wok", tray: "Backofen", sieve: "Sieb", pan: "Pfanne", pot: "Topf", bowl: "Schüssel", board: "Schneidebrett", plate: "Teller" };
  const HEAT = new Set(["wok", "tray", "pan", "pot"]);
  function gear(text){
    let low = " " + String(text || "").toLowerCase() + " ";
    // „Backofen vorheizen“ / Wasserkocher ist Vorbereitung – zählt nur, wenn sonst nichts passiert
    const sentences = low.split(/[.!?;]\s+/), rest = sentences.filter((s)=> !/vorheiz|wasserkocher/.test(s)).join(" ");
    const found = (str)=>{ const hits = []; for(const [k, re] of KINDS){ const m = str.match(re); if(m) hits.push([k, m.index]); } return hits; };
    let hits = rest.trim() ? found(" " + rest + " ") : [];
    if(!hits.length){
      if(/vorheiz/.test(low) && /ofen/.test(low)) return { kind: "tray", label: "Backofen" };
      hits = found(low);
    }
    // Wo gekocht wird, zählt mehr als wo geschnitten wird („Zwiebel hacken und in Butter anschwitzen“ → Pfanne)
    const heatHits = hits.filter(([k])=> HEAT.has(k));
    const pool = heatHits.length ? heatHits : hits;
    let best = pool.length ? pool.reduce((a, b)=> b[1] < a[1] ? b : a)[0] : "board";
    // „Anrichten: …“, „Servieren: …“ → Teller
    if(/^\s*(anrichten|servieren)\b/.test(low)) best = "plate";
    const raw = String(text || "");
    // Name aus dem Text übernehmen, wenn er genauer ist („Schmortopf“, „Auflaufform“)
    const nm = raw.match(/\b([A-ZÄÖÜ][a-zäöüß]*(?:pfanne|topf|form|blech|schüssel|wok|sieb|kasserolle|bräter))\b/);
    let label = LABEL[best];
    if(nm && ["pan", "pot", "tray", "bowl", "sieve", "wok"].includes(best)) label = nm[1];
    if(best === "tray" && /auflaufform|backform|\bform\b|gratin/i.test(raw) && !/blech/i.test(raw)){ best = "dish"; if(!nm) label = "Auflaufform"; }
    return { kind: best, label };
  }
  function heat(text){
    const t = String(text || "");
    const deg = t.match(/(\d{2,3})\s*°\s*C/); if(deg) return `${deg[1]} °C`;
    const h = t.match(/(niedrig|schwach|klein|gering|mittelhoh|mittl|mittel|hoh|stark|groß)\w*\s+(Hitze|Stufe|Flamme|Temperatur)/i);
    if(h){ const w = h[1].toLowerCase(); return (/niedrig|schwach|klein|gering/.test(w) ? "niedrige" : /mittelhoh/.test(w) ? "mittelhohe" : /mittl|mittel/.test(w) ? "mittlere" : "hohe") + " Hitze"; }
    return "";
  }
  const TIME_RE = /(\d+(?:[.,]\d+)?)(?:\s*(?:–|-|bis)\s*(\d+(?:[.,]\d+)?))?\s*(Minuten|Minute|Min\.?|Stunden|Stunde|Std\.?|Sekunden|Sek\.?)(?![a-zäöüß])/i;
  function time(text){
    const m = String(text || "").match(TIME_RE); if(!m) return null;
    const u = m[3].toLowerCase(), n = Number(m[1].replace(",", "."));
    const secs = Math.round(n * (u.startsWith("st") ? 3600 : u.startsWith("se") ? 1 : 60));
    return secs > 0 && secs <= 48 * 3600 ? { secs, label: m[0] } : null;
  }

  // ---------- Zutaten → Symbol ----------
  const ICONS = [
    ["fruehling", /frühlingszwiebel|lauchzwiebel|\blauch\b|porree|schnittlauch/],
    ["tomatensosse", /tomatenmark|passata|passiert|stückige tomaten|tomaten.*dose|dose.*tomaten|pizzasoße|tomatensoße|ketchup|sriracha|chilisoße|sweet.?chili/],
    ["zwiebel", /zwiebel|schalotte/],
    ["knoblauch", /knoblauch/],
    ["ingwer", /ingwer|galgant/],
    ["tomate", /tomate|kirschtomate|cherrytomate/],
    ["chili", /chili(?!pulver|flocken|soße)|peperoni|jalape/],
    ["paprika", /paprika(?!pulver|gewürz)|spitzpaprika/],
    ["karotte", /karotte|möhre|möhren/],
    ["kartoffel", /kartoffel|süßkartoffel|pommes|fries|wedges/],
    ["brokkoli", /brokkoli|broccoli|blumenkohl|romanesco/],
    ["pilz", /pilz|champignon|shiitake|steinpilz/],
    ["zucchini", /zucchini|gurke|aubergine/],
    ["blatt", /spinat|salat|rucola|kohl|mangold|pak choi|wirsing|grünkohl/],
    ["kraeuter", /petersilie|koriander|basilikum|rosmarin|thymian|minze|dill|oregano|salbei|kräuter|lorbeer/],
    ["zitrone", /zitrone|limette|orange/],
    ["garnele", /garnel|shrimp|scampi|gamba/],
    ["fisch", /lachs|fisch|kabeljau|thunfisch|forelle|seelachs|dorsch|filet.*fisch/],
    ["haehnchen", /hähnchen|huhn|chicken|pute|geflügel|keule|schenkel/],
    ["hack", /hack|faschiert/],
    ["speck", /speck|bacon|pancetta|guanciale|schinken|chorizo|salami|wurst/],
    ["fleisch", /rind|steak|beef|short.?rib|ribs|schwein|kotelett|gulasch|lamm|ente|kalb|braten|fleisch|filet|nacken/],
    ["ei", /\bei(er)?\b|eigelb|eiweiß|\bei,|\bei\s/],
    ["reis", /reis(?!essig)|risotto|basmati|jasmin/],
    ["nudel", /nudel|pasta|spaghetti|tagliatelle|penne|fusilli|rigatoni|paccheri|linguine|gnocchi|lasagne|ramen|udon|noodle|maccheroni|orecchiette|pappardelle/],
    ["brot", /brot|brötchen|\bbun|baguette|toast|tortilla|wrap|naan|pita|fladen|taco/],
    ["kaese", /käse|parmesan|mozzarella|feta|cheddar|gouda|pecorino|grana|burrata|ricotta|halloumi|emmentaler|gruyère|mascarpone/],
    ["butter", /butter(?!milch)|margarine|ghee/],
    ["sahne", /sahne|milch|joghurt|crème|creme|schmand|quark|kokosmilch|buttermilch|skyr|mayonnaise|mayo/],
    ["honig", /honig|sirup|marmelade|chutney|agave|ahorn/],
    ["schoko", /schoko|kakao|kuvertüre/],
    ["huelsen", /bohne|erbse|linse|mais|kichererbse|edamame/],
    ["nuss", /nuss|nüsse|mandel|sesam|pinien|cashew|erdnuss|pistazie|walnuss|haselnuss|samen|kerne/],
    ["mehl", /mehl|zucker|stärke|backpulver|natron|hefe|grieß|semmelbrösel|paniermehl|panko|haferflocken/],
    ["oel", /öl\b|olivenöl|rapsöl|sesamöl|pflanzenöl|sonnenblumenöl|\böl\b/],
    ["bruehe", /brühe|fond|bouillon|wein|bier|sojasoße|sojasauce|essig|worcester|fischsoße|austernsoße|teriyaki|hoisin|wasser|saft|soße|sauce|marinade|dressing/],
    ["gewuerz", /pulver|curry|kurkuma|kreuzkümmel|kümmel|garam|zimt|flocken|pfeffer|salz|gewürz|muskat|nelke|kardamom|koriandersamen|senf|piment|sumach|za.?atar|ras el|cayenne|vanille/],
  ];
  function iconOf(name){
    const n = String(name || "").toLowerCase();
    for(const [k, re] of ICONS) if(re.test(n)) return k;
    return "stueck";
  }
  // Flüssiges färbt den Boden des Geräts statt eines Symbols
  const LIQUID = { tomatensosse: ["#C7432B", "#9E2C1A"], sahne: ["#F3EEE2", "#DDD3BD"], bruehe: ["#9A6235", "#6E3F1D"], oel: ["#E7C45A", "#C49A28"] };

  // ---------- Zeichnungen ----------
  const DEFS = `<defs>
    <radialGradient id="ckMetal" cx="38%" cy="30%" r="80%"><stop offset="0" stop-color="#C9C7C2"/><stop offset=".55" stop-color="#7C7A75"/><stop offset="1" stop-color="#34332F"/></radialGradient>
    <radialGradient id="ckPan" cx="45%" cy="40%" r="65%"><stop offset="0" stop-color="#3A3936"/><stop offset="1" stop-color="#141413"/></radialGradient>
    <radialGradient id="ckPot" cx="50%" cy="45%" r="60%"><stop offset="0" stop-color="#4A4844"/><stop offset="1" stop-color="#1C1B1A"/></radialGradient>
    <radialGradient id="ckCer" cx="45%" cy="40%" r="70%"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#E3DDD0"/></radialGradient>
    <radialGradient id="ckBowlIn" cx="50%" cy="42%" r="62%"><stop offset="0" stop-color="#F4F0E8"/><stop offset="1" stop-color="#CFC6B4"/></radialGradient>
    <linearGradient id="ckWood" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#D6A96B"/><stop offset="1" stop-color="#B07E43"/></linearGradient>
    <linearGradient id="ckSheet" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#B9BCBE"/><stop offset="1" stop-color="#7E8386"/></linearGradient>
    <radialGradient id="ckShine" cx="35%" cy="30%" r="70%"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <filter id="ckBlur"><feGaussianBlur stdDeviation="12"/></filter>
    <filter id="ckSh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="3" stdDeviation="2.6" flood-color="#000" flood-opacity=".35"/></filter>
    <radialGradient id="gTom" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FF7A5C"/><stop offset=".55" stop-color="#D93A24"/><stop offset="1" stop-color="#9A1E10"/></radialGradient><radialGradient id="gTomIn" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FFB59A"/><stop offset=".55" stop-color="#F07A5C"/><stop offset="1" stop-color="#D9503A"/></radialGradient><radialGradient id="gOni" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FFFCF3"/><stop offset=".55" stop-color="#F1E6D0"/><stop offset="1" stop-color="#D6C29C"/></radialGradient><radialGradient id="gGar" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FFFDF5"/><stop offset=".55" stop-color="#F2E9D2"/><stop offset="1" stop-color="#D5C49C"/></radialGradient><radialGradient id="gGin" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#F5DCA6"/><stop offset=".55" stop-color="#D9B06A"/><stop offset="1" stop-color="#A97B3C"/></radialGradient><radialGradient id="gChi" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FF6A50"/><stop offset=".55" stop-color="#C81E14"/><stop offset="1" stop-color="#7E0E08"/></radialGradient><radialGradient id="gPep" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FF7A5E"/><stop offset=".55" stop-color="#D62B1C"/><stop offset="1" stop-color="#8C150C"/></radialGradient><radialGradient id="gCar" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FFB066"/><stop offset=".55" stop-color="#F07A22"/><stop offset="1" stop-color="#B8500E"/></radialGradient><radialGradient id="gPot" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FFF2C2"/><stop offset=".55" stop-color="#EFCF7A"/><stop offset="1" stop-color="#C9A044"/></radialGradient><radialGradient id="gBro" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#8CCB66"/><stop offset=".55" stop-color="#3F8A2C"/><stop offset="1" stop-color="#1F5016"/></radialGradient><radialGradient id="gMus" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#F7EFE2"/><stop offset=".55" stop-color="#E6D6BC"/><stop offset="1" stop-color="#BFA27A"/></radialGradient><radialGradient id="gMusCap" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#A4805E"/><stop offset=".55" stop-color="#7A5638"/><stop offset="1" stop-color="#4E331E"/></radialGradient><radialGradient id="gZuc" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#F6F8DE"/><stop offset=".55" stop-color="#E2E8B6"/><stop offset="1" stop-color="#BCC882"/></radialGradient><radialGradient id="gLeaf" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#74BD55"/><stop offset=".55" stop-color="#3A8A2E"/><stop offset="1" stop-color="#1D5518"/></radialGradient><radialGradient id="gLem" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FFF7B8"/><stop offset=".55" stop-color="#FADF5A"/><stop offset="1" stop-color="#E3B61E"/></radialGradient><radialGradient id="gShr" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FFD8C2"/><stop offset=".55" stop-color="#F59268"/><stop offset="1" stop-color="#D35A34"/></radialGradient><radialGradient id="gFish" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FFC6A8"/><stop offset=".55" stop-color="#F59A72"/><stop offset="1" stop-color="#D66C46"/></radialGradient><radialGradient id="gChk" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#F8D8A2"/><stop offset=".55" stop-color="#D99A56"/><stop offset="1" stop-color="#94531C"/></radialGradient><radialGradient id="gMinc" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#B8704E"/><stop offset=".55" stop-color="#874628"/><stop offset="1" stop-color="#552612"/></radialGradient><radialGradient id="gBac" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#F3907E"/><stop offset=".55" stop-color="#C84A3A"/><stop offset="1" stop-color="#8A281C"/></radialGradient><radialGradient id="gBeef" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#A85438"/><stop offset=".55" stop-color="#6E2C1A"/><stop offset="1" stop-color="#3A160C"/></radialGradient><radialGradient id="gEggW" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".55" stop-color="#FBF8F0"/><stop offset="1" stop-color="#E5DCC6"/></radialGradient><radialGradient id="gYolk" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FFD976"/><stop offset=".55" stop-color="#F6A31E"/><stop offset="1" stop-color="#D3720A"/></radialGradient><radialGradient id="gRice" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".55" stop-color="#F8F3E4"/><stop offset="1" stop-color="#D9CCAC"/></radialGradient><radialGradient id="gBread" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FAE6BC"/><stop offset=".55" stop-color="#E9C88C"/><stop offset="1" stop-color="#C08C46"/></radialGradient><radialGradient id="gChs" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FFF3A8"/><stop offset=".55" stop-color="#F5CF4A"/><stop offset="1" stop-color="#D0A01C"/></radialGradient><radialGradient id="gBut" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FFF8D2"/><stop offset=".55" stop-color="#F8E08A"/><stop offset="1" stop-color="#D9B246"/></radialGradient><radialGradient id="gChoc" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#8E5E3E"/><stop offset=".55" stop-color="#5A3420"/><stop offset="1" stop-color="#2A150A"/></radialGradient><radialGradient id="gBean" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#EED6A2"/><stop offset=".55" stop-color="#C9A15A"/><stop offset="1" stop-color="#8A642C"/></radialGradient><radialGradient id="gNut" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#F4DAAC"/><stop offset=".55" stop-color="#D7B07A"/><stop offset="1" stop-color="#97703C"/></radialGradient><radialGradient id="gMehl" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".55" stop-color="#F8F4EC"/><stop offset="1" stop-color="#DCD3C0"/></radialGradient><radialGradient id="gStk" cx="36%" cy="30%" r="80%"><stop offset="0" stop-color="#E6D6B4"/><stop offset=".55" stop-color="#CDB892"/><stop offset="1" stop-color="#9C8660"/></radialGradient>
    <filter id="ckGrain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".45" numOctaves="3" seed="7" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 .18  0 0 0 0 .1  0 0 0 0 .04  .6 0 0 0 -.22" result="d"/><feComposite in="d" in2="SourceAlpha" operator="in" result="g"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="g"/></feMerge></filter>
    <clipPath id="ckClipR"><circle r="150"/></clipPath>
    <clipPath id="ckClipRect"><rect x="-176" y="-124" width="352" height="248" rx="14"/></clipPath>
  </defs>`;
  const shadow = (rx, ry)=> `<ellipse cx="6" cy="16" rx="${rx}" ry="${ry}" fill="#000" opacity=".45" filter="url(#ckBlur)"/>`;

  // Gerät: Rahmen + Innenfläche (Inhalt wird in die Innenfläche geschnitten)
  function vessel(kind, inner, floor){
    const base = floor ? `<radialGradient id="ckFloor" cx="40%" cy="36%" r="75%"><stop offset="0" stop-color="${floor[0]}"/><stop offset="1" stop-color="${floor[1]}"/></radialGradient><circle r="150" fill="url(#ckFloor)"/><circle r="150" fill="url(#ckShine)" opacity=".3"/>` : "";
    switch(kind){
      case "pan": return shadow(190, 186) +
        `<g transform="rotate(35)"><rect x="176" y="-17" width="150" height="34" rx="16" fill="#26231F"/><rect x="176" y="-17" width="40" height="34" rx="6" fill="#55524C"/><circle cx="306" cy="0" r="7" fill="#0E0D0C"/></g>` +
        `<circle r="186" fill="url(#ckMetal)"/><circle r="172" fill="#1E1D1B"/><circle r="164" fill="url(#ckPan)"/>` +
        `<g clip-path="url(#ckClipR)">${base}${inner}</g><circle r="164" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="2"/>`;
      case "wok": return shadow(196, 192) +
        `<g transform="rotate(-150)"><rect x="186" y="-15" width="40" height="30" rx="6" fill="#3B3A37"/><rect x="220" y="-14" width="120" height="28" rx="12" fill="#8A5A2E"/><path d="M228 -8 H330 M228 6 H330" stroke="#6E4520" stroke-width="2"/></g>` +
        `<circle r="194" fill="#2A2C2E"/><circle r="186" fill="url(#ckPan)"/><circle r="186" fill="none" stroke="rgba(160,180,200,.18)" stroke-width="10"/>` +
        `<g clip-path="url(#ckClipR)">${base}${inner}</g>`;
      case "pot": return shadow(196, 192) +
        `<rect x="-214" y="-16" width="34" height="32" rx="8" fill="#2A2926"/><rect x="180" y="-16" width="34" height="32" rx="8" fill="#2A2926"/>` +
        `<circle r="192" fill="url(#ckMetal)"/><circle r="176" fill="#1B1A19"/><circle r="168" fill="url(#ckPot)"/>` +
        `<g clip-path="url(#ckClipR)">${base}${inner}</g><circle r="168" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="2"/>`;
      case "bowl": return shadow(186, 182) +
        `<circle r="184" fill="url(#ckCer)"/><circle r="178" fill="#F6F2EA"/><circle r="162" fill="#D8D0BF"/><circle r="156" fill="url(#ckBowlIn)"/>` +
        `<g clip-path="url(#ckClipR)">${base}${inner}</g>`;
      case "plate": return shadow(192, 188) +
        `<circle r="190" fill="url(#ckCer)" stroke="#DCD4C4" stroke-width="2"/><circle r="140" fill="#F7F4EE" stroke="#E2DBCC" stroke-width="2"/>` +
        `<g clip-path="url(#ckClipR)">${inner}</g>`;
      case "sieve": return shadow(170, 166) +
        `<g transform="rotate(40)"><rect x="160" y="-10" width="150" height="20" rx="10" fill="#9AA0A4"/><rect x="290" y="-14" width="30" height="28" rx="12" fill="#2C2C2E"/></g>` +
        `<circle r="168" fill="url(#ckMetal)"/><circle r="154" fill="#5E6368"/>` +
        `<pattern id="ckMesh" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#6E7378"/><path d="M0 4 H8 M4 0 V8" stroke="#8D9297" stroke-width="1"/></pattern><circle r="150" fill="url(#ckMesh)"/>` +
        `<g clip-path="url(#ckClipR)">${inner}</g>`;
      case "blender": return shadow(176, 172) +
        `<circle r="170" fill="#DDE2E5" stroke="#9AA3A8" stroke-width="4"/><circle r="156" fill="${floor ? floor[0] : "#C8B79A"}"/><circle r="156" fill="url(#ckShine)" opacity=".4"/>` +
        `<path d="M-90 20 C-60 -40 20 -60 80 -20 M-70 60 C-30 20 40 30 90 60" stroke="rgba(255,255,255,.35)" stroke-width="5" fill="none" stroke-linecap="round"/>` +
        `<g clip-path="url(#ckClipR)">${inner}</g>` +
        `<g transform="translate(30 -10) rotate(38)" filter="url(#ckSh)"><rect x="-10" y="-240" width="20" height="200" rx="9" fill="#46464A"/><rect x="-15" y="-52" width="30" height="22" fill="#2E2E31"/><rect x="-19" y="-30" width="38" height="36" rx="7" fill="#A0A5A8" stroke="#6B7073" stroke-width="2"/></g>`;
      case "tray": return `<ellipse cx="6" cy="14" rx="196" ry="148" fill="#000" opacity=".45" filter="url(#ckBlur)"/>` +
        `<rect x="-196" y="-140" width="392" height="280" rx="18" fill="url(#ckSheet)"/><rect x="-184" y="-128" width="368" height="256" rx="12" fill="#5F6467"/>` +
        `<rect x="-176" y="-124" width="352" height="248" rx="10" fill="#EFE6D2"/><path d="M-176 -60 L176 -40 M-120 -124 L-80 124 M60 -124 L110 124" stroke="#D8CBAE" stroke-width="1.5" opacity=".8"/>` +
        `<g clip-path="url(#ckClipRect)">${inner}</g>`;
      case "dish": return `<ellipse cx="6" cy="14" rx="196" ry="148" fill="#000" opacity=".45" filter="url(#ckBlur)"/>` +
        `<rect x="-206" y="-40" width="24" height="80" rx="10" fill="#E9E3D6"/><rect x="182" y="-40" width="24" height="80" rx="10" fill="#E9E3D6"/>` +
        `<rect x="-190" y="-140" width="380" height="280" rx="40" fill="url(#ckCer)" stroke="#D7CFBF" stroke-width="2"/><rect x="-170" y="-120" width="340" height="240" rx="28" fill="${floor ? floor[0] : "#E7DCC6"}"/>` +
        `<g clip-path="url(#ckClipRect)">${inner}</g>`;
      default: // board
        return `<ellipse cx="6" cy="14" rx="196" ry="150" fill="#000" opacity=".45" filter="url(#ckBlur)"/>` +
          `<rect x="-192" y="-142" width="384" height="284" rx="22" fill="url(#ckWood)" stroke="#8D6230" stroke-width="3"/>` +
          Array.from({ length: 13 }, (_, i)=> `<path d="M-180 ${-122 + i * 20} C-60 ${-126 + i * 20} 60 ${-118 + i * 20} 180 ${-122 + i * 20}" stroke="#A97A42" stroke-width="1.2" opacity=".45" fill="none"/>`).join("") +
          `<circle cx="160" cy="-112" r="10" fill="#5A3A1E" opacity=".75"/>` +
          `<g clip-path="url(#ckClipRect)">${inner}</g>` +
          `<g transform="translate(110 150) rotate(-14)" filter="url(#ckSh)"><path d="M-80 -12 L50 -16 Q64 -2 50 12 L-80 14Z" fill="#DDE1E3" stroke="#8C9296" stroke-width="2"/><path d="M-80 -12 L50 -16" stroke="#fff" stroke-width="2" opacity=".7"/><rect x="48" y="-10" width="50" height="20" rx="7" fill="#2A2220"/><circle cx="62" cy="0" r="2.4" fill="#BDB5A9"/><circle cx="84" cy="0" r="2.4" fill="#BDB5A9"/></g>`;
    }
  }

  // Zutaten (Mitte bei 0,0, etwa ±34), möglichst echt: unregelmäßige Formen (blob), Licht von oben links (Verläufe in DEFS),
  // viele kleine Stücke statt eines Symbols, feine Körnung über allem (Filter ckGrain).
  const f1 = (v)=> (+v).toFixed(1);
  const rng = (seed)=>{ let s = (seed * 9973) % 233280 || 1; return ()=> (s = (s * 9301 + 49297) % 233280) / 233280; };
  function smooth(p){
    const n = p.length; let d = `M${f1(p[0][0])} ${f1(p[0][1])}`;
    for(let i = 0; i < n; i++){
      const p0 = p[(i - 1 + n) % n], p1 = p[i], p2 = p[(i + 1) % n], p3 = p[(i + 2) % n];
      d += `C${f1(p1[0] + (p2[0] - p0[0]) / 6)} ${f1(p1[1] + (p2[1] - p0[1]) / 6)} ${f1(p2[0] - (p3[0] - p1[0]) / 6)} ${f1(p2[1] - (p3[1] - p1[1]) / 6)} ${f1(p2[0])} ${f1(p2[1])}`;
    }
    return d + "Z";
  }
  function blob(r, jit, seed, sx = 1, sy = 1, n = 8){
    const q = rng(seed), p = [];
    for(let i = 0; i < n; i++){ const a = i / n * 6.2832, rr = r * (1 + (q() - .5) * 2 * jit); p.push([Math.cos(a) * rr * sx, Math.sin(a) * rr * sy]); }
    return smooth(p);
  }
  // n Stücke locker verteilt (Sonnenblumen-Muster mit etwas Zufall)
  function pile(n, spread, seed, fn){
    const q = rng(seed); let out = "";
    for(let i = 0; i < n; i++){ const a = i * 2.39996 + q() * .7, r = spread * Math.sqrt((i + .5) / n) + (q() - .5) * 4; out += fn(Math.cos(a) * r, Math.sin(a) * r, q() * 360, i, q); }
    return out;
  }
  const at = (x, y, r, inner)=> `<g transform="translate(${f1(x)} ${f1(y)}) rotate(${f1(r)})">${inner}</g>`;
  const g = (s)=> `<g filter="url(#ckSh)">${s}</g>`;
  const ring = (n, r, fn)=> Array.from({ length: n }, (_, i)=> fn(Math.cos(i / n * 6.283) * r, Math.sin(i / n * 6.283) * r, i)).join("");
  const hl = (w = 10, y = -4)=> `<path d="M${-w / 2} ${y} C${-w / 4} ${y - 1.6} ${w / 4} ${y - 1.6} ${w / 2} ${y}" stroke="#fff" stroke-opacity=".45" stroke-width="1.1" fill="none" stroke-linecap="round"/>`;
  const ICON = {
    zwiebel: ()=> g(pile(10, 24, 11, (x, y, r, i)=> at(x, y, r, i % 3
      ? `<path d="M-12 4 C-9 -8 9 -8 12 4 L9.5 5 C7 -3.5 -7 -3.5 -9.5 5Z" fill="url(#gOni)" fill-opacity=".92" stroke="#CDB894" stroke-width=".6"/><path d="M-9 1 C-5 -5 5 -5 9 1" stroke="#fff" stroke-opacity=".6" stroke-width=".8" fill="none"/>`
      : `<path d="${blob(5.6, .18, i + 3, 1.1, 1, 6)}" fill="url(#gOni)" stroke="#CDB894" stroke-width=".6"/><path d="M-4 -1 C-1 -3 2 -3 4 -1" stroke="#E0CFAE" stroke-width=".8" fill="none"/>`))),
    fruehling: ()=> g(pile(14, 23, 271, (x, y, r, i)=> at(x, y, r, `<path d="${blob(5.4, .08, i + 3, 1.1, 1, 8)} ${blob(3, .1, i + 5, 1.1, 1, 7)}" fill="${i % 3 ? "#4E9A34" : "#D8EDB0"}" fill-rule="evenodd"/><path d="${blob(4.2, .08, i + 4, 1.1, 1, 8)}" fill="none" stroke="${i % 3 ? "#A6D47E" : "#F2F8E0"}" stroke-width=".7"/>`))),
    knoblauch: ()=> g(pile(18, 22, 23, (x, y, r, i)=> at(x, y, r, `<path d="${blob(2.6 + (i % 3) * .8, .3, i + 5, 1.25, 1, 6)}" fill="url(#gGar)" stroke="#CDBE98" stroke-width=".5"/>`))),
    ingwer: ()=> g(pile(16, 22, 31, (x, y, r, i)=> at(x, y, r, `<path d="${blob(2.8 + (i % 3) * .7, .35, i + 7, 1.6, .9, 6)}" fill="url(#gGin)" stroke="#A9803F" stroke-width=".5"/>`))),
    tomate: ()=> g(pile(7, 24, 41, (x, y, r, i)=> at(x, y, r, `<path d="${blob(8.6, .14, i + 7, 1, 1, 6)}" fill="url(#gTom)"/><path d="${blob(5, .22, i + 9, 1, 1, 6)}" fill="url(#gTomIn)" opacity=".9"/><ellipse cx="-1.6" cy="1" rx="1.6" ry="1" fill="#FBE7A8"/><ellipse cx="2" cy="-1" rx="1.6" ry="1" fill="#FBE7A8"/>${hl(9, -5)}`))),
    tomatensosse: ()=> "",
    chili: ()=> g(pile(8, 23, 53, (x, y, r, i)=> at(x, y, r, `<path d="${blob(7.2, .07, i + 2, 1, 1, 8)} ${blob(4.6, .12, i + 4, 1, 1, 7)}" fill="url(#gChi)" fill-rule="evenodd"/><circle cx="-1.4" cy=".2" r="1.1" fill="#F2D9A0"/><circle cx="1.4" cy="1" r="1.1" fill="#F2D9A0"/><circle cx=".3" cy="-1.7" r="1.1" fill="#F2D9A0"/>`))),
    paprika: ()=> g(pile(8, 25, 61, (x, y, r)=> at(x, y, r, `<path d="M-14 -3 C-7 -6.5 7 -6.5 14 -3 L14 3 C7 -.5 -7 -.5 -14 3Z" fill="url(#gPep)"/><path d="M-12 -3.4 C-6 -5.6 6 -5.6 12 -3.4" stroke="#fff" stroke-opacity=".5" stroke-width="1" fill="none"/>`))),
    karotte: ()=> g(pile(7, 23, 71, (x, y, r)=> at(x, y, r, `<circle r="8.4" fill="url(#gCar)"/><circle r="4.4" fill="#FFB86E" opacity=".75"/><circle r="8.4" fill="none" stroke="#C2560F" stroke-width=".7"/>` + ring(8, 6.2, (a, b)=> `<path d="M${f1(a * .75)} ${f1(b * .75)} L${f1(a)} ${f1(b)}" stroke="#E0701E" stroke-width=".5"/>`)))),
    kartoffel: ()=> g(pile(7, 24, 81, (x, y, r)=> at(x, y, r, `<rect x="-8.5" y="-8.5" width="17" height="17" rx="4" fill="url(#gPot)" stroke="#BC923E" stroke-width=".6"/><path d="M-6 -6 H5" stroke="#fff" stroke-opacity=".55" stroke-width="1.2" stroke-linecap="round"/>`))),
    brokkoli: ()=> g([[-13, -8, -20], [13, -9, 25], [0, 12, 160]].map(([x, y, r], k)=> at(x, y, r, `<path d="M0 4 L0 17" stroke="#9CC27A" stroke-width="6" stroke-linecap="round"/><path d="M0 4 L0 17" stroke="#C6DEA8" stroke-width="2" stroke-linecap="round"/>` + pile(11, 9, 141 + k, (a, b, rr, i)=> `<circle cx="${f1(a)}" cy="${f1(b)}" r="${f1(3.4 + (i % 3) * .6)}" fill="url(#gBro)"/>`))).join("")),
    pilz: ()=> g(pile(5, 20, 151, (x, y, r)=> at(x, y, r, `<path d="M-14 2 C-14 -12 14 -12 14 2 C10 3 6 3 5 3 L4 11 C4 13.5 -4 13.5 -4 11 L-5 3 C-6 3 -10 3 -14 2Z" fill="url(#gMus)"/><path d="M-14 2 C-14 -12 14 -12 14 2" stroke="url(#gMusCap)" stroke-width="2.4" fill="none"/><path d="M-10 1.5 C-4 .5 4 .5 10 1.5" stroke="#C9B08A" stroke-width=".8" fill="none"/>`))),
    zucchini: ()=> g(pile(6, 22, 161, (x, y, r)=> at(x, y, r, `<circle r="9.4" fill="#2C5A20"/><circle r="8.2" fill="url(#gZuc)"/>` + ring(6, 3.6, (a, b, i)=> `<ellipse cx="${f1(a)}" cy="${f1(b)}" rx="1.3" ry=".8" transform="rotate(${i * 60} ${f1(a)} ${f1(b)})" fill="#CBD596"/>`)))),
    blatt: ()=> g(pile(6, 20, 171, (x, y, r)=> at(x, y, r, `<path d="M-17 0 C-11 -11 8 -12 17 0 C8 11 -11 10 -17 0Z" fill="url(#gLeaf)"/><path d="M-16 0 C-5 -1 5 -1 16 0 M-6 -.5 L-2 -6 M2 -.5 L6 -6 M-6 .5 L-2 6 M2 .5 L6 6" stroke="#A8D88E" stroke-opacity=".7" stroke-width=".8" fill="none"/>`))),
    kraeuter: ()=> g(pile(24, 25, 91, (x, y, r, i, q)=> at(x, y, r, `<path d="${blob(2.2 + q() * 1.6, .35, i + 1, 1.4, 1, 6)}" fill="${i % 3 ? "#3A8530" : "#62AC47"}"/>`))),
    zitrone: ()=> g(`<circle r="24" fill="#E9BF1E"/><circle r="22" fill="#FFF7D6"/>` + Array.from({ length: 9 }, (_, k)=>{ const a0 = k / 9 * 6.2832 + .07, a1 = (k + 1) / 9 * 6.2832 - .07, r0 = 2.6, r1 = 19.5;
      return `<path d="M${f1(Math.cos(a0) * r0)} ${f1(Math.sin(a0) * r0)} L${f1(Math.cos(a0) * r1)} ${f1(Math.sin(a0) * r1)} A${r1} ${r1} 0 0 1 ${f1(Math.cos(a1) * r1)} ${f1(Math.sin(a1) * r1)} L${f1(Math.cos(a1) * r0)} ${f1(Math.sin(a1) * r0)}Z" fill="url(#gLem)"/>`; }).join("") + `<ellipse cx="-8" cy="-10" rx="7" ry="3" fill="#fff" opacity=".35" transform="rotate(-30 -8 -10)"/>`),
    garnele: ()=> g([[-14, -10, -10], [14, 4, 150], [-4, 16, 60]].map(([x, y, r])=> at(x, y, r,
      `<path d="M6 13 C10 16 14 15 15 12 C12 12 10 11 9 9Z" fill="#F07B4E"/><path d="M6 13 C3 17 0 18 -3 16 C0 15 2 13 3 11Z" fill="#F07B4E"/>` +
      Array.from({ length: 6 }, (_, j)=>{ const k = 5 - j, an = -2.3 + k * .55, px = Math.cos(an) * 9, py = Math.sin(an) * 9; return `<ellipse cx="${f1(px)}" cy="${f1(py)}" rx="${f1(7 - k * .55)}" ry="${f1(5.6 - k * .45)}" transform="rotate(${f1(an * 57.3 + 90)} ${f1(px)} ${f1(py)})" fill="url(#gShr)" stroke="#D8613A" stroke-width=".5"/>`; }).join("")
    )).join("")),
    fisch: ()=> g(`<g transform="rotate(-12)"><path d="${blob(30, .05, 3, 1.15, .6, 10)}" fill="url(#gFish)" stroke="#C8603C" stroke-width="1.2"/>` +
      [-20, -9, 2, 13, 23].map((x)=> `<path d="M${x} -15 C${x + 7} -5 ${x + 7} 5 ${x} 15" stroke="#FFE6D8" stroke-opacity=".85" stroke-width="2" fill="none"/>`).join("") + `${hl(30, -10)}</g>`),
    haehnchen: ()=> g(pile(6, 22, 101, (x, y, r, i)=> at(x, y, r, `<path d="${blob(9.6, .22, i + 11, 1.2, .9, 7)}" fill="url(#gChk)" stroke="#8A4E20" stroke-width=".6"/><path d="${blob(5, .3, i + 13, 1.2, .8, 6)}" fill="#FBE6C4" opacity=".5"/>${hl(9, -5)}`))),
    hack: ()=> g(pile(32, 27, 111, (x, y, r, i, q)=> at(x, y, r, `<path d="${blob(3.2 + q() * 1.8, .35, i + 3, 1, 1, 6)}" fill="url(#gMinc)"/>`))),
    speck: ()=> g(pile(9, 22, 121, (x, y, r)=> at(x, y, r, `<rect x="-7.5" y="-4.2" width="15" height="8.4" rx="2" fill="url(#gBac)"/><rect x="-7.5" y="-1.2" width="15" height="2.6" fill="#F7DFCF" opacity=".9"/>`))),
    fleisch: ()=> g(pile(6, 22, 131, (x, y, r, i)=> at(x, y, r, `<path d="${blob(9.4, .16, i + 17, 1.15, .95, 6)}" fill="url(#gBeef)"/><path d="${blob(5, .25, i + 19, 1.1, .8, 6)}" fill="#B9644C" opacity=".5"/>${hl(10, -5)}`))),
    ei: ()=> g(`<path d="${blob(26, .12, 5, 1.1, 1, 9)}" fill="url(#gEggW)" stroke="#E3D9C2" stroke-width=".8"/><circle cx="3" cy="-1" r="10.5" fill="url(#gYolk)"/><ellipse cx="-.5" cy="-5" rx="3.4" ry="2" fill="#fff" opacity=".55"/>`),
    reis: ()=> g(pile(44, 27, 181, (x, y, r)=> at(x, y, r, `<ellipse rx="4.6" ry="1.9" fill="url(#gRice)" stroke="#D6CAA8" stroke-width=".4"/>`))),
    nudel: ()=>{ const q = rng(191); return g(`<g fill="none" stroke-linecap="round">` + Array.from({ length: 14 }, ()=>{ const P = ()=> f1(q() * 56 - 28); const d = `M${P()} ${P()} C${P()} ${P()} ${P()} ${P()} ${P()} ${P()}`; return `<path d="${d}" stroke="#C9A04A" stroke-width="3.6"/><path d="${d}" stroke="#F1D58E" stroke-width="2.2"/>`; }).join("") + `</g>`); },
    brot: ()=> g(`<path d="M-24 18 L-24 -6 C-29 -22 -10 -29 0 -22 C10 -29 29 -22 24 -6 L24 18 C24 21 -24 21 -24 18Z" fill="#94591F"/><path d="M-21 16 L-21 -5 C-25 -18 -9 -24 0 -18 C9 -24 25 -18 21 -5 L21 16Z" fill="url(#gBread)"/>` + pile(18, 16, 201, (x, y, r, i)=> at(x, y + 1, r, `<ellipse rx="${1 + (i % 3) * .5}" ry=".8" fill="#C99A55" opacity=".6"/>`))),
    kaese: ()=> g(pile(24, 25, 211, (x, y, r)=> at(x, y, r, `<rect x="-5.5" y="-1.1" width="11" height="2.2" rx="1" fill="url(#gChs)" stroke="#C99A1E" stroke-width=".3"/>`))),
    butter: ()=> `<path d="${blob(22, .15, 7, 1.2, 1, 9)}" fill="#F6DC86" opacity=".55"/>` + g(`<rect x="-13" y="-9" width="26" height="18" rx="2.6" fill="url(#gBut)" stroke="#D7B04C" stroke-width=".6"/>${hl(18, -6)}`),
    honig: ()=> g(`<g fill="none" stroke-linecap="round"><path d="M-30 -14 C-10 -24 10 -4 30 -14 M-28 4 C-6 -8 12 14 30 2 M-24 20 C-4 10 14 28 28 18" stroke="#C98414" stroke-width="5.4" opacity=".9"/><path d="M-30 -14 C-10 -24 10 -4 30 -14 M-28 4 C-6 -8 12 14 30 2 M-24 20 C-4 10 14 28 28 18" stroke="#F9D070" stroke-width="1.6"/></g>`),
    schoko: ()=> g(pile(7, 20, 221, (x, y, r, i)=> at(x, y, r, `<path d="${blob(7, .25, i + 9, 1.1, .9, 5)}" fill="url(#gChoc)"/>${hl(7, -3)}`))),
    huelsen: ()=> g(pile(16, 23, 231, (x, y, r)=> at(x, y, r, `<ellipse rx="5.2" ry="4.3" fill="url(#gBean)"/><path d="M-1.5 -3.6 C.5 -1 .5 1 -1.5 3.6" stroke="#8E6830" stroke-width=".6" fill="none"/>`))),
    nuss: ()=> g(pile(11, 22, 241, (x, y, r)=> at(x, y, r, `<path d="M0 -7.5 C5.5 -4 5.5 4 0 8.5 C-5.5 4 -5.5 -4 0 -7.5Z" fill="url(#gNut)" stroke="#8E6430" stroke-width=".5"/><path d="M0 -5 C2 -1 2 3 0 6" stroke="#B88C52" stroke-width=".6" fill="none"/>`))),
    mehl: ()=> `<path d="${blob(27, .12, 3, 1.15, 1, 10)}" fill="#000" opacity=".1" transform="translate(2 3)"/><path d="${blob(27, .12, 3, 1.15, 1, 10)}" fill="url(#gMehl)"/><path d="${blob(13, .2, 4, 1.2, 1, 8)}" fill="#fff" opacity=".7" transform="translate(-6 -6)"/>`,
    gewuerz: (col)=>{ const id = "gSp" + col.slice(1); return `<radialGradient id="${id}" cx="38%" cy="32%" r="75%"><stop offset="0" stop-color="${col}" stop-opacity=".75"/><stop offset=".25" stop-color="${col}"/><stop offset="1" stop-color="${col}" stop-opacity="1"/></radialGradient>` +
      `<path d="${blob(20, .14, 9, 1.2, .95, 9)}" fill="#000" opacity=".12" transform="translate(2 3)"/><path d="${blob(20, .14, 9, 1.2, .95, 9)}" fill="url(#${id})"/><path d="${blob(9, .2, 8, 1.2, .9, 7)}" fill="#fff" opacity=".18" transform="translate(-5 -5)"/>` +
      pile(16, 16, 251, (x, y)=> `<circle cx="${f1(x)}" cy="${f1(y)}" r=".9" fill="#000" opacity=".18"/>`); },
    stueck: ()=> g(pile(6, 21, 261, (x, y, r, i)=> at(x, y, r, `<path d="${blob(8, .2, i + 21, 1.1, .9, 6)}" fill="url(#gStk)" stroke="#9C8660" stroke-width=".6"/>${hl(8, -4)}`))),
  };
  // Farbe kleiner Gewürzhäufchen nach Name
  function spiceColor(n){
    n = n.toLowerCase();
    if(/salz|zucker|natron|backpulver/.test(n)) return "#F4F2EC";
    if(/pfeffer|kümmel|nelke|zimt|piment|kakao/.test(n)) return /zimt/.test(n) ? "#9A5A2E" : "#3A332E";
    if(/kurkuma|curry|senf|garam/.test(n)) return "#E0A526";
    if(/paprika|chili|cayenne|sumach/.test(n)) return "#C4361F";
    if(/oregano|kräuter|za.?atar|thymian/.test(n)) return "#6E8A3A";
    return "#B8743A";
  }
  // feste Plätze im Gerät (für 1–7 Zutaten), Mitte zuletzt
  const SPOTS = [[-62, -44], [58, -52], [70, 46], [-46, 62], [6, 4], [-104, 6], [18, 102], [104, -6], [-14, -104]];

  function scene(kind, ings){
    const list = [], liquids = [];
    for(const i of ings || []){
      const k = iconOf(i.item);
      if(LIQUID[k]){ liquids.push(k); continue; }
      if(list.some((x)=> x.k === k && k !== "gewuerz")) continue;
      list.push({ k, name: i.item });
    }
    const flat = kind === "tray" || kind === "dish" || kind === "board" || kind === "plate";
    // Flüssiges: Boden des Geräts in der Farbe der ersten Flüssigkeit (Öl nur als Glanz)
    const main = liquids.find((l)=> l !== "oel");
    const floor = main && !flat ? LIQUID[main] : (main === "tomatensosse" && kind === "dish" ? LIQUID[main] : null);
    let inner = "";
    if(liquids.includes("oel") && !flat) inner += `<g fill="none" stroke="rgba(255,226,150,.5)" stroke-width="2">${ring(9, 70, (x, y, i)=> `<ellipse cx="${x * (1 + (i % 3) * .3)}" cy="${y}" rx="${6 + (i % 4) * 3}" ry="${4 + (i % 3) * 2}"/>`)}</g>`;
    if(main && flat && kind !== "dish") inner += `<path d="M-60 -20 C-20 -60 40 -40 70 0 C40 40 -30 50 -60 20Z" fill="${LIQUID[main][0]}" opacity=".85"/>`;
    // Größe nach Anzahl: wenige Zutaten groß, viele kleiner
    const n = Math.min(list.length, 8);
    const sc = (n <= 2 ? 2.1 : n <= 4 ? 1.75 : n <= 6 ? 1.5 : 1.32) * (flat ? 1.05 : 1);
    const wide = kind === "tray" || kind === "dish" || kind === "board";
    const spots = (n <= 2 ? [[-48, -6], [54, 10]] : n <= 4 ? [[-58, -46], [56, -48], [60, 50], [-52, 52]] : SPOTS).map(([x, y])=> wide ? [x * 1.4, y * .95] : [x, y]);
    // Geschnittenes liegt verstreut (zwei weitere Häufchen), Ganzes einmal
    const SCATTER = new Set(["zwiebel", "paprika", "chili", "karotte", "kartoffel", "knoblauch", "kraeuter", "fruehling", "pilz", "zucchini", "huelsen", "nuss", "hack", "brokkoli", "speck", "blatt", "stueck"]);
    const extra = [];
    list.slice(0, 8).forEach((it, i)=>{
      const [x, y] = spots[i] || [0, 0];
      const draw = it.k === "gewuerz" ? ICON.gewuerz(spiceColor(it.name)) : (ICON[it.k] || ICON.stueck)();
      inner += `<g class="ckIng" style="--i:${i}" transform="translate(${x} ${y}) scale(${sc.toFixed(2)})"><g>${draw}</g></g>`;
      if(SCATTER.has(it.k) && n <= 6){
        const a = (i * 1.7) % 6.283;
        [[Math.cos(a) * 46 * sc / 1.3, Math.sin(a) * 40 * sc / 1.3, 145], [Math.cos(a + 2.4) * 40 * sc / 1.3, Math.sin(a + 2.4) * 46 * sc / 1.3, 260]].forEach(([dx, dy, r])=>
          extra.push(`<g class="ckIng" style="--i:${i}" transform="translate(${(x + dx).toFixed(1)} ${(y + dy).toFixed(1)}) rotate(${r}) scale(${(sc * .62).toFixed(2)})"><g>${draw}</g></g>`));
      }
    });
    inner = inner.replace(/(<g class="ckIng")/, extra.join("") + "$1");
    // Körnung über alle Zutaten (eine Ebene, damit der Filter nur einmal läuft)
    inner = inner.replace(/(<g class="ckIng"[\s\S]*$)/, '<g filter="url(#ckGrain)">$1</g>');
    // Flüssigkeit im Topf: ein paar Bläschen
    if(main && (kind === "pot" || kind === "pan" || kind === "wok")) inner += `<g fill="none" stroke="rgba(255,255,255,.22)" stroke-width="2">${ring(11, 112, (x, y, i)=> `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${3 + (i % 3) * 2}"/>`)}</g>`;
    if(!list.length && !main && kind === "pot") inner += `<g fill="none" stroke="rgba(255,255,255,.18)" stroke-width="2">${ring(6, 60, (x, y)=> `<circle cx="${x}" cy="${y}" r="5"/>`)}</g>`;
    return `<svg viewBox="-215 -215 430 430" role="img" aria-label="${esc(LABEL[kind] || "Arbeitsfläche")} von oben">${DEFS}${vessel(kind, inner, floor)}</svg>`;
  }

  window.KOCHBUCH_COOKSCENE = {
    analyze(text){ const t = title(text), gr = gear(text); return { title: t.title, body: t.body, kind: gr.kind, gear: gr.label, heat: heat(text), time: time(text) }; },
    scene,
    iconOf,
  };
})();
