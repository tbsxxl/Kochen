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

  function row(id, entry){
    const r = byId.get(id);
    const title = r?.title || id;
    const meta = [r?.category?`🏷 ${r.category}`:'', r?.time?`⏱ ${r.time}`:''].filter(Boolean).join(' · ');
    const portions = Number(entry?.portions || 0);
    return `
      <div class="card cardPad freezerCard" data-id="${id}">
        <div class="freezerTop">
          <a class="freezerTitle" href="${id}">${title}</a>
          <span class="badge green">🧊 ${portions}</span>
        </div>
        ${meta?`<div class="dim" style="margin-top:6px">${meta}</div>`:''}

        <div class="freezerControls">
          <button class="btn" data-act="minus" type="button">−</button>
          <div class="freezerCount" aria-label="Portionen">${portions} Portion${portions===1?'':'en'}</div>
          <button class="btn" data-act="plus" type="button">+</button>
          <button class="btn red" data-act="remove" type="button">Entfernen</button>
        </div>
      </div>
    `;
  }

  function render(){
    const f = getFreezer();
    const ids = Object.keys(f);
    if(!ids.length){
      host.innerHTML = '<div class="card cardPad">Noch nichts in der Kühltruhe. Öffne ein Rezept und tippe unten auf „Kühltruhe“.</div>';
      return;
    }
    ids.sort((a,b)=>{
      const ta=(byId.get(a)?.title||a); const tb=(byId.get(b)?.title||b);
      return String(ta).localeCompare(String(tb),'de');
    });
    host.innerHTML = `<div class="grid" style="grid-template-columns:1fr">${ids.map(id=>row(id,f[id])).join('')}</div>`;
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

    if(act === 'plus'){
      entry.portions = Math.min(999, Number(entry.portions||0) + 1);
      f[id]=entry;
    }
    if(act === 'minus'){
      entry.portions = Math.max(0, Number(entry.portions||0) - 1);
      if(entry.portions <= 0) delete f[id]; else f[id]=entry;
    }
    if(act === 'remove'){
      delete f[id];
    }
    setFreezer(f);
    render();
  });

  render();
})();
