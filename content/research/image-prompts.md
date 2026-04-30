# Image Prompt Archive

Reference for regenerating or iterating on GT article images.

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

**Model: always GPT** (`--model gpt`) for all GT article images. No exceptions. GPT handles multi-person scenes, institutional settings, and period-correct news photography better than Imagen for this project.

**Base prompt template:**
> [Wire service / Small-town newspaper] photograph. [Scene description — specific, one absurd element max]. [Alabama/Calhoun County location detail if applicable]. Photojournalistic grain, slightly blown-out highlights. No text.

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
