const { chromium } = require('playwright');
// Extreme Testdaten (Skill break-ui): Rezepte aus tools/worstcase/*.md in eine Kopie der Seite bauen, z. B.
//   cp tools/worstcase/*.md _recipes/ && bundle exec jekyll build -d /tmp/site_worst; rm _recipes/*-worstcase.md
//   python3 -m http.server 8412 --directory /tmp/site_worst; OUT=/tmp node tools/worstcase/worst.js
const B=process.env.BASE||'http://localhost:8412', O=(process.env.OUT||'.')+'/wc';
const R='/rezepte/geschmorte-rinderbacken-worstcase/', D='/rezepte/dal-worstcase/';
const today=new Date(); const k=d=>{const x=new Date(today.getTime()+d*864e5);return `${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,'0')}-${String(x.getDate()).padStart(2,'0')}`};
const seed={
 'kochbuch.shopping': JSON.stringify([
   {item:'Rinderbacken, pariert, ohne Sehnen und Silberhaut',unit:'g',qty:2400,from:'Geschmorte Rinderbacken in Rotwein-Schalotten-Soße mit Selleriepüree und glasierten Möhren, Dal, Ragù alla Bolognese'},
   {item:'Worcestershiresauce',unit:'',qty:null,qtyLabel:'nach Geschmack und Laune',from:''},
   {item:'Ei',unit:'',qty:1,from:'Dal'},
   {item:'Mehl',unit:'g',qty:12500,from:'Pizza'},
   {item:'Kardamomkapseln',unit:'Packungen',qty:0.333333,from:'Curry'},
   ...Array.from({length:60},(_,i)=>({item:'Artikel '+i,unit:'g',qty:100,from:'X'}))]),
 'kochbuch.freezer': JSON.stringify({[R]:{portions:1,added:new Date(Date.now()-400*864e5).toISOString()},[D]:{portions:999,added:new Date().toISOString()}}),
 'kochbuch.plan': JSON.stringify({[k(0)]:[{id:R,servings:12},{id:D,servings:1},{id:'/rezepte/chef-style-ragu/',servings:6}],[k(1)]:[{id:R,servings:12,leftover:true}]}),
 'kochbuch.stats': JSON.stringify({[R]:{cookedCount:1,lastCooked:new Date().toISOString(),history:[],favorite:true},[D]:{cookedCount:1234,favorite:true}}),
 'kochbuch.notes': JSON.stringify({[R]:{text:'bartholomew.fitzgerald@northwind-industries-holdings.example.com meinte: unbedingt weniger Salz '.repeat(4),rating:5}}),
 'kochbuch.cooking': JSON.stringify({[R]:{step:0,total:4,at:Date.now()}}),
};
(async()=>{ const b=await chromium.launch(); const issues=[];
 for (const [tag,w,font,scheme] of [['320',320,null,'light'],['390',390,null,'light'],['390big',390,'200%','light'],['390dark',390,null,'dark']]){
  const ctx=await b.newContext({viewport:{width:w,height:800},deviceScaleFactor:1,isMobile:true,hasTouch:true,colorScheme:scheme});
  const p=await ctx.newPage(); p.on('pageerror',e=>issues.push(tag+' JS '+e.message));
  await p.goto(B+'/'); await p.evaluate(s=>{localStorage.clear();for(const[k,v] of Object.entries(s))localStorage.setItem(k,v)},seed);
  for (const [n,u] of [['home','/'],['liste','/rezeptindex/'],['rezept',R],['dal',D],['shop','/shopping/'],['plan','/wochenplan/'],['truhe','/kuehltruhe/'],['kat','/kategorien/']]){
    await p.goto(B+u); if(font) await p.addStyleTag({content:`html{font-size:${font} !important}`}); await p.waitForTimeout(500);
    const ov=await p.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
    if(ov>0) issues.push(`${tag} ${n}: seitlicher Überlauf ${ov}px`);
    const clipped=await p.evaluate(()=>[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect(); return r.width>0 && r.right>innerWidth+1 && getComputedStyle(e).position!=='fixed' && !e.closest('.chips,.filterRow,.hScroll,[class*="scroll"],.hcards,.rail')}).slice(0,4).map(e=>e.className+':'+Math.round(e.getBoundingClientRect().right)));
    if(clipped.length) issues.push(`${tag} ${n}: über Rand ${clipped.join(' ')}`);
    await p.screenshot({path:`${O}-${tag}-${n}.png`,fullPage:n!=='shop'});
  }
  await ctx.close();
 }
 console.log(issues.join('\n')||'keine Überläufe'); await b.close();})();
