# Learn routes — 22 image production briefs

Wired through `orthodoxImage(key)` and `SacredImageSlot`. **Prepend** [Master style](./orthodox-image-prompts.md#master-style-prompt-prepend-to-every-generation) and **append** [Master negative](./orthodox-image-prompts.md#master-negative-prompt-append-to-every-generation) + site baseline on every asset.

**Drop folder:** `public/images/learn/` · **Format:** JPEG 82–88 quality unless you need PNG.

---

## Summary table

| # | Manifest key | Filename | Component |
|---|----------------|----------|-----------|
| 1 | `learn.hubHero` | `learn-hub-hero-orthodox-manuscript.jpg` | `LearnHomeHero.jsx` |
| 2 | `learn.pathScripture` | `learn-path-scripture-open-bible.jpg` | `LearnPathCards.jsx` |
| 3 | `learn.pathTeachings` | `learn-path-teachings-seven-mysteries.jpg` | `LearnPathCards.jsx` |
| 4 | `learn.pathLiturgy` | `learn-path-liturgy-incense-qidase.jpg` | `LearnPathCards.jsx` |
| 5 | `learn.pathChurchLifeHistory` | `learn-path-church-history-rock-church.jpg` | `LearnPathCards.jsx` |
| 6 | `learn.pathChurchYear` | `learn-path-church-year-calendar-cycle.jpg` | `LearnPathCards.jsx` |
| 7 | `learn.faithMapPanel` | `learn-faith-journey-panel.jpg` | `LearnFaithMap.jsx` |
| 8 | `learn.sacramentsPreviewStrip` | `learn-sacraments-preview-strip.jpg` | `LearnSacramentsPreview.jsx` |
| 9 | `learn.qidaseFlow` | `learn-qidase-flow-liturgy.jpg` | `LearnQidaseFlow.jsx` |
| 10 | `learn.historyStrip` | `learn-church-history-timeline-strip.jpg` | `LearnHistoryStrip.jsx` |
| 11 | `learn.churchYearWheel` | `learn-church-year-cycle-wheel.jpg` | `LearnChurchYearWheel.jsx` |
| 12 | `learn.bridgeWordToLife` | `learn-bridge-scripture-to-language.jpg` | `LearnPracticeBridge.jsx` |
| 13 | `learn.bridgeFaithToPrayer` | `learn-bridge-faith-to-prayer.jpg` | `LearnPracticeBridge.jsx` |
| 14 | `learn.bridgeYearToCalendar` | `learn-bridge-church-year-to-calendar.jpg` | `LearnPracticeBridge.jsx` |
| 15 | `learn.scriptureHero` | `scripture-reading-path-manuscript.jpg` | `ScriptureHero.jsx` |
| 16 | `teachings.heroPanel` | `teachings-sacraments-hero-seven-mysteries.jpg` | `TeachingsSacramentsHero.jsx` |
| 17 | `teachings.mediaVideo` | `teachings-media-video-placeholder.jpg` | `TeachingsSacramentsMedia.jsx` |
| 18 | `teachings.mediaAudio` | `teachings-media-audio-placeholder.jpg` | `TeachingsSacramentsMedia.jsx` |
| 19 | `teachings.mediaLiturgy` | `teachings-media-liturgy-context.jpg` | `TeachingsSacramentsMedia.jsx` |
| 20 | `learn.liturgyHero` | `liturgy-qidase-hero.jpg` | `LiturgyHero.jsx` |
| 21 | `learn.churchHistoryHero` | `church-history-sacred-map.jpg` | `ChurchHistoryHero.jsx` |
| 22 | `learn.churchYearHero` | `church-year-cycle-hero.jpg` | `ChurchYearHero.jsx` |

---

## 1 — Learn hub hero

- **Title:** Manuscript-inspired study — Learn hub entry
- **Manifest key:** `learn.hubHero`
- **Filename:** `learn-hub-hero-orthodox-manuscript.jpg`
- **Recommended crop:** **1600×1040** (~20:13). Subject **center-right**; leave softer negative space **left** for hero typography.
- **Final prompt (after Master style):** Close editorial view: large leather-bound liturgical volume open on a low carved wooden stand; Ge’ez-like script visible but **not legible as real words**; brass Ethiopian processional cross and single thin beeswax candle; **subtle** incense smoke; background = soft-focus stone or wood **Ethiopian Orthodox** interior, warm clerestory or window light; contemplative, premium museum quality.
- **Negative prompt:** Master negative + site baseline + laptop, phone, neon, readable paragraphs of text, flash photography.
- **Reasoning:** Sets a serious “learning as sacred reading” tone for `/learn` without western study clichés.

## 2 — Path: Scripture

- **Title:** Open Gospel / sacred reading
- **Manifest key:** `learn.pathScripture`
- **Filename:** `learn-path-scripture-open-bible.jpg`
- **Recommended crop:** **800×600** (4:3). Center the open book and hands; **top third** slightly calmer for card overlays.
- **Final prompt:** Respectful mid-shot: layperson in **modest Ethiopian dress** seated at a simple wooden table; **Ethiopian-bound** Gospel or Bible open; small brass cross or embroidery visible; morning window light; **no** western pulpit or Gothic arches.
- **Negative:** Master negative + site baseline + Gothic windows, Latin missal styling, stack of random books, clutter.
- **Reasoning:** Path card must read instantly as **Scripture** in an Ethiopian Orthodox household/parish context.

## 3 — Path: Teachings (seven mysteries)

- **Title:** Seven mysteries — symbolic, not westernized
- **Manifest key:** `learn.pathTeachings`
- **Filename:** `learn-path-teachings-seven-mysteries.jpg`
- **Recommended crop:** **800×600**. Keep symbolic objects **on a draped table or in priest’s hands** — never on the floor.
- **Final prompt:** Priest in **correct Ethiopian Orthodox vestments**, **middle distance**, gentle blessing or teaching gesture; beside him on a **single brocade-draped table**, seven **small symbolic items** (e.g. clear vessel of water, covered paten, small oil flask, ring on open book, thin candle) arranged **sparsely**; soft side light; **no** crowd, **no** Last Supper tableau.
- **Negative:** Master negative + site baseline + seven identical emoji icons, Roman chasuble as default, crowded Last Supper copy, items on dirt or floor.
- **Reasoning:** Suggests catechesis and mysteries while staying **Ethiopian** and **calm**.

## 4 — Path: Liturgy (Qidase)

- **Title:** Incense and Qidase atmosphere
- **Manifest key:** `learn.pathLiturgy`
- **Filename:** `learn-path-liturgy-incense-qidase.jpg`
- **Recommended crop:** **800×600**. **Lower half** = floor and clergy legs minimal; emphasize **upper** incense and cross zone.
- **Final prompt:** Interior of **Ethiopian Orthodox** church: deacon or priest swinging **censer** with **light** smoke trail; processional or hand cross visible; **Ethiopian** curtain/altar arrangement — **not** a Latin high altar with candlesticks array; congregation soft bokeh; warm, **no** stage lighting.
- **Negative:** Master negative + site baseline + western tabernacle, six-candle Latin arrangement, concert haze, strobe, TV screens.
- **Reasoning:** Communicates **Divine Liturgy** mood faithful to **Qidase** visual language.

## 5 — Path: Church life & history

- **Title:** Rock-hewn sacred architecture
- **Manifest key:** `learn.pathChurchLifeHistory`
- **Filename:** `learn-path-church-history-rock-church.jpg`
- **Recommended crop:** **800×600**. Façade **centered**; small figures for scale **mid-ground**, not foreground clutter.
- **Final prompt:** **Lalibela-style** rock-hewn church façade, weathered stone, clear Ethiopian highland sky; **two small distant** figures in white **netela** approaching respectfully; calm, documentary editorial tone; **no** tour-group chaos.
- **Negative:** Master negative + site baseline + safari tropes, fake pyramids, unrelated monuments, oversaturated HDR.
- **Reasoning:** Immediately anchors **Ethiopian** Christian continuity and place.

## 6 — Path: Church year

- **Title:** Senksar / church calendar rhythm
- **Manifest key:** `learn.pathChurchYear`
- **Filename:** `learn-path-church-year-calendar-cycle.jpg`
- **Recommended crop:** **800×600**. Hands + calendar page **center**; **no** English month grid as hero.
- **Final prompt:** Close, respectful: hands turning a page of an **Ethiopian church calendar (senksar)**; embroidered **cross cloth** beneath; single warm lamp; hints of feast **icons** in margin **without readable Latin/English**; stone wall or wood table.
- **Negative:** Master negative + site baseline + Office Depot wall calendar, iPad calendar app, Google UI, clutter.
- **Reasoning:** Shows **sacred time** the way parishes actually track it.

## 7 — Faith journey panel

- **Title:** Spiritual journey — Ethiopian Orthodox life
- **Manifest key:** `learn.faithMapPanel`
- **Filename:** `learn-faith-journey-panel.jpg`
- **Recommended crop:** **1400×520** ultra-wide. Important motifs in **left / center / right thirds** for responsive slices.
- **Final prompt:** Panoramic **still** composition (not infographic): left = closed and open manuscript; center = Ethiopian **processional cross**; right = subtle circular motif suggesting **year cycle**; **very soft gold** connecting curves (abstract, not arrows with labels); parchment-warm background; **clean** and **spacious**.
- **Negative:** Master negative + site baseline + app wireframe, arrows with text, stock icons, busy map pins.
- **Reasoning:** Banner above steps needs **readability** and a **single** calm focal story.

## 8 — Sacraments preview strip

- **Title:** Horizontal seven — altar table still life
- **Manifest key:** `learn.sacramentsPreviewStrip`
- **Filename:** `learn-sacraments-preview-strip.jpg`
- **Recommended crop:** **1600×400** (4:1). Symmetry along **horizontal center line**.
- **Final prompt:** Ultra-wide: **one** long altar or credence table with dark brocade; **only** liturgical objects: baptismal shell and clear water vessel, **veiled** chalice and paten, chrism/oil flask, thin candle, open Gospel with **cross**; **even spacing**; soft lateral light; **nothing** on floor.
- **Negative:** Master negative + site baseline + dishes on floor, scattered props, floral aisle, picnic still life.
- **Reasoning:** Strip is **narrow** — symmetry and spacing keep it legible at small height.

## 9 — Qidase flow banner

- **Title:** Worship flow — orderly liturgy
- **Manifest key:** `learn.qidaseFlow`
- **Filename:** `learn-qidase-flow-liturgy.jpg`
- **Recommended crop:** **1600×720** (20:9). **Horizon line** of clergy **lower third**; allow **upper** breathing room.
- **Final prompt:** Single viewpoint toward **Ethiopian** holy of holies: **draped tabot** area; line of deacons in **Ethiopian** vestments; **one** censer in motion with restrained smoke; faithful as **quiet silhouettes**; dignified depth; **no** clutter in foreground.
- **Negative:** Master negative + site baseline + spotlights, projectors, concert smoke, camera flashes.
- **Reasoning:** Matches “flow” section — **movement** without chaos.

## 10 — Church history strip

- **Title:** Timeline triptych — continuity
- **Manifest key:** `learn.historyStrip`
- **Filename:** `learn-church-history-timeline-strip.jpg`
- **Recommended crop:** **1600×480** (10:3). **Three equal vertical bands** in one frame.
- **Final prompt:** Triptych: (1) aged **Ethiopian manuscript** corner and cross; (2) ancient **rock church** wall detail; (3) humble faithful entering **wooden church door** today; unified warm color grade; **editorial**, not collage chaos.
- **Negative:** Master negative + site baseline + war photography, political flags, maps with legible propaganda text.
- **Reasoning:** Reads as **time** across one **horizontal** band.

## 11 — Church year wheel

- **Title:** Sacred cycle — disc / wheel
- **Manifest key:** `learn.churchYearWheel`
- **Filename:** `learn-church-year-cycle-wheel.jpg`
- **Recommended crop:** **900×900** square; safe **circular** mask — keep crosses **in from edge** 8%.
- **Final prompt:** Top-down or slight tilt: **painted** liturgical wheel on **vellum** texture; **four to eight** muted segments (fast, feast, ordinary suggested by color only); **small Ethiopian crosses** at cardinal points; **no** English/Latin words; aged gold ink; **calm** iconographic realism.
- **Negative:** Master negative + site baseline + Excel chart, pie graph UI, neon gamut.
- **Reasoning:** Component is often **round** — art should survive **circular crop**.

## 12 — Bridge: Scripture → language

- **Title:** Word and fidel
- **Manifest key:** `learn.bridgeWordToLife`
- **Filename:** `learn-bridge-scripture-to-language.jpg`
- **Recommended crop:** **640×400** (8:5). Split visual **60/40** manuscript / chart.
- **Final prompt:** Study corner: open **Gospel** on stand; wall or easel with **Ge’ez fidel** chart (letters as shapes only, **no** lesson text); wooden cross; soft lamp; **no** laptop glow.
- **Negative:** Master negative + site baseline + Duolingo UI, school blackboard English sentences.
- **Reasoning:** Bridges **reading Scripture** to **language** practice on Practice hub.

## 13 — Bridge: Faith → prayer

- **Title:** Home prayer — devotion
- **Manifest key:** `learn.bridgeFaithToPrayer`
- **Filename:** `learn-bridge-faith-to-prayer.jpg`
- **Recommended crop:** **640×400**. Subject **slightly off-center** for card title overlay.
- **Final prompt:** Quiet **home oratory**: small **Ethiopian icon** or print, standing cross, single candle; figure in **modest dress** kneeling or standing in **reverent** prayer **from behind or profile**; warm tungsten; **no** living-room entertainment clutter.
- **Negative:** Master negative + site baseline + TV, sofa mess, yoga mat stereotype, selfie pose.
- **Reasoning:** Invites **Practice · Prayer** without domestic irreverence.

## 14 — Bridge: Church year → calendar

- **Title:** Seasons and feasts — calendar tool
- **Manifest key:** `learn.bridgeYearToCalendar`
- **Filename:** `learn-bridge-church-year-to-calendar.jpg`
- **Recommended crop:** **640×400**. Calendar or **feast icon card** readable at thumbnail scale.
- **Final prompt:** Table with **senksar** or parish calendar booklet; **small icon card** of a major feast; Ethiopian cross; soft daylight; **elegant** arrangement; **no** smartphone hero shot.
- **Negative:** Master negative + site baseline + Google Calendar screenshot, Apple Watch.
- **Reasoning:** Connects **theology of time** to the app’s **calendar** tool.

## 15 — Scripture page hero

- **Title:** Reading path — manuscript hero
- **Manifest key:** `learn.scriptureHero`
- **Filename:** `scripture-reading-path-manuscript.jpg`
- **Recommended crop:** **1440×880**. **Bottom** darker for gradient overlay compatibility.
- **Final prompt:** Hero scale: large **open double manuscript** with Ge’ez-like script (blurred); **brass Ethiopian cross**; **soft gold** accent along margin suggesting a **path** (abstract line, not text); candle and **subtle** incense; stone niche background; **educational** yet worshipful.
- **Negative:** Master negative + site baseline + library stacks, Western illuminated manuscript only (no Ethiopian cues), neon path.
- **Reasoning:** Matches **Scripture** route hero and supports **title overlay**.

## 16 — Teachings hero (seven mysteries)

- **Title:** Premium mysteries composition
- **Manifest key:** `teachings.heroPanel`
- **Filename:** `teachings-sacraments-hero-seven-mysteries.jpg`
- **Recommended crop:** **1200×900** master; UI may crop **top band** — keep strongest symbolism in **upper-middle**.
- **Final prompt:** Elevated still life on **Ethiopian brocade**: seven **discrete** symbolic elements (water, bread, covered cup, oil, etc.) in **gentle arc**; **no** literal comic-strip of seven identical saints; restrained gold; **single** soft key light; **museum** quality.
- **Negative:** Master negative + site baseline + emoji set, seven duplicate clip-art crosses, western baroque excess.
- **Reasoning:** Hero for **Teachings** must feel **theological** and **premium**, not generic.

## 17 — Teachings media: video

- **Title:** Teaching context — no studio gear
- **Manifest key:** `teachings.mediaVideo`
- **Filename:** `teachings-media-video-placeholder.jpg`
- **Recommended crop:** **1280×720** (16:9). Center **lectern**; leave **lower third** calmer if UI adds text.
- **Final prompt:** Empty **wooden lectern** in **Ethiopian** church nave; **closed** Gospel with **Ethiopian cross** on cover; soft natural light; **no** cameras, mics, or cables visible.
- **Negative:** Master negative + site baseline + DSLR, ring light, YouTube studio, RGB.
- **Reasoning:** “Video” card without **gadget** clichés.

## 18 — Teachings media: audio

- **Title:** Sacred listening — no headphones
- **Manifest key:** `teachings.mediaAudio`
- **Filename:** `teachings-media-audio-placeholder.jpg`
- **Recommended crop:** **1280×720**. Face **soft** or turned away to avoid uncanny focus.
- **Final prompt:** Faithful person seated **quietly** with eyes closed or lowered, hands on **open manuscript**; **no headphones**, **no microphone**; suggestion of **interior listening**; candlelight; **Ethiopian** church or home corner.
- **Negative:** Master negative + site baseline + AirPods, podcast mic, waveform graphics, recording booth.
- **Reasoning:** Honors **chant/audio learning** without **consumer tech** visuals.

## 19 — Teachings media: liturgy

- **Title:** Sacraments in worship context
- **Manifest key:** `teachings.mediaLiturgy`
- **Filename:** `teachings-media-liturgy-context.jpg`
- **Recommended crop:** **1280×720**. Altar **slightly off-center** for depth.
- **Final prompt:** **Ethiopian Orthodox** altar: **veiled** vessels, cross, **draped** holy place; **subtle** incense; **no** Latin riddle of six candles stereotype; **calm** single-camera documentary feel.
- **Negative:** Master negative + site baseline + baroque Roman altar, marble excess, tourist clutter.
- **Reasoning:** Ties **instruction** to **actual Qidase** context.

## 20 — Liturgy page hero

- **Title:** Qidase — dome, cross, incense
- **Manifest key:** `learn.liturgyHero`
- **Filename:** `liturgy-qidase-hero.jpg`
- **Recommended crop:** **1440×880**. Vertical **center** = cross or dome apex.
- **Final prompt:** Wide interior: **Ethiopian** dome or curved ceiling; **processional cross**; **one** priest in vestments **elevating or holding** Gospel **reverently**; **soft** incense atmosphere; warm pools of light; **no** western sanctuary copy-paste.
- **Negative:** Master negative + site baseline + Gothic arches, pipe organ, concert lighting.
- **Reasoning:** Primary visual for **`/learn/liturgy`**.

## 21 — Church life & history hero

- **Title:** Sacred geography / heritage
- **Manifest key:** `learn.churchHistoryHero`
- **Filename:** `church-history-sacred-map.jpg`
- **Recommended crop:** **1440×880**. **No** legible modern borders or contested labels.
- **Final prompt:** Artistic **relief map** suggestion of **Ethiopian highlands** in **warm earth tones**; **small** rock churches and crosses as **jewel-like points**; overlay of **ancient manuscript** texture **very subtle**; spiritual, **not** political poster.
- **Negative:** Master negative + site baseline + sharp political boundaries with text, flags, tanks, colonial map clichés.
- **Reasoning:** History page hero should feel **holy geography**, not **news**.

## 22 — Church year page hero

- **Title:** Year cycle — feasts and fasts
- **Manifest key:** `learn.churchYearHero`
- **Filename:** `church-year-cycle-hero.jpg`
- **Recommended crop:** **1440×880**. **Horizontal** rhythm (procession or calendar band).
- **Final prompt:** Ethiopian Orthodox **feast procession** **distant** and orderly **or** interior with **large wooden disk calendar** and vestments; seasonal colors **muted**; incense **subtle**; **calm** rhythm; **no** office calendar trope.
- **Negative:** Master negative + site baseline + January desk planner, iPhone date widget.
- **Reasoning:** Anchors **`/learn/church-year`** in **liturgical time**.

---

## Files to generate (checklist)

All paths under `public/images/learn/`:

1. `learn-hub-hero-orthodox-manuscript.jpg`
2. `learn-path-scripture-open-bible.jpg`
3. `learn-path-teachings-seven-mysteries.jpg`
4. `learn-path-liturgy-incense-qidase.jpg`
5. `learn-path-church-history-rock-church.jpg`
6. `learn-path-church-year-calendar-cycle.jpg`
7. `learn-faith-journey-panel.jpg`
8. `learn-sacraments-preview-strip.jpg`
9. `learn-qidase-flow-liturgy.jpg`
10. `learn-church-history-timeline-strip.jpg`
11. `learn-church-year-cycle-wheel.jpg`
12. `learn-bridge-scripture-to-language.jpg`
13. `learn-bridge-faith-to-prayer.jpg`
14. `learn-bridge-church-year-to-calendar.jpg`
15. `scripture-reading-path-manuscript.jpg`
16. `teachings-sacraments-hero-seven-mysteries.jpg`
17. `teachings-media-video-placeholder.jpg`
18. `teachings-media-audio-placeholder.jpg`
19. `teachings-media-liturgy-context.jpg`
20. `liturgy-qidase-hero.jpg`
21. `church-history-sacred-map.jpg`
22. `church-year-cycle-hero.jpg`

Until these exist, `SacredImageSlot` keeps the **gradient fallback** and any **SVG** fallbacks from parent components.
