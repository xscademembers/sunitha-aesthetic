"use client";

import Link from "next/link";
import { BOOK_LABEL } from "@/data/homeContent";
import { useBook } from "./BookProvider";
import { IvoryShell } from "./IvoryShell";

export function IvoryNotFound() {
  return (
    <IvoryShell>
      <NotFoundInner />
    </IvoryShell>
  );
}

function NotFoundInner() {
  const { openBook } = useBook();

  return (
    <main id="main-content">
      <div className="home-band-white">
        <div className="home-wrap pt-3 pb-16 sm:pt-4 sm:pb-20 lg:pt-6 lg:pb-24">
          <section className="neo rounded-[24px] px-5 py-14 text-center sm:rounded-[40px] sm:px-10 sm:py-20 lg:px-16">
            <div className="home-kicker mx-auto mb-5 font-ui">Page not found</div>
            <h1 className="home-display mx-auto mb-5 max-w-[640px] text-[clamp(36px,7vw,72px)] font-extralight leading-[0.96] tracking-[-0.03em] text-black">
              This page is <em className="italic text-maroon">no longer here.</em>
            </h1>
            <p className="home-display mx-auto mb-8 max-w-[460px] text-[16px] font-light leading-[1.65] text-pretty text-black sm:text-[18px]">
              The link may be outdated. Return to the clinic homepage, or book a private
              consultation with Dr. Sunita Ghanta.
            </p>
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap sm:gap-6">
              <Link href="/" className="neo-btn sm:!w-auto">
                Back to home
              </Link>
              <button type="button" onClick={openBook} className="neo-btn neo-btn-solid sm:!w-auto">
                {BOOK_LABEL} <span className="text-[15px]">→</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
