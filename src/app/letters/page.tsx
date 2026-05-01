import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Letters to the Editor | The Green Tomato",
  description:
    "Letters submitted by Green Tomato readers on matters of local concern. All letters are printed as received, with minor corrections for length. Editor's notes appear where warranted.",
  alternates: { canonical: "/letters" },
  openGraph: { url: "/letters" },
};

type Letter = {
  from: string;
  location: string;
  subject: string;
  body: string;
  editorNote?: string;
};

const letters: Letter[] = [
  {
    from: "Name withheld by request",
    location: "Anniston",
    subject: "Re: Mummy",
    body: "I have been to the Anniston Museum of Natural History seven times in the last three years. Every time I go, the mummy is there. I want to say that I find this reassuring. I do not know why. I just do.",
    editorNote:
      "The Green Tomato thanks this reader for the letter. The mummy has been stable since approximately 1250 B.C. We share the sentiment.",
  },
  {
    from: "Gerald T.",
    location: "Weaver",
    subject: "Dollar General anniversary",
    body: "I read your piece about the Dollar General in Weaver. I want to clarify that Harold Simms is my neighbor and he is not in the habit of standing in parking lots. He was waiting for his wife, who was inside. This is a distinction I feel the paper should acknowledge.",
    editorNote:
      "The Green Tomato regrets any implication regarding Mr. Simms's parking lot habits. His wife was, by all accounts, inside the store.",
  },
  {
    from: "Brenda F.",
    location: "Oxford",
    subject: "Hobby Lobby transition timeline",
    body: "I go to Hobby Lobby every October to get Halloween decorations. Every October the Halloween decorations are already on clearance because Christmas is coming. This has been happening for at least six years. I want someone to know.",
    editorNote:
      "Someone knows. The Green Tomato has reported on this matter.",
  },
  {
    from: "Anonymous",
    location: "Calhoun County",
    subject: "The sousaphones",
    body: "I was at the event. The band did leave the sousaphones on the bus. I want you to know it still felt like a lot.",
    editorNote:
      "The Green Tomato accepts this correction in spirit. The JSU Marching Southerners were contacted for comment and described the performance as 'appropriately scaled for the occasion.'",
  },
  {
    from: "Wendell M.",
    location: "Anniston",
    subject: "Economic development clarification",
    body: "I want to clarify that the Calhoun County Economic Development Council does not only count Dollar Generals as milestones. We count all significant retail openings. The Dollar Generals have been particularly consistent.",
    editorNote:
      "The Green Tomato acknowledges this clarification and thanks Wendell for his continued engagement with our coverage.",
  },
  {
    from: "Linda R.",
    location: "Jacksonville",
    subject: "The commission meeting",
    body: "I attended the commission meeting you reported on. You got it right. I've been going for four years. The agenda is the same. I keep going because I feel like something might change. Nothing has changed. I will be there in June.",
    editorNote: "See you there.",
  },
  {
    from: "Name withheld",
    location: "Oxford",
    subject: "Chick-fil-A",
    body: "Oxford doesn't need a second Chick-fil-A. We need a bookstore. I'm tired of driving to Gadsden.",
    editorNote:
      "The Green Tomato received three letters expressing similar sentiments regarding Oxford's bookstore situation. We are printing one.",
  },
  {
    from: "T. Wickliffe",
    location: "Anniston",
    subject: "Various",
    body: "I have read several of your pieces and I have opinions.",
    editorNote:
      "The Green Tomato appreciates Mr. Wickliffe's engagement. He is encouraged to share his opinions at greater length.",
  },
];

export default function LettersPage() {
  return (
    <>
      <div className="gt-section-header">★ Letters to the Editor ★</div>

      <article className="gt-article-body" style={{ marginTop: 12 }}>
        <p>
          <em>
            The Green Tomato welcomes letters from readers on matters of local
            concern. Letters may be submitted to{" "}
            <a href="mailto:buford_tatum@aol.com">buford_tatum@aol.com</a>.
            Letters are printed as received, with minor corrections for length
            and clarity. The Green Tomato reserves the right to add editorial
            notes where warranted. Most letters warrant an editorial note.
          </em>
        </p>

        <hr />

        {letters.map((letter, i) => (
          <div
            key={i}
            style={{
              marginBottom: 28,
              paddingBottom: 24,
              borderBottom: "1px solid #ccc",
            }}
          >
            <p style={{ marginBottom: 4 }}>
              <strong>{letter.subject}</strong>
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "#555",
                marginTop: 0,
                marginBottom: 10,
              }}
            >
              From: {letter.from}, {letter.location}
            </p>
            <p style={{ marginTop: 0 }}>{letter.body}</p>
            {letter.editorNote && (
              <p
                style={{
                  fontSize: "0.85rem",
                  fontStyle: "italic",
                  borderLeft: "3px solid #000080",
                  paddingLeft: 10,
                  color: "#333",
                  marginTop: 8,
                }}
              >
                <em>Editor&apos;s note:</em> {letter.editorNote}
              </p>
            )}
          </div>
        ))}

        <hr />

        <p style={{ fontSize: "0.85rem", fontStyle: "italic", color: "#444" }}>
          The Green Tomato publishes letters from readers in Calhoun, Cleburne,
          and Etowah counties, as well as any reader who has something to say
          about the mummy. Letters may be edited for length. Opinions expressed
          in letters are those of the writers and do not represent the editorial
          position of The Green Tomato. The Green Tomato does not have a formal
          editorial position on most things.
        </p>
      </article>
    </>
  );
}
