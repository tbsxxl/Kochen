(function(){
  const KEYS = [
    "kochbuch.stats",
    "kochbuch.freezer",
    "kochbuch.shopping",
    "kochbuch.plan",
    "kochbuch.notes",
    "kochbuch.shopsections",
    "kochbuch.ui.pantry"
  ];

  const $ = (s)=>document.querySelector(s);
  const out = $("#exportOut");
  const inp = $("#importIn");

  function safeGet(k){
    try{ return JSON.parse(localStorage.getItem(k) || "null"); }catch{ return null; }
  }
  function safeSet(k, v){
    try{ localStorage.setItem(k, JSON.stringify(v)); }catch{}
  }

  function exportAll(){
    const payload = { version: 1, created: new Date().toISOString(), data: {} };
    for(const k of KEYS){
      const v = safeGet(k);
      if(v !== null) payload.data[k] = v;
    }
    return JSON.stringify(payload, null, 2);
  }

  // Backups von der alten GitHub-Pages-Version enthalten Pfade wie
  // "/Kochen/rezepte/x/". Auf Cloudflare liegt die Seite im Root.
  const OLD_BASE = /^(https?:\/\/[^/]+)?\/Kochen(?=\/)/i;
  function migratePaths(v){
    if(typeof v === "string") return v.replace(OLD_BASE, "");
    if(Array.isArray(v)) return v.map(migratePaths);
    if(v && typeof v === "object"){
      const out = {};
      for(const k of Object.keys(v)) out[migratePaths(k)] = migratePaths(v[k]);
      return out;
    }
    return v;
  }

  function parseImport(){
    const txt = String(inp.value || "").trim();
    if(!txt) throw new Error("Wähle zuerst eine Sicherungsdatei oder füge den Text einer Sicherung ein.");
    let obj;
    try{ obj = JSON.parse(txt); }
    catch{ throw new Error("Das ist keine gültige Sicherung. Bitte die ganze Datei bzw. den ganzen Text einfügen."); }
    if(!obj || typeof obj !== "object" || !obj.data) throw new Error("Das ist keine Sicherung aus dem Kochbuch. Wähle eine Datei, die du unter „Datensicherung“ gesichert hast.");
    return obj;
  }

  function applyImport(mode){
    const obj = parseImport();
    const data = migratePaths(obj.data);

    for(const k of Object.keys(data)){
      if(!KEYS.includes(k)) continue;

      if(mode === "overwrite"){
        safeSet(k, data[k]);
        continue;
      }

      const cur = safeGet(k);
      const incoming = data[k];

      if(cur && typeof cur === "object" && !Array.isArray(cur) && incoming && typeof incoming === "object" && !Array.isArray(incoming)){
        safeSet(k, { ...cur, ...incoming });
      }else if(Array.isArray(cur) && Array.isArray(incoming)){
        // Einkaufsliste: gleiche Zutat + Einheit nur einmal (wie beim Sync); sonst ganze Einträge vergleichen
        const keyOf = k === "kochbuch.shopping"
          ? (x)=> `${String(x && x.item || "").trim().toLowerCase()}|${String(x && x.unit || "").trim().toLowerCase()}`
          : (x)=> JSON.stringify(x);
        const seen = new Set(cur.map(keyOf));
        const merged = cur.slice();
        for(const x of incoming){
          const s = keyOf(x);
          if(!seen.has(s)){ seen.add(s); merged.push(x); }
        }
        safeSet(k, merged);
      }else if(cur == null){
        safeSet(k, incoming);
      }
    }
  }

  const toast = (t, action)=>{ try{ window.KOCHBUCH_UI?.toast?.(t, action); }catch{} };
  $("#saveFile")?.addEventListener("click", ()=>{
    const day = new Date().toISOString().slice(0, 10);
    window.KOCHBUCH_UI?.saveFile?.(`kochbuch-backup-${day}.json`, exportAll());
  });
  $("#doExport")?.addEventListener("click", ()=>{
    $("#exportBox").hidden = false;
    out.value = exportAll();
    out.focus(); out.select();
  });
  $("#importFile")?.addEventListener("change", async (e)=>{
    const f = e.target.files && e.target.files[0];
    if(!f) return;
    inp.value = await f.text();
    toast("Datei geladen – jetzt „Zusammenführen“ oder „Ersetzen“");
  });

  $("#copyExport")?.addEventListener("click", async ()=>{
    try{ await navigator.clipboard.writeText(out.value || ""); toast("Kopiert"); }
    catch{ alert("Kopieren hat nicht geklappt. Markiere den Text und kopiere ihn selbst."); }
  });

  $("#doImport")?.addEventListener("click", ()=>{
    if(!confirm("Die Bereiche aus der Sicherung auf diesem Gerät ersetzen? Bereiche, die nicht in der Sicherung sind, bleiben unverändert.")) return;
    // vorher den jetzigen Stand merken, damit „Rückgängig“ geht
    const before = {}; KEYS.forEach(k=>{ before[k] = localStorage.getItem(k); });
    try{
      applyImport("overwrite");
      toast("Daten ersetzt", { label: "Rückgängig", run: ()=>{ KEYS.forEach(k=>{ try{ before[k] == null ? localStorage.removeItem(k) : localStorage.setItem(k, before[k]); }catch{} }); toast("Alter Stand wiederhergestellt"); } });
    }catch(e){ alert(e.message || "Wiederherstellen hat nicht geklappt."); }
  });

  $("#mergeImport")?.addEventListener("click", ()=>{
    try{ applyImport("merge"); toast("Daten zusammengeführt"); }catch(e){ alert(e.message || "Zusammenführen hat nicht geklappt."); }
  });
})();