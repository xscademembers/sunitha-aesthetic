"use client";

import { BrandLogo } from "@/components/BrandLogo";
import { SocialLinks } from "@/components/SocialLinks";
import {
  BOOK_LABEL,
  HOME_CONTACT,
  HOME_COPY,
  MAP_EMBED_SRC,
  NONSURGICAL_GROUPS,
  SURGICAL_GROUPS,
} from "@/data/homeContent";
import { useBook } from "./BookProvider";

function homeHash(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

export function IvoryFooter() {
  const { openBook } = useBook();

  return (
    <footer className="home-band-maroon pt-12 pb-[max(2rem,env(safe-area-inset-bottom))] lg:pt-[76px] lg:pb-[34px]">
      <div className="home-wrap">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="inline-flex rounded-[16px] bg-white px-3 py-2">
              <BrandLogo className="h-[52px] w-[158px]" />
            </div>
            <p className="home-display mt-5 mb-6 max-w-[260px] text-[15px] font-light leading-[1.65] text-pretty text-white">
              {HOME_COPY.footerBlurb}
            </p>
            <SocialLinks
              itemClassName="neo neo-press flex size-[38px] items-center justify-center rounded-full text-maroon"
            />
          </div>
          <div>
            <h2 className="mb-5 font-ui text-[10px] uppercase tracking-[0.24em] text-white/70">Quick links</h2>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "About the clinic", href: "/about" },
                { label: "Case studies", href: "/case-studies" },
                { label: "Reviews", href: "/reviews" },
                { label: "Treatments", href: "/#treatments" },
                { label: "FAQs", href: "/#faqs" },
                { label: "Contact us", href: "/contact" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="font-ui text-[14px] text-white hover:text-white/70">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-5 font-ui text-[10px] uppercase tracking-[0.24em] text-white/70">Surgical</h2>
            <div className="flex flex-col gap-3">
              {SURGICAL_GROUPS.map((group) => (
                <a
                  key={group.id}
                  href={homeHash(group.href)}
                  className="font-ui text-[14px] leading-[1.3] text-white hover:text-white/70"
                >
                  {group.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-5 font-ui text-[10px] uppercase tracking-[0.24em] text-white/70">Non-surgical</h2>
            <div className="flex flex-col gap-3">
              {NONSURGICAL_GROUPS.map((group) => (
                <a
                  key={group.id}
                  href={homeHash(group.href)}
                  className="font-ui text-[14px] leading-[1.3] text-white hover:text-white/70"
                >
                  {group.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-5 font-ui text-[10px] uppercase tracking-[0.24em] text-white/70">Visit &amp; contact</h2>
            <div className="flex flex-col gap-2.5 rounded-[24px] bg-white p-4 font-ui text-[14px] text-black">
              <a href={HOME_CONTACT.phoneHref} className="hover:text-maroon">
                {HOME_CONTACT.phone}
              </a>
              <a href={`mailto:${HOME_CONTACT.email}`} className="hover:text-maroon">
                {HOME_CONTACT.email}
              </a>
              <span className="home-display text-[15px] font-light leading-[1.55]">
                {HOME_CONTACT.addressLines[0]}
                <br />
                {HOME_CONTACT.addressLines[1]}
              </span>
              <span className="mt-1.5 font-ui text-[12px] leading-[1.6] tracking-[0.06em]">
                {HOME_CONTACT.hours}
                <br />
                {HOME_CONTACT.sunday}
              </span>
              <button type="button" onClick={openBook} className="neo-btn mt-2 !h-auto !w-full px-4 py-3 text-[11px]">
                {BOOK_LABEL}
              </button>
            </div>
            <div className="relative mt-5 h-[120px] overflow-hidden rounded-[22px] bg-white">
              <iframe
                title="Map of Dr. Sunita Aesthetics in Seethammadara, Visakhapatnam"
                src={MAP_EMBED_SRC}
                className="h-full w-full border-0 grayscale"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/20 pt-6 sm:mt-11 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:pt-[22px]">
          <span className="font-ui text-[12px] tracking-[0.06em] text-white/80">
            © 2026 Sunita Aesthetics. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-6">
            <a href="#privacy" className="font-ui text-[12px] tracking-[0.06em] text-white hover:text-white/70">
              Privacy Policy
            </a>
            <a href="#terms" className="font-ui text-[12px] tracking-[0.06em] text-white hover:text-white/70">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
