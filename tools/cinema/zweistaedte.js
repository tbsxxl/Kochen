// Zwei Städte – oben eine Stadt aus Messing und Glas mit Brücken im Abendlicht, unten eine dunkle Stadt in grünem Dunst mit
// pinken Leuchtzeichen; dazwischen schwebt ein blau leuchtender Kristall. Scrollen senkt die Kamera von oben nach unten.
import { Group, Mesh, OctahedronGeometry, CylinderGeometry, PlaneGeometry, MeshBasicMaterial, AdditiveBlending, Color } from "three";
import { start as run, sky, glowTexture, glow, basic, box, windowsOn, particles, rng } from "./core.js";

const FOG = "#14363A", FOGD = .0085;

const def = {
  clear: FOG, fog: [FOG, FOGD],
  cam: { y: 8, z: 18, ly: 17, lz: -60, sy: -10, sz: -6, sly: -11 },
  intro: { word: "Zwei Städte", sub: "Kochbuch von oben und unten" },
  build({ scene, small }){
    const s = sky({ top: [.03, .12, .14], mid: [.10, .28, .28], hor: [.85, .62, .38], horY: .36, midY: .62, glowAt: [.38, .45], glowColor: [1, .8, .5], glowStr: .3, stars: .0015 });
    scene.add(s);
    const r = rng(9), brass = basic(0x3A2C17), dark = basic(0x07100F), wins = [], under = [];
    // Oberstadt: schlanke Türme mit goldenen Spitzen und Brücken
    const top = new Group();
    // Plateau, auf dem die Oberstadt steht
    box(top, basic(0x0B1A1B), 220, 12, 20, 0, -6, -100);
    for(let i = 0; i < 24; i++){
      const x = -70 + i * 6 + (r() - .5) * 3, h = 6 + r() * 16, w = .9 + r() * 1.4, z = -96 - r() * 8;
      box(top, brass, w, h, w, x, 6, z);
      const sp = new Mesh(new CylinderGeometry(0, w * .6, 2 + r() * 3, 6), basic(0x8A6A2E)); sp.position.set(x, 6 + h + 1.4, z); top.add(sp);
      for(let k = 0; k < 5; k++) if(r() > .3) wins.push([x + (r() - .5) * w * .5, 7.5 + r() * (h - 2), z + w / 2 + .05]);
    }
    for(let i = 0; i < 8; i++) box(top, brass, 6 + r() * 5, .3, .6, -60 + i * 16, 11 + r() * 8, -94);
    const flickTop = windowsOn(top, wins, 0xFFD28A, .26, .42);
    scene.add(top);
    // Unterstadt: gedrängte dunkle Blöcke, Rohre, pinke und grüne Zeichen
    const low = new Group();
    for(let i = 0; i < 26; i++){
      const x = -50 + i * 4 + (r() - .5) * 2, h = 3 + r() * 7;
      box(low, dark, 3 + r() * 2, h, 3, x, -6, -36 - r() * 8);
      if(r() > .55) under.push([x, -6 + h * (.4 + r() * .5), -34.4, r() > .5 ? 0xFF3FA4 : 0x6CFFB0]);
    }
    for(let i = 0; i < 5; i++){ const p = new Mesh(new CylinderGeometry(.35, .35, 120, 8), basic(0x101C1A)); p.rotation.z = Math.PI / 2; p.position.set(0, -3 + i * 1.6, -34 - i * 2); low.add(p); }
    scene.add(low);
    const signs = under.map(([x, y, z, col], i)=>{
      const m = new MeshBasicMaterial({ color: col, transparent: true, fog: true, blending: AdditiveBlending });
      const q = new Mesh(new PlaneGeometry(1.4 + (i % 3) * .8, .45), m); q.position.set(x, y, z); scene.add(q); return { m, seed: i * 1.7 };
    });
    // grüner Dunst unten
    const haze = new Mesh(new PlaneGeometry(200, 14), new MeshBasicMaterial({ color: 0x3BE08A, transparent: true, opacity: .08, depthWrite: false, fog: false, blending: AdditiveBlending }));
    haze.position.set(0, -3, -30); scene.add(haze);
    // Kristall
    const crystal = new Group();
    const gem = new Mesh(new OctahedronGeometry(3, 0), new MeshBasicMaterial({ color: 0x5FD4F0, transparent: true, opacity: .85, fog: false }));
    gem.scale.y = 1.6; crystal.add(gem);
    const edge = new Mesh(new OctahedronGeometry(3.06, 0), new MeshBasicMaterial({ color: 0xE6FBFF, wireframe: true, transparent: true, opacity: .55, fog: false }));
    edge.scale.y = 1.6; crystal.add(edge);
    const halo = glow(glowTexture("rgba(140,230,255,1)", "rgba(40,140,220,0)"), 22, .7); crystal.add(halo);
    crystal.position.set(14, 34, -60); scene.add(crystal);
    // Partikel: grüne Sporen von unten, pinke Funken
    scene.add(particles({ count: small ? 240 : 400, area: { w: 70, h: 26, z0: -36, z1: 4, y0: -6 }, size: [1.2, 2.4], color: [.45, 1, .65], speed: -.5, wind: .15, sway: .5, opacity: .55, flicker: 1, add: true, seed: 2 }));
    scene.add(particles({ count: small ? 60 : 110, area: { w: 50, h: 22, z0: -26, z1: 2, y0: -4 }, size: [1.5, 3], color: [1, .3, .65], speed: -.8, wind: -.3, sway: .8, opacity: .7, flicker: 1, add: true, seed: 12 }));
    let spin = 0, lastT = 0;
    return {
      update(t){
        s.material.uniforms.uTime.value = t;
        flickTop(t);
        spin += (t - lastT) * (window.KOCHBUCH_TIMER_ACTIVE ? 1.6 : .35); lastT = t; crystal.rotation.y = spin; crystal.position.y = 34 + Math.sin(t * .7) * .8;
        halo.material.opacity = .55 + .2 * Math.sin(t * 1.6);
        signs.forEach((o)=>{ o.m.opacity = (Math.sin(t * 13 + o.seed * 9) > -.92 ? 1 : .2) * (.75 + .25 * Math.sin(t * 2 + o.seed)); });
      }
    };
  }
};
export const start = (opts)=> run(def, opts);
