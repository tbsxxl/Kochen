// Wochenplan: Rezepte auf Tage verteilen und die Zutaten gesammelt auf die Einkaufsliste setzen.
(function(){
  const U = window.KOCHBUCH_UTILS;
  const UI = window.KOCHBUCH_UI || {};
  const dataEl = document.getElementById("allRecipesJson");
  if(!U || !dataEl) return;
  let recipes = [];
  try{ recipes = JSON.parse(dataEl.textContent || "[]"); }catch{ return; }
  const byId = new Map(recipes.map(r=>[r.id, r]));

  const $ = (s)=>document.querySelector(s);
  const esc = (s)=>String(s??"").replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const DAY = 86400000;
  const WD = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
  const MON = ["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."];

  function monday(d){
    const x = new Date(d); x.setHours(12,0,0,0);
    const wd = (x.getDay() + 6) % 7;
    return new Date(x.getTime() - wd*DAY);
  }
  let weekStart = monday(new Date());
  const todayKey = U.plan.key(new Date());

  function weekDates(){ return Array.from({length:7}, (_, i)=> new Date(weekStart.getTime() + i*DAY)); }

  function servingsOf(entry, r){ return Number(entry.servings) || Number(r?.servings) || 1; }

  function scaled(r, servings){
    const factor = servings / (Number(r.servings) || 1);
    return (r.ingredients || []).map(i=>{
      const q = U.tryNum(i.qty);
      return { ...i, qty: q === null ? i.qty : q * factor };
    });
  }

  function render(){
    const plan = U.plan.get();
    const dates = weekDates();
    const thisWeek = monday(new Date()).getTime() === weekStart.getTime();
    const diff = Math.round((weekStart - monday(new Date())) / (7*DAY));
    $("#weekTitle").textContent = thisWeek ? "Diese Woche" : diff === 1 ? "Nächste Woche" : diff === -1 ? "Letzte Woche" : `KW ${kw(weekStart)}`;
    const a = dates[0], b = dates[6];
    $("#weekRange").textContent = `${a.getDate()}. ${a.getMonth() === b.getMonth() ? "" : MON[a.getMonth()] + " "}– ${b.getDate()}. ${MON[b.getMonth()]}`;

    $("#weekDays").innerHTML = dates.map(d=>{
      const k = U.plan.key(d);
      const entries = (plan[k] || []).filter(e=>byId.has(e.id));
      const past = k < todayKey;
      const rows = entries.map(e=>{
        const r = byId.get(e.id);
        const s = servingsOf(e, r);
        return `<div class="planEntry" data-day="${k}" data-id="${esc(e.id)}">
          <a class="planEntryLink" href="${esc(r.id)}">
            ${r.image ? `<img class="planThumb" src="${esc(r.image)}" srcset="${esc(r.srcset||"")}" sizes="56px" alt="" loading="lazy">` : `<span class="planThumb"></span>`}
            <span class="planEntryTitle">${esc(r.title)}</span>
          </a>
          <div class="planServ" aria-label="Portionen">
            <button type="button" class="planServBtn" data-act="minus" aria-label="Weniger Portionen">−</button>
            <span class="planServVal">${s}</span>
            <button type="button" class="planServBtn" data-act="plus" aria-label="Mehr Portionen">+</button>
          </div>
          <button type="button" class="planRemove" data-act="remove" aria-label="${esc(r.title)} entfernen">✕</button>
        </div>`;
      }).join("");
      return `<section class="card planDayCard${k === todayKey ? " isToday" : ""}${past ? " isPast" : ""}">
        <div class="planDayHead">
          <div><span class="planDayWd">${k === todayKey ? "Heute" : WD[d.getDay()]}</span> <span class="planDayNum">${d.getDate()}. ${MON[d.getMonth()]}</span></div>
          <button type="button" class="planAdd pressable" data-add="${k}" aria-label="Gericht für ${WD[d.getDay()]} hinzufügen">+ Gericht</button>
        </div>
        ${rows}
      </section>`;
    }).join("");

    const upcoming = dates.filter(d=>U.plan.key(d) >= todayKey)
      .flatMap(d=>(plan[U.plan.key(d)] || []).filter(e=>byId.has(e.id)));
    const btn = $("#weekToShopping");
    btn.disabled = !upcoming.length;
    btn.textContent = upcoming.length
      ? `Zutaten für ${upcoming.length} Gericht${upcoming.length>1?"e":""} auf die Liste`
      : "Zutaten auf die Einkaufsliste";
    $("#weekHint").textContent = upcoming.length
      ? "Gleiche Zutaten werden zusammengezählt. Vergangene Tage zählen nicht mit."
      : "Plane Gerichte über „+ Gericht“ oder auf einer Rezeptseite unter „Mehr → Zum Wochenplan“.";
  }

  function kw(d){
    const x = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const day = x.getUTCDay() || 7;
    x.setUTCDate(x.getUTCDate() + 4 - day);
    const y0 = new Date(Date.UTC(x.getUTCFullYear(), 0, 1));
    return Math.ceil(((x - y0) / DAY + 1) / 7);
  }

  $("#weekDays").addEventListener("click", (e)=>{
    const add = e.target.closest("[data-add]");
    if(add){ openPicker(add.dataset.add); return; }
    const btn = e.target.closest("[data-act]"); if(!btn) return;
    const row = btn.closest(".planEntry");
    const k = row.dataset.day, id = row.dataset.id;
    const plan = U.plan.get();
    const list = plan[k] || [];
    const entry = list.find(x=>x.id === id); if(!entry) return;
    if(btn.dataset.act === "remove"){ plan[k] = list.filter(x=>x !== entry); }
    else{
      const s = servingsOf(entry, byId.get(id)) + (btn.dataset.act === "plus" ? 1 : -1);
      entry.servings = Math.max(1, Math.min(20, s));
    }
    U.plan.set(plan);
    try{ UI.haptic?.("light"); }catch{}
    render();
  });

  $("#weekPrev").addEventListener("click", ()=>{ weekStart = new Date(weekStart.getTime() - 7*DAY); render(); });
  $("#weekNext").addEventListener("click", ()=>{ weekStart = new Date(weekStart.getTime() + 7*DAY); render(); });

  $("#weekToShopping").addEventListener("click", ()=>{
    const plan = U.plan.get();
    let n = 0;
    weekDates().forEach(d=>{
      const k = U.plan.key(d);
      if(k < todayKey) return;
      (plan[k] || []).forEach(e=>{
        const r = byId.get(e.id); if(!r) return;
        U.mergeIntoShopping(scaled(r, servingsOf(e, r)), r.title);
        n++;
      });
    });
    if(n){ UI.toast?.(`Zutaten für ${n} Gericht${n>1?"e":""} auf der Einkaufsliste`); try{ UI.haptic?.("success"); }catch{} }
  });

  // ---------- Rezept auswählen ----------
  const overlay = $("#pickSheetOverlay"), sheet = $("#pickSheet"), search = $("#pickSearch"), list = $("#pickList");
  let pickDay = null;
  const norm = (s)=>String(s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
  function renderPick(){
    const q = norm(search.value).trim();
    const hits = recipes.filter(r=> !q || q.split(/\s+/).every(w=> norm(`${r.title} ${r.category}`).includes(w)));
    list.innerHTML = hits.map(r=>`<button type="button" class="sheetRow pickRow" data-pick="${esc(r.id)}">
      ${r.image ? `<img class="planThumb" src="${esc(r.image)}" srcset="${esc(r.srcset||"")}" sizes="56px" alt="" loading="lazy">` : `<span class="planThumb"></span>`}
      <span class="pickInfo"><span class="pickTitle">${esc(r.title)}</span>${r.time ? `<span class="pickMeta">${esc(r.time)}</span>` : ""}</span>
    </button>`).join("") || `<div class="sub" style="padding:12px">Nichts gefunden.</div>`;
  }
  function openPicker(k){
    pickDay = k;
    const d = new Date(k + "T12:00:00");
    $("#pickTitle").textContent = `${k === todayKey ? "Heute" : WD[d.getDay()]}, ${d.getDate()}. ${MON[d.getMonth()]}`;
    search.value = "";
    renderPick();
    overlay.classList.add("open"); sheet.classList.add("open","full"); sheet.setAttribute("aria-hidden","false");
    document.body.classList.add("noScroll");
  }
  function closePicker(){
    overlay.classList.remove("open"); sheet.classList.remove("open"); sheet.setAttribute("aria-hidden","true");
    document.body.classList.remove("noScroll");
  }
  $("#pickClose").addEventListener("click", closePicker);
  overlay.addEventListener("click", closePicker);
  search.addEventListener("input", renderPick);
  list.addEventListener("click", (e)=>{
    const b = e.target.closest("[data-pick]"); if(!b || !pickDay) return;
    const r = byId.get(b.dataset.pick);
    U.plan.add(pickDay, r.id, r.servings);
    closePicker(); render();
    try{ UI.haptic?.("success"); }catch{}
  });

  window.addEventListener("storage", (e)=>{ if(e.key === "kochbuch.plan") render(); });
  render();
})();
