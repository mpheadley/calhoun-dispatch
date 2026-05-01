import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support The Green Tomato | The Green Tomato",
  description:
    "The Green Tomato accepts reader support in exchange for gratitude and the continued operation of this publication. Buford will be in touch where applicable.",
  alternates: { canonical: "/support" },
  openGraph: { url: "/support" },
};

const tiers = [
  {
    name: "Concerned Citizen",
    price: "$3/month",
    benefits: [
      "Our sincere thanks",
      "The knowledge that you have supported local journalism",
      "A sense of civic participation",
      "Nothing else at this time",
    ],
    note: null,
  },
  {
    name: "Committed Reader",
    price: "$7/month",
    benefits: [
      "Everything in Concerned Citizen",
      "Your name added to the Green Tomato's internal list of readers who are committed",
      "Priority consideration for any future reader benefits that may or may not exist",
    ],
    note: "Editor's note: The list is not public. Buford keeps it in a notebook.",
  },
  {
    name: "Bureau Associate",
    price: "$15/month",
    benefits: [
      "Everything above",
      "Recognition as a Bureau Associate",
      "The right to describe yourself as a Bureau Associate in casual conversation",
      "Buford will acknowledge this tier exists",
      "One letter of commendation (not legally binding)",
    ],
    note: "Editor's note: Buford has reviewed the Bureau Associate tier and considers it appropriate.",
  },
  {
    name: "Institutional Patron",
    price: "$50/month",
    benefits: [
      "Everything above",
      "Designation as an Institutional Patron, which sounds significant",
      "Your organization listed in our masthead (pending availability of masthead space)",
      "A personal note from Buford Tatum regarding your contribution and its importance to local journalism",
      "Invitation to be mentioned, at Buford's discretion, in a future article as a 'representative from the community'",
    ],
    note: "Editor's note: The Green Tomato does not currently have masthead space allocated for institutional patrons. We are working on it.",
  },
];

export default function SupportPage() {
  return (
    <>
      <div className="gt-section-header">★ Support The Green Tomato ★</div>

      <article className="gt-article-body" style={{ marginTop: 12 }}>
        <p>
          The Green Tomato operates independently, with no advertising, no
          grants, and no institutional backing. It is supported entirely by
          reader goodwill and, in the absence of goodwill, by Matt Headley
          personally.
        </p>

        <p>
          If you have found value in this publication — its reporting, its
          classifieds, its ongoing coverage of the Calhoun County mummy — you
          may choose to support it. Buford would appreciate it. He has described
          reader support as "a meaningful validation of the journalistic
          enterprise." He has said this more than once.
        </p>

        <p>
          The following support tiers are available. All benefits are offered in
          the spirit of community journalism and with the full transparency that
          the institution of the press demands.
        </p>

        <hr />

        {tiers.map((tier) => (
          <div
            key={tier.name}
            style={{
              marginBottom: 28,
              paddingBottom: 24,
              borderBottom: "1px solid #000080",
            }}
          >
            <h2 style={{ marginBottom: 2 }}>{tier.name}</h2>
            <p
              style={{
                fontStyle: "italic",
                fontSize: "0.95rem",
                marginTop: 0,
                marginBottom: 10,
              }}
            >
              {tier.price}
            </p>
            <ul style={{ marginTop: 0 }}>
              {tier.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            {tier.note && (
              <p
                style={{
                  fontSize: "0.85rem",
                  fontStyle: "italic",
                  borderLeft: "3px solid #000080",
                  paddingLeft: 10,
                  color: "#333",
                }}
              >
                {tier.note}
              </p>
            )}
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: 32, marginBottom: 32 }}>
          <a
            href="/404"
            style={{
              display: "inline-block",
              background: "#000080",
              color: "#FFFF00",
              padding: "10px 28px",
              textDecoration: "none",
              fontFamily: "Times New Roman, serif",
              fontSize: "1.1rem",
              fontWeight: "bold",
              border: "2px outset #000080",
            }}
          >
            BECOME A PATRON — SUPPORT THE GREEN TOMATO
          </a>
        </div>

        <hr />

        <p style={{ fontSize: "0.85rem", fontStyle: "italic", color: "#444" }}>
          The Green Tomato accepts no advertising and has no corporate
          affiliations. Reader support sustains the bureau. Buford thanks you
          for your consideration and notes that local journalism depends on the
          community it serves. He feels this is worth saying.
        </p>

        <p style={{ fontSize: "0.85rem", color: "#444" }}>
          Questions?{" "}
          <a href="mailto:buford_tatum@aol.com">buford_tatum@aol.com</a>. Buford
          will be in touch where applicable.
        </p>
      </article>
    </>
  );
}
