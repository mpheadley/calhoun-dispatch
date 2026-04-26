import { Link } from "next-view-transitions";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-cd-navy border-t-4 border-cd-red text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <p
              className="font-black uppercase text-xl tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Calhoun Dispatch
            </p>
            <p className="text-white/50 text-xs mt-1">{siteConfig.tagline}</p>
            <p className="text-white/40 text-xs mt-3 max-w-xs">
              Dale Brewer, Bureau Chief<br />
              Calhoun County, Alabama
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Sections</p>
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <hr className="border-white/10 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>
            &copy; {new Date().getFullYear()} The Calhoun Dispatch. All rights reserved. All incidents considered developing.
          </p>
          <Link href="/privacy" className="hover:text-white/60 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
