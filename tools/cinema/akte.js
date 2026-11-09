// Akte – Sturmnacht vor einer Felseninsel: ziehende Wolken mit Blitzen, schräger Regen, aufgewühltes Meer, eine Anstalt auf
// der Klippe mit wenigen erleuchteten Fenstern, ein Leuchtturm, dessen Lichtkegel waagerecht über das Meer streicht
// (nie im Kreis nach oben, Wunsch des Besitzers). Scrollen fährt auf die Insel zu.
import { Group, Mesh, CylinderGeometry, ConeGeometry, PlaneGeometry, ShaderMaterial, AdditiveBlending, DoubleSide, AmbientLight } from "three";
import { start as run, sky, ridge, glowTexture, glow, basic, box, windowsOn, particles, water, rng } from "./core.js";

const FOG = "#1A232C", FOGD = .0095;

const def = {
  clear: FOG, fog: [FOG, FOGD],
  cam: { y: 3, z: 16, ly: 10.5, lz: -50, sy: 2.5, sz: -12, sly: 0 },
  intro: { word: "Akte", sub: "Kochbuch unter Verschluss" },
  build({ scene, small, reduce }){
    const s = sky({ top: [.02, .03, .04], mid: [.06, .08, .10], hor: [.16, .19, .22], horY: .38, midY: .6, stars: 0, clouds: .9, cloudColor: [.16, .19, .23] });
    scene.add(s);
    scene.add(water({ color: [.07, .09, .11], deep: [.14, .17, .2], glint: [.75, .82, .9], glintX: 14, z: -60, y: 0, d: 160, fogColor: FOG, fogD: FOGD, waves: 1.6 }));
    // Insel mit Klippe und Anstalt
    const isle = ridge(-58, 1, 9, 0x0A0E12, 31, 2, 40); isle.position.x = -6; scene.add(isle);
    const g = new Group(), mat = basic(0x080B0E);
    box(g, mat, 16, 4.5, 4, 0, 0, 0); box(g, mat, 5, 7, 4, -3, 0, -.5); box(g, mat, 3, 2.2, 3, -3, 7, -.5); box(g, mat, 6, 3.5, 3.5, 9, 0, .5);
    const rr = rng(5), wins = [];
    for(let i = 0; i < 9; i++) if(rr() > .35) wins.push([-7 + i * 1.7, 2.6, 2.03]);
    wins.push([-3.6, 5, 1.53], [-2.4, 5, 1.53]);
    const flick = windowsOn(g, wins, 0xE8D9A8, .5, .8);
    g.position.set(-10, 7.5, -60); scene.add(g);
    // Leuchtturm
    const lh = new Group();
    const tower = new Mesh(new CylinderGeometry(.8, 1.2, 12, 12), basic(0x1E262E)); tower.position.y = 6; lh.add(tower);
    const band = new Mesh(new CylinderGeometry(.92, 1.02, 1.6, 12), basic(0x5A1E1E)); band.position.y = 8; lh.add(band);
    const cap = new Mesh(new ConeGeometry(1.1, 1.6, 12), basic(0x0C0F12)); cap.position.y = 13.6; lh.add(cap);
    const lampTex = glowTexture("rgba(255,244,210,1)", "rgba(255,220,150,0)");
    const lamp = glow(lampTex, 3); lamp.position.y = 12.6; lh.add(lamp);
    // Lichtkegel: flache Fläche mit weichem Verlauf, dreht sich nur um die senkrechte Achse
    const beamMat = new ShaderMaterial({ transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide, fog: false,
      uniforms: { uO: { value: .6 } },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
      fragmentShader: `varying vec2 vUv; uniform float uO; void main(){ float a = pow(1. - vUv.x, 1.4) * smoothstep(.5, .0, abs(vUv.y - .5) / (.06 + vUv.x * .7)); gl_FragColor = vec4(vec3(1.,.95,.8), a * uO * .85); }` });
    const beamGeo = new PlaneGeometry(70, 14); beamGeo.translate(35, 0, 0);
    const beam = new Mesh(beamGeo, beamMat); beam.position.y = 12.6; lh.add(beam);
    lh.position.set(16, 4, -64); scene.add(lh);
    const rock = ridge(-63, 1.2, 4, 0x0A0E12, 41, 2, 10); rock.position.x = 16; scene.add(rock);
    // Regen und Gischt
    scene.add(particles({ count: small ? 900 : 1600, area: { w: 70, h: 30, z0: -30, z1: 6, y0: -2 }, size: [2.4, 4.2], color: [.75, .82, .9], speed: 14, wind: -3, sway: 0, opacity: .45, shape: "streak", seed: 7 }));
    scene.add(new AmbientLight(0xffffff, .2));
    let flash = 0, nextFlash = 4;
    return {
      update(t){
        s.material.uniforms.uTime.value = t;
        flick(t);
        // Lichtkegel streicht waagerecht hin und her über das Meer; zeigt er zum Betrachter, blitzt die Lampe auf
        const a = Math.sin(t * .45) * 1.3 + Math.PI / 2;
        beam.rotation.y = a;
        const toward = Math.max(0, Math.cos(a - Math.PI / 2));
        lamp.scale.setScalar(3 + toward * 5); lamp.material.opacity = .7 + toward * .3;
        beamMat.uniforms.uO.value = .45 + toward * .4;
        // Blitze: selten, kurz, doppelt
        if(!reduce){
          if(t > nextFlash){ flash = 1; nextFlash = t + 6 + Math.random() * 9; }
          flash = Math.max(0, flash - .06);
          const f = flash > .5 ? flash : flash * (Math.sin(t * 60) > 0 ? 1 : .3);
          s.material.uniforms.uFlash.value = f * .9;
        }
      }
    };
  }
};
export const start = (opts)=> run(def, opts);
