import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — what it is, who's behind it, and why.`,
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <div className="gt-section-header">★ About The Green Tomato ★</div>

      <article className="gt-article-body" style={{ marginTop: 12 }}>
        <p>
          The Green Tomato is a satirical news outlet by Matt Headley, who lives in Anniston and takes this place seriously across multiple registers. Buford Tatum is fictional. The mummy is real.
        </p>

        <h2>What it is</h2>

        <p>
          A small fake newspaper covering Calhoun County, Alabama in the form local boosterism cannot. It uses the language of press releases, ribbon cuttings, and ongoing community development to describe what is actually happening underneath. Most pieces are gentle. A few are not. All of them are about a place I love.
        </p>

        <p>
          There are three papers covering Calhoun County right now. The Anniston Star covers what is announced. The Calhoun Journal covers what is celebrated. The Green Tomato covers what is unsaid. None of those are insults. They&apos;re different jobs.
        </p>

        <h2>Who is behind it</h2>

        <p>
          My name is Matt Headley. I live in Anniston with my wife Heather and our kids. I run <a href="https://headleyweb.com" target="_blank" rel="noopener noreferrer">Headley Web &amp; SEO</a>, a small web design and SEO practice serving local businesses across Northeast Alabama. I also write <a href="https://southernlegends.blog" target="_blank" rel="noopener noreferrer">Southern Legends</a>, a profile-based editorial site about the people, places, and small businesses that make this region what it is.
        </p>

        <p>
          The Green Tomato is none of those things. It&apos;s the part of my voice the other outlets have no use for — the dry, the absurd, the parts of local life that ribbon cuttings cannot accommodate. I started it because, after years of writing earnest profiles of business owners I genuinely admire, I needed somewhere to also write the truth that the same place that builds you sometimes treats every Dollar General groundbreaking like a moon landing. Both things are true. I cover both.
        </p>

        <h2>Who Buford Tatum is</h2>

        <p>
          Buford Tatum is a fictional character who serves as the Bureau Chief of The Green Tomato. He is a graduate of the Jacksonville State University broadcast journalism program. He covers the county with the gravity of a war correspondent and the credulity of a chamber of commerce intern. He does not know he is in a satire site. That is part of why the satire works.
        </p>

        <p>
          Buford&apos;s recurring cast — Mayor Lyle Henley, Pastor Brad Ellison, Sheriff Earl Tubb, Brenda Cofield outside the Saks Walmart, Wendell Moss at the EDC, and others — are also fictional. Any resemblance to real people or organizations is coincidental, occasionally uncanny, and never the point.
        </p>

        <h2>What is real and what is not</h2>

        <p>
          The institutions are real. The Anniston Museum of Natural History exists. So does its mummy. The Berman Museum genuinely owns Hitler&apos;s tea service. Quintard Mall really is mostly empty. The Cheaha Challenge really does climb 9,714 feet across roads that have not been resurfaced in some time. These pieces work because the underlying facts are real.
        </p>

        <p>
          The events in the articles, with rare exceptions, are not. No one was actually attacked at the Raptor Run. The mummy did not actually escape during a wind event. The strip club has not actually opened next to the Anniston Country Club. I want this to be very clear because I live here and shop at the same Walmarts you do.
        </p>

        <h2>Why I&apos;m signing my name to it</h2>

        <p>
          I had a long internal debate about whether to keep this anonymous. The pseudonym felt safer. But the more I wrote, the more I realized I was writing a love letter, and love letters work better signed. So I&apos;m signing it.
        </p>

        <p>
          That means: if any of this lands wrong, I want to know. The pieces are written from a place of affection for a place I am not leaving. If a piece misrepresents you, your business, or your work, write to me directly at the address below and I will read it carefully.
        </p>

        <h2>Reach out</h2>

        <p>
          You can write to me at <a href="mailto:matt@headleyweb.com">matt@headleyweb.com</a> for anything not addressed to Buford, and at <a href="mailto:buford@thegreentomato.news">buford@thegreentomato.news</a> for anything that is. Buford will be in touch where applicable.
        </p>

        <hr />

        <p style={{ fontSize: "0.85rem", fontStyle: "italic", color: "#444" }}>
          The Green Tomato is published independently and accepts no advertising or sponsorship. Merchandise and reader support, when offered, will be the only sources of revenue. The site has no editorial relationship with the City of Anniston, the Calhoun County Commission, the Anniston Museum of Natural History, the Berman Museum, the Anniston Star, the Calhoun Journal, the Northeast Alabama Bicycle Association, or any of the institutions, businesses, or individuals it covers. We wish all of them well.
        </p>
      </article>
    </>
  );
}
