import { getAllArticles, getLeadArticle } from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";
import "./print-styles.css";

export const metadata = {
  title: "Print Edition",
  description: `A special printable edition of ${siteConfig.name}.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrintPage() {
  const lead = getLeadArticle();
  const articles = getAllArticles().filter(a => a.slug !== lead?.slug).slice(0, 4);

  return (
    <div className="print-body">
      <div className="print-page">
        <header className="print-masthead">
          <div className="print-masthead-title">The Green Tomato</div>
          <div className="print-masthead-meta">
            <span>Vol. I, No. 34</span>
            <span>Calhoun County, Alabama</span>
            <span>{new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"})}</span>
            <span>One Dollar</span>
          </div>
        </header>

        <main className="print-content">
          {lead && (
            <article className="print-article-lead">
              <h1 className="print-headline-lead">{lead.frontmatter.title}</h1>
              {lead.frontmatter.heroImage && (
                <img src={lead.frontmatter.heroImage} alt={lead.frontmatter.heroAlt} className="print-hero-image" />
              )}
              <p className="print-byline">{lead.frontmatter.byline}</p>
              <div className="print-body-lead">
                <p>{lead.frontmatter.excerpt} (cont. on A4)</p>
              </div>
            </article>
          )}

          <div className="print-columns">
            {articles.map((article, i) => (
              <article key={article.slug} className="print-article-column">
                <h2 className="print-headline-column">{article.frontmatter.title}</h2>
                <p className="print-body-column">{article.frontmatter.excerpt}</p>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
