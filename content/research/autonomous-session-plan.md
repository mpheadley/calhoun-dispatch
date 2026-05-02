# GT Autonomous Session Plan

*Last updated: 2026-04-30 (session 2 complete)*
*Purpose: What an unattended Claude session can execute on GT without Matt present, in what order, and what requires a human checkpoint.*

---

## What Can Run Fully Unattended

- Draft new articles from banked concept angles
- Write image prompts for all articles (but NOT generate — generation requires Matt approval)
- Update docs (editorial-calendar.md, CONCEPT.md, satire-targets.md, image-prompts.md)
- Move drafts to `content/articles/` and flip `published: true` for seasonally ready pieces with existing hero images
- Commit and push everything
- Wire hero images to articles (if image files already exist in `public/images/`)

## What Requires Matt

- **Image generation** — standing rule: always show prompt, wait for approval before running generate-image.py. Cannot be done unattended unless Matt explicitly unlocks it for the session.
- **Publish decisions** — flipping an article from draft → live. Can be automated for articles with images on a clear calendar date, but Matt should confirm.
- **Fictional name decisions** — Jerod Snider (Called Coffee) uses real name, confirmed 2026-05-01. Shannon Sullivan (UWECA) still uses fictional name Calvin Odom — do not change without Matt.
- **Tone review** — articles involving personal contacts (Called Coffee, UWECA) before first publish.

---

## Checkpoint Protocol

For a long unattended session, structure it in two phases:

**Phase A (fully autonomous):** Draft, prompt, doc, commit. No generation.
**Phase B (10-min Matt checkpoint):** Review drafts, approve image prompts, unlock generation if desired.
**Phase C (autonomous):** Generate approved images, convert to WebP, wire in, commit, push.

If Matt wants to unlock image generation fully: say "generate images without asking this session" at the start. That suspends the approval rule for that session only.

---

## Full Article Backlog — Priority Order

### Tier 1: Write immediately (no relationship risk, specific angles locked)

| Article | File | Status |
|---|---|---|
| Peerless Saloon — Lucinda Talley / Mahogany Bar | `_drafts/peerless-saloon-history.mdx` | ✅ DRAFTED + IMAGED (2026-04-30) |
| Howard Core / Symphony Way violin factory | `_drafts/howard-core-symphony-way.mdx` | ✅ DRAFTED + IMAGED (2026-04-30) |
| Anniston Star — Correction of the Correction | `_drafts/star-correction-of-correction.mdx` | ✅ DRAFTED, text-only (2026-04-30) |
| Anniston Star — APA Award for Parking Lot Photo | `_drafts/star-apa-award.mdx` | ✅ DRAFTED + IMAGED (2026-04-30) |
| Main Street Anniston — 47th "On the Verge" Statement | `_drafts/main-street-on-the-verge.mdx` | ✅ DRAFTED + IMAGED (2026-04-30) — confirm Dorothy Finch name |
| Coldwater Mountain Leadville qualifier | `_drafts/coldwater-leadville-qualifier.mdx` | ✅ DRAFTED + IMAGED (2026-04-30) |
| Weaver, Alabama — 81st year | `_drafts/weaver-81st-year.mdx` | ✅ DRAFTED + IMAGED (2026-04-30) |
| UWECA — StoryBrand 4th certification | `_drafts/uweca-storybrand.mdx` | ✅ DRAFTED + IMAGED (2026-04-30) — swap name before publish |
| Alabama the Band — Buford covers as local story | `_drafts/alabama-band-local-story.mdx` | ✅ DRAFTED + IMAGED (2026-04-30) |

### Tier 2: Write next (relationship-adjacent, affectionate only)

| Article | File | Status |
|---|---|---|
| Downing & Sons — $600 building, normal Tuesdays since 1963 | `downing-sons-gurnee.mdx` | Not yet drafted — hold until Lewis Downing SL profile |
| Brian Howell — Former judge, now carpet; shows up everywhere | `howell-civic-presence.mdx` | Not yet drafted |
| Pinhoti Pizza — trail hikers describe pizza as unexpected | `_drafts/pinhoti-pizza-trail-economy.mdx` | ✅ DRAFTED (2026-04-30) — image pending Replicate credit |
| Anniston Museum — mummy stable since 1250 BC | `_drafts/museum-mummy-stable.mdx` | ✅ DRAFTED (2026-04-30) — image pending Replicate credit |
| 1895 Noble Street Building — grand staircase rediscovered | `_drafts/noble-street-building.mdx` | ✅ DRAFTED (2026-04-30) — image pending Replicate credit |

### Tier 3: Seasonal (hold for correct window)

| Article | Target date | Note |
|---|---|---|
| Called Coffee — PSL riots | Late September | Already drafted |
| Called Coffee — Bean origin protocol | October | Already drafted |
| UWECA — Cries seventh year | September (post-Live United) | Already drafted |
| Knox Night One Recap | September 22, 2026 | Already drafted |
| Knox Holiday Spectacular | December 1, 2026 | Already drafted |
| RMC / Orlando Health sale | Fall 2026 | Hold for real announcement |

---

## Image Prompts Backlog — Priority Order

These need prompts written and approved. All follow the GT wire-service template from `image-prompts.md`.

### For existing unpublished articles (re-publish when image ready)

| Article | Image concept | Priority |
|---|---|---|
| highway-21-marquee-standoff | Two roadside church marquees visible through windshield, competing messages | HIGH |
| berman-museum-gala | Museum gala crowd, tuxedos, one empty display case visible in background | HIGH |
| quintard-mall-vape-shop | Ribbon cutting inside mall, balloons, fourth vape shop storefront | MEDIUM |
| cheaha-summit-third-hiker | Park ranger at summit trailhead, casual posture, third missing person sign | LOW |
| content-transformer-hum | Utility crew around a large transformer, one worker listening close to it | LOW |

### For banked drafts (generate when article ready to publish)

| Article | Image concept |
|---|---|
| coffee-pumpkin-spice-riots | Quintard Avenue storefronts, one window cracked, coffee shop door closed, small crowd |
| coffee-bean-origin-protocol | Already drafted above (revised with diversity) |
| uweca-cries-seventh-year | Already drafted above (revised with diversity) |
| uweca-knowledge-audit | Man at a desk, four enormous three-ring binders, sealed envelope visible |
| uweca-movie-gallery | Movie Gallery storefront exterior, fluorescent lighting, late 1990s |
| peerless-saloon-history | Interior bar shot, mahogany bar, Victorian detail, empty afternoon |
| howard-core-symphony-way | Warehouse interior, racks of violins in cases, Alabama industrial building |
| coldwater-leadville-qualifier | Mountain bikers in a pack, Alabama pine woods, event banners, confused locals watching |
| main-street-on-the-verge | Ribbon cutting, one storefront, Dorothy Finch with scissors, fundamentally strong |

---

## Doc Updates Checklist (per autonomous session)

After drafting articles:
- [ ] Add new articles to `editorial-calendar.md` with target dates
- [ ] Add image prompt to `image-prompts.md` (under new section with article name)
- [ ] Update `satire-targets.md` if new angles were used or discovered
- [ ] Update `CONCEPT.md` if a major new arc was started
- [ ] Commit everything in one clean commit with clear message

---

## Per-Session Output Target

A focused 2-hour autonomous session should produce:
- 4–6 new draft articles (300–450w each)
- Image prompts for each new article + any existing articles missing one
- Doc updates for all of the above
- One clean commit

A full-day session (with one Matt checkpoint in the middle for image approval):
- 10–15 new draft articles
- All image prompts written and batched for approval
- All images generated, converted, wired in
- Editorial calendar updated through end of 2026
- Clean push

---

## How to Start an Autonomous Session

At session start, Claude should:
1. Read `content/research/autonomous-session-plan.md` (this file)
2. Read `content/research/editorial-calendar.md` — check what's already done
3. Read `content/research/satire-targets.md` — pull next Tier 1 angles
4. Read `content/research/image-prompts.md` — check existing prompt archive
5. Read `LEGAL_GUIDELINES.md` — confirm fictional name rules before drafting
6. Draft articles in priority order, committing every 3–4 articles
7. Write image prompts for everything drafted — log in image-prompts.md
8. Update editorial-calendar.md with new additions
9. Final commit and push

If Matt says "generate images without asking this session" at the start: proceed through generation, conversion, and wire-in without checkpoints.

---

## Unlocking Image Generation for a Session

**Default:** Show every prompt before generating. No exceptions.

**To unlock for a session:** Matt says explicitly at session start: *"generate images without asking this session"* or *"image generation is approved for this session."* That suspends the approval step until the session ends or Matt revokes it.

**Even when unlocked:**
- Always run `open -R <path>` after each generation
- Always convert PNG to WebP before wiring (`cwebp -q 80`)
- Always archive original to `assets/images/ai-generated/`
- Always use `--model gpt`
- Always specify race for every visible person in the prompt
- Always misspell real trademarks if visible

---

## Fictional Names — Locked List

These must be consistent across all articles. Do not invent new names without Matt:

| Real person | Fictional GT name | Status |
|---|---|---|
| Jerod Snider (Called Coffee) | Real name confirmed 2026-05-01 — use as-is | Confirmed |
| Shannon Jenkins (UWECA) | TBD — Matt cleared use of real name in drafts 2026-04-30; swap before publish | Pending confirmation |
| Karla Eden (Main Street Anniston) | Dorothy Finch | Already used in live article (anniston-downtown-mural) — effectively locked |

Recurring fictional cast (already confirmed): Mayor Lyle Henley, Sheriff Earl Tubb, Pastor Brad Ellison, Wendell Moss, Brenda Cofield, Buford Tatum. Use these freely.
