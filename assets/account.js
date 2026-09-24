// Profil & Sync: Anmeldung per Passkey (Face ID / Touch ID) und Abgleich von Favoriten,
// Kochstatistik, Kühltruhe, Einkaufsliste und Wochenplan zwischen Geräten.
// Ohne Anmeldung bleibt alles wie bisher nur im Browser.
(function(){
  const SYNC_KEYS = ["kochbuch.stats", "kochbuch.freezer", "kochbuch.shopping", "kochbuch.plan"];
  const META_KEY = "kochbuch.sync.meta";      // { key: Zeitstempel der letzten lokalen Änderung }
  const PROFILE_KEY = "kochbuch.profile";     // { name, lastSync }
  const store = window.localStorage;
  const rawSet = Storage.prototype.setItem;
  const rawRemove = Storage.prototype.removeItem;

  function read(k, fb){ try{ const v = store.getItem(k); return v ? JSON.parse(v) : fb; }catch{ return fb; } }
  function write(k, v){ try{ rawSet.call(store, k, JSON.stringify(v)); }catch{} }
  const profile = ()=> read(PROFILE_KEY, null);
  const loggedIn = ()=> !!profile();

  // ---------- Änderungen mitschreiben ----------
  let applying = false;
  function touched(k){
    if(applying || !SYNC_KEYS.includes(k)) return;
    const meta = read(META_KEY, {});
    meta[k] = Date.now();
    write(META_KEY, meta);
    schedulePush();
  }
  Storage.prototype.setItem = function(k, v){ rawSet.call(this, k, v); if(this === store) touched(k); };
  Storage.prototype.removeItem = function(k){ rawRemove.call(this, k); if(this === store) touched(k); };

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

  // ---------- Erster Abgleich: lokale Daten nicht verlieren ----------
  function mergeFirst(k, local, remote){
    if(local == null) return remote;
    if(remote == null) return local;
    if(k === "kochbuch.shopping"){
      const seen = new Set(remote.map(i=>`${String(i.item).toLowerCase()}|${i.unit||""}`));
      return remote.concat(local.filter(i=>!seen.has(`${String(i.item).toLowerCase()}|${i.unit||""}`)));
    }
    if(k === "kochbuch.plan"){
      const out = { ...remote };
      for(const [d, list] of Object.entries(local)){
        out[d] = (out[d] || []).concat((list || []).filter(e=>!(out[d] || []).some(x=>x.id === e.id)));
      }
      return out;
    }
    if(k === "kochbuch.stats"){
      const out = { ...remote };
      for(const [id, e] of Object.entries(local)){
        const r = out[id];
        if(!r || typeof e !== "object"){ if(!r) out[id] = e; continue; }
        const hist = Array.from(new Set([...(r.history || []), ...(e.history || [])])).sort().reverse().slice(0, 50);
        out[id] = {
          ...r, ...e,
          favorite: !!(r.favorite || e.favorite),
          favoriteAt: r.favoriteAt || e.favoriteAt,
          cookedCount: Math.max(Number(r.cookedCount || 0), Number(e.cookedCount || 0), hist.length),
          lastCooked: hist[0] || r.lastCooked || e.lastCooked || null,
          history: hist
        };
      }
      return out;
    }
    return { ...remote, ...local }; // Kühltruhe
  }

  // ---------- Abgleich ----------
  let pushTimer = null;
  function schedulePush(){
    if(!loggedIn()) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(()=>push().catch(()=>{}), 1500);
  }
  function localChanges(){
    const meta = read(META_KEY, {});
    const out = {};
    for(const k of SYNC_KEYS){
      if(meta[k]) out[k] = { v: read(k, null), t: meta[k] };
    }
    return out;
  }
  async function push(keepalive){
    if(!loggedIn()) return;
    const changes = localChanges();
    if(!Object.keys(changes).length) return;
    const res = await api("/api/sync", { method: "PUT", body: { changes }, keepalive });
    apply(res.data);
  }

  // Serverstand übernehmen, wo er neuer ist. Rückgabe: ob sich lokal etwas geändert hat.
  function apply(data){
    const meta = read(META_KEY, {});
    let changed = false;
    applying = true;
    try{
      for(const k of SYNC_KEYS){
        const remote = data && data[k];
        if(!remote) continue;
        if(!meta[k] || remote.t > meta[k]){
          const before = store.getItem(k);
          const next = JSON.stringify(remote.v);
          if(before !== next){ rawSet.call(store, k, next); changed = true; }
          meta[k] = remote.t;
        }
      }
      write(META_KEY, meta);
    }finally{ applying = false; }
    const p = profile();
    if(p){ p.lastSync = Date.now(); write(PROFILE_KEY, p); }
    return changed;
  }

  async function pull(){
    if(!loggedIn()) return false;
    const { data } = await api("/api/sync");
    const meta = read(META_KEY, {});
    // Erster Abgleich auf diesem Gerät: vorhandene Daten mit dem Server zusammenführen
    if(!meta.__joined){
      applying = true;
      try{
        for(const k of SYNC_KEYS){
          const local = read(k, null);
          if(local == null) continue;
          const merged = mergeFirst(k, local, data[k] ? data[k].v : null);
          rawSet.call(store, k, JSON.stringify(merged));
          meta[k] = Date.now();
        }
        meta.__joined = 1;
        meta.__uid = (profile() || {}).uid;
        write(META_KEY, meta);
      }finally{ applying = false; }
      await push();
      return true;
    }
    const changed = apply(data);
    if(Object.keys(localChanges()).some(k => !data[k] || localChanges()[k].t > data[k].t)) await push();
    return changed;
  }

  // Nach neuen Daten vom anderen Gerät die Ansicht auffrischen
  function refreshView(){
    try{ window.updateFavBadges?.(); }catch{}
    window.dispatchEvent(new Event("kochbuch:stats"));
    window.dispatchEvent(new Event("kochbuch:plan"));
    const overlayOpen = document.querySelector(".sheet.open, .cookOverlay.open");
    const path = location.pathname;
    const listPage = ["/", "/shopping/", "/wochenplan/", "/kuehltruhe/", "/rezeptindex/", "/was-koche-ich/"].includes(path);
    const last = Number(sessionStorage.getItem("kochbuch.sync.reload") || 0);
    if(listPage && !overlayOpen && Date.now() - last > 10000){
      sessionStorage.setItem("kochbuch.sync.reload", String(Date.now()));
      location.reload();
    }
  }

  async function syncNow(){
    const changed = await pull();
    if(changed) refreshView();
    renderBadges();
    return changed;
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
    // Anderes Profil als zuletzt auf diesem Gerät: dessen Daten nicht übernehmen, sondern frisch vom Server laden
    const meta = read(META_KEY, {});
    if(meta.__uid && res.uid && meta.__uid !== res.uid){
      applying = true;
      try{ SYNC_KEYS.forEach(k=>rawRemove.call(store, k)); }finally{ applying = false; }
      write(META_KEY, { __joined: 1, __uid: res.uid });
    }else if(res.uid && meta.__joined && !meta.__uid){
      meta.__uid = res.uid; write(META_KEY, meta);
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
    let edit = false;
    try{ edit = !!(p && p.role === "owner" && localStorage.getItem("kochbuch.ui.editMode") === "1"); }catch{}
    document.querySelectorAll("[data-edit-only]").forEach(el=>{ el.hidden = !edit; });
    document.querySelectorAll("[data-profile-badge]").forEach(el=>{
      const initial = p && p.name ? p.name.trim().charAt(0).toUpperCase() : "";
      el.classList.toggle("isIn", !!p);
      el.setAttribute("aria-label", p ? `Profil: ${p.name || "angemeldet"}` : "Anmelden");
      el.innerHTML = p
        ? `<span class="profileInitial">${initial || "✓"}</span>`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>`;
    });
  }

  window.KOCHBUCH_ACCOUNT = { renderBadges, me: (query)=>api("/api/me" + (query || "")), api, register, login, logout, syncNow, profile, passkeySupported, deviceName };

  // Name/Rolle aktuell halten (z. B. nach Umstellung auf mehrere Profile)
  async function refreshProfile(){
    const me = await api("/api/me");
    const p = profile();
    if(!me.loggedIn){ rawRemove.call(store, PROFILE_KEY); }
    else if(p && (p.role !== me.role || p.uid !== me.uid || p.name !== me.name)){
      write(PROFILE_KEY, { ...p, name: me.name, uid: me.uid, role: me.role });
      const meta = read(META_KEY, {});
      if(meta.__joined && !meta.__uid){ meta.__uid = me.uid; write(META_KEY, meta); }
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
    else if(pushTimer){ clearTimeout(pushTimer); pushTimer = null; push(true).catch(()=>{}); }
  });
})();
