// Galerie – 3D-Museumssaal im Kopf der Startseite (Nov. 2026, nach Vergleich mit dem Vorbild, einer Kunst-Ausgabe mit gerahmten Gemälden):
// eine schräg gesehene Wand mit Rezeptfotos in Goldrahmen, Bilderleuchten, Museumsschild und Holzboden. Wischen/Scrollen geht die Wand
// entlang (endlos), Antippen eines Bildes öffnet das Rezept. Als ES-Modul von galerie.js nachgeladen.
import * as THREE from "../vendor/three/three.module.min.js";
import { RoomEnvironment } from "../vendor/three/RoomEnvironment.js";

const S = 3.1; // Abstand der Bilder auf der Wand
const SIZES = [[1.7, 2.1], [2.2, 1.6], [1.5, 1.9], [2.0, 1.5], [1.6, 2.2], [2.3, 1.7]];

function wallTex(){
  const c = document.createElement("canvas"); c.width = 512; c.height = 512;
  const g = c.getContext("2d");
  g.fillStyle = "#2D3D52"; g.fillRect(0, 0, 512, 512);
  // Lichtkegel der Bilderleuchte von oben
  const l = g.createRadialGradient(256, 40, 10, 256, 200, 330);
  l.addColorStop(0, "rgba(255,226,170,.55)"); l.addColorStop(.45, "rgba(255,214,150,.16)"); l.addColorStop(1, "rgba(255,214,150,0)");
  g.fillStyle = l; g.fillRect(0, 0, 512, 512);
  // leicht gewischter Putz
  for(let i = 0; i < 1400; i++){ g.fillStyle = `rgba(${Math.random() < .5 ? "255,255,255" : "0,0,0"},.025)`; g.fillRect(Math.random() * 512, Math.random() * 512, 18 + Math.random() * 30, 2); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; return t;
}

function floorTex(){
  const c = document.createElement("canvas"); c.width = 512; c.height = 512;
  const g = c.getContext("2d");
  for(let i = 0; i < 8; i++){
    const y = i * 64, b = 92 + Math.random() * 26;
    g.fillStyle = `rgb(${b + 40},${b + 4},${b - 34})`; g.fillRect(0, y, 512, 64);
    for(let k = 0; k < 40; k++){ g.fillStyle = `rgba(60,30,10,${.05 + Math.random() * .08})`; g.fillRect(Math.random() * 512, y + Math.random() * 64, 60 + Math.random() * 140, 1.5); }
    g.fillStyle = "rgba(30,16,6,.5)"; g.fillRect(0, y, 512, 2);
    const x = Math.random() * 512; g.fillRect(x, y, 2, 64);
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}

function plaque(r, n){
  const c = document.createElement("canvas"); c.width = 512; c.height = 160;
  const g = c.getContext("2d");
  g.fillStyle = "#F3EFE8"; g.fillRect(0, 0, 512, 160);
  g.fillStyle = "#1F2328"; g.font = 'italic 500 44px "Skin Garamond", "Fraunces", Georgia, serif';
  let t = r.t; while(g.measureText(t).width > 470 && t.length > 4) t = t.slice(0, -2).trimEnd() + "…";
  g.fillText(t, 22, 62);
  g.fillStyle = "#4B4F55"; g.font = '400 28px "Fraunces", Georgia, serif';
  g.fillText(`Nº ${n}${r.z ? " · " + r.z : ""}`, 22, 116);
  const tx = new THREE.CanvasTexture(c); tx.colorSpace = THREE.SRGBColorSpace; return tx;
}

export function create(canvas, recipes){
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: "high-performance" });
  renderer.setClearColor(0x2d3d52, 1); renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.1;
  const scene = new THREE.Scene(), pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), .04).texture;
  scene.fog = new THREE.Fog(0x2d3d52, 12, 30);
  scene.add(new THREE.HemisphereLight(0xfff1dc, 0x3a2a1c, 1.4));
  const key = new THREE.DirectionalLight(0xffe2b0, 2.2); key.position.set(-3, 6, 6); scene.add(key);
  const camera = new THREE.PerspectiveCamera(38, 1, .1, 60);

  const wTex = wallTex(), fTex = floorTex();
  const SPAN = 40;
  wTex.repeat.set(SPAN / S, 1);
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(SPAN, 7), new THREE.MeshStandardMaterial({ map: wTex, roughness: .95 }));
  wall.position.set(0, .9, 0); scene.add(wall);
  fTex.repeat.set(SPAN / 4, 2);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(SPAN, 10), new THREE.MeshStandardMaterial({ map: fTex, roughness: .55, metalness: .05 }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(0, -2.6, 5); scene.add(floor);
  const skirt = new THREE.Mesh(new THREE.BoxGeometry(SPAN, .22, .06), new THREE.MeshStandardMaterial({ color: 0x1c2636, roughness: .6 }));
  skirt.position.set(0, -2.49, .03); scene.add(skirt);

  const gold = new THREE.MeshStandardMaterial({ color: 0xc9a35a, metalness: 1, roughness: .32, envMapIntensity: 1.3 });
  const goldDark = new THREE.MeshStandardMaterial({ color: 0x8a6a30, metalness: 1, roughness: .45 });
  const mat = new THREE.MeshStandardMaterial({ color: 0xf3efe8, roughness: .9 });
  const lampMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, metalness: .8, roughness: .3, emissive: 0x000000 });
  const glowMat = new THREE.MeshBasicMaterial({ color: 0xffe7b8 });

  const list = recipes.slice(0, 12), loader = new THREE.TextureLoader(), items = [], hits = [];
  list.forEach((r, i)=>{
    const [w, h] = SIZES[i % SIZES.length], g = new THREE.Group(), F = .16, D = .14;
    // Rahmen: vier Leisten mit innerer Kehle
    [[0, h / 2 + F / 2, w + F * 2, F], [0, -h / 2 - F / 2, w + F * 2, F], [-w / 2 - F / 2, 0, F, h], [w / 2 + F / 2, 0, F, h]].forEach(([x, y, bw, bh])=>{
      const b = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, D), gold); b.position.set(x, y, D / 2); g.add(b);
    });
    const inner = new THREE.Mesh(new THREE.BoxGeometry(w + .04, h + .04, D * .5), goldDark); inner.position.z = D * .25; g.add(inner);
    const pm = .16, pw = w - pm * 2, ph = h - pm * 2;
    const passe = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); passe.position.z = D * .5 + .002; g.add(passe);
    const photoMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: .7 });
    const photo = new THREE.Mesh(new THREE.PlaneGeometry(pw, ph), photoMat); photo.position.z = D * .5 + .004; g.add(photo);
    if(r.i) loader.load(r.i, (t)=>{
      t.colorSpace = THREE.SRGBColorSpace;
      const ia = t.image.width / t.image.height, fa = pw / ph;
      if(ia > fa){ t.repeat.set(fa / ia, 1); t.offset.set((1 - fa / ia) / 2, 0); } else { t.repeat.set(1, ia / fa); t.offset.set(0, (1 - ia / fa) / 2); }
      photoMat.map = t; photoMat.needsUpdate = true; api.dirty = true;
    });
    photo.userData.url = r.u; hits.push(photo);
    // Bilderleuchte
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(.025, .025, .5), lampMat); arm.rotation.x = Math.PI / 2.6; arm.position.set(0, h / 2 + .42, .22); g.add(arm);
    const lamp = new THREE.Mesh(new THREE.CylinderGeometry(.07, .07, Math.min(1.1, w * .6), 16), lampMat); lamp.rotation.z = Math.PI / 2; lamp.position.set(0, h / 2 + .34, .44); g.add(lamp);
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(1.1, w * .6) * .9, .03), glowMat); glow.rotation.x = Math.PI / 2; glow.position.set(0, h / 2 + .27, .44); g.add(glow);
    // Museumsschild
    const pl = new THREE.Mesh(new THREE.PlaneGeometry(1.05, .33), new THREE.MeshBasicMaterial({ map: plaque(r, i + 1), toneMapped: false }));
    pl.position.set(w / 2 + F - .52, -h / 2 - F - .34, .02); g.add(pl);
    g.position.y = .1 + (i % 2 ? -.1 : .12);
    scene.add(g); items.push(g);
  });

  const L = items.length * S, ray = new THREE.Raycaster(), v2 = new THREE.Vector2();
  const api = {
    dirty: true, pos: 0, vel: 0, drag: 0, d: 9,
    resize(w, h, dpr, centerY, stageH){
      renderer.setPixelRatio(Math.min(dpr, 2)); renderer.setSize(w, h, false);
      // Bildmitte auf die Bühne legen: virtuelles Vollbild um die Bühnenmitte, davon nur der Leinwand-Ausschnitt
      const F = 2 * Math.max(centerY, h - centerY), T = Math.tan(THREE.MathUtils.degToRad(17));
      camera.fov = 2 * THREE.MathUtils.radToDeg(Math.atan(T * F / stageH)); camera.aspect = w / F;
      camera.setViewOffset(w, F, 0, F / 2 - centerY, w, h);
      // so weit weg, dass etwa 1,6 Bilder (Handy) bis 3 Bilder (iPad) in der Breite zu sehen sind
      const across = Math.max(5, Math.min(10, w / 90));
      api.d = across / (2 * T * w / stageH);
      camera.updateProjectionMatrix(); api.dirty = true;
    },
    pick(x, y, w, h){
      v2.set(x / w * 2 - 1, -(y / h) * 2 + 1); ray.setFromCamera(v2, camera);
      return ray.intersectObjects(hits, false)[0]?.object.userData.url || null;
    },
    render(t, dt, still){
      const k = Math.min(3, (dt || 16) / 16);
      if(!still){ api.vel += api.drag; api.drag = 0; api.vel *= Math.pow(.92, k); api.pos += (api.vel + .004) * k; }
      else { api.pos += api.drag * 20; api.drag = 0; }
      items.forEach((g, i)=>{ let x = ((i * S - api.pos) % L + L) % L; if(x > L / 2) x -= L; g.position.x = x; });
      wTex.offset.x = api.pos / S + .5 - SPAN / 2 / S; // Lichtkegel genau über den Bildern fTex.offset.x = api.pos / 4;
      const d = api.d || 9;
      camera.position.set(-d * .28, .1, d); camera.lookAt(d * .12, -.28, 0);
      renderer.render(scene, camera); api.dirty = false;
    },
    dispose(){
      scene.traverse((o)=>{ if(o.isMesh){ o.geometry.dispose(); [].concat(o.material).forEach((m)=>{ m.map?.dispose(); m.dispose(); }); } });
      scene.environment?.dispose(); pmrem.dispose(); renderer.dispose();
    },
  };
  return api;
}
