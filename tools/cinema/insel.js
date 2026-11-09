// Die Insel – Strand in der Abenddämmerung: glühender Horizont, Meer mit Lichtbahn, Palmen-Silhouetten, Flugzeugwrack im
// Sand, dichter Dschungel dahinter, Glühwürmchen. Der Seitentitel behält den Vorspann aus CSS (Wunsch des Besitzers).
import { Group, Mesh, CylinderGeometry, PlaneGeometry, Shape, ShapeGeometry, MeshBasicMaterial, DoubleSide, Vector3 } from "three";
import { start as run, sky, ridge, glowTexture, glow, basic, particles, water, rng } from "./core.js";

const FOG = "#3A2E3A", FOGD = .006;

function palm(x, z, h, lean, mat){
  const g = new Group();
  const segs = 8;
  for(let i = 0; i < segs; i++){
    const t = i / segs, seg = new Mesh(new CylinderGeometry(.22 - t * .08, .26 - t * .08, h / segs + .05, 6), mat);
    seg.position.set(Math.sin(t * 1.4) * lean, t * h + h / segs / 2, 0); seg.rotation.z = -Math.cos(t * 1.4) * lean * .12; g.add(seg);
  }
  const top = new Vector3(Math.sin(1.4) * lean, h, 0);
  for(let k = 0; k < 7; k++){
    const s = new Shape(); s.moveTo(0, 0); s.quadraticCurveTo(2.2, .9, 4.6, -.9); s.quadraticCurveTo(2.2, .1, 0, 0);
    const f = new Mesh(new ShapeGeometry(s), mat); f.material.side = DoubleSide;
    f.position.copy(top); f.rotation.z = (k / 7) * Math.PI * 2; f.rotation.y = (k % 2 ? .5 : -.5); g.add(f);
  }
  g.position.set(x, 0, z); return g;
}

const def = {
  clear: FOG, fog: [FOG, FOGD],
  splitTitle: false,
  cam: { y: 2.6, z: 16, ly: 10, lz: -50, sy: 3, sz: -8, sly: .5 },
  intro: { word: "Die Insel", sub: "Kochbuch vom anderen Ende der Welt" },
  build({ scene, small }){
    const s = sky({ top: [.03, .05, .12], mid: [.20, .16, .30], hor: [1, .52, .30], horY: .33, midY: .55, glowAt: [.53, .36], glowColor: [1, .6, .35], glowStr: .6, stars: .002 });
    scene.add(s);
    scene.add(ridge(-150, 0, 10, 0x2A2033, 3));
    scene.add(water({ color: [.12, .10, .16], deep: [.35, .22, .25], glint: [1, .62, .38], glintX: 6, z: -80, y: 0, d: 140, fogColor: FOG, fogD: FOGD, waves: 1.1 }));
    // Sand und Dschungel
    const sand = new Mesh(new PlaneGeometry(400, 36), basic(0x3A2A26)); sand.rotation.x = -Math.PI / 2; sand.position.set(0, .05, -4); scene.add(sand);
    const jungle = ridge(-40, -1, 10, 0x0B120C, 17, 2, 40); jungle.position.x = -48; scene.add(jungle);
    const point = ridge(-70, -1, 5, 0x120F14, 19, 2, 30); point.position.x = 60; scene.add(point);
    const mat = basic(0x07090A);
    [[-13, -14, 16, 2.4], [-9, -18, 12, -1.4], [-17, -11, 11, 1.2], [13, -13, 15, -2.2], [17, -17, 11, 1.4]].forEach(([x, z, h, l])=> scene.add(palm(x, z, h, l, mat)));
    // Flugzeugwrack: Rumpf mit Bruchkante, Flügel schräg im Sand
    const wreck = new Group(), steel = basic(0x121316);
    const body = new Mesh(new CylinderGeometry(1.4, 1.4, 12, 16, 1, true), steel); body.rotation.z = Math.PI / 2 + .08; wreck.add(body);
    const ring = new Mesh(new CylinderGeometry(1.42, 1.42, .3, 16, 1, true), basic(0x2A2E33)); ring.rotation.z = Math.PI / 2; ring.position.x = 6; wreck.add(ring);
    const wing = new Mesh(new PlaneGeometry(10, 1.6), steel); wing.material.side = DoubleSide; wing.rotation.set(-1.2, .3, .25); wing.position.set(-1, -.6, 2.4); wreck.add(wing);
    const fin = new Shape(); fin.moveTo(0, 0); fin.lineTo(2.2, 3); fin.lineTo(3.2, 3); fin.lineTo(2.8, 0);
    const tail = new Mesh(new ShapeGeometry(fin), steel); tail.position.set(-6.4, .6, 0); wreck.add(tail);
    wreck.position.set(5, 1.1, -22); wreck.rotation.y = -.35; scene.add(wreck);
    // Lagerfeuer am Wrack
    const fire = glow(glowTexture("rgba(255,200,120,1)", "rgba(255,90,30,0)"), 3.4); fire.position.set(-1, 1, -18); scene.add(fire);
    scene.add(particles({ count: small ? 120 : 200, area: { w: 60, h: 14, z0: -34, z1: 4, y0: .5 }, size: [1.4, 2.6], color: [.85, 1, .55], speed: -.12, wind: .1, sway: 1.2, opacity: .8, flicker: 1, add: true, seed: 4 }));
    const embers = particles({ count: 50, area: { w: 4, h: 6, z0: -27, z1: -25, y0: 1 }, size: [1.5, 3], color: [1, .6, .25], speed: -1.2, wind: 0, sway: .4, opacity: .9, flicker: 1, add: true, seed: 14 });
    embers.position.set(-5, 0, 8); scene.add(embers);
    return {
      update(t){
        s.material.uniforms.uTime.value = t;
        fire.scale.setScalar(3.4 * (.85 + .1 * Math.sin(t * 11) + .05 * Math.sin(t * 27)));
      }
    };
  }
};
export const start = (opts)=> run(def, opts);
