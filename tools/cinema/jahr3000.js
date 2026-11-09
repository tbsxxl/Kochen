// Jahr 3000 – Stadt der Zukunft in der Dämmerung: großer Ringplanet am Himmel, Türme mit Kuppeln und Untertassen-Dächern,
// leuchtende Fensterbänder, gläserne Röhren mit vorbeisausenden Kapseln, fliegende Autos auf mehreren Ebenen. Kein Violett.
import { Group, Mesh, CylinderGeometry, SphereGeometry, RingGeometry, TorusGeometry, TubeGeometry, CatmullRomCurve3, Vector3,
  MeshBasicMaterial, DoubleSide, AdditiveBlending, Color, ShaderMaterial } from "three";
import { start as run, sky, glowTexture, glow, basic, particles, rng, fogChunk } from "./core.js";

const FOG = "#123250", FOGD = .006;

// Turm-Material: Fensterbänder, die einzeln an- und ausgehen
function towerMat(lit){
  return new ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uFog: { value: new Color(FOG) }, uFogD: { value: FOGD } },
    vertexShader: `varying vec2 vUv; varying float vD; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.); vD = -mv.z; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `varying vec2 vUv; varying float vD; uniform float uTime; ${fogChunk}
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      void main(){
        vec2 cell = vec2(vUv.x * 14., vUv.y * 26.); vec2 g = floor(cell); vec2 f = fract(cell);
        float win = step(.3, f.x) * step(f.x, .7) * step(.35, f.y) * step(f.y, .65);
        float on = step(.72, h(g + floor(uTime * .05 + h(g) * 10.)));
        vec3 base = vec3(.035,.07,.12) + vec3(.02,.05,.07) * vUv.y;
        vec3 c = base + ${lit} * win * on * .55;
        gl_FragColor = vec4(applyFog(c, vD), 1.);
      }`
  });
}

const def = {
  clear: FOG, fog: [FOG, FOGD],
  cam: { y: 3, z: 18, ly: 15, lz: -60, sy: 6, sz: -12, sly: 2 },
  intro: { word: "Jahr 3000", sub: "Kochbuch der Zukunft" },
  build({ scene, small }){
    const s = sky({ top: [.015, .04, .10], mid: [.04, .12, .22], hor: [.62, .40, .30], horY: .36, midY: .6, glowAt: [.47, .40], glowColor: [1, .62, .3], glowStr: .22, stars: .004 });
    scene.add(s);
    // Ringplanet
    const planet = new Group();
    const ball = new Mesh(new SphereGeometry(13, 40, 24), new ShaderMaterial({
      vertexShader: `varying vec3 vN; varying vec2 vUv; void main(){ vN = normalMatrix * normal; vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
      fragmentShader: `varying vec3 vN; varying vec2 vUv; void main(){ float l = clamp(dot(normalize(vN), normalize(vec3(-.6,.5,.6))), 0., 1.);
        float band = .5 + .5 * sin(vUv.y * 40.); vec3 c = mix(vec3(.95,.55,.30), vec3(1.,.78,.5), band * .6) * (.18 + l * .9);
        gl_FragColor = vec4(c, 1.); }` }));
    planet.add(ball);
    const ring = new Mesh(new RingGeometry(17, 26, 64), new MeshBasicMaterial({ color: 0xFFD59A, transparent: true, opacity: .35, side: DoubleSide, fog: false }));
    ring.rotation.x = -1.2; ring.rotation.y = .3; planet.add(ring);
    planet.position.set(44, 128, -200); planet.scale.setScalar(1.1); scene.add(planet);
    // Skyline in drei Tiefen
    const r = rng(4), mats = [towerMat("vec3(.49,.95,.78)"), towerMat("vec3(1.,.72,.38)")], towers = [];
    const dome = basic(0x0B1828), disc = basic(0x0E2236);
    [[-130, 1.3], [-105, 1], [-85, .8]].forEach(([z0, sc], layer)=>{
      for(let i = 0; i < 22; i++){
        const x = -80 + i * 7.5 + (r() - .5) * 4, h = (5 + r() * 15) * sc, w = (1.4 + r() * 2) * sc;
        const m = mats[(i + layer) % 2];
        const t = new Mesh(new CylinderGeometry(w * .8, w, h, 14, 1, true), m); t.position.set(x, h / 2, z0); scene.add(t); towers.push(m);
        const top = r();
        if(top < .4){ const d = new Mesh(new SphereGeometry(w * .8, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), dome); d.position.set(x, h, t.position.z); scene.add(d); }
        else if(top < .75){ const d = new Mesh(new CylinderGeometry(w * 2, w * .6, w * .5, 18), disc); d.position.set(x, h + w * .2, t.position.z); scene.add(d); }
        else { const d = new Mesh(new CylinderGeometry(.08, .08, w * 3, 6), dome); d.position.set(x, h + w * 1.5, t.position.z); scene.add(d); }
      }
    });
    const ground = new Mesh(new CylinderGeometry(300, 300, 1, 32), basic(0x07121F)); ground.position.set(0, -.5, -100); scene.add(ground);
    // Röhrenbahn mit Kapseln
    const curve = new CatmullRomCurve3([new Vector3(-90, 7, -80), new Vector3(-35, 11, -72), new Vector3(0, 8, -66), new Vector3(35, 12, -74), new Vector3(90, 7, -82)]);
    scene.add(new Mesh(new TubeGeometry(curve, 120, .7, 10, false), new MeshBasicMaterial({ color: 0x7CF2C8, transparent: true, opacity: .16, fog: true, depthWrite: false })));
    scene.add(new Mesh(new TubeGeometry(curve, 120, .72, 10, false), new MeshBasicMaterial({ color: 0x7CF2C8, wireframe: true, transparent: true, opacity: .05, fog: true })));
    const mint = glowTexture("rgba(160,255,220,1)", "rgba(80,220,180,0)"), orange = glowTexture("rgba(255,210,150,1)", "rgba(255,140,60,0)");
    const pods = [0, .33, .66].map((o)=>{ const g = glow(mint, 3); scene.add(g); return { g, o }; });
    // fliegende Autos
    const cars = [];
    for(let i = 0; i < (small ? 6 : 10); i++){
      const c = new Group();
      const body = new Mesh(new SphereGeometry(.7, 12, 8), basic(0x1C3550)); body.scale.set(1.8, .5, 1); c.add(body);
      const l = glow(i % 2 ? orange : mint, 1.6); l.position.x = 1.2; c.add(l);
      const y = 9 + r() * 12, z = -45 - r() * 35, sp = (3 + r() * 5) * (r() > .5 ? 1 : -1);
      c.position.set(0, y, z); scene.add(c); cars.push({ c, sp, off: r() * 200, y });
    }
    scene.add(particles({ count: small ? 120 : 200, area: { w: 80, h: 30, z0: -40, z1: 0, y0: 2 }, size: [1, 2], color: [.6, 1, .85], speed: -.2, wind: .2, sway: .3, opacity: .5, flicker: 1, add: true, seed: 6 }));
    return {
      update(t){
        s.material.uniforms.uTime.value = t;
        towers.forEach((m)=>{ m.uniforms.uTime.value = t; });
        ball.rotation.y = t * .02; ring.rotation.z = t * .01;
        pods.forEach((p)=>{ p.g.position.copy(curve.getPointAt((((t * .07) + p.o) % 1 + 1) % 1)); });
        cars.forEach((o)=>{ const x = ((t * o.sp + o.off) % 160 + 160) % 160 - 80; o.c.position.x = x; o.c.position.y = o.y + Math.sin(t * .8 + o.off) * .4; o.c.scale.x = o.sp > 0 ? 1 : -1; });
      }
    };
  }
};
export const start = (opts)=> run(def, opts);
