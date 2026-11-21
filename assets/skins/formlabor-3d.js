// Formlabor – 3D-Kopf der Startseite (Nov. 2026, nach dem Vorbild einer Studio-Seite mit oranger Schleife und schwebenden Dingen):
// eine dicke, glänzend orange Schleife, um die Küchen-Dinge schweben und sich drehen (Topf, Kochbuch, Kochlöffel, Tomate, Tellerstapel).
// Ziehen dreht die Szene, Scrollen kippt sie. Als ES-Modul von formlabor.js nachgeladen.
import * as THREE from "../vendor/three/three.module.min.js";
import { RoomEnvironment } from "../vendor/three/RoomEnvironment.js";

const TAU = Math.PI * 2;

class Loop extends THREE.Curve {
  getPoint(t, out = new THREE.Vector3()){
    const a = t * TAU;
    return out.set(Math.sin(a) * 1.7 + Math.sin(3 * a) * .38, Math.cos(2 * a) * .62 + Math.sin(a) * .2, Math.cos(a) * .85 + Math.cos(3 * a) * .18);
  }
}

function bookTex(){
  const c = document.createElement("canvas"); c.width = 360; c.height = 480; const g = c.getContext("2d");
  g.fillStyle = "#E9DCC8"; g.fillRect(0, 0, 360, 480);
  g.fillStyle = "#2A1912"; g.font = 'italic 400 54px "Fraunces", Georgia, serif'; g.fillText("Tobis", 40, 120);
  g.font = '300 58px "Skin Raum", "Host Grotesk", sans-serif'; g.fillText("Koch-", 40, 190); g.fillText("buch", 40, 250);
  g.strokeStyle = "#F2541B"; g.lineWidth = 6; g.beginPath(); g.moveTo(40, 300);
  for(let x = 40; x < 300; x += 30) g.quadraticCurveTo(x + 15, 280 + (x % 60 ? 30 : -10), x + 30, 300); g.stroke();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function create(canvas){
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setClearColor(0, 0); renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  const scene = new THREE.Scene(), pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), .04).texture;
  const sun = new THREE.DirectionalLight(0xffe2c8, 1.6); sun.position.set(-3, 4, 5); scene.add(sun);
  const camera = new THREE.PerspectiveCamera(32, 1, .1, 100);
  const world = new THREE.Group(); scene.add(world);

  const orange = new THREE.MeshPhysicalMaterial({ color: 0xff4d12, roughness: .32, clearcoat: .7, clearcoatRoughness: .2 });
  const tube = new THREE.Mesh(new THREE.TubeGeometry(new Loop(), 420, .24, 28, true), orange);
  world.add(tube);

  const things = [];
  const add = (obj, pos, spin)=>{ const g = new THREE.Group(); g.add(obj); g.position.copy(pos); world.add(g); things.push({ g, base: pos.clone(), spin, ph: Math.random() * TAU }); };
  const enamel = new THREE.MeshStandardMaterial({ color: 0xefe8dc, roughness: .35, metalness: .05 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x2a1912, roughness: .5 });
  // Topf mit Griffen
  { const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(.42, .38, .4, 48, 1, true), enamel); body.material.side = THREE.DoubleSide; g.add(body);
    const bottom = new THREE.Mesh(new THREE.CircleGeometry(.38, 48), enamel); bottom.rotation.x = Math.PI / 2; bottom.position.y = -.2; g.add(bottom);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(.42, .022, 12, 64), dark); rim.rotation.x = Math.PI / 2; rim.position.y = .2; g.add(rim);
    [-1, 1].forEach((s)=>{ const h = new THREE.Mesh(new THREE.TorusGeometry(.09, .025, 10, 24, Math.PI), dark); h.position.set(s * .47, .1, 0); h.rotation.z = s * Math.PI / 2; g.add(h); });
    add(g, new THREE.Vector3(-1.55, .55, .5), [.004, .006, .002]); }
  // Kochbuch
  { const t = bookTex(), side = new THREE.MeshStandardMaterial({ color: 0xf6efe4, roughness: .8 }), cover = new THREE.MeshStandardMaterial({ map: t, roughness: .7 }), back = new THREE.MeshStandardMaterial({ color: 0xe9dcc8, roughness: .8 });
    const b = new THREE.Mesh(new THREE.BoxGeometry(.72, .96, .14), [side, side, side, side, cover, back]); add(b, new THREE.Vector3(1.45, -.35, .7), [.003, -.005, .004]); }
  // Kochlöffel
  { const wood = new THREE.MeshStandardMaterial({ color: 0xc8935a, roughness: .6 }), g = new THREE.Group();
    const bowl = new THREE.Mesh(new THREE.SphereGeometry(.16, 24, 16), wood); bowl.scale.set(1, .35, 1.3); g.add(bowl);
    const stick = new THREE.Mesh(new THREE.CylinderGeometry(.035, .045, 1.1, 12), wood); stick.rotation.x = Math.PI / 2; stick.position.z = .72; g.add(stick);
    add(g, new THREE.Vector3(.35, .95, -.2), [.006, .004, .003]); }
  // Tomate
  { const g = new THREE.Group(), tm = new THREE.MeshPhysicalMaterial({ color: 0xe0321f, roughness: .25, clearcoat: .8 });
    const s = new THREE.Mesh(new THREE.SphereGeometry(.26, 32, 24), tm); s.scale.y = .86; g.add(s);
    const st = new THREE.Mesh(new THREE.ConeGeometry(.1, .08, 5), new THREE.MeshStandardMaterial({ color: 0x3f8a3a })); st.position.y = .23; st.rotation.x = Math.PI; g.add(st);
    add(g, new THREE.Vector3(-.25, -.75, .95), [.005, .007, 0]); }
  // Tellerstapel
  { const g = new THREE.Group(), pm = new THREE.MeshStandardMaterial({ color: 0xfbf8f2, roughness: .3 });
    for(let i = 0; i < 4; i++){ const p = new THREE.Mesh(new THREE.CylinderGeometry(.42 - i * .01, .34, .045, 48), pm); p.position.y = i * .06; g.add(p); }
    add(g, new THREE.Vector3(-.9, -.55, -.7), [.002, .004, .006]); }

  const api = {
    dirty: true, drag: 0, rot: .4, tilt: 0,
    resize(w, h, dpr, cy, stageH){
      renderer.setPixelRatio(Math.min(dpr, 2)); renderer.setSize(w, h, false);
      camera.aspect = w / h;
      const tan = Math.tan(THREE.MathUtils.degToRad(16)), half = 2.45;
      const byW = half / (tan * camera.aspect), byH = 3.3 * (h / Math.max(1, stageH)) / (2 * tan);
      camera.position.set(0, .2, Math.max(7, byW, byH)); camera.lookAt(0, 0, 0); camera.updateProjectionMatrix();
      const vis = 2 * tan * camera.position.z; world.position.y = (h / 2 - cy) / h * vis;
      api.dirty = true;
    },
    render(t, dt, still){
      const k = Math.min(3, (dt || 16) / 16);
      api.rot += (still ? 0 : .0018 * k) + api.drag; api.drag *= .92;
      world.rotation.y = api.rot; world.rotation.x += ((.18 + api.tilt) - world.rotation.x) * .06;
      things.forEach((q)=>{
        if(!still){ q.g.rotation.x += q.spin[0] * k; q.g.rotation.y += q.spin[1] * k; q.g.rotation.z += q.spin[2] * k; }
        q.g.position.y = q.base.y + (still ? 0 : Math.sin(t * .0012 + q.ph) * .08);
      });
      renderer.render(scene, camera); api.dirty = false;
    },
    dispose(){ renderer.dispose(); pmrem.dispose(); scene.environment?.dispose(); },
  };
  return api;
}
