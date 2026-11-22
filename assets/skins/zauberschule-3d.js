// Zauberschule – 3D-Kopf (Dez. 2026, vierte Fassung): eine hohe Halle bei Nacht, deren Decke der Sternenhimmel ist, darunter
// schweben Hunderte Kerzen, lange Tafeln mit goldenen Kelchen führen nach hinten, hohe Spitzbogenfenster an den Wänden.
// Die Kamera gleitet langsam durch die Halle, Scrollen hebt den Blick zur Decke. Alles selbst gebaut (Three.js r170).
import * as THREE from "../vendor/three/three.module.min.js";
import { RoomEnvironment } from "../vendor/three/RoomEnvironment.js";

const TAU = Math.PI * 2;
const rng = (seed)=>{ let s = seed; return ()=>{ s = (s * 9301 + 49297) % 233280; return s / 233280; }; };

function skyTexture(){
  const W = 2048, H = 1024, c = document.createElement("canvas"); c.width = W; c.height = H;
  const g = c.getContext("2d"), r = rng(5);
  const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, "#050816"); gr.addColorStop(.6, "#0E1A3A"); gr.addColorStop(1, "#1B2450");
  g.fillStyle = gr; g.fillRect(0, 0, W, H);
  // Wolkenschleier
  for(let i = 0; i < 60; i++){ const x = r() * W, y = r() * H, R = 80 + r() * 220; const q = g.createRadialGradient(x, y, 0, x, y, R); q.addColorStop(0, "rgba(120,130,190,.10)"); q.addColorStop(1, "rgba(120,130,190,0)"); g.fillStyle = q; g.fillRect(x - R, y - R, R * 2, R * 2); }
  for(let i = 0; i < 2600; i++){ const a = r(); g.fillStyle = `rgba(255,${240 + r() * 15},${210 + r() * 45},${.3 + a * .7})`; const s = a > .985 ? 2.6 : a > .9 ? 1.6 : 1; g.fillRect(r() * W, r() * H, s, s); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function stoneTexture(){
  const W = 512, H = 512, c = document.createElement("canvas"); c.width = W; c.height = H;
  const g = c.getContext("2d"), r = rng(9); g.fillStyle = "#3a332c"; g.fillRect(0, 0, W, H);
  for(let y = 0; y < H; y += 64) for(let x = (y / 64) % 2 ? -64 : 0; x < W; x += 128){ const v = 44 + r() * 22; g.fillStyle = `rgb(${v + 10},${v + 4},${v - 4})`; g.fillRect(x + 3, y + 3, 122, 58); }
  for(let i = 0; i < 6000; i++){ g.fillStyle = `rgba(0,0,0,${r() * .15})`; g.fillRect(r() * W, r() * H, 2, 2); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}
function flameTexture(){
  const c = document.createElement("canvas"); c.width = 64; c.height = 128; const g = c.getContext("2d");
  let q = g.createRadialGradient(32, 80, 0, 32, 80, 31); q.addColorStop(0, "rgba(255,200,120,.45)"); q.addColorStop(1, "rgba(255,150,60,0)"); g.fillStyle = q; g.fillRect(0, 0, 64, 128);
  q = g.createRadialGradient(32, 78, 0, 32, 70, 22); q.addColorStop(0, "rgba(255,255,235,1)"); q.addColorStop(.5, "rgba(255,210,120,.9)"); q.addColorStop(1, "rgba(255,140,40,0)");
  g.fillStyle = q; g.beginPath(); g.moveTo(32, 40); g.quadraticCurveTo(46, 70, 32, 96); g.quadraticCurveTo(18, 70, 32, 40); g.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function create(canvas, opts){
  const compact = !!(opts && opts.compact);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.1;
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x05060d); scene.fog = new THREE.FogExp2(0x0a0c1a, .032);
  const pmrem = new THREE.PMREMGenerator(renderer); scene.environment = pmrem.fromScene(new RoomEnvironment(), .04).texture; scene.environmentIntensity = .25;
  const camera = new THREE.PerspectiveCamera(50, 1, .1, 120);
  scene.add(new THREE.HemisphereLight(0x8a7ab8, 0x5a3a1a, .9));

  const HW = 7, LEN = 46, HT = 13;
  // Decke = Himmel
  const sky = new THREE.Mesh(new THREE.PlaneGeometry(HW * 2, LEN), new THREE.MeshBasicMaterial({ map: skyTexture(), fog: false }));
  sky.rotation.x = Math.PI / 2; sky.position.set(0, HT, -LEN / 2 + 4); scene.add(sky);
  // Boden, Wände
  const stone = stoneTexture(); const wallTex = stone.clone(); wallTex.repeat.set(LEN / 4, HT / 4); wallTex.needsUpdate = true;
  const floorTex = stone.clone(); floorTex.repeat.set(4, LEN / 3); floorTex.needsUpdate = true;
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(HW * 2, LEN), new THREE.MeshStandardMaterial({ map: floorTex, roughness: .7, metalness: .1, color: 0x8a7a6a }));
  floor.rotation.x = -Math.PI / 2; floor.position.z = -LEN / 2 + 4; scene.add(floor);
  const wallMat = new THREE.MeshStandardMaterial({ map: wallTex, roughness: .95, color: 0x9a8f80 });
  [-1, 1].forEach((sd)=>{ const w = new THREE.Mesh(new THREE.PlaneGeometry(LEN, HT), wallMat); w.rotation.y = -sd * Math.PI / 2; w.position.set(sd * HW, HT / 2, -LEN / 2 + 4); scene.add(w); });
  const end = new THREE.Mesh(new THREE.PlaneGeometry(HW * 2, HT), wallMat); end.position.set(0, HT / 2, -LEN + 4); scene.add(end);
  const rose = new THREE.Mesh(new THREE.CircleGeometry(2.2, 48), new THREE.MeshBasicMaterial({ color: 0xffc070, fog: false, transparent: true, opacity: .75 })); rose.position.set(0, 7.5, -LEN + 4.05); scene.add(rose);
  for(let k = 0; k < 12; k++){ const sp = new THREE.Mesh(new THREE.BoxGeometry(.08, 4.4, .05), new THREE.MeshBasicMaterial({ color: 0x1a120a })); sp.rotation.z = k / 12 * Math.PI; sp.position.set(0, 7.5, -LEN + 4.1); scene.add(sp); }
  const ring = new THREE.Mesh(new THREE.RingGeometry(1.0, 1.12, 48), new THREE.MeshBasicMaterial({ color: 0x1a120a })); ring.position.set(0, 7.5, -LEN + 4.12); scene.add(ring);
  // Spitzbogenfenster (leuchten blau), Säulen dazwischen
  const winShape = new THREE.Shape(); winShape.moveTo(-.8, 0); winShape.lineTo(-.8, 4); winShape.absarc(0, 4, .8, Math.PI, Math.PI / 2, true); winShape.absarc(0, 4, .8, Math.PI / 2, 0, true); winShape.lineTo(.8, 0); winShape.closePath();
  const winGeo = new THREE.ShapeGeometry(winShape, 12), winMat = new THREE.MeshBasicMaterial({ color: 0x4a64b8, fog: true });
  const pillarGeo = new THREE.BoxGeometry(.7, HT, .7), pillarMat = new THREE.MeshStandardMaterial({ map: stone, color: 0x7a7064, roughness: .9 });
  for(let z = 2; z > -LEN + 6; z -= 4.5){
    [-1, 1].forEach((sd)=>{
      const w = new THREE.Mesh(winGeo, winMat); w.rotation.y = -sd * Math.PI / 2; w.position.set(sd * (HW - .02), 4.2, z - 2.2); scene.add(w);
      // Fenstersprossen
      for(let k = 1; k < 4; k++){ const bar = new THREE.Mesh(new THREE.BoxGeometry(.05, .05, 1.6), new THREE.MeshBasicMaterial({ color: 0x0a0a12 })); bar.position.set(sd * (HW - .04), 4.2 + k * 1.1, z - 2.2); scene.add(bar); }
      const p = new THREE.Mesh(pillarGeo, pillarMat); p.position.set(sd * (HW - .35), HT / 2, z); scene.add(p);
    });
  }
  // Tafeln mit Bänken und goldenen Kelchen und Tellern
  const wood = new THREE.MeshStandardMaterial({ color: 0x4a2c18, roughness: .55, metalness: .05 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xE0B860, metalness: 1, roughness: .25 });
  const cup = new THREE.LatheGeometry([[0, 0], [.09, 0], [.02, .03], [.02, .14], [.1, .2], [.11, .32], [.1, .33]].map(([x, y])=> new THREE.Vector2(x, y)), 16);
  const plate = new THREE.CylinderGeometry(.18, .16, .02, 24);
  const cups = [], plates = [];
  [-3.4, -1.1, 1.1, 3.4].forEach((x)=>{
    const t = new THREE.Mesh(new THREE.BoxGeometry(1.2, .12, LEN - 12), wood); t.position.set(x, .8, -LEN / 2 + 6); scene.add(t);
    [-1, 1].forEach((sd)=>{ const b = new THREE.Mesh(new THREE.BoxGeometry(.4, .08, LEN - 12), wood); b.position.set(x + sd * .9, .45, -LEN / 2 + 6); scene.add(b); });
    for(let z = -.5; z > -LEN + 12; z -= 1.1) [-1, 1].forEach((sd)=>{ cups.push([x + sd * .32, .86, z]); plates.push([x + sd * .32, .87, z - .45]); });
  });
  const mtx = new THREE.Matrix4();
  const cupI = new THREE.InstancedMesh(cup, gold, cups.length); cups.forEach((p, i)=>{ mtx.makeTranslation(...p); cupI.setMatrixAt(i, mtx); }); scene.add(cupI);
  const plI = new THREE.InstancedMesh(plate, gold, plates.length); plates.forEach((p, i)=>{ mtx.makeTranslation(...p); plI.setMatrixAt(i, mtx); }); scene.add(plI);
  // Lichter über den Tafeln
  // nur drei Lichter (viele Punktlichter machen jedes Material teuer)
  [-3, -15, -28].forEach((z)=>{ const l = new THREE.PointLight(0xffb060, 40, 26, 1.2); l.position.set(0, 7, z); scene.add(l); });

  // Schwebende Kerzen
  const N = compact ? 110 : 260, r = rng(13), wax = new THREE.MeshStandardMaterial({ color: 0xF2EAD8, roughness: .6, emissive: 0x402a10, emissiveIntensity: .4 });
  const candleGeo = new THREE.CylinderGeometry(.045, .05, .5, 10); candleGeo.translate(0, -.25, 0);
  const candles = new THREE.InstancedMesh(candleGeo, wax, N); scene.add(candles);
  const fl = new Float32Array(N * 3), C = [];
  for(let i = 0; i < N; i++){ const c = { x: (r() - .5) * (HW * 2 - 2), y: 5 + r() * 5, z: -1 - r() * (LEN - 6), ph: r() * TAU, s: .7 + r() * .6 }; C.push(c); }
  const flGeo = new THREE.BufferGeometry(); flGeo.setAttribute("position", new THREE.BufferAttribute(fl, 3));
  const flames = new THREE.Points(flGeo, new THREE.PointsMaterial({ map: flameTexture(), size: .5, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xffffff }));
  scene.add(flames);
  const place = (t, still)=>{
    C.forEach((c, i)=>{
      const y = c.y + (still ? 0 : Math.sin(t * .0009 + c.ph) * .12);
      mtx.makeScale(c.s, c.s, c.s); mtx.setPosition(c.x, y, c.z); candles.setMatrixAt(i, mtx);
      fl[i * 3] = c.x; fl[i * 3 + 1] = y + .06; fl[i * 3 + 2] = c.z;
    });
    candles.instanceMatrix.needsUpdate = true; flGeo.attributes.position.needsUpdate = true;
  };
  flames.material.size = .5;

  let W = 1, H = 1, mx = 0, my = 0;
  return {
    resize(w, h, dpr){ W = w; H = h; renderer.setPixelRatio(Math.min(dpr, 1.75)); renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w < h ? 68 : 50; camera.updateProjectionMatrix(); },
    render(t, dt, still, s){
      if(s.near){ mx += (s.px - mx) * .04; my += (s.py - my) * .04; }
      const z = still ? 1 : 2 - ((t * .0004) % 14), sc = s.scroll;
      camera.position.set(mx * .5, 2.4 + sc * 1.5, z + 3);
      camera.lookAt(mx * 1.5, 4.2 + sc * 9 - my * .5, z - 10);
      place(t, still);
      flames.material.size = 1.1 + (still ? 0 : Math.sin(t * .01) * .06);
      renderer.render(scene, camera);
    },
    dispose(){ renderer.dispose(); pmrem.dispose(); scene.traverse((o)=>{ o.geometry?.dispose?.(); }); },
  };
}
