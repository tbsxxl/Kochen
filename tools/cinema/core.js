// Kino-Kopf: gemeinsamer Kern für alle Skins (Three.js + GSAP/ScrollTrigger). Gebaut mit tools/cinema/build.sh.
// Jede Szene (tools/cinema/<skin>.js) liefert eine Beschreibung: Farben, Kamera, Vorspann-Text und build(ctx) → { update(t) }.
// Der Kern kümmert sich um Canvas, Kamera (Scrollen, Atmen, Zeiger), Einblendung des Titels, Bild-Expansion, Vorspann,
// Pause bei weggescrolltem Feld/verborgener Seite, „Bewegung reduzieren“ (Standbild) und das Aufräumen beim Skin-Wechsel.
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// Einblendungen laufen nach der Uhr, nicht nach Bildern: auch auf langsamen Geräten ist nach spätestens ~2,5 s alles sichtbar
gsap.ticker.lagSmoothing(0);


// ---------- kleine Helfer ----------
export function rng(seed){ let s = seed >>> 0; return ()=> ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
export function noise1(x, seed){
  const h = (i)=>{ const n = Math.sin(i * 127.1 + seed * 311.7) * 43758.5453; return n - Math.floor(n); };
  const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f);
  return h(i) * (1 - u) + h(i + 1) * u;
}
export const fbm1 = (x, seed)=> noise1(x, seed) * .55 + noise1(x * 2.1, seed + 1) * .28 + noise1(x * 4.3, seed + 2) * .17;

export function glowTexture(inner = "rgba(255,190,110,1)", outer = "rgba(255,120,40,0)"){
  const c = document.createElement("canvas"); c.width = c.height = 128;
  const g = c.getContext("2d"), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, inner); gr.addColorStop(.25, inner.replace(/[\d.]+\)$/, ".55)")); gr.addColorStop(1, outer);
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
export function glow(tex, size, opacity = 1){
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity, fog: false }));
  s.scale.setScalar(size); return s;
}
export const basic = (color, extra = {})=> new THREE.MeshBasicMaterial({ color, fog: true, ...extra });
export function box(group, mat, w, h, d, x, y, z){
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y + h / 2, z); group.add(m); return m;
}
// Fenster: viele kleine leuchtende Rechtecke in einer Geometrie (flackern über die Deckkraft eines Materials je Gruppe)
export function windowsOn(group, list, color, w = .3, h = .5){
  const geo = new THREE.PlaneGeometry(w, h), mats = [];
  list.forEach(([x, y, z], i)=>{
    const m = new THREE.MeshBasicMaterial({ color, fog: true, transparent: true });
    const p = new THREE.Mesh(geo, m); p.position.set(x, y, z); group.add(p); mats.push({ m, seed: i * 2.3 });
  });
  return (t)=> mats.forEach(o=>{ o.m.opacity = .8 + .2 * Math.sin(t * 2.2 + o.seed) * Math.sin(t * 5.1 + o.seed * 1.7); });
}

// gemeinsamer Nebel für eigene Shader
export const fogChunk = `
  uniform vec3 uFog; uniform float uFogD;
  vec3 applyFog(vec3 col, float d){ float f = 1.0 - exp(-uFogD * uFogD * d * d); return mix(col, uFog, clamp(f, 0.0, 1.0)); }`;

// Himmel als großes Bild hinten: Verlauf, optional Lichthof, Sterne und ziehende Wolken
export function sky({ top, mid, hor, horY = .40, midY = .58, glowAt = null, glowColor = [.55, .62, .72], glowStr = .3, stars = 0, clouds = 0, cloudColor = [.2, .24, .3], z = -170, y = 40 }){
  const v3 = (a)=> `vec3(${a.map((n)=> n.toFixed(3)).join(",")})`;
  const m = new THREE.ShaderMaterial({
    depthWrite: false, fog: false,
    uniforms: { uTime: { value: 0 }, uFlash: { value: 0 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `
      varying vec2 vUv; uniform float uTime, uFlash;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
        return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + 1.), f.x), f.y); }
      float fbm(vec2 p){ float a = .5, s = 0.; for(int i = 0; i < 5; i++){ s += a * n2(p); p *= 2.03; a *= .5; } return s; }
      void main(){
        float y = vUv.y;
        vec3 c = mix(${v3(hor)}, ${v3(mid)}, smoothstep(${horY.toFixed(3)}, ${midY.toFixed(3)}, y));
        c = mix(c, ${v3(top)}, smoothstep(${midY.toFixed(3)}, .95, y));
        ${glowAt ? `vec2 m = vec2(${glowAt[0].toFixed(3)}, ${glowAt[1].toFixed(3)}); float d = distance(vec2(vUv.x * 2.0, vUv.y), vec2(m.x * 2.0, m.y));
        c += ${v3(glowColor)} * ${glowStr.toFixed(3)} * exp(-d * 9.0) + ${v3(glowColor)} * ${(glowStr / 3).toFixed(3)} * exp(-d * 2.5);` : ""}
        ${stars ? `vec2 sc = vUv * vec2(520., 220.); vec2 g = floor(sc); float s = h(g);
        vec2 sp = vec2(h(g + 7.1), h(g + 3.3)) * .6 + .2; float sd = length(fract(sc) - sp);
        float tw = .55 + .45 * sin(uTime * (.6 + s * 1.7) + s * 40.);
        c += vec3(.85,.9,1.) * step(${(1 - stars).toFixed(4)}, s) * smoothstep(.16, .02, sd) * tw * smoothstep(.45, .75, y);` : ""}
        ${clouds ? `float cl = fbm(vec2(vUv.x * 7. + uTime * .025, y * 3.2 - uTime * .004));
        float cm = smoothstep(.42, .78, cl) * ${clouds.toFixed(3)} * smoothstep(.35, .6, y);
        c = mix(c, ${v3(cloudColor)} * (1. + uFlash * 2.5), cm);` : ""}
        c += vec3(.55,.6,.7) * uFlash * .35;
        gl_FragColor = vec4(c, 1.);
      }`
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(520, 220), m);
  mesh.position.set(0, y, z);
  mesh.userData.tick = (t)=>{ m.uniforms.uTime.value = t; };
  return mesh;
}

// Hügel-/Bergkette als flache Silhouette
export function ridge(z, base, amp, color, seed, step = 4, w = 260){
  const s = new THREE.Shape(); s.moveTo(-w, -20);
  for(let x = -w; x <= w; x += step) s.lineTo(x, base + fbm1(x * .018, seed) * amp + fbm1(x * .09, seed + 5) * amp * .18);
  s.lineTo(w, -20); s.lineTo(-w, -20);
  const m = new THREE.Mesh(new THREE.ShapeGeometry(s), basic(color));
  m.position.z = z; return m;
}

// Wasser: ruhige Wellen, Lichtbahn (Mond/Sonne) und Spiegelung heller Punkte als senkrechte Streifen
export function water({ color, deep, glint = [.9, .92, 1], glintX = 0, z = -40, y = 0, w = 500, d = 200, fogColor, fogD, waves = 1 }){
  const v3 = (a)=> `vec3(${a.map((n)=> n.toFixed(3)).join(",")})`;
  const m = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uFog: { value: new THREE.Color(fogColor) }, uFogD: { value: fogD } },
    vertexShader: `varying vec3 vW; varying float vD; void main(){ vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; vec4 mv = viewMatrix * w; vD = -mv.z; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `varying vec3 vW; varying float vD; uniform float uTime; ${fogChunk}
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
        return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + 1.), f.x), f.y); }
      void main(){
        vec2 p = vW.xz;
        float wv = n2(p * vec2(.35, 1.4) + vec2(uTime * .25, uTime * .5)) * .6 + n2(p * vec2(.9, 3.) - vec2(uTime * .4, uTime * .2)) * .4;
        wv *= ${waves.toFixed(2)};
        float far = smoothstep(5., 120., vD);
        vec3 c = mix(${v3(color)}, ${v3(deep)}, far * .7) * (.85 + wv * .3);
        float lane = exp(-abs(vW.x - ${glintX.toFixed(2)}) * (.08 + (1. - far) * .1)) * smoothstep(.55, .95, wv) * (.4 + far * .8);
        c += ${v3(glint)} * lane * .9;
        gl_FragColor = vec4(applyFog(c, vD), 1.);
      }`
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, d, 1, 1), m);
  mesh.rotation.x = -Math.PI / 2; mesh.position.set(0, y, z);
  mesh.userData.tick = (t)=>{ m.uniforms.uTime.value = t; };
  return mesh;
}

// Partikel: Schnee, Regen (Streifen), Funken/Glühwürmchen (steigend, flackernd), Dampf (groß, weich)
const uPx = { value: 1 };
export function particles({ count, area, size = [1, 2], color = [.93, .96, 1], speed = 1.2, wind = 1, sway = .6, opacity = .8,
  shape = "dot", flicker = 0, seed = 3, add = false }){
  const r = rng(seed), pos = new Float32Array(count * 3), sz = new Float32Array(count), sd = new Float32Array(count);
  for(let i = 0; i < count; i++){
    pos[i * 3] = (r() - .5) * area.w; pos[i * 3 + 1] = r() * area.h; pos[i * 3 + 2] = area.z0 + r() * (area.z1 - area.z0);
    sz[i] = size[0] + r() * (size[1] - size[0]); sd[i] = r();
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("aSize", new THREE.Float32BufferAttribute(sz, 1));
  geo.setAttribute("aSeed", new THREE.Float32BufferAttribute(sd, 1));
  const v3 = `vec3(${color.map((n)=> n.toFixed(3)).join(",")})`;
  const shapeCode = shape === "streak"
    ? `vec2 q = gl_PointCoord - .5; float a = smoothstep(.06, .0, abs(q.x + q.y * .25)) * smoothstep(.5, .1, abs(q.y));`
    : shape === "soft" ? `float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .0, d) * .55;`
    : `float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .0, d);`;
  const m = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: add ? THREE.AdditiveBlending : THREE.NormalBlending,
    uniforms: { uTime: { value: 0 }, uH: { value: area.h }, uW: { value: area.w }, uY0: { value: area.y0 || 0 }, uPx, uOp: { value: opacity } },
    vertexShader: `attribute float aSize; attribute float aSeed; uniform float uTime, uH, uW, uY0, uPx; varying float vA; varying float vS;
      void main(){
        vec3 p = position;
        float sp = ${speed.toFixed(3)} * (.75 + aSeed * .9);
        p.y = uY0 + mod(p.y - uTime * sp, uH);
        p.x += sin(uTime * (.4 + aSeed) + aSeed * 30.) * ${sway.toFixed(3)} + uTime * ${wind.toFixed(3)} * (.6 + aSeed * .6);
        p.x = mod(p.x + uW * .5, uW) - uW * .5;
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        gl_PointSize = -mv.z < 2. ? 0. : min(aSize * uPx * (60. / -mv.z), 64.);
        vA = smoothstep(90., 8., -mv.z) * smoothstep(2., 5., -mv.z); vS = aSeed;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `varying float vA; varying float vS; uniform float uOp, uTime;
      void main(){ ${shapeCode}
        float f = ${flicker ? `(.55 + .45 * sin(uTime * (2. + vS * 5.) + vS * 50.))` : "1."};
        gl_FragColor = vec4(${v3}, a * vA * uOp * f); }`
  });
  const pts = new THREE.Points(geo, m);
  pts.userData.tick = (t)=>{ m.uniforms.uTime.value = t; };
  return pts;
}

// ---------- Start ----------
export function start(def, { home, reduce, intro }){
  const field = home ? document.querySelector(".homeToday") : document.querySelector("body.fieldPage .pageContent");
  let canvas, renderer;
  try{
    canvas = document.createElement("canvas");
    canvas.className = "cineCanvas"; canvas.setAttribute("aria-hidden", "true");
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: "low-power" });
  }catch{ return null; }
  const DPR = Math.min(devicePixelRatio || 1, 1.6);
  renderer.setPixelRatio(DPR);
  const clear = new THREE.Color(def.clear);
  renderer.setClearColor(clear);
  document.body.prepend(canvas);
  document.documentElement.classList.add("cine");

  const scene = new THREE.Scene();
  if(def.fog) scene.fog = new THREE.FogExp2(new THREE.Color(def.fog[0]), def.fog[1]);
  const cam = new THREE.PerspectiveCamera(46, 1, .1, 700);
  const small = innerWidth < 700;
  const st = { p: 0, intro: intro && !reduce ? 1 : 0, px: 0, py: 0 };
  const built = def.build({ scene, cam, small, reduce, st });
  const ticks = [];
  scene.traverse((o)=>{ if(o.userData.tick) ticks.push(o.userData.tick); });

  // ---------- Kamera ----------
  const C = Object.assign({ y: 2.2, z: 15, ly: 11, lz: -46, sy: 4.5, sz: -9, sly: 1.5, iy: 22, iz: 42, ily: 6, fov: [58, 46] }, def.cam || {});
  const look = new THREE.Vector3();
  function size(){
    const w = innerWidth, h = innerHeight;
    renderer.setSize(w, h, false);
    canvas.style.width = w + "px"; canvas.style.height = h + "px";
    cam.aspect = w / h;
    cam.fov = w / h < .7 ? C.fov[0] : C.fov[1];
    cam.updateProjectionMatrix();
    uPx.value = DPR * (h / 800);
  }
  size();

  // ---------- Feld fast bildschirmhoch (Startseite) ----------
  const homeToday = home ? document.querySelector(".homeToday") : null;
  function tallField(){
    if(!homeToday) return;
    homeToday.style.marginTop = "";
    const mt = parseFloat(getComputedStyle(homeToday).marginTop) || 0;
    const top = homeToday.getBoundingClientRect().top + scrollY;
    homeToday.style.marginTop = (mt + Math.max(0, Math.round(innerHeight * .9 - 96 - top))) + "px";
  }
  tallField();
  window.dispatchEvent(new Event("kochbuch:sceneresize"));

  // ---------- Bewegung ----------
  let raf = 0, running = false;
  const t0 = performance.now();
  const fieldBottom = ()=> field ? field.getBoundingClientRect().top + scrollY + 40 : innerHeight;
  function frame(now){
    raf = 0;
    const tt = reduce ? (def.stillTime || 0) : Math.max(0, (now - t0) / 1000);
    ticks.forEach((f)=> f(tt));
    built?.update?.(tt);
    const p = st.p, k = st.intro, still = reduce ? 0 : 1;
    const breathe = Math.sin(tt * .25) * .25 * still;
    cam.position.set(st.px * 1.2 + Math.sin(tt * .11) * .4 * still,
      C.y + p * C.sy + breathe + k * C.iy + st.py * .5,
      C.z + p * C.sz + k * C.iz);
    look.set(st.px * 2, C.ly + p * C.sly + k * C.ily, C.lz);
    cam.lookAt(look);
    built?.camera?.(cam, p, tt);
    renderer.render(scene, cam);
    if(running && !reduce) raf = requestAnimationFrame(frame);
  }
  function play(){ if(running) return; running = true; if(!raf) raf = requestAnimationFrame(frame); }
  function pause(){ running = false; if(raf){ cancelAnimationFrame(raf); raf = 0; } }
  // nur den Feldbereich zeigen: auf kurzen Seiten liegt unter dem Blatt sonst die Szene frei
  const clip = ()=>{ const visible = Math.max(0, fieldBottom() - 40 - scrollY); canvas.style.clipPath = `inset(0 0 ${Math.max(0, innerHeight - visible - 2)}px 0)`; };
  const check = ()=>{ clip(); (document.hidden || scrollY > fieldBottom()) ? pause() : play(); if(reduce) frame(performance.now()); };

  // ---------- GSAP: Einblendung, Scrollen, Bild ----------
  const k0 = ()=> st.intro ? 2.4 : .15;
  const AFTER = home ? ".homeBrand, .homeGreetingSub, .homeContinue, .searchRow, .homeQuick, .houseCup" : ".fieldExtra";
  const ctx = gsap.context(()=>{});
  const title = def.splitTitle === false ? null : document.querySelector(home ? ".homeGreetingTitle" : ".pageTitleBlock .h1");
  let titleOrig = null;
  ctx.add(()=>{
    if(title && !reduce){
      titleOrig = title.textContent;
      const esc = (c)=> c.replace(/[&<>]/g, (m)=> ({ "&":"&amp;", "<":"&lt;", ">":"&gt;" }[m]));
      title.innerHTML = titleOrig.split("\n").map((l)=> l.split(" ").map((w)=> `<span class="cineW">${[...w].map((ch)=> `<span class="cineCh">${esc(ch)}</span>`).join("")}</span>`).join(" ")).join("<br>");
      title.setAttribute("aria-label", titleOrig.replace(/\n/g, " "));
      gsap.from(title.querySelectorAll(".cineCh"), { opacity: 0, yPercent: 60, duration: 1.1, ease: "power3.out", stagger: .028, delay: k0() });
    }
    if(!reduce && def.splitTitle !== false) gsap.from(AFTER, { opacity: 0, y: 14, duration: .9, ease: "power3.out", stagger: .07, delay: k0() + .35, clearProps: "transform,opacity" });
    gsap.fromTo(canvas, { opacity: 0 }, { opacity: 1, duration: reduce ? .15 : 1.2, ease: "power2.out" });
    if(!reduce){
      ScrollTrigger.create({ start: 0, end: ()=> Math.max(200, fieldBottom() - innerHeight * .25), scrub: .8, onUpdate: (s)=>{ st.p = s.progress; } });
      const block = document.querySelector(home ? ".homeGreeting" : ".pageTitleBlock");
      if(block) gsap.to(block, { opacity: 0, ease: "none", scrollTrigger: { start: 0, end: ()=> innerHeight * .45, scrub: true } });
      const img = home && document.querySelector(".homeToday .homeFeatured .rcImg img");
      if(img && def.expandImage !== false) gsap.fromTo(img, { scale: 1.22 }, { scale: 1, ease: "none", scrollTrigger: { trigger: img.closest(".rcImg"), start: "top bottom", end: "top 30%", scrub: .6 } });
    }
  });
  // Sicherung: nichts bleibt unsichtbar, falls Bilder ausbleiben
  const safety = setTimeout(()=>{
    document.querySelectorAll(".cineCh").forEach((el)=>{ el.style.opacity = ""; el.style.transform = ""; });
    gsap.set(AFTER, { clearProps: "transform,opacity" });
  }, (k0() + 2.4) * 1000);

  // ---------- Vorspann beim Wechsel auf diesen Skin ----------
  let introEl = null;
  if(st.intro){
    introEl = document.createElement("div");
    introEl.className = "cineIntro"; introEl.setAttribute("aria-hidden", "true");
    introEl.innerHTML = `<div class="cineIntroInner"><span class="cineIntroWord">${def.intro.word}</span><i class="cineIntroRule"></i><span class="cineIntroSub">${def.intro.sub}</span></div>`;
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
      ScrollTrigger.getAll().forEach((s)=> s.kill());
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
