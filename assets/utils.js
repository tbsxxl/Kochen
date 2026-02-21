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
      onDelete = null,

      // Swipe-to-delete (iOS-like)
      swipeDelete = false,
      swipeWidth = 84,
      deleteText = "Löschen",
      deleteAria = "Eintrag löschen"
    } = (opts || {});

    container.innerHTML = "";
    if(!items || !items.length){
      const empty = document.createElement("div");
      empty.className = "listRow";
      empty.textContent = emptyText;
      container.appendChild(empty);
      return;
    }

    let openWrap = null;
    function closeOpen(){
      if(openWrap){
        openWrap.classList.remove("open");
        const row = openWrap.querySelector(".uRow");
        if(row) row.style.transform = "";
        openWrap = null;
      }
    }

    // Close on scrolling/tapping outside
    container.addEventListener("touchstart", (ev)=>{
      const w = ev.target.closest?.(".swipeWrap");
      if(openWrap && (!w || w !== openWrap)) closeOpen();
    }, {passive:true});

    items.forEach((item, idx)=>{
      const checked = !!isChecked(item, idx);

      const row = document.createElement("div");
      row.className = "uRow pressable";
      row.setAttribute("role","checkbox");
      row.setAttribute("tabindex","0");
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
        qty.className = "uQty num";
        qty.textContent = String(rt);
        right.appendChild(qty);
      }

      row.appendChild(lead);
      row.appendChild(mid);
      row.appendChild(right);

      function toggle(){
        const now = !isChecked(item, idx);
        onToggle(item, idx, now);
      }

      row.addEventListener("keydown", (ev)=>{
        if(ev.key === "Enter" || ev.key === " "){
          ev.preventDefault();
          if(openWrap && openWrap.classList.contains("open")){
            closeOpen();
            return;
          }
          toggle();
        }
      });

      // Default click: toggle (unless swipe-open)
      row.addEventListener("click", ()=>{
        const wrap = row.closest(".swipeWrap");
        if(wrap && wrap.classList.contains("open")){
          closeOpen();
          return;
        }
        toggle();
      });

      // Optional swipe wrapper
      if(swipeDelete && typeof onDelete === "function"){
        const wrap = document.createElement("div");
        wrap.className = "swipeWrap";
        wrap.style.setProperty("--swipeW", `${swipeWidth}px`);

        const action = document.createElement("button");
        action.type = "button";
        action.className = "swipeAction";
        action.textContent = deleteText;
        action.setAttribute("aria-label", deleteAria);
        action.addEventListener("click", (ev)=>{
          ev.stopPropagation();
          closeOpen();
          onDelete(item, idx);
        });

        wrap.appendChild(action);
        wrap.appendChild(row);
        container.appendChild(wrap);

        // Pointer-based swipe handling
        let startX = 0, startY = 0, dx = 0;
        let dragging = false;
        let decided = false;

        function setX(x){
          const clamped = Math.max(-swipeWidth, Math.min(0, x));
          row.style.transform = `translateX(${clamped}px)`;
        }

        row.addEventListener("pointerdown", (ev)=>{
          // Ignore if clicking on interactive nested elements (none currently)
          if(ev.pointerType === "mouse" && ev.button !== 0) return;
          startX = ev.clientX;
          startY = ev.clientY;
          dx = 0;
          dragging = true;
          decided = false;

          // Close other open wrap
          if(openWrap && openWrap !== wrap) closeOpen();
          openWrap = wrap;

          row.setPointerCapture(ev.pointerId);
        });

        row.addEventListener("pointermove", (ev)=>{
          if(!dragging) return;
          dx = ev.clientX - startX;
          const dy = ev.clientY - startY;

          if(!decided){
            // Decide intent: horizontal swipe vs vertical scroll
            if(Math.abs(dx) > 10 || Math.abs(dy) > 10){
              decided = true;
              if(Math.abs(dx) <= Math.abs(dy) * 1.2){
                // treat as scroll
                dragging = false;
                row.releasePointerCapture(ev.pointerId);
                row.style.transform = "";
                openWrap = null;
                return;
              }
            } else {
              return;
            }
          }

          ev.preventDefault();
          // swipe left only (negative dx); allow closing with swipe right if open
          const base = wrap.classList.contains("open") ? -swipeWidth : 0;
          setX(base + dx);
        }, {passive:false});

        row.addEventListener("pointerup", (ev)=>{
          if(!decided){
            // tap
            dragging = false;
            return;
          }
          dragging = false;
          const current = parseFloat((row.style.transform.match(/-?\d+(\.\d+)?/)||["0"])[0]);
          const open = current <= (-swipeWidth * 0.45);
          if(open){
            wrap.classList.add("open");
            setX(-swipeWidth);
          } else {
            wrap.classList.remove("open");
            setX(0);
            if(openWrap === wrap) openWrap = null;
          }
        });

        row.addEventListener("pointercancel", ()=>{
          dragging = false;
          wrap.classList.remove("open");
          row.style.transform = "";
          if(openWrap === wrap) openWrap = null;
        });

      } else {
        container.appendChild(row);
      }
    });
  }


  window.KOCHBUCH_UTILS = { normUnit, autoConvert, roundSmart, tryNum, renderToggleList };
})();