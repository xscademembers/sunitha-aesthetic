"use client";

import type { ReactNode } from "react";
import { BOOK_LABEL, HOME_CONTACT } from "@/data/homeContent";
import { BookModal } from "./BookModal";
import { BookProvider, useBook } from "./BookProvider";
import { HomeNav } from "./HomeNav";
import { IvoryFooter } from "./IvoryFooter";
import "./home.css";

export function IvoryShell({ children }: { children: ReactNode }) {
  return (
    <BookProvider>
      <div className="home-ivory font-ui min-h-full">
        <HomeNav />
        {children}
        <IvoryFooter />
        <BookModal />
      </div>
    </BookProvider>
  );
}

export function IvoryDisclaimer() {
  return (
    <section className="home-band-white pb-14 sm:pb-16 lg:pb-20">
      <div className="home-wrap">
        <div className="neo rounded-[24px] px-5 py-8 text-center sm:rounded-[36px] sm:px-10 sm:py-12">
          <div className="home-kicker mx-auto mb-4 font-ui">Please note</div>
          <p className="home-display mx-auto m-0 max-w-[820px] text-[15px] font-light leading-[1.7] text-pretty text-black sm:text-[16px]">
            This website is a starting point for understanding treatment options and is not a
            substitute for an in-person consultation. Results vary from person to person. Always
            discuss suitability, risks and recovery with a qualified surgeon such as Dr. Sunita
            Ghanta before making a decision.
          </p>
        </div>
      </div>
    </section>
  );
}

export function IvoryCta({
  kicker,
  title,
  body,
  contactLabel = "Call the clinic",
}: {
  kicker: string;
  title: ReactNode;
  body: string;
  contactLabel?: string;
}) {
  const { openBook } = useBook();

  return (
    <section className="home-band-white py-14 sm:py-16 lg:py-24">
      <div className="home-wrap text-center">
        <div className="home-kicker mx-auto mb-5 font-ui sm:mb-6">{kicker}</div>
        <h2 className="home-display mx-auto mb-5 max-w-[620px] text-[clamp(32px,7vw,64px)] font-extralight leading-[1.06] tracking-[-0.03em] text-black sm:mb-[22px]">
          {title}
        </h2>
        <p className="home-display mx-auto mb-8 max-w-[440px] text-[16px] font-light leading-[1.65] text-pretty text-black sm:mb-[34px] sm:text-[17px]">
          {body}
        </p>
        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap sm:gap-6">
          <button type="button" onClick={openBook} className="neo-btn sm:!w-auto">
            {BOOK_LABEL} <span className="text-[15px]">→</span>
          </button>
          <a href={HOME_CONTACT.phoneHref} className="home-text-link font-ui text-[13px] uppercase tracking-[0.1em] text-black">
            {contactLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
