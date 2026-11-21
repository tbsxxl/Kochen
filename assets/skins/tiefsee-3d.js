// Tiefsee – 3D-Kopf (Nov. 2026, nach dem Vorbild einer Labor-Seite mit Glaskugel über riesiger Schrift): der Seitentitel liegt als Fläche
// im Raum, eine Kugel aus spiegelnden Scherben umschließt ihn, darin eine Qualle aus schillerndem Chrom. Scrollen und Gedrückthalten
// sprengen die Scherben auseinander, sie finden von selbst zurück. Als ES-Modul von tiefsee.js nachgeladen.
import * as THREE from "../vendor/three/three.module.min.js";
import { RoomEnvironment } from "../vendor/three/RoomEnvironment.js";

const TAU = Math.PI * 2;

export function create(canvas, textCanvas){
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setClearColor(0, 0); renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.1;
  const scene = new THREE.Scene(), pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), .02).texture;
  const camera = new THREE.PerspectiveCamera(30, 1, .1, 200);

  // Titel als Fläche (Textur = nachgezeichneter Titel in voller Leinwandgröße)
  const tTex = new THREE.CanvasTexture(textCanvas); tTex.colorSpace = THREE.SRGBColorSpace;
  const tPlane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: tTex, transparent: true, depthWrite: false }));
  scene.add(tPlane);

  // Scherben auf einer Kugel (Fibonacci-Verteilung), tangential ausgerichtet
  const N = 150, shardGeo = new THREE.BoxGeometry(1, 1, .04);
  const mirror = new THREE.MeshPhysicalMaterial({ color: 0xd6d2e6, metalness: 1, roughness: .05, envMapIntensity: 1.25, clearcoat: 1, iridescence: .7, iridescenceIOR: 1.6 });
  const shards = new THREE.InstancedMesh(shardGeo, mirror, N);
  const ball = new THREE.Group(); ball.add(shards); scene.add(ball);
  const S = [];
  for(let i = 0; i < N; i++){
    const y = 1 - (i + .5) / N * 2, r = Math.sqrt(1 - y * y), a = i * 2.39996;
    const n = new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), n);
    q.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.random() * TAU));
    S.push({ n, q, w: .09 + Math.random() * .12, h: .13 + Math.random() * .16, sp: .6 + Math.random() * .8, tw: (Math.random() - .5) * 2 });
  }

  // Qualle: Schirm (halbe, abgeflachte Kugel) und Fäden aus Röhren, schillerndes Chrom
  // Qualle: rosa-violett durchscheinend wie im Vorbild (nicht verchromt)
  const chrome = new THREE.MeshPhysicalMaterial({ color: 0xe9a8ff, metalness: 0, roughness: .22, iridescence: 1, iridescenceIOR: 1.4, iridescenceThicknessRange: [300, 800], emissive: 0x9b45e0, emissiveIntensity: .35, transparent: true, opacity: .86, side: THREE.DoubleSide, envMapIntensity: 1.2 });
  const jelly = new THREE.Group(); jelly.scale.setScalar(1.35); ball.add(jelly);
  const bell = new THREE.Mesh(new THREE.SphereGeometry(.34, 48, 24, 0, TAU, 0, Math.PI * .55), chrome); jelly.add(bell);
  const tent = [];
  for(let k = 0; k < 9; k++){
    const a = k / 9 * TAU, rr = k % 2 ? .22 : .12, pts = [];
    for(let s = 0; s <= 10; s++) pts.push(new THREE.Vector3(Math.cos(a) * rr, -.08 - s * .07, Math.sin(a) * rr));
    const curve = new THREE.CatmullRomCurve3(pts);
    const m = new THREE.Mesh(new THREE.TubeGeometry(curve, 30, k % 2 ? .012 : .02, 6), chrome);
    jelly.add(m); tent.push({ m, a, rr, base: m.geometry.attributes.position.array.slice() });
  }

  const M = new THREE.Matrix4(), P = new THREE.Vector3(), Q = new THREE.Quaternion(), V = new THREE.Vector3(), spin = new THREE.Quaternion();
  const api = {
    dirty: true, burst: 0, hold: 0,
    // Weltmaße so wählen, dass 1 Einheit auf Höhe z=0 genau `ppu` Pixel ist: Titelfläche deckt die Leinwand
    resize(w, h, dpr, cx, cy, R){
      renderer.setPixelRatio(Math.min(dpr, 2)); renderer.setSize(w, h, false);
      camera.aspect = w / h; camera.position.set(0, 0, 14); camera.lookAt(0, 0, 0); camera.updateProjectionMatrix();
      const visH = 2 * Math.tan(THREE.MathUtils.degToRad(15)) * 14, ppu = h / visH;
      tPlane.scale.set(w / ppu, h / ppu, 1);
      ball.position.set((cx - w / 2) / ppu, (h / 2 - cy) / ppu, 0);
      ball.scale.setScalar(R / ppu);
      tTex.needsUpdate = true; api.dirty = true;
    },
    text(){ tTex.needsUpdate = true; api.dirty = true; },
    render(t, dt, still){
      const k = Math.min(3, (dt || 16) / 16);
      const target = Math.max(api.burst, api.hold);
      api.ex = (api.ex || 0) + (target - (api.ex || 0)) * .06 * k;
      api.hold *= still ? 0 : .985;
      const ex = still ? 0 : api.ex;
      ball.rotation.y = still ? .6 : t * .00018 + ex * .8;
      ball.rotation.x = still ? .2 : Math.sin(t * .0003) * .15;
      for(let i = 0; i < N; i++){
        const s = S[i], d = 1 + ex * (.6 + s.sp * 1.1);
        P.copy(s.n).multiplyScalar(d);
        spin.setFromAxisAngle(V.set(1, 0, 0), ex * s.tw * 2.2);
        Q.copy(s.q).multiply(spin);
        M.compose(P, Q, V.set(s.w, s.h, 1)); shards.setMatrixAt(i, M);
      }
      shards.instanceMatrix.needsUpdate = true;
      // Qualle pulsiert, Fäden schwingen
      const pulse = still ? 0 : Math.sin(t * .003);
      bell.scale.set(1 + pulse * .06, 1 - pulse * .1, 1 + pulse * .06);
      jelly.position.y = .12 + (still ? 0 : Math.sin(t * .0011) * .06);
      if(!still) tent.forEach((q, j)=>{
        const arr = q.m.geometry.attributes.position.array, b = q.base;
        for(let i = 0; i < arr.length; i += 3){ const yy = b[i + 1], f = Math.max(0, -yy - .08); arr[i] = b[i] + Math.sin(t * .0024 + yy * 6 + j) * f * .18; arr[i + 2] = b[i + 2] + Math.cos(t * .002 + yy * 5 + j) * f * .12; }
        q.m.geometry.attributes.position.needsUpdate = true;
      });
      renderer.render(scene, camera); api.dirty = false;
    },
    dispose(){ shardGeo.dispose(); mirror.dispose(); chrome.dispose(); tTex.dispose(); scene.environment?.dispose(); pmrem.dispose(); renderer.dispose(); },
  };
  return api;
}
