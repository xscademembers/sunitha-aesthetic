"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { ServicesMegaMenu, ServicesMobileMenu } from "@/components/ServicesMegaMenu";
import { useBook } from "./BookProvider";
import { CallNowBtn } from "./CallNowBtn";
import { TopContactBar } from "./TopContactBar";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/#treatments" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact" },
] as const;

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/#treatments") return pathname.startsWith("/services");
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function HomeNav() {
  const { openBook } = useBook();
  const pathname = usePathname();
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
    <header className="sticky top-0 z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-maroon focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <TopContactBar />
      <div className="bg-white py-3 lg:py-[18px]">
        <div className="home-wrap">
          <div className="neo flex items-center gap-2 rounded-full py-2 pr-2 pl-3 sm:gap-4 sm:py-2.5 sm:pr-3 sm:pl-5">
            <BrandLogo className="h-[40px] w-[118px] sm:h-[50px] sm:w-[152px]" />

            <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0 lg:flex" aria-label="Main">
              {NAV_LINKS.map((link) =>
                link.label === "Our Services" ? (
                  <ServicesMegaMenu
                    key={link.label}
                    triggerClassName={`home-nav-link px-2.5 py-2 font-ui text-[12px] uppercase tracking-[0.08em] hover:bg-transparent xl:px-3 xl:text-[13px] ${
                      isNavActive(pathname, link.href) ? "text-maroon" : "text-black"
                    }`}
                  />
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`home-nav-link px-2.5 py-2 font-ui text-[12px] uppercase tracking-[0.08em] xl:px-3 xl:text-[13px] ${
                      isNavActive(pathname, link.href) ? "text-maroon" : "text-black"
                    }`}
                  >
                    {link.label}
                  </a>
                ),
              )}
            </nav>

            <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={openBook}
                className="neo-btn !w-auto min-h-11 px-3.5 py-2.5 text-[10px] sm:px-6 sm:py-3 sm:text-[12px]"
              >
                Book
              </button>
              <CallNowBtn className="!hidden !w-auto min-h-11 px-3.5 py-2.5 text-[10px] sm:px-6 sm:py-3 sm:text-[12px] lg:!inline-flex" />
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className="neo flex size-11 items-center justify-center rounded-full text-maroon lg:hidden"
              >
                <span className="sr-only">Menu</span>
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M5 7h14M5 12h14M5 17h14" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[70] overscroll-contain lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button type="button" className="absolute inset-0 bg-black/30" aria-label="Close menu" onClick={closeMobile} />
          <div className="neo absolute top-4 right-4 left-4 max-h-[min(88dvh,720px)] overflow-y-auto overscroll-contain rounded-[28px] p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="home-display text-[22px] text-maroon">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMobile}
                className="neo flex size-11 items-center justify-center rounded-full text-maroon"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) =>
                link.label === "Our Services" ? (
                  <div key={link.label}>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      className={`home-nav-link flex w-full items-center justify-between px-4 py-3 font-ui text-[15px] ${
                        isNavActive(pathname, link.href) ? "text-maroon" : "text-black"
                      }`}
                    >
                      Our Services
                      <span>{mobileServicesOpen ? "−" : "+"}</span>
                    </button>
                    {mobileServicesOpen && (
                      <div className="px-2 pb-3">
                        <ServicesMobileMenu onNavigate={closeMobile} />
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMobile}
                    className={`home-nav-link block px-4 py-3 font-ui text-[15px] ${
                      isNavActive(pathname, link.href) ? "text-maroon" : "text-black"
                    }`}
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  closeMobile();
                  openBook();
                }}
                className="neo-btn"
              >
                Book a consultation
              </button>
              <CallNowBtn className="!w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
