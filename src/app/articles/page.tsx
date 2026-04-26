import { Link } from "next-view-transitions";
import { getAllArticles } from "@/lib/articles";

export const metadata = {
  title: "All News",
  description: "Complete coverage of Calhoun County, Alabama.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="bg-cd-newsprint min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6 border-b-2 border-cd-navy pb-3">
          <span
            className="text-cd-navy font-black uppercase text-2xl tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            All News
          </span>
          <span className="text-[11px] text-cd-text-light uppercase tracking-widest font-semibold">
            {articles.length} {articles.length === 1 ? "story" : "stories"} on record
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {articles.map((article) => (
            <Link href={`/articles/${article.slug}`} key={article.slug} className="block group">
              <div className="border border-cd-border bg-white p-5 hover:border-cd-red transition-colors">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {article.frontmatter.breaking && (
                    <span className="bg-cd-red text-white text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5">Breaking</span>
                  )}
                  {article.frontmatter.developing && (
                    <span className="border border-cd-navy text-cd-navy text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5">Developing</span>
                  )}
                  {article.frontmatter.tags?.filter(t => t !== "breaking" && t !== "developing").slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] text-cd-text-light uppercase tracking-wider font-semibold">{t}</span>
                  ))}
                </div>
                <h2
                  className="text-cd-text font-black uppercase leading-tight mb-2 group-hover:text-cd-red transition-colors"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem" }}
                >
                  {article.frontmatter.title}
                </h2>
                <p className="text-cd-text-light text-sm leading-relaxed line-clamp-2 mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                  {article.frontmatter.excerpt}
                </p>
                <div className="text-[11px] text-cd-text-light uppercase tracking-wider font-semibold">
                  {article.frontmatter.byline ?? "Calhoun Dispatch Staff"} · {new Date(article.frontmatter.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {article.readingTime}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
