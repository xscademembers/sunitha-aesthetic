import type { ComponentType, SVGProps } from "react";
import { CallNowButton, GetAppointmentButton } from "@/components/BrandButtons";
import {
  CareHeartIcon,
  CertifiedBadgeIcon,
  SparkGlobeIcon,
  TrendUpIcon,
} from "@/components/icons";

interface Card {
  title: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  body: string;
}

const CARDS: Card[] = [
  {
    title: "World-class plastic & cosmetic surgery in Vizag.",
    Icon: SparkGlobeIcon,
    body: "At Dr. Sunita Aesthetics, we utilize modern, state-of-the-art surgical equipment for facial, body, and other plastic and cosmetic procedures, positioning us as a leading clinic in Vizag for advanced plastic and cosmetic surgery.",
  },
  {
    title: "Board Certified Cosmetic Surgeon in Vizag.",
    Icon: CertifiedBadgeIcon,
    body: "Our key surgeon, a board-certified cosmetic surgeon, has extensive training and experience in this field. Their proficiency, skills, and dedication are evident in their commitment to maintaining high standards of patient safety and satisfaction. By choosing our clinic, you have selected a professional devoted to ensuring that your procedures are handled with the utmost care and expertise.",
  },
  {
    title: "Track record of successful surgeries.",
    Icon: TrendUpIcon,
    body: "We take great pride in our commitment to precision, safety, and excellence in every surgical procedure. Our meticulous methodology and attention to detail help us deliver quality care, striving for the best possible outcomes while maintaining a focus on patient safety.",
  },
  {
    title: "Personalised care from best cosmetic surgeon in Vizag.",
    Icon: CareHeartIcon,
    body: "Our clinic believes that personalized treatment is the cornerstone of successful cosmetic surgery. Our surgeon takes the time to understand your goals, concerns, and fears, creating a custom plan tailored to your unique needs. This personalized approach ensures that care is delivered with the highest attention to detail, in a supportive and comfortable environment.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white px-6 py-[64px] lg:px-[72px]">
      <div className="grid gap-16 lg:grid-cols-[410px_1fr]">
        <div>
          <h2 className="font-serif text-[28px] font-bold leading-[1.4] text-maroon lg:text-[32px] lg:leading-[44.8px]">
            Why Choose us?
          </h2>
          <p className="mt-[18px] max-w-[409px] font-sans text-[18px] leading-[28.8px] text-black">
            Undergoing cosmetic enhancement is a significant decision, and we understand the
            importance of achieving natural results with a strong commitment to safety. Our goal is
            to ensure that your experience with us is both comfortable and fulfilling.
          </p>
          <div className="mt-[22px] flex flex-col gap-3 sm:flex-row">
            <GetAppointmentButton withArrow className="w-full sm:w-[218px]" />
            <CallNowButton />
          </div>
        </div>
        <div className="ml-auto grid w-full max-w-[819px] gap-[19px] sm:grid-cols-2">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="card-lift relative flex min-h-[280px] flex-col justify-end rounded-[20px] bg-maroon p-6 shadow-[0_1px_20px_rgba(0,0,0,0.08)] sm:h-[316px]"
            >
              <div className="absolute right-6 top-6 flex size-12 items-center justify-center rounded-2xl bg-white/15">
                <c.Icon className="size-7 text-white" />
              </div>
              <h3 className="font-marcellus text-[20px] leading-[30px] text-white">{c.title}</h3>
              <p className="mt-[10px] line-clamp-4 font-sans text-[15px] leading-[21px] text-light-text">
                {c.body}
              </p>
              <a
                href="/contact"
                className="mt-3 font-sans text-[14px] font-medium text-white underline underline-offset-2 transition-colors hover:text-white/80"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
