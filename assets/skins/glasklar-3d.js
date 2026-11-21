// Glasklar – 3D-Kopf (Nov. 2026, nach dem Vorbild eines Portfolios mit Glasobjekt vor großer Schrift): der Seitentitel liegt als Fläche im
// Raum, davor schwebt ein Eisbrocken aus echtem Glas (Brechung durch Transmission, Farbzerlegung an den Kanten), dreht sich und folgt dem
// Finger. Als ES-Modul von glasklar.js nachgeladen.
import * as THREE from "../vendor/three/three.module.min.js";
import { RoomEnvironment } from "../vendor/three/RoomEnvironment.js";

export function create(canvas, textCanvas){
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setClearColor(0x0d0d0e, 1); renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  const scene = new THREE.Scene(), pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), .02).texture;
  const camera = new THREE.PerspectiveCamera(30, 1, .1, 200);

  const tTex = new THREE.CanvasTexture(textCanvas); tTex.colorSpace = THREE.SRGBColorSpace;
  const tPlane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: tTex, toneMapped: false }));
  // undurchsichtig (Grund mitgemalt), sonst sieht die Glasbrechung die Schrift nicht
  tPlane.position.z = -.6; scene.add(tPlane);

  // Eisbrocken: Ikosaeder mit unregelmäßig verschobenen Ecken (kantig wie gebrochenes Eis)
  const geo = new THREE.IcosahedronGeometry(1, 3), p = geo.attributes.position, v = new THREE.Vector3();
  const seen = new Map();
  for(let i = 0; i < p.count; i++){
    v.fromBufferAttribute(p, i);
    const key = v.toArray().map((n)=> n.toFixed(3)).join();
    if(!seen.has(key)){ const n = Math.sin(v.x * 3.1) * .12 + Math.sin(v.y * 4.3 + 1) * .1 + Math.sin(v.z * 2.7 + 2) * .12; seen.set(key, 1 + n); }
    v.multiplyScalar(seen.get(key)); v.y *= .86; p.setXYZ(i, v.x, v.y, v.z);
  }
  const flat = geo; flat.computeVertexNormals();
  const glass = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transmission: 1, thickness: .7, roughness: .02, ior: 1.45, dispersion: 4,
    clearcoat: 1, clearcoatRoughness: .05, specularIntensity: 1, envMapIntensity: 1.6, attenuationColor: new THREE.Color(0xdff2ff), attenuationDistance: 6 });
  const ice = new THREE.Mesh(flat, glass); scene.add(ice);

  const api = {
    dirty: true, px: 0, py: 0, follow: false, ppu: 1,
    resize(w, h, dpr, cx, cy, R){
      renderer.setPixelRatio(Math.min(dpr, 2)); renderer.setSize(w, h, false);
      camera.aspect = w / h; camera.position.set(0, 0, 14); camera.lookAt(0, 0, 0); camera.updateProjectionMatrix();
      // Titelfläche bei z = -0.6 so skalieren, dass sie die Leinwand genau deckt
      const visAt = (z)=> 2 * Math.tan(THREE.MathUtils.degToRad(15)) * (14 - z);
      const ppuT = h / visAt(-.6), ppu = h / visAt(0);
      tPlane.scale.set(w / ppuT, h / ppuT, 1);
      api.ppu = ppu; api.home = { x: (cx - w / 2) / ppu, y: (h / 2 - cy) / ppu };
      ice.scale.setScalar(R / ppu);
      tTex.needsUpdate = true; api.dirty = true;
    },
    target(x, y, w, h){ api.px = (x - w / 2) / api.ppu; api.py = (h / 2 - y) / api.ppu; },
    render(t, dt, still){
      const k = Math.min(3, (dt || 16) / 16), H = api.home || { x: 0, y: 0 };
      const tx = api.follow ? api.px : H.x + (still ? 0 : Math.sin(t * .00025) * 1.1), ty = api.follow ? api.py : H.y + (still ? 0 : Math.sin(t * .0004) * .25);
      ice.position.x += (tx - ice.position.x) * .05 * k; ice.position.y += (ty - ice.position.y) * .05 * k;
      if(still){ ice.position.set(H.x, H.y, 0); ice.rotation.set(.5, .7, .2); }
      else { ice.rotation.y = t * .0003; ice.rotation.x = .4 + Math.sin(t * .0005) * .25; }
      renderer.render(scene, camera); api.dirty = false;
    },
    dispose(){ geo.dispose(); glass.dispose(); tTex.dispose(); scene.environment?.dispose(); pmrem.dispose(); renderer.dispose(); },
  };
  return api;
}
