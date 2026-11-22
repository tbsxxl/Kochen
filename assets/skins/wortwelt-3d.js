// Bilderbuch (Skin-Schlüssel „wortwelt“) – 3D-Kochbuch auf der Startseite (Nov. 2026, nach dem Vorbild eines illustrierten Online-Buchs):
// jede Doppelseite ein Rezept (links eingeklebtes Foto, rechts handgeschriebener Name, Untertitel, Zeit), Seiten blättern in 3D um
// (Wischen, Pfeile, Tastatur), Antippen der Doppelseite öffnet das Rezept. Seiteninhalte werden auf 2D-Leinwänden gemalt (CanvasTexture).
import * as THREE from "../vendor/three/three.module.min.js";

// kräftige Seitenfarben wie im Vorbild (Rosa, Koralle, Grün, Violett, Gelb, Blau); Schrift darauf hell bzw. dunkel
export const VIVID = ["#EBB2A9", "#E2604A", "#2F7550", "#5B40D4", "#F0B23C", "#2E6EA6"];
const PASTELS = VIVID;
const LIGHT = { "#EBB2A9": false, "#F0B23C": false };
const INK = "#3A2B28";
const PW = 1, PH = 1.3, TW = 800, TH = Math.round(800 * PH / PW);

function rr(g, x, y, w, h, r){ g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }

// Papier: Pastellgrund mit weichen hellen Tupfen, Rundung nur an der Außenkante
function paper(g, col, side, seed){
  g.clearRect(0, 0, TW, TH);
  const R = 70;
  g.save();
  g.beginPath();
  if(side === "r"){ g.moveTo(0, 0); g.lineTo(TW - R, 0); g.arcTo(TW, 0, TW, R, R); g.lineTo(TW, TH - R); g.arcTo(TW, TH, TW - R, TH, R); g.lineTo(0, TH); }
  else { g.moveTo(TW, 0); g.lineTo(R, 0); g.arcTo(0, 0, 0, R, R); g.lineTo(0, TH - R); g.arcTo(0, TH, R, TH, R); g.lineTo(TW, TH); }
  g.closePath(); g.clip();
  g.fillStyle = col; g.fillRect(0, 0, TW, TH);
  let s = seed;
  const rnd = ()=>{ s = (s * 9301 + 49297) % 233280; return s / 233280; };
  for(let i = 0; i < 26; i++){
    const x = rnd() * TW, y = rnd() * TH, r = 40 + rnd() * 60, gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, "rgba(255,255,255,.28)"); gr.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
  }
  // Schatten am Falz
  const fz = side === "r" ? g.createLinearGradient(0, 0, 90, 0) : g.createLinearGradient(TW, 0, TW - 90, 0);
  fz.addColorStop(0, "rgba(60,30,25,.22)"); fz.addColorStop(1, "rgba(60,30,25,0)");
  g.fillStyle = fz; g.fillRect(0, 0, TW, TH);
  g.restore();
}

function wrap(g, text, x, y, maxW, lh, maxLines){
  const words = String(text || "").replace(/-(?=\S)/g, "-\u0000").split(/[\s\u0000]+/).map((w)=> w); let line = "", n = 0;
  for(const w of words){
    const t = line ? line + (line.endsWith("-") ? "" : " ") + w : w;
    if(g.measureText(t).width > maxW && line){ g.fillText(line, x, y + n * lh); n++; line = w; if(n >= maxLines - 1){ line = words.slice(words.indexOf(w)).join(" "); break; } }
    else line = t;
  }
  if(line){ while(g.measureText(line).width > maxW && line.length > 3) line = line.slice(0, -2).trim() + "…"; g.fillText(line, x, y + n * lh); n++; }
  return n;
}

// linke Seite: eingeklebtes Foto mit weißem Rand und Klebestreifen
function photoPage(r, k, img){
  const c = document.createElement("canvas"); c.width = TW; c.height = TH; const g = c.getContext("2d");
  paper(g, PASTELS[k % PASTELS.length], "l", k * 31 + 7);
  if(img){
    g.save(); g.translate(TW / 2, TH * .46); g.rotate((k % 2 ? -1 : 1) * .045);
    const w = TW * .74, h = w * 1.05;
    g.shadowColor = "rgba(40,20,15,.28)"; g.shadowBlur = 24; g.shadowOffsetY = 10;
    g.fillStyle = "#FFFDF8"; rr(g, -w / 2, -h / 2, w, h, 14); g.fill(); g.shadowColor = "transparent";
    const iw = w - 44, ih = h - 44, ia = img.width / img.height, ca = iw / ih;
    let sx = 0, sy = 0, sw = img.width, sh = img.height;
    if(ia > ca){ sw = img.height * ca; sx = (img.width - sw) / 2; } else { sh = img.width / ca; sy = (img.height - sh) / 2; }
    g.save(); rr(g, -iw / 2, -ih / 2, iw, ih, 8); g.clip(); g.drawImage(img, sx, sy, sw, sh, -iw / 2, -ih / 2, iw, ih); g.restore();
    g.fillStyle = "rgba(255,250,235,.72)"; g.rotate(-.12); g.fillRect(-70, -h / 2 - 22, 140, 40);
    g.restore();
  }
  g.fillStyle = "rgba(58,43,40,.55)"; g.font = '500 30px "Skin Feder", "Caveat", cursive'; g.textAlign = "center";
  g.fillText(String(k + 1), TW / 2, TH - 60);
  return c;
}

// Kreide-Struktur: feine helle/dunkle Sprenkel nur auf schon gemalter Schrift
function chalk(g, x, y, w, h, seed){
  let st = seed; const rnd = ()=>{ st = (st * 9301 + 49297) % 233280; return st / 233280; };
  g.save(); g.globalCompositeOperation = "source-atop";
  for(let i = 0; i < 2600; i++){ g.fillStyle = rnd() < .5 ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.18)"; g.fillRect(x + rnd() * w, y + rnd() * h, 2 + rnd() * 4, 1.5 + rnd() * 2); }
  g.restore();
}

// rechte Seite: kleines Wort in Schreibschrift + riesiges handgemaltes Hauptwort (wie „Take RESPONSIBILITY“), Kritzeleien
function textPage(r, k){
  const c = document.createElement("canvas"); c.width = TW; c.height = TH; const g = c.getContext("2d");
  const col = PASTELS[k % PASTELS.length], dark = LIGHT[col] === false, ink = dark ? "#2A1714" : "#FFF6EA";
  paper(g, col, "r", k * 17 + 3);
  // längster Wortteil groß (auch bei Bindestrich-Wörtern), der Rest klein darüber
  const t = String(r.t || ""), parts = t.split(/[\s-]+/).filter(Boolean);
  let big = parts.reduce((a, w)=> w.length >= a.length ? w : a, "");
  const at = t.lastIndexOf(big), small = (t.slice(0, at) + t.slice(at + big.length)).replace(/\s+/g, " ").trim();
  big = big.toUpperCase();
  // Wort auf eigener Ebene malen, damit die Kreide-Struktur nur die Schrift trifft
  const L = document.createElement("canvas"); L.width = TW; L.height = TH; const q = L.getContext("2d");
  q.fillStyle = ink; q.textAlign = "center"; q.textBaseline = "middle";
  let fs = 300; q.font = `700 ${fs}px "Skin Feder", "Caveat", cursive`;
  while(q.measureText(big).width > TW * .86 && fs > 90){ fs -= 8; q.font = `700 ${fs}px "Skin Feder", "Caveat", cursive`; }
  q.save(); q.translate(TW / 2, TH * .5); q.rotate(-.06); q.scale(1, 1.5); q.fillText(big, 0, 0); q.restore();
  chalk(q, 0, 0, TW, TH, k * 13 + 5);
  if(small){
    q.font = '500 78px "Skin Feder", "Caveat", cursive'; q.textAlign = "left"; q.fillStyle = ink;
    q.save(); q.translate(80, TH * .5 - fs * .78); q.rotate(-.05); wrap(q, small, 0, 0, TW - 160, 74, 2); q.restore();
  }
  g.drawImage(L, 0, 0);
  // Kritzeleien: Sterne und Bögen
  g.strokeStyle = dark ? "rgba(42,23,20,.55)" : "rgba(255,246,234,.7)"; g.lineWidth = 5; g.lineCap = "round";
  [[TW - 130, 150], [150, TH - 190], [TW - 200, TH - 150]].forEach(([x, y], i)=>{
    g.beginPath(); for(let j = 0; j < 4; j++){ const a = j * Math.PI / 4 + i; g.moveTo(x - Math.cos(a) * 18, y - Math.sin(a) * 18); g.lineTo(x + Math.cos(a) * 18, y + Math.sin(a) * 18); } g.stroke();
  });
  g.beginPath(); g.moveTo(TW * .3, TH * .5 + fs * .9); g.quadraticCurveTo(TW * .5, TH * .5 + fs * 1.05, TW * .72, TH * .5 + fs * .88); g.stroke();
  return c;
}

// Buchdeckel: dunkler Karton, Kreideschrift
function coverPage(){
  const c = document.createElement("canvas"); c.width = TW; c.height = TH; const g = c.getContext("2d");
  paper(g, "#2B2A2D", "r", 99);
  const L = document.createElement("canvas"); L.width = TW; L.height = TH; const q = L.getContext("2d");
  q.fillStyle = "#F4EEE8"; q.textAlign = "center"; q.textBaseline = "middle";
  q.font = '500 96px "Skin Feder", "Caveat", cursive'; q.save(); q.translate(TW * .42, TH * .3); q.rotate(-.08); q.fillText("Tobis", 0, 0); q.restore();
  q.font = '700 190px "Skin Feder", "Caveat", cursive'; q.save(); q.translate(TW / 2, TH * .45); q.rotate(-.04); q.scale(1, 1.35); q.fillText("KOCH", 0, 0); q.restore();
  q.save(); q.translate(TW / 2, TH * .6); q.rotate(-.03); q.scale(1, 1.35); q.fillText("BUCH", 0, 0); q.restore();
  chalk(q, 0, 0, TW, TH, 7);
  g.drawImage(L, 0, 0);
  g.strokeStyle = "#F4EEE8"; g.lineWidth = 5; g.lineCap = "round";
  g.beginPath(); g.moveTo(TW * .2, TH * .7); for(let x = TW * .2; x < TW * .8; x += 40) g.quadraticCurveTo(x + 20, TH * .7 + (x % 80 ? -14 : 14), x + 40, TH * .7); g.stroke();
  g.fillStyle = "rgba(244,238,232,.8)"; g.font = '400 36px "Fraunces", Georgia, serif'; g.textAlign = "center";
  g.fillText("Ein einfaches bebildertes Kochbuch", TW / 2, TH * .82);
  return c;
}

function leafGeo(){ const g = new THREE.PlaneGeometry(PW, PH, 28, 1); g.translate(PW / 2, 0, 0); return g; }
// Seite um den Falz biegen: Winkel wächst zur Außenkante (Papier wellt sich beim Umblättern)
function curl(geo, base, theta){
  const p = geo.attributes.position, b = base.attributes.position, lift = Math.sin(theta) * .55;
  for(let i = 0; i < p.count; i++){
    const x = b.getX(i), f = x / PW, a = theta - lift * f * (1 - f * .4);
    p.setXYZ(i, Math.cos(a) * x, b.getY(i), Math.sin(a) * x);
  }
  p.needsUpdate = true; geo.computeVertexNormals();
}

export function create(canvas, recipes, onIndex){
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setClearColor(0, 0); renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(30, 1, .1, 50);
  scene.add(new THREE.AmbientLight(0xffffff, 2.2));
  const key = new THREE.DirectionalLight(0xfff2e6, 1.4); key.position.set(-2, 3, 4); scene.add(key);
  const book = new THREE.Group(); scene.add(book);

  const imgs = new Map(), tex = new Map();
  const texFor = (kind, k)=>{
    const id = kind + k; if(tex.has(id)) return tex.get(id);
    const r = recipes[k]; if(!r) return null;
    const t = new THREE.CanvasTexture(kind === "p" ? photoPage(r, k, imgs.get(k)) : textPage(r, k));
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; tex.set(id, t); return t;
  };
  const load = (k)=>{
    if(k < 0 || k >= recipes.length || imgs.has(k)) return;
    imgs.set(k, null);
    const im = new Image(); im.decoding = "async";
    im.onload = ()=>{ imgs.set(k, im); const old = tex.get("p" + k); if(old){ old.image = photoPage(recipes[k], k, im); old.needsUpdate = true; api.dirty = true; } };
    im.src = recipes[k].i;
  };
  const mat = (t, side)=> new THREE.MeshStandardMaterial({ map: t, transparent: true, alphaTest: .02, side, roughness: .95, metalness: 0 });

  // Buchdeckel (dunkler Karton) und die zwei liegenden Seiten
  const coverG = new THREE.PlaneGeometry(PW * 2 + .08, PH + .08);
  const cover = new THREE.Mesh(coverG, new THREE.MeshStandardMaterial({ color: 0x1d1c1e, roughness: .8 }));
  cover.position.z = -.012; book.add(cover);
  const lg = new THREE.PlaneGeometry(PW, PH); lg.translate(-PW / 2, 0, 0);
  const left = new THREE.Mesh(lg, mat(null, THREE.FrontSide)); left.position.z = -.002;
  const right = new THREE.Mesh(leafGeo(), mat(null, THREE.FrontSide)); right.position.z = -.002;
  book.add(left, right);
  // umblätternde Seite: Vorderseite rechts (Text), Rückseite links (Foto)
  const base = leafGeo(), flipGeo = leafGeo();
  const flipF = new THREE.Mesh(flipGeo, mat(null, THREE.FrontSide)), flipB = new THREE.Mesh(flipGeo, mat(null, THREE.BackSide));
  const flip = new THREE.Group(); flip.add(flipF, flipB); flip.visible = false; book.add(flip);

  let idx = -1, anim = null, openT = 0;
  const coverTex = new THREE.CanvasTexture(coverPage()); coverTex.colorSpace = THREE.SRGBColorSpace; coverTex.anisotropy = 4;
  const set = (m, t)=>{ m.material.map = t; m.material.needsUpdate = true; };
  const show = ()=>{
    [idx - 1, idx, idx + 1, idx + 2].forEach(load);
    left.visible = idx >= 0;
    if(idx >= 0) set(left, texFor("p", idx));
    set(right, idx >= 0 ? texFor("t", idx) : coverTex);
    onIndex?.(idx);
    api.dirty = true;
  };
  // Rückseiten-Textur gespiegelt (u → 1-u), damit sie nach dem Umblättern links richtig steht
  const mirrored = (t)=>{ if(!t) return null; const m = t.clone(); m.wrapS = THREE.RepeatWrapping; m.repeat.x = -1; m.offset.x = 1; m.needsUpdate = true; return m; };

  const api = {
    dirty: true, tiltX: 0, tiltY: 0,
    get index(){ return idx; }, count: recipes.length,
    go(dir){
      if(anim) return;
      const to = idx + dir; if(to < -1 || to >= recipes.length) return;
      [to - 1, to, to + 1].forEach(load);
      if(idx === -1){ set(flipF, coverTex); set(flipB, mirrored(texFor("p", 0))); set(right, texFor("t", 0)); left.visible = false; anim = { from: 0, to: Math.PI, t: 0, done: ()=>{ idx = 0; show(); } }; }
      else if(to === -1){ set(flipF, coverTex); set(flipB, mirrored(texFor("p", 0))); left.visible = false; anim = { from: Math.PI, to: 0, t: 0, done: ()=>{ idx = -1; show(); } }; }
      else if(dir > 0){ set(flipF, texFor("t", idx)); set(flipB, mirrored(texFor("p", to))); set(right, texFor("t", to)); anim = { from: 0, to: Math.PI, t: 0, done: ()=>{ idx = to; show(); } }; }
      else { set(flipF, texFor("t", to)); set(flipB, mirrored(texFor("p", idx))); set(left, texFor("p", to)); anim = { from: Math.PI, to: 0, t: 0, done: ()=>{ idx = to; show(); } }; }
      curl(flipGeo, base, anim.from); flip.visible = true; api.dirty = true;
    },
    resize(w, h, dpr, cy, stageH){
      renderer.setPixelRatio(Math.min(dpr, 2)); renderer.setSize(w, h, false);
      camera.aspect = w / h;
      const tan = Math.tan(THREE.MathUtils.degToRad(15));
      const byW = (PW * 2 + .22) / 2 / (tan * camera.aspect), byH = (PH + .55) / 2 / tan * (h / Math.max(1, stageH));
      camera.position.set(0, -.15, Math.max(byW, byH)); camera.lookAt(0, 0, 0); camera.updateProjectionMatrix();
      const vis = 2 * tan * camera.position.z; book.position.y = (h / 2 - cy) / h * vis;
      api.dirty = true;
    },
    get open(){ return idx >= 0; },
    render(t, dt, still){
      // geschlossen: Deckel mittig (Buch um eine halbe Seite nach links), offen: Doppelseite mittig
      const want = idx >= 0 || (anim && anim.to === Math.PI) ? 1 : 0;
      openT += (want - openT) * (still ? 1 : .08);
      book.position.x = -PW / 2 * (1 - openT) * 1.4; book.scale.setScalar(1 + .4 * (1 - openT));
      cover.scale.x = .5 + .5 * openT; cover.position.x = PW / 2 * (1 - openT) + .02 * (1 - openT);
      if(Math.abs(want - openT) > .002) api.dirty = true;
      if(anim){
        anim.t = Math.min(1, anim.t + (dt || 16) / (still ? 1 : 700));
        const e = anim.t < .5 ? 4 * anim.t ** 3 : 1 - (-2 * anim.t + 2) ** 3 / 2;
        curl(flipGeo, base, anim.from + (anim.to - anim.from) * e);
        if(anim.t >= 1){ flip.visible = false; const d = anim.done; anim = null; d(); }
      }
      book.rotation.x += ((still ? -.18 : -.18 + api.tiltX) - book.rotation.x) * .08;
      book.rotation.y += ((still ? 0 : api.tiltY) - book.rotation.y) * .08;
      if(!still) book.position.z = Math.sin(t * .0008) * .02;
      renderer.render(scene, camera); api.dirty = !!anim || Math.abs(want - openT) > .002;
    },
    dispose(){ tex.forEach((t)=> t.dispose()); renderer.dispose(); },
  };
  show();
  return api;
}
