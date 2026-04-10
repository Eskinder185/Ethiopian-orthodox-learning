# OrthodoxPath — sacred image generation guide

This document pairs **every Learn / Practice / shared placeholder** wired through `src/constants/orthodoxImageManifest.js` and `src/components/media/SacredImageSlot.jsx` with **exact AI prompts**. Drop finished files under `public/images/learn/`, `public/images/practice/`, or `public/images/shared/` using the filenames below.

**Learn hub & Learn routes (22 JPEG slots):** full per-asset prompts, negatives, crops, and reasoning are in **[`learn-image-briefs.md`](./learn-image-briefs.md)**; this file holds the **master prompts**, **quick index**, and **Practice / shared** detailed entries.

**Code references**

- Manifest + resolver: `src/constants/orthodoxImageManifest.js` (`orthodoxImage(key)`).
- UI wrapper: `src/components/media/SacredImageSlot.jsx` (gradient fallback + optional SVG/content fallback).
- Existing Practice hub PNGs: `src/constants/practiceHubImages.js` (also bridged as `practice.hub*` keys in the manifest).

---

## Master style prompt (prepend to every generation)

> Photorealistic editorial photograph, Ethiopian Orthodox Tewahedo Church, authentic stone or wooden church interior or reverent outdoor courtyard in Ethiopia, natural soft daylight or gentle candle and incense smoke with **subtle** haze, warm ivory and deep brown palette with restrained gold accents, **calm and solemn** mood, modest clergy or laypeople in **correct Ethiopian Orthodox vestments or simple modest clothing**, **respectful still posture**, hands and faces natural and anatomically correct, **historically respectful**, cinematic shallow depth of field, **high resolution**, **not fantasy**, **not cluttered**, **no text overlays**, **no logos**, **no watermark**.

## Master negative prompt (append to every generation)

> western Catholic cathedral, Latin mass styling, Roman collar as sole signifier, generic “African church” stereotype, tribal cliches, fantasy glowing halos, neon, concert lighting, stage microphones, headphones, drum kit, snare drum, marching band drum, bongo drums, brass band, scattered flower petals on floor, dishes or bowls on floor, plates on floor, decorative floor props, cluttered junk, exaggerated gold palace, CGI fantasy armor, distorted hands, extra fingers, extra limbs, blurry faces, mangled instruments, cartoon, anime, low quality, low detail, text, watermark, logo, modern glass skyscraper church, crowd selfie energy, laughing poses, immodest clothing, irreverent posture, western high altar substitutions, fantasy church interior, inaccurate Ethiopian Orthodox vestments.

**Site baseline negatives (Learn assets — always merge with Master negative):** flowers on the floor; dishes, plates, or bowls on the floor; headphones; stage or concert look; western drum kit, snare, bongo, or marching drum; fantasy church; Catholic/Latin styling when inaccurate; generic “African church” stereotypes; clutter; palace-like gold overload; distorted anatomy; western altar substitutions; irreverent posture.

---

## Instrument authenticity add-ons

**Kebero (Ethiopian liturgical drum)** — append to relevant prompts:

> Large **cylindrical double-headed Ethiopian kebero**, rope-tensioned skin heads, **traditional wooden shell**, used in **liturgical** context only, held or resting **reverently**, **no metal snares**, **no Western marching drum**.

**Tsenatsil (sistrum)** — append:

> **Ethiopian Orthodox metal sistrum (tsenatsil)** with **cross or traditional cut-out plate**, **thin rods or blades**, held upright **calmly**, **not** a random hand bell or tambourine.

**Mequamia (prayer staff)** — append:

> **Ethiopian prayer staff (mequamia)** with **rounded shaft and simple cross head**, held **upright** or rested **gently**, **not** a wizard staff, **not** a Western crozier with ornate spiral.

---

## Quick index: manifest key → filename → folder

| Manifest key | Filename | Folder |
| --- | --- | --- |
| `learn.hubHero` | `learn-hub-hero-orthodox-manuscript.jpg` | learn |
| `learn.pathScripture` | `learn-path-scripture-open-bible.jpg` | learn |
| `learn.pathTeachings` | `learn-path-teachings-seven-mysteries.jpg` | learn |
| `learn.pathLiturgy` | `learn-path-liturgy-incense-qidase.jpg` | learn |
| `learn.pathChurchLifeHistory` | `learn-path-church-history-rock-church.jpg` | learn |
| `learn.pathChurchYear` | `learn-path-church-year-calendar-cycle.jpg` | learn |
| `learn.faithMapPanel` | `learn-faith-journey-panel.jpg` | learn |
| `learn.sacramentsPreviewStrip` | `learn-sacraments-preview-strip.jpg` | learn |
| `learn.qidaseFlow` | `learn-qidase-flow-liturgy.jpg` | learn |
| `learn.historyStrip` | `learn-church-history-timeline-strip.jpg` | learn |
| `learn.churchYearWheel` | `learn-church-year-cycle-wheel.jpg` | learn |
| `learn.bridgeWordToLife` | `learn-bridge-scripture-to-language.jpg` | learn |
| `learn.bridgeFaithToPrayer` | `learn-bridge-faith-to-prayer.jpg` | learn |
| `learn.bridgeYearToCalendar` | `learn-bridge-church-year-to-calendar.jpg` | learn |
| `learn.scriptureHero` | `scripture-reading-path-manuscript.jpg` | learn |
| `learn.liturgyHero` | `liturgy-qidase-hero.jpg` | learn |
| `learn.churchHistoryHero` | `church-history-sacred-map.jpg` | learn |
| `learn.churchYearHero` | `church-year-cycle-hero.jpg` | learn |
| `teachings.heroPanel` | `teachings-sacraments-hero-seven-mysteries.jpg` | learn |
| `teachings.mediaVideo` | `teachings-media-video-placeholder.jpg` | learn |
| `teachings.mediaAudio` | `teachings-media-audio-placeholder.jpg` | learn |
| `teachings.mediaLiturgy` | `teachings-media-liturgy-context.jpg` | learn |
| `shared.startHereOrientation` | `start-here-orientation-poster.jpg` | shared |
| `shared.instrumentVideoPoster` | `ethiopian-kebero-liturgical.png` | shared |
| `shared.languageVideoPoster` | `language-pronunciation-video-poster.jpg` | shared |
| `practice.mezmurWorkspace` | `practice-mezmur-workspace.jpg` (or `.png`) | practice |
| `practice.mezmurSampleA`–`D` | `practice-mezmur-card-sample-a.jpg` … `d.jpg` | practice |
| `practice.mezmurSlideFeast` / `Lent` / `Listen` | `practice-mezmur-featured-*-slide.jpg` | practice |
| `practice.time5` / `10` / `20` | `practice-by-time-5min.jpg` … | practice |
| `practice.progressEncouragement` | `practice-progress-section.jpg` | practice |

**Already in repo (PNG) — see `practiceHubImages.js`.** Manifest bridge keys (same alt strings as `PRACTICE_BRIDGE_ALT`):

| Manifest key | `practiceHubImages` key | Typical file (today) |
| --- | --- | --- |
| `practice.hubHero` | `hero` | `practice-hero.png` |
| `practice.hubPrayerCard` | `prayerCard` | `practice-prayer-card.png` |
| `practice.hubMezmurCard` | `mezmurCard` | `practice-mezmur-card.png` |
| `practice.hubInstrumentCard` | `instrumentCard` | `practice-instrument-card.png` |
| `practice.hubLanguageCard` | `languageCard` | `practice-language-card.png` |
| `practice.hubMap` | `map` | `practice-map.png` |
| `practice.hubToday` | `todayPractice` | `practice-todays-practice.png` |
| `practice.hubPrayerStepper` | `prayerStepper` | `practice-prayer-stepper.png` |
| `practice.hubPrayerCheatsheet` | `prayerCheatsheet` | `practice-prayer-cheatsheet.png` |
| `practice.hubFeaturedFeast` | `featuredFeast` | `practice-featured-feast.png` |
| `practice.hubInstrumentPosture` | `instrumentPosture` | `practice-instrument-posture.png` |
| `practice.hubLanguageHeader` | `languageHeader` | `practice-language-header.png` |
| `practice.hubFidelFlashcard` | `fidelFlashcard` | `practice-fidel-flashcard.png` |
| `practice.hubSeasonal` | `seasonalPractice` | `practice-seasonal-practice.png` |
| `practice.mezmurWorkspace` | `mezmurWorkspace` | *add file — currently `null`* |

---

## Learn section: 22 wired assets (full production briefs)

All Learn manifest keys in the quick index are **already wired** in `src/constants/orthodoxImageManifest.js` and consumed via `SacredImageSlot` on the components below. **`public/images/learn/`** currently contains only `.gitkeep` — add JPEGs with the **exact filenames** from the index; until then, slots show the **gradient fallback** (and hero/path **SVG** fallbacks where components provide them).

**Per-asset prompts:** title, final prompt, negative prompt, recommended crop, filename, manifest key, and reasoning — **[`docs/learn-image-briefs.md`](./learn-image-briefs.md)** (sections 1–22).

| Manifest key | Component / source |
| --- | --- |
| `learn.hubHero` | `LearnHomeHero.jsx` |
| `learn.pathScripture` … `learn.pathChurchYear` | `LearnPathCards.jsx` · keys from `learnHubPageData.js` |
| `learn.faithMapPanel` | `LearnFaithMap.jsx` |
| `learn.sacramentsPreviewStrip` | `LearnSacramentsPreview.jsx` |
| `learn.qidaseFlow` | `LearnQidaseFlow.jsx` |
| `learn.historyStrip` | `LearnHistoryStrip.jsx` |
| `learn.churchYearWheel` | `LearnChurchYearWheel.jsx` |
| `learn.bridgeWordToLife` … `learn.bridgeYearToCalendar` | `LearnPracticeBridge.jsx` · `learnHubPageData.js` |
| `learn.scriptureHero` | `ScriptureHero.jsx` |
| `learn.liturgyHero` | `LiturgyHero.jsx` |
| `learn.churchHistoryHero` | `ChurchHistoryHero.jsx` |
| `learn.churchYearHero` | `ChurchYearHero.jsx` |
| `teachings.heroPanel` | `TeachingsSacramentsHero.jsx` |
| `teachings.mediaVideo` / `mediaAudio` / `mediaLiturgy` | `TeachingsSacramentsMedia.jsx` · `teachingsSacramentsPageContent.js` |

---

## Detailed entries — Practice, shared, supplemental (copy-paste ready)

Each block lists: **component**, **purpose**, **aspect / size**, **filename**, **prompt**, **negative**, **usage note**. *(Learn entries: [`learn-image-briefs.md`](./learn-image-briefs.md).)*

### 17–19. Shared posters

- **Components:** `StartHereOrientationVideo` (optional upgrade), `InstrumentPracticeSection`, `LanguagePracticeSection`.
- **Aspect / size:** 16:9 — **1280×720**.
- **Filenames:** `start-here-orientation-poster.jpg`, `ethiopian-kebero-liturgical.png` (in-repo photo), `language-pronunciation-video-poster.jpg`
- **Prompts:**
  - *Start Here:* church narthex, open door light, **welcoming** stillness.
  - *Instruments:* **Kebero** + **tsenatsil** on carpet near altar steps, **instrument add-ons** above.
  - *Language:* teacher and student **both** in modest dress, **large fidel chart** on stand, **no** laptop screen glow.*
- **Negative:** `MASTER NEGATIVE`.

### 20. Mezmur workspace

- **Component:** `PracticeWorkspacePreview.jsx` — `practice.mezmurWorkspace` (bridges `practiceHubImages` `mezmurWorkspace` when set).
- **Aspect / size:** 3:2 — **1200×800**.
- **Filename:** `public/images/practice/practice-mezmur-workspace.jpg`
- **Prompt:** `MASTER STYLE` + *Simple desk with **paper chant notation**, wooden cross, **muted** string prayer bracelet, **no** headphones, **no** studio monitors, window light.*
- **Negative:** `MASTER NEGATIVE` + *DAW software, Ableton, mixing console.*

### 21–24. Mezmur sample cards A–D

- **Component:** `MezmurCardGrid.jsx`.
- **Aspect / size:** 8:5 — **640×400**.
- **Filenames:** `practice-mezmur-card-sample-a.jpg` … `d.jpg`
- **Prompts:** Werb rehearsal / general mezmur / **feast** exterior dawn / **Lent** dim interior — each **calm**, **small group or solo chanter**, **no** stage.
- **Negative:** `MASTER NEGATIVE`.

### 25–27. Mezmur featured slides

- **Component:** `FeaturedFeastCarousel.jsx`.
- **Aspect / size:** 16:9 — **960×540**.
- **Filenames:** `practice-mezmur-featured-feast-slide.jpg`, `practice-mezmur-featured-lent-slide.jpg`, `practice-mezmur-featured-listen-slide.jpg`
- **Prompts:** feast procession **distant** / Lent **veiled crosses** / nave **listening** posture.
- **Negative:** `MASTER NEGATIVE`.

### 28–30. Practice by time

- **Component:** `PracticeByTimeSection.jsx` — `practice.time5`, `time10`, `time20`.
- **Aspect / size:** 16:9 — **800×450**.
- **Filenames:** `practice-by-time-5min.jpg`, `practice-by-time-10min.jpg`, `practice-by-time-20min.jpg`
- **Prompts:** corner prayer / morning window longer / manuscript + **kebero blurred** background.
- **Negative:** `MASTER NEGATIVE`.

### 31. Progress encouragement

- **Component:** `ProgressOverview.jsx` — `practice.progressEncouragement`.
- **Aspect / size:** ~12:14 portrait — **960×1120**.
- **Filename:** `practice-progress-section.jpg`
- **Prompt:** `MASTER STYLE` + *Closed journal, wooden cross, **single** beeswax candle, olive wood prayer beads **loosely** coiled, **no** checklist graphics.*
- **Negative:** `MASTER NEGATIVE` + *gamification badges, trophies.*

---

## Additional placeholders (documented for planning; not all wired)

| Location | Notes |
| --- | --- |
| `HeroVisual.jsx` (home) | Uses `homePageAssets.hero` — real JPG already; optional swap via `homeAssets.js`. |
| `PrayerAudioBar.jsx` | UI control, not an image slot. |
| `InstrumentDemoCards.jsx` | CSS diagram blocks — optional future photos per `diagramKind`. |
| `PostureDiagramCard.jsx` | Uses `practice-instrument-posture.png` when present. |
| `calendarVisualRegistry.js` | Calendar/home imagery — many real assets; tune alts in registry, not all “placeholder.” |
| `ChantCard.jsx` | YouTube thumbs — not AI. |
| `LearnTopicPage` | Text shell — no default image slot. |
| `LearnGlossaryStrip` | Chip UI only. |

---

## File drop checklist

1. Export **JPEG** (quality 82–88) or **PNG** for transparency needs.
2. Name files **exactly** as in the manifest (case-sensitive on Linux deploys).
3. Place under **`public/images/learn/`**, **`public/images/practice/`**, or **`public/images/shared/`**.
4. Hard-refresh the browser; missing files keep **elegant gradient + SVG** fallbacks.

---

## Prompt QC (before you lock an asset)

- [ ] Vestments read as **Ethiopian Orthodox**, not generic “eastern” fantasy.
- [ ] **Kebero** is large, double-headed, rope-tensioned.
- [ ] **Tsenatsil** is plate-and-rod sistrum, not a bell tree.
- [ ] **No** headphones, **no** concert lighting, **no** floor dishes.
- [ ] Hands and instruments **look natural** at 100% zoom.
