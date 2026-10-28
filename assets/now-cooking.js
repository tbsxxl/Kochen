// „Kochen läuft“-Kapsel über der unteren Leiste (wie der Mini-Player in Apple Music).
// Erscheint auf jeder Seite, solange ein Kochmodus-Fortschritt (kochbuch.ui.cooking, 12 Std) oder ein Timer läuft.
// Antippen öffnet den Kochmodus beim gespeicherten Schritt; ✕ blendet den Fortschritt aus (Timer laufen weiter).
(function(){
  const COOK_KEY = "kochbuch.ui.cooking";
  const T = window.KOCHBUCH_TIMER;
  const esc = (x)=>String(x ?? "").replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
  let cookOpen = false;

  function cooking(){
    try{
      const c = JSON.parse(localStorage.getItem(COOK_KEY) || "null");
      return c && c.id && c.total && Date.now() - c.t < 12 * 3600e3 ? c : null;
    }catch{ return null; }
  }

  const bar = document.createElement("div");
  bar.className = "nowCooking";
  bar.hidden = true;
  bar.innerHTML = `
    <a class="nowCookingMain pressable" href="#">
      <img class="nowCookingImg" alt="" hidden>
      <span class="nowCookingText"><span class="nowCookingTitle"></span><span class="nowCookingSub"></span></span>
    </a>
    <a class="nowCookingPlay pressable" href="#" aria-label="Kochmodus öffnen"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13a1 1 0 001.5.9l10-6.5a1 1 0 000-1.7l-10-6.5A1 1 0 008 5.5z" fill="currentColor"/></svg></a>
    <button class="nowCookingClose pressable" type="button" aria-label="Ausblenden"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></button>
    <span class="nowCookingBar"><span></span></span>`;
  const $ = (s)=>bar.querySelector(s);

  let target = "";
  function render(){
    const c = cooking();
    const timers = T ? T.list() : [];
    const show = !cookOpen && (c || timers.length);
    bar.hidden = !show;
    document.body.classList.toggle("hasNowCooking", !!show);
    if(!show) return;

    const next = timers.slice().sort((a,b)=>a.left - b.left)[0];
    const done = timers.some(t=>t.done);
    const title = c ? c.title : (next.title || next.label);
    target = c ? c.id + "?kochen=1" : (next.url || "");
    const parts = [];
    if(next) parts.push(done ? "Timer fertig" : `⏱ ${T.fmt(next.left)}${timers.length > 1 ? ` (+${timers.length - 1})` : ""}`);
    if(c) parts.push(`Schritt ${c.step + 1} von ${c.total}`);

    $(".nowCookingTitle").textContent = title || "Kochen";
    $(".nowCookingSub").textContent = parts.join(" · ");
    bar.classList.toggle("isDone", done);
    const img = $(".nowCookingImg");
    if(c && c.image){ if(img.getAttribute("src") !== c.image) img.src = c.image; img.hidden = false; }
    else img.hidden = true;
    $(".nowCookingBar span").style.width = c ? Math.round((c.step + 1) / c.total * 100) + "%" : "0%";
    $(".nowCookingClose").hidden = !c;
    bar.querySelectorAll("a").forEach(a=> a.href = target || "#");
  }

  function open(e){
    // Auf der Seite des Rezepts direkt den Kochmodus öffnen statt neu zu laden
    const here = target && target.split("?")[0] === location.pathname;
    if(here && typeof window.KOCHBUCH_OPENCOOK === "function"){ e.preventDefault(); window.KOCHBUCH_OPENCOOK(); }
    else if(!target){ e.preventDefault(); }
  }
  bar.querySelectorAll("a").forEach(a=> a.addEventListener("click", open));
  $(".nowCookingClose").addEventListener("click", ()=>{
    try{ localStorage.removeItem(COOK_KEY); }catch{}
    render();
  });

  window.addEventListener("kochbuch:cookmode", (e)=>{ cookOpen = !!(e.detail && e.detail.open); render(); });
  window.addEventListener("kochbuch:cooking", render);
  window.addEventListener("storage", (e)=>{ if(e.key === COOK_KEY) render(); });
  window.addEventListener("pageshow", render);

  function init(){
    document.body.appendChild(bar);
    if(T) T.onChange(render); else render();
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
