// Skin „Jahr 3000“ (Dez. 2026, mehr eigener Charakter): Comic. Start = Titelbild mit Sprechblase und „Zack!“-Stern zum Tagesgericht;
// Rezeptliste = Comicseite aus Bildfeldern verschiedener Größe mit gelben Erzählkästen; Rezeptseite = großes Bildfeld mit Ausruf.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const SAY = ["Mmmh!", "Lecker!", "Zack!", "Wow!", "Hunger!", "Yeah!"];

  function home(api){
    const g = document.querySelector(".homeGreeting"); if(!g) return;
    const a = document.getElementById("todayLink"), title = a?.querySelector(".homeFeaturedTitle")?.textContent.trim();
    if(!title) return;
    const img = a.querySelector("img")?.currentSrc || a.querySelector("img")?.src || "";
    const el = api.bit("cmCover", "jahr3000");
    el.innerHTML = `<a class="cmPanel cmBig" href="${esc(a.getAttribute("href"))}">${img ? `<img src="${esc(img)}" alt="">` : ""}
      <span class="cmBox">Heft Nr. ${new Date().getDate()} · Im Jahr 3000 wird noch gekocht …</span>
      <span class="cmBubble">Heute gibt’s ${esc(title)}!</span><span class="cmBang">Zack!</span></a>`;
    g.after(el); api.add(()=> el.remove());
  }

  function list(api){
    const grid = document.getElementById("recipeGrid"); if(!grid) return;
    grid.querySelectorAll(".linkCard").forEach((c, i)=> c.style.setProperty("--say", `"${SAY[i % SAY.length]}"`));
    document.documentElement.classList.add("cmList"); api.add(()=> document.documentElement.classList.remove("cmList"));
  }

  function recipe(api){
    const hero = document.querySelector(".recipePageHero"); if(!hero) return;
    const b = api.bit("cmBang cmBangHero", "jahr3000", "span"); b.setAttribute("aria-hidden", "true"); b.textContent = "Mmmh!";
    hero.append(b); api.add(()=> b.remove());
  }

  window.KOCHBUCH_FX.jahr3000 = { start(api){ if(api.home()) home(api); list(api); recipe(api); }, refresh(api){ list(api); } };
})();
