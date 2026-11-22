// Nordwall – 3D-Kopf (Dez. 2026, vierte Fassung, Besitzer: „soll erkennbar sein, aus welchem Universum es kommt“): eine
// Pergament-Landkarte auf einem Tisch, darüber dreht sich eine Armillarsphäre aus Messing mit glühendem Kern, aus der Karte wachsen
// Türme aus Zahnrädern, die sich drehen (wie ein Uhrwerk, das ein Reich zusammensetzt). Kalter Schnee fällt durchs Bild.
// Alles selbst gebaut (Three.js r170), keine fremden Grafiken. Als ES-Modul von cx-hero.js geladen.
import * as THREE from "../vendor/three/three.module.min.js";
import { RoomEnvironment } from "../vendor/three/RoomEnvironment.js";

const TAU = Math.PI * 2;
const rng = (seed)=>{ let s = seed; return ()=>{ s = (s * 9301 + 49297) % 233280; return s / 233280; }; };

// Pergament-Karte: Küstenlinie, Gebirge, Wälder, Flüsse, Kompassrose, Gitternetz – auf eine Leinwand gemalt
function mapTexture(){
  const W = 2048, H = 1280, c = document.createElement("canvas"); c.width = W; c.height = H;
  const g = c.getContext("2d"), r = rng(7);
  let gr = g.createRadialGradient(W / 2, H / 2, H * .2, W / 2, H / 2, W * .7); gr.addColorStop(0, "#E2CFA2"); gr.addColorStop(1, "#9C7F52");
  g.fillStyle = gr; g.fillRect(0, 0, W, H);
  for(let i = 0; i < 14000; i++){ g.fillStyle = `rgba(${r() < .5 ? "90,60,30" : "255,240,210"},${r() * .06})`; g.fillRect(r() * W, r() * H, 2 + r() * 6, 1 + r() * 3); }
  // Land: zwei große Massen mit zerklüfteter Küste
  const land = (cx, cy, rx, ry, seed)=>{
    const q = rng(seed), pts = [];
    for(let i = 0; i < 140; i++){ const a = i / 140 * TAU, k = 1 + (q() - .5) * .18 + Math.sin(a * 5 + seed) * .12 + Math.sin(a * 13) * .05; pts.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]); }
    g.beginPath(); pts.forEach(([x, y], i)=> i ? g.lineTo(x, y) : g.moveTo(x, y)); g.closePath();
    g.fillStyle = "rgba(196,170,120,.55)"; g.fill();
    g.strokeStyle = "#4A3420"; g.lineWidth = 3.5; g.stroke();
    g.strokeStyle = "rgba(74,52,32,.35)"; g.lineWidth = 1.2; for(let j = 1; j < 4; j++){ g.beginPath(); pts.forEach(([x, y], i)=>{ const dx = x - cx, dy = y - cy, f = 1 + j * .025; i ? g.lineTo(cx + dx * f, cy + dy * f) : g.moveTo(cx + dx * f, cy + dy * f); }); g.closePath(); g.stroke(); }
    return pts;
  };
  land(W * .33, H * .55, W * .22, H * .36, 3); land(W * .76, H * .45, W * .14, H * .3, 11);
  // Gebirge, Wälder
  g.strokeStyle = "#4A3420"; g.lineWidth = 1.6;
  for(let i = 0; i < 110; i++){ const x = W * (.17 + r() * .3), y = H * (.3 + r() * .5), s = 6 + r() * 7; g.fillStyle = "rgba(74,52,32,.35)"; g.beginPath(); g.moveTo(x, y - s * 1.3); g.lineTo(x + s, y); g.lineTo(x + s * .1, y); g.closePath(); g.fill(); g.beginPath(); g.moveTo(x - s, y); g.lineTo(x, y - s * 1.3); g.lineTo(x + s, y); g.stroke(); }
  g.fillStyle = "#4A3420"; for(let i = 0; i < 260; i++){ const x = W * (.66 + r() * .2), y = H * (.25 + r() * .4); g.beginPath(); g.arc(x, y, 4 + r() * 3, 0, TAU); g.fill(); g.fillRect(x - 1, y + 3, 2, 6); }
  // Flüsse
  g.strokeStyle = "rgba(60,80,100,.6)"; g.lineWidth = 2.5; for(let k = 0; k < 4; k++){ let x = W * (.25 + r() * .2), y = H * (.3 + r() * .2); g.beginPath(); g.moveTo(x, y); for(let i = 0; i < 20; i++){ x += (r() - .45) * 40; y += 18 + r() * 10; g.lineTo(x, y); } g.stroke(); }
  // eine lange Mauer quer über den Norden
  g.strokeStyle = "#F4F0E6"; g.lineWidth = 10; g.beginPath(); g.moveTo(W * .14, H * .22); g.lineTo(W * .52, H * .2); g.stroke(); g.strokeStyle = "#4A3420"; g.lineWidth = 2; g.stroke();
  // Gitter und Kompassrose
  g.strokeStyle = "rgba(74,52,32,.18)"; g.lineWidth = 1.2; for(let x = 0; x < W; x += 128){ g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); } for(let y = 0; y < H; y += 128){ g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
  const cx = W * .88, cy = H * .82, R = 110; g.strokeStyle = "#4A3420"; g.fillStyle = "#4A3420"; g.lineWidth = 2;
  g.beginPath(); g.arc(cx, cy, R, 0, TAU); g.stroke(); g.beginPath(); g.arc(cx, cy, R * .8, 0, TAU); g.stroke();
  for(let i = 0; i < 8; i++){ const a = i / 8 * TAU, L = i % 2 ? R * .55 : R * 1.05; g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + Math.cos(a + .12) * L * .25, cy + Math.sin(a + .12) * L * .25); g.lineTo(cx + Math.cos(a) * L, cy + Math.sin(a) * L); g.lineTo(cx + Math.cos(a - .12) * L * .25, cy + Math.sin(a - .12) * L * .25); g.closePath(); i % 2 ? g.stroke() : g.fill(); }
  // Rand dunkler (gealtert)
  gr = g.createRadialGradient(W / 2, H / 2, H * .45, W / 2, H / 2, W * .62); gr.addColorStop(0, "rgba(60,35,15,0)"); gr.addColorStop(1, "rgba(60,35,15,.55)"); g.fillStyle = gr; g.fillRect(0, 0, W, H);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

function gearGeo(R, teeth, depth, hole){
  const s = new THREE.Shape(), n = teeth * 2;
  for(let i = 0; i <= n * 2; i++){ const a = i / (n * 2) * TAU, rr = (Math.floor(i / 2) % 2) ? R : R * .82; i ? s.lineTo(Math.cos(a) * rr, Math.sin(a) * rr) : s.moveTo(Math.cos(a) * rr, Math.sin(a) * rr); }
  if(hole){ const h = new THREE.Path(); h.absarc(0, 0, R * hole, 0, TAU, true); s.holes.push(h); }
  const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelThickness: depth * .15, bevelSize: R * .02, bevelSegments: 2, curveSegments: 6 });
  g.rotateX(-Math.PI / 2); return g;
}

export function create(canvas){
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x07090C); scene.fog = new THREE.Fog(0x07090C, 9, 22);
  const pmrem = new THREE.PMREMGenerator(renderer); scene.environment = pmrem.fromScene(new RoomEnvironment(), .04).texture; scene.environmentIntensity = .55;
  const camera = new THREE.PerspectiveCamera(38, 1, .1, 60);
  scene.add(new THREE.HemisphereLight(0x8aa0b8, 0x20140a, .5));
  const key = new THREE.SpotLight(0xffd29a, 60, 30, .55, .6, 1.2); key.position.set(-3, 9, 4); key.castShadow = true; key.shadow.mapSize.set(1024, 1024); scene.add(key, key.target);
  const rim = new THREE.DirectionalLight(0x9ab8ff, .8); rim.position.set(5, 3, -6); scene.add(rim);

  // Tisch + Karte
  const map = new THREE.Mesh(new THREE.PlaneGeometry(25.6, 16, 1, 1), new THREE.MeshStandardMaterial({ map: mapTexture(), color: 0x9a8a72, roughness: .85, metalness: 0 }));
  map.rotation.x = -Math.PI / 2; map.receiveShadow = true; scene.add(map);
  const brass = new THREE.MeshStandardMaterial({ color: 0xC59A52, metalness: 1, roughness: .32 });
  const bronze = new THREE.MeshStandardMaterial({ color: 0x8A6234, metalness: 1, roughness: .42 });
  const iron = new THREE.MeshStandardMaterial({ color: 0x3A3D42, metalness: .9, roughness: .5 });

  // Armillarsphäre
  const armil = new THREE.Group(); armil.position.set(0, 2.5, 0); scene.add(armil);
  const rings = [];
  [[1.15, .045, 0, 0], [1.02, .04, Math.PI / 2, 0], [.9, .035, Math.PI / 2, Math.PI / 2], [.78, .03, .4, .3]].forEach(([R, tube, rx, rz], i)=>{
    const m = new THREE.Mesh(new THREE.TorusGeometry(R, tube, 16, 128), i % 2 ? bronze : brass); m.rotation.set(rx, 0, rz); m.castShadow = true;
    const holder = new THREE.Group(); holder.add(m); armil.add(holder); rings.push(holder);
    // Gravur-Markierungen auf dem äußeren Ring
    if(i === 0) for(let k = 0; k < 48; k++){ const a = k / 48 * TAU, tick = new THREE.Mesh(new THREE.BoxGeometry(.012, .1, .02), bronze); tick.position.set(Math.cos(a) * R, Math.sin(a) * R, 0); tick.rotation.z = a; m.add(tick); }
  });
  const band = new THREE.Mesh(new THREE.TorusGeometry(1.08, .09, 8, 128), bronze); band.rotation.x = Math.PI / 2 - .4; band.scale.z = .3; armil.add(band);
  const core = new THREE.Mesh(new THREE.SphereGeometry(.26, 48, 32), new THREE.MeshStandardMaterial({ color: 0xffb54a, emissive: 0xff8a20, emissiveIntensity: 2.2, roughness: .4 }));
  armil.add(core); const coreLight = new THREE.PointLight(0xffa040, 8, 6, 1.6); armil.add(coreLight);
  const axis = new THREE.Mesh(new THREE.CylinderGeometry(.02, .02, 2.9), brass); armil.add(axis);
  const stand = new THREE.Mesh(new THREE.CylinderGeometry(.03, .18, 1.25, 24), brass); stand.position.y = -1.95 + .6; armil.add(stand); stand.castShadow = true;

  // Uhrwerk-Türme, die aus der Karte wachsen
  const towers = [];
  [[-3.6, -1.1, 1.5], [-2.0, 1.6, 1.1], [3.1, -.6, 1.3], [4.6, 1.5, .9], [-4.9, 2.4, .8], [1.4, 2.6, .9]].forEach(([x, z, hgt], i)=>{
    const t = new THREE.Group(); t.position.set(x, 0, z); scene.add(t);
    const body = new THREE.Group(); t.add(body);
    const lv = 4 + Math.round(hgt * 2);
    for(let k = 0; k < lv; k++){ const R = .42 - k * .035; const ge = new THREE.Mesh(gearGeo(R, 10 + (k % 3) * 2, .12, .25), k % 2 ? brass : bronze); ge.position.y = k * .16; ge.scale.y = .7; ge.castShadow = true; ge.userData.sp = (k % 2 ? 1 : -1) * (.6 + k * .1); body.add(ge); }
    const axle = new THREE.Mesh(new THREE.CylinderGeometry(.05, .05, lv * .16 + .1, 12), iron); axle.position.y = lv * .08; body.add(axle);
    const roof = new THREE.Mesh(new THREE.ConeGeometry(.22, .5, 8), iron); roof.position.y = lv * .16 + .2; roof.castShadow = true; body.add(roof);
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(.22, .12), new THREE.MeshStandardMaterial({ color: 0x8E1E1E, side: THREE.DoubleSide, roughness: .8 })); flag.position.set(.12, lv * .16 + .55, 0); body.add(flag);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(.008, .008, .4), iron); pole.position.y = lv * .16 + .5; body.add(pole);
    towers.push({ t, body, phase: i * .9, flag });
  });

  // Schnee
  const N = 900, sp = new Float32Array(N * 3), r = rng(3);
  for(let i = 0; i < N; i++){ sp[i * 3] = (r() - .5) * 16; sp[i * 3 + 1] = r() * 9; sp[i * 3 + 2] = (r() - .5) * 12; }
  const snowGeo = new THREE.BufferGeometry(); snowGeo.setAttribute("position", new THREE.BufferAttribute(sp, 3));
  const dot = document.createElement("canvas"); dot.width = dot.height = 32; const dg = dot.getContext("2d"), rg = dg.createRadialGradient(16, 16, 0, 16, 16, 16); rg.addColorStop(0, "rgba(255,255,255,1)"); rg.addColorStop(1, "rgba(255,255,255,0)"); dg.fillStyle = rg; dg.fillRect(0, 0, 32, 32);
  const snow = new THREE.Points(snowGeo, new THREE.PointsMaterial({ size: .07, map: new THREE.CanvasTexture(dot), transparent: true, depthWrite: false, color: 0xdfe8f5 }));
  scene.add(snow);

  let W = 1, H = 1, mx = 0, my = 0;
  return {
    resize(w, h, dpr){ W = w; H = h; renderer.setPixelRatio(dpr); renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w < h ? 52 : 38; camera.updateProjectionMatrix(); },
    render(t, dt, still, s){
      const k = Math.min(3, dt / 16);
      if(s.near){ mx += (s.px - mx) * .04; my += (s.py - my) * .04; }
      const port = W < H, dist = port ? 11.5 : 9.5, sc = s.scroll;
      const ang = still ? .5 : t * .00004 + .5;
      camera.position.set(Math.sin(ang) * dist * .45 + mx * .6, (port ? 8.8 : 6.4) - sc * 2.5 + my * .3, Math.cos(ang) * dist * .45 + dist * .55);
      camera.lookAt(0, port ? 2.3 : 3.0, 0);
      armil.rotation.y = still ? .6 : t * .00025;
      rings[0].rotation.y = still ? 0 : t * .0004; rings[1].rotation.x = still ? .3 : t * .0003; rings[2].rotation.z = still ? .2 : -t * .00035; rings[3].rotation.y = still ? .4 : -t * .0005;
      coreLight.intensity = 7 + (still ? 0 : Math.sin(t * .003) * 1.2);
      towers.forEach((o)=>{
        // wachsen aus der Karte heraus, bleiben stehen, versinken wieder (wie im Uhrwerk)
        const cyc = still ? .5 : ((t * .00008 + o.phase * .17) % 1);
        const up = cyc < .2 ? cyc / .2 : cyc < .8 ? 1 : 1 - (cyc - .8) / .2, e = up * up * (3 - 2 * up);
        o.body.scale.set(1, Math.max(.001, e), 1);
        if(!still) o.body.children.forEach((c)=>{ if(c.userData.sp) c.rotation.y += c.userData.sp * .02 * k * (cyc < .2 || cyc > .8 ? 3 : 1); });
        o.flag.rotation.y = Math.sin(t * .004 + o.phase) * .4;
      });
      if(!still){ const a = snowGeo.attributes.position.array; for(let i = 0; i < N; i++){ a[i * 3 + 1] -= .006 * k; a[i * 3] += Math.sin(t * .0005 + i) * .002 * k; if(a[i * 3 + 1] < 0) a[i * 3 + 1] = 9; } snowGeo.attributes.position.needsUpdate = true; }
      renderer.render(scene, camera);
    },
    dispose(){ renderer.dispose(); pmrem.dispose(); scene.traverse((o)=>{ o.geometry?.dispose?.(); }); },
  };
}
