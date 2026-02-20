(function(){
  const U = window.KOCHBUCH_UTILS;
  const listEl = document.querySelector("#shopList");
  const clearCheckedBtn = document.querySelector("#clearChecked");
  const clearAllBtn = document.querySelector("#clearAll");
  const key = "kochbuch.shopping";

  function getList(){ try{ return JSON.parse(localStorage.getItem(key) || "[]"); }catch{ return []; } }
  function setList(v){ try{ localStorage.setItem(key, JSON.stringify(v)); }catch{} }

  function render(){
    const list = getList();
    listEl.innerHTML = "";
    if(!list.length){
      const empty = document.createElement("div");
      empty.className = "card cardPad";
      empty.textContent = "Keine Einträge.";
      listEl.appendChild(empty);
      return;
    }
    list.forEach((e, idx)=>{
      const row = document.createElement("div");
      row.className = "ingRow";
      row.style.opacity = e.checked ? "0.55" : "1";

      const left = document.createElement("div");
      left.className = "ingLeft";
      const name = document.createElement("div");
      name.className = "ingName";
      name.textContent = e.item;
      left.appendChild(name);

      const qty = document.createElement("div");
      qty.className = "ingQty";
      const unit = U.normUnit(e.unit||"");
      if(typeof e.qty === "number" && isFinite(e.qty)){
        const conv = U.autoConvert(e.qty, unit);
        qty.textContent = `${U.roundSmart(conv.qty)} ${conv.unit||""}`.trim();
      }else{
        qty.textContent = `${unit}`.trim();
      }

      const btn = document.createElement("button");
      btn.className = "smallBtn";
      btn.textContent = e.checked ? "✓" : "○";
      btn.addEventListener("click", ()=>{
        const l = getList();
        l[idx].checked = !l[idx].checked;
        setList(l);
        render();
      });

      row.appendChild(left);
      row.appendChild(qty);
      row.appendChild(btn);
      listEl.appendChild(row);
    });
  }

  clearCheckedBtn?.addEventListener("click", ()=>{ setList(getList().filter(x=>!x.checked)); render(); });
  clearAllBtn?.addEventListener("click", ()=>{ setList([]); render(); });

  render();
})();