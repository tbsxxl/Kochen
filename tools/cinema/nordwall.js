// Nordwall – Nacht im hohen Norden: Mond und Sterne, eine Mauer aus Eis mit mondbeschienener Krone, Burg-Silhouette mit
// Fackeln, Zickzack-Treppe aus Lichtern, dunkle Hügel vorn, Schnee. Scrollen hebt die Kamera zur Mauer.
import { Vector3, Mesh, Group, BufferGeometry, PlaneGeometry, ShaderMaterial, MeshLambertMaterial, HemisphereLight,
  DirectionalLight, PointLight, LineBasicMaterial, Line, Color } from "three";
import { start as run, sky, ridge, glowTexture, glow, basic, box, windowsOn, particles, fbm1, fogChunk } from "./core.js";

const FOG = "#2B3644", FOGD = .0085;

function wall(){
  const W = 420, H = 15, geo = new PlaneGeometry(W, H, 420, 6), p = geo.attributes.position;
  for(let i = 0; i < p.count; i++){
    const x = p.getX(i), y = p.getY(i);
    if(y > H / 2 - .01) p.setY(i, y + (fbm1(x * .12, 3) - .5) * .9 + (fbm1(x * .9, 9) - .5) * .25);
    p.setZ(i, (fbm1(x * .05, 11) - .5) * 3 * ((y + H / 2) / H));
  }
  const m = new ShaderMaterial({
    uniforms: { uFog: { value: new Color(FOG) }, uFogD: { value: FOGD } },
    vertexShader: `varying vec2 vUv; varying float vD; varying vec3 vW;
      void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; vec4 mv = viewMatrix * w; vD = -mv.z; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `varying vec2 vUv; varying float vD; varying vec3 vW; ${fogChunk}
      float h(float x){ return fract(sin(x * 91.7) * 43758.5453); }
      float n(float x){ float i = floor(x), f = fract(x); f = f * f * (3. - 2. * f); return mix(h(i), h(i + 1.), f); }
      void main(){
        float x = vW.x, y = vUv.y;
        float streak = n(x * .9) * .5 + n(x * 2.7) * .3 + n(x * 7.1) * .2;
        float ledge = smoothstep(.0, .015, abs(fract(y * 6. + n(x * .3) * .6) - .5) - .47);
        vec3 deep = vec3(.25,.34,.43), ice = vec3(.62,.72,.80), lit = vec3(.86,.92,.97);
        float strata = n(y * 9. + n(x * .05) * 3.) * .5 + n(y * 23. + x * .02) * .5;
        vec3 c = mix(deep, ice, smoothstep(.05, .95, y * .85 + streak * .18 + strata * .12));
        c *= .9 + streak * .1 - ledge * .05;
        c = mix(c, lit, smoothstep(.80, .985, y) * .55);
        c += vec3(.9,.95,1.) * smoothstep(.955, .995, y) * .35;
        c = mix(c * .45, c, smoothstep(.0, .3, y));
        gl_FragColor = vec4(applyFog(c, vD), 1.);
      }`
  });
  const mesh = new Mesh(geo, m); mesh.position.set(0, H / 2 - .3, -62); return mesh;
}

const def = {
  clear: FOG, fog: [FOG, FOGD],
  cam: { y: 2.2, z: 15, ly: 11.2 },
  intro: { word: "Nordwall", sub: "Kochbuch des hohen Nordens" },
  build({ scene }){
    scene.add(new HemisphereLight(0x8FA3B8, 0x1A222B, 1.1));
    const moon = new DirectionalLight(0xC8D6E6, 1.2); moon.position.set(30, 40, 20); scene.add(moon);
    const s = sky({ top: [.012, .020, .038], mid: [.050, .072, .105], hor: [.20, .245, .30], glowAt: [.556, .60], stars: .0035 });
    scene.add(s, ridge(-140, 8, 26, 0x35424F, 1), wall(), ridge(-24, -1.2, 4.2, 0x141B22, 2), ridge(-12, -1.6, 2.6, 0x0D1217, 4));
    const ground = new Mesh(new PlaneGeometry(500, 200), new MeshLambertMaterial({ color: 0x5E6B78 }));
    ground.rotation.x = -Math.PI / 2; ground.position.set(0, 0, -40); scene.add(ground);
    const tex = glowTexture(), torches = [];
    // Zickzack-Treppe
    const pts = [];
    for(let i = 0; i <= 6; i++) pts.push(new Vector3(16 + (i % 2 ? 5 : 0), .4 + i * 2.25, -60.4));
    scene.add(new Line(new BufferGeometry().setFromPoints(pts), new LineBasicMaterial({ color: 0x8a6a4a, transparent: true, opacity: .55, fog: true })));
    pts.forEach((p, i)=>{ if(i % 2) return; const g = glow(tex, 1.1, .8); g.position.copy(p); scene.add(g); torches.push({ s: g, base: 1.1, seed: i * 1.7 }); });
    // Burg
    const g = new Group(), mat = basic(0x0E1318);
    box(g, mat, 14, 3.4, 5, 0, 0, 0); box(g, mat, 4.4, 8, 4.4, -4, 0, .4); box(g, mat, 2.2, 11, 2.2, 5.2, 0, -.6);
    box(g, mat, 2, 6.5, 2, -8.4, 0, .6); box(g, mat, 26, 1.6, 1.2, 1, 0, 3.2);
    [[-4, 8, .4, 4.4], [5.2, 11, -.6, 2.2], [-8.4, 6.5, .6, 2]].forEach(([x, y, z, w])=>{
      for(let i = 0; i < 3; i++){ box(g, mat, w / 5, .6, w / 5, x - w / 2 + w / 10 + i * (w * .4), y, z - w / 2 + w / 10); box(g, mat, w / 5, .6, w / 5, x - w / 2 + w / 10 + i * (w * .4), y, z + w / 2 - w / 10); }
    });
    const flick = windowsOn(g, [[-4.6, 5.6, 2.62], [-3.3, 5.6, 2.62], [5.2, 8.4, .52], [1, 2, 2.52], [3.4, 2, 2.52], [-1.4, 2, 2.52]], 0xFFB45A, .34, .6);
    [[-12.6, 1.8, 3.9], [-2, 1.8, 3.9], [8, 1.8, 3.9], [13.6, 1.8, 3.9]].forEach(([x, y, z], i)=>{ const s = glow(tex, 2.2); s.position.set(x, y, z); g.add(s); torches.push({ s, base: 2.2, seed: 10 + i }); });
    g.position.set(-14, 0, -50); g.scale.setScalar(.8); g.rotation.y = .1; scene.add(g);
    const pl = new PointLight(0xFF9A48, 18, 26, 1.6); pl.position.set(-14, 3, -44); scene.add(pl);
    // Mond
    const mt = glowTexture("rgba(235,242,255,1)", "rgba(160,180,210,0)");
    const halo = glow(mt, 70, .35), disc = glow(mt, 9);
    halo.position.set(22, 66, -150); disc.position.set(22, 66, -149); scene.add(halo, disc);
    scene.add(particles({ count: innerWidth < 700 ? 1400 : 2600, area: { w: 90, h: 34, z0: -34, z1: 6, y0: -2 }, size: [1.2, 2.6], speed: 1.15, wind: 1, opacity: .8, seed: 3 }));
    return {
      update(t){
        s.material.uniforms.uTime.value = t;
        torches.forEach((o)=>{ const f = .82 + .1 * Math.sin(t * 9 + o.seed) + .08 * Math.sin(t * 23 + o.seed * 3); o.s.scale.setScalar(o.base * f); o.s.material.opacity = .7 + .3 * f; });
        flick(t);
        pl.intensity = 16 + 4 * Math.sin(t * 11) * Math.sin(t * 3.1);
      }
    };
  }
};
export const start = (opts)=> run(def, opts);
