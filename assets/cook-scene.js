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
    ["ei", /\beier?\b|eigelb|eiweiß|\bei,|\bei\s/],
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
    <clipPath id="ckClipR"><circle r="150"/></clipPath>
    <clipPath id="ckClipRect"><rect x="-176" y="-124" width="352" height="248" rx="14"/></clipPath>
  </defs>`;
  const shadow = (rx, ry)=> `<ellipse cx="6" cy="16" rx="${rx}" ry="${ry}" fill="#000" opacity=".45" filter="url(#ckBlur)"/>`;

  // Gerät: Rahmen + Innenfläche (Inhalt wird in die Innenfläche geschnitten)
  function vessel(kind, inner, floor){
    const base = floor ? `<circle r="150" fill="${floor[0]}"/><circle r="150" fill="url(#ckShine)" opacity=".35"/>` : "";
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

  // Zutaten-Symbole (Mitte bei 0,0, etwa ±34). Jedes zeigt die Zutat so, wie sie im Gerät liegt.
  const g = (s)=> `<g filter="url(#ckSh)">${s}</g>`;
  const ring = (n, r, fn)=> Array.from({ length: n }, (_, i)=> fn(Math.cos(i / n * 6.283) * r, Math.sin(i / n * 6.283) * r, i)).join("");
  const ICON = {
    zwiebel: ()=> g(`<path d="M-30 -6 C-26 -22 -6 -28 6 -26 C22 -22 30 -8 30 4" stroke="#EADBB8" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M-30 -6 C-26 -22 -6 -28 6 -26 C22 -22 30 -8 30 4" stroke="#C9A6CF" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>
      <path d="M-24 14 C-18 2 0 -2 14 4" stroke="#F1E5C8" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M-6 26 C2 18 16 16 26 22" stroke="#EADBB8" stroke-width="6" fill="none" stroke-linecap="round"/>`),
    fruehling: ()=> g(ring(7, 20, (x, y)=> `<circle cx="${x}" cy="${y}" r="7" fill="#5E9B37"/><circle cx="${x}" cy="${y}" r="5" fill="#BFE08A"/><circle cx="${x}" cy="${y}" r="2.6" fill="#EAF5C4"/>`) + `<circle r="7" fill="#5E9B37"/><circle r="5" fill="#BFE08A"/><circle r="2.6" fill="#EAF5C4"/>`),
    knoblauch: ()=> g(ring(5, 16, (x, y, i)=> `<g transform="translate(${x} ${y}) rotate(${i * 72})"><path d="M0 -12 C8 -10 10 4 4 12 C0 14 -4 14 -6 10 C-10 2 -8 -10 0 -12Z" fill="#F7F2E6" stroke="#D9CDB0" stroke-width="1.4"/><path d="M0 -10 C2 -2 2 6 0 12" stroke="#E2D7BE" stroke-width="1"/></g>`)),
    ingwer: ()=> g(`<path d="M-28 6 C-30 -6 -14 -10 -10 -16 C-4 -24 8 -16 10 -10 C22 -12 30 -2 26 8 C24 20 6 22 -6 20 C-18 22 -26 18 -28 6Z" fill="#D9B277" stroke="#9C7A45" stroke-width="2"/><path d="M-14 4 H0 M6 -2 H18 M-4 12 H8" stroke="#A98450" stroke-width="1.6" stroke-linecap="round"/>`),
    tomate: ()=> g(`<circle r="26" fill="#E0412C" stroke="#A92916" stroke-width="2"/><circle r="26" fill="url(#ckShine)"/><path d="M-12 -24 L0 -16 L12 -24 L5 -30 L-5 -30Z" fill="#4E8A2E"/>`),
    chili: ()=> g(ring(6, 18, (x, y)=> `<circle cx="${x}" cy="${y}" r="6.5" fill="#C8201A"/><circle cx="${x}" cy="${y}" r="3.2" fill="#F4E3C0"/><circle cx="${x - 1}" cy="${y - 1}" r="1" fill="#E8C680"/>`)),
    paprika: ()=> g([[-18, -12, -20], [10, -16, 15], [-6, 8, 60], [18, 10, -40], [-22, 16, 30]].map(([x, y, r])=> `<rect x="${x - 10}" y="${y - 5}" width="20" height="10" rx="3" transform="rotate(${r} ${x} ${y})" fill="#D12A22" stroke="#8F1A14" stroke-width="1.4"/>`).join("")),
    karotte: ()=> g(ring(6, 18, (x, y)=> `<circle cx="${x}" cy="${y}" r="8" fill="#EE7A23" stroke="#C25A12" stroke-width="1.4"/><circle cx="${x}" cy="${y}" r="3.6" fill="#F7A55A"/>`)),
    kartoffel: ()=> g([[-16, -10], [12, -14], [-4, 10], [20, 10], [-22, 14]].map(([x, y], i)=> `<rect x="${x - 9}" y="${y - 9}" width="18" height="18" rx="4" transform="rotate(${i * 23} ${x} ${y})" fill="#F0D489" stroke="#C9A24C" stroke-width="1.4"/><rect x="${x - 6}" y="${y - 6}" width="7" height="4" rx="2" fill="#FFF3C8" opacity=".7"/>`).join("")),
    brokkoli: ()=> g([[-14, -8], [12, -10], [0, 12]].map(([x, y])=> `<path d="M${x} ${y} l0 14" stroke="#8DB16A" stroke-width="6" stroke-linecap="round"/>` + ring(6, 8, (a, b)=> `<circle cx="${x + a}" cy="${y + b}" r="6" fill="#3E7A2C"/>`) + `<circle cx="${x}" cy="${y}" r="7" fill="#4F8F38"/>`).join("")),
    pilz: ()=> g([[-12, -6, -20], [14, 8, 30]].map(([x, y, r])=> `<g transform="translate(${x} ${y}) rotate(${r})"><path d="M-18 4 C-18 -14 18 -14 18 4Z" fill="#9A7255"/><rect x="-5" y="2" width="10" height="14" rx="3" fill="#EADCC4"/><path d="M-18 4 H18" stroke="#6A4B34" stroke-width="2"/></g>`).join("")),
    zucchini: ()=> g(ring(5, 17, (x, y)=> `<circle cx="${x}" cy="${y}" r="10" fill="#3F7A2E"/><circle cx="${x}" cy="${y}" r="8" fill="#E8EFC8"/><circle cx="${x}" cy="${y}" r="2.5" fill="#C8D69A"/>`)),
    blatt: ()=> g([[-14, -6, -30], [10, -10, 25], [0, 12, 80], [-20, 14, 10]].map(([x, y, r])=> `<g transform="translate(${x} ${y}) rotate(${r})"><path d="M-16 0 C-8 -12 8 -12 16 0 C8 12 -8 12 -16 0Z" fill="#3F8A3A"/><path d="M-14 0 H14" stroke="#7CC06E" stroke-width="1.4"/></g>`).join("")),
    kraeuter: ()=> g(ring(7, 16, (x, y, i)=> `<path transform="translate(${x} ${y}) rotate(${i * 51})" d="M-6 0 C-3 -6 3 -6 6 0 C3 6 -3 6 -6 0Z" fill="${i % 2 ? "#4C9A3E" : "#2F7A2C"}"/>`)),
    zitrone: ()=> g(`<circle r="24" fill="#F2D33A" stroke="#C9A417" stroke-width="2"/><circle r="19" fill="#F8EBA0"/>` + ring(8, 10, (x, y, i)=> `<path d="M0 0 L${x * 1.7} ${y * 1.7}" stroke="#F2D33A" stroke-width="1.6"/>`)),
    garnele: ()=> g([[-12, -6, 0], [14, 8, 160]].map(([x, y, r])=> `<g transform="translate(${x} ${y}) rotate(${r})"><path d="M-14 6 C-16 -10 6 -16 14 -4 C18 2 12 8 6 4 C2 -2 -6 -2 -6 6" stroke="#F08A5D" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M-14 6 C-16 -10 6 -16 14 -4" stroke="#FBC8A8" stroke-width="2.4" fill="none" stroke-linecap="round"/></g>`).join("")),
    fisch: ()=> g(`<g transform="rotate(-12)"><rect x="-34" y="-16" width="68" height="32" rx="12" fill="#F29B76" stroke="#C86E4B" stroke-width="2"/><path d="M-20 -16 C-14 0 -14 0 -20 16 M-4 -16 C2 0 2 0 -4 16 M12 -16 C18 0 18 0 12 16" stroke="#FFD2BE" stroke-width="3" fill="none"/></g>`),
    haehnchen: ()=> g(`<g transform="rotate(-20)"><ellipse rx="34" ry="22" fill="#D99A5E" stroke="#8A4E24" stroke-width="2.4"/><ellipse rx="34" ry="22" fill="url(#ckShine)"/><path d="M-22 -8 L10 4 M-20 6 L14 14" stroke="#7A3E18" stroke-width="3" stroke-linecap="round" opacity=".6"/></g>`),
    hack: ()=> g(Array.from({ length: 16 }, (_, i)=> { const a = i * 2.4, r = 6 + (i % 5) * 5; return `<circle cx="${Math.cos(a) * r}" cy="${Math.sin(a) * r}" r="${5 + (i % 3)}" fill="${i % 2 ? "#8C4A2E" : "#A65C3A"}"/>`; }).join("")),
    speck: ()=> g([[-14, -8, -10], [8, 8, 14]].map(([x, y, r])=> `<g transform="translate(${x} ${y}) rotate(${r})"><rect x="-22" y="-6" width="44" height="12" rx="4" fill="#C9503F"/><path d="M-20 -1 C-8 -4 8 2 20 -1" stroke="#F5D9C8" stroke-width="3" fill="none"/></g>`).join("")),
    fleisch: ()=> g(`<g transform="rotate(-15)"><ellipse cx="2" cy="4" rx="36" ry="26" fill="#3E2217"/><ellipse rx="36" ry="26" fill="#A8483A" stroke="#6E2A1E" stroke-width="3"/><path d="M-26 -6 C-12 -16 8 -14 26 -6" stroke="#F2D8C6" stroke-width="3.4" fill="none" stroke-linecap="round" opacity=".9"/><path d="M-20 8 C-6 2 10 4 24 10" stroke="#E8C2AC" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".8"/></g>`),
    ei: ()=> g(`<ellipse rx="30" ry="24" fill="#FFFDF7" stroke="#E6DCC6" stroke-width="2"/><circle cx="2" cy="1" r="11" fill="#F6A72A"/><circle cx="-1" cy="-2" r="3" fill="#FFE6A8"/>`),
    reis: ()=> g(Array.from({ length: 22 }, (_, i)=> { const a = i * 2.39996, r = 4 + Math.sqrt(i) * 6; return `<ellipse cx="${(Math.cos(a) * r).toFixed(1)}" cy="${(Math.sin(a) * r).toFixed(1)}" rx="6" ry="2.4" transform="rotate(${i * 37} ${(Math.cos(a) * r).toFixed(1)} ${(Math.sin(a) * r).toFixed(1)})" fill="#FBF6E8" stroke="#DDD2B6" stroke-width=".8"/>`; }).join("")),
    nudel: ()=> g(`<g fill="none" stroke-linecap="round"><path d="M-30 -10 C-10 -30 10 10 30 -10 M-30 4 C-10 -16 10 24 30 4 M-26 18 C-6 -2 14 38 30 18 M-20 -22 C0 -42 14 -2 26 -22" stroke="#D8B25A" stroke-width="6"/><path d="M-30 -10 C-10 -30 10 10 30 -10 M-30 4 C-10 -16 10 24 30 4" stroke="#F4DC94" stroke-width="2.4"/></g>`),
    brot: ()=> g(`<ellipse rx="32" ry="24" fill="#C98A44" stroke="#8E5A22" stroke-width="2"/><ellipse rx="32" ry="24" fill="url(#ckShine)"/>` + ring(7, 12, (x, y)=> `<ellipse cx="${x}" cy="${y}" rx="2" ry="1.2" fill="#FBF1D8"/>`)),
    kaese: ()=> g(`<path d="M-30 14 L28 -18 L30 14Z" fill="#F4C94A" stroke="#C99A1E" stroke-width="2"/><circle cx="12" cy="4" r="3.4" fill="#E2AF2A"/><circle cx="22" cy="-4" r="2.4" fill="#E2AF2A"/><circle cx="0" cy="10" r="2.4" fill="#E2AF2A"/>`),
    butter: ()=> g(`<rect x="-24" y="-16" width="48" height="32" rx="5" fill="#F7E08C" stroke="#D6B44A" stroke-width="2"/><path d="M-18 -10 H14" stroke="#FFF3C4" stroke-width="3" stroke-linecap="round"/>`),
    honig: ()=> g(`<path d="M-30 -14 C-10 -24 10 -4 30 -14 M-28 4 C-6 -8 12 14 30 2 M-24 20 C-4 10 14 28 28 18" stroke="#E2A22A" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9"/>`),
    schoko: ()=> g([[-14, -8], [10, -12], [0, 10], [18, 10]].map(([x, y], i)=> `<rect x="${x - 9}" y="${y - 7}" width="18" height="14" rx="2" transform="rotate(${i * 19} ${x} ${y})" fill="#5A3420" stroke="#3A1F12" stroke-width="1.4"/>`).join("")),
    huelsen: ()=> g(Array.from({ length: 14 }, (_, i)=> { const a = i * 2.4, r = 4 + Math.sqrt(i) * 7; return `<ellipse cx="${(Math.cos(a) * r).toFixed(1)}" cy="${(Math.sin(a) * r).toFixed(1)}" rx="6" ry="4.4" fill="${i % 3 ? "#C9A15A" : "#B57A3E"}" stroke="#8A6430" stroke-width=".8"/>`; }).join("")),
    nuss: ()=> g(Array.from({ length: 12 }, (_, i)=> { const a = i * 2.4, r = 4 + Math.sqrt(i) * 7; return `<ellipse cx="${(Math.cos(a) * r).toFixed(1)}" cy="${(Math.sin(a) * r).toFixed(1)}" rx="7" ry="4.6" transform="rotate(${i * 30} ${(Math.cos(a) * r).toFixed(1)} ${(Math.sin(a) * r).toFixed(1)})" fill="#D7B07A" stroke="#9C7440" stroke-width="1"/>`; }).join("")),
    mehl: ()=> `<ellipse cx="2" cy="4" rx="30" ry="22" fill="#000" opacity=".12"/><ellipse rx="30" ry="22" fill="#FBF8F1"/><ellipse cx="-6" cy="-6" rx="16" ry="10" fill="#fff"/>`,
    gewuerz: (col)=> `<ellipse cx="2" cy="3" rx="20" ry="15" fill="#000" opacity=".12"/><ellipse rx="20" ry="15" fill="${col || "#C9662A"}"/><ellipse cx="-5" cy="-4" rx="9" ry="6" fill="#fff" opacity=".22"/>`,
    stueck: ()=> g([[-12, -6], [12, -10], [0, 12]].map(([x, y], i)=> `<rect x="${x - 10}" y="${y - 8}" width="20" height="16" rx="5" transform="rotate(${i * 25} ${x} ${y})" fill="#CDB892" stroke="#9C8660" stroke-width="1.4"/>`).join("")),
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
    const sc = (n <= 2 ? 1.9 : n <= 4 ? 1.55 : n <= 6 ? 1.3 : 1.12) * (flat ? 1.05 : 1);
    const wide = kind === "tray" || kind === "dish" || kind === "board";
    const spots = (n <= 2 ? [[-48, -6], [54, 10]] : n <= 4 ? [[-58, -46], [56, -48], [60, 50], [-52, 52]] : SPOTS).map(([x, y])=> wide ? [x * 1.4, y * .95] : [x, y]);
    // Geschnittenes liegt verstreut (zwei weitere Häufchen), Ganzes einmal
    const SCATTER = new Set(["zwiebel", "paprika", "chili", "karotte", "kartoffel", "knoblauch", "kraeuter", "fruehling", "pilz", "zucchini", "huelsen", "nuss", "hack", "brokkoli", "speck", "blatt", "stueck", "garnele"]);
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
