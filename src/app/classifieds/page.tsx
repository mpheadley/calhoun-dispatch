export const metadata = {
  title: "Classifieds | The Green Tomato",
  description: "Calhoun County classifieds. For Sale, Wanted, Services, Pets, Community Notices, and Personals. Thursdays only.",
};

const classifieds: Record<string, { item: string; phone: string; note?: string }[]> = {
  "For Sale": [
    { item: "Riding lawnmower, John Deere. Runs good. Needs new blade. Call for price.", phone: "256-555-0101" },
    { item: "Two (2) deer stands, ladder type. Good condition. $150 for both.", phone: "256-555-0102" },
    { item: "Hot tub, lightly used, one season. Cover included. You haul. $500.", phone: "256-555-0103" },
    { item: "Genuine oak church pew. Holds six, minor stain. Very heavy. Best offer.", phone: "256-555-0104", note: "Editor's note: This reporter has verified the pew is oak. The stain is on the right end, fourth seat from the aisle. It does not appear to be blood." },
    { item: "1997 Buick LeSabre. Runs. AC works sometimes. New floor mats. $1,200 firm.", phone: "256-555-0105" },
    { item: "Upright piano, walnut finish, needs tuning, one sticky key (G above middle C). Free to anyone who can move it.", phone: "256-555-0106", note: "Editor's note: The Green Tomato has confirmed the piano is on the second floor. Seller has a partial staircase. Prospective buyers are encouraged to assess the situation before committing." },
    { item: "Collection of Reader's Digest condensed books, 1971–1989. Complete run. $20 for all.", phone: "256-555-0107" },
    { item: "Metal detector, Bounty Hunter brand. Used twice. Bag of items found included at no charge.", phone: "256-555-0108" },
  ],
  "Wanted": [
    { item: "Looking for someone who knows how to fix a 1994 Ford F-150. Not a mechanic, just someone who has done it before. Call after 5.", phone: "256-555-0110" },
    { item: "Need old barn wood for a project. Will come and get it.", phone: "256-555-0111" },
    { item: "Seeking a used chest freezer, working condition. Size does not matter but prefer large.", phone: "256-555-0112" },
    { item: "Looking for anyone who remembers the Winn-Dixie on Quintard. Not to buy anything, just to talk.", phone: "256-555-0113" },
  ],
  "Services": [
    { item: "Stump removal. Will remove your stump. Call Earl.", phone: "256-555-0120" },
    { item: "Notary public. Also cuts hair. Weekends only.", phone: "256-555-0121" },
    { item: "Will clean your gutters. Price depends on house. Free estimates.", phone: "256-555-0122" },
    { item: "Gospel piano lessons. All ages, all levels. First lesson free. Hymns only.", phone: "256-555-0123" },
    { item: "Pressure washing. Driveways, decks, porches, one concrete chicken. References available.", phone: "256-555-0124", note: "Editor's note: This reporter did not ask about the concrete chicken. It is in the listing. The Green Tomato presents it without further context." },
  ],
  "Pets": [
    { item: "FREE: Chickens. All of them. Please.", phone: "256-555-0130" },
    { item: "Lost dog, brown with white spots. Answers to 'Buddy'. Reward.", phone: "256-555-0131" },
    { item: "AKC registered beagle puppies, 8 weeks, first shots done. $250 each. Four available.", phone: "256-555-0132" },
    { item: "Indoor cat, name Wishbone, 11 years old, good health, needs new home, reasons personal. Very affectionate once trust established.", phone: "256-555-0133" },
  ],
  "Community Notices": [
    { item: "Oxford First Baptist Spaghetti Dinner postponed until further notice due to circumstances. Plates still $8.", phone: "256-555-0140" },
    { item: "The annual Saks craft fair is looking for vendors. Tables are $20.", phone: "256-555-0141" },
    { item: "Calhoun County Genealogy Society meets second Tuesday, Anniston Public Library, Room C. New members welcome. Bring what you have.", phone: "256-555-0142" },
    { item: "Anyone with information about the missing lawn jockey from 211 Leighton Ave, please call. No questions asked.", phone: "256-555-0143" },
  ],
  "Personals": [
    { item: "SWM, 58, Oxford area, enjoys fishing, church, and the Braves. Looking for a woman who is not complicated. Must like dogs. Mine is named Patriot.", phone: "256-555-0150" },
    { item: "Retired schoolteacher, Anniston, seeks companion for dinners and possibly travel. I have been to Gatlinburg twice and would go again.", phone: "256-555-0151", note: "Editor's note: This reporter found this listing to be among the most specific and reasonable submitted this week. The Green Tomato wishes the advertiser well." },
    { item: "Man, early 60s, Oxford, former deacon, currently between churches. Not looking for anything serious. Likes quiet evenings. Has a boat but rarely uses it.", phone: "256-555-0152" },
  ],
};

export default function ClassifiedsPage() {
  return (
    <>
      <div className="gt-section-header">★ Classifieds ★</div>

      <div style={{
        fontFamily: "Times New Roman, Times, serif",
        fontSize: "0.92rem",
        lineHeight: 1.6,
        background: "#fffff0",
        border: "2px double var(--gt-navy)",
        padding: "12px 16px",
        margin: "0 0 16px",
      }}>
        <p style={{ margin: "0 0 8px", fontWeight: "bold", fontSize: "1rem" }}>
          A Note from the Bureau Chief
        </p>
        <p style={{ margin: "0 0 8px" }}>
          The Green Tomato Classifieds section is produced each Thursday with the same commitment to accuracy and completeness that governs our news coverage. All listings are submitted by members of the Calhoun County community and are published as received, subject to review for clarity and length.
        </p>
        <p style={{ margin: "0 0 8px" }}>
          Submission volume for the current edition was, in the assessment of this Bureau Chief, consistent with prior weeks. Readers will note the addition of a Personals category, which was introduced following sustained community interest. The listings in that section are presented in good faith. The Green Tomato does not perform background checks.
        </p>
        <p style={{ margin: 0, fontStyle: "italic" }}>
          — Buford Tatum, Bureau Chief
        </p>
      </div>

      <div className="classifieds-notice">
        Classifieds run Thursdays. Deadline is Wednesday noon. Rate: $3.00 per line. The Green Tomato is not responsible for the accuracy of submitted listings or for any transactions arising therefrom. 555- numbers are local.
      </div>

      <div className="classifieds-grid">
        {Object.entries(classifieds).map(([category, items]) => (
          <section key={category} className="classifieds-category">
            <h2 className="classifieds-category-title">{category}</h2>
            <div className="classifieds-category-listings">
              {items.map((item, i) => (
                <div key={i} className="classifieds-listing">
                  <p className="classifieds-listing-text">{item.item}</p>
                  {item.note && (
                    <p style={{
                      fontFamily: "Times New Roman, Times, serif",
                      fontSize: "0.75rem",
                      fontStyle: "italic",
                      color: "#333",
                      margin: "3px 0 0",
                      paddingLeft: "8px",
                      borderLeft: "2px solid var(--gt-navy)",
                    }}>
                      [Editor&apos;s note: {item.note.replace(/^Editor's note: /, "")}]
                    </p>
                  )}
                  <p className="classifieds-listing-phone">{item.phone}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
