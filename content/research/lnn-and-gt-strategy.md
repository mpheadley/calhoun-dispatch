# LNN + Green Tomato — Two-Site Strategy

*Captured 2026-05-01 from brainstorm. Operational plan for running both projects.*

---

## The Two-Project Frame

**Liberty News Network (LNN)** — national, primary, larger scaling potential. Progressive-Christian satire. See `LIBERTY_NEWS_NETWORK.md`.

**The Green Tomato (GT)** — regional Alabama / East Central Alabama. Live, not yet publicly launched. See `CONCEPT.md`.

**Why both, why not one:**
- The voices don't overlap. Buford is a Calhoun County bureau chief who cannot do national religion satire without breaking character. The LNN anchor cannot do Oxford's third Dollar General without breaking character. Forcing them into one outlet flattens both.
- The audiences are different. LNN scales to ex-evangelicals nationally. GT scales to Calhoun County and adjacent. There is overlap — but the front doors should be different so each audience finds its outlet.
- The risk profiles are different. GT names real Anniston-area institutions; LNN would name megachurch pastors and national political figures. Different legal posture, different editorial guardrails.
- The aesthetics should be different. GT is locked-in 1998 cosplay. LNN should look current. One site cannot do both visual jokes.

**Why not pick one and drop the other:**
- GT is already live with ~30 articles. Sunk-cost is small but real, and the work is good.
- LNN has a clear gap-in-market thesis. Hard to walk away from.
- They reinforce each other through syndication without competing for attention.

---

## Sequencing

### Now → near term (next 1–2 months)
- **GT continues at current pace** (1–2 articles/month, per `editorial-calendar.md`). Don't accelerate. Don't slow. The site exists; let it accumulate.
- **LNN voice test.** Write 5–10 LNN articles in flat Markdown, no site. Goal: prove the voice holds. If it doesn't, fix the concept before building anything.
- **Domain decision for LNN.** Cheap, fast, do it this week.

### Mid term (2–6 months out)
- Stand up LNN site if voice test clears. Same stack as GT (Next.js + MDX). No reason to learn new tools.
- Build the syndication pipe: GT's "Faith & Religion" section pulls from LNN.
- Begin video for both. LNN scales easier here — generic anchor desk vs. specific Buford-on-location.
- Identify Black-church-tradition collaborator for LNN. Do not launch that column without one.

### Long term (6+ months)
- Public launch GT (still pre-launch — needs the holdback removed when ready).
- LNN publishes consistently; build pastor network for boosts and guest contributions.
- Revisit Walton Goggins / Gemstones pitch only after LNN has a body of work to point at.

The order matters: GT is already running, so it doesn't need a sprint. LNN is the new build and should get the focused energy. Don't try to do both new at once.

---

## Syndication Model

**GT → LNN:** GT does not feed LNN. Calhoun-specific bits don't travel.

**LNN → GT:** GT pulls LNN's faith content into a "Faith & Religion" section. This:
- Gives GT a fifth section without writing more
- Cross-promotes LNN to GT's regional audience (likely overlap on this content)
- Keeps GT's local voice intact — the LNN content is clearly badged as syndicated, not Buford

**Implementation note (when we get there):** keep LNN articles as the source of truth. GT's faith section should be a syndicated view, not duplicate MDX files. Probably a content collection or a build-time fetch from a shared content directory. Decide when building, not now.

**Cross-pollinating bits (one observation, two pieces):**
- **Chick-fil-A theology.** GT covers a specific Oxford CFA opening as religion journalism (already drafted: `_drafts/chick-fil-a-oxford-chosen.mdx`). LNN covers the national pattern: "Chick-fil-A Opens Oxford Location, Immediately Becomes Third Baptist Church" works for either, but the GT version names Oxford and Buford writes it; the LNN version is wire-service generic and runs nationally.
- **Megachurch coverage.** GT has Pastor Brad Ellison at The Bridge at Oxford (CONCEPT.md cast). LNN has a national celebrity-pastor character. Don't merge; let them coexist as local and national versions of the same archetype.
- **Southern Gospel.** Could go either way. Default to LNN unless the bit is specifically Calhoun-coded.

Rule of thumb: if it could run in any Bible Belt town, it's LNN. If it requires Calhoun County context to land, it's GT.

---

## Green Tomato — New Angles from This Brainstorm

The brainstorm surfaced GT-specific bits not yet in `satire-targets.md` or `editorial-calendar.md`. Bank these here; promote into the editorial calendar when ready to draft.

### Anniston / Calhoun County
- **Mayor Sierra Smith** — young, Black, possibly the most qualified person for a much bigger job. Satirize the *mismatch* between her skills and the job, not her. She's the straight man; the institution is the joke. **Loop her in before publishing anything that mentions her by fictional analog.** Risk: even a fictional name tracking too closely reads as targeting her personally. Get her sign-off first.
- **Anniston selling RMC to Orlando Health** — already has a research file (`rmc-orlando-health.md`); pull angles from there.
- **County Commission and Sheriff candidate forums** — Buford covers as primary process journalism. Wendell Hightower public-comment guy is the recurring color.
- **Farmers market director vacancy** — handle carefully. Specific enough that publishing satire about it could out the author to people in the loop. Hold or write generically.
- **Calhoun County America 250 celebration** — civic-booster register, Wendell Moss EDC angle, "America 250 Committee Cancels Fourth Subcommittee."

### Chief Ladiga Trail
- "Trail Enthusiasts Shocked to Learn Chief Ladiga Was an Actual Person"
- "Jacksonville State Students Finally Discover Trail Name Means Something"
- "Local Historians Announce Major Discovery: Chief Ladiga Trail Actually Connected to History"
- The bit: cultural erasure and performative Indigenous history recognition. Satirize the institutional forgetting, not Indigenous history itself. Easy to misread — write carefully.

### Alabama Politics
- 2026 gubernatorial race — Ivey term-limited, Tuberville running. Buford covers as wire-service.
- Auburn's new head coach Alex Golesh — coaching absurdity, plays into existing GT football register.
- Iron Bowl satire — already implied in CONCEPT.md.
- **Sabanology as religion** — fans baptized in Saban's name. "Theology of Eternal Domination" connecting football supremacy to Christian nationalism. **This is a hinge bit** — could run on either site. Probably GT first (Alabama-coded), then a national version on LNN.

### Food / Retail Culture
- Jack's as senior center — "Jack's Expands Senior Services After Realizing They're Running De Facto Retirement Community." Fits GT's existing Jack's-as-sacrament register.
- Duck Dynasty fashion line — rural aesthetic commodified.
- Tractor Supply manager runs for mayor.

### Civil Rights / Racial Justice
- "Alabama Celebrates Civil Rights History by Doing Nothing About Current Racism"
- "State Education Board Discovers Ingenious Loophole: Teaching Civil Rights Without Mentioning Systemic Racism"
- "Birmingham Landmarks Attract Tourists Eager to Learn History They'll Immediately Forget"
- The risk: this beat is the easiest place to slip into preaching. The headline does the work; the body should be deadpan civic-booster voice, not editorial. If the body needs to *explain* why the institution is wrong, the satire failed.

### Education / Culture Wars
- "Alabama Schools Add Ten Commandments Displays, Accidentally Violates Most of Them"
- "State Education Board Clarifies: Evolution Optional, Creationism Mandatory"
- "Local Library Announces Brave New Policy: Books We Haven't Read Yet Are Banned First"

### Immigration
- "Alabama Passes Strictest Immigration Bill, Immediately Realizes Entire Economy Collapses"
- "ICE Raid in Calhoun County Accidentally Deports Half the City Council"
- "Local Man Celebrates Immigration Enforcement Until Realizing His Entire Construction Crew Was Undocumented"
- "Alabama Passes Immigration Crackdown, Economy Collapses Within Hours, State Immediately Blames Biden"
- Same risk as civil rights beat: this is satire of institutional cognitive dissonance, not of the people affected. Keep the lens on the institution.

---

## Proposed GT Site Sections

Currently GT site structure is flat-ish (articles, drafts). Brainstorm proposed:
- Politics
- Faith & Religion (syndicated from LNN)
- Arts & Culture
- Lifestyle
- Gardening
- Sports

**Recommendation:** don't add sections until there's enough content to populate them. A section with two articles in it reads as broken. Re-evaluate when we have ~10 published articles per proposed section. Faith & Religion is the exception — once LNN exists, it can launch with however many LNN articles already exist.

---

## Collaborators / Inspirations to Research

Track these and follow up. Most are LNN-relevant.

- **Phil Vischer (VeggieTales) / Holy Post Podcast** — progressive Christian commentary; reference for tone, possible boost
- **Mockingbird Media** — Episcopal/Presbyterian progressive Christian outlet; reference, possible cross-pollination
- **John Wesley graphic/comic strip** — Methodist pastor satire project; possible collaborator
- **Walton Goggins / Righteous Gemstones producers** — long-term pitch; not a near-term move
- **Local theater friends** — real actors for LNN video content; line up before video production
- **Real pastor network across denominations** — guest contributors for LNN; build the list now, ask later
- **Black church tradition collaborator** — *required* for the fake-pastor column. Do not launch without one.

---

## Strategic Notes (verbatim from brainstorm, kept here so they don't get lost)

- LNN = national focus, primary project
- GT = regional Alabama focus, secondary / syndication receiver
- Both start from zero audience — LNN has bigger national scaling potential
- Matt's pastoral background = credibility to satirize from inside the tradition
- Video strategy: repackage articles as deadpan news anchor clips for TikTok
- Find real Black pastor collaborator for Black church tradition column — don't write that voice yourself
- Loop in Mayor Sierra Smith before publishing pieces about her

---

## What This Doc Is Not

This is a planning capture, not a roadmap commitment. Decisions get made when we get to them. The point is to keep the brainstorm from evaporating between sessions and to have a single place to consult when picking the next move.

Update this doc when sequencing changes, when new angles surface, or when a question on it gets answered. Don't update it speculatively.
