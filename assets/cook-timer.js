// Timer für den Kochmodus: Zeitangaben in Schritten („10 Min.“, „2–3 Minuten“, „1 Std“) werden
// antippbar. Mehrere Timer können gleichzeitig laufen. Gespeichert wird die Endzeit, damit die
// Anzeige nach Sperren des Bildschirms oder Neuladen stimmt.
(function(){
  const KEY = "kochbuch.timers";
  const TIME_RE = /(\d+(?:[.,]\d+)?)(?:\s*(?:–|-|bis)\s*(\d+(?:[.,]\d+)?))?\s*(Minuten|Minute|Min\.?|Stunden|Stunde|Std\.?|Sekunden|Sek\.?)(?![a-zäöüß])/gi;
  const listeners = new Set();
  let timers = load();
  let tick = null;
  let audio = null;

  function load(){ try{ const v = JSON.parse(localStorage.getItem(KEY) || "[]"); return Array.isArray(v) ? v : []; }catch{ return []; } }
  function save(){ try{ localStorage.setItem(KEY, JSON.stringify(timers)); }catch{} }
  const esc = (x)=>String(x??"").replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  function unitSeconds(u){
    u = u.toLowerCase();
    if(u.startsWith("st")) return 3600;
    if(u.startsWith("se")) return 1;
    return 60;
  }
  const n = (s)=>Number(String(s).replace(",", "."));

  // Text → HTML mit Timer-Knöpfen. Bei Spannen („2–3 Min.“) startet der Timer mit dem kleineren Wert.
  function linkify(text){
    let out = "", last = 0;
    String(text||"").replace(TIME_RE, (m, a, b, u, idx)=>{
      const secs = Math.round(n(a) * unitSeconds(u));
      out += esc(text.slice(last, idx));
      if(secs > 0 && secs <= 48*3600){
        out += `<button type="button" class="cookTime" data-secs="${secs}" data-label="${esc(m)}"><span aria-hidden="true">⏱</span> ${esc(m)}</button>`;
      }else{
        out += esc(m);
      }
      last = idx + m.length;
      return m;
    });
    return out + esc(String(text||"").slice(last));
  }

  function fmt(sec){
    sec = Math.max(0, Math.ceil(sec));
    const h = Math.floor(sec/3600), m = Math.floor(sec%3600/60), s = sec%60;
    const pad = (x)=>String(x).padStart(2,"0");
    return h ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
  }

  function unlockAudio(){
    try{
      if(!audio) audio = new (window.AudioContext || window.webkitAudioContext)();
      if(audio.state === "suspended") audio.resume();
    }catch{}
  }
  function ring(){
    try{ navigator.vibrate?.([300,150,300,150,600]); }catch{}
    try{ window.KOCHBUCH_UI?.haptic?.("success"); }catch{}
    if(!audio) return;
    try{
      const t0 = audio.currentTime;
      for(let i=0;i<6;i++){
        const o = audio.createOscillator(), g = audio.createGain();
        o.type = "sine"; o.frequency.value = i%2 ? 660 : 880;
        const st = t0 + i*0.35;
        g.gain.setValueAtTime(0.0001, st);
        g.gain.exponentialRampToValueAtTime(0.35, st+0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, st+0.3);
        o.connect(g); g.connect(audio.destination);
        o.start(st); o.stop(st+0.32);
      }
    }catch{}
  }

  function emit(){ listeners.forEach(fn=>{ try{ fn(list()); }catch{} }); }
  function list(){
    const now = Date.now();
    return timers.map(t=>({ ...t, left: (t.end - now)/1000, done: t.end <= now }));
  }

  function loop(){
    const now = Date.now();
    let changed = false;
    for(const t of timers){
      if(!t.rang && t.end <= now){ t.rang = true; changed = true; ring(); }
    }
    if(changed) save();
    emit();
    if(!timers.length){ clearInterval(tick); tick = null; }
  }
  function ensureLoop(){ if(!tick && timers.length) tick = setInterval(loop, 500); }

  function start(secs, label){
    unlockAudio();
    timers.push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2,6), end: Date.now() + secs*1000, total: secs, label: label || fmt(secs), rang: false });
    save(); ensureLoop(); emit();
  }
  function remove(id){ timers = timers.filter(t=>t.id !== id); save(); emit(); }
  function addTime(id, secs){
    const t = timers.find(x=>x.id === id); if(!t) return;
    t.end = Math.max(Date.now(), t.end) + secs*1000; t.total += secs; t.rang = false;
    save(); ensureLoop(); emit();
  }

  // Leiste mit laufenden Timern in einen Container rendern
  function render(host){
    if(!host) return;
    const items = list();
    host.hidden = !items.length;
    host.innerHTML = items.map(t=>`
      <div class="cookTimer${t.done ? " isDone" : ""}" data-id="${esc(t.id)}">
        <div class="cookTimerMain">
          <span class="cookTimerTime">${t.done ? "Fertig!" : fmt(t.left)}</span>
          <span class="cookTimerLabel">${esc(t.label)}</span>
        </div>
        ${t.done ? "" : `<button type="button" class="cookTimerBtn" data-act="plus" aria-label="Eine Minute mehr">+1</button>`}
        <button type="button" class="cookTimerBtn" data-act="stop" aria-label="Timer beenden">✕</button>
        <span class="cookTimerBar" style="width:${t.done ? 100 : Math.min(100, 100 - (t.left / t.total) * 100)}%"></span>
      </div>`).join("");
  }
  function bind(host){
    host?.addEventListener("click", (e)=>{
      const btn = e.target.closest("[data-act]"); if(!btn) return;
      const id = btn.closest("[data-id]")?.dataset.id;
      if(btn.dataset.act === "stop") remove(id);
      if(btn.dataset.act === "plus") addTime(id, 60);
    });
  }

  window.KOCHBUCH_TIMER = {
    linkify, start, remove, addTime, list, fmt, render, bind,
    onChange(fn){ listeners.add(fn); fn(list()); return ()=>listeners.delete(fn); }
  };

  // Abgelaufene, längst fertige Timer (älter als 1 Std) beim Laden aufräumen
  timers = timers.filter(t=> t.end > Date.now() - 3600*1000);
  save();
  ensureLoop();
})();
