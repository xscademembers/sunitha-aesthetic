import Image from "next/image";
import { CallNowButton, GetAppointmentButton } from "@/components/BrandButtons";

export function MeetTheDoctor() {
  return (
    <section className="bg-white px-6 py-[56px] lg:px-[72px]">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="font-sans text-[20.25px] font-bold leading-[28.35px] text-maroon">
            Dr. Sunita Aesthetics
          </p>
          <h2 className="mt-1 max-w-[518px] font-serif text-[28px] leading-[1.4] text-black lg:text-[32px] lg:leading-[44.8px]">
            Plastic &amp; Aesthetic Surgery Clinic in Visakhapatnam.
          </h2>
          <p className="mt-6 max-w-[520px] font-sans text-[18px] leading-[32.4px] text-black">
            Dr. Sunita Aesthetics is a Plastic and Aesthetic clinic established by Dr. Sunita
            Ghanta, a respected plastic surgeon in Vizag with over 17 years of experience. She has
            successfully performed more than 2,450 procedures in the field of cosmetic surgery.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-[26px]">
            <GetAppointmentButton className="w-full sm:w-[203px]" />
            <CallNowButton />
          </div>
        </div>
        <div className="relative hidden h-[448px] w-full max-w-[648px] lg:block">
          <Image
            src="/images/clinic/clinic-outdoor.webp"
            alt="Dr. Sunita Aesthetics Clinic - outdoor"
            width={294}
            height={266}
            sizes="294px"
            loading="eager"
            className="absolute left-0 top-0 h-[266px] w-[294px] rounded-[11.38px] object-cover"
          />
          <Image
            src="/images/clinic/clinic-reception.webp"
            alt="Dr. Sunita Aesthetics Clinic - Indoor"
            width={505}
            height={322}
            sizes="505px"
            loading="eager"
            className="absolute left-[170px] top-[126px] z-10 h-[322px] w-[505px] rounded-[11.38px] object-cover"
          />
        </div>
        {/* Mobile: stacked images */}
        <div className="flex flex-col gap-4 lg:hidden">
          <Image
            src="/images/clinic/clinic-outdoor.webp"
            alt="Dr. Sunita Aesthetics Clinic - outdoor"
            width={294}
            height={266}
            sizes="100vw"
            loading="eager"
            className="w-full rounded-[11.38px] object-cover"
          />
          <Image
            src="/images/clinic/clinic-reception.webp"
            alt="Dr. Sunita Aesthetics Clinic - Indoor"
            width={505}
            height={322}
            sizes="100vw"
            loading="eager"
            className="w-full rounded-[11.38px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
