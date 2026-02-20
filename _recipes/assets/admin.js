(function(){
  const RECIPES_KEY = "kochbuch.localRecipes";
  const ADMIN_KEY = "kochbuch.admin.unlocked";
  const PASSWORD = "tobi"; // ändern

  const $ = (s)=>document.querySelector(s);
  const ls = {
    get(k, fb){ try{ const v = localStorage.getItem(k); return v?JSON.parse(v):fb; }catch{return fb;} },
    set(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch{} }
  };

  const pw = $("#pw");
  const unlock = $("#unlock");
  const adminApp = $("#adminApp");
  const lockBtn = $("#lock");

  const listEl = $("#recipeList");
  const newBtn = $("#newRecipe");

  const titleEl = $("#title");
  const catEl = $("#category");
  const timeEl = $("#time");
  const servingsEl = $("#servings");
  const tagsEl = $("#tags");

  const ingQty = $("#ingQty");
  const ingUnit = $("#ingUnit");
  const ingItem = $("#ingItem");
  const addIng = $("#addIng");
  const ingsEl = $("#ings");

  const bodyEl = $("#body");

  const saveBtn = $("#save");
  const exportBtn = $("#export");
  const delBtn = $("#del");

  const exportBox = $("#exportBox");
  const exportText = $("#exportText");

  let current = null;

  function uid(){ return "local-" + Math.random().toString(16).slice(2) + "-" + Date.now().toString(16); }
  function slugify(s){
    return String(s||"").toLowerCase()
      .replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss")
      .replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"").slice(0,80) || "rezept";
  }
  function unlocked(){ return !!ls.get(ADMIN_KEY, false); }
  function setUnlocked(v){ ls.set(ADMIN_KEY, !!v); }
  function getAll(){ return ls.get(RECIPES_KEY, []); }
  function setAll(v){ ls.set(RECIPES_KEY, v); }

  function showAdmin(){ adminApp.style.display = "block"; }
  function hideAdmin(){ adminApp.style.display = "none"; }

  function resetEditor(){
    current = { id: uid(), title:"", category:"", time:"", servings:1, tags:[], ingredients:[], body:"" };
    fillEditor();
    exportBox.style.display = "none";
  }

  function fillEditor(){
    titleEl.value = current.title || "";
    catEl.value = current.category || "";
    timeEl.value = current.time || "";
    servingsEl.value = String(current.servings || 1);
    tagsEl.value = (current.tags||[]).join(", ");
    bodyEl.value = current.body || "";
    renderIngredients();
  }

  function readEditor(){
    const s = Number(String(servingsEl.value||"1").replace(",", "."));
    current.title = String(titleEl.value||"").trim();
    current.category = String(catEl.value||"").trim();
    current.time = String(timeEl.value||"").trim();
    current.servings = (isFinite(s) && s>0) ? s : 1;
    current.tags = String(tagsEl.value||"").split(",").map(t=>t.trim()).filter(Boolean);
    current.body = String(bodyEl.value||"");
  }

  function renderIngredients(){
    ingsEl.innerHTML = "";
    (current.ingredients||[]).forEach((i, idx)=>{
      const row = document.createElement("div");
      row.className = "ingRow";

      const left = document.createElement("div");
      left.className = "ingLeft";
      const name = document.createElement("div");
      name.className = "ingName";
      name.textContent = i.item;
      left.appendChild(name);

      const qty = document.createElement("div");
      qty.className = "ingQty";
      qty.textContent = `${i.qty ?? ""} ${i.unit||""}`.trim();

      const btn = document.createElement("button");
      btn.className = "smallBtn";
      btn.textContent = "×";
      btn.addEventListener("click", ()=>{
        current.ingredients.splice(idx, 1);
        renderIngredients();
      });

      row.appendChild(left);
      row.appendChild(qty);
      row.appendChild(btn);
      ingsEl.appendChild(row);
    });
  }

  function renderList(){
    const all = getAll().slice().sort((a,b)=>String(a.title).localeCompare(String(b.title), "de"));
    listEl.innerHTML = "";
    if(!all.length){
      const empty = document.createElement("div");
      empty.className = "dim";
      empty.textContent = "Noch keine lokalen Rezepte.";
      listEl.appendChild(empty);
      return;
    }
    all.forEach(r=>{
      const row = document.createElement("div");
      row.className = "ingRow";

      const left = document.createElement("div");
      left.className = "ingLeft";
      const name = document.createElement("div");
      name.className = "ingName";
      name.textContent = r.title || "(ohne Titel)";
      left.appendChild(name);

      const meta = document.createElement("div");
      meta.className = "ingQty";
      meta.textContent = r.category || "";

      const edit = document.createElement("button");
      edit.className = "smallBtn";
      edit.textContent = "✎";
      edit.addEventListener("click", ()=>{
        current = JSON.parse(JSON.stringify(r));
        fillEditor();
        exportBox.style.display = "none";
        window.scrollTo({top:0, behavior:"smooth"});
      });

      row.appendChild(left);
      row.appendChild(meta);
      row.appendChild(edit);
      listEl.appendChild(row);
    });
  }

  function save(){
    readEditor();
    if(!current.title){ alert("Titel fehlt."); return; }
    const all = getAll();
    const idx = all.findIndex(x=>x.id===current.id);
    if(idx>=0) all[idx] = current; else all.push(current);
    setAll(all);
    renderList();
    alert("Gespeichert (lokal).");
  }

  function removeCurrent(){
    if(!current?.id) return;
    setAll(getAll().filter(x=>x.id!==current.id));
    renderList();
    resetEditor();
  }

  function toMarkdown(r){
    const file = slugify(r.title) + ".md";
    const yml = [];
    yml.push("---");
    yml.push(`title: "${String(r.title).replace(/"/g,'\\\"')}"`);
    yml.push(`date: ${new Date().toISOString().slice(0,10)}`);
    if(r.category) yml.push(`category: "${String(r.category).replace(/"/g,'\\\"')}"`);
    if(r.time) yml.push(`time: "${String(r.time).replace(/"/g,'\\\"')}"`);
    yml.push(`servings: ${Number(r.servings||1)}`);
    if(r.tags?.length) yml.push(`tags: [${r.tags.map(t=>`"${String(t).replace(/"/g,'\\\"')}"`).join(", ")}]`);
    yml.push("ingredients:");
    (r.ingredients||[]).forEach(i=>{
      const qty = (i.qty===null || i.qty===undefined || i.qty==="") ? '""' : i.qty;
      const unit = String(i.unit||"").replace(/"/g,'\\\"');
      const item = String(i.item||"").replace(/"/g,'\\\"');
      yml.push(`  - { qty: ${qty}, unit: "${unit}", item: "${item}" }`);
    });
    yml.push("---\n");
    yml.push(r.body || "## Schritte\n1. ...\n");
    return { file, text: yml.join("\n") };
  }

  function init(){
    if(unlocked()){ showAdmin(); renderList(); resetEditor(); }
    else hideAdmin();
  }

  unlock?.addEventListener("click", ()=>{
    if((pw.value||"") === PASSWORD){
      setUnlocked(true);
      showAdmin();
      renderList();
      resetEditor();
    }else alert("Falsches Passwort.");
  });

  lockBtn?.addEventListener("click", ()=>{ setUnlocked(false); hideAdmin(); });

  newBtn?.addEventListener("click", resetEditor);

  addIng?.addEventListener("click", ()=>{
    const it = String(ingItem.value||"").trim();
    if(!it){ alert("Zutat fehlt."); return; }
    const qRaw = String(ingQty.value||"").trim();
    const u = String(ingUnit.value||"").trim();
    const qn = Number(qRaw.replace(",", "."));
    const qty = (qRaw && isFinite(qn)) ? qn : (qRaw || "");
    current.ingredients.push({ qty, unit:u, item:it });
    ingQty.value=""; ingUnit.value=""; ingItem.value="";
    renderIngredients();
  });

  saveBtn?.addEventListener("click", save);
  delBtn?.addEventListener("click", ()=>{ if(confirm("Rezept lokal löschen?")) removeCurrent(); });
  exportBtn?.addEventListener("click", ()=>{
    readEditor();
    if(!current.title){ alert("Titel fehlt."); return; }
    const out = toMarkdown(current);
    exportText.value = out.text;
    exportBox.style.display = "block";
    exportText.focus(); exportText.select();
  });

  init();
})();