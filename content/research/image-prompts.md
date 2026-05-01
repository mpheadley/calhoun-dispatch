# Image Prompt Archive

Reference for regenerating or iterating on GT article images.

---

## ⚠ MANDATORY PRE-GENERATION CHECKLIST

Run this against every prompt before calling `generate-image.py`. No exceptions.

**1. Aesthetic markers present?**
Every GT prompt must include all three of these — word for word:
- `"Wire service photograph"` or `"Small-town newspaper photograph"`
- `"Photojournalistic grain"`
- `"Slightly blown-out highlights"`
If any are missing, add them before generating. This is what makes GT images read as 1998 local news, not generic AI art.

**2. Real brand names?**
Scan the prompt for: Dollar General, Walmart, McDonald's, NASCAR, Chick-fil-A, Waffle House, or any other real trademark.
If found → alter it before generating:
- Dollar General → "Dolla General" or "Dollar Depot"
- Walmart → "Wal-Mart Supercenter" partially obscured
- NASCAR → "NASKAR"
- Chick-fil-A → "Chik-Fil-A"
Never render a real trademark cleanly. See LEGAL_GUIDELINES.md §2.

**3. Race specified for every visible person?**
Anniston is ~55% Black, ~40% white. If the prompt has a person — named or anonymous — race must be specified. Do not let the model decide. Do not default to white.

**4. Model specified?**
Default: `--model gpt`. GPT handles multi-person scenes and period-correct news photography best. Flux is only for simple exterior shots; Imagen for single-person documentary. If you used anything other than GPT, flag it.

Only after all four checks pass → show the finalized prompt to Matt → wait for approval → generate.

---

## GT Photo Style — Standing Template

Every GT image should read as **wire service / small-town newspaper photography, circa 1998–2004**. Not disposable camera nostalgia. Not cinematic. A local freelance photographer who thinks he's AP.

**Always include in every prompt:**
- `"Wire service photograph"` or `"Small-town newspaper photograph"` — establishes the register
- `"Photojournalistic grain"` — slight film noise, not clean digital
- `"Slightly blown-out highlights"` — flash used indoors, or harsh Alabama sun outdoors
- `"No text"` — always

**Always avoid:**
- Rain or dramatic weather — stacks too many details, oversells the absurdity
- Cinematic lighting, golden hour, or atmospheric haze — too polished
- Sepia or vintage filters — reads as intentional nostalgia, not earnest local news
- Photographers visible in frame — breaks the wire service POV
- Posed subjects — action mid-moment, slightly off-center framing
- All-white crowds or casts — Anniston is a majority-Black city (~55% Black, ~40% white). Defaulting to white subjects misrepresents the place. Fix it in the prompt, not after.
- Real trademarked logos rendered cleanly — always misspell or alter them: "NASKAR" not "NASCAR", "Chik-Fil-A" not "Chick-fil-A", "Wal-Mart Supercenter" partially obscured. If a misspelled logo is part of the joke, include it explicitly — don't suppress it with "No text." "No text" is only for scenes where all text is unwanted noise. See LEGAL_GUIDELINES.md §2.

**Diversity — build it into every prompt:**
Anniston and Calhoun County are racially diverse. The default AI output skews white; correct for it explicitly. For any scene with people:
- Named officials, spokespeople, bystanders: specify race when it matters for accuracy or variety. Don't let the model decide.
- Crowds: specify "mixed crowd" or "diverse group of Calhoun County residents" — do not leave it unspecified.
- One person: consider "a Black woman in a blazer," "a middle-aged Black man," "an older white man," etc. — whatever fits the scene and reflects where this actually takes place.
- Never over-specify to the point of tokenism. The goal is accuracy, not a checklist. If a scene has one person, pick what feels true to the story.

**Always show the prompt to Matt before generating.** Draft it, present it, wait for approval. Never run the tool first.

**After every generation, immediately run `open -R <path>` to reveal in Finder.** No exceptions.

**Model: always GPT** (`--model gpt`) for all GT article images. No exceptions. GPT handles multi-person scenes, institutional settings, and period-correct news photography better than Imagen for this project.

**Base prompt template:**
> [Wire service / Small-town newspaper] photograph. [Scene description — specific, one absurd element max]. [Race/appearance of key subjects — don't leave unspecified]. [Alabama/Calhoun County location detail if applicable]. Photojournalistic grain, slightly blown-out highlights. No text.

---

## Raptor Run Hero — CURRENT (April 29, 2026)

**File:** `public/images/articles/raptor-run/hero.webp`
**Model:** GPT Image 1.5 via Replicate
**Reference image:** None
**Dimensions:** 1024x768 (3:2)

**Prompt:**
> Wire service race photograph. Wide shot of a 5K race on a paved road through a wooded park. A velociraptor chases a pack of runners from behind. Runners in mid-stride, several falling, expressions of terror. Race bibs visible. Sunny day, dappled light through trees. Alabama pine woods on both sides of the road. Photojournalistic grain, slightly blown-out highlights. No text.

**Why this prompt:**
- Wooded park road matches actual Raptor Run course (through Lagarde Park)
- No museum in background — article text establishes location, image doesn't need to
- No photographer — earlier attempts had photographer facing viewer, breaking the wire service register
- No rain — original image had rain, daughter's note was "too much," agreed it was stacking details
- Pine woods are accurate to NE Alabama / the actual course

**What didn't work:**
- Using the museum exterior photo as reference — GPT reproduces style not the actual building
- Pillow gradient composite — runners went transparent in the blend zone
- rembg cutout composite — looked like a bad Photoshop job, off-brand
- Gemini image — good composition but wrong building (massive brutalist tower vs. modest 1960s brick)

**Archived original:** `assets/images/ai-generated/articles/raptor-run/hero-original-rain.webp`

---

## Velvet Magnolia Ribbon Cutting — CURRENT (April 29, 2026)

**File:** `public/images/articles/velvet-magnolia/hero.webp`
**Model:** GPT Image 1.5 via Replicate
**Reference image:** `generated-images/20260429_150010_gpt_small-town-newspaper-photograph.-exterio.webp`
**Dimensions:** 1024x768 (3:2)

**Prompt:**
> Small-town newspaper photograph. Exterior ribbon cutting ceremony in front of a gentleman's club entrance. A man in a suit holds oversized scissors over a red ribbon. Several officials in suits stand flanking him, smiling. Behind them, the sign for 'The Velvet Magnolia' features a tasteful pink neon silhouette of a woman's figure. To the left, an Olive Garden restaurant. To the right, a small framing shop. Daylight, flat lighting, photojournalistic grain, slightly blown-out highlights. No text.

---

## Knox Concert Series Revival — CURRENT (April 30, 2026)

**Article:** `content/articles/knox-concert-series-rebrand.mdx`
**File:** `public/images/articles/knox-concert-series/hero.webp` *(not yet wired — move from merch/designs first)*
**Source:** `merch/designs/20260430_131822_gpt_wire-service-photograph.-interior-of-a-f.webp`
**Model:** GPT Image 1.5 via Replicate
**Dimensions:** 1024x1024 (1:1) — crop to 3:2 before wiring if needed

**Prompt:**
> Wire service photograph. Interior of a formal concert hall with ornate ceiling and rows of empty velvet seats. A professional wrestling ring — corner posts, ropes, canvas mat — is fully assembled on the stage where an orchestra would normally perform. A podium with a microphone stands at the side of the stage, unoccupied. The juxtaposition is total. Alabama civic venue. Photojournalistic grain, slightly blown-out highlights. No text.

---

## Knox Option B — One Act, Full Gravity *(not yet generated)*

**Article:** not yet written
**Concept:** Press conference. A spokesperson in a blazer stands at a podium inside a formal venue. Behind them, a large printed banner or projected image promotes a professional wrestling card — two wrestlers mid-grapple, bright colors. The spokesperson's posture is grave and institutional. The room is half-empty. Photojournalistic grain.

**Prompt (draft):**
> Wire service photograph. Press conference inside a formal civic auditorium. A woman in a blazer stands at a podium. Behind her, a large vinyl banner shows two professional wrestlers in combat, brightly colored, mid-grapple. The room is formal — upholstered chairs, a draped table, institutional lighting. Several audience members seated, expression neutral. Alabama. Photojournalistic grain, slightly blown-out highlights. No text.

---

## Knox Option C — The Holiday Slot *(not yet generated)*

**Article:** not yet written — publish December 2026
**Concept:** A wrestling ring on a concert hall stage, but dressed for Christmas — tinsel on the corner posts, a Santa figure mid-action in the ring. Empty velvet seats. A marquee or banner in the background reads something seasonal. The absurdity is total, the framing is deadpan.

**Prompt (draft):**
> Wire service photograph. Interior of a formal concert hall. A professional wrestling ring on the stage is decorated for Christmas — tinsel on the corner posts, a string of lights along the ropes. A man dressed as Santa Claus stands in the center of the ring, arms raised. Rows of empty velvet seats. Institutional lighting. Alabama civic venue. No audience visible. Photojournalistic grain, slightly blown-out highlights. No text.

---

## GT 404 Splatter Tomato — APPROVED, NOT YET GENERATED

**Used by:** `src/app/not-found.tsx` (replaces the rotated `pixel-tomato.webp` placeholder currently in place) and as the 404-scoped favicon
**Model:** GPT Image 1.5 via Replicate (`--model gpt`)
**Reference image:** `public/images/site/pixel-tomato.webp` — must read as the same character, gone bad

**Two assets to generate:**
1. **Hero splat** — `public/images/site/pixel-tomato-splat.webp`, 512×512, transparent background, 1:1
2. **Favicon splat** — `public/images/site/pixel-tomato-splat-favicon.png`, 32×32 (also export 16×16 if the tool allows). Transparent background. Crop tighter than the hero — splatter trimmed to fit the favicon canvas.

**Prompt (locked — splat variant, not rot):**
> Pixel art icon, 64×64 retro 1990s web sprite scaled up, transparent background. A green unripe tomato — same chunky pixel silhouette, palette, and cartoon stem-leaf as the Green Tomato newspaper mascot — but burst open and splattered. The tomato is cracked down one side with bright green-yellow pulp and seeds spilling out, a few seeds flung outward in pixelated arcs. Small drips and splat blobs radiate around it on the transparent background, like it just hit the ground. Stem still attached, slightly askew. Hard chunky pixels, no anti-aliasing, limited palette of greens (deep green, mid green, lime, pale yellow-green) plus a couple of off-white seed pixels. No text. No drop shadow. Read as a corrupted version of the original mascot, not a different tomato.

**Why this prompt deviates from the wire-service template:**
- This is a site asset / logo, sibling to `pixel-tomato.webp` — not an article photo. Photojournalistic register would be wrong.
- "Same chunky pixel silhouette… as the mascot" forces continuity so the 404 reads as *the GT logo, ruined* — that's the joke
- "Green-yellow pulp" keeps it on-brand (a green tomato bursting reveals paler flesh, not red — leaning red would break the unripe-tomato premise)
- "No drop shadow" matches existing pixel-tomato

**Wire-in (post-generation, one commit):**
1. Swap `src/app/not-found.tsx` `<img src>` from `pixel-tomato.webp` → `pixel-tomato-splat.webp`, drop the `transform: rotate(-8deg)` (splatter has its own asymmetry)
2. Add to `not-found.tsx` metadata: `icons: { icon: '/images/site/pixel-tomato-splat-favicon.png' }` so the browser tab shows the splat tomato on 404 pages only

---

## Weaver Dollar General Anniversary — NEEDS REGENERATION (April 30, 2026)

**Article:** `content/articles/weaver-dollar-general-anniversary.mdx`
**Status:** First generation (Flux) used real brand name "Dollar General" — violates trademark rule. Must regenerate.
**Old file (do not use):** `public/images/articles/weaver-dollar-general/20260430_212135_flux_small-town-newspaper-photograph.-exterio.webp`
**Target file:** `public/images/articles/weaver-dollar-general/hero.webp`
**Model:** GPT (`--model gpt`) — Flux was a test; GPT is the GT standard

**What went wrong in the first prompt:**
1. Used "Dollar General" — real trademark, must be altered
2. Used Flux — diverges from GT standard (GPT only)
3. Likely missing "Wire service photograph" / "Photojournalistic grain" / "Slightly blown-out highlights" — the three mandatory aesthetic markers

**Corrected prompt (locked):**
> Small-town newspaper photograph. Exterior of a small discount store called "Dolla General" — yellow sign, beige cinder-block facade, parking lot with a few cars. A middle-aged Black woman in a store apron stands near the entrance, arms folded, expression neutral. Flat afternoon Alabama sunlight. No ceremony, no balloons — just a normal Tuesday. Photojournalistic grain, slightly blown-out highlights. No text except the altered store sign.

**Corrected prompt (v3 — locked):**
> Small-town newspaper photograph. Exterior of a small discount store called "Dolla General" — yellow sign, beige cinder-block facade, parking lot. Mid-afternoon Alabama sunlight. Near the entrance, a pale white man in his early twenties wearing all black — store apron over a band shirt — stands holding a bunch of bananas at his side, expression somewhere between bored and mournful. To his left, an older white man in his late sixties in a polo shirt stands in the parking lot facing the store, hands clasped, the quiet reverence of someone visiting a landmark. Background: a Black woman and a middle-aged white woman walking out through the entrance carrying plastic shopping bags; a Black man walking in through the entrance empty-handed. No balloons, no signage, no ceremony. Photojournalistic grain, slightly blown-out highlights. No text except the altered store sign.

**File:** `public/images/articles/weaver-dollar-general/hero.webp`
**Status:** LIVE — wired into frontmatter 2026-04-30

**Pre-generation checklist:**
- [x] Wire-service aesthetic markers present (Small-town newspaper photograph, photojournalistic grain, blown-out highlights)
- [x] Brand name altered: "Dolla General" not "Dollar General"
- [x] Race specified for all visible persons
- [x] Model: GPT


---

## Session 3 Prompts (2026-05-01) — PENDING (Replicate credit exhausted)

All prompts below are validated and ready to run when credit is topped up.
Run with: `python3 scripts/gt-image.py "<prompt>" --model gpt`

---

### RMC Waiting Room Government

**File:** `public/images/articles/rmc-waiting-room-government/hero.webp`
**Status:** PENDING — credit exhausted

**Prompt:**
> Wire service photograph. Hospital emergency waiting room, fluorescent overhead lighting, late evening. A Black man in his fifties in a University of Alabama sweatshirt sits in the front row with his arms folded, expression neutral and authoritative. Five other people of mixed race sit scattered in plastic chairs — an older white woman, a young Black man, a middle-aged Latina woman. A hand-lettered sign taped to the cinder-block wall reads something illegible. A wall-mounted television shows something no one is watching. Photojournalistic grain. Slightly blown-out highlights. No text.

**Pre-generation checklist:**
- [x] Wire service photograph ✓
- [x] Photojournalistic grain ✓
- [x] Slightly blown-out highlights ✓
- [x] No real brands
- [x] Race specified for all persons
- [x] Model: GPT

---

### Jack's Biscuit Wine Review

**File:** `public/images/articles/jacks-biscuit-wine-review/hero.webp`
**Status:** PENDING — credit exhausted

**Prompt:**
> Wire service photograph. Sausage biscuit on white paper wrapper on a fast food restaurant table, morning. Natural window light, slightly blown-out. One paper coffee cup beside it. A Black man in his fifties is partially visible in soft focus in the background, sitting alone at the window, expression settled. Clean, unfussy fast food interior. Photojournalistic grain. Slightly blown-out highlights. No text.

**Pre-generation checklist:**
- [x] Wire service photograph ✓
- [x] Photojournalistic grain ✓
- [x] Slightly blown-out highlights ✓
- [x] No real brands
- [x] Race specified for visible person
- [x] Model: GPT

---

### Chick-fil-A Oxford Second Location

**File:** `public/images/articles/chick-fil-a-oxford-chosen/hero.webp`
**Status:** PENDING — credit exhausted

**Prompt:**
> Wire service photograph. Exterior of a fast food chicken restaurant called "Chik-Fil-A" — red-and-white signage altered, drive-through lane with four cars waiting. Flat Alabama sunlight on a commercial strip. A white city water tower is visible in the background. A Black woman and a white teenager walk toward the entrance. Photojournalistic grain. Slightly blown-out highlights. No text except the altered store sign.

**Pre-generation checklist:**
- [x] Wire service photograph ✓
- [x] Photojournalistic grain ✓
- [x] Slightly blown-out highlights ✓
- [x] Brand altered: "Chik-Fil-A" not "Chick-fil-A"
- [x] Race specified for visible persons
- [x] Model: GPT

---

### OPAC Rivalry Dispatch

**File:** `public/images/articles/opac-rivalry-dispatch/hero.webp`
**Status:** PENDING — credit exhausted

**Prompt:**
> Wire service photograph. Modern performing arts center exterior at dusk, clean geometric architecture, two flags on poles in front. In the background at the edge of frame, an older brick building with a vintage theater marquee is partially visible. A diverse crowd of Calhoun County residents — Black and white, various ages — streams toward the entrance in formal attire. Photojournalistic grain. Slightly blown-out highlights. No text on the marquee.

**Pre-generation checklist:**
- [x] Wire service photograph ✓
- [x] Photojournalistic grain ✓
- [x] Slightly blown-out highlights ✓
- [x] No real brands
- [x] Race specified (diverse crowd)
- [x] Model: GPT

---

### County Commission Agenda

**File:** `public/images/articles/county-commission-agenda/hero.webp`
**Status:** PENDING — credit exhausted

**Prompt:**
> Wire service photograph. County government meeting room — wooden raised dais with seven chairs, American flag to the right, overhead fluorescent lighting. The room is empty except for one Black man in his sixties in a dress shirt seated at the far end of the dais, looking at a paper in front of him. Name placard visible but text illegible. Photojournalistic grain. Slightly blown-out highlights. No readable text.

**Pre-generation checklist:**
- [x] Wire service photograph ✓
- [x] Photojournalistic grain ✓
- [x] Slightly blown-out highlights ✓
- [x] No real brands
- [x] Race specified
- [x] Model: GPT

---

### Farmers Market Vendor Diversity

**File:** `public/images/articles/farmers-market-vendor-diversity/hero.webp`
**Status:** PENDING — credit exhausted

**Prompt:**
> Wire service photograph. Outdoor farmers market, Saturday morning, white pop-up tent canopies. A Black woman in her forties browses a folding table of fresh produce. A white male vendor in his thirties pours coffee from a thermos. In the background, one table is entirely covered with small glass jars — jam in various colors. A hand-painted park sign is partially visible. Flat morning Alabama sunlight. Photojournalistic grain. Slightly blown-out highlights. No readable text on signs.

**Pre-generation checklist:**
- [x] Wire service photograph ✓
- [x] Photojournalistic grain ✓
- [x] Slightly blown-out highlights ✓
- [x] No real brands
- [x] Race specified for all persons
- [x] Model: GPT

---

### JSU Marching Southerners / Funeral

**File:** `public/images/articles/jsu-marching-southerners-funeral/hero.webp`
**Status:** PENDING — credit exhausted

**Prompt:**
> Wire service photograph. Marching band in formal navy and gold uniforms standing at rest in a church parking lot, midday Alabama sun. Twenty musicians visible — Black and white, mixed ages — instruments held at their sides, expressions politely neutral. A black hearse is visible at the side entrance of the church in the background. One tuba player is notably absent from the brass section — visible gap in the formation. Photojournalistic grain. Slightly blown-out highlights. No text.

**Pre-generation checklist:**
- [x] Wire service photograph ✓
- [x] Photojournalistic grain ✓
- [x] Slightly blown-out highlights ✓
- [x] No real brands
- [x] Race specified (mixed band)
- [x] Model: GPT

---

### Hobby Lobby Seasonal Transition

**File:** `public/images/articles/hobby-lobby-seasonal-transition/hero.webp`
**Status:** PENDING — credit exhausted

**Prompt:**
> Wire service photograph. Craft store interior, seasonal merchandise aisle. Left side of the aisle: Christmas ornaments, garland, and boxed village pieces fully stocked and bright. Right side of the same aisle: a single foam skeleton on a metal endcap, marked with a large orange 75% OFF tag. A white woman in her fifties stands in the aisle looking at the skeleton. She does not appear to have made a decision. Photojournalistic grain. Slightly blown-out highlights. No readable text except the price tag.

**Pre-generation checklist:**
- [x] Wire service photograph ✓
- [x] Photojournalistic grain ✓
- [x] Slightly blown-out highlights ✓
- [x] No real brands (Hobby Lobby not mentioned in prompt — just "craft store interior")
- [x] Race specified
- [x] Model: GPT

