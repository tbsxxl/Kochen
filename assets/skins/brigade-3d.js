// Brigade – 3D-Kopf (Dez. 2026, vierte Fassung): der Pass einer Restaurantküche aus gebürstetem Edelstahl vor weißen Metro-Fliesen.
// Unter warmen Wärmelampen hängen an der Bonschiene echte Rezeptfotos als „Bestellungen“, jede mit einem Streifen blauem Malerband,
// auf dem der Name steht; neue rutschen von rechts nach (wie im Service). Darüber eine Abzugshaube, Dampf steigt auf.
// Die Fotos sind unverändert (nur zugeschnitten). Three.js r170.
import * as THREE from "../vendor/three/three.module.min.js";
import { RoomEnvironment } from "../vendor/three/RoomEnvironment.js";

const TAU = Math.PI * 2;
const rng = (seed)=>{ let s = seed; return ()=>{ s = (s * 9301 + 49297) % 233280; return s / 233280; }; };
const dotTex = (inner, outer)=>{ const c = document.createElement("canvas"); c.width = c.height = 64; const g = c.getContext("2d"), q = g.createRadialGradient(32, 32, 0, 32, 32, 32); q.addColorStop(0, inner); q.addColorStop(1, outer); g.fillStyle = q; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); };

function brushed(){
  const c = document.createElement("canvas"); c.width = 512; c.height = 64; const g = c.getContext("2d"), r = rng(3);
  g.fillStyle = "#808080"; g.fillRect(0, 0, 512, 64);
  for(let i = 0; i < 900; i++){ const v = 100 + r() * 90; g.fillStyle = `rgba(${v},${v},${v},.35)`; g.fillRect(r() * 512, r() * 64, 40 + r() * 200, 1); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}
function tiles(){
  const c = document.createElement("canvas"); c.width = 256; c.height = 256; const g = c.getContext("2d");
  g.fillStyle = "#BFC4C6"; g.fillRect(0, 0, 256, 256);
  for(let y = 0; y < 256; y += 32) for(let x = (y / 32) % 2 ? -32 : 0; x < 256; x += 64){ const q = g.createLinearGradient(0, y, 0, y + 30); q.addColorStop(0, "#FFFFFF"); q.addColorStop(1, "#E6EAEC"); g.fillStyle = q; g.fillRect(x + 2, y + 2, 60, 28); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}
function tapeTex(text){
  const c = document.createElement("canvas"); c.width = 512; c.height = 96; const g = c.getContext("2d");
  g.fillStyle = "#2E62A8"; g.fillRect(0, 0, 512, 96);
  g.fillStyle = "rgba(255,255,255,.08)"; for(let i = 0; i < 40; i++) g.fillRect(Math.random() * 512, 0, 2, 96);
  g.fillStyle = "#FFFFFF"; g.font = "700 44px Archivo, Helvetica, sans-serif"; g.textBaseline = "middle";
  let s = text.toUpperCase(); while(g.measureText(s).width > 470 && s.length > 4) s = s.slice(0, -2);
  if(s !== text.toUpperCase()) s = s.trim() + "…";
  g.fillText(s, 20, 50);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}

export function create(canvas, opts){
  const recipes = (opts && opts.recipes || []).slice(0, 12);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0xD8DCDE);
  const pmrem = new THREE.PMREMGenerator(renderer); scene.environment = pmrem.fromScene(new RoomEnvironment(), .03).texture; scene.environmentIntensity = 1;
  const camera = new THREE.PerspectiveCamera(40, 1, .1, 100);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8a8a, .8));
  const r = rng(41);

  const br = brushed();
  const steel = new THREE.MeshStandardMaterial({ color: 0xD0D4D8, metalness: .95, roughness: .32, roughnessMap: br, map: br });
  br.repeat.set(4, 1);
  // Fliesenwand
  const tt = tiles(); tt.repeat.set(10, 4);
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(40, 16), new THREE.MeshStandardMaterial({ map: tt, roughness: .25, metalness: 0 })); wall.position.set(0, 5, -3); scene.add(wall);
  // Pass: Arbeitsplatte und Aufbau
  const counter = new THREE.Mesh(new THREE.BoxGeometry(40, .25, 3.2), steel); counter.position.set(0, -.12, 0); scene.add(counter);
  const front = new THREE.Mesh(new THREE.BoxGeometry(40, 3, .1), steel); front.position.set(0, -1.65, 1.6); scene.add(front);
  const shelf = new THREE.Mesh(new THREE.BoxGeometry(40, .12, 1.1), steel); shelf.position.set(0, 4.3, -.6); scene.add(shelf);
  // Bonschiene (Edelstahl-Profil)
  const rail = new THREE.Mesh(new THREE.BoxGeometry(40, .16, .22), steel); rail.position.set(0, 3.6, -.2); scene.add(rail);
  const lip = new THREE.Mesh(new THREE.BoxGeometry(40, .05, .05), new THREE.MeshStandardMaterial({ color: 0x222222, metalness: .5, roughness: .5 })); lip.position.set(0, 3.52, -.08); scene.add(lip);
  // Wärmelampen
  const lampMat = new THREE.MeshStandardMaterial({ color: 0x2a2c2e, metalness: .9, roughness: .35 });
  const bulb = new THREE.MeshBasicMaterial({ color: 0xFFB45A });
  const glowT = dotTex("rgba(255,170,80,.55)", "rgba(255,140,50,0)");
  for(let x = -15; x <= 15; x += 3.2){
    const shade = new THREE.Mesh(new THREE.CylinderGeometry(.35, .55, .5, 24, 1, true), lampMat); shade.position.set(x, 5.6, .3); scene.add(shade);
    const b = new THREE.Mesh(new THREE.SphereGeometry(.22, 16, 10), bulb); b.position.set(x, 5.4, .3); scene.add(b);
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(.02, .02, 3), lampMat); cord.position.set(x, 7.3, .3); scene.add(cord);
    const g = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowT, blending: THREE.AdditiveBlending, depthWrite: false })); g.position.set(x, 5.2, .35); g.scale.set(2.2, 2.2, 1); scene.add(g);
    const l = new THREE.SpotLight(0xffa850, 18, 9, .7, .6, 1.4); l.position.set(x, 5.3, .3); l.target.position.set(x, 0, .4); scene.add(l, l.target);
  }

  // Bestellungen: echte Rezeptfotos an der Schiene, mit blauem Malerband und Namen
  const loader = new THREE.TextureLoader(), orders = [];
  const W0 = 2.3, H0 = 1.75, GAP = 2.9;
  const paper = new THREE.MeshStandardMaterial({ color: 0xFAFAF7, roughness: .9 });
  recipes.forEach((rc, i)=>{
    const g = new THREE.Group(); scene.add(g);
    const card = new THREE.Mesh(new THREE.BoxGeometry(W0 + .16, H0 + .5, .02), paper); card.position.y = -H0 / 2 - .15; g.add(card);
    const mat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: .6 });
    loader.load(rc.i, (t)=>{ t.colorSpace = THREE.SRGBColorSpace; const ia = t.image.width / t.image.height, ca = W0 / H0; if(ia > ca){ t.repeat.set(ca / ia, 1); t.offset.set((1 - ca / ia) / 2, 0); } else { t.repeat.set(1, ia / ca); t.offset.set(0, (1 - ia / ca) / 2); } mat.map = t; mat.color.set(0xffffff); mat.needsUpdate = true; });
    const photo = new THREE.Mesh(new THREE.PlaneGeometry(W0, H0), mat); photo.position.set(0, -H0 / 2 - .08, .012); g.add(photo);
    const tape = new THREE.Mesh(new THREE.PlaneGeometry(W0 * .92, .36), new THREE.MeshStandardMaterial({ map: tapeTex(rc.t || ""), roughness: .7 })); tape.position.set(0, -H0 - .32, .02); tape.rotation.z = (r() - .5) * .05; g.add(tape);
    const clip = new THREE.Mesh(new THREE.BoxGeometry(.5, .3, .08), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: .6, roughness: .4 })); clip.position.set(0, .05, .03); g.add(clip);
    orders.push({ g, i, sw: r() * TAU, tilt: (r() - .5) * .06 });
  });

  // Dampf über dem Pass
  const steamT = dotTex("rgba(255,255,255,.35)", "rgba(255,255,255,0)"), steam = [];
  for(let i = 0; i < 26; i++){ const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: steamT, transparent: true, depthWrite: false })); scene.add(s); steam.push({ s, x: (r() - .5) * 26, y: r(), sp: .5 + r() }); }

  let W = 1, H = 1, mx = 0, my = 0;
  const N = Math.max(1, orders.length), span = N * GAP;
  return {
    resize(w, h, dpr){ W = w; H = h; renderer.setPixelRatio(Math.min(dpr, 1.75)); renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w < h ? 62 : 40; camera.updateProjectionMatrix(); },
    render(t, dt, still, s){
      if(s.near){ mx += (s.px - mx) * .05; my += (s.py - my) * .05; }
      const T = still ? 0 : t, port = W < H, sc = s.scroll;
      // Bons rutschen langsam nach links, hinten kommen neue nach
      const shift = (T * .00035) % span;
      orders.forEach((o)=>{
        let x = o.i * GAP - shift; x = ((x + span / 2) % span + span) % span - span / 2;
        o.g.position.set(x, 3.55, -.05);
        o.g.rotation.z = o.tilt + Math.sin(T * .0012 + o.sw) * .015; o.g.rotation.x = .04 + Math.sin(T * .0009 + o.sw) * .02;
      });
      steam.forEach((p)=>{ const y = (p.y + T * .00008 * p.sp) % 1; p.s.position.set(p.x + Math.sin(T * .0006 + p.x) * .3, .3 + y * 3.2, .6); const sz = .8 + y * 2.4; p.s.scale.set(sz, sz, 1); p.s.material.opacity = Math.sin(y * Math.PI) * .45; });
      camera.position.set(mx * 1.2, (port ? 2.2 : 3.4) - sc * 1.5 - my * .3, port ? 9.5 : 13);
      camera.lookAt(mx * .4, port ? 3.6 : 4.4, 0);
      renderer.render(scene, camera);
    },
    dispose(){ renderer.dispose(); pmrem.dispose(); scene.traverse((o)=>{ o.geometry?.dispose?.(); if(o.material?.map) o.material.map.dispose(); }); },
  };
}
