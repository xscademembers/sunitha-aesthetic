import Link from "next/link";
import { CallNowButton, GetAppointmentButton } from "@/components/BrandButtons";
import { QuoteIcon, StarIcon } from "@/components/icons";
import type { ServiceData } from "@/data/services";
import { getCatalogItem } from "@/data/serviceCatalog";

function CheckBadge() {
  return (
    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-maroon">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
        <path d="M5 12.5l4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}

/* ---------- Hero: eyebrow, H1 "{title} in Visakhapatnam", description, video, quick facts ---------- */

export function ServiceHero({ service }: { service: ServiceData }) {
  return (
    <section className="bg-gradient-to-b from-cream to-white">
      <div className="grid items-center gap-12 px-6 pt-[56px] lg:grid-cols-2 lg:gap-16 lg:px-[88px] lg:pt-[72px]">
        <div>
          <nav aria-label="Breadcrumb" className="font-sans text-[14px] text-gray-text">
            <Link href="/" className="transition-colors hover:text-maroon">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-maroon">{service.title}</span>
          </nav>
          <p className="mt-6 font-sans text-[18px] font-bold leading-[25.2px] text-maroon">
            {service.category}
          </p>
          <h1 className="mt-2 max-w-[560px] font-serif text-[32px] leading-[1.3] text-black lg:text-[42px]">
            {service.title} in Visakhapatnam
          </h1>
          <p className="mt-6 max-w-[540px] font-sans text-[18px] leading-[32.4px] text-black">
            {service.heroDescription}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-[26px]">
            <GetAppointmentButton className="w-full sm:w-[203px]" />
            <CallNowButton />
          </div>
          <p className="mt-7 font-sans text-[15px] font-medium text-gray-text">
            Board Certified Plastic Surgeon&ensp;·&ensp;17+ Years of Practice&ensp;·&ensp;2,750+
            Surgeries
          </p>
        </div>

        <div className="w-full">
          <div
            className={`mx-auto w-full overflow-hidden rounded-[24px] bg-black shadow-[0_32px_64px_-28px_rgba(161,83,78,0.55)] ${service.youtubeVideoId ? "max-w-[640px]" : "max-w-[360px]"}`}
          >
            {service.youtubeVideoId ? (
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube-nocookie.com/embed/${service.youtubeVideoId}?rel=0`}
                title={`${service.title} patient documentary with Dr. Sunita Ghanta`}
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <video
                controls
                playsInline
                preload="metadata"
                poster={service.videoPoster}
                src={service.videoSrc}
                className="aspect-[9/16] w-full bg-black object-cover"
              />
            )}
            <div className="flex items-center gap-3 bg-maroon px-5 py-4">
              <QuoteIcon aria-hidden className="size-6 shrink-0 text-white/40" />
              <p className="font-sans text-[15px] font-medium leading-snug text-white">
                Dr. Sunita Ghanta explains {service.title} — what it involves, who it helps, and
                what to expect.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick facts belt */}
      <div className="px-6 pb-[64px] pt-[56px] lg:px-[72px]">
        <div className="mx-auto grid max-w-[1296px] grid-cols-2 items-center rounded-[28px] bg-maroon py-6 shadow-[0_20px_40px_-20px_rgba(161,83,78,0.45)] lg:h-[160px] lg:grid-cols-4 lg:py-0">
          {service.facts.map((f, i) => (
            <div
              key={f.label}
              className={
                "flex h-full flex-col items-center justify-center py-4 text-center lg:py-0" +
                (i > 0 ? " border-l border-white/25" : "")
              }
            >
              <p className="px-2 font-sans text-[14px] font-bold leading-tight text-white/80 lg:text-[16px]">
                {f.label}
              </p>
              <p className="mt-2 font-serif text-[24px] leading-tight text-light-text lg:text-[30px]">
                {f.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Key Benefits ---------- */

export function KeyBenefits({ service }: { service: ServiceData }) {
  return (
    <section className="bg-white px-6 py-[64px] lg:px-[72px]">
      <p className="text-center font-sans text-[18px] font-bold leading-[25.2px] text-maroon">
        Why patients choose this procedure
      </p>
      <h2 className="mt-1 text-center font-serif text-[28px] leading-[1.4] text-black lg:text-[32px] lg:leading-[44.8px]">
        Key Benefits
      </h2>
      <p className="mx-auto mt-4 max-w-[640px] text-center font-sans text-[17px] leading-[28px] text-gray-text">
        Discover how this procedure can transform your appearance while keeping results natural.
      </p>
      <div className="mx-auto mt-12 grid max-w-[1200px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {service.benefits.map((b) => (
          <div
            key={b.title}
            className="card-lift rounded-[20px] border border-black/5 bg-white p-8 shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-cream">
              <StarIcon className="size-6 text-maroon" />
            </div>
            <h3 className="mt-6 font-marcellus text-[21px] leading-[30px] text-black">{b.title}</h3>
            <p className="mt-3 font-sans text-[15px] leading-[24px] text-gray-text">
              {b.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Who is it for ---------- */

export function WhoIsItFor({ service }: { service: ServiceData }) {
  return (
    <section className="bg-belt px-6 py-[72px] lg:px-[72px]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="font-sans text-[18px] font-bold leading-[25.2px] text-maroon">
            Are you a candidate?
          </p>
          <h2 className="mt-1 font-serif text-[28px] leading-[1.4] text-black lg:text-[32px] lg:leading-[44.8px]">
            Who is it for?
          </h2>
          <p className="mt-5 max-w-[480px] font-sans text-[17px] leading-[28px] text-black">
            {service.title} may be right for you if the points here sound familiar. Candidacy is
            always confirmed in person — every plan starts with an honest, one-on-one assessment
            with Dr. Sunita.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <GetAppointmentButton className="w-full sm:w-[203px]" />
            <CallNowButton />
          </div>
        </div>
        <ul className="rounded-[24px] bg-white p-8 shadow-[0_1px_20px_rgba(0,0,0,0.06)] lg:p-10">
          {service.whoIsItFor.map((item, i) => (
            <li
              key={item}
              className={
                "flex items-start gap-4 py-4" +
                (i > 0 ? " border-t border-black/[0.06]" : "")
              }
            >
              <CheckBadge />
              <span className="font-sans text-[16px] leading-[26px] text-black">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- What to Expect (journey steps) ---------- */

export function WhatToExpect({ service }: { service: ServiceData }) {
  return (
    <section className="bg-white px-6 py-[72px] lg:px-[72px]">
      <p className="text-center font-sans text-[18px] font-bold leading-[25.2px] text-maroon">
        Your journey, step by step
      </p>
      <h2 className="mt-1 text-center font-serif text-[28px] leading-[1.4] text-black lg:text-[32px] lg:leading-[44.8px]">
        What to Expect
      </h2>
      <div className="mx-auto mt-14 grid max-w-[1240px] gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {service.steps.map((s, i) => (
          <div key={s.title} className="text-center lg:text-left">
            <p className="font-serif text-[40px] leading-none text-maroon/30">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 font-marcellus text-[19px] leading-[26px] text-black">{s.title}</h3>
            <p className="mt-2 font-sans text-[14px] leading-[22px] text-gray-text">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Before & After ---------- */

function BeforeAfterPlaceholder() {
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br from-cream to-belt">
      <p className="font-serif text-[18px] text-maroon/40">Photo coming soon</p>
    </div>
  );
}

function BeforeAfterSplitPanel({ label, src }: { label: "Before" | "After"; src?: string }) {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={label} className="h-full w-full object-cover" />
      ) : (
        <BeforeAfterPlaceholder />
      )}
      <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 font-sans text-[12px] font-bold uppercase tracking-wide text-white">
        {label}
      </span>
    </div>
  );
}

export function BeforeAfterGallery({ service }: { service: ServiceData }) {
  return (
    <section className="bg-white px-6 pb-[72px] lg:px-[72px]">
      <p className="text-center font-sans text-[18px] font-bold leading-[25.2px] text-maroon">
        Real patient transformations
      </p>
      <h2 className="mt-1 text-center font-serif text-[28px] leading-[1.4] text-black lg:text-[32px] lg:leading-[44.8px]">
        {service.title} — Before &amp; After
      </h2>
      <p className="mx-auto mt-4 max-w-[640px] text-center font-sans text-[17px] leading-[28px] text-gray-text">
        Witness the artistry and precision of Dr. Sunita Ghanta&rsquo;s work through real patient
        results.
      </p>
      <div className="mx-auto mt-12 grid max-w-[1200px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {service.beforeAfter.map((c, index) => (
          <figure
            key={`${c.label}-${index}`}
            className="overflow-hidden rounded-[20px] border border-black/5 shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          >
            {c.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={c.image}
                alt={`${service.title} before and after — ${c.label}`}
                className="aspect-[4/3] w-full object-contain"
              />
            ) : c.before || c.after ? (
              <div className="grid grid-cols-2 gap-px bg-black/10">
                <BeforeAfterSplitPanel label="Before" src={c.before} />
                <BeforeAfterSplitPanel label="After" src={c.after} />
              </div>
            ) : (
              <BeforeAfterPlaceholder />
            )}
          </figure>
        ))}
      </div>
      <p className="mt-8 text-center font-sans text-[13px] italic text-gray-text">
        Results vary from patient to patient. More before &amp; after photos are shared during your
        consultation.
      </p>
    </section>
  );
}

/* ---------- Google Reviews (legacy layout; IvoryService is the live path) ---------- */

export function PatientStories({ service }: { service: ServiceData }) {
  return (
    <section className="bg-belt px-6 py-[72px] lg:px-[72px]">
      <p className="text-center font-sans text-[18px] font-bold leading-[25.2px] text-maroon">
        In their own words
      </p>
      <h2 className="mt-1 text-center font-serif text-[28px] leading-[1.4] text-black lg:text-[32px] lg:leading-[44.8px]">
        Google Reviews
      </h2>
      <div className="mx-auto mt-12 grid max-w-[1200px] gap-6 lg:grid-cols-3">
        {service.stories.map((s) => (
          <div
            key={s.name}
            className="card-lift flex flex-col rounded-[20px] bg-white p-8 shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          >
            <QuoteIcon className="size-9 text-maroon/25" />
            <p className="mt-4 flex-1 font-sans text-[16px] leading-[27px] text-black">
              {s.quote}
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-black/[0.06] pt-5">
              <div>
                <p className="font-marcellus text-[17px] text-black">{s.name}</p>
                <p className="font-sans text-[13px] text-gray-text">{s.city}</p>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-[18px] text-maroon" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- FAQs (native <details> — no JS) ---------- */

export function ServiceFAQs({ service }: { service: ServiceData }) {
  return (
    <section className="bg-white px-6 py-[72px]">
      <p className="text-center font-sans text-[18px] font-bold leading-[25.2px] text-maroon">
        Good to know
      </p>
      <h2 className="mt-1 text-center font-serif text-[28px] leading-[1.4] text-black lg:text-[32px] lg:leading-[44.8px]">
        Frequently Asked Questions
      </h2>
      <div className="mx-auto mt-12 max-w-[860px]">
        {service.faqs.map((f) => (
          <details key={f.question} className="group border-b border-black/10">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-marcellus text-[18px] leading-[26px] text-black transition-colors hover:text-maroon [&::-webkit-details-marker]:hidden">
              {f.question}
              <span
                aria-hidden
                className="flex size-8 shrink-0 items-center justify-center rounded-full border border-maroon/30 text-[20px] font-light text-maroon transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="pb-6 pr-14 font-sans text-[16px] leading-[27px] text-gray-text">
              {f.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ---------- Related procedures in the same category ---------- */

export function RelatedServices({ service }: { service: ServiceData }) {
  const current = getCatalogItem(service.slug);
  const related = current?.category.items.filter((item) => item.slug !== service.slug) ?? [];
  if (!related.length) return null;

  return (
    <section className="bg-belt px-6 py-[72px] lg:px-[72px]">
      <p className="text-center font-sans text-[18px] font-bold leading-[25.2px] text-maroon">
        {current?.category.title}
      </p>
      <h2 className="mt-1 text-center font-serif text-[28px] leading-[1.4] text-black lg:text-[32px] lg:leading-[44.8px]">
        Related Procedures
      </h2>
      <ul className="mx-auto mt-10 grid max-w-[1100px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/services/${item.slug}`}
              className="flex min-h-[72px] items-center rounded-[16px] border border-maroon/10 bg-white px-5 py-4 font-sans text-[15px] font-medium text-black/80 shadow-[0_8px_24px_-16px_rgba(161,83,78,0.35)] transition-all hover:-translate-y-0.5 hover:text-maroon hover:shadow-[0_16px_28px_-18px_rgba(161,83,78,0.45)]"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Final CTA banner ---------- */

export function FinalCTA({ service }: { service: ServiceData }) {
  return (
    <section className="bg-white px-6 pb-[80px] lg:px-[72px]">
      <div className="mx-auto max-w-[1296px] rounded-[28px] bg-maroon px-8 py-14 text-center shadow-[0_20px_40px_-20px_rgba(161,83,78,0.45)] lg:px-16">
        <h2 className="font-serif text-[28px] leading-[1.4] text-white lg:text-[34px]">
          Ready to Begin Your Transformation?
        </h2>
        <p className="mx-auto mt-4 max-w-[620px] font-sans text-[17px] leading-[28px] text-light-text">
          Schedule a personalised consultation with Dr. Sunita Ghanta to discuss your{" "}
          {service.title.toLowerCase()} goals — honestly, privately, and with no pressure.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-[26px]">
          <GetAppointmentButton className="w-full border-white bg-white text-maroon-hover-text hover:border-white hover:bg-white/90 sm:w-[203px]" />
          <CallNowButton />
        </div>
      </div>
    </section>
  );
}
