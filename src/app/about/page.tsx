import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppointmentPopup } from "@/components/AppointmentPopup";
import { CallNowButton, GetAppointmentButton } from "@/components/BrandButtons";
import { ContactSection } from "@/components/ContactSection";
import { Disclaimer } from "@/components/Disclaimer";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About Dr. Sunita Ghanta | Plastic Surgeon in Visakhapatnam",
  description:
    "Meet Dr. Sunita Ghanta, an experienced plastic and aesthetic surgeon in Visakhapatnam, and learn about her qualifications, approach and clinic.",
  openGraph: {
    title: "Meet Dr. Sunita Ghanta",
    description:
      "Plastic, aesthetic and reconstructive care guided by precision, honest advice and natural-looking results.",
    images: [{ url: "/images/about/dr-sunita-ghanta.jpg" }],
  },
};

const QUALIFICATIONS = [
  {
    degree: "MBBS",
    label: "Medical foundation",
    description: "Bachelor of Medicine and Bachelor of Surgery.",
  },
  {
    degree: "DNB",
    label: "General surgery",
    description: "Diplomate of National Board training in General Surgery.",
  },
  {
    degree: "MCh",
    label: "Plastic surgery",
    description: "Advanced specialisation in Plastic and Reconstructive Surgery.",
  },
];

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
];

const VALUES = [
  {
    title: "Safety before everything",
    description:
      "Every recommendation begins with medical suitability, clear risk discussion and careful planning.",
  },
  {
    title: "Results that still look like you",
    description:
      "The aim is proportion and harmony—refining a concern while respecting the features that make you individual.",
  },
  {
    title: "Care shaped around the patient",
    description:
      "Anatomy, priorities, lifestyle and recovery needs all inform a genuinely personalised treatment plan.",
  },
  {
    title: "Honest, ethical guidance",
    description:
      "Consultations focus on realistic expectations, appropriate options and the freedom to make an informed decision.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-white px-6 py-16 lg:px-[72px] lg:py-24">
          <div className="pointer-events-none absolute -right-28 -top-32 size-[480px] rounded-full bg-maroon/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
            <div>
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-maroon">
                About Dr. Sunita Aesthetics
              </p>
              <h1 className="mt-5 max-w-[760px] font-serif text-[43px] leading-[1.13] text-black sm:text-[58px] lg:text-[70px]">
                Precision in practice. Compassion in every conversation.
              </h1>
              <p className="mt-7 max-w-[710px] font-sans text-[18px] leading-8 text-black lg:text-[20px]">
                Dr. Sunita Ghanta is a plastic, aesthetic and reconstructive surgeon in
                Visakhapatnam. Her work brings together surgical judgement, an eye for proportion
                and a thoughtful understanding of what each patient hopes to change.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-5">
                <GetAppointmentButton className="w-full sm:w-[203px]" />
                <CallNowButton />
              </div>
              <dl className="mt-10 grid max-w-[650px] grid-cols-2 gap-5 border-t border-maroon/20 pt-7 sm:grid-cols-3">
                <div>
                  <dt className="font-serif text-[34px] text-maroon">17+</dt>
                  <dd className="mt-1 font-sans text-[12px] uppercase tracking-[0.12em] text-black">
                    Years of experience
                  </dd>
                </div>
                <div>
                  <dt className="font-serif text-[34px] text-maroon">2,450+</dt>
                  <dd className="mt-1 font-sans text-[12px] uppercase tracking-[0.12em] text-black">
                    Procedures performed
                  </dd>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <dt className="font-serif text-[25px] leading-[1.35] text-maroon">MBBS, DNB, MCh</dt>
                  <dd className="mt-1 font-sans text-[12px] uppercase tracking-[0.12em] text-black">
                    Surgical qualifications
                  </dd>
                </div>
              </dl>
            </div>

            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="absolute -bottom-5 -left-5 h-[80%] w-[72%] rounded-[32px] bg-maroon/15" />
              <div className="relative aspect-[2/3] overflow-hidden rounded-[32px] bg-white shadow-[0_35px_70px_-35px_rgba(161,83,78,0.6)]">
                <Image
                  src="/images/about/dr-sunita-ghanta.jpg"
                  alt="Dr. Sunita Ghanta, plastic and aesthetic surgeon"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-4 rounded-[18px] border border-black/5 bg-white px-6 py-5 shadow-xl sm:right-8">
                <p className="font-serif text-[21px] text-black">Dr. Sunita Ghanta</p>
                <p className="mt-1 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-maroon">
                  Plastic &amp; aesthetic surgeon
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-[72px] lg:py-28">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-maroon">
                Her approach
              </p>
              <h2 className="mt-4 font-serif text-[36px] leading-[1.26] text-black sm:text-[46px]">
                Surgery begins with listening
              </h2>
            </div>
            <div className="space-y-6 font-sans text-[18px] leading-[1.85] text-black">
              <p>
                For Dr. Sunita, a good outcome is not defined by a procedure alone. It begins with
                understanding why a concern matters to the patient, what a natural result means to
                them and how treatment can fit safely into their life.
              </p>
              <p>
                Consultations are designed to be unhurried and clear. Patients are guided through
                suitable options, limitations, recovery and expected results before making a
                decision. Sometimes the right recommendation is surgery; sometimes it is a less
                invasive treatment—or simply more time to think.
              </p>
              <p>
                This measured approach has shaped her practice across aesthetic and reconstructive
                care: combine technical discipline with empathy, and pursue results that feel
                balanced, personal and believable.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-[72px] lg:py-24">
          <div className="mx-auto max-w-[1180px]">
            <div className="text-center">
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-maroon">
                Education &amp; training
              </p>
              <h2 className="mt-4 font-serif text-[36px] leading-[1.25] text-black sm:text-[46px]">
                A strong surgical foundation
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {QUALIFICATIONS.map((qualification) => (
                <article
                  key={qualification.degree}
                  className="rounded-[24px] border border-black/10 bg-white p-7 shadow-[0_18px_40px_-32px_rgba(0,0,0,0.45)] sm:p-9"
                >
                  <p className="font-serif text-[44px] text-maroon">{qualification.degree}</p>
                  <p className="mt-3 font-sans text-[12px] font-bold uppercase tracking-[0.15em] text-black">
                    {qualification.label}
                  </p>
                  <p className="mt-5 font-sans text-[16px] leading-7 text-black">
                    {qualification.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-[72px] lg:py-28">
          <div className="mx-auto max-w-[1320px]">
            <div className="max-w-[760px]">
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-maroon">
                Areas of expertise
              </p>
              <h2 className="mt-4 font-serif text-[36px] leading-[1.25] text-black sm:text-[48px]">
                Comprehensive care, individually planned
              </h2>
              <p className="mt-5 font-sans text-[17px] leading-8 text-black">
                Treatment recommendations are tailored to the patient&rsquo;s anatomy, priorities and
                medical suitability.
              </p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-[26px] border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">
              {EXPERTISE.map((area) => (
                <Link
                  key={area.title}
                  href={area.href}
                  className="group min-h-[270px] bg-white p-7 transition-colors duration-300 hover:bg-maroon/5 sm:p-9"
                >
                  <span className="font-serif text-[34px] text-maroon/30">{area.number}</span>
                  <h3 className="mt-7 font-serif text-[27px] text-black">{area.title}</h3>
                  <p className="mt-4 font-sans text-[15px] leading-7 text-black">
                    {area.description}
                  </p>
                  <span className="mt-7 inline-flex font-sans text-[12px] font-bold uppercase tracking-[0.13em] text-maroon">
                    Explore treatments <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-maroon px-6 py-20 text-white lg:px-[72px] lg:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="font-sans text-[12px] font-bold uppercase tracking-[0.22em] text-white/70">
                The practice philosophy
              </p>
              <blockquote className="mt-5 font-serif text-[32px] leading-[1.45] sm:text-[42px]">
                “The best result should feel considered, natural and completely personal to the
                patient.”
              </blockquote>
              <p className="mt-6 font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-white/70">
                Dr. Sunita Ghanta
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {VALUES.map((value) => (
                <article
                  key={value.title}
                  className="rounded-[22px] border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-7"
                >
                  <span className="block size-2 rounded-full bg-white" />
                  <h3 className="mt-5 font-serif text-[23px] leading-[1.35]">{value.title}</h3>
                  <p className="mt-3 font-sans text-[15px] leading-7 text-white/75">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-[72px] lg:py-28">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid items-end gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-maroon">
                  The clinic
                </p>
                <h2 className="mt-4 font-serif text-[36px] leading-[1.25] text-black sm:text-[48px]">
                  Private, modern care in Visakhapatnam
                </h2>
                <p className="mt-6 font-sans text-[17px] leading-8 text-black">
                  Dr. Sunita Aesthetics is designed to make every stage—from the first conversation
                  to follow-up—feel calm, private and well supported. The clinic combines modern
                  equipment with rigorous hygiene, trained staff and structured postoperative care.
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Advanced surgical equipment",
                    "Sterile clinical environment",
                    "Experienced medical team",
                    "Planned postoperative follow-up",
                    "Clear emergency protocols",
                    "Private consultation spaces",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 font-sans text-[14px] leading-6 text-black">
                      <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-maroon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative col-span-2 aspect-[16/8] overflow-hidden rounded-[24px] bg-white">
                  <Image
                    src="/images/clinic/clinic-reception.webp"
                    alt="Reception at Dr. Sunita Aesthetics"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-[24px] bg-white">
                  <Image
                    src="/images/clinic/clinic-interior-2.webp"
                    alt="Consultation room at Dr. Sunita Aesthetics"
                    fill
                    sizes="(max-width: 1024px) 50vw, 28vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-[24px] bg-white">
                  <Image
                    src="/images/clinic/clinic-outdoor.webp"
                    alt="Dr. Sunita Aesthetics clinic exterior"
                    fill
                    sizes="(max-width: 1024px) 50vw, 28vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 text-center lg:px-[72px]">
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-maroon">
            A conversation is the first step
          </p>
          <h2 className="mx-auto mt-4 max-w-[820px] font-serif text-[36px] leading-[1.28] text-black sm:text-[48px]">
            Understand your options before deciding what comes next
          </h2>
          <p className="mx-auto mt-5 max-w-[690px] font-sans text-[17px] leading-8 text-black">
            Meet Dr. Sunita for an individual assessment, clear answers and a treatment plan built
            around you.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-5">
            <GetAppointmentButton className="w-full sm:w-[203px]" />
            <CallNowButton />
          </div>
        </section>

        <ContactSection />
        <Disclaimer />
      </main>
      <SiteFooter />
      <AppointmentPopup />
    </>
  );
}
