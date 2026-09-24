// Rezept hochladen: Formular → Worker (/api/recipes) → Commit ins Repository → Cloudflare baut neu.
(function(){
  const $ = (s)=>document.querySelector(s);
  const A = window.KOCHBUCH_ACCOUNT;
  const UI = window.KOCHBUCH_UI || {};
  const DRAFT_KEY = "kochbuch.ui.uploadDraft";
  const form = $("#uploadForm"), gate = $("#uploadGate"), done = $("#uploadDone");
  const esc = (s)=>String(s??"").replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  if(!form || !A) return;

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
  const ingredients = ()=> $("#ingIn").value.split(/\n+/).map(parseIngredient).filter(i=>i && i.item);
  const steps = ()=> $("#stepsIn").value.split(/\n+/).map(s=>s.replace(/^\s*(\d+[.)]|[-•*])\s*/, "").trim()).filter(Boolean);

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
  const FIELDS = ["titleIn","catIn","timeIn","servIn","tagsIn","ingIn","stepsIn","notesIn"];
  function saveDraft(){
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
      category: $("#catIn").value,
      categories: [...extra],
      time: $("#timeIn").value.trim(),
      servings: Number($("#servIn").value),
      tags: $("#tagsIn").value.split(",").map(s=>s.trim()).filter(Boolean),
      ingredients: ingredients(),
      steps: steps(),
      notes: $("#notesIn").value.trim(),
      image: photo || undefined
    };
    if(!payload.title) return showErr("Bitte einen Titel angeben.");
    if(!payload.category) return showErr("Bitte eine Kategorie wählen.");
    if(!payload.ingredients.length) return showErr("Bitte Zutaten eintragen.");
    if(!payload.steps.length) return showErr("Bitte die Schritte eintragen.");
    if(!photo && !confirm("Ohne Foto hochladen?")) return;

    const btn = $("#uploadBtn");
    btn.disabled = true; btn.textContent = "Wird hochgeladen …";
    try{
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
      btn.disabled = false; btn.textContent = "Rezept veröffentlichen";
    }
  });

  // ---------- Start ----------
  (async function(){
    try{
      const me = await A.me();
      if(me.loggedIn && me.canUpload){ form.hidden = false; loadDraft(); renderIngPreview(); return; }
      gate.hidden = false;
      if(me.loggedIn && !me.canUpload){
        gate.querySelector(".uEmptyTitle").textContent = "Hochladen noch nicht eingerichtet";
        gate.querySelector(".uEmptyText").textContent = "In Cloudflare fehlt noch das GITHUB_TOKEN (siehe Anleitung).";
      }
    }catch(err){
      gate.hidden = false;
      gate.querySelector(".uEmptyText").textContent = (err && err.message) || "Keine Verbindung.";
    }
  })();
})();
