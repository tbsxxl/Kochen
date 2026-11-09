// Nordwall – Kino-Kopf (Three.js + GSAP/ScrollTrigger). Quelle; gebaut nach assets/cinema/nordwall.js mit tools/cinema/build.sh.
// Bild: Nacht im hohen Norden. Eine Mauer aus Eis füllt den Horizont, davor Berge im Nebel, eine Burg mit Fackeln
// und eine Zickzack-Treppe aus Lichtern an der Mauer. Schnee in zwei Ebenen (fern fein, nah unscharf).
// Scrollen hebt die Kamera und fährt näher an die Mauer; der Titel blendet aus; das Heute-Foto weitet sich.
// Nur transform/opacity im DOM. Ohne WebGL bleibt die SVG-Szene aus skins.js. Bei „Bewegung reduzieren“: ein ruhiges Standbild.
import {
  WebGLRenderer, Scene, PerspectiveCamera, FogExp2, Color, Vector2, Vector3, Mesh, Group, Points, BufferGeometry,
  BufferAttribute, Float32BufferAttribute, PlaneGeometry, BoxGeometry, ShapeGeometry, Shape, ShaderMaterial,
  MeshLambertMaterial, MeshBasicMaterial, SpriteMaterial, Sprite, CanvasTexture, AdditiveBlending, HemisphereLight,
  DirectionalLight, PointLight, LineBasicMaterial, Line, SRGBColorSpace
} from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// Einblendungen laufen nach der Uhr, nicht nach Bildern: auch auf langsamen Geräten ist nach spätestens ~2,5 s alles sichtbar
gsap.ticker.lagSmoothing(0);

const FOG = new Color("#2B3644");

// kleines, festes Rauschen (gleiches Bild bei jedem Öffnen)
function rng(seed){ let s = seed >>> 0; return ()=> ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
function noise1(x, seed){
  const h = (i)=>{ let n = Math.sin(i * 127.1 + seed * 311.7) * 43758.5453; return n - Math.floor(n); };
  const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f);
  return h(i) * (1 - u) + h(i + 1) * u;
}
const fbm1 = (x, seed)=> noise1(x, seed) * .55 + noise1(x * 2.1, seed + 1) * .28 + noise1(x * 4.3, seed + 2) * .17;

function glowTexture(inner = "rgba(255,190,110,1)", outer = "rgba(255,120,40,0)"){
  const c = document.createElement("canvas"); c.width = c.height = 128;
  const g = c.getContext("2d"), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, inner); gr.addColorStop(.25, inner.replace(/[\d.]+\)$/, ".55)")); gr.addColorStop(1, outer);
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; return t;
}
function mistTexture(){
  const c = document.createElement("canvas"); c.width = 512; c.height = 128;
  const g = c.getContext("2d"), r = rng(7);
  for(let i = 0; i < 60; i++){
    const x = r() * 512, y = 40 + r() * 50, rad = 30 + r() * 70;
    const gr = g.createRadialGradient(x, y, 0, x, y, rad);
    gr.addColorStop(0, "rgba(200,212,224,.10)"); gr.addColorStop(1, "rgba(200,212,224,0)");
    g.fillStyle = gr; g.fillRect(0, 0, 512, 128);
  }
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; return t;
}

// gemeinsamer Nebel für eigene Shader
const fogChunk = `
  uniform vec3 uFog; uniform float uFogD;
  vec3 applyFog(vec3 col, float d){ float f = 1.0 - exp(-uFogD * uFogD * d * d); return mix(col, uFog, clamp(f, 0.0, 1.0)); }`;

function sky(){
  const m = new ShaderMaterial({
    depthWrite: false, fog: false,
    uniforms: { uTime: { value: 0 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `
      varying vec2 vUv; uniform float uTime;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      void main(){
        vec3 top = vec3(.012,.020,.038), mid = vec3(.050,.072,.105), hor = vec3(.20,.245,.30);
        float y = vUv.y;
        vec3 c = mix(hor, mid, smoothstep(.40, .58, y)); c = mix(c, top, smoothstep(.58, .95, y));
        // Mondschein hinter der Mauer
        vec2 m = vec2(.556, .60); float d = distance(vec2(vUv.x * 2.0, vUv.y), vec2(m.x * 2.0, m.y));
        c += vec3(.55,.62,.72) * .30 * exp(-d * 9.0) + vec3(.55,.62,.72) * .10 * exp(-d * 2.5);
        // Sterne (nur oben, funkeln langsam)
        vec2 g = floor(vUv * vec2(260., 110.)); float s = h(g);
        float tw = .55 + .45 * sin(uTime * (.6 + s * 1.7) + s * 40.);
        c += vec3(.85,.9,1.) * step(.9965, s) * tw * smoothstep(.5, .75, y) * .9;
        gl_FragColor = vec4(c, 1.);
      }`
  });
  const mesh = new Mesh(new PlaneGeometry(520, 220), m);
  mesh.position.set(0, 40, -170);
  return mesh;
}

function ridge(z, base, amp, color, seed){
  const s = new Shape(); s.moveTo(-260, -20);
  for(let x = -260; x <= 260; x += 4) s.lineTo(x, base + fbm1(x * .018, seed) * amp + fbm1(x * .09, seed + 5) * amp * .18);
  s.lineTo(260, -20); s.lineTo(-260, -20);
  const m = new Mesh(new ShapeGeometry(s), new MeshBasicMaterial({ color, fog: true }));
  m.position.z = z; return m;
}

function wall(){
  const W = 420, H = 15, geo = new PlaneGeometry(W, H, 420, 6);
  const p = geo.attributes.position;
  for(let i = 0; i < p.count; i++){
    const x = p.getX(i), y = p.getY(i);
    if(y > H / 2 - .01) p.setY(i, y + (fbm1(x * .12, 3) - .5) * .9 + (fbm1(x * .9, 9) - .5) * .25);
    p.setZ(i, (fbm1(x * .05, 11) - .5) * 3 * ((y + H / 2) / H));
  }
  geo.computeVertexNormals();
  const m = new ShaderMaterial({
    uniforms: { uFog: { value: FOG }, uFogD: { value: .0085 }, uTime: { value: 0 } },
    vertexShader: `varying vec2 vUv; varying float vD; varying vec3 vW;
      void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; vec4 mv = viewMatrix * w; vD = -mv.z; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `varying vec2 vUv; varying float vD; varying vec3 vW; ${fogChunk}
      float h(float x){ return fract(sin(x * 91.7) * 43758.5453); }
      float n(float x){ float i = floor(x), f = fract(x); f = f * f * (3. - 2. * f); return mix(h(i), h(i + 1.), f); }
      void main(){
        float x = vW.x, y = vUv.y;
        // senkrechte Rinnen im Eis
        float streak = n(x * .9) * .5 + n(x * 2.7) * .3 + n(x * 7.1) * .2;
        float ledge = smoothstep(.0, .015, abs(fract(y * 6. + n(x * .3) * .6) - .5) - .47);
        vec3 deep = vec3(.25,.34,.43), ice = vec3(.62,.72,.80), lit = vec3(.86,.92,.97);
        float strata = n(y * 9. + n(x * .05) * 3.) * .5 + n(y * 23. + x * .02) * .5;
        vec3 c = mix(deep, ice, smoothstep(.05, .95, y * .85 + streak * .18 + strata * .12));
        c *= .9 + streak * .1 - ledge * .05;
        c = mix(c, lit, smoothstep(.80, .985, y) * .55);          // Mondlicht auf der Krone
        c += vec3(.9,.95,1.) * smoothstep(.955, .995, y) * .35;   // heller Grat
        c = mix(c * .45, c, smoothstep(.0, .3, y));               // Schatten am Fuß
        gl_FragColor = vec4(applyFog(c, vD), 1.);
      }`
  });
  const mesh = new Mesh(geo, m);
  mesh.position.set(0, H / 2 - .3, -62);
  return mesh;
}

function stairs(scene, torches){
  // Zickzack-Treppe aus Lichtern an der Mauerfront
  const pts = [], x0 = 16, zz = -60.4;
  for(let i = 0; i <= 6; i++) pts.push(new Vector3(x0 + (i % 2 ? 5 : 0), .4 + i * 2.25, zz));
  const line = new Line(new BufferGeometry().setFromPoints(pts), new LineBasicMaterial({ color: 0x8a6a4a, transparent: true, opacity: .55, fog: true }));
  scene.add(line);
  const tex = glowTexture();
  pts.forEach((p, i)=>{
    if(i % 2) return;
    const s = new Sprite(new SpriteMaterial({ map: tex, blending: AdditiveBlending, depthWrite: false, transparent: true, opacity: .8, fog: false }));
    s.position.copy(p); s.scale.setScalar(1.1); scene.add(s); torches.push({ s, base: 1.1, seed: i * 1.7 });
  });
}

function castle(scene, torches, windows){
  const g = new Group(), mat = new MeshBasicMaterial({ color: 0x0E1318, fog: true });
  const box = (w, h, d, x, y, z)=>{ const m = new Mesh(new BoxGeometry(w, h, d), mat); m.position.set(x, y + h / 2, z); g.add(m); return m; };
  box(14, 3.4, 5, 0, 0, 0);                    // Halle
  box(4.4, 8, 4.4, -4, 0, .4);                 // Bergfried
  box(2.2, 11, 2.2, 5.2, 0, -.6);              // Turm
  box(2, 6.5, 2, -8.4, 0, .6);
  box(26, 1.6, 1.2, 1, 0, 3.2);                // Vormauer
  [[-4, 8, .4, 4.4], [5.2, 11, -.6, 2.2], [-8.4, 6.5, .6, 2]].forEach(([x, y, z, w])=>{
    for(let i = 0; i < 3; i++) box(w / 5, .6, w / 5, x - w / 2 + w / 10 + i * (w * .4), y, z - w / 2 + w / 10);
    for(let i = 0; i < 3; i++) box(w / 5, .6, w / 5, x - w / 2 + w / 10 + i * (w * .4), y, z + w / 2 - w / 10);
  });
  const winGeo = new PlaneGeometry(.34, .6);
  [[-4.6, 5.6, 2.62], [-3.3, 5.6, 2.62], [5.2, 8.4, .52], [1, 2, 2.52], [3.4, 2, 2.52], [-1.4, 2, 2.52]].forEach(([x, y, z], i)=>{
    const wm = new MeshBasicMaterial({ color: 0xFFB45A, fog: true, transparent: true });
    const w = new Mesh(winGeo, wm); w.position.set(x, y, z); g.add(w); windows.push({ m: wm, seed: i * 2.3 });
  });
  const tex = glowTexture();
  [[-12.6, 1.8, 3.9], [-2, 1.8, 3.9], [8, 1.8, 3.9], [13.6, 1.8, 3.9]].forEach(([x, y, z], i)=>{
    const s = new Sprite(new SpriteMaterial({ map: tex, blending: AdditiveBlending, depthWrite: false, transparent: true, fog: false }));
    s.position.set(x, y, z); s.scale.setScalar(2.2); g.add(s); torches.push({ s, base: 2.2, seed: 10 + i });
  });
  g.position.set(-14, 0, -50);
  g.scale.setScalar(.8);
  g.rotation.y = .1;
  scene.add(g);
  const pl = new PointLight(0xFF9A48, 18, 26, 1.6); pl.position.set(-14, 3, -44); scene.add(pl);
  return pl;
}

function snow(count, area, sizeRange, opacity, seed){
  const r = rng(seed), pos = new Float32Array(count * 3), size = new Float32Array(count), sd = new Float32Array(count);
  for(let i = 0; i < count; i++){
    pos[i * 3] = (r() - .5) * area.w; pos[i * 3 + 1] = r() * area.h; pos[i * 3 + 2] = area.z0 + r() * (area.z1 - area.z0);
    size[i] = sizeRange[0] + r() * (sizeRange[1] - sizeRange[0]); sd[i] = r();
  }
  const geo = new BufferGeometry();
  geo.setAttribute("position", new BufferAttribute(pos, 3));
  geo.setAttribute("aSize", new Float32BufferAttribute(size, 1));
  geo.setAttribute("aSeed", new Float32BufferAttribute(sd, 1));
  const m = new ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uTime: { value: 0 }, uH: { value: area.h }, uW: { value: area.w }, uWind: { value: 1 }, uPx: { value: 1 }, uOp: { value: opacity } },
    vertexShader: `attribute float aSize; attribute float aSeed; uniform float uTime, uH, uW, uWind, uPx; varying float vA;
      void main(){
        vec3 p = position;
        float sp = .9 + aSeed * 1.4;
        p.y = mod(p.y - uTime * sp, uH) - 2.;
        p.x += sin(uTime * (.4 + aSeed) + aSeed * 30.) * .6 + uTime * uWind * (.6 + aSeed * .6);
        p.x = mod(p.x + uW * .5, uW) - uW * .5;
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        gl_PointSize = aSize * uPx * (60. / -mv.z);
        vA = smoothstep(80., 8., -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `varying float vA; uniform float uOp;
      void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .0, d); gl_FragColor = vec4(vec3(.93,.96,1.), a * vA * uOp); }`
  });
  return new Points(geo, m);
}

export function start({ home, reduce, intro }){
  const field = home ? document.querySelector(".homeToday") : document.querySelector("body.fieldPage .pageContent");
  let canvas, renderer;
  try{
    canvas = document.createElement("canvas");
    canvas.className = "cineCanvas"; canvas.setAttribute("aria-hidden", "true");
    renderer = new WebGLRenderer({ canvas, antialias: false, powerPreference: "low-power" });
  }catch{ return null; }
  const DPR = Math.min(devicePixelRatio || 1, 1.6);
  renderer.setPixelRatio(DPR);
  renderer.setClearColor(FOG);
  document.body.prepend(canvas);
  document.documentElement.classList.add("cine");

  const scene = new Scene();
  scene.fog = new FogExp2(FOG, .0085);
  const cam = new PerspectiveCamera(46, 1, .1, 600);
  scene.add(new HemisphereLight(0x8FA3B8, 0x1A222B, 1.1));
  const moon = new DirectionalLight(0xC8D6E6, 1.2); moon.position.set(30, 40, 20); scene.add(moon);

  const skyM = sky(); scene.add(skyM);
  scene.add(ridge(-140, 8, 26, 0x35424F, 1));
  scene.add(ridge(-24, -1.2, 4.2, 0x141B22, 2));
  scene.add(ridge(-12, -1.6, 2.6, 0x0D1217, 4));
  const wallM = wall(); scene.add(wallM);
  const ground = new Mesh(new PlaneGeometry(500, 200, 1, 1), new MeshLambertMaterial({ color: 0x5E6B78 }));
  ground.rotation.x = -Math.PI / 2; ground.position.set(0, 0, -40); scene.add(ground);
  const torches = [], windows = [];
  stairs(scene, torches);
  const castleLight = castle(scene, torches, windows);
  const mist = [];
  const mt = mistTexture();
  for(let i = 0; i < 0; i++){
    const m = new Mesh(new PlaneGeometry(160, 14), new MeshBasicMaterial({ map: mt, transparent: true, depthWrite: false, opacity: .9, fog: false }));
    m.position.set((i - 1.5) * 40, 1.6 + i * .4, -54 + i * 9); scene.add(m); mist.push(m);
  }
  const small = innerWidth < 700;
  const flakes = snow(small ? 1400 : 2600, { w: 90, h: 34, z0: -34, z1: 6 }, [1.2, 2.6], .8, 3);
  const bokeh = snow(1, { w: 30, h: 18, z0: 6, z1: 10 }, [5, 10], .18, 5);
  scene.add(flakes);
  // Mond (oben rechts, mit Hof)
  const moonTex = glowTexture("rgba(235,242,255,1)", "rgba(160,180,210,0)");
  const halo = new Sprite(new SpriteMaterial({ map: moonTex, blending: AdditiveBlending, depthWrite: false, transparent: true, opacity: .35, fog: false }));
  const disc = new Sprite(new SpriteMaterial({ map: moonTex, blending: AdditiveBlending, depthWrite: false, transparent: true, opacity: 1, fog: false }));
  halo.scale.setScalar(70); disc.scale.setScalar(9);
  halo.position.set(22, 66, -150); disc.position.set(22, 66, -149);
  scene.add(halo, disc);

  // ---------- Kamera ----------
  const base = { y: 2.2, z: 15, ly: 11.2 };
  const st = { p: 0, intro: intro && !reduce ? 1 : 0, px: 0, py: 0 };
  const look = new Vector3();
  function size(){
    const w = innerWidth, h = innerHeight;
    renderer.setSize(w, h, false);
    canvas.style.width = w + "px"; canvas.style.height = h + "px";
    cam.aspect = w / h;
    cam.fov = w / h < .7 ? 58 : 46;     // Hochformat: weiter, damit die Mauer in die Breite passt
    cam.updateProjectionMatrix();
    flakes.material.uniforms.uPx.value = bokeh.material.uniforms.uPx.value = DPR * (h / 800);
  }
  size();

  // ---------- Feld fast bildschirmhoch (Startseite) ----------
  const homeToday = home ? document.querySelector(".homeToday") : null;
  let addedGap = 0;
  function tallField(){
    if(!homeToday) return;
    homeToday.style.marginTop = "";
    const mt = parseFloat(getComputedStyle(homeToday).marginTop) || 0;
    const top = homeToday.getBoundingClientRect().top + scrollY;
    addedGap = Math.max(0, Math.round(innerHeight * .9 - 96 - top));
    homeToday.style.marginTop = (mt + addedGap) + "px";
  }
  tallField();
  window.dispatchEvent(new Event("kochbuch:sceneresize"));

  // ---------- Bewegung ----------
  let raf = 0, running = false, t0 = performance.now(), last = t0;
  const fieldBottom = ()=> field ? field.getBoundingClientRect().top + scrollY + 40 : innerHeight;
  function frame(now){
    raf = 0;
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    const t = (now - t0) / 1000;
    const tt = reduce ? 0 : t;
    skyM.material.uniforms.uTime.value = tt;
    flakes.material.uniforms.uTime.value = tt;
    bokeh.material.uniforms.uTime.value = tt * .7;
    torches.forEach(o=>{ const f = .82 + .1 * Math.sin(tt * 9 + o.seed) + .08 * Math.sin(tt * 23 + o.seed * 3); o.s.scale.setScalar(o.base * f); o.s.material.opacity = .7 + .3 * f; });
    windows.forEach(o=>{ const f = .85 + .15 * Math.sin(tt * 3 + o.seed) * Math.sin(tt * 7.3 + o.seed); o.m.opacity = f; });
    castleLight.intensity = 16 + 4 * Math.sin(tt * 11) * Math.sin(tt * 3.1);
    mist.forEach((m, i)=>{ m.position.x = ((i - 1.5) * 40 + tt * (.6 + i * .25)) % 120 - (i % 2 ? 0 : 20); });
    // Kamera: Grundlage + Scrollen + Atmen + Zeiger + Vorspann
    const p = st.p, k = st.intro;
    const breathe = reduce ? 0 : Math.sin(tt * .25) * .25;
    cam.position.set(st.px * 1.2 + Math.sin(tt * .11) * .4 * (reduce ? 0 : 1),
      base.y + p * 4.5 + breathe + k * 22 + st.py * .5,
      base.z - p * 9 + k * 42);
    look.set(st.px * 2, base.ly + p * 1.5 + k * 6, -46);
    cam.lookAt(look);
    renderer.render(scene, cam);
    if(running && !reduce) raf = requestAnimationFrame(frame);
  }
  function play(){ if(running) return; running = true; last = performance.now(); if(!raf) raf = requestAnimationFrame(frame); }
  function pause(){ running = false; if(raf){ cancelAnimationFrame(raf); raf = 0; } }
  const check = ()=>{ (document.hidden || scrollY > fieldBottom()) ? pause() : play(); if(reduce) frame(performance.now()); };

  // ---------- GSAP: Einblendung, Scrollen, Bild ----------
  const ctx = gsap.context(()=>{});
  const title = document.querySelector(home ? ".homeGreetingTitle" : ".pageTitleBlock .h1");
  let titleOrig = null;
  ctx.add(()=>{
    if(title && !reduce){
      titleOrig = title.textContent;
      const lines = titleOrig.split("\n");
      const esc = (c)=> c.replace(/[&<>]/g, (m)=> ({ "&":"&amp;", "<":"&lt;", ">":"&gt;" }[m]));
      title.innerHTML = lines.map(l=> l.split(" ").map(w=> `<span class="cineW">${[...w].map(ch=> `<span class="cineCh">${esc(ch)}</span>`).join("")}</span>`).join(" ")).join("<br>");
      title.setAttribute("aria-label", titleOrig.replace(/\n/g, " "));
      gsap.from(title.querySelectorAll(".cineCh"), { opacity: 0, yPercent: 60, duration: 1.1, ease: "power3.out", stagger: .028, delay: k0() });
    }
    const after = home ? ".homeBrand, .homeGreetingSub, .homeContinue, .searchRow, .homeQuick, .houseCup" : ".fieldExtra";
    if(!reduce) gsap.from(after, { opacity: 0, y: 14, duration: .9, ease: "power3.out", stagger: .07, delay: k0() + .35, clearProps: "transform,opacity" });
    gsap.fromTo(canvas, { opacity: 0 }, { opacity: 1, duration: reduce ? .15 : 1.2, ease: "power2.out" });
    if(!reduce){
      ScrollTrigger.create({ start: 0, end: ()=> Math.max(200, fieldBottom() - innerHeight * .25), scrub: .8,
        onUpdate: (s)=>{ st.p = s.progress; } });
      const block = document.querySelector(home ? ".homeGreeting" : ".pageTitleBlock");
      if(block) gsap.to(block, { opacity: 0, ease: "none", scrollTrigger: { start: 0, end: ()=> innerHeight * .45, scrub: true } });
      const img = home && document.querySelector(".homeToday .homeFeatured .rcImg img");
      if(img) gsap.fromTo(img, { scale: 1.22 }, { scale: 1, ease: "none", scrollTrigger: { trigger: img.closest(".rcImg"), start: "top bottom", end: "top 30%", scrub: .6 } });
    }
  });
  function k0(){ return st.intro ? 2.4 : .15; }
  // Sicherung: nichts bleibt unsichtbar, falls Bilder ausbleiben
  const safety = setTimeout(()=>{
    document.querySelectorAll(".cineCh").forEach(el=>{ el.style.opacity = ""; el.style.transform = ""; });
    gsap.set(home ? ".homeBrand, .homeGreetingSub, .homeContinue, .searchRow, .homeQuick, .houseCup" : ".fieldExtra", { clearProps: "transform,opacity" });
  }, (k0() + 2.4) * 1000);

  // ---------- Vorspann beim Wechsel auf Nordwall ----------
  let introEl = null;
  if(st.intro){
    introEl = document.createElement("div");
    introEl.className = "cineIntro"; introEl.setAttribute("aria-hidden", "true");
    introEl.innerHTML = `<div class="cineIntroInner"><span class="cineIntroWord">Nordwall</span><i class="cineIntroRule"></i><span class="cineIntroSub">Kochbuch des hohen Nordens</span></div>`;
    document.body.appendChild(introEl);
    const tl = gsap.timeline({ onComplete: ()=>{ introEl?.remove(); introEl = null; } });
    tl.from(".cineIntroWord", { opacity: 0, scale: 1.18, duration: 1.4, ease: "power2.out" }, .1)
      .from(".cineIntroRule", { scaleX: 0, duration: 1, ease: "power3.inOut" }, .5)
      .from(".cineIntroSub", { opacity: 0, y: 8, duration: .8, ease: "power2.out" }, .9)
      .to(st, { intro: 0, duration: 2.8, ease: "power3.inOut" }, .6)
      .to(introEl, { opacity: 0, duration: .9, ease: "power2.inOut" }, 1.9);
    introEl.addEventListener("click", ()=> tl.progress(1));
  }

  // ---------- Zeiger (Computer): Kamera folgt leicht ----------
  const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
  const onMove = (e)=>{ gsap.to(st, { px: (e.clientX / innerWidth - .5), py: -(e.clientY / innerHeight - .5), duration: 1.2, ease: "power3.out", overwrite: true }); };
  if(fine && !reduce) addEventListener("pointermove", onMove, { passive: true });
  const onResize = ()=>{ size(); tallField(); ScrollTrigger.refresh(); check(); };
  addEventListener("resize", onResize);
  addEventListener("scroll", check, { passive: true });
  document.addEventListener("visibilitychange", check);
  check();
  if(reduce) frame(performance.now());

  return {
    stop(){
      pause(); clearTimeout(safety);
      ctx.revert();
      ScrollTrigger.getAll().forEach(s=> s.kill());
      removeEventListener("pointermove", onMove); removeEventListener("resize", onResize);
      removeEventListener("scroll", check); document.removeEventListener("visibilitychange", check);
      if(title && titleOrig !== null){ title.textContent = titleOrig; title.removeAttribute("aria-label"); }
      if(homeToday) homeToday.style.marginTop = "";
      introEl?.remove();
      renderer.dispose(); canvas.remove();
      document.documentElement.classList.remove("cine");
      window.dispatchEvent(new Event("kochbuch:sceneresize"));
    }
  };
}
