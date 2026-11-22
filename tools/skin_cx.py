# gemeinsamer Aufbau der neuen Serien-Skins (Kino-Kopf, ruhige Karten, Rezeptseite) – je Skin mit eigenen Werten
def build(sk, v, extra="", intro=""):
    S=f'html.skin-{sk}:not(#_x#_y)'
    head=f'''/* Skin „{sk}“ – wird nur geladen, wenn dieser Skin aktiv ist.
   Dez. 2026 neu gebaut (Besitzer: „zu wenig wie die Serie, wirkt gebastelt“): gemalter Vollbild-Kopf auf der Startseite ({sk}.js),
   sonst ruhige, hochwertige Flächen in den Farben und Schriften der Welt. Die alten Spielereien sind abgeschaltet (PURE in skins.js).
   Neue Regeln ans Ende. */
{v.get("fontface","")}
{S},{S} body{{
  --field:{v["bg"]};--onField:{v["text"]};--onField2:{v["sub"]};--fieldFill:{v["fill"]};
  --bg:{v["bg"]};--surface:{v["surface"]};--surface2:{v["surface2"]};--fill:{v["fill"]};--line:{v["line"]};--lineStrong:{v["lineStrong"]};
  --text:{v["text"]};--sub:{v["sub"]};--sub2:{v["sub"]};--muted:{v["sub"]};
  --brand:{v["brand"]};--onBrand:{v["onBrand"]};--leaf:{v["brand"]};--onLeaf:{v["onBrand"]};--brandSoft:{v["fill"]};--leafSoft:{v["fill"]};
  --sel:{v["sel"]};--onSel:{v["onSel"]};--accent:{v["accent"]};--accentSoft:{v["fill"]};--onAccent:{v["onBrand"]};--herb:{v["brand"]};--coffee:{v["surface"]};
  --glass:{v["glass"]};--glassLine:{v["line"]};--glassShadow:none;
  --fontUi:{v["ui"]};--fontDisplay:{v["display"]};
  color-scheme:{v["scheme"]}}}
{S} body.grouped{{--bg:{v["bg"]};--surface:{v["surface"]}}}
{S} .cookOverlay{{--cBg:{v["bg"]};--cCard:{v["surface"]};--cFill:{v["fill"]};--cLine:{v["line"]};--cText:{v["text"]};--cSub:{v["sub"]};--cLeaf:{v["brand"]};--cOnLeaf:{v["onBrand"]}}}
{S} ::selection{{background:{v["sel"]};color:{v["onSel"]}}}
html.skin-{sk}{{background:{v["bg"]}}}
{S} body{{background:{v["bg"]} !important}}
{S} body .pageContent{{background:transparent !important;box-shadow:none !important}}
{S} .skinScene{{display:none !important}}

/* ---------- Schrift ---------- */
{S} :is(.pageTitleBlock .h1,.recipeHeroText .recipeName,.homeSectionTitle,.h2,.sheetTitle,.recipeTitle,.catTileName,.navCompact,.catGroupTitle,.prepTitle,.continueTitle,.brandWordmark,.ingSection,.homeFeaturedTitle){{font-family:var(--fontDisplay) !important;{v["titleStyle"]}}}
{S} .pageTitleBlock{{text-align:center;padding-top:14px}}
{S} .pageTitleBlock .h1{{font-size:{v["h1"]} !important;line-height:1 !important}}
{S} .pageTitleBlock .h1::after{{content:"";display:block;width:64px;height:1px;margin:14px auto 0;background:{v["ruleCol"]}}}
{S} :is(.homeSectionTitle,.h2){{font-size:{v["h2"]} !important;line-height:1.1 !important}}
{S} .homeSectionHead{{align-items:baseline;gap:12px}}
{S} .homeAllLink{{color:{v["link"]} !important}}
{S} .recipeCard .recipeTitle{{font-size:{v["cardTitle"]} !important;line-height:1.2 !important;color:{v["text"]}}}
{S} .recipeCard .recipeMeta{{color:{v["sub"]} !important}}

/* ---------- Knöpfe, Kapseln, Leiste ---------- */
{S} :is(.searchRow,.homeQuickBtn,.navIconBtn,.recipeActBtn,.recipeBack,.profileBadge,.segmented){{background:{v["ctl"]} !important;box-shadow:inset 0 0 0 1px {v["line"]} !important;color:{v["text"]} !important;border-radius:{v["rPill"]} !important}}
{S} :is(.filterChip,.chip,.pillToggle){{background:transparent !important;box-shadow:inset 0 0 0 1px {v["lineStrong"]} !important;color:{v["text"]} !important;border-radius:{v["rPill"]} !important}}
{S} :is(.filterChip.active,.filterChip[aria-pressed="true"],.pillToggle.active,.pillToggle[aria-pressed="true"],.chipMainCat){{background:{v["sel"]} !important;color:{v["onSel"]} !important;box-shadow:none !important}}
{S} :is(.btn.action,.recipeCookBtn,.cookNext,.btnPrimary,.continuePlay){{background:{v["brand"]} !important;color:{v["onBrand"]} !important;border-radius:{v["rPill"]} !important}}
{S} .segBtn{{background:transparent !important;color:{v["sub"]} !important;border-radius:{v["rPill"]} !important}}
{S} .segBtn.active{{background:{v["sel"]} !important;color:{v["onSel"]} !important}}
{S} .bottomRail{{background:{v["glass"]} !important;-webkit-backdrop-filter:blur(18px) saturate(1.2);backdrop-filter:blur(18px) saturate(1.2);border:1px solid {v["line"]} !important;box-shadow:0 12px 34px rgba(0,0,0,.35) !important}}
{S} .tabItem{{color:{v["sub"]} !important;background:transparent !important}}
{S} .tabItem.active{{background:{v["tabOn"]} !important;color:{v["onTab"]} !important}}

/* ---------- Karten: ruhige Flächen, Foto unverfälscht ---------- */
{S} .recipeCard{{background:{v["surface"]} !important;border-radius:{v["rCard"]} !important;box-shadow:inset 0 0 0 1px {v["line"]} !important;overflow:hidden !important}}
{S} .recipeCard .rcImg{{border-radius:0 !important;box-shadow:none !important}}
{S} .recipeCard .rcBody{{padding:12px 12px 14px !important}}
{S} :is(.catTile,.homeEmpty,.uEmpty,.homeTimer,.continueCard,.recipeInnerCard,.notesCard){{background:{v["surface"]} !important;border-radius:{v["rCard"]} !important;box-shadow:inset 0 0 0 1px {v["line"]} !important}}
{S} .continueCard :is(.continueEyebrow,.continueTitle,.continueSub){{color:{v["text"]} !important}}
/* Heute-Karte: Foto groß, Titel darauf */
{S} .homeFeatured{{border-radius:{v["rCard"]} !important;overflow:hidden !important;box-shadow:0 18px 40px rgba(0,0,0,.35) !important}}
{S} .homeFeatured .rcImg{{aspect-ratio:4/5 !important;max-height:72svh}}
{S} .homeFeatured .rcBody{{background:linear-gradient(transparent, rgba(0,0,0,.78)) !important;padding:60px 18px 20px !important}}
{S} .homeFeatured :is(.homeFeaturedTitle,.recipeMeta){{color:#FFFFFF !important;text-shadow:0 2px 14px rgba(0,0,0,.5) !important}}
{S} .homeFeatured .homeFeaturedTitle{{font-size:{v["featTitle"]} !important;line-height:1.08 !important}}
{S} .homeFeatured .heroOverlayCat{{background:rgba(0,0,0,.45) !important;color:#FFFFFF !important;border-radius:{v["rPill"]} !important}}
{S} #recipeGrid .linkCard{{margin:0 !important}}

/* ---------- Kino-Kopf der Startseite ---------- */
{S} body.cxHome .homeGreeting{{position:relative;min-height:100svh;margin-top:calc(-1 * env(safe-area-inset-top));padding-top:env(safe-area-inset-top)}}
{S} body.cxHome .homeBrand{{position:relative;z-index:3}}
{S} body.cxHome .brandWordmark{{color:{v["heroText"]} !important;opacity:0}}
{S} body.cxHome .profileBadge{{background:rgba(0,0,0,.25) !important;color:{v["heroText"]} !important;box-shadow:inset 0 0 0 1px rgba(255,255,255,.25) !important}}
{S} body.cxHome :is(.homeGreetingTitle,.homeGreetingSub){{position:absolute !important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}}
.cxHero{{position:absolute;top:-140px;bottom:0;left:50%;width:100vw;margin-left:-50vw;z-index:0;overflow:hidden;background:{v["heroBg"]}}}
.cxHero .cxPaint{{position:absolute;inset:0;width:100%;height:100%}}
.cxTitle{{position:absolute;left:0;right:0;top:calc(140px + {v["titleTop"]});z-index:2;display:flex;flex-direction:column;align-items:center;gap:6px;padding:0 16px;text-align:center;color:{v["heroText"]};will-change:transform,opacity}}
.cxKick{{font:{v["kick"]}}}
.cxBig{{font:{v["big"]};text-shadow:{v["bigShadow"]}}}
.cxRule{{display:flex;align-items:center;gap:10px;width:min(60vw,260px);margin:6px 0 2px}}
.cxRule::before,.cxRule::after{{content:"";flex:1;height:1px;background:{v["ruleCol"]}}}
.cxRule i{{width:7px;height:7px;transform:rotate(45deg);background:{v["ruleDot"]}}}
.cxDate{{font:{v["date"]}}}
.cxDown{{position:absolute;left:0;right:0;bottom:calc(env(safe-area-inset-bottom) + 100px);z-index:2;display:flex;flex-direction:column;align-items:center;gap:6px;min-height:44px;color:{v["heroText"]};text-decoration:none;font:{v["date"]};text-shadow:0 1px 10px rgba(0,0,0,.75)}}
.cxDown::after{{content:"";width:1px;height:30px;background:linear-gradient({v["heroText"]}, transparent)}}

/* ---------- Rezeptseite: Foto über die Breite, Titel darauf ---------- */
{S} .recipePageHero{{margin:0 calc(-16px - env(safe-area-inset-right)) 0 calc(-16px - env(safe-area-inset-left)) !important;border-radius:0 !important}}
{S} .recipePageHero::after{{background:linear-gradient(transparent 40%, {v["heroFade"]}) !important}}
{S} .recipeHeroText{{text-align:center;padding-bottom:22px !important}}
{S} .recipeHeroText .recipeName{{font-size:{v["recipeTitle"]} !important;line-height:1.05 !important;color:#FFFFFF !important}}
{S} .recipeHeroText .recipeSubtitle{{display:block !important;-webkit-line-clamp:unset !important;font:{v["subtitle"]} !important;color:rgba(255,255,255,.92) !important}}
{S} .recipePageCard{{background:transparent !important;box-shadow:none !important}}
{S} .recipePageBody{{background:transparent !important}}
{S} .recipeSegWrap.isStuck{{background:{v["glass"]} !important}}
@media (min-width:900px){{{S} .recipePageHero{{margin:0 !important;border-radius:{v["rCard"]} !important;overflow:hidden !important}}}}
'''
    return head+extra+intro
