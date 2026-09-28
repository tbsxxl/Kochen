// Timer für den Kochmodus: Zeitangaben in Schritten („10 Min.“, „2–3 Minuten“, „1 Std“) werden
// antippbar. Mehrere Timer können gleichzeitig laufen. Gespeichert wird die Endzeit, damit die
// Anzeige nach Sperren des Bildschirms oder Neuladen stimmt. Läuft ein Timer ab, erscheint auf jeder
// Seite ein Hinweis mit Ton (bis „OK“). Ist man angemeldet und hat Mitteilungen erlaubt, meldet der
// Server (/api/timers) den Ablauf zusätzlich per Push – für gesperrten Bildschirm / App im Hintergrund.
(function(){
  const KEY = "kochbuch.timers";
  const TIME_RE = /(\d+(?:[.,]\d+)?)(?:\s*(?:–|-|bis)\s*(\d+(?:[.,]\d+)?))?\s*(Minuten|Minute|Min\.?|Stunden|Stunde|Std\.?|Sekunden|Sek\.?)(?![a-zäöüß])/gi;
  const CLOCK = '<svg class="uiIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 1.5M10 2h4"/></svg>';
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
        out += `<button type="button" class="cookTime" data-secs="${secs}" data-label="${esc(m)}">${CLOCK} ${esc(m)}</button>`;
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

  // ---------- Push über den Server (nur mit Profil + Mitteilungs-Abo auf diesem Gerät) ----------
  async function pushReady(){
    try{
      if(!("serviceWorker" in navigator) || !window.KOCHBUCH_ACCOUNT?.profile?.()) return false;
      const reg = await navigator.serviceWorker.getRegistration();
      return !!(reg && reg.pushManager && await reg.pushManager.getSubscription());
    }catch{ return false; }
  }
  function remote(path, body){
    pushReady().then(ok=>{
      if(ok) fetch(path, { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }).catch(()=>{});
    });
  }
  const remoteSet = (t)=> remote("/api/timers", { id: t.id, end: t.end, label: t.label, title: t.title || "", url: t.url || "" });
  const remoteCancel = (id)=> remote("/api/timers/cancel", { id });

  // ---------- Hinweis „Timer abgelaufen“ ----------
  let alertEl = null, alertId = null, alertSound = null;
  function buildAlert(){
    alertEl = document.createElement("div");
    alertEl.className = "timerAlert";
    alertEl.setAttribute("role", "alertdialog");
    alertEl.setAttribute("aria-modal", "true");
    alertEl.setAttribute("aria-labelledby", "timerAlertTitle");
    alertEl.hidden = true;
    alertEl.innerHTML = `
      <div class="timerAlertCard">
        <div class="timerAlertIcon">${CLOCK}</div>
        <div class="timerAlertTitle" id="timerAlertTitle">Timer abgelaufen</div>
        <div class="timerAlertLabel"></div>
        <div class="timerAlertSub"></div>
        <div class="timerAlertBtns">
          <button type="button" class="timerAlertBtn" data-act="plus">+1 Min</button>
          <button type="button" class="timerAlertBtn primary" data-act="ok">OK</button>
        </div>
      </div>`;
    alertEl.addEventListener("click", (e)=>{
      const b = e.target.closest("[data-act]"); if(!b) return;
      const id = alertId;
      hideAlert();
      if(b.dataset.act === "plus") addTime(id, 60); else remove(id);
      showNextAlert();
    });
    document.body.appendChild(alertEl);
  }
  function showAlert(t){
    if(!document.body) return;
    if(!alertEl) buildAlert();
    alertId = t.id;
    alertEl.querySelector(".timerAlertLabel").textContent = t.label || "";
    alertEl.querySelector(".timerAlertSub").textContent = t.title || "";
    alertEl.hidden = false;
    requestAnimationFrame(()=> alertEl.classList.add("open"));
    clearInterval(alertSound);
    // Ton wiederholen, bis „OK“ – höchstens 3 Minuten nach Ablauf
    alertSound = setInterval(()=>{ if(Date.now() - t.end < 180000) ring(); else clearInterval(alertSound); }, 3500);
    alertEl.querySelector('[data-act="ok"]').focus({ preventScroll: true });
  }
  function hideAlert(){
    clearInterval(alertSound); alertSound = null;
    if(alertEl){ alertEl.classList.remove("open"); alertEl.hidden = true; }
    alertId = null;
  }
  function showNextAlert(){
    const next = timers.find(t=>t.rang);
    if(next) showAlert(next);
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
      if(!t.rang && t.end <= now){
        t.rang = true; changed = true;
        if(now - t.end < 120000) ring();        // lange vorbei (Seite war zu): ohne Ton, nur Hinweis
        if(document.visibilityState === "visible") remoteCancel(t.id);  // hier bemerkt → keine Push-Mitteilung mehr
        if(!alertId) showAlert(t);
      }
    }
    if(changed) save();
    emit();
    if(!timers.length){ clearInterval(tick); tick = null; }
  }
  function ensureLoop(){ if(!tick && timers.length) tick = setInterval(loop, 500); }

  // meta: { title: Rezeptname, url: Adresse für den Klick auf die Mitteilung }
  function start(secs, label, meta){
    unlockAudio();
    const t = { id: Date.now().toString(36) + Math.random().toString(36).slice(2,6), end: Date.now() + secs*1000, total: secs,
      label: label || fmt(secs), title: (meta && meta.title) || "", url: (meta && meta.url) || "", rang: false };
    timers.push(t);
    save(); ensureLoop(); emit();
    remoteSet(t);
  }
  function remove(id){
    const had = timers.some(t=>t.id === id);
    timers = timers.filter(t=>t.id !== id); save(); emit();
    if(alertId === id){ hideAlert(); showNextAlert(); }
    if(had) remoteCancel(id);
  }
  function addTime(id, secs){
    const t = timers.find(x=>x.id === id); if(!t) return;
    t.end = Math.max(Date.now(), t.end) + secs*1000; t.total += secs; t.rang = false;
    if(alertId === id){ hideAlert(); showNextAlert(); }
    save(); ensureLoop(); emit();
    remoteSet(t);
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
    CLOCK, linkify, start, remove, addTime, list, fmt, render, bind,
    onChange(fn){ listeners.add(fn); fn(list()); return ()=>listeners.delete(fn); }
  };

  // Abgelaufene, längst fertige Timer (älter als 1 Std) beim Laden aufräumen
  timers = timers.filter(t=> t.end > Date.now() - 3600*1000);
  save();
  ensureLoop();
  // Timer, die abgelaufen sind, während eine andere Seite offen war: Hinweis erneut zeigen
  const showPending = ()=>{ if(!alertId) showNextAlert(); };
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", showPending); else showPending();
  // Zurück in die App (Bildschirm entsperrt): Schleife sofort laufen lassen
  document.addEventListener("visibilitychange", ()=>{ if(document.visibilityState === "visible" && timers.length) loop(); });
})();
