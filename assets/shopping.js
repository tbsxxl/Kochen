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
  listEl.innerHTML = "";

  if(!list.length){
    const empty = document.createElement("div");
    empty.className = "listRow";
    empty.textContent = "Keine Einträge.";
    listEl.appendChild(empty);
    return;
  }

  list.forEach((e, idx)=>{
    const row = document.createElement("div");
    row.className = "shopRow pressable";
    row.setAttribute("role","checkbox");
    row.setAttribute("tabindex","0");

    const checked = !!e.checked;
    row.setAttribute("aria-checked", checked ? "true" : "false");
    if(checked) row.classList.add("checked");

    const check = document.createElement("button");
    check.className = "shopCheckBtn";
    check.type = "button";
    check.textContent = checked ? "✓" : "○";
    check.setAttribute("aria-label", checked ? "Erledigt: an" : "Erledigt: aus");

    const left = document.createElement("div");
    left.className = "shopLeft";
    const name = document.createElement("div");
    name.className = "shopName";
    name.textContent = e.item || "—";
    left.appendChild(name);
    if(e.from){
      const sub = document.createElement("div");
      sub.className = "shopSub";
      sub.textContent = e.from;
      left.appendChild(sub);
    }

    const right = document.createElement("div");
    right.className = "shopRight";

    const qty = document.createElement("div");
    qty.className = "shopQty";
    const unit = U.normUnit(e.unit||"");
    if(typeof e.qty === "number" && isFinite(e.qty)){
      const conv = U.autoConvert(e.qty, unit);
      qty.textContent = `${U.roundSmart(conv.qty)} ${conv.unit||""}`.trim();
    }else{
      qty.textContent = `${unit}`.trim();
    }

    const del = document.createElement("button");
    del.className = "shopDelBtn";
    del.type = "button";
    del.textContent = "🗑";
    del.setAttribute("aria-label","Eintrag löschen");

    right.appendChild(qty);
    right.appendChild(del);

    function toggle(){
      const l = getList();
      l[idx].checked = !l[idx].checked;
      setList(l);
      render();
    }

    row.addEventListener("click", (ev)=>{
      if(ev.target === del) return;
      if(ev.target === check) return;
      toggle();
    });
    check.addEventListener("click", (ev)=>{ ev.stopPropagation(); toggle(); });

    del.addEventListener("click", (ev)=>{
      ev.stopPropagation();
      const l = getList();
      l.splice(idx,1);
      setList(l);
      render();
    });

    row.addEventListener("keydown", (ev)=>{
      if(ev.key === "Enter" || ev.key === " "){
        ev.preventDefault();
        toggle();
      }
    });

    row.appendChild(check);
    row.appendChild(left);
    row.appendChild(right);
    listEl.appendChild(row);
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