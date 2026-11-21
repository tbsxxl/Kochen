// Blauraum – 3D-Galerie im Kopf der Startseite (Nov. 2026, nach Vergleich mit dem Vorbild): Rezeptfotos auf gebogenen Karten kreisen in
// drei Ringen (oder einer Spirale) um eine verchromte Kochmütze aus Würfeln. Ziehen dreht, Antippen einer Karte öffnet das Rezept.
// Als ES-Modul von blauraum.js nachgeladen; Three.js liegt in assets/vendor/three/ (nur für diesen Skin geladen).
import * as THREE from "../vendor/three/three.module.min.js";
import { RoomEnvironment } from "../vendor/three/RoomEnvironment.js";
import { RoundedBoxGeometry } from "../vendor/three/RoundedBoxGeometry.js";

const TAU = Math.PI * 2;

// Kochmütze aus Würfeln: Band unten, gebauschter Kopf aus mehreren Kugeln; nur Oberflächen-Würfel
function toque(u){
  const blobs = [[0, .3, 0, 1.02], [-.7, .12, .3, .66], [.72, .14, .22, .66], [.04, .16, -.72, .64], [-.36, .74, -.2, .6], [.4, .78, .18, .58], [0, .6, .58, .56], [-.5, .5, .5, .5]];
  const inside = (x, y, z)=>{
    if(y >= -1.25 && y <= -.3){ const r = Math.hypot(x, z); return r <= .7 + (y + 1.25) * .12; }
    return y > -.45 && blobs.some(([bx, by, bz, r])=> (x - bx) ** 2 + (y - by) ** 2 + (z - bz) ** 2 <= r * r);
  };
  const N = Math.ceil(1.9 / u), out = [];
  const has = (i, j, k)=> inside(i * u, j * u, k * u);
  for(let i = -N; i <= N; i++) for(let j = -N; j <= N; j++) for(let k = -N; k <= N; k++){
    if(!has(i, j, k)) continue;
    if(has(i + 1, j, k) && has(i - 1, j, k) && has(i, j + 1, k) && has(i, j - 1, k) && has(i, j, k + 1) && has(i, j, k - 1)) continue;
    out.push([i * u, j * u, k * u]);
  }
  return out;
}

function bend(geo, R){
  const p = geo.attributes.position;
  for(let i = 0; i < p.count; i++){ const x = p.getX(i), a = x / R; p.setXYZ(i, Math.sin(a) * R, p.getY(i), Math.cos(a) * R - R); }
  geo.computeVertexNormals();
  return geo;
}

export function create(canvas, recipes){
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  room.traverse((o)=>{ if(o.isMesh && o.material && o.material.color && !o.material.emissive?.getHex()) o.material.color.lerp(new THREE.Color(0x2030ff), .22); });
  scene.environment = pmrem.fromScene(room, .03).texture;
  const camera = new THREE.PerspectiveCamera(34, 1, .1, 100);
  const world = new THREE.Group(); scene.add(world);

  // Skulptur
  const U = .2, vox = toque(U);
  const box = new RoundedBoxGeometry(U * .96, U * .96, U * .96, 3, U * .22);
  const metal = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: .1, envMapIntensity: 2 });
  const inst = new THREE.InstancedMesh(box, metal, vox.length);
  const m = new THREE.Matrix4();
  vox.forEach(([x, y, z], i)=>{ m.makeTranslation(x, y, z); inst.setMatrixAt(i, m); });
  const sculpt = new THREE.Group(); sculpt.add(inst); sculpt.scale.setScalar(1.5); sculpt.position.y = .05; world.add(sculpt);

  // Karten
  const list = recipes.slice(0, 30), loader = new THREE.TextureLoader(), cards = [];
  const CW = 1.22, CH = 1.56, RING = 4.1;
  const geo = bend(new THREE.PlaneGeometry(CW, CH, 14, 1), RING);
  const back = null;
  list.forEach((r, k)=>{
    const tex = loader.load(r.i, (t)=>{
      const ia = t.image.width / t.image.height, ca = CW / CH;
      if(ia > ca){ t.repeat.set(ca / ia, 1); t.offset.set((1 - ca / ia) / 2, 0); } else { t.repeat.set(1, ia / ca); t.offset.set(0, (1 - ia / ca) / 2); }
      t.needsUpdate = true; api.dirty = true;
    });
    tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
    const front = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, toneMapped: false, side: THREE.DoubleSide }));
    const g = new THREE.Group(); g.add(front);
    const pivot = new THREE.Group(); pivot.add(g); g.position.z = RING; world.add(pivot);
    front.userData.url = r.u;
    cards.push({ pivot, g, front, a: 0, y: 0, ta: 0, ty: 0, ring: k % 3 });
  });

  // Anordnung: Ringe (drei Höhen, gegenläufig) oder Spirale
  const layout = (mode)=>{
    const per = Math.ceil(cards.length / 3);
    cards.forEach((c, k)=>{
      if(mode === "spiral"){ c.ta = k * .52; c.ty = 2.7 - k * (5.4 / Math.max(1, cards.length - 1)); c.ring = 0; }
      else { const ring = Math.floor(k / per), j = k % per; c.ring = ring; c.ta = j / per * TAU + ring * .4; c.ty = [2.05, 0, -2.05][ring] || 0; }
    });
  };
  let mode = "rings"; layout(mode);
  cards.forEach((c)=>{ c.a = c.ta; c.y = c.ty; });

  const api = {
    dirty: true, spin: 0, drag: 0, focusY: 0,
    resize(w, h, dpr, centerY, stageH){
      renderer.setPixelRatio(Math.min(dpr, 1.75)); renderer.setSize(w, h, false);
      camera.aspect = w / h;
      const tan = Math.tan(THREE.MathUtils.degToRad(17)), half = 4.3;   // halbe Weltbreite, die sichtbar sein soll
      const byW = half / (tan * camera.aspect), byH = 7.4 * (h / Math.max(1, stageH || h)) / (2 * tan);   // Ringe passen in die Bühne
      camera.position.set(0, .3, Math.max(12, byW, byH));
      camera.lookAt(0, 0, 0); camera.updateProjectionMatrix();
      // Mitte der Galerie auf die Bühne legen (nicht auf die Mitte der ganzen Leinwand)
      const vis = 2 * Math.tan(THREE.MathUtils.degToRad(17)) * camera.position.z;
      world.position.y = (h / 2 - centerY) / h * vis;
      api.dirty = true;
    },
    setMode(m2){ mode = m2; layout(mode); api.dirty = true; },
    render(t, dt, still){
      const k = Math.min(3, (dt || 16) / 16);
      api.spin += (still ? 0 : .0016 * k) + api.drag; api.drag *= .92;
      cards.forEach((c)=>{
        c.a += (c.ta - c.a) * .08 * k; c.y += (c.ty - c.y) * .08 * k;
        const dir = mode === "rings" ? (c.ring === 1 ? -1 : 1) : 1;
        c.pivot.rotation.y = c.a + api.spin * dir;
        c.pivot.position.y = c.y + (still ? 0 : Math.sin(t * .0007 + c.a * 3) * .05);
      });
      sculpt.rotation.y = still ? .5 : t * .00025 + api.spin * .3;
      sculpt.position.y = .05 + (still ? 0 : Math.sin(t * .0009) * .06);
      renderer.render(scene, camera);
      api.dirty = false;
    },
    pick(nx, ny){
      const rc = new THREE.Raycaster(); rc.setFromCamera(new THREE.Vector2(nx, ny), camera);
      const hit = rc.intersectObjects(cards.map((c)=> c.front), false)[0];
      return hit ? hit.object.userData.url : "";
    },
    count: cards.length,
    dispose(){
      cards.forEach((c)=>{ c.front.material.map?.dispose(); c.front.material.dispose(); });
      geo.dispose(); box.dispose(); metal.dispose(); inst.dispose(); scene.environment?.dispose(); pmrem.dispose(); renderer.dispose();
    },
  };
  return api;
}
