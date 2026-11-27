// Kochmodus (Standard-Look) prüfen: listet je Rezept und Schritt Überschrift, Gerät, gezeichnete Zutaten und Text.
//   Seite bauen und ausliefern (python3 -m http.server 8411 --directory _site), dann
//   node tools/cook-scenes.js ausgabe.txt [teil-des-dateinamens]
// Zeile: „Schritt | Überschrift | Gerät · Hitze | Zutaten (Schlüssel aus assets/cook-scene.js) | Schritttext“; „-“ = kein Bild.
// Bei neuen Rezepten ansehen: passt das Gerät, und liegt nichts Falsches in der Zeichnung?
const { chromium } = require('playwright'); const fs=require('fs');
(async()=>{ const b=await chromium.launch(); const c=await b.newContext({viewport:{width:430,height:900}}); const p=await c.newPage();
const only=process.argv[3]; const files=fs.readdirSync('/home/user/Kochen/_recipes').map(f=>f.replace(/\.md$/,'')).filter(f=>!only||f.includes(only));
let out='';
for(const f of files){ await p.goto((process.env.BASE || 'http://localhost:8411') + '/rezepte/'+f+'/'); await p.waitForTimeout(300);
 if(!(await p.$('#cookingModeQuick'))) continue; await p.click('#cookingModeQuick'); await p.waitForTimeout(250);
 if(await p.evaluate(()=>document.getElementById('cookOverlay').classList.contains('isPrep'))) { const go=await p.$('#cookPrep button.primary, #prepGo, .prepGo'); if(go) await go.click(); else await p.click('#cookNext'); await p.waitForTimeout(200);}
 out+='\n## '+f+'\n'; let last='';
 for(let s=0;s<30;s++){ const r=await p.evaluate(()=>{ const t=document.querySelector('.ckTitle')?.textContent||''; const st=document.getElementById('cookStepText').textContent.trim().slice(0,110); const svg=document.querySelector('#ckStage svg'); const ks=[...document.querySelectorAll('#ckStage [data-k]')].map(e=>e.dataset.k); const cap=document.querySelector('.ckCap')?.textContent||''; const ey=document.querySelector('.ckEyebrow')?.textContent||''; return {ey,t,st,cap,ks:[...new Set(ks)].join(','),hid:document.getElementById('ckStage').hidden}; });
  if(r.ey===last) break; last=r.ey; out+=`${r.ey.replace('Schritt ','')} | ${r.t} | ${r.hid?'-':r.cap} | ${r.ks} | ${r.st}\n`;
  const nx=await p.$('#cookNext'); if(!nx || await nx.isDisabled()) break; await nx.click(); await p.waitForTimeout(120); }
}
fs.writeFileSync(process.argv[2],out); await b.close(); })();
