# Domain Decision

**Decided:** April 26, 2026
**Choice:** `thegreentomato.news`
**Status:** Both `thegreentomato.news` and `greentomato.news` confirmed available.

---

## The Decision

Buy **`thegreentomato.news`**. Single domain. Don't buy `greentomato.news` for redirect — not worth the additional ~$25/yr until/unless the project earns income.

## Why "The" Matters

The brand is "**The** Green Tomato" everywhere on the property:
- Site masthead — "The Green Tomato" in Blackletter
- About page — opens with *"The Green Tomato is a satirical news outlet..."*
- OG cards — the wordmark on every social share preview
- Article bylines — *"Dale Brewer, Bureau Chief, The Green Tomato"*
- Tote print — *"The Green Tomato — Calhoun County's Most Trusted News Source Since Recently"*
- Tee print — *"★ THE GREEN TOMATO ★ I SURVIVED the Raptor Run"*
- Mug print — *"The Green Tomato — Calhoun County, Alabama"*
- Email — `dale@thegreentomato.news`

A URL that drops the "the" creates persistent mismatch with every other touchpoint. Worse: it visually signals "this is a website" while the brand consistently signals "this is a publication." The whole bit is the formal newspaper register — *The New York Times*, *The Washington Post*, *The Green Tomato.* Dropping "the" softens the joke.

## TLD Choice — Why `.news`

`.news` is the right TLD for three reasons:

1. **Doubles the bit.** A satirical newspaper at `.news` reinforces the "newspaper of record" framing.
2. **Distinctive.** `.com` is the lowest-friction TLD but also the most generic. `.news` reads as deliberately editorial.
3. **Avoids confusion with the bipolar brand or HW.** Matt's other domains are `.com` and `.blog`. The `.news` TLD differentiates this project visually in any URL bar or directory listing.

`.com` would be acceptable. `.org`, `.alabama`, or other niche TLDs would feel forced. `.tv` is reserved for Phase 2 video work if needed.

## Cost / Privacy

- **Vercel pricing:** ~$25/yr for `.news` domains
- **WHOIS privacy:** included automatically with Vercel domain purchases. No extra cost.
- **DNS:** automatic configuration when bought through Vercel. Domain points at the deployment immediately.

## Setup Steps (when ready to buy)

1. In the Vercel dashboard, navigate to the Green Tomato project's Domains tab
2. Search for `thegreentomato.news`, confirm $25/yr
3. Purchase — DNS auto-configures
4. Update `siteConfig.url` in `src/lib/site-config.ts` from `https://thegreentomato.news` (already done) — no code change needed once DNS resolves
5. Set up a domain redirect from `green-tomato.vercel.app` → `thegreentomato.news` (Vercel does this automatically)
6. Update social bios and any external mentions to use the new URL
7. Update Google Search Console / Bing Webmaster (if/when added)

## What This Doesn't Solve

- **Email under the new domain.** `dale@thegreentomato.news` won't work until you set up email forwarding (Vercel doesn't host email; use Cloudflare Email Routing or a similar free forwarder, sending to Matt's real inbox)
- **The 90-day timing question.** Buy now (locks the brand) vs. buy at Week 2 (when soft-public launch happens). Recommendation: buy now. Keeps it from getting registered by someone else; ~$25 is rounding error.

## Rejected Alternatives

| Alternative | Why rejected |
|---|---|
| `greentomato.news` | Drops "the" — mismatches every other touchpoint |
| `thegreentomato.com` | `.com` is fine but `.news` doubles the bit |
| `calhoungreentomato.com` | Too long; "Calhoun" is the *audience*, not the brand |
| `dailygreentomato.com` | "Daily" implies cadence we don't intend to honor |
| `thevegetableofrecord.com` | Tagline ≠ brand; can't anchor a URL on a phrase that may evolve |
| Subdomain on SL or HW (e.g., `satire.southernlegends.blog`) | Couples the brands; SL voice gets contaminated |

## Revisit Trigger

Don't revisit this decision unless:
- The brand pivots (rename of the publication) — would require renaming everything anyway
- `.news` becomes prohibitively expensive at renewal — unlikely; current pricing is stable
- Email forwarding fails and a different TLD has better email hosting — would still keep the domain as canonical
