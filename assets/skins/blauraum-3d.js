// Blauraum – Vollbild-3D-Raum der Startseite (Nov. 2026, zweiter Neubau nach Vergleich mit dem Vorbild, einer Agentur-Seite mit
// Bilderringen um eine Skulptur aus Lamellen): man steht mitten in drei Ringen aus Rezeptfotos, die vorderen ziehen groß vorbei.
// In der Mitte eine Kochmütze aus verchromten Lamellen (Schichten wie beim 3D-Druck). Ziehen/Scrollen dreht, Antippen öffnet.
// Als ES-Modul von blauraum.js nachgeladen; Three.js liegt in assets/vendor/three/ (nur für diesen Skin geladen).
import * as THREE from "../vendor/three/three.module.min.js";
import { RoomEnvironment } from "../vendor/three/RoomEnvironment.js";
import { RoundedBoxGeometry } from "../vendor/three/RoundedBoxGeometry.js";

const TAU = Math.PI * 2;

// Kochmütze aus Lamellen (wie Schichten beim 3D-Druck, mit Luft dazwischen): Band unten, gefalteter Bausch oben, Deckel aus Ringen
function toque(){
  const out = [], STEP = .15, PLEATS = 9;
  const radius = (y)=>{
    if(y < -.45) return .6;                                   // Band
    const t = (y + .45) / 1.95;                                 // Bausch: weitet sich aus, oben gewölbt
    return .66 + .62 * Math.sin(Math.min(1, t * 1.5) * Math.PI * .5) - (t > .72 ? Math.pow((t - .72) / .28, 2) * 1.05 : 0);
  };
  for(let y = -1.25, L = 0; y <= 1.5; y += STEP, L++){
    const r = radius(y); if(r < .15) continue;
    const band = y < -.45, amp = band ? 0 : .17, N = band ? 18 : 63, pts = [];
    for(let i = 0; i < N; i++){ const a = i / N * Math.PI * 2 + L * .05, rr = r * (1 + amp * Math.cos(a * PLEATS)); pts.push([Math.cos(a) * rr, Math.sin(a) * rr]); }
    for(let i = 0; i < N; i++){
      if(band ? i % 2 : (i + L) % 7 > 3) continue;                       // Lücken entlang der Falten
      const [x1, z1] = pts[i], [x2, z2] = pts[(i + 1) % N];
      const len = Math.hypot(x2 - x1, z2 - z1) * (band ? 1.5 : 1.1);
      out.push({ x: (x1 + x2) / 2, y, z: (z1 + z2) / 2, rot: -Math.atan2(z2 - z1, x2 - x1), len, tilt: 0 });
    }
    // Deckel: oben innere Ringe, damit die Mütze geschlossen wirkt
    if(y > 1.05) [.62, .3].forEach((f)=>{ const rr = r * f, n = Math.max(4, Math.round(rr * 9)); for(let j = 0; j < n; j++){ const a = j / n * Math.PI * 2 + L; out.push({ x: Math.cos(a) * rr, y: y + .02, z: Math.sin(a) * rr, rot: -a + Math.PI / 2, len: rr * 6.28 / n * .8, tilt: 0 }); } });
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
  renderer.toneMappingExposure = 1.2;
  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  room.traverse((o)=>{ if(o.isMesh && o.material && o.material.color && !o.material.emissive?.getHex()) o.material.color.lerp(new THREE.Color(0x2a2aff), .18); });
  scene.environment = pmrem.fromScene(room, .035).texture;
  const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(3, 5, 6); scene.add(key);
  const camera = new THREE.PerspectiveCamera(55, 1, .1, 100);
  const world = new THREE.Group(); scene.add(world);

  // Skulptur
  const sl = toque(), H = .085;
  const box = new RoundedBoxGeometry(1, H, .13, 2, .028);
  const metal = new THREE.MeshStandardMaterial({ color: 0xf4f6ff, metalness: .9, roughness: .16, envMapIntensity: 1.5 });
  const inst = new THREE.InstancedMesh(box, metal, sl.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), pos = new THREE.Vector3(), sc = new THREE.Vector3();
  sl.forEach((s, i)=>{ e.set(0, s.rot, s.tilt, "YXZ"); q.setFromEuler(e); pos.set(s.x, s.y, s.z); sc.set(s.len, 1, 1); m.compose(pos, q, sc); inst.setMatrixAt(i, m); });
  const sculpt = new THREE.Group(); sculpt.add(inst); sculpt.position.y = .1; sculpt.scale.setScalar(1.35); world.add(sculpt);

  // Karten: drei Ringe (oben/unten klein und weit, Mitte groß und nah) oder eine Spirale
  const loader = new THREE.TextureLoader(), cards = [];
  const SPEC = [{ y: 2.9, R: 5.3, w: 1.15, h: 1.5 }, { y: 0, R: 4.4, w: 1.4, h: 1.82 }, { y: -2.9, R: 5.3, w: 1.15, h: 1.5 }];
  const geos = SPEC.map((s)=> bend(new THREE.PlaneGeometry(s.w, s.h, 12, 1), s.R));
  const spiralGeo = bend(new THREE.PlaneGeometry(1.25, 1.62, 12, 1), 5.4);
  recipes.forEach((r, k)=>{
    const ring = k % 3;
    const mat = new THREE.MeshBasicMaterial({ color: 0x3340ff, toneMapped: false, side: THREE.DoubleSide, transparent: true, opacity: 1 });
    loader.load(r.i, (t)=>{
      t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
      mat.map = t; mat.color.set(0xffffff); mat.needsUpdate = true; api.dirty = true;
      cards.forEach((c)=> c.mat === mat && fitTex(c));
    });
    const mesh = new THREE.Mesh(geos[ring], mat);
    const pivot = new THREE.Group(); pivot.add(mesh); world.add(pivot);
    mesh.userData = { url: r.u, t: r.t, z: r.z };
    cards.push({ pivot, mesh, mat, ring, a: 0, y: 0, R: SPEC[ring].R, ta: 0, ty: 0, tR: SPEC[ring].R });
  });
  function fitTex(c){
    const t = c.mat.map; if(!t || !t.image) return;
    const g = c.mesh.geometry.parameters || {}, cw = c.spiral ? 1.25 : SPEC[c.ring].w, ch = c.spiral ? 1.62 : SPEC[c.ring].h;
    const ia = t.image.width / t.image.height, ca = cw / ch;
    if(ia > ca){ t.repeat.set(ca / ia, 1); t.offset.set((1 - ca / ia) / 2, 0); } else { t.repeat.set(1, ia / ca); t.offset.set(0, (1 - ia / ca) / 2); }
    void g;
  }
  let mode = "rings";
  const layout = ()=>{
    const per = SPEC.map((_, i)=> cards.filter((c)=> c.ring === i).length);
    const idx = [0, 0, 0];
    cards.forEach((c, k)=>{
      if(mode === "spiral"){
        c.spiral = true; c.mesh.geometry = spiralGeo; c.ta = k * .5; c.ty = 3.3 - k * (6.6 / Math.max(1, cards.length - 1)); c.tR = 5.4;
      } else {
        c.spiral = false; c.mesh.geometry = geos[c.ring];
        const j = idx[c.ring]++; c.ta = j / per[c.ring] * TAU + c.ring * .35; c.ty = SPEC[c.ring].y; c.tR = SPEC[c.ring].R;
      }
      fitTex(c);
    });
  };
  layout(); cards.forEach((c)=>{ c.a = c.ta; c.y = c.ty; c.R = c.tR; });

  const ray = new THREE.Raycaster(), v2 = new THREE.Vector2();
  const api = {
    dirty: true, spin: 0, drag: 0, lift: 0,
    resize(w, h, dpr){
      renderer.setPixelRatio(Math.min(dpr, 1.75)); renderer.setSize(w, h, false);
      camera.aspect = w / h;
      // hochkant weiter Blick (alle drei Ringe sichtbar), quer enger
      camera.fov = camera.aspect < 1 ? 64 : 46;
      api.camZ = camera.aspect < 1 ? 8.6 : 9;
      camera.updateProjectionMatrix(); api.dirty = true;
    },
    setMode(m2){ mode = m2; layout(); api.dirty = true; },
    render(t, dt, still){
      const k = Math.min(3, (dt || 16) / 16);
      api.spin += (still ? 0 : .0014 * k) + api.drag; api.drag *= .9;
      camera.position.set(0, 1.3 + api.lift * 1.6, (api.camZ || 8.4) + api.lift * 2.5); camera.lookAt(0, api.lift * .6, 0);
      cards.forEach((c)=>{
        c.a += (c.ta - c.a) * .07 * k; c.y += (c.ty - c.y) * .07 * k;
        const dir = mode === "rings" && c.ring === 1 ? -1 : 1;
        // Karten auf dem Ring: Abstand R, nach außen gewandt (die Geometrie ist schon gebogen, liegt bei z = 0 → nach vorn schieben)
        c.pivot.rotation.y = c.a + api.spin * dir;
        c.pivot.position.y = c.y + (still ? 0 : Math.sin(t * .0006 + c.a * 3) * .06);
        c.mesh.position.z = c.tR;
      });
      sculpt.rotation.y = still ? .6 : t * .00022 + api.spin * .35;
      renderer.render(scene, camera); api.dirty = false;
    },
    pick(nx, ny){
      v2.set(nx, ny); ray.setFromCamera(v2, camera);
      const hit = ray.intersectObjects(cards.map((c)=> c.mesh), false)[0];
      return hit ? hit.object.userData : null;
    },
    count: cards.length,
    dispose(){
      cards.forEach((c)=>{ c.mat.map?.dispose(); c.mat.dispose(); });
      geos.forEach((g)=> g.dispose()); spiralGeo.dispose(); box.dispose(); metal.dispose(); inst.dispose();
      scene.environment?.dispose(); pmrem.dispose(); renderer.dispose();
    },
  };
  return api;
}
