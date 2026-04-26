"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import { siteConfig } from "@/lib/site-config";

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Ticker bar */}
      <div className="bg-cd-red text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <span className="shrink-0 bg-white text-cd-red px-2 py-0.5 text-[10px] font-black tracking-wider">
            BREAKING
          </span>
          <span className="truncate opacity-90">
            Calhoun County Commission Clears Full Agenda · Oxford Man Clarifies He Is From Oxford · Raptor Run Investigation Ongoing
          </span>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-cd-navy border-b-4 border-cd-red sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <div>
              <div
                className="text-white font-black uppercase tracking-tight leading-none"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 3vw, 1.6rem)" }}
              >
                The Calhoun Dispatch
              </div>
              <div className="text-white/50 text-[10px] uppercase tracking-[0.2em] mt-0.5">
                {siteConfig.tagline}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {siteConfig.nav.map((item) => {
              const isActive = pathname.startsWith(item.href.split("?")[0]);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-widest transition-colors ${
                    isActive
                      ? "bg-cd-red text-white"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-cd-navy flex flex-col items-center justify-center transition-opacity duration-200 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="absolute top-5 right-5 text-white p-2"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <nav className="flex flex-col items-center gap-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-2xl font-black uppercase tracking-wide text-white hover:text-cd-red transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
