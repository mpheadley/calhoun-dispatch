import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | The Green Tomato",
  description: `Privacy policy for ${siteConfig.name}. We do not collect much. This is a fake newspaper.`,
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <div className="gt-section-header">★ Privacy Policy ★</div>

      <article className="gt-article-body" style={{ marginTop: 12 }}>
        <p>
          The Green Tomato is a satirical news outlet. It does not sell anything,
          run a newsletter, or maintain user accounts. This policy covers what
          little data the site does collect and why.
        </p>

        <h2>What We Collect</h2>

        <p>
          We use <strong>Google AdSense</strong> to display advertisements. AdSense
          uses cookies to serve ads based on your prior visits to this and other
          websites. You can opt out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google's Ads Settings
          </a>
          .
        </p>

        <p>
          Beyond AdSense, The Green Tomato does not collect names, email
          addresses, or personal information of any kind. There is no comment
          system, no signup form, and no account infrastructure. The guestbook
          is fictional.
        </p>

        <h2>Cookies</h2>

        <p>
          Google AdSense sets cookies to measure ad performance and serve
          relevant ads. The Green Tomato does not set any first-party cookies
          beyond what the platform requires to function. Clearing your browser
          cookies will remove all of them. The site works the same either way.
        </p>

        <h2>Third Parties</h2>

        <p>
          The only third-party service with access to site data is Google, via
          AdSense. Google's own privacy policy governs how they handle that
          data. We do not share, sell, or otherwise distribute visitor
          information to anyone.
        </p>

        <h2>Children</h2>

        <p>
          The Green Tomato is a satire site intended for general audiences. We
          do not knowingly collect information from children under 13. If you
          believe a child has submitted personal information through this site,
          please contact us and we will address it promptly, though we are
          genuinely uncertain how that would have happened.
        </p>

        <h2>Contact</h2>

        <p>
          Questions about this policy can be directed to{" "}
          <a href={`mailto:${siteConfig.webmaster}`}>{siteConfig.webmaster}</a>.
          Buford will forward anything he cannot personally address.
        </p>

        <hr />

        <p style={{ fontSize: "0.82rem", fontStyle: "italic", color: "#555" }}>
          Last updated April 2026. The Green Tomato is a work of satire. All
          articles, names, and incidents are fictional. The mummy is real.
        </p>
      </article>
    </>
  );
}
