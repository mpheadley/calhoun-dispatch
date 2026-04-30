import { Link } from "next-view-transitions";
import { getAllArticles } from "@/lib/articles";

export const metadata = {
  title: "All News",
  description: "Complete coverage of Calhoun County, Alabama.",
};

type ArticlesPageProps = {
  searchParams: {
    tag?: string;
  };
};

function capitalize(s: string) {
  if (typeof s !== "string" || s.length === 0) return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const allArticles = getAllArticles();
  const tag = searchParams.tag;

  const articles = tag
    ? allArticles.filter((article) => article.frontmatter.tags?.includes(tag))
    : allArticles;
  
  const title = tag ? `★ ${capitalize(tag)} ★` : "★ All News ★";

  return (
    <>
      <div className="gt-section-header">{title}</div>
      <p style={{ fontSize: "0.85rem", fontStyle: "italic", marginBottom: 12 }}>
        {articles.length} {articles.length === 1 ? "story" : "stories"} on record. Sorted by recency.
      </p>

      {articles.map((article) => (
        <Link key={article.slug} href={`/articles/${article.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
          <article className="gt-story">
            <div style={{ marginBottom: 4 }}>
              {article.frontmatter.breaking && <span className="gt-badge gt-badge-breaking">Breaking!!</span>}
              {article.frontmatter.developing && <span className="gt-badge gt-badge-developing">Developing</span>}
              {article.frontmatter.tags?.filter(t => t !== "breaking" && t !== "developing").slice(0, 3).map(t => (
                <span key={t} className="gt-badge gt-badge-tag">{t}</span>
              ))}
            </div>
            <h2 className="gt-story-headline">{article.frontmatter.title}</h2>
            <p className="gt-story-excerpt">{article.frontmatter.excerpt}</p>
            <div className="gt-byline">
              By <strong>{article.frontmatter.byline ?? "Green Tomato Staff"}</strong> ·{" "}
              {new Date(article.frontmatter.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {article.readingTime}
            </div>
          </article>
        </Link>
      ))}
    </>
  );
}
