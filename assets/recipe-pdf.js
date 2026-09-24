// Rezept als PDF speichern (ohne Druckdialog, funktioniert auch in der iPhone-Homescreen-App).
// jsPDF wird erst geladen, wenn das Rezept-Menü geöffnet wird. Das PDF wird schon beim Öffnen
// vorbereitet, damit das Teilen-Menü direkt im Tipp aufgehen kann (iOS verlangt eine direkte Nutzeraktion).
(function(){
  const data = window.RECIPE_DATA;
  const btn = document.getElementById('pdfBtn');
  if(!data || !btn) return;

  const LIB = btn.getAttribute('data-lib');
  const STATIC_PDF = btn.getAttribute('data-pdf');          // vorab erzeugtes PDF (Originalportionen)
  const BASE = String(data.baseServings || "");
  let libPromise = null;
  let prepared = null;        // { key, file }
  let preparing = null;
  let lastError = null;

  function loadLib(){
    if(window.jspdf) return Promise.resolve();
    if(!libPromise){
      libPromise = new Promise((resolve, reject)=>{
        const s = document.createElement('script');
        s.src = LIB; s.onload = resolve; s.onerror = ()=>{ libPromise = null; reject(new Error('jsPDF nicht geladen')); };
        document.head.appendChild(s);
      });
    }
    return libPromise;
  }

  // Standard-PDF-Schriften kennen nur WinAnsi-Zeichen; alles andere ersetzen.
  const WINANSI_EXTRA = "€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ";
  function clean(s){
    return String(s || "")
      .replace(/[   ]/g, " ")
      .replace(/−/g, "-")
      .replace(/⅓/g, "1/3").replace(/⅔/g, "2/3").replace(/¼/g, "1/4").replace(/¾/g, "3/4")
      .replace(/[^\x00-\xff]/g, ch => WINANSI_EXTRA.includes(ch) ? ch : "")
      .replace(/\s+/g, " ").trim();
  }

  function currentKey(){
    return document.getElementById('servingsInput')?.value || "";
  }

  function heroDataUrl(){
    const img = document.querySelector('.recipeHeroImg');
    if(!img || !img.complete || !img.naturalWidth) return null;
    try{
      const ratio = 16/9;
      let sw = img.naturalWidth, sh = Math.round(sw / ratio);
      if(sh > img.naturalHeight){ sh = img.naturalHeight; sw = Math.round(sh * ratio); }
      const sx = Math.round((img.naturalWidth - sw) / 2), sy = Math.round((img.naturalHeight - sh) / 2);
      const w = Math.min(1200, sw), h = Math.round(w / ratio);
      const c = document.createElement('canvas'); c.width = w; c.height = h;
      c.getContext('2d').drawImage(img, sx, sy, sw, sh, 0, 0, w, h);
      return c.toDataURL('image/jpeg', 0.82);
    }catch{ return null; }
  }

  function collect(){
    const meta = [];
    const time = document.querySelector('.kvRow .kv span:last-child')?.textContent;
    if(time) meta.push(clean(time));
    const servings = currentKey();
    if(servings) meta.push(`${servings} ${servings === "1" ? "Portion" : "Portionen"}`);
    const cat = document.querySelector('.recipePageHero .heroOverlayCat')?.textContent;
    if(cat) meta.unshift(clean(cat));

    const ingredients = Array.from(document.querySelectorAll('#ingredientsList .uRow')).map(row => ({
      name: clean(row.querySelector('.uName')?.textContent),
      qty: clean(row.querySelector('.uRight')?.textContent)
    }));

    // Inhalt der Anleitung in Reihenfolge: Überschriften, nummerierte Schritte, Aufzählungen, Absätze
    const blocks = [];
    const body = document.querySelector('.recipeBody');
    if(body){
      for(const el of body.children){
        const tag = el.tagName;
        if(/^H[1-6]$/.test(tag)) blocks.push({ type:'h', text: clean(el.textContent) });
        else if(tag === 'OL') Array.from(el.children).forEach((li, i)=> blocks.push({ type:'step', n: i+1, text: clean(li.textContent) }));
        else if(tag === 'UL') Array.from(el.children).forEach(li => blocks.push({ type:'bullet', text: clean(li.textContent) }));
        else if(tag === 'P' || tag === 'BLOCKQUOTE') blocks.push({ type:'p', text: clean(el.textContent) });
      }
    }
    return { title: clean(data.title), meta: meta.join("  ·  "), ingredients, blocks, image: heroDataUrl() };
  }

  function build(r){
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit:'mm', format:'a4' });
    const W = 210, H = 297, M = 18, CW = W - 2*M;
    const INK = [37,42,39], SUB = [113,110,103], LINE = [229,222,212], ACCENT = [232,117,61];
    let y = M;

    function footer(){
      doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(...SUB);
      doc.text('Tobis Kochbuch', M, H - 10);
      doc.text(String(doc.getNumberOfPages()), W - M, H - 10, { align:'right' });
    }
    function ensure(space){
      if(y + space > H - 18){ footer(); doc.addPage(); y = M; }
    }

    if(r.image){
      const ih = CW * 9/16;
      doc.addImage(r.image, 'JPEG', M, y, CW, ih, undefined, 'FAST');
      y += ih + 8;
    }

    doc.setTextColor(...INK);
    doc.setFont('times','bold'); doc.setFontSize(22);
    const titleLines = doc.splitTextToSize(r.title, CW);
    doc.text(titleLines, M, y + 6); y += titleLines.length * 8.5 + 2;

    if(r.meta){
      doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(...SUB);
      doc.text(r.meta, M, y + 3); y += 9;
    }

    // Zutaten
    if(r.ingredients.length){
      ensure(16);
      doc.setDrawColor(...ACCENT); doc.setLineWidth(0.6); doc.line(M, y, M + 12, y); y += 6;
      doc.setFont('helvetica','bold'); doc.setFontSize(13); doc.setTextColor(...INK);
      doc.text('Zutaten', M, y); y += 6;
      doc.setFontSize(10);
      const qtyW = 38;
      for(const ing of r.ingredients){
        doc.setFont('helvetica','normal');
        const lines = doc.splitTextToSize(ing.name, CW - qtyW - 4);
        const h = lines.length * 4.6 + 2.4;
        ensure(h);
        doc.setTextColor(...INK); doc.text(lines, M, y + 3.6);
        doc.setFont('helvetica','bold'); doc.text(ing.qty, W - M, y + 3.6, { align:'right' });
        y += h;
        doc.setDrawColor(...LINE); doc.setLineWidth(0.2); doc.line(M, y - 1, W - M, y - 1);
      }
      y += 6;
    }

    // Anleitung
    for(const b of r.blocks){
      if(!b.text) continue;
      if(b.type === 'h'){
        ensure(14);
        doc.setFont('helvetica','bold'); doc.setFontSize(13); doc.setTextColor(...INK);
        doc.text(b.text, M, y + 4); y += 9;
        continue;
      }
      doc.setFont('helvetica','normal'); doc.setFontSize(10.5); doc.setTextColor(...INK);
      const indent = b.type === 'p' ? 0 : 9;
      const lines = doc.splitTextToSize(b.text, CW - indent);
      const h = lines.length * 5 + 3;
      ensure(h);
      if(b.type === 'step'){
        doc.setFillColor(251,228,214); doc.circle(M + 3, y + 2.4, 3, 'F');
        doc.setFont('helvetica','bold'); doc.setFontSize(8.5); doc.setTextColor(...INK);
        doc.text(String(b.n), M + 3, y + 3.4, { align:'center' });
        doc.setFont('helvetica','normal'); doc.setFontSize(10.5);
      }else if(b.type === 'bullet'){
        doc.setFillColor(...SUB); doc.circle(M + 3, y + 2.2, 0.8, 'F');
      }
      doc.text(lines, M + indent, y + 3.6);
      y += h;
    }

    footer();
    return doc.output('blob');
  }

  function fileName(){
    return btn.getAttribute('data-pdf-name') || 'rezept.pdf';
  }

  // Vorab erzeugtes PDF laden (kein jsPDF nötig; funktioniert in jedem Browser)
  function staticFile(){
    return fetch(STATIC_PDF, { cache:'no-cache' })
      .then(r => { if(!r.ok) throw new Error('PDF ' + r.status); return r.blob(); })
      .then(b => new File([b], fileName(), { type:'application/pdf' }));
  }

  function prepare(){
    const key = currentKey();
    if(prepared && prepared.key === key) return Promise.resolve(prepared);
    if(preparing) return preparing;
    const useStatic = STATIC_PDF && (key === BASE || !key);
    const make = useStatic
      ? staticFile()
      : loadLib().then(()=> new File([build(collect())], fileName(), { type:'application/pdf' }))
          .catch(err => {
            // Live-Erzeugung fehlgeschlagen → fertiges PDF mit Originalportionen
            console.error('PDF live:', err);
            lastError = err;
            if(!STATIC_PDF) throw err;
            return staticFile();
          });
    preparing = make.then(file => (prepared = { key, file }))
      .finally(()=>{ preparing = null; });
    return preparing;
  }

  function download(file){
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url; a.download = file.name; a.rel = 'noopener';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=> URL.revokeObjectURL(url), 60000);
  }

  async function deliver(file){
    if(navigator.canShare && navigator.canShare({ files:[file] })){
      try{ await navigator.share({ files:[file], title: data.title }); return; }
      catch(e){ if(e && e.name === 'AbortError') return; }
    }
    download(file);
  }

  const label = btn.querySelector('[data-label]');
  function setBusy(on){ btn.disabled = on; if(label) label.textContent = on ? 'PDF wird erstellt …' : 'Als PDF speichern'; }

  // Beim Öffnen des Rezept-Menüs schon vorbereiten
  document.getElementById('recipeMoreBtn')?.addEventListener('click', ()=>{ prepare().catch(()=>{}); });

  btn.addEventListener('click', async ()=>{
    const key = currentKey();
    if(prepared && prepared.key === key){ deliver(prepared.file); return; }   // direkt im Tipp → Teilen-Menü darf aufgehen
    setBusy(true);
    try{ const p = await prepare(); await deliver(p.file); }
    catch(err){
      console.error('PDF:', err);
      alert('Das PDF konnte nicht erstellt werden.\n\nFehler: ' + String(err && (err.message || err)).slice(0, 160));
    }
    finally{ setBusy(false); }
  });

  // buildLive: für tools/build-pdfs.js (erzeugt die vorab gespeicherten PDFs)
  window.KOCHBUCH_PDF = { prepare, collect, buildLive: ()=> loadLib().then(()=> build(collect())) };
})();
