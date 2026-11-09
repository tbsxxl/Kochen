// Brigade – Restaurantküche kurz vor dem Service: dunkle Fliesenwand, Edelstahl-Pass mit Lichtreflex, orange Wärmelampen,
// hängende Pfannen und Kellen, Bons an der Leiste (bewegen sich leicht), Dampf aus den Töpfen. Scrollen fährt an den Pass.
import { Group, Mesh, CylinderGeometry, PlaneGeometry, TorusGeometry, ShaderMaterial, Color, MeshBasicMaterial, DoubleSide, AdditiveBlending } from "three";
import { start as run, glowTexture, glow, basic, box, particles, rng, fogChunk } from "./core.js";

const FOG = "#15191C", FOGD = .016;

function tiles(){
  return new ShaderMaterial({
    uniforms: { uFog: { value: new Color(FOG) }, uFogD: { value: FOGD } },
    vertexShader: `varying vec2 vUv; varying float vD; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; vec4 mv = viewMatrix * w; vD = -mv.z; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `varying vec2 vUv; varying float vD; varying vec3 vW; ${fogChunk}
      void main(){
        vec2 g = vec2(vW.x / 1.6, vW.y / .8); g.x += step(1., mod(floor(g.y), 2.)) * .5;   // Metro-Fliesen, versetzt
        vec2 f = fract(g); float joint = 1. - step(.04, f.x) * step(.06, f.y);
        float glaze = .5 + .5 * smoothstep(.0, .5, f.y) * (1. - f.y);
        vec3 c = mix(vec3(.13,.15,.16), vec3(.20,.22,.23), glaze) - joint * .07;
        // warmes Licht der Lampen fällt auf die Wand
        float l = 0.; for(int i = 0; i < 4; i++){ float x = -15. + float(i) * 10.; l += exp(-pow((vW.x - x) / 5., 2.)) * smoothstep(14., 4., vW.y); }
        c += vec3(.55,.28,.10) * l * .35;
        gl_FragColor = vec4(applyFog(c, vD), 1.);
      }`
  });
}
function steel(){
  return new ShaderMaterial({
    uniforms: { uFog: { value: new Color(FOG) }, uFogD: { value: FOGD } },
    vertexShader: `varying vec3 vW; varying float vD; void main(){ vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; vec4 mv = viewMatrix * w; vD = -mv.z; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `varying vec3 vW; varying float vD; ${fogChunk}
      float h(float x){ return fract(sin(x * 91.7) * 43758.5453); }
      void main(){
        float brush = h(floor(vW.z * 40.)) * .05;
        float l = 0.; for(int i = 0; i < 4; i++){ float x = -15. + float(i) * 10.; l += exp(-pow((vW.x - x) / 3., 2.)); }
        vec3 c = vec3(.30,.32,.34) + brush + vec3(.9,.5,.2) * l * .28 + vec3(.6) * smoothstep(.8, 1., sin(vW.x * .15 + 1.)) * .15;
        gl_FragColor = vec4(applyFog(c, vD), 1.);
      }`
  });
}

const def = {
  clear: FOG, fog: [FOG, FOGD],
  cam: { y: 3.2, z: 14, ly: 12.5, lz: -20, sy: -1.2, sz: -6, sly: -1, iy: 6, iz: 20, ily: 2, fov: [64, 50] },
  intro: { word: "Brigade", sub: "Küche, bereit zum Service" },
  build({ scene, small }){
    const wall = new Mesh(new PlaneGeometry(90, 30), tiles()); wall.position.set(0, 8, -22); scene.add(wall);
    const floor = new Mesh(new PlaneGeometry(90, 40), basic(0x0C0E10)); floor.rotation.x = -Math.PI / 2; floor.position.set(0, -2, -5); scene.add(floor);
    // Pass (Edelstahl-Theke) vorn
    const pass = new Mesh(new PlaneGeometry(60, 6), steel()); pass.rotation.x = -Math.PI / 2; pass.position.set(0, 1.2, -9); scene.add(pass);
    const front = new Mesh(new PlaneGeometry(60, 3.2), basic(0x1B1F22)); front.position.set(0, -.4, -6); scene.add(front);
    // Herdzeile hinten
    const g = new Group(), dark = basic(0x0D1012);
    box(g, dark, 40, 3, 3, 0, -2, -19);
    const pots = [];
    [-12, -5, 3, 10].forEach((x, i)=>{ const p = new Mesh(new CylinderGeometry(1.1, 1, 1.6, 16), basic(0x3A3F43)); p.position.set(x, 1.8, -19); g.add(p); pots.push(x); });
    scene.add(g);
    // Wärmelampen
    const warm = glowTexture("rgba(255,170,90,1)", "rgba(255,90,20,0)"), lamps = [];
    [-15, -5, 5, 15].forEach((x, i)=>{
      const cord = new Mesh(new CylinderGeometry(.03, .03, 6, 4), dark); cord.position.set(x, 13, -11); scene.add(cord);
      const shade = new Mesh(new CylinderGeometry(.5, 1.5, 1.2, 20, 1, true), basic(0x23282C, { side: DoubleSide })); shade.position.set(x, 9.6, -11); scene.add(shade);
      const l = glow(warm, 5); l.position.set(x, 9, -11); scene.add(l); lamps.push({ l, seed: i * 1.3 });
      const pool = glow(warm, 9, .35); pool.position.set(x, 1.3, -10); pool.scale.y = 3; scene.add(pool);
    });
    // hängendes Werkzeug an der Stange
    const rail = new Mesh(new CylinderGeometry(.06, .06, 40, 6), basic(0x30363A)); rail.rotation.z = Math.PI / 2; rail.position.set(0, 12, -16); scene.add(rail);
    const tools = [];
    for(let i = 0; i < 9; i++){
      const t = new Group(), x = -16 + i * 4;
      const handle = new Mesh(new CylinderGeometry(.06, .06, 2.4, 6), basic(0x2A2F33)); handle.position.y = -1.2; t.add(handle);
      const pan = new Mesh(i % 3 ? new CylinderGeometry(.9, .8, .15, 18) : new TorusGeometry(.7, .08, 6, 20), basic(0x1E2226));
      if(i % 3){ pan.rotation.x = Math.PI / 2; } pan.position.y = -3; t.add(pan);
      t.position.set(x, 12, -16); scene.add(t); tools.push({ t, seed: i });
    }
    // Bon-Leiste mit Zetteln
    const ticket = new MeshBasicMaterial({ color: 0x9C988C, fog: true, side: DoubleSide });
    const bar = new Mesh(new CylinderGeometry(.08, .08, 30, 6), basic(0x7D858B)); bar.rotation.z = Math.PI / 2; bar.position.set(0, 7.4, -12); scene.add(bar);
    const bons = [], r = rng(3);
    for(let i = 0; i < 9; i++){
      const b = new Mesh(new PlaneGeometry(.9, 1.5 + r() * .7), ticket); b.geometry.translate(0, -1.1, 0);
      b.position.set(-12 + i * 3 + (r() - .5), 7.4, -12); scene.add(b); bons.push({ b, seed: r() * 10 });
    }
    // Dampf aus den Töpfen
    pots.forEach((x, i)=>{ const p = particles({ count: 24, area: { w: 2.4, h: 8, z0: -19.5, z1: -18.5, y0: 2.4 }, size: [10, 18], color: [.85, .86, .88], speed: -.9, wind: 0, sway: .5, opacity: .16, shape: "soft", seed: 20 + i }); p.position.x = x; scene.add(p); });
    scene.add(particles({ count: small ? 80 : 140, area: { w: 40, h: 14, z0: -16, z1: 2, y0: 1 }, size: [1, 2], color: [1, .75, .45], speed: -.25, wind: .1, sway: .4, opacity: .45, flicker: 1, add: true, seed: 5 }));
    return {
      update(t){
        lamps.forEach((o)=>{ o.l.material.opacity = .88 + .12 * Math.sin(t * 1.3 + o.seed); });
        tools.forEach((o)=>{ o.t.rotation.z = Math.sin(t * .6 + o.seed) * .025; });
        bons.forEach((o)=>{ o.b.rotation.x = Math.sin(t * 1.1 + o.seed) * .08; });
      }
    };
  }
};
export const start = (opts)=> run(def, opts);
