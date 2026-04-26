# Session Closeout — April 26, 2026

The session that built The Green Tomato from idea to live publication.

---

## Shipped today

### Site
- **Live at https://green-tomato.vercel.app** — Next.js 16, MDX content pipeline
- **14 articles published** — Raptor Run signature, Dollar General/Country Club, Mummy Wellness Check, Star Photographer, Record Times, Farmers Market Wrestling, Oxford Exchange/Velvet Magnolia, Quintard Mall Vape Shop, Oxford Middle School Singularity, Anniston Civility Training, Cheaha Challenge Pavement, Berman Museum Gala, Cheaha Summit Hiker (Knox Concert unpublished as too thin)
- **1 article staged** — RMC sale to Orlando Health draft, `published: false`, in `_drafts/`
- **About page** — rewritten to credit Matt as founder/editor, Dale Brewer as fictional Bureau Chief
- **Self-review complete** — 14 articles audited, real-named living people scrubbed (Ben Little, Jay Jenkins, John Spain, Gene Robinson, Stuart Lamp). New standing rule documented: no fictional quotes in real living mouths.

### Design
- **Direction A locked:** newspaper masthead aesthetic
- **Wordmark:** UnifrakturMaguntia (Blackletter) for "The Green Tomato" everywhere
- **Brand mark:** woodcut tomato (tight crop variant #28) — saved as transparent PNG + SVG vector trace
- **Parallel mark:** 90s ClipArt tomato for casual/social contexts
- **Favicon + apple-icon** generated from the woodcut tomato
- **Masthead:** tomato icons flank the wordmark on both sides
- **Article seal:** small tomato printer's mark at the bottom of every article

### OG Images
- Site OG and per-article OG both render correctly with Blackletter wordmark + Inter body
- Fonts loaded explicitly via TTFs in `public/fonts/`
- Article OG includes badges, headline, byline, URL footer

### Ad Inventory
- AdSlot component with 19-item inventory: 11 spam (4 Calhoun-twisted) + 7 recurring fictional locals + 1 broken slot
- 6 Imagen-generated ad images deployed: 47-pounds, pillow (cardiologist), sciatica, goat, robin, AI stocks
- Deterministic ad picker keeps slots stable across renders
- Two ad slots on homepage, two on every article page

### Brand Identity
- Domain locked to `thegreentomato.news` (in Vercel cart, not yet purchased)
- Email plan: `dale@thegreentomato.news` (when domain resolves)
- The "third paper in town" frame adopted in About copy
- Matt-public + Dale-as-character posture locked

### Merch (banked, not shipped)
- 3 SKU listings ready to paste into Fourthwall — Raptor Run tee, Vegetable of Record tote, Bureau Chief mug
- HTML mockup preview at `merch/preview.html` showing all three designs
- Tote tagline locked to Option B (Calhoun County stamp at bottom)

### Documentation
- `CONCEPT.md` — full strategic brief, name decision rationale, character cast, institutional targets, build notes, identity protection, income plan
- `content/research/domain-decision.md` — why thegreentomato.news, rejected alternatives
- `content/research/social-content-plan.md` — Dale-runs-accounts approach, 30-day cadence
- `content/research/self-review-2026-04-26.md` — article-by-article audit + standing rules
- `content/research/rmc-orlando-health.md` — source material for the staged draft
- `content/merch/` — 3 SKU listings + README + drop-2 candidates

### File Hygiene
- 41 source images archived in `assets/images/ai-generated/`
- Organized by purpose: `brand/`, `ads/`, `articles/raptor-run/`, `articles/dollar-general/`, `real-photos/`
- Chosen variants flagged with `CHOSEN` in filenames
- Downloads cleaned

---

## Banked but not shipped

- **Domain purchase** — in Vercel cart, ~$25, awaits checkout
- **Print-ready PNGs for Fourthwall** — need to render shirt/tote/mug designs at 4500×4500 transparent
- **Fourthwall store** — not set up yet
- **Social accounts** — `@thegreentomato` on Bluesky and Instagram, both pending
- **First Reddit post** — Raptor Run piece queued for r/Alabama
- **Phase 2 video pipeline** — HeyGen + ElevenLabs + Replicate, gated by Phase 1 income clearing $50/mo

---

## Open decisions (to make later, not tonight)

1. **When to publish the RMC sale piece** — currently staged, recommend holding for when the real sale closes (fall 2026) for maximum timing impact
2. **Whether to add a Direction B parallel merch line** — 90s aesthetic to match the site, alongside Direction A's newspaper aesthetic
3. **Whether to ship Drop #1 merch immediately or wait for audience signal** — current recommendation: wait for Week 4 reader signal
4. **Concert manager grocery store fistfight article** — premise locked, cause-of-fight not chosen yet
5. **Whether to pursue an Anniston Museum gift-shop partnership** — wait until ~20 articles + one piece travels

---

## When you come back

### Tomorrow morning
1. Read the live site cold on your phone. Three articles minimum. Note what reads off.
2. Make any tonal edits while the reactions are fresh.
3. Check out the cart if you're still confident — `thegreentomato.news` for $25.

### This week
4. Share the site privately with 2-3 trusted people whose taste you trust. Listen for friction.
5. Don't generate more articles unless one demands to be written.
6. Don't post anywhere public yet.

### Week 2 (if Week 1 friction is manageable)
7. Set up `@thegreentomato` accounts on Bluesky and Instagram.
8. Submit the Raptor Run piece to r/Alabama under a fresh handle.
9. Watch what happens.

### Week 4
10. Assess. If reader signal exists → ship Drop #1 merch. If silence → write 2-3 more pieces, try a different distribution channel.

---

## What changed about Matt's professional positioning

The Green Tomato is now Matt's local literary outlet for the first-person satirical voice that:
- The Anniston Star isn't currently publishing him for
- Foothills explicitly strips out (third-person business profiles only)
- Calhoun Journal accepts (under his SL byline) for earnest profile work, but not for satire
- HW client work doesn't accommodate

Going public with this project — Matt as founder/editor, Dale as character — establishes Matt as a writer with range and a take, not just "the guy who builds local business websites." This elevates his professional position rather than threatening it, provided the standing rules are followed (no fictional quotes in real mouths, no Anniston Facebook groups, no real ad networks).

---

## Risk posture (final)

- **Pseudonym strict mode:** abandoned. Matt is publicly the founder.
- **Character integrity:** maintained. Dale Brewer remains fictional. All bylines are Dale's.
- **Defamation hygiene:** locked. No fictional quotes attributed to real living people.
- **Relationship hygiene:** Calhoun Journal (Lee Kathryn) and Headley Web client base treated as priority relationships; satire stays affectionate; the About page invites direct correspondence if anything lands wrong.
- **Discovery probability:** no longer a primary concern (because going public). Now: how does the work itself land.

---

## Final stopping point

Site is at MVP. More features are diminishing returns. The next move is audience, not engineering.

Stop building. Sleep. Read it tomorrow as a reader.

Good work today.
