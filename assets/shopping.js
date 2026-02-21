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

  

function render(){
  const list = getList();

  U.renderToggleList(listEl, list, {
    emptyText: "Keine Einträge.",
    getId: (_it, idx)=>String(idx),
    getLabel: (it)=>it.item,
    getSub: (it)=>it.from || "",
    getRightText: (it)=>{
      const unit = U.normUnit(it.unit||"");
      if(typeof it.qty === "number" && isFinite(it.qty)){
        const conv = U.autoConvert(it.qty, unit);
        return `${U.roundSmart(conv.qty)} ${conv.unit||""}`.trim();
      }
      return `${unit}`.trim();
    },
    isChecked: (it)=>!!it.checked,
    onToggle: (_it, idx, now)=>{
      const l = getList();
      if(!l[idx]) return;
      l[idx].checked = now;
      setList(l);
      render();
    },
  });
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
  clearAllBtn?.addEventListener("click", ()=>{ setList([]); render(); });

  addBtn?.addEventListener("click", addItem);
  addInput?.addEventListener("keydown", (ev)=>{ if(ev.key==="Enter") addItem(); });

  render();
})();