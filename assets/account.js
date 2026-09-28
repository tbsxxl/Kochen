// Profil & Sync: Anmeldung per Passkey (Face ID / Touch ID) und Abgleich von Favoriten,
// Kochstatistik, Kühltruhe, Einkaufsliste, Wochenplan und Notizen zwischen Geräten.
// Ohne Anmeldung bleibt alles wie bisher nur im Browser.
//
// Abgleich: Pro Bereich merkt sich das Gerät den zuletzt abgeglichenen Stand („base“, mit Versionsnummer).
// Hat sich am Server etwas geändert und lokal auch, werden beide Seiten Eintrag für Eintrag zusammengeführt
// (3-Wege-Merge) – so gehen gleichzeitige Änderungen auf zwei Geräten oder in der gemeinsamen
// Einkaufsliste nicht verloren.
(function(){
  const SYNC_KEYS = ["kochbuch.stats", "kochbuch.freezer", "kochbuch.shopping", "kochbuch.plan", "kochbuch.notes"];
  const META_KEY = "kochbuch.sync.meta";      // { v:2, uid, hh, base:{ key:{ ver, v } }, dirty:{ key:true } }
  const PROFILE_KEY = "kochbuch.profile";     // { name, uid, role, lastSync }
  const store = window.localStorage;
  const rawSet = Storage.prototype.setItem;
  const rawRemove = Storage.prototype.removeItem;

  function read(k, fb){ try{ const v = store.getItem(k); return v ? JSON.parse(v) : fb; }catch{ return fb; } }
  function write(k, v){ try{ rawSet.call(store, k, JSON.stringify(v)); }catch{} }
  const profile = ()=> read(PROFILE_KEY, null);
  const loggedIn = ()=> !!profile();

  function getMeta(){
    const m = read(META_KEY, {});
    if(m.v !== 2) return { v: 2, uid: m.__uid || null, hh: null, base: {}, dirty: Object.fromEntries(SYNC_KEYS.map(k=>[k, true])) };
    m.base = m.base || {}; m.dirty = m.dirty || {};
    return m;
  }
  const setMeta = (m)=> write(META_KEY, m);

  // ---------- Umbenannte Rezepte: alte Adressen in gespeicherten Daten ersetzen ----------
  const RENAMED = window.KOCHBUCH_RENAMED || {};
  const ren = (id)=> RENAMED[id] || id;
  function renameIds(k, v){
    if(!v || !Object.keys(RENAMED).length) return v;
    if(k === "kochbuch.plan"){
      const out = {};
      for(const [d, list] of Object.entries(v)) out[d] = Array.isArray(list) ? list.map(e=>({ ...e, id: ren(e.id) })) : list;
      return out;
    }
    if(k === "kochbuch.stats" || k === "kochbuch.freezer" || k === "kochbuch.notes"){
      const out = {};
      for(const [id, e] of Object.entries(v)) out[ren(id)] = e;
      return out;
    }
    return v;
  }

  // ---------- Änderungen mitschreiben ----------
  let applying = false;
  function touched(k){
    if(applying || !SYNC_KEYS.includes(k)) return;
    const meta = getMeta();
    meta.dirty[k] = true;
    setMeta(meta);
    schedulePush();
  }
  Storage.prototype.setItem = function(k, v){ rawSet.call(this, k, v); if(this === store) touched(k); };
  Storage.prototype.removeItem = function(k){ rawRemove.call(this, k); if(this === store) touched(k); };

  // Einmalig: gespeicherte Daten auf neue Rezeptadressen umstellen
  (function migrateLocal(){
    if(!Object.keys(RENAMED).length) return;
    for(const k of ["kochbuch.stats", "kochbuch.freezer", "kochbuch.plan", "kochbuch.notes"]){
      const v = read(k, null);
      if(!v) continue;
      const next = JSON.stringify(renameIds(k, v));
      if(next !== JSON.stringify(v)) store.setItem(k, next);
    }
  })();

  // ---------- Server ----------
  async function api(path, opts = {}){
    const res = await fetch(path, {
      method: opts.method || "GET",
      credentials: "same-origin",
      headers: opts.body !== undefined ? { "Content-Type": "application/json" } : {},
      body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined,
      keepalive: !!opts.keepalive
    });
    let data = {};
    try{ data = await res.json(); }catch{}
    if(res.status === 401 && loggedIn()){ rawRemove.call(store, PROFILE_KEY); renderBadges(); }
    if(!res.ok){ const e = new Error(data.error || `Fehler ${res.status}`); e.status = res.status; throw e; }
    return data;
  }

  // ---------- 3-Wege-Merge ----------
  const itemKey = (i)=> `${String(i && i.item || "").trim().toLowerCase()}|${String(i && i.unit || "").trim().toLowerCase()}`;
  function toMap(k, v){
    const m = new Map();
    if(v == null) return m;
    if(k === "kochbuch.shopping"){ (Array.isArray(v) ? v : []).forEach(i=> m.set(itemKey(i), i)); return m; }
    if(typeof v === "object") Object.entries(v).forEach(([key, val])=> m.set(key, val));
    return m;
  }
  function fromMap(k, m){
    if(k === "kochbuch.shopping") return Array.from(m.values());
    return Object.fromEntries(m);
  }
  // Beide Seiten haben denselben Eintrag unterschiedlich geändert
  function resolve(k, l, r){
    if(l === undefined) return r;
    if(r === undefined) return l;
    if(k === "kochbuch.stats" && typeof l === "object" && typeof r === "object"){
      const hist = Array.from(new Set([...(r.history || []), ...(l.history || [])])).sort().reverse().slice(0, 50);
      return {
        ...r, ...l,
        favorite: l.favorite !== undefined ? l.favorite : r.favorite,
        cookedCount: Math.max(Number(r.cookedCount || 0), Number(l.cookedCount || 0), hist.length),
        lastCooked: hist[0] || l.lastCooked || r.lastCooked || null,
        history: hist
      };
    }
    if(k === "kochbuch.plan" && Array.isArray(l) && Array.isArray(r)){
      return r.concat(l.filter(e=>!r.some(x=>x.id === e.id)));
    }
    if(k === "kochbuch.notes") return (Number(l.t) || 0) >= (Number(r.t) || 0) ? l : r;
    return l;
  }
  function merge3(k, base, local, remote){
    const B = toMap(k, base), L = toMap(k, local), R = toMap(k, remote);
    const out = new Map();
    const s = (x)=> x === undefined ? undefined : JSON.stringify(x);
    for(const key of new Set([...L.keys(), ...R.keys(), ...B.keys()])){
      const b = B.get(key), l = L.get(key), r = R.get(key);
      let v;
      if(s(l) === s(r)) v = l;
      else if(s(l) === s(b)) v = r;          // nur am Server geändert
      else if(s(r) === s(b)) v = l;          // nur hier geändert
      else v = resolve(k, l, r);             // beide geändert
      if(v !== undefined) out.set(key, v);
    }
    const merged = fromMap(k, out);
    if(k === "kochbuch.shopping") merged.sort((a,b)=>String(a.item).localeCompare(String(b.item), "de"));
    return merged;
  }

  // ---------- Abgleich ----------
  let pushTimer = null;
  let running = null;
  function schedulePush(){
    if(!loggedIn()) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(()=>{ pushTimer = null; syncNow().catch(()=>{}); }, 1500);
  }

  // Ein Durchgang: Serverstand holen, zusammenführen, eigene Änderungen senden.
  // Rückgabe: ob sich lokal etwas geändert hat.
  async function runSync(keepalive){
    let { data, household } = await api("/api/sync");
    let changedLocal = false;
    for(let attempt = 0; attempt < 4; attempt++){
      const meta = getMeta();
      const hhId = household ? household.id : null;
      if(meta.hh !== hhId){ delete meta.base["kochbuch.shopping"]; meta.dirty["kochbuch.shopping"] = true; meta.hh = hhId; }
      const changes = {};
      applying = true;
      try{
        for(const k of SYNC_KEYS){
          const remote = data[k] || { v: null, ver: 0 };
          const remoteV = renameIds(k, remote.v);
          const base = meta.base[k];                     // { ver, v } oder undefined
          const local = read(k, null);
          if(local == null && remote.v == null){ meta.base[k] = { ver: remote.ver, v: null }; meta.dirty[k] = false; continue; }
          if(base && base.ver === remote.ver){
            if(meta.dirty[k] && JSON.stringify(local) !== JSON.stringify(base.v)) changes[k] = { v: local, base: remote.ver };
            else meta.dirty[k] = false;
            continue;
          }
          // Server hat einen neueren Stand
          if(meta.dirty[k] || !base){
            const merged = merge3(k, base ? base.v : null, local, remoteV);
            if(JSON.stringify(merged) !== JSON.stringify(local)){ rawSet.call(store, k, JSON.stringify(merged)); changedLocal = true; }
            if(JSON.stringify(merged) !== JSON.stringify(remote.v)) changes[k] = { v: merged, base: remote.ver };
            else { meta.base[k] = { ver: remote.ver, v: merged }; meta.dirty[k] = false; }
          }else{
            if(JSON.stringify(remoteV) !== JSON.stringify(local)){
              if(remoteV == null) rawRemove.call(store, k); else rawSet.call(store, k, JSON.stringify(remoteV));
              changedLocal = true;
            }
            meta.base[k] = { ver: remote.ver, v: remoteV };
            meta.dirty[k] = false;
          }
        }
      }finally{ applying = false; }
      setMeta(meta);
      if(!Object.keys(changes).length) break;

      const res = await api("/api/sync", { method: "PUT", body: { changes }, keepalive });
      const m2 = getMeta();
      for(const [k, c] of Object.entries(changes)){
        if((res.conflicts || []).includes(k)) continue;
        const saved = res.data[k];
        if(saved){ m2.base[k] = { ver: saved.ver, v: c.v }; }
        if(JSON.stringify(read(k, null)) === JSON.stringify(c.v)) m2.dirty[k] = false;
      }
      setMeta(m2);
      if(!(res.conflicts || []).length) break;
      data = res.data; household = res.household;   // jemand war schneller → noch einmal zusammenführen
    }
    const p = profile();
    if(p){ p.lastSync = Date.now(); p.household = household || null; write(PROFILE_KEY, p); }
    return changedLocal;
  }

  async function syncNow(keepalive){
    if(!loggedIn()) return false;
    if(running) return running;
    running = runSync(keepalive).finally(()=>{ running = null; });
    const changed = await running;
    if(changed) refreshView();
    renderBadges();
    return changed;
  }

  // Nach neuen Daten vom anderen Gerät die Ansicht auffrischen
  function refreshView(){
    try{ window.updateFavBadges?.(); }catch{}
    window.dispatchEvent(new Event("kochbuch:stats"));
    window.dispatchEvent(new Event("kochbuch:plan"));
    window.dispatchEvent(new Event("kochbuch:synced"));
    if(window.KOCHBUCH_LIVE_REFRESH) return;          // Seite aktualisiert sich selbst (z. B. Einkaufsliste)
    const overlayOpen = document.querySelector(".sheet.open, .cookOverlay.open");
    const path = location.pathname;
    const listPage = ["/", "/wochenplan/", "/kuehltruhe/", "/rezeptindex/", "/was-koche-ich/"].includes(path);
    const last = Number(sessionStorage.getItem("kochbuch.sync.reload") || 0);
    if(listPage && !overlayOpen && Date.now() - last > 10000){
      sessionStorage.setItem("kochbuch.sync.reload", String(Date.now()));
      location.reload();
    }
  }

  // ---------- Passkeys ----------
  const b64 = {
    enc(buf){ const b = new Uint8Array(buf); let s = ""; for(const x of b) s += String.fromCharCode(x); return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""); },
    dec(str){ const s = str.replace(/-/g,"+").replace(/_/g,"/"); const bin = atob(s + "===".slice((s.length + 3) % 4)); return Uint8Array.from(bin, c=>c.charCodeAt(0)); }
  };
  function deviceName(){
    const ua = navigator.userAgent;
    if(/iPhone/.test(ua)) return "iPhone";
    if(/iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return "iPad";
    if(/Macintosh/.test(ua)) return "Mac";
    if(/Android/.test(ua)) return "Android";
    if(/Windows/.test(ua)) return "Windows-PC";
    return "Gerät";
  }
  function passkeySupported(){ return !!(window.PublicKeyCredential && navigator.credentials); }
  function friendly(err){
    if(err && err.name === "NotAllowedError") return "Abgebrochen oder nicht erlaubt.";
    if(err && err.name === "InvalidStateError") return "Auf diesem Gerät gibt es schon einen Passkey für das Kochbuch.";
    return (err && err.message) || String(err);
  }

  async function register({ setupCode, name, invite } = {}){
    if(!passkeySupported()) throw new Error("Dieser Browser unterstützt keine Passkeys.");
    const opts = await api("/api/auth/register/options", { method: "POST", body: { setupCode, name, invite } });
    let cred;
    try{
      cred = await navigator.credentials.create({ publicKey: {
        ...opts,
        challenge: b64.dec(opts.challenge),
        user: { ...opts.user, id: b64.dec(opts.user.id) },
        excludeCredentials: (opts.excludeCredentials || []).map(c=>({ ...c, id: b64.dec(c.id) }))
      }});
    }catch(e){ throw new Error(friendly(e)); }
    const res = await api("/api/auth/register/verify", { method: "POST", body: {
      deviceName: deviceName(),
      response: {
        clientDataJSON: b64.enc(cred.response.clientDataJSON),
        attestationObject: b64.enc(cred.response.attestationObject)
      }
    }});
    await loggedInAs(res);
    return res;
  }

  async function login(){
    if(!passkeySupported()) throw new Error("Dieser Browser unterstützt keine Passkeys.");
    const opts = await api("/api/auth/login/options", { method: "POST", body: {} });
    let cred;
    try{
      cred = await navigator.credentials.get({ publicKey: { ...opts, challenge: b64.dec(opts.challenge) } });
    }catch(e){ throw new Error(friendly(e)); }
    const res = await api("/api/auth/login/verify", { method: "POST", body: {
      id: cred.id,
      response: {
        clientDataJSON: b64.enc(cred.response.clientDataJSON),
        authenticatorData: b64.enc(cred.response.authenticatorData),
        signature: b64.enc(cred.response.signature)
      }
    }});
    await loggedInAs(res);
    return res;
  }

  async function loggedInAs(res){
    const meta = getMeta();
    if(meta.uid && res.uid && meta.uid !== res.uid){
      // Anderes Profil als zuletzt auf diesem Gerät: dessen Daten nicht übernehmen, frisch vom Server laden
      applying = true;
      try{ SYNC_KEYS.forEach(k=>rawRemove.call(store, k)); }finally{ applying = false; }
      setMeta({ v: 2, uid: res.uid, hh: null, base: {}, dirty: {} });
    }else{
      meta.uid = res.uid || meta.uid;
      setMeta(meta);
    }
    write(PROFILE_KEY, { name: res.name || "", uid: res.uid, role: res.role, lastSync: null });
    renderBadges();
    try{ await syncNow(); }catch{}
  }

  async function logout(everywhere){
    try{ await api("/api/auth/logout", { method: "POST", body: { everywhere: !!everywhere } }); }catch{}
    rawRemove.call(store, PROFILE_KEY);
    renderBadges();
  }

  // ---------- Profil-Knopf (Startseite oben rechts) ----------
  function renderBadges(){
    const p = profile();
    document.querySelectorAll("[data-owner-only]").forEach(el=>{ el.hidden = !(p && p.role === "owner"); });
    document.querySelectorAll("[data-login-only]").forEach(el=>{ el.hidden = !p; });
    const pending = p && p.role === "owner" ? Number(p.pending || 0) : 0;
    document.querySelectorAll("[data-pending-count]").forEach(el=>{ el.hidden = !pending; el.textContent = pending ? String(pending) : ""; });
    let edit = false;
    try{ edit = !!(p && p.role === "owner" && localStorage.getItem("kochbuch.ui.editMode") === "1"); }catch{}
    document.querySelectorAll("[data-edit-only]").forEach(el=>{ el.hidden = !edit; });
    document.querySelectorAll("[data-profile-badge]").forEach(el=>{
      const initial = p && p.name ? p.name.trim().charAt(0).toUpperCase() : "";
      el.classList.toggle("isIn", !!p);
      el.classList.toggle("hasPending", !!pending);
      el.setAttribute("aria-label", p ? `Profil: ${p.name || "angemeldet"}` : "Anmelden");
      el.innerHTML = p
        ? `<span class="profileInitial">${initial || "✓"}</span>`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>`;
    });
    document.querySelectorAll("[data-household-note]").forEach(el=>{
      const hh = p && p.household;
      const others = hh ? (hh.members || []).filter(n=>n !== p.name) : [];
      el.hidden = !others.length;
      el.textContent = others.length ? `Gemeinsam mit ${others.join(", ")}` : "";
    });
  }

  window.KOCHBUCH_ACCOUNT = { renderBadges, me: (query)=>api("/api/me" + (query || "")), api, register, login, logout, syncNow, profile, passkeySupported, deviceName, _merge3: merge3 };

  // Name/Rolle aktuell halten
  async function refreshProfile(){
    const me = await api("/api/me");
    const p = profile();
    if(!me.loggedIn){ rawRemove.call(store, PROFILE_KEY); }
    else if(p){
      write(PROFILE_KEY, { ...p, name: me.name, uid: me.uid, role: me.role, pending: me.pendingSuggestions || 0 });
    }
    renderBadges();
  }

  function init(){
    renderBadges();
    if(loggedIn()){
      syncNow().catch(()=>{});
      if(!location.pathname.startsWith("/konto/")) refreshProfile().catch(()=>{});
    }
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();

  // App wieder im Vordergrund → neuen Stand holen; beim Verlassen noch schnell senden
  document.addEventListener("visibilitychange", ()=>{
    if(!loggedIn()) return;
    if(document.visibilityState === "visible") syncNow().catch(()=>{});
    else if(pushTimer){ clearTimeout(pushTimer); pushTimer = null; syncNow(true).catch(()=>{}); }
  });
})();
