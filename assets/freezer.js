(function(){
  const host = document.getElementById('freezerList');
  const dataEl = document.getElementById('allRecipesJson');
  if(!host || !dataEl) return;

  const ls = {
    get(k, fb){ try{ const v=localStorage.getItem(k); return v?JSON.parse(v):fb; }catch{return fb;} },
    set(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch{} }
  };

  let recipes=[];
  try{ recipes=JSON.parse(dataEl.textContent||'[]'); }catch{}
  if(!Array.isArray(recipes)) recipes=[];
  const trimPath = (x)=> String(x||'').replace(/^https?:\/\/[^/]+/i,'').replace(/^\/Kochen(?=\/)/i,'').replace(/\/+$/,'');
  const byId = new Map(recipes.map(r=>[trimPath(r.id), r]));
  const lookup = (id)=> byId.get(trimPath(id));
  const esc = (x)=>String(x??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  function age(iso){
    const t = Date.parse(iso||''); if(!t) return { text:'', days:0 };
    const days = Math.floor((Date.now()-t)/86400000);
    const text = days<=0 ? 'heute eingefroren' : days===1 ? 'seit gestern' : days<14 ? `seit ${days} Tagen` : days<60 ? `seit ${Math.round(days/7)} Wochen` : `seit ${Math.round(days/30)} Monaten`;
    return { text, days };
  }

  const freezerKey='kochbuch.freezer';
  function getFreezer(){ return ls.get(freezerKey, {}); }
  function setFreezer(v){ ls.set(freezerKey, v); }

  const SVG_CLOCK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>`;
  const SVG_ICE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><polyline points="6 6 12 2 18 6"/><polyline points="6 18 12 22 18 18"/><polyline points="2 8 6 12 2 16"/><polyline points="22 8 18 12 22 16"/></svg>`;
  const SVG_TRASH = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>`;

  function row(id, entry){
    const r = lookup(id);
    const title = r?.title || id;
    const portions = Number(entry?.portions || 0);
    const a = age(entry?.added);
    const old = a.days >= 90;
    const thumb = r?.image
      ? `<img class="freezerThumb" src="${esc(r.image)}" srcset="${esc(r.srcset||'')}" sizes="64px" alt="" loading="lazy">`
      : `<span class="freezerThumb freezerThumbEmpty" aria-hidden="true">${SVG_ICE}</span>`;

    return `
      <div class="card cardPad freezerCard" data-id="${esc(id)}">
        <div class="freezerTop">
          <a class="freezerLink" href="${esc(r?.id || id)}">
            ${thumb}
            <span class="freezerInfo">
              <span class="freezerTitle">${esc(title)}</span>
              <span class="freezerMeta">${r?.category ? esc(r.category) : ''}${r?.category && a.text ? ' · ' : ''}${a.text ? `<span class="${old ? 'freezerOld' : ''}">${a.text}</span>` : ''}</span>
            </span>
          </a>
        </div>
        <div class="freezerControls">
          <div class="qtyStepper" aria-label="Portionen ändern">
            <button class="stepBtn" data-act="minus" type="button" aria-label="Eine Portion weniger">−</button>
            <div class="stepVal" aria-label="Portionen">${portions}</div>
            <button class="stepBtn" data-act="plus" type="button" aria-label="Eine Portion mehr">+</button>
            <span class="freezerUnit">${portions === 1 ? 'Portion' : 'Portionen'}</span>
          </div>
          <button class="btn btnDangerOutline freezerRemoveBtn" data-act="remove" type="button" aria-label="Aus Kühltruhe entfernen">
            <span class="metaIcon" style="width:16px;height:16px" aria-hidden="true">${SVG_TRASH}</span>
          </button>
        </div>
      </div>`;
  }

  function render(){
    const f = getFreezer();
    const ids = Object.keys(f);
    if(!ids.length){
      host.innerHTML = `<div class="uEmpty"><div class="uEmptyTitle">Noch nichts eingefroren</div><div class="uEmptyText">Öffne ein Rezept und tippe unten auf „Kühltruhe“.</div></div>`;
      return;
    }
    // Älteste zuerst: was am längsten drin ist, sollte zuerst gegessen werden
    ids.sort((a,b) => (Date.parse(f[a]?.added||'')||0) - (Date.parse(f[b]?.added||'')||0) || (lookup(a)?.title||a).localeCompare(lookup(b)?.title||b, 'de'));
    host.innerHTML = `<div class="stack">${ids.map(id=>row(id,f[id])).join('')}</div>`;
    if(typeof window.updateFavBadges === 'function') window.updateFavBadges();
  }

  host.addEventListener('click', (e)=>{
    const btn = e.target.closest('button[data-act]');
    if(!btn) return;
    const card = btn.closest('[data-id]');
    const id = card?.getAttribute('data-id');
    if(!id) return;
    const act = btn.getAttribute('data-act');
    const f = getFreezer();
    const entry = f[id] || { portions: 0, added: new Date().toISOString() };

    if(act === 'plus'){ entry.portions = Math.min(999, Number(entry.portions||0)+1); f[id]=entry; }
    if(act === 'minus'){ entry.portions = Math.max(0, Number(entry.portions||0)-1); if(entry.portions<=0) delete f[id]; else f[id]=entry; }
    if(act === 'remove'){ if(!window.confirm('Aus der Kühltruhe entfernen?')) return; delete f[id]; }
    setFreezer(f);
    render();
  });

  render();
})();
