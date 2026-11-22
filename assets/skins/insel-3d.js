// Die Insel – 3D-Kopf (Dez. 2026, vierte Fassung): Strand in der Abenddämmerung mit dem Rumpf eines abgestürzten Flugzeugs, abgerissener
// Tragfläche und Triebwerk im Sand, Palmen, die sich im Wind wiegen, ein Lagerfeuer mit Funken, dahinter dunkler Dschungel und das
// bewegte Meer, in dem sich der letzte Himmelsstreifen spiegelt. Die Kamera gleitet langsam am Wrack entlang. Three.js r170.
import * as THREE from "../vendor/three/three.module.min.js";
import { RoomEnvironment } from "../vendor/three/RoomEnvironment.js";

const TAU = Math.PI * 2;
const rng = (seed)=>{ let s = seed; return ()=>{ s = (s * 9301 + 49297) % 233280; return s / 233280; }; };
const dotTex = (inner, outer)=>{ const c = document.createElement("canvas"); c.width = c.height = 64; const g = c.getContext("2d"), q = g.createRadialGradient(32, 32, 0, 32, 32, 32); q.addColorStop(0, inner); q.addColorStop(1, outer); g.fillStyle = q; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); };

function skyTexture(){
  const W = 1024, H = 1024, c = document.createElement("canvas"); c.width = W; c.height = H; const g = c.getContext("2d"), r = rng(4);
  const gr = g.createLinearGradient(0, 0, 0, H);
  gr.addColorStop(0, "#0B1424"); gr.addColorStop(.22, "#1E3050"); gr.addColorStop(.36, "#5A4466"); gr.addColorStop(.44, "#C8704E"); gr.addColorStop(.49, "#F6AE66"); gr.addColorStop(.52, "#FFD49A"); gr.addColorStop(1, "#FFD49A");
  g.fillStyle = gr; g.fillRect(0, 0, W, H);
  for(let i = 0; i < 400; i++){ const y = r() * H * .3; g.fillStyle = `rgba(255,255,255,${(1 - y / (H * .3)) * r() * .8})`; g.fillRect(r() * W, y, 1.5, 1.5); }
  // lange Wolkenstreifen
  for(let i = 0; i < 18; i++){ const y = H * (.36 + r() * .12), x = r() * W, w = 200 + r() * 400; g.fillStyle = `rgba(${90 + r() * 40},${50 + r() * 30},${60 + r() * 20},.45)`; g.beginPath(); g.ellipse(x, y, w, 6 + r() * 10, 0, 0, TAU); g.fill(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function sandTexture(){
  const c = document.createElement("canvas"); c.width = c.height = 256; const g = c.getContext("2d"), r = rng(8);
  g.fillStyle = "#B89A72"; g.fillRect(0, 0, 256, 256); for(let i = 0; i < 9000; i++){ const v = r(); g.fillStyle = `rgba(${v > .5 ? "255,240,210" : "70,50,30"},${r() * .18})`; g.fillRect(r() * 256, r() * 256, 1.5, 1.5); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(20, 20); return t;
}

export function create(canvas){
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene(); scene.fog = new THREE.Fog(0x6a5a6a, 30, 120);
  const sky = new THREE.Mesh(new THREE.SphereGeometry(200, 32, 16), new THREE.MeshBasicMaterial({ map: skyTexture(), side: THREE.BackSide, fog: false })); scene.add(sky);
  const pmrem = new THREE.PMREMGenerator(renderer); scene.environment = pmrem.fromScene(new RoomEnvironment(), .04).texture; scene.environmentIntensity = .35;
  const camera = new THREE.PerspectiveCamera(45, 1, .1, 400);
  const sun = new THREE.DirectionalLight(0xffb070, 2.4); sun.position.set(-30, 8, -60); sun.castShadow = true; sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, { left: -20, right: 20, top: 20, bottom: -20, far: 150 }); scene.add(sun);
  scene.add(new THREE.HemisphereLight(0x6a80b8, 0x3a2a1a, .7));
  const r = rng(29);

  // Meer: bewegte Wellen (Vertex-Verschiebung), spiegelt den Himmel über die Umgebung
  const seaGeo = new THREE.PlaneGeometry(400, 200, 160, 80); seaGeo.rotateX(-Math.PI / 2);
  const sea = new THREE.Mesh(seaGeo, new THREE.MeshStandardMaterial({ color: 0x1E3A50, metalness: .6, roughness: .18 })); sea.position.set(0, -.2, -100); scene.add(sea);
  const seaBase = seaGeo.attributes.position.array.slice();
  // Sonnenglitzern auf dem Wasser
  const glint = new THREE.Mesh(new THREE.PlaneGeometry(14, 120), new THREE.MeshBasicMaterial({ map: dotTex("rgba(255,200,130,.55)", "rgba(255,170,90,0)"), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  glint.rotation.x = -Math.PI / 2; glint.position.set(-12, 0, -80); void glint;
  // Strand
  const sandGeo = new THREE.PlaneGeometry(200, 60, 60, 20); sandGeo.rotateX(-Math.PI / 2);
  const sp = sandGeo.attributes.position; for(let i = 0; i < sp.count; i++){ const z = sp.getZ(i); sp.setY(i, (z + 30) * .03 + Math.sin(sp.getX(i) * .2) * .15 + (r() - .5) * .05); } sandGeo.computeVertexNormals();
  const sand = new THREE.Mesh(sandGeo, new THREE.MeshStandardMaterial({ map: sandTexture(), color: 0x9a8a78, roughness: 1 })); sand.position.set(0, -.6, 6); sand.receiveShadow = true; scene.add(sand);
  // Brandungssaum
  const foam = new THREE.Mesh(new THREE.PlaneGeometry(200, 1.2), new THREE.MeshBasicMaterial({ color: 0xEFE8DA, transparent: true, opacity: .55, depthWrite: false })); foam.rotation.x = -Math.PI / 2; foam.position.set(0, -.15, -23.5); scene.add(foam);

  // Flugzeugwrack: Rumpfteil mit Fensterreihe, abgerissene Kante, Tragfläche, Triebwerk
  const hull = new THREE.MeshStandardMaterial({ color: 0xD8D8D2, metalness: .6, roughness: .45 });
  const darkM = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: .8 });
  const stripe = new THREE.MeshStandardMaterial({ color: 0x2C5A9A, metalness: .4, roughness: .5 });
  const plane = new THREE.Group(); plane.position.set(5, .3, -4); plane.rotation.set(0, -.5, .14); scene.add(plane);
  const body = new THREE.Mesh(new THREE.CylinderGeometry(1.9, 1.9, 13, 40, 1, true), hull); body.rotation.z = Math.PI / 2; body.castShadow = true; plane.add(body);
  const inside = new THREE.Mesh(new THREE.CylinderGeometry(1.85, 1.85, 13, 40, 1, true), new THREE.MeshStandardMaterial({ color: 0x2a2620, side: THREE.BackSide })); inside.rotation.z = Math.PI / 2; plane.add(inside);
  const band = new THREE.Mesh(new THREE.CylinderGeometry(1.92, 1.92, 13, 40, 1, true, -.25, .5), stripe); band.rotation.z = Math.PI / 2; band.rotation.x = Math.PI / 2; plane.add(band);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(1.9, 32, 16, 0, TAU, 0, Math.PI / 2), hull); nose.rotation.z = -Math.PI / 2; nose.scale.set(1, 1.8, 1); nose.position.x = -6.5; nose.castShadow = true; plane.add(nose);
  for(let i = 0; i < 14; i++){ const w = new THREE.Mesh(new THREE.BoxGeometry(.32, .42, .05), darkM); w.position.set(-5 + i * .8, .55, 1.86); plane.add(w); }
  // gezackte Abrisskante
  const jag = new THREE.Group(); jag.position.x = 6.5; plane.add(jag);
  for(let i = 0; i < 26; i++){ const a = i / 26 * TAU, sh = new THREE.Mesh(new THREE.BoxGeometry(.4 + r() * 1.1, .5, .06), hull); sh.position.set(.2 + r() * .4, Math.sin(a) * 1.9, Math.cos(a) * 1.9); sh.rotation.x = -a; sh.rotation.y = (r() - .5) * .6; jag.add(sh); }
  const wing = new THREE.Mesh(new THREE.BoxGeometry(3.2, .22, 11), hull); wing.position.set(-1, -1.3, -6); wing.rotation.set(.1, .25, -.08); wing.castShadow = true; plane.add(wing);
  const eng = new THREE.Mesh(new THREE.CylinderGeometry(.9, .75, 2.8, 28), hull); eng.rotation.z = Math.PI / 2; eng.position.set(-1.2, -2, -4); eng.castShadow = true; plane.add(eng);
  const engIn = new THREE.Mesh(new THREE.CircleGeometry(.75, 28), darkM); engIn.rotation.y = -Math.PI / 2; engIn.position.set(-2.62, -2, -4); plane.add(engIn);
  // Trümmer und Koffer im Sand
  for(let i = 0; i < 22; i++){ const d = new THREE.Mesh(new THREE.BoxGeometry(.3 + r() * 1.2, .1 + r() * .5, .3 + r() * .8), i % 3 ? hull : new THREE.MeshStandardMaterial({ color: [0x6a2a1a, 0x2a3a5a, 0x3a3a2a][i % 3], roughness: .8 })); d.position.set(-8 + r() * 22, -.4, -8 + r() * 12); d.rotation.set(r(), r() * 3, r() * .3); d.castShadow = true; scene.add(d); }

  // Palmen
  const trunkM = new THREE.MeshStandardMaterial({ color: 0x5A4430, roughness: .95 }), leafM = new THREE.MeshStandardMaterial({ color: 0x1E3A22, roughness: .8, side: THREE.DoubleSide });
  const frondGeo = (()=>{ const L = 4.2, g = new THREE.PlaneGeometry(L, 1.1, 16, 4); const p = g.attributes.position; for(let i = 0; i < p.count; i++){ const x = p.getX(i) + L / 2, y = p.getY(i), w = Math.sin(x / L * Math.PI) * (1 - x / L * .3); p.setXYZ(i, x, -Math.pow(x / L, 2) * 1.8, y * w + Math.sign(y) * Math.abs(Math.sin(x * 6)) * .05); } g.computeVertexNormals(); return g; })();
  const palms = [];
  [[-9, -3, 9, .3], [-12, 2, 7, -.2], [-5, -10, 11, .25], [14, -12, 10, -.3], [18, -2, 8, .2], [-17, -8, 12, .15], [10, 4, 6, -.15]].forEach(([x, z, h, lean])=>{
    const g = new THREE.Group(); g.position.set(x, -.5, z); scene.add(g);
    const pts = []; for(let k = 0; k <= 10; k++){ const u = k / 10; pts.push(new THREE.Vector3(Math.sin(u * 1.4) * lean * h * .4, u * h, 0)); }
    const curve = new THREE.CatmullRomCurve3(pts);
    const tr = new THREE.Mesh(new THREE.TubeGeometry(curve, 20, .22, 8), trunkM); tr.castShadow = true; g.add(tr);
    const top = new THREE.Group(); top.position.copy(pts[10]); g.add(top);
    for(let k = 0; k < 11; k++){ const f = new THREE.Mesh(frondGeo, leafM); f.rotation.y = k / 11 * TAU + r() * .3; f.rotation.z = .25 + r() * .3; f.castShadow = true; top.add(f); }
    palms.push({ top, ph: r() * TAU });
  });
  // Dschungel dahinter: dunkle, unregelmäßige Hügel
  const jung = new THREE.MeshStandardMaterial({ color: 0x0E1E12, roughness: 1 });
  for(let i = 0; i < 30; i++){ const b = new THREE.Mesh(new THREE.IcosahedronGeometry(3 + r() * 5, 1), jung); b.position.set(-60 + i * 4.2 + r() * 2, 1 + r() * 3, 26 + r() * 8); b.scale.y = .6 + r() * .8; scene.add(b); }

  // Lagerfeuer mit Funken
  const fire = new THREE.Group(); fire.position.set(-3, -.4, 1.5); scene.add(fire);
  for(let i = 0; i < 6; i++){ const l = new THREE.Mesh(new THREE.CylinderGeometry(.08, .1, 1.4, 8), trunkM); l.rotation.set(Math.PI / 2 - .5, i / 6 * TAU, 0); l.position.y = .3; fire.add(l); }
  const flame = new THREE.Sprite(new THREE.SpriteMaterial({ map: dotTex("rgba(255,170,70,1)", "rgba(255,90,20,0)"), blending: THREE.AdditiveBlending, depthWrite: false })); flame.position.y = .8; flame.scale.set(1.6, 2.2, 1); fire.add(flame);
  const fl = new THREE.PointLight(0xff8a30, 14, 14, 1.6); fl.position.y = 1; fl.castShadow = false; fire.add(fl);
  const NS = 60, spos = new Float32Array(NS * 3), S = []; for(let i = 0; i < NS; i++) S.push({ y: r() * 2.5, x: (r() - .5) * .4, z: (r() - .5) * .4, v: .6 + r() });
  const sg = new THREE.BufferGeometry(); sg.setAttribute("position", new THREE.BufferAttribute(spos, 3));
  const sparks = new THREE.Points(sg, new THREE.PointsMaterial({ map: dotTex("rgba(255,200,120,1)", "rgba(255,120,40,0)"), size: .09, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); fire.add(sparks);

  let W = 1, H = 1, mx = 0, my = 0;
  return {
    resize(w, h, dpr){ W = w; H = h; renderer.setPixelRatio(Math.min(dpr, 1.75)); renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w < h ? 60 : 42; camera.updateProjectionMatrix(); },
    render(t, dt, still, s){
      if(s.near){ mx += (s.px - mx) * .04; my += (s.py - my) * .04; }
      const T = still ? 0 : t, sc = s.scroll, port = W < H;
      const a = Math.sin(T * .00006);
      camera.position.set(-3 + a * 5 + mx * 1.5, 2.4 + sc * 3 - my * .5, port ? 17 : 21);
      camera.lookAt(-1 + a * 2, port ? 3.4 : 2.2, -10);
      const p = seaGeo.attributes.position.array;
      for(let i = 0; i < p.length; i += 3){ const x = seaBase[i], z = seaBase[i + 2]; p[i + 1] = Math.sin(x * .12 + T * .0011) * .25 + Math.sin(z * .2 - T * .0016) * .35 + Math.sin((x + z) * .4 + T * .002) * .08; }
      seaGeo.attributes.position.needsUpdate = true; seaGeo.computeVertexNormals();
      foam.material.opacity = .35 + Math.sin(T * .0016) * .2; foam.position.z = -23.5 + Math.sin(T * .0016) * .5;
      palms.forEach((pl)=>{ pl.top.rotation.z = Math.sin(T * .0012 + pl.ph) * .06; pl.top.rotation.x = Math.sin(T * .0009 + pl.ph) * .04; });
      flame.scale.set(1.5 + Math.sin(T * .02) * .15, 2.1 + Math.sin(T * .017) * .25, 1); fl.intensity = 13 + Math.sin(T * .023) * 3;
      S.forEach((q, i)=>{ const y = (q.y + T * .0012 * q.v) % 2.5; spos[i * 3] = q.x + Math.sin(y * 2 + i) * .3; spos[i * 3 + 1] = .6 + y; spos[i * 3 + 2] = q.z; }); sg.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    },
    dispose(){ renderer.dispose(); pmrem.dispose(); scene.traverse((o)=>{ o.geometry?.dispose?.(); }); },
  };
}
