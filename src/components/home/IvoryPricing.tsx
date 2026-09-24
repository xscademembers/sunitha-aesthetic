"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CONSULTATION_FEE_INR,
  formatInr,
  formatPriceRange,
  PRICING_SECTIONS,
  type PricingSection,
} from "@/data/pricing";
import { FillImage } from "./FillImage";
import { IvoryCta, IvoryDisclaimer, IvoryShell } from "./IvoryShell";
import { useBook } from "./BookProvider";

type Currency = "INR" | "USD";

function PricingSectionCard({
  section,
  currency,
}: {
  section: PricingSection;
  currency: Currency;
}) {
  return (
    <article
      id={section.id}
      className="neo scroll-mt-28 rounded-[24px] p-5 sm:rounded-[36px] sm:p-8"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3 border-b border-black/10 pb-4">
        <div>
          <h3 className="home-display m-0 text-[clamp(22px,4vw,28px)] font-extralight tracking-[-0.02em] text-maroon">
            {section.title}
          </h3>
          <p className="mt-1.5 mb-0 font-ui text-[10px] uppercase tracking-[0.18em] text-black/45">
            {section.items.length} treatments
          </p>
        </div>
        <span className="font-ui text-[10px] uppercase tracking-[0.18em] text-black/45">
          {currency === "INR" ? "Cost in INR" : "Cost in USD"}
        </span>
      </div>

      <ul className="m-0 list-none p-0">
        {section.items.map((item) => (
          <li key={item.slug} className="border-b border-black/[0.06] last:border-0">
            <Link
              href={`/services/${item.slug}`}
              className="group flex items-center gap-3 py-3.5 transition-colors hover:text-maroon sm:gap-4"
            >
              <span className="neo-inset relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-[14px] sm:size-12">
                <Image
                  src={item.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="size-7 object-contain"
                />
              </span>
              <span className="min-w-0 flex-1">
                <span className="home-display block text-[15px] font-light leading-snug text-black group-hover:text-maroon sm:text-[16px]">
                  {item.title}
                </span>
                {item.note ? (
                  <span className="mt-1 block font-ui text-[11px] leading-[1.45] tracking-[0.04em] text-black/55">
                    {item.note}
                  </span>
                ) : null}
              </span>
              <span className="shrink-0 text-right font-ui text-[12px] tracking-[0.04em] text-black sm:text-[13px]">
                {formatPriceRange(item, currency)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

function QuoteCta() {
  const { openBook } = useBook();

  return (
    <section className="home-band-maroon py-12 lg:py-16">
      <div className="home-wrap home-on-maroon">
        <div className="max-w-[640px]">
          <div className="home-kicker mb-4 font-ui">How quotes work</div>
          <h2 className="home-display m-0 mb-4 text-[clamp(28px,5vw,44px)] font-extralight leading-[1.08] tracking-[-0.025em]">
            Your plan is confirmed in consultation.
          </h2>
          <p className="home-display m-0 mb-6 text-[16px] font-light leading-[1.7] text-pretty">
            The figures above are indicative ranges. After assessment, Dr. Sunita Ghanta shares
            a clear package for your case. We accept payments in Indian rupees via UPI, card and
            bank transfer at the clinic.
          </p>
          <button type="button" onClick={openBook} className="neo-btn sm:!w-auto">
            Book a consultation <span className="text-[15px]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function SectionJumpNav({
  sections,
  label,
  shortLabel,
}: {
  sections: PricingSection[];
  label: string;
  shortLabel: (section: PricingSection) => string;
}) {
  return (
    <nav className="flex flex-wrap gap-2" aria-label={label}>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="neo rounded-full px-3.5 py-2 font-ui text-[11px] uppercase tracking-[0.1em] text-black hover:text-maroon"
        >
          {shortLabel(section)}
        </a>
      ))}
    </nav>
  );
}

export function IvoryPricing() {
  const [currency, setCurrency] = useState<Currency>("INR");
  const surgical = PRICING_SECTIONS.filter((s) => s.kind === "surgical");
  const nonsurgical = PRICING_SECTIONS.filter((s) => s.kind === "nonsurgical");

  return (
    <IvoryShell>
      <main id="main-content">
        <section className="home-band-white py-6 sm:py-10 lg:py-14">
          <div className="home-wrap">
            <div className="neo overflow-hidden rounded-[24px] sm:rounded-[44px]">
              <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(240px,0.95fr)]">
                <div className="relative order-first aspect-[16/10] min-h-[180px] overflow-hidden bg-maroon sm:aspect-[16/9] sm:min-h-[220px] lg:order-last lg:aspect-auto lg:min-h-full">
                  <FillImage
                    src="/images/services/themes/svc-face-markings.webp"
                    alt="Aesthetic treatment planning at Dr Sunita Aesthetics"
                    priority
                    className="object-[center_18%]"
                  />
                </div>

                <div className="p-5 sm:p-8 lg:p-[52px]">
                  <div className="home-kicker mb-4 font-ui">Treatment pricing</div>
                  <h1 className="home-display mt-0 mb-5 max-w-[720px] text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em] text-black">
                    Clear ranges for every{" "}
                    <em className="italic text-maroon">service we offer.</em>
                  </h1>
                  <p className="home-display m-0 max-w-[640px] text-[16px] font-light leading-[1.7] text-pretty text-black sm:text-[17px]">
                    Cost matters when you are planning care. At Dr Sunita Aesthetics we keep pricing
                    transparent: each treatment shows a minimum–maximum range because every plan is
                    tailored to your anatomy, goals and clinical needs.
                  </p>
                  <p className="home-display mt-4 mb-0 max-w-[640px] text-[15px] font-light leading-[1.7] text-pretty text-black/80 sm:text-[16px]">
                    Surgical packages typically include hospital admission, OT charges, surgeon’s fee,
                    medicines during the stay, implants where required, and post-op consultations until
                    sutures are removed.
                  </p>
                  <p className="mt-5 font-ui text-[12px] uppercase tracking-[0.14em] text-maroon">
                    Consultation from {formatInr(CONSULTATION_FEE_INR)}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-black/10 pt-6">
                    <span className="font-ui text-[11px] uppercase tracking-[0.18em] text-black/50">
                      Show prices in
                    </span>
                    <div className="neo inline-flex rounded-full p-1">
                      {(["INR", "USD"] as const).map((code) => (
                        <button
                          key={code}
                          type="button"
                          onClick={() => setCurrency(code)}
                          className={`rounded-full px-4 py-2 font-ui text-[11px] uppercase tracking-[0.14em] transition-colors ${
                            currency === code
                              ? "bg-maroon text-white"
                              : "text-black hover:text-maroon"
                          }`}
                        >
                          {code}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-band-white pb-4 sm:pb-6">
          <div className="home-wrap">
            <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="home-kicker mb-3 font-ui">Surgical</div>
                <h2 className="home-display m-0 text-[clamp(28px,5vw,42px)] font-extralight leading-[1.08] tracking-[-0.025em] text-black">
                  Surgical procedures
                </h2>
              </div>
              <SectionJumpNav
                sections={surgical}
                label="Jump to surgical categories"
                shortLabel={(section) =>
                  section.title.replace(/ Surgery$/, "").replace(/ Cosmetic Surgery$/, "")
                }
              />
            </div>

            <div className="grid gap-5">
              {surgical.map((section) => (
                <PricingSectionCard key={section.id} section={section} currency={currency} />
              ))}
            </div>
          </div>
        </section>

        <section className="home-band-white py-10 sm:py-14 lg:py-16">
          <div className="home-wrap">
            <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="home-kicker mb-3 font-ui">Non-surgical</div>
                <h2 className="home-display m-0 text-[clamp(28px,5vw,42px)] font-extralight leading-[1.08] tracking-[-0.025em] text-black">
                  Aesthetic &amp; clinic treatments
                </h2>
              </div>
              <SectionJumpNav
                sections={nonsurgical}
                label="Jump to non-surgical categories"
                shortLabel={(section) =>
                  section.title.split(" &")[0].replace(/ Treatments$/, "").replace(/ Procedures$/, "")
                }
              />
            </div>

            <div className="grid gap-5">
              {nonsurgical.map((section) => (
                <PricingSectionCard key={section.id} section={section} currency={currency} />
              ))}
            </div>
          </div>
        </section>

        <QuoteCta />

        <IvoryCta
          kicker="Next step"
          title={
            <>
              Clarity before you{" "}
              <em className="italic text-maroon">decide.</em>
            </>
          }
          body="Book a consultation to understand what is right for you, what to expect, and exactly how your treatment journey will look."
        />
        <IvoryDisclaimer />
      </main>
    </IvoryShell>
  );
}
