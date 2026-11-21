// Skin „Wortwelt“ (Nov. 2026): Farbwelten mit Küchenwörtern wechseln beim Scrollen, flache Illustrationen in drei Ebenen im Kopf.
// Nur geladen, wenn der Skin aktiv ist (fxRun() in assets/skins.js); Aufräumen über api.add()/api.on().
(()=>{
  "use strict";
  const COLORS = ["#FFD23F", "#FF9EC2", "#7FE0B5", "#8EC5FF", "#FFA45C", "#C3B1FF"];
  const WORDS = ["Schnippeln", "Brutzeln", "Köcheln", "Abschmecken", "Anrichten", "Genießen"];
  const K = 'stroke="#1A1A1A" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  const OBJ = {
    pot: `<svg viewBox="0 0 90 80"><path d="M33 20c-4-5 4-8 0-14M45 20c-4-5 4-8 0-14M57 20c-4-5 4-8 0-14" fill="none" ${K}/><rect x="8" y="28" width="74" height="9" rx="4.5" fill="#FF6B4A" ${K}/><path d="M14 37h62v22a14 14 0 0 1-14 14H28a14 14 0 0 1-14-14z" fill="#FF6B4A" ${K}/><path d="M4 44h10M76 44h10" fill="none" ${K}/></svg>`,
    tomato: `<svg viewBox="0 0 60 60"><circle cx="30" cy="34" r="22" fill="#FF4D4D" ${K}/><path d="M30 14l4 7 8-3-5 7 7 4-9 1-5 6-5-6-9-1 7-4-5-7 8 3z" fill="#3DBE6E" ${K}/><path d="M20 30q2-6 8-7" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/></svg>`,
    carrot: `<svg viewBox="0 0 70 70"><path d="M44 18L10 62q-2 3 2 2l42-30z" fill="#FF9B3D" ${K}/><path d="M44 18c2-8 8-12 14-12-1 6-5 11-12 14M48 22c6-4 13-4 18 0-5 4-11 5-17 2" fill="#3DBE6E" ${K}/><path d="M26 44l6 4M20 52l5 3M34 34l5 4" fill="none" ${K}/></svg>`,
    leaf: `<svg viewBox="0 0 60 60"><path d="M10 50C10 24 26 8 52 8c0 26-16 42-42 42z" fill="#3DBE6E" ${K}/><path d="M12 48L40 20" fill="none" ${K}/></svg>`,
    spoon: `<svg viewBox="0 0 40 90"><ellipse cx="20" cy="18" rx="13" ry="16" fill="#E8B07A" ${K}/><path d="M17 33h6l2 50q0 4-5 4t-5-4z" fill="#E8B07A" ${K}/></svg>`,
    lemon: `<svg viewBox="0 0 60 50"><path d="M6 25q0-16 24-18 24 2 24 18-0 16-24 18Q6 41 6 25z" fill="#FFE14D" ${K}/><path d="M2 25h6M52 25h6" ${K}/></svg>`,
    star: `<svg viewBox="0 0 40 40"><path d="M20 3l4 13 13 4-13 4-4 13-4-13-13-4 13-4z" fill="#FFFFFF" ${K}/></svg>`,
    dot: `<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="6" fill="#1A1A1A"/></svg>`,
  };
  // Lage in der freien Zone neben der kürzesten Titelzeile: x/y als Anteil der Zone, w als Anteil ihrer Höhe; Ebene 0 hinten … 2 vorn
  const HOME = [
    { o: "pot", x: .5, y: .36, w: 1.25, z: 1, rot: "-4deg", d: "4.4s" }, { o: "tomato", x: .95, y: -.35, w: .62, z: 2, rot: "8deg", d: "3.6s", dl: "-1s" },
    { o: "star", x: .02, y: .05, w: .34, z: 2, rot: "20deg", d: "3s" }, { o: "leaf", x: .9, y: 1.05, w: .48, z: 0, rot: "-10deg", d: "4.8s", dl: "-.5s" },
  ];
  const LIST = [
    { o: "lemon", x: .5, y: .5, w: 1, z: 1, rot: "-6deg", d: "3.8s" }, { o: "star", x: .95, y: -.2, w: .42, z: 2, rot: "16deg", d: "3.2s", dl: "-1s" },
    { o: "leaf", x: .1, y: .95, w: .4, z: 0, rot: "-8deg", d: "4.6s", dl: "-2s" },
  ];

  window.KOCHBUCH_FX.wortwelt = {
    start(api){
      if(!document.body.classList.contains("fieldPage")) return;

      // Farbwelten: fest hinter allem, eine Fläche pro Bildschirmhöhe
      const bg = api.bit("wwBg", "wortwelt");
      bg.setAttribute("aria-hidden", "true");
      bg.innerHTML = COLORS.map((c)=> `<i style="background:${c}"></i>`).join("") + WORDS.map((w)=> `<b>${w}</b>`).join("");
      document.body.prepend(bg);
      api.add(()=> bg.remove());
      const fills = bg.querySelectorAll("i"), words = bg.querySelectorAll("b");
      const meta = document.querySelector('meta[name="theme-color"]');
      let cur = -1;
      const pick = ()=>{
        const vh = innerHeight || 700, i = Math.max(0, Math.floor((scrollY + vh * .35) / (vh * .85))) % COLORS.length;
        if(i === cur) return;
        cur = i;
        fills.forEach((el, k)=> el.classList.toggle("on", k === i));
        words.forEach((el, k)=> el.classList.toggle("on", k === i));
        meta?.setAttribute("content", COLORS[i]);
      };

      // Illustrationen im Kopf
      const sc = api.scene(), title = api.title();
      let layers = [];
      const place = ()=>{
        if(!sc || !title) return;
        sc.querySelectorAll(".wwLayer").forEach((l)=> l.remove());
        const z = api.zone(title, sc), H = Math.max(36, Math.min(z.h, z.w * .7));
        layers = [0, 1, 2].map((n)=>{ const l = document.createElement("div"); l.className = "wwLayer"; l.dataset.z = n; sc.appendChild(l); return l; });
        (api.home() ? HOME : LIST).forEach((p)=>{
          const el = document.createElement("span");
          el.className = "wwObj";
          el.innerHTML = OBJ[p.o];
          const w = Math.round(p.w * H), cx = z.x + z.w * p.x, cy = z.y + z.h * p.y;
          el.style.cssText = `width:${w}px;left:${Math.round(cx - w / 2)}px;top:${Math.round(cy - w / 2)}px;--rot:${p.rot};${p.d ? `--d:${p.d};` : ""}${p.dl ? `--dl:${p.dl};` : ""}`;
          layers[p.z].appendChild(el);
        });
        parallax();
      };
      // Tiefe: hintere Ebenen bleiben zurück, vordere ziehen schneller nach oben
      const SPEED = [.18, .32, .5];
      const parallax = ()=>{
        if(api.reduce()) return;
        const y = Math.min(scrollY, 600);
        layers.forEach((l, z)=>{ l.style.transform = `translate3d(0,${(-y * SPEED[z]).toFixed(1)}px,0)`; });
      };
      api.add(()=> sc?.querySelectorAll(".wwLayer").forEach((l)=> l.remove()));

      let raf = 0;
      const onScroll = ()=>{ if(!raf) raf = requestAnimationFrame(()=>{ raf = 0; pick(); parallax(); }); };
      api.on(window, "scroll", onScroll, { passive: true });
      api.on(window, "resize", ()=>{ cur = -1; pick(); place(); }, { passive: true });
      api.add(()=> cancelAnimationFrame(raf));
      pick();
      place();
      document.fonts?.ready?.then(()=>{ if(document.body.contains(bg)) place(); });
    },
  };
})();
