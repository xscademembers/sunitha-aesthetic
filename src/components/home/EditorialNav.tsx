"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HomeDropdown, HomeMobileLinks } from "@/components/HomeDropdown";
import { ServicesMegaMenu, ServicesMobileMenu } from "@/components/ServicesMegaMenu";
import { useBook } from "./BookProvider";

const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "#treatments" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact Us", href: "#contact" },
] as const;

export function EditorialNav() {
  const { openBook } = useBook();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="atelier-wrap flex h-[72px] items-center gap-4">
        <Link href="/home-2" className="flex min-w-0 shrink-0 flex-col no-underline">
          <span className="atelier-display truncate text-[16px] leading-none tracking-[0.02em] text-black sm:text-[20px]">
            Sunita Aesthetics
          </span>
          <span className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.28em] text-maroon sm:block">
            Plastic surgery · Vizag
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center lg:flex" aria-label="Main">
          <HomeDropdown
            triggerClassName="atelier-nav-link rounded-none px-2.5 py-2 hover:bg-transparent"
            menuClassName="rounded-none border-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
          />
          {NAV_LINKS.map((link) =>
            link.label === "Our Services" ? (
              <ServicesMegaMenu key={link.label} triggerClassName="atelier-nav-link rounded-none px-2.5 py-2 hover:bg-transparent" />
            ) : (
              <a key={link.label} href={link.href} className="atelier-nav-link">
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <button type="button" onClick={openBook} className="atelier-btn !w-auto px-4 py-3 text-[10px] sm:px-7 sm:py-3.5">
            Book
          </button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="flex size-10 items-center justify-center border border-black/15 text-black sm:size-11 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[70] bg-white lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="flex h-[72px] items-center justify-between border-b border-black/10 px-6">
            <span className="atelier-display text-[20px]">Menu</span>
            <button type="button" aria-label="Close menu" onClick={closeMobile} className="flex size-11 items-center justify-center border border-black/15">
              ×
            </button>
          </div>
          <div className="overflow-y-auto px-6 py-6">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-maroon">Home</p>
            <HomeMobileLinks onNavigate={closeMobile} linkClassName="border-b border-black/8 px-0 py-3.5 font-medium uppercase tracking-[0.12em]" />
            <div className="mt-4 flex flex-col">
              {NAV_LINKS.map((link) =>
                link.label === "Our Services" ? (
                  <div key={link.label} className="border-b border-black/8">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      className="flex w-full items-center justify-between py-3.5 text-left text-[15px] font-medium uppercase tracking-[0.12em]"
                    >
                      Our Services
                      <span>{mobileServicesOpen ? "−" : "+"}</span>
                    </button>
                    {mobileServicesOpen && (
                      <div className="pb-4">
                        <ServicesMobileMenu onNavigate={closeMobile} />
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMobile}
                    className="border-b border-black/8 py-3.5 text-[15px] font-medium uppercase tracking-[0.12em] text-black"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                closeMobile();
                openBook();
              }}
              className="atelier-btn mt-8"
            >
              Book a consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
