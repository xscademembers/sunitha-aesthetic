"use client";

import Link from "next/link";
import {
  BOOK_LABEL,
  CLINIC_PHOTOS,
  HOME_COPY,
  HOME_IMAGES,
  HOME_STATS,
  SURGEON_CREDENTIALS,
} from "@/data/homeContent";
import { FillImage } from "./FillImage";
import { IvoryCta, IvoryShell } from "./IvoryShell";
import { useBook } from "./BookProvider";

const EXPERTISE = [
  {
    number: "01",
    title: "Facial surgery",
    description: "Rhinoplasty, eyelid surgery, facial rejuvenation and profile-balancing procedures.",
    href: "/#face-surgery",
  },
  {
    number: "02",
    title: "Body contouring",
    description: "Liposuction, tummy tuck, mommy makeover and personalised body-sculpting plans.",
    href: "/#body-contouring-surgery",
  },
  {
    number: "03",
    title: "Breast surgery",
    description: "Breast augmentation, reduction, lift, asymmetry correction and revision surgery.",
    href: "/#breast-surgery",
  },
  {
    number: "04",
    title: "Non-surgical aesthetics",
    description: "Injectables, energy-based treatments and minimally invasive facial rejuvenation.",
    href: "/#injectables",
  },
  {
    number: "05",
    title: "Laser and skin treatments",
    description: "Treatment plans for pigmentation, texture, unwanted hair and skin renewal.",
    href: "/#laser-treatments",
  },
  {
    number: "06",
    title: "Reconstructive surgery",
    description: "Scar revision, cleft care and reconstruction following trauma or previous surgery.",
    href: "/#reconstructive-surgery",
  },
] as const;

const VALUES = [
  {
    title: "Safety before everything",
    description: "Every recommendation begins with medical suitability, clear risk discussion and careful planning.",
  },
  {
    title: "Results that still look like you",
    description: "The aim is proportion and harmony — refining a concern while respecting the features that make you individual.",
  },
  {
    title: "Care shaped around the patient",
    description: "Anatomy, priorities, lifestyle and recovery needs all inform a genuinely personalised treatment plan.",
  },
  {
    title: "Honest, ethical guidance",
    description: "Consultations focus on realistic expectations, appropriate options and the freedom to make an informed decision.",
  },
] as const;

const CLINIC_FEATURES = [
  "Advanced surgical equipment",
  "Sterile clinical environment",
  "Experienced medical team",
  "Planned postoperative follow-up",
  "Clear emergency protocols",
  "Private consultation spaces",
] as const;

export function IvoryAbout() {
  return (
    <IvoryShell>
      <AboutInner />
    </IvoryShell>
  );
}

function AboutInner() {
  const { openBook } = useBook();

  return (
    <main id="main-content">
      <div className="home-band-white">
        <div className="home-wrap pt-3 pb-6 sm:pt-4 sm:pb-8 lg:pt-6 lg:pb-10">
          <section className="neo rounded-[24px] p-5 sm:rounded-[40px] sm:p-7 lg:px-12 lg:py-9">
            <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-10">
              <div className="flex flex-col justify-center">
                <div className="home-kicker mb-4 font-ui sm:mb-5">About Dr. Sunita Aesthetics</div>
                <h1 className="home-display mb-4 text-[clamp(36px,8.4vw,82px)] font-extralight leading-[0.96] tracking-[-0.03em] text-black sm:mb-5">
                  Precision in practice.
                  <br />
                  <em className="font-light italic text-maroon">Compassion in every conversation.</em>
                </h1>
                <p className="home-display mb-6 max-w-[470px] text-[16px] font-light leading-[1.62] text-pretty text-black sm:mb-7 sm:text-[19px]">
                  Dr. Sunita Ghanta is a plastic, aesthetic and reconstructive surgeon in Visakhapatnam.
                  Her work brings together surgical judgement, an eye for proportion and a thoughtful
                  understanding of what each patient hopes to change.
                </p>
                <div className="flex flex-col items-stretch gap-3.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[22px]">
                  <button type="button" onClick={openBook} className="neo-btn neo-btn-solid sm:!w-auto">
                    {BOOK_LABEL} <span className="text-[15px]">→</span>
                  </button>
                  <a
                    href="#approach"
                    className="home-text-link self-center text-center font-ui text-[12px] uppercase tracking-[0.1em] text-black sm:self-auto sm:text-[13px]"
                  >
                    Her approach
                  </a>
                </div>
              </div>
              <div className="neo neo-media relative isolate min-h-[340px] overflow-hidden rounded-[22px] bg-maroon aspect-[4/5] sm:min-h-[400px] sm:rounded-[32px] lg:aspect-auto lg:h-full lg:min-h-[460px]">
                <FillImage
                  src={HOME_IMAGES.hero}
                  alt="Dr. Sunita Ghanta, plastic and aesthetic surgeon"
                  priority
                  className="object-[center_12%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 bg-maroon/95 text-white lg:grid-cols-4">
                  {HOME_STATS.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={[
                        "px-3 py-3 sm:px-4 sm:py-4",
                        index % 2 === 1 ? "border-l border-white/20" : "",
                        index >= 2 ? "border-t border-white/20 lg:border-t-0" : "",
                        index > 0 ? "lg:border-l lg:border-white/20" : "",
                      ].join(" ")}
                    >
                      <div className="home-display text-[22px] font-light leading-none sm:text-[28px]">{stat.value}</div>
                      <div className="mt-1.5 font-ui text-[8px] uppercase leading-[1.35] tracking-[0.12em] text-white/80 sm:text-[9px] sm:tracking-[0.16em]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section id="approach" className="home-band-white py-6 sm:py-10 lg:py-16">
        <div className="home-wrap">
          <div className="neo overflow-hidden rounded-[24px] sm:rounded-[40px]">
            <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
              <div className="neo-media relative aspect-[4/5] min-h-[320px] overflow-hidden bg-maroon sm:min-h-[400px] lg:aspect-auto lg:min-h-[560px]">
                <FillImage
                  src={HOME_IMAGES.surgeon}
                  alt="Dr. Sunita Ghanta performing a facial aesthetic treatment in Visakhapatnam"
                  className="object-[center_18%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
                  <div className="font-ui text-[10px] uppercase tracking-[0.22em] text-white/75">
                    Consultant plastic surgeon
                  </div>
                  <h2 className="home-display mt-1.5 mb-0 text-[28px] font-light leading-none text-white sm:text-[36px]">
                    {HOME_COPY.surgeonName}
                  </h2>
                  <p className="mt-3 mb-0 font-ui text-[10px] uppercase tracking-[0.16em] text-white/80">
                    Visakhapatnam · Board-certified · Since 2009
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
                <div className="home-kicker font-ui">Her approach</div>
                <p className="home-display mt-4 mb-0 text-[clamp(28px,4.8vw,44px)] font-extralight italic leading-[1.12] tracking-[-0.03em] text-maroon">
                  Surgery begins with listening.
                </p>
                <ol className="mt-6 border-y border-black/10">
                  {SURGEON_CREDENTIALS.map((item, index) => (
                    <li
                      key={item.degree}
                      className="flex items-baseline justify-between gap-4 border-b border-black/10 py-3 last:border-b-0"
                    >
                      <span className="flex min-w-0 items-baseline gap-3">
                        <span className="w-6 shrink-0 font-ui text-[10px] tracking-[0.14em] text-maroon">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="home-display text-[20px] font-light text-black sm:text-[22px]">{item.degree}</span>
                      </span>
                      <span className="text-right font-ui text-[10px] uppercase tracking-[0.14em] text-black/55 sm:text-[11px]">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="home-display mt-6 mb-0 max-w-[470px] text-[16px] font-light leading-[1.7] text-pretty text-black sm:text-[17px]">
                  Consultations are unhurried and clear. Patients are guided through suitable options,
                  limitations, recovery and expected results before making a decision. Sometimes the
                  right recommendation is surgery; sometimes it is a less invasive treatment — or simply
                  more time to think.
                </p>
                <blockquote className="relative mt-7 border-l-2 border-maroon pl-5">
                  <p className="home-display m-0 text-[clamp(18px,2.6vw,26px)] font-light italic leading-[1.4] text-maroon">
                    “{HOME_COPY.surgeonQuote}”
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-band-white py-12 lg:py-20">
        <div className="home-wrap">
          <div className="mb-8 max-w-[720px] sm:mb-10">
            <div className="home-kicker mb-4 font-ui">Areas of expertise</div>
            <h2 className="home-display m-0 text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em] text-black">
              Comprehensive care, individually planned.
            </h2>
            <p className="home-display mt-4 mb-0 max-w-[470px] text-[16px] font-light leading-[1.65] text-pretty text-black">
              Treatment recommendations are tailored to the patient’s anatomy, priorities and medical suitability.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EXPERTISE.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="neo neo-press flex min-h-[220px] flex-col rounded-[22px] p-5 sm:min-h-[240px] sm:rounded-[26px] sm:p-[26px]"
              >
                <span className="font-ui text-[11px] tracking-[0.18em] text-maroon">{area.number}</span>
                <h3 className="home-display mt-6 mb-3 text-[24px] font-light leading-[1.2] text-black sm:text-[28px]">
                  {area.title}
                </h3>
                <p className="home-display mb-6 flex-1 text-[15px] font-light leading-[1.6] text-pretty text-black">
                  {area.description}
                </p>
                <span className="font-ui text-[11px] uppercase tracking-[0.14em] text-maroon">
                  Explore treatments →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-band-maroon py-12 lg:py-20">
        <div className="home-wrap">
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div className="home-on-maroon">
              <div className="home-kicker mb-4 font-ui">The practice philosophy</div>
              <blockquote className="home-display m-0 text-[clamp(28px,5vw,46px)] font-extralight italic leading-[1.18] tracking-[-0.025em]">
                “The best result should feel considered, natural and completely personal to the patient.”
              </blockquote>
              <p className="mt-6 mb-0 font-ui text-[11px] uppercase tracking-[0.18em] text-white/75">
                Dr. Sunita Ghanta
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {VALUES.map((value) => (
                <article key={value.title} className="neo rounded-[22px] p-5 sm:rounded-[26px] sm:p-6">
                  <h3 className="home-display mt-0 mb-3 text-[22px] font-light leading-[1.3] text-black">
                    {value.title}
                  </h3>
                  <p className="home-display m-0 text-[15px] font-light leading-[1.6] text-pretty text-black">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="clinic" className="home-band-maroon pb-12 lg:pb-20">
        <div className="home-wrap border-t border-white/20 pt-10 sm:pt-12 lg:pt-16">
          <div className="home-on-maroon mb-7 flex flex-col gap-4 sm:mb-[30px] sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-5">
            <div>
              <div className="home-kicker mb-3 font-ui sm:mb-4">The clinic</div>
              <h2 className="home-display m-0 text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em]">
                Private, modern care in Visakhapatnam.
              </h2>
            </div>
            <p className="home-display m-0 max-w-[330px] text-[16px] font-light leading-[1.65] text-pretty">
              Every stage — from the first conversation to follow-up — is designed to feel calm, private and well supported.
            </p>
          </div>
          <ul className="mb-6 grid gap-3 sm:mb-8 sm:grid-cols-2 lg:grid-cols-3">
            {CLINIC_FEATURES.map((item) => (
              <li
                key={item}
                className="neo flex items-center gap-3 rounded-full px-4 py-3 font-ui text-[13px] text-black sm:px-5"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-maroon" />
                {item}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {CLINIC_PHOTOS.map((photo, index) => (
              <div
                key={photo.src}
                className={[
                  "neo neo-media relative overflow-hidden rounded-[28px] sm:rounded-[34px]",
                  index === 0
                    ? "h-[260px] sm:h-[clamp(260px,26vw,340px)] lg:col-span-4"
                    : index === 1
                      ? "h-[220px] sm:h-[clamp(260px,26vw,340px)] lg:col-span-2"
                      : "h-[200px] sm:h-[clamp(200px,20vw,262px)] lg:col-span-2",
                ].join(" ")}
              >
                <FillImage src={photo.src} alt={photo.alt} />
                <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/95 px-3.5 py-1.5 font-ui text-[10px] uppercase tracking-[0.18em] text-black shadow-sm sm:bottom-4 sm:left-4 sm:px-4 sm:py-2 sm:tracking-[0.2em]">
                  {photo.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IvoryCta
        kicker="A conversation is the first step"
        title={
          <>
            Understand your options <em className="italic text-maroon">before deciding.</em>
          </>
        }
        body="Meet Dr. Sunita for an individual assessment, clear answers and a treatment plan built around you."
      />
    </main>
  );
}
