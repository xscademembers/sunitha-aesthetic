"use client";

import { SocialLinks } from "@/components/SocialLinks";
import { WhatsappIcon } from "@/components/icons";
import {
  BOOK_LABEL,
  HOME_CONTACT,
  MAP_EMBED_SRC,
} from "@/data/homeContent";
import { CONTACT } from "@/types/content";
import { BookForm } from "./BookForm";
import { BookModal } from "./BookModal";
import { BookProvider, useBook } from "./BookProvider";
import { HomeNav } from "./HomeNav";
import { IvoryFooter } from "./IvoryFooter";
import "./home.css";

const WHATSAPP_HREF = `https://wa.me/${CONTACT.phoneHref.replace(/\D/g, "")}`;
const MAPS_DIRECTIONS_HREF =
  "https://www.google.com/maps/search/?api=1&query=Dr+Sunita+Aesthetics+Seethammadara+Visakhapatnam";

const INFO_CARDS = [
  { label: "Phone", value: HOME_CONTACT.phone, href: HOME_CONTACT.phoneHref },
  { label: "Email", value: HOME_CONTACT.email, href: `mailto:${HOME_CONTACT.email}` },
  { label: "Clinic hours", value: `${HOME_CONTACT.hours}\n${HOME_CONTACT.sunday}` },
  { label: "Address", value: HOME_CONTACT.address, href: MAPS_DIRECTIONS_HREF },
] as const;

export function IvoryContact() {
  return (
    <BookProvider>
      <div className="home-ivory font-ui min-h-full">
        <ContactPageInner />
        <BookModal />
      </div>
    </BookProvider>
  );
}

function ContactPageInner() {
  const { openBook } = useBook();

  return (
    <>
      <HomeNav />
      <main id="main-content">
        <section className="home-band-white py-6 sm:py-10 lg:py-16">
          <div className="home-wrap">
            <div className="grid items-start gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
              <div>
                <div className="home-kicker mb-4 font-ui">Clinic details</div>
                <h1 className="home-display mt-0 mb-6 text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em] text-black">
                  How to <em className="italic text-maroon">reach us.</em>
                </h1>
                <div className="grid gap-4 sm:grid-cols-2">
                  {INFO_CARDS.map((card) => {
                    const content = (
                      <>
                        <div className="mb-3 font-ui text-[10px] uppercase tracking-[0.22em] text-maroon">
                          {card.label}
                        </div>
                        <p className="home-display m-0 whitespace-pre-line text-[16px] font-light leading-[1.55] text-black">
                          {card.value}
                        </p>
                      </>
                    );
                    const className = "neo neo-press block rounded-[22px] p-5 sm:rounded-[26px] sm:p-[26px]";
                    return "href" in card && card.href ? (
                      <a key={card.label} href={card.href} className={className}>
                        {content}
                      </a>
                    ) : (
                      <div key={card.label} className={className}>
                        {content}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn sm:!w-auto"
                  >
                    <WhatsappIcon className="size-4" />
                    WhatsApp
                  </a>
                  <SocialLinks
                    itemClassName="neo neo-press flex size-[38px] items-center justify-center rounded-full text-maroon"
                  />
                </div>
              </div>

              <div className="neo rounded-[24px] p-5 sm:rounded-[40px] sm:p-8 lg:p-10">
                <BookForm />
              </div>
            </div>
          </div>
        </section>

        <section className="home-band-maroon py-12 lg:py-20">
          <div className="home-wrap">
            <div className="home-on-maroon mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
              <div>
                <div className="home-kicker mb-3 font-ui sm:mb-4">Find the clinic</div>
                <h2 className="home-display m-0 text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em]">
                  Seethammadara, Visakhapatnam
                </h2>
              </div>
              <a
                href={MAPS_DIRECTIONS_HREF}
                target="_blank"
                rel="noreferrer"
                className="home-text-link self-start font-ui text-[12px] uppercase tracking-[0.12em]"
              >
                Open in Google Maps
              </a>
            </div>
            <div className="neo overflow-hidden rounded-[28px] sm:rounded-[36px]">
              <div className="relative h-[320px] lg:h-[460px]">
                <iframe
                  title="Dr Sunita Aesthetics location"
                  src={MAP_EMBED_SRC}
                  className="h-full w-full border-0 grayscale"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 max-w-full rounded-tr-[24px] bg-maroon p-5 sm:w-[340px] sm:p-6">
                  <p className="font-ui text-[10px] uppercase tracking-[0.22em] text-white/75">Visit us</p>
                  <p className="home-display mt-2 mb-0 text-[16px] font-light leading-[1.55] text-white">
                    {CONTACT.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-band-white py-16 lg:py-24">
          <div className="home-wrap text-center">
            <div className="home-kicker mx-auto mb-5 font-ui sm:mb-6">A conversation is the first step</div>
            <h2 className="home-display mx-auto mb-5 max-w-[620px] text-[clamp(32px,7vw,64px)] font-extralight leading-[1.06] tracking-[-0.03em] text-black sm:mb-[22px]">
              Prefer to book <em className="italic text-maroon">right now?</em>
            </h2>
            <p className="home-display mx-auto mb-8 max-w-[440px] text-[17px] font-light leading-[1.65] text-pretty text-black sm:mb-[34px]">
              Use the form above, or open a quick appointment request and the clinic will confirm a time.
            </p>
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap sm:gap-6">
              <button type="button" onClick={openBook} className="neo-btn sm:!w-auto">
                {BOOK_LABEL} <span className="text-[15px]">→</span>
              </button>
              <a
                href={HOME_CONTACT.phoneHref}
                className="home-text-link font-ui text-[13px] uppercase tracking-[0.1em] text-black"
              >
                Call the clinic
              </a>
            </div>
          </div>
        </section>
      </main>
      <IvoryFooter />
    </>
  );
}
