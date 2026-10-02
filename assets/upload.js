// Rezept hochladen: Formular → Worker (/api/recipes) → Commit ins Repository → Cloudflare baut neu.
(function(){
  const $ = (s)=>document.querySelector(s);
  const A = window.KOCHBUCH_ACCOUNT;
  const UI = window.KOCHBUCH_UI || {};
  const DRAFT_KEY = "kochbuch.ui.uploadDraft";
  const form = $("#uploadForm"), gate = $("#uploadGate"), done = $("#uploadDone");
  const esc = (s)=>String(s??"").replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  if(!form || !A) return;
  const params = new URLSearchParams(location.search);
  const EDIT_PATH = params.get("bearbeiten") || "";        // z. B. _recipes/xyz.md
  const EDIT_PDF = params.get("pdf") || "";
  const BACK_URL = /^\/rezepte\//.test(params.get("zurueck") || "") ? params.get("zurueck") : "/";
  const editing = !!EDIT_PATH;
  const SUG_ID = params.get("vorschlag") || "";               // Besitzer prüft einen Vorschlag
  const reviewing = !editing && !!SUG_ID;
  const rowsMode = editing || reviewing;                      // Zutaten als Zeilen statt Freitext
  let suggesting = false;                                     // Mitglied schlägt ein Rezept vor
  let editSha = null;

  // ---------- Zutaten erkennen ----------
  const UNITS = ["g","kg","mg","ml","l","cl","dl","el","tl","prise","prisen","stück","stk","stk.","dose","dosen","bund","zehe","zehen",
    "scheibe","scheiben","packung","packungen","pck","pck.","päckchen","becher","tasse","tassen","msp","msp.","handvoll","blatt","blätter",
    "zweig","zweige","glas","gläser","würfel","liter","gramm","cm","stange","stangen","knolle","knollen","kopf","köpfe","schuss","spritzer","tropfen","beutel","netz"];
  const UNIT_CASE = { el:"EL", tl:"TL", "stk":"Stk.", "stk.":"Stk.", pck:"Pck.", "pck.":"Pck.", msp:"Msp.", "msp.":"Msp.", liter:"l", gramm:"g" };
  const FRAC = { "½":0.5, "¼":0.25, "¾":0.75, "⅓":1/3, "⅔":2/3 };

  function parseQty(s){
    s = s.trim();
    if(FRAC[s] !== undefined) return FRAC[s];
    const mixed = s.match(/^(\d+)\s*([½¼¾⅓⅔])$/);
    if(mixed) return Number(mixed[1]) + FRAC[mixed[2]];
    const frac = s.match(/^(\d+)\/(\d+)$/);
    if(frac) return Number(frac[1]) / Number(frac[2]);
    if(/^\d+(?:[.,]\d+)?$/.test(s)) return Number(s.replace(",", "."));
    return s.replace(/\s*-\s*/, "–");
  }
  function unitLabel(u){
    const k = u.toLowerCase();
    if(UNIT_CASE[k]) return UNIT_CASE[k];
    if(["g","kg","mg","ml","l","cl","dl","cm"].includes(k)) return k;
    return u.charAt(0).toUpperCase() + u.slice(1);
  }
  function parseIngredient(line){
    let s = line.replace(/^\s*[-•*–]\s*/, "").trim();
    if(!s) return null;
    let qty = "", unit = "";
    if(/\b(nach bedarf|n\.\s?b\.)\s*$/i.test(s)){ qty = "n. B."; s = s.replace(/[,\s]*(nach bedarf|n\.\s?b\.)\s*$/i, "").trim(); }
    const m = s.match(/^((?:\d+\s*[½¼¾⅓⅔]|\d+\/\d+|\d+(?:[.,]\d+)?(?:\s*[-–]\s*\d+(?:[.,]\d+)?)?|[½¼¾⅓⅔]))\s*(.*)$/);
    if(m && !qty){
      qty = parseQty(m[1]);
      s = m[2];
      const u = s.match(/^([A-Za-zÄÖÜäöüß]+\.?)(?=\s|$)/);
      if(u && UNITS.includes(u[1].toLowerCase())){ unit = unitLabel(u[1]); s = s.slice(u[1].length).trim(); }
    }
    s = s.replace(/^(von|vom)\s+/i, "");
    return { qty, unit, item: s };
  }
  const ingredients = ()=> rowsMode ? rowIngredients() : $("#ingIn").value.split(/\n+/).map(parseIngredient).filter(i=>i && i.item);

  // ---------- Zutaten als Zeilen (Bearbeiten) ----------
  const rowsEl = $("#ingRows");
  function fmtQty(q){ return typeof q === "number" ? String(Math.round(q*1000)/1000).replace(".", ",") : String(q ?? ""); }
  function addRow(i = { qty:"", unit:"", item:"" }){
    const row = document.createElement("div");
    row.className = "ingRow";
    row.innerHTML = `<input class="fieldInput ingQty" placeholder="Menge" value="${esc(fmtQty(i.qty))}" aria-label="Menge">
      <input class="fieldInput ingUnit" placeholder="Einheit" value="${esc(i.unit || "")}" aria-label="Einheit">
      <input class="fieldInput ingItem" placeholder="Zutat" value="${esc(i.item || "")}" aria-label="Zutat">
      <button type="button" class="ingRowDel" aria-label="Zutat entfernen">✕</button>`;
    row.querySelector(".ingRowDel").addEventListener("click", ()=> row.remove());
    rowsEl.appendChild(row);
    return row;
  }
  function rowIngredients(){
    return Array.from(rowsEl.querySelectorAll(".ingRow")).map(r=>{
      const raw = r.querySelector(".ingQty").value.trim();
      const n = Number(raw.replace(",", "."));
      return { qty: raw !== "" && isFinite(n) ? n : raw, unit: r.querySelector(".ingUnit").value.trim(), item: r.querySelector(".ingItem").value.trim() };
    }).filter(i=>i.item);
  }
  $("#ingRowAdd").addEventListener("click", ()=> addRow().querySelector(".ingQty").focus());
  // Nummern/Aufzählungszeichen am Zeilenanfang entfernen (aber **fett** am Anfang behalten)
  const steps = ()=> $("#stepsIn").value.split(/\n+/).map(s=>s.replace(/^\s*(?:\d+[.)]\s+|[-•*]\s+)/, "").trim()).filter(Boolean);

  function renderIngPreview(){
    const list = ingredients();
    $("#ingPreview").innerHTML = list.length ? list.map(i=>{
      const q = typeof i.qty === "number" ? String(Math.round(i.qty*100)/100).replace(".", ",") : i.qty;
      return `<div class="ingPrevRow"><span class="ingPrevQty">${esc(`${q} ${i.unit}`.trim()) || "—"}</span><span>${esc(i.item)}</span></div>`;
    }).join("") : "";
  }

  // ---------- Foto ----------
  let photo = null; // { jpg, webp480, webp960 } als Base64
  let photoFile = null;
  function loadImage(file){
    return new Promise((resolve, reject)=>{
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = ()=>{ URL.revokeObjectURL(url); resolve(img); };
      img.onerror = ()=>{ URL.revokeObjectURL(url); reject(new Error("Das Foto konnte nicht gelesen werden.")); };
      img.src = url;
    });
  }
  function toB64(canvas, type, quality){
    return new Promise((resolve)=>{
      canvas.toBlob((blob)=>{
        if(!blob || blob.type !== type) return resolve(null);
        const r = new FileReader();
        r.onload = ()=> resolve(String(r.result).split(",")[1]);
        r.readAsDataURL(blob);
      }, type, quality);
    });
  }
  function draw(img, sx, sw, width){
    const h = img.naturalHeight;
    const w = Math.min(width, sw);
    const c = document.createElement("canvas");
    c.width = Math.round(w); c.height = Math.round(h * w / sw);
    const ctx = c.getContext("2d");
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, sx, 0, sw, h, 0, 0, c.width, c.height);
    return c;
  }
  async function processPhoto(){
    if(!photoFile){ photo = null; return; }
    const img = await loadImage(photoFile);
    const crop = $("#cropIn").checked ? Math.round(img.naturalWidth * 0.07) : 0;
    const sw = img.naturalWidth - 2*crop;
    const main = draw(img, crop, sw, 1600);
    const jpg = await toB64(main, "image/jpeg", 0.82);
    if(!jpg) throw new Error("Das Foto konnte nicht umgewandelt werden.");
    const webp480 = await toB64(draw(img, crop, sw, 480), "image/webp", 0.78);
    const webp960 = webp480 ? await toB64(draw(img, crop, sw, 960), "image/webp", 0.78) : null;
    photo = { jpg, webp480, webp960 };
    const prev = $("#photoPreview");
    prev.src = main.toDataURL("image/jpeg", 0.7);
    prev.hidden = false;
    $("#photoEmpty").hidden = true;
  }
  $("#photoIn").addEventListener("change", async (e)=>{
    photoFile = e.target.files && e.target.files[0] || null;
    try{ await processPhoto(); }catch(err){ showErr(err); }
  });
  $("#cropIn").addEventListener("change", ()=>{ processPhoto().catch(showErr); });

  // ---------- Weitere Kategorien ----------
  const extra = new Set();
  $("#extraCats").addEventListener("click", (e)=>{
    const b = e.target.closest("[data-cat]"); if(!b) return;
    const c = b.dataset.cat;
    extra.has(c) ? extra.delete(c) : extra.add(c);
    b.setAttribute("aria-pressed", String(extra.has(c)));
    b.classList.toggle("pillToggleActive", extra.has(c));
    saveDraft();
  });

  // ---------- Entwurf ----------
  const FIELDS = ["titleIn","subtitleIn","sourceIn","catIn","timeIn","servIn","tagsIn","ingIn","stepsIn","notesIn"];

  // ---------- Stichwörter zum Antippen (Liste aus _data/tags.yml) ----------
  const tagList = ()=> $("#tagsIn").value.split(",").map(s=>s.trim()).filter(Boolean);
  function syncTagChips(){
    const cur = new Set(tagList().map(t=>t.toLowerCase()));
    document.querySelectorAll("#tagPicker [data-tag]").forEach(b=>{
      const on = cur.has(b.dataset.tag.toLowerCase());
      b.setAttribute("aria-pressed", String(on)); b.classList.toggle("pillToggleActive", on);
    });
  }
  $("#tagPicker")?.addEventListener("click", (e)=>{
    const b = e.target.closest("[data-tag]"); if(!b) return;
    const t = b.dataset.tag, cur = tagList();
    const i = cur.findIndex(x=>x.toLowerCase() === t.toLowerCase());
    if(i >= 0) cur.splice(i, 1); else cur.push(t);
    $("#tagsIn").value = cur.join(", ");
    syncTagChips(); saveDraft();
  });
  $("#tagsIn").addEventListener("input", syncTagChips);
  function saveDraft(){
    if(rowsMode) return;
    const d = { extra: [...extra] };
    FIELDS.forEach(id=> d[id] = $("#"+id).value);
    try{ localStorage.setItem(DRAFT_KEY, JSON.stringify(d)); }catch{}
  }
  function loadDraft(){
    let d = null;
    try{ d = JSON.parse(localStorage.getItem(DRAFT_KEY) || "null"); }catch{}
    if(!d) return;
    FIELDS.forEach(id=>{ if(d[id] != null) $("#"+id).value = d[id]; });
    (d.extra || []).forEach(c=>{
      const b = document.querySelector(`#extraCats [data-cat="${CSS.escape(c)}"]`);
      if(b){ extra.add(c); b.setAttribute("aria-pressed","true"); b.classList.add("pillToggleActive"); }
    });
  }
  form.addEventListener("input", ()=>{ saveDraft(); renderIngPreview(); });

  // ---------- Absenden ----------
  function showErr(err){ const el = $("#uploadErr"); el.textContent = (err && err.message) || String(err); el.hidden = false; el.scrollIntoView({ block:"center", behavior:"smooth" }); }

  form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    $("#uploadErr").hidden = true;
    const payload = {
      title: $("#titleIn").value.trim(),
      subtitle: $("#subtitleIn").value.trim(),
      source: $("#sourceIn").value.trim(),
      category: $("#catIn").value,
      categories: [...extra],
      time: $("#timeIn").value.trim(),
      servings: Number($("#servIn").value),
      tags: $("#tagsIn").value.split(",").map(s=>s.trim()).filter(Boolean),
      ingredients: ingredients(),
      steps: editing ? [] : steps(),
      markdown: editing ? $("#stepsIn").value.trim() : undefined,
      notes: editing ? "" : $("#notesIn").value.trim(),
      image: photo || undefined
    };
    if(!payload.title) return showErr("Bitte einen Titel angeben.");
    if(!payload.category) return showErr("Bitte eine Kategorie wählen.");
    if(!payload.ingredients.length) return showErr("Bitte Zutaten eintragen.");
    if(!payload.steps.length && !payload.markdown) return showErr("Bitte die Schritte eintragen.");
    if(!photo && !editing && !confirm(suggesting ? "Ohne Foto vorschlagen?" : "Ohne Foto hochladen?")) return;

    const btn = $("#uploadBtn");
    const label = btn.textContent;
    btn.disabled = true; btn.textContent = editing ? "Wird gespeichert …" : suggesting ? "Wird gesendet …" : "Wird hochgeladen …";
    try{
      if(suggesting){
        await A.api("/api/suggestions", { method: "POST", body: payload });
        try{ localStorage.removeItem(DRAFT_KEY); }catch{}
        showDone("Danke für deinen Vorschlag!", "Er wird angeschaut und dann freigegeben. Den Stand siehst du unter „Vorschläge“.", "/vorschlaege/", "Meine Vorschläge");
        return;
      }
      if(reviewing) payload.suggestion = SUG_ID;
      if(editing){
        await A.api("/api/recipe", { method: "PUT", body: { ...payload, path: EDIT_PATH, sha: editSha, pdf: EDIT_PDF } });
        showDone(`„${payload.title}“ ist gespeichert`, "Cloudflare baut die Seite jetzt neu. In etwa 2 Minuten ist die Änderung online.", BACK_URL, "Zum Rezept");
        return;
      }
      const res = await A.api("/api/recipes", { method: "POST", body: payload });
      try{ localStorage.removeItem(DRAFT_KEY); }catch{}
      form.hidden = true;
      done.hidden = false;
      done.innerHTML = `<div class="card cardPad accountCard uploadSuccess">
        <div class="accountIcon" aria-hidden="true">✓</div>
        <h2 class="h2 accountTitle">„${esc(payload.title)}“ ist hochgeladen</h2>
        <p class="sub">Cloudflare baut die Seite jetzt neu. In etwa 2 Minuten ist das Rezept online.</p>
        <a class="btn action accountBtn" href="${esc(res.url)}">Zum Rezept</a>
        <a class="btn accountBtn" href="${location.pathname}">Noch ein Rezept</a>
      </div>`;
      try{ UI.haptic?.("success"); }catch{}
    }catch(err){
      showErr(err);
    }finally{
      btn.disabled = false; btn.textContent = label;
    }
  });

  function showDone(title, text, href, label){
    form.hidden = true;
    $("#deleteSection").hidden = true;
    done.hidden = false;
    done.innerHTML = `<div class="card cardPad accountCard uploadSuccess">
      <div class="accountIcon" aria-hidden="true">✓</div>
      <h2 class="h2 accountTitle">${esc(title)}</h2>
      <p class="sub">${esc(text)}</p>
      <a class="btn action accountBtn" href="${esc(href)}">${esc(label)}</a>
    </div>`;
    window.scrollTo({ top: 0 });
    try{ UI.haptic?.("success"); }catch{}
  }

  // ---------- Bearbeiten: vorhandenes Rezept laden ----------
  function loadScript(src){
    return new Promise((resolve, reject)=>{
      const s = document.createElement("script");
      s.src = src; s.onload = resolve; s.onerror = ()=>reject(new Error("Bibliothek konnte nicht geladen werden."));
      document.head.appendChild(s);
    });
  }
  async function loadForEdit(){
    document.querySelector(".pageTitleBlock .h1").textContent = "Rezept bearbeiten";
    $("#importCard").hidden = true;
    document.title = "Rezept bearbeiten · " + document.title.split("·").pop().trim();
    $("#uploadBtn").textContent = "Änderungen speichern";
    $("#uploadHint").textContent = "Die Änderung wird direkt übernommen und ist nach ca. 2 Minuten online.";
    $("#ingIn").hidden = true; $("#ingPreview").hidden = true;
    rowsEl.hidden = false; $("#ingRowAdd").hidden = false;
    document.querySelector('label[for="ingIn"]').textContent = "Zutaten";
    document.querySelector('label[for="stepsIn"]').textContent = "Zubereitung (so wie im Rezept: „## Schritte“, dann 1., 2., …)";
    $("#stepsIn").rows = 16;
    $("#notesIn").hidden = true; document.querySelector('label[for="notesIn"]').hidden = true;
    $("#cropIn").checked = false;
    $("#photoEmpty").lastChild.textContent = "Foto ersetzen";

    const [res] = await Promise.all([
      A.api(`/api/recipe?path=${encodeURIComponent(EDIT_PATH)}`),
      window.jsyaml ? null : loadScript("/assets/vendor/js-yaml.min.js")
    ]);
    editSha = res.sha;
    const m = res.content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
    if(!m) throw new Error("Das Rezept hat ein unbekanntes Format.");
    const fm = window.jsyaml.load(m[1]) || {};
    $("#titleIn").value = fm.title || "";
    $("#subtitleIn").value = fm.subtitle || "";
    $("#sourceIn").value = fm.source || "";
    const cat = $("#catIn");
    if(fm.category && !Array.from(cat.options).some(o=>o.value === fm.category)) cat.add(new Option(fm.category, fm.category));
    cat.value = fm.category || "";
    (fm.categories || []).forEach(c=>{
      const b = document.querySelector(`#extraCats [data-cat="${CSS.escape(c)}"]`);
      if(b){ extra.add(c); b.setAttribute("aria-pressed","true"); b.classList.add("pillToggleActive"); }
    });
    $("#timeIn").value = fm.time || "";
    $("#servIn").value = fm.servings || "";
    $("#tagsIn").value = (fm.tags || []).join(", ");
    syncTagChips();
    (fm.ingredients || []).forEach(i=> addRow(i));
    $("#stepsIn").value = m[2].trim();
    if(fm.image){
      const prev = $("#photoPreview");
      prev.src = fm.image; prev.hidden = false;
      $("#photoEmpty").hidden = true;
    }
    $("#deleteSection").hidden = false;
    const hint = document.createElement("p");
    hint.className = "sub"; hint.style.margin = "8px 4px 0";
    hint.textContent = "Tippe aufs Foto, um es zu ersetzen.";
    $("#photoPick").after(hint);
  }

  $("#deleteBtn").addEventListener("click", async ()=>{
    if(!editing) return;
    const title = $("#titleIn").value.trim() || "dieses Rezept";
    if(!confirm(`„${title}“ wirklich löschen? Das lässt sich hier nicht rückgängig machen.`)) return;
    const btn = $("#deleteBtn");
    btn.disabled = true; btn.textContent = "Wird gelöscht …";
    try{
      await A.api("/api/recipe/delete", { method: "POST", body: { path: EDIT_PATH, sha: editSha, pdf: EDIT_PDF } });
      showDone(`„${title}“ ist gelöscht`, "In etwa 2 Minuten ist das Rezept aus dem Kochbuch verschwunden.", "/", "Zur Startseite");
    }catch(err){ showErr(err); btn.disabled = false; btn.textContent = "Rezept löschen"; }
  });

  // ---------- Von einer Webseite übernehmen ----------
  async function importFromUrl(){
    const url = $("#importUrl").value.trim();
    const hint = $("#importHint");
    if(!url){ $("#importUrl").focus(); return; }
    const btn = $("#importBtn");
    btn.disabled = true; btn.textContent = "Lädt …";
    hint.classList.remove("isError");
    try{
      const r = await A.api("/api/import", { method: "POST", body: { url } });
      if(r.title) $("#titleIn").value = r.title;
      if(r.time) $("#timeIn").value = r.time;
      if(r.servings) $("#servIn").value = r.servings;
      if(r.tags && r.tags.length && !$("#tagsIn").value) $("#tagsIn").value = r.tags.join(", ");
      if(r.ingredients && r.ingredients.length) $("#ingIn").value = r.ingredients.join("\n");
      if(r.steps && r.steps.length) $("#stepsIn").value = r.steps.join("\n");
      if(r.source && !$("#notesIn").value) $("#notesIn").value = `Quelle: ${r.source}`;
      if(r.source && !$("#sourceIn").value){ try{ $("#sourceIn").value = new URL(r.source).hostname.replace(/^www\./, ""); }catch{} }
      if(r.image && r.image.data){
        const bin = atob(r.image.data);
        photoFile = new Blob([Uint8Array.from(bin, c=>c.charCodeAt(0))], { type: r.image.type });
        $("#cropIn").checked = false;   // fremde Fotos haben kein KI-Wasserzeichen
        await processPhoto();
      }
      renderIngPreview(); saveDraft();
      hint.textContent = `Übernommen: ${r.ingredients.length} Zutaten, ${r.steps.length} Schritte${r.image ? ", Foto" : ""}. Bitte noch Kategorie wählen und alles prüfen.`;
      try{ UI.haptic?.("success"); }catch{}
      $("#catIn").focus();
    }catch(err){
      hint.textContent = (err && err.message) || String(err);
      hint.classList.add("isError");
    }finally{
      btn.disabled = false; btn.textContent = "Laden";
    }
  }
  $("#importBtn").addEventListener("click", importFromUrl);
  $("#importUrl").addEventListener("keydown", (e)=>{ if(e.key === "Enter"){ e.preventDefault(); importFromUrl(); } });
  // Über das Teilen-Menü oder einen Link direkt mit Adresse geöffnet: /neues-rezept/?import=https://…
  if(params.get("import") && !editing) $("#importUrl").value = params.get("import");

  // ---------- Vorschlag prüfen (Besitzer) ----------
  function setupRowsUi(){
    $("#ingIn").hidden = true; $("#ingPreview").hidden = true;
    rowsEl.hidden = false; $("#ingRowAdd").hidden = false;
    document.querySelector('label[for="ingIn"]').textContent = "Zutaten";
  }
  async function loadSuggestion(){
    const x = await A.api(`/api/suggestions/${encodeURIComponent(SUG_ID)}`);
    if(x.status !== "pending") throw new Error("Dieser Vorschlag wurde schon bearbeitet.");
    const r = x.recipe;
    document.querySelector(".pageTitleBlock .h1").textContent = "Vorschlag prüfen";
    $("#importCard").hidden = true;
    const who = document.createElement("div");
    who.className = "section reviewBanner";
    who.innerHTML = `<span class="authorAvatar" aria-hidden="true">${esc((x.name || "?").charAt(0).toUpperCase())}</span><span>Vorschlag von <b>${esc(x.name)}</b> · ${new Date(x.created).toLocaleDateString("de-DE", { day:"numeric", month:"long" })}. Du kannst alles anpassen, bevor du ihn freigibst.</span>`;
    form.prepend(who);
    setupRowsUi();
    $("#titleIn").value = r.title || "";
    $("#subtitleIn").value = r.subtitle || "";
    $("#sourceIn").value = r.source || "";
    $("#catIn").value = r.category || "";
    (r.categories || []).forEach(c=>{
      const b = document.querySelector(`#extraCats [data-cat="${CSS.escape(c)}"]`);
      if(b){ extra.add(c); b.setAttribute("aria-pressed","true"); b.classList.add("pillToggleActive"); }
    });
    $("#timeIn").value = r.time || "";
    $("#servIn").value = r.servings || "";
    $("#tagsIn").value = (r.tags || []).join(", ");
    syncTagChips();
    (r.ingredients || []).forEach(i=> addRow(i));
    $("#stepsIn").value = (r.steps || []).join("\n");
    $("#notesIn").value = r.notes || "";
    if(x.image && x.image.jpg){
      photo = x.image;                                    // schon aufbereitet → unverändert übernehmen
      const prev = $("#photoPreview");
      prev.src = `/api/suggestions/${encodeURIComponent(SUG_ID)}/image`; prev.hidden = false;
      $("#photoEmpty").hidden = true;
      $("#cropIn").checked = false;
    }
    $("#uploadBtn").textContent = "Freigeben & veröffentlichen";
    $("#uploadHint").textContent = `Das Rezept erscheint im Kochbuch mit „von ${x.name}“ und ist nach ca. 2 Minuten online.`;
    const del = $("#deleteBtn");
    del.textContent = "Vorschlag ablehnen";
    $("#deleteSection").hidden = false;
    del.onclick = async (ev)=>{
      ev.stopImmediatePropagation();
      const reason = prompt(`Vorschlag von ${x.name} ablehnen? Optional eine kurze Begründung:`, "");
      if(reason === null) return;
      try{
        await A.api(`/api/suggestions/${encodeURIComponent(SUG_ID)}/reject`, { method: "POST", body: { reason } });
        showDone("Vorschlag abgelehnt", `${x.name} sieht das unter „Vorschläge“.`, "/vorschlaege/", "Zu den Vorschlägen");
      }catch(err){ showErr(err); }
    };
  }

  function setupSuggesting(me){
    suggesting = true;
    document.querySelector(".pageTitleBlock .h1").textContent = "Rezept vorschlagen";
    document.title = "Rezept vorschlagen · " + document.title.split("·").pop().trim();
    $("#uploadBtn").textContent = "Vorschlag einreichen";
    $("#uploadHint").textContent = "Dein Vorschlag wird angeschaut und dann mit „von " + (me.name || "dir") + "“ ins Kochbuch übernommen. Dein Entwurf bleibt bis dahin auf diesem Gerät gespeichert.";
  }

  // ---------- Start ----------
  (async function(){
    try{
      const me = await A.me();
      if(me.loggedIn && me.role !== "owner" && !rowsMode){
        setupSuggesting(me);
        form.hidden = false; loadDraft(); syncTagChips(); renderIngPreview(); return;
      }
      if(me.loggedIn && me.canUpload && reviewing){
        try{ await loadSuggestion(); form.hidden = false; }
        catch(err){ gate.hidden = false; gate.querySelector(".uEmptyTitle").textContent = "Vorschlag nicht verfügbar"; gate.querySelector(".uEmptyText").textContent = err.message || String(err); gate.querySelector("a.btn")?.remove(); }
        return;
      }
      if(me.loggedIn && me.canUpload){
        if(editing){
          try{ await loadForEdit(); form.hidden = false; }
          catch(err){ gate.hidden = false; gate.querySelector(".uEmptyTitle").textContent = "Rezept konnte nicht geladen werden"; gate.querySelector(".uEmptyText").textContent = err.message || String(err); gate.querySelector("a.btn")?.remove(); }
          return;
        }
        form.hidden = false; loadDraft(); syncTagChips(); renderIngPreview(); return;
      }
      gate.hidden = false;
      if(me.loggedIn && me.role !== "owner"){
        gate.querySelector(".uEmptyTitle").textContent = "Nur für den Besitzer";
        gate.querySelector(".uEmptyText").textContent = "Rezepte hochladen kann nur der Besitzer des Kochbuchs.";
        gate.querySelector("a.btn")?.remove();
      }else if(me.loggedIn && !me.canUpload){
        gate.querySelector(".uEmptyTitle").textContent = "Hochladen noch nicht eingerichtet";
        gate.querySelector(".uEmptyText").textContent = "In Cloudflare fehlt noch das GITHUB_TOKEN (siehe Anleitung).";
      }
    }catch(err){
      gate.hidden = false;
      gate.querySelector(".uEmptyText").textContent = (err && err.message) || "Keine Verbindung.";
    }
  })();
})();
