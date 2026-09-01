"use client";

import { useEffect, useState } from "react";
import { GetAppointmentButton } from "@/components/BrandButtons";
import { BrandLogo } from "@/components/BrandLogo";
import { HomeDropdown, HomeMobileLinks } from "@/components/HomeDropdown";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "@/components/icons";
import { ServicesMegaMenu, ServicesMobileMenu } from "@/components/ServicesMegaMenu";

const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/#treatments" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact Us", href: "/#contact" },
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
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileHomeOpen(false);
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
      <header className="sticky top-0 z-50 flex h-[72px] items-center justify-between border-b border-black/5 bg-white px-6 shadow-[0_6px_20px_-12px_rgba(0,0,0,0.15)] lg:px-[88px]">
        <BrandLogo />
        <nav className="hidden flex-1 items-center justify-evenly px-7 xl:px-12 lg:flex" aria-label="Main">
          <HomeDropdown />
          {NAV_LINKS.map((l) =>
            l.label === "Our Services" ? (
              <ServicesMegaMenu key={l.label} />
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="rounded-full px-3 py-2 font-sans text-[15px] text-black transition-colors duration-200 hover:bg-maroon/10 xl:px-4 xl:text-[16px]"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>
        <div className="hidden lg:block">
          <GetAppointmentButton size="nav" />
        </div>
        <button
          type="button"
          aria-label="Menu"
          onClick={() => setMenuOpen(true)}
          className="flex size-[45px] items-center justify-center rounded-[12px] border border-transparent bg-black text-white transition-colors hover:border-black hover:bg-white hover:text-black lg:hidden"
        >
          <MenuIcon className="size-5" />
        </button>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex h-[100dvh] flex-col overflow-hidden bg-white lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex shrink-0 items-center justify-between border-b border-black/[0.07] px-5 py-4">
            <div>
              <p className="font-serif text-[24px] leading-tight text-black">Navigation</p>
              <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.16em] text-maroon">
                Dr. Sunita Aesthetics
              </p>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMobileMenu}
              className="flex size-11 items-center justify-center rounded-[12px] border border-black/10 text-black transition-colors hover:bg-maroon/10"
            >
              <CloseIcon className="size-[20px]" />
            </button>
          </div>

          <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5" aria-label="Mobile">
            <div className="mx-auto w-full max-w-[460px]">
              <ul className="space-y-1">
                <li>
                  <button
                    type="button"
                    aria-expanded={mobileHomeOpen}
                    aria-controls="mobile-home-tree"
                    onClick={() => setMobileHomeOpen(!mobileHomeOpen)}
                    className="flex min-h-12 w-full items-center gap-2.5 rounded-[11px] px-2 text-left font-sans text-[16px] font-medium text-black transition-colors hover:bg-maroon/10"
                  >
                    <ChevronDownIcon
                      className={`size-2.5 shrink-0 -rotate-90 transition-transform duration-200 ${mobileHomeOpen ? "rotate-0" : ""}`}
                    />
                    <MobileFolderIcon open={mobileHomeOpen} className="size-5 shrink-0 text-maroon" />
                    <span>Home</span>
                  </button>
                  {mobileHomeOpen && (
                    <div id="mobile-home-tree" className="ml-[19px] border-l border-maroon/20 pb-3 pl-[17px] pt-1">
                      <HomeMobileLinks onNavigate={closeMobileMenu} />
                    </div>
                  )}
                </li>
                {NAV_LINKS.map((link) =>
                  link.label === "Our Services" ? (
                    <li key={link.label}>
                      <button
                        type="button"
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services-tree"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex min-h-12 w-full items-center gap-2.5 rounded-[11px] px-2 text-left font-sans text-[16px] font-medium text-black transition-colors hover:bg-maroon/10"
                      >
                        <ChevronDownIcon
                          className={`size-2.5 shrink-0 -rotate-90 transition-transform duration-200 ${mobileServicesOpen ? "rotate-0" : ""}`}
                        />
                        <MobileFolderIcon
                          open={mobileServicesOpen}
                          className="size-5 shrink-0 text-maroon"
                        />
                        <span>{link.label}</span>
                      </button>

                      {mobileServicesOpen && (
                        <div
                          id="mobile-services-tree"
                          className="ml-[19px] border-l border-maroon/20 pb-3 pl-[17px] pt-1"
                        >
                          <ServicesMobileMenu onNavigate={closeMobileMenu} />
                        </div>
                      )}
                    </li>
                  ) : (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={closeMobileMenu}
                        className="flex min-h-12 items-center gap-2.5 rounded-[11px] px-2 pl-[22px] font-sans text-[16px] text-black/80 transition-colors hover:bg-maroon/10 hover:text-maroon"
                      >
                        <MobileFileIcon className="size-[18px] shrink-0 text-maroon/65" />
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ),
                )}
              </ul>

              <div className="mt-7 border-t border-black/[0.07] pt-6" onClick={closeMobileMenu}>
                <GetAppointmentButton className="w-full" />
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
