// Zauberschule – Schloss mit vielen Türmen auf einer Klippe über einem dunklen See, hunderte warme Fenster, die sich im
// Wasser spiegeln; vorn schweben Kerzen (wie in der großen Halle), goldene Funken steigen auf. Scrollen gleitet über den See.
import { Group, Mesh, ConeGeometry, CylinderGeometry, Color } from "three";
import { start as run, sky, ridge, glowTexture, glow, basic, box, windowsOn, particles, water, rng } from "./core.js";

const FOG = "#141A33", FOGD = .0075;

function castle(scene){
  const g = new Group(), mat = basic(0x05060E), roof = basic(0x04050B), r = rng(11), wins = [];
  const tower = (x, z, w, h, cone)=>{
    const c = new Mesh(new CylinderGeometry(w / 2, w / 2 * 1.05, h, 10), mat); c.position.set(x, h / 2, z); g.add(c);
    const k = new Mesh(new ConeGeometry(w / 2 * 1.25, cone, 10), roof); k.position.set(x, h + cone / 2, z); g.add(k);
    for(let i = 0; i < Math.floor(h / 2.2); i++) if(r() > .35) wins.push([x + (r() - .5) * w * .4, 1.4 + i * 2.1, z + w / 2 + .02]);
  };
  box(g, mat, 30, 7, 6, 0, 0, 0);                 // Hauptbau
  box(g, mat, 12, 11, 5, -6, 0, -2);              // Halle
  box(g, mat, 9, 5, 4, 14, 0, 1.5);
  [[-17, 1, 3, 13, 5], [-11.5, -3, 2.4, 17, 6], [-1, -3.5, 3.2, 21, 7.5], [5, -1, 2.2, 15, 5], [10, 1, 2.6, 12, 4.6],
   [17, 2, 2, 10, 4], [21, 0, 1.6, 8, 3.6], [-22, 2, 1.8, 9, 3.4], [2, 2.5, 1.6, 11, 4]].forEach(([x, z, w, h, c])=> tower(x, z, w, h, c));
  for(let i = 0; i < 38; i++) wins.push([-14 + r() * 30, 1.2 + Math.floor(r() * 3) * 2, 3.02]);
  for(let i = 0; i < 14; i++) wins.push([-11 + r() * 10, 7.5 + Math.floor(r() * 2) * 1.6, .52]);
  const flick = windowsOn(g, wins, 0xFFC46B, .42, .78);
  g.position.set(4, 7.5, -78); g.scale.setScalar(.9); scene.add(g);
  // Klippe unter dem Schloss
  const cliff = ridge(-76, 6.5, 3, 0x080A16, 21, 3, 60); cliff.position.x = 4; scene.add(cliff);
  return flick;
}

const def = {
  clear: FOG, fog: [FOG, FOGD],
  cam: { y: 3.2, z: 16, ly: 19.5, lz: -60, sy: 2.5, sz: -14, sly: -1.5 },
  intro: { word: "Zauberschule", sub: "Kochbuch der alten Künste" },
  build({ scene, small }){
    const s = sky({ top: [.010, .014, .040], mid: [.045, .060, .140], hor: [.22, .22, .38], horY: .36, midY: .62, glowAt: [.5, .46], glowColor: [.6, .58, .8], glowStr: .25, stars: .005 });
    scene.add(s, ridge(-150, 6, 22, 0x1B2142, 3), ridge(-110, 2, 12, 0x12172F, 7));
    const flick = castle(scene);
    scene.add(water({ color: [.04, .05, .11], deep: [.12, .13, .25], glint: [1, .76, .42], glintX: 4, z: -40, y: 0, fogColor: FOG, fogD: FOGD, waves: 1 }));
    scene.add(ridge(-18, -1, 3, 0x05060F, 9), ridge(-10, -1.6, 2, 0x030409, 12));
    // schwebende Kerzen vorn
    const tex = glowTexture("rgba(255,214,140,1)", "rgba(255,150,60,0)"), candles = [], r = rng(5);
    const wax = new CylinderGeometry(.07, .07, .7, 8), waxM = basic(0xEFE4CC);
    for(let i = 0; i < (small ? 12 : 20); i++){
      const c = new Group();
      const b = new Mesh(wax, waxM); c.add(b);
      const f = glow(tex, 1.6); f.position.y = .5; c.add(f);
      c.position.set((r() - .5) * 40, 20 + r() * 12, -18 - r() * 22);
      scene.add(c); candles.push({ c, f, y: c.position.y, seed: r() * 10 });
    }
    scene.add(particles({ count: small ? 260 : 420, area: { w: 60, h: 24, z0: -40, z1: 4, y0: -1 }, size: [1.4, 2.6], color: [1, .82, .45], speed: -.35, wind: .1, sway: .5, opacity: .85, flicker: 1, add: true, seed: 8 }));
    return {
      update(t){
        s.material.uniforms.uTime.value = t;
        flick(t);
        candles.forEach((o)=>{ o.c.position.y = o.y + Math.sin(t * .5 + o.seed) * .35; o.f.scale.setScalar(1.6 * (.85 + .15 * Math.sin(t * 8 + o.seed * 3))); });
      }
    };
  }
};
export const start = (opts)=> run(def, opts);
