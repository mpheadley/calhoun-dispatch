# Green Tomato Merch — Drop #1

Three SKUs to launch. Print-on-demand via Fourthwall (same vendor Matt already uses for the bipolar brand). Zero inventory cost. Margins listed per SKU.

## Drop #1

| File | SKU | Sale | Margin |
|---|---|---|---|
| `01-raptor-run-survivor-tee.md` | "I Survived the Raptor Run" Tee | $25 | $15 |
| `02-vegetable-of-record-tote.md` | "The Vegetable of Record" Tote | $22 | $11 |
| `03-bureau-chief-mug.md` | "Buford Tatum / Bureau Chief" Mug | $18 | $10 |

**Combined potential at conservative volume:**
- 5 tees + 5 totes + 5 mugs / month = $325 gross, ~$180 margin
- 20 / 10 / 15 (mid-volume) = $810 gross, ~$465 margin
- 50 / 25 / 30 (best case) = $2,090 gross, ~$1,170 margin

Realistic for a satire site with a few hundred regular readers: **$50-300/mo margin**, mostly tee-driven.

## Drop #2 candidates

Release after watching what moves and listening to comment / share patterns.

- "Investment-Ready Since 1987" Calhoun County EDC parody tee
- "I Climbed Cheaha (Allegedly)" tee
- "The Mummy Is Stable" tee
- "Best Viewed in Netscape Navigator 4.0" tee (the website footer line as a shirt)
- "HURT? CALL BERT." novelty tee (homage to the recurring fake ad)
- "Buford Tatum / Bureau Chief" stickers — low-cost SKU for impulse buyers

## Design file workflow (GPT mockup → print-ready)

1. Generate concept mockup with `--model gpt` (shirt on white background)
2. Remove background: remove.bg or Photoshop → isolates the shirt graphic
3. Vectorize the design: Adobe Illustrator Image Trace or Vectorizer.ai → SVG/EPS
4. **Check thin serif text after tracing** — small italic lines (e.g. "Manageable" credit line) often degrade. If soft, retype that line in Illustrator over the vector base.
5. Export as PNG at 300 DPI for Fourthwall upload
6. Keep the original GPT mockup as the listing preview photo (shows the shirt in context)

The GPT mockup is the concept proof. The vectorized export is the actual upload file. Don't skip step 4 — text quality is where vectorization breaks down.

## Workflow when launching

1. Open Fourthwall (same dashboard as bipolar brand)
2. New product → Apparel / Drinkware / Bag (per SKU)
3. Paste `Product Title`, `Short Description`, `Long Description`, `Search keywords` from the SKU file
4. Upload designs (Matt creates from `Design Direction`)
5. Set price as listed
6. Publish to a new collection: `The Green Tomato`
7. Either use a new Fourthwall subdomain (`shop.thegreentomato.news` if owned) or share the bipolar-brand store URL with collection filter
8. Add link from Green Tomato site footer: `Shop` → store URL

## What not to do

- Don't launch all three SKUs separately — drop them together as **"Drop #1"** so each release is a content moment
- Don't write Drop #2 listings until Drop #1 has been live for 30+ days — let the data speak
- Don't add a fourth SKU mid-drop — pick three, ship three, evaluate
- Don't put the Headley Web brand or Matt's name anywhere on the product or store. Pseudonym hygiene.