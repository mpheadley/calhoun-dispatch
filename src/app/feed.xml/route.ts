import { getAllArticles } from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function mdxToText(raw: string): string {
  return raw
    .replace(/^import\s.+$/gm, "")
    .replace(/<[A-Z][A-Za-z]*[^>]*\/>/g, "")
    .replace(/<[A-Z][A-Za-z]*[^>]*>[\s\S]*?<\/[A-Z][A-Za-z]*>/g, "")
    .replace(/\{[^}]*\}/g, "")
    .replace(/^#{1,6}\s+(.+)$/gm, "$1\n")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export async function GET() {
  const articles = getAllArticles();

  const items = articles
    .map((a) => {
      const fullText = escapeXml(mdxToText(a.content));
      return `
    <item>
      <title>${escapeXml(a.frontmatter.title)}</title>
      <link>${siteConfig.url}/articles/${a.slug}</link>
      <description>${escapeXml(a.frontmatter.excerpt)}</description>
      <content:encoded><![CDATA[${fullText}]]></content:encoded>
      <pubDate>${new Date(a.frontmatter.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${siteConfig.url}/articles/${a.slug}</guid>
      <author>${escapeXml(siteConfig.webmaster)} (${escapeXml(a.frontmatter.byline ?? siteConfig.author)})</author>
      ${(a.frontmatter.tags ?? []).map((t) => `<category>${escapeXml(t)}</category>`).join("\n      ")}
    </item>`;
    })
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(siteConfig.name)}</title>
    <link>${siteConfig.url}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en-us</language>
    <webMaster>${escapeXml(siteConfig.webmaster)} (${escapeXml(siteConfig.author)})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
    },
  });
}
