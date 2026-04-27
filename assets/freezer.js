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
  const byId = new Map(recipes.map(r=>[r.id, r]));

  const freezerKey='kochbuch.freezer';
  function getFreezer(){ return ls.get(freezerKey, {}); }
  function setFreezer(v){ ls.set(freezerKey, v); }

  const SVG_CLOCK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>`;
  const SVG_ICE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><polyline points="6 6 12 2 18 6"/><polyline points="6 18 12 22 18 18"/><polyline points="2 8 6 12 2 16"/><polyline points="22 8 18 12 22 16"/></svg>`;
  const SVG_TRASH = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>`;

  function row(id, entry){
    const r = byId.get(id);
    const title = r?.title || id;
    const portions = Number(entry?.portions || 0);
    const timeMeta = r?.time ? `<span class="metaItem"><span class="metaIcon" aria-hidden="true">${SVG_CLOCK}</span><span>${r.time}</span></span>` : '';

    return `
      <div class="card cardPad freezerCard" data-id="${id}">
        <span class="favBadge" data-fav-badge data-recipe-id="${id}" aria-hidden="true">★</span>
        <div class="freezerTop">
          <a class="freezerTitle" href="${id}" style="font-family:var(--fontDisplay);font-size:18px;font-weight:400;letter-spacing:-.01em">${title}</a>
          <span class="freezerBadge">
            <span class="metaIcon" aria-hidden="true">${SVG_ICE}</span>
            <span>${portions}</span>
          </span>
        </div>
        ${timeMeta ? `<div class="recipeMeta" style="margin-top:6px">${timeMeta}</div>` : ''}
        <div class="freezerControls">
          <div class="qtyStepper" aria-label="Portionen ändern">
            <button class="stepBtn" data-act="minus" type="button" aria-label="Minus">−</button>
            <div class="stepVal" aria-label="Portionen">${portions}</div>
            <button class="stepBtn" data-act="plus" type="button" aria-label="Plus">+</button>
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
      host.innerHTML = `<div class="uEmpty"><p>Noch nichts eingefroren.</p><p class="sub" style="font-size:13px;margin-top:4px">Öffne ein Rezept und tippe auf „Kühltruhe".</p></div>`;
      return;
    }
    ids.sort((a,b) => (byId.get(a)?.title||a).localeCompare(byId.get(b)?.title||b, 'de'));
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
