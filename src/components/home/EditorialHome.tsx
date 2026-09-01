"use client";

import Link from "next/link";
import {
  BOOK_LABEL,
  CLINIC_PHOTOS,
  HOME_CONTACT,
  HOME_IMAGES,
  HOME_REVIEWS,
  HOME_SOCIALS,
  HOME_STATS,
  HOME_VIDEOS,
  MAP_EMBED_SRC,
  NONSURGICAL_GROUPS,
  REVIEW_COUNT_LABEL,
  SURGICAL_GROUPS,
  VIDEO_PLAYLIST_URL,
} from "@/data/homeContent";
import { BookModal } from "./BookModal";
import { BookProvider, useBook } from "./BookProvider";
import { EditorialFaq } from "./EditorialFaq";
import { EditorialNav } from "./EditorialNav";
import { EditorialTreatments } from "./EditorialTreatments";
import { FillImage } from "./FillImage";
import "./home.css";
import "./home2.css";

export function EditorialHome() {
  return (
    <BookProvider>
      <div className="home-atelier min-h-full">
        <EditorialPage />
        <BookModal />
      </div>
    </BookProvider>
  );
}

function PlayMark({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "md" ? "size-14" : "size-10";
  const triangle = size === "md" ? "border-y-[8px] border-l-[13px]" : "border-y-[6px] border-l-[10px]";
  return (
    <span className={`pointer-events-none absolute top-1/2 left-1/2 flex ${box} -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-white bg-black/20`}>
      <span className={`ml-0.5 ${triangle} border-y-transparent border-l-white`} />
    </span>
  );
}

function EditorialPage() {
  const { openBook } = useBook();

  return (
    <>
      <EditorialNav />

      <section className="atelier-band-white">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:min-h-[min(86vh,800px)]">
          <div className="flex flex-col justify-center px-[max(20px,env(safe-area-inset-left))] py-10 sm:px-10 lg:px-[clamp(48px,6vw,88px)] lg:py-16">
            <div className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.26em] text-maroon">
              <span>01</span>
              <span className="h-px w-8 bg-maroon/50" />
              <span>Visakhapatnam · Est. 2009</span>
            </div>
            <h1 className="atelier-display mb-0 max-w-[560px] text-[clamp(40px,6.4vw,78px)] leading-[0.9] tracking-[-0.04em] text-black">
              The face you
              <br />
              already <em className="italic text-maroon">have.</em>
            </h1>
            <p className="mt-6 mb-0 max-w-[38ch] text-[16px] leading-[1.7] text-pretty text-black">
              Plastic, cosmetic and reconstructive surgery with Dr. Sunita. Seventeen years of work
              built on listening first and operating second.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <button type="button" onClick={openBook} className="atelier-btn sm:!w-auto">
                {BOOK_LABEL}
              </button>
              <a href="#treatments" className="atelier-text-link self-center text-[12px] font-medium uppercase tracking-[0.16em] text-black sm:self-auto">
                Browse the library
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-px bg-black/10 lg:hidden">
              {HOME_STATS.map((stat) => (
                <div key={stat.label} className="bg-white px-4 py-4">
                  <div className="atelier-display text-[28px] leading-none text-maroon">{stat.value}</div>
                  <div className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-black/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="atelier-media relative h-[min(78vw,520px)] lg:h-full lg:min-h-[min(86vh,800px)]">
            <FillImage src={HOME_IMAGES.hero} alt="Dr. Sunita Ghanta" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <span className="atelier-spine absolute top-1/2 left-5 hidden -translate-y-1/2 lg:block">
              Sunita Aesthetics · Visakhapatnam
            </span>
            <div className="absolute inset-x-0 bottom-0 hidden grid-cols-4 border-t border-white/15 bg-[#A1534E]/92 text-white lg:grid">
              {HOME_STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-5 py-5 xl:px-6 ${index > 0 ? "border-l border-white/20" : ""}`}
                >
                  <div className="atelier-display text-[28px] leading-none xl:text-[32px]">{stat.value}</div>
                  <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="atelier-band-white py-10 lg:py-14">
        <div id="surgeon" className="atelier-wrap grid items-center gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="relative max-w-[420px]">
            <div className="atelier-media relative h-[min(82vw,420px)] overflow-hidden sm:h-[340px] lg:h-[420px]">
              <FillImage src={HOME_IMAGES.surgeon} alt="Dr. Sunita Ghanta, plastic surgeon" />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-[#A1534E] px-5 py-3.5 text-white lg:inset-x-auto lg:left-0 lg:w-auto lg:min-w-[240px]">
              <div className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/75">Consultant plastic surgeon</div>
              <div className="atelier-display mt-0.5 text-[18px] leading-none">Dr. Sunita Ghanta</div>
            </div>
          </div>
          <div>
            <div className="atelier-kicker">Meet the surgeon</div>
            <h2 className="atelier-display mt-3 mb-0 text-[clamp(28px,4vw,44px)] leading-[1.02] tracking-[-0.03em] text-black">
              Precision, <em className="italic text-maroon">without theatre.</em>
            </h2>
            <ol className="mt-5 border-y border-black/10">
              {[
                { degree: "MBBS", label: "Medical foundation" },
                { degree: "DNB", label: "General surgery" },
                { degree: "MCh", label: "Plastic surgery" },
                { degree: "17+", label: "Years in practice" },
              ].map((item, index) => (
                <li key={item.degree} className="flex items-baseline justify-between gap-4 border-b border-black/10 py-2 last:border-b-0">
                  <span className="flex items-baseline gap-3">
                    <span className="w-6 text-[10px] tracking-[0.14em] text-maroon">{String(index + 1).padStart(2, "0")}</span>
                    <span className="atelier-display text-[18px]">{item.degree}</span>
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-black/55">{item.label}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 mb-0 max-w-[500px] text-[15px] leading-[1.7] text-pretty text-black">
              Consultant plastic surgeon practising across face, body and breast surgery, non-surgical
              aesthetics and reconstructive care. Every plan begins with an unhurried assessment and an
              honest account of what surgery can and cannot do.
            </p>
            <blockquote className="mt-5 border-l-2 border-maroon pl-4">
              <p className="atelier-display m-0 text-[18px] leading-[1.35] text-maroon italic sm:text-[20px]">
                “Every transformation begins with understanding.”
              </p>
            </blockquote>
            <div className="mt-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <button type="button" onClick={openBook} className="atelier-btn sm:!w-auto">
                Book with Dr. Sunita
              </button>
              <Link href="/about" className="atelier-text-link self-center text-[12px] font-medium uppercase tracking-[0.16em] text-black sm:self-auto">
                Read her full story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="clinic" className="atelier-band-maroon py-12 lg:py-16">
        <div className="atelier-wrap">
          <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.26em] text-white/80">
                <span>02</span>
                <span className="h-px w-8 bg-white/40" />
                <span>The clinic</span>
              </div>
              <h2 className="atelier-display m-0 text-[clamp(32px,5vw,52px)] leading-[1.02] tracking-[-0.03em]">
                What a visit <em className="italic">feels like.</em>
              </h2>
            </div>
            <p className="m-0 max-w-[340px] text-[15px] leading-[1.65] text-white/90">
              Quiet rooms, private entry, and time that is genuinely yours — from reception to recovery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-12 lg:grid-rows-2 lg:h-[560px] lg:gap-3">
            {CLINIC_PHOTOS.slice(0, 3).map((photo, index) => (
              <figure
                key={photo.src}
                className={[
                  "atelier-media relative m-0 overflow-hidden",
                  index === 0
                    ? "col-span-2 h-[240px] sm:h-[340px] lg:col-span-7 lg:row-span-2 lg:h-full"
                    : "h-[168px] sm:h-[220px] lg:col-span-5 lg:h-full",
                ].join(" ")}
              >
                <FillImage src={photo.src} alt={photo.alt} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-4 text-white sm:p-5">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em]">{photo.label}</span>
                  <span className="atelier-display text-[22px] leading-none sm:text-[26px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {CLINIC_PHOTOS.slice(3).map((photo, index) => (
              <figure key={photo.src} className="atelier-media relative m-0 h-[168px] overflow-hidden sm:h-[220px] lg:h-[240px]">
                <FillImage src={photo.src} alt={photo.alt} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-4 text-white sm:p-5">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em]">{photo.label}</span>
                  <span className="atelier-display text-[22px] leading-none">
                    {String(index + 4).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            ))}
            <div className="col-span-2 flex min-h-[180px] flex-col justify-between border border-white/30 bg-white/5 p-6 sm:min-h-[220px] lg:col-span-1 lg:min-h-[240px]">
              <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/70">Visit</div>
              <div>
                <p className="atelier-display m-0 text-[26px] leading-[1.12]">
                  Private from the first door.
                </p>
                <a href="#contact" className="atelier-text-link mt-4 inline-block text-[11px] font-medium uppercase tracking-[0.16em] text-white">
                  Find the clinic
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="services">
        <EditorialTreatments />
      </div>

      <section id="stories" className="atelier-band-maroon py-10 lg:py-14">
        <div className="atelier-wrap">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="atelier-kicker mb-2">Patient stories</div>
              <h2 className="atelier-display m-0 text-[clamp(28px,4vw,42px)] leading-[1.05] tracking-[-0.03em]">
                In their <em className="italic">own words.</em>
              </h2>
            </div>
            <a
              href={VIDEO_PLAYLIST_URL}
              target="_blank"
              rel="noreferrer"
              className="atelier-text-link self-start text-[11px] font-medium uppercase tracking-[0.18em] text-white"
            >
              Full playlist
            </a>
          </div>

          <div className="grid items-stretch gap-4 lg:grid-cols-[1.25fr_1fr]">
            <a
              href={`https://www.youtube.com/watch?v=${HOME_VIDEOS[0].videoId}`}
              target="_blank"
              rel="noreferrer"
              className="atelier-media relative block h-[min(68vw,360px)] overflow-hidden sm:h-[280px] lg:h-[360px]"
            >
              <FillImage src={HOME_VIDEOS[0].poster} alt={HOME_VIDEOS[0].title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              <PlayMark />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/80">{HOME_VIDEOS[0].meta}</div>
                <h3 className="atelier-display mt-1 mb-0 max-w-[420px] text-[22px] leading-[1.15] text-white sm:text-[26px]">
                  {HOME_VIDEOS[0].title}
                </h3>
              </div>
            </a>

            <div className="flex flex-col gap-4">
              {HOME_VIDEOS.slice(1).map((video) => (
                <a
                  key={video.videoId}
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="grid min-h-0 flex-1 grid-cols-1 overflow-hidden border border-white/20 sm:grid-cols-[160px_minmax(0,1fr)]"
                >
                  <div className="atelier-media relative h-[160px] sm:h-full sm:min-h-[140px]">
                    <FillImage src={video.poster} alt={video.title} />
                    <PlayMark size="sm" />
                  </div>
                  <div className="flex flex-col justify-center px-4 py-4 sm:px-5">
                    <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">{video.meta}</div>
                    <h3 className="atelier-display mt-1 mb-2 text-[18px] leading-[1.2]">{video.title}</h3>
                    <p className="mb-2 line-clamp-2 text-[13px] leading-[1.5] text-white/85">{video.summary}</p>
                    <span className="text-[11px] font-medium uppercase tracking-[0.14em]">Watch story →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="atelier-band-white py-10 lg:py-14">
        <div className="atelier-wrap">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="atelier-kicker mb-2">Reviews</div>
              <div className="flex items-end gap-4">
                <div className="atelier-display text-[clamp(44px,6vw,64px)] leading-none text-maroon">5.0</div>
                <div className="pb-1">
                  <div className="text-[13px] tracking-[0.24em] text-maroon">★★★★★</div>
                  <p className="mt-1 mb-0 text-[11px] uppercase tracking-[0.14em] text-black">{REVIEW_COUNT_LABEL}</p>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Dr%20Sunita%20Aesthetics%20Seethammadara%20Visakhapatnam"
              target="_blank"
              rel="noreferrer"
              className="atelier-btn sm:!w-auto"
            >
              Read more reviews
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {HOME_REVIEWS.map((review) => (
              <blockquote key={review.name} className="border border-black/10 p-5 sm:p-6">
                <p className="atelier-display m-0 text-[16px] leading-[1.5] text-pretty text-black sm:text-[17px]">
                  “{review.text}”
                </p>
                <footer className="mt-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-maroon">
                  {review.name} · {review.tag}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="atelier-band-maroon py-10 lg:py-14">
        <div className="atelier-wrap grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <div className="atelier-kicker mb-3">Before you begin</div>
            <h2 className="atelier-display mt-0 mb-4 text-[clamp(28px,4vw,42px)] leading-[1.05] tracking-[-0.03em]">
              Questions, <em className="italic">answered plainly.</em>
            </h2>
            <p className="mb-5 max-w-[320px] text-[14px] leading-[1.6] text-white/90">
              If something here is still unclear, ask it in your consultation — no question is too small.
            </p>
            <button type="button" onClick={openBook} className="atelier-btn atelier-btn-light sm:!w-auto">
              Ask in a consultation
            </button>
          </div>
          <EditorialFaq />
        </div>
      </section>

      <section className="atelier-band-white py-12 lg:py-16">
        <div className="atelier-wrap text-center">
          <div className="atelier-kicker mb-3">Private consultation</div>
          <h2 className="atelier-display mx-auto mb-4 max-w-[640px] text-[clamp(28px,4.5vw,48px)] leading-[1.05] tracking-[-0.03em] text-black">
            Let’s begin with a <em className="italic text-maroon">conversation.</em>
          </h2>
          <p className="mx-auto mb-6 max-w-[420px] text-[15px] leading-[1.6] text-black">
            One unhurried appointment, an honest assessment, and a written plan. Nothing is decided in
            the room.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button type="button" onClick={openBook} className="atelier-btn sm:!w-auto">
              {BOOK_LABEL}
            </button>
            <a href="#contact" className="atelier-text-link text-[12px] font-medium uppercase tracking-[0.16em] text-black">
              Contact the clinic
            </a>
          </div>
        </div>
      </section>

      <EditorialFooter />
    </>
  );
}

function EditorialFooter() {
  return (
    <footer id="contact" className="atelier-band-maroon pt-10 pb-[max(1.5rem,env(safe-area-inset-bottom))] lg:pt-14">
      <div className="atelier-wrap">
        <div className="grid grid-cols-1 gap-8 border-b border-white/20 pb-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="atelier-display text-[26px] leading-none">Sunita Aesthetics</div>
            <div className="mt-2 text-[9px] font-medium uppercase tracking-[0.28em] text-white/70">
              Plastic &amp; cosmetic surgery
            </div>
            <p className="mt-5 mb-6 max-w-[260px] text-[15px] leading-[1.7] text-white/90">
              Surgical and non-surgical aesthetic care led by Dr. Sunita — considered, private and
              unhurried.
            </p>
            <div className="flex gap-2">
              {HOME_SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex size-10 items-center justify-center border border-white/30 text-[11px] tracking-[0.08em] text-white transition-colors hover:bg-white hover:text-maroon"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/65">Quick links</div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home 1", href: "/" },
                { label: "Home 2", href: "/home-2" },
                { label: "About the clinic", href: "/about" },
                { label: "Dr. Sunita", href: "#surgeon" },
                { label: "Treatments", href: "#treatments" },
                { label: "Patient stories", href: "#stories" },
                { label: "FAQs", href: "#faqs" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="text-[14px] text-white hover:text-white/70">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/65">Surgical</div>
            <div className="flex flex-col gap-3">
              {SURGICAL_GROUPS.map((group) => (
                <a key={group.id} href={group.href} className="text-[14px] leading-[1.35] text-white hover:text-white/70">
                  {group.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/65">Non-surgical</div>
            <div className="flex flex-col gap-3">
              {NONSURGICAL_GROUPS.map((group) => (
                <a key={group.id} href={group.href} className="text-[14px] leading-[1.35] text-white hover:text-white/70">
                  {group.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/65">Visit &amp; contact</div>
            <div className="flex flex-col gap-2.5 border border-white/25 bg-white p-4 text-[14px] text-black">
              <a href={HOME_CONTACT.phoneHref} className="hover:text-maroon">
                {HOME_CONTACT.phone}
              </a>
              <a href={`mailto:${HOME_CONTACT.email}`} className="hover:text-maroon">
                {HOME_CONTACT.email}
              </a>
              <span className="leading-[1.55]">
                {HOME_CONTACT.addressLines[0]}
                <br />
                {HOME_CONTACT.addressLines[1]}
              </span>
              <span className="mt-1.5 text-[12px] leading-[1.6] tracking-[0.04em]">
                {HOME_CONTACT.hours}
                <br />
                {HOME_CONTACT.sunday}
              </span>
            </div>
            <div className="relative mt-4 h-[100px] overflow-hidden border border-white/25">
              <iframe title="Clinic map" src={MAP_EMBED_SRC} className="h-full w-full border-0 grayscale" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[12px] tracking-[0.04em] text-white/75">© 2026 Sunita Aesthetics. All rights reserved.</span>
          <div className="flex flex-wrap gap-6">
            <a href="#privacy" className="text-[12px] text-white hover:text-white/70">
              Privacy Policy
            </a>
            <a href="#terms" className="text-[12px] text-white hover:text-white/70">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
