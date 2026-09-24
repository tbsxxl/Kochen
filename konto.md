---
layout: page
title: Profil & Sync
permalink: /konto/
---

<div class="section" style="margin-top:6px" id="accountHost">
  <div class="card cardPad sub">Lade …</div>
</div>

<script>
(function(){
  const host = document.getElementById('accountHost');
  const esc = (s)=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const fmt = (d)=> d ? new Date(d).toLocaleString('de-DE', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' }) : '—';

  function A(){ return window.KOCHBUCH_ACCOUNT; }

  function busy(btn, on, text){
    if(!btn) return;
    if(on){ btn.dataset.label = btn.textContent; btn.textContent = text || 'Einen Moment …'; btn.disabled = true; }
    else{ btn.textContent = btn.dataset.label || btn.textContent; btn.disabled = false; }
  }
  function showError(el, err){ if(el){ el.textContent = (err && err.message) || String(err); el.hidden = false; } }

  const FACE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8V6a2 2 0 012-2h2M16 4h2a2 2 0 012 2v2M20 16v2a2 2 0 01-2 2h-2M8 20H6a2 2 0 01-2-2v-2"/><path d="M9 9v1M15 9v1M12 9v4h-1M9 16c1.5 1 4.5 1 6 0"/></svg>';

  function renderLoggedOut(me){
    const unsupported = !A().passkeySupported();
    host.innerHTML = me.setupDone ? `
      <div class="card cardPad accountCard">
        <div class="accountIcon">${FACE}</div>
        <h2 class="h2 accountTitle">Anmelden</h2>
        <p class="sub">Melde dich mit Face ID oder Touch ID an. Dann sind Favoriten, Einkaufsliste, Kühltruhe und Wochenplan auf allen deinen Geräten gleich, und du kannst Rezepte hochladen.</p>
        <button class="btn action accountBtn" id="loginBtn" type="button" ${unsupported ? 'disabled' : ''}>Mit Passkey anmelden</button>
        <p class="accountError" id="err" hidden></p>
        ${unsupported ? '<p class="sub">Dieser Browser unterstützt keine Passkeys.</p>' : ''}
      </div>` : `
      <div class="card cardPad accountCard">
        <div class="accountIcon">${FACE}</div>
        <h2 class="h2 accountTitle">Profil einrichten</h2>
        <p class="sub">Einmalig: Gib deinen Namen und den Einrichtungscode aus Cloudflare ein. Danach meldest du dich nur noch mit Face ID an – ohne Passwort.</p>
        <label class="fieldLabel" for="nameIn">Name</label>
        <input class="fieldInput" id="nameIn" autocomplete="nickname" placeholder="z. B. Tobi" maxlength="40">
        <label class="fieldLabel" for="codeIn">Einrichtungscode</label>
        <input class="fieldInput" id="codeIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="SETUP_CODE">
        <button class="btn action accountBtn" id="setupBtn" type="button" ${unsupported ? 'disabled' : ''}>Passkey erstellen</button>
        <p class="accountError" id="err" hidden></p>
      </div>`;

    document.getElementById('loginBtn')?.addEventListener('click', async (e)=>{
      const btn = e.currentTarget; busy(btn, true, 'Warte auf Face ID …');
      try{ await A().login(); load(); }catch(err){ busy(btn, false); showError(document.getElementById('err'), err); }
    });
    document.getElementById('setupBtn')?.addEventListener('click', async (e)=>{
      const btn = e.currentTarget;
      const name = document.getElementById('nameIn').value.trim();
      const setupCode = document.getElementById('codeIn').value.trim();
      if(!name || !setupCode){ showError(document.getElementById('err'), 'Bitte Name und Einrichtungscode eingeben.'); return; }
      busy(btn, true, 'Warte auf Face ID …');
      try{ await A().register({ name, setupCode }); load(); }catch(err){ busy(btn, false); showError(document.getElementById('err'), err); }
    });
  }

  function renderLoggedIn(me){
    const p = A().profile() || {};
    const initial = (me.name || p.name || '?').trim().charAt(0).toUpperCase();
    host.innerHTML = `
      <div class="card cardPad accountCard">
        <div class="accountHead">
          <span class="profileBadge isIn accountAvatar"><span class="profileInitial">${esc(initial)}</span></span>
          <div><div class="accountName">${esc(me.name || p.name || 'Angemeldet')}</div><div class="sub" id="syncInfo">Synchronisiert · ${fmt(p.lastSync)}</div></div>
        </div>
        <button class="btn accountBtn" id="syncBtn" type="button">Jetzt synchronisieren</button>
        ${me.canUpload ? `<a class="btn action accountBtn" href="{{ '/neues-rezept/' | relative_url }}">Rezept hochladen</a>` : `<p class="sub">Zum Hochladen fehlt in Cloudflare noch das GITHUB_TOKEN.</p>`}
        <p class="accountError" id="err" hidden></p>
      </div>

      <div class="card cardPad accountCard">
        <h2 class="h2 accountTitle">Geräte mit Passkey</h2>
        <div class="accountDevices">${(me.devices || []).map(d=>`<div class="accountDevice"><span>${esc(d.name)}</span><span class="sub">zuletzt ${fmt(d.lastUsed)}</span></div>`).join('')}</div>
        <p class="sub">iPhone, iPad und Mac teilen den Passkey über den iCloud-Schlüsselbund. Auf anderen Geräten (z. B. einem Windows-PC) meldest du dich mit dem iPhone per QR-Code an und legst dort dann einen eigenen Passkey an.</p>
        <button class="btn accountBtn" id="addDeviceBtn" type="button">Passkey auf diesem Gerät hinzufügen</button>
      </div>

      <div class="card cardPad accountCard">
        <button class="btn btnGhost accountBtn" id="logoutBtn" type="button">Abmelden</button>
        <button class="btn btnDangerOutline accountBtn" id="logoutAllBtn" type="button">Auf allen Geräten abmelden</button>
      </div>`;

    const err = document.getElementById('err');
    document.getElementById('syncBtn').addEventListener('click', async (e)=>{
      const btn = e.currentTarget; busy(btn, true, 'Synchronisiere …');
      try{ await A().syncNow(); document.getElementById('syncInfo').textContent = `Synchronisiert · ${fmt(Date.now())}`; window.KOCHBUCH_UI?.toast?.('Alles aktuell'); }
      catch(ex){ showError(err, ex); }
      busy(btn, false);
    });
    document.getElementById('addDeviceBtn').addEventListener('click', async (e)=>{
      const btn = e.currentTarget; busy(btn, true, 'Warte auf Face ID …');
      try{ await A().register({}); window.KOCHBUCH_UI?.toast?.('Passkey hinzugefügt'); load(); }
      catch(ex){ busy(btn, false); showError(err, ex); }
    });
    document.getElementById('logoutBtn').addEventListener('click', async ()=>{ await A().logout(false); load(); });
    document.getElementById('logoutAllBtn').addEventListener('click', async ()=>{
      if(!confirm('Auf allen Geräten abmelden?')) return;
      await A().logout(true); load();
    });
  }

  async function load(){
    try{
      const me = await A().me();
      if(me.loggedIn) renderLoggedIn(me); else {
        if(A().profile()) await A().logout(false);
        renderLoggedOut(me);
      }
    }catch(err){
      host.innerHTML = `<div class="uEmpty"><div class="uEmptyTitle">Keine Verbindung</div><div class="uEmptyText">${esc(err.message || err)}</div></div>`;
    }
  }

  if(window.KOCHBUCH_ACCOUNT) load(); else document.addEventListener('DOMContentLoaded', load);
})();
</script>
