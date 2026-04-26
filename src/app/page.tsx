import { Link } from "next-view-transitions";
import { getAllArticles } from "@/lib/articles";

export default function HomePage() {
  const articles = getAllArticles();
  const lead = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="bg-cd-newsprint min-h-screen">
      {/* Date bar */}
      <div className="bg-cd-warm border-b border-cd-border">
        <div className="max-w-6xl mx-auto px-4 py-1.5 flex items-center justify-between text-[11px] text-cd-text-light font-semibold uppercase tracking-widest">
          <span>{new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
          <span>Calhoun County, Alabama · Est. Recently</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6 border-b-2 border-cd-navy pb-3">
          <span
            className="text-cd-navy font-black uppercase text-2xl tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Latest News
          </span>
          <span className="bg-cd-red text-white text-[10px] font-black uppercase tracking-widest px-2 py-1">
            Live
          </span>
        </div>

        {/* Lead story */}
        {lead && (
          <Link href={`/articles/${lead.slug}`} className="block group mb-8">
            <div className="border border-cd-border bg-white p-6 hover:border-cd-red transition-colors">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {lead.frontmatter.breaking && (
                  <span className="bg-cd-red text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5">
                    Breaking
                  </span>
                )}
                {lead.frontmatter.developing && (
                  <span className="border border-cd-navy text-cd-navy text-[10px] font-bold uppercase tracking-widest px-2 py-0.5">
                    Developing
                  </span>
                )}
                {lead.frontmatter.tags?.filter(t => t !== "breaking" && t !== "developing").slice(0, 2).map(tag => (
                  <span key={tag} className="text-[10px] text-cd-text-light uppercase tracking-wider font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
              <h2
                className="text-cd-text font-black uppercase leading-tight mb-3 group-hover:text-cd-red transition-colors"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
              >
                {lead.frontmatter.title}
              </h2>
              <p className="text-cd-text-light text-base leading-relaxed mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                {lead.frontmatter.excerpt}
              </p>
              <div className="flex items-center gap-3 text-[11px] text-cd-text-light uppercase tracking-wider font-semibold">
                <span>{lead.frontmatter.byline ?? "Calhoun Dispatch Staff"}</span>
                <span>·</span>
                <span>{new Date(lead.frontmatter.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                <span>·</span>
                <span>{lead.readingTime}</span>
              </div>
            </div>
          </Link>
        )}

        {/* More stories */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4">
            {rest.map((article) => (
              <Link href={`/articles/${article.slug}`} key={article.slug} className="block group">
                <div className="border border-cd-border bg-white p-5 h-full hover:border-cd-red transition-colors">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {article.frontmatter.breaking && (
                      <span className="bg-cd-red text-white text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5">Breaking</span>
                    )}
                    {article.frontmatter.tags?.filter(t => t !== "breaking").slice(0, 1).map(t => (
                      <span key={t} className="text-[10px] text-cd-text-light uppercase tracking-wider font-semibold">{t}</span>
                    ))}
                  </div>
                  <h3
                    className="text-cd-text font-black uppercase leading-tight mb-2 group-hover:text-cd-red transition-colors"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem" }}
                  >
                    {article.frontmatter.title}
                  </h3>
                  <p className="text-cd-text-light text-sm leading-relaxed line-clamp-3" style={{ fontFamily: "var(--font-serif)" }}>
                    {article.frontmatter.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {articles.length === 0 && (
          <div className="border border-cd-border bg-white p-12 text-center">
            <p
              className="text-cd-navy font-black uppercase text-xl tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              No Incidents to Report
            </p>
            <p className="text-cd-text-light text-sm mt-2">Check back shortly. Something is always developing.</p>
          </div>
        )}
      </div>
    </div>
  );
}
