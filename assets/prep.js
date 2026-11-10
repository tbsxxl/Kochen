// Vorbereiten (Mise en place): liest aus Schritten und Zutaten, was sich vor dem Kochen erledigen lässt –
// schneiden, abwiegen, Ofen/Wasser anstellen. Rezepte können die Liste im Front Matter festlegen (`prep:`), sonst wird sie hier erkannt.
// Läuft im Browser (window.KOCHBUCH_PREP) und in Node (tools/prep-check.js).
(function(root){
  // Tätigkeiten ohne Hitze
  const PREP = /(schäl|würfel|schneid|\bhacken|gehackt|reiben|raspel|hobel|halbier|\bviertel|zupf|auspress|pressen|entkern|putzen|waschen|zerkleiner|zerdrück|abwieg|abmess|trocken\s?tupf|\bteilen|zerteilen|aufteilen|filetier|parier|plattier|mörser|zerstoß)/i;
  // Soßen, Dressings, Marinaden anrühren zählt nur, wenn es in einem eigenen Gefäß passiert
  const MIX = /(verrühr|vermeng|vermisch|anrühr|verquirl|marinier)/i, BOWL = /(Schüssel|Schälchen|Gefäß|Rührgefäß|Becher)/i, ADD = /(zugeben|dazugeben|hinzufüg|unterrühr|unterheb|darauf|darüber|Pfanne|Topf)/i;
  // Hitze, Garen, Warten → kein reiner Vorbereitungsschritt
  const HEAT = /(brat|koch|köchel|erhitz|back|gar(en|t)\b|schmor|anschwitz|dünst|röst|frittier|grill|simmer|reduzier|ablösch|aufgieß|schmelz|karamellis|blanchier|pochier|dämpf|Pfanne|Topf|Bräter|Blech|Ofen|Hitze|heiß|warm|servier|anricht|bestreu|garnier|toppen|\bMin\b|Minute|Stunde|\bStd\b)/i;
  const START = /(vorheiz|Wasserkocher|Wasser[^.]*(aufkoch|zum Kochen|erhitz)|Salzwasser[^.]*(aufkoch|zum Kochen|aufsetz)|\bWasser aufsetzen)/i;
  const NOSTART = /(ablösch|inhalt|garen|köchel|Reis darin|schälen|zugeben)/i;
  // Folgesätze und Handgriffe nach dem Garen sind keine Vorbereitung
  const SKIP = /^(Mit de[mnr] (restlichen|übrigen)|Alles\b|Anschließend|Danach|Dann\b|Zum Schluss|Zuletzt|Währenddessen|Inzwischen|Nach\b|Sobald|Wenn\b|Vor dem Servieren|Kurz vor)|wiederholen|nach Belieben (auf)?schneiden|Lorbeer|herausnehmen|abschmecken|ruhen lassen|abkühlen|aufschneiden und|tranchier/i;
  // Zubereitung in der Zutatenzeile: „Zwiebel, gewürfelt“
  const ING = /,\s*((fein|grob|klein|dünn|frisch)\s+)?(gewürfelt|gehackt|geschnitten|gerieben|geraspelt|gehobelt|gepresst|halbiert|geviertelt|geschält|entkernt|gezupft|zerdrückt|geschmolzen|in\s+(feinen?\s+|dünnen?\s+|groben?\s+)?(Scheiben|Würfeln?|Streifen|Ringen|Stücken?|Stiften|Spalten|Röschen))/i;

  // Sätze trennen, ohne an „Min.“, „ca.“, „z. B.“, „°C“ oder Zahlen zu brechen
  function sentences(text){
    const t = String(text || "").replace(/\b(Min|Std|ca|z|B|bzw|evtl|ggf|TL|EL|Pck|Stk|Nr|inkl|max|mind)\./g, "$1\u0001").replace(/(\d)\.(\d)/g, "$1\u0001$2");
    return t.split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ0-9])/).map((s)=> s.replace(/\u0001/g, ".").trim()).filter((s)=> s.length > 3);
  }
  // „**Für die Pickles**: Gurke …“ → „Gurke …“
  const clean = (s)=> s.replace(/\*\*[^*]+\*\*\s*:?\s*/g, "").replace(/\s+/g, " ").replace(/[.;]\s*$/, "").trim();
  const key = (s)=> s.toLowerCase().replace(/[^a-zäöüß]/g, "").slice(0, 28);

  function fromSteps(steps){
    const start = [], tasks = [];
    const n = (steps || []).length;
    (steps || []).forEach((step, i)=>{
      sentences(step).forEach((raw)=>{
        const s = clean(raw);
        if(START.test(s) && !NOSTART.test(s) && s.length < 140){ start.push({ text: s, step: i + 1 }); return; }
        if(START.test(s)) return;
        // der letzte Schritt ist Anrichten: dort nichts mehr vorbereiten
        if(n > 2 && i === n - 1) return;
        if(HEAT.test(s) || SKIP.test(s) || s.length > 170) return;
        if(PREP.test(s) || (MIX.test(s) && BOWL.test(s) && !ADD.test(s))) tasks.push({ text: s, step: i + 1 });
      });
    });
    return { start, tasks };
  }
  function fromIngredients(ings, known){
    const out = [];
    (ings || []).forEach((it)=>{
      const name = String(it && it.item || "");
      const m = name.match(ING);
      if(!m) return;
      const base = name.slice(0, m.index).replace(/\s+$/, "").trim(), how = name.slice(m.index + 1).trim();
      const first = base.split(/[\s-]/)[0].toLowerCase().slice(0, 5);
      if(first && known.some((t)=> t.toLowerCase().includes(first))) return;   // steht schon in einem Schritt
      out.push({ text: `${base}: ${how}`, step: 0 });
    });
    return out;
  }
  // manuell: ["Zwiebel würfeln", { later: "Kartoffeln schälen (während das Fleisch schmort)" }, { start: "Ofen auf 130 °C vorheizen" }]
  function build(recipe){
    const manual = recipe && recipe.prep;
    if(Array.isArray(manual) && manual.length){
      const g = { start: [], tasks: [], later: [], manual: true };
      manual.forEach((p)=>{
        if(typeof p === "string") g.tasks.push({ text: p, step: 0 });
        else if(p && p.start) g.start.push({ text: String(p.start), step: 0 });
        else if(p && p.later) g.later.push({ text: String(p.later), step: 0 });
        else if(p && p.text) g.tasks.push({ text: String(p.text), step: 0 });
      });
      return g;
    }
    const a = fromSteps(recipe && recipe.steps);
    const seen = new Set(), uniq = (list)=> list.filter((t)=>{ const k = key(t.text); if(seen.has(k)) return false; seen.add(k); return true; });
    const start = uniq(a.start), tasks = uniq(a.tasks);
    const ing = uniq(fromIngredients(recipe && recipe.ingredients, tasks.map((t)=> t.text)));
    return { start, tasks: tasks.concat(ing), later: [], manual: false };
  }
  const api = { build, sentences };
  if(typeof module !== "undefined" && module.exports) module.exports = api; else root.KOCHBUCH_PREP = api;
})(typeof window !== "undefined" ? window : globalThis);
