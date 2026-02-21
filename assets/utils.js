(function(){
  const UNIT_ALIASES = {
    "gramm":"g","gram":"g","g":"g",
    "kilogramm":"kg","kilogram":"kg","kg":"kg",
    "milliliter":"ml","ml":"ml",
    "liter":"l","l":"l",
    "el":"EL","esslöffel":"EL","essloeffel":"EL","tbsp":"EL",
    "tl":"TL","teelöffel":"TL","teeloeffel":"TL","tsp":"TL",
    "stk":"Stk","stück":"Stk","stueck":"Stk"
  };

  function normUnit(u){
    const s = String(u||"").trim().toLowerCase();
    return UNIT_ALIASES[s] || (u ? String(u).trim() : "");
  }

  function tryNum(x){
    if(typeof x === "number" && isFinite(x)) return x;
    const s = String(x||"").trim().replace(",", ".");
    const n = Number(s);
    return (isFinite(n) ? n : null);
  }

  function autoConvert(qty, unit){
    const u = normUnit(unit);
    const q = tryNum(qty);
    if(q === null) return { qty, unit: u };

    if(u === "g" && q >= 1000) return { qty: q/1000, unit: "kg" };
    if(u === "kg" && q > 0 && q < 1) return { qty: q*1000, unit: "g" };

    if(u === "ml" && q >= 1000) return { qty: q/1000, unit: "l" };
    if(u === "l" && q > 0 && q < 1) return { qty: q*1000, unit: "ml" };

    return { qty: q, unit: u };
  }

  function roundSmart(n){
    if(typeof n !== "number" || !isFinite(n)) return "";
    const r = Math.round(n * 100) / 100;
    return (Math.abs(r - Math.round(r)) < 1e-9) ? String(Math.round(r)) : String(r);
  }


  function renderToggleList(container, items, opts){
    if(!container) return;
    const {
      emptyText = "Keine Einträge.",
      getId = (item, idx) => String(idx),
      getLabel = (item) => String(item?.label ?? item?.item ?? ""),
      getSub = (item) => "",
      getRightText = (item) => "",
      isChecked = (item) => !!item?.checked,
      onToggle = ()=>{},
      onDelete = null
    } = (opts || {});

    container.innerHTML = "";
    if(!items || !items.length){
      const empty = document.createElement("div");
      empty.className = "listRow";
      empty.textContent = emptyText;
      container.appendChild(empty);
      return;
    }

    items.forEach((item, idx)=>{
      const row = document.createElement("div");
      row.className = "uRow pressable";
      row.setAttribute("role","checkbox");
      row.setAttribute("tabindex","0");

      const checked = !!isChecked(item, idx);
      row.setAttribute("aria-checked", checked ? "true" : "false");
      row.dataset.id = getId(item, idx);
      if(checked) row.classList.add("checked");

      const lead = document.createElement("div");
      lead.className = "uLead";
      lead.textContent = checked ? "✓" : "○";
      lead.setAttribute("aria-hidden","true");

      const mid = document.createElement("div");
      mid.className = "uMid";

      const name = document.createElement("div");
      name.className = "uName";
      name.textContent = getLabel(item, idx) || "—";
      mid.appendChild(name);

      const subText = String(getSub(item, idx) || "").trim();
      if(subText){
        const sub = document.createElement("div");
        sub.className = "uSub";
        sub.textContent = subText;
        mid.appendChild(sub);
      }

      const right = document.createElement("div");
      right.className = "uRight";

      const rt = getRightText(item, idx);
      if(rt){
        const qty = document.createElement("div");
        qty.className = "uQty";
        qty.textContent = String(rt);
        right.appendChild(qty);
      }

      let delBtn = null;
      if(typeof onDelete === "function"){
        delBtn = document.createElement("button");
        delBtn.className = "uDel";
        delBtn.type = "button";
        delBtn.textContent = "🗑";
        delBtn.setAttribute("aria-label","Eintrag löschen");
        right.appendChild(delBtn);
        delBtn.addEventListener("click", (ev)=>{
          ev.stopPropagation();
          onDelete(item, idx);
        });
      }

      function toggle(){
        const now = !isChecked(item, idx);
        onToggle(item, idx, now);
      }

      row.addEventListener("click", (ev)=>{
        if(delBtn && (ev.target === delBtn)) return;
        toggle();
      });

      row.addEventListener("keydown", (ev)=>{
        if(ev.key === "Enter" || ev.key === " "){
          ev.preventDefault();
          toggle();
        }
      });

      row.appendChild(lead);
      row.appendChild(mid);
      row.appendChild(right);
      container.appendChild(row);
    });
  }

  window.KOCHBUCH_UTILS = { normUnit, autoConvert, roundSmart, tryNum, renderToggleList };
})();