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

  
  function hapt(ms=10){
    try{ if(navigator.vibrate) navigator.vibrate(ms); }catch(e){}
  }

  function ensureToastEl(){
    let el = document.getElementById('toast');
    if(el) return el;
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    document.body.appendChild(el);
    return el;
  }

  let toastTimer = null;
  function showToast(msg){
    const el = ensureToastEl();
    el.textContent = msg;
    el.classList.add('show');
    if(toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(()=>el.classList.remove('show'), 1400);
  }

  window.KOCHBUCH_UTILS = { normUnit, autoConvert, roundSmart, tryNum, showToast, hapt };
})();