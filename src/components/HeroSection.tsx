import Image from "next/image";
import { AutoGallery, type AutoGalleryImage } from "@/components/AutoGallery";
import { CallNowButton, GetAppointmentButton } from "@/components/BrandButtons";
import { TestimonialSlider } from "@/components/TestimonialSlider";

export const CLINIC_IMAGES: AutoGalleryImage[] = [
  { src: "/images/clinic/clinic-outdoor.webp", alt: "Dr. Sunita Aesthetics Clinic - outdoor" },
  { src: "/images/clinic/clinic-reception.webp", alt: "Dr. Sunita Aesthetics Clinic - Indoor" },
  { src: "/images/clinic/clinic-interior-1.webp", alt: "Dr. Sunita Aesthetics Clinic interior" },
  { src: "/images/clinic/clinic-interior-2.webp", alt: "Dr. Sunita Aesthetics Clinic interior" },
  { src: "/images/clinic/clinic-interior-3.webp", alt: "Dr. Sunita Aesthetics Clinic interior" },
  { src: "/images/clinic/clinic-interior-4.webp", alt: "Dr. Sunita Aesthetics Clinic interior" },
];

const INLINE_LINKS = [
  "Upper body reduction",
  "Upper body augmentation",
  "Gynecomastia",
  "Scar revisions",
  "Rhinoplasty",
  "Post-burn reconstruction",
];

function ArtParagraph() {
  return (
    <p className="mt-6 max-w-[502px] font-sans text-[18px] leading-[32.4px] text-black">
      Dr. Sunita Ghanta is a well-known and Board certified plastic surgeon in Visakhapatnam who
      has been practicing for more than 17 years. She wears the crown of being a{"  "}versatile
      plastic surgeon who has performed a wide range of surgeries including{" "}
      {INLINE_LINKS.map((label, i) => (
        <span key={label}>
          <a href="#services" className="font-bold text-maroon">
            {label}
          </a>
          {i < INLINE_LINKS.length - 1 ? ", " : ", and more. "}
        </span>
      ))}
      Aside from having desirable dexterous surgical hands, a keen sense of body contour, a keen
      eye for finesse, the patience to understand the patient&rsquo;s woes, and the pleasant manners to
      handhold the patient during the postoperative period, she is a highly sought-after cosmetic
      plastic not only in Visakhapatnam but throughout AP &amp; TS.
    </p>
  );
}

export function HeroSection() {
  return (
    <section id="about" className="relative grid grid-cols-1 lg:grid-cols-2">
      {/* Left column — top block */}
      <div className="bg-white px-6 lg:col-start-1 lg:row-start-1 lg:pb-4 lg:pl-[88px] lg:pr-[34px]">
        <h1 className="mt-10 font-serif text-[28px] leading-[1.4] text-black lg:mt-[61px] lg:text-[32px] lg:leading-[44.6px]">
          #1 Plastic Surgeon in Vizag
        </h1>
        <p className="mt-[10px] font-sans text-[18px] font-bold leading-[25.2px] text-maroon">
          Performed 2750+ Surgeries - 17+ Years Practice.
        </p>
        <AutoGallery
          images={CLINIC_IMAGES}
          cell={129}
          gap={32}
          radius={10}
          arrows="both"
          className="mt-[28px]"
        />
        <div
          id="reviews"
          className="relative z-10 mt-[48px] hidden w-full sm:block lg:w-[952px] lg:max-w-none"
        >
          <TestimonialSlider />
        </div>
      </div>

      {/* Sticky doctor photo — on mobile it sits between the top block and the Art section */}
      <div className="mt-10 bg-hero-gray lg:mt-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <div className="lg:sticky lg:top-0">
          <Image
            src="/images/doctor-hero.webp"
            alt="Dr Sunita Ghanta - Founder of Dr. Sunita Aesthetics - Cosmetic Surgeon in Vizag"
            width={1440}
            height={1690}
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="h-auto w-full object-cover lg:h-[845px] lg:w-[720px]"
          />
        </div>
      </div>

      {/* Left column — Art of Transformation block */}
      <div className="bg-white px-6 pb-4 lg:col-start-1 lg:row-start-2 lg:pl-[88px] lg:pr-[34px]">
        <div className="mt-16 lg:mt-[105px]">
          <p className="font-sans text-[18px] font-bold leading-[25.2px] text-maroon">
            The Art of Transformation
          </p>
          <h2 className="mt-1 max-w-[507px] font-serif text-[28px] leading-[1.4] text-black lg:text-[32px] lg:leading-[44.8px]">
            Board Certified Plastic Surgeon in Vizag
          </h2>
          <ArtParagraph />
          <div className="mt-9 flex flex-col gap-3 pb-4 sm:flex-row sm:gap-[26px]">
            <GetAppointmentButton className="w-full sm:w-[203px]" />
            <CallNowButton />
          </div>
        </div>
      </div>
    </section>
  );
}
