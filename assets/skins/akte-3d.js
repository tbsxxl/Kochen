// Akte – 3D-Kopf (Dez. 2026, vierte Fassung): Anfahrt übers dunkle Meer auf eine Felseninsel im Sturm. Auf der Klippe ein langes
// Backsteingebäude mit wenigen erleuchteten Fenstern und ein alter Leuchtturm, dessen Lichtkegel durch Regen und Nebel streicht.
// Schräger Regen, Wetterleuchten hinter den Wolken, schwere Dünung. Die Kamera schaukelt wie auf einer Fähre. Three.js r170.
import * as THREE from "../vendor/three/three.module.min.js";

const TAU = Math.PI * 2;
const rng = (seed)=>{ let s = seed; return ()=>{ s = (s * 9301 + 49297) % 233280; return s / 233280; }; };
const dotTex = (inner, outer)=>{ const c = document.createElement("canvas"); c.width = c.height = 64; const g = c.getContext("2d"), q = g.createRadialGradient(32, 32, 0, 32, 32, 32); q.addColorStop(0, inner); q.addColorStop(1, outer); g.fillStyle = q; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); };

function cloudTexture(){
  const W = 1024, H = 512, c = document.createElement("canvas"); c.width = W; c.height = H; const g = c.getContext("2d"), r = rng(6);
  const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, "#0A0E13"); gr.addColorStop(.7, "#28323C"); gr.addColorStop(1, "#3A4650"); g.fillStyle = gr; g.fillRect(0, 0, W, H);
  for(let i = 0; i < 160; i++){ const x = r() * W, y = r() * H * .9, R = 40 + r() * 140; const q = g.createRadialGradient(x, y, 0, x, y, R); const v = 20 + r() * 40; q.addColorStop(0, `rgba(${v},${v + 8},${v + 16},.5)`); q.addColorStop(1, "rgba(0,0,0,0)"); g.fillStyle = q; g.fillRect(x - R, y - R, R * 2, R * 2); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; return t;
}
function brickTexture(){
  const c = document.createElement("canvas"); c.width = 256; c.height = 128; const g = c.getContext("2d"), r = rng(12);
  g.fillStyle = "#2a1a16"; g.fillRect(0, 0, 256, 128);
  for(let y = 0; y < 128; y += 8) for(let x = (y / 8) % 2 ? -8 : 0; x < 256; x += 16){ const v = 60 + r() * 30; g.fillStyle = `rgb(${v + 20},${v - 15},${v - 25})`; g.fillRect(x + 1, y + 1, 14, 6); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}

export function create(canvas){
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.15;
  const scene = new THREE.Scene(); const fogC = new THREE.Color(0x1A222A); scene.fog = new THREE.FogExp2(fogC, .009);
  const clouds = cloudTexture();
  const sky = new THREE.Mesh(new THREE.SphereGeometry(220, 32, 16, 0, TAU, 0, Math.PI / 2), new THREE.MeshBasicMaterial({ map: clouds, side: THREE.BackSide, fog: false, color: 0xffffff })); scene.add(sky);
  const camera = new THREE.PerspectiveCamera(45, 1, .1, 500);
  const amb = new THREE.HemisphereLight(0x5a6a80, 0x0a0c10, .55); scene.add(amb);
  const moon = new THREE.DirectionalLight(0x8aa0c0, .6); moon.position.set(30, 40, -40); scene.add(moon);
  const flash = new THREE.DirectionalLight(0xdfe8ff, 0); flash.position.set(-40, 60, -80); scene.add(flash);
  const r = rng(31);

  // See: schwere Dünung
  const seaGeo = new THREE.PlaneGeometry(500, 300, 140, 90); seaGeo.rotateX(-Math.PI / 2);
  const sea = new THREE.Mesh(seaGeo, new THREE.MeshStandardMaterial({ color: 0x24343E, metalness: .45, roughness: .32, flatShading: true })); sea.position.z = -60; scene.add(sea);
  const base = seaGeo.attributes.position.array.slice();

  // Insel: Felsen
  const rock = new THREE.MeshStandardMaterial({ color: 0x2A2E30, roughness: .95, flatShading: true });
  const isl = new THREE.Group(); isl.position.set(6, 0, -70); scene.add(isl);
  const rockGeo = new THREE.IcosahedronGeometry(1, 3); const rp = rockGeo.attributes.position;
  for(let i = 0; i < rp.count; i++){ const v = new THREE.Vector3().fromBufferAttribute(rp, i); const k = 1 + (Math.sin(v.x * 7) * Math.cos(v.z * 5)) * .12 + (r() - .5) * .1; rp.setXYZ(i, v.x * k, Math.max(-.2, v.y * k), v.z * k); } rockGeo.computeVertexNormals();
  [[0, 0, 0, 30, 9, 16], [-22, 0, 4, 16, 5, 10], [20, 0, 6, 14, 4, 9], [-8, 0, 12, 10, 3, 6]].forEach(([x, y, z, sx, sy, sz])=>{ const m = new THREE.Mesh(rockGeo, rock); m.position.set(x, y - 1, z); m.scale.set(sx, sy, sz); isl.add(m); });
  // Gras-Kappe
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(22, 25, 1.2, 24), new THREE.MeshStandardMaterial({ color: 0x1E2A1E, roughness: 1 })); cap.position.y = 7.4; cap.scale.z = .55; isl.add(cap);

  // langes Gebäude auf der Klippe (Anstalt), Fenster teils erleuchtet
  const brick = brickTexture();
  const bMat = new THREE.MeshStandardMaterial({ map: brick, roughness: .9 }); brick.repeat.set(6, 2);
  const building = new THREE.Group(); building.position.set(-4, 8, 2); isl.add(building);
  const main = new THREE.Mesh(new THREE.BoxGeometry(26, 6, 6), bMat); main.position.y = 3; building.add(main);
  const roof = new THREE.Mesh(new THREE.CylinderGeometry(.1, 4.4, 2.4, 4, 1), new THREE.MeshStandardMaterial({ color: 0x1a1c1e, roughness: .8 })); roof.rotation.y = Math.PI / 4; roof.scale.set(4.2, 1, 1); roof.position.y = 7.2; building.add(roof);
  const towerB = new THREE.Mesh(new THREE.BoxGeometry(5, 11, 5), bMat); towerB.position.set(0, 5.5, .5); building.add(towerB);
  const tRoof = new THREE.Mesh(new THREE.ConeGeometry(3.8, 3, 4), new THREE.MeshStandardMaterial({ color: 0x1a1c1e })); tRoof.rotation.y = Math.PI / 4; tRoof.position.set(0, 12.5, .5); building.add(tRoof);
  const lit = new THREE.MeshBasicMaterial({ color: 0xFFC777 }), dark = new THREE.MeshBasicMaterial({ color: 0x0c0d0f });
  for(let row = 0; row < 2; row++) for(let i = 0; i < 18; i++){ const x = -12 + i * 1.4; if(Math.abs(x) < 2.6) continue; const w = new THREE.Mesh(new THREE.PlaneGeometry(.6, 1.2), r() > .82 ? lit : dark); w.position.set(x, 1.6 + row * 2.4, 3.01); building.add(w); }
  for(let i = 0; i < 3; i++){ const w = new THREE.Mesh(new THREE.PlaneGeometry(.8, 1.6), i === 1 ? lit : dark); w.position.set(0, 4 + i * 2.4, 3.02); building.add(w); }
  // Zaun am Klippenrand
  for(let i = 0; i < 40; i++){ const p = new THREE.Mesh(new THREE.BoxGeometry(.12, 1.6, .12), dark); p.position.set(-20 + i, 8.6, 9); isl.add(p); }

  // Leuchtturm
  const lh = new THREE.Group(); lh.position.set(19, 6, 4); isl.add(lh);
  const stone = new THREE.MeshStandardMaterial({ color: 0x8A8A82, roughness: .9 });
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 2.1, 14, 20), stone); shaft.position.y = 7; lh.add(shaft);
  const gal = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, .4, 20), new THREE.MeshStandardMaterial({ color: 0x1a1a1a })); gal.position.y = 14.2; lh.add(gal);
  const lamp = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1.8, 16), new THREE.MeshBasicMaterial({ color: 0xFFF1C8 })); lamp.position.y = 15.3; lh.add(lamp);
  const lroof = new THREE.Mesh(new THREE.ConeGeometry(1.4, 1.4, 16), new THREE.MeshStandardMaterial({ color: 0x1a1a1a })); lroof.position.y = 16.9; lh.add(lroof);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: dotTex("rgba(255,240,200,.9)", "rgba(255,220,150,0)"), blending: THREE.AdditiveBlending, depthWrite: false })); halo.position.y = 15.3; halo.scale.set(9, 9, 1); lh.add(halo);
  // Lichtkegel (zwei gegenüberliegende Strahlen, weich auslaufend)
  const beamTex = (()=>{ const c = document.createElement("canvas"); c.width = 8; c.height = 256; const g = c.getContext("2d"), q = g.createLinearGradient(0, 0, 0, 256); q.addColorStop(0, "rgba(255,240,200,.55)"); q.addColorStop(.25, "rgba(255,240,200,.22)"); q.addColorStop(1, "rgba(255,240,200,0)"); g.fillStyle = q; g.fillRect(0, 0, 8, 256); return new THREE.CanvasTexture(c); })();
  const beamGeo = new THREE.ConeGeometry(9, 110, 32, 1, true); beamGeo.translate(0, -55, 0); beamGeo.rotateZ(Math.PI / 2);
  const beams = new THREE.Group(); beams.position.y = 15.3; lh.add(beams);
  [0, Math.PI].forEach((a)=>{ const b = new THREE.Mesh(beamGeo, new THREE.MeshBasicMaterial({ map: beamTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false })); b.rotation.y = a; beams.add(b); });

  // Regen: schräge Striche um die Kamera
  const NR = 2200, rpos = new Float32Array(NR * 6), R = [];
  for(let i = 0; i < NR; i++) R.push({ x: (r() - .5) * 60, y: r() * 40, z: -r() * 60 + 10, v: .8 + r() * .4 });
  const rg = new THREE.BufferGeometry(); rg.setAttribute("position", new THREE.BufferAttribute(rpos, 3));
  const rain = new THREE.LineSegments(rg, new THREE.LineBasicMaterial({ color: 0x9AB0C4, transparent: true, opacity: .35, fog: false })); scene.add(rain);

  let W = 1, H = 1, mx = 0, my = 0, nextFlash = 2500, fl = 0;
  return {
    resize(w, h, dpr){ W = w; H = h; renderer.setPixelRatio(Math.min(dpr, 1.75)); renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w < h ? 58 : 40; camera.updateProjectionMatrix(); },
    render(t, dt, still, s){
      if(s.near){ mx += (s.px - mx) * .04; my += (s.py - my) * .04; }
      const T = still ? 0 : t, k = Math.min(3, (dt || 16) / 16), sc = s.scroll, port = W < H;
      const sway = Math.sin(T * .0007) * .5, approach = still ? 0 : (T * .0004) % 14;
      camera.position.set((port ? 2 : -6) + mx * 2, 4 + sway + sc * 6 - my, (port ? 34 : 26) - approach);
      camera.lookAt(port ? 13 : 4, (port ? 13 : 10) + sway * .3, -70);
      camera.rotateZ(Math.sin(T * .0005) * .015);
      const p = seaGeo.attributes.position.array;
      for(let i = 0; i < p.length; i += 3){ const x = base[i], z = base[i + 2]; p[i + 1] = Math.sin(x * .05 + T * .0009) * .9 + Math.sin(z * .08 - T * .0013) * 1.1 + Math.sin((x - z) * .2 + T * .002) * .3; }
      seaGeo.attributes.position.needsUpdate = true; seaGeo.computeVertexNormals();
      beams.rotation.y = still ? -.5 : T * .0007;
      // Wetterleuchten
      if(!still){ nextFlash -= (dt || 16); if(nextFlash < 0){ fl = 1; nextFlash = 4000 + Math.random() * 7000; } fl *= .88; }
      const f = fl > .3 ? fl * (Math.random() > .3 ? 1 : .2) : fl;
      flash.intensity = f * 4; sky.material.color.setScalar(1 + f * 2.2); scene.fog.color.copy(fogC).lerp(new THREE.Color(0x8090a8), f * .5);
      // Regen
      R.forEach((d, i)=>{ if(!still){ d.y -= .9 * d.v * k; d.x += .25 * k; if(d.y < 0){ d.y = 40; d.x = (Math.random() - .5) * 60; } if(d.x > 30) d.x -= 60; }
        const x = camera.position.x + d.x, y = d.y, z = camera.position.z - 30 + d.z;
        rpos[i * 6] = x; rpos[i * 6 + 1] = y; rpos[i * 6 + 2] = z; rpos[i * 6 + 3] = x - .25; rpos[i * 6 + 4] = y + .9; rpos[i * 6 + 5] = z; });
      rg.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    },
    dispose(){ renderer.dispose(); scene.traverse((o)=>{ o.geometry?.dispose?.(); }); },
  };
}
