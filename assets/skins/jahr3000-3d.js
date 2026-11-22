// Jahr 3000 – 3D-Kopf (Dez. 2026, vierte Fassung): Zukunftsstadt im Comic-Stil (Toon-Schattierung mit schwarzen Umrissen) in der
// Dämmerung: schlanke Türme mit Untertassen-Dächern und Kuppeln, gläserne Röhrenbahnen, durch die Kapseln sausen, fliegende Autos
// mit Lichtspur, ein Ringplanet am Himmel. Die Kamera schwebt langsam zwischen den Türmen. Alles selbst gebaut (Three.js r170).
import * as THREE from "../vendor/three/three.module.min.js";

const TAU = Math.PI * 2;
const rng = (seed)=>{ let s = seed; return ()=>{ s = (s * 9301 + 49297) % 233280; return s / 233280; }; };

function skyTexture(){
  const c = document.createElement("canvas"); c.width = 16; c.height = 512; const g = c.getContext("2d");
  const gr = g.createLinearGradient(0, 0, 0, 512);
  gr.addColorStop(0, "#1A1446"); gr.addColorStop(.45, "#5A2F7A"); gr.addColorStop(.7, "#E0607A"); gr.addColorStop(.85, "#FFB36B"); gr.addColorStop(1, "#FFE3A0");
  g.fillStyle = gr; g.fillRect(0, 0, 16, 512);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function toonRamp(){
  const d = new Uint8Array([90, 170, 255]); const t = new THREE.DataTexture(d, 3, 1, THREE.RedFormat);
  t.minFilter = t.magFilter = THREE.NearestFilter; t.needsUpdate = true; return t;
}

export function create(canvas){
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene(); scene.background = skyTexture(); scene.fog = new THREE.Fog(0xE07A80, 40, 140);
  const camera = new THREE.PerspectiveCamera(50, 1, .5, 400);
  const sun = new THREE.DirectionalLight(0xfff0d8, 2.4); sun.position.set(-30, 40, -20); scene.add(sun);
  scene.add(new THREE.AmbientLight(0x8a7ac8, 1.1));
  const ramp = toonRamp();
  const toon = (c)=> new THREE.MeshToonMaterial({ color: c, gradientMap: ramp });
  const inkMat = new THREE.MeshBasicMaterial({ color: 0x14102a, side: THREE.BackSide });
  const city = new THREE.Group(); scene.add(city);
  // Umriss: dieselbe Form etwas größer, nur Rückseiten, dunkel
  const ink = (mesh, k = 1.06)=>{ const o = new THREE.Mesh(mesh.geometry, inkMat); o.scale.setScalar(k); mesh.add(o); return mesh; };

  // Ringplanet
  const planet = new THREE.Group(); planet.position.set(-25, 80, -200); scene.add(planet);
  const pb = new THREE.Mesh(new THREE.SphereGeometry(22, 48, 32), new THREE.MeshToonMaterial({ color: 0xF2A65A, gradientMap: ramp, fog: false })); planet.add(pb);
  const pr = new THREE.Mesh(new THREE.RingGeometry(28, 40, 96), new THREE.MeshBasicMaterial({ color: 0xFFD7A0, side: THREE.DoubleSide, transparent: true, opacity: .8, fog: false })); pr.rotation.x = 1.25; pr.rotation.y = .3; planet.add(pr);

  // Boden
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(600, 600), toon(0x2A2350)); ground.rotation.x = -Math.PI / 2; ground.position.y = -1; scene.add(ground);

  const PAL = [0x6FD3C1, 0xF6C35B, 0x8FA8FF, 0xF08AA8, 0xB8E07A, 0xEDEFF6];
  const r = rng(21), towers = [];
  const winTex = (()=>{ const c = document.createElement("canvas"); c.width = 64; c.height = 128; const g = c.getContext("2d"); g.fillStyle = "#fff"; g.fillRect(0, 0, 64, 128); g.fillStyle = "#FFE08A"; for(let y = 8; y < 128; y += 16) for(let x = 6; x < 64; x += 14) if(r() > .35){ g.beginPath(); g.arc(x + 4, y + 4, 3.6, 0, TAU); g.fill(); g.strokeStyle = "#14102a"; g.lineWidth = 1.5; g.stroke(); } const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; })();
  const tower = (x, z, h, col, kind)=>{
    const g = new THREE.Group(); g.position.set(x, 0, z); city.add(g);
    const w = 1.6 + r() * 1.6;
    const shaftGeo = kind === 2 ? new THREE.CylinderGeometry(w * .55, w * .8, h, 24) : new THREE.CylinderGeometry(w * .7, w * .7, h, 24);
    const tex = winTex.clone(); tex.repeat.set(3, h / 6); tex.needsUpdate = true;
    const shaft = ink(new THREE.Mesh(shaftGeo, new THREE.MeshToonMaterial({ color: col, gradientMap: ramp, map: tex }))); shaft.position.y = h / 2; g.add(shaft);
    if(kind === 0){ // Untertasse
      const sa = ink(new THREE.Mesh(new THREE.CylinderGeometry(w * 2, w * 1.2, w * .6, 32), toon(0xEDEFF6))); sa.position.y = h + w * .2; g.add(sa);
      const dm = ink(new THREE.Mesh(new THREE.SphereGeometry(w * .9, 24, 12, 0, TAU, 0, Math.PI / 2), new THREE.MeshToonMaterial({ color: 0x9FE8FF, gradientMap: ramp, transparent: true, opacity: .85 }))); dm.position.y = h + w * .5; g.add(dm);
    } else if(kind === 1){ // Kugel auf Nadel
      const sp = ink(new THREE.Mesh(new THREE.SphereGeometry(w * 1.1, 32, 20), toon(PAL[(PAL.indexOf(col) + 2) % PAL.length]))); sp.position.y = h + w; g.add(sp);
      const nd = ink(new THREE.Mesh(new THREE.ConeGeometry(.25, w * 3, 8), toon(0xEDEFF6))); nd.position.y = h + w * 3; g.add(nd);
    } else { // gestufte Ringe
      for(let k = 0; k < 3; k++){ const rg = ink(new THREE.Mesh(new THREE.TorusGeometry(w * (1.1 - k * .2), .22, 10, 32), toon(0xEDEFF6))); rg.rotation.x = Math.PI / 2; rg.position.y = h - k * 1.6; g.add(rg); }
      const tip = ink(new THREE.Mesh(new THREE.ConeGeometry(w * .55, w * 1.6, 24), toon(0xF08AA8))); tip.position.y = h + w * .8; g.add(tip);
    }
    towers.push({ x, z, h, w });
  };
  for(let i = 0; i < 90 && towers.length < 46; i++){
    const a = r() * TAU, d = 10 + r() * 70, x = Math.cos(a) * d, z = Math.sin(a) * d - 20;
    if(z > 2 || (Math.abs(x) < 6 && z > -12)) continue;
    tower(x, z, 10 + r() * 26 + (d < 30 ? 6 : 0), PAL[i % PAL.length], i % 3);
  }

  // Röhrenbahnen: gläserne Röhren zwischen Türmen, Kapseln sausen hindurch
  const tubeMat = new THREE.MeshPhongMaterial({ color: 0xBFF4FF, transparent: true, opacity: .32, shininess: 120, depthWrite: false, side: THREE.DoubleSide });
  const capMat = toon(0xFF6B4A), tubes = [];
  for(let i = 0; i < 9; i++){
    const A = towers[Math.floor(r() * towers.length)], B = towers[Math.floor(r() * towers.length)];
    if(A === B) continue;
    const y1 = Math.min(A.h, B.h) * (.5 + r() * .4);
    const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(A.x, y1, A.z), new THREE.Vector3((A.x + B.x) / 2, y1 + 6 + r() * 6, (A.z + B.z) / 2), new THREE.Vector3(B.x, y1, B.z)]);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 48, .55, 12, false), tubeMat); city.add(tube);
    const ringGeo = new THREE.TorusGeometry(.6, .08, 6, 16);
    for(let k = 1; k < 8; k++){ const p = curve.getPointAt(k / 8), tg = curve.getTangentAt(k / 8), rg = new THREE.Mesh(ringGeo, inkMat.clone()); rg.material.side = THREE.FrontSide; rg.position.copy(p); rg.lookAt(p.clone().add(tg)); city.add(rg); }
    const caps = [0, .5].map((o)=>{ const c = ink(new THREE.Mesh(new THREE.CapsuleGeometry(.35, .9, 6, 12), capMat), 1.12); city.add(c); return { c, o }; });
    tubes.push({ curve, caps, sp: .00008 + r() * .00008 });
  }

  // Fliegende Autos mit Lichtspur
  const cars = [], carGeo = new THREE.SphereGeometry(.7, 20, 12); carGeo.scale(1.6, .55, 1);
  for(let i = 0; i < 14; i++){
    const g = new THREE.Group();
    const body = ink(new THREE.Mesh(carGeo, toon(PAL[(i + 1) % PAL.length])), 1.08); g.add(body);
    const bub = new THREE.Mesh(new THREE.SphereGeometry(.45, 16, 10, 0, TAU, 0, Math.PI / 2), new THREE.MeshPhongMaterial({ color: 0xBFF4FF, transparent: true, opacity: .55 })); bub.position.y = .25; g.add(bub);
    const trail = new THREE.Mesh(new THREE.PlaneGeometry(8, .18), new THREE.MeshBasicMaterial({ color: i % 2 ? 0x7CF7E0 : 0xFFD36B, transparent: true, opacity: .7, side: THREE.DoubleSide, depthWrite: false })); trail.position.x = -4.8; g.add(trail);
    scene.add(g);
    cars.push({ g, R: 14 + r() * 40, y: 8 + r() * 26, sp: (.00006 + r() * .00008) * (i % 2 ? 1 : -1), ph: r() * TAU, cz: -20 + (r() - .5) * 20 });
  }

  let W = 1, H = 1, mx = 0, my = 0;
  return {
    resize(w, h, dpr){ W = w; H = h; renderer.setPixelRatio(Math.min(dpr, 1.75)); renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w < h ? 66 : 50; camera.updateProjectionMatrix(); },
    render(t, dt, still, s){
      if(s.near){ mx += (s.px - mx) * .04; my += (s.py - my) * .04; }
      const a = still ? 0 : Math.sin(t * .00008), sc = s.scroll;
      camera.position.set(a * 14 + mx * 3, 12 + sc * 14 - my * 2, 40 - sc * 6);
      camera.lookAt(a * 4, 19 + sc * 4, -28);
      tubes.forEach((tb)=> tb.caps.forEach(({ c, o })=>{ const u = still ? o + .2 : (t * tb.sp + o) % 1, p = tb.curve.getPointAt(u), tg = tb.curve.getTangentAt(u); c.position.copy(p); c.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tg); }));
      cars.forEach((c)=>{ const ang = c.ph + (still ? 0 : t * c.sp); c.g.position.set(Math.cos(ang) * c.R, c.y + Math.sin(ang * 3) * .8, Math.sin(ang) * c.R + c.cz); c.g.rotation.y = -ang + (c.sp > 0 ? -Math.PI / 2 : Math.PI / 2); });
      planet.rotation.y = still ? 0 : t * .00002;
      renderer.render(scene, camera);
    },
    dispose(){ renderer.dispose(); scene.traverse((o)=>{ o.geometry?.dispose?.(); }); },
  };
}
