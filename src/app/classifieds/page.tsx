export const metadata = {
  title: "Classifieds",
  description: "Calhoun County's best classifieds. Buy, sell, trade, and find what you need.",
};

const classifieds = {
    "For Sale": [
        { item: "Riding lawnmower, John Deere. Runs good. Needs new blade. Call for price.", phone: "256-555-0101" },
        { item: "Two (2) deer stands, ladder type. Good condition. $150 for both.", phone: "256-555-0102" },
        { item: "Hot tub, lightly used, one season. Cover included. You haul. $500.", phone: "256-555-0103" },
        { item: "Genuine oak church pew. Holds six, minor stain. Very heavy. Best offer.", phone: "256-555-0104" },
    ],
    "Wanted": [
        { item: "Looking for someone who knows how to fix a 1994 Ford F-150. Not a mechanic, just someone who has done it before. Call after 5.", phone: "256-555-0110" },
        { item: "Need old barn wood for a project. Will come and get it.", phone: "256-555-0111" },
    ],
    "Services": [
        { item: "Stump removal. Will remove your stump. Call Earl.", phone: "256-555-0120" },
        { item: "Notary public. Also cuts hair. Weekends only.", phone: "256-555-0121" },
        { item: "Will clean your gutters. Price depends on house. Free estimates.", phone: "256-555-0122" },
    ],
    "Pets": [
        { item: "FREE: Chickens. All of them. Please.", phone: "256-555-0130" },
        { item: "Lost dog, brown with white spots. Answers to 'Buddy'. Reward.", phone: "256-555-0131" },
    ],
    "Community Notices": [
        { item: "Oxford First Baptist Spaghetti Dinner postponed until further notice due to circumstances. Plates still $8.", phone: "256-555-0140" },
        { item: "The annual Saks craft fair is looking for vendors. Tables are $20.", phone: "256-555-0141" },
    ]
}

export default function ClassifiedsPage() {
  return (
    <>
      <div className="gt-section-header">★ Classifieds ★</div>
      <div className="classifieds-notice">
        The Green Tomato Classifieds run Thursdays. Deadline is Wednesday noon. The Green Tomato is not responsible for the accuracy of submitted listings or for any transactions arising therefrom.
      </div>

      <div className="classifieds-grid">
        {Object.entries(classifieds).map(([category, items]) => (
            <section key={category} className="classifieds-category">
                <h2 className="classifieds-category-title">{category}</h2>
                <div className="classifieds-category-listings">
                    {items.map((item, i) => (
                        <div key={i} className="classifieds-listing">
                            <p className="classifieds-listing-text">{item.item}</p>
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