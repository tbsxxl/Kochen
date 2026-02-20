(function(){
  const data = window.RECIPE_DATA;
  if(!data) return;
  const U = window.KOCHBUCH_UTILS;
  const $ = (s)=>document.querySelector(s);
  const ls = {
    get(k, fb){ try{ const v = localStorage.getItem(k); return v?JSON.parse(v):fb; }catch{return fb;} },
    set(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch{} }
  };
  const baseServings = Number(data.baseServings || 1);
  // Cooking mode (tap ingredients to mark as done)
  const cookKey = 'kochbuch.cookmode.' + data.id;
  const normKey = (s)=>String(s||'').trim().toLowerCase();
  function ingKey(i){
    const item = normKey(i.item);
    const unit = normKey(U.normUnit(i.unit||''));
    return item + '|' + unit;
  }
  function getCook(){ return ls.get(cookKey, {}); }
  function setCook(v){ ls.set(cookKey, v); }
  const servingsInput = $("#servingsInput");
  const baseServingsEl = $("#baseServings");
  const listEl = $("#ingredientsList");
  if(baseServingsEl) baseServingsEl.textContent = String(baseServings);
  if(servingsInput) servingsInput.value = String(baseServings);

  const num = (x)=>U.tryNum(x);
  function currentServings(){
    const v = num(servingsInput?.value);
    return (v && v>0) ? v : baseServings;
  }
  function scaledIngredients(){
    const factor = currentServings() / baseServings;
    const ings = Array.isArray(data.ingredients) ? data.ingredients : [];
    return ings.map(i=>{
      const q = num(i.qty);
      return { item:String(i.item||"").trim(), unit:String(i.unit||""), qty:(q===null?i.qty:q*factor) };
    });
  }
  function renderIngredients(){
    if(!listEl) return;
    listEl.innerHTML = "";
    for(const i of scaledIngredients()){
      const row = document.createElement("div");
      row.className = "ingRow";
      const cook = getCook();
      const k = ingKey(i);
      if(cook[k]) row.classList.add("done");
      row.addEventListener("click", ()=>{
        const c = getCook();
        c[k] = !c[k];
        if(!c[k]) delete c[k];
        setCook(c);
        row.classList.toggle("done", !!c[k]);
      });
      const left = document.createElement("div");
      left.className = "ingLeft";
      const name = document.createElement("div");
      name.className = "ingName";
      name.textContent = i.item || "—";
      left.appendChild(name);
      const qty = document.createElement("div");
      qty.className = "ingQty";
      const unit = U.normUnit(i.unit||"");
      const qn = num(i.qty);
      if(qn !== null){
        const conv = U.autoConvert(qn, unit);
        qty.textContent = `${U.roundSmart(conv.qty)} ${conv.unit}`.trim();
      }else{
        qty.textContent = `${String(i.qty||"").trim()} ${unit}`.trim();
      }
      row.appendChild(left);
      row.appendChild(qty);
      listEl.appendChild(row);
    }
  }
  servingsInput?.addEventListener("input", renderIngredients);

  // Freezer
  const freezerKey = "kochbuch.freezer";
  const freezerBtn = $("#freezerBtn");
  function getFreezer(){ return ls.get(freezerKey, {}); }
  function setFreezer(v){ ls.set(freezerKey, v); }
  function freezerEntry(){ const f=getFreezer(); return f[data.id] || null; }
  function renderFreezer(){
    if(!freezerBtn) return;
    const e = freezerEntry();
    if(!e){
      freezerBtn.textContent = "🧊 Nicht in Kühltruhe";
      freezerBtn.classList.remove("green");
    }else{
      const p = e.portions ? `${e.portions} Portion${e.portions===1?"":"en"}` : "in Kühltruhe";
      freezerBtn.textContent = `🧊 ${p}`;
      freezerBtn.classList.add("green");
    }
  }
  freezerBtn?.addEventListener("click", ()=>{
    const f = getFreezer();
    const e = f[data.id] || null;
    if(!e){
      const input = prompt("Wie viele Portionen sind in der Kühltruhe? (Zahl)", "1");
      const n = num(input);
      if(!(n && n>0)) return;
      f[data.id] = { portions: Math.round(n), added: new Date().toISOString() };
      setFreezer(f); renderFreezer(); return;
    }
    const action = prompt("Kühltruhe:\n1 = Portion entnommen\n2 = Portionen ändern\n3 = Entfernen", "1");
    if(action === "1"){
      e.portions = Math.max(0, (e.portions||0) - 1);
      if(e.portions <= 0) delete f[data.id]; else f[data.id]=e;
      setFreezer(f); renderFreezer();
    }else if(action === "2"){
      const input = prompt("Neue Portionen (Zahl)", String(e.portions||1));
      const n = num(input);
      if(!(n && n>0)) return;
      e.portions = Math.round(n);
      f[data.id]=e; setFreezer(f); renderFreezer();
    }else if(action === "3"){
      delete f[data.id]; setFreezer(f); renderFreezer();
    }
  });

  // Stats
  const statsKey = "kochbuch.stats";
  const cookedBtn = $("#cookedBtn");
  const undoBtn = $("#undoCookedBtn");
  const favBtn = $("#favoriteBtn");
  const statsLine = $("#statsLine");

  function getStats(){ return ls.get(statsKey, {}); }
  function setStats(v){ ls.set(statsKey, v); }
  function getEntry(){
    const all = getStats();
    return all[data.id] || { cookedCount:0, lastCooked:null, history:[], favorite:false };
  }
  function setEntry(e){
    const all = getStats(); all[data.id]=e; setStats(all);
  }
  function fmt(iso){
    if(!iso) return "—";
    const d=new Date(iso);
    if(isNaN(d.getTime())) return "—";
    return d.toLocaleDateString("de-DE");
  }
  function renderStats(){
    const e=getEntry();
    if(favBtn){
      favBtn.textContent = e.favorite ? "★ Favorit" : "☆ Favorit";
      favBtn.classList.toggle("blue", !!e.favorite);
    }
    if(statsLine){
      statsLine.textContent = `Gekocht: ${e.cookedCount||0}× · Zuletzt: ${e.lastCooked?fmt(e.lastCooked):"—"}`;
    }
    if(undoBtn) undoBtn.style.opacity = (e.cookedCount||0)>0 ? "1" : ".55";
  }
  favBtn?.addEventListener("click", ()=>{ const e=getEntry(); e.favorite=!e.favorite; setEntry(e); renderStats(); });
  cookedBtn?.addEventListener("click", ()=>{
    const e=getEntry();
    const now=new Date().toISOString();
    e.cookedCount=(e.cookedCount||0)+1;
    e.lastCooked=now;
    e.history=Array.isArray(e.history)?e.history:[];
    e.history.unshift(now);
    e.history=e.history.slice(0,50);
    setEntry(e);
    cookedBtn.classList.add("saved"); setTimeout(()=>cookedBtn.classList.remove("saved"),600);
    renderStats();
  });
  undoBtn?.addEventListener("click", ()=>{
    const e=getEntry();
    if((e.cookedCount||0)<=0) return;
    e.history=Array.isArray(e.history)?e.history:[];
    if(e.history.length) e.history.shift();
    e.cookedCount=Math.max(0,(e.cookedCount||0)-1);
    e.lastCooked=e.history.length?e.history[0]:null;
    setEntry(e);
    undoBtn.classList.add("saved"); setTimeout(()=>undoBtn.classList.remove("saved"),600);
    renderStats();
  });

  // Shopping add
  const shopKey = "kochbuch.shopping";
  const addBtn = $("#addToShopping");
  function shopNormKey(s){ return String(s||"").trim().toLowerCase(); }
  function mergeIntoShopping(ings){
    const list = ls.get(shopKey, []);
    const map = new Map();
    for(const e of list) map.set(`${shopNormKey(e.item)}|${shopNormKey(e.unit)}`, e);
    for(const i of ings){
      const item=String(i.item||"").trim(); if(!item) continue;
      const unit=U.normUnit(i.unit||"");
      const q0=num(i.qty);
      const conv=(q0!==null)?U.autoConvert(q0, unit):{qty:null,unit};
      const k=`${shopNormKey(item)}|${shopNormKey(conv.unit)}`;
      const ex=map.get(k);
      if(ex){
        if(typeof ex.qty==="number" && typeof conv.qty==="number"){
          const sum=ex.qty+conv.qty;
          const c2=U.autoConvert(sum, conv.unit);
          ex.qty=c2.qty; ex.unit=c2.unit;
        }else if(ex.qty==null && typeof conv.qty==="number"){
          ex.qty=conv.qty; ex.unit=conv.unit;
        }
        ex.checked=false;
      }else{
        map.set(k,{item,unit:conv.unit,qty:(typeof conv.qty==="number"?conv.qty:null),checked:false});
      }
    }
    const out = Array.from(map.values()).sort((a,b)=>String(a.item).localeCompare(String(b.item),"de"));
    ls.set(shopKey,out);
  }
  addBtn?.addEventListener("click", ()=>{
    mergeIntoShopping(scaledIngredients());
    addBtn.classList.add("saved"); setTimeout(()=>addBtn.classList.remove("saved"),600);
  });

  window.addEventListener("kochbuch:cookmodeReset", ()=>{
    renderIngredients();
  });

  renderIngredients();
  renderFreezer();
  renderStats();
})();