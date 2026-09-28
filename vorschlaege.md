---
layout: page
title: Vorschläge
permalink: /vorschlaege/
---

<div class="section" style="margin-top:6px" id="sugHost">
  <div class="card cardPad sub">Lade …</div>
</div>

<script>
(function(){
  const host = document.getElementById('sugHost');
  const esc = (s)=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const day = (t)=> new Date(t).toLocaleDateString('de-DE', { day:'numeric', month:'long' });
  const A = ()=> window.KOCHBUCH_ACCOUNT;
  const STATUS = { pending: ['Wartet auf Freigabe', 'isPending'], approved: ['Freigegeben', 'isApproved'], rejected: ['Nicht übernommen', 'isRejected'] };

  function thumb(x){
    return x.hasImage
      ? `<img class="sugThumb" src="/api/suggestions/${encodeURIComponent(x.id)}/image" alt="" loading="lazy">`
      : `<span class="sugThumb sugThumbEmpty" aria-hidden="true">🍽</span>`;
  }

  async function load(){
    let me;
    try{ me = await A().me(); }catch(err){ host.innerHTML = `<div class="uEmpty"><div class="uEmptyTitle">Keine Verbindung</div><div class="uEmptyText">${esc(err.message)}</div></div>`; return; }
    if(!me.loggedIn){
      host.innerHTML = `<div class="uEmpty"><div class="uEmptyTitle">Bitte anmelden</div><div class="uEmptyText">Rezepte vorschlagen können alle mit Profil.</div><a class="btn action" href="{{ '/konto/' | relative_url }}" style="margin-top:12px">Zum Profil</a></div>`;
      return;
    }
    const owner = me.role === 'owner';
    const { suggestions } = await A().api('/api/suggestions');
    if(owner){
      host.innerHTML = suggestions.length ? `
        <p class="sub" style="margin:0 0 12px">${suggestions.length === 1 ? 'Ein Vorschlag wartet' : `${suggestions.length} Vorschläge warten`} auf deine Freigabe.</p>
        <div class="stack">${suggestions.map(x=>`
          <div class="card cardPad sugRow">
            ${thumb(x)}
            <div class="sugInfo">
              <div class="sugTitle">${esc(x.title)}</div>
              <div class="sugMeta"><span class="authorAvatar" aria-hidden="true">${esc(x.name.charAt(0).toUpperCase())}</span>${esc(x.name)} · ${day(x.created)} · ${esc(x.category)}</div>
              <a class="btn action sugBtn" href="{{ '/neues-rezept/' | relative_url }}?vorschlag=${encodeURIComponent(x.id)}">Ansehen &amp; freigeben</a>
            </div>
          </div>`).join('')}</div>`
        : `<div class="uEmpty"><div class="uEmptyTitle">Keine offenen Vorschläge</div><div class="uEmptyText">Wenn jemand mit Profil ein Rezept vorschlägt, taucht es hier auf.</div></div>`;
      return;
    }
    host.innerHTML = `
      <a class="btn action accountBtn" href="{{ '/neues-rezept/' | relative_url }}" style="margin-bottom:16px">Neues Rezept vorschlagen</a>
      ${suggestions.length ? `<div class="stack">${suggestions.map(x=>{
        const [label, cls] = STATUS[x.status] || STATUS.pending;
        return `<div class="card cardPad sugRow">
          ${thumb(x)}
          <div class="sugInfo">
            <div class="sugTitle">${esc(x.title)}</div>
            <div class="sugMeta">${day(x.created)}</div>
            <span class="sugStatus ${cls}">${label}</span>
            ${x.status === 'approved' && x.url ? `<a class="homeAllLink" href="${esc(x.url)}">Zum Rezept →</a>` : ''}
            ${x.status === 'rejected' && x.reason ? `<div class="sub">„${esc(x.reason)}“</div>` : ''}
            ${x.status === 'pending' ? `<button class="sugWithdraw" data-id="${esc(x.id)}" type="button">Zurückziehen</button>` : ''}
          </div>
        </div>`;}).join('')}</div>`
      : `<div class="uEmpty"><div class="uEmptyTitle">Noch keine Vorschläge</div><div class="uEmptyText">Du kennst ein gutes Rezept? Schlag es vor – auch per Link von einer Rezeptseite.</div></div>`}`;
    host.querySelectorAll('.sugWithdraw').forEach(b=> b.addEventListener('click', async ()=>{
      if(!confirm('Vorschlag zurückziehen?')) return;
      await A().api(`/api/suggestions/${encodeURIComponent(b.dataset.id)}/withdraw`, { method: 'POST', body: {} });
      load();
    }));
  }
  if(window.KOCHBUCH_ACCOUNT) load(); else document.addEventListener('DOMContentLoaded', load);
})();
</script>
