// Skin „Galerie“ (Dez. 2026, zweiter Neubau nach genauem Vergleich mit dem Vorbild – einer Kunst-Ausgabe eines Shop-Anbieters):
// Startseite beginnt mit einem selbst gemalten Winterbild über die ganze Fläche, mittig ein dünner weißer Rahmen mit Titel und
// Inhaltsverzeichnis (Kategorien mit römischen Kapitelzahlen); beim Scrollen schrumpft der Rahmen, ein Funkelring öffnet sich.
// Darunter Kapitel: dunkles Band mit riesigem weißem Wort und Satz mit verziertem Anfangsbuchstaben, eingerissener Papierrand in die
// graubeige Seite. Am Rechner steht das Inhaltsverzeichnis links fest. Die Malerei: Pinselstriche auf drei Leinwänden (Himmel, Hügel, See).
(()=>{
  "use strict";
  const TAU = Math.PI * 2;
  let seed = 11;
  const rnd = ()=>{ seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  const mix = (a, b, f)=> a.map((v, i)=> Math.round(v + (b[i] - v) * f));
  const hex = (h)=> [1, 3, 5].map((i)=> parseInt(h.slice(i, i + 2), 16));
  const SKY = [[0, hex("#1E2C44")], [.38, hex("#3C5370")], [.62, hex("#7D8FA3")], [.8, hex("#C9B591")], [1, hex("#E7D8B8")]];
  const skyAt = (f)=>{ for(let i = 1; i < SKY.length; i++) if(f <= SKY[i][0]){ const [a, ca] = SKY[i - 1], [b, cb] = SKY[i]; return mix(ca, cb, (f - a) / (b - a)); } return SKY[SKY.length - 1][1]; };

  // Pinselstrich: längliche, leicht gedrehte Ellipse mit wenig Deckkraft
  const stroke = (g, x, y, w, h, col, a, rot)=>{ g.save(); g.globalAlpha = a; g.fillStyle = `rgb(${col.join(",")})`; g.translate(x, y); g.rotate(rot); g.beginPath(); g.ellipse(0, 0, w, h, 0, 0, TAU); g.fill(); g.restore(); };

  function paintSky(g, W, H){
    seed = 11;
    const gr = g.createLinearGradient(0, 0, 0, H);
    SKY.forEach(([f, c])=> gr.addColorStop(f, `rgb(${c.join(",")})`));
    g.fillStyle = gr; g.fillRect(0, 0, W, H);
    const n = Math.round(W * H / 900);
    for(let i = 0; i < n; i++){
      const y = rnd() * H, f = y / H, col = mix(skyAt(f), rnd() < .5 ? [255, 244, 220] : [40, 58, 84], rnd() * .25);
      stroke(g, rnd() * W, y, 14 + rnd() * 40, 2 + rnd() * 4, col, .18 + rnd() * .2, (rnd() - .5) * .25);
    }
    // tief stehende Wintersonne mit Schein
    const sx = W * .8, sy = H * .5, sg = g.createRadialGradient(sx, sy, 2, sx, sy, Math.min(W, H) * .45);
    sg.addColorStop(0, "rgba(255,240,205,.85)"); sg.addColorStop(.12, "rgba(255,226,170,.45)"); sg.addColorStop(1, "rgba(255,226,170,0)");
    g.fillStyle = sg; g.fillRect(0, 0, W, H);
    g.fillStyle = "rgba(255,246,224,.95)"; g.beginPath(); g.arc(sx, sy, Math.max(8, H * .035), 0, TAU); g.fill();
  }

  function ridge(g, W, base, amp, col, light, seedN){
    seed = seedN;
    const pts = [];
    for(let x = -10; x <= W + 10; x += 6){
      pts.push([x, base - amp * (.5 + .3 * Math.sin(x / W * 5.1 + seedN) + .2 * Math.sin(x / W * 13.7 + seedN * 2)) - rnd() * amp * .06]);
    }
    g.fillStyle = `rgb(${col.join(",")})`;
    g.beginPath(); g.moveTo(-10, base + amp * 3); pts.forEach(([x, y])=> g.lineTo(x, y)); g.lineTo(W + 10, base + amp * 3); g.closePath(); g.fill();
    // Pinselstriche auf dem Hang, oben heller (Schnee/Licht)
    for(let i = 0; i < pts.length * 3; i++){
      const p = pts[Math.floor(rnd() * pts.length)], y = p[1] + rnd() * amp * 1.6;
      stroke(g, p[0] + (rnd() - .5) * 12, y, 8 + rnd() * 18, 1.5 + rnd() * 2.5, mix(col, light, Math.max(0, .7 - (y - p[1]) / (amp * 1.6)) * rnd()), .35, (rnd() - .5) * .5);
    }
  }

  function tree(g, x, y, h){
    for(let i = 0; i < 7; i++){
      const f = i / 6, w = h * (.38 - f * .3);
      stroke(g, x + (rnd() - .5) * 2, y - f * h, w, h * .07, [34, 46, 42], .85, (rnd() - .5) * .2);
      stroke(g, x - w * .3, y - f * h - h * .03, w * .5, h * .035, [226, 232, 234], .7, -.2);
    }
    stroke(g, x, y + h * .06, 2, h * .1, [40, 34, 30], .9, 0);
  }

  function figure(g, x, y, s, scarf, lean){
    g.save(); g.translate(x, y); g.rotate(lean);
    stroke(g, 0, -s * .9, s * .26, s * .55, [34, 38, 43], .95, 0);          // Körper
    stroke(g, 0, -s * 1.62, s * .2, s * .2, [218, 190, 165], 1, 0);          // Kopf
    stroke(g, s * .05, -s * 1.32, s * .3, s * .08, scarf, 1, .2);            // Schal
    stroke(g, -s * .12, -s * .2, s * .07, s * .3, [34, 38, 43], .95, .25);   // Beine
    stroke(g, s * .14, -s * .22, s * .07, s * .3, [34, 38, 43], .95, -.5);
    g.restore();
    stroke(g, x, y + 1, s * .5, s * .08, [120, 140, 160], .35, 0);           // Spiegelung auf dem Eis
  }

  function paintNear(g, W, H){
    seed = 29;
    const ground = H * .78;
    g.fillStyle = "rgb(224,230,233)"; g.fillRect(0, ground, W, H - ground);
    for(let i = 0; i < W / 3; i++) stroke(g, rnd() * W, ground + rnd() * (H - ground), 10 + rnd() * 26, 1.5 + rnd() * 2, rnd() < .6 ? [205, 214, 222] : [242, 244, 245], .5, (rnd() - .5) * .1);
    // zugefrorener See
    const lx = W * .5, ly = ground + (H - ground) * .45;
    g.save(); g.globalAlpha = .9; g.fillStyle = "rgb(176,196,212)"; g.beginPath(); g.ellipse(lx, ly, W * .36, (H - ground) * .32, 0, 0, TAU); g.fill(); g.restore();
    for(let i = 0; i < 40; i++) stroke(g, lx + (rnd() - .5) * W * .6, ly + (rnd() - .5) * (H - ground) * .4, 12 + rnd() * 20, 1, [222, 232, 240], .45, (rnd() - .5) * .08);
    // Bäume links und rechts, kleine Läufer auf dem Eis
    const th = Math.min(70, H * .22);
    [[.04, 1], [.1, .8], [.16, .95], [.88, .85], [.95, 1.05]].forEach(([fx, s])=> tree(g, W * fx, ground + 4, th * s));
    const fs = Math.max(9, Math.min(16, H * .05));
    figure(g, lx - W * .1, ly + 2, fs, [178, 58, 46], -.18);
    figure(g, lx + W * .02, ly - 1, fs * .92, [201, 160, 74], -.12);
    figure(g, lx + W * .16, ly + 3, fs * .8, [70, 96, 140], .1);
  }

  const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  const TOC = ["Schnell", "Pasta", "Curry", "Suppen & Eintöpfe", "Schmorgerichte", "Burger & Sandwiches", "Süßes & Backen", "Wochenendprojekt"];
  const STAR = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>`;
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const cats = ()=>{ let c = []; try{ c = JSON.parse(document.getElementById("homeCats")?.textContent || "null") || []; }catch{} return c.length ? TOC.filter((x)=> c.includes(x)) : TOC; };
  const tocHtml = ()=> `<ol class="gaToc">${cats().map((c, i)=> `<li><a href="/rezeptindex/?kategorie=${encodeURIComponent(c)}"><span>${esc(c)}</span><i>${ROMAN[i]}</i></a></li>`).join("")}</ol>`;
  const logo = `<span class="gaLogo">Tobis<br>Koch<b>${STAR}</b>buch</span>`;

  // gemaltes Bild in einen Behälter (drei Ebenen, Parallaxe beim Scrollen)
  function painting(api, host){
    const mk = (cls)=>{ const d = document.createElement("div"); d.className = `glPaint ${cls}`; host.appendChild(d); return d; };
    const L = [mk("glSky"), mk("glFar"), mk("glNear")];
    const cv = L.map((d)=> api.canvas(d, ""));
    const paint = ()=>{
      const [a, b, n] = cv;
      if(!a.w) return;
      paintSky(a.g, a.w, a.h);
      b.g.clearRect(0, 0, b.w, b.h);
      ridge(b.g, b.w, b.h * .7, b.h * .16, [94, 112, 136], [214, 222, 232], 3);
      ridge(b.g, b.w, b.h * .76, b.h * .12, [70, 88, 108], [200, 210, 222], 7);
      n.g.clearRect(0, 0, n.w, n.h);
      paintNear(n.g, n.w, n.h);
    };
    cv.forEach((o)=>{ o.onresize = ()=>{ clearTimeout(paint.t); paint.t = setTimeout(paint, 30); }; });
    paint();
    const SPEED = [.45, .22, 0];
    const par = ()=>{ if(api.reduce()) return; const y = Math.min(scrollY, 900); L.forEach((d, i)=>{ d.style.transform = `translate3d(0,${(y * SPEED[i]).toFixed(1)}px,0)`; }); };
    api.on(window, "scroll", ()=> requestAnimationFrame(par), { passive: true });
    par();
  }

  // Funkelring in der Bildmitte, öffnet sich beim Scrollen
  function sparkle(api, host){
    const c = api.canvas(host, "gaSpark"), P = [];
    for(let i = 0; i < 260; i++) P.push({ a: Math.random() * TAU, r: .8 + Math.random() * .4, s: .6 + Math.random() * 1.8, tw: Math.random() * TAU });
    api.loop(c.cv, (t)=>{
      const g = c.g, w = c.w, h = c.h; if(!w) return;
      g.clearRect(0, 0, w, h);
      const p = Math.min(1, scrollY / (innerHeight * .7)); if(p < .02) return;
      const R = Math.min(w, h) * (.06 + p * .2), cx = w / 2, cy = h * .46;
      g.globalCompositeOperation = "lighter";
      P.forEach((q)=>{
        const a = q.a + t * .0003, rr = R * q.r, x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr * .95, al = (.4 + .6 * Math.abs(Math.sin(t * .004 + q.tw))) * p;
        g.fillStyle = `rgba(255,${230 + Math.round(q.s * 10)},200,${al.toFixed(3)})`; g.fillRect(x, y, q.s, q.s);
      });
      g.globalCompositeOperation = "source-over";
    });
  }

  function hero(api){
    const host = document.querySelector(".homeGreeting");
    if(!host) return null;
    const el = api.bit("gaHero", "galerie");
    const n = api.recipes().length;
    el.innerHTML = `<div class="gaFrame">${logo}<p class="gaLead">Die Winter-Ausgabe. ${n} Rezepte für kalte Tage und lange Abende.</p>${tocHtml()}</div>`;
    host.prepend(el); api.add(()=> el.remove());
    painting(api, el); sparkle(api, el);
    const fr = el.querySelector(".gaFrame");
    if(!api.reduce()) api.on(window, "scroll", ()=>{ const p = Math.min(1, scrollY / (innerHeight * .8)); fr.style.transform = `translate(-50%,-50%) scale(${(1 - p * .25).toFixed(3)})`; fr.style.opacity = (1 - p * 1.1).toFixed(3); }, { passive: true });
    document.body.classList.add("gaHome"); api.add(()=> document.body.classList.remove("gaHome"));
    return el;
  }

  // Kapitel „Heute“: dunkles Band, riesiges Wort, Satz mit verziertem Anfangsbuchstaben, eingerissener Rand
  function chapter(api, after){
    const a = document.getElementById("todayLink"), title = a?.querySelector(".homeFeaturedTitle")?.textContent.trim();
    if(!a || !title) return;
    const meta = [...a.querySelectorAll(".recipeMeta .metaItem")].map((m)=> m.textContent.trim()).filter(Boolean).join(", ");
    const el = api.bit("gaChapter", "galerie", "section");
    el.innerHTML = `<p class="gaBig" aria-hidden="true">Heute</p><p class="gaSay"><span class="gaCap">H</span>eute auf dem Tisch: <a href="${esc(a.getAttribute("href"))}">${esc(title)}</a>${meta ? ` – ${esc(meta)}` : ""}. Dazu ein Glas Wein und Zeit für ein zweites Stück.</p>`;
    after.after(el); api.add(()=> el.remove());
  }

  // links fest: Inhaltsverzeichnis (nur breite Bildschirme, per CSS)
  function side(api){
    const el = api.bit("gaSide", "galerie", "aside");
    el.setAttribute("aria-label", "Inhalt");
    el.innerHTML = `<a class="gaSideHome" href="/">${logo}</a>${tocHtml()}<p class="gaFine">© Tobis Küche<br>Ausgabe Winter ’${String(new Date().getFullYear()).slice(2)}</p>`;
    document.body.appendChild(el); api.add(()=> el.remove());
  }

  // Rezeptseite: Untertitel als großer Satz mit verziertem Anfangsbuchstaben
  function statement(api){
    const sub = window.RECIPE_DATA?.subtitle, body = document.querySelector(".recipePageBody");
    if(!sub || !body) return;
    const el = api.bit("gaStatement", "galerie", "p");
    el.innerHTML = `<span class="gaCap" aria-hidden="true">${esc(sub[0])}</span><span aria-hidden="true">${esc(sub.slice(1))}</span><span class="sr">${esc(sub)}</span>`;
    el.querySelector(".sr").style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)";
    body.prepend(el); api.add(()=> el.remove());
  }

  window.KOCHBUCH_FX.galerie = {
    start(api){
      side(api);
      statement(api);
      if(!api.home()) return;
      const h = hero(api);
      if(h) chapter(api, document.querySelector(".homeGreeting"));
      dispatchEvent(new Event("kochbuch:sceneresize"));
    },
  };
})();
