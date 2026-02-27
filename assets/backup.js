(function(){
  const KEYS = [
    "kochbuch.stats.v1",
    "kochbuch.stats",
    "kochbuch.freezer",
    "kochbuch.shopping",
    "kochbuch.localRecipes",
    "kochbuch.pantry"
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

  function parseImport(){
    const txt = String(inp.value || "").trim();
    if(!txt) throw new Error("Import ist leer.");
    const obj = JSON.parse(txt);
    if(!obj || typeof obj !== "object" || !obj.data) throw new Error("Ungültiges Format.");
    return obj;
  }

  function applyImport(mode){
    const obj = parseImport();
    const data = obj.data;

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
        const seen = new Set(cur.map(x=>JSON.stringify(x)));
        const merged = cur.slice();
        for(const x of incoming){
          const s = JSON.stringify(x);
          if(!seen.has(s)){ seen.add(s); merged.push(x); }
        }
        safeSet(k, merged);
      }else if(cur == null){
        safeSet(k, incoming);
      }
    }
  }

  $("#doExport")?.addEventListener("click", ()=>{
    out.value = exportAll();
    out.focus(); out.select();
  });

  $("#copyExport")?.addEventListener("click", async ()=>{
    try{ await navigator.clipboard.writeText(out.value || ""); alert("Kopiert."); }
    catch{ alert("Clipboard nicht verfügbar. Manuell kopieren."); }
  });

  $("#doImport")?.addEventListener("click", ()=>{
    if(!confirm("Import anwenden und vorhandene Daten überschreiben?")) return;
    try{ applyImport("overwrite"); alert("Import angewendet."); }catch(e){ alert(e.message || "Fehler."); }
  });

  $("#mergeImport")?.addEventListener("click", ()=>{
    try{ applyImport("merge"); alert("Import gemerged."); }catch(e){ alert(e.message || "Fehler."); }
  });
})();