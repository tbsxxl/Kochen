// Zwei Städte – 3D-Kopf (Dez. 2026, vierte Fassung): ein leuchtend blauer Kristall schwebt in sich drehenden Messingringen
// (Gyroskop), Funken steigen auf. Oben goldene Türme im Abendlicht, unten die Unterstadt in giftgrünem Dunst mit Rohren und
// pinken/türkisen Lichtern; pinke Farbspritzer fliegen durchs Bild. Scrollen sinkt hinab in die Unterstadt. Three.js r170.
import * as THREE from "../vendor/three/three.module.min.js";
import { RoomEnvironment } from "../vendor/three/RoomEnvironment.js";

const TAU = Math.PI * 2;
const rng = (seed)=>{ let s = seed; return ()=>{ s = (s * 9301 + 49297) % 233280; return s / 233280; }; };
const dotTex = (inner, outer)=>{ const c = document.createElement("canvas"); c.width = c.height = 64; const g = c.getContext("2d"), q = g.createRadialGradient(32, 32, 0, 32, 32, 32); q.addColorStop(0, inner); q.addColorStop(1, outer); g.fillStyle = q; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); };

function skyTexture(){
  const c = document.createElement("canvas"); c.width = 16; c.height = 1024; const g = c.getContext("2d");
  const gr = g.createLinearGradient(0, 0, 0, 1024);
  gr.addColorStop(0, "#2B1A10"); gr.addColorStop(.25, "#C8874A"); gr.addColorStop(.42, "#F3D19A"); gr.addColorStop(.55, "#3E4A3A"); gr.addColorStop(.75, "#10241C"); gr.addColorStop(1, "#05100C");
  g.fillStyle = gr; g.fillRect(0, 0, 16, 1024); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function create(canvas){
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.1;
  const scene = new THREE.Scene(); scene.background = skyTexture();
  const pmrem = new THREE.PMREMGenerator(renderer); scene.environment = pmrem.fromScene(new RoomEnvironment(), .04).texture; scene.environmentIntensity = .7;
  const camera = new THREE.PerspectiveCamera(45, 1, .1, 300);
  const warm = new THREE.DirectionalLight(0xffd08a, 2.2); warm.position.set(-6, 10, 6); scene.add(warm);
  scene.add(new THREE.HemisphereLight(0xffe2b0, 0x0a3a24, .6));
  const r = rng(17);

  const brass = new THREE.MeshStandardMaterial({ color: 0xD4A456, metalness: 1, roughness: .28 });
  const copper = new THREE.MeshStandardMaterial({ color: 0xA8653A, metalness: 1, roughness: .35 });

  // Kristall: blaues Oktaeder (gestreckt), leuchtend, mit innerem Kern
  const core = new THREE.Group(); scene.add(core);
  const crGeo = new THREE.OctahedronGeometry(1, 0); crGeo.scale(.75, 1.35, .75);
  const crystal = new THREE.Mesh(crGeo, new THREE.MeshPhysicalMaterial({ color: 0x2FA8FF, emissive: 0x0A5CFF, emissiveIntensity: 1.2, metalness: 0, roughness: .05, transmission: .4, thickness: 1, flatShading: true }));
  core.add(crystal);
  const inner = new THREE.Mesh(new THREE.OctahedronGeometry(.45, 0), new THREE.MeshBasicMaterial({ color: 0xE8FCFF })); inner.scale.set(.7, 1.2, .7); core.add(inner);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: dotTex("rgba(90,190,255,.7)", "rgba(40,120,255,0)"), blending: THREE.AdditiveBlending, depthWrite: false })); glow.scale.set(3.6, 3.6, 1); core.add(glow);
  const cl = new THREE.PointLight(0x4ab8ff, 18, 10, 1.6); core.add(cl);
  // Gyroskop-Ringe mit Zahnkranz
  const rings = [];
  [[1.9, .07, brass], [2.25, .06, copper], [2.6, .08, brass]].forEach(([R, tb, m], i)=>{
    const h = new THREE.Group(); core.add(h);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(R, tb, 16, 160), m); h.add(ring);
    const teeth = new THREE.InstancedMesh(new THREE.BoxGeometry(.06, .16, .1), m, 64), mx = new THREE.Matrix4(), q = new THREE.Quaternion();
    for(let k = 0; k < 64; k++){ const a = k / 64 * TAU; q.setFromAxisAngle(new THREE.Vector3(0, 0, 1), a); mx.compose(new THREE.Vector3(Math.cos(a) * (R + tb + .05), Math.sin(a) * (R + tb + .05), 0), q, new THREE.Vector3(1, 1, 1)); teeth.setMatrixAt(k, mx); }
    h.add(teeth);
    [0, Math.PI].forEach((a)=>{ const n = new THREE.Mesh(new THREE.SphereGeometry(.13, 16, 12), copper); n.position.set(Math.cos(a) * R, Math.sin(a) * R, 0); h.add(n); });
    h.rotation.set(i * .8, i * .5, 0); rings.push(h);
  });

  // obere Stadt: goldene Art-déco-Türme
  const towerMat = new THREE.MeshStandardMaterial({ color: 0xE7C27F, metalness: .7, roughness: .35 });
  const winMat = new THREE.MeshBasicMaterial({ color: 0xFFE7B0 });
  for(let i = 0; i < 26; i++){
    const x = (r() - .5) * 60, z = -18 - r() * 40, h = 8 + r() * 18, w = 1 + r() * 1.6;
    if(Math.abs(x) < 5 && z > -24) continue;
    const g = new THREE.Group(); g.position.set(x, 2, z); scene.add(g);
    let y = 0, ww = w;
    for(let k = 0; k < 3; k++){ const hh = h * [.55, .3, .15][k]; const b = new THREE.Mesh(new THREE.BoxGeometry(ww, hh, ww), towerMat); b.position.y = y + hh / 2; g.add(b);
      for(let j = 0; j < 4; j++){ const strip = new THREE.Mesh(new THREE.PlaneGeometry(ww * .12, hh * .85), winMat); strip.position.set(-ww * .3 + j * ww * .2, y + hh / 2, ww / 2 + .01); g.add(strip); }
      y += hh; ww *= .72; }
    const sp = new THREE.Mesh(new THREE.ConeGeometry(ww * .5, 2.5, 4), towerMat); sp.position.y = y + 1.25; sp.rotation.y = Math.PI / 4; g.add(sp);
  }
  // Brücken-Bögen in der Oberstadt
  for(let i = 0; i < 4; i++){ const a = new THREE.Mesh(new THREE.TorusGeometry(6 + i * 2, .25, 8, 64, Math.PI), towerMat); a.position.set(-12 + i * 9, 6 + r() * 4, -28 - r() * 10); scene.add(a); }

  // Unterstadt: dunkle Blöcke, Rohre, Leuchtzeichen, Dunst
  const under = new THREE.Group(); under.position.y = -17; scene.add(under);
  const dark = new THREE.MeshStandardMaterial({ color: 0x1E2B26, roughness: .9, metalness: .3 });
  const pipe = new THREE.MeshStandardMaterial({ color: 0x5A4A36, metalness: .8, roughness: .5 });
  const neon = [0xFF3FA4, 0x2AF5D6, 0xFF3FA4, 0xB2FF4A];
  for(let i = 0; i < 40; i++){
    const x = (r() - .5) * 50, z = -12 - r() * 35, h = 4 + r() * 10, w = 2 + r() * 3;
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, w), dark); b.position.set(x, h / 2 - 4, z); under.add(b);
    if(r() > .4){ const s = new THREE.Mesh(new THREE.PlaneGeometry(.8 + r(), .3 + r() * .4), new THREE.MeshBasicMaterial({ color: neon[i % 4] })); s.position.set(x, h - 4 - r() * 3, z + w / 2 + .02); under.add(s); }
  }
  for(let i = 0; i < 14; i++){ const p = new THREE.Mesh(new THREE.CylinderGeometry(.18, .18, 40, 10), pipe); p.rotation.z = Math.PI / 2; p.rotation.y = (r() - .5) * .6; p.position.set(0, -2 + r() * 8, -8 - r() * 30); under.add(p); }
  const fogTex = dotTex("rgba(110,230,160,.35)", "rgba(110,230,160,0)"), hazes = [];
  for(let i = 0; i < 26; i++){ const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: fogTex, transparent: true, depthWrite: false })); s.scale.set(18, 8, 1); s.position.set((r() - .5) * 50, -2 + r() * 6, -6 - r() * 30); under.add(s); hazes.push({ s, ph: r() * TAU }); }

  // Funken um den Kristall und pinke Farbspritzer
  const N = 220, pos = new Float32Array(N * 3), P = [];
  for(let i = 0; i < N; i++){ P.push({ a: r() * TAU, R: 2 + r() * 5, y: (r() - .5) * 8, sp: .2 + r() * .8 }); }
  const sGeo = new THREE.BufferGeometry(); sGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const sparks = new THREE.Points(sGeo, new THREE.PointsMaterial({ map: dotTex("rgba(160,235,255,1)", "rgba(80,180,255,0)"), size: .18, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  scene.add(sparks);
  const splat = [], spGeo = new THREE.IcosahedronGeometry(.12, 1), spMat = new THREE.MeshBasicMaterial({ color: 0xFF2E9A });
  for(let i = 0; i < 40; i++){ const m = new THREE.Mesh(spGeo, spMat); m.scale.setScalar(.4 + r() * 1.6); scene.add(m); splat.push({ m, x: (r() - .5) * 14, y: (r() - .5) * 10, z: -2 + r() * 4, v: .5 + r() }); }

  let W = 1, H = 1, mx = 0, my = 0;
  return {
    resize(w, h, dpr){ W = w; H = h; renderer.setPixelRatio(Math.min(dpr, 1.75)); renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w < h ? 62 : 45; camera.updateProjectionMatrix(); },
    render(t, dt, still, s){
      if(s.near){ mx += (s.px - mx) * .05; my += (s.py - my) * .05; }
      const sc = s.scroll, port = W < H;
      core.position.set(0, port ? -1.2 : -.3, 0);
      camera.position.set(mx * 1.5, 1 - sc * 12 - my, port ? 12 : 10);
      camera.lookAt(0, -sc * 12 + (port ? 2.2 : 1.2), -6);
      const T = still ? 0 : t;
      crystal.rotation.y = T * .0006; inner.rotation.y = -T * .001;
      core.position.y += still ? 0 : Math.sin(t * .0012) * .15;
      rings[0].rotation.x = .2 + T * .0005; rings[1].rotation.y = .6 + T * .0007; rings[2].rotation.z = T * .0004; rings[2].rotation.x = 1.1 + T * .0002;
      cl.intensity = 18 + (still ? 0 : Math.sin(t * .004) * 6);
      P.forEach((p, i)=>{ const a = p.a + T * .0004 * p.sp; pos[i * 3] = Math.cos(a) * p.R; pos[i * 3 + 1] = core.position.y + ((p.y + T * .001 * p.sp) % 8 + 8) % 8 - 4; pos[i * 3 + 2] = Math.sin(a) * p.R; });
      sGeo.attributes.position.needsUpdate = true;
      splat.forEach((p)=>{ p.m.position.set(p.x + Math.sin(T * .0004 * p.v + p.y) * .5, core.position.y + p.y + Math.cos(T * .0003 * p.v + p.x) * .4, p.z); });
      hazes.forEach((h)=>{ h.s.material.opacity = .6 + Math.sin(T * .0007 + h.ph) * .3; });
      renderer.render(scene, camera);
    },
    dispose(){ renderer.dispose(); pmrem.dispose(); scene.traverse((o)=>{ o.geometry?.dispose?.(); }); },
  };
}
