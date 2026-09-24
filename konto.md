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
  const fmtDay = (d)=> d ? new Date(d).toLocaleDateString('de-DE', { day:'numeric', month:'long' }) : '—';
  const invite = new URLSearchParams(location.search).get('einladung') || '';

  function A(){ return window.KOCHBUCH_ACCOUNT; }
  function editOn(){ try{ return localStorage.getItem('kochbuch.ui.editMode') === '1'; }catch{ return false; } }
  const toast = (t)=>{ try{ window.KOCHBUCH_UI?.toast?.(t); }catch{} };

  function busy(btn, on, text){
    if(!btn) return;
    if(on){ btn.dataset.label = btn.textContent; btn.textContent = text || 'Einen Moment …'; btn.disabled = true; }
    else{ btn.textContent = btn.dataset.label || btn.textContent; btn.disabled = false; }
  }
  function showError(err){ const el = document.getElementById('err'); if(el){ el.textContent = (err && err.message) || String(err); el.hidden = false; } }

  const FACE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8V6a2 2 0 012-2h2M16 4h2a2 2 0 012 2v2M20 16v2a2 2 0 01-2 2h-2M8 20H6a2 2 0 01-2-2v-2"/><path d="M9 9v1M15 9v1M12 9v4h-1M9 16c1.5 1 4.5 1 6 0"/></svg>';

  // ---------- Nicht angemeldet ----------
  function renderLoggedOut(me){
    const unsupported = !A().passkeySupported();
    const noPasskey = unsupported ? '<p class="sub">Dieser Browser unterstützt keine Passkeys. Auf dem iPhone bitte Safari oder die Homescreen-App nutzen.</p>' : '';
    let html;
    if(invite && me.inviteValid){
      html = `
      <div class="card cardPad accountCard">
        <div class="accountIcon">${FACE}</div>
        <h2 class="h2 accountTitle">Du bist eingeladen</h2>
        <p class="sub">Leg dir ein eigenes Profil an. Deine Favoriten, Einkaufsliste, Kühltruhe und dein Wochenplan werden dann auf allen deinen Geräten gespeichert. Anmelden geht per Face ID, ohne Passwort.</p>
        <label class="fieldLabel" for="nameIn">Dein Name</label>
        <input class="fieldInput" id="nameIn" autocomplete="nickname" placeholder="z. B. Anna" maxlength="40">
        <button class="btn action accountBtn" id="inviteBtn" type="button" ${unsupported ? 'disabled' : ''}>Profil erstellen</button>
        <p class="accountError" id="err" hidden></p>${noPasskey}
      </div>`;
    }else if(!me.setupDone){
      html = `
      <div class="card cardPad accountCard">
        <div class="accountIcon">${FACE}</div>
        <h2 class="h2 accountTitle">Profil einrichten</h2>
        <p class="sub">Einmalig für den Besitzer des Kochbuchs: Name und Einrichtungscode aus Cloudflare eingeben. Danach meldest du dich nur noch mit Face ID an.</p>
        <label class="fieldLabel" for="nameIn">Name</label>
        <input class="fieldInput" id="nameIn" autocomplete="nickname" placeholder="z. B. Tobi" maxlength="40">
        <label class="fieldLabel" for="codeIn">Einrichtungscode</label>
        <input class="fieldInput" id="codeIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="SETUP_CODE">
        <button class="btn action accountBtn" id="setupBtn" type="button" ${unsupported ? 'disabled' : ''}>Passkey erstellen</button>
        <p class="accountError" id="err" hidden></p>${noPasskey}
      </div>`;
    }else{
      html = `
      <div class="card cardPad accountCard">
        <div class="accountIcon">${FACE}</div>
        <h2 class="h2 accountTitle">Anmelden</h2>
        ${invite ? '<p class="accountError">Dieser Einladungslink ist ungültig, schon benutzt oder abgelaufen. Bitte um einen neuen Link.</p>' : ''}
        <p class="sub">Mit Face ID oder Touch ID anmelden. Dann sind Favoriten, Einkaufsliste, Kühltruhe und Wochenplan auf allen deinen Geräten gleich.</p>
        <button class="btn action accountBtn" id="loginBtn" type="button" ${unsupported ? 'disabled' : ''}>Mit Passkey anmelden</button>
        <p class="accountError" id="err" hidden></p>${noPasskey}
        <p class="sub">Noch kein Profil? Dafür brauchst du einen Einladungslink.</p>
      </div>`;
    }
    host.innerHTML = html;

    document.getElementById('loginBtn')?.addEventListener('click', async (e)=>{
      const btn = e.currentTarget; busy(btn, true, 'Warte auf Face ID …');
      try{ await A().login(); load(); }catch(err){ busy(btn, false); showError(err); }
    });
    document.getElementById('setupBtn')?.addEventListener('click', async (e)=>{
      const btn = e.currentTarget;
      const name = document.getElementById('nameIn').value.trim();
      const setupCode = document.getElementById('codeIn').value.trim();
      if(!name || !setupCode){ showError('Bitte Name und Einrichtungscode eingeben.'); return; }
      busy(btn, true, 'Warte auf Face ID …');
      try{ await A().register({ name, setupCode }); load(); }catch(err){ busy(btn, false); showError(err); }
    });
    document.getElementById('inviteBtn')?.addEventListener('click', async (e)=>{
      const btn = e.currentTarget;
      const name = document.getElementById('nameIn').value.trim();
      if(!name){ showError('Bitte gib deinen Namen ein.'); return; }
      busy(btn, true, 'Warte auf Face ID …');
      try{
        await A().register({ name, invite });
        history.replaceState(null, '', location.pathname);
        toast(`Willkommen, ${name}!`);
        load();
      }catch(err){ busy(btn, false); showError(err); }
    });
  }

  // ---------- Angemeldet ----------
  function renderLoggedIn(me){
    const p = A().profile() || {};
    const owner = me.role === 'owner';
    const initial = (me.name || '?').trim().charAt(0).toUpperCase();
    const members = me.members || [];
    host.innerHTML = `
      <div class="card cardPad accountCard">
        <div class="accountHead">
          <span class="profileBadge isIn accountAvatar"><span class="profileInitial">${esc(initial)}</span></span>
          <div><div class="accountName">${esc(me.name)}</div><div class="sub" id="syncInfo">${owner ? 'Besitzer · ' : ''}Synchronisiert · ${fmt(p.lastSync)}</div></div>
        </div>
        ${invite ? '<p class="sub">Du bist schon angemeldet. Den Einladungslink kann jemand anderes auf seinem Gerät öffnen.</p>' : ''}
        <button class="btn accountBtn" id="syncBtn" type="button">Jetzt synchronisieren</button>
        ${owner ? (me.canUpload ? `<a class="btn action accountBtn" href="{{ '/neues-rezept/' | relative_url }}">Rezept hochladen</a>` : `<p class="sub">Zum Hochladen fehlt in Cloudflare noch das GITHUB_TOKEN.</p>`) : ''}
        ${owner ? `<button class="sheetRow editSwitch" id="editModeBtn" type="button" role="switch" aria-checked="${editOn() ? 'true' : 'false'}"><span class="rowGlyph" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4z"/></svg></span><span class="editSwitchText"><span>Bearbeiten-Modus</span><span class="sub">Zeigt auf Rezeptseiten unter „Mehr“ „Rezept bearbeiten“. Nur auf diesem Gerät und nur für dich.</span></span><span class="sheetSwitch" aria-hidden="true"></span></button>` : ''}
        <p class="accountError" id="err" hidden></p>
      </div>

      ${owner ? `
      <div class="card cardPad accountCard">
        <h2 class="h2 accountTitle">Mitglieder</h2>
        <p class="sub">Eingeladene haben ein eigenes Profil mit eigenen Favoriten, Einkaufsliste, Kühltruhe und Wochenplan. Rezepte hochladen oder ändern können sie nicht.</p>
        <div class="accountDevices">${members.length ? members.map(m=>`<div class="accountDevice"><span>${esc(m.name)}<span class="sub"> · seit ${fmtDay(m.created)}</span></span><button type="button" class="memberRemove" data-uid="${esc(m.uid)}" data-name="${esc(m.name)}">Entfernen</button></div>`).join('') : '<div class="sub">Noch niemand eingeladen.</div>'}</div>
        <button class="btn secondary accountBtn" id="inviteCreateBtn" type="button">Einladungslink erstellen</button>
        <div class="inviteBox" id="inviteBox" hidden>
          <input class="fieldInput" id="inviteUrl" readonly>
          <div class="fieldRow">
            <button class="btn accountBtn" id="inviteShare" type="button">Teilen</button>
            <button class="btn accountBtn" id="inviteCopy" type="button">Kopieren</button>
          </div>
          <p class="sub">Gilt 7 Tage und nur für eine Person.</p>
        </div>
      </div>` : ''}

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

    document.getElementById('editModeBtn')?.addEventListener('click', (e)=>{
      const on = !editOn();
      try{ localStorage.setItem('kochbuch.ui.editMode', on ? '1' : '0'); }catch{}
      e.currentTarget.setAttribute('aria-checked', on ? 'true' : 'false');
      A().renderBadges?.();
      toast(on ? 'Bearbeiten-Modus an' : 'Bearbeiten-Modus aus');
    });
    document.getElementById('syncBtn').addEventListener('click', async (e)=>{
      const btn = e.currentTarget; busy(btn, true, 'Synchronisiere …');
      try{ await A().syncNow(); document.getElementById('syncInfo').textContent = `${owner ? 'Besitzer · ' : ''}Synchronisiert · ${fmt(Date.now())}`; toast('Alles aktuell'); }
      catch(ex){ showError(ex); }
      busy(btn, false);
    });
    document.getElementById('addDeviceBtn').addEventListener('click', async (e)=>{
      const btn = e.currentTarget; busy(btn, true, 'Warte auf Face ID …');
      try{ await A().register({}); toast('Passkey hinzugefügt'); load(); }
      catch(ex){ busy(btn, false); showError(ex); }
    });
    document.getElementById('logoutBtn').addEventListener('click', async ()=>{ await A().logout(false); load(); });
    document.getElementById('logoutAllBtn').addEventListener('click', async ()=>{
      if(!confirm('Auf allen Geräten abmelden?')) return;
      await A().logout(true); load();
    });

    // Einladungen & Mitglieder (nur Besitzer)
    const box = document.getElementById('inviteBox');
    document.getElementById('inviteCreateBtn')?.addEventListener('click', async (e)=>{
      const btn = e.currentTarget; busy(btn, true, 'Erstelle Link …');
      try{
        const res = await A().api('/api/invites', { method: 'POST', body: {} });
        document.getElementById('inviteUrl').value = res.url;
        box.hidden = false;
        busy(btn, false); btn.textContent = 'Neuen Link erstellen';
      }catch(ex){ busy(btn, false); showError(ex); }
    });
    document.getElementById('inviteShare')?.addEventListener('click', async ()=>{
      const url = document.getElementById('inviteUrl').value;
      const text = `Hier ist deine Einladung für Tobis Kochbuch. Öffne den Link auf deinem Handy und leg dein Profil mit Face ID an:`;
      if(navigator.share){ try{ await navigator.share({ title: 'Einladung: Tobis Kochbuch', text, url }); }catch{} }
      else{ try{ await navigator.clipboard.writeText(url); toast('Link kopiert'); }catch{} }
    });
    document.getElementById('inviteCopy')?.addEventListener('click', async ()=>{
      const inp = document.getElementById('inviteUrl');
      try{ await navigator.clipboard.writeText(inp.value); toast('Link kopiert'); }
      catch{ inp.select(); document.execCommand('copy'); toast('Link kopiert'); }
    });
    host.querySelectorAll('.memberRemove').forEach(b=> b.addEventListener('click', async ()=>{
      if(!confirm(`${b.dataset.name} entfernen? Das Profil und seine gespeicherten Daten werden gelöscht.`)) return;
      try{ await A().api('/api/members/remove', { method: 'POST', body: { uid: b.dataset.uid } }); toast(`${b.dataset.name} entfernt`); load(); }
      catch(ex){ showError(ex); }
    }));
  }

  async function load(){
    try{
      const me = await A().me(invite ? `?einladung=${encodeURIComponent(invite)}` : '');
      if(me.loggedIn){
        const p = A().profile();
        if(p && (p.role !== me.role || p.name !== me.name)) localStorage.setItem('kochbuch.profile', JSON.stringify({ ...p, name: me.name, uid: me.uid, role: me.role }));
        renderLoggedIn(me);
      }else{
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
