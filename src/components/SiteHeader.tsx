"use client";

import { useEffect, useState } from "react";
import { GetAppointmentButton } from "@/components/BrandButtons";
import { BrandLogo } from "@/components/BrandLogo";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "@/components/icons";
import { ServicesMegaMenu, ServicesMobileMenu } from "@/components/ServicesMegaMenu";
import "@/components/home/home.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/#treatments" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact" },
] as const;

function MobileFolderIcon({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {open ? (
        <path d="M3.5 7.5h6l2-2h3l2 2h4a1.5 1.5 0 0 1 1.4 2l-2.1 8a1.5 1.5 0 0 1-1.45 1.1H5.65a1.5 1.5 0 0 1-1.45-1.1l-2.1-8a1.5 1.5 0 0 1 1.4-2Z" />
      ) : (
        <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h5l2 2h8A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1 1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z" />
      )}
    </svg>
  );
}

function MobileFileIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M6.5 3.5h7l4 4v13h-11v-17Z" />
      <path d="M13.5 3.5v4h4" />
    </svg>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-maroon focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 bg-white py-3 lg:py-[18px]">
        <div className="home-wrap">
          <div className="neo flex items-center gap-3 rounded-full py-2 pr-2 pl-4 sm:gap-4 sm:py-2.5 sm:pr-3 sm:pl-5">
            <BrandLogo />

            <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0 lg:flex" aria-label="Main">
              {NAV_LINKS.map((l) =>
                l.label === "Our Services" ? (
                  <ServicesMegaMenu
                    key={l.label}
                    triggerClassName="home-nav-link px-2.5 py-2 font-ui text-[12px] uppercase tracking-[0.08em] hover:bg-transparent xl:px-3 xl:text-[13px]"
                  />
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    className="home-nav-link px-2.5 py-2 font-ui text-[12px] uppercase tracking-[0.08em] text-black xl:px-3 xl:text-[13px]"
                  >
                    {l.label}
                  </a>
                ),
              )}
            </nav>

            <div className="ml-auto flex shrink-0 items-center gap-2">
              <div className="hidden lg:block">
                <GetAppointmentButton size="nav" className="!rounded-full" />
              </div>
              <button
                type="button"
                aria-label="Menu"
                onClick={() => setMenuOpen(true)}
                className="neo flex size-9 items-center justify-center rounded-full text-maroon sm:size-10 lg:hidden"
              >
                <MenuIcon className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button type="button" className="absolute inset-0 bg-black/30" aria-label="Close menu" onClick={closeMobileMenu} />
          <div className="neo absolute top-4 right-4 left-4 max-h-[min(88dvh,720px)] overflow-y-auto rounded-[28px] p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="home-display text-[22px] text-maroon">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMobileMenu}
                className="neo flex size-9 items-center justify-center rounded-full text-maroon"
              >
                <CloseIcon className="size-[18px]" />
              </button>
            </div>
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV_LINKS.map((link) =>
                link.label === "Our Services" ? (
                  <div key={link.label}>
                    <button
                      type="button"
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services-tree"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="home-nav-link flex w-full items-center justify-between px-4 py-3 font-ui text-[15px] text-black"
                    >
                      <span className="flex items-center gap-2.5">
                        <MobileFolderIcon open={mobileServicesOpen} className="size-5 shrink-0 text-maroon" />
                        Our Services
                      </span>
                      <ChevronDownIcon
                        className={`size-2.5 shrink-0 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div id="mobile-services-tree" className="px-2 pb-3">
                        <ServicesMobileMenu onNavigate={closeMobileMenu} />
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="home-nav-link flex items-center gap-2.5 px-4 py-3 font-ui text-[15px] text-black"
                  >
                    <MobileFileIcon className="size-[18px] shrink-0 text-maroon/65" />
                    {link.label}
                  </a>
                ),
              )}
            </nav>
            <div className="mt-5" onClick={closeMobileMenu}>
              <GetAppointmentButton className="w-full !rounded-full" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
