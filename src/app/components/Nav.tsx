import Image from "next/image";
import { Link } from "next-view-transitions";
import { siteConfig } from "@/lib/site-config";
import { getAllArticles } from "@/lib/articles";
import EditionDate from "./EditionDate";
export default function Nav() {
  const issueNumber = getAllArticles().length;
  return (
    <>
      <div className="gt-masthead">
        <div className="gt-masthead-row">
          <Image
            src="/images/site/pixel-tomato.webp"
            alt=""
            aria-hidden="true"
            width={64}
            height={64}
            unoptimized
            className="gt-masthead-mark"
            style={{ imageRendering: 'pixelated' }}
          />
                    <h1 className="gt-masthead-title">The Green Tomato</h1>
        </div>
        <p className="gt-masthead-tagline">{siteConfig.tagline}</p>
        <p className="gt-masthead-edition">
          Vol. I, No. {issueNumber} · Calhoun County, Alabama · <EditionDate />
        </p>
      </div>

      <nav className="gt-nav" aria-label="Main">
        <table className="gt-nav-table" cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr>
              {siteConfig.nav.map((item) => (
                <td key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </nav>
    </>
  );
}
